import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';

class TemplateContent extends Component
{
    render()
    {
        return(
            <Grid item direction={'row'} style={{background: 'white', marginTop: 50, minWidth: 220}}>
                <Grid container item xs={12} direction={'column'} alignItems={'center'}>
                    <Grid item xs={12} style={{marginTop: -30, width: '97%', height: '', background: `${this.props.colorHeader}`}}>
                        <Grid component={this.props.headerContent}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{paddingTop: 10}}>
                    <Grid item component={this.props.mainContent}></Grid>
                </Grid>
            </Grid>
        )
    }
}

export default TemplateContent;