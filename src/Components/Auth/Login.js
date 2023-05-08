import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import "./Auth.css";
import Img from "../../assets/user.gif"
import { toast } from "react-hot-toast";
import { Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';

const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        if (formData.email === "" && formData.password === "") {
            toast("Please fill all required fields", {
                icon: "🛑"
            })
        }
        else {
            e.preventDefault();
            try {
                const response = await axios.post("https://my-fresh-follow-app.onrender.com/freshFollow/signin", {
                    ...formData,
                });
                if (response) {
                    localStorage.setItem("token", response.data.Token);
                    toast("Login Successfully", {
                        icon: "😀"
                    });
                    navigate("/home");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <>
            <div id="Login">
                <Grid container>
                    <Card id="loginCard">
                        <CardContent>
                            <div className='w-20 h-17 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto'>
                                <img className='w-full' src={Img} alt='#' />
                            </div>
                            <br />
                            <Typography id="loginTypo" variant="h4" component="div"> Login </Typography> <br /> <br />
                            < TextField sx={{ width: "100%" }} type="text" name="email" label="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <br /> <br />
                            <TextField sx={{ width: "100%" }} label="Password" type="password" name="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            <br /> <br />
                            <Button variant="contained" id="loginButton" type="submit" onClick={handleSubmit}> Sign in </Button>
                            <br /> <br />
                            <div id="buttonDiv">
                                Don't have an account? <Link id="Link" to="/signup">Sign Up</Link> <br /><br />
                                <Link id="Linked" to="/forgotpassword">forgot password?</Link>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </>
    )
}

export default Login;