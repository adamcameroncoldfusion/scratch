<cfset cv = createObject("java", "ClassViewer")>

<pre>
<cfoutput>#cv.viewObject("")#</cfoutput>
</pre>

<cfset testString = "The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.  The quick brown fox jumps over the lazy dog.">

<cfdump var="#testString.split('quick')#">