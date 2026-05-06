// File: src/data/resumeData.zh.js
// Author: Cheng
// Description: Resume data in Chinese (Traditional) for BIM / Revit API / Engineering Software profile

import MyPicture from '/assets/Mypicture.jpg'

export default {
  picture: MyPicture,
  name: '張丞日',
  license: '土木技師',
  profileTitle: 'BIM 應用開發 / Revit API',

  educationAndWorkExperience: [
    {
      school: 'BIM MEP 工程師',
      degree: '機電管線配置、BIM 協調與 Revit 自動化工具開發',
      duration: '2025/08 - 現在',
    },
    {
      school: '台灣世曦工程顧問股份有限公司',
      degree: '結構工程師',
      duration: '2022/09 - 2024/07',
    },
    {
      key: 'ntu',
      school: '國立台灣大學 土木工程學系',
      degree: '碩士學位',
      duration: '2020/09 - 2022/09',
    },
    {
      school: '國立暨南國際大學 土木工程學系',
      degree: '學士學位',
      duration: '2016/09 - 2020/07',
    },
  ],

  targetPosition: '應徵職務：BIM 應用研發工程師 / Revit 二次開發工程師',

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
      'BIM 協調',
      '機電管線配置',
      '碰撞檢討',
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
    languages: ['中文', '台語（母語）', '英文（普通）'],
    softSkills: ['溝通協調', '團隊合作', '獨立作業', '問題分析', '工程流程優化'],
  },

  selfIntro: {
    selfIntroSimple: `　我具備土木結構工程與 BIM MEP 實務經驗，曾任鐵道工程結構工程師，並通過土木技師考試。目前專注於 BIM 工程自動化與 Revit 二次開發，能將工程流程、圖面判讀與模型協調經驗轉化為可執行的軟體工具。

　相較於單純軟體開發者，我熟悉工程現場與設計端常見痛點；相較於傳統 BIM 工程師，我具備 C#、Python、JavaScript 等開發能力，能自行規劃並實作 Revit API 工具、CAD 圖面辨識流程與自動標註功能。未來希望朝 BIM 應用研發、工程軟體開發與數位工程平台方向發展。`,

    selfIntroComplete: `　我是一位具備土木結構工程、BIM MEP 實務與軟體開發能力的工程技術人員。過去曾於台灣世曦工程顧問股份有限公司擔任結構工程師，參與鐵道、地下結構、廠房與既有結構補強等公共工程專案，熟悉結構分析、圖說協調、Revit / AutoCAD 建模與跨專業溝通流程，並已通過土木技師考試。

　目前我任職於 BIM MEP 相關職務，負責機電管線配置、模型整合、碰撞檢討與工程協調。在實務工作中，我持續思考如何將重複性的建模、標註、圖面整理與資料判讀流程工具化，因此投入 Revit API 與 C# 外掛開發，建立以 Revit 為核心的 BIM 自動化工具。

　我目前開發的 Revit Tool 專案包含自動標註、CAD 圖面辨識、管線與構件生成、立管標註輔助等功能，並採用 Host + Logic DLL 的架構支援開發階段熱更新，提升測試與迭代效率。透過這些工具，我希望將工程經驗轉化為可維護、可擴充、能實際改善工作流程的軟體系統。

　相較於單純軟體開發者，我理解 BIM 團隊、設計端與施工端在圖面協調上的實際痛點；相較於傳統 BIM 工程師，我具備 C#、Python、JavaScript、React、Vue、Node.js 等開發能力，能從需求分析、流程拆解到工具實作獨立完成。未來希望朝 BIM 應用研發工程師、Revit 二次開發工程師與工程軟體開發方向持續發展。`,

    civil_TyLin_selfIntroSimple: `我是張丞日，具土木工程碩士背景，畢業於台灣大學土木系，主修結構工程。過去於台灣世曦工程顧問公司擔任結構工程師，參與多項公共建設，累積了豐富的建模分析、圖說整合及跨部門協作經驗。

在實務過程中，我深刻體會到現地資訊精度與整合效率對工程品質與執行成效的關鍵性，也因此對測量成果檢核、GIS資料建置、地下管線整合與3D模型協作產生濃厚興趣。儘管我的專業出發點是結構，但我樂於主動學習跨領域知識，曾在工作中自行開發設計輔助工具，提高工作效率，期待未來能將工程與數位能力有效結合。

我相信自身在結構專案的歷練，讓我具備強大的問題分析與系統思考能力，而我對新知的投入與實作經驗，也能快速銜接本職位在成果檢核、資料整合與協作上的工作需求。未來期望在職務中不僅貢獻土木專業，更能發展多面向能力，成為團隊中能理解工程現場、又懂得整合數據與工具的實用人才。`,
  },

  projects: [
    {
      name: 'Revit Tool｜BIM 自動化與 Revit 二次開發工具',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        '使用 C#、Revit API 與 .NET Framework 開發 Revit 外掛工具，包含自動標註、CAD 圖面辨識、管線與構件生成、立管標註輔助等功能。',
      descriptionComplete:
        '使用 C#、Revit API 與 .NET Framework 開發 Revit 外掛工具，專案採用 Host + Logic DLL 架構，支援開發階段熱更新，提升測試與迭代效率。功能包含自動標註、CAD 圖塊與幾何辨識、管線與構件生成、機電標註輔助等，目標是減少重複性建模與出圖工作，並將工程邏輯轉化為可維護、可擴充的自動化流程。',
      githubLink: '',
      slug: 'revit-tool',
    },
    {
      name: 'CAD to MEP｜由 CAD 圖面輔助生成 MEP 物件',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        '開發 CAD 幾何辨識與圖層分類流程，透過 CSV pattern library 管理圖層、物件類型與生成規則，輔助從 CAD 圖面推估 MEP 元件位置。',
      descriptionComplete:
        '開發 CAD 幾何辨識與圖層分類流程，透過 CSV pattern library 管理圖層、物件類型、放置規則與生成參數，輔助從 CAD 圖面推估噴頭、管線或其他 MEP 元件的位置。專案包含幾何檢查、圖層正規化、預覽點生成、診斷紀錄與批次生成流程，並逐步朝向從 CAD 圖面自動化生成 BIM 元件的方向發展。',
      githubLink: '',
      slug: 'cad-to-mep',
    },
    {
      name: 'Riser Annotation｜立管標註自動化工具',
      url: '',
      type: ['Home', 'resume', 'project', 'bim'],
      descriptionSimple:
        '根據 Revit 視圖範圍與管線位置，自動判斷立管標籤方向，並輔助標籤對齊管線中點。',
      descriptionComplete:
        '根據 Revit 目前視圖範圍、樓層高度與管線位置，自動判斷立管標籤方向，區分向上與向下立管標註。工具亦嘗試讀取族群原點參考平面與標籤偏移資訊，使標籤能更穩定地對齊管線中點，提升 MEP 標註一致性與出圖效率。',
      githubLink: '',
      slug: 'riser-annotation',
    },
    {
      name: 'Crypto Index App',
      url: 'https://crypto-index-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        '使用 React 開發的加密貨幣追蹤平台，整合多來源 API 並自建後端提供歷史資料與 K 線圖，前端部署於 Firebase，強化 API 串接與資料視覺化能力。',
      descriptionComplete:
        '使用 React 開發的加密貨幣指數追蹤平台，前端部署於 Firebase，整合 CoinGecko API 與 Binance API，並自建後端 Render Server 提供 K 線圖與歷史價格查詢功能。支援多種加密資產的即時價格與圖表顯示，具備響應式設計與狀態管理，強化前端 API 串接與資料視覺化實作能力。',
      githubLink: 'https://github.com/LazyBear168/crypto-index-app',
      youtubeLink: 'https://www.youtube.com/embed/ug8ybXsst6U',
      slug: 'crypto-index-app',
    },
    {
      name: 'Habit Tracker',
      url: 'https://sunny-habit-app.web.app/',
      type: ['Home', 'front', 'resume', 'project'],
      descriptionSimple:
        'React.js 習慣養成工具，具巢狀清單、打卡統計與 Firebase 驗證，著重互動設計與資料整合。',
      descriptionComplete:
        '使用 React.js 開發的習慣養成工具，支援巢狀清單、每日打卡、自訂習慣與統計圖表，並整合 Firebase 進行資料儲存與身份驗證。強化前後端整合與使用者互動設計能力。',
      githubLink: 'https://github.com/LazyBear168/habit-tracker',
      youtubeLink: 'https://www.youtube.com/embed/Kf4CASg4BnQ',
      slug: 'habit-tracker',
    },
    {
      name: 'Chengs Resume',
      url: 'https://chengs-resume.web.app/',
      type: ['Home', 'front', 'project'],
      descriptionSimple:
        '個人履歷網站，展示學經歷、技能與作品，支援中英文切換與響應式設計。（就是您現在在的這個網頁呦）',
      descriptionComplete:
        '使用 Vue.js 開發的個人履歷網站，整合 Vue Router、Vue i18n 進行頁面切換與語系管理，具備中英文雙語模式與響應式設計，內容涵蓋自我介紹、技能、學經歷與個人作品等，部署於 Firebase Hosting。展現前端開發與國際化實作能力。（就是您現在在的這個網頁呦）',
      githubLink: 'https://github.com/LazyBear168/myResume',
      youtubeLink: 'https://www.youtube.com/embed/y5jfSLDpivs',
      slug: 'chengs-resume',
    },
    {
      name: 'Render Server 儲存幣價資訊',
      url: 'https://crypto-index-backend.onrender.com/kline',
      type: ['Home', 'back', 'project'],
      descriptionSimple:
        '提供前端查詢加密幣歷史價格與 K 線圖資料的 API 後端服務，整合 CoinGecko 與 Binance API 並部署於 Render。',
      descriptionComplete:
        '使用 Node.js 與 Express 開發的後端伺服器，提供查詢加密幣歷史價格與 K 線圖資料的 API 接口。整合 CoinGecko、Binance API，實作自動更新與快取。該專案部署於 Render，支援 Crypto Index Tracker 前端平台使用，K 線圖查詢 API 可透過 /kline endpoint 進行測試。',
      githubLink: 'https://github.com/LazyBear168/crypto-index-backend',
      slug: 'render-server-crypto-backend',
    },
    {
      name: '點擊這裡看更多介紹',
      url: '/projects/personal',
      type: ['Home', 'resume', 'front', 'back'],
    },
    {
      name: '【AI Poster】多模態神機妙算 - AI帶你在股市賺 - 使用 CNN, BERT, GAT 證明多模態數據源和圖神經網絡 (GNN) 技術在金融市場的應用價值 | stanCode',
      url: 'https://www.youtube.com/watch?v=pWVPCW4UvTI&t=218s&ab_channel=stanCode%E6%A8%99%E6%BA%96%E7%A8%8B%E5%BC%8F%E6%95%99%E8%82%B2%E6%A9%9F%E6%A7%8B',
      type: ['group'],
      descriptionSimple: '',
      descriptionComplete:
        '本專案旨在提升股價預測的準確性，通過多模態訓練結合新聞文本和股價蠟燭圖數據。使用圖神經網絡（GNN）進行特徵轉換和融合，克服單一數據源分析的不足。我們預期透過此專案證明多模態數據源和先進的圖神經網絡技術在金融市場預測中的潛力和應用價值。並期許後續能進一步優化模型和擴大數據來源，獲得更精確的預測結果。而我在此專案主要負責文字處理與 BERT 語言模型的架構。',
      githubLink:
        'https://github.com/stanCodeTW/AI-Projects/tree/main/SC201Mar2024Projects/GroupE',
      youtubeLink: 'https://www.youtube.com/embed/pWVPCW4UvTI?start=218',
      slug: 'ai-stock-prediction',
    },
  ],

  contact: {
    phone: '0983-728-258',
    email: 'chengjih77@gmail.com',
    address: '台中市大里區',
  },

  research: {
    publish: {
      title:
        '期刊發表：Building structure with elastoplastic bilinear model under multi-dimensional earthquake forces',
      url: 'https://academic.oup.com/jom/article/doi/10.1093/jom/ufac045/6874529',
    },
    thesis: {
      title: '碩士論文：以彈塑性模型描述多維加載下的塑性行為',
      url: 'https://ndltd.ncl.edu.tw/cgi-bin/gs32/gsweb.cgi/login?o=dnclcdr&s=id=%22110NTU05015161%22.&searchmode=basic',
    },
    tools: ['Mathematica 正解推導', 'MATLAB 模擬', 'LabVIEW 實驗程式維護'],
  },

  experiences: [
    {
      title: 'BIM MEP 工程師',
      duration: '2024/08 - 現在',
      description:
        '負責機電管線配置、模型整合、碰撞檢討與跨專業協調，並持續開發 Revit 自動化工具以提升建模與出圖效率。',
    },
    {
      title: '台灣世曦工程顧問股份有限公司 結構工程師',
      duration: '2022/09 - 2024/07',
      description:
        '負責鐵道與公共工程相關結構分析、設計檢核、AutoCAD / Revit 圖面協調與模型建置。',
    },
    {
      title: '科技部研究助理',
      duration: '2020/09 - 2022/07',
      description: '實驗操作、LabVIEW、Grapher、MTS 控制器招標。',
    },
    {
      title: '彈性力學助教',
      duration: '2021/09 - 2022/01',
      description: '撰寫與批改作業、碩博士生輔導、教授溝通橋樑。',
    },
    {
      title: '塑性力學助教',
      duration: '2022/02 - 2022/06',
      description: '撰寫與批改作業、碩博士生輔導、教授溝通橋樑。',
    },
  ],

  workDetails: [
    {
      project: 'Revit Tool｜BIM 自動化與 Revit 二次開發工具',
      description:
        '使用 C#、Revit API 與 .NET Framework 開發 Revit 外掛工具，包含自動標註、CAD 圖面辨識、管線與構件生成、機電標註輔助等功能。專案採用 Host + Logic DLL 架構，支援開發階段熱更新，提升測試與迭代效率。工具目標為減少重複性建模與出圖工作，並將工程邏輯轉化為可維護的自動化流程。',
    },
    {
      project: 'CAD to MEP｜由 CAD 圖面輔助生成 MEP 物件',
      description:
        '開發 CAD 幾何辨識與圖層分類流程，透過 CSV pattern library 管理圖層、物件類型與生成規則，輔助從 CAD 圖面推估噴頭、管線或其他 MEP 元件的位置。專案包含幾何檢查、圖層正規化、預覽點生成、診斷紀錄與批次生成流程。',
    },
    {
      project: 'Riser Annotation｜立管標註自動化工具',
      description:
        '根據 Revit 視圖範圍與管線位置，自動判斷立管標籤方向，並嘗試以族群原點參考平面與管線中點對齊，提升 MEP 標註一致性與出圖效率。',
    },
    {
      project: '潮州機廠工程',
      description:
        '擔任結構設計窗口，主導鋼構主廠房與地下設施之建模與結構分析，並負責 BIM 模型整合與圖說協調。在設計過程中，頻繁與機電、設備與建築師等跨部門單位協作，強化溝通與系統整合能力。同時亦自主開發輔助設計工具，提高工作效率與精準度，展現技術主動性與開發潛力。',
    },
    {
      project: '桃園鐵路地下化工程',
      description:
        '參與多項地下結構設施（如緊急出口、通風口）的設計，涵蓋樓梯間、設備間與通風豎井等，深入理解地下構造之設計流程與施工限制。熟悉多階段工序，培養縝密邏輯與專案管理能力。',
    },
    {
      project: '桃園捷運綠線',
      description:
        '負責小型廠房之結構設計與荷載分析，並與各系統（如機電、建築）介面單位協調設計需求與圖說調整，展現靈活應變與跨職能溝通能力。過程中亦強化對建模工具與資料整合的掌握。',
    },
    {
      project: '太魯閣明隧道整建工程',
      description:
        '參與既有結構補強，從現況調查、結構模擬到補強方案評估皆有涉獵。熟悉既有系統改造流程，並提升了問題分析、資料整理與技術提案能力，具備將工程問題轉化為系統解決方案的實務經驗。',
    },
  ],

  demoVideo: {
    myResume: '我的履歷網站',
    cryptoIndex: '我的 Crypto index 網站',
    habitTracker: '我的 Habit Tracker 網站',
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
      'Github',
      'Git',
      'Node.js',
      'JavaScript',
      'HTML',
      'Css',
      'React',
      'vue.js',
      'Wolfram Mathematica',
      'LaTeX',
      'Grapher',
    ],
    languages: ['中文', '台語', '英文'],
    softSkills: ['溝通協調', '團隊合作', '獨立作業', '問題解決'],
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
      'BIM 協調',
      '機電管線配置',
      '碰撞檢討',
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
    languages: ['中文', '台語', '英文'],
    softSkills: ['溝通協調', '團隊合作', '獨立作業', '問題分析', '工程流程優化'],
    targetPosition: '應徵職務：BIM 應用研發工程師 / Revit 二次開發工程師',
    workDetails: [
      {
        project: 'Revit Tool｜BIM 自動化與 Revit 二次開發工具',
        description:
          '使用 C#、Revit API 與 .NET Framework 開發 Revit 外掛工具，包含自動標註、CAD 圖面辨識、管線與構件生成、機電標註輔助等功能。專案採用 Host + Logic DLL 架構，支援開發階段熱更新，提升測試與迭代效率。工具目標為減少重複性建模與出圖工作，並將工程邏輯轉化為可維護的自動化流程。',
      },
      {
        project: 'CAD to MEP｜由 CAD 圖面輔助生成 MEP 物件',
        description:
          '開發 CAD 幾何辨識與圖層分類流程，透過 CSV pattern library 管理圖層、物件類型與生成規則，輔助從 CAD 圖面推估噴頭、管線或其他 MEP 元件的位置。專案包含幾何檢查、圖層正規化、預覽點生成、診斷紀錄與批次生成流程。',
      },
      {
        project: 'Riser Annotation｜立管標註自動化工具',
        description:
          '根據 Revit 視圖範圍與管線位置，自動判斷立管標籤方向，並嘗試以族群原點參考平面與管線中點對齊，提升 MEP 標註一致性與出圖效率。',
      },
      {
        project: '潮州機廠工程',
        description:
          '擔任結構設計窗口，主導鋼構主廠房與地下設施之建模與結構分析，並負責結構 BIM 模型建構、整合與圖說協調，透過 AutoCAD 繪製細部圖說，並搭配 Navisworks 進行衝突檢查與協同作業。在設計過程中，頻繁與機電、設備與建築師等跨部門單位協作，強化溝通與系統整合能力。同時亦自主開發輔助設計工具，提高工作效率與精準度。',
      },
      {
        project: '桃園鐵路地下化工程',
        description:
          '以 AutoCAD 建立地下構造（通風口、緊急出口等）2D 結構圖面，熟悉分段施工流程。參與多項地下結構設施之設計，涵蓋樓梯間、設備間與通風豎井等，深入理解地下構造之設計流程與施工限制。',
      },
      {
        project: '桃園捷運綠線',
        description:
          '以 AutoCAD 與 Revit 建立小型廠房之結構模型，負責小型廠房之結構設計與荷載分析，並與各系統（如機電、建築）介面單位協調設計需求與圖說調整，展現靈活應變與跨職能溝通能力。',
      },
      {
        project: '太魯閣明隧道整建工程',
        description:
          '以 AutoCAD 建立結構補強圖說，參與既有結構補強，從現況調查、結構模擬到補強方案評估皆有涉獵。熟悉既有系統改造流程，並提升問題分析、資料整理與技術提案能力。',
      },
    ],
    workDetailsSimple: [
      {
        project: 'Revit Tool｜BIM 自動化與 Revit 二次開發工具',
        description:
          '使用 C#、Revit API 與 .NET Framework 開發 Revit 外掛，包含自動標註、CAD 圖面辨識、MEP 元件生成與立管標註輔助，並採 Host + Logic DLL 架構支援開發階段熱更新。',
      },
      {
        project: 'CAD to MEP｜由 CAD 圖面輔助生成 MEP 物件',
        description:
          '開發 CAD 幾何辨識與圖層分類流程，透過 CSV pattern library 管理圖層、物件類型與生成規則，輔助從 CAD 圖面推估 MEP 元件位置。',
      },
      {
        project: 'Riser Annotation｜立管標註自動化工具',
        description:
          '根據 Revit 視圖範圍與管線位置，自動判斷立管標籤方向，並輔助標籤對齊管線中點，提升 MEP 標註一致性與出圖效率。',
      },
      {
        project: '潮州機廠工程',
        description:
          '擔任結構設計窗口，負責鋼構主廠房與地下設施之結構分析、BIM 模型整合與圖說協調，並透過 AutoCAD、Revit、Navisworks 進行跨專業協作。',
      },
      {
        project: '鐵道與建築結構設計專案',
        description:
          '參與桃園鐵路地下化、桃園捷運綠線與太魯閣明隧道整建等專案，負責結構圖說、模型建立、設計檢核與介面協調，累積公共工程與跨專業整合經驗。',
      },
    ],
    selfIntro: `　我具備土木結構工程與 BIM MEP 實務經驗，曾任鐵道工程結構工程師，並通過土木技師考試。目前專注於 BIM 工程自動化與 Revit 二次開發，能將工程流程、圖面判讀與模型協調經驗轉化為可執行的軟體工具。

　相較於單純軟體開發者，我熟悉工程現場與設計端常見痛點；相較於傳統 BIM 工程師，我具備 C#、Python、JavaScript 等開發能力，能自行規劃並實作 Revit API 工具、CAD 圖面辨識流程與自動標註功能。

　未來希望能在 BIM 應用研發工程師、Revit 二次開發工程師或工程軟體開發相關職務中，結合土木工程背景、BIM 實務經驗與軟體開發能力，協助團隊提升建模、協調、檢核與出圖流程的效率。`,
  },
}