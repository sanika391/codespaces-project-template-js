/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Spoon Share - GDSC Solution Challenge 🎉",
    description:
      "SpoonShare: An app connecting users to share free food, donate, and access local jobs, supporting the UN's Zero Hunger goal.",
    url: "spoonshare-meal.web.app",
  },
  {
    title: "Restaurant Management System",
    description:
      "Using HTML, CSS, and PHP, a RESTAURANT MANAGEMENT SYSTEM 🍔🍨🧁 was developed, complete with a LIVE ORDER MANAGEMENT SYSTEM 🧇 for administrators and users. The integrated TABLE RESERVATION SYSTEM 📑, which optimizes the user experience, is a key innovation.",
    url: "https://github.com/sanika391/Food-Ordering-system-with-Table-Reservation-Order-management-Facility",
  },
  {
    title: "My Resume Site",
    description:
      "portfolio website crafted with HTML and JavaScript, showcasing my projects and skills in a dynamic and interactive format. Dive into my journey through technology with just a click!",
    url: "sanika-chavan.vercel.app/",
  },
  {
    title: "EZY-Transit",
    description:
      "With real-time updates and crowd management features, stay informed and optimize your commute like never before",
    url: "https://github.com/shuence/EzyTranzit",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
