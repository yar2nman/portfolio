// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { project, stack } from "./models/models";

export const SITE_TITLE = 'My Dev Portfolio.';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const USER_NAME = 'Ahmed Ibrahim';
export const ABOUT_ME = ['Hi,', 'I am a mechanical Engineer, Full Stack developer, Chess Player', 'and Grand Father :)))']

export const STACKS: stack[] = [
    {
        name: "Angular",
        id: "angular",
        description:
            "Using Angular starting from Angular js till today on Daily Basis",
        avatar: "/angular.png",
        rate: 6,
    },
    {
        name: "React",
        id: "react",
        description:
            "React with TS is productive and easy to create amazing projects",
        avatar: "/react.png",
        rate: 6,
    },
    {
        name: ".Net Core",
        id: ".netCore",
        description:
            "I like using dot net core for backend projects, It is productive and easy to connect to any database or source like SQL, Postgres, Firebase...",
        avatar: "/netCore.png",
        rate: 6,
    },
    {
        name: "Ms SQL",
        id: "sql",
        description:
            "Using SQL for many of my projects, I like the most the ability to query data and combine several tables in a single query with aggregation",
        avatar: "/sql.png",
        rate: 7,
    },
    {
        name: "",
        id: "firebase",
        description:
            "Awesome",
        avatar: "/firebase.png",
        rate: 5,
    },
    {
        name: "Flask",
        id: "flask",
        description:
            "Flask is easy to use and powerful with all the libraries available for python.",
        avatar: "/flask.png",
        rate: 5,
    },
    {
        name: "Node js",
        id: "nodejs",
        description:
            "",
        avatar: "/nodeJs.jpg",
        rate: 4,
    },
    {
        name: "MaterialDesign",
        id: "materialDesign",
        description:
            "",
        avatar: "/materialDesign.png",
        rate: 4,
    },
    {
        name: "",
        id: "css",
        description:
            "",
        avatar: "/css3.png",
        rate: 4,
    },
    {
        name: "",
        id: "html",
        description:
            "",
        avatar: "/html.png",
        rate: 4,
    },
    {
        name: "TailWindCSS",
        id: "tailwind",
        description:
            "",
        avatar: "/tailwind.png",
        rate: 4,
    },
    {
        name: "",
        id: "bootStrap",
        description:
            "",
        avatar: "/bootstrap.jpg",
        rate: 4,
    },
];

export const PROJECTS: project[] = [
    {
        id: 'ahqApp',
        name: 'AHQApp',
        stacks: ['angular', '.netCore', 'bootstrap', 'materialDesign', 'sql', 'gcp', ],
        mainImage: 'AHQApp.jpg',
        description: ['Application to mange operation of earthmoving machine dealer, Handling operation of Spare Parts, Service, Stock, Customer Orders, Order to supplier, Shipping and Expenses'],
        images: ['AHQApp.jpg'],
        shortDescription: ''
    },
    {
        id: 'chess',
        name: 'Dont Move Till You See It',
        stacks: ['react', 'html', 'css'],
        mainImage: 'chessBlindfold.png',
        description: ['The application is to train chess players to visualize the next positions before moving By teaching them how to play blindfold. Player know the computer move by listening to the move instead of seeing it'],
        images: ['chessBlindfold.png'],
        shortDescription: ''
    },
    {
        id: 'lifeStyle',
        name: 'Life Style Company',
        stacks: ['react', 'html', 'tailwind', 'flask', 'gcp'],
        mainImage: 'lifestyle.jpg',
        description: ['Wep application to help customers of a real state company see and filter units based on Location, Area price and so on. Then contacting the real state company.'],
        images: ['lifestyle.jpg'],
        shortDescription: ''
    },
    {
        id: 'Plooto',
        name: 'I am Plooto',
        stacks: ['react', 'materialDesign', 'css', 'html'],
        mainImage: 'plooto.png',
        description: ['React app as frontend of a machine learning model that customizes construction design to improve area efficiency and reduce impact on the environment'],
        images: ['plooto.png'],
        shortDescription: ''
    }
];