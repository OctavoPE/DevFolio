import type { NextPage } from "next";
import Link from "next/link";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
              <div className="portfolio-item padd-15" data-category="web-design">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/showcase-1.JPG" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>LMS System</h4>
                    <p>Interactive Learning Management System (LMS). Built with JQuery, AJAX, and Django.</p>
                    <div className="icon">
                      <a href="https://github.com/OctavoPE" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            {/* Portfolio Item End*/}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
