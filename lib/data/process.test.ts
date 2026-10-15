import { whyMeContent } from "./process"
import { projects } from "./projects";

describe('whyMeContent', () => {
    it('proof links point at the real case study URLs', () => {
        const proof = whyMeContent.points.find(point => point.links)!;
        const caseStudyUrl = (id: string) => projects.find(project => project.id === id)?.caseStudyUrl;

        expect(proof.links!.map(link => link.href)).toEqual([
            caseStudyUrl('dlrg-24h-schwimmen'),
            caseStudyUrl('vn-photographer-portfolio-page'),
        ])
    })
})