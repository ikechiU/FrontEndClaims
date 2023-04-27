import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { notify, notifyError, notifySuccess } from "../notification/Tostify";
import queryString from "query-string";
import { Claim } from "./Claim";
import api from "../api/api";
import "../styles/claimboard.css";

export const ClaimBoard = () => {
  const navigate = useNavigate();

  // to get payload from submitted form
  const [claimData, setClaimData] = useState([]);
  const [select, setSelect] = useState("PENDING");

  useEffect(() => {
    if (role === "ROLE_SUPER_ADMIN") {
      api
        .get("/api/vi/test-claims")
        .then((res) => {
          console.log(res.data.payload);
          setClaimData(res.data.payload);
        })
        .catch((err) => {
          console.log(err);
          notifyError(err.response.data.message);
        });
    } else {
      api
        .get("/api/vi/test-claims/user")
        .then((res) => {
          console.log(res.data.payload);
          setClaimData(res.data.payload);
        })
        .catch((err) => {
          console.log(err);
          notifyError(err.response.data.message);
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

  const handleSelector = (e, claim) => {
    e.preventDefault();
    const theSelectedValule = e.target.value;
    if (select !== theSelectedValule) {
      handleUpdateStatus(theSelectedValule, claim);
    }
  };

  const handleUpdateStatus = (theSelectedValule, claim) => {
    console.log(theSelectedValule);
    console.log(claim.claimNumber);
    const obj = {
      claimStatus: theSelectedValule,
    };
    const queryParams = queryString.stringify({ obj });
    api
      .post(
        `/api/vi/test-claims/${
          claim.claimNumber
        }/update-claim?claimStatus=${theSelectedValule}&adminClaimNotes=${null}`
      )
      .then((res) => {
        console.log(res.data.payload);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        notifyError(err.response.data.message);
      });
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
            handleChange={handleSelector}
            selectedValue={setSelect}
          />
        );
      })}
    </div>
  );
};
