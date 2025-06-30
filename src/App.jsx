import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";
import AdmissionPage from "./pages/AdmissionPage";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";


function App() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
   return(
    <>
       <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Samiksha Dhanaji Chougale & Pooja Dhas"
          studentPhotoUrl="\Images\samiksha (2).jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
     <Router>
        <div className="main-layout">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage/>} />
              <Route path="/courses" element={<CoursesPage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
              <Route path="*" element={<NotFoundPage/>} />
            </Routes>
          </div>
          <Footer />
           <ChatbotComponent />
        </div>
      </Router>

     </>   
    );

  }


export default App;