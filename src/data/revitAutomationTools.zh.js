export default {
  pageTitle: 'Revit 自動化工具介紹',
  sections: [
    {
      projectTitle: '一、自動圖例生成',
      subtitle:
        '自動將標準化圖例放入 Revit 明細表或圖面中，減少人工整理圖例的時間。',
      descriptionParagraphs: [
        '這個功能用來協助 Revit 圖例內容的自動化生成。工具會依照明細表或圖面需求，將已整理好的標準化圖例放入對應位置，讓設備、元件或符號的圖例呈現更穩定。',
        '透過自動圖例生成，原本需要人工逐一放置、對應與整理圖例的流程，可以改由程式協助完成，提升 Revit 出圖與圖面整理效率。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/x0VpEzdBw0M',
    },
    {
      projectTitle: '二、Revit自動立管標註生成',
      subtitle: '自動判斷管線上下行關係，快速建立立管標註。',
      descriptionParagraphs: [
        '這個功能用來處理 Revit MEP 圖面中的立管標註。程式會依照管線與樓層之間的關係，判斷管線是往上或往下穿越樓層，並建立對應的立管標註。',
        '透過這個工具，可以減少人工確認立管方向、逐一放置標註的時間，讓跨樓層管線的圖面資訊更清楚。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/_9_JTxbRgOk',
    },
    {
      projectTitle: '三、Revit自動管徑標註',
      subtitle: '自動讀取管線尺寸，並在圖面中放置對應的管徑標註。',
      descriptionParagraphs: [
        '這個功能用來自動產生管徑標註。工具會讀取 Revit 中管線的尺寸資訊，並依照圖面位置與管段條件，自動放置對應的管徑標籤。',
        '這可以減少人工逐段查看管徑、手動放置標籤的重複工作，讓管線圖面標註更快速且一致。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/0OJCdVFqpX8',
    },
    {
      projectTitle: '四、自動距離標註',
      subtitle: '自動建立管線、元件或相關物件之間的距離標註。',
      descriptionParagraphs: [
        '這個功能用來協助產生 Revit 圖面中的距離標註。工具會依照選取或判斷到的物件位置，自動建立對應的尺寸或距離標註。',
        '透過自動距離標註，可以減少人工量測、放置尺寸線與調整標註位置的時間，讓圖面標註流程更有效率。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/pr9wNafkhLc',
    },
    {
      projectTitle: '五、自動管底高程標註',
      subtitle: '自動判斷管線高程資訊，並建立管底高程相關標註。',
      descriptionParagraphs: [
        '這個功能用來自動生成管底高程標註。程式會讀取或判斷管線在模型中的高程資訊，並依照圖面需求建立對應的管底高程標籤。',
        '透過這個工具，可以減少人工確認高程、換算管底位置與逐一標註的時間，讓 Revit MEP 圖面中的高程資訊更容易維護。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/5SUZ6sZ8qh8',
    },
    {
      projectTitle: '六、自動MEP元件註冊',
      subtitle:
        '註冊 CAD 圖例與 Revit MEP 元件之間的對應規則，作為後續自動生成的基礎。',
      descriptionParagraphs: [
        '這個功能用來建立 CAD 圖例與 Revit MEP 元件之間的對應關係。使用者可以透過註冊流程，將 CAD 圖面中的符號、圖層或幾何特徵，對應到指定的 Revit 元件類型。',
        '完成註冊後，後續的自動MEP元件生成流程就可以依照這些規則辨識 CAD 圖面，並在 Revit 中放置對應的 MEP 元件。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/nI_6_iMnc1g',
    },
    {
      projectTitle: '七、自動MEP元件生成',
      subtitle:
        '依據已註冊的 CAD 圖例規則，自動在 Revit 中生成對應的 MEP 元件。',
      descriptionParagraphs: [
        '這個功能用來根據已註冊的 CAD Map Pattern，自動辨識 CAD 圖面中的 MEP 圖例，並在 Revit 模型中生成對應的設備或元件。',
        '透過這個流程，可以減少人工逐一判斷 CAD 圖例、尋找位置與放置 Revit 元件的時間，讓 MEP 元件建置流程更快速且一致。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/LjRE5XQRu6I',
    },
    {
      projectTitle: '八、自動套管生成',
      subtitle:
        '自動判斷管線穿越結構的位置，並生成對應的穿樑、穿牆或樓板套管。',
      descriptionParagraphs: [
        '這個功能用來處理 MEP 管線穿越梁、牆或樓板時所需要的套管。程式會分析管線與結構構件之間的交會位置，並依照管線尺寸與設定規則生成對應的套管。',
        '透過自動套管生成，可以減少人工檢查穿越位置、判斷套管尺寸與逐一放置套管的時間，提升 BIM 協調與施工圖整理效率。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/OirSym8OsIc',
    },
    {
      projectTitle: '九、自動立管生成',
      subtitle:
        '在 2D 平面圖或 3D 視圖中快速生成向上或向下的立管，支援管、風管與電管。',
      descriptionParagraphs: [
        '這個功能用來快速建立跨樓層的立管。使用者可以在 Revit 的 2D 平面圖或 3D 視圖中操作，依照指定位置快速生成向上或向下延伸的立管。',
        '此工具可支援管、風管與電管，協助使用者在不同 MEP 系統中快速建立垂直連接，減少手動切換視圖、確認樓層與建立垂直管段的時間。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/l8bav8ptfk4',
    },
  ],
}
