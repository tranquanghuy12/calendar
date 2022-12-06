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
import SmallCalendar from "./SmallCalendar";

export default function SideBar({ month }) {
  return (
    <Box>
      <SmallCalendar month={month} />
    </Box>
  );
}
