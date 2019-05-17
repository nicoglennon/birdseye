import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const styles = {
  formContainer: {
    height: '100%',
    flexGrow: 1,
    flexDirection: 'column',
    width: '60%',
    margin: 'auto',
  },
  loginHeader:{
    flexGrow: 0,
    width: '100%',
    marginBottom: '50px',
  },
  logoIcon: {
    fontSize: '50px',
    margin: '30px 0px',
  },
  loginTitle: {
    opacity: 0.7,
  },
  loginForm: {
    flexGrow: 1,
  },
  formSection: {
    marginBottom: '15px',
  },
  textField: {
    width: '100%',
    marginTop: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: '#272727',
    },
  },
  signupButton: {
    width: '100%',
    padding: '12px',
  },
  forgotPasswordButton: {
    width: '100%',
  }
}

function LoginForm(props) {
  const { classes } = props
  return (
    <Grid container className={classes.formContainer} spacing={0}>
      <div className={classes.loginHeader}>
        <div className={classes.logoIcon}>
          <TimelapseIcon style={{fontSize: '72px'}}/>
        </div>
        <Typography className={classes.loginTitle} variant="h4" color="inherit" noWrap>
          Welcome to Birdseye!
        </Typography>
      </div>
      <div className={classes.loginForm}>
        <div className={classes.formSection}>
          <label for="email">Email Address</label>
          <TextField
            id="email"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </div>
        <div className={classes.formSection}>
          <label for="password">Password</label>
          <TextField
            id="password"
            className={classes.textField}
            margin="normal"
            type="password"
            variant="outlined"
          />
        </div>
        <div className={classes.formSection}>
        <Link to="/app" style={{ textDecoration: 'none' }}>
          <Button variant="contained" className={classes.loginButton}>
            Sign In
          </Button>
        </Link>
        </div>
        <div className={classes.formSection}>
          <Button variant="outlined" color="inherit" className={classes.signupButton}>
            Create an Account
          </Button>
        </div>
        <div className={classes.formSection}>
          <Button className={classes.forgotPasswordButton}>
            Forgot Password
          </Button>
        </div>
      </div>
    </Grid>
  )
}

export default withStyles(styles)(LoginForm)
