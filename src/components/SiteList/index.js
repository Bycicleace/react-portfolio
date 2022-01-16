// This is for compiling the list of projects that I have
import React, { useState } from 'react';

function SiteList() {
    const [components] = useState([
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
        }
    ])

    const [sites] = useState([
        {
            name: "Run Buddy",
            gitHubURL: "https://github.com/Bycicleace/run-buddy",
            liveSiteURL: "https://bycicleace.github.io/run-buddy/",
            image: "./assets/projects/run_buddy.png",
            description: "Demonstrates knowledge and use of HTML and CSS",
            componentsUsed: [1, 2],
            bootcamp: true,
            displayIndex: -1
        },
        {
            name: "Password Generator",
            gitHubURL: "https://github.com/Bycicleace/password-generator",
            liveSiteURL: "https://bycicleace.github.io/password-generator/",
            image: "./assets/projects/password_generator.png",
            description: "Demonstrates knowledge and use of basic JavaScript",
            componentsUsed: [1, 2, 3],
            bootcamp: true,
            displayIndex: -1
        },
        {
            name: "Workday Scheduler",
            gitHubURL: "https://github.com/Bycicleace/WorkdayScheduler",
            liveSiteURL: "https://bycicleace.github.io/WorkdayScheduler/",
            image: "./assets/projects/workday_scheduler.png",
            description: "Demonstrates the usage of 3rd party JavaScript libraries like JQuery and Moment.js",
            componentsUsed: [1, 2, 3, 4, 5, 6],
            bootcamp: true,
            displayIndex: -1
        },
        {
            name: "Git It Done",
            gitHubURL: "https://github.com/Bycicleace/git-it-done",
            liveSiteURL: "https://bycicleace.github.io/git-it-done/",
            image: "./assets/projects/git_it_done.png",
            description: "Demonstrates the usage of Server Side API calls",
            componentsUsed: [1, 2, 3],
            bootcamp: true,
            displayIndex: -1
        },
        {
            name: "Weather Dashboard",
            gitHubURL: "https://github.com/Bycicleace/weather-dashboard",
            liveSiteURL: "https://bycicleace.github.io/weather-dashboard/",
            image: "./assets/projects/weather_dashboard.png",
            description: "Demonstrates the usage of Server Side API calls",
            componentsUsed: [1, 2, 3, 7],
            bootcamp: true,
            displayIndex: -1
        }
        // {
        //     name: "",
        //     gitHubURL: "",
        //     liveSiteURL: "",
        //     image: "",
        //     description: "",
        //     componentsUsed: [],
        //     bootcamp: true,
        //     displayIndex: -1
        // }
    ]);

    return (
        <div>
            <p>This is the site List</p>
        </div>
    )
}

export default SiteList;