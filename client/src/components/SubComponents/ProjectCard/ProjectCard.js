import React from "react";

const ProjectCard = (props) => {
  return (
    <div>
      <article className="box style2">
        <a href={props.deployedLink} className="image featured">
          <img src={props.projectPicture} alt="" />
        </a>
        <h3>
          <a href={props.deployedLink}>
            {props.projectTitle}
          </a>
        </h3>
        <p>
          {props.aboutProject}
        </p>
        <ul className="social text-center">
          <li>
            <a href={props.githubLink} className="fab fa-github icon">
              <span className="label">Github</span>
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default ProjectCard;
