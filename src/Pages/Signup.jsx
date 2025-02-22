// The 'Signin' should be a link to redirect the user to the signin page.

function Signup() {
    return (
        <form>
            <h3>have an acount? Signin</h3>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder="username" />

            <label htmlFor="email">Email</label>
            <input type="text"  placeholder="test@yahoo.com" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="XXXXXXXX" />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" placeholder="XXXXXXXX" />

             <p>Forgot password? </p>
             <p>Reset password here.</p>
        </form>
    )
}

export default Signup
