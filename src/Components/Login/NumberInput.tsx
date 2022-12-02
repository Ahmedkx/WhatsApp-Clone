import Box from "@mui/material/Box"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const classes = {
    box: {
        mt: 1,
        p: "20px 30px",
    }
}

export default function NumberInput() {
    return (
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
    )
}
