/*
if the library you are trying to hook is not loaded when the application is started - if it is loading late,
you can hook it as soon as it is loaded with this little script.
*/

var libraryName = "libnative-lib.so";

function printHex(baseAddress){
	console.log(hexdump(baseAddress,
	{
		ansi:true
	}));
	
}

function hook_native(){
	var module = Process.findModuleByName(libraryName);
	Module.enumerateExportsSync(module.name).forEach(function (exp) {
		console.log("hook_native() - "+exp.name+" called: " + module.name + " - address: " + ptr(exp.address))
       try {
           Interceptor.attach(ptr(exp.address), {
               onEnter: function (args) {
                   printHex(args[0]);
                 // ...
               },
			   onLeave: function(ret){
				   printHex(ret);
			   }

           });
        } catch (e) {
           console.log("hook_native() - got exception: " + e + " / lib: " + module.name);
        }
   });
   
}
   
function hook_android_dlopen_ext() {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
        onEnter: function (args) {
            this.name = args[0].readCString();
            console.log("android_dlopen_ext:", this.name);
        }, onLeave: function (retval) {
            if (this.name.indexOf(libraryName) > 0) {
                hook_native();
            }
        }
    })
}
hook_android_dlopen_ext();
