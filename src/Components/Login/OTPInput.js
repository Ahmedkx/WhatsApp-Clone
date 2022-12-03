import { motion } from "framer-motion"
import TextField from '@mui/material/TextField';

export default function OTPInput() {
    const [code, setCode] = useState("")
    console.log(code)

    function checkOTP() {
        let confirmationResult = window.confirmationResult
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
    }

    return (
        <motion.div
            key="OTPInput"
            initial={{x: 500,display: "none"}}
            animate={{x: 0, display: "block"}}
            transition={{delay: 0.3 }}
        >
            <TextField label="Please Enter OTP" variant="outlined" fullWidth sx={{mt:3}} required onChange={(e)=>setCode(e.target.value)}/>
        </motion.div>
    )
}
