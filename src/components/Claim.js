import { useState } from "react";

export const Claim = ({ claim, role, onClick }) => {
  const [selected, setSelected] = useState(false); // state for seletced click

  const handleSelected = () => {
    
  }

  return (
    <div>
      <table>
        <tr>
          <th>Claim ID</th>
          <th>Policy Number</th>
          <th>Claim Type</th>
          <th>Date</th>
          <th>Status</th>
          {role === "ROLE_SUPER_ADMIN" && (
            <>
              <th>More</th>
            </>
          )}
        </tr>
        <tr>
          <td>{claim.id}</td>
          <td>{claim.policyNumber}</td>
          <td>{"Vehicle"}</td>
          <td>{claim.dateOfClaim}</td>
          <td>{claim.status}</td>
          {role === "ROLE_SUPER_ADMIN" && (
            <>
              <td onClick={onClick}>
                <select>
                  <option>PENDING</option>
                  <option>UNDER_REVIEW</option>
                  <option>PAID</option>
                  <option>COMPLETED</option>
                </select>
              </td>
            </>
          )}
        </tr>
      </table>
    </div>
  );
};
