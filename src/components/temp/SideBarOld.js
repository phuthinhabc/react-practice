import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import {Grid, Typography, Icon, Button} from '@material-ui/core/'
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';

const styles = (theme) => ({
    root: 
    {
        flexGrow: 1,
        maxWidth: 260,
        'background-image': `url(${require('../images/value-productPage-1.jpg')})`,
    },
    SideBarName:
    {
        color: 'white',
        'font-size': 15,
    },
    Logo:
    {
    },
    LogoComponent:
    {
        margin: '0 auto',
        maxWidth: '100%',
    },
    DemoBtn:
    {
        marginBottom: 10,
        paddingBottom: 15,
        paddingTop: 15,
        '&:hover':
        {
        },
    },
});

@inject('myStorage')
@observer
class SideBarBtn extends Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            background: '',
        }
    }
    componentWillMount()
    {
        SideBar.propTypes = {
            classes: PropTypes.object.isRequired,
        };
    }
    myOnClickFunction(id)
    {
        const mySideBarElement = this.props.myStorage;
        for(let i in mySideBarElement.SideBar)
        {
            if (mySideBarElement.SideBar[i].id === id)
            {
                this.setState({background: 'coral'});
            }
        }
    }
    render()
    {
        const { classes } = this.props; 
        return(
            <Button 
                size={'large'} 
                className={classNames(classes.DemoBtn)}
                style={{background: this.state.background}}
                onClick={()=>{this.myOnClickFunction(this.props.id)}}
            >
                <Grid container>
                        <Typography>
                            {this.props.name}
                        </Typography>
                </Grid>
            </Button>
        )
    }
}

const SideBarBtnExport = withStyles(styles)(SideBarBtn);

@inject('myStorage')
@observer
class SideBar extends Component
{
    componentWillMount()
    {
        SideBar.propTypes = {
            classes: PropTypes.object.isRequired,
        };
    }
    componentDidMount()
    {
        loadCSS('https://use.fontawesome.com/releases/v5.1.0/css/all.css', document.querySelector('#insertion-point-jss'),);
    }
    render()
    {
        const mySideBarElement = this.props.myStorage;
        const { classes } = this.props; 
        return(
            <Grid container className={classes.root} direction={'column'} spacing={16} alignItems={'center'}>
                <Grid item className={classes.LogoComponent} container direction={'row'} alignItems={'center'} justify={'center'} spacing={8}>
                    <Grid item>
                        <Icon fontSize={'large'} className={classNames(classes.Logo,'fab fa-react')} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.SideBarName}>CREATIVE TIM</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction={'column'} xs={11}>
                    {mySideBarElement.SideBar.map((obj)=>{return(<SideBarBtnExport key={obj.id} id={obj.id} name={obj.name} />)})}
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SideBar);
