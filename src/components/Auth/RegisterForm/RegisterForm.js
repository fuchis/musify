import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import validateEmail from '../../../utils/Validations';
import firebase from "../../../utils/Firebase";
import "firebase/auth";
import "./RegisterForm.scss";

const RegisterForm = ({ setSelectedForm }) => {
	// Initial Form State
	const defaultValuesForm = {
		email: "",
		password: "",
		username: ""
	};

	const [formData, setFormData] = useState(defaultValuesForm);
	const [showPassword, setShowPassword] = useState(false);
	const [formError, setFormError] = useState({});
	const [IsLoading, setIsLoading] = useState(false);;
	
	const handleForm = () => {
		setFormError({});
		let errors = {};
		let formOk = true;
		
		if(!validateEmail(formData.email)) {
			errors.email = true;
			formOk = false;
		}

		if(formData.password.length < 6) {
			errors.password = true;
			formOk = false;
    }
    
    if(!formData.username) {
      errors.username = true;
      formOk = false;
    }

		setFormError(errors);
		
    if(formOk) {
      setIsLoading(true);
      firebase.auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((event) => {
				toast.success("Registro Completado");
				changeUserName();
				sendVerificationEmail();
      }).catch((c) => {
        toast.error("Error al crear la cuenta");
      }).finally(() => {
        setIsLoading(false);
        setSelectedForm(null);
      });
    }
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	}

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
	}

	const changeUserName = () => {
		firebase.auth().currentUser.updateProfile({
			displayName: formData.Name
		}).catch(() => {
			toast.error("Error al asignar el nombre de usuario");
		});
	}

	const sendVerificationEmail = () => {
		firebase.auth()
		.currentUser
		.sendEmailVerification()
		.then(() => {
			toast.success("Se ha enviado un correo electronico de verificación")
		})
		.catch(() => {
			toast.error("Error al enviar el correo de electronico de verificación");
		})
	}
	
  return (
    <div className="register-form">
      <h1>Empiez a escuchar con una cuenta de Musicfy gratis.</h1>
      <Form onSubmit={handleForm} onChange={handleChange}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            error = {formError.email}
          />
          {formError.email && (
            <span className="error-text">
            Por favor, introduce un correo electronico valido.
            </span>
          )}
        </Form.Field>
        <Form.Field>
          <Input
            type={showPassword ? "text": "password"}
            name="password"
            placeholder="Contraseña"
            icon={showPassword ? 
							(<Icon name="eye slash outline" link onClick={handleShowPassword} />) : 
							(<Icon name="eye" link onClick={handleShowPassword} />)
						}
            error = {formError.password}
          />
          {formError.password && (
            <span className="error-text">
            Por favor, elige una contraseña superior a 5 caracteres.
            </span>
          )} 
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="¿Como deberíamos llamarte?"
            icon="user circle outline"
            error = {formError.username}
          />
          {formError.username && (
            <span className="error-text">
            Por favor, introduce un nombre.
            </span>
          )}
        </Form.Field>
        <Button type="submit" loading={IsLoading}>Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          ¿Ya tienes Musicfy?{" "}
          <span onClick={() => setSelectedForm("login")}>Iniciar Sesión</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
