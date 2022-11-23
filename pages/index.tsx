import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

import DATA from '../DATA.json'

import { groupBy }  from '../utils/GroupBy'
import { useEffect, useState } from 'react'
import Row from '../components/Row'


import  { useAtom } from 'jotai'
import { DATAAtom, flatDATAAtom } from '../atom/DATAAtom'


export default function Home() {

  const [dataAtom, setDataAtom] = useAtom(DATAAtom)
  const [flatdataAtom, setFlatDataAtom] = useAtom(flatDATAAtom)

  useEffect(()=>{

    setDataAtom(Object.entries(groupBy(DATA, "row")))
    setFlatDataAtom(DATA)

  },[])


  return (
    <div className={styles.container}>
        <Header />
        <div>
            { dataAtom.map( row => <Row row={row} /> ) }
        </div>   


    </div>
  )
}
