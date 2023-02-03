import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-textPrimaryColor text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-textPrimaryColor text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Introduction = () => (
  <section id='About' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h1 className={`${styles.heading2} text-textPrimaryColor`}>
        👋 Hi, I'm Mario
      </h1>
      <p className={`${styles.paragraph} text-textPrimaryColor max-w-[470px] mt-5`}>
        I'm a highly motivated, self-starting Front End Web Developer with 3+ years of experience in HTML, CSS, JavaScript, responsive design and building reusable components. Actively expanding knowledge of back-end programming to become full stack web developer.
      </p>
      <Button styles="mt-10" text="Get Started"/>
    </div>
    {/* FEATURE CARDS */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
) 

export default Introduction
