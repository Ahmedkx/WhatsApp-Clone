import {Typography, Button, Stack, Container} from '@mui/material';
import TextfieldWrapper from '../FormsUI/Textfield';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const classes = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
}

export const initialValues = {
    firstName: "",
    lastName: "",
};

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
})

export default function CreateAccount() {
    function onSubmit(e){
        console.log(e);
            // createDocument("Tickets",data)
            // navigate("/ticketsent")
        }

    return (
        <Container maxWidth="sm" sx={classes.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <Typography variant='h3' textAlign="center">Create Your Account</Typography>
                    <Stack flexDirection="column">
                        <TextfieldWrapper name="firstName" margin="normal" label="First Name" variant="outlined" fullWidth/>
                        <TextfieldWrapper name="lastName" margin="normal" label="Last Name" variant="outlined" />
                    </Stack>
                    <Button variant="contained" fullWidth sx={{mt:"10px"}} type="submit">Create Your Account</Button>
                </Form>
            </Formik>
        </Container>
    )
}