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
                src="https://avatars.githubusercontent.com/u/131703989?s=400&u=bb295d2a70206cb17078861ff588f6eddadb2026&v=4"
                alt={`Aisha Kleemoff`}
                className="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Aisha Kleemoff`}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href="https://www.linkedin.com/in/tonesha-rose-53321a273/"
                    className="card-link"
                  >
                    Linkedin
                  </a>
                  <br />
                  <a
                    href="https://github.com/tonesharose31"
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
                src="https://avatars.githubusercontent.com/u/131826413?v=4"
                alt={`Anile Choice`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Winder `}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href=""
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
                src="https://avatars.githubusercontent.com/u/131826413?v=4"
                alt={`Anile Choice`}
                class="card-img-top"
              />
              <div className="contributer-details-container">
                <div className="card-body d-block">
                  <h5 className="card-title">{`Michael Caldwell `}</h5>
                  <p className="card-text">Software Engineer</p>
                  <a
                    href=""
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