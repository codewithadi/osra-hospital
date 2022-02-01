import React from "react";

const SocialIcons = () => {
    return (
        <div className="fixed flex flex-col top-64 right-2 z-1000">
            <div className="flex flex-col gap-5 mt-4 -mx-2 bg-transparent">
                <a
                    href="https://twitter.com/alosrahhospital"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                    aria-label="twitter"
                >
                    <img
                        className="w-10 h-10 bg-transparent"
                        src="/assets/logo/tt1.png"
                        alt="twitter"
                    />
                </a>

                <a
                    href="https://www.instagram.com/alosrah.hospital/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 bg-transparent cursor-pointer text-gray-200 dark:text-gray-200 hover:text-gray-200 dark:hover:text-gray-400"
                    aria-label="Facebook"
                >
                    <img
                        className="w-10 h-10 bg-transparent"
                        src="/assets/logo/ig1.png"
                        alt="instagram"
                    />
                </a>
                <a
                    href="https://www.facebook.com/alosrah.hospital"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 cursor-pointer text-gray-200 dark:text-gray-200 bg-transparent hover:text-gray-200 dark:hover:text-gray-400"
                    aria-label="Facebook"
                >
                    <img
                        className="w-10 h-10 bg-transparent"
                        src="/assets/logo/fb1.png"
                        alt="facebook"
                    />
                </a>
            </div>
        </div>
    );
};

export default SocialIcons;
