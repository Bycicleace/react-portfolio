import React from 'react';

function About() {
    return (
        <section id="about">
            <h2>I am a developer. How I became one is a bit of a longer story.</h2>
            <div className="flex-row flex-wrap mx-2" id="about-content">
                <div>
                    <img className="mx-2 my-2" src={require("../../assets/profile-200x200.png")} />
                    <p>My first job was at a grocery store as a stocker. Working there, I found that I had a knack for talking to customers, so I decided to become a cashier. Within six months of becoming a cashier, I became a Customer Service Manager, and ended up doing anything and everything at the checkout lanes. Inside that grocery store, there was a local credit union branch. After getting to know them, they offered me a job at the same branch, which I took. That started my career in the financial industry.</p>
                    <p>At the credit union, I found I had a desire to work with technology, and that I had a desire to create and innovate. That led me to programming. The ability to create something and use it to help others has always been a strong motivator for me. I went to college and started getting my Bachelor's degree in Computer Science, with a focus on Software Engineering.</p>
                    <p>During that time, I also got married. Then, we moved closer to my wife's place of work. With that, my teller job ended. I attempted to find any IT related job, and struggled to find one that wasn't overnight, as my wife was pregnant with our first child, and working nights was not on the table for me.</p>
                    <p>After six months of unsuccessful job applications, I decided that I needed to just get a job. Since I had customer service, and a financial institution background, I decided to leverage both of those, and I applied at a credit union. It was my first application for a customer service job, and I was accepted. Thus started my journey with TruStone Financial.</p>
                    <p>At that time, I was a part time teller, going to school. Despite the job not being what I was looking for, I dove in and gave it my all. From there, I went full time, and then, after much determination, I became a lead teller, and constantly implementing ways to improve what we did. All throughout this process, I was learning more about technology and coming up with ideas to make my current job better from a software perspective.</p>
                    <p>On a whim, I reached out to our HR manager and asked him if I could meet up with someone from IT. He reached out to the VP of Infrastructure and had him reach out to me. the VP eventually came out and had a meeting with me in the networking room, as I was taking a networking class at the time. It was there that I was introduced into the IT field. He saw the potential in me and kept my name on file.</p>
                    <p>Soon after, a Desktop Support position became available, and I immediately applied for it. He gave me an interview, and then handed me the job. It was at that point that my work in IT began. I spent a few years as a Desktop Support Analyst (DSA), during which I was promoted, and then became the senior DSA. All throughout, I was constantly asking myself, "What can I do to make this better or more efficient?" In asking, I implemented a few things that have been used for years after I moved on from that area. While I was working as a DSA, I had my sights on either networking, or programming, of which there were few positions, and none of them available. After being patient for a time, my patience finally paid off.</p>
                    <p>A Programmer Analyst position opened up and I jumped at the chance. After the interview process, I was accepted as one of three programmers in the credit union. That was what finally got my career in software development going.</p>
                    <p>By this point, I had graduated college, and my wife and I had another child. I also became involved at my church as the "IT Guy" and did many different IT related things, including setting up and administering a network, maintaining computers and peripherals, keeping assets managed and up to date, maintaining the website and updating it, and, when COVID hit, was in charge of organizing, purchasing, setting up, and running the production equipment.</p>
                    <p>My development career at TruStone also grew. As time went on, I became a senior once again in my area, a Subject Matter Expert on many of the scripts and programming that was done at the credit union. I also became the administrator of an automation platform, and managed it for a couple years. We also begain implementing and using Git and GitHub with our scripts and programs. I have programmed in PowerOn, Python, and SQL primarily from that job. However, I have also done HTML, CSS, and Javascript as part of that job.</p>
                    <p>Then, I decided to go to a Full Stack Web Development bootcamp. During that six months, I learned many things including HTML, CSS, Git, Javascript, Web API's, Node.js, OOS, Express.js, SQL, ORMs, the MVC structure, NoSQL, PWA's, React, the MERN stack, and States. I aced nearly all of the assignments, and excelled in the bootcamp.</p>
                    <p>As a developer, I have been desiring to move into Web Development, so this bootcamp is the starting point of my ability to do so.</p>
                    <p>And that's my story for the past 15 years. I am now a father of two boys and a girl and still married to the love of my life. I also have the opportunity to do what I enjoy doing, and to get the satisfaction out of doing it. As my journey progresses, I am excited to see where the next adventure takes me.</p>
                </div>
            </div>
        </section>
    )
}

export default About;