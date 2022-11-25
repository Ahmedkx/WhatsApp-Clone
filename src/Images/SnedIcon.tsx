import Stack from "@mui/material/Stack";

const classes = {
    box: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#61C554",
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    }
}

export default function SnedIcon() {
    return (
        <Stack sx={classes.box}>
            <svg
            viewBox="0 0 24 24"
            height={24}
            width={24}
            preserveAspectRatio="xMidYMid meet"
            className=""
            x="0px"
            y="0px"
            enableBackground="new 0 0 24 24"
            xmlSpace="preserve"
            >
                <path
                fill="white"
                d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                />
            </svg>
        </Stack>
    )
}
