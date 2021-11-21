import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import { projectData } from '../external/mydata';
import styles from '../styles/Project.module.css';
import Image from 'next/image';
import smart_car from '../public/img/smart_car.png';
import todo1 from '../public/img/to-do-1.png';
import todo2 from '../public/img/to-do-2.png';
const ProjectItem = ({ item, pid }) => {
  const getExtraData = () => {
    let project = projectData.filter((e, id) => e.name === item.name);
    return project;
  };
  const getTech = (arr) => {
    if (arr.length > 0) return arr[0].tech.join(', ');
    else 'something went wrong';
  };

  return (
    <div className={styles.project}>
      <h2>{item.name.toUpperCase()}</h2>
      <small>{item.description}</small>
      <div className={styles.project_content}>
        <table>
          <tbody>
            <tr>
              <th>Technologies used</th>
            </tr>
            <tr>
              <td>{getTech(getExtraData())}</td>
            </tr>
          </tbody>
        </table>
        <span className={styles.project_img}>
          <Image
            src={getExtraData()[0].img}
            alt="Picture of the author"
            width={item.name === 'Virtual-Journey' ? 200 : 500}
            height={item.name === 'Virtual-Journey' ? 400 : 300}
          />{' '}
        </span>
      </div>
      <p>
        <a href={item.html_url}>
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          {'                            '}link to github
        </a>
      </p>
    </div>
  );
};
export default ProjectItem;
