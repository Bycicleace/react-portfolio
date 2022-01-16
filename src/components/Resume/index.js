import React from 'react';

function Resume() {
    return (
        <div id="resume" className="flex-row flex-wrap flex-start">
            <div id="resume-header" className="mx-2">
                <h2>Resume</h2>
                <a href={require("../../assets/Elliott Resume.pdf")} target="_blank" rel="noopener">Download my Resume</a>
            </div>
            <div>
                <section className="mx-2">
                    <h3>Skills</h3>
                    <ul>
                        <li>HTML, CSS, and JavaScript</li>
                        <li>JQuery, Node.js, and Express.js</li>
                        <li>Python and SQL</li>
                        <li>Superiour Communication Skills</li>
                        <li>Outstanding team player</li>
                        <li>Strong Analytical Skills</li>
                        <li>Phenomenal Customer Service Skills</li>
                        <li>Works well independently and on a team</li>
                    </ul>
                </section>
                <section className="mx-2">
                    <h3>Education</h3>
                    <span>B.S. Computer Science, <strong>University of Phoenix</strong>, October 2016</span><br /><br />
                    <span>A.A. General Studies, <strong>Anoka-Ramsey Community College</strong>, September 2010</span><br /><br />
                    <span>High School Diploma, <strong>Cambridge-Isanti High School</strong>, June 2009</span><br /><br />
                </section>
                <section className="mx-2">
                    <h3>Experience</h3>
                    <span>Software Developer, <strong>TruStone Financial Credit Union</strong>, December 2017 - Present</span><br /><br />
                    <span>IT Administrator, <strong>Cross Pointe Church</strong>, January 2018 - November 2021</span><br /><br />
                    <span>Desktop Support Analyst, <strong>TruStone Financial Credit Union</strong>, August 2016 - December 2017</span><br /><br />
                    <span>Lead Teller, <strong>TruStone Financial Credit Union</strong>, December 2014 - August 2016</span><br /><br />
                    <span>Teller, <strong>Minnco Credit Union</strong>, October 2013 - November 2014</span><br /><br />
                    <span>Assistant Manager, <strong>The Corner Cup</strong>, October 2012 - February 2014</span><br /><br />
                    <span>Customer Service Manager/Cashier/Stocker, <strong>Cub Foods</strong>, November 2007 - February 2013</span>
                </section>
            </div>
        </div>
    )
}

export default Resume;