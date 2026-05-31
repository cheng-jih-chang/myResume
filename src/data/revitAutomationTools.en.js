export default {
  pageTitle: 'Revit Automation Tools',
  sections: [
    {
      projectTitle: '1. Automated Legend Generation',
      subtitle:
        'Automatically place standardized legends into Revit schedules or drawings to reduce manual legend organization work.',
      descriptionParagraphs: [
        'This tool helps automate legend generation in Revit. It places prepared standardized legend items into the corresponding schedule or drawing locations, making equipment, component, and symbol legends more consistent.',
        'With automated legend generation, repetitive tasks such as placing, matching, and organizing legends can be handled by the program, improving drawing production efficiency in Revit.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/x0VpEzdBw0M',
    },
    {
      projectTitle: '2. Automated Revit Riser Annotation Generation',
      subtitle:
        'Automatically determine pipe riser direction and create corresponding riser annotations.',
      descriptionParagraphs: [
        'This tool handles riser annotations in Revit MEP drawings. It analyzes the relationship between pipes and floor levels to determine whether a pipe is going upward or downward, then creates the corresponding riser annotation.',
        'This reduces the time required to manually check riser directions and place annotations one by one, making cross-floor piping information clearer in drawings.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/_9_JTxbRgOk',
    },
    {
      projectTitle: '3. Automated Revit Pipe Size Annotation',
      subtitle:
        'Automatically read pipe sizes and place corresponding pipe-size annotations in drawings.',
      descriptionParagraphs: [
        'This tool automatically generates pipe-size annotations. It reads pipe size information from Revit elements and places the corresponding tags based on drawing position and pipe segment conditions.',
        'It reduces repetitive work such as checking each pipe size and manually placing tags, making pipe annotation faster and more consistent.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/0OJCdVFqpX8',
    },
    {
      projectTitle: '4. Automated Distance Annotation',
      subtitle:
        'Automatically create distance annotations between pipes, components, or related elements.',
      descriptionParagraphs: [
        'This tool helps generate distance annotations in Revit drawings. It creates dimensions or distance annotations based on selected or detected element positions.',
        'With automated distance annotation, users can reduce the time spent measuring, placing dimension lines, and adjusting annotation positions manually.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/pr9wNafkhLc',
    },
    {
      projectTitle: '5. Automated Pipe Bottom Elevation Annotation',
      subtitle:
        'Automatically determine pipe elevation information and create pipe bottom elevation annotations.',
      descriptionParagraphs: [
        'This tool automatically generates pipe bottom elevation annotations. The program reads or determines pipe elevation information from the model and creates the corresponding pipe bottom elevation tags based on drawing requirements.',
        'It reduces the time required to manually check elevations, calculate pipe bottom positions, and place annotations one by one, making elevation information easier to maintain in Revit MEP drawings.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/5SUZ6sZ8qh8',
    },
    {
      projectTitle: '6. Automated MEP Component Registration',
      subtitle:
        'Register mapping rules between CAD symbols and Revit MEP components as the basis for later automatic generation.',
      descriptionParagraphs: [
        'This tool is used to define the relationship between CAD symbols and Revit MEP components. Users can register CAD symbols, layers, or geometric patterns and map them to specific Revit element types.',
        'After registration, the automated MEP component generation workflow can use these rules to recognize CAD drawings and place the corresponding MEP components in Revit.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/nI_6_iMnc1g',
    },
    {
      projectTitle: '7. Automated MEP Component Generation',
      subtitle:
        'Automatically generate corresponding Revit MEP components based on registered CAD symbol rules.',
      descriptionParagraphs: [
        'This tool uses registered CAD Map Patterns to recognize MEP symbols in CAD drawings and generate the corresponding equipment or components in the Revit model.',
        'With this workflow, repetitive tasks such as interpreting CAD symbols, locating component positions, and placing Revit elements can be reduced, making MEP component modeling faster and more consistent.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/LjRE5XQRu6I',
    },
    {
      projectTitle: '8. Automated Sleeve Generation',
      subtitle:
        'Automatically detect pipe penetrations through structural elements and generate corresponding beam, wall, or floor sleeves.',
      descriptionParagraphs: [
        'This tool is used to generate sleeves required when MEP pipes pass through beams, walls, or floors. The program analyzes the intersections between pipes and structural elements, then generates the corresponding sleeves based on pipe size and configured rules.',
        'Automated sleeve generation reduces the time required to manually check penetration locations, determine sleeve sizes, and place sleeves one by one, improving BIM coordination and drawing production efficiency.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/OirSym8OsIc',
    },
    {
      projectTitle: '9. Automated Riser Generation',
      subtitle:
        'Quickly generate upward or downward risers in 2D floor plans or 3D views, supporting pipes, ducts, and conduits.',
      descriptionParagraphs: [
        'This tool is used to quickly create risers across different floors. Users can operate in Revit 2D floor plans or 3D views and generate upward or downward risers based on the specified location.',
        'The tool supports pipes, ducts, and conduits, helping users quickly create vertical connections across different MEP systems while reducing the time spent switching views, checking levels, and manually creating vertical segments.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/l8bav8ptfk4',
    },
  ],
}
