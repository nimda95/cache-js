# Cache-js.js

### The localStorage cache for javascript and stylesheet libraries

Using the library is pretty simple

**1. The Array object containing the sources**

```javascript
var resources = {
    onFinished: function() {
        // Callback to call when all files are loaded into the html page
	// [Suggestion] : Make this your window.onload()
    },
    files: {
        "unique name of the resource": {
            uri: "url to the file as it would be in the html page",
            version: "-",
            attributes: [{
                name: "name of the attribute",
                value: "value of the attribue"
            }],
            type: "style pr script"
        }
    }
};
```
Note: if the version is set to `-` the file will be always downloaded and never use the cached version

**2. implementing the library**

```javascript
cacheJs.initialize(resources);
```

**3. Recommendations**

It is recommended to insert the above code directly into the html code as a `script` tag with the call for the library before it, instead of making another javascript file containing the above code.
