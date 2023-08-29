import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function LandingPage() {

  const styles = {
    card: {
      backgroundColor: '#B7E0F2',
      borderRadius: 55,
      padding: '3rem'
    },
    cardImage: {
      objectFit: 'cover',
      width: '340px',
      height: '380px'
      }
  }
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />
        <section style={{ backgroundColor: "#AA8B56" }}>
          <div className="container d-flex py-5">
            <div className="mx-5 row">
              <div className="col-3 col-md-4 align-items-center justify-content-center d-flex">
                <img
                  alt="logo-sumedang"
                  width={200}
                  height={200}
                  src="/image/GenTree.png"
                />
              </div>
              <div className="col p-0">
                <div className="row">
                  <div className="col">
                    <h1
                      className="fw-semibold"
                      style={{
                        color: "#F0EBCE",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      Web Silsilah Keluarga Kerajaan Sumedang
                    </h1>
                    <div className="row">
                      <div className="col">
                        <p
                          style={{
                            color: "#F0EBCE",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          adalah situs yang menyajikan informasi sejarah
                          silsilah keluarga Kerajaan Sumedang Larang, yang
                          merupakan salah satu Kerajaan Islam di Jawa Barat.
                          Pada web ini, dapat dilihat penguasa generasi-generasi
                          yang ada. Selain itu, didalam website ini ditampilkan
                          pula silsilah Keluarga Kerajaan Sumedang Larang.
                          Penguasa generasi terdahulu ditampilkan dalam diagram
                          silsilah secara vertikal, sedangkan Silsilah Keluarga
                          ditampilkan dengan bentuk diagram graf. Klik pada
                          tombol dibawah untuk jelajahi fitur yang ada.
                        </p>
                        <Link to="/features">
                          <button
                            type="button"
                            className="btn btn-success btn-lg border-warning"
                          >
                            Pelajari Lebih Lanjut
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundColor: "#FFFFFF",
            color: "#4E6C50",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="container d-flex py-5">
            <div className="mx-5 row">
              <div className="col p-0">
                <div className="row">
                  <div className="col text-end">
                    <h1 className="fw-semibold">Tentang Kerajaan Sumedang</h1>
                    <div className="row">
                      <div className="col">
                        <p>
                          Kerajaan Sumedang Larang merupakan salah satu kerajaan
                          Islam di pulau Jawa bagian barat yang berdiri pada
                          tahun 721 M. Kerajaan ini memiliki sejarah yang cukup
                          panjang, mulai dari abad ke-8 Masehi hingga menjadi
                          sebuah negara berdaulat di abad ke-16 Masehi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 text-center">
                <img
                  alt="logo-sumedang"
                  width={200}
                  height={250}
                  src="/image/logo-sumedang.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: "#AA8B56" }}>
          <div className="container py-5">
            <h1
              className="fw-semibold text-center mb-1"
              style={{
                color: "#F0EBCE",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Keturunan Pangeran Kornel
            </h1>
            <h6
              className="fw-semibold text-center mb-5"
              style={{
                color: "#F0EBCE",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Yang merupakan salah satu tokoh berpengaruh dalam masa pemerintahan Kerajaan Sumedang
            </h6>
            <div className="row justify-content-between d-flex text-center gap-3">
              <div className="col align-items-center justify-content-center d-flex text-center">
                    <Card style={{height:'540px'}} >
                      <Card.Img variant="top" src="/image/pangeran_sugih.jpg" style={styles.cardImage} />
                      <Card.Body >
                        <Card.Title style={{textAlign:'center', fontSize:'16px'}}>Pangeran Soeria Koesoemah Adinata</Card.Title>
                        <Card.Title style={{textAlign:'center', fontSize:'16px'}}>(Pangeran Soegih)</Card.Title>
                        <Card.Text>
                          Bupati Sumedang
                        </Card.Text>
                        <Card.Text>
                          1836-1882
                        </Card.Text>
                      </Card.Body>
                    </Card>
              </div>
              <div className="col align-items-center justify-content-center d-flex text-center">
                    <Card style={{height:'540px'}} >
                      <Card.Img variant="top" src="/image/pangeran_mekah.jpg" style={styles.cardImage} />
                      <Card.Body>
                      <Card.Title style={{textAlign:'center', fontSize:'16px'}}>Pangeran Aria Soeria Atmadja</Card.Title>
                        <Card.Title style={{textAlign:'center', fontSize:'16px'}}>(Pangeran Mekah)</Card.Title>
                        <Card.Text>
                          Bupati Sumedang
                        </Card.Text>
                        <Card.Text>
                          1882-1919
                        </Card.Text>
                      </Card.Body>
                    </Card>
              </div>
              {/* <div className="col align-items-center justify-content-center d-flex text-center">
              <Card style={{height:'540px'}} >
                <Card.Img variant="top" src="/image/kadir_soemawilaga_1.jpg" style={styles.cardImage} />
                <Card.Body>
                <Card.Title style={{textAlign:'center', fontSize:'16px'}}>Rd. Kadir Soemawilaga</Card.Title>
                  <Card.Text>
                    Lahir : 18 November 1858
                  </Card.Text>
                  <Card.Text>
                    Wafat: 28 April 1928
                  </Card.Text>
                </Card.Body>
              </Card>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
