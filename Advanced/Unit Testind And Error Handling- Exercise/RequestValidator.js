function Requestf(obj){

let validmethods = ['GET','POST','DELETE','CONNECT']
let uripat = /^[w.]+$/g
let supvers = ['HTTP/O.9','HTTP/1.0','HTTP/1.1','HTTP/2.0']
let specchar = [`<`,`>`,`\\`,`&`,`'`,`"`]



if(!validmethods.includes(obj.method)){
    throw new Error('Invalid request header: Invalid Method')
}
if(!obj.hasOwnProperty('uri')){
    throw new Error ('Invalid request header: Invalid URI')
}if(obj.uri !== '*' && !obj.uri.match(uripat)){
    throw new Error ('Invalid request header: Invalid URI')
}if(!supvers.includes(obj.version)){
    throw new Error ('Invalid request header: Invalid Version')
}if(!obj.hasOwnProperty('message')){
    throw new Error ('Invalid request header: Invalid Message')
}
for(let ch of obj.message){
    if(specchar.includes(ch)){
        throw new Error ('Invalid request header: Invalid Message')
    }
}
return obj

}Requestf({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  })