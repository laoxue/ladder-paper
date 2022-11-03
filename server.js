let express = require("express");
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(8020, function(){
	console.log("服务器已经开启！")
})
