import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { motion, AnimatePresence } from "framer-motion"
import { Button, Divider, Typography } from "@mui/material"
import NumberInput from "../../Components/Login/NumberInput"
import { useMultistepForm } from "../../Hooks/useMultiStepForm"
import OTPInput from "../../Components/Login/OTPInput"
import { FormEvent, useState } from "react"

const classes = {
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        width: "100vw"
    },
    modal: {
        backgroundColor: "white",
        borderRadius: "20px",
        overflowX: "hidden",
            p: "20px 30px",
    },
    submit: {
        color: "white",
        bgcolor: "#61C554",
        p: 2,
        mt: 2,
        textAlign: "center",
        fontWeight: 700,
        borderRadius: "10px",
        cursor: 'pointer',
        userSelect: "none"
    }
}

export default function Login() {
    const { steps, isLastStep, next, isFirstStep, back, currentStepIndex } = useMultistepForm([<NumberInput key={1}/>, <OTPInput key={2}/>])

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <Box sx={classes.container}>
            <Stack sx={classes.modal}>
                <Stack>
                    <Box>
                        <Typography fontSize={32} fontWeight={700}>
                            Login
                        </Typography>
                    </Box>
                    <form onSubmit={onSubmit}>
                        <AnimatePresence>
                                {steps[currentStepIndex]}
                        </AnimatePresence>
                        <Box sx={classes.submit} onClick={onSubmit}>{isLastStep ? "Login" : "Send OTP"}</Box>
                        {!isFirstStep && (
                            <Box sx={classes.submit} onClick={back}>
                            Change Number
                            </Box>
                        )}
                    </form>
                </Stack>
            </Stack>
        </Box>
    )
}