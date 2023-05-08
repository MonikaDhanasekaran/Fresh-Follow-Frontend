import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import "./Auth.css";
import Img from "../../assets/email-verification.gif";
import Img1 from "../../assets/forgot-password.gif";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {

    const [formStep, setFormStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleAccountExists = async (e) => {
        if (e && formData.email) {
            axios
                .post("https://my-fresh-follow-app.onrender.com/freshFollow/forgotpassword", {
                    email: formData.email,
                })
                .then((response) => {
                    const data = response.data;
                    if (data && data.success) {
                        toast("Account Verified", {
                            icon: "✔️"
                        })
                        setFormStep(2);
                    }
                    if (!data.success) {
                        toast("Account is missing", {
                            icon: "🙄"
                        });
                    }
                })
                .catch((e) => console.log(e));
        } else {
            toast("Email is empty", {
                icon: "🛑"
            });
        }
    }

    const handleSubmit = (e) => {
        if (formData.password.length < 1) {
            toast("Invalid Password", {
                icon: "🛑"
            });
            return;
        }
        if (
            e &&
            formData.password &&
            formData.password === formData.confirmPassword &&
            formData.password.length > 0
        ) {
            axios
                .post("https://my-fresh-follow-app.onrender.com/freshFollow/changepassword", {
                    email: formData.email,
                    password: formData.password,
                })
                .then((response) => {
                    let data = response.data;
                    console.log(response, data);
                    if (data && response.status === 201 && data.success) {
                        toast("Password Updated Successfully!!!", {
                            icon: "😀"
                        });
                        navigate("/");
                    }
                })
                .catch((e) => console.log(e));
        } else {
            toast("Passwords doesn't match", {
                icon: "🚫"
            });
        }
    };

    return (
        <div id="forgotpasswordDiv">
            {formStep === 1 && (
                <>
                    <div className="mb-3">
                        <Grid container>
                            <Card id="cardForgotPassword">
                                <CardContent>
                                    <div className='w-20 h-17 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                                        <img className='w-full' src={Img} alt='#' />
                                    </div>
                                    <br />
                                    <Typography id="forgotPasswordTypo" variant="h5" component="div">Account Verification</Typography> <br />
                                    < TextField sx={{ width: "100%" }} type="text" name="email" label="Enter Your Registered Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <br /> <br />
                                    <Button variant="contained" id="forgotPasswordButton" type="submit" onClick={handleAccountExists}> Verify </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </div>
                </>
            )}
            {formStep === 2 && (
                <>
                    <div id="changePasswordPage">
                        <Grid container>
                            <Card id="cardChangePassword">
                                <CardContent>
                                <div className='w-20 h-17 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                                        <img className='w-full' src={Img1} alt='#' />
                                    </div>
                                    <br />
                                    <Typography id="changePasswordTypo" variant="h4" component="div">Change Password</Typography> <br />
                                    < TextField sx={{ width: "100%" }} type="password" name="email" label="New Password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                    <br /> <br />
                                    < TextField sx={{ width: "100%" }} type="password" name="email" label="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                                    <br /> <br />
                                    <Button variant="contained" id="changePasswordButton" type="submit" onClick={handleSubmit} > Update </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </div>
                </>
            )}
        </div>
    )
}

export default ForgotPassword;