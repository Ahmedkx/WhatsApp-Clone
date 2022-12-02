import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Divider, Typography } from "@mui/material"
import NumberInput from "../../Components/Login/NumberInput"
import { useMultistepForm } from "../../Hooks/useMultiStepForm"
import OTPInput from "../../Components/Login/OTPInput"
import { FormEvent } from "react"

const classes = {
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: "white",
        borderRadius: "20px",
        overflow: "hidden"
    },
    box: {
        mt: 1,
        p: "20px 30px",
    },
    submit: {
        color: "white",
        bgcolor: "#61C554",
        p: 2,
        m: "20px 30px",
        mt: 0,
        textAlign: "center",
        fontWeight: 700,
        borderRadius: "10px",
        cursor: 'pointer',
    }
}

export default function Login() {
    const { step, isLastStep, next, isFirstStep, back } = useMultistepForm([<NumberInput />, <OTPInput />])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <motion.div
            initial={{ opacity: 0,y:-1000 }}
            animate={{ opacity: 1,y:"35vh" }}
        >
            <Box sx={classes.container}>
                <Stack sx={classes.modal}>
                    <Stack>
                        <Box sx={classes.box}>
                            <Typography fontSize={32} fontWeight={700}>
                                Login
                            </Typography>
                        </Box>
                        <Divider />
                        <form onSubmit={onSubmit}>
                            <AnimatePresence>
                                <motion.div
                                    exit={{x: -500}}
                                >
                                    {step}
                                </motion.div>
                            </AnimatePresence>
                            {!isFirstStep && (
                                <button type="button" onClick={back}>
                                Back
                                </button>
                            )}
                            <Box sx={classes.submit} onClick={onSubmit}>{isLastStep ? "Finish" : "Next"}</Box>''
                        </form>
                    </Stack>
                </Stack>
            </Box>
        </motion.div>
    )
}