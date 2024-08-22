import express from 'express';

const port  = 8080;
const app  = express();


app.use(express.json());

app.get('/', (req, res)=>{
	console.log("Fast Api Call");
	res.status(200).json({'messsage' : 'hello from local server'});
});

app.get('/slow-response', async (req, res)=>{
	console.log("Slow Api Call");
	setTimeout(()=>{
		res.status(200).json({'messsage' : 'slow response  from local server'});
	}, 10000)
});
app.get('/first-byte', async(req, res)=>{
	console.log('First Byte');
	res.setHeader('Content-Type', 'text/plain');
	
	setTimeout(()=>{
		res.write('FirstByte response from local server ');
		res.end();
	}, 10000);

	res.write("hello \n");
})

app.listen(port, ()=>{
	console.log(`Webserver started on port: http://localhost:${port}`)
})