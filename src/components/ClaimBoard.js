import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Claim } from "./Claim";
import api from "../api/api";
import "../styles/claimboard.css";

export const ClaimBoard = () => {
  const navigate = useNavigate();
  // to get payload from submitted form
  const [claimData, setClaimData] = useState([]);

  useEffect(() => {
    if (role === "ROLE_SUPER_ADMIN") {
      api.get("/api/vi/test-claims").then((res) => {
        console.log(res.data.payload);
        setClaimData(res.data.payload);
      });
    } else {
      api.get("/api/vi/test-claims/user").then((res) => {
        console.log(res.data.payload);
        setClaimData(res.data.payload);
      });
    }
  }, []);

  const role = localStorage.getItem("role");

  const handleClick = () => {
    console.log("Clicked");
  };

  const handleAddClaim = () => {
    navigate("/form");
  };

  const handleSelector = () => {

  };
  
  const handleUpdateStatus = () => {

  };

  return (
    <div>
      <nav>
        <h1 className="claim__header__text">Insurance Claim Board</h1>
        {role !== "ROLE_SUPER_ADMIN" && (
          <button onClick={handleAddClaim}>Add Claim</button>
        )}
      </nav>
      {claimData.map((claim) => {
        return (
          <Claim
            key={claim.claimNumber}
            claim={claim}
            role={role}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
