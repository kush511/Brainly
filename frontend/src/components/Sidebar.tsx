import { BrainIcon } from "../icons/BrainIcon"
import { DocsIcon } from "../icons/DocsIcon"
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItems } from "./SidebarItems"

export const Sidebar = ()=>{
   return (<div className="bg-white h-screen w-72 fixed
    left-0 top-0 pl-4">
       
        <div className="flex text-2xl pt-4 items-center text-purple-900">
            <div className=" p-2 flex items-center justify-center w-10 h-10 rounded">
              <BrainIcon/>
            </div>
            Brainly
            
        </div>
       <div className="pt-4 pl-4"> <SidebarItems text="Twitter" icon={<TwitterIcon/>}/>
       <SidebarItems text="Youtube" icon={<YoutubeIcon/>}/>
       <SidebarItems text = "Medium" icon={<DocsIcon size="lg"/>}/>
       </div>
       
    </div>)
}