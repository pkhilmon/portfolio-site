import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "./ContactForm"

const mockFetch = jest.fn()
global.fetch = mockFetch

beforeEach(() => {
    mockFetch.mockReset()
})

describe('ContactForm', () => {
    it('renders name, email, message fields with labels', () => {
        render(<ContactForm />)
        expect(screen.getByLabelText('Name')).toBeInTheDocument()
        expect(screen.getByLabelText('Email')).toBeInTheDocument()
        expect(screen.getByLabelText('Message')).toBeInTheDocument()
    })

    it('renders a submit button labelled Send', () => {
        render(<ContactForm />)
        expect(screen.getByRole('button', { name: 'Send'})).toBeInTheDocument()
    }) 

    it('honeypot field is present in DOM', () => {
        render(<ContactForm />)
        const honeypot = document.querySelector('input[name="_gotcha"]')
        expect(honeypot).toBeInTheDocument()
    })

    it('shows success message after successful submission', async () => {
        mockFetch.mockResolvedValueOnce({ok: true})
        render(<ContactForm />)
        await userEvent.type(screen.getByLabelText('Name'), 'Test User')
        await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
        await userEvent.type(screen.getByLabelText('Message'), 'Hello!')
        await userEvent.click(screen.getByRole('button', { name: 'Send'}))
        await waitFor(() => {
            expect(screen.getByText(/Message sent/)).toBeInTheDocument()
        })
    })

    it('shows error banner after failed submission', async () => {
        mockFetch.mockResolvedValueOnce({ok: false, status: 500})
        render(<ContactForm />)
        await userEvent.type(screen.getByLabelText('Name'), 'Test User')
        await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
        await userEvent.type(screen.getByLabelText('Message'), 'Hello!')
        await userEvent.click(screen.getByRole('button', { name: 'Send'}))
        await waitFor(() => {
            expect(screen.getByRole('alert')).toBeInTheDocument()
        })
    })

    it('shows error banner on network failure',  async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'))
        render(<ContactForm />)
        await userEvent.type(screen.getByLabelText('Name'), 'Test User')
        await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
        await userEvent.type(screen.getByLabelText('Message'), 'Hello!')
        await userEvent.click(screen.getByRole('button', { name: 'Send'}))
        await waitFor(() => {
            expect(screen.getByRole('alert')).toBeInTheDocument()
        })
    })

    it('disables the submit button while loading', async () => {
        let resolveFetch!: (v:unknown) => void
        mockFetch.mockReturnValueOnce(new Promise(res => {resolveFetch = res}))
        render(<ContactForm />)
        await userEvent.type(screen.getByLabelText('Name'), 'Test User')
        await userEvent.type(screen.getByLabelText('Email'), 'test@example.com')
        await userEvent.type(screen.getByLabelText('Message'), 'Hello!')
        await userEvent.click(screen.getByRole('button', { name: 'Send'}))
        expect(screen.getByRole('button', {name:/Sending/})).toBeDisabled()
        resolveFetch({ok: true}) // cleanup - let the promise resolve
    })
})