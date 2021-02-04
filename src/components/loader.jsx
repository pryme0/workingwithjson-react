import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    
    display: 'flex',
    paddingLeft:'200'
  },
}));

const spinner = function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={ {margin:'0 auto'}} size={300} />
    </div>
  );
}
export default spinner
