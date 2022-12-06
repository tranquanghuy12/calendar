import React, { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  selectedDay: null,
  setSelectedDay: (day) => {},
  openModal: false,
  setOpenModal: (bool) => {},
  savedEvents: [],
  dispatchCalEvent: ({ type, payload }) => {},
  selectedEvent: null,
  setSelectedEvent: () => {},
});

export default GlobalContext;
