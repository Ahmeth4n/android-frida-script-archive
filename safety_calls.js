Java.perform(function() {
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            if(className.includes("android.gms")){
				console.log("founded classes: " + className);
			}
        },
        onComplete: function() {}
    });
});
