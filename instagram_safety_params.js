/*

com.instagram.nux.deviceverification.impl.VerificationPluginImpl.startDeviceValidation(android.content.Context, java.lang.String) : void
Descriptor: Lcom/instagram/nux/deviceverification/impl/VerificationPluginImpl;->startDeviceValidation(Landroid/content/Context;Ljava/lang/String;)V

target package: package com.instagram.nux.deviceverification.impl;

*/

function googlePlayAvailable(){
	var GoogleApiAvailability = Java.use('com.google.android.gms.common.GoogleApiAvailability');

	var GoogleApiAvailability_isGooglePlayServicesAvailable_0 = GoogleApiAvailability.isGooglePlayServicesAvailable.overload("android.content.Context");
	GoogleApiAvailability_isGooglePlayServicesAvailable_0.implementation = function(context0) {
		console.log(`[+] Hooked com.google.android.gms.common.GoogleApiAvailability.isGooglePlayServicesAvailable(context0)`);
		var return_call = GoogleApiAvailability_isGooglePlayServicesAvailable_0.call(this, context0);
		console.log("isGooglePlayServicesAvailable() return value before changing: " + return_call);
		return 0;
	};
}

function xCaj(){
	var CAj = Java.use('X.CAj');

    var CAj_init_0 = CAj.$init.overload("java.lang.String", "java.lang.Integer", "java.lang.String");
    CAj_init_0.implementation = function(s, integer0, s1) {
		console.log("safetynet params - CAj$init got:")
        console.log(`[+] Hooked X.CAj.$init(s, integer0, s1)`);
		console.log(s);
		console.log(integer0);
		console.log(s1);
        return CAj_init_0.call(this, s, integer0, s1);
    };
}

function startDeviceValidation(){
	var VerificationPluginImpl = Java.use('com.instagram.nux.deviceverification.impl.VerificationPluginImpl');

    var VerificationPluginImpl_startDeviceValidation_0 = VerificationPluginImpl.startDeviceValidation.overload("android.content.Context", "java.lang.String");
    VerificationPluginImpl_startDeviceValidation_0.implementation = function(context0, s) {
		console.log("safetynet generate function - startDeviceValidation() got:")
		console.log(s);
		console.log(context0);
        console.log(`[+] Hooked com.instagram.nux.deviceverification.impl.VerificationPluginImpl.startDeviceValidation(context0, s)`);
        return VerificationPluginImpl_startDeviceValidation_0.call(this, context0, s);
    };
}

function safetyInner(){	
	var x5Vo = Java.use('X.5Vo');

    var x5Vo_A0w_0 = x5Vo.A0w.overload("java.lang.String", "java.lang.StringBuilder");
    x5Vo_A0w_0.implementation = function(s, stringBuilder0) {
		console.log("safetynet function inner - A0w() return:");
		console.log(s);
		console.log(stringBuilder0);
        console.log(`[+] Hooked X.5Vo.A0w(s, stringBuilder0)`);
        return x5Vo_A0w_0.call(this, s, stringBuilder0);
    };
}


function safety_probably(){
    var x9dr = Java.use('X.9dr');
    var x9dr_init_0 = x9dr.$init.overload("X.4eo", "java.lang.String", "[B");
    x9dr_init_0.implementation = function(x4eo0, s, arr_b) {
        console.log(`[+] Hooked X.9dr.$init(4eo0, s, arr_b)`);
		console.log("class val:")
		console.log(x4eo0);
		console.log("string val: " + s);
		console.log("byte val:")
		console.log(arr_b);
        return x9dr_init_0.call(this, x4eo0, s, arr_b);
    };
}

function feedback_required(){
    var x2So = Java.use('X.2So');
    var x2So_A03_0 = x2So.A03.overload("X.3m7", "X.1Id");
    x2So_A03_0.implementation = function(x3m70, x1Id0) {
		console.log("x3m70" + x3m70);
		console.log("x1Id0" + x1Id0);
        console.log(`[+] Hooked X.2So.A03(3m70, 1Id0)`);
        return x2So_A03_0.call(this, x3m70, x1Id0);
    };
	
}

Java.perform(function() {
  xCaj();
	startDeviceValidation();
	googlePlayAvailable();
	safetyInner();
	safety_probably();
	feedback_required();
});
