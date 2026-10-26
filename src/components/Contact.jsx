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
          <p>contact@medicarehospital.com</p>
        </div>


        <div className="contact-card">
          <h3>📍 Address</h3>
          <p>
            123 Health Street,
            Greater Noida, Uttar Pradesh
          </p>
        </div>


        <div className="contact-card">
          <h3>🕒 Timing</h3>
          <p>
            Mon - Sat<br/>
            8:00 AM - 8:00 PM
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;