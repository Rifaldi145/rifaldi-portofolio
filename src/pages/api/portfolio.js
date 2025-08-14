const portfolio = [
    {
        id: 0,
        projectName: "LMS (Learning Management System)",
        image: "porto-project/lms.jpeg",
        description: "A web-based Learning Management System developed for Bawaslu to facilitate structured training and educational programs. The platform enables user registration, course management, learning material distribution, quizzes, and progress tracking. Designed with an intuitive interface for both administrators and learners, it ensures efficient knowledge delivery and performance evaluation.",
        technologiesUsed: [
            { tech: "Laravel 11" },
            { tech: "Bootstrap 5" },
            { tech: "MySQL" }
        ]
    },
    {
        id: 0,
        projectName: "Perpustakaan Digital",
        image: "porto-project/e-lib.jpeg",
        description: "A Digital Library system developed for Bawaslu to manage book collections, borrowing, and returning processes efficiently. The system allows users to search for books, view availability, and borrow them using a QR code scanning feature. It supports both digital and printed book records, ensuring easy tracking for librarians and a seamless borrowing experience for users.",
        technologiesUsed: [
            { tech: "Laravel 11" },
            { tech: "Bootstrap 4" },
            { tech: "MySQL" }
        ]
    },
    {
        id: 0,
        projectName: "Web Company Profile",
        image: "porto-project/profile-pusbin.jpeg",
        description: "A real-time company profile website developed for Pusbindiklatren Bappenas, providing up-to-date information about the organization’s programs, events, and services. The platform ensures easy content management, responsive design for various devices, and dynamic data updates to keep stakeholders informed at all times.",
        technologiesUsed: [
            { tech: "Laravel 11" },
            { tech: "JavaScript" },
            { tech: "Bootstrap 4" },
            { tech: "MySQL" }
        ]
    },
    {
        id: 0,
        projectName: "OJS (Open Journal System)",
        image: "porto-project/ojs-pusbin.jpeg",
        description: "An academic publishing platform based on OJS 3, developed to facilitate the submission, review, and publication of journals and scientific papers. The system streamlines the editorial workflow, from manuscript submission to peer review and final publication, providing an efficient and user-friendly experience for authors, reviewers, and editors. This journal has been officially accredited with SINTA 3, ensuring recognized academic quality and credibility.",
        technologiesUsed: [
            { tech: "PHP" },
            { tech: "OJS 3" },
            { tech: "Laravel 7" },
            { tech: "MySQL" }
        ]
    },
    {
        id: 0,
        projectName: "SIKULA",
        image: "porto-project/sikula.png",
        description: "A patient and doctor record management application designed to monitor and encourage medication adherence. SIKULA enables healthcare providers to track patient treatment progress, schedule follow-ups, and ensure patients comply with prescribed medication plans, ultimately improving health outcomes and care efficiency.",
        technologiesUsed: [
            { tech: "Laravel 12" },
            { tech: "Livewire" },
            { tech: "REST API's" },
            { tech: "MySQL" },
            { tech: "Bootstrap 5" }
        ]
    },
    {
        id: 0,
        projectName: "Genstix",
        image: "porto-project/genstix.jpeg",
        description: "A web-based platform for event organizers to manage and streamline their events. Genstix offers features such as event scheduling, ticketing, participant registration, and real-time updates. I was responsible for developing the backend system, including API design, database management, and integration to ensure a seamless experience for event organizers.",
        technologiesUsed: [
            { tech: "NextJS" },
            { tech: "Chakra UI" },
            { tech: "REST API's" },
            { tech: "PostgreSQL" }
        ]
    },
    {
        id: 0,
        projectName: "Simascore",
        image: "porto-project/simascore.jpeg",
        description: "An internal web application used to assign surveyors and quality control (QC) tasks efficiently. Simascore streamlines task distribution, progress tracking, and reporting to ensure accurate and timely survey results.",
        technologiesUsed: [
            { tech: "NextJS" },
            { tech: "REST API's" },
            { tech: "Chakra UI" },
            { tech: "TailwindCSS" }
        ]
    },
    {
        id: 1,
        projectName: "Dana Tunai",
        image: "porto-project/perhitungan.jpeg",
        description: "A web-based application that allows users to calculate and obtain the Market Retail Price (MRP) of their car. The platform streamlines the valuation process, enabling quick and accurate estimations for loan or cash purposes.",
        technologiesUsed: [
            { tech: "NextJS With SSR" },
            { tech: "REST API's" },
            { tech: "Chakra UI" },
            { tech: "TailwindCSS" }
        ]
    },
    {
        id: 2,
        projectName: "Liveness Mandiri",
        image: "porto-project/livenes.jpeg",
        description: "A self-service liveness detection application that enables users to verify their identity in real-time through facial recognition technology. Designed for secure, fast, and accurate authentication without the need for operator assistance.",
        technologiesUsed: [
            { tech: "NextJS" },
            { tech: "Chakra UI" }
        ]
    }

]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
