import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import NavBar from '../components/NavBar';
import { SideBarItemNoChildrenComponent } from '../components/SideBarElement';

@inject('mySidebarStorage')
@observer
class NotificationBar extends Component
{
    render()
    {
        const Storage = this.props.mySidebarStorage;
        return(
            <Grid container>
                <Grid item xs={true} style={{maxWidth: 300}}>
                    {Storage.SideBar.map((obj)=>{
                        if (this.props.active === obj.Url)
                        return(
                            <SideBarItemNoChildrenComponent key={obj.id} Url={obj.Url} icon={obj.icon} name={obj.name}/>
                        )
                    })}
                </Grid>
                <Grid item xs={true}>
                    <Hidden smUp={true}>
                        <NavBar/>
                    </Hidden>
                    <Hidden xsDown={true}>
                        Hello
                    </Hidden>
                </Grid>
            </Grid>
        )
    }
}

export default NotificationBar;