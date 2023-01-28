import { useEffect, useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import EditPenIcon from "../../Images/EditPenIcon";
import SaveEditIcon from "../../Images/SaveEditIcon";

const classes = {
    container: {
        backgroundColor: "white",
        padding: "14px 30px 10px",
        marginBottom: "10px"
    },
    title: {
        fontSize: "14px",
        color: "#008069",
        marginBottom: "14px"
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: "17px",
        margin: "8px 0",
        flex: 1
    }
}

export default function EditAbout() {
    const [editMode, setEditMode] = useState(false)

    function toggleEditMode() {
        setEditMode(!editMode)
    }

    useEffect(() => {
        setEditMode(false)
    }, [])

    return (
        <Box sx={classes.container}>
            <Typography sx={classes.title}>About</Typography>
            <Stack sx={classes.nameContainer}>
                    {!editMode ? <Typography sx={classes.name} contentEditable={editMode && "true"} >John Doe</Typography> :
                    <TextField id="standard-basic" variant="standard" defaultValue="foo" fullWidth autoFocus />}

                    {!editMode ? 
                    <EditPenIcon onClick={toggleEditMode}/> : 
                    <SaveEditIcon onClick={toggleEditMode}/>}
            </Stack>
        </Box>
    )
}