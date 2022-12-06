import React, { Fragment, useContext } from "react";
import Day from "./Day";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GlobalContext from "../context/GlobalContext";

export default function Month({ month }) {
  const { setOpenModal, setSelectedDay } = useContext(GlobalContext);
  return (
    <Grid container>
      <Box sx={{ display: "flex", width: "100%", mb: 2 }}>
        {month[0].map((day, i) => (
          <Grid
            item
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            key={i}
          >
            {day.format("ddd")}
          </Grid>
        ))}
      </Box>

      {month.map((row, i) => {
        return (
          <Box sx={{ display: "flex", width: "100%" }} key={i}>
            {row.map((day, idx) => {
              return (
                <Grid
                  item
                  sx={{
                    width: "100%",
                    border: "1px solid #80808030",
                    height: "130px",
                  }}
                  key={idx}
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedDay(day);
                  }}
                >
                  <Day day={day} key={idx} />
                </Grid>
              );
            })}
          </Box>
        );
      })}
    </Grid>
  );
}
