import { Box, Stack, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup } from "@mui/material";
import React from "react";
import ThemeIcon from "../../../Images/ThemeIcon";

const options = [
    "Light",
    "Dark"
];

export interface ConfirmationDialogRawProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef<HTMLElement>(null);
    
        React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
        }, [valueProp, open]);
    
        const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
        };
    
        const handleCancel = () => {
        onClose();
        };
    
        const handleOk = () => {
            console.log(value)
            onClose(value);
        };
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        };
    
        return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
            {...other}
        >
            <DialogTitle>Choose Theme</DialogTitle>
            <DialogContent dividers>
            <RadioGroup
                ref={radioGroupRef}
                aria-label="ringtone"
                name="ringtone"
                value={value}
                onChange={handleChange}
            >
                {options.map((option) => (
                <FormControlLabel
                    value={option}
                    key={option}
                    control={<Radio />}
                    label={option}
                />
                ))}
            </RadioGroup>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleCancel}>
                Cancel
            </Button>
            <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

const classes = {
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        height: "60px",
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: "#f5f6f6"
        }
    },
    iconBox: {
        textAlign: 'center',
        width: "74px"
    },
    textBox: {
        justifyContent: "center",
        borderBottom: "1px solid #E9EDEF",
        height: "100%",
        flex: 1,
    },
}

export default function Theme() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Light');

        const handleClickListItem = () => {
        setOpen(true);
        };
    
        const handleClose = (newValue?: string) => {
        setOpen(false);
    
        if (newValue) {
            setValue(newValue);
        }
        };

    return (
        <>
            <Stack sx={classes.stack} onClick={()=>setOpen(true)}>
            <Box sx={classes.iconBox}>
                <ThemeIcon width="24px" height="24px" />
            </Box>
            <Stack sx={classes.textBox}>
                <Typography>Theme</Typography>
            </Stack>
            </Stack>

            <ConfirmationDialogRaw
                id="ringtone-menu"
                keepMounted
                open={open}
                onClose={handleClose}
                value={value}
            />
        </>
    )
}