export default {
  pageTitle: 'AutoCAD 自動化工具介紹',
  sections: [
    {
      projectTitle: '一、批次出圖塊',
      subtitle:
        '批次整理 CAD 圖面中的圖塊資料，協助後續 Revit 或 BIM 流程使用。',
      descriptionParagraphs: [
        '這個功能用來批次處理 AutoCAD 圖面中的圖塊資料。透過工具協助，可以將圖面中的指定圖塊或圖例資料整理成後續流程可使用的格式，減少人工逐一處理圖塊的時間。',
        '在 CAD TO BIM 或圖例轉換流程中，這類批次出圖塊工具可以作為前處理步驟，讓圖面資料更容易被 Revit 或其他自動化流程接續使用。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/l6VUXgxKq_Q',
    },
    {
      projectTitle: '二、相似圖例處理',
      subtitle:
        '透過文字與圖層前處理，區分外觀相似但代表不同設備的 CAD 圖例。',
      descriptionParagraphs: [
        '這個功能主要用來處理 CAD 圖面中許多外觀非常相似的圖例。當不同設備或元件使用相近符號時，單靠圖像外觀不容易穩定辨識，因此需要在 AutoCAD 端先進行前處理。',
        '工具可以根據圖例附近的文字、標註或相關資訊，將相似圖例區分到不同圖層或辨識分類中，讓後續 Revit 端的 Register CAD Map Pattern 與 CAD to MEP 流程可以更穩定運作。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/yWkbilK9AW8',
    },
    {
      projectTitle: '三、自動管徑辨識',
      subtitle:
        '判讀 CAD 圖面中的管徑文字，將原本只存在於文字標註中的管徑資訊轉換成可辨識資料。',
      descriptionParagraphs: [
        '這個功能用來處理 CAD 圖面中管徑只用文字標示、沒有整理到對應圖層的情境。工具會判讀圖面中的管徑文字，例如 2"、3"、4" 等標示，並分析文字與管線之間的空間關係。',
        '完成前處理後，原本只有人能閱讀的 CAD 管徑文字，可以轉換成後續自動化流程更容易判斷的圖層或分類資料，讓 Revit 或 CAD TO BIM 流程可以更正確地取得管線尺寸資訊。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/CTkt0B_0Mxk',
    },
    {
      projectTitle: '四、自動圖例圖塊製作',
      subtitle:
        '將 CAD 圖例整理成標準化圖塊，作為後續 Revit 圖例或明細表流程的素材。',
      descriptionParagraphs: [
        '這個功能用來協助建立標準化的 CAD 圖例圖塊。工具可以將 CAD 圖面中的圖例或符號整理成較一致的圖塊格式，讓後續圖例生成、明細表對應或 Revit 圖面配置流程更容易使用。',
        '透過自動圖例圖塊製作，可以減少人工裁切、整理、命名與建立圖塊的時間，讓 AutoCAD 端產出的標準化圖塊能夠更穩定銜接到後續 BIM 出圖流程。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/c69oUlgUcdw',
    },
    {
      projectTitle: '五、批次外部參考併入',
      subtitle:
        '批次將多個 CAD 檔案中的外部參考併入圖面，降低手動處理 Xref 的時間。',
      descriptionParagraphs: [
        '這個功能用來批次處理 AutoCAD 圖面中的外部參考。當多個 DWG 檔案都包含 Xref 時，工具可以協助將外部參考併入圖面，減少人工逐檔開啟、檢查與執行併入的時間。',
        '透過批次外部參考併入，可以讓圖面資料更集中，也能降低後續交付、轉檔或匯入其他流程時，因為外部參考遺失而造成的問題。',
      ],
      youtubeLink: '',
    },
  ],
}
