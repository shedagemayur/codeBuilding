<!DOCTYPE html>
<html>
<head>
	<title>E2EE</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
</head>
<body>
<script>
	let code = (function(){
    	return{
    		encryptMessage: function(messageToencrypt = '', secretkey = ''){
		    	var encryptedMessage = CryptoJS.AES.encrypt(messageToencrypt, secretkey);
		    	return encryptedMessage.toString();
    		},
    		decryptMessage: function(encryptedMessage = '', secretkey = ''){
    			var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretkey);
    			var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

    			return decryptedMessage;
    		}
    	}
	})();
</script>
</body>
</html>

<!--

fn: code.encryptMessage('Hello CometChat !', 'cometchat_psk');
op: "U2FsdGVkX18qk9ioWo+cHzQJ1GDZSDnoVE8/EMJ7LkoFgnlJS7Mr4SC8ehx6T2NO"
fn: code.decryptMessage('U2FsdGVkX18qk9ioWo+cHzQJ1GDZSDnoVE8/EMJ7LkoFgnlJS7Mr4SC8ehx6T2NO', 'cometchat_psk')
op: "Hello CometChat !"

fn: code.encryptMessage('E2EE is now available in CometChat', 'cometchat_psk');
op: "U2FsdGVkX1/e5moT+PcAj3eMSeRcLdQjZ9mMZbHZatXLbD23B5AGSc9X3xB2qOWz20EH4yw0xv15dAMesu58yw=="
fn: code.decryptMessage('U2FsdGVkX1/e5moT+PcAj3eMSeRcLdQjZ9mMZbHZatXLbD23B5AGSc9X3xB2qOWz20EH4yw0xv15dAMesu58yw==', 'cometchat_psk')
op: "E2EE is now available in CometChat"

fn: code.encryptMessage('Welcome to Social zone', 'cometchat_zone');
op: "U2FsdGVkX1+QegDDs9Gj3NvM1Sj90klhTaMdLGSuiDnmH57o/O14iqA1RbZ8g3H7"
fn: code.decryptMessage('U2FsdGVkX1+QegDDs9Gj3NvM1Sj90klhTaMdLGSuiDnmH57o/O14iqA1RbZ8g3H7', 'cometchat_psk')
op: ""
fn: code.decryptMessage('U2FsdGVkX1+QegDDs9Gj3NvM1Sj90klhTaMdLGSuiDnmH57o/O14iqA1RbZ8g3H7', 'cometchat_zone')
op: "Welcome to Social zone"

 -->