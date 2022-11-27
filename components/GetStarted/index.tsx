import { useEffect, useRef, useState } from 'react';
import GetStartedData from './get-started-data.json';

type GetStartedItemType = {
    title?: string,
    bgColor?: string,
    description?: any
};

export default function GetStarted() {
    const getStartedRef = useRef(GetStartedData);

    return (
        <section className="get-started-section bg-product-brown py-24 my-32">
            <div className="get-started-content-wrapper wrapped-view">
                <h3 className="get-started-title font-semibold tracking-wider text-sm uppercase text-white text-opacity-50">{"Get Started"}</h3>
                <h1 className="get-started-headline font-product-bungee mt-4 text-4xl flex flex-col items-start justify-start w-fit h-fit">
                    <span className="text-white">{"A space to learn, build & grow"}</span>
                    <span className="text-product-red">{"together."}</span>
                </h1>

                <div className="get-started-items-carousel-wrapper mt-12 flex flex-row items-start justify-start gap-12">
                    {getStartedRef.current?.map((getStartedItem: GetStartedItemType, getStartedIndex: number) => (
                        <GetStartedItem 
                            key={getStartedIndex}
                            title={getStartedItem?.title}
                            bgColor={getStartedItem?.bgColor}
                            description={getStartedItem?.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function GetStartedItem({ title, bgColor="bg-white", description }: GetStartedItemType, props: any) {
    const [backgroundColor, setBackgroundColor] = useState(bgColor);
    const [cardTextColor, setCardTextColor] = useState("text-[#181818]");

    useEffect(() => {
        switch (bgColor) {
            case "bg-product-red": setBackgroundColor("bg-product-red"); break;
            case "bg-product-purple-light": setBackgroundColor("bg-product-purple-light"); break;
            case "bg-product-yellow": setBackgroundColor("bg-product-yellow"); break;
            case "bg-white": setBackgroundColor("bg-white"); break;
        }
    }, [bgColor]);

    useEffect(() => {
        if (["bg-product-red", "bg-product-purple-light"].includes(backgroundColor)) {
            setCardTextColor("text-white");
        }
    }, [backgroundColor]);
    
    return (
        <div className="get-started-item" {...props}>
            <div className={`get-started-item__card-wrapper rounded-md flex flex-col 
                items-start justify-end px-4 pb-6 w-[240px] h-[160px] shadow
                hover:scale-105 transition-all cursor-pointer select-none ${backgroundColor} ${cardTextColor}`}
            >
                <span className="get-started-item__title font-bold text-xl">{title}</span>
            </div>
            <div className="get-started-item__description mt-4 text-xs text-white text-left text-opacity-40 font-semibold tracking-wide w-[240px] leading-6">
                {description}
            </div>
        </div>
    )
}