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
                d="M12.4011 4.6875C14.9241 4.6875 16.6856 6.42608 16.6856 8.91762V16.0824C16.6856 18.5739 14.9241 20.3125 12.4011 20.3125H4.70107C2.17813 20.3125 0.416656 18.5739 0.416656 16.0824V8.91762C0.416656 6.42608 2.17813 4.6875 4.70107 4.6875H12.4011ZM20.7895 7.16561C21.2468 6.93295 21.7833 6.95728 22.2198 7.23223C22.6562 7.50613 22.9167 7.98202 22.9167 8.50233V16.4983C22.9167 17.0197 22.6562 17.4945 22.2198 17.7684C21.9812 17.9175 21.7146 17.9937 21.4458 17.9937C21.2218 17.9937 20.9979 17.9408 20.7885 17.834L19.2458 17.0556C18.6749 16.7659 18.3208 16.1842 18.3208 15.5381V9.46151C18.3208 8.8143 18.6749 8.23266 19.2458 7.94501L20.7895 7.16561Z"
                fill="#BEBEBE"
                />
            </svg>
        </Button>
    )
}
