const portfolio = [
    {
        id: 0,
        projectName: "LMS(Learning Management System) ",
        image: "porto-project/lms.jpeg",
        description: "",
        technologiesUsed: [
            {
                tech: "Laravel 11"
            },
            {
                tech: "Boostrap 5"
            },
            {
                tech: "Mysql"
            },

        ]
    },
    {
        id: 0,
        projectName: "Perpustakaan Digital",
        image: "porto-project/e-lib.jpeg",
        description: "",
        technologiesUsed: [
            {
                tech: "Laravel 11"
            },
            {
                tech: "Boostrap 4"
            },
            {
                tech: "Mysql"
            },
        ]
    },
    {
        id: 0,
        projectName: "Web Compony Profile",
        image: "porto-project/profile-pusbin.jpeg",
        description: "",
        technologiesUsed: [
            {
                tech: "Laravel 11"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Boostrap 4"
            },
            {
                tech: "Mysql"
            },

        ]
    },
    {
        id: 0,
        projectName: "OJS(Open Journal System)",
        image: "porto-project/ojs-pusbin.jpeg",
        description: "ASLN drives digital transformation with certified document translation services. In an interconnected world where seamless communication is imperative, they are strategically positioned to cater to the needs of businesses, individuals, and organizations.",
        technologiesUsed: [
            {
                tech: "PHP"
            },
            {
                tech: "OJS 3"
            },
            {
                tech: "Laravel 7"
            },
            {
                tech: "Mysql"
            },

        ]
    },
    {
        id: 0,
        projectName: "SIKULA ",
        image: "porto-project/sikula.png",
        description: "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
        technologiesUsed: [
            {
                tech: "Laravel 12"
            },
            {
                tech: "Livewire"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mysql"
            },
            {
                tech: "Boostrap 5"
            },
        ]
    },
    {
        id: 0,
        projectName: "Genstix",
        image: "porto-project/genstix.jpeg",
        description: "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "Chakra UI"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "PostgreSQL"
            },

        ]
    },
    {
        id: 0,
        projectName: "Simascore",
        image: "porto-project/simascore.jpeg",
        description: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Nextjs"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Chakra UI"
            },
            {
                tech: "TailwindCSS"
            }
        ]
    },
    {
        id: 1,
        projectName: "Dana Tunai",
        image: "porto-project/perhitungan.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS With SSR"
            },

            {
                tech: "REST API's"
            },
            {
                tech: "Chakra UI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Liveness Mandiri",
        image: "porto-project/livenes.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },

            {
                tech: "Chakra UI"
            },

        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
