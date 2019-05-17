import React from 'react'
import Grid from '@material-ui/core/Grid'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PollIcon from '@material-ui/icons/Poll'

const styles = {
  taskWrapper: {
    padding: '15px 5px 15px 0px',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #f2f4f5',
  },
  checkbox: {
    flexGrow: 0,
  },
  taskTextWrapper: {
    flexGrow: 1,
  },
  otherStuff: {
    opacity: 0.6,
    flexGrow: 0,
    marginRight: '5px',
  },
  taskHeader: {
    opacity: 0.6,
    fontSize: '0.8em',
  },
  taskText: {
    fontSize: '1.1em',
  },
  taskDue: {
    fontSize: '1.1em',
  },
  todayText: {
    fontSize: '0.8em',
  },
  timeText: {
    fontSize: '0.7em',
  }
}

function Task(props) {
  const { classes, task } = props
  return (
      <Grid container className={classes.taskWrapper} spacing={0}>
          <Checkbox checked={task.checked} className={classes.checkbox} label={task.text}/>
          <Grid key={0} item className={classes.taskTextWrapper}>
            <Typography className={classes.taskHeader} variant="body1" color="inherit" noWrap>
              {task.project}
            </Typography>
            <Typography className={classes.taskText} variant="body1" color="inherit" noWrap>
              {task.text}
            </Typography>
          </Grid>
          <Grid key={1} item className={classes.otherStuff}>
            <Typography className={classes.todayText} variant="body1" color="inherit" noWrap>
              Today
            </Typography>
            <Typography className={classes.timeText} variant="body1" color="inherit" noWrap>
              {task.due.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </Typography>
          </Grid>
          <div className={classes.trelloIcon}>
            <PollIcon />
          </div>
      </Grid>
  )
}

export default withStyles(styles)(Task)
