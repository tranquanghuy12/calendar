import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getMonth } from "./util";
import SideBar from "./components/SideBar";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import dayjs from "dayjs";
import EventModal from "./components/EventModal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      <Box sx={{ flexGrow: 1, padding: "10px 50px", background: "#80808030" }}>
        <Grid container spacing={2} sx={{ p: 4 }}>
          <Grid
            item
            xs={6}
            md={3}
            sx={{ background: "white", border: "1px solid #80808030" }}
          >
            <SideBar month={currentMonth} />
          </Grid>
          <Grid
            item
            xs={6}
            md={9}
            sx={{ background: "white", border: "1px solid #80808030" }}
          >
            <CalendarHeader />
            <Month month={currentMonth} />
            <EventModal />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
