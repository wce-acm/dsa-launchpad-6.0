import { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Background from "./components/Background";
import Landing from "./components/Landing";
import RegistrationForm from "./components/RegistrationForm";
import SessionCard from "./components/Session";
import Particles from "./components/ui/Particles";
import Footer from "./components/Footer";
import Gallary from "./components/Gallary";
import EventSpotlight from "./components/Event";
import Loader from "./components/ui/Loader";
import RegistrationSection from "./components/RegistrationSection";
import StudentDashboard from "./components/StudentDashboard"; // 👈 Add this

function App() {
  const registrationRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 60, left: 0, behavior: "instant" });
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* ✅ Public Event Website */}
        <Route
          path="/"
          element={
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow relative">
                <Background>
                  <Landing
                    onRegisterClick={() =>
                      registrationRef.current?.scrollIntoView({ behavior: "smooth" })
                    }
                  />
                  <SessionCard />
                  <EventSpotlight mt-16 />
                  <Gallary />
                  <div ref={registrationRef}>
                    <RegistrationForm />
                  </div>
                  {/* <RegistrationSection
                    formLink="https://forms.gle/f8od9FdNBeUcgHnK8"
                    message="Also fill the below form to register and secure your spot."
                  /> */}
                </Background>
              </div>
              <Footer />
            </div>
          }
        />

        {/* ✅ Admin Dashboard Route */}
        <Route path="/admin" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
