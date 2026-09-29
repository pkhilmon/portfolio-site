import '@testing-library/jest-dom'
import { TextEncoder } from 'util'

// jsdom lacks TextEncoder; react-qr-code needs it to encode the QR payload
Object.assign(global, { TextEncoder })

process.env.CONTACT_EMAIL = 'test@example.com'
process.env.NEXT_PUBLIC_CONTACT_EMAIL = 'test@example.com'
