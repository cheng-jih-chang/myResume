export default {
  pageTitle: 'CAD-to-BIM Pipeline',
  sections: [
    {
      projectTitle: '1. Automated MEP Pipeline Generation',
      subtitle:
        'Generate MEP pipes, risers, and equipment elements from CAD drawings through CAD pattern recognition and the Revit API.',
      descriptionParagraphs: [
        'This feature is the core modeling workflow of the CAD TO BIM automation process. It converts information from 2D CAD drawings, including MEP pipelines, risers, sprinkler heads, and other CAD symbols, into Revit MEP 3D models or modeling-support data.',
        'The workflow is mainly composed of two buttons. The first one is Register CAD Map Pattern, which registers CAD-based MEP symbols, layers, geometric patterns, and their corresponding Revit element rules. The second one is Generate MEP Pipeline, which uses the registered patterns to recognize CAD drawings and automatically generate MEP pipes, risers, sprinkler heads, and related elements.',
        'With this design, repetitive tasks such as interpreting CAD symbols, locating components, organizing layers, creating pipes, and placing MEP equipment can be transformed into repeatable automation steps, allowing CAD drawing data to connect more reliably with BIM modeling workflows.',
      ],
      features: [
        'Generate Revit MEP pipes from CAD drawings',
        'Support risers and vertical pipeline generation',
        'Recognize sprinkler heads and other MEP component locations',
        'Register CAD symbol recognition rules through Register CAD Map Pattern',
        'Determine generation positions from CAD layers, symbols, and geometric patterns',
        'Generate or support BIM 3D modeling through the Revit API',
      ],
      secondarySectionTitle: 'Supporting Tools',
      youtubeLink: 'https://www.youtube.com/embed/URAI8Lxqbng',
    },
    {
      projectTitle: '2. Automated Mechanical Component Generation',
      subtitle:
        'Generate mechanical and MEP components through AutoCAD preprocessing and Revit CAD pattern recognition.',
      descriptionParagraphs: [
        'This pipeline focuses on generating mechanical equipment and MEP components from CAD drawings. Since many mechanical symbols in CAD drawings look very similar, directly recognizing them on the Revit side can make it difficult to reliably distinguish different component types.',
        'To solve this problem, the workflow first preprocesses the CAD drawing in AutoCAD through Text to Layer Blocks. This button uses nearby text, annotations, or related drawing information to separate visually similar symbols into different layers or recognizable categories, making the symbols easier to identify later in Revit.',
        'After the CAD preprocessing is complete, Register CAD Map Pattern is used in Revit to register the mapping between CAD symbols and Revit element rules. CAD to MEP then uses the registered patterns to recognize the CAD drawing and automatically generate the corresponding mechanical or MEP components.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/RNSddQSk_4c',
    },
    {
      projectTitle: '3. Automated Sleeve Generation',
      subtitle:
        'Automatically generate beam, wall, and floor sleeves based on pipe size, quantity, and spacing.',
      descriptionParagraphs: [
        'This feature automatically generates sleeves required when MEP pipes pass through structural elements. The system determines the appropriate sleeve size based on pipe diameter, pipe quantity, and the spacing between nearby pipes.',
        'When pipes pass through beams, walls, or floors, the tool analyzes the intersection between the pipes and structural elements, then automatically places corresponding beam sleeves, wall sleeves, or floor sleeves according to the configured rules.',
        'The workflow also supports cases where multiple pipes pass through the same area. If several pipes are close to each other, the system can evaluate their sizes, quantity, and spacing to determine whether they should be merged into a larger sleeve, making the sleeve layout more practical for construction and BIM coordination.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/Jt7wSbEYdcU',
    },
    {
      projectTitle: '4. CAD Pipe Size Recognition Preprocessing',
      subtitle:
        'Convert pipe-size text annotations in CAD drawings into pipe information that Revit can recognize.',
      descriptionParagraphs: [
        'This preprocessing feature is designed for CAD drawings where pipe sizes are shown only as text annotations instead of being organized into corresponding CAD layers. In these drawings, the pipes may simply be lines or polylines, while the pipe-size information is stored in nearby text, making it difficult for Revit to read the information directly.',
        'Through CAD Pipe Size Recognition Preprocessing, the tool analyzes pipe-size text in AutoCAD, such as 2", 3", or 4", and converts the information into more stable CAD layers or recognizable data categories based on the spatial relationship between the text and the pipe geometry.',
        'After preprocessing, pipe-size information that originally existed only as CAD text can be transformed into data that the Revit / CAD-to-BIM workflow can read. This allows later CAD to MEP, pipe generation, or modeling workflows to determine pipe sizes more accurately.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/CTkt0B_0Mxk',
    },
    {
      projectTitle: '5. Automated Legend Generation',
      subtitle:
        'Automatically place preprocessed standardized CAD legend blocks into corresponding Revit schedules as legend references.',
      descriptionParagraphs: [
        'This feature is used to automatically generate legend content for Revit schedules. It uses standardized CAD blocks that have already been created through AutoCAD preprocessing and the Legend Block Builder, turning them into reusable legend resources.',
        'When the automated legend generation workflow runs in Revit, the tool matches schedule items with their corresponding standardized CAD blocks and places those blocks into the appropriate Revit schedule or drawing location as legend references for equipment, components, or symbols.',
        'With this workflow, repetitive tasks such as organizing legends, placing CAD blocks, and matching schedule items can be transformed into a more stable automation process. This allows standardized CAD blocks produced during preprocessing to connect more smoothly with Revit legend and schedule-generation workflows.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/p5fzG2DjOVo',
    },
    {
      projectTitle: '6. Automated Annotation Generation',
      subtitle:
        'Automatically place MEP annotations based on pipes, components, levels, pipe sizes, and elevation changes.',
      descriptionParagraphs: [
        'This feature is used to automatically generate pipe and component annotations in Revit MEP drawings. Instead of being a single annotation tool, it consists of four annotation buttons that handle riser annotations, pipe-size annotations, distance annotations, and pipe-size/elevation annotations.',
        'The program automatically analyzes the distance relationship between elements and levels, the upward or downward direction of pipe segments, pipe elevation changes, and pipe-size changes. Based on these conditions, it determines where each type of tag should be placed.',
        'With this workflow, repetitive tasks such as checking pipe direction, pipe-size changes, elevation relationships, and annotation placement can be transformed into an automated tagging process, making Revit MEP drawing annotation faster and more consistent.',
        'This feature includes four main buttons: automated riser annotation generation, automated pipe-size annotation generation, automated distance annotation generation, and automated pipe-size/elevation annotation generation. Each button handles a different drawing requirement and automatically creates the corresponding annotation content.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/yq-_Loj5fZM',
    },
    {
      projectTitle: '7. Automated Riser Generation',
      subtitle:
        'Quickly generate upward or downward risers in 3D models or 2D floor plans, supporting pipes, ducts, and conduits.',
      descriptionParagraphs: [
        'This feature is used to quickly generate risers that pass through different floors. Users can operate directly in either Revit 3D views or 2D floor plans, and the tool automatically creates upward or downward risers based on the selected or specified location.',
        'The tool determines whether the riser should be generated upward or downward based on the user’s operation and model conditions. This reduces the need to manually switch views, check levels, and create vertical pipe segments one by one.',
        'This feature is not limited to pipes. It also supports ducts and conduits. With the same workflow, users can quickly create vertical connections across different MEP systems, making it easier to handle cross-floor routing requirements.',
      ],
      youtubeLink: 'https://www.youtube.com/embed/4L-JUhUhJOE',
    },
    {
      projectTitle: '8. Related GitHub Demo',
      subtitle:
        'A GitHub demo showing the Revit add-in architecture, command separation, and Hot Reload development workflow.',
      descriptionParagraphs: [
        'This GitHub demo is used to demonstrate the basic architecture of Revit add-in development. It includes project organization, Revit command entry points, feature logic separation, and a structure that makes tools easier to maintain and extend during development.',
        'The demo also shows the concept of a Hot Reload development workflow, which aims to reduce the cost of repeatedly restarting Revit during add-in development and make feature testing, UI adjustments, and logic changes more efficient.',
        'This repository is not the full source code of a commercial project. Instead, it demonstrates my Revit add-in architecture design, C# / Revit API development approach, and how I organize maintainable BIM automation tool projects.',
      ],
      youtubeLink: '',
      githubLink: 'https://github.com/cheng-jih-chang/RevitAddinHotReloadDemo.git',
    },
  ],
}
