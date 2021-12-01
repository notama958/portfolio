import styles from './Home.module.css';
import Contact from '../components/Contact';
import Intro from '../components/Intro';
import ProjectItem from './ProjectItem';
import Other from './Other';
const ModalView = ({ data, selection, pid, projects }) => {
  return (
    <div className={styles.modal}>
      {selection === 'contact' ? <Contact data={data} /> : ''}
      {selection === 'home' ? <Intro data={data} /> : ''}
      {selection === 'other' ? <Other data={data} /> : ''}
      {pid !== null && projects.length && selection === 'project' ? (
        <ProjectItem item={projects[pid]} pid={pid} />
      ) : (
        ''
      )}
    </div>
  );
};
export default ModalView;
