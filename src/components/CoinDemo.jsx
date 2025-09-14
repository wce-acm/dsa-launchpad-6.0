import wce from '../assets/images/wce.png';
import acm from '../assets/images/acm1.png';

export default function LogoDisplay() {
  return (
    <div className="absolute inset-0 flex justify-between items-start px-20 z-10 pointer-events-none">
      {/* Left Logo */}
      <img src={wce} alt="WCE Logo" className="w-70 h-70 object-contain" />

      {/* Right Logo */}
      <img src={acm} alt="ACM Logo" className="w-70 h-70 object-contain" />
    </div>
  );
}

