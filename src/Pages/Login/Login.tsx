import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { motion } from "framer-motion"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button, Divider, Typography } from "@mui/material"

const classes = {
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
    },
    modal: {
        backgroundColor: "white",
        borderRadius: "20px",
    },
    box: {
        mt: 1,
        p: "20px 30px",
    },
    submit: {
        color: "white",
        bgcolor: "red",
        p: 2,
        m: "20px 30px",
    }
}

export default function Login() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                        <form>
                            <Box sx={classes.box}>
                                <PhoneInput
                                    country='eg'
                                    // value={"010"}
                                    onChange={phone => console.log(phone)}
                                    // autoFormat={false}
                                    countryCodeEditable={false}
                                    enableSearch={true}
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,
                                    }}
                                />
                            </Box>
                            <Box sx={classes.submit}>Next</Box>
                        </form>
                    </Stack>
                </Stack>
            </Box>
        </motion.div>
    )
}