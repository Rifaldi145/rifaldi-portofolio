const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University Bina Sarana Informatika',
                degree: 'S1, Sistem Information',
                detail: "",
                year: '2023-2024'
            },
            {
                id: 1,
                title: 'University Bina Sarana Informatika',
                degree: 'D3, Sistem Information',
                detail: "",
                year: '2015-2017'
            },
            {
                id: 2,
                title: 'SMK Adi Sanggoro',
                degree: 'Software engineering',
                detail: "",
                year: '2013-2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'PT Sinarmas Multifinance',
                role: 'Frontend Developer',
                url: '',
                desc: '',
                year: 'April 2025 - Present',

            },
            {
                id: 2,
                title: 'PT INAMART SUKSES JAYA',
                role: 'Software Enginering',
                url: '',
                desc: 'Developed various applications and services, including the Better Muslim app (Next.js & Flutter) with live video conferencing, a system API for the BPN project (Laravel & ExpressJS), the DAMAI application for actuarial calculations (Next.js & Python), and a blockchain application for generating NFT certificates (React.js, Solidity.js, Java). Also responsible for setting up development servers on Amazon and Alibaba Cloud.',
                year: 'Feb 2022 - Feb 2025',

            },
            {
                id: 3,
                title: 'Kementerian PPN/Bappenas',
                role: 'Programmer IT',
                url: 'https://pusbindiklatren.bappenas.go.id/',
                desc: "Developed and customized the Open Journal System (OJS) by creating reusable code bases, custom plugins (PHP & JavaScript), and managing server and security requirements. Applied clean code principles, strong typing, and OOP methods. Built a Formation Calculation system (Laravel) and developed a landing page for the Pusbindiklatren Bappenas website using Laravel and Vue.js.",
                year: 'Apr 2021 - Okt 2024',

            },
            {
                id: 4,
                title: 'PT.TIMA AMANAH PRIMA WISATA',
                role: 'IT Support & Programmer',
                url: '',
                desc: "Developed RESTful APIs using PHP (Laravel & CodeIgniter), built a travel website, and configured servers via Ubuntu SSH. Migrated travel applications from PHP Native to CodeIgniter and tested payment integrations with third-party services",
                year: 'Des 2019 - Jan 2021',

            },

            {
                id: 5,
                title: 'Yayasan Tirta Amarta Paripurna',
                role: 'Web Programmer',
                url: '',
                desc: "Improved marketplace application UI/UX, fixed bugs, and integrated Postage King API for shipping options.",
                year: 'Jul 2019 - Nov 2019',

            },
            {
                id: 6,
                title: 'Dgeo.Id',
                role: 'Junior Programmer',
                url: '',
                desc: "Developed various web and mobile applications including e-commerce, goods and services monitoring with Indonesian maps, SME and village farmer marketplace, WargaNet app, asset management system, and company profile websites using CodeIgniter, Laravel, JavaScript, and REST API, while managing server and security configurations.",
                year: 'Apr 2018 - Jun 2019',

            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
