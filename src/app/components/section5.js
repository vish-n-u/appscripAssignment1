import section5Emojis from "../../../public/section5Emojis.png"
import section6MainImg from "../../../public/section6MidImg.png";
import womenLeft from "../../../public/womenLeft.png";
import womenRight from "../../../public/women-Right.png";
import section5Part2 from "../styles/section5Part2.module.css"
import section5 from "../styles/section5.module.css"
import Image from 'next/image';

function Section5(){
    return<> <div id="" className={section5.container}>
    <Image src={section5Emojis} className={section5.emojiImg} alt="img.png"/>
    <div className={section5.dataContainer}>
      <span className={section5.dataTitle}>{`Ready to Cash in Your Connections?
Join Our Affiliate Program`}</span>
      <span className={section5.dataDescription}>{"Join now and get 7.5% commision on all creato referrals for the entire year"}</span>
      <button className={section5.dataButton}>Earn Now</button>
    </div>
  </div>
  <div id="section5" className={section5Part2.container}>
  <div className={section5Part2.innerContainer}>
  <Image className={section5Part2.mainImg} src={section6MainImg} alt="bgImg.img"/>
  <Image className={section5Part2.img} src={womenLeft} alt="leftwomen.png"/>
  <div className={section5Part2.dataContainer}>
    <span className={section5Part2.dataTitle}>
      Join the ABC Community
    </span>
    <span className={section5Part2.dataDescription}>{`
    Become part of a vibrant and supportive community of like-minded 
    creators by joining ABC's exclusive platform.  orate, learn, and connect with 
    fellow creators who share your passion for adult content creation.
`}
    </span>
    <button className={section5Part2.dataButton}>Learn More</button>
  </div>
  <Image className={section5Part2.img} src={womenRight} alt="rightwomen.png"/>
  </div>
</div>
</>
}

export default Section5