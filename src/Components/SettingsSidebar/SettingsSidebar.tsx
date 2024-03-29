import { Box } from "@mui/material"
import { motion, AnimatePresence  } from "framer-motion"
import { SelectedSidebarContext } from "../../Context/SelectedSidebarContext"
import Options from "./Options"
import Title from "./Title"
import UserProfile from "./UserProfile"

const variants:any = {
    initial: {
        x:"-100%",
        position: 'absolute',
        top: "0",
        height: "100%",
        width: "100%",
    },
    animate: {
        x: "0",
        transition: {
            ease: "easeOut",
        }
    },
    exit: {
        x: "-110%",
    }
}

const classes = {
    main: {
        height: "100%",
        backgroundColor: "white"
    },
}

export default function SettingsSidebar() {
    const { sidebarName } = SelectedSidebarContext()

    return (
        <AnimatePresence>
            {sidebarName == "Settings" && <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Box sx={classes.main}>
                    <Title />
                    <UserProfile />
                    <Options />
                </Box>
            </motion.div>}
        </AnimatePresence>
    )
}
