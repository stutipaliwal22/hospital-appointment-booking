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
          Book appointments with experienced doctors
          and get quality healthcare at your convenience.
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