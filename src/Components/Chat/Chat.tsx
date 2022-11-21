import Stack from "@mui/material/Stack";
import ChatInput from "./ChatInput";
import Conversation from "./Conversation";
import TopBar from "./TopBar";

const classes = {

}

export default function Chat() {
    return (
        <Stack flex={1}>
            <TopBar />
            <Conversation />
            <ChatInput />
        </Stack>
    )
}