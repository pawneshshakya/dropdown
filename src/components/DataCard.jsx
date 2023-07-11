import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const DataCard = ({ data, selectedData, handleDelete }) => {
    // to store filtered data
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    setCardData(data.filter((d) => selectedData.includes(d.name)));
  }, [data, selectedData]);
  return (
    <>
      {cardData.map((info) => {
        return (
          <Card sx={{ minWidth: 275 }}>
            <Button
              sx={{ float: "right" }}
              variant="text"
              onClick={() => handleDelete(info.name)}
            >
              X
            </Button>
            <CardContent>
              <Typography variant="h5" component="div">
                User Information
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Name: {info.name}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                UserName: {info.username}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Email: {info.email}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Address:{" "}
                {`${info.address.suite}, ${info.address.street},${info.address.city}, zip: ${info.address.zipcode}, `}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};

export default DataCard;
