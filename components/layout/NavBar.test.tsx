import { render, screen, fireEvent, act, within } from '@testing-library/react'
import { NavBar } from './NavBar'
import { NAV_LABELS, NAV_LINKS, SECTION_IDS } from '@/lib/constants'
import userEvent from '@testing-library/user-event'

// Mock IntersectionObserver — not available in jsdom
let observerCallback: IntersectionObserverCallback
global.IntersectionObserver = jest.fn().mockImplementation((cb) => {
  observerCallback = cb
  return { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
})

// NavBar lives in the shared layout, so tests switch the current page here
let mockPathname = '/'
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }))

describe('NavBar', () => {
  beforeEach(() => {
    mockPathname = '/'
  })

  it('marks the intersecting section link as aria-current', () => {
    render(<NavBar />)
    // Simulate "services" section entering viewport
    act(() => {
      observerCallback([{ isIntersecting: true, target: { id: SECTION_IDS.services } }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
    })
    // only the first match (desktop or mobile) — both should reflect state
    const servicesLink = screen.getAllByRole('link', { name: 'Services' })[0]
    expect(servicesLink).toHaveAttribute('href', '#services')
    expect(servicesLink).toHaveAttribute('aria-current', 'page')
  })

  it('only one link is aria-current at a time', () => {
    render(<NavBar />)
    act(() => {
      observerCallback([{ isIntersecting: true, target: { id: SECTION_IDS.about } }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
    })
    // aria-hidden drawer keeps mobile links out of the accessibility tree
    const currentLinks = screen.queryAllByRole('link', { current: 'page' })
    expect(currentLinks.length).toBe(1)
  })

  it('renders a nav landmark', () => {
    render(<NavBar />)
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
  })

  it('shows Services · Work · About · Contact in that order', () => {
    render(<NavBar />)
    const primary = screen.getByRole('navigation', { name: /primary navigation/i })
    const labels = within(primary).getAllByRole('listitem').map((li) => li.textContent)
    expect(labels).toEqual(['Services', 'Work', 'About', 'Contact'])
  })

  it('renders all section links from NAV_LINKS', () => {
    render(<NavBar />)
    NAV_LINKS.forEach((key) => {
      // desktop links are in DOM (hidden md:flex — still in DOM)
      expect(screen.getAllByRole('link', { name: NAV_LABELS[key] }).length).toBeGreaterThan(0)
    })
  })

  it('each section link has correct href', () => {
    render(<NavBar />)
    NAV_LINKS.forEach((key) => {
      const links = screen.getAllByRole('link', { name: NAV_LABELS[key] })
      links.forEach((link) => {
        expect(link).toHaveAttribute('href', `#${SECTION_IDS[key]}`)
      })
    })
  })

  it('links back to the home page sections from other pages', () => {
    mockPathname = '/work/dlrg-24h-schwimmen'
    render(<NavBar />)
    NAV_LINKS.forEach((key) => {
      screen.getAllByRole('link', { name: NAV_LABELS[key] }).forEach((link) => {
        expect(link).toHaveAttribute('href', `/#${SECTION_IDS[key]}`)
      })
    })
  })

  it('clears the active link when the page changes', () => {
    const { rerender } = render(<NavBar />)
    act(() => {
      observerCallback([{ isIntersecting: true, target: { id: SECTION_IDS.services } }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
    })
    expect(screen.getAllByRole('link', { name: 'Services' })[0]).toHaveAttribute('aria-current', 'page')
    mockPathname = '/work/dlrg-24h-schwimmen'
    rerender(<NavBar />)
    screen.getAllByRole('link', { name: 'Services' }).forEach((link) => {
      expect(link).not.toHaveAttribute('aria-current')
    })
  })

  it('re-activates scroll-spy after navigating back to the home page', () => {
    mockPathname = '/work/dlrg-24h-schwimmen'
    const { rerender } = render(<NavBar />)

    // The home page sections only exist after navigating to /
    const services = document.createElement('section')
    services.id = SECTION_IDS.services
    document.body.appendChild(services)
    const observerMock = global.IntersectionObserver as jest.Mock
    const observersBefore = observerMock.mock.results.length

    mockPathname = '/'
    rerender(<NavBar />)
    const observed = observerMock.mock.results.slice(observersBefore).flatMap((r) => r.value.observe.mock.calls.map((c: unknown[]) => c[0]))
    expect(observed).toContain(services)

    act(() => {
      observerCallback([{ isIntersecting: true, target: services }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
    })
    expect(screen.getAllByRole('link', { name: 'Services' })[0]).toHaveAttribute('aria-current', 'page')
    services.remove()
  })

  it('hamburger button opens the mobile drawer', () => {
    render(<NavBar />)
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    expect(hamburger).toBeInTheDocument()
    fireEvent.click(hamburger)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
  })

  it('closes drawer on Escape and returns focus to hamburger', () => {
    render(<NavBar />)
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(hamburger)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument()
    expect(document.activeElement).toBe(hamburger)
  })

  it('closes drawer when clicking outside (backdrop)', () => {
    render(<NavBar />)
    fireEvent.click(screen.getByRole('button', { name: /open navigation menu/i }))
    const backdrop = document.querySelector('[aria-hidden="true"]') as Element
    fireEvent.click(backdrop)
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument()
  })

  it('closes drawer and returns focus when a nav link is tapped', () => {
    render(<NavBar />)
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    fireEvent.click(hamburger)
    const drawer = screen.getByRole('dialog', { name: /navigation menu/i })
    const firstLink = within(drawer).getAllByRole('link')[0]
    fireEvent.click(firstLink)
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument()
    expect(document.activeElement).toBe(hamburger)
  })

  it('renders a QR code button in the desktop nav', () => {
    render(<NavBar />)
    const qrButtons = screen.getAllByRole('button', { name: /show qr code/i })
    expect(qrButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('clicking QR button opens the QR modal', async () => {
    render(<NavBar />)
    const qrButton = screen.getAllByRole('button', { name: /show qr code/i })[0]
    await userEvent.click(qrButton)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
