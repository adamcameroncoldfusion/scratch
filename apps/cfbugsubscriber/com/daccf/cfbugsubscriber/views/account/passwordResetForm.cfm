<cfoutput>#renderView("general/messages")#</cfoutput>
<cfform method="post" action="#event.buildLink('account.performPasswordReset')#" <!---onsubmit="return validateConfirmed('#prc.validationMessages.passwordMismatch#')"--->>
	<cfoutput>
		<input type="text" name="pwdChangeToken" value="#rc.pwdChangeToken#" />
		<input type="text" name="email" value="#rc.email#" />
	</cfoutput>
	<table>
		<tbody>
			<tr>
				<td><label for="password">Password:</label></td>
				<td><cfinput type="password" name="password" id="password" value="" <!---required="true" validate="regex" pattern="#prc.passwordRegex#" message="#prc.validationMessages.badPassword#"---> />(Aa1!aaaaa)</td>
			</tr>
			<tr>
				<td><label for="confirm">Confirm:</label></td>
				<td><cfinput type="password" name="confirm" id="confirm" value="" <!---required="true" validate="regex" pattern="#prc.passwordRegex#" message="#prc.validationMessages.badConfirm#"---> /></td>
			</tr>
			<tr>
				<td colspan="2" align="right">
					<input type="submit" name="btnSubmit" value="Reset &raquo;" />
				</td>
			</tr>
		</tbody>
	</table>
</cfform>