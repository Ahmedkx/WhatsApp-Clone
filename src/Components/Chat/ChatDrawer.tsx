
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '../../Images/CloseIcon';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AvatarIcon from '../../Images/AvatarIcon';

const classes = {
    closeButton: {
        marginTop: "29.5px",
        marginLeft: "23.55px",
    }
}

export default function ChatDrawer({open, setOpen}:any) {
    // const [open, setOpen] = useState(true)
    const drawerWidth = "300px"

    return (
        <Box
            sx={{
                width: drawerWidth,
                transform: !open ? "translatex(100%)" : "",
                visibility: !open ? "hidden" : "visible",
                transition: "0.3s"
            }}
        >
            <Stack flexDirection="row" alignItems="center" gap="14.55px">
                <IconButton onClick={()=>setOpen(!open)} sx={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
                <Typography fontSize="14px" fontWeight="700" marginTop="26px">Contact info</Typography>
            </Stack>

            <Stack marginTop="50px" alignItems="center" gap="14px" >
                <AvatarIcon width="130px" height="130px" />
                <Stack gap="5px" alignItems="center">
                    <Typography fontWeight="700" fontSize="22px">Zilan</Typography>
                    <Typography color="#B9BEC3" fontSize="12px">Online</Typography>
                </Stack>
            </Stack>

            <Box>

            </Box>
        </Box>
    )
}
