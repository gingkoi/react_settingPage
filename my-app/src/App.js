import Navbar from "./components/Navbar";

import Notification from "./components/settings/Notification";
import Security from "./components/settings/Security";
import Appearance from "./components/settings/Appearance";
import Billing from "./components/settings/Billing";
import { Route, Routes } from "react-router-dom";
import AccountPage from "./components/settings/Page/AccountPage";
import Account from "./components/settings/Account";
import NotificationPage from "./components/settings/Page/NotificationPage";

function App() {
  return (
    <div className="">
      <div className="flex">
        <Navbar />
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
        <Routes>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/notification" element={<NotificationPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
