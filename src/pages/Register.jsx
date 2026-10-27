function Register() {

  return (

    <section className="login-page">


      <div className="login-card">


        <div className="login-icon">
          🏥
        </div>


        <h1>
          Create Account
        </h1>


        <p>
          Register to book and manage appointments
        </p>



        <input
          type="text"
          placeholder="Full Name"
        />



        <input
          type="email"
          placeholder="Email Address"
        />



        <input
          type="password"
          placeholder="Password"
        />



        <button>
          Register
        </button>



        <p className="register-text">

          Already have an account?

          <a href="/login">
  Login
</a>

        </p>


      </div>


    </section>

  );

}


export default Register;