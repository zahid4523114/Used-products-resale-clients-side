import { useEffect, useState } from "react";

const UserToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("user-token", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);

  return [token];
};
export default UserToken;
