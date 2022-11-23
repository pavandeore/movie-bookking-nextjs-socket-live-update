import React from 'react'
import Col from '../components/Col'


const RowHeader = ({row}) =>{
    return <small className='w-20'>{row[0]}</small>
}


const Row = ({row}) => {
  return (
    
    <div className='flex items-baseline'>
        
        <RowHeader row={row[0]} />
        <div className='grid grid-cols-5 w-full'> 
            {  
                row[1].map( col => (

                    <Col col={col} />

                ))
            }
        </div>

    </div>          
   
  )
}

export default Row