import React, { Fragment } from 'react'

const Register = () => {
    return (
        <Fragment>
            <h2 className="text-center mt-4">Registra tus datos</h2>
            <div className="row my-2">
                <div className="col-md-10 mt-2">
                    <form>
                        <div className="form-group">
                            <label for="userName">Nombre</label>
                            <input type="text" className="form-control" id="userName" />
                        </div>

                        <div className="form-group">
                            <label for="userLastName">Apellidos</label>
                            <input type="text" className="form-control" id="userLastName" />
                        </div>

                        <div className="form-group">
                            <label for="staticEmail">Email</label>
                            <input type="text" className="form-control" id="staticEmail" value="email@example.com" />   
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <div className="form-group">
                            <label for="exampleSelect2">Género</label>
                            <select multiple="" className="form-control" id="exampleSelect2">
                                <option>Hombre</option>
                                <option>Mujer</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">Registarse</button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
