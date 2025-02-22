// The 'Signup' should be a link to redirect the user to the signup page.
// Successful Login should redirect the user to the Home Page
function Login() {
    return (
        <form>
            <h3>have an acount? Signup</h3>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="XXXXXXXX" />
        </form>
    )
}

export default Login
