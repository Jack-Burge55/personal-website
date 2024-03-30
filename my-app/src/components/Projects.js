import React from "react";
import { Link } from "react-router-dom";
import projectsObject from "../assets/projects.json";
const Projects = () => {
  const projectsArray = projectsObject.Projects;
  return (
    <>
      {projectsArray.map((element, index) => {
        return (
          <Link
            to={`/${element.LinkName}`}
            key={index}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="tileSquare">
              <h3 className="tileTitle">{element.Title}</h3>
              <img
                className="tileImage"
                src={element.Image}
                alt={`${element.Title} project`}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default Projects;
