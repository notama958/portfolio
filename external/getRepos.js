import axios from 'axios';
import { myData } from './mydata';
const selectedRepos = [
  'To-do-app-upgrade',
  'SMART_CAR',
  'Virtual-Journey',
  'TO-DO-List',
  'MUSIC_LED',
];
//822af1aee25756745d1c61498ca463edaaf1edf7
const getRepos = async () => {
  try {
    const username = myData.githubname;
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    );
    let repos = res.data.items.filter((el) => {
      if (selectedRepos.includes(el.name)) return el;
    });
    //console.log(repos);
    return repos;
  } catch (e) {
    console.log(e);
  }
};
export default getRepos;
