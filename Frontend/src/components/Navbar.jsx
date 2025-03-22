import React, { useState } from "react";

export default function Navbar({ sendDataDash }) {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  const handleSearch = async () => {
    if (!searchTerm) return; // Prevent empty searches

    try {
      console.log(searchTerm)
      const response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(searchTerm)}`, {
        method: "GET", // GET request does not use a body
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      sendDataDash(data);
      console.log(data); // Handle the search results as needed (e.g., navigate or update state)
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const styles = {
    nav: {
      width: "125.5%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      backgroundColor: "#E0F2FE",
    },
    left: {
      display: "flex",
      alignItems: "center",
    },
    leftImg: {
      height: "40px",
      width: "auto",
    },
    mid: {
      display: "flex",
      gap: "20px", // Adjusted gap for better spacing
    },
    header: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#194185",
      cursor: "pointer",
      margin: "0",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    button: {
      background: "linear-gradient(60deg, #194185, #4149DD)",
      color: "white",
      border: "none",
      borderRadius: "20px",
      padding: "11px 15px",
      fontSize: "16px",
      fontWeight: "700",
      cursor: "pointer",
    },
    rightImg: {
      height: "35px",
      width: "35px",
    },
    searchInput: {
      width: "400px",
      height: "40px",
      borderRadius: "30px",
      border: "2px solid #194185",
      backgroundColor: "#E0F2FE",
      paddingLeft: "15px", // Padding for better text positioning
    },
    searchButton: {
      backgroundColor: "#194185", // Button color
      color: "#FFFFFF", // Text color
      borderRadius: "30px", // Rounded corners
      paddingLeft:"15px", // Padding for better text positioning
       paddingRight:"15px", // Padding for better text positioning
       height:"40px" // Height for alignment with input field
    }
  };

  return (
    <div style={styles.nav}>
      <div style={styles.left}>
        <img src="/images/logo.png" alt="logo" style={styles.leftImg} />
      </div>
      
     <div style={styles.mid}>
        <input
          type="text"
          placeholder="Where are you planning to wonder"
          style={styles.searchInput}
          value={searchTerm} // Bind input value to state
          onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
        />
        <button style={styles.searchButton} onClick={handleSearch}>&#128269;</button> {/* Trigger search */}
        
       </div>
       <div style={styles.right}>
        <button style={styles.button}>+ Join Community</button>
        <img
          src="/images/profile_icon.png"
          alt="profile"
          style={styles.rightImg}
        />
       </div>
     </div>
   );
}

// Named export for NavbarLanding
export function NavbarLanding() {
  const styles = {
    nav: {
      width: "97%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 20px",
      backgroundColor: "#E0F2FE",
    },
    left: {
      display: "flex",
      alignItems: "center",
    },
    leftImg: {
      height: "40px",
      width: "auto",
    },
    mid: {
      display: "flex",
      gap: "50px", 
    },
    header:{
        fontSize:"18px", 
        fontWeight:"500", 
        color:"#194185", 
        cursor:"pointer", 
        margin:"0"
     }, 
     right:{
         display:"flex", 
         alignItems:"center", 
         gap:"15px"
     }, 
     button:{
         background:"linear-gradient(60deg, #194185, #4149DD)", 
         color:"white", 
         border:"none", 
         borderRadius:"50px", 
         padding:"11px 15px", 
         fontSize:"16px", 
         fontWeight:"700", 
         cursor:"pointer"
     }, 
     rightImg:{
         height:"35px", 
         width:"35px"
     }
   };

   return (
     <div style={styles.nav}>
       <div style={styles.left}>
         <img src="/images/logo.png" alt="logo" style={styles.leftImg} />
       </div>
       <div style={styles.mid}>
         <h1 style={styles.header}>Home</h1>
         <h1 style={styles.header}>About</h1>
         <h1 style={styles.header}>Contact</h1>
       </div>
       <div style={styles.right}>
         <button style={styles.button}>+ Join Community</button>
         <img
           src="/images/profile_icon.png"
           alt="profile"
           style={styles.rightImg}
         />
       </div>
     </div>
   );
}
