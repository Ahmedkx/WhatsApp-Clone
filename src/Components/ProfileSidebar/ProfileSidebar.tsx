import { Box } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import Avatar from "./Avatar"
import EditName from "./EditName"
import Title from "./Title"
import Note from "./Note"
import EditAbout from "./EditAbout"
import { SelectedSidebarContext } from "../../Context/SelectedSidebarContext"

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
        // backgroundColor: "#F0F2F5"
        backgroundColor: "#F0F2F5"
    },
}

export default function ProfileSidebar() {
    const { sidebarName } = SelectedSidebarContext()

    return (
        <AnimatePresence>
            {sidebarName == "UserProfile" && <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Box sx={classes.main}>
                    <Title />
                    <Avatar />
                    <motion.div
                        initial={{y: "-10%", opacity: 0}}
                        animate={{ y: "0" , opacity: 1}}
                        transition={{ delay: 0.25, duration: 0.15 }}
                    >
                        <EditName />
                        <Note />
                        <EditAbout />
                    </motion.div>
                </Box>
            </motion.div>}
        </AnimatePresence>
    )
}
