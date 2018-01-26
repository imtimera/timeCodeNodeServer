"use strict" ;
import Plugin from "../../models/Plugin.js" ;
import Gmail from "./Gmail" ;

class GmailPlugin extends Plugin{

	doRequest(id, data) {
        console.log("request : "+id);
        switch(id){
            case "mail":
			var Gmail = require('node-gmail-api')
  			, gmail = new Gmail('AIzaSyDFZUfCy5dbWsP99jHkI632CfSrISyq3bc')
  			, s = gmail.messages('label:inbox', {max: 10})
 
		s.on('data', function (d) {
  			console.log(d.snippet)
		})
		var response=Gmail;
                console.log("response : " + response);
                return response;
           }
        return null;
    }

}

export default new GmailPlugin(__dirname);
