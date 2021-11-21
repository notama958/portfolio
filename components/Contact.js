import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.home}>
      <h2>
        Yen Tran - 3<small>rd</small> year Software Engineering student (TAMK)
      </h2>
      <ul className="social-icons">
        <li>
          <a>{data.email.replace('@', '(at)')}</a>
        </li>
        <li>
          <a href={data.socialLinks.linkedin}>
            <FontAwesomeIcon icon={faLinkedin} /> Linkedin
          </a>
        </li>
        <li>
          <a href={data.socialLinks.github}>
            <FontAwesomeIcon icon={faGithub} /> Github
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;
