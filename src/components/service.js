import React from 'react';
import '../App.css';
import RecipeReviewCard from './card';
import Grid from '@material-ui/core/Grid';


class Service extends React.Component{
  render(){
   
    return(
      <div>
        <Grid container spacing={3}>
        <Grid item xs={3}>
        <RecipeReviewCard />
        </Grid>
        <Grid item xs={3}>
        <RecipeReviewCard />
        </Grid>
        <Grid item xs={3}>
        <RecipeReviewCard />
        </Grid>
        <Grid item xs={3}>
        <RecipeReviewCard />
        </Grid>
      </Grid>
      
       
        </div>
     
    )
  }
}



export default Service;
