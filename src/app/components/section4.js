import section4Image from "../../../public/section4Img.png"
import Image from 'next/image';
import section4css from "../styles/section4.module.css";

function Section4 (){
   return <div id="section4" className={section4css.container}>
      <Image className={section4css.imgStyle} src={section4Image} alt="img.png"/>
      </div>
}

export default Section4