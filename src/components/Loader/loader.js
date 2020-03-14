import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const Loader = props => {
  // console.log("Loading");

  const classes = useStyles();

  return (
    <div className={classes.root}>
      Please wait....
      <LinearProgress />
    </div>
  );
};
export default Loader;
