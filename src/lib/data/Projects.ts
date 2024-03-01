import type { ProjectData } from '$lib/types/ProjectData'

export const Projects: ProjectData[] = [
    {
        name: 'Dog.App',
        description:
            'Worked in a team of 8 developers, over the course of a single sprint, to create a web application to display information about different dog breeds from a MySQL database & filter them by their associated temperaments. Created unit-tested & fully documented object-orientated functionality in PHP. Implemented namespacing, autoloading & the hydrator design pattern.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/iO-Academy/2021-march-fetch',
            },
            {
                displayName: 'Live',
                href: 'https://dev.io-academy.uk/projects/2021-march/fetch/',
            },
        ],
        techStack: [
            {
                technology: 'PHP',
                example: 'https://github.com/iO-Academy/2021-march-fetch/pull/21/files',
            },
            {
                technology: 'MySQL',
                example: 'https://github.com/iO-Academy/2021-march-fetch/pull/17/files',
            },
            {
                technology: 'HTML',
                example:
                    'https://github.com/iO-Academy/2021-march-fetch/pull/11/files?file-filters%5B%5D=.php#diff-7413d6453f901e939bbd840c8f0d1c7b20c2ca0e7f71741e4e07c6cf036f16c0',
            },
            {
                technology: 'CSS',
                example:
                    'https://github.com/iO-Academy/2021-march-fetch/pull/11/files?file-filters%5B%5D=.css#diff-da08da0da5bfd24f80d8d86681fca579c0cbdc9f64bbe06251878d7762815cce',
            },
        ],
    },
    {
        name: 'Aptitude.Test',
        description:
            'Worked in one of two parallel agile scrum teams on a legacy TypeScript, SCSS & Bootstrap application. Worked to identify & fix bugs in an existing codebase as well as creating new features in a fashion that complements the existing functionality. Utilised Handlebars to create & dynamically populate templates. Used Postman to assist in the workflow when interacting with a private API.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/iO-Academy/aptitude-test',
            },
            {
                displayName: 'Live',
                href: 'https://aptitude-test.dev.io-academy.uk/',
            },
        ],
        techStack: [
            {
                technology: 'TypeScript',
                example:
                    'https://github.com/iO-Academy/aptitude-test/pull/358/files?file-filters%5B%5D=.ts',
            },
            {
                technology: 'SCSS',
            },
            {
                technology: 'HTML',
                example:
                    'https://github.com/iO-Academy/aptitude-test/pull/358/files?file-filters%5B%5D=.hbs&file-filters%5B%5D=.html',
            },
            {
                technology: 'handlebars',
                example:
                    'https://github.com/iO-Academy/aptitude-test/pull/358/files?file-filters%5B%5D=.hbs',
            },
            {
                technology: 'bootstrap',
                example:
                    'https://github.com/iO-Academy/aptitude-test/pull/358/files?file-filters%5B%5D=.hbs&file-filters%5B%5D=.html',
            },
            {
                technology: 'gulp',
            },
        ],
    },
    {
        name: 'Collection.App',
        description:
            'Created a PHP application to store user inputted item information in a database, with a data structure of my design. Displayed the stored data using HTML & CSS. PHP validation functions were unit tested using PHPUnit & fully documented. Implemented accessible HTML to offer functionality to as many people as possible. Code reviewed peers doing similar projects along the way. Created the database using MySQL & used Docker to run my local development server.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/MattW-R/Board-Game-Collection',
            },
            {
                displayName: 'Live',
                href: 'https://2021-matthewwr.dev.io-academy.uk/CollectionApp/',
            },
        ],
        techStack: [
            {
                technology: 'PHP',
                example:
                    'https://github.com/MattW-R/Board-Game-Collection/blob/main/functions.php',
            },
            {
                technology: 'MySQL',
                example:
                    'https://github.com/MattW-R/Board-Game-Collection/blob/main/functions.php',
            },
            {
                technology: 'HTML',
                example:
                    'https://github.com/MattW-R/Board-Game-Collection/blob/main/index.php',
            },
            {
                technology: 'CSS',
                example:
                    'https://github.com/MattW-R/Board-Game-Collection/blob/main/styles.css',
            },
            {
                technology: 'Docker',
            },
        ],
    },
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
