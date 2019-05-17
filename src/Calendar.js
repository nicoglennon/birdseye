import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import CalendarColumn from './CalendarColumn'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  gridListWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    height: '100%',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  gridList: {
    height: '100%',
    width: '100%',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  calendarColumn: {
    padding: '20px !important',
    height: '100%',
  }
}

function Calendar(props) {
  const { classes, tasks } = props
  const today = new Date()
  let tomorrow = new Date()
  tomorrow.setDate(today.getDate()+1);
  const todayTasks = tasks.filter( task => task.due && task.due.toLocaleDateString() === today.toLocaleDateString())
  const tomorrowTasks = tasks.filter( task => task.due && task.due.toLocaleDateString() === tomorrow.toLocaleDateString())


  return (
    <div className={classes.gridListWrapper}>
      <GridList className={classes.gridList} cols={1.75} cellHeight={'100%'} >
        <GridListTile className={classes.calendarColumn} key={0}>
          <CalendarColumn tasks={todayTasks} date={today} />
        </GridListTile>
        <GridListTile className={classes.calendarColumn} key={1}>
          <CalendarColumn tasks={tomorrowTasks} date ={tomorrow}/>
        </GridListTile>
      </GridList>
    </div>
  )
}

export default withStyles(styles)(Calendar)
