import { useEffect, useState } from "react";

const UseAdmin = (email) => {
  const [adminEmail, setAdminEmail] = useState(false);

  const [adminLoader, setAdminLoader] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `https://used-products-resale-server-side.vercel.app/userInfo/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.isAdmin) {
            setAdminEmail(data.isAdmin);
            setAdminLoader(false);
          }
        });
    }
  }, [email]);

  return [adminEmail, adminLoader];
};
export default UseAdmin;
