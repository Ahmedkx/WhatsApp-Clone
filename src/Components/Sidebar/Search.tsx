import { Stack } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '../../Images/SearchIcon';


const classes = {
    box:{
        height: "49px",
        padding: "0 2.5%",
        margin: "0 auto",
    },
    search:{
        display:"flex",
        justifyContent: "center",
        pl: "10px",
        height: "35px",
        borderRadius: "70px",
        backgroundColor: "#F2F3F5",
        border: "none",
        "& input::placeholder": {
            fontSize: "14px",
            fontWeight: "400",
        }
    }
}

export default function Search() {
    return (
        <Stack sx={classes.box} justifyContent={"center"} borderBottom="1px solid #F2F2F2;" width="100%">
            <TextField
            sx={classes.search}
            InputProps={{
            disableUnderline: true,
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
            ),
            }}
            variant="standard"
            placeholder='Search or start new chat'
            />
        </Stack>
    )
}
