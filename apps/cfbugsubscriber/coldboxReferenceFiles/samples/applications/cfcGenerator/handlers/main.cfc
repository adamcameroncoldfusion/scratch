<!-----------------------------------------------------------------------Author 	 :	Your NameDate     :	September 25, 2005Description :	This is a ColdBox event handler where all implicit methods can go.	Thus its the main handler.Please note that the extends needs to point to the eventhandler.cfcin the ColdBox system directory.extends = coldbox.system.EventHandler-----------------------------------------------------------------------><cfcomponent name="main" extends="coldbox.system.EventHandler" output="false">	<cffunction name="onAppInit" access="public" returntype="void" output="false">		<cfargument name="Event" type="any">	</cffunction>	</cfcomponent>