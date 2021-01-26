import React, { useEffect, useState } from "react";
import { withSnackbar } from "notistack";
import { useSelector } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useShowErrorMessage } from "./hooks/messageHandler";
import useStyles from "./App.styles";
import Address from "./views/app/components/Address";

function App(props) {
  const mockedResult = {
    postcode: "123123",
    city: "London",
    street: "St Julian",
    latitude: 0,
    longitute: 0,
  };

  const showErrorMessage = useShowErrorMessage();
  const classes = useStyles();
  const [postcode, setPostCode] = useState("");
  const [postcodeFulfilled, setPostcodeFulfilled] = useState(true);
  const { notifications, lastResults } = useSelector((state) => state.app);

  const handleClickSearch = () => {
    if (postcode === "") {
      showErrorMessage("Type postcode before search");
      setPostcodeFulfilled(false);
    } else {
      //TODO: call api to search
    }
  };

  useEffect(() => {
    notifications.forEach((messageData) => {
      props.enqueueSnackbar(messageData.message, {
        variant: messageData.variant,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notifications]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Evaluation
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item container xs={12} lg={6}>
              <Grid item container xs={12} alignItems="center">
                <Grid item xs={10}>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    error={!postcodeFulfilled}
                    id="standard-basic"
                    label="Customer Postcode"
                    fullWidth
                    value={postcode}
                    onChange={(event) => {
                      setPostcodeFulfilled(true);
                      setPostCode(event.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" onClick={handleClickSearch}>
                    Search
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Address data={mockedResult} />
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography color="textSecondary">Last results</Typography>
              {lastResults.length === 0 ? (
                <Paper>No previous searchs</Paper>
              ) : (
                lastResults.map((result) => <Address data={result} />)
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default withSnackbar(App);
