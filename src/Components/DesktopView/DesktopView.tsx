import Sidebar from '../Sidebar/Sidebar'
import SettingsSidebar from '../SettingsSidebar/SettingsSidebar'
import Chat from '../Chat/Chat'
import Stack from '@mui/material/Stack'
import MainChat from '../MainChat/MainChat'
import { SelectedUserContext } from '../../Context/SelectedUserContext'
import { Box } from '@mui/material'

const classes = {
    box:{
        display: "flex",
        height: {
            xs: "100vh",
            lg: "calc(100vh - 38px)"
        },
        width: {
            xs: "100vw",
            lg: "calc(100vw - 38px)"
        },
        maxWidth: "1600px",
        backgroundColor: "white",
        margin: {
            lg:"19px auto 0 auto"
        },
        boxShadow: "0 6px 18px rgba(var(--shadow-rgb),.05)",
        top: "20px",
        borderRadius: {
            lg: "10px"
        },
        overflow: "hidden",
        flexDirection: "row"
    }
}

export default function DesktopView() {
    const user = SelectedUserContext();

    return (
        <Stack sx={classes.box}>
            <Sidebar />
            {user.uid == null ? <MainChat /> : <Chat />}
        </Stack>
    )
}