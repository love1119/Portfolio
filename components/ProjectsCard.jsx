import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody className="position-relative portfolio-project-card">
            <div className="portfolio-project-main d-flex px-3">
              <div className="d-flex flex-column align-items-center w-100 pl-4">
                <h3>{data.name}</h3>
                <div
                  className={`portfolio-project-preview ${
                    data.name === "Restaurant Systems" ? "mobile" : ""
                  }`}
                >
                  <img src={data.preview} alt={data.preview} />
                </div>
                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.github}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                    style={{ padding: "0.25rem 0.5rem" }}
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
            {/* Render Hover Content */}
            <div className="portfolio-project-backdrop">
              <div className="portfolio-project-name">{data.name}</div>
              {(data.desc || []).length > 0 && (
                <div className="portfolio-project-description">
                  <ul>
                    {data.desc.map((item, index) => (
                      <li className="description-item" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ul className="portfolio-project-tags">
                {data.tags.map((tag) => (
                  <li key={tag}>
                    <span className="portfolio-project-tag">{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
