import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { SideBarItemComponent, SideBarHeaderComponent } from './SideBarElement';

const styles = {
  root:
  {
    'background-image': `url(${require('../images/value-productPage-1.jpg')})`,
  }
};

class SideBar extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root} style={{height: '100vh', position: 'fixed'}}>
        <div
          tabIndex={0}
          role="button"
        >
          <div>
            <List><SideBarHeaderComponent/></List>
            <Divider />
            <List><SideBarItemComponent active={this.props.active}/></List>
          </div>          
        </div>
      </List>
    );
  }
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
