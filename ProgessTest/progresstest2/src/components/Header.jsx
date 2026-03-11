import React from "react";

function Header() {

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav
      style={{
        background: "#f8f9fa",
        borderBottom: "1px solid #ddd",
        padding: "10px 20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        
        {/* LEFT */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          
          <img
            src="logo.jpg"
            alt="logo"
            width="30"
          />

          <strong>PersonalBudget</strong>

        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

          <span style={{ color: "#555" }}>
            Signed in as <strong>{user?.fullName}</strong>
          </span>

          <button
            onClick={handleLogout}
            style={{
              border: "1px solid red",
              color: "red",
              background: "white",
              padding: "5px 10px",
              borderRadius: "4px"
            }}
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Header;