import React, { useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  Box,
  Chip,
} from "@mui/material";
import FileReader from "../components/FileReader";
import { parseLogFile } from "../utils/parseLogFile";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileRead = (fileContent) => {
    setLoading(true);
    try {
      // Parse the file content
      const parsedResult = parseLogFile(fileContent);
      setResult(parsedResult);
    } catch (error) {
      console.error("Error parsing file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Log File Parser
      </Typography>
      <FileReader onFileRead={handleFileRead} />
      {loading && <CircularProgress sx={{ mt: 4 }} />}
      {result && (
        <Box
          sx={{
            border: "1px gray solid",
            borderRadius: 5,
            mt: 4,
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Chip label="Unique IPs" color="secondary" variant="outlined"/>
          <List>
            <ListItem>
              <Typography variant="body1">{result.uniqueIPCount}</Typography>
            </ListItem>
          </List>
          <Chip label="Top 3 URLs" color="secondary" variant="outlined" />
          <List>
            {result.topUrls.map(([url, count], index) => (
              <ListItem key={index}>
                <Typography variant="body1">
                  <strong>{url}</strong> {count} visits
                </Typography>
              </ListItem>
            ))}
          </List>
          <Chip label="Top 3 Active IPs" color="secondary" variant="outlined" />
          <List>
            {result.topIPs.map(([ip, count], index) => (
              <ListItem key={index}>
                <Typography variant="body1">
                  <strong>{ip}</strong> {count} requests
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
}
