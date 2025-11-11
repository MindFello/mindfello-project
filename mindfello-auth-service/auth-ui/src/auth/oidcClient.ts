import { UserManager } from "oidc-client-ts";

export const userManager = new UserManager({
    authority: import.meta.env.VITE_OIDC_AUTHORITY, // http://keycloak:8080/realms/master
    client_id: import.meta.env.VITE_OIDC_CLIENT_ID, // mindfello-client
    redirect_uri: import.meta.env.VITE_OIDC_REDIRECT_URI, // http://localhost:3000/callback
    response_type: "code",
    scope: "openid profile email",
    post_logout_redirect_uri: import.meta.env.VITE_OIDC_REDIRECT_URI,
});

export default userManager;