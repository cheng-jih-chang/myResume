// File: src/data/resumeData.en.js
// Author: Cheng
// Description: Resume data in English with added descriptions for various sections

import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: 'Cheng-Jih Chang',
  License: 'Civil Engineering Technician',
  education: [
    {
      school: 'CECI Engineering Consultants, Inc., Taiwan',
      degree: 'Structural Engineer',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: 'National Taiwan University, Department of Civil Engineering',
      degree: 'Master degree',
      duration: '2020/09 - 2022/09',
    },
    {
      school: 'National Chi Nan University, Department of Civil Engineering',
      duration: '2016/09 - 2020/07',
    },
  ],
  jobApplication:
    'Job Title: Front-end web engineer, full/back-end web engineer',
  skills: {
    progarmming: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Vue.js',
      'Node.js',
      'Python',
      'LabVIEW',
      'git',
      'Matlab',
      'Wolfram Mathematica',
    ],
    languages: ['Mandarin', 'Taiwanese (native)', 'English (intermediate)'],
    softskills: [
      'Communication & Coordination',
      'Teamwork',
      'Independent Work',
      'Problem Solving',
    ],
  },
  selfIntro: {
    selfIntroSimple: `I’m an engineering professional with a background in structural design and a passion for web development. Skilled in JavaScript, Vue, React, and backend tools like Node.js and Python, I bring strong problem-solving and analytical abilities. I’m eager to apply my skills in a frontend or full-stack role to build impactful digital products.`,
    selfIntroComplete: `I’m a structural engineering professional turned web developer, passionate about solving technical challenges. My experience in large-scale infrastructure projects honed my design skills and cross-functional collaboration.
Driven by a desire to streamline workflows, I built a seismic design tool used in the Chaozhou Railway Factory project—this sparked my shift into software. Now, I work with JavaScript, Vue, React..., Key projects include:
Crypto Index Tracker – Real-time crypto data app with custom backend and API integration.
Sunny Habit App – Firebase-powered habit tracker with stats and nested lists.
Personal Resume Site – A responsive, bilingual portfolio built with Vue.js.
I’m eager to contribute to digital products with strong logic, practical skills, and continuous learning.`,
  },

  projects: [
    {
      name: 'Crypto Index App',
      url: 'https://crypto-index-app.web.app/',
      type: ['front', 'resume', 'Home', 'project'],
      descriptionSimple:
        'A React-based cryptocurrency tracking platform integrating multiple APIs and a custom backend for historical K-line data. Deployed on Firebase. Strengthens skills in API integration and data visualization.',
      descriptionComplete:
        'A cryptocurrency index tracking platform built with React and deployed on Firebase. Integrates CoinGecko and Binance APIs, along with a custom backend hosted on Render to serve K-line charts and historical price data. Displays prices and charts for multiple assets with responsive design and state management. Enhances practical API integration and data visualization skills.',
      githubLink: 'https://github.com/LazyBear168/crypto-index-app',
      youtubeLink: 'https://www.youtube.com/embed/ug8ybXsst6U',
      slug: 'crypto-index-app',
    },
    {
      name: 'Habit Tracker',
      url: 'https://sunny-habit-app.web.app/',
      type: ['front', 'resume', 'Home', 'project'],
      descriptionSimple:
        'A React.js habit tracker featuring nested lists, check-in tracking, and Firebase authentication. Focuses on interactive UX and data integration.',
      descriptionComplete:
        'A habit tracking tool built with React.js, supporting nested lists, daily check-ins, custom habits, and statistics visualization. Integrated with Firebase for data storage and authentication. Strengthens frontend-backend integration and user experience design skills.',
      githubLink: 'https://github.com/LazyBear168/habit-tracker',
      youtubeLink: 'https://www.youtube.com/embed/Kf4CASg4BnQ',
      slug: 'habit-tracker',
    },
    {
      name: 'Chengs Resume',
      url: 'https://chengs-resume.web.app/',
      type: ['front', 'Home', 'project'],
      descriptionSimple:
        'A personal resume website showcasing background, skills, and projects with responsive layout and bilingual support (you are here!).',
      descriptionComplete:
        'A personal resume site built with Vue.js, using Vue Router and Vue i18n for page navigation and language management. Features bilingual (EN/ZH) support and responsive layout, covering self-introduction, skills, education, and projects. Demonstrates frontend and internationalization skills. (Yes, you’re on this site!)',
      githubLink: 'https://github.com/LazyBear168/myResume',
      youtubeLink: 'https://www.youtube.com/embed/y5jfSLDpivs',
      slug: 'chengs-resume',
    },
    {
      name: 'Render Server for Crypto Data',
      url: 'https://crypto-index-backend.onrender.com/kline',
      type: ['back', 'project'],
      descriptionSimple:
        'Backend API for serving historical crypto prices and K-line data, integrating CoinGecko and Binance APIs. Deployed on Render.',
      descriptionComplete:
        'A backend server built with Node.js and Express, providing APIs for historical crypto prices and K-line chart data. Integrates CoinGecko and Binance APIs with automatic updates and caching. Deployed on Render and used by the Crypto Index Tracker frontend. Try out the /kline endpoint.',
      githubLink: 'https://github.com/LazyBear168/crypto-index-backend',
      slug: 'render-server-crypto-backend',
    },
    {
      name: 'Click here for more',
      url: '/projects/personal',
      type: ['Home', 'resume', 'front', 'back'],
    },
    {
      name: '[AI Poster] Multimodal AI for Stock Prediction – Using CNN, BERT, and GAT to Demonstrate the Value of Multimodal Data and Graph Neural Networks (GNNs) in Financial Markets | stanCode',
      url: 'https://www.youtube.com/watch?v=pWVPCW4UvTI&t=218s&ab_channel=stanCode%E6%A8%99%E6%BA%96%E7%A8%8B%E5%BC%8F%E6%95%99%E8%82%B2%E6%A9%9F%E6%A7%8B',
      type: ['group'],
      descriptionSimple: '',
      descriptionComplete:
        'This project aimed to enhance stock price prediction accuracy by combining multimodal data sources—news text and candlestick chart data—through multimodal training. We applied Graph Neural Networks (GNNs) for feature transformation and fusion, overcoming the limitations of relying on a single data type. The project demonstrated the potential of advanced GNN techniques and multimodal inputs in financial market forecasting. My primary role was processing textual data and designing the BERT-based language model architecture.',
      githubLink:
        'https://github.com/stanCodeTW/AI-Projects/tree/main/SC201Mar2024Projects/GroupE',
      youtubeLink: 'https://www.youtube.com/embed/pWVPCW4UvTI?start=218',
      slug: 'ai-stock-prediction',
    },
  ],

  contact: {
    phone: '0983-728-258',
    email: 'chengjih77@gmail.com',
    address: 'Dali District, Taichung City',
  },

  research: {
    publish: {
      title:
        'Journal Publication: Building structure with elastoplastic bilinear model under multi-dimensional earthquake forces',
      url: 'https://academic.oup.com/jom/article/doi/10.1093/jom/ufac045/6874529',
    },
    thesis: {
      title:
        'Master’s Thesis: Describing Plastic Behavior Under Multiaxial Loading Using a Plasticity Model',
      url: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015161%22.&searchmode=basic',
    },
    tools: [
      'Mathematica for symbolic derivation',
      'MATLAB simulation',
      'LabVIEW experimental program maintenance',
    ],
  },
  experiences: [
    {
      title: 'Research Assistant',
      duration: '2020/09 - 2022/07',
      description:
        'Lab experiments, LabVIEW, Grapher, MTS controller procurement.',
    },
    {
      title: 'Teaching Assistant - Elasticity',
      duration: '2021/09 - 2022/01',
      description:
        'Grading, mentoring graduate students, assisting professor communication.',
    },
    {
      title: 'Teaching Assistant - Plasticity',
      duration: '2022/02 - 2022/06',
      description:
        'Grading, mentoring graduate students, assisting professor communication.',
    },
  ],

  workDetails: [
    {
      project: 'Chaozhou Railway Factory',
      description:
        'Served as structural design lead for steel buildings and underground structures. Responsible for modeling, structural analysis, BIM integration, and coordination. Collaborated with MEP, architectural, and equipment teams. Also developed internal tools to improve design precision and efficiency, demonstrating initiative and technical potential.',
    },
    {
      project: 'Taoyuan Railway Underground Project',
      description:
        'Participated in design of underground structures such as emergency exits and ventilation shafts. Gained familiarity with underground construction methods, phased excavation, and design detailing. Developed strong logic and project coordination skills.',
    },
    {
      project: 'Taoyuan MRT Green Line',
      description:
        'Handled structural design and load analysis of multiple small facility buildings along the line. Worked with multidisciplinary teams to coordinate design adjustments and drawing revisions. Built experience in system modeling and integration.',
    },
    {
      project: 'Taroko Tunnel Reinforcement Project',
      description:
        'Contributed to the structural strengthening of existing tunnels and retaining structures. Involved in field investigation, structural simulation, and retrofit scheme evaluations. Acquired experience in rehabilitating legacy systems and formulating data-driven technical proposals.',
    },
  ],
  demoVideo: {
    myResume: 'My Resume Website',
    cryptoIndex: 'My Crypto Index Website',
    habitTracker: 'My Habit Tracker Website',
  },

  // Only for BIM Engineer--------------------------------------------------

  BIM_engineer_resume: {
    progarmming: [
      'Revit',
      'Navisworks',
      'AutoCAD',
      'ETABS',
      'SAP2000',
      'STAAD.Pro',
      'MIDAS',
      'Abaqus',
      'MATLAB',
      'LabVIEW',
      'Python',
      'GitHub',
      'Git',
      'Node.js',
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'Vue.js',
      'Wolfram Mathematica',
      'LaTeX',
      'Grapher',
    ],
    languages: ['Mandarin Chinese', 'Taiwanese', 'English'],
    softskills: [
      'Communication',
      'Teamwork',
      'Independent Work',
      'Problem Solving',
    ],
    jobApplication: 'Position Applied: BIM Engineer',
    workDetails: [
      {
        project: 'Chaozhou Depot Project',
      },
      {
        project: 'Taoyuan Railway Underground Project',
      },
      {
        project: 'Taoyuan MRT Green Line',
      },
      {
        project: 'Taroko Tunnel Rehabilitation Project',
      },
    ],
    selfIntro: `My name is Cheng-Jih Chang, and I hold a Master’s degree in Civil Engineering with practical experience in structural design and public infrastructure projects. During my time at CECI Engineering Consultants, all of my projects utilized Revit and AutoCAD for modeling and drawing production, which has enabled me to build solid BIM application and drawing integration skills.

I am well-versed in interdepartmental drawing coordination, capable of resolving design clashes and meeting on-site drawing requirements. I can independently complete structural modeling and drawing tasks.

I deeply understand the importance of integrating construction site conditions with design drawings, and I leverage digital tools to improve design efficiency. In addition to hands-on experience in architectural and structural modeling, I have used Navisworks for clash detection and am eager to expand my expertise to improve real-world engineering workflows.

As a BIM Engineer, I hope to contribute my modeling and drafting expertise, collaborate with the team to streamline design and construction processes, and become a professional who understands engineering, masters digital tools, and excels in teamwork.`,
  },
}
