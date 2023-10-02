import { useEffect, useState } from 'react';
import styles from '../styles/header.module.css';


  const handleScrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = -40; // Adjust the offset as needed
      const targetOffset = targetSection.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  };





function Headers({showNav,setShowNav}){
  const [highLightSection,setHighLightSection] = useState("section1")
  useEffect(() => {
    window.addEventListener("scroll", function () {
      let windowPosition = window.scrollY;
     
      const sectionOffsets = {
        section1: document.getElementById('section1').offsetTop-45,
        section2: document.getElementById('section2').offsetTop-45,
        section3: document.getElementById('section3').offsetTop-45,
        section4: document.getElementById('section4').offsetTop-45,
        section5: document.getElementById('section5').offsetTop-45,
        section6: document.getElementById('section6').offsetTop-45,
      };
      let newHighlightedSection=""
      switch (true) {
        case windowPosition >= sectionOffsets.section6:
          newHighlightedSection = 'section6';
          break;
        case windowPosition >= sectionOffsets.section5:
          newHighlightedSection = 'section5';
          break;
        case windowPosition >= sectionOffsets.section4:
          newHighlightedSection = 'section4';
          break;
        case windowPosition >= sectionOffsets.section3:
          newHighlightedSection = 'section3';
          break;
        case windowPosition >= sectionOffsets.section2:
          newHighlightedSection = 'section2';
          break;
        default:
          newHighlightedSection = 'section1';
      }
      if (highLightSection !== newHighlightedSection) {
        setHighLightSection(newHighlightedSection);
      }
    

  })
})
console.log("selected section",highLightSection)
  return  <div className={styles.header}>
        <h1 className={styles.logo}>loGo</h1>
        <div className={`${styles.otherDetailsContainer} ${showNav ? styles.showNav : ''}`}>
          <a style={{color:`${highLightSection=="section1"?"blue":""}`}} className={styles.otherDetailsContainerItem}  onClick={() => handleScrollToSection('section1')}>Home</a>
      <a style={{color:`${highLightSection=="section2"?"blue":""}`}} className={styles.otherDetailsContainerItem} onClick={() => handleScrollToSection('section2')}>About Us</a >
          <a style={{color:`${highLightSection=="section3"?"blue":""}`}} className={styles.otherDetailsContainerItem} onClick={() => handleScrollToSection('section3')}>Our Blog</a>
          <a style={{color:`${highLightSection=="section4"?"blue":""}`}} className={styles.otherDetailsContainerItem} onClick={() => handleScrollToSection('section4')}>Affiliate</a>
          <a style={{color:`${highLightSection=="section5"?"blue":""}`}} className={styles.otherDetailsContainerItem} onClick={() => handleScrollToSection('section5')}>Support</a >
          <a style={{color:`${highLightSection=="section6"?"blue":""}`}} className={styles.otherDetailsContainerItem} onClick={() => handleScrollToSection('section6')}>Programs</a>
        </div>
        <div className={styles.hamburger} onClick={() => setShowNav(!showNav)}>
          =
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
        <div className={styles.register}>
          <button className={styles.login}>Login</button>
          <button className={styles.signup}>Sign Up</button>
        </div>
      </div>
}


export default Headers