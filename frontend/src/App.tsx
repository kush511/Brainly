// import { useState } from 'react'
import { Button } from './components/Button'

import './App.css'
import { PlusIcon } from './icons/Plusicon'
import { Shareicon } from './icons/Shareicon'
import { Card } from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-4'>
      <div className='gap-4 flex justify-end'>
         <Button startIcon={<Shareicon size='md'/>} size='md' variant="primary" text='Share Brain'/>
      <Button startIcon={<PlusIcon size='lg'/>} size='md' variant="secondary" text='Add content'/>
      </div>
      
     
     <div className='flex gap-4'>
       
      <Card type='X' link='https://x.com/d4rsh_tw/status/1938485433480233006' title="Motivation"/>
       <Card type="youtube" link='https://www.youtube.com/watch?v=JgDNFQ2RaLQ&list=RDJgDNFQ2RaLQ&start_radio=1' title="Sapphire"/>
     </div>
    </div>
    </>
  )
}

export default App
