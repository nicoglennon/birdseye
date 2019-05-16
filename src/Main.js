import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from './Toolbar'

const styles = {
  gridContainer: {
    height: '100%',
    flexGrow: 1,
    alignItems: 'flex-start',
  },
  toolbar: {

  },
  body: {
    flexGrow: 1,
  },
  daysContainer: {
    flexGrow: 1,
    height: '100%',
    backgroundColor: '#f2f4f5',
  }
}

function Main(props) {
  const { classes } = props
  return (
      <Grid container className={classes.gridContainer} spacing={0}>
          <Grid key={0} item xs={12} className={classes.toolbar}>
            <Toolbar />
          </Grid>
          <Grid key={1} item xs={12} className={classes.daysContainer}>
            Inside Main!
          </Grid>
      </Grid>
  )
}

export default withStyles(styles)(Main)
