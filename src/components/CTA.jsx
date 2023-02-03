import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-textPrimaryColor`}>Sign Up Now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] text-textPrimaryColor mt-5`}>
        Ready to get your web development project started?
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text="Contact Now"/>
    </div>
  </section>
)

export default CTA
