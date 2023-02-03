import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardWebApps = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-textPrimaryColor`}>
        Streamlined Web Apps
      </h2>
      <p className={`${styles.paragraph} text-textPrimaryColor max-w-[470px] mt-5`}>
        My focus on user experience and modular design ensures easy integration and scalability.
      </p>
      {/* <Button styles='mt-10' text="More" /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="" className='w-[100%] h-[100%]'/>
      
    </div>
  </section>
)

export default CardWebApps
