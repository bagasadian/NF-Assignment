 function App() {
 

  return (
    <>
     
     <div className="container"> 
      {/* Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom container">
        {/* Logo */}
        <a href="#home" className="d-flex align-items-center mb-2 mb-md-0 text-decoration-none">
          <i className="fa-solid fa-book fa-2xl me-2" style={{ color: "#366aadff" }}></i>
          <span className="fs-4 fw-bold">BookStore</span>
        </a>

        {/* Nav */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#home" className="nav-link px-3">Home</a></li>
          <li><a href="#book" className="nav-link px-3">Book</a></li>
          <li><a href="#team" className="nav-link px-3">Team</a></li>
          <li><a href="#contact" className="nav-link px-3">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </header>


        {/* Hero */}
        <section id="home" className="container my-5"></section>
        <div className="container my-5"> 
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
            
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: Perubahan Kecil yang memberikan hasil luar biasa.
              </h1> 
              <p className="lead">
                Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.
              </p> 

              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
                  Buy Now
                </button> 
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                  Detail
                </button> 
              </div> 
            </div> 
            
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
              <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720"/> 
            </div> 
          </div> 
          </div>

          {/* Product List */}
          <section id="book" className="container my-5"></section>
          <section class="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Best Seller</h1>
      <p className="lead text-body-secondary">
        Something short and leading about the collection below—its contents, the creator, etc. 
        Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
      </p>
      <p>
        <a href="#" className="btn btn-primary my-2 m-2">View</a>
        <a href="#" className="btn btn-secondary my-2">Other Book</a>
      </p>
    </div>
  </div>
</section>

<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

      {/* Card 1 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/1.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 1" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Kisah perjalanan hidup Zaman, seorang pengacara muda, yang ditugaskan mengungkap rahasia warisan besar seorang wanita tua bernama Sri Ningsih. Dari Eropa hingga Nusantara, ia menemukan pelajaran tentang cinta, perjuangan, dan ketulusan.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>


      {/* Card 2 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/2.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 2" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Berlatar di atas kapal yang berlayar menuju Tanah Suci, para penumpang membawa rindu, luka, dan rahasia masing-masing. Novel ini mengajarkan tentang kesabaran, pengampunan, dan kekuatan doa.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* <! Card 3 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/3.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 3" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Lanjutan kisah Pulang, tentang Bujang yang melanjutkan perjalanan hidupnya di dunia shadow economy. Ia belajar tentang perpisahan, kehilangan, dan arti keberanian sejati.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/4.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 4" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Awal dari seri Bumi. Bercerita tentang Raib, Seli, dan Ali yang menemukan dunia paralel penuh misteri. Petualangan mereka membuka rahasia besar tentang persahabatan, kekuatan, dan tanggung jawab.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/5.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 5" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Kisah Lail yang kehilangan segalanya akibat bencana besar. Ia bertemu Esok yang mengajarkannya arti cinta, pengorbanan, dan pilihan hidup di tengah dunia yang terus berubah.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* <! Card 6 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/6.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 6" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Perjalanan Bujang, anak desa yang kemudian menjadi bagian dari dunia gelap bernama shadow economy. Novel ini menyingkap kisah tentang keluarga, kesetiaan, dan pencarian jati diri.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 7 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/7.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 7" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Lanjutan dari Bumi. Raib, Seli, dan Ali menjelajahi dunia Bulan, penuh keajaiban sekaligus bahaya. Mereka semakin memahami arti kekuatan dan persahabatan.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* Card 8 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/8.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 8" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
              Cerita tentang seorang anak dengan kemampuan istimewa dalam dunia komunikasi. Ia belajar memahami arti pertemanan dan suara hati di balik kata-kata.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>

      {/* <! Card 9 */}
      <div className="col">
        <div className="card shadow-sm">
          <img 
            src="src/assets/9.png" 
            className="bd-placeholder-img card-img-top" 
            alt="Book 9" 
            width="100%" 
            height="auto" 
          />

          <div className="card-body">
            <p className="card-text">
             Mengangkat kisah tentang kehidupan manusia yang diwarnai perjuangan, air mata, serta pelajaran hidup. Novel ini sarat makna tentang bangkit dari keterpurukan.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Team */}
<section id="team" className="container my-5"></section>
 <div className="container marketing mt-5">
      <h1 className="text-center mb-5">Our Teams</h1>
      <div className="row">
        {/* Team Member 1 */}
        <div className="col-lg-4 text-center">
          <img
            src="src/assets/FOTO PRIBADI.jpg"
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
            src="src/assets/potrait1.png"
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
            src="src/assets/potrait2.png"
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

{/* Contact */}
<section id="contact" className="container my-5"></section>
 <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row g-4">
        {/* Form Contact */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <h4 className="mb-3">Kirim Pesan</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nama</label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Pesan</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Kirim
              </button>
            </form>
          </div>
        </div>

        {/* Info Contact + Maps */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="mb-3">Info Kontak</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fa-solid fa-location-dot me-2 text-primary"></i>
                Jl. Merdeka No. 123, Jakarta
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-envelope me-2 text-primary"></i>
                bagasadianugerah05@gmail.com
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-phone me-2 text-primary"></i>
                +62 812 3456 7890
              </li>
            </ul>

            <h5 className="mt-4">Ikuti Kami</h5>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-primary btn-sm">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-danger btn-sm">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-info btn-sm">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="card shadow-sm">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.743294095896!2d106.82715367499149!3d-6.170194560448532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5c5c0f0cbbf%3A0x18c81f9c2f3e0b0!2sMonas!5e0!3m2!1sid!2sid!4v1695800000000!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
              </li>
              <li className="nav-item">
                <a href="#book" className="nav-link px-2 text-body-secondary">Book</a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">
              &copy; 2025 Bagas Adi Anugerah
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
