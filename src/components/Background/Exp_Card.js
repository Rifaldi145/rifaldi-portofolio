import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 ">
                <div className="flex justify-between">
                    <div className="flex-initial text-[17px] text-Snow font-medium">{data.title}</div>
                    <div className="flex justify-items-center justify-center text-White bg-Blue ml-2 w-32 lg:w-30 h-10 text-xs rounded-full py-3 font-normal  text-center">
                        {" "}
                        {data.year}{" "}
                    </div>
                </div>
                <div className="text-sm text-LightGray font-normal mt-1 ">
                    {data.role}
                </div>

                <div className="text-LightGray text-sm font-normal mt-4 text-justify">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card