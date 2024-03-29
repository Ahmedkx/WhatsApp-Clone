import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SelectedUserContext } from '../../Context/SelectedUserContext'

const classes = {
    stack: {
        cursor: 'pointer',
    }
}

export default function TopBar({setOpen, setData}:any) {
    const user = SelectedUserContext()
    
    function onClick(){
        setOpen("open")
        setData({name:"Zilan",status:"Online"})
    }

    return (
        <Stack flexDirection="row" alignItems="center" gap="10px" padding="10px 16px"
            sx={classes.stack}
            // bgcolor="#F0F2F5"
            height="60px"
            onClick={onClick}
            >
            <Avatar sx={{width:"40px", height:"40px"}}/>
            <Box>
                <Typography fontWeight={700}>
                        {user.name}
                </Typography>
                <Typography color="#B9BEC3" fontSize={12} fontWeight={500}>
                        {user.status}
                </Typography>
            </Box>
        </Stack>
    )
}
