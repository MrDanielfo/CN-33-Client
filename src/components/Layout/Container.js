import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Container = () => {
    return (
        <Fragment>
            <div className="jumbotron">
                <h1 className="display-3">Bienvenido a Chubber Eats</h1>
                <p className="lead">Pide tu comida de tus lugares favoritos desde donde te encuentres!</p>
                <hr className="my-4" />
                <p className="lead">Si aún no eres miembro</p>
                <p className="lead">
                <Link to='/register' className="btn btn-primary btn-lg">
                    Regístrate
                </Link>
                </p>
            </div>
        </Fragment>
    )
}

export default Container;
