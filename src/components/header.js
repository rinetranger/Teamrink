import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import about from './about';
import service from './service';
import contact from './contact';
// import { BrowserRouter asRouter,Switch,Route,Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';



const useStyles = makeStyles({
    navbar: {
        background: '#000046',
        background: '-webkit-linear-gradient(to right, #1CB5E0, #000046)' ,
        background: 'linear-gradient(to right, #1CB5E0, #000046)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 100,
        padding: '0 10px',
    },
    navbarbrand:{
        
        marginRight:'50px',
        width:'30%',
    },
    listStyle:{
        display:"flex",
        justifyContent:'flex-end',
        margirBottom:'30px',
        textDecoration:'none',

    },
    listing:{
        display:'inline',
        width:'15%',
        textDecoration:'none',
        color:'white'

    },
    linkin:{
        color:'white',
        textDecoration:'none !important',
    },
  });

export default function Header() {
    const classes = useStyles();
   
        return (
          <div>
            <nav>
              <h3>TEAM RINK</h3>
              <ul>
                <Link to="/main" className={classes.linkin}>
                <li classNam={classes.listing}>home</li>
                </Link>
                <Link to="/about" className={classes.linkin}>
                <li classNam={classes.listing}>about</li>
                </Link>
            
                <Link to="/service" className={classes.linkin}>
                <li classNam={classes.listing}>service</li>
                </Link>
       
                <Link to="/contact" className={classes.linkin}>
                <li classNam={classes.listing}>contact</li>
                </Link>
            
              </ul>
            </nav>
          </div>
        );
    }
   


