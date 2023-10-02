"use client"

import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Headers from "./components/header"
import Section1 from "./components/section1"

import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';


export default function Home() {
  const [smallScreen, setSmallScreen] = useState(false);
  

  return (
    <div className={styles.main}>
      <Headers showNav={smallScreen} setShowNav={setSmallScreen}/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    
    </div>
  )
  }
