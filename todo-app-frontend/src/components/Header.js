import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            {/* AppBar for Desktop */}
            <AppBar position="static" sx={{ backgroundColor: "#8B4513" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}>
                        TODO-APP
                    </Typography>

                    {/* Desktop Navigation */}
                    <div className="nav-links" sx={{ display: { xs: "none", md: "flex" } }}>
                        <Button component={Link} to="/" sx={{ color: "white", mx: 1 }}>Home</Button>
                        <Button component={Link} to="/add-task" sx={{ color: "white", mx: 1 }}>Add Task</Button>
                    </div>

                    {/* Mobile Menu Icon */}
                    <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ display: { md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <div sx={{ width: 250 }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/add-task" onClick={handleDrawerToggle}>
                            <ListItemText primary="Add Task" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
