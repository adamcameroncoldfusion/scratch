<cfif structKeyExists(URL, "bootstrapOnly") and isBoolean(URL.bootstrapOnly) and URL.bootstrapOnly>
	<cflog application="true" file="appStartUp" type="information" text="App3 active">
<cfelse>
	This is my app.
</cfif>