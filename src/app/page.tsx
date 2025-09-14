
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/profile.jpg"
              alt="Jeanmarco Allain Portfolio"
              className="shadow-dark"
            />
            <h1>Jeanmarco Allain</h1>
            <p>Software Developer</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/jeanmarco-allain" target="jeanmarco">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
