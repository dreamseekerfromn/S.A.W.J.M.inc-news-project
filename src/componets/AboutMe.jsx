import React from "react";

const AboutMe = () => {

  return (
    <div>
      <div className="row" style={{ paddingTop: "50px", listStyle: "none" }}>
        <div className="col">
          <div className="card mx-4 my-4" style={{ width: "18rem" }}>
            <li className="contributers">
              <img
                src="https://avatars.githubusercontent.com/u/56147153?v=4"
                alt={`Joseph Carter`}
                className="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Joseph Carter`}</h5>
                  <p className="card-text">Software Engineer.</p>
                  <a
                    href="https://www.linkedin.com/in/josephaecarter/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href="https://github.com/Joseph-Carter"
                    className="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </li>
          </div>
          <div className="card mx-4 my-4" style={{ width: "18rem" }}>
            <li className="contributers">
              <img
                src="https://avatars.githubusercontent.com/u/10932336?v=4"
                alt={`Sung Yi`}
                className="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Sung Yi`}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/sung-yi-415141149/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href="https://github.com/dreamseekerfromn"
                    className="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="col">
          <div className="card mx-4 my-4" style={{ width: "18rem" }}>
            <li className="contributers">
              <img
                src="https://avatars.githubusercontent.com/u/96323559?v=4"
                alt={`Aisha Kleemoff`}
                className="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Aisha Kleemoff`}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/aisha-kleemoff-16b49122b/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href="https://github.com/AishaCKleemoff"
                    className="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </li>
          </div>
          <div className="card mx-4 my-4" style={{ width: "18rem" }}>
            <li className="contributers">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQFGMc2mi8Ew1Q/profile-displayphoto-shrink_800_800/0/1683074821195?e=1700092800&v=beta&t=_q1eSep7h92QyNIxFgrOCImi5akIVkHFLSP7bIFpgLI"
                alt={`Winder Joel Marte`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Winder Joel Marte`}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/winder-joel-marte-856265245/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href=""
                    className="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </li>
          </div>
          <div className="card mx-4 my-4" style={{ width: "18rem" }}>
            <li className="contributers">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQGRPPcWpKCXVQ/profile-displayphoto-shrink_400_400/0/1678115075849?e=1700092800&v=beta&t=_9XRXhkrj_Ie42PMjpkZAiTEbRWGYjhXNtSXApkubkU"
                alt={`Michael Caldwell`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Michael Caldwell`}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/michaelrmcaldwell5984/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href=""
                    className="card-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;