import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import {default as MuiToolbar} from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import SettingsIcon from '@material-ui/icons/Settings'



const styles = theme => ({
  toolbarWrapper: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 0,
    marginRight: theme.spacing.unit * 2,
  },
  options: {
    marginRight: 0,
    flexGrow: 0,
  },
  daysLeftText: {
    padding: '0 5px',
    fontStyle: 'italic',
    opacity: 0.5,
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  upgradeText: {
    padding: '0 5px',
    textDecoration: 'underline',
    marginLeft: theme.spacing.unit,
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#7757ff',
    '&:hover': {
      backgroundColor: '#8365ff',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 4,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settingsIcon: {
    marginLeft: theme.spacing.unit * 2,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
  },
});


function Toolbar(props) {
  const { classes } = props
  return (
    <div className={classes.toolbarWrapper}>
      <AppBar position="static" className={classes.appBar}>
        <MuiToolbar>
          <div className={classes.logo}>
            <TimelapseIcon />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder=""
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow} />
          <Typography className={classes.daysLeftText} variant="body1" color="inherit" noWrap>
            10 days left
          </Typography>
          <Typography className={classes.upgradeText} variant="body1" color="inherit" noWrap>
            Upgrade
          </Typography>
          <div className={classes.settingsIcon}>
            <SettingsIcon />
          </div>
        </MuiToolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Toolbar)
