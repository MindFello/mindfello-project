import React from "react";
import userManager from "../auth/oidcClient";

const Login: React.FC = () => (
    <button onClick={() => userManager.signinRedirect()}>Login with Keycloak</button>
);

export default Login;