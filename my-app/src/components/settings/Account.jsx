import React from "react";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <Link to="/account">
      <div className="border-b-2 py-5 px-5 hover:bg-secondary cursor-pointer">
        <div className="flex space-x-3">
          <div>
            <CiSettings size={45} className="text-subText" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Account</h2>
            <h3 className=" text-subText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              cum saepe nemo, blanditiis possimus eum rerum
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
