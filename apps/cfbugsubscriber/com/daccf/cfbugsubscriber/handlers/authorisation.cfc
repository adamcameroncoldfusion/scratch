component  {


	public string function login(event, rc, prc){
		prc.title = "Login";
		event.paramValue("message", "");
		event.setView("user/login");
	}

	
	public string function authorise(event, rc, prc){
		var user	= false;
		var result	= false;
		var userSession = getPlugin("SessionStorage");

		event.noRender();

		if (structKeyExists(arguments.rc, "email") && structKeyExists(arguments.rc, "password")){
			user = getModel("User");
			result = user.authorise(email=arguments.rc.email, password=arguments.rc.password);
			
			if (result){	// this is the ID of the authorised user, or zero, so can be used as a boolean
				userSession.setVar("isLoggedIn", true);
				userSession.setVar("email", rc.email);
				userSession.setVar("id", result);
				setNextEvent(event="main.index");
			}else{
				userSession.clearAll();
				userSession.setVar("isLoggedIn", false);
				event.setValue("messages", ["Login failed for #arguments.rc.email#"]);
				setNextEvent(event="authorisation.login", persist="messages");
			}
			
		}else{
			throw(
				type	= "InvalidParametersException",
				message	= "Missing or invalid parameters",
				detail	= "You must provide an email and password to log in"
			);
		}
	}


	public string function logout(event, rc, prc){
		event.noRender();
		getModel("User").logout();
		getPlugin("SessionStorage").setVar("isLoggedIn", false);
		setNextEvent(event="authorisation.login");
	}

}