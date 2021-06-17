import React from "react";
import {Link} from 'react-router-dom'
import './resetpassword.css';

function ResetPassword(){
    return <div className="d-flex align-items-center text-center form-container">
        <form className="form-reset">
           <img className="mb-4" src="/images/logo-small2.png" alt="" />            
            <h1 className="h3 mb-3 fw-normal">Recuperar conta</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="email"/>
                <label for="floatingInput">E-mail</label>
            </div>                  

            <button className="w-100 btn btn-lg btn-primary" type="submit">Enviar</button>

            <div className="login-links mt-5">
                <Link to="/app/createuser" className="mx-3">Já tenho uma conta</Link>
            </div>        

            <p className="mt-5 mb-3 text-muted">&copy; Dorivan Silva Sousa</p>           

        </form>        
    </div>
}

export default ResetPassword;