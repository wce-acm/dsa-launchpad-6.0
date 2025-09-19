import wce from '../assets/images/wce2.png';
import acm from '../assets/images/acmlogo2.png';

export default function LogoDisplay() {
    return (
        <div 
            className="absolute inset-0 flex justify-between items-start 
                       px-12 sm:px-10 md:px-20 z-10 pointer-events-none"
            style={{ left: "-5px" }}
        >
            {/* Left Logo */}
            <img
                src={wce}
                alt="WCE Logo"
                className="w-30 h-30 sm:w-40 sm:h-40 md:w-90 md:h-90 object-contain zoom-animation"
            />

            {/* Right Logo */}
            <img
                src={acm}
                alt="ACM Logo"
                className="w-30 h-30 sm:w-40 sm:h-40 md:w-90 md:h-90 object-contain zoom-animation"
            />
        </div>
    );
}
