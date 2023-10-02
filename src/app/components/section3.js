import bubbleLeft from "../../../public/Bubbles - Left.png"
import bubbleRight from "../../../public/Bubbles - Right.png"
import section3Styles from '../styles/section3.module.css'
import Image from 'next/image';




function Section3(){
   return <div id="section3" className={section3Styles.container}>
        <Image className={section3Styles.imageLeft} src={bubbleLeft} alt="bubble.png"/>
        <div className={section3Styles.dataContainer}>
          <div className={section3Styles.dataDescription}>{"Don't miss out on ABC's incredible features and opportunities."}</div>
          <div className={section3Styles.dataTitle}>{"Join us today and unlock your full potential as a creator."}</div>
          <button className={section3Styles.dataButton}>Join Now</button>
        </div>
        <Image className={section3Styles.imageRight} src={bubbleRight} alt='bubble.png'/>
      </div>
}

export default Section3