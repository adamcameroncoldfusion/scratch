﻿<cfcomponent output="false">	<!--- Default Action --->	<cffunction name="index" returntype="void" output="false" hint="My main event">		<cfargument name="event">		<cfargument name="rc">		<cfargument name="prc">				<cfset rc.welcomeMessage = "Welcome to ColdBox!">					<cfset event.setView("home")>	</cffunction><!------------------------------------------- PRIVATE EVENTS ------------------------------------------>
	</cfcomponent>