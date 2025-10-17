import React, { useEffect } from "react";
import userManager from "../auth/oidcClient";
import { useNavigate } from "react-router-dom";

const Callback: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        userManager.signinRedirectCallback().then(() => navigate("/", { replace: true }));
    }, [navigate]);
    return <div>Redirecting...</div>;
};

export default Callback;