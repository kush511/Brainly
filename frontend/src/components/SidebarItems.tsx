import type { ReactElement } from "react";


export function SidebarItems({text,icon}:
    { text:string;
   icon:ReactElement
   ;})
    {
  
   
    return (
        <div className="flex text-gray-600 py-1 cursor-pointer 
        hover:bg-gray-200 rounded max-w-48 pl-4
        transition-all
        ">
            <div className="p-2">
                {icon}
            </div>
            <div className="p-2">
                {text}
            </div>
        </div>
    )
}
