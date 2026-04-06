//3)What is the output of the following code:
const object = {
    message: 'Hello, World!',
    logMessage()
{
    console.log(this.message);
}
};
setTimeout(object.logMessage,1000);//undefined
//ans-After a delay of 1 second,undefined is logged to the console. 
//While the setTimeout()functionusestheobject.logMessageasacallback,still,itinvokesobject.logMessageasaregularfunction,ratherthanamethod.Andduringaregularfunctioninvocationthisequalstheglobalobject,whichisawindowinthecaseofthebrowserenvironment.That'swhyconsole.log(this.message)insidelogMessagemethodlogswindow.message,whichisundefined.