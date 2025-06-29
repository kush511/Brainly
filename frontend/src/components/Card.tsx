import { Shareicon } from "../icons/Shareicon"


interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "X";
}
export const Card = ({ title, link, type }: CardProps) => {
    return <div className="max-w-72 min-h-48 min-w- p-8 bg-white rouned-md border  border-slate-200">
        <div className="flex justify-between">
            <div className="flex  items-center text-md">
                <div className="pr-2 text-gray-500"><Shareicon size="md" /></div>
                {title}
            </div>
            <div className=" flex  items-center">
                <div className="pr-2 text-gray-500">
                    <a className="cursor-pointer" href={link} target="_blank"><Shareicon size="md" />
                    </a>
                </div>  
                <div className="pr-2 text-gray-500">
                    <Shareicon size="md" />
                </div>
            </div>

        </div>

        <div>
            {type==="youtube" && <iframe className="w-full pt-4"
             src={link.replace("watch","embed")}
                 title="YouTube video player"
                  frameBorder="0"
                   allow="accelerometer; 
                   autoplay; clipboard-write; encrypted-media; gyroscope;
                    picture-in-picture; web-share" 
                   referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe> }
            
                {type==="X" && <blockquote className="twitter-tweet ">
                <a href={link.replace("x.com","twitter.com")}></a>
            </blockquote>}
            
        </div>

    </div>
}