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

export default function SendVoiceIcon() {
    return (
        <Stack sx={classes.box}>
            <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            >
                <path
                d="M21 8C21 5.23858 18.7614 3 16 3C13.2386 3 11 5.23858 11 8V16C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16V8Z"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                d="M16 25V29"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                d="M24.95 17C24.6905 19.1915 23.6361 21.2116 21.9865 22.6774C20.3369 24.1433 18.2068 24.9529 16 24.9529C13.7932 24.9529 11.6631 24.1433 10.0135 22.6774C8.3639 21.2116 7.30943 19.1915 7.04999 17"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
        </Stack>
    )
}
