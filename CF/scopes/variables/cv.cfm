<cfset oCv = createObject("java", "ClassViewer")>

<cfset o = createObject("java", "coldfusion.runtime.LocalScope").init()>
<pre>
<cfoutput>
#oCv.viewObject(o)#
</cfoutput>
</pre>

<hr />
<!--- <cfset o = createObject("java", "coldfusion.runtime.ScopeSearchResult").init("o)>
<pre>
<cfoutput>
#oCv.viewObject(o)#
</cfoutput>
</pre>
 --->