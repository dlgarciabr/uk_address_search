import React, { useEffect } from "react";
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
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import useStyles from "./App.styles";

function App(props) {
  const classes = useStyles();
  const { notifications } = useSelector((state) => state.app);

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
              <Grid item container xs={12}>
                <Grid item xs={10}>
                  <TextField
                    id="standard-basic"
                    label="Customer Postcode"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained">Search</Button>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                      alsdlaskd
                    </Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography color="textSecondary">Last results</Typography>
              <Paper>asdasd</Paper>
              <Paper>asdasd</Paper>
              <Paper>asdasd</Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default withSnackbar(App);
