import React from "react";

export default function AccountPage() {
  return (
    <div className="px-32 py-10 grow bg-[#f8fafc] border tab-content tab-space">
      <div className="" id="account">
        <h1 className="text-4xl font-bold">Account</h1>
        <div className="my-3">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <p className="text-[#8e9bac]">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className="flex space-x-7 my-5">
          <div>
            <h3>First name</h3>
            <input
              type="text"
              name=""
              id=""
              className="border rounded-lg h-12 w-[400px]"
            />
          </div>
          <div>
            <h3>Last name</h3>
            <input
              type="text"
              name=""
              id=""
              className="border rounded-lg h-12 w-[400px]"
            />
          </div>
        </div>
        <div className="my-5">
          {/* <!-- username section --> */}
          <h3>Username</h3>
          <div className="flex items-center mt-1">
            <div className="bg-[#f8fafc] py-2 px-5 border h-12 flex items-center rounded-l-lg text-[#8e9bac]">
              workcation.com/
            </div>
            <input type="text" className="border rounded-r-lg h-12 w-[400px]" />
          </div>
        </div>
        <div className="my-3">
          {/* <!-- photo section --> */}
          <h3>Photo</h3>
          <div className="flex space-x-6 items-center mt-1">
            <div>
              <img
                src="./QmbFBPQXX7mSwKdrj1GeCzAVPSVqhtKLGhnK5orQxSz8Si.png"
                className="rounded-full w-12"
                alt=""
              />
            </div>
            <button className="bg-white py-2 px-5 border rounded-lg hover:opacity-80">
              Change
            </button>
            <button className="hover:opacity-80">Remove</button>
          </div>
        </div>
        <div>
          <h3>About</h3>
          <input type="text" className="h-28 w-[85%] mt-1 border" />
          <p className="text-[#8e9bac] mt-2">
            Brief description for your profile.
          </p>
          <div className="bg-neutral-200 h-[1px] my-5"></div>
        </div>
        <div>
          {/* <!-- Personal Information --> */}
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <p className="text-[#8e9bac]">
            This information will be displayed publily so be careful what you
            share.
          </p>
          <div className="flex space-x-7 my-5">
            <div className="flex flex-col space-y-5">
              <div>
                <h3>Email</h3>
                <input
                  type="text"
                  className="border rounded-lg h-12 w-[400px]"
                />
              </div>
              <div>
                <h3>Country</h3>
                <input
                  type="text"
                  className="border rounded-lg h-12 w-[400px]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <div>
                <h3>Phone number</h3>
                <input
                  type="text"
                  className="border rounded-lg h-12 w-[400px]"
                />
              </div>
              <div>
                <h3>Language</h3>
                <input
                  type="text"
                  className="border rounded-lg h-12 w-[400px]"
                />
              </div>
            </div>
          </div>
          <p className="text-[#8e9bac]">
            This account was created on January 5, 2017, 8:35:40 PM
          </p>
          <div className="bg-neutral-200 h-[1px] my-5"></div>
          <div className="flex justify-end space-x-3 py-2">
            <button className="bg-white py-2 px-5 border rounded-lg hover:opacity-80">
              Cancel
            </button>
            <button className="bg-[#2665eb] text-white py-2 px-5 border rounded-lg hover:opacity-80">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
