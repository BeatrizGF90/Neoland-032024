import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import './Register.css';
import { registerUser } from "../services/user.service";
import { useErrorRegister } from "../hooks";

export const Register = () => {

    //! 1) crear los estados
    // estado que setea la respuesta
    // estado para cuando está cargando la solicitud de registro y se deshabilitan los botones
    // estado de navegacion ok --> la función register está ok

    const [ res, setRes ] = useState({});
    const [ send, setSend ] = useState(false);
    const [ ok, setOk ] = useState(false);

    //! 2) llamada al hook de react hook form
    /** El handleSubmit sirve para ejecutar la funcion que gestiona los datos del formulario (punto 3)
     * 
     * Estos datos son registrados en un objeto gracias al register de la liberia de reacthookform
     * que lo que hace es registrar los valores de los input
     * 
     * Cuando el register hace el formData, lo recibe la función que pasamos en el handleSubmit
     */
    const { register, handleSubmit } = useForm();

    //! 3) la funcion que gestiona los datos del formulario
    const formSubmit = async (formData) => {
        // esta es la funcion que va a llamar al servicio de la api
        console.log(formData);

        // llamada al servicio
        setSend(true);
        setRes(await registerUser(formData));
        setSend(false);
    }

    //! 4) useEffects que gestionan la repuesta y manejan los errores
    useEffect(() => {
        // aqui voy a llamar a un customHook para gestionar los errores
        useErrorRegister()

        console.log('res', res);
        console.log('send', send);
      }, [res, send])
    

    //! 5) estados de navegacion

    return (
    <>
        <div className="form-wrap">
            <h1>Sign Up</h1>
            <p>It’s free and only takes a minute.</p>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className="user_container form-group">
                    <input
                    className="input_user"
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="false"
                    {...register("name", { required: true })}
                    />
                    <label htmlFor="custom-input" className="custom-placeholder">
                    username
                    </label>
                </div>
                <div className="password_container form-group">
                    <input
                    className="input_user"
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="false"
                    {...register("password", { required: true })}
                    />
                    <label htmlFor="custom-input" className="custom-placeholder">
                    password
                    </label>
                </div>

                <div className="email_container form-group">
                    <input
                    className="input_user"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="false"
                    {...register("email", { required: true })}
                    />
                    <label htmlFor="custom-input" className="custom-placeholder">
                    email
                    </label>

                    <div className="sexo">
                    <input
                        type="radio"
                        name="sexo"
                        id="hombre"
                        value="hombre"
                        {...register("gender")}
                    />
                    <label htmlFor="hombre" className="label-radio hombre">
                        Hombre
                    </label>
                    <input
                        type="radio"
                        name="sexo"
                        id="mujer"
                        value="mujer"
                        {...register("gender")}
                    />
                    <label htmlFor="mujer" className="label-radio mujer">
                        Mujer
                    </label>
                    <input
                        type="radio"
                        name="sexo"
                        id="otros"
                        value="otros"
                        {...register("gender")}
                    />
                    <label htmlFor="otros" className="label-radio otros">
                        Otros
                    </label>
                    </div>
                </div>

                <div className="btn_container">
                    <button
                    className="btn"
                    type="submit"
                    disabled={send}
                    style={{ background: send ? "#49c1a388" : "#2f7a67" }}
                    >
                    Register
                    </button>
                </div>
            </form>
        </div>
    </>
    )
}
