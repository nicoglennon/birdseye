import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import Pattern from './pattern.jpg'

const styles = {
  root: {
    flexGrow: 1,
    height: '100%',
    position: 'fixed',
    width:'100%',
    top:'0px',
    left:'0px',
    zIndex:1000,
    boxSizing: 'border-box',
  },
  gridContainer: {
    padding: '5px',
    height: '100%',
    flexGrow: 1,
    backgroundColor: '#e5e5e5',
  },
  leftColumn: {
    backgroundColor: 'white',
  },
  rightColumn: {
    flexGrow: 1,
    backgroundImage: `url(${Pattern})`,
  },
}

function Login(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={0}>
          <Grid key={0} item xs={12} sm={5} className={classes.leftColumn}>
            <LoginForm />
          </Grid>
          <Grid key={1} item xs={0} sm={7} className={classes.rightColumn}>
            <div className={classes.patternBackground}></div>
          </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Login)
