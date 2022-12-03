Java.perform(function() {
    var CryptoPubNative = Java.use('com.facebook.cryptopub.CryptoPubNative');

    var cryptoNative = CryptoPubNative.encrypt.overload("int", "java.lang.String", "java.lang.String", "java.lang.String");
    cryptoNative.implementation = function(keyID, rsaPublicKey, passwordText, timestamp) {
		console.log("!!!! PARAMS !!!!");
		console.log("Key ID: " + keyID)
		console.log("RSA Key: ")
		console.log(rsaPublicKey)
		console.log("Password: " + passwordText)
		console.log("Timestamp: " + timestamp)
        return cryptoNative.call(this, keyID, rsaPublicKey, passwordText, timestamp);
    };
});
