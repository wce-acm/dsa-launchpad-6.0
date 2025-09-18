import wce from '../assets/images/wce2.png';
import acm from '../assets/images/acmlogo2.png';

export default function LogoDisplay() {
  return (
   <div className="absolute inset-0 flex justify-between items-start px-[55px] sm:px-10 md:px-20 z-10 pointer-events-none" style={{ left: "-5px" }}>

      {/* Left Logo */}
      <img
        src={wce}
        alt="WCE Logo"
<<<<<<< HEAD
        className="w-35 h-35 sm:w-35 sm:h-35 md:w-70 md:h-70 object-contain zoom-animation"
=======
        className="w-20 h-20 sm:w-32 sm:h-32 md:w-90 md:h-90 object-contain zoom-animation"
>>>>>>> cd7c48c (Your commit message)
      />

      {/* Right Logo */}
      <img
        src={acm}
        alt="ACM Logo"
<<<<<<< HEAD
        className="w-35 h-40 sm:w-35 sm:h-35 md:w-70 md:h-70 object-contain zoom-animation"
=======
        className="w-20 h-20 sm:w-32 sm:h-32 md:w-90 md:h-90 object-contain zoom-animation"
>>>>>>> cd7c48c (Your commit message)
      />
    </div>
  );
}
