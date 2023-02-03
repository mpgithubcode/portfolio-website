import styles from "../style"
import { logo } from '../assets'
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        {/* <img src={logo} alt="logo" className="w-[266px] h-[72.14px] object-contain" /> */}
        <p className="font-fontPrimary text-textPrimaryColor font-normal cursor-pointer text-[32px]">MP Code & Developement</p>
        <p className={`${styles.paragraph} font-fontPrimary text-textPrimaryColor mt-4 max-w-[312px]`}>
          Copyright &copy;, 2023. All Rights Reserved
        </p>
      </div>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <svg
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer fill-textPrimaryColor ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          >(social.icon)</svg>
        ))}
      </div>
    </div>
  </section>
)

export default Footer
