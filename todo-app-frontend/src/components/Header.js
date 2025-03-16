import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "#8B4513" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                {/* Logo */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ textDecoration: "none", color: "white", fontWeight: "bold" }}
                >
                    TODO-APP
                </Typography>

                {/* Navigation */}
                <Button component={Link} to="/add-task" sx={{ color: "white" }}>
                    Add Task
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
