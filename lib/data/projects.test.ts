import fs from 'fs'
import path from 'path'
import { projects } from './projects'

// Hand-edited list: nothing else validates required fields or image paths
describe('projects data', () => {
    it('has unique ids', () => {
        expect(new Set(projects.map(p => p.id)).size).toBe(projects.length)
    })

    it.each(projects.map(p => [p.id, p.imageUrl]))('%s: image exists in public/', (_id, imageUrl) => {
        expect(fs.existsSync(path.join(__dirname, '../../public', imageUrl))).toBe(true)
    })

    it.each(projects.map(p => [p.id, p] as const))('%s: has alt text, a stack and http(s) links', (_id, project) => {
        expect(project.imageAlt.trim()).not.toBe('')
        expect(project.stack.length).toBeGreaterThan(0)
        for (const url of [project.liveUrl, project.gitUrl].filter(Boolean)) {
            expect(url).toMatch(/^https?:\/\//)
        }
    })
})
