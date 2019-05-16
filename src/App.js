import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
import Main from './Main'

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
    height: '100%',
    flexGrow: 1,
  },
  column: {
    flexGrow: 1,
  },
}

function App(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer} spacing={0}>
          <Grid key={0} item xs={4} sm={3} className={classes.column}>
            <Sidebar />
          </Grid>
          <Grid key={1} item xs={8} sm={9} className={classes.column}>
            <Main />
          </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(App)
