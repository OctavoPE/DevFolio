import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Jeanmarco Allain, <span>Software Developer</span>
                  </h2>
                  <p>
                    Hi! My name is Jeanmarco. I am passionate about crafting automation solutions and desktop tools to enhance existing workflows, 
                    driving quantifiable improvements in program speed while streamlining manual processes. 
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        GitHub : <span>https://github.com/OctavoPE</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>Jallain99@outlook.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Software Development B.S.</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        LinkedIn : <span>jeanmarco-allain</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Salt Lake City, UT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Bilingual : <span>English & Spanish</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Contact Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>SQL</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>C#</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                          Since 2016, I've been self-taught in programming, gaining proficiency in Java, C++, C#, SQL, React with JavaScript, Python, and Kotlin.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020 to 2025
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Software Development
                          </h4>
                          <p className="timeline-text">
                            From 2020 to 2025, I've studied at the University of Utah's esteemed School of Computing, where I've honed my skills and knowledge base. 
                            Throughout my time there, I've not only delved into advanced programming concepts but also led successful sprints, engaged in collaborative
                            programing endeavors, and conceptualized, designed, and prototyped applications and programs.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 to 2022 - Salt Lake Community College
                          </h6>
                          <h4 className="timeline-title">Data Specialist</h4>
                          <ul className="timeline-bullets">
                            <li>Designed and implemented automation to accelerate the data input process, achieving 75% improvement 
                              in efficiency by utilizing JavaScript and Puppeteer to streamline the process, thereby positively impacting data accessibility.</li>
                            <li>Developed in-house browser software using JavaScript to significantly enhance the usability of our web database portal, 
                              optimizing data accessibility and user experience for team members.</li>
                          </ul>
                        </div>
                        {/* Timeline Item end */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
