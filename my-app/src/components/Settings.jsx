import React from "react";
import Account from "../components/settings/Account";
import Notification from "../components/settings/Notification";
import Security from "../components/settings/Security";
import Appearance from "../components/settings/Appearance";
import Billing from "./settings/Billing";
import { Route } from "react-router-dom";
import AccountPage from "./settings/Page/AccountPage";

export default function Settings() {
  return (
    <div className=" md:w-[30%] border-r-2 font-poppin">
      <div>
        <div>
          <h1 className="text-2xl font-bold font-poppin border-b-2 py-6 px-5">
            Settings
          </h1>
          <Account />
          <Notification />
          <Security />
          <Appearance />
          <Billing />
        </div>
      </div>
    </div>
  );
}
