import IExperience from '../interfaces/IExperience';
import IProject from '../interfaces/IProject';
import ISkill from '../interfaces/ISkill';

export const projects: IProject[] = [
  {
    name: 'To-do: Redux vs Redux Tool Kit + React + Typescript',
    description:
      'A simple react To-Do App using React Tool Kit (RKT) and Typescript.',
    link: 'https://github.com/iamsarthakjoshi/react-redux-toolkit-typescript',
  },
  {
    name: 'Create Charts with Charts JS',
    description:
      'A simple Flask api with React UI that generates simple charts. Application is dockerized.',
    link: 'https://github.com/iamsarthakjoshi/python-reactjs-chartjs-docker',
  },
  {
    name: 'Celery with RabbitMQ',
    description:
      'This is a simple app that demonstrates the features of Celery and Rabbitmq to manage tasks or jobs that need to be handled asynchronously maintaining the order and priority because they are long-running tasks.',
    link: 'https://github.com/iamsarthakjoshi/python-celery-rabbitmq',
  },
];

export const experience: IExperience[] = [
  {
    name: 'Core Intelligence Technologies Pty. Ltd.',
    description: 'Lead Fullstack Web Developer, December 2019 - December 2020',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Building API-driven microservices that handles response from multiple ML API, processing the output.',
      'Creating message queue system to handle multiple asynchronous ML tasks using technologies such as Celery and Rabbitmq/Redis.',
      'Maintaining the code standards, it’s performance, implementing design patterns on the basis of nature of work.',
      'Implementing Test-driven development using Docker, Docker-compose, Flask and Pytest.',
      'Using Atlassian’s Bitbucket for maintaining daily code commits and pushes and Microsoft’s Azure DevOps services like Azure Pipelines for continuous integration and continuous development.',
      'Using MYSQL database and python’s SQLAlchemy for ORM with databases.',
      'Documenting RESTful API with Swagger.',
      'Using Gunicorn server and Nginx for serving python microservices and load balancing and reverse-proxying the server respectively.',
      'Mentoring couple of junior developers and training them to work remotely and independently.',
      'Writing both functional or class-based React Components.',
      'Using state management tools like Flux, React-Redux or React’s Context API.',
      'Maintaining reliable communication using socket.io with Flask-APIs along with end-to-end authentication.',
      'Making user-friendly interfaces and responsive components.',
      'Unit Testing react code with testing-library and jest.',
    ],
    achivements: [],
  },
  {
    name: 'Cotiviti Nepal Pvt. Ltd. (formerly Verscend Nepal)',
    description: 'Software Engineer, September 2016 - October 2018',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Development/support/maintenance/testing of Java EE applications',
      'CI/CD of in-house applications with Bamboo and Crucible',
      "Issuing tickets to fix bugs in programs using Atlassian's JIRA tool.",
      'Oracle Data Integrator (ETL tool) integration with existing Java applications to manage and maintain data integration processes.',
      'Designed, created and implemented automated report subscription system for different departments using Java, Corn Job and MicroStrategy.',
      'Utilized and integrated SVN Kit tool in Java EE applications',
      'Building a Java application with JSF framework',
      'Provided system maintenance and support procedures for log files update, database tables and stored procedures (PL/SQL)',
    ],
    achivements: [
      'Learned to work in an agile environment with local (Nepal) team and remote (US) team.',
      'Developed enterprise in-house applications using SCRUM methodology.',
      'Data analysis, data manipulation, data scrubbing, data cleaning',
      "Learned about CI/CD process with Atlassian's Bamboo tool",
      'Subversion/Git Version Control System (Trunk, branches and tags)',
      'Code review of team members with Crucible tool',
      'Analysed/studied existing code to determine the functionality of the domain',
    ],
  },
  {
    name: 'Verisk Nepal Pvt. Ltd.',
    description: 'Internship (Software Engineer), July 2016 - September 2016',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Building CRUD Java application with JSP, JSF, SPRING frameworks',
      'Analysing existing projects, testing features and bug fixing',
      'Learning Linux commands, shell scripting',
      'Creating table, views, schemas, procedure in Oracle Database',
      'Working in a team; completing the task in a given time frame',
    ],
    achivements: [],
  },
];

export const skills: ISkill[] = [
  {
    name: 'Languages & Frameworks',
    description:
      'Python - Flask (familiar), Java - JSF (prior-experience), JavaScript, ES6+ (familiar) - Node.js, Express.js, React.js - Redux - RTK (familiar), Next.js, PHP - Laravel (basics)',
    link: '',
  },
  {
    name: 'Databases',
    description: 'MySql, PostgreSQL, MongoDB',
    link: '',
  },
  {
    name: 'Other Techs',
    description:
      'Docker (familiar), Kubernetes (basics), AWS (prior-experience), Microservices - API design (familiar), CI / CD, Agile / Scrum  (prior-experience)',
    link: '',
  },
];

export const aboutMe: string =
  'I live in Sydney, Australia and actively looking for new oppurtunities. After having worked for more than two years in US Healthcare Data Analytics company (Cotiviti Nepal) and as Full Stack web developer at Core Intelligence, I’m looking forward to applying my knowledge and experience. My favoured technologies right now are: React.js, Typescript, Python, Flask, Node.js, Express.js, GraphQL and PostgreSQL.';
export const fullName: string = 'Sarthak Joshi';
export const userExcerpt: string =
  'Full Stack Developer, passionate about frontend & backend technologies.';
