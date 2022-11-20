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
  subTitle: "FRONT END / FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Front End / Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js and Vue.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js / Nuxt.js"),
        emoji("⚡ Building RESTful & GraphQL APIs using Node.js and Express.js"),
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
    role: "Frontend Developer",
    company: "Duseca Software",
    companylogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Apr 2022 – Jun 2022",
    desc: "I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.",
  },
  {
    role: "API Engineer",
    company: "Duseca Software",
    companylogo: "/img/icons/common/dusecaSoftware.jpg",
    date: "Jan 2022 – Mar 2022",
    desc: "I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "Bleed-AI",
    companylogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
  },
  {
    role: "Backend Developer",
    company: "Wapidu",
    companylogo: "/img/icons/common/wapidu.jpg",
    date: "Sept 2021",
    desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
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
