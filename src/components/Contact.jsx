function Contact() {
  return (
    <section className="contact">

      <h2>Contact Us</h2>

      <div className="contact-cards">

        <div className="contact-card">
          <h3>📞 Phone</h3>
          <p>+91 98765 43210</p>
        </div>


        <div className="contact-card">
          <h3>✉ Email</h3>
          <p>contact@medicushospital.com</p>
        </div>


        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>
            Sector 56,
            Gurgaon, Harayana
          </p>
        </div>


        <div className="contact-card">
          <h3>🕒 Timing</h3>
          <p>
            Mon - Sun<br/>
            24/7
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;