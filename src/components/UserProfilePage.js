import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid'

import TemplateContent from './TemplateContent'
import MyTabs from './temp/mytabs';
import { Typography } from '@material-ui/core';

class headForm extends Component
{
    render()
    {
        return(
            <Grid container style={{color: 'white', lineHeight: 0, paddingLeft: 10}} direction={'column'} alignItems={'flex-start'}>
                <p>Hello</p>
                <p>This is the content</p>
            </Grid>
        )
    }
}

class UserProfile extends Component
{
    render()
    {
        return(
            <Grid container direction={'row'} style={{backgroundColor: '#EEEEEE', paddingTop: 56}}>
                <Grid item xs={true}>
                    <TemplateContent headerContent={MyTabs} mainContent={'hello'} colorHeader={'purple'}/>
                </Grid>
                <Grid item xs={true}>
                    <TemplateContent headerContent={MyTabs} mainContent={'hello'} colorHeader={'purple'}/>
                </Grid>
                {/* <TemplateContent headerContent={MyTabs} mainContent={'hello'} colorHeader={'purple'}/> */}
            </Grid>
        )
    }
}

export default UserProfile;