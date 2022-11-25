import { useState } from "react";
import Stack from "@mui/material/Stack";
import ChatInput from "./ChatInput";
import Conversation from "./Conversation";
import TopBar from "./TopBar";
import ChatDrawer from "./ChatDrawer";


export default function Chat() {
    const [open, setOpen] = useState(true)

    return (
        <Stack flexDirection="row" flex={1}>
            <Stack flex={1}>
                <TopBar setOpen={setOpen}/>
                <Conversation />
                <ChatInput />
            </Stack>
                <ChatDrawer open={open} setOpen={setOpen}/>
        </Stack>
    )
}