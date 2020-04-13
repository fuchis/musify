import React, { useState } from 'react';
import AuthOptions from "../../components/Auth/AuthOptions";
import RegisterForm from "../../components/Auth/RegisterForm";
import LoginForm from "../../components/Auth/LoginForm";
import BackgroundAuth from "../../assets/img/jpg/background-auth.jpg";
import LogoNameWhite from "../../assets/img/png/logo-name-white.png";
import "./Auth.scss";

const Auth = () => {
	
	const [selectedForm, setSelectedForm] = useState(null);

	const handledForm = () => {
		switch(selectedForm) {
			case "login": 
				return <LoginForm setSelectedForm={setSelectedForm}/>
			case "register":
				return <RegisterForm setSelectedForm={setSelectedForm}/>; 
			default:
				return <AuthOptions setSelectedForm={setSelectedForm}/>
		}
	}

  return (
		<div className="auth" style={{ backgroundImage: `url(${BackgroundAuth})`}}>
			 <div className="auth__dark"></div>
			 <div className="auth__box">
				 <div className="auth__box-logo">
					 <img src={LogoNameWhite} alt="Musicfy"/>
				 </div>
				 { handledForm() }
			 </div>
		</div>
  );
}

export default Auth;
