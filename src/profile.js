// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Akshay Thakur",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a full-stack web developer. I have built many web applications using MERN Stack. I love learning new technologies. I work well both as an individual contributor and also as a team member."

 
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  // {
  //   name: "Java",
  //   // svg: '',
  //   faClass: "fab fa-java",
  // },
  // {
  //   name: "PHP",
  //   // svg: '',
  //   faClass: "fab fa-php",
  // },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  // {
  //   name: "AWS",
  //   // svg: '',
  //   faClass: "fab fa-aws",
  // },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "H&M Inspired",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/AkshayThakur1995",
    git:"https://github.com/AkshayThakur1995/H-and-M-Project",
    demo:"https://akshaythakur1995.github.io/H-and-M-Project/",
    des:"H&M is a clothing website, User can add items to the cart, use filters to check items by Price and category, login and make payments"
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "PluralSight Clone",
    skills: ["HTML, CSS, JS, Nodejs, ejs"],
    url: "https://github.com/AkshayThakur1995",
    git:"https://github.com/AkshayThakur1995/pluralsight-backend",
    demo:"https://pluralsight.vercel.app/",
    des:"Pluralsight offers a variety of video training courses for software developers, Have added functionality to select courses, watch videos, buy premium membership "
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Epic Games",
    skills: ["HTML, CSS, React, MongoDb"],
    url: "https://github.com/AkshayThakur1995",
    git:"https://github.com/cnu01/Epic-Clone",
    demo:"https://epic-game-cw.herokuapp.com/",
    des:"A website for gamers to explore and buy Games. Filter games according to price, genre, Watch Demos of Games and details"
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
// const miscellaneous = [
//   {
//     // Add image in './styles/images.css' in #misc1
//     id: "misc1",
//     name: "Miscellaneous 1",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc2
//     id: "misc2",
//     name: "Miscellaneous 2",
//     url: "https://github.com/kaustubhai",
//   },
//   {
//     // Add image in './styles/images.css' in #misc3
//     id: "misc3",
//     name: "Miscellaneous 3",
//     url: "https://github.com/kaustubhai",
//   },
// ];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Say Hi!";
const contact = {
  pitch:
    "Feel free to get in touch and making somethig amazing. Looking forward to working with you",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/AkshayThakur1995",
  facebook: "https://facebook.com",
  // twitter: "https://twitter.com",
  instagram: "https://instagram.com",
  linkedin: "https://www.linkedin.com/in/akshay-thakur-99619a217/",
  resume: "https://drive.google.com/file/d/1gTUdNydvwg-ks1pb3ahuQFUxIl3QV4NB/view?usp=sharing",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  // miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
