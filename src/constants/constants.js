import { SiJavascript, SiAdobephotoshop, SiMaterialui, SiMongodb, SiFirebase} from 'react-icons/si';
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiGitBranch} from 'react-icons/di';
import { FiFigma} from 'react-icons/fi';
import {BiCog} from 'react-icons/bi';



export const projects = [
  {
    title: 'Rock paper scissors',
    description: "As part of a front end mentor challenge i was given a figma file and used HTML, CSS and JavaScript to complete the challenge.",
      image: '/images/rockpaper.png',
      tags: ['HTML', 'CSS', 'JAVASCRIPT'],
    source: 'https://github.com/shaunvan119/rock-paper-scissors',
    visit: 'https://shaunvan119.github.io/rock-paper-scissors/',
    id: 0,
  },
  {
    title: 'E-Commerce',
    description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: '/images/2.png',
    tags: ['React', 'JavaScript'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 1,
  },
  {
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  //{ year: 2017, text: 'Started my journey', },
  //{ year: 2018, text: 'Worked as a freelance developer', },
  //{ year: 2019, text: 'Founded JavaScript Mastery', },
  //{ year: 2020, text: 'Shared my projects with the world', },
  //{ year: 2021, text: 'Started my own platform', },
  { logo: <SiJavascript size="3rem" color='yellow'/>, text: 'JavaScript', },
  { logo: <DiHtml5 size="3rem" color='#e34c26'/>, text: 'HTML', },
  { logo: <DiCss3 size="3rem" color='#2965f1'/>, text: 'CSS', },
  { logo: <SiMaterialui size="3rem" color='#757de8'/>, text: 'Material UI', },
  { logo: <FiFigma size="3rem" color='orange'/>, text: 'Figma', },
  { logo: <SiAdobephotoshop size="3rem" />, text: 'Adobe photoshop', },
  { logo: <DiReact size="3rem" color='#61dbfb'/>, text: 'React.js', },
  { logo: <DiGithubBadge size="3rem"/>, text: 'github', },
  { logo: <DiGitBranch size="3rem" color='orange'/>, text: 'git', },
  { logo: <SiMongodb size="3rem" color='#4db33d'/>, text: 'MongoDB', },
  { logo: <SiFirebase size="3rem" color='#FFCB2B'/>, text: 'Firebase', },
  { logo: <BiCog size="3rem"/>, text: 'Api', }
];