function Services() {

  const services = [
    "❤️ Cardiology",
    "🧠 Neurology",
    "🦴 Orthopedics",
    "👶 Pediatrics",
    "👁 Ophthalmology",
    "🩺 General Medicine"
  ];

  return (
    <section className="services">

      <h2>Our Medical Services</h2>

      <p>
        We provide advanced healthcare services with
        experienced doctors and modern facilities.
      </p>

      <div className="service-cards">

        {
          services.map((service, index) => (
            <div className="service-card" key={index}>
              {service}
            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Services;