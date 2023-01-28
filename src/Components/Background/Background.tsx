import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"

const classes = {
    top: {
        position: "fixed",
        backgroundColor: "rgb(0,168,132)",
        top: 0,
        zIndex: "-1",
        width: "100%",
        height: "127px",
        display:{
            md:"block",
            sm: "none",
            xs: "none"
        }
    },
    bottom: {
        position: "fixed",
        // backgroundColor: "rgb(240,242,245)",
        backgroundColor: "#DDDEDD",
        top: "0",
        zIndex: "-2",
        width: "100%",
        height: "100%",
    }
}

export default function Background() {
    return (
        <>
            <Box sx={classes.top}></Box>
            <Box sx={classes.bottom}></Box>
            <Outlet />
        </>
    )
}
