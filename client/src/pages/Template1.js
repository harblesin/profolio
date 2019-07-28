import React from "react";
import SmallLogo from "./../components/SubComponents/Logo/SmallLogo";
import { Link, animateScroll as scroll } from "react-scroll";
import Slider from "react-slick";
import ProjectCard from "../components/SubComponents/ProjectCard/ProjectCard";
// import { NONAME } from "dns";
import CarouselImage from "./../components/SubComponents/CarouselImage/CarouselImage";

export let Template1 = props => {
  require("./../components/SubComponents/Nav/main.css");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="veryTop">
      <nav className="navbar navbar-dark bg-secondary">
        <a className="navbar-brand" href="/">
          <SmallLogo
          // width="30"
          // height="30"
          />
        </a>
        <div className="navbar-expand mr-auto" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                activeClass="textFix"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link textFix"
              >
                Top
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="textFix"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link textFix"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link textFix"
              >
                Projects{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="nav-link textFix"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-4 col-5-large col-12-medium">
              <span className="image fit">
                {<img src={props.baseImage} alt="" />}
              </span>
            </div>
            <div className="col-8 col-7-large col-12-medium">
              <header>
                <h1>
                  Hi. I'm {props.fullName}.
                </h1>
              </header>
              <p>
                <span>
                  {props.aboutMe}
                </span>
              </p>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className="button large scrolly"
              >
                Learn about what I can do
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Skills */}
      <article id="skills" className="wrapper style2">
        <div className="container">
          <header>
            <h2>Skills</h2>
            <p>These are my skills.</p>
          </header>
          <Slider className="skillsSize" {...settings}>
            {/* < div >
            <img src={props.skills} alt="Imageskillz" />
          </div > */}
            {props.skills.map(skill => <CarouselImage src={skill} />)}
          </Slider>
          <footer>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="button large scrolly"
            >
              See some of my recent work
            </Link>
          </footer>
        </div>
      </article>

      {/* Portfolio */}
      <article id="portfolio" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Projects</h2>
            <p>
              Here is some of projects that I have created.
            </p>
          </header>
          <div className="row rowCenter">
            {props.savedProject.map(project =>
              <ProjectCard
                id={project.id}
                projectTitle={project.name}
                projectPicture={project.projectPicture}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                aboutProject={project.aboutProject}
              />
            )}
            {props.eachProject.map(() =>
              <ProjectCard className="img" {...props} />
            )}
          </div>
          <footer>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="button large scrolly"
            >
              Get in touch with me
            </Link>
          </footer>
        </div>
      </article>

      {/* Contact */}
      <article id="contact" className="wrapper bg-dark">
        <div className="container medium">
          <h1 className="text-white">Contact Me</h1>
          <h3 className="text-white">
            Contact Number: {props.contactNumber}{" "}
          </h3>
          <h3 className="text-white">Feel free to send me a message below.</h3>
          <div className="row">
            <div className="col-12">
              <form method="post" action="#">
                <div className="row">
                  <div className="col-6 col-12-small">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6 col-12-small">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                    />
                  </div>
                  <div className="col-12">
                    <ul className="actions">
                      <li>
                        <input type="submit" value="Send Message" />
                      </li>
                      <li>
                        <input
                          type="reset"
                          value="Clear Form"
                          className="alt"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <hr />
              <h3 className="text-white">Find me on ...</h3>
              <ul className="social">
                <li>
                  <a href={props.linkedInLink} className="icon fab fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href={props.githubProfileLink}
                    className="icon fab fa-github"
                  >
                    <span className="label">Github</span>
                  </a>
                </li>
                {/* <li><a href=" " className="icon fab fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href=" " className="icon fab fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href=" " className="icon fab fa-dribbble"><span className="label">Dribbble</span></a></li>
                <li><a href=" " className="icon fab fa-tumblr"><span className="label">Tumblr</span></a></li>
                <li><a href=" " className="icon fab fa-instagram"><span>Instagram</span></a></li>
                <li><a href=" " className="icon fab fa-foursquare"><span>Foursquare</span></a></li>
                <li><a href=" " className="icon fab fa-skype"><span>Skype</span></a></li>
                <li><a href=" " className="icon fab fa-soundcloud"><span>Soundcloud</span></a></li>
                <li><a href=" " className="icon fab fa-youtube"><span>YouTube</span></a></li>
                <li><a href=" " className="icon fab fa-blogger"><span>Blogger</span></a></li>
                <li><a href=" " className="icon fab fa-flickr"><span>Flickr</span></a></li>
                <li><a href=" " className="icon fab fa-vimeo"><span>Vimeo</span></a></li> */}
              </ul>
              <hr />
            </div>
          </div>
          <footer>
            <ul id="copyright">
              <li>&copy; Untitled. All rights reserved.</li>
              <li>
                Design: <a href="http://html5up.net">HTML5 UP</a>
              </li>
            </ul>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default Template1;
