import { DeleteIcon } from "../icons/Delete";
import { DocsIcon } from "../icons/DocsIcon";
import { Shareicon } from "../icons/Shareicon"
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";


interface CardProps {
    title: string;
    link: string;
    type: "youtube" | "X" | "medium";
    contentId: string;
    onDelete: (contentId: string) => void;
}

export const Card = ({ title, link, type, contentId, onDelete }: CardProps) => {
    return <div className={`min-h-48 p-8 bg-white rounded-md border border-slate-200 ${
        type === "X" || type === "medium" ? "w-96" : "max-w-72"
    }`}>
        {/* Header with icon */}
        <div className="flex justify-between">
            <div className="flex items-center text-md">
                <div className="pr-2 text-gray-500">
                    {type === "youtube" && <YoutubeIcon />}
                    {type === "X" && <TwitterIcon/>}
                    {type === "medium" && <div><DocsIcon size="md"/></div>} 
                </div>
                {title}
            </div>
            {/* Delete/Share buttons */}
            <div className=" flex  items-center">
                <div className="pr-2 text-gray-500">
                    <a className="cursor-pointer" href={link} target="_blank"><Shareicon size="md" />
                    </a>
                </div>  
                <div className="pr-2 text-gray-500 cursor-pointer" onClick={() => onDelete(contentId)}>
                    <DeleteIcon size="md" />
                </div>
            </div>
        </div>

        {/* Content rendering */}
        <div>
            {type === "youtube" && <iframe className="w-full pt-4"
             src={link.replace("watch?v=", "embed/")}
                 title="YouTube video player"
                  frameBorder="0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></iframe> }
            
                {type === "X" && 
                  <div className="w-full pt-4">
                    <blockquote className="twitter-tweet">
                      <a href={link.replace("x.com","twitter.com")}></a>
                    </blockquote>
                  </div>
                }
            
                {type === "medium" && (
                <div className="w-full pt-4">
                    <a href={link} target="_blank" className="block p-4 border rounded hover:bg-gray-50">
                        <div className="text-sm text-gray-600">Sorry, can't embed blog at this moment</div>
                        <div className="font-medium">{title}</div>
                        <div className="text-sm text-blue-600 mt-2">Read on Medium →</div>
                    </a>
                </div>
            )}
        </div>

    </div>
}