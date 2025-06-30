import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import axios from 'axios'
import { BACKEND_URL } from "../config"

import '../App.css'
import { PlusIcon } from '../icons/Plusicon'
import { Shareicon } from '../icons/Shareicon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { Sidebar } from '../components/Sidebar'
import { UseContent } from '../hooks/useContent'



function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false)
    const {content,refresh} = UseContent()

    useEffect(()=>{
        refresh()
    },[modalOpen
    ])
    
    // Add delete function in Dashboard
    async function deleteContent(contentId: string) {
        try {
            await axios.delete(BACKEND_URL + "/content", {
                headers: {
                    "Authorization": localStorage.getItem("token")
                },
                data: {
                    contentId: contentId
                }
            });
            refresh(); // Refresh content after deletion
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    }
  return (
    <>
    <div className=''>
    <Sidebar/>
    <div className=' p-4 ml-72 min-h-screen bg-gray-100 border border-gray-300'>
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className='gap-4 pt-4 pr-5 flex justify-end pb-2'>
         <Button startIcon={<Shareicon size='md'/>} size='md' variant="primary" text='Share Brain'/>
      <Button onClick={()=>{
        setModalOpen(true)
      }} startIcon={<PlusIcon size='lg'/>} size='md' variant="secondary" text='Add content'/>
      </div>
      
     
     <div className='flex gap-4 flex-wrap '>
       {content?.map(({_id, type, link, title}, index) =>
        <Card 
        key={index}
        contentId={_id}
        type={type}
        link={link}
        title={title}
        onDelete={deleteContent}
        />
       )}
        
      
     </div>
    </div>
    </div>
    </>
  )
}

export default Dashboard
