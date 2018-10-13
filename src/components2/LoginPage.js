import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import AccessibilityIcon from '@material-ui/icons/Accessibility';

const styles= theme =>({
  root:
  {
    height: '100vh'
  },
  textField:
  {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    marginTop: 0,
  },
  button:
  {
    margin: theme.spacing.unit,
  },
  icon: {
    width: '100%',
    height: '100%',
    marginTop: 15
  },
  typography:
  {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20
  }
})

class LoginPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      name: '',
    }
  }
  componentWillUnmount()
  {
    LoginPage.PropTypes =
    {
      classes: PropTypes.object.isRequired
    }
  }
  handleChange = name => event => 
  {
    this.setState({
      [name]: event.target.value,
    });
  };
  render()
  {
    const {classes} = this.props;
    return(
      <Grid
        container
        className={classes.root}
        alignItems={'center'}
        justify={'center'}
      >
        <Paper elevation={10}>
          <form className={classes.container} noValidate autoComplete="off">
            <Grid container direction = {'column'}>
              <Typography className={classes.typography}>Hello User</Typography>
              <Icon className={classes.icon}>
                <AccessibilityIcon style={{ fontSize: 70 }}/>
              </Icon>
              <TextField
                id="standard-name"
                label="User name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="standard-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
            <Button variant="contained" color="primary" className={classes.button}>
              Login
            </Button>    
          </form>
        </Paper>  
      </Grid>
    )
  }
}

export default withStyles(styles)(LoginPage);