import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [filter, setFilter] = useState("None");
  const [showDropdown, setShowDropdown] = useState(false)
;
const [data, setData] = useState(null);

const handleDashData = (navbarData) =>{
  setData(navbarData)

  
}

console.log(data);
  const navigate = useNavigate();

  function handlePlace() {
    navigate("/places");
  }
  const places = [
    {
      id: 1,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
    {
      id: 2,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
    {
      id: 3,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
    {
      id: 4,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
    {
      id: 5,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
    {
      id: 6,
      name: "Karnala Fort",
      description: "Located within the Karnala Bird Sanctuary.",
      image: "/images/cardPic.jpeg",
      category: "Trek",
    },
  ];

  // Filter categories
  const categories = [
    "none",
    "Trek",
    "Beach",
    "Mountain",
    "Historic",
    "Wildlife",
  ];

  const styles = {
    container: {
      width: "95%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#e6f5ff",
      maxHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    main: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    header: {
      fontSize: "28px",
      fontWeight: "bold",
      textAlign: "center",
      margin: "20px 0",
      color: "#2a4698",
    },
    filterContainer: {
      display: "flex",
      alignItems: "center",
      margin: "20px 30px",
      gap: "30px",
    },
    filterLabel: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    filterButton: {
      backgroundColor: "#194185",
      color: "white",
      border: "none",
      borderRadius: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      position: "relative",
    },
    filterIcon: {
      marginLeft: "5px",
    },
    dropdownContainer: {
      position: "absolute",
      top: "100%",
      left: "92px",
      marginTop: "-323px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      zIndex: 10,
      minWidth: "120px",
      display: showDropdown ? "block" : "none",
    },
    dropdownItem: {
      padding: "10px 16px",
      color: "#333",
      cursor: "pointer",
      textAlign: "left",
      display: "block",
      width: "100%",
      border: "none",
      backgroundColor: "transparent",
      fontSize: "14px",
    },
    dropdownItemHover: {
      backgroundColor: "#f0f5ff",
    },
    cardContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px 60px",
      width: "100%",
    },
    card: {
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "white",
      position: "relative",
      transition: "transform 0.3s ease",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-5px)",
    },
    cardImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    cardContent: {
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      padding: "10px",
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "white",
    },
    cardTitle: {
      margin: "0 0 5px 0",
      fontSize: "16px",
      fontWeight: "bold",
    },
    cardDescription: {
      margin: "0",
      fontSize: "12px",
      opacity: "0.9",
    },
  };

  return (
    <div style={styles.container}>
      <Navbar sendDataDash = {handleDashData}/>
      <div
        className="mainContainer"
        style={{ width: "128%", backgroundColor: "#E0F2FE", height: "100vh" }}
      >
        <div style={styles.main}>
          <h1 style={styles.header}>Tailored Treasures Just for You!</h1>
          <div style={styles.filterContainer}>
            <span style={styles.filterLabel}>Filters</span>
            <button
              style={styles.filterButton}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {filter}
              <svg
                style={styles.filterIcon}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div style={styles.dropdownContainer}>
              {categories.map((category) => (
                <button
                  key={category}
                  style={{
                    ...styles.dropdownItem,
                    backgroundColor:
                      filter === category ? "#e6f0ff" : "transparent",
                  }}
                  onClick={() => {
                    setFilter(category);
                    setShowDropdown(false);
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0f5ff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      filter === category ? "#e6f0ff" : "transparent";
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div style={styles.cardContainer} onClick={() => handlePlace()}>
          {data.map((data) => (
            <div
              key={data.id}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={data.images}
                alt={data.placeName}
                style={styles.cardImage}
              />
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{data.placeName}</h3>
               {/* <p style={styles.cardDescription}>{data.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
