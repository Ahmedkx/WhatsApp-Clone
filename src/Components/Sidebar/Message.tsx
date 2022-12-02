import React, { useState } from "react"
import { Avatar, Stack, Typography } from "@mui/material"
import ToggleButton from "@mui/material/ToggleButton/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import { ChangeSelectedUserContext } from "../../Context/SelectedUserContext"
import { users } from "../../Context/SelectedUserContext"

const classes = {
    togglebutton: {
        border:"none",
        padding: "0",
        "&:hover": {
            backgroundColor: "#F1F4F6"
        },
        "&:focus": {
            backgroundColor: "#F1F4F6"
        }
    },
    message: {
        textAlign:"left",
        fontWeight:"400",
        fontSize:"14px",
        color:"#8A8A8A",
        width:"100%"
    }
}

export default function Message() {
    const setUser = ChangeSelectedUserContext();
    const [buttonGroupValue, setButtonGroupValue] = useState("");

    const handleChange = (event:any ,newButtonGroupValue: any) => {
        if (newButtonGroupValue !== null) {
            console.log("Clicked")
            setButtonGroupValue(newButtonGroupValue);
            setUser(newButtonGroupValue)
    }};

    return (
        <ToggleButtonGroup
            value={buttonGroupValue}
            orientation="vertical"
            exclusive
            fullWidth
            onChange={handleChange}
        >
            {users.map((e:any)=>
            <ToggleButton key={e.name} disableRipple value={e.uid} sx={classes.togglebutton}>
                <Stack flexDirection="row" alignItems="center" width="100%">
                    <Stack justifyContent="center" height="73px" padding="0 15px">
                        <Avatar sx={{width:"49px", height:"49px"}}/>
                    </Stack>
                    <Stack>
                        <Typography fontWeight="700" fontSize="16px" color="#000000">
                            {e.name}
                        </Typography>
                        <Typography sx={classes.message}>
                            {e.message}
                        </Typography>
                    </Stack>
                </Stack>
            </ToggleButton>
            )}
        </ToggleButtonGroup>
    )
}