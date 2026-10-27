function Login() {

  return (

    <section className="login-page">


      <div className="login-card">


        <div className="login-icon">
          🏥
        </div>


        <h1>
          Welcome Back
        </h1>


        <p>
          Login to manage your appointments
        </p>




        <input
          type="email"
          placeholder="Email Address"
        />



        <input
          type="password"
          placeholder="Password"
        />



        <button>
          Login
        </button>



        <p className="register-text">

          Don't have an account?

          <a href="/register">
  Register
</a>

        </p>



      </div>


    </section>

  );

}


export default Login;