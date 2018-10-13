import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import {observer, inject} from 'mobx-react';

import Dashboard from './DashboardPage';
import UserProfile from './UserProfilePage';
import TableList from './TableListPage';

import Grid from '@material-ui/core/Grid';
import Sidebar from './SideBar';
import Hidden from '@material-ui/core/Hidden';

import NotificationBar from '../components/NotificationBar';

@inject('mySidebarStorage')
@observer
class Container extends Component
{
    constructor(props)
    {
        super(props)
        this.state=
        {
            active: '/Dashboard',
        }
    }
    static propTypes = 
    {
        location: propTypes.object.isRequired
    }
    componentDidUpdate(prevProps) 
    {
        if (this.props.location !== prevProps.location) 
        {
            this.setState({active: prevProps.history.location.pathname})
        }
    }
    render()
    {
        return(
            <Grid container item direction={'row'} style={{maxWidth: 1440, margin: 'auto'}}>
                <Hidden smDown={true}>
                    <Grid item xs={true} style={{maxWidth: 256}}>
                        <Sidebar active={this.state.active}/>
                    </Grid>
                </Hidden>
                <Grid container item xs={true} direction={'column'}>
                    <Grid item xs={true}>
                        <NotificationBar active={this.state.active}/>
                    </Grid>
                    <Grid item xs={true}>
                        <Route exact path="/" component={Dashboard}/>
                        <Route path="/Dashboard" component={Dashboard} />
                        <Route path="/UserProfile" component={UserProfile} />
                        <Route path="/TableList" component={TableList} />
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default withRouter(Container);