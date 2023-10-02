
import section1Part2Img from "../../../public/section1Part2Img.png"
import section2Part1Img from "../../../public/section2part1Img.png"
import section2Part2Img from "../../../public/section2part2Img.png"
import section2Part3Img from "../../../public/section2part3Img.png"
import phnImage from "../../../public/phnImg.png"
import keyFeatures from "../styles/keyfeature.module.css"
import Image from 'next/image';
 


function Section2(){
  return  <div id="section2" className={keyFeatures.container}>
        <div className={keyFeatures.titleContainer}>
        <span className={keyFeatures.title}>Elevate Your Craft</span>
        </div>
        {/* <span></span> */}
        <div className={keyFeatures.section1}>
          <div className={keyFeatures.mobileImageContainer}>
            <span className={keyFeatures.mobileImageTitle}>Unlock Your ABC Earning Potential</span>
            <span className={keyFeatures.mobileImageDescription}>
            Are you ready to take your earning potential to the next level? With ABC, you have multiple 
            avenues to monetize your content seamlessly. From subscriptions and tips to 
            merchandise sales and NFTS, ABC helps you diversify your revenue streams and 
            maximize your income.
            </span>
            {/* <div className={keyFeatures.addColour}></div> */}
          <Image className={keyFeatures.mobileImage} src={phnImage} alt="phn.jpeg"/>
          </div>
          <div className={keyFeatures.ecommerceContainer}>
            <span className={keyFeatures.mobileImageTitle}>Boost Your Sales with Built-in E-commerce</span>
            <span className={keyFeatures.mobileImageDescription}>Take control of your brand 
            and boost your sales with ABC's built-in e-commerce functionality. Showcase 
            and sell your exclusive products, whether it's merchandise, digital downloads,
             or personalized experiences. Integrate your store effortlessly and turn your 
             creative ideas into profitable ventures.</span>
          <Image className={keyFeatures.ecommerceImg} src={section1Part2Img} alt="phn.jpeg"/>
          </div>
        </div>
        <div className={keyFeatures.section2}>
          <div className={keyFeatures.section2Container}>
          <div className={keyFeatures.section2Itemscontainer}>
            <Image className={keyFeatures.section2Img} src={section2Part1Img} alt="img.png"/> 
           <span className={keyFeatures.section2title}>Save Time with 
Automation and Efficiency</span>
           <span className={keyFeatures.section2description}>Supercharge your content creation 
           with ABC's automation tools. Streamline scheduling, multi-platform management, and more. 
           Save time on repetitive tasks, focus on exceptional content.</span>
          </div>
          <div className={keyFeatures.section2Itemscontainer}>
          <Image className={keyFeatures.section2Img} src={section2Part2Img} alt='img.png'/> 
           <span className={keyFeatures.section2title}>Join a Supportive
Community</span>
           <span className={keyFeatures.section2description}> Join ABC's vibrant creator community. Connect with
            like-minded individuals, collaborate, and share experiences. Access mental health services and 
            resources for personal and professional growth.</span>
          </div>
         
          <div className={keyFeatures.section2Itemscontainer}>
          <Image className={keyFeatures.section2Img} src={section2Part3Img} alt='img.png'/> 
           <span className={keyFeatures.section2title}>Unlock Exclusive Opportunities and Prizes</span>
           <span className={keyFeatures.section2description}>Enjoy ABC contests and challenges for valuable 
           prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on 
           our platform with recognition and rewards.</span>
          </div>
          </div>
        </div>
      </div>
}

export default Section2