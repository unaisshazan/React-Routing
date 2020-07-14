// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {

//   return (
// 	<div>
//         <Link to="/"> Home </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/product"> Product </Link>
// 	</div>
//   );
// }

// export default NavBar;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
    alignItems:"center",
    textAlign:"center",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar >
        <Button color="inherit" href='/'>Home</Button> 
        <Button color="inherit" href='/about'></Button>
        <Button color="inherit" href='/product'>Product</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
