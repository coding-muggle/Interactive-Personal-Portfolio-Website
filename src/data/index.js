export const ALL_SKILLS = {
  'Engineering & CAD': [
    { name: 'SolidWorks',  abbr: 'SW',  color: '#e22f2f', level: 85 },
    { name: 'Onshape',     abbr: 'OS',  color: '#4a9eff', level: 80 },
    { name: 'AutoCAD',     abbr: 'AC',  color: '#e02020', level: 75 },
    { name: 'Fusion 360',  abbr: 'F3',  color: '#f7941d', level: 70 },
    { name: 'Inventor',    abbr: 'IV',  color: '#d8691c', level: 64 },
    { name: 'CATIA',       abbr: 'CT',  color: '#003b8b', level: 38 },
  ],
  'Programming & Web/App': [
    { name: 'C++',           abbr: 'C++', color: '#4ec9b0', level: 80 },
    { name: 'C',             abbr: 'C',   color: '#7ea7d8', level: 78 },
    { name: 'Python',        abbr: 'PY',  color: '#f7c948', level: 72 },
    { name: 'MATLAB',        abbr: 'ML',  color: '#e16737', level: 68 },
    { name: 'JavaScript',    abbr: 'JS',  color: '#f7df1e', level: 70 },
    { name: 'React',         abbr: 'RE',  color: '#61dafb', level: 62 },
    { name: 'React Native',  abbr: 'RN',  color: '#0fa5e9', level: 45 },
    { name: 'HTML5',         abbr: 'HT',  color: '#e44d26', level: 78 },
    { name: 'CSS3',          abbr: 'CS',  color: '#1572b6', level: 74 },
    { name: 'REST APIs',     abbr: 'AP',  color: '#00c896', level: 65 },
    { name: 'React Context', abbr: 'RC',  color: '#61dafb', level: 60 },
    { name: 'Responsive UI', abbr: 'UI',  color: '#a78bfa', level: 72 },
  ],
  'PCB & Hardware': [
    { name: 'KiCad',      abbr: 'KC', color: '#2e7d32', level: 70 },
    { name: 'Fritzing',   abbr: 'FR', color: '#aa0000', level: 65 },
    { name: '3D Printing', abbr: '3D', color: '#ff6b35', level: 88 },
  ],
};

export const PROJECTS = [
  {
    id: 0,
    title: 'Rocket Telemetry Ground Station',
    image: '/images/ground.png',
    subtitle: 'RF Systems / Embedded / PCB Design',
    featured: true,
    color: '#4dc9ff',
    desc: 'Custom-designed ground station for METRocketry design team featuring a bespoke PCB integrating ESP32, RFM69HCW RF module, microSD storage, OLED display, RGB status indicators, and Li-ion power regulation for bidirectional communication.',
    role: 'Payload - Avionics Assistant',
    tools: ['C++', 'ESP32', 'KiCad', 'RFM69HCW', 'I2C', 'PowerBoost 1000C'],
    outcomes: 'Completed schematic and PCB layout, finalized component selection, and initiated firmware development; PCB ordered and pending assembly/testing.'
  },
  {
    id: 1,
    title: 'NVIDIA Jetson Subsystem Power Data Logger',
    image: '/images/logger.png',
    subtitle: 'Embedded Systems / Power Monitoring',
    color: '#3b82f6',
    desc: 'ESP32-based power monitoring and logging system for NVIDIA Jetson payload subsystem, integrating INA260 current/voltage sensing, microSD storage, inline power measurement, and onboard OLED user interface.',
    role: 'Payload - Avionics Assistant',
    tools: ['C++', 'ESP32', 'INA260', 'I2C', 'microSD', 'OLED Display'],
    outcomes: 'Implemented real-time voltage, current, and power logging with SD-card fault detection, user-controlled logging interface, and inline measurement via screw-terminal integration for post-flight analysis. Still currently testing for final iteration'
  },
  {
    id: 2,
    title: 'Embedded Telemetry Dashboard',
    subtitle: 'React Native / IoT Integration',
    color: '#06b6d4',
    desc: 'Cross-platform mobile application built with React Native to monitor and visualize real-time embedded system telemetry data via REST API integration.',
    role: 'Mobile & Systems Developer',
    tools: ['React Native', 'JavaScript', 'REST API', 'Data Visualization'],
    outcomes: 'Implementing live telemetry retrieval, dynamic UI updates, and scalable architecture for embedded IoT device integration (in development).'
  },
  {
    id: 3,
    title: 'Autonomous Fire-Extinguishing Robot',
    image: '/images/fire.png',
    subtitle: 'Mechatronics / Embedded Control',
    color: '#10b981',
    desc: 'Autonomous mobile robot designed to detect and extinguish fire sources using multi-sensor input, motor control, and a servo-actuated water delivery system.',
    role: 'Course Project',
    tools: ['Arduino', 'C++', 'DC Motors', 'L298N', 'Servo Control', 'Onshape', '3D Printing'],
    outcomes: 'Designed, fabricated, and validated a fully functional mechatronic system with reliable flame detection, autonomous navigation, and targeted fire suppression.'
  },
  {
    id: 4,
    title: 'Web Calculator Application',
    subtitle: 'JavaScript / Frontend Development',
    image: '/images/calc.png',
    color: '#f59e0b',
    desc: 'Interactive calculator web application built using vanilla JavaScript, HTML, and CSS, implementing core arithmetic operations and dynamic DOM manipulation.',
    role: 'Frontend Developer',
    tools: ['JavaScript', 'HTML', 'CSS'],
    outcomes: 'Developed responsive UI with real-time input handling, operator logic, and state management as part of The Odin Project curriculum.'
  },
  {
    id: 5,
    title: 'Etch-A-Sketch Web Application',
    image: '/images/etch.png',
    subtitle: 'JavaScript / DOM Manipulation',
    color: '#4dc9ff',
    desc: 'Interactive browser-based drawing application built with vanilla JavaScript, featuring dynamic grid generation, mouse event handling, and real-time DOM manipulation.',
    role: 'Frontend Developer',
    tools: ['JavaScript', 'HTML', 'CSS'],
    outcomes: 'Implemented adjustable grid sizing, hover-based drawing logic, and dynamic color state management as part of The Odin Project curriculum.'
  },
  {
    id: 6,
    title: 'Personal RAG Research System',
    subtitle: 'AI / Backend Development',
    color: '#8b5cf6',
    desc: 'Retrieval-Augmented Generation (RAG) system designed to index and query personal research documents for context-aware information retrieval.',
    role: 'AI Systems Developer',
    tools: ['Python', 'Embeddings', 'Vector Database', 'LLM APIs'],
    outcomes: 'Implemented document parsing, vector indexing, and semantic search pipeline to enable context-based question answering (in development).'
  },
  {
    id: 7,
    title: 'Interactive Math Learning Games',
    image: '/images/scratch.png',
    subtitle: 'Game Development / Educational Software',
    color: '#ef4444',
    desc: 'Two interactive educational games (multiplication and division) designed for Grade 4 students, featuring custom UI design, multiple gameplay modes, and integrated audio feedback for engagement.',
    role: 'Game Developer & Designer',
    tools: ['Scratch', 'Game Logic Design', 'UI Design'],
    outcomes: 'Fully developed multiplication game with dynamic scoring and voice feedback; division game UI framework completed (in progress).'
  },
  {
    id: 8,
    title: '3D-Printed Payload Electronics Mount',
    image: '/images/recovery.png',
    subtitle: 'Mechanical Design / CAD',
    color: '#22c55e',
    desc: 'Lightweight recovery board mount designed to securely house GPS, radio, and flight electronics within a rocket payload bay.',
    role: 'Mechanical Design Engineer',
    tools: ['SolidWorks', '3D Printing', 'Mechanical Tolerancing'],
    outcomes: 'Modeled and optimized flush-fit mounting system, iteratively refined dimensions for vibration resistance, and fabricated validated prototype for payload integration.'
  },
  {
    id: 9,
    title: 'Custom InfiniTime Firmware Development',
    image: '/images/watch.png',
    subtitle: 'Embedded Systems / Firmware Engineering',
    color: '#924df8',
    desc: 'Ongoing customization and extension of open-source InfiniTime smartwatch firmware, focusing on UI redesign, firmware architecture modification, and embedded system optimization on ARM Cortex-M4.',
    role: 'Embedded Firmware Developer',
    tools: ['C++', 'ARM Cortex-M4 (nRF52832)', 'GNU ARM Toolchain', 'FreeRTOS', 'Embedded Debugging'],
    outcomes: 'Currently redesigning home screen interface, modifying UI navigation logic and display rendering modules, analyzing RTOS task architecture, and optimizing firmware structure within embedded memory and performance constraints.'
},
{
  id: 10,
  title: 'Autonomous Sumo Bot Competition',
  image: '/images/sumo.png',
  subtitle: 'Embedded Systems / Robotics',
  color: '#3b82f6',
  desc: 'One-week competitive robotics project involving the design and development of an autonomous sumo robot built to detect, track, and push opponents out of the ring using sensor-driven control.',
  role: 'Mechanical Design & Systems Integration',
  tools: ['ESP32', 'C++', 'L298N', 'DC Motors', 'Ultrasonic Sensor', 'Line Follower', '3D Printing'],
  outcomes: 'Designed and 3D-modeled robot chassis for optimized weight distribution and traction; integrated ESP32-based motor control system and sensors; competed against 20+ teams and achieved Top 3 placement.'
}
];

export const TIMELINE = [
  {
    date: 'Sept 2024 – Present',
    role: 'Payload Systems – Avionics Assistant',
    org: 'METRocketry | Toronto Metropolitan University',
    type: 'Design Team',
    color: '#4dc9ff',
    desc: 'Contributing to avionics, telemetry, and structural subsystem development for a competitive rocketry payload, integrating computer vision, embedded monitoring, RF communication, and mechanical design.',
    bullets: [
      'Developed and trained YOLOv8-based computer vision model for autonomous payload targeting using curated aerial imagery datasets (70/20/10 train-validation-test split)',
      'Engineered ESP32-based Jetson power data logger integrating INA260 sensor and microSD storage for real-time voltage, current, and power monitoring',
      'Designed custom rocket ground station PCB integrating ESP32, RFM69HCW RF module, OLED display, RGB indicators, and Li-ion power regulation for bidirectional telemetry',
      'Modeled and 3D-printed lightweight recovery board mount in SolidWorks for secure integration of GPS, radio, and flight electronics within payload bay'
    ],
    tech: ['C++', 'Python', 'ESP32', 'YOLOv8', 'RFM69HCW', 'INA260', 'SolidWorks', 'KiCad', 'I2C']
  },
  {
    date: 'July 2022 – May 2023',
    role: 'Team Member / Merchandise Stocker',
    org: 'Tim Hortons | Richmond Hill, ON',
    type: 'Work Experience',
    color: '#10b981',
    desc: 'Supported daily store operations through inventory management, shipment coordination, and workspace organization in a fast-paced retail environment.',
    bullets: [
      'Implemented systematic inventory organization methods to improve stock accessibility and efficiency',
      'Coordinated with delivery personnel to process and organize incoming shipments accurately',
      'Optimized workspace layout to improve product retrieval and operational flow',
      'Managed time-sensitive tasks while maintaining quality and service standards'
    ],
    tech: ['Inventory Management', 'Team Coordination', 'Operational Efficiency']
      },
      {
    date: 'September 2016 – June 2017',
    role: 'Co-op Student',
    org: 'Dentistry In Aurora | Aurora, ON',
    type: 'Internship',
    color: '#3b82f6',
    desc: 'Supported clinic operations through digital record management, appointment coordination, and administrative system organization.',
    bullets: [
      'Utilized specialized dental software to manage patient records and appointment scheduling',
      'Organized and digitized medical documentation to improve retrieval efficiency and record accuracy',
      'Implemented structured filing systems to streamline daily clinic operations'
    ],
    tech: ['Electronic Record Systems', 'Data Organization', 'Administrative Software']
  },
];
