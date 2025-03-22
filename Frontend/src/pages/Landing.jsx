import React from "react";
import Navbar, { NavbarLanding } from "../components/navbar";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  function handleLog() {
    navigate("/dashboard");
  }

  const styles = {
    main: {
      width: "97%",
      backgroundColor: "#E0F2FE",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
    },
    container: {
      width: "98%",
      backgroundColor: "#E0F2FE",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
    },
    logo: {
      width: "40px",
      height: "40px",
      backgroundColor: "#2a4698",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto 20px",
      color: "white",
    },
    title: {
      color: "#2a4698",
      fontSize: "2.5rem",
      fontWeight: "bold",
      margin: "20px 0",
    },
    subtitle: {
      color: "#2a4698",
      fontSize: "1.1rem",
      marginBottom: "40px",
      maxWidth: "800px",
      margin: "5px auto 60px",
    },
    categories: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
      maxWidth: "1200px",
      margin: "0 auto 50px",
    },
    category: {
      flex: "1 1 250px",
      maxWidth: "280px",
      padding: "20px",
      textAlign: "center",
    },
    categoryIcon: {
      fontSize: "2.5rem",
      color: "#2a4698",
      marginBottom: "-20px",
    },
    categoryTitle: {
      color: "#2a4698",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    categoryDescription: {
      fontSize: "0.9rem",
      color: "#2a4698",
      lineHeight: "1.5",
    },
    button: {
      background: "linear-gradient(60deg, #194185, #4149DD)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      padding: "20px",
      fontSize: "18px",
      fontWeight: "700",
      cursor: "pointer",
    },
    cardMain: {
      padding: "10px 0",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap",
    },
    card: {
      width: "20%",
    },
    cardimg: {
      height: "auto",
      width: "100%",
      objectfit: "cover",
    },
    fcontainer: {
      backgroundColor: "#e6f5ff",
      padding: "40px 20px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      minHeight: "100vh",
    },
    footer: {
      backgroundColor: "#2a4698",
      color: "white",
      padding: "40px 20px",
      textAlign: "center",
      marginTop: "-50px",
    },
    ftitle: {
      marginBottom: "20px",
    },
    footerTitle: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    footerLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginBottom: "30px",
    },
    footerLink: {
      cursor: "pointer",
      fontSize: "1rem",
    },
    footericon: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    socialIcon: {
      width: "30px",
      height: "30px",
      cursor: "pointer",
    },
    copyright: {
      fontSize: "0.9rem",
      opacity: "0.8",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavbarLanding />
      <div className="main" style={styles.main}>
        <div className="one">
          <div style={styles.container}>
            <div style={styles.logo}>
              <img
                src="/images/compass_icon.png"
                alt="compass"
                style={{ width: "40px", height: "40px" }}
              />
            </div>

            <h1 style={styles.title}>Discover Your Next Adventure</h1>
            <p style={styles.subtitle}>
              Find the best places to eat, stay, and explore near you, now with
              AI-powered recommendations.
            </p>

            <div style={styles.categories}>
              <div style={styles.category}>
                <div style={styles.categoryIcon}>
                  <img
                    src="/images/sleeping.png"
                    alt="hotel"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h2 style={styles.categoryTitle}>Hotels</h2>
                <p style={styles.categoryDescription}>
                  Find the perfect place to stay, with options ranging from
                  budget to luxury.
                </p>
              </div>
              <div style={styles.category}>
                <div style={styles.categoryIcon}>
                  <img
                    src="/images/ticket.png"
                    alt="sleep"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h2 style={styles.categoryTitle}>Unexplored</h2>
                <p style={styles.categoryDescription}>
                  Explore popular attractions and hidden gems that make your
                  trip memorable.
                </p>
              </div>

              <div style={styles.category}>
                <div style={styles.categoryIcon}>
                  <img
                    src="/images/traveling.png"
                    alt="travel"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h2 style={styles.categoryTitle}>Local Guide</h2>
                <p style={styles.categoryDescription}>
                  Connect with expert local guides for the best routes, hidden
                  trails, and a safe trekking experience.
                </p>
              </div>

              <div style={styles.category}>
                <div style={styles.categoryIcon}>
                  <img
                    src="/images/lunch.png"
                    alt="lunch"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
                <h2 style={styles.categoryTitle}>Restaurants</h2>
                <p style={styles.categoryDescription}>
                  Discover the best dining experiences, from local favorites to
                  top-rated eateries.
                </p>
              </div>
            </div>

            <button style={styles.button} onClick={() => handleLog()}>
              Explore Now
            </button>
          </div>
        </div>

        <div className="two" style={{ width: "100%", marginTop: "-200px" }}>
          <h2 style={{ fontSize: "2rem", color: "#194185" }}>Reviews</h2>
          <div className="cardMain" style={styles.cardMain}>
            <div className="card" style={styles.card}>
              <img src="/images/c1.png" alt="card" style={styles.cardimg} />
            </div>
            <div className="card" style={styles.card}>
              <img src="/images/c2.png" alt="card" style={styles.cardimg} />
            </div>
            <div className="card" style={styles.card}>
              <img src="/images/c3.png" alt="card" style={styles.cardimg} />
            </div>
          </div>
        </div>

        <div className="three" style={{ width: "100%" }}>
          <img
            src="/images/aboutus.png"
            alt="aboutUs"
            style={{ width: "98%", height: "auto", objectFit: "fill" }}
          />
        </div>
        <div className="four" style={{ width: "100%" }}>
          <img
            src="/images/contact.png"
            alt="contact"
            style={{ width: "98%", height: "auto", objectFit: "fill" }}
          />
        </div>
      </div>

      <footer style={styles.footer}>
        <div className="footer">
          <div style={styles.ftitle}>
            <h2 style={styles.footerTitle}>Adventure Seekers</h2>
            <p style={styles.footerLinks}>
              <span style={styles.footerLink}>Home</span>
              <span style={styles.footerLink}>About</span>
              <span style={styles.footerLink}>ContactUs</span>
            </p>
          </div>
          <div style={styles.footericon}>
            <img
              src="/images/f,facebook.png"
              alt="facebook"
              style={styles.socialIcon}
            />
            <img
              src="/images/f,insta.png"
              alt="insta"
              style={styles.socialIcon}
            />
            <img
              src="/images/f,youtube.png"
              alt="youtube"
              style={styles.socialIcon}
            />
            <img
              src="/images/ftwitter.png"
              alt="twitter"
              style={styles.socialIcon}
            />
          </div>
          <p style={styles.copyright}>
            @2025 Adventure Seekers Smart Trips, Simplified.
          </p>
        </div>
      </footer>
    </div>
  );
}
