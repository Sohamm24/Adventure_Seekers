import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function PlaceDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/ram_baghgarden.png",
    "/images/ram_bagh_2.png",
    "/images/ram_bagh_3.png",
  ];

  const placeDetails = {
    name: "Ram Bagh Garden (also known as Rambagh Garden)",
    location: "Ulwe, Navi Mumbai, Maharashtra, India",
    inaugurated: "December 22, 2018",
    size: "14 acres",
    developer: "Former MP Ramseth Thakur",
    hours: "Open daily from 6:00 AM to 8:00 PM",
    address:
      "Ram Bagh Garden, Tel-Panvel, Post-Nhava, 410206, Navi Mumbai, Maharashtra, India",
    additionalInfo:
      "The garden has faced allegations regarding land reclamation and destruction of mangroves, but the developer denies any wrongdoing.",
    attractions:
      "Ulwe is a developing area known for its residential projects and proximity to the Nhava Sheva port.",
  };

  const styles = {
    main: {
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    container: {
      width: "95%",
      padding: "40px",
      backgroundColor: "#e6f5ff",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#2a4698",
      fontSize: "24px",
      fontWeight: "bold",
      padding: "10px",
      marginBottom: "20px",
      borderBottom: "1px dashed #2a8bf2",
    },
    content: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    },
    backButton: {
      backgroundColor: "#2a4698",
      color: "white",
      border: "none",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      marginBottom: "10px",
    },
    mainImageContainer: {
      // width: "200px",
      // height: "200px",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "10px",
    },
    mainImage: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
    thumbnailContainer: {
      display: "flex",
      gap: "10px",
      overflowX: "auto",
      padding: "5px 0",
    },
    thumbnail: {
      width: "70px",
      height: "70px",
      objectFit: "cover",
      borderRadius: "5px",
      cursor: "pointer",
      border: "2px solid transparent",
    },
    selectedThumbnail: {
      border: "2px solid #2a4698",
    },
    details: {
      width: "50%",
      padding: "20px 60px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    detailsRow: {
      marginBottom: "10px",
    },
    sectionTitle: {
      fontWeight: "bold",
      color: "#194185",
      marginBottom: "5px",
    },
    bulletPoint: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      marginBottom: "8px",
    },
    bullet: {
      color: "#2a4698",
      marginRight: "5px",
    },
  };

  return (
    <div style={styles.main}>
      <Navbar style />
      <div style={styles.container}>
        <h1 style={styles.header}>RamBagh Garden, Navashiva</h1>

        <div
          className="left_right"
          style={{
            margin: "auto",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={styles.content}>
            <div>
              <div style={styles.mainImageContainer}>
                <img
                  src={images[selectedImage]}
                  alt="Ram Bagh Garden"
                  style={styles.mainImage}
                />
              </div>

              <div style={styles.thumbnailContainer}>
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={{
                      ...styles.thumbnail,
                      ...(selectedImage === index
                        ? styles.selectedThumbnail
                        : {}),
                    }}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div style={styles.details}>
            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Name: <span>{placeDetails.name}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Location: <span>{placeDetails.location}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Inauguration Date: <span>{placeDetails.inaugurated}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Size: <span>{placeDetails.size}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Developed by: <span>{placeDetails.developer}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Operating Hours: <span>{placeDetails.hours}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Address: <span>{placeDetails.address}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Additional Information:{" "}
                <span>{placeDetails.additionalInfo}</span>
              </div>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.sectionTitle}>
                Nearby Attractions: <span>{placeDetails.attractions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
