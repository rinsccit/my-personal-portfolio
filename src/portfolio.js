const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'RS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Rahul Sood',
  role: 'Website Developer',
  picture: 'https://avatars.githubusercontent.com/u/180576713?s=400&u=ae351496df162bfae6fb7bf6bd6279992b636627&v=4',

  description:
    'I am an Information Technology (Web Programming) student at Nova Scotia Community College with experience in data analysis, administrative support and technical troubleshooting. I am skilled in Microsoft Office, digital record management and supporting users in fast-paced operational environments. I am known for strong attention to detail, clear communication and the ability to learn new systems fast. I am interested in contributing through my I.T and other skills so that I can help in saving the environment as well as gain hands-on experience supporting internal systems and administrative processes.',
  resume: `${process.env.PUBLIC_URL}/documents/Resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/rahull44/',
    github: 'https://www.github.com/rinsccit',
  },
}

const education = [
  {
    institution: 'Nova Scotia Community College',
    university: 'Not Applicable',
    program: 'Information Technology (Web Programming) Diploma',
    years: 'September 2024 - Present',
    location: 'Halifax, Nova Scotia',
    highlights: [
      'Focused on modern web development with JavaScript, React, and full-stack fundamentals.',
      'Completed collaborative team projects with version control and agile practices.',
      'Applied classroom learning to practical portfolio and internship-oriented work.',
    ],
  },
    {
    institution: 'Tecnia Institute of Advanced Studies',
    university: 'Guru Gobind Singh Indraprastha University',
    program: 'Master of Business Administration',
    years: 'August 2009 - December 2011',
    location: 'Delhi, India',
    highlights: [
      'Developed analytical thinking and business problem-solving skills that complement technical development work.',
      'Knowledge of marketing strategies, consumer behaviour and brand management.',
      'Completed case study based on a real company with focus on Human Resources strategies.',
    ],
  },
    {
    institution: 'Sri Guru Nanak Dev Khalsa College',
    university: ' Delhi University',
    program: 'Bachelor of Commerce (Pass)',
    years: 'August 2005 - March 2009',
    location: 'Delhi, India',
    highlights: [
      'Gained solid foundation in accounting, business studies and economics.',
      'Preparation and analysis of financial statements (balance sheet, profit & loss and cash flow).',
      'Built numerical and analytical skills.',
    ],
  },
]

const certifications = [
  {
    title: 'Cisco Certified Network Associate (C.C.N.A)',
    issuer: 'Cisco Systems, Inc.',
    issued: 'February 2020',
    credentialId: 'WK7BS7BDXDVQQJWC',
    credentialLink: 'https://www.cisco.com/go/verifycertificate',
    highlights: [
      'Automation and programmability.',
      'I.P connectivity.',
      'I.P services.',
      'Network access.',
      'Network fundamentals.',
      'Security fundamentals.',
    ],
  },
  {
    title: 'Jetking Certified Hardware and Networking Professional - Cloud',
    issuer: 'Jetking Infotrain Ltd.',
    issued: 'April 2014',
    credentialId: '1011-122297',
    credentialLink: `${process.env.PUBLIC_URL}/documents/Jetking%20certificate_rotated.pdf`,
    highlights: [
      'Basic computer electronics.',
      'C.C.N.A fundamentals.',
      'Computer applications.',
      'Exchange Server 2010.',
      'F.S.P/Live project.',
      'Linux basics (Ubuntu).',
      'Microsoft Windows Server (Administration).',
      'Networking essentials.',
      'Networking security and ethical hacking.',
      'Operating system support skills.',
      'P.C hardware support skills.',
      'Personality development.',
      'Storage basics and cloud computing.',
    ],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'WaitWell',
    description:
      'WaitWell is a patient visit tracker designed for hospitals and clinics under Nova Scotia Health in Halifax. It reduces patient anxiety by providing clear and real-time visibility into their visit progress - without exposing any personal health or medical information. The web application addresses a common patient experience gap: people often spend long periods waiting without clear communication about what is happening next. In busy clinical settings, this lack of visibility can increase stress for patients and families & create repeated status inquiries for staff and reduce overall confidence in the care process. It solves this by providing a simple and understandable timeline of visit progress from arrival to completion.',
    contribution: 'I contributed to this project as a maintainer and developer collaborating with team members on the project\'s development to ensure code quality.',
    outcome: 'The project is currently in development and has not been deployed yet but it has the potential to improve patient experience and operational efficiency in healthcare settings.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Zod'],
    sourceCode: 'https://github.com/NSCC-ITC-Winter2026-WEBD3031-700-MCa/project-waitwell.git',
    livePreview: 'http://172.26.32.1:3000',
    image: 'WaitWell.png',
  },
  {
    name: 'N.S.C.C Skillpath',
    description:
      'N.S.C.C Skillpath is a student-to-student learning platform where a student helps someone in their strong area and gets help in their weak area plus earn rewards for consistent efforts. It is designed to solve a common problem among students: finding reliable and accessible peer support for academic challenges. Many students struggle to find study partners or tutors who can help them with specific subjects, thus, leading to frustration and decreased academic performance. N.S.C.C Skillpath addresses this by creating a structured platform where students can connect based on their strengths and weaknesses, fostering a supportive learning community.',
    contribution: 'I contributed mainly in making the presentation and documentation of the project.',
    outcome: 'The project is not completed yet and was done for Hackathon 2026 participation.',
    stack: ['Axios with Tanstack Query', 'J.W.T', 'MySQL','Node.js with Express', 'Prisma', 'React', 'shadcn UI', 'Sonner', 'Tailwind CSS','Zod'],
    sourceCode: 'https://www.github.com/kushal-soni-nscc/nscc-skillpath.git',
    livePreview: '',
    image: 'N.S.C.C%20Skillpath.png',
  },
  {
    name: 'Student Progress Dashboard',
    description:
      'The Student Progress Dashboard is a full-stack web application for faculty to monitor student performance and engagement across courses by uploading the .csv files (grades and attendance) exported through L.M.S, then, analyzing that data through dashboards, tables, notes and charts. It is designed to solve a practical teaching workflow: instead of manually reviewing scattered reports, instructors can upload course files, automatically ingest and normalize student/course/grade/attendance data to quickly identify students or courses that need attention/support.',
    contribution: 'I mainly worked as a front-end developer on this project, collaborating with the team to design and implement the user interface and experience of the web application using React and Tailwind CSS.',
    outcome: 'This summer work term project was developed upto the satisfaction of the instructor/teacher but it has not been deployed yet. It has the potential to improve instructors\' ability to monitor and support student performance and engagement across courses by providing a centralized dashboard for course data analysis.',
    stack: ['JavaScript', 'H.T.M.L', 'Node.js with Express', 'Others', 'React with Vite', 'SQLite with Prisma', 'Tailwind CSS'],
    sourceCode: 'https://github.com/NSCC-ITC-Spring2025-SPD/Student-Progress-Dashboard.git',
    livePreview: '',
    image: 'Login%20webpage.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Bootstrap',
  'C.I/C.D',
  'C.S.S',
  'Docker',
  'ExpressJS',
  'Figma',
  'Git',
  'GitHub',
  'Google Workspace',
  'H.T.M.L',
  'Java',
  'JavaScript',
  'Laravel',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'Microsoft Word',
  'MongoDB',
  'MySQL',
  'Next.js',
  'Node.js',
  'PHP',
  'React',
  'Responsive Website Design',
  'REST A.P.Is',
  'S.A.S.S/S.C.S.S',
  'S.Q.L',
  'SQLite',
  'TypeScript',
  'UI/UX Design',
  'Visual Studio Code',
  'Vite.js',
  'Vue.js',
]

const softSkills = [
  'Accuracy',
  'Adaptability',
  'Attention to Detail',
  'Communication',
  'Compliance',
  'Confidentiality',
  'Critical Thinking',
  'Customer Service',
  'Data Management and Reporting',
  'Digital Literacy',
  'Leadership',
  'Organizational Skills',
  'Operations and Administrative Support',
  'Problem Solving',
  'Team Collaboration and Coordination',
  'Time Management',
]

const volunteerExperience = [
  {
    company: 'Ritchie Community League',
    role: 'Project Assistant',
    years: 'April 2023 - Present',
    location: 'Edmonton, Alberta',
    details: [
      'Helping in any computer related work to streamline the processes.',
      'Assisted with event setup, cleanliness and guest support.',
      'Helped community members in a respectful and service-oriented manner.',
      'Supported team coordination and smooth operations during community events.',
    ],
  },
]

const experience = [
{
  company: 'Halifax Sport and Social Club',
  role: 'Game Coordinator',
  years: 'September 2024 - December 2025',
  location: 'Halifax, Nova Scotia',
  details: [
    'Coordinated 10+ recreational games and events, ensuring smooth operations and positive participant experiences.',
    'Provided clear and professional communication to groups of 15+ participants per event, addressing questions and resolving issues in real time.',
    'Collaborated with staff to organize equipment and ensure safe, efficient and on-time event execution.',
  ],
},
{
  company: 'Amazon Canada Fulfillment Services ULC',
  role: 'F.C Associate I',
  years: 'April 2023 - April 2024',
  location: 'Acheson, Alberta',
  details: [
    'Assisted team members with computer-based tasks and scanning systems to maintain workflow accuracy.',
    'Maintained safety, quality and productivity standards in a high-paced technical environment.',
    'Processed over 300 customer orders using Radio Frequency scanners with consistent accuracy and attention to detail.',
  ],
},
{
  company: 'Epikso India Pvt. Ltd.',
  role: 'Research Analyst',
  years: 'October 2021 - January 2023',
  location: 'Delhi N.C.R, India',
  details: [
    'Researched, recorded and analyzed data to support decision-making and operational improvements.',
    'Managed multiple assigned tasks and project requirements with a high level of accuracy.',
    'Maintained complex Excel-based datasets and reported issues promptly to reduce errors.',
  ],
},
{
  company: 'Errand Enterprises',
  role: 'Data Analyst',
  years: 'May 2017 - October 2019',
  location: 'Delhi, India',
  details: [
    'Demonstrated software features to clients, ensuring understanding and successful usage.',
    'Digitized more than 100+ physical records into Excel, improving data accessibility.',
    'Provided technical support to 50+ customers, contributing to increased service adoption.',
    'Prepared detailed reports and documentation to support management decisions.',
  ],
},
{
  company: 'Muthoot Finance Ltd.',
  role: 'Junior Relationship Executive',
  years: 'January 2015 - August 2016',
  location: 'Delhi, India',
  details: [
    'Provided in-person customer support to more than 100 customers, resolving concerns and explaining product information..',
    'Managed cash transactions and updated 20+ customer accounts accurately using a digital system.',
    'Coordinated branch operations and assisted staff in completing administrative tasks.',
  ],
},
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sood.1987@gmail.com',
}

export {
  header,
  about,
  education,
  certifications,
  projects,
  skills,
  softSkills,
  experience,
  volunteerExperience,
  contact,
};
