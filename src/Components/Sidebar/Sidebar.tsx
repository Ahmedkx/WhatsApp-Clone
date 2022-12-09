import Box from "@mui/material/Box"
import Topbar from "./Topbar"
import Search from "./Search"
import Message from "./Message"
import SettingsSidebar from "../SettingsSidebar/SettingsSidebar"


const classes = {
    main: {
        position: "relative",
        height: "100%",
        width: "30%",
        minWidth: "200px",
        borderRight: "1px solid #F2F2F2",
    }
}

export default function MainSidebar() {
    return (
        <Box sx={classes.main}>
            <Topbar />
            <Search />
            <Message />
            <SettingsSidebar />
        </Box>
    )
}