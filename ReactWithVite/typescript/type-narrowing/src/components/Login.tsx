export default function Login(){


    return(
        <>
            <div className="card">
                <h2>✔️ Create Account</h2>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="error" type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" id="email" required />
                    </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="password" required />
                    </div>
                     <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                    <button className="submit-btn" type="submit">Create Account</button>


                </form>
            </div>
        </>
    );
}