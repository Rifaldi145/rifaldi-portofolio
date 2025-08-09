const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'Experienced in building web and mobile applications using NextJS, Laravel, ReactJS, Flutter, and NodeJS. Skilled in RESTful API design, server setup (AWS, Alibaba), and blockchain development (Solidity).',
    },
    {
        id: 1,
        title: 'Backend & API Development',
        desc: 'Proficient with PHP (Laravel, CodeIgniter), ExpressJS, and Python for backend systems, creating reusable codebases and complex business logic implementations.',
    },
    {
        id: 2,
        title: 'Frontend & UI/UX',
        desc: 'Experienced in frontend development with ReactJS, NextJS, VueJS, Angular, and Flutter, as well as UI/UX design principles and implementing responsive, user-friendly interfaces.',
    },
    {
        id: 3,
        title: 'DevOps & Server Management',
        desc: 'Skilled in server configuration and management using Ubuntu SSH, Apache web server, Linux environments, and cloud deployment on AWS and Alibaba Cloud.',
    },
    {
        id: 4,
        title: 'Version Control & Collaboration',
        desc: 'Fluent in using Git, GitHub, and GitLab for version control, code collaboration, and project management using Scrum and Jira methodologies.',
    },
    {
        id: 5,
        title: 'Database Management',
        desc: 'Experienced in MySQL, PostgreSQL, SQL Server, and MariaDB with strong knowledge of database design and query optimization.',
    },
    {
        id: 6,
        title: 'Mobile Development',
        desc: 'Skilled in Flutter and Ionic for cross-platform mobile app development, integrating features like video conferencing.',
    }
];

export default function handler(req, res) {
    res.status(200).json(expertise);
}
