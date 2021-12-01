import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Other = ({ data }) => {
  return (
    <div className={styles.home}>
      <p className={styles.title}>Website made with Nextjs</p>
      <ul className="social-icons">
        <li>
          <a href={data.other}>
            <FontAwesomeIcon icon={faGithub} /> Repo's github
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Other;
