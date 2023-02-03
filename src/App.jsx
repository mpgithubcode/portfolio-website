import styles from './style';
import { Navbar, Hero, WorkBanner, Introduction, CardReusableComponent, CardWebApps, CTA, Footer } from './components';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Introduction />
          <CardReusableComponent />
          <CardWebApps />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App
