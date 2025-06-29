import { useState } from 'react'
import { Button } from './components/Button'

import './App.css'
import { PlusIcon } from './icons/Plusicon'
import { Shareicon } from './icons/Shareicon'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'
import { Sidebar } from './components/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
    <div className=''>
    <Sidebar/>
    <div className=' p-4 ml-72 min-h-screen bg-gray-100 border border-gray-300'>
      <CreateContentModal open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className='gap-4 pt-4 pr-5 flex justify-end '>
         <Button startIcon={<Shareicon size='md'/>} size='md' variant="primary" text='Share Brain'/>
      <Button onClick={()=>{
        setModalOpen(true)
      }} startIcon={<PlusIcon size='lg'/>} size='md' variant="secondary" text='Add content'/>
      </div>
      
     
     <div className='flex gap-4 '>
       
     <div className='pr-8'> <Card type='X' link='https://x.com/d4rsh_tw/status/1938485433480233006' title="Motivation"/></div>
       <Card type="youtube" link='https://www.youtube.com/watch?v=JgDNFQ2RaLQ&list=RDJgDNFQ2RaLQ&start_radio=1' title="Sapphire"/>
     </div>
    </div>
    </div>
    </>
  )
}

export default App
