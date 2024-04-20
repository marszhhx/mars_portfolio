const about = {
    // each of these properties is optional - they can be left empty or deleted
    // each element in the `description` array will be treated as a separate paragraph
    name: 'Haixing Zhang',
    greetingEmoji: '👋',
    role: 'Software Engineer',
    company: 'M2W IT Solutions',
    description: [
        'I create software that make people\'s live just a little bit easier',
    ],
    resume: 'https://drive.google.com/file/d/1zHQ6W_NZSgnFMzeWLgWRN6zBGbY5E64O/view?usp=drive_link',
    social: {
        github: 'https://github.com/marszhhx',
        linkedin: 'https://www.linkedin.com/in/haixing-zhang/',
    },
}

const works = [
    {
        position: 'Full Stack Developer',
        companyName: 'M2W IT Solutions',
        companyImage: 'images/mark2win_it_solutions_logo.png',
        startDate: '2012-12-01',
        endDate: '',
        responsibilities: [
            "A scalable e-commerce SPA",
        ]
    },
    {
        position: 'Full Stack Developer',
        companyName: 'iWOD Fitness Technology',
        companyImage: 'images/iwod_icon.png',
        startDate: '2019-07-01',
        endDate: '2022-09-01',
        responsibilities: [
            "A gym management SaaS application",
        ]
    },
    {
        position: 'Senior IT Engineer Lead',
        companyName: 'Dell EMC',
        companyImage: 'images/dell_icon.png',
        startDate: '2016-07-01',
        endDate: '2019-01-01',
        responsibilities: [
            "Lead three field engineers to support over 1000 clients",
        ]
    },
    {
        position: 'Field Services Engineer',
        companyName: 'Dell EMC',
        companyImage: 'images/dell_icon.png',
        startDate: '2014-01-01',
        endDate: '2016-07-01',
        responsibilities: [
            "Provided field service support for key accounts",
        ]

    }
]

const projects = [
    // // projects can be added and removed
    // // if the array is left empty, the "Projects" section won't render
    // // each element in each `description` array will be treated as a separate paragraph
    // {
    //   thumbnail: 'images/placeholder-image.jpeg',
    //   name: 'Project 1',
    //   description: [
    //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    //   ],
    //   stack: ['SASS', 'TypeScript', 'React'],
    //   sourceCode: 'https://github.com',
    //   livePreview: 'https://example.com',
    // },
    // {
    //   thumbnail: 'images/placeholder-image.jpeg',
    //   name: 'Project 2',
    //   description: [
    //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    //   ],
    //   stack: ['SASS', 'TypeScript', 'React'],
    //   sourceCode: 'https://github.com',
    //   livePreview: 'https://example.com',
    // },
    // {
    //   thumbnail: 'images/placeholder-image.jpeg',
    //   name: 'Project 3',
    //   description: [
    //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    //   ],
    //   stack: ['SASS', 'TypeScript', 'React'],
    //   sourceCode: 'https://github.com',
    //   livePreview: 'https://example.com',
    // },
    {
        thumbnail: 'images/placeholder-image.jpeg',
        name: 'Project 1',
        description: [
            'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
        ],
        stack: ['SASS', 'TypeScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://example.com',
    },
]

const iconSkills = [
    // skills can be added or removed
    // if the array is left empty, the "Skills" section won't render
    {
        name: 'HTML',
        icon: 'https://google.com/abc.jpg'
    },
    {
        name: 'CSS',
        icon: 'https://google.com/abc.jpg'
    },
    {
        name: 'JavaScript',
        icon: 'https://google.com/abc.jpg'
    },
]

// const skills = [
//     // skills can be added or removed
//     // if the array is left empty, the "Skills" section won't render
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'TypeScript',
//     'React.js',
//     'Redux.js',
//     'Next.js',
//     'SASS',
//     'Material UI',
//     'Git',
//     'CI/CD',
// ]

const contact = {
    // the `email` property is optional - it can be left empty or deleted
    // if so, the "Contact" section won't render
    phone: '672(999)6333',
    email: 'johndoe@email.com',
    // location: 'burnaby'
}


export {about, works, projects, iconSkills, contact}
