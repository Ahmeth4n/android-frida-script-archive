Java.perform(function () {
    var ClassName = Java.use('com.spotify.connectivity.httpconnection.HttpConnectionImpl');
    console.log("spotify request hooker! / ahmeth4n.github.io");
    ClassName.send.overload("com.spotify.core.http.HttpConnection", "com.spotify.core.http.HttpRequest", "com.spotify.core.http.HttpOptions").implementation=function(param1,param2,param3){
		
		var byteData = param2.mHeaders.value+ '';
		var bodyPure = param2.mBody.value+ '';
		var parsedData = byteData.split(",");
		
		var header_data = "";
		var bodyData = "";
		

		for (var i = 0; i < parsedData.length; i++) {
			header_data += String.fromCharCode(parsedData[i])
		}
		
		for (var i = 0; i < bodyPure.length; i++) {
			bodyData += String.fromCharCode(bodyPure[i])
		}
		
		
		console.log("############################################################");
		console.log("URL : + "+param2.mUrl.value)
		console.log("Method : + "+param2.mMethod.value)
		console.log("Body : + "+bodyData)
		console.log("Headers : + "+header_data)
		console.log("############################################################");
		//console.log(header_data)

		this.send.overload("com.spotify.core.http.HttpConnection", "com.spotify.core.http.HttpRequest", "com.spotify.core.http.HttpOptions").call(this, param1,param2,param3);
    }
});
