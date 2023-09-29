/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Cosmobean's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sri Datta Bandreddi Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Sri Datta Bandreddi",
  logo_name: "Cosmobean",
  nickname: "cosmobean",
  subTitle:
    "Where technology meets magic, I find my passion. Fuelled by curiosity, I explore, learn, and find joy in empowering others towards a better future",
  resumeLink:
    "https://drive.google.com/file/d/17QG9oqKTa5uWrKf94Wvq-txM1iXxOc6R/view?usp=sharing",
  portfolio_repository: "https://github.com/CosmoBean/masterPortfolio",
  githubProfile: "https://github.com/CosmoBean",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/CosmoBean",
  // linkedin: "https://www.linkedin.com/in/sri-datta-bandreddi/",
  // gmail: "sridatta.bandreddi@gmail.com",
  // gitlab: "https://gitlab.com/username",
  // facebook: "https://www.facebook.com/username/",
  // twitter: "https://twitter.com/username",
  // instagram: "https://www.instagram.com/username/"

  {
    name: "Github",
    link: "https://github.com/CosmoBean",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sri-datta-bandreddi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:sridatta.bandreddi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/bandreddisri",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sri_datt.a/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Telegram",
    link: "https://t.me/SillyFoxB",
    fontAwesomeIcon: "fa-telegram", // Reference https://fontawesome.com/icons/telegram?style=brands
    backgroundColor: "#26A5E4", // Reference https://simpleicons.org/?q=telegram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building stateful, and responsive website front end using ReactJS/ NextJS and TailwindCSS",
        "⚡ Developing API based microservices using Go, and Python. Generating documentations using Swagger",
        "⚡ Test Driven development, and monitoring setup using Prometheus and Grafana",
        "⚡ Experience with development and deployment of custom OAUTH and RBAC solutions",
      ],
      softwareSkills: [
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Fast API",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "simple-icons:prometheus",
          style: {
            color: "#E6522C",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "tailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud architectures from containers to kubernetes pods",
        "⚡ Hosting and maintaining web application instances along with integration of databases",
        "⚡ Setting up CI/CD pipelines for automated testing and deployments",
        "⚡ Setting up streaming jobs, serverless functions, scheduled actions and cost optimization with regards to availability of service ",
      ],
      softwareSkills: [
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AWS Lambda",
          fontAwesomeClassname: "simple-icons:awslambda",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Neo4j",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#4581C3",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#231F20",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable production ready models for various deeplearning and statistical models",
        "⚡ Experience of working with NLP projects",
        "⚡ Experience with building machine learning models using Tensorflow, Keras, PyTorch, and more",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "#150458",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Visvesvaraya National Institute of Technology",
      subtitle: "B.Tech. in Mechanical Engineering",
      logo_path: "vnit-logo-280.png",
      alt_name: "VNIT Nagpur",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have opted for elective software engineering subject: Data Structures and Algorithms",
        "⚡ Apart from this, I have done courses on machine learning and fullstack development.",
        "⚡ Student Mentor for around 120 first year student, and Student Council Representative for Mechanical Engineering Dept.",
      ],
      website_link: "https://vnit.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Computer Science and Programming using Python",
      subtitle: "- John Guttag ",
      logo_path: "mitx-500.png",
      certificate_link:
        "https://courses.edx.org/certificates/629e45ddd6594323bfbf3ffa71146d3d",
      alt_name: "MITx",
      color_code: "#FFFFFF",
    },
    {
      title: "Modern Robotics, Foundations of Robot Motion",
      subtitle: "- Northwestern University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/59d3ae11b13dfc242e6746cb02a66a67",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have mainly worked as a Fullstack Developer. I have been keen in building end to end solution, including scalable designs. I am curious person, who likes to understand what's under the hood and  I find joy in mentoring as well.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "BYJU'S",
          company_url: "https://byjus.com/",
          logo_path: "byjus_logo.png",
          duration: "Jul 2022 - Present",
          location: "Hyderabad, Telangana",
          description:
            "Contributed as part of the Identity management system at BYJU'S. Contributed to the devlopment of many features, as well as led the development of Admin console for an internal RBAC system. Mentored multiple interns to groom them for individual contributions. Mainly worked with AWS, close monitoring and development of practices for efficient deployments, as well as cost monitoring.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Phenom People",
          company_url: "https://www.phenom.com/",
          logo_path: "phenom_icon.png",
          duration: "May 2021 - JUN 2022",
          location: "Hyderabad, Telangana",
          description:
            "worked as part of a four-person team, collaborated to develop a classification model. This model was specifically designed for an internal use-case, with the primary aim of enhancing the validation process for other models that were deployed within the same environment. Learned and leveraged various machine learning algorithms.  Developed two database package clients for migrations.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Everything I've worked on.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "blue-gradient-circle-380.png",
    description:
      "Feel free to reach out via the links provided below. I'm always eager to hear your feedback or explore collaboration opportunities on projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
