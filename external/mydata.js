const smart_car = '/img/smart_car.png';
const todo1 = '/img/todo1.png';
const todo2 = '/img/todo2.png';
const music_led = '/img/music_led.png';
const vj = '/img/vj.png';
const reak = '/img/reaktor.png';
const pregit = '/img/pregit.png';
const ties = '/img/ties.png';

export const myData = {
  githubname: 'notama958',
  name: 'Yen Tran',
  email: 'ngocyentran1505@gmail.com',
  address: 'Orivedenkatu 5C 33720 Tampere',
  about: {
    title: 'Xin Chao/Moika/Hi!🙇‍♀️🙇‍♀️🙇‍♀️',
    description:
      "I'm Yen Tran, a Vietnamese student majoring in Software Engineering at Tampere University of Applied Sciences.\nAt the moment, I'm looking for an internship opportunity for my thesis topic . My interests are IoT, Web Development and Cloud Techonologies, nonetheless, It would be awesome to learn and cultivate other fields as well.",
  },
  work: [
    {
      title: 'Software Test Automation trainee',
      company: 'Etteplan Embedded Finland Oy',
      from: '05/2021',
      to: '08/2021',
      desc: "I had a chance to immerse myself into various hardware skills, with testing laboratory embedded devices as well as advance myself more on Python and Docker. My main tasks are writing python classes and robot files to run test for all lab devices at Etteplan's lab.",
    },
    {
      title: 'Student Assistant',
      company: 'Tampere Univeristy of Applied Sciences',
      from: '10/2021',
      to: '12/2021',
      desc: "Work as a student tutor for junior students in Software Engineering Department, where main tasks involve in holding self-studying tutor classrooms both online and on-site at TAMK, support student with homework problems, and teacher's assistant",
    },
    {
      title: 'Embedded Software Trainee',
      company: 'ABB',
      from: '05/2022',
      to: '08/2022',
      desc: "Working with ACS380 - machinery drive in C/C++, more detail tasks I will update later on",
    },
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/yen-tran-223910110/',
    github: 'https://github.com/notama958',
  },
  skills: {
    'Programming Language': ['C/C++', 'JavaScript', 'Python'],
    Web: ['Reactjs', 'Redux', 'mySQL', 'MongoDB', 'Nodejs'],
    Embedded: [
      'Raspberry pi',
      'Arduino',
      'lab embedded devices',
      'UART communication',
      'I2C',
    ],
    Container: ['Docker'],
    Testing: ['Robot framework','Selenium','WebdriverIO'],
  },
  other: 'https://github.com/notama958/portfolio',
};

export const projectData = [
  {
    name: 'To-do-app-upgrade',
    tech: ['JavaScript', 'React', 'Redux', 'SQLite', 'Knexjs'],
    img: todo2,
    alt: 'Upgraded UI for TO-DO-List project',
  },
  {
    name: 'reaktor',
    tech: ['React', 'Redux', 'ExpressJs', 'MongoDB', 'Docker'],
    img: reak,
    alt: 'reaktor web full-stack pre-assignment 2022',
  },
  {
    name: 'TO-DO-List',
    tech: [
      'JavaScript',
      'React',
      'Redux',
      'Nodejs',
      'MongoDB',
      'Docker',
      'Chai/Mocha',
    ],
    img: todo1,
  },
  {
    name: 'SMART_CAR',
    tech: [
      'Arduino',
      'C++',
      'ESP8266',
      'Lidar sensor',
      'compass sensor',
      'Pulse-width modulation',
      'xhttp',
    ],
    img: smart_car,
    alt: 'arduino-project'
  },
  {
    name: 'Virtual-Journey',
    tech: ['React Native'],
    img: vj,
    alt:'React-Native'
  },
  {
    name: 'MUSIC_LED',
    tech: ['Python', 'Raspberry Pi'],
    img: music_led,
    alt: 'Home led control via Siri voice',
  },
  {
    name: 'Ties2022',
    tech:['Python',"OpenCV",'I2C','Adafruit libaries',"Raspberry Pi"],
    img: ties,
    alt:"ties2022"
  },
  {
    name: 'pregit',
    tech:['Python'],
    img:pregit,
    alt:"pregit"
  },

];
// export default myData;
