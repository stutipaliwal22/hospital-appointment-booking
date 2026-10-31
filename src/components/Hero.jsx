function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          Your Health,
          <br />
          <span>Our No.1 Priority</span>
        </h1>

        <p>
          Medicus Hospital is dedicated to providing trusted, compassionate, and high-quality healthcare services. Our team of experienced doctors, skilled nurses, and healthcare professionals ensures personalized care with the support of modern medical technology.

With 24/7 emergency services, we provide timely medical assistance whenever you need it. 
        </p>

<a href="/book-appointment">
        <button>
          Book Appointment
        </button>
    </a>

        <button className="outline">
          View Doctors
        </button>

      </div>


      <div className="hero-image">
        <img
          src="https://pimwp.s3-accelerate.amazonaws.com/2023/09/Untitled-design-6-12.png"
          alt="Hospital"
        />
      </div>

    </section>
  );
}

export default Hero;