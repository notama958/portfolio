import styles from './Home.module.css';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import ProjectItem from './ProjectItem';
const ModalView = ({ data, selection, pid, projects }) => {
  return (
    <div className={styles.modal}>
      {selection === 'contact' ? <Contact data={data} /> : ''}
      {selection === 'home' ? <Intro data={data} /> : ''}
      {pid !== null && projects.length && selection === 'project' ? (
        <ProjectItem item={projects[pid]} pid={pid} />
      ) : (
        ''
      )}
    </div>
  );
};
export default ModalView;
