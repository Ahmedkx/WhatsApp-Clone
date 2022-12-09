import { Box, Typography, Stack, Button } from "@mui/material"
import { motion, AnimatePresence  } from "framer-motion"
import BackArrowIcon from "../../Images/BackArrowIcon"
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
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
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

export default function SettingsSidebar() {
    return (
        <AnimatePresence>
            {true && <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Box sx={classes.main}>
                    <Box sx={classes.titleContainer}>
                        <Stack sx={classes.title}>
                            <BackArrowIcon style={{cursor: 'pointer'}} onClick={()=>console.log("hi")}/>
                            <Typography sx={classes.titleText}>Settings</Typography>
                        </Stack>
                    </Box>
                    <UserProfile />
                </Box>
            </motion.div>}
        </AnimatePresence>
    )
}
