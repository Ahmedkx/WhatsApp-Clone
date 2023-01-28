import { Typography } from "@mui/material";

const classes = {
    note: {
        fontSize: "14px",
        color: "#8696a0",
        margin: "4px 20px 28px 30px",
        userSelect: "none"
    }
}

export default function Note() {
    return (
        <Typography sx={classes.note}>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
    )
}