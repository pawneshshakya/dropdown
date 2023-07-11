import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import Dropdown from "./components/Dropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import DataCard from "./components/DataCard";

function App() {
  // To Store API data
  const [data, setData] = useState([]);
  // to store selected user names
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  // to fetch user data from API
  const getData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  // handle multiselect dropdown
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedData(typeof value === "string" ? value.split(",") : value);
  };

  // deleted data when click on card remove button
  const handleDelete = (name) => {
    setSelectedData((prev) => prev.filter((p) => p !== name));
  };
  return (
    <Box>
      <Dropdown {...{ data, selectedData, handleChange }} />
      {data.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", p: "16px" }}>
          <DataCard {...{ data, selectedData, handleDelete }} />
        </Box>
      )}
    </Box>
  );
}

export default App;
