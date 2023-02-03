import { bill } from '../assets';
import styles, { layout } from '../style';

const CardReusableComponent = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-textPrimaryColor`}>
          Expertly Designed Reusable Components
        </h2>
        <p className={`${styles.paragraph} text-textPrimaryColor max-w-[470px] mt-5`}>
          I design reusable components and web apps that streamline development and improve website maintainability.
        </p>

      </div>
  </section>
)

export default CardReusableComponent
