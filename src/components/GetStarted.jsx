import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[190px] h-[70px] rounded-lg bg-textPrimaryColor p-[5px] mt-10 cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary rounded-lg w-[100%] h-[100%] `}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-fontPrimary font-medium text-[18px] leading-[23px]'>
            <span className="flex flex-row text-textPrimaryColor">Get Started <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] text-textPrimaryColor object-contain"/></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
