import React from "react";

export default function Whatsapp() {

  return (
    <div className="bg-blue-50">
      <div className="z-50 fixed bottom-2 pl-3 pb-1.5">
        <div className="hidden lg:block">
          <a
            href="https://web.whatsapp.com/send?phone=+1234567890"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 h-16 rounded-full "
              src="/whasapp.jfif"
              alt="Call_Us1"
            />
          </a>
        </div>
        <div className="block lg:hidden">
          <a
            href="https://api.whatsapp.com/send?phone=+1234567890"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-16 h-16 rounded-full "
              src="/whasapp.jfif"
              alt="Call_Us2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
