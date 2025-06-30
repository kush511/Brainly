import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../config"

enum contentType {
    Youtube = "youtube",
    X = "X",
    Medium = "medium"
}

export const CreateContentModal = ({open,onClose})=>{
   const linkRef = useRef<HTMLInputElement>()
    const titleRef = useRef<HTMLInputElement>()
    const [type,setType] = useState(contentType.Youtube)
    
   async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

       await axios.post(BACKEND_URL+"/content",{
        title,
        link,
        type
       },{
        headers:{
            "Authorization":localStorage.getItem("token")
        }
       })
       onClose()

    }
    return <div>
        {open && <div className="w-screen h-screen
         fixed top-0 left-0
         bg-slate-500/60
            flex justify-center ">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded">

                <div onClick={onClose} className="flex cursor-pointer justify-end">
                    <CrossIcon size="md" />
                </div>
                <div>
                <Input ref={titleRef} placeholder={"Title"}/>
                <Input ref={linkRef} placeholder={"Link"}/>
                </div>
                <div>
                    <h1>Type</h1>
                    <div className="flex gap-2 p-3">
                        <Button size="md" fullWidth={true} text="Youtube" variant={type === contentType.Youtube ? "secondary" : "primary"} onClick={() => {setType(contentType.Youtube)}} />
                        <Button size="sm" fullWidth={true} text="X" variant={type === contentType.X ? "secondary" : "primary"} onClick={() => {setType(contentType.X)}} />
                        <Button size="sm" fullWidth={true} text="Medium" variant={type === contentType.Medium ? "secondary" : "primary"} onClick={() => {setType(contentType.Medium)}} />
                    </div>
                </div> 
                <div className="flex justify-center mt-2">
                    <Button onClick={addContent} size='md' variant="secondary" text='Submit'/>
                </div>
            
                </span>
            </div>
    </div>}
    </div>
}
