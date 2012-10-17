<!-----------------------------------------------------------------------Author 	 :	Henrik JoretegDate     :	October, 2008Description :	This is a ColdBox event handler where all implicit methods can go.	Thus its the main handler.Please note that the extends needs to point to the eventhandler.cfcin the ColdBox system directory.extends = coldbox.system.EventHandler-----------------------------------------------------------------------><cfcomponent name="main" extends="coldbox.system.EventHandler" output="false" cache="true" cacheTimeout="0"><!----------------------------------- CONSTRUCTOR --------------------------------------->			<cffunction name="init" access="public" returntype="any" output="false" hint="constructor">		<cfargument name="controller" type="any">		<cfset super.init(arguments.controller)>				<!--- Any constructor code here --->		<cfreturn this>	</cffunction><!----------------------------------- PUBLIC EVENTS --------------------------------------->		<cffunction name="onAppInit" access="public" returntype="void" output="false">		<cfargument name="Event" type="any">		<!--- ON Application Start Here --->	</cffunction>	<cffunction name="onRequestStart" access="public" returntype="void" output="false">		<cfargument name="Event" type="any">		<cfset var rc = event.getCollection()>				<cfset event.paramValue("pageTitle","Simple Blog")>	</cffunction></cfcomponent>