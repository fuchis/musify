import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import validateEmail from "../../../utils/Validations";
import firebase from "../../../utils/Firebase";
import "firebase/auth";
import "./LoginForm.scss";

const LoginForm = ({ setSelectedForm }) => {
	
	const [showPassword, setShowPassword] = useState(false);
	
	const handleForm = () => {
		console.log("submit")
	}

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	}

	return(
		<div className="login-form">
			<h1>Música para todos.</h1>
			<Form onSubmit={handleForm}>
				<Form.Field>
					<Input
						type="text"
						name="email"
						placeholder="Correo electrónico"
						icon="mail outline"
					/>
				</Form.Field>
				<Form.Field>
					<Input
						type={showPassword ? "text":"password"}
						name="password"
						placeholder="Contraseña"
						icon={
							showPassword ? 
							(<Icon name="eye slash outline" link onClick={handleShowPassword}/>) :
							(<Icon name="eye" link onClick={handleShowPassword}/>)
						}
					/>
				</Form.Field>
				<Button type="submit">Iniciar Sesión</Button>
			</Form>
			<div className="login-form__options">
				<p onClick={() => setSelectedForm(null)}>Volver</p>
				<p>
					¿No tienes cuenta?{" "}
					<span onClick={() => setSelectedForm("register")}>Registrarte</span>
				</p>
			</div>
		</div>
	)
}

export default LoginForm;