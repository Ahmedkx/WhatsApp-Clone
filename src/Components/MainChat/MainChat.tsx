import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import LockIcon from '../../Images/LockIcon'
import MainChatLogo from '../../Images/MainChatLogo'
import axios from 'axios'

const classes = {
    introTitle: {
        fontSize: "32px",
        color: "rgba(65, 82, 93, 0.9)",
        marginTop: "40px",
    },
    introText: {
        fontSize: "14px",
        color: "rgba(52, 66, 75, 0.9)",
        textAlign: "center"
    },
}

export default function MainChat() {
    const api = "https://lit-waters-98815.herokuapp.com/users"

    axios.post(api, {
        "name": "Mohamed",
        "email": "222212@gmail.com",
        "password": "mohamed"
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    // fetch(api, {
    //     method: "POST",
    //     headers: {'Content-Type': 'application/json'}, 
    //     body: JSON.stringify({
    //             "name": "Mohamed",
    //             "email": "12@gmail.com",
    //             "password": "mohamed"
    //         })
    //     }).then(res => {
    //         console.log("Request complete! response:", res);
    //     }).catch(err=>{
    //         console.log(err)
    //     })

    return (
        <Stack justifyContent="center" flex={1} bgcolor="rgb(240,242,245)" borderBottom="6px solid #25D366" padding="30px">
            <Stack textAlign="center" justifyContent="center" alignItems="center" flex={1}>
                <MainChatLogo />
                <Typography sx={classes.introTitle}>
                    WhatsApp Web
                </Typography>
                <Box mt="16px">
                    <Typography sx={classes.introText}>
                        Send and receive messages without keeping your phone online.
                    </Typography>
                    <Typography sx={classes.introText}>
                        Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                    </Typography>
                </Box>
            </Stack>
            <Stack flexDirection="row" justifyContent="center" alignItems="center" gap="2px" textAlign="center">
                <LockIcon />
                <Typography fontSize="14px" color="rgba(52, 66, 75, 0.8)">
                    End-to-end encrypted
                </Typography>
            </Stack>
        </Stack>
    )
}
