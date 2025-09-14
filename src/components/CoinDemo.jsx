import wce from '../assets/images/wce.png';
import acm from '../assets/images/acm1.png';

export default function LogoDisplay() {
  return (
    <div className="absolute inset-0 flex justify-between items-start px-4 sm:px-10 md:px-20 z-10 pointer-events-none">
      {/* Left Logo */}
      <img
        src={wce}
        alt="WCE Logo"
        className="w-20 h-20 sm:w-32 sm:h-32 md:w-70 md:h-70 object-contain zoom-animation"
      />

      {/* Right Logo */}
      <img
        src={acm}
        alt="ACM Logo"
        className="w-20 h-20 sm:w-32 sm:h-32 md:w-70 md:h-70 object-contain zoom-animation"
      />
    </div>
  );
}
