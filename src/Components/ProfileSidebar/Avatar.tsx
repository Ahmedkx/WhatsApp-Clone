import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { motion } from "framer-motion"

const classes = {
    container: {
        alignItems: 'center',
        margin: "28px 0",
        
        
    },
    avatar: {
        borderRadius: "50%"
    },
    label: {
        cursor: 'pointer',
        borderRadius: "50%"
    }
}

export default function Avatar() {
    const [photo, setPhoto] = useState(null)

    function onUpload(e:any) {
        setPhoto(e.target.files[0])
    }

    return (
        <Stack sx={classes.container}>
            <motion.div
                initial={{scale: 0}}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, duration: 0.25 }}
            >
                <label style={classes.label}>
                    <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="Avatar" width={200} height={200} style={classes.avatar}/>
                    <input hidden accept="image/*" type="file" onChange={onUpload}/>
                </label>
            </motion.div>
        </Stack>
    )
}