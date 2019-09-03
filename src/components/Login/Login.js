import React, { Fragment } from 'react';

const Login = () => {
    return (
        <Fragment>
            <h2 className="text-center mt-4">Inicia Sesión</h2>
            <div className="row my-5">
                <div className="col-md-10 mt-2">
                    <form>  
                        <div className="form-group">
                            <label for="staticEmail">Email</label>
                            <input type="text" className="form-control" id="staticEmail" value="email@example.com" />
                        </div>
                            
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                            
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button> 
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Login
