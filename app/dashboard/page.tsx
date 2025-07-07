"use client";

import AuthTokenManager from "@/lib/TokenManager";
import { useEffect } from "react";
import styles from './dashboard.module.scss'

const DashbaordPage = () => {
  const auth = new AuthTokenManager("/auth");

  useEffect(() => {
    auth.getAccessToken();
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`alert alert-info ${styles.message}`}>
        <h1 className="p-4 ">Wellcom To Dashbaord !</h1>
      </div>
    </div>
  );
};

export default DashbaordPage;
