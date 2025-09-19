import CircularGallery from "./ui/CircularGallery";

function Gallary() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CircularGallery
        bend={0}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
}

export default Gallary;
