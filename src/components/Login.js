const Login = () => {

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container">
                    <div className="card">

                        <div className="card-header">
                            <h1>Login</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group"></div>
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input className="form-control"></input>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group"></div>
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" className="form-control"></input>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group"></div>
                                    <label>Full Name <span className="errmsg">*</span></label>
                                    <input className="form-control"></input>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group"></div>
                                    <label>Email <span className="errmsg">*</span></label>
                                    <input className="form-control"></input>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Login</button>
                            <a className="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>


            
        </div>
    );
}

export default Login;