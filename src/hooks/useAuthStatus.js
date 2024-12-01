import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const API_URL = "https://chainvault.onrender.com/api/v1";

export function useAuthStatus() {
  
  const {result, setResult} = useContext(AppContext);

  useEffect(() => {
    let cancelRequest = false;
    const authToken = localStorage.getItem("psg_auth_token");
    console.log("this is the url",API_URL)
    // console.log(authToken);
    axios
      .post(`${API_URL}/auth`, null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (cancelRequest) {
          return;
        }
        const { authStatus, identifier, identifierEmail, id, ac } = response.data;
        console.log(authStatus)
        console.log(identifier)
        console.log(identifierEmail)
        console.log(id)
        console.log(ac)

        if (authStatus === "success") {
          setResult({
            isLoading: false,
            isAuthorized: authStatus,
            username: identifier,
            email: identifierEmail,
            id: id,
            ac : ac
          });
        } else {
          setResult({
            isLoading: false,
            isAuthorized: false,
            username: "",
            email: "",
            id: ""
          });
        }
        // console.log(result)
      })
      .catch((err) => {
        console.log(err);
        setResult({
          isLoading: false,
          isAuthorized: false,
          username: "",
          email: "",
          id: ""
        });
      });
    return () => {
      cancelRequest = true;
    };
  }, []);
  return result;
}