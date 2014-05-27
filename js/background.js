var hash = {
	"http://localhost:3000/javascripts/lib/backbone-1.1.0.min.js" : "http://backbonejs.org/backbone.js",
	"https://www.facebook.com/plugins/*" : ""
};

chrome.webRequest.onBeforeRequest.addListener(
	function(details){
		console.log("Lib found: " + details.url);
		for(key in hash){
			if(new RegExp(key, "i").test(details.url)){
				return { redirectUrl : hash[key] };
			}
		}
	},
	{
		urls : Object.keys(hash),
		types : ["script"]
	},
	["blocking"]
);