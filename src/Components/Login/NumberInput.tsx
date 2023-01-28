import Box from "@mui/material/Box"
import { motion } from "framer-motion"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

const classes = {
    box: {
        mt: 3,
        position: "sticky"
    }
}

export default function NumberInput({onChange}:any) {
    return (
            <motion.div
                key="NumberInput"
                initial={{x:-500}}
                animate={{x:0}}
                exit={{x: -500}}
                transition={{ duration: 0.3 }}
            >
                <Box key={1} sx={classes.box}>
                <PhoneInput
                    country='eg'
                    onChange={phone => onChange(`+${phone}`)}
                    autoFormat={false}
                    enableSearch={true}
                    disableDropdown={true}
                    inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true,
                        autoComplete: "off"
                    }}
                />
                </Box>
            </motion.div>
    )
}
