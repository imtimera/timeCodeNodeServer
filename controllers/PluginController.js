import pluginService from "../services/PluginService.js"

class PluginController{

    constructor(){
        pluginService.loadPlugins();
    }
    
	addClientSocket(client){
		pluginService.addClientSocket(client);
	}
    getAllPluginsRequests(req, res){
        res.end(JSON.stringify(pluginService.getAllPluginsRequests()));
    }

    doRequest(req, res){
        res.end(JSON.stringify(pluginService.doPluginRequest(req.params.requestId, req.body)))
    }
    getAllPluginsViews(eq,res){
        res.end(JSON.stringify(pluginService.getPluginsViews()));
    }
}

export default new PluginController();
