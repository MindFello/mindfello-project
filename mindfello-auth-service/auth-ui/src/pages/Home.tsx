import React, { useEffect, useState } from "react";
import userManager from "../auth/oidcClient";
import axios from "axios";

const Home: React.FC = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        (async () => {
            const user = await userManager.getUser();
            if (user && !user.expired) {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE}/secure/hello`, {
                    headers: { Authorization: `Bearer ${user.access_token}` },
                });
                setMessage(res.data);
            } else {
                setMessage("Not authenticated");
            }
        })();
    }, []);

    return <div>{message}</div>;
};

export default Home;
