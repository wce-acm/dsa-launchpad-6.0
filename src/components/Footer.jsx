import React from "react";
import acmLogo from "../assets/images/acmlogo.png";

export default function Footer() {
	return (
		<footer
			className="
        mt-16 text-white py-5 
        flex justify-center items-center gap-1 
        bg-black 
        flex-col md:flex-row md:gap-2
      "
		>
			<img
				src={acmLogo}
				alt="ACM Logo"
				className="w-20 md:w-24"
			/>
			<div className="flex flex-col gap-1 md:gap-[3px] text-center md:text-left text-sm md:text-base">
				<span className="font-medium">Copyright ©2025. All rights reserved by</span>
				<span className="font-medium">WCE ACM Student Chapter</span>
			</div>
		</footer>
	);
}
