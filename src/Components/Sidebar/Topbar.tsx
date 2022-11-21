import { Stack } from '@mui/material'
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
    return (
        <Stack sx={classes.stack} flexDirection="row" justifyContent="space-between" alignItems="center" 
            // bgcolor="rgb(240,242,245)"
            >
                    <AvatarIcon />
            <Stack flexDirection="row" gap="10px">
                <IconButton sx={{padding:"8px"}}>
                    <NewChatIcon />
                </IconButton>
                <IconButton sx={{padding:"8px"}}>
                    <DotsIcon />
                </IconButton>
            </Stack>
        </Stack>
    )
}
