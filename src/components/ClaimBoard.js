import "../styles/claimboard.css";

const claimData = [
  {
    id: "26526278",
    policyNumber: "567657822",
    claimType: ["Motor", "House", "Fire"],
    date: Date.now(),
    status: ["Approved", "Declined", "Pending"],
    mark: "...",
  },
];

export const ClaimBoard = () => {
  return (
    <div>
      <nav>
        <h1 className="claim__header__text">Insurance Claim Board</h1>
      </nav>
      <table>
        <tr>
          <th>Claim ID</th>
          <th>Policy Number</th>
          <th>Claim Type</th>
          <th>Date</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          {claimData.map((claim) => {
            return (
              <>
                <td>{claim.id}</td>
                <td>{claim.policyNumber}</td>
                <td>{claim.claimType[0]}</td>
                <td>{claim.date}</td>
                <td>{claim.status[0]}</td>
                <td>{claim.mark}</td>
              </>
            );
          })}
        </tr>
      </table>
    </div>
  );
};
