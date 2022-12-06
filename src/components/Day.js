import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";

export default function Day({ day }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    openModal,
    setOpenModal,
    selectedDay,
    setSelectedDay,
    savedEvents,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getDayStyle = () => {
    const format = "DD-MM-YY";
    const today = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format);
    if (today === currDay) {
      return {
        background: "#5684AE",
        color: "white",
        borderRadius: "50%",
        padding: "8px",
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
    <Box sx={{ padding: "10px 0 0 0" }}>
      <Typography align="center">
        <Typography sx={getDayStyle()} align="center" variant="caption">
          {day.format("DD")}
        </Typography>
      </Typography>
      <Box sx={{ mt: 2 }}>
        {dayEvents.map((evt, idx) => (
          <Typography
            sx={{
              fontSize: "0.75rem",
              background: `${evt.labelColor}`,
              color: "white",
              marginBottom: "1px",
              cursor: "pointer",
              padding: "3px",
              borderRadius: "3px",
            }}
            key={idx}
            onClick={() => setSelectedEvent(evt)}
          >
            {evt.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
