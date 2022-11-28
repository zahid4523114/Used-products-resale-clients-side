import { useEffect, useState } from "react";

const UserToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(
        `https://used-products-resale-server-side.vercel.app/jwt?email=${email}`
      )
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
