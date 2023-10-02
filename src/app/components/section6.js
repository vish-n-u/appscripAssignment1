import followUsImg from "../../../public/followUsImage.png"
import footer from "../styles/footer.module.css"

import Image from 'next/image';
function Section6(){
    return   <footer id="section6" className={footer.container}>
    <h1 className={footer.logo}>loGo</h1>
    <div className={footer.detailsContainer}>
     <div className={footer.detailsContainerCol}>
       <h2 className={footer.detailsContainerColTitle}>Company</h2>
       <h4 className={footer.detailsContainerColItem}>About us</h4>
       <h4 className={footer.detailsContainerColItem}>Support</h4>
       <h4 className={footer.detailsContainerColItem}>Blog</h4>
       <h4 className={footer.detailsContainerColItem}>Login</h4>
       <h4 className={footer.detailsContainerColItem}>Signup</h4>
       <h4 className={footer.detailsContainerColItem}>Contact Us</h4>

     </div>
     <div className={footer.detailsContainerCol}>
     <h2 className={footer.detailsContainerColTitle}>Programs</h2>
       <h4 className={footer.detailsContainerColItem}>Affiliate Program</h4>
       <h4 className={footer.detailsContainerColItem}>Ambassador Program</h4>
       <h4 className={footer.detailsContainerColItem}>Partnership Program</h4>
      
     </div>
     <div className={footer.detailsContainerCol}>
     <h2 className={footer.detailsContainerColTitle}>Policy</h2>
       <h4 className={footer.detailsContainerColItem}>Legal</h4>
       <h4 className={footer.detailsContainerColItem}>DMCA</h4>
       <h4 className={footer.detailsContainerColItem}>USC 2257</h4>
       <h4 className={footer.detailsContainerColItem}>Privacy Policy</h4>
       <h4 className={footer.detailsContainerColItem}>Terms and Conditions</h4>
     </div>
    </div>
    <div className={footer.followUsContainer}>
     <h2 className={footer.followUsTitle}>Follow us</h2>
     <Image src={followUsImg} className={footer.followUsImg} alt="followus.png"/></div>
    </footer>
}

export default Section6