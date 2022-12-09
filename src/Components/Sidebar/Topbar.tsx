import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AvatarIcon from '../../Images/AvatarIcon';
import NewChatIcon from '../../Images/NewChatIcon';
import DotsIcon from '../../Images/DotsIcon';

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
                <IconButton 
                    sx={{padding:"8px"}}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    
                >
                    <DotsIcon />
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem onClick={handleClose}>New Group</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Menu>
            </Stack>
        </Stack>
    );
}