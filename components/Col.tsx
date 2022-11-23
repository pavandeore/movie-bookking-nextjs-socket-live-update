import React from 'react'

import  { useAtom } from 'jotai'
import { DATAAtom, flatDATAAtom } from '../atom/DATAAtom'


const Col = ({col}) => {

    const [dataAtom, setDataAtom] = useAtom(flatDATAAtom)

    let seatStyles;
    if(col.is_booked){
        seatStyles = 'bg-emerald-200'
    }else{
        seatStyles = 'bg-gray-200'
    }



    const seatBookHandler = (col) =>{
    

        dataAtom.forEach( data => {
            if(data.id==col.id){
                setDataAtom( [ ...dataAtom, data.is_booked = true ] )
            }
        })

    }
    

  return (
    
    
    <button onClick={() => seatBookHandler(col)} className={'h-10 w-10 mt-10 cursor-pointer flex pt-2 justify-center '+ seatStyles} > 
        {col.id} 
    </button>


  )
}

export default Col