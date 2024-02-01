import type { ProjectData } from '$lib/types/ProjectData'

export const Projects: ProjectData[] = [
    {
        name: 'Javascript.Game',
        description:
            'Led a team of my peers, as the scrum master, in creating a game using JavaScript, HTML & CSS. Worked collaboratively in an agile scrum team, using Git for version control. Practiced pair programming & detailed code reviews in the process. Guided my team in presenting the work in a sprint review & organised/carried out a sprint retrospective for my team.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/iO-Academy/2021-march-JsAnagrams',
            },
            {
                displayName: 'Live',
                href: 'https://dev.io-academy.uk/projects/2021-march/scrumble/',
            },
        ],
        techStack: [
            {
                technology: 'JavaScript',
                example:
                    'https://github.com/iO-Academy/2021-march-JsAnagrams/pull/18/files?file-filters%5B%5D=.js',
            },
            {
                technology: 'HTML',
                example:
                    'https://github.com/iO-Academy/2021-march-JsAnagrams/pull/28/files?file-filters%5B%5D=.html',
            },
            {
                technology: 'CSS',
                example:
                    'https://github.com/iO-Academy/2021-march-JsAnagrams/pull/18/files?file-filters%5B%5D=.css',
            },
        ],
    },
]
