export default {
  pageTitle: 'CAD T0 BIM 自動化流程',
  sections: [
    {
      projectTitle: '一、自動化管線生成',
      subtitle:
        '透過 CAD 圖面辨識與 Revit API，自動生成 MEP 管線、立管與設備元件。',
      descriptionParagraphs: [
        '這個功能是 CAD TO BIM 自動化流程中的核心建模流程，目標是將 2D CAD 圖面中的管線、立管、灑水頭與其他 MEP 圖例資訊，轉換成 Revit 中可使用的 MEP 3D 模型或建模輔助資料。',
        '流程主要由兩個按鈕組成：第一個是 Register CAD Map Pattern，用來註冊 CAD 圖面中的 MEP 圖例、圖層、幾何特徵與對應的 Revit 元件規則；第二個是 Generate MEP Pipeline，用來根據已註冊的規則辨識 CAD 圖面，並自動生成管線、立管、灑水頭等 MEP 元件。',
        '透過這樣的設計，原本需要人工判讀圖例、確認位置、整理圖層、建立管線與放置設備的流程，可以被拆解成可重複執行的自動化步驟，讓 CAD 圖面資料更穩定地銜接到 BIM 建模流程。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/URAI8Lxqbng',
    },
    {
      projectTitle: '二、自動化機械元件生成',
      subtitle:
        '透過 AutoCAD 圖例前處理與 Revit CAD 圖像辨識，自動生成機械設備與 MEP 元件。',
      descriptionParagraphs: [
        '這個 Pipeline 主要用來處理 CAD 圖面中的機械設備與 MEP 元件生成。由於許多機械圖例在 CAD 中外觀非常相似，若直接進入 Revit 端進行辨識，容易出現不同設備圖例難以區分的問題。',
        '為了解決這個問題，流程會先在 AutoCAD 端透過 Text to Layer Blocks 進行前處理。此按鈕會根據圖例旁邊的文字、標註或相關資訊，將外觀相似的圖例區分到不同圖層或可辨識分類中，讓後續 Revit 端能更穩定地判斷元件類型。',
        '完成 CAD 前處理後，再透過 Revit 端的 Register CAD Map Pattern 註冊 CAD 圖例與 Revit 元件的對應規則，最後由 CAD to MEP 根據已註冊的規則辨識圖面，並自動生成對應的機械元件或 MEP 元件。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/RNSddQSk_4c',
    },
    {
      projectTitle: '三、自動套管生成',
      subtitle:
        '依據管線尺寸、數量與鄰近距離，自動生成穿樑、穿牆與樓板套管。',
      descriptionParagraphs: [
        '這個功能用來自動生成 MEP 管線穿越結構構件時所需的套管。系統可以依據管線尺寸、管線數量，以及多條管線彼此靠近的距離，判斷應該生成單一套管或合併成較大的套管。',
        '當管線穿過梁、牆或樓板時，工具會分析管線與結構構件的交會位置，並依照設定規則自動放置對應尺寸的穿樑套管、穿牆套管或樓板套管，減少人工逐一判斷與放置套管的時間。',
        '此流程也支援多管線集中穿越的情境。若多條管線距離過近，系統可以依據管徑、數量與間距判斷是否需要合併處理，改以較大的套管表示，讓套管配置更符合實際施工與 BIM 協調需求。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/Jt7wSbEYdcU',
    },
    {
      projectTitle: '四、CAD管徑辨識前處理',
      subtitle:
        '將 CAD 圖面中的管徑文字標示轉換成 Revit 可辨識的管線資訊。',
      descriptionParagraphs: [
        '這個前處理功能主要用來處理 CAD 圖面中管徑資訊只以文字標示、但沒有被整理到對應圖層的情境。在這類圖面中，管線本身可能只是一般線段或聚合線，而管徑資訊則是透過旁邊的文字標註呈現，導致 Revit 端無法直接讀取這些管徑資訊。',
        '透過 CAD管徑辨識前處理，工具會在 AutoCAD 端判讀圖面中的管徑文字，例如 2"、3"、4" 等標示，並依照文字與管線的空間關係，將管徑資訊轉換成更穩定、可被後續流程辨識的 CAD 圖層或資料分類。',
        '完成前處理後，原本只存在於 CAD 文字中的管徑資訊，就可以被轉換成 Revit / CAD to BIM 流程可以閱讀的資訊，讓後續的 CAD to MEP、管線生成或模型建置流程能更正確地判斷管線尺寸。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/CTkt0B_0Mxk',
    },
    {
      projectTitle: '五、自動圖例生成',
      subtitle:
        '將前處理產生的標準化 CAD 圖塊，自動放入對應的 Revit 明細表中作為圖例使用。',
      descriptionParagraphs: [
        '這個功能用來自動生成 Revit 明細表中的圖例內容。流程會使用已經透過 AutoCAD 前處理與 Legend Block Builder 製作完成的標準化 CAD 圖塊，將這些圖塊作為可重複使用的圖例素材。',
        '在 Revit 端執行自動圖例生成時，工具會依照明細表中的項目與對應關係，尋找相對應的標準化圖塊，並自動放入指定的 Revit 明細表或圖面位置中，作為設備、元件或符號的圖例展示。',
        '透過這個流程，原本需要人工逐一整理圖例、放置圖塊、對應明細表項目的作業，可以轉換成更穩定的自動化流程。這讓 CAD 前處理完成後的標準化圖塊，能夠更順利銜接到 Revit 圖例與明細表產出流程中。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/p5fzG2DjOVo',
    },
    {
      projectTitle: '六、自動標註生成',
      subtitle:
        '依據管線、元件、樓層、管徑與高程變化，自動判斷並放置對應的 MEP 標註。',
      descriptionParagraphs: [
        '這個功能用來自動生成 Revit MEP 圖面中的管線與元件標註。它不是單一標註工具，而是由四個標註按鈕組成，分別處理立管標註、管徑大小標註、距離標註，以及管徑與高程標註。',
        '程式會自行判斷元件與樓層之間的距離關係、管段的上下方向、管線高程變化，以及管徑是否發生變化，並依照這些條件判斷應該在哪個位置放置哪一種類型的標籤。',
        '透過這個流程，原本需要人工逐一確認管線方向、管徑變化、高程關係與標註位置的工作，可以轉換成自動化判斷與放置標籤的流程，讓 Revit MEP 圖面標註更快速且一致。',
        '這個功能包含四個主要按鈕：立管標註自動生成、管徑大小自動生成、距離標註自動生成，以及管徑與高程標註自動生成。不同按鈕會針對不同圖面需求，自動建立對應的標註內容。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/yq-_Loj5fZM',
    },
    {
      projectTitle: '七、自動立管生成',
      subtitle:
        '在 3D 模型或 2D 平面圖中，快速生成向上或向下的立管，並支援管、風管與電管。',
      descriptionParagraphs: [
        '這個功能用來快速生成穿越樓層的立管。使用者可以在 Revit 的 3D 視圖或 2D 平面圖中操作，自動建立向上或向下延伸的立管。',
        '工具會依照使用者的操作方向與模型條件，判斷立管應該往上生成還是往下生成，讓原本需要手動切換視圖、確認樓層、建立垂直管段的流程，可以更快速地完成。',
        '此功能不只適用於一般管線，也支援風管與電管。透過同一套操作邏輯，可以在不同 MEP 系統中快速建立垂直連接，協助使用者處理跨樓層的管線配置需求。',
      ],
      youtubeLink: 'https://www.youtube.com/embed/4L-JUhUhJOE',
    },
  ],
}
