import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function SmallCalendar({ month }) {
  const { monthIndex, setMonthIndex, selectedDay, setSelectedDay } =
    useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const getDayStyle = (day) => {
    const format = "DD-MM-YY";
    const today = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format);
    if (today === currDay) {
      return {
        background: "#5684AE",
        color: "white",
        borderRadius: "50%",
        padding: "5px",
        cursor: "pointer",
      };
    } else if (slcDay === currDay) {
      return {
        background: "#1565c078",
        color: "#5461a5",
        borderRadius: "50%",
        padding: "5px",
        cursor: "pointer",
      };
    } else {
      return {
        cursor: "pointer",
      };
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <IconButton onClick={handlePrevMonth} aria-label="left">
          <KeyboardArrowLeftIcon sx={{ color: "#5684AE" }} />
        </IconButton>
        <h4 style={{ textAlgin: "center", color: "#0F4C81" }}>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMM YYYY")}
        </h4>
        <IconButton onClick={handleNextMonth} aria-label="right">
          <KeyboardArrowRightIcon sx={{ color: "#5684AE" }} />
        </IconButton>
      </Stack>

      <Grid container sx={{ p: 2 }}>
        <Box sx={{ display: "flex", width: "100%", mb: 1 }}>
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
                  <Grid item sx={{ width: "100%" }} key={idx}>
                    <Box sx={{ padding: "5px" }}>
                      <Typography align="center">
                        <Typography
                          sx={getDayStyle(day)}
                          align="center"
                          variant="caption"
                          onClick={() => {
                            setSelectedDay(day);
                          }}
                        >
                          {day.format("DD")}
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                );
              })}
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}
