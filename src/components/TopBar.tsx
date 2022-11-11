import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

interface TopBarProps {
    text: string;
}

export const TopBar = (props: TopBarProps): JSX.Element => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {props.text}
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
);
