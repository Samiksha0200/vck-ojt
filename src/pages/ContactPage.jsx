// src/pages/ContactPage.jsx
const ContactPage = () => {
    return(
      <div className="page-containt">
        <div className="page-container" style={{overflow: "auto"}}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
          <h2>General Enquiries</h2>
          
          <p>
            <strong>Vivekanand College Main Campus</strong> <br></br>
            [Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
            <br></br>
            India
          </p>
          <p>
                Phone: +91 12345 67890<br></br>
                Email: info@vivekanandcollege.edu<br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h2>Admissions Office</h2>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
              Phone: +91 9876543210<br></br>
              Email:admissions@vivekanandcollege.edu
            </p>
            <h2>Student Support Services</h2>
            <p>For current student support, academic advising, or general assistance:<br></br>
              Phone: +91 87654 32109<br></br>
              Email: studentsupport@vivekanandcollege.edu</p>
            <h2>Find Us on the Map</h2>
            <p>
             <a href="https://maps.google.com/?q=Vivekanand+College" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </p>
            <h2>Send Us a Message</h2>
            <p>
              [A contact form with fields for Name, Email, Subject, Message can be added here.]
            </p>
        </div>
        </div>
    );
}

export default ContactPage;