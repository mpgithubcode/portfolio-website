import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted'
import Card3d from './Card3d';
import WorkBanner from './WorkBanner';
import '../index.css';

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY} bg-secondary`}>
    <div className='flex flex-col'>
      <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* PROMOTION */}
      <div className='flex flex-row items-center py-[6px] px-4 bg-gray-400 rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
        <p className={`${styles.paragraph} ml-2 text-textPrimaryColor`}>
          <span className="font-bold">FREE</span> Consultation For {" "}
          <span className="font-bold">First Time</span> Visitors
        </p>
      </div>
      {/* HEADLINE */}
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 text-textSecondaryColor font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
          Where <br className='sm:block hidden pb-[1rem]' /> {" "}
          <span className='form text-textSecondaryColor'>FORM</span> 
        </h1>

      </div>
      <h1 className="fontPrimary text-textSecondaryColor font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
        Meets Function
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elevating your online presence through functional and visually stunning design
      </p>
      {/* BUTTON */}
      <div className="ss:flex hidden md:mr-4 mr-0">
        <GetStarted />
      </div>
    </div>

    {/* RIGHT SIDE OF HERO */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      {/* ROBOT IMAGE */}
      {/* <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' /> */}
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      <div className='flex justify-center items-center py-6'>
        <Card3d />
      </div>
        
    </div>
    </div>

    <WorkBanner />
    </div>
  </section>
)

export default Hero
