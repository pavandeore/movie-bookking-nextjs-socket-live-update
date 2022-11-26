import React, {useEffect, useState} from 'react'


import io from 'socket.io-client'
let socket

import  { useAtom } from 'jotai'
import { DATAAtom, flatDATAAtom } from '../atom/DATAAtom'


const Col = ({col}) => {


    const [seat, setSeat] = useState(null)
    const [dataAtom, setDataAtom] = useAtom(flatDATAAtom)

    useEffect(() => {
        socketInitializer()
    }, [])

    const socketInitializer = async () => {
        await fetch('/api/socket');
        socket = io()

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('seat-booked', msg => {
            seatBookHandler(msg)
        })
    }
    

    let seatStyles;
    if(col.is_booked){
        seatStyles = 'bg-emerald-200'
    }else{
        seatStyles = 'bg-gray-200'
    }

    const clickHandler = (ID) => {
        dataAtom.forEach( data => {
            if(data.id==ID){
                setDataAtom( [ ...dataAtom, data.is_booked ? data.is_booked = false : data.is_booked = true ] )
                socket.emit('seat-booked', ID)
            }
        })
    }


    const seatBookHandler = (ID) =>{
        dataAtom.forEach( data => {
            if(data.id==ID){   
                setDataAtom( [ ...dataAtom, data.is_booked = true ] )
            }
        })
    }
    
    

  return (
    
    
    <button onClick={() => clickHandler(col.id)} className={'h-10 w-10 mt-10 cursor-pointer flex pt-2 justify-center '+ seatStyles} > 
        {col.id} 
    </button>


  )
}

export default Col