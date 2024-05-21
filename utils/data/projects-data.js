import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'TSBOA',
        description: "TSBOA(https://tsboa.org/) is website for small business owners. I have developed the whole website using mern and hosted it on hostinger using Nginx, PM2. I used React js for front-end and nodejs for backend. Database was mongo. This project was built using mern stack.",
        tools: ['Express', 'MongoDB', 'React Js', 'Tailwind', 'Node js', 'EC2', 'PM2', 'Nginx'],
        role: 'Full stack developer',
        code: '',
        demo: 'https://tsboa.org/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Female Care',
        description: 'I have designed and developed a web app for Female. The clients requirement was to provide virtual treatment to females on taboo topics. I created the website using Wordpress and hosted on Hostbreaker.',
        tools: ['Wordpress'],
        role: 'Developer',
        code: '',
        demo: 'https://fcare.pk/',
        image: travel,
    },
    {
        id: 3,
        name: 'Airbnb Clone',
        description: 'I created a clone Airbnb using MERN Stack. It allows users to airbnb their properties.',
        tools: ['React', 'Bootstrap', 'Tailwindcss', 'Stripe', 'Express', 'Nodejs', 'MongoDB', ],
        code: '',
        role: 'Full Stack MERN Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: '',
        description: "",
        tools: [],
        code: '',
        demo: '',
        image: ayla,
        role: '',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },