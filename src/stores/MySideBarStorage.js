import {observable} from 'mobx';
import React, { Component } from 'react';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/PeopleOutlined';
import TableChartIcon from '@material-ui/icons/TableChartOutlined';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarBorder from '@material-ui/icons/StarBorder';
import GamepadIcon from '@material-ui/icons/Gamepad';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';


class Storage extends Component
{
    @observable SideBar = [
        {
            id: 1,
            hasChildren: false,
            name: 'Dashboard',
            icon: (<DashboardIcon/>),
            Url: '/Dashboard',
            componentName: 'Dashboard',
            style:
            {
                background: '',
            }
        },
        {
            id: 2,
            hasChildren: false,
            name: 'User Profile',
            icon: (<SupervisedUserCircleIcon/>),
            Url: '/UserProfile',
            componentName: 'UserProfile',
            style:
            {
                background: '',
            }
        },
        {
            id: 3,
            hasChildren: false,
            name: 'Table List',
            icon: (<TableChartIcon/>),
            Url: '/TableList',
            componentName: 'Table List',
            style:
            {
                background: '',
            }
        },
        {
            id: 4,
            hasChildren: true,
            name: 'Inbox',
            icon: (<InboxIcon/>),
            Url: '/Inbox',
            componentName: 'Inbox',
            style:
            {
                background: '',
            },
            children:
            [
                {
                    id: 1,
                    name: 'Starred',
                    icon: (<StarBorder />),
                    Url: '/Starred',
                    componentName: 'Starred',
                },
                {
                    id: 2,
                    name: 'Icons',
                    icon: (<GamepadIcon />),
                    Url: '/Icons',
                    componentName: 'Icons',
                },
                {
                    id: 3,
                    name: 'GPS',
                    icon: (<GpsFixedIcon />),
                    Url: '/GPS',
                    componentName: 'GPS',
                },
            ]
        },
    ];
}

const store = new Storage();

export default store;