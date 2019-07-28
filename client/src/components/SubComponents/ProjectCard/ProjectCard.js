import React from "react";

export function ProjectCard(props) {
  return (
    <div>
      <article className="box style2 cardSize">
        <a href={props.deployedLink} className="image featured">
          <img src={props.projectPicture} alt="" className="imgSizeFixed" />
        </a>
        <h3 className="textWrap">
          <a href={props.deployedLink}>
            {props.projectTitle}
          </a>
        </h3>
        <p className="textWrap">
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