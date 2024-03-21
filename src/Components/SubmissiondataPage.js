import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import { Typography } from "@mui/material";

function SubmissiondataPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tuf-backend-113p.onrender.com/tuf/get-sub"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {submissions.length > 0 ? (
        <Typography variant="h3" gutterBottom textAlign="center">
          Submission Data
        </Typography>
      ) : (
        <Typography variant="h3" gutterBottom textAlign="center">
          Loading....
        </Typography>
      )}
      <DataTable submissions={submissions} />
    </div>
  );
}

export default SubmissiondataPage;
