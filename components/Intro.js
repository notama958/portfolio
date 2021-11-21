import styles from '../styles/home.module.css';
import Work from './Work';
import Skill from './Skill';
const Intro = ({ data }) => {
  return (
    <div className={styles.home}>
      <h2>{data.about.title}</h2>
      <p>{data.about.description}</p>

      <br />
      <br />
      <h3>My experiences</h3>
      <table id="work">
        <tbody>
          <tr>
            <th>Position</th>
            <th>Time</th>
            <th>Duties</th>
          </tr>
          {data.work.map((el, id) => (
            <Work item={el} key={id} />
          ))}
          {/* {console.log(data.work.map())} */}
        </tbody>
      </table>
      <br />
      <h3>My skills</h3>
      <table>
        {Object.entries(data.skills).map(([key, value], index) => (
          <Skill data={value} id={key} key={index} />
        ))}
      </table>
    </div>
  );
};
export default Intro;
