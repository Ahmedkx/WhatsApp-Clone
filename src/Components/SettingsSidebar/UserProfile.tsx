import { Box, Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { motion } from "framer-motion"
import { SelectedSidebarContext } from '../../Context/SelectedSidebarContext'

const classes = {
    container: {
        maxWidth: "100%",
        flexDirection: 'row',
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#f5f6f6"
        }
    },
    image: {
        borderRadius: "50%",
        margin: "16px 19px",
    },
    textContainer: {
        maxWidth: {
            xs: "40%",
            sm: "45%",
            lg: "60%",
            xl: "70%"
        },
        justifyContent: 'center',
    },
    textName: {
        fontSize: "19px",
    },
    about:{
        fontSize: "15px",
        color: "#667781",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }
}

export default function UserProfile() {
    const { setSidebarName } = SelectedSidebarContext()

    return (
            <Stack sx={classes.container} onClick={()=>setSidebarName("UserProfile")}>
                    <img src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000' width={82} height={82} style={classes.image}/>
                <Stack sx={classes.textContainer}>
                    <Typography sx={classes.textName}>John Doe</Typography>
                    <Box >
                        <Typography sx={classes.about}>Hey there! I am using WhatsApp.</Typography>
                    </Box>
                </Stack>
            </Stack>
    )
}
