import { render, screen, fireEvent, act, within } from '@testing-library/react'
import { NavBar } from './NavBar'
import { NAV_LINKS, SECTION_IDS } from '@/lib/constants'

// Mock IntersectionObserver — not available in jsdom
let observerCallback: IntersectionObserverCallback
global.IntersectionObserver = jest.fn().mockImplementation((cb) => {
  observerCallback = cb
  return { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() }
})

describe('NavBar', () => {
  // it('marks the intersecting section link as aria-current', () => {
  //   render(<NavBar />)
  //   // Simulate "skills" section entering viewport                                                     
  //   act(() => {
  //     observerCallback([{ isIntersecting: true, target: { id: SECTION_IDS.skills } }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
  //   })
  //   // only the first match (desktop or mobile) — both should reflect state
  //   expect(screen.getAllByRole('link', { name: /skills/i })[0]).toHaveAttribute('aria-current', 'page')
  // })

  // it('only one link is aria-current at a time', () => {
  //   render(<NavBar />)
  //   act(() => {
  //     observerCallback([{ isIntersecting: true, target: { id: SECTION_IDS.about } }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver)
  //   })
  //   // aria-hidden drawer keeps mobile links out of the accessibility tree
  //   const currentLinks = screen.queryAllByRole('link', { current: 'page' })
  //   expect(currentLinks.length).toBe(1)
  // })

  it('renders a nav landmark', () => {
    render(<NavBar />)
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument()
  })

  // it('renders all section links from NAV_LINKS', () => {
  //   render(<NavBar />)
  //   NAV_LINKS.forEach((key) => {
  //     const id = SECTION_IDS[key]
  //     // desktop links are in DOM (hidden md:flex — still in DOM)
  //     expect(screen.getAllByRole('link', { name: new RegExp(id, 'i') }).length).toBeGreaterThan(0)
  //   })
  // })

  // it('each section link has correct href', () => {
  //   render(<NavBar />)
  //   NAV_LINKS.forEach((key) => {
  //     const id = SECTION_IDS[key]
  //     const links = screen.getAllByRole('link', { name: new RegExp(`^${id}$`, 'i') })
  //     links.forEach((link) => {
  //       expect(link).toHaveAttribute('href', `#${id}`)
  //     })
  //   })
  // })

  it('renders CV download link with download attribute', () => {
    render(<NavBar />)
    // hidden: true to include the mobile drawer CV link (aria-hidden when closed)
    const cvLinks = screen.getAllByRole('link', { name: /^cv$|download cv/i, hidden: true })
    expect(cvLinks.length).toBe(2)
    cvLinks.forEach((link) => {
      expect(link).toHaveAttribute('download')
      expect(link).toHaveAttribute('href', '/files/CV-Pavlo-Khilmon-en.pdf')
    })
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
})
