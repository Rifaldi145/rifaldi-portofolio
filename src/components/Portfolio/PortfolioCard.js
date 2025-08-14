import Badge from "../Common/Badge"

const PortfolioCard = ({ data }) => {
    return (
        <div className="card_stylings overflow-hidden h-full">
            <img
                src={data?.image}
                alt="portfolio img"
                className="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"
            />
            <div
                id="arrow"
                className="py-2 px-6 card_stylings rounded-md border-t-2 border-transparent hover:border-dashed hover:border-white hover:-translate-y-10 transition-all ease-in-out duration-500 cursor-pointer"
            >
                <div className="flex justify-between p-0 m-0 ">
                    <h4 className="mr-2 mb-2 font-semibold pt-2 text-1xl text-Snow leading-tight sm:leading-normal">
                        <a
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {data?.projectName}
                        </a>
                    </h4>
                </div>
                <p className="text-xs text-LightGray font-normal">
                    {data?.description}
                </p>
                <div className="text-sm flex flex-wrap gap-3 py-2">
                    {data.technologiesUsed.map((index, key) => (
                        <Badge key={key} title={index.tech} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PortfolioCard