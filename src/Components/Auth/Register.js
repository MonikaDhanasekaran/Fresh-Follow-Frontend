import React, { useState } from "react";
import axios from 'axios';
import { validateEmail } from "../../Validations/helpers";
import { Card, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import Img from "../../assets/registration.gif";
import "./Auth.css";
import { toast } from "react-hot-toast";

const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
        role: "",
    });

    const handleSubmit = async (e) => {
        if (validateEmail(formData.email || "")) {
            toast("Email is invalid", {
                icon: "🔴"
            });
        } else if (!formData.password || !formData.confirmPassword || String(formData.password).trim().toLocaleLowerCase() !== String(formData.confirmPassword).trim().toLocaleLowerCase()) {
            toast("Passwords doesn't Match", {
                icon: "🔴"
            });
        } else {
            e.preventDefault();
            const response = await axios.post("https://my-fresh-follow-app.onrender.com/freshFollow/signup", {
                ...formData,
            });
            console.log(response);
            toast("Account Created Successfully", {
                icon: "👍"
            });
            navigate("/");
        }
    }

    return (
        <>
            <div id="divRegister">
                <Grid container>
                    <Card id="registerCard">
                        <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer'>
                            <img className='w-full h-full' src={Img} alt='' />
                        </div> <br />
                        <h2 id="title">Registration</h2>
                        <div className="content">
                            <form onSubmit={handleSubmit}>
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Name</span>
                                        <input type="text" placeholder="Name" value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Username</span>
                                        <input type="text" placeholder="Username" value={formData.userName}
                                            onChange={(e) => setFormData({ ...formData, userName: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="text" placeholder="Email" value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input type="password" placeholder="Password" value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Confirm Password</span>
                                        <input type="password" placeholder="Confirm Password" value={formData.confirmPassword}
                                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Mobile Number</span>
                                        <input type="text" placeholder="Mobile Number" value={formData.mobileNumber}
                                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} required />
                                    </div>
                                </div>
                                <FormControl variant="outlined" id="formRegister">
                                    <InputLabel id="">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        sx={{ width: "350px" }}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    >
                                        <MenuItem value="admin">Admin</MenuItem>
                                        <MenuItem value="user">User</MenuItem>
                                    </Select>
                                </FormControl>
                                <br />
                                <Button variant="contained" id="registerButton" type="submit" onClick={handleSubmit} > Register </Button> <br /> <br />
                                <p id="Button">Already have an account? <Link id="LinkLogin" to="/">Sign in</Link></p>
                            </form>
                        </div>
                    </Card>
                </Grid>
            </div>
        </>
    )
}

export default Register;