import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const tableStyle = {
  minWidth: 650,
};

const headerStyle = {
  fontWeight: "bold",
  backgroundColor: "#3f51b5",
  color: "#fff",
};

const cellStyle = {
  padding: "10px 20px",
};

const DataTable = ({ submissions }) => {
  return (
   <Box
    sx={{
      padding: "20px 0",
    }}
   >
     <TableContainer component={Paper}>
      <Table style={tableStyle} aria-label="submission table">
        <TableHead>
          <TableRow>
            <TableCell style={{ ...headerStyle, ...cellStyle }}>
              Username
            </TableCell>
            <TableCell style={{ ...headerStyle, ...cellStyle }}>
              Code Language
            </TableCell>
            <TableCell style={{ ...headerStyle, ...cellStyle }}>
              Source Code
            </TableCell>
            <TableCell style={{ ...headerStyle, ...cellStyle }}>
              Timestamp
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((submission, index) => (
            <TableRow key={index}>
              <TableCell style={cellStyle}>{submission.userName}</TableCell>
              <TableCell style={cellStyle}>{submission.codeLanguage}</TableCell>
              <TableCell style={cellStyle}>
                {submission.sourceCode.slice(0, 100)}...
              </TableCell>
              <TableCell style={cellStyle}>
                {new Date(submission.createdAt).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Box>
  );
};

export default DataTable;
