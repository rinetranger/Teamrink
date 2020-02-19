import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import images from '../images/code.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
   margin:0,
   padding:0,

  },
  images: {
    width:'100%',
    margin:0,
   padding:0,
    position:'relative',
    zIndex:1
  },
  subject1:{
    position:'absolute',
    top:'25%',
    left:'40%',
    color:'white',
    zIndex:2
  },
  subject2:{

    position:'absolute',
    top:'35%',
    left:'40%',
    color:'white',
    zIndex:2
  }

}));

export default function Main() {
  const classes = useStyles();
    return (
        <React.Fragment>
       
        <Container maxWidth="xl" className={classes.root} ml={-30} mr={-50}>

       
          <img src={images} className={classes.images}/>
          <h1 className={classes.subject1} >TEAM RINK</h1>
          <h4 className={classes.subject2}>web siteのことなら任せください！</h4>
        </Container>
      </React.Fragment>
    );
  }
