import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Task from './Task'

const styles = {
  sidebarWrapper: {
    height: '100%',
    width: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  sidebarHeader: {
    padding: '20px',
    width: '100%',
    flexGrow: 0,
  },
  tabs: {
    flexGrow: 0,
    width: '100%',
  },
  sidebarTitle: {
    color: '#061584',
    marginLeft: '20px',
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
}
function TabContainer(props) {
  return (
    <div style={{flexGrow: 1}}>
      {props.children}
    </div>
  );
}

function Sidebar(props) {
  const { classes } = props
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const taskList = props.tasks.map((task, idx) => <Task key={idx} task={task}/>)

  return (
    <Grid container className={classes.sidebarWrapper} spacing={0}>
      <div className={classes.sidebarHeader}>
        <Typography className={classes.sidebarTitle} variant="h4" color="inherit" noWrap>
          Tasks
        </Typography>
      </div>
      <Tabs value={value} onChange={handleChange} className={classes.tabs} indicatorColor={'primary'}>
        <Tab label="All" />
        <Tab label="Projects" />
      </Tabs>
      <div className={classes.newTaskBox}>
        <Typography className={classes.newTaskText} variant="body1" color="inherit" noWrap>
          + CREATE TASK
        </Typography>
      </div>
      { value === 0 && <TabContainer>{taskList}</TabContainer> }
      { value === 1 && <TabContainer>Projects</TabContainer> }
    </Grid>
  )
}

export default withStyles(styles)(Sidebar)
