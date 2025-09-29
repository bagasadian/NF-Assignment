import "./style.css";

export default function Team() {
  return (
    <>
      <section id="team" className="container my-5">
        <div className="container marketing mt-5">
          <h1 className="text-center mb-5">Our Teams</h1>
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-lg-4 text-center">
              <img
                src="src/assets/images/FOTO PRIBADI.jpg"
                className="bd-placeholder-img rounded-circle mb-3"
                width="140"
                height="140"
                alt="Team 1"
              />
              <h2 className="fw-normal">Bagas Adi</h2>
              <p>Front-End Developer yang fokus pada React dan desain UI/UX.</p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View Profile &raquo;
                </a>
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-4 text-center">
              <img
                src="src/assets/images/potrait1.png"
                className="bd-placeholder-img rounded-circle mb-3"
                width="140"
                height="140"
                alt="Team 2"
              />
              <h2 className="fw-normal">Ayu Lestari</h2>
              <p>Back-End Developer dengan keahlian Node.js dan database.</p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View Profile &raquo;
                </a>
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-4 text-center">
              <img
                src="src/assets/images/potrait2.png"
                className="bd-placeholder-img rounded-circle mb-3"
                width="140"
                height="140"
                alt="Team 3"
              />
              <h2 className="fw-normal">Dewi Pratama</h2>
              <p>UI/UX Designer yang suka membuat tampilan modern dan elegan.</p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View Profile &raquo;
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
