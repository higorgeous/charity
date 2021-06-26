import { useContext } from "react";

import { AuthContext } from "@context/Session";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
