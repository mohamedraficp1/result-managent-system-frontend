import React from "react";

const Table = () => {
  const data = JSON.parse(sessionStorage.getItem("acesoftcc_dealer_user"));

  const grades = (marks) => {
    return marks === "AB"
      ? "AB"
      : marks >= 90
      ? "A+"
      : marks >= 80
      ? "A"
      : marks >= 70
      ? "B+"
      : marks >= 60
      ? "B"
      : marks >= 50
      ? "C+"
      : marks >= 40
      ? "C"
      : marks >= 30
      ? "D+"
      : marks >= 20
      ? "D"
      : "E";
  };

  const totalPercentage = Math.round((data.total * 100) / 900);
  const totalGrade = grades(totalPercentage);

  return (
    <div className="table-container">
      <h4 className="text-capitalize mb-1">Hi {data.name}</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "end",
        }}
      >
        <img
          src="https://static9.depositphotos.com/1074452/1122/i/950/depositphotos_11222511-stock-photo-passed-stamp-shows-quality-control.jpg"
          alt="Passed Stamp"
          style={{ width: "140px" }}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Malayalam (A)</td>
              <td>{data.malAra}</td>
              <td>{grades(data.malAra)}</td>
            </tr>
            <tr>
              <td>English</td>
              <td>{data.english}</td>
              <td>{grades(data.english)}</td>
            </tr>
            <tr>
              <td>Malayalam (II)</td>
              <td>{data.malII}</td>
              <td>{grades(data.malII)}</td>
            </tr>
            <tr>
              <td>Social Science</td>
              <td>{data.ss}</td>
              <td>{grades(data.ss)}</td>
            </tr>
            <tr>
              <td>Physical Education</td>
              <td>{data.pet}</td>
              <td>{grades(data.pet)}</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>{data.maths}</td>
              <td>{grades(data.maths)}</td>
            </tr>
            <tr>
              <td>Hindi</td>
              <td>{data.hindi}</td>
              <td>{grades(data.hindi)}</td>
            </tr>
            <tr>
              <td>Computer Education</td>
              <td>{data.ce}</td>
              <td>{grades(data.ce)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{data.total}</td>
              <td>{totalGrade}</td>
            </tr>
            <tr>
              <td>Total Percentage</td>
              <td>{totalPercentage}%</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
