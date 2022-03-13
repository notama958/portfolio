import Head from 'next/head';
import { useState, useEffect } from 'react';
import ModalView from '../components/Modal';
import styles from '../components/Home.module.css';
import { myData } from '../external/mydata';
import getRepos from '../external/getRepos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  const [selection, setSelection] = useState('home');
  const [projects, setProjects] = useState([]);
  const [pid, setPid] = useState(null);
  const [modalView, setModalView] = useState(myData);
  useEffect(async () => {
    console.log(selection);
    const repos = await getRepos();
    setProjects(repos);
  }, [selection]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Yen Tran's Porfolio</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.navbar}>
          <div
            onClick={(e) => {
              setSelection('home');
              setModalView(myData);
            }}
            className={`card ${selection == 'home' ? 'selected' : ''}`}
          >
            Home
          </div>
          <div className={`card ${selection == 'project' ? 'selected' : ''}`}>
            <span onClick={(e) => setSelection('project')}>Projects</span>
            <ul
              className={`card_content ${
                selection.includes('project') ? 'visible' : ''
              }`}
            >
              {projects !== undefined
                ? projects.map((el, id) => (
                    <li
                      onClick={(e) => {
                        setSelection('project');
                        setPid(id);
                        setModalView(el);
                      }}
                      className={`item ${pid === id ? 'highlighted' : ''}`}
                      key={id}
                    >
                      {el.name.charAt(0).toUpperCase() +
                        el.name.substring(1).toLowerCase()}
                    </li>
                  ))
                : ''}
            </ul>
          </div>
          <div
            onClick={(e) => {
              setSelection('contact');
              setModalView(myData);
            }}
            className={`card ${selection == 'contact' ? 'selected' : ''}`}
          >
            Contact
          </div>
          <div
            className={`card ${selection == 'other' ? 'selected' : ''}`}
            onClick={(e) => {
              setSelection('other');
              setModalView(myData);
            }}
          >
            Other
          </div>
        </div>{' '}
        <ModalView
          data={modalView}
          selection={selection}
          pid={pid}
          projects={projects}
        />
      </div>
      <style jsx>{`
        .card {
          position: relative;
        }
        .card.selected {
          background-color: #fff0f5;
          color: blue;
          border-radius: 10px;
        }
        .card_content {
          display: none;
          position: relative;
          min-width: 160px;
          z-index: 1;
        }
        .card_content.visible {
          display: block;
        }
        .card_content li:hover {
          padding: 10px;
          border-radius: 10px;
          /* margin: auto; */
          color: black;
        }
        .item.highlighted {
          background-color: #b0e0e6;
          padding: 10px;
          border-radius: 10px;
          /* margin: auto; */
          color: black;
        }
        @media (max-width: 700px) {
          .card_content {
            display: none;
            position: relative;
            min-width: 160px;
            max-height: 100px;
            z-index: 1;
            overflow-y: scroll;
            scroll-behavior: smooth;
          }
        }
        @media (max-width: 440px) {
          .card_content {
            display: none;
            position: relative;
            min-width: 160px;
            max-height: 100px;
            z-index: 1;
            overflow-y: scroll;
            scroll-behavior: smooth;
            padding:0;
          }
          .card {
            position: relative;
            padding:auto;
          }
        }
      `}</style>
      <footer>
        <small>
          <i>"Eager to learn new things and enjoy solving problems"</i>{' '}
        </small>
        <a>
          <FontAwesomeIcon icon={faCopyright} /> Yen Tran
        </a>{' '}
      </footer>
    </div>
  );
}
