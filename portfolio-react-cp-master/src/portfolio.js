/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Mailing Delgado",
  title: "Hi all, I'm Mailing",
  subTitle: emoji(
    "Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1aiFBOWYM6LynDjYgoZ2AaWK2BMwf5sZ0/view",
  displayGreeting: true// Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MailingDelgadoMedina/",
 linkedin: "https://www.linkedin.com/in/mailing-delgado-medina/",
  gmail: "mailingdelgadomedina.it@gmail.com",
  dev: "https://dev.to/mailingdelgadomedina",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  //stackoverflow: "https://stackoverflow.com/users/13617304/mailing-delgado?tab=profile",
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
      "⚡ Integration of third party services such as Firebase"
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
    },
    {
      skillName: "NEXT.JS",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Projects",
  projects: [
    {
      image: require("./assets/images/borizon.png"),
      projectName: "Borizon (amazon clone)",
      projectDesc: "This is an amazon clone build with React.JS as a frontend, for backend I used Express, Axios, Firebase and for payments processing I used stripe",
      footerLink: [
        {
         name: "Visit Website",
          url: "http://www.boriac.com/"
        }
        //  you can add extra buttons here.
      ]
    }
    ,
    {
      image: require("./assets/images/weather.png"),
      projectName: "My Weather App",
      projectDesc: "This Project is Build in Plain HTML, CSS and Vanilla Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weatherapptiempo.netlify.app/"
        },
        {
          name: "View Code",
          url: "https://github.com/MailingDelgadoMedina/weather"
        }
      ]
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nova Southeastern University, College of Computing and Engineering",
      logo: require("./assets/images/nova.png"),
      subHeader: "MS Information Technology and Application Development",
      duration: "May 2021 - Present",
      
      // descBullets: [""]
    },
   
    {
      schoolName: "Southern Careers Institute, Powered by WOZ-U",
      logo: require("./assets/images/Sci.jpg"),
      subHeader: "Full-Stack Developer",
      duration: "May 2020 - March 2021",
      desc:
        "Took courses about Software Development, Web Applications, Front End, Back End, Databases, ...",
      // descBullets: [""]
    },
    {
      schoolName: "National University College",
      logo: require("./assets/images/nuc.png"),
      subHeader: "BS Network Technology and Applicatin Development",
      duration: "March 2015 - June 2019",
      desc: "",
      // descBullets: [
      //   ""
      // ]
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
    }
    // {
    //   Stack: "Programming",
    //   progressPercentage: "90%"
    // }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
//
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Mentor",
      company: "WOZ-U EDUCATION LLC.",
      companylogo: "https://coursereport-production.imgix.net/uploads/school/logo/614/original/246x0w.jpg?w=200&h=200",
      date: "November 2021 – Present",
      desc:
        "Directly in charge of the progress of 30-50+ students at one time. Responsible for mentoring,guiding, and teaching students in their current program. Lead video calls with students for weekly code reviews to explain, teach, and provide real-life examples of how different aspects of programming works. Monitors Slack channel to help and advise any students that have questions regarding their course work or other related topics. Provides feedback on the courses in the program and how we can implement our code examples in a better fashion. Reports to our Senior mentors and instructors for support and our ongoing individual development."
    },
    {
      role: "Code Mentor (Live Code Streaming)",
      company: "ProgramandoConMei https://www.twitch.tv/programandoconmei",
       companylogo: require("./assets/images/LogoForMobile.png"),
      date: "September 2021 – Present",
      desc:
        "I live code almost everyday. I help others understand the basics of Javascript and new technologies. I answer questions related to JS Stack. I help the hispanic community that doesn't know english to learn about web development and its concepts."
    },
    {
      role: "Remote Full Stack Developer (Volunteer Teacher Assistant",
      company: "NUC (Remote)",
      companylogo: require("./assets/images/nuc.png"),
      date: "Aug 2016– Present",
      desc:
        "Assist university students with Jnal proOect review, quality assurance and troubleshooting code rendering across multiple desktops and mobile devices. Assisting students with planning site designs, functionality, debugging and navigation. Test applications for responsiveness on any device. Assist students with making sure all parts of the full stack cycle are working together like front end, back end, and database.",
      descBullets: [
        "",
        
      ]
    },
   
    
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
    "Sharing knowledge and tips.",

  blogs: [
    {
      url:
        "https://dev.to/mailingdelgadomedina/guia-basica-de-comandos-mas-utilizados-en-cli-interfaz-de-linea-de-comandos-en-mac-y-windows-pn2",
      title: "Guia básica de comandos más utilizados en CLI Interfaz de Línea de comandos en Mac y Windows",
      description:
        "Basic command guide often used in CLI (Command Line Interface) in Mac and Windows"
    },
    {
      url: "https://dev.to/mailingdelgadomedina/como-instalar-gitbash-en-windows-10-4o0e",
      title: "Como Instalar GitBash en Windows 10.",
      description:
        "Guide of how to install GitBash on Windows 10"
    },
    {
      url: "https://dev.to/mailingdelgadomedina/imposter-syndrome-390j",
      title: "My Personal Opinion Of What Triggers Imposter Syndrome And What You Should Know When Starting To Code",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
