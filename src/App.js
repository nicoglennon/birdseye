import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Sidebar from './Sidebar'
import Main from './Main'

const today = new Date()
const todayCopy = new Date()
let tomorrow = todayCopy
tomorrow.setDate(todayCopy.getDate()+1);

const tasks = [
  {
    id: 0,
    project: 'Birdseye - Application',
    text: 'V1 Interview Scripts',
    checked: false,
    due: null,
  },
  {
    id: 1,
    project: 'Birdseye - Application',
    text: 'Review Scripts',
    checked: false,
    due: null,
  },
  {
    id: 2,
    project: 'Birdseye - Application',
    text: 'Customer Map',
    checked: false,
    due: null,
  },
  {
    id: 3,
    project: 'Birdseye - Application',
    text: 'V1 DOB to web',
    checked: false,
    due: null,
  },
  {
    id: 4,
    project: 'Birdseye - Application',
    text: 'Order Business Cards',
    checked: false,
    due: null,
  },
  {
    id: 5,
    project: 'Birdseye - Application',
    text: 'Schedule Dribble Post',
    checked: false,
    due: null,
  },
  {
    id: 6,
    project: 'Birdseye - Application',
    text: 'Send Invites',
    checked: false,
    due: null,
  },
  {
    id: 7,
    project: 'Birdseye - Application',
    text: 'Fix UX Issues',
    checked: false,
    due: today,
  },
  {
    id: 8,
    project: 'Birdseye - Application',
    text: 'Adjust Final Filtering',
    checked: false,
    due: today,
  },
  {
    id: 9,
    project: 'Birdseye - Application',
    text: 'Title',
    checked: true,
    due: today,
  },
  {
    id: 10,
    project: 'Oceanair - Application',
    text: 'UX & Wireframing',
    checked: false,
    due: tomorrow,
  },
  {
    id: 11,
    project: 'Oceanair - Application',
    text: 'Prototype Creation',
    checked: false,
    due: tomorrow,
  },
]

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
            <Sidebar tasks={tasks}/>
          </Grid>
          <Grid key={1} item xs={8} sm={9} className={classes.column}>
            <Main tasks={tasks}/>
          </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(App)
