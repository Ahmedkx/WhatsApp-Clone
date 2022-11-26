import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import EmojiIcon from '../../Images/EmojiIcon'
import FileIcon from '../../Images/FileIcon'
import SendVoiceIcon from '../../Images/SendVoiceIcon'
import SendIcon from '../../Images/SnedIcon'
import IconButton from '@mui/material/IconButton'


const classes = {
    search:{
        display:"flex",
        justifyContent: "center",
        p: "0 5px",
        height: "50px",
        borderRadius: "60px",
        backgroundColor: "white",
        border: "none",
        flex: 1,
        "& input::placeholder": {
            fontColor: "#78787C",
            fontSize: "14px",
            fontWeight: "400",
        }
    }
}

export default function ChatInput() {
    const [message, setMessage] = useState("")

    return (
        <Stack bgcolor="rgba(241, 244, 247, 0.6)" padding="20px 20px" flexDirection="row" gap="16px">
            <TextField
            sx={classes.search}
            InputProps={{
            disableUnderline: true,
            startAdornment: (
                <InputAdornment position="start">
                    <IconButton>
                        <EmojiIcon />
                    </IconButton>
                </InputAdornment>
            ),
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton>
                        <FileIcon />
                    </IconButton>
                </InputAdornment>
            )
            }}
            variant="standard"
            placeholder='Search or start new chat'
            onChange={(e)=>setMessage(e.target.value)}
            />
            {message.length === 0 ? 
            <SendVoiceIcon />:
            <SendIcon />
            }
        </Stack>
    )
}