import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {Link, useLocation} from 'react-router-dom'

import useStyles from "./styles"

const Navbar = ({totalItems}) => {
    const classes = useStyles()
    const location = useLocation()

    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit" component={Link} to="/" >
                        <img src='https://i.ibb.co/Qp1SXBw/commerce.png' alt="commerce.js" height="25px" className={classes.image} />
                        Db Commerce
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && ( <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>)}
                   
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
