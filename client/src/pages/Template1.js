import React, { Component } from "react";
import SmallLogo from "./../components/SubComponents/Logo/SmallLogo";
import { Link, animateScroll as scroll } from "react-scroll";

class Template1 extends Component {

    render() {
        require("./../components/SubComponents/Nav/main.css")
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        <SmallLogo
                        // width="30"
                        // height="30"
                        />
                    </a>
                    <div className="navbar-expand mr-auto" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link activeClass="textFix" to="top" spy={true} smooth={true} duration={500}>
                                    <a className="nav-link textFix" href=" ">
                                        Top
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClass="textFix" to="skills" spy={true} smooth={true} duration={500}>
                                    <a className="nav-link textFix" href=" ">
                                        Skills
                                   </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link textFix" href=" ">
                                    <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={500}>
                                        Portfolio
                                    </Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link textFix" href=" ">
                                    <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                        Contact
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <article id="top" className="wrapper style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-5-large col-12-medium">
                                <span className="image fit"><img src="images/pic00.jpg" alt="" /></span>
                            </div>
                            <div className="col-8 col-7-large col-12-medium">
                                <header>
                                    <h1>Hi. I'm <strong>Jane Doe</strong>.</h1>
                                </header>
                                <p>And this is <strong>Miniport</strong>, a free, fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a> &amp; released under the <a href="http://html5up.net/license">CCA license</a>.</p>
                                <a href="#work" className="button large scrolly">Learn about what I can do</a>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Skills */}
                <article id="skills" className="wrapper style2">
                    <div className="container">
                        <header>
                            <h2>Here's all the stuff I do.</h2>
                            <p>Odio turpis amet sed consequat eget posuere consequat.</p>
                        </header>
                        <div className="row aln-center">
                            <div className="col-4 col-6-medium col-12-small">
                                <section className="box style1">
                                    <span className="icon featured fa-comments-o"></span>
                                    <h3>Consequat lorem</h3>
                                    <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section className="box style1">
                                    <span className="icon featured fa-camera-retro"></span>
                                    <h3>Lorem dolor tempus</h3>
                                    <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
                                </section>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <section className="box style1">
                                    <span className="icon featured fa-thumbs-o-up"></span>
                                    <h3>Feugiat posuere</h3>
                                    <p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p>
                                </section>
                            </div>
                        </div>
                        <footer>
                            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                            <a href="#portfolio" className="button large scrolly">See some of my recent work</a>
                        </footer>
                    </div>
                </article>

                {/* Portfolio */}
                <article id="portfolio" className="wrapper style3">
                    <div className="container">
                        <header>
                            <h2>Here’s some stuff I made recently.</h2>
                            <p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
                        </header>
                        <div className="row">
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                                    <h3><a href=" ">Magna feugiat</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                                    <h3><a href=" ">Veroeros primis</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                    <h3><a href=" ">Lorem ipsum</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                                    <h3><a href=" ">Tempus dolore</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic05.jpg" alt="" /></a>
                                    <h3><a href=" ">Feugiat aliquam</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                            <div className="col-4 col-6-medium col-12-small">
                                <article className="box style2">
                                    <a href=" " className="image featured"><img src="images/pic06.jpg" alt="" /></a>
                                    <h3><a href=" ">Sed amet ornare</a></h3>
                                    <p>Ornare nulla proin odio consequat.</p>
                                </article>
                            </div>
                        </div>
                        <footer>
                            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                            <a href="#contact" className="button large scrolly">Get in touch with me</a>
                        </footer>
                    </div>
                </article>

                {/* Contact */}
                <article id="contact" className="wrapper style4">
                    <div className="container medium">
                        <header>
                            <h2>Have me make stuff for you.</h2>
                            <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
                        </header>
                        <div className="row">
                            <div className="col-12">
                                <form method="post" action="#">
                                    <div className="row">
                                        <div className="col-6 col-12-small">
                                            <input type="text" name="name" id="name" placeholder="Name" />
                                        </div>
                                        <div className="col-6 col-12-small">
                                            <input type="text" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" name="subject" id="subject" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea name="message" id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <ul className="actions">
                                                <li><input type="submit" value="Send Message" /></li>
                                                <li><input type="reset" value="Clear Form" className="alt" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                                <hr />
                                <h3>Find me on ...</h3>
                                <ul className="social">
                                    {/* <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                                    <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
                                    <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                                    <li><a href="#" className="icon fa-tumblr"><span className="label">Tumblr</span></a></li>
                                    <li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
                                    <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                                    <li><a href="#" className="icon fa-rss"><span>RSS</span></a></li>
                                    <li><a href="#" className="icon fa-instagram"><span>Instagram</span></a></li>
                                    <li><a href="#" className="icon fa-foursquare"><span>Foursquare</span></a></li>
                                    <li><a href="#" className="icon fa-skype"><span>Skype</span></a></li>
                                    <li><a href="#" className="icon fa-soundcloud"><span>Soundcloud</span></a></li>
                                    <li><a href="#" className="icon fa-youtube"><span>YouTube</span></a></li>
                                    <li><a href="#" className="icon fa-blogger"><span>Blogger</span></a></li>
                                    <li><a href="#" className="icon fa-flickr"><span>Flickr</span></a></li>
                                    <li><a href="#" className="icon fa-vimeo"><span>Vimeo</span></a></li> */}
                                </ul>
                                <hr />
                            </div>
                        </div>
                        <footer>
                            <ul id="copyright">
                                <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </footer>
                    </div>
                </article>
            </div>
        )
    };
};

export default Template1;