// import smart_car from '/img/smart_car.png';
// import todo1 from '/img/to-do-1.png';
// import todo2 from '/img/to-do-2.png';
// import music_led from '/img/music_led.png';
// import vj from '/img/vj.png';
const smart_car = '/img/smart_car.png';
const todo1 = '/img/to-do-1.png';
const todo2 = '/img/to-do-2.png';
const music_led = '/img/music_led.png';
const vj = '/img/vj.png';

export const myData = {
  githubname: 'notama958',
  name: 'Yen Tran',
  email: 'ngocyentran1505@gmail.com',
  address: 'Orivedenkatu 5C 33720 Tampere',
  about: {
    title: 'Xin Chao/Moika/Hi!🙇‍♀️🙇‍♀️🙇‍♀️',
    description:
      "I'm Yen Tran, a Vietnamese student majoring in Software Engineering at Tampere University of Applied Sciences.\nAt the moment, I'm looking for an internship opportunity for this summer 2022. My interests are IoT, Web Development and Cloud Techonologies, nonetheless, It would be awesome to learn and cultivate other fields as well.",
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
    Testing: ['Robot framework'],
  },
};

export const projectData = [
  {
    name: 'To-do-app-upgrade',
    tech: ['JavaScript', 'React', 'Redux', 'json-server'],
    img: todo2,
    alt: 'Upgraded UI for TO-DO-List project',
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
  },
  {
    name: 'Virtual-Journey',
    tech: ['React Native'],
    img: vj,
  },
  {
    name: 'MUSIC_LED',
    tech: ['C++', 'Arduino', 'Python', 'Raspberry Pi', 'UART communication'],
    img: music_led,
  },
];
// export default myData;
