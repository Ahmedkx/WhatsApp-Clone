import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function TopBar() {
    return (
        <Stack flexDirection="row" alignItems="center" gap="10px" padding="10px 16px" 
            // bgcolor="#F0F2F5" 
            height="60px">
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
