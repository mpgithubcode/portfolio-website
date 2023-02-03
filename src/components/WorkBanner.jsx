import { workHistory } from '../constants';
import styles from '../style'
 
const WorkBanner = () => (
  <div className={`flex flex-col w-screen justify-center px-5`}>
    <p class="pt-3 text-textSecondaryColor">Companies I've Worked With</p>
    <div className={`${styles.flexCenter} my-2`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {workHistory.map((company) => (
          <div key={company.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
            <a href={company.link}>
              <img src={company.icon} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain filter grayscale brightness-200" />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default WorkBanner
