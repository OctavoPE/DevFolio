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
            
            {/* RenderFlow */}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/showcase-2.JPG" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>RenderFlow</h4>
                    <p>Automatic project renderer for Blender creations. Built with C++ & Qt.</p>
                    <div className="icon">
                      <a href="https://1977723788644.gumroad.com/l/renderflow" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-external-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            {/* Portfolio Item End*/}
            
            {/* Learning management system */}
            {/* Portfolio Item */}
              <div className="portfolio-item padd-15" data-category="web-design">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src="/imgs/portfolio/showcase-1s.JPG" alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>LMS System</h4>
                    <p>Interactive Learning Management System (LMS). Built with JQuery, AJAX, and Django.</p>
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
