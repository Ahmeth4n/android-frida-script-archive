function get_lib_modules(library,module_name){
	var process = Process.enumerateModules()
	var i =0;

	for(i=0;i<process.length;i++){

		if(process[i].path.indexOf(library)!=-1)
		{
			var exports = process[i].enumerateExports()
			for(var j =0;j<exports.length;j++){

				if(exports[j].name.indexOf(module_name)!=-1)
				{
					console.log(JSON.stringify(exports[j])+"\n")
				}

		  
			}
		}
	}
}

get_lib_modules('libsscronet','Cronet') //first parameter target library name, second parameter is the prefix / few characters of the module we want listed
