import React, { useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GlobalContext from "../context/GlobalContext";
import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckIcon from "@mui/icons-material/Check";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid transparent",
  borderRadius: "5px",
  boxShadow: 24,
  p: 2,
};

const labelColorArr = ["#039be5", "#00897b", "#43a047", "#ff5722", "#ff4081"];

export default function TransitionsModal() {
  const {
    selectedDay,
    openModal,
    setOpenModal,
    dispatchCalEvent,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDiscription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelColorArr[0]);

  useEffect(() => {
    setTitle(selectedEvent?.title);
    setDiscription(selectedEvent?.description);
  }, [selectedEvent]);

  const handleClose = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      labelColor: selectedLabel,
      day: selectedDay.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {selectedEvent && (
                <Tooltip title="Delete">
                  <IconButton
                    onClick={() => {
                      dispatchCalEvent({
                        type: "delete",
                        payload: selectedEvent,
                      });
                      handleClose();
                    }}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Close">
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                value={title}
                name="title"
                id="standard-required"
                label="Title"
                variant="standard"
                sx={{ width: "100%", mb: 5 }}
                onChange={(e) => setTitle(e.target.value)}
              />

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                  <Grid
                    item
                    xs={6}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <AccessTimeIcon color="action" fontSize="small" />
                  </Grid>
                  <Grid item xs={6} md={10}>
                    <Typography sx={{ color: "#5684AE" }}>
                      {selectedDay.format("dddd, MMMM DD")}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    md={2}
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <DescriptionIcon color="action" fontSize="small" />
                  </Grid>
                  <Grid item xs={6} md={10}>
                    <TextField
                      required
                      value={description}
                      id="standard-basic"
                      label="Description"
                      variant="standard"
                      sx={{ width: "100%" }}
                      onChange={(e) => setDiscription(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    md={2}
                    sx={{ display: "flex", alignItems: "flex-end" }}
                  >
                    <BookmarkIcon color="action" fontSize="small" />
                  </Grid>
                  <Grid item xs={6} md={10} sx={{ display: "flex" }}>
                    {labelColorArr.map((lbl, i) => (
                      <div
                        style={{
                          background: `${lbl}`,
                          width: "25px",
                          height: "25px",
                          borderRadius: "50%",
                          margin: "0 7px 0 0",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        key={i}
                        onClick={() => setSelectedLabel(lbl)}
                      >
                        {selectedLabel === lbl && (
                          <CheckIcon sx={{ color: "white" }} fontSize="small" />
                        )}
                      </div>
                    ))}
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
                <Button type="submit">Save</Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
