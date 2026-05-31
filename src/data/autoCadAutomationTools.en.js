export default {
  pageTitle: 'AutoCAD Automation Tools',
  sections: [
    {
      projectTitle: '1. Batch Block Export',
      subtitle:
        'Batch process CAD block data to support later Revit or BIM workflows.',
      descriptionParagraphs: [
        'This tool is used to batch process block data in AutoCAD drawings. It helps extract or organize selected blocks and legend-related information into a format that can be used by later automation workflows.',
        'In CAD-to-BIM or legend conversion workflows, batch block export can serve as a preprocessing step, making drawing data easier to reuse in Revit or other automation tools.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/l6VUXgxKq_Q',
    },
    {
      projectTitle: '2. Similar Symbol Processing',
      subtitle:
        'Use text and layer preprocessing to distinguish CAD symbols that look similar but represent different equipment.',
      descriptionParagraphs: [
        'This tool is designed for CAD drawings where many symbols look visually similar. When different equipment or components use similar-looking symbols, image-based recognition alone may not reliably distinguish them.',
        'The tool uses nearby text, annotations, or related drawing information to classify similar symbols into different layers or recognizable categories, helping Revit-side Register CAD Map Pattern and CAD to MEP workflows run more reliably.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/yWkbilK9AW8',
    },
    {
      projectTitle: '3. Automatic Pipe Size Recognition',
      subtitle:
        'Recognize pipe-size text in CAD drawings and convert text-only pipe-size information into readable data.',
      descriptionParagraphs: [
        'This tool handles CAD drawings where pipe sizes are shown only as text annotations instead of being organized into corresponding layers. It reads pipe-size labels such as 2", 3", or 4" and analyzes the spatial relationship between the text and pipe geometry.',
        'After preprocessing, CAD pipe-size text that was originally only human-readable can be converted into layer or category information that later automation workflows can recognize, helping Revit or CAD-to-BIM processes determine pipe sizes more accurately.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/CTkt0B_0Mxk',
    },
    {
      projectTitle: '4. Automatic Legend Block Builder',
      subtitle:
        'Convert CAD legends into standardized blocks for later Revit legend or schedule workflows.',
      descriptionParagraphs: [
        'This tool helps create standardized CAD legend blocks. It organizes CAD symbols or legend items into a more consistent block format, making them easier to use in later legend generation, schedule matching, or Revit drawing workflows.',
        'With automatic legend block building, repetitive tasks such as cropping, organizing, naming, and creating blocks can be reduced, allowing standardized AutoCAD blocks to connect more reliably with BIM drawing production workflows.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/c69oUlgUcdw',
    },
    {
      projectTitle: '5. Batch Xref Binding',
      subtitle:
        'Batch bind external references into CAD drawings to reduce manual Xref processing time.',
      descriptionParagraphs: [
        'This tool is used to batch process external references in AutoCAD drawings. When multiple DWG files contain Xrefs, the tool helps bind those references into the drawings without manually opening and processing each file one by one.',
        'Batch Xref binding makes drawing data more self-contained and reduces the risk of missing external references during delivery, conversion, or later workflow integration.',
      ],
      youtubeLink: '',
    },
  ],
}
