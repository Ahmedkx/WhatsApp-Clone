import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const classes = {
    stack: {
        cursor: 'pointer',
    }
}

export default function TopBar({setOpen}:any) {
    return (
        <Stack flexDirection="row" alignItems="center" gap="10px" padding="10px 16px"
            sx={classes.stack}
            // bgcolor="#F0F2F5" 
            height="60px"
            onClick={()=>setOpen("open")}
            >
            <Avatar sx={{width:"40px", height:"40px"}}/>
            <Box>
                <Typography fontWeight={700}>
                        Zilan
                </Typography>
                <Typography color="#B9BEC3" fontSize={12} fontWeight={500}>
                        Online
                </Typography>
            </Box>
        </Stack>
    )
}
