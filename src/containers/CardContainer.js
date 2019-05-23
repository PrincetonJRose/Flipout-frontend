import React from 'react';
import Card from '../components/Card'
import {Grid} from 'semantic-ui-react'

function CardContainer(){
  return(
    <Grid>
    <div className="four wide column"><Card /></div>
    <div className="four wide column"><Card /></div>
    <div className="four wide column"><Card /></div>
    <div className="four wide column"><Card /></div>
    </Grid>
  )
}

export default CardContainer
