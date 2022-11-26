import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const classes = {
    main: {
        marginTop: "15px"
    },
    message: {
        backgroundColor: "#61C554",
        maxWidth: "310px",
        borderRadius: "10px",
        color: "white",
        padding: "15px 24px",
        marginBottom: "10px",
        marginLeft: 'auto',
        wordBreak: "break-all",
        fontWeight: "400"
    },
    time: {
        fontSize: "11px",
        marginLeft: 'auto',
        fontWeight: "500",
        color: "#727272"
    }
}

export default function SentMessage({message}:any) {
    return (
        <Stack sx={classes.main}>
            <Stack sx={classes.message}>
                <Typography>{message}</Typography>
            </Stack>
            <Typography sx={classes.time}>12:00 PM</Typography>
        </Stack>
    )
}