import * as React from 'react';
import { useState } from 'react';
import { MenuItem, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AvatarIcon from '../../Images/AvatarIcon';
import NewChatIcon from '../../Images/NewChatIcon';
import DotsIcon from '../../Images/DotsIcon';
import { Menu } from '@mui/icons-material';

const classes = {
    stack: {
        padding: "10px 16px",
    }
}

export default function Topbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack sx={classes.stack} flexDirection="row" justifyContent="space-between" alignItems="center" 
            bgcolor="rgb(240,242,245)"
            >
                    <AvatarIcon width="40px" height="40px" />
            <Stack flexDirection="row" gap="10px">
                <IconButton sx={{padding:"8px"}}>
                    <NewChatIcon />
                </IconButton>
                <IconButton sx={{padding:"8px"}}>
                    <DotsIcon />
                    {/* <Menu
                        anchorEl={anchorEl}
                        open={true}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu> */}
                </IconButton>
            </Stack>
        </Stack>
    )
}
