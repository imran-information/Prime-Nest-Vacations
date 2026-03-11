import React from "react";

const Button = ({ type = "primary", children, className = "" }) => {

    const base =
        "px-8 py-2.5 rounded-lg text-[16px] transition-all duration-300 transform hover:-translate-y-1";

    const variants = {
        primary:
            "bg-[#406fb8] text-white hover:bg-[#355f9e] hover:shadow-lg cursor-pointer",
        secondary:
            "border-2 border-[#406fb8] text-[#406fb8] hover:bg-[#406fb8] hover:text-primary",
    };

    return (
        <button className={`${base} ${variants[type]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
