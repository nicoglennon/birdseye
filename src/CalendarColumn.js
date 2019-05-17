import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Task from './Task'
import moment from 'moment'

const styles = {
  sidebarWrapper: {
    height: '100%',
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f4f5',
  },
  sidebarHeader: {
    padding: '20px',
    width: '100%',
    flexGrow: 0,
    backgroundColor: 'white',
  },
  sidebarTitle: {
    color: '#061584',
    marginLeft: '20px',
  },
  dateText: {
    marginLeft: '20px',
    opacity: 0.5,
    fontSize: '1.1em',
  },
  sidebarTabs: {
    width: '100%',
    backgroundColor: 'inherit',
    color: 'black',
  },
  newTaskBox: {
    flexGrow: 0,
    height: '60px',
    backgroundColor:'#f6f8fe',
    padding: '20px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#eff1f8',
    },
  },
  newTaskText: {
    color: '#a290ff',
    textAlign: 'center',
    alignItems: 'middle',
    fontSize: '0.7em',
  },
  completedTasksSeparator: {
    height: '60px',
    flexGrow: 0,
    padding: '20px',
    textAlign: 'center',
    alignItems: 'middle',
    backgroundColor: '#f2f4f5',
  },
  completedTasksSeparatorText: {
    textAlign: 'center',
    alignItems: 'middle',
    opacity: '0.5',
    fontStyle: 'italic',
  },
}

function TaskList(props) {
  return (
    <div style={{flexGrow: 0}}>
      {props.children}
    </div>
  );
}

function CalendarColumn(props) {
  const { classes, tasks, date } = props
  const completedTasks = tasks.filter(task => task.checked)
  const remainingTasks = tasks.filter(task => !task.checked)
  console.log(remainingTasks)
  console.log('completed',completedTasks)

  const remainingTaskList = remainingTasks.map((task, idx) => <Task key={idx} task={task}/>)
  const completedTaskList = completedTasks.map((task, idx) => <Task key={idx} task={task}/>)
  const today = new Date()
  return (
    <Grid container className={classes.sidebarWrapper} spacing={0}>
      <div className={classes.sidebarHeader}>
        <Typography className={classes.sidebarTitle} variant="h4" color="inherit" noWrap>
          {date === null || date.toLocaleDateString() === today.toLocaleDateString() ? 'Today' : 'Tomorrow'}
        </Typography>
        <Typography className={classes.dateText} variant="body1" color="inherit" noWrap>
          {date ? moment(date).format('MMMM Do, YYYY') : moment(new Date()).format('MMMM Do, YYYY')}
        </Typography>
      </div>
      <div className={classes.newTaskBox}>
        <Typography className={classes.newTaskText} variant="body1" color="inherit" noWrap>
          + CREATE TASK
        </Typography>
      </div>
      <TaskList>{remainingTaskList}</TaskList>
      {completedTaskList.length > 0 &&
        <div className={classes.completedTasksSection}>
          <div className={classes.completedTasksSeparator}>
            <Typography className={classes.completedTasksSeparatorText} variant="body1" color="inherit" noWrap>
              ------ Completed ------
            </Typography>
          </div>
          <TaskList>{completedTaskList}</TaskList>
        </div>
      }
    </Grid>
  )
}

export default withStyles(styles)(CalendarColumn)
