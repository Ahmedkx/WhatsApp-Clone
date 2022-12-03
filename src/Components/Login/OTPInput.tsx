import { motion } from "framer-motion"
import TextField from '@mui/material/TextField';

export default function OTPInput() {
    return (
        <motion.div
            key="OTPInput"
            initial={{x: 500,display: "none"}}
            animate={{x: 0, display: "block"}}
            transition={{delay: 0.3 }}
        >
            <TextField label="Please Enter OTP" variant="outlined" fullWidth sx={{mt:3}} required/>
        </motion.div>
    )
}
