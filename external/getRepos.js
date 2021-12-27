import axios from 'axios';
import { myData } from './mydata';
const selectedRepos = [
  'To-do-app-upgrade',
  'SMART_CAR',
  'Virtual-Journey',
  'MUSIC_LED',
  'reaktor',
];
const getRepos = async () => {
  try {
    const username = myData.githubname;
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    );
    let repos = res.data.items.filter((el) => {
      if (selectedRepos.includes(el.name)) return el;
    });
    return repos;
  } catch (e) {
    console.log(e);
  }
};
export default getRepos;
