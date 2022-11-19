import { Box } from "@mui/system"
import { Outlet } from "react-router-dom"

const styles:any = {
    top: {
        position: "fixed",
        backgroundColor: "rgb(0,168,132)",
        top: 0,
        zIndex: "-1",
        width: "100%",
        height: "127px",
        display:{
            md:"block",
            sm: "none"
        }
    },
    bottom: {
        position: "fixed",
        backgroundColor: "rgb(240,242,245)",
        top: "127px",
        zIndex: "-1",
        width: "100%",
        height: "100%",
        display:{
            md:"block",
            sm: "none"
        }
    }
}

export default function Background() {
    return (
        <>
            <Box sx={styles.top}></Box>
            <Box sx={styles.bottom}></Box>
            <Outlet />
        </>
    )
}
