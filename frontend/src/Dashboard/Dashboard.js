import React, { useEffect } from "react";
import { jwt } from "jsonwebtoken";
import instance from "../api/api";

function Dashboard() {
  async function getVerification() {
    const data = await instance.get("api/verify", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    console.log(data);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.assign("/login");
      } else {
        getVerification();
      }
    }
  }, []);

  return (
    <div>
      <h1> Hello</h1>
      <button>Logout</button>
    </div>
  );
}

export default Dashboard;
