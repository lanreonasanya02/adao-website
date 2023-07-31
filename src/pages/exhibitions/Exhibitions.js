import React, { useEffect } from "react";
import "../exhibitions/Exhibitions.css";
import img1 from "../../images/exhibitions/IMG_6969.jpg";
import img2 from "../../images/exhibitions/IMG_1694.jpg";
import img3 from "../../images/exhibitions/IMG_5759.jpg";
import img4 from "../../images/exhibitions/IMG_1441.jpg";
import img5 from "../../images/exhibitions/IMG_1481.jpg";
import img6 from "../../images/exhibitions/IMG_1437.jpg";
import img7 from "../../images/exhibitions/IMG_1475.jpg";
import img8 from "../../images/exhibitions/IMG_1440.jpg";
import img9 from "../../images/exhibitions/IMG_4885.jpg";
import img10 from "../../images/exhibitions/IMG_1573.jpg";
import img11 from "../../images/exhibitions/IMG_1476.jpg";
import img12 from "../../images/exhibitions/IMG_5248.jpg";
import img13 from "../../images/exhibitions/adao-10.png";
import img14 from "../../images/exhibitions/adao-11.png";
// import img15 from "../../images/exhibitions/IMG_1900.jpg";
import img16 from "../../images/exhibitions/IMG_6425.jpg";
import img17 from "../../images/exhibitions/IMG_5227.jpg";
import img18 from "../../images/exhibitions/IMG_002.jpg";
import img19 from "../../images/exhibitions/IMG_1657.jpg";
import img20 from "../../images/exhibitions/IMG_3356.jpg";
import img21 from "../../images/exhibitions/IMG_5764.jpg";
import img22 from "../../images/exhibitions/IMG_5245.jpg";
import img23 from "../../images/exhibitions/IMG_6258.jpg";
import img24 from "../../images/exhibitions/IMG_6264.jpg";
import img25 from "../../images/exhibitions/IMG_003.jpg";
import img26 from "../../images/exhibitions/IMG_3363.jpg";
import img27 from "../../images/exhibitions/IMG_5242.jpg";
import img28 from "../../images/exhibitions/IMG_5243.jpg";
import img29 from "../../images/exhibitions/IMG_5762.jpg";
import img30 from "../../images/exhibitions/IMG_1900.jpg";
import img31 from "../../images/exhibitions/IMG_4255.jpg";
import img32 from "../../images/exhibitions/IMG_5791.jpg";
import img33 from "../../images/exhibitions/IMG_4883.jpg";
import img34 from "../../images/exhibitions/IMG_3349.jpg";
import img35 from "../../images/exhibitions/IMG_2173.jpg";
import img36 from "../../images/exhibitions/IMG_2163.jpg";
import img37 from "../../images/exhibitions/IMG_1868.jpg";
import img38 from "../../images/exhibitions/IMG_1729.jpg";
import img39 from "../../images/exhibitions/IMG_1681.jpg";
import img40 from "../../images/exhibitions/IMG_1676.jpg";
import img41 from "../../images/exhibitions/IMG_1560.jpg";
import img42 from "../../images/exhibitions/IMG_1887.jpg";
import img43 from "../../images/exhibitions/IMG_1576.jpg";
import img44 from "../../images/exhibitions/IMG_5744.jpg";
import img45 from "../../images/exhibitions/IMG_1872.jpg";
import img46 from "../../images/exhibitions/IMG_1886.jpg";
import img47 from "../../images/exhibitions/IMG_1895.jpg";

import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Navbar from "../navbars/Navbar";
import Footer from "../footer/Footer";

const Exhibitions = () => {
  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <main id="main-exhibitions" className="d-none d-lg-block">
        <Navbar />
        <section className="container-lg">
          <div className="return-link">
            <Link to="/">
              <FaAngleDoubleLeft /> Return Home
            </Link>
          </div>
          <h3 className="productCards-heading">Exhibitions</h3>
          <p>
            Welcome to the exhibitions section of our website, a captivating
            showcase of artistic wonders! Here, we take you on an enchanting
            visual journey through a diverse collection of art exhibitions that
            have graced our gallery walls. Immerse yourself in a symphony of
            colors, emotions, and creativity as each image narrates its own
            unique story.
          </p>

          <p className="productCards-paragraph">
            From contemporary masterpieces to timeless classics, this section
            offers a window into the boundless world of artistry, where
            imagination knows no boundaries. Join us in celebrating the talent
            and vision of artists from around the globe, and let these
            breathtaking displays inspire your own artistic spirit. Enjoy the
            artistry, passion, and inspiration that await you in our
            ever-growing gallery of exhibitions.
          </p>

          <section className=" gallery-section">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner gallery-container">
                {/* Slide 1 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="card-image first-column">
                          <img src={img1} alt="exhibition-1" />
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img3} alt="exhibition-2" />
                          </div>

                          <div className="card-image ">
                            <img src={img2} alt="exhibition-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img4} alt="exhibition-4" />
                          </div>

                          <div className="card-image ">
                            <img src={img5} alt="exhibition-5" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img10} alt="exhibition-6" />
                          </div>

                          <div className="card-image ">
                            <img src={img11} alt="exhibition-7" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img8} alt="exhibition-8" />
                          </div>

                          <div className="card-image ">
                            <img src={img9} alt="exhibition-9" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img6} alt="exhibition-10" />
                          </div>

                          <div className="card-image ">
                            <img src={img7} alt="exhibition-11" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="card-image first-column">
                          <img src={img14} alt="exhibition-12" />
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img13} alt="exhibition-13" />
                          </div>

                          <div className="card-image ">
                            <img src={img12} alt="exhibition-14" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 5 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="images-container">
                      <div className="card-image">
                        <img src={img16} alt="exhibition-16" />
                      </div>

                      <div className="card-image ">
                        <img src={img17} alt="exhibition-17" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 6 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img18} alt="exhibition-18" />
                          </div>

                          <div className="card-image ">
                            <img src={img19} alt="exhibition-19" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img20} alt="exhibition-20" />
                          </div>

                          <div className="card-image ">
                            <img src={img21} alt="exhibition-21" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 7 */}
                <div className="carousel-item active" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img22} alt="exhibition-22" />
                          </div>

                          <div className="card-image ">
                            <img src={img23} alt="exhibition-23" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img24} alt="exhibition-24" />
                          </div>

                          <div className="card-image ">
                            <img src={img25} alt="exhibition-25" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 8 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img26} alt="exhibition-26" />
                          </div>

                          <div className="card-image ">
                            <img src={img27} alt="exhibition-27" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img28} alt="exhibition-28" />
                          </div>

                          <div className="card-image ">
                            <img src={img29} alt="exhibition-29" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 9 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="card-image first-column">
                          <img src={img30} alt="exhibition-30" />
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img31} alt="exhibition-31" />
                          </div>

                          <div className="card-image ">
                            <img src={img32} alt="exhibition-32" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 10 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img33} alt="exhibition-33" />
                          </div>

                          <div className="card-image ">
                            <img src={img34} alt="exhibition-34" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img35} alt="exhibition-35" />
                          </div>

                          <div className="card-image ">
                            <img src={img36} alt="exhibition-36" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 11 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img37} alt="exhibition-37" />
                          </div>

                          <div className="card-image ">
                            <img src={img38} alt="exhibition-38" />
                          </div>
                        </div>
                      </div>

                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img39} alt="exhibition-39" />
                          </div>

                          <div className="card-image ">
                            <img src={img40} alt="exhibition-40" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 12 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="images-container">
                      <div className="card-image">
                        <img src={img44} alt="exhibition-44" />
                      </div>

                      <div className="card-image ">
                        <img src={img45} alt="exhibition-45" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 13 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="grid-container">
                      <div className="exhibit-column">
                        <div className="nested-columns">
                          <div className="card-image">
                            <img src={img42} alt="exhibition-42" />
                          </div>

                          <div className="card-image ">
                            <img src={img43} alt="exhibition-43" />
                          </div>
                        </div>
                      </div>
                      <div className="exhibit-column">
                        <div className="card-image first-column">
                          <img src={img41} alt="exhibition-41" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 14 */}
                <div className="carousel-item" data-bs-interval="4000">
                  <div className="container">
                    <div className="images-container">
                      <div className="card-image">
                        <img src={img46} alt="exhibition-46" />
                      </div>

                      <div className="card-image ">
                        <img src={img47} alt="exhibition-47" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Exhibitions;
