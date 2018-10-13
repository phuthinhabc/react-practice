import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import TableContent from './DashboardTable';
import TemplateContent from './TemplateContent';

const styles = theme => ({
    DashboardOverallroot:
    {
        margin: 'auto',
    }
});

class TableHeader extends Component
{
    render()
    {
        return(
            <Paper style={{background: '#FC932A', paddingTop: 20, paddingBottom: 20}}>
                <Grid container direction={'column'} alignItems={'flex-start'} style={{paddingLeft: 10}}>
                    <Typography style={{color: 'white', lineHeight: 3}}>
                        Employees Stats
                    </Typography>
                    <Typography style={{color: 'grey', lineHeight: 3}}>
                        New employees on 15th September, 2016
                    </Typography>
                </Grid>
            </Paper>
        )
    }
}

@inject('myDashboardStorage')
@observer
class DashboardOverall extends Component
{
    componentDidMount()
    {
        DashboardOverall.propTypes=
        {
            classes: propTypes.object.isRequired
        };
    }

    render()
    {
        const classes=this.props;
        const Storage = this.props.myDashboardStorage;
        return(
            <Grid item container className={classes.DashboardOverallroot} xs={11} spacing={24}>
                {Storage.Overall.map((obj)=>{
                    return(
                        <Grid key={obj.id} item xs={true} style={{minWidth: 220, minHeight: 220}}>
                            <Card square={false}>
                                <Grid container spacing={0} style={{minHeight: 120}}>
                                    <Grid container item xs={true} style={{minWidth: 100}} justify={'center'} alignItems={'center'}>
                                    </Grid>
                                    <Grid container item xs={true} style={{paddingRight: "4%"}} alignItems={'center'} justify={'flex-end'}>
                                        <Typography variant="title" style={{color: 'grey', textAlign: 'right', paddingRight: 5}}>
                                            {obj.subTitle}
                                        </Typography>
                                        <Typography >
                                            <span style={{color: 'black', fontSize: 20, paddingRight: 5}}>{obj.info}</span>
                                            <span style={{color: 'black', textAlign: 'end', fontWeight: 'bold', fontSize: 20, paddingRight: 5}}>{obj.measure}</span>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Divider/>
                                <Button component={Link} to={"#"} style={{fontSize: 12, width: '100%', textTransform: 'none'}} disabled={obj.btnDisabled}>
                                    <Icon color={`${obj.colorDownIcon}`} component={obj.downIcon} style={{paddingRight: 5}}/>
                                    {obj.downContent}
                                </Button>
                            </Card>
                            <Paper style={{background: `#${obj.tagColor}`, width: 80, height: 80, marginTop: -200, marginLeft: 20}}>
                                <Icon style={{color: 'white', width: 50, height: 50, paddingTop: 15}} component={obj.tagIcon} />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}
const DashboardOverallRender = withStyles(styles)(DashboardOverall);

class Dashboard extends Component
{
    render()
    {
        return(
            <Grid container direction={'column'} style={{backgroundColor: '#EEEEEE', paddingTop: 56}}>
                <Grid container item xs={12} justify={'center'}>
                    <DashboardOverallRender />
                </Grid>
                <Grid container item xs={12} style={{paddingLeft: '5%', paddingRight: '5%', paddingBottom: 20}}>
                    <Grid item xs={true}>
                        <TemplateContent headerContent={TableHeader} mainContent={TableContent}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
const DashboardRender = withStyles(styles)(Dashboard);

export default DashboardRender;