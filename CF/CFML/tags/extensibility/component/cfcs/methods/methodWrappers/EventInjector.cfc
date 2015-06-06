/**
* @hint Utility component for adding event injection methods into an object
* @output false
*/
component {

	/**
	* @hint Inserts injector methods into the specified object, and returns it
	* @output false
	* @obj The object to insert the injector into
	*/
	public any function insertInjector(any obj){
		arguments.obj["injectEvent"]	= variables.injectEvent;		// bulldoze alert!
		arguments.obj["onMissingMethod"]= variables._onMissingMethod;	// bulldoze alert!

		return arguments.obj;

	}

	/**
	*	@hint This is injected into another object as a public function.  It can then be used to inject event handlers into methods of that object
	*	@output false
	*	@method The name of the method to inject the event hook/handler into
	*	@event The event hook to inject (one of "before" or "after")
	*	@handler The handler to run. If the handler is for the before event, it needs to expect to have the arguments from the original method to be passed to it, and return the arguments passed-in (after modifying them if so called for). If it's for the after event, it should expect to receive two arguments: args, the original args passed to the method; result, the result generated by the method call.  Should return the same type as the original method.
	* 
	*/

	private boolean function injectEvent(string method, string event, any handler){
		// make sure the struct is there
		if (not structKeyExists(variables, "_injectedEvents")) {
			variables._injectedEvents = structNew();	// TODO: don't bulldoze this
		}
		if (not structKeyExists(variables._injectedEvents, arguments.method)) {
			variables._injectedEvents[arguments.method] = structNew();
		}

		// put the real method "in storage" (only if it's not already there)
		if (not isDefined("variables._injectedEvents.#arguments.method#.actual") and structKeyExists(variables, arguments.method)){
			variables._injectedEvents[arguments.method].actual = variables[arguments.method];
		}
		// and store the handler for the event
		variables._injectedEvents[arguments.method][arguments.event]= arguments.handler;

		// get rid (any future calls will be picked up by onMissingMethod()
		structDelete(this, arguments.method);		// public
		structDelete(variables, arguments.method);	// private

		return true;
	}


	/**
	* @hint This method is injected into the target object.  We've changed its name slightly so it snot operational in the context of THIS CFC
	* @output false
	* @missingMethodName The name of the method being called
	* @missingMethodArguments Its arguments
	*/
	private any function _onMissingMethod(string missingMethodName, struct missingMethodArguments=structNew()){
		if (isDefined("variables._injectedEvents.#arguments.missingMethodName#")){
		 	// we've trapped it

		 	// run any before event, which should return the arguments passed-in (with any alterations)
			if (structKeyExists(variables._injectedEvents[arguments.missingMethodName], "before")){
				fnTemp = variables._injectedEvents[arguments.missingMethodName].before;	// this two-step is to work around a CF bug in that scoped functions cannot be called with named args :-|
				arguments.missingMethodArguments = fnTemp(argumentCollection=arguments.missingMethodArguments);
			}

			// run the method itself, preserve any result
			fnTemp = variables._injectedEvents[arguments.missingMethodName].actual;
			instance.returnVal = fnTemp(argumentCollection=arguments.missingMethodArguments);

			// run any after event, pass in the result of the method call, and the arguments used.  Method should return an equivalent result to the original method
			if (structKeyExists(variables._injectedEvents[arguments.missingMethodName], "after")){
				fnTemp = variables._injectedEvents[arguments.missingMethodName].after;
				if (structKeyExists(instance, "returnVal")){	// I could probably horse around with an argumentCollection here, but it'd be the same amount of code
					instance.returnVal = fnTemp(args=arguments.missingMethodArguments, result=instance.returnVal);
				}else{
					instance.returnVal = fnTemp(args=arguments.missingMethodArguments);
				}
			}
			return instance.returnVal;
		}else{	// we haven't done anything to this method, so don't handle it (and yes, this will error: it's by design)
			fnTemp = variables[arguments.missingMethodName];
			return fnTemp(argumentCollection=arguments.missingMethodArguments);
		}
	}

}