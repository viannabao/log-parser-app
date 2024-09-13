import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";

export default function FileReaderComponent({ onFileRead }) {
  const [file, setFile] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure FileReader is only used on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file && isClient) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContent = e.target.result;
        onFileRead(fileContent);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Button variant="outlined" component="label">
        Choose File
        <input type="file" accept=".log" hidden onChange={handleFileChange} />
      </Button>
      <Typography mt={2}>{file ? file.name : "No file selected"}</Typography>
      {file && (
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Parse
        </Button>
      )}
    </Box>
  );
}