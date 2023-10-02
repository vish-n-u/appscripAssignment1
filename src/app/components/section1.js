import { useEffect, useState } from "react";
import Image from 'next/image';
import homeStyles from "../styles/home.module.css"
import signUpImage from "../../../public/signup.png"
import mountainimg from "../../../public/mountainImg.png"
import downMountain from "../../../public/downMountain.png"

function Section1(){
    const [count,setCount] = useState(0)
  const [incOrDec,setIncOrDec] = useState("inc")

  useEffect(() => {
    // Function to handle count updates
    const updateCount = () => {
      if (incOrDec === "inc") {
        setCount(count + 1);
      } else {
        setCount(count - 2);
      }

      if (count >= 120) {
        setIncOrDec("dec");
      }
      if (count <= 0) {
        setIncOrDec("inc");
      }
    };

    // Check screen width and reset count when screen width goes above 768
    const handleResize = () => {
      if (window.innerWidth <= 768 && count !== null) {
        setCount(null);
      } else if (window.innerWidth > 768 && count === null) {
        setCount(1);
      }
    };

    // Initialize count and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Update count using a timeout
    const interval = setInterval(() => {
      if (count !== null) {
        updateCount();
      }
    }, 100);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [count, incOrDec]);
  return(
    <div id="section1" className={homeStyles.home}>
    <Image src={downMountain}  style={{ top: `${-200 + count}px` }} className={homeStyles.downMountainImg}  alt="downMountain.png"/>
    <Image src={mountainimg}  style={{ bottom: `${-200 + count}px` }} className={homeStyles.mountainImg}  alt="downMountain.png"/>
  <div className={homeStyles.textContainer}>
  <span className={homeStyles.textContainerHeader}>A Creator's Paradise</span>
  <span className={homeStyles.textContainerBody}>Were Creativity Meets Success</span>
  </div>
  <Image src={signUpImage} className={homeStyles.signUpImage}  alt="img"/>
  </div>
  )
}

export default Section1