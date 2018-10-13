import {observable} from 'mobx';
import { Component } from 'react';

import FilterNoneIcon from '@material-ui/icons/FilterNone';
import WarningIcon from '@material-ui/icons/WarningRounded';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import ReplayIcon from '@material-ui/icons/Replay';


class Storage extends Component
{
    @observable Overall = [
        {
            id: 1,
            tagColor: 'FC932A',
            tagIcon: FilterNoneIcon,
            subTitle: 'Used Space',
            info: '49/50',
            measure: 'GB',
            colorDownIcon: 'error',
            downIcon: WarningIcon,
            downContent: 'GET MORE SPACE',
            btnDisabled: false,
        },
        {
            id: 2,
            tagColor: '55A252',
            tagIcon: HomeIcon,
            subTitle: 'Revenue',
            info: '34,245',
            measure: 'USD',
            colorDownIcon: 'inherit',
            downIcon: CalendarTodayIcon,
            downContent: 'Last 24 hours',
            btnDisabled: true,
        },
        {
            id: 3,
            tagColor: 'EE4748',
            tagIcon: ErrorOutlineIcon,
            subTitle: 'Fixed Issues',
            info: '75',
            measure: '',
            colorDownIcon: 'inherit',
            downIcon: ZoomInIcon,
            downContent: 'Tracked from Github',
            btnDisabled: true,
        },
        {
            id: 4,
            tagColor: '1FB8C6',
            tagIcon: AccessibilityIcon,
            subTitle: 'Followers',
            info: '245',
            measure: '+',
            colorDownIcon: 'inherit',
            downIcon: ReplayIcon,
            downContent: 'Just Updated',
            btnDisabled: true,
        },
        // {
        //     id: 5,
        //     tagColor: '1FB8C6',
        //     tagIcon: AccessibilityIcon,
        //     subTitle: 'Followers',
        //     info: '245',
        //     measure: '+',
        //     colorDownIcon: 'inherit',
        //     downIcon: ReplayIcon,
        //     downContent: 'Just Updated',
        //     btnDisabled: true,
        // },
        // {
        //     id: 6,
        //     tagColor: '1FB8C6',
        //     tagIcon: AccessibilityIcon,
        //     subTitle: 'Followers',
        //     info: '245',
        //     measure: '+',
        //     colorDownIcon: 'inherit',
        //     downIcon: ReplayIcon,
        //     downContent: 'Just Updated',
        //     btnDisabled: true,
        // },
        // {
        //     id: 7,
        //     tagColor: '1FB8C6',
        //     tagIcon: AccessibilityIcon,
        //     subTitle: 'Followers',
        //     info: '245',
        //     measure: '+',
        //     colorDownIcon: 'inherit',
        //     downIcon: ReplayIcon,
        //     downContent: 'Just Updated',
        //     btnDisabled: true,
        // },
    ];
}

const store = new Storage();

export default store;