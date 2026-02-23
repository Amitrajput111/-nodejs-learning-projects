const sumRequestHandler = (req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk.toString(); });
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const first = Number(params.get('first'));
    const second = Number(params.get('second'));
    const sum = first + second;
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Sum Result</title></head>
        <body>
          <h1>Result: ${first} + ${second} = ${sum}</h1>
          <a href="/calculator">Back to Calculator</a>
        </body>
      </html>
    `);
    res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;const sumRequestHandler = (req,res) =>{
 console.log("In Sum Request Handler",req.url);
 const body = [];
 req.on('data', chunk =>
 body.push(chunk););
 req.on('end', ()=>{
  const bodyStr = Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  const result = Number(bodyObj.first) + Number(bodyObj.second;)
  console.log(result);
  res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1> your sum is ${result} </h1>
          <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First Num" name="first" />
            <input type="text" placeholder="Second Num" name="second" />
            <input type="submit" value="Sum">
          </form>
        </body>  
      <html>  
      `);
      return res.end();

});
 

}

exports.sumRequestHandler = sumRequestHandler;
