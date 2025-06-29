import { useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"

export const CreateContentModal = ({open,onClose})=>{

    return <div>
        {open && <div className="w-screen h-screen
         fixed top-0 left-0
         bg-slate-500 opacity-60
            flex justify-center ">
            <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">

                <div onClick={onClose} className="flex cursor-pointer justify-end">
                    <CrossIcon size="md" />
                </div>
                <div>
                <input placeholder={"Title"}/>
                <input placeholder={"Link"}/>
                </div>
                <div className="flex justify-center">
                    <Button size='md' variant="secondary" text='Submit'/>
                </div>
            
                </span>
            </div>
    </div>}
    </div>
}

function Input({onChange,placeholder}:{onChange:()=> void}){
    return <div>
        <input type={"text"} onChange={onChange} placeholder={placeholder} 
        className="px-4 py-2 border-2 rounded m-2"/>
    </div>
}