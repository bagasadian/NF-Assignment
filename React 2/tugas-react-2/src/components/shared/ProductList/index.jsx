export default function ProductList(){
    return(
        <>
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
        </>
    )
}