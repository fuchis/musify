import React from 'react';
import { Button, Icon, Form, Input} from 'semantic-ui-react';
import firebase from "../../../utils/Firebase";
import "firebase/auth";
import "./RegisterForm.scss";

const RegisterForm = ({setSelectedForm}) => {
	const handledForm	= () => {

	}
	return(
      <div className="register-form">
				<h1>Empiez a escuchar con una cuenta de Musicfy gratis.</h1>
					<Form onSubmit={handledForm}>
						<Form.Field>
							<Input
								type="text"
								name="email"
								placeholder="Correo electrónico"
								icon="mail outline"
								// onChange={}
								// error = {}
							/>
						</Form.Field>
						<Form.Field>
							<Input
								type="password"
								name="password"
								placeholder="Contraseña"
								icon="eye"
								// onChange={}
								// error = {}
							/>
						</Form.Field>
						<Form.Field>
							<Input
								type="text"
								name="username"
								placeholder="¿Como deberíamos llamarte?"
								icon="user circle outline"
								// onChange={}
								// error = {}
							/>
						</Form.Field>
						<Button type='submit'>Continuar</Button>
					</Form>
					<div className="register-form__options">
						<p onClick={()=>setSelectedForm(null)}>Volver</p>
						<p>
							¿Ya tienes Musicfy?{" "}
							<span onClick={()=>setSelectedForm("login")}>Iniciar Sesión</span>
						</p>
					</div>
			</div>
    )
};

export default RegisterForm;