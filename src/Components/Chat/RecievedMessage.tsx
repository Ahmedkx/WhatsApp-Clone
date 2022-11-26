import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const classes = {
    main: {
        marginTop: "15px"
    },
    message: {
        backgroundColor: "#E8ECEF",
        maxWidth: "310px",
        borderRadius: "10px",
        color: "black",
        padding: "15px 24px",
        marginBottom: "10px",
        marginRight: "auto",
        wordBreak: "break-all",
        fontWeight: "400"
    },
    time: {
        fontSize: "11px",
        fontWeight: "500",
        color: "#727272"
    }
}


export default function RecievedMessage({message}:any) {
    return (
        <Stack sx={classes.main}>
        <Stack sx={classes.message}>
            <Typography>{message}</Typography>
        </Stack>
        <Typography sx={classes.time}>12:00 PM</Typography>
    </Stack>
    )
}
