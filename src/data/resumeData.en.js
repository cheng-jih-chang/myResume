// File: src/data/resumeData.en.js
// Author: Cheng
// Description: Resume data in English for BIM / Revit API / Engineering Software profile

import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: 'Cheng-Jih Chang',
  license: 'Licensed Civil Engineer',
  profileTitle: 'BIM Application Development / Revit API',

  educationAndWorkExperience: [
    {
      school: 'BIM MEP Engineer',
      degree: 'MEP piping layout, BIM coordination, and Revit automation tool development',
      duration: '2025/08 - Present',
    },
    {
      school: 'CECI Engineering Consultants, Inc., Taiwan',
      degree: 'Structural Engineer',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: 'National Taiwan University, Department of Civil Engineering',
      degree: "Master's Degree",
      duration: '2020/09 - 2022/09',
    },
    {
      school: 'National Chi Nan University, Department of Civil Engineering',
      degree: "Bachelor's Degree",
      duration: '2016/09 - 2020/07',
    },
  ],

  targetPosition:
    'Target Position: BIM Application R&D Engineer / Revit API Developer',

  skills: {
    technicalSkills: [
      'Revit',
      'Revit API',
      'C#',
      '.NET Framework',
      'Dynamo',
      'Python',
      'Navisworks',
      'AutoCAD',
      'BIM Coordination',
      'MEP Piping Layout',
      'Clash Detection',
      'Git',
      'GitHub',
      'JavaScript',
      'React',
      'Vue.js',
      'Node.js',
      'HTML',
      'CSS',
      'Firebase',
      'ETABS',
      'SAP2000',
      'STAAD.Pro',
      'MIDAS',
      'Abaqus',
      'MATLAB',
      'LabVIEW',
      'Wolfram Mathematica',
      'LaTeX',
    ],
    languages: ['Mandarin Chinese', 'Taiwanese Hokkien (Native)', 'English (Intermediate)'],
    softSkills: [
      'Communication',
      'Teamwork',
      'Independent Work',
      'Problem Analysis',
      'Engineering Workflow Optimization',
    ],
  },

  selfIntro: {
    selfIntroSimple: `I have a background in civil and structural engineering as well as practical experience in BIM MEP. I previously worked as a structural engineer in railway engineering and have passed the Taiwan Civil Engineering Professional Engineer examination. I am currently focused on BIM automation and Revit API development, transforming engineering workflows, drawing interpretation, and model coordination experience into executable software tools.

Compared with pure software developers, I understand the practical pain points commonly faced by engineering teams and design-side workflows. Compared with traditional BIM engineers, I have development skills in C#, Python, and JavaScript, allowing me to independently plan and implement Revit API tools, CAD drawing recognition workflows, and automated annotation features. In the future, I aim to develop my career in BIM application R&D, engineering software development, and digital engineering platforms.`,

    selfIntroComplete: `I am an engineering professional with a background in civil and structural engineering, practical BIM MEP experience, and software development capabilities. I previously worked as a structural engineer at CECI Engineering Consultants, Inc., Taiwan, where I participated in public infrastructure projects including railway, underground structures, factory buildings, and existing structure reinforcement. I am familiar with structural analysis, drawing coordination, Revit / AutoCAD modeling, and cross-disciplinary communication. I have also passed the Taiwan Civil Engineering Professional Engineer examination.

I currently work in a BIM MEP-related role, responsible for MEP piping layout, model integration, clash detection, and engineering coordination. Through daily practice, I continuously look for ways to turn repetitive modeling, annotation, drawing organization, and data interpretation workflows into reusable tools. This led me to invest in Revit API and C# add-in development and to build BIM automation tools centered around Revit.

My current Revit Tool project includes automated annotation, CAD drawing recognition, pipe and component generation, and riser annotation assistance. The project adopts a Host + Logic DLL architecture to support hot reload during development, improving testing and iteration efficiency. Through these tools, I aim to transform engineering experience into maintainable, extensible software systems that can improve real-world workflows.

Compared with pure software developers, I understand the practical pain points of BIM teams, design teams, and construction-side coordination. Compared with traditional BIM engineers, I have development experience in C#, Python, JavaScript, React, Vue, and Node.js, allowing me to independently complete tasks from requirement analysis and workflow breakdown to tool implementation. In the future, I hope to continue developing in BIM application R&D, Revit API development, and engineering software development.`,

    civil_TyLin_selfIntroSimple: `My name is Cheng-Jih Chang. I hold a master's degree in civil engineering from National Taiwan University, with a focus on structural engineering. I previously worked as a structural engineer at CECI Engineering Consultants, Inc., Taiwan, where I participated in multiple public infrastructure projects and gained experience in modeling, analysis, drawing integration, and cross-department collaboration.

Through practical engineering work, I deeply understand the importance of field data accuracy and integration efficiency for engineering quality and execution. This has also led to my strong interest in survey result verification, GIS data development, underground utility integration, and 3D model collaboration. Although my professional background started in structural engineering, I am eager to learn across disciplines. I have also independently developed design support tools at work to improve efficiency, and I look forward to combining engineering expertise with digital capabilities.

I believe my experience in structural projects has equipped me with strong problem-analysis and systems-thinking abilities. My willingness to learn and hands-on development experience also allow me to quickly adapt to the responsibilities of this role, including result verification, data integration, and collaboration. In the future, I hope to contribute not only my civil engineering expertise but also broader digital and integration capabilities, becoming a practical team member who understands engineering sites and can also integrate data and tools effectively.`,
  },

  projects: [
    {
      name: 'Revit Tool｜BIM Automation and Revit API Development Tool',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        'A Revit add-in developed with C#, Revit API, and .NET Framework, including automated annotation, CAD drawing recognition, pipe and component generation, and MEP annotation assistance.',
      descriptionComplete:
        'A Revit add-in developed with C#, Revit API, and .NET Framework. The project adopts a Host + Logic DLL architecture to support hot reload during development, improving testing and iteration efficiency. Features include automated annotation, CAD block and geometry recognition, pipe and component generation, and MEP annotation assistance. The goal is to reduce repetitive modeling and drafting work while transforming engineering logic into maintainable and extensible automation workflows.',
      githubLink: '',
      slug: 'revit-tool',
    },
    {
      name: 'CAD to MEP｜Generating MEP Elements from CAD Drawings',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        'A CAD geometry recognition and layer-classification workflow using a CSV pattern library to manage layers, object types, and generation rules for estimating MEP element locations from CAD drawings.',
      descriptionComplete:
        'Developed a CAD geometry recognition and layer-classification workflow using a CSV pattern library to manage layers, object types, placement rules, and generation parameters. The tool assists in estimating the locations of sprinklers, pipes, and other MEP elements from CAD drawings. The project includes geometry inspection, layer normalization, preview point generation, diagnostic logging, and batch generation workflows, gradually moving toward automated BIM element generation from CAD drawings.',
      githubLink: '',
      slug: 'cad-to-mep',
    },
    {
      name: 'Riser Annotation｜Automated Riser Annotation Tool',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        'Automatically determines riser tag direction based on the Revit view range and pipe location, and assists in aligning tags to pipe midpoints.',
      descriptionComplete:
        'Automatically determines riser tag direction based on the current Revit view range, level height, and pipe location, distinguishing upward and downward riser annotations. The tool also attempts to read family origin reference planes and tag offset information so that tags can be more reliably aligned with pipe midpoints, improving MEP annotation consistency and drafting efficiency.',
      githubLink: '',
      slug: 'riser-annotation',
    },
    {
      name: 'Crypto Index App',
      url: 'https://crypto-index-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        'A cryptocurrency tracking platform built with React, integrating multiple APIs and a custom backend for historical data and candlestick charts. The frontend is deployed on Firebase.',
      descriptionComplete:
        'A cryptocurrency index tracking platform built with React and deployed on Firebase. It integrates the CoinGecko API and Binance API, along with a custom Render backend server that provides candlestick chart data and historical price queries. The app supports real-time prices and chart visualization for multiple crypto assets, with responsive design and state management, strengthening frontend API integration and data visualization skills.',
      githubLink: 'https://github.com/LazyBear168/crypto-index-app',
      youtubeLink: 'https://www.youtube.com/embed/ug8ybXsst6U',
      slug: 'crypto-index-app',
    },
    {
      name: 'Habit Tracker',
      url: 'https://sunny-habit-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        'A habit-tracking tool built with React.js, featuring nested lists, daily check-ins, statistics, and Firebase authentication, with a focus on interaction design and data integration.',
      descriptionComplete:
        'A habit-tracking tool built with React.js. It supports nested lists, daily check-ins, custom habits, and statistical charts, and integrates Firebase for data storage and authentication. This project strengthened my full-stack integration skills and user interaction design capabilities.',
      githubLink: 'https://github.com/LazyBear168/habit-tracker',
      youtubeLink: 'https://www.youtube.com/embed/Kf4CASg4BnQ',
      slug: 'habit-tracker',
    },
    {
      name: "Cheng's Resume",
      url: 'https://chengs-resume.web.app/',
      type: ['Home', 'front', 'project'],
      descriptionSimple:
        'A personal resume website showcasing education, experience, skills, and projects. It supports Chinese / English switching and responsive design. This is the website you are currently viewing.',
      descriptionComplete:
        'A personal resume website built with Vue.js. It integrates Vue Router and Vue i18n for page navigation and bilingual language management. The website supports Chinese / English mode and responsive design, covering self-introduction, skills, education, work experience, and personal projects. It is deployed on Firebase Hosting and demonstrates frontend development and internationalization implementation skills. This is the website you are currently viewing.',
      githubLink: 'https://github.com/LazyBear168/myResume',
      youtubeLink: 'https://www.youtube.com/embed/y5jfSLDpivs',
      slug: 'chengs-resume',
    },
    {
      name: 'Render Server for Storing Crypto Price Data',
      url: 'https://crypto-index-backend.onrender.com/kline',
      type: ['Home', 'back', 'project'],
      descriptionSimple:
        'A backend API service that provides historical cryptocurrency prices and candlestick chart data for the frontend, integrating CoinGecko and Binance APIs and deployed on Render.',
      descriptionComplete:
        'A backend server built with Node.js and Express that provides API endpoints for querying historical cryptocurrency prices and candlestick chart data. It integrates the CoinGecko and Binance APIs and implements automatic updates and caching. The project is deployed on Render and supports the Crypto Index Tracker frontend platform. The candlestick chart API can be tested through the /kline endpoint.',
      githubLink: 'https://github.com/LazyBear168/crypto-index-backend',
      slug: 'render-server-crypto-backend',
    },
    {
      name: 'Click Here to See More Projects',
      url: '/projects/personal',
      type: ['Home', 'resume', 'front', 'back'],
    },
    {
      name: '【AI Poster】Multimodal AI Stock Prediction - Using CNN, BERT, and GAT to Demonstrate the Value of Multimodal Data Sources and Graph Neural Networks in Financial Markets | stanCode',
      url: 'https://www.youtube.com/watch?v=pWVPCW4UvTI&t=218s&ab_channel=stanCode%E6%A8%99%E6%BA%96%E7%A8%8B%E5%BC%8F%E6%95%99%E8%82%B2%E6%A9%9F%E6%A7%8B',
      type: ['group'],
      descriptionSimple: '',
      descriptionComplete:
        'This project aimed to improve stock price prediction accuracy by combining multimodal training data, including news text and candlestick chart data. Graph Neural Networks were used for feature transformation and fusion to overcome the limitations of single-source analysis. The project demonstrates the potential and application value of multimodal data sources and advanced graph neural network techniques in financial market prediction. My main responsibility in this project was text processing and the BERT language model architecture.',
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
        'Master Thesis: Describing Plastic Behavior under Multi-Dimensional Loading Using an Elastoplastic Model',
      url: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015161%22.&searchmode=basic',
    },
    tools: [
      'Analytical derivation with Mathematica',
      'Simulation with MATLAB',
      'LabVIEW experimental program maintenance',
    ],
  },

  experiences: [
    {
      title: 'BIM MEP Engineer',
      duration: '2025/08 - Present',
      description:
        'Responsible for MEP piping layout, model integration, clash detection, and cross-disciplinary coordination, while continuously developing Revit automation tools to improve modeling and drafting efficiency.',
    },
    {
      title: 'Structural Engineer, CECI Engineering Consultants, Inc., Taiwan',
      duration: '2022/09 - 2024/07',
      description:
        'Responsible for structural analysis, design review, AutoCAD / Revit drawing coordination, and model development for railway and public infrastructure projects.',
    },
    {
      title: 'Research Assistant, Ministry of Science and Technology Project',
      duration: '2020/09 - 2022/07',
      description:
        'Performed experimental operations, LabVIEW programming, Grapher data processing, and MTS controller procurement support.',
    },
    {
      title: 'Teaching Assistant, Elasticity',
      duration: '2021/09 - 2022/01',
      description:
        'Prepared and graded assignments, supported graduate students, and served as a communication bridge with the professor.',
    },
    {
      title: 'Teaching Assistant, Plasticity',
      duration: '2022/02 - 2022/06',
      description:
        'Prepared and graded assignments, supported graduate students, and served as a communication bridge with the professor.',
    },
  ],

  workDetails: [
    {
      project: 'Revit Tool｜BIM Automation and Revit API Development Tool',
      description:
        'Developed a Revit add-in using C#, Revit API, and .NET Framework, including automated annotation, CAD drawing recognition, pipe and component generation, and MEP annotation assistance. The project adopts a Host + Logic DLL architecture to support hot reload during development, improving testing and iteration efficiency. The tool aims to reduce repetitive modeling and drafting work and transform engineering logic into maintainable automation workflows.',
    },
    {
      project: 'CAD to MEP｜Generating MEP Elements from CAD Drawings',
      description:
        'Developed a CAD geometry recognition and layer-classification workflow using a CSV pattern library to manage layers, object types, and generation rules, assisting in estimating sprinkler, pipe, and other MEP element locations from CAD drawings. The project includes geometry inspection, layer normalization, preview point generation, diagnostic logging, and batch generation workflows.',
    },
    {
      project: 'Riser Annotation｜Automated Riser Annotation Tool',
      description:
        'Automatically determines riser tag direction based on the Revit view range and pipe location, and attempts to align tags using family origin reference planes and pipe midpoints, improving MEP annotation consistency and drafting efficiency.',
    },
    {
      project: 'Chaozhou Railway Workshop Project',
      description:
        'Served as the structural design contact window, leading modeling and structural analysis for the steel main workshop and underground facilities, while also handling BIM model integration and drawing coordination. Frequently collaborated with MEP, equipment, and architectural teams during the design process, strengthening communication and system integration skills. Also independently developed design support tools to improve efficiency and accuracy, demonstrating technical initiative and development potential.',
    },
    {
      project: 'Taoyuan Railway Underground Project',
      description:
        'Participated in the design of multiple underground structural facilities, such as emergency exits and ventilation shafts, including stairwells, equipment rooms, and ventilation wells. Gained a deep understanding of underground structure design workflows and construction constraints. Became familiar with multi-stage construction processes and developed strong logical thinking and project management skills.',
    },
    {
      project: 'Taoyuan MRT Green Line',
      description:
        'Responsible for structural design and load analysis of small factory buildings, and coordinated design requirements and drawing adjustments with interface teams such as MEP and architecture, demonstrating adaptability and cross-functional communication skills. Also strengthened modeling tool usage and data integration capabilities.',
    },
    {
      project: 'Taroko Open Tunnel Rehabilitation Project',
      description:
        'Participated in existing structure reinforcement, covering condition surveys, structural simulation, and reinforcement scheme evaluation. Became familiar with existing system renovation workflows and improved problem analysis, data organization, and technical proposal skills, with practical experience in transforming engineering problems into systematic solutions.',
    },
  ],

  demoVideo: {
    myResume: 'My Resume Website',
    cryptoIndex: 'My Crypto Index Website',
    habitTracker: 'My Habit Tracker Website',
  },

  // Only for Ty-lin Spatial Geospatial Information Engineer-----------------------------------------

  civilTyLinSkills: {
    technicalSkills: [
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
    languages: ['Mandarin Chinese', 'Taiwanese Hokkien', 'English'],
    softSkills: [
      'Communication',
      'Teamwork',
      'Independent Work',
      'Problem Solving',
    ],
  },

  // Only for BIM Engineer--------------------------------------------------

  bimEngineerResume: {
    technicalSkills: [
      'Revit',
      'Revit API',
      'C#',
      '.NET Framework',
      'Dynamo',
      'Python',
      'Navisworks',
      'AutoCAD',
      'BIM Coordination',
      'MEP Piping Layout',
      'Clash Detection',
      'Git',
      'GitHub',
      'JavaScript',
      'React',
      'Vue.js',
      'Node.js',
      'HTML',
      'CSS',
      'ETABS',
      'SAP2000',
      'STAAD.Pro',
      'MIDAS',
      'Abaqus',
      'MATLAB',
      'LabVIEW',
      'Wolfram Mathematica',
      'LaTeX',
    ],
    languages: ['Mandarin Chinese', 'Taiwanese Hokkien', 'English'],
    softSkills: [
      'Communication',
      'Teamwork',
      'Independent Work',
      'Problem Analysis',
      'Engineering Workflow Optimization',
    ],
    targetPosition:
      'Target Position: BIM Application R&D Engineer / Revit API Developer',
    workDetails: [
      {
        project: 'Revit Tool｜BIM Automation and Revit API Development Tool',
        description:
          'Developed a Revit add-in using C#, Revit API, and .NET Framework, including automated annotation, CAD drawing recognition, pipe and component generation, and MEP annotation assistance. The project adopts a Host + Logic DLL architecture to support hot reload during development, improving testing and iteration efficiency. The tool aims to reduce repetitive modeling and drafting work and transform engineering logic into maintainable automation workflows.',
      },
      {
        project: 'CAD to MEP｜Generating MEP Elements from CAD Drawings',
        description:
          'Developed a CAD geometry recognition and layer-classification workflow using a CSV pattern library to manage layers, object types, and generation rules, assisting in estimating sprinkler, pipe, and other MEP element locations from CAD drawings. The project includes geometry inspection, layer normalization, preview point generation, diagnostic logging, and batch generation workflows.',
      },
      {
        project: 'Riser Annotation｜Automated Riser Annotation Tool',
        description:
          'Automatically determines riser tag direction based on the Revit view range and pipe location, and attempts to align tags using family origin reference planes and pipe midpoints, improving MEP annotation consistency and drafting efficiency.',
      },
      {
        project: 'Chaozhou Railway Workshop Project',
        description:
          'Served as the structural design contact window and was responsible for structural analysis of the steel main workshop and underground facilities, structural BIM model creation, integration, and drawing coordination. Used AutoCAD to produce detailed drawings and Navisworks for clash detection and collaboration. Frequently worked with MEP, equipment, and architectural teams, strengthening communication and system integration skills. Also independently developed design support tools to improve efficiency and accuracy.',
      },
      {
        project: 'Taoyuan Railway Underground Project',
        description:
          'Created 2D structural drawings for underground structures such as ventilation shafts and emergency exits using AutoCAD, and became familiar with staged construction workflows. Participated in the design of multiple underground structural facilities, including stairwells, equipment rooms, and ventilation wells, gaining a deep understanding of underground structure design processes and construction constraints.',
      },
      {
        project: 'Taoyuan MRT Green Line',
        description:
          'Created structural models for small factory buildings using AutoCAD and Revit. Responsible for structural design and load analysis, and coordinated design requirements and drawing adjustments with interface teams such as MEP and architecture, demonstrating adaptability and cross-functional communication skills.',
      },
      {
        project: 'Taroko Open Tunnel Rehabilitation Project',
        description:
          'Created structural reinforcement drawings using AutoCAD and participated in existing structure reinforcement, including condition surveys, structural simulation, and reinforcement scheme evaluation. Became familiar with existing system renovation workflows and improved problem analysis, data organization, and technical proposal skills.',
      },
    ],
    workDetailsSimple: [
      {
        project: 'Revit Tool｜BIM Automation and Revit API Development Tool',
        description:
          'Developed a Revit add-in using C#, Revit API, and .NET Framework, including automated annotation, CAD drawing recognition, MEP element generation, and riser annotation assistance. The project adopts a Host + Logic DLL architecture to support hot reload during development.',
      },
      {
        project: 'CAD to MEP｜Generating MEP Elements from CAD Drawings',
        description:
          'Developed a CAD geometry recognition and layer-classification workflow using a CSV pattern library to manage layers, object types, and generation rules, assisting in estimating MEP element locations from CAD drawings.',
      },
      {
        project: 'Riser Annotation｜Automated Riser Annotation Tool',
        description:
          'Automatically determines riser tag direction based on the Revit view range and pipe location, and assists in aligning tags to pipe midpoints, improving MEP annotation consistency and drafting efficiency.',
      },
      {
        project: 'Chaozhou Railway Workshop Project',
        description:
          'Served as the structural design contact window, responsible for structural analysis, BIM model integration, and drawing coordination for the steel main workshop and underground facilities. Used AutoCAD, Revit, and Navisworks for cross-disciplinary collaboration.',
      },
      {
        project: 'Railway and Building Structural Design Projects',
        description:
          'Participated in projects including the Taoyuan Railway Underground Project, Taoyuan MRT Green Line, and Taroko Open Tunnel Rehabilitation Project. Responsible for structural drawings, model development, design review, and interface coordination, gaining experience in public infrastructure and cross-disciplinary integration.',
      },
    ],
    selfIntro: `I have a background in civil and structural engineering as well as practical BIM MEP experience. I previously worked as a structural engineer in railway engineering and have passed the Taiwan Civil Engineering Professional Engineer examination. I am currently focused on BIM automation and Revit API development, transforming engineering workflows, drawing interpretation, and model coordination experience into executable software tools.

Compared with pure software developers, I understand the practical pain points commonly faced by engineering teams and design-side workflows. Compared with traditional BIM engineers, I have development skills in C#, Python, and JavaScript, allowing me to independently plan and implement Revit API tools, CAD drawing recognition workflows, and automated annotation features.

In the future, I hope to work as a BIM Application R&D Engineer, Revit API Developer, or Engineering Software Developer, combining my civil engineering background, BIM experience, and software development skills to help teams improve modeling, coordination, checking, and drafting workflows.`,
  },
}