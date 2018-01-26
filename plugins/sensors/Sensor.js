var child = require('child_process');
var path = require('path');
var options = {
    encoding: 'UTF-8'
}

const schedule = require('node-schedule');

class Sensor{

    construtor(name, period, script, service){

        this.name = name;
        this.period = period;
        this.script = path.resolve(__dirname, 'lib/'+script);
        this.job = null ;
        this.service = service ;
    }


	setService(service){
		this.service = service ;
	}
    start(){

        var obj = this ;
	console.log("----> ") ;
	console.log(obj.service) ;
       /* setTimeout(function(){

            var command = 'python ' + obj.script ;
            var process = child.exec(command, options, function(error, stdout, stderr){

                try{
                    obj.service.emitEvent("serverSensor"+obj.name+"Values",JSON.parse(stdout));
                    obj.service.pluginsEvents.emit("serverSensor"+obj.name+"Values",JSON.parse(stdout));
                }catch(e){
                    console.log(e);
                }

                if(error){
                    console.log(error);
                }

            });

            obj.start()
        },this.period);*/
    }
}

export default Sensor ;
