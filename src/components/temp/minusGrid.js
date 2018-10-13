import React, {Component} from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class DemoMinusGrid extends Component
{
    render()
    {
        return(
            <Grid container>
                <Grid item xs={true} style={{background: 'grey', marginTop: 20}}>
                    <Button style={{bottom: '80%'}}>Hello</Button>
                </Grid>
                <Grid item xs={true} style={{background: 'green'}}>
                    Hi
                </Grid>
            </Grid>
        )
    }
}

export default DemoMinusGrid;