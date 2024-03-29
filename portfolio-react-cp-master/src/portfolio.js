﻿/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mailing Delgado",
  title: "Hi all, I'm Mailing",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1c0Xy-9A1ETPCenF2nedGZzDiL45Oc6Qf/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MailingDelgadoMedina/",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "mailingdelgadomedina.it@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/13617304/mailing-delgado?tab=profile",
 // instagram: 'https://www.instagram.com/davidrakosi/',
  //twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Broward College",
      logo: require("./assets/images/broward.png"),
      subHeader: "Certifications COMPTIA A+ S+ N+",
      duration: "May 2020 - Present",
      desc: "",
      descBullets: [
        ""
      ]
    },
    {
      schoolName: "Southern Careers Institute, Powered by WOZ-U",
      logo: require("./assets/images/Sci.jpg"),
      subHeader: "Full-Stack Developer",
      duration: "May 2020 - March 2021",
      desc:
        "Took courses about Software Development, Web Applications, Front End, Back End, Databases, ...",
      descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
//
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Remote Full Stack Developer (Volunteer Teacher Assistant",
      company: "NUC (Remote)",
      companylogo: require("./assets/images/nuc.png"),
      date: "Aug 2019 – Present",
      desc:
        "Assist university students with Jnal proOect review, quality assurance and troubleshooting code rendering across multiple desktops and mobile devices. Assisting students with planning site designs, functionality, debugging and navigation. Test applications for responsiveness on any device. Assist students with making sure all parts of the full stack cycle are working together like front end, back end, and database.",
      descBullets: [
        "",
        
      ]
    },
    {
      role: "Customer Service Representative",
      company: "Teleperformance USA Inc.",
      companylogo: require("./assets/images/Teleperformance.png"),
      date: "August 2020 – March 2021",
      desc:
        "Assist members with premium payments and processing, and change drug prescription plans for Medicare part D. Search for information on medication and copayments in-network pharmacies. Fax Coverage Determinations, Tier exceptions, and Redeterminations to Drs. offces. Document highly sensitive information, escalating calls and Filling grievances."
    },
    {
      role: "Software Development (Volunteer Teacher Assistant)",
      company: "NUC (Campus)",
       companylogo: require("./assets/images/nuc.png"),
      date: "June 2016 – March 2019",
      desc:
        "Assist university students with Jnal proOect review, quality assurance and troubleshooting code rendering across multiple desktops and mobile devices. Assisting students with planning site designs, functionality, debugging and navigation. Test applications, responsiveness for any device. Assist students with making sure all parts of the full stack cycle are working together like front end, back end, and    database."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "MailingDelgadoMedina", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects",
  projects: [
    {
      image: require("./assets/images/CL.png"),
      projectName: "Coded Lashes",
      projectDesc: "LApplication built for an Aesthetics parlor for a real customer who needed a website for their business. Application allows customers to sign, book appointments, instant message and view services. Technologies used MySLQ, ReactJs, Bootstrap and React/Bootstrap, Chatra, Axios, Postman, and Photoshop",
      footerLink: [
        {
          name: "Visit Website",
          url: "fA"
        }
        //  you can add extra buttons here.
      ]
    }
    /*
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
    */ 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "), //☎️
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
 // number: "(323) 768 0674",
  email_address: "mailingdelgadomedina.it@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
