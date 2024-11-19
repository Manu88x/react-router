function Login() {
    return (
      <main>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
    );
  }
  
  export default Login;
  