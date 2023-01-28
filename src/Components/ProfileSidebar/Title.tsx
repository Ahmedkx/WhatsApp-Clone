import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SelectedSidebarContext } from '../../Context/SelectedSidebarContext'
import BackArrowIcon from '../../Images/BackArrowIcon'

const classes = {
    titleContainer: {
        height: "108px",
        backgroundColor: "#008069",
        paddingRight: "20px",
        paddingLeft: "23px"
    },
    title: {
        flexDirection: "row",
        alignItems: 'flex-end',
        gap: "29px",
        height: "calc(100% - 15px)"
    },
    titleText: {
        fontSize: 19,
        color: "white",
    }
}

export default function Title() {
    const { setSidebarName } = SelectedSidebarContext()

    return (
        <Box sx={classes.titleContainer}>
            <Stack sx={classes.title}>
                <BackArrowIcon style={{cursor: 'pointer'}} onClick={()=>setSidebarName(null)}/>
                <Typography sx={classes.titleText}>Profile</Typography>
            </Stack>
        </Box>
    )
}
