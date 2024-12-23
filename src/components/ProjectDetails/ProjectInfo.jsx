import React from "react";

const projectInfoData = [
  {
    name: "Auction Platform",
    category: "Website Project",
    url: "https://samarbid.netlify.app",
  },
  {
    name: "Job Portal",
    category: "Website Project",
    url: "",
  },
  {
    name: "Blog Website",
    category: "Website Project",
    url: "",
  },
  {
    name: "House Price Prediction",
    category: "AI/ML Project",
    url: "https://samarhouseprice.streamlit.app",
  },
  {
    name: "Demo Project",
    category: "AI/ML Project",
    url: "",
  },
  {
    name: "Demo Project",
    category: "AI/ML Project",
    url: "",
  },
  {
    name: "Youtube Clone",
    category: "API Project",
    url: "https://samartube.vercel.app",
  },
  {
    name: "ChatGPT Clone",
    category: "API Project",
    url: "https://samargpt.netlify.app",
  },
  {
    name: "Crypto Tracker",
    category: "API Project",
    url: "",
  },
  {
    name: "Employee Managaement System",
    category: "Other Project",
    url: "",
  },
  {
    name: "Demo Project",
    category: "Other Project",
    url: "",
  },
  {
    name: "Demo Project",
    category: "Other Project",
    url: "",
  },
];

const projectDescriptions = [
  {
    title: "Auction Platfrom",
    description:
      "A full-stack online auction platform enabling seamless user interactions for creating, managing, and participating in auctions. This repository combines the frontend and backend, offering an integrated solution for user-friendly interfaces and scalable backend services. The platform is designed to deliver a smooth and engaging auction experience!",
  },
  {
    title: "Job Portal",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Blog Website",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "House Price Prediction",
    description:
      "Explore my Machine Learning repository featuring a House Price Predictor project. Leveraging advanced algorithms, this project predicts house prices based on various features like location, size, amenities, and market trends. Dive into the world of predictive analytics and gain insights into the dynamic real estate market.",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Youtube Clone",
    description:
      "The YouTube Clone project replicates the essential features of YouTube using the YouTube API, providing users with a seamless experience for discovering and viewing videos. This project serves as a hands-on example of how to integrate API functionalities into a web application, enabling features such as search, video playback, and user interaction.",
  },
  {
    title: "ChatGPT Clone",
    description:
      "Explore my ChatGPT Clone project, which harnesses the power of the Gemini AI API to recreate the core functionalities of an AI-based conversational assistant. This project offers a smooth and interactive interface for real-time conversations, delivering an intuitive and responsive experience. Dive into the world of conversational AI like ChatGPT.",
  },
  {
    title: "Crypto Tracker",
    description:
      "A cryptocurrency tracking platform built with React and Tailwind CSS, leveraging the CoinGecko API to provide real-time data on prices, market trends, and historical statistics. The platform offers an intuitive interface for users to monitor and analyze cryptocurrency market movements effectively.",
  },
  {
    title: "Employee Managaement System",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
  {
    title: "Demo Project",
    description:
      "lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid repellat id optio!",
  },
];

const renderProjectInfo = (index) => {
  const project = projectInfoData[index];
  return (
    <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
      <h3>Project information</h3>
      <ul>
        <li>
          <strong>Project Name</strong>: {project.name}
        </li>
        <li>
          <strong>Project Category</strong>: {project.category}
        </li>
        <li>
          <strong>Project URL</strong>:{" "}
          <a href={project.url} target="_blank">
            SamarTube
          </a>
        </li>
      </ul>
    </div>
  );
};

const renderProjectDescription = (index) => {
  const projectDesc = projectDescriptions[index];
  return (
    <div
      className="portfolio-description"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2>{projectDesc.title}</h2>
      <p className="justify">{projectDesc.description}</p>
    </div>
  );
};

export const webProjectInfo = projectInfoData.slice(0, 3);
export const webProjectDescriptions = projectDescriptions.slice(0, 3);

export const aimlProjectInfo = projectInfoData.slice(3, 6);
export const aimlProjectDescriptions = projectDescriptions.slice(3, 6);

export const apiProjectInfo = projectInfoData.slice(6, 9);
export const apiProjectDescriptions = projectDescriptions.slice(6, 9);

export const otherProjectInfo = projectInfoData.slice(9, 12);
export const otherProjectDescriptions = projectDescriptions.slice(9, 12);
