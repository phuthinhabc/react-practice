import React, {Component} from 'react';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon'
import PropTypes from 'prop-types';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {observer, inject} from 'mobx-react';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    '&:hover':
    {
      background: 'none',
    }
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  }
});

class SideBarHeader extends Component
{
  componentDidMount() 
  {
    loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css',document.querySelector('#insertion-point-jss'),);
    SideBarHeader.propTypes = 
    {
      classes: PropTypes.object.isRequired,
    };
  }
  render()
  {
    const { classes } = this.props;
    return(
        <ListItem button={true} disableRipple={true} className={classes.root}>
          <ListItemIcon>
            <Icon className={classNames('fab fa-react')} />
          </ListItemIcon>
          <ListItemText primary="DEMO TEMPLATE" />
        </ListItem>
    )
  }
};
export const SideBarHeaderComponent= withStyles(styles)(SideBarHeader);

class SideBarItemNoChildren extends Component
{
  render()
  {
    return(
      <ListItem button component={Link} to={this.props.Url} selected={this.props.selected}>
        <ListItemIcon> 
          {this.props.icon}
        </ListItemIcon>
        <ListItemText primary={this.props.name} />
      </ListItem>
    )
  }
}
export const SideBarItemNoChildrenComponent = SideBarItemNoChildren;

@inject('mySidebarStorage')
@observer
class SideBarItem extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      // open: true,
    }
  }
  componentDidMount()
  {
    SideBarItem.propTypes = 
    {
      classes: PropTypes.object.isRequired,
    };
  }
  handleClickCollapse = (id) => {
    console.log(id)
    this.setState(state => ({ open: !state.open }));
  };
  render()
  {
    const { classes } = this.props;
    const Storage = this.props.mySidebarStorage;
    const active = this.props.active;
    return(
      <div>
        {Storage.SideBar.map((obj)=>{
            if (obj.hasChildren === false)
            {
              return(
                <SideBarItemNoChildrenComponent key={obj.id} Url={obj.Url} icon={obj.icon} name={obj.name} selected={active === obj.Url ? true : false}/>
              )
            }
            return(
                <div key={obj.id}>
                    <ListItem button onClick={()=>{return(this.handleClickCollapse(obj.id))}}>
                        <ListItemIcon>
                        {obj.icon}
                        </ListItemIcon>
                        <ListItemText inset primary={obj.name} />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout={'auto'} unmountOnExit>
                        <List component="div" disablePadding>
                        {obj['children'].map((obj)=>{return(
                            <ListItem key={obj.id} button className={classes.nested} component={Link} to={obj.Url}>
                              <ListItemIcon>
                                  {obj.icon}
                              </ListItemIcon>
                              <ListItemText inset primary={obj.name} />
                            </ListItem>
                        )})}
                        </List>
                    </Collapse>
                </div>
                )
            })}
      </div>
    )
  }
}

export const SideBarItemComponent= withStyles(styles)(SideBarItem);
