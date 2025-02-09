 import React from "react";
 import Service from "./Service";

 import './services.css';

 export default function Services() {


    return (
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I've done before, and what I could do for you!</span>
        <div className="services__container container grid">
          <Service
            icon={"web-grid"}
            title={"Front-End"}
            subtitle={"I love creating beautiful and efficient interfaces that align with user needs."}
            achievements={["📈  Built diagnostic dashboards showing financial performance.",
                            "🤝  Collaborated with external companies to create attractive UI with consistent styling rules under the hood.",
                            "💫  Independently designed and created the UI for a mini content sharing platform for English learners.",
                            "👀  This website!"
                          ]}
          />

          <Service
            icon={"server"}
            title={"Back-End"}
            subtitle={"I find the logical challenge of back-end development really satisfying. It's a great feeling when I can find the solution to a tricky problem."}
            achievements={["👨🏼‍💻 Independently developed a web app using Java 8 Spring Boot, which now generates significant revenue for the company.",
                            "🚀 Shipped this app by setting up an AWS server and MySQL database.",
                            "💭 Used historic data to find customer retention rate, a problem that my team had been struggling with for a while."
                          ]}
          />

          <Service
            icon={"edit"}
            title={"Copywriting"}
            subtitle={"While it's not my main focus nowadays, I have professional experience as a copywriter. I love words and know how to use them, so I can also come up with some nice copy for your website while I build it!"}
            achievements={["🏆  Worked with industry-leading brands, such as L'Oreal, ASICS, Marks & Spencer and GoCardless.",
                            "👨🏼‍🎓  Learned all about SEO and how this can drive traffic and website performance."
                          ]}
          />
        </div>
      </section>
    )
 }
