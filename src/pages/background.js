import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";

function Background() {

    const { isLoading, error, data } = useQuery('background', () =>
        axios.get('api/background')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 px-4 pb-2 pt-10 relative">
                {/* garis putuh" */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 border-l-4 border-dashed border-gray-400"></div>

                {/* Education */}
                <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {isLoading ?
                        [1, 2, 3].map((_, idx) => (
                            <ParagraphSkeleton key={idx} className={"p-8 h-full w-full relative"} />
                        ))
                        :
                        data && data[0]?.eduCards?.map((dataItem, key) => (
                            <Edu_Card key={key} data={dataItem} />
                        ))
                    }
                </div>

                {/* Work Experience */}
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className="md:pt-0 pt-4 text-xl text-Snow font-semibold">Work experience</div>
                        {isLoading ?
                            [1, 2, 3].map((_, idx) => (
                                <ParagraphSkeleton key={idx} className={"p-8 h-full w-full relative"} />
                            ))
                            :
                            data && data[1]?.expCards?.map((dataItem, key) => (
                                <Exp_Card key={key} data={dataItem} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </BannerLayout>
    );
}

export default Background;