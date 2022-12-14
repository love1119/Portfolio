import emoji from "react-easy-emoji";

export const greetings = {
  name: "James Yin",
  title: "Hi all, I'm James",
  description: `
			James is a hard-working, inquisitive Full Stack Developer who has mostly worked with JavaScript, TypeScript, React, Vue.js and Node.js.

			With strong problem-solving skills and the ability to adapt to any situation, he has been working remotely with international teams for the last 7 years, contributing to the development of outstanding solutions.
		`,
  resumeLink:
    "https://drive.google.com/file/d/1ey9qawXDPfTKEJjb3qKQOmc_3LexAiaT/view?usp=share_link",
};

export const openSource = {
  githubUserName: "love1119",
};

export const contact = {};

export const socialLinks = {
  url: "",
  linkedin: "https://www.linkedin.com/in/james-yin-4b23a219a/",
  github: "https://github.com/love1119",
  instagram: "",
  facebook: "",
  twitter: "",
};

export const skillsSection = {
  title: "What I do",
  subTitle:
    "FRONT END / FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Front End / Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Vue.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js / Nuxt.js"),
        emoji(
          "⚡ Building RESTful & GraphQL APIs using Node.js and Express.js"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Vuejs",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Nuxtjs",
          fontAwesomeClassname: "vscode-icons:file-type-nuxt",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "vscode-icons:file-type-node",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "logos:nginx",
        },
      ],
    },
    // {
    //   title: "Blockchain",
    //   lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       "⚡ Experience in developing Smart Contract using Solidity & Ethereum"
    //     ),
    //     emoji(
    //       "⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura"
    //     ),
    //     emoji(
    //       "⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles"
    //     ),
    //     emoji("⚡ Developing NFT Smart Contracts using ERC-721 Token Standard"),
    //     emoji(
    //       "⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS"
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Ethereum",
    //       fontAwesomeClassname: "logos:ethereum",
    //     },
    //     {
    //       skillName: "Solidity",
    //       fontAwesomeClassname: "logos:solidity",
    //     },
    //     {
    //       skillName: "Web3js",
    //       fontAwesomeClassname: "logos:web3js",
    //     },
    //     {
    //       skillName: "Metamask",
    //       fontAwesomeClassname: "logos:metamask-icon",
    //     },
    //     {
    //       skillName: "Ganache",
    //       fontAwesomeClassname: "logos:ganache-icon",
    //     },
    //   ],
    // },
  ],
};

export const SkillBars = [
  {
    Stack: "HTML/CSS", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "JavaScript/TypeScript",
    progressPercentage: "90",
  },
  {
    Stack: "React/Next",
    progressPercentage: "90",
  },
  {
    Stack: "Vue/Nuxt",
    progressPercentage: "90",
  },
  {
    Stack: "NodeJS",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Vancouver Island University",
    subHeader: "Bachelor's degree in Computer Science",
    duration: "September 2008 - April 2012",
  },
];

export const experience = [
  {
    role: "Professional Freelancer",
    company: "Self Employed",
    companylogo: "/img/icons/common/self-employed.jpg",
    date: "Oct 2015 – Present",
    desc: "I have been working as a freelancer for the last 7 years",
    descBullets: [
      "Contributed to many projects using React, Vue.js, and Node.js.",
      "Worked mostly with startups, in small teams, and was involved in all of the project lifecycle phases.",
      "Architected and developed complex solutions using both NoSQL and SQL databases.",
    ],
  },
  {
    role: "Senior Frontend Developer",
    company: "Liven",
    companylogo: "/img/icons/common/liven.jpg",
    date: "Aug 2021 – Jul 2022",
    desc: "Liven is a global tech start-up and winner of Richard Branson's Extreme Tech Challenge for Blockchain and Digital Payments.",
    descBullets: [
      "Created mobile-first, responsive interfaces using Vue.js and integrated JSON APIs.",
      "Improved the user experience to make the app faster and help efficiently load webpages for users with a slow internet connection or outdated devices using Nuxt.js.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Kiid",
    companylogo: "/img/icons/common/kiid.jpg",
    date: "Aug 2020 - Aug 2021",
    desc: "Kiid Concierge is a complete childcare solution for your employees. Our subscription gives them to access an on-demand service for booking trusted babysitters, early childhood educators, and tutors. Add Kiid Concierge to your benefits program to help promote a healthy work-life balance.",
  },
  {
    role: "Software Engineer",
    company: "Perform Group, LLC",
    companylogo: "/img/icons/common/perform.jpg",
    date: "Jul 2019 - Jul 2020",
    desc: "",
    descBullets: [
      "Helped customers with eCommerce and marketplaces using our leading-edge Avetti Commerce Platform",
      "Designed the application architecture on TypeScript, React, and Redux",
      "Designed RESTful APIs with a subteam of back-end developers",
    ],
  },
  {
    role: "Vue / Node Developer",
    company: "IT Horizons",
    companylogo: "/img/icons/common/horiizon.jpg",
    date: "Nov 2018 - Jun 2019",
    desc: "",
    descBullets: [
      "Developed a web interface using Vue.js to perform CRUD operations on tasks with large files, driving up the performance of the workflow pipeline by 60%.",
      "Designed a credit payment system with premium plans and integrated the application with Stripe API using Node.js to accept online payments.",
      "...",
    ],
  },
  {
    role: "Full Stack React Developer",
    company: "Waterbear Cloud",
    companylogo: "/img/icons/common/watercloud.jpg",
    date: "Apr 2017 - Nov 2018",
    desc: "",
    descBullets: [
      "Developed a booking application using React, Next.js, and Node.js to let users book a service online and get real-time updates on their progress, increasing the customer acquisition and retention rate by 55% in three months.",
      "Designed the architecture of the front end, back end, and database schema, which I then deployed on different Docker containers to achieve better load balancing, health monitoring, and scalability.",
      "...",
    ],
  },
];

export const projects = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "",
    link: "",
  },
  {
    name: "AtlasMart",
    desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
    github: "",
  },
  {
    name: "Technota (Forum)",
    desc: "Get hands-on experience in technical skills with Technota",
    github: "",
  },
  {
    name: "Shopaza (Ecommerce)",
    desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
    github: "",
  },
];

export const feedbacks = [
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
  {
    name: "John Smith",
    feedback:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
  },
];

// See object prototype on SEO.jsx page
export const seoData = {
  title: "James Yin",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "James Yin",
  image: "",
  url: "",
  keywords: [
    "James",
    "James Yin",
    "@love1119",
    "jamesyin",
    "Portfolio",
    "James Portfolio ",
    "James Yin Portfolio",
  ],
};
