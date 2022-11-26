import Button from "@mui/material/Button"

const classes = {
    box: {
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        backgroundColor: "#F8F8F8",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        minWidth: "0px",
    }
}

export default function VideoCallIcon() {
    return (
        <Button sx={classes.box}>
            <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0122 12.9921C16.1675 17.1462 17.1102 12.3403 19.7559 14.9842C22.3065 17.5341 23.7725 18.045 20.5409 21.2758C20.1361 21.6011 17.5642 25.5149 8.52563 16.4788C-0.514034 7.44167 3.39749 4.86714 3.72289 4.46245C6.96237 1.22276 7.46444 2.69728 10.0151 5.24722C12.6608 7.89219 7.85694 8.83794 12.0122 12.9921Z"
                fill="#BEBEBE"
                />
            </svg>
        </Button>
    )
}
