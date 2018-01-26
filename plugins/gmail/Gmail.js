class Gmail{

    construtor(api_key){
	var Gmail = require('node-gmail-api')
        , gmail = new Gmail(api_key)
        , s = gmail.messages('label:inbox', {max: 10})
 
s.on('data', function (d) {
  console.log(d.snippet)
})


    }
}
export default Gmail ;
