// This is for compiling the list of projects that I have
import React, { useState } from 'react';

function SiteList() {
    const components = [
        {
            index: 1,
            name: "HTML"
        },
        {
            index: 2,
            name: "CSS"
        },
        {
            index: 3,
            name: "JavaScript"
        },
        {
            index: 4,
            name: "JQuery"
        },
        {
            index: 5,
            name: "Moment.js"
        },
        {
            index: 6,
            name: "Bootstrap"
        },
        {
            index: 7,
            name: "API Calls"
        },
        {
            index: 8,
            name: "JQuery Draggable"
        },
        {
            index: 9,
            name: "Webpack"
        },
        {
            index: 10,
            name: "Service Worker"
        },
        {
            index: 11,
            name: "PWA"
        }
    ]

    const [sites] = useState([
        {
            name: "Run Buddy",
            gitHubURL: "https://github.com/Bycicleace/run-buddy",
            liveSiteURL: "https://bycicleace.github.io/run-buddy/",
            image: "run_buddy.png",
            description: "Demonstrates knowledge and use of HTML and CSS",
            componentsUsed: [1, 2],
            bootcamp: true,
            displayIndex: 99
        },
        {
            name: "Password Generator",
            gitHubURL: "https://github.com/Bycicleace/password-generator",
            liveSiteURL: "https://bycicleace.github.io/password-generator/",
            image: "password_generator.png",
            description: "Demonstrates knowledge and use of basic JavaScript",
            componentsUsed: [1, 2, 3],
            bootcamp: true,
            displayIndex: 99
        },
        {
            name: "Workday Scheduler",
            gitHubURL: "https://github.com/Bycicleace/WorkdayScheduler",
            liveSiteURL: "https://bycicleace.github.io/WorkdayScheduler/",
            image: "workday_scheduler.png",
            description: "Demonstrates the usage of 3rd party JavaScript libraries like JQuery and Moment.js",
            componentsUsed: [1, 2, 3, 4, 5, 6],
            bootcamp: true,
            displayIndex: 99
        },
        {
            name: "Git It Done",
            gitHubURL: "https://github.com/Bycicleace/git-it-done",
            liveSiteURL: "https://bycicleace.github.io/git-it-done/",
            image: "git_it_done.png",
            description: "Demonstrates the usage of Server Side API calls",
            componentsUsed: [1, 2, 3],
            bootcamp: true,
            displayIndex: 99
        },
        // {
        //     name: "Weather Dashboard",
        //     gitHubURL: "https://github.com/Bycicleace/weather-dashboard",
        //     liveSiteURL: "https://bycicleace.github.io/weather-dashboard/",
        //     image: "weather_dashboard.png",
        //     description: "Demonstrates the usage of Server Side API calls",
        //     componentsUsed: [1, 2, 3, 7],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        // {
        //     name: "Taskmaster Pro",
        //     gitHubURL: "https://github.com/Bycicleace/taskmaster-pro",
        //     liveSiteURL: "https://bycicleace.github.io/taskmaster-pro/",
        //     image: "taskmaster_pro.png",
        //     description: "Demonstrates the usage of Third Party APIs",
        //     componentsUsed: [1, 2, 3, 8],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        // {
        //     name: "Food Festival",
        //     gitHubURL: "https://github.com/Bycicleace/food-festival",
        //     liveSiteURL: "https://bycicleace.github.io/food-festival/",
        //     image: "food_festival.png",
        //     description: "Used Chrome's Lighthouse, Optimized site, and used webpack, service workers, and converted to PWA",
        //     componentsUsed: [1, 2, 3, 9, 10, 11],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        // {
        //     name: "Web API Quiz",
        //     gitHubURL: "https://github.com/Bycicleace/JSWebAPIQuiz",
        //     liveSiteURL: "https://bycicleace.github.io/JSWebAPIQuiz/",
        //     image: "web_api_quiz.png",
        //     description: "Demonstrates DOM manipulation",
        //     componentsUsed: [1, 2, 3],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        // {
        //     name: "Taskinator",
        //     gitHubURL: "https://github.com/Bycicleace/taskinator",
        //     liveSiteURL: "https://bycicleace.github.io/taskinator/",
        //     image: "taskinator.png",
        //     description: "Demonstrates DOM manipulation and Web API",
        //     componentsUsed: [1, 2, 3],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        // {
        //     name: "Just Tech News",
        //     gitHubURL: "https://github.com/Bycicleace/just-tech-news",
        //     liveSiteURL: "https://secret-ridge-16381.herokuapp.com/",
        //     image: "just_tech_news.png",
        //     description: "Uses Node.js, Express.js, and Sequelize ORM with a MySQL db to create a post driven news site",
        //     componentsUsed: [1,2,3],
        //     bootcamp: true,
        //     displayIndex: 99
        // },
        {
            name: "Park Finder",
            gitHubURL: "https://github.com/Bycicleace/ParkFinder",
            liveSiteURL: "https://bycicleace.github.io/ParkFinder",
            image: "park_finder.png",
            description: "One of the Group projects using APIs and a different styling framework",
            componentsUsed: [1,2,3],
            bootcamp: true,
            displayIndex: 2
        },
        {
            name: "MyBook",
            gitHubURL: "https://github.com/Bycicleace/MyBook",
            liveSiteURL: "https://cbc-my-book.herokuapp.com/",
            image: "mybook.png",
            description: "A group project for a collaborative book writing site.",
            componentsUsed: [2,3],
            bootcamp: true,
            displayIndex: 1
        }
    ]);

    // Gives the ability to display featured sites
    const sortedSites = sites.sort((a, b) => {
        return a.displayIndex - b.displayIndex;
    });

    return (
        <div className='flex-row flex-wrap'>
            {sortedSites.map((site) => (
                <div className='px-1 py-1' key={site.name}>
                    <h3>{site.name}</h3>
                    <a href={site.liveSiteURL} target='_blank'>
                        <img
                            src={require(`../../assets/projects/${site.image}`)}
                            alt={`${site.name} site`}
                        />
                    </a>
                    <p>{site.description}</p>
                </div>
            ))}
        </div>
    )
}

export default SiteList;