import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import content from "./content.json"

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
                  src={content?.section_1.image}
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
                      {content?.section_1.title}
                    </h1>
                    <div className="row">
                      <div className="col">
                        <p
                          style={{
                            color: "#F0EBCE",
                            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          }}
                        >
                          {content?.section_1.sub_title}
                        </p>
                        <Link to="/features">
                          <button
                            type="button"
                            className="btn btn-success btn-lg border-warning"
                          >
                            {content?.section_1.button_text}
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
                    <h1 className="fw-semibold">{content?.section_2.title}</h1>
                    <div className="row">
                      <div className="col">
                        <p>
                          {content?.section_2.sub_title}
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
                  src={content?.section_2.image}
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
              {content?.section_3.title}
            </h1>
            <h6
              className="fw-semibold text-center mb-5"
              style={{
                color: "#F0EBCE",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {content?.section_3.sub_title}
            </h6>
            <div className="row justify-content-between d-flex text-center gap-3">
                {content?.section_3.card.map((cards,index)=>(
              <div className="col align-items-center justify-content-center d-flex text-center" key={index}>
                    <Card style={{height:'540px'}}  >
                      <Card.Img variant="top" src={cards.image} style={styles.cardImage} />
                      <Card.Body >
                        <Card.Title style={{textAlign:'center', fontSize:'16px'}}>{cards.name}</Card.Title>
                        <Card.Title style={{textAlign:'center', fontSize:'16px'}}>{cards.alias}</Card.Title>
                        <Card.Text>
                        {cards.title}
                        </Card.Text>
                        <Card.Text>
                        {cards.year}
                        </Card.Text>
                      </Card.Body>
                    </Card>
              </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
