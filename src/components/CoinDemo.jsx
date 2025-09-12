import { motion } from 'framer-motion';
import PGTLogo from '../assets/images/wce.webp';
import WCElogo from '../assets/images/acmlogo.png';

const Coin = ({ logo, alt, className, delay }) => {
  return (
    <motion.div
      className={`absolute ${className} flex flex-col items-center z-20`}
      style={{ aspectRatio: '1' }}
      initial={{ opacity: 0, scale: 0.5, rotateY: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateY: 360,
        transition: {
          delay: delay * 0.3,
          duration: 1.5,
          ease: 'easeOut',
          rotateY: {
            delay: delay * 0.3 + 1.5,
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1.5,
            repeatType: 'loop',
          },
        },
      }}
      whileHover={{
        y: -10,
        rotateY: 15,
        transition: { duration: 0.3, ease: 'easeOut' },
      }}
    >
      {/* Rope */}
<div className="absolute -top-32 left-1/2 -translate-x-1/2">
  <div className="rope relative w-1 h-32 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-[0_0_10px_rgba(255,215,0,0.6)] z-30">
    <div className="absolute top-0 left-0 w-full h-full">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 w-full h-0.5 bg-yellow-400"
          style={{ top: `${i * 25}%` }}
        />
      ))}
    </div>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_8px_rgba(255,215,0,0.8)]"></div>
  </div>
</div>


      {/* Coin */}
      <div className="w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
        <div className="relative w-full h-full" style={{ aspectRatio: '1' }}>
          <div className="absolute inset-0 bg-black border-4 border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70 rounded-full"></div>
            <div className="absolute inset-0 border-2 border-gray-600 opacity-30 rounded-full"></div>
            <div className="absolute inset-4 border border-gray-700 opacity-50 rounded-full"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt={alt} className="relative z-10 w-3/4 h-3/4 object-contain" draggable="false" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default function CoinDemo() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {/* WCE Coin */}
      <Coin logo={WCElogo} alt="WCE Logo" className="left-10 top-20 w-48 h-48" delay={0} />

      {/* PGT Coin */}
      <Coin logo={PGTLogo} alt="PGT Logo" className="right-10 top-20 w-48 h-48" delay={1} />
    </div>
  );

}
