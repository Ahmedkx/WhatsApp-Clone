import Box from "@mui/material/Box"
import Topbar from "./Topbar"
import Search from "./Search"
import Message from "./Message"

const classes = {
    main: {
        height: "100%",
        width: "30%",
        minWidth: "200px",
        borderRight: "1px solid #F2F2F2",
    }
}

const messages:object[] = [
    {
    name: "Zilan",
    message: "Hello",
    time: "12:35 PM"},
    {
    name: "Mohamed",
    message: "Hello",
    time: "12:35 PM"},
    {
    name: "Besose",
    message: "Hello",
    time: "12:35 PM"},
]

export default function Sidebar() {
    return (
        <Box sx={classes.main}>
            <Topbar />
            <Search />
            <Message messages={messages}/>
        </Box>
    )
}