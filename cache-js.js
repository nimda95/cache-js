/*
*	© Aymane Taibi 2016
*	github/justmeziko/cacheres
*	This script uses the HTML5 localStorage API to cache css and js files instead of the normal browser cache.
*/
var _loaded=function(){},_injectFile=function(t,c,s){
	var d = document.createElement(t);
	d.appendChild(document.createTextNode(c));
	document.head.appendChild(d);
	s();
},_getFileXhr=function(f,c){
	var x=new XMLHttpRequest();
	x.onreadystatechange=function(){
		if(x.readyState === 4){
			if([304,302,200,201,202].indexOf(x.status)!==-1){
				localStorage.setItem(f.name, x.responseText);
				_injectFile(f.type, x.responseText, _loadFiles);
			}else{
				c(x.status);
			}
			
		}
	};
	x.open("GET",f.uri,true);
	x.send();
},_loadFile=function(f){
	localStorage.getItem(f.name)!==null
		? _injectFile(f.type,localStorage.getItem(f.name),_loadFiles)
		: _getFileXhr(f,function(n){alert('File '+f.name+' load error ('+n+')')});
},_loadFiles=function(){
	i++;
	i===db.length?_loaded():_loadFile(db[i]);
},_cache=function(a,c){
	_loaded=c;
	db=a;_loadFiles();
},i=-1,db=[];
