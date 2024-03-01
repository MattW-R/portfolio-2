import type { ProjectData } from '$lib/types/ProjectData'

export const Projects: ProjectData[] = [
    {
        name: 'Previous.Portfolio',
        description:
            "Created previous portfolio website to display projects I have worked on by myself/as part of a team. Used SCSS to style the HTML5 structure & TypeScript to add specific functionality including a 'scroll anchor' system & dynamic cosmetic effects. Wrote a gulp 'watch' script to automatically compile the TypeScript & SCSS in the background during development. Implemented JavaScript/CSS/HTML minification, ES5 transpilation & other processes within a gulp 'build' script.",
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/MattW-R/Portfolio',
            },
            {
                displayName: 'Live',
                href: 'https://2021-matthewwr.dev.io-academy.uk/Portfolio/',
            },
        ],
        techStack: [
            {
                technology: 'TypeScript',
                example: 'https://github.com/MattW-R/Portfolio/tree/main/app/ts',
            },
            {
                technology: 'SCSS',
                example: 'https://github.com/MattW-R/Portfolio/tree/main/app/scss',
            },
            {
                technology: 'HTML',
                example: 'https://github.com/MattW-R/Portfolio/blob/main/app/index.html',
            },
            {
                technology: 'gulp',
                example: 'https://github.com/MattW-R/Portfolio/blob/main/gulpfile.js',
            },
            {
                technology: 'npm',
            },
        ],
    },
    {
        name: 'Parking.App',
        description:
            'Helped design & build the foundations of a parking app as part of an agile team of four developers, using Slack, Jira & Zoom to collaborate. Employed Node.js & Express to create a documented, RESTful back end, following the controller-service design pattern. Proposed a data structure & implemented it using MongoDB. Built functions to validate & sanitise user inputs, unit tested this built functionality using Jest. Used React to create a component-based front end architecture that consumed the back-end API. Implemented the proposed design accurately using InVision.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/MattW-R/2021-march-parkingApp',
            },
            {
                displayName: 'Live',
                href: 'https://2021-mar-parkingapp-fe.dev.io-academy.uk/',
            },
        ],
        techStack: [
            {
                technology: 'React',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/client/src/Component/BookCarPark/BookCarPark.js',
            },
            {
                technology: 'Nodejs',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/api/index.js',
            },
            {
                technology: 'express',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/api/Config/Routes.js',
            },
            {
                technology: 'MongoDB',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/api/Services/CarParkService.js',
            },
            {
                technology: 'jest',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/api/__tests__/durationValidator.test.js',
            },
            {
                technology: 'JavaScript',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/client/src/Component/BookingSuccess/BookingSuccess.js',
            },
            {
                technology: 'HTML',
            },
            {
                technology: 'CSS',
                example:
                    'https://github.com/MattW-R/2021-march-parkingApp/blob/main/client/src/Component/BookCarPark/BookCarPark.css',
            },
            {
                technology: 'npm',
            },
        ],
    },
    {
        name: 'MVC.Portal',
        description:
            'Worked in one of two parallel agile development teams on a legacy PHP & JavaScript application Worked within an MVC architectural pattern & used the Slim framework. Created new features in a manner that complemented the existing feature implementation with the assistance of pair-programming & code-reviews. Utilised a CI server to ensure all unit tests passed & any coding standards were matched before task branches were able to be merged.',
        links: [
            {
                displayName: 'GitHub',
                href: 'https://github.com/iO-Academy/AcademyPortal',
            },
            {
                displayName: 'Live',
                href: 'https://portal.dev.io-academy.uk/',
            },
        ],
        techStack: [
            {
                technology: 'PHP',
                example:
                    'https://github.com/iO-Academy/AcademyPortal/pull/344/files?file-filters%5B%5D=.php',
            },
            {
                technology: 'MySQL',
                example:
                    'https://github.com/iO-Academy/AcademyPortal/pull/359/files?file-filters%5B%5D=.php#diff-a3e5fce0d9d6587787d53ac926acd537e71566cb8ed8f39834837959d007ebf4',
            },
            {
                technology: 'JavaScript',
                example:
                    'https://github.com/iO-Academy/AcademyPortal/pull/359/files?file-filters%5B%5D=.js',
            },
            {
                technology: 'HTML',
                example:
                    'https://github.com/iO-Academy/AcademyPortal/pull/344/files?file-filters%5B%5D=.phtml#diff-71b3aa5b92fc0a3762e8596845754d6d6a75c9c001a7613bcd279d5afed96700',
            },
            {
                technology: 'CSS',
            },
            {
                technology: 'bootstrap',
                example:
                    'https://github.com/iO-Academy/AcademyPortal/pull/344/files?file-filters%5B%5D=.phtml#diff-71b3aa5b92fc0a3762e8596845754d6d6a75c9c001a7613bcd279d5afed96700',
            },
            {
                technology: 'circleci',
            },
        ],
    },
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
