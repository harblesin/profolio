import React from "react";

export function ProjectList({ children }) {
  return (
    <div className="row">
      <div className="col-4 col-6-medium col-12-small ">
        {children}
      </div>
    </div>
  );
}

export function ProjectCard(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4 col-6-medium col-12-small" />
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
    </div>
  );
}

export default ProjectCard;
