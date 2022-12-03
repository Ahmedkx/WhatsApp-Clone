import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { AnimatePresence } from "framer-motion"
import { Typography } from "@mui/material"
import NumberInput from "../../Components/Login/NumberInput"
import { useMultistepForm } from "../../Hooks/useMultiStepForm"
import OTPInput from "../../Components/Login/OTPInput"
import { FormEvent, useState } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "../../firebase-config"
import { useNavigate } from "react-router-dom"

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

function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.

            }
        }, authentication);
}

export default function Login() {
    const navigate = useNavigate();
    const [phoneNumber, setPhoneNumber] = useState("")
    const [code, setCode] = useState("")
    const { steps, isLastStep, next, isFirstStep, back, currentStepIndex } = useMultistepForm([<NumberInput onChange={setPhoneNumber}/>, <OTPInput setCode={setCode}/>])

    function sendOTP(e) {
        next()
        // if (!isLastStep) return next()
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
        .then(confirmationResult=>{
            window.confirmationResult = confirmationResult
            console.log(confirmationResult)
        }).catch((error)=>{
            console.log(error)
        })
    }

    function checkOTP() {
        let confirmationResult = window.confirmationResult
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user)
            navigate("/")
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                console.log(error)
            });
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
                    <form>
                        <AnimatePresence>
                                {steps[currentStepIndex]}
                        </AnimatePresence>
                        <Box sx={classes.submit} onClick={isLastStep ? checkOTP : sendOTP}>{isLastStep ? "Login" : "Send OTP"}</Box>
                        {!isFirstStep && (
                            <Box sx={classes.submit} onClick={back}>
                            Change Number
                            </Box>
                        )}
                        <div id="sign-in-button"></div>
                    </form>
                </Stack>
            </Stack>
        </Box>
    )
}