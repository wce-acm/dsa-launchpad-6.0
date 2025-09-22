import React from "react";
import calendarImg from "../assets/images/date.png";
import clockImg from "../assets/images/time.png";
import locationImg from "../assets/images/venue.png";
import eventlogo from "../assets/images/Eventlogo.png";

const EventSpotlight = () => {
  return (
    <div className="pt-12 px-4 md:px-10 mx-auto max-w-[1200px] jakarta">
      {" "}
      {/* Added jakarta */}
      {/* Heading Section */}
      <div className="flex flex-col items-center mb-24">
        <img
          src={eventlogo}
          alt="Event Logo"
          className="w-80 h-80 md:w-80 md:h-80 mb-4 object-contain"
        />
      </div>
      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Google Map */}
        <div className="w-4/5 md:w-2/5 rounded-2xl overflow-hidden shadow-md mx-auto md:mx-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.337656843728!2d74.59888261503402!3d16.84573878881327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1237f52c65db5%3A0xa3535676176ded0a!2sWalchand%20College%20of%20Engineering%2C%20Sangli!5e0!3m2!1sen!2sin!4v1695212345678!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Right Side - Event Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pl-8 md:pr-16 mx-auto md:mx-0">
          <div className="flex flex-col gap-6">
            {/* Date */}
            <div className="flex items-center gap-4">
              <img src={calendarImg} alt="Calendar" className="w-20 h-20" />
              <span className="text-xl font-semibold text-white">
                11th & 12th October 2025
              </span>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4">
              <img src={clockImg} alt="Clock" className="w-20 h-20" />
              <span className="text-xl font-semibold text-white">
                9:00 AM - 6:00 PM
              </span>
            </div>

            {/* Venue */}
            <div className="flex items-center gap-4">
              <img src={locationImg} alt="Location" className="w-20 h-20" />
              <span className="text-xl font-semibold text-white text-left">
                Mini CCF, Walchand College of Engineering, Sangli
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSpotlight;
