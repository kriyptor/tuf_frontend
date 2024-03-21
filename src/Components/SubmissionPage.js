import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  Typography,
} from "@mui/material";

const SubmissionPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    codeLanguage: "",
    sourceCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://tuf-backend-113p.onrender.com/tuf/post-sub",
        formData
      );
      // Check if response status is ok
      if (response.status === 201) {
        alert("Form submitted successfully");
        setFormData({
          userName: "",
          codeLanguage: "",
          sourceCode: "",
        });
      } else {
        throw new Error(`Failed to submit form: ${response.data.message}`);
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error submitting form:", error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form>
        <TextField
          variant="filled"
          name="userName"
          label="Username"
          value={formData.userName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl variant="filled" fullWidth margin="normal">
          <InputLabel id="code-language-label">Code Language</InputLabel>
          <Select
            labelId="code-language-label"
            id="code-language"
            name="codeLanguage"
            value={formData.codeLanguage}
            onChange={handleChange}
          >
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="c++">C++</MenuItem>
          </Select>
        </FormControl>
        <textarea
          rows={10}
          placeholder="Enter your source code here"
          style={{
            width: "97%",
            marginTop: "20px",
            padding: "10px",
            resize: "vertical",
          }}
          name="sourceCode"
          value={formData.sourceCode}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      <Typography variant="h6" gutterBottom textAlign="center" marginTop={3}>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/kriyptor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shivanshu Kashyap
        </a>
      </Typography>
    </Box>
  );
};

export default SubmissionPage;
