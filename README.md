# Cache-js.js

### The localStorage cache for javascript and stylesheet libraries

Using the library is pretty simple

**1. The Array object containing the sources**

>```javascript
var resources = [
	{
		uri:"some url to the resource",
		type:"either 'script' or 'style'",
		name:"a unique name for this library between the others",
		version:"an indicator for the version",
	}
];

**2. implementing the library**

>```javascript
_cache(resources, function(){
	// Make this your window.onload
	alert('Finished Loading :)');
});

**3. Recommendations**

It is recommended to insert the above code directly into the html code as a `script` tag with the call for the library before it, instead of making another javascript file containing the above code.
