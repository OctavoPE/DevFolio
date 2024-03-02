import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Location</h4>
              <p>Salt Lake City, Utah</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>Jallain99@outlook.com</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-linkedin" />
              </div>
              <h4>LinkedIn</h4>
              <p>jeanmarco-allain</p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          <div className="about-content padd-15">
          <div className="row">
                  <p>
                    I'm thrilled that you're considering reaching out. Whether you have questions, or exciting projects in mind, I'd love to talk.  
                  </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
