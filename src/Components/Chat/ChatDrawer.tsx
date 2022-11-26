
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '../../Images/CloseIcon';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import AvatarIcon from '../../Images/AvatarIcon';
import VideoCallIcon from '../../Images/VideoCallIcon';
import VoiceCallIcon from '../../Images/VoiceCallIcon';
import BlockIcon from '../../Images/BlockIcon';
import ReportIcon from '../../Images/ReportIcon';
import DeleteChatIcon from '../../Images/DeleteChatIcon';

const classes = {
    closeButton: {
        marginTop: "29.5px",
        marginLeft: "23.55px",
    }
}

export default function ChatDrawer({open, setOpen, data}:any) {
    // const [open, setOpen] = useState(true)
    const drawerWidth = "300px"

    return (
        <Stack
            sx={{
                width: open ? drawerWidth : "0px",
                flexShrink: 0,
                transform: !open ? "translateX(100%)" : "",
                transition: "0.3s",
                overflow:"hidden",
            }}
        >
            <Stack flexDirection="row" alignItems="center" gap="14.55px">
                <IconButton onClick={()=>setOpen(!open)} sx={classes.closeButton}>
                    <CloseIcon />
                </IconButton>
                <Typography fontSize="14px" fontWeight="700" marginTop="26px">Contact info</Typography>
            </Stack>

            <Stack marginTop="50px" alignItems="center" gap="14px">
                <AvatarIcon width="130px" height="130px" />
                <Stack gap="5px" alignItems="center">
                    <Typography fontWeight="700" fontSize="22px">{data.name}</Typography>
                    <Typography color="#B9BEC3" fontSize="12px">{data.status}</Typography>
                </Stack>
            </Stack>

            <Stack flexDirection="row" justifyContent="center" mt="27px" gap="17px">
                <VideoCallIcon />
                <VoiceCallIcon />
            </Stack>

            <Stack margin="20px">
                <Stack>
                    <Typography fontSize="14px" fontWeight="700">About</Typography>
                    <Typography fontSize="14px" fontWeight="400" color="#A1A1A1" marginTop="11px">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil possimus sunt nobis at, quibusdam molestias a earum corporis fugiat labore facere repellat, quod quas officia eligendi enim quam assumenda sit.</Typography>
                </Stack>
                <Stack marginTop="16px">
                    <Typography fontSize="14px" fontWeight="700">Media,links and doc</Typography>
                    <Typography fontSize="14px" fontWeight="400" color="#A1A1A1" marginTop="11px">Off</Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between" alignItems="center" marginTop="16px">
                    <Typography fontSize="14px" fontWeight="700">Mute notifications</Typography>
                    <Switch />
                </Stack>
                <Stack marginTop="40px" gap="10px">
                    <Stack flexDirection="row" gap="8px" sx={{cursor:"pointer"}}>
                        <BlockIcon />
                        <Typography fontSize="14px" fontWeight="700" color="#CC3169">Block Zilan</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="8px" sx={{cursor:"pointer"}}>
                        <ReportIcon />
                        <Typography fontSize="14px" fontWeight="700" color="#CC3169">Report Zilan</Typography>
                    </Stack>
                    <Stack flexDirection="row" gap="8px" sx={{cursor:"pointer"}}>
                        <DeleteChatIcon />
                        <Typography fontSize="14px" fontWeight="700" color="#CC3169">Delete chat</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}