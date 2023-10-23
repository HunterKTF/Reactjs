import { useState } from "react";
import {
    Button,
    TextField,
    InputAdornment,
    Icon,
    IconButton
} from "@mui/material";
import "./loginPortal.css";

const LoginPortal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="login-portal">
            <div className="img-auth-png-wrapper">
                <img className="img-auth-png" alt="" src="/img_auth_png.png" />
            </div>
        </div>
    );
};

export default LoginPortal;