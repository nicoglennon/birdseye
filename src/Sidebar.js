import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1,
    height: '100%',
    position: 'fixed',
    width:'100%',
    top:'0px',
    left:'0px',
    zIndex:1000,
  },
  gridContainer: {
    height: '100%',
    flexGrow: 1,
  },
  column: {
    flexGrow: 1,
  },
}

function Sidebar(props) {
  const { classes } = props
  return (
    <Grid container className={classes.gridContainer} spacing={0}>
        <Grid key={0} item xs={4} sm={3} className={classes.column}>
          Inside Sidebar!
        </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Sidebar)
