import CircularGallery from "./ui/CircularGallery";
import DSA5 from "../assets/images/Dsa_5.png";

function Gallary() {
  return (
    <div>
      {/* Remove bottom margin on the image */}
      <img
        src={DSA5}
        alt="Gallery"
        className="w-[80%] sm:w-[70%] md:w-[30%] lg:w-[30%] h-auto object-contain mx-auto mt-4 mb-0"
      />

      {/* No negative margin, just sits right below */}
      <div className="relative" style={{ height: "500px" }}>
        <CircularGallery
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
}

export default Gallary;
