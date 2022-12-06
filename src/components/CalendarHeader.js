import React, { useContext } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleResetMonth = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3, alignItems: "center" }}>
      <Button
        onClick={handleResetMonth}
        variant="outlined"
        sx={{ borderRadius: "10px", borderColor: "#5684AE", color: "#5684AE" }}
      >
        Today
      </Button>
      <IconButton onClick={handlePrevMonth} aria-label="left">
        <KeyboardArrowLeftIcon sx={{ color: "#5684AE" }} />
      </IconButton>
      <IconButton onClick={handleNextMonth} aria-label="right">
        <KeyboardArrowRightIcon sx={{ color: "#5684AE" }} />
      </IconButton>
      <h2 style={{ color: "#0F4C81" }}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </Stack>
  );
}
