import Stack from "@mui/material/Stack";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const classes = {
    stack: {
        flex: "1",
        bgcolor: "rgba(241, 244, 247, 0.6)",
        padding: "0 20px",
        overflowY: "scroll",
        flexDirection: "column-reverse",
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#BDBCB7',
        }
    }
}

export default function Conversation() {
    return (
        <Stack sx={classes.stack}>
            <SentMessage message="Hi"/>
            <RecievedMessage message="Hello"/>
        </Stack>
    )
}