const querystring = require('querystring');

const sumRequestHandler = (req, res) => {
  const body = [];
  
  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const bodyObj = querystring.parse(parsedBody);

    const result = Number(bodyObj.first) + Number(bodyObj.second);

    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head><title>Result</title></head>
        <body>
          <h1>Sum = ${result}</h1>
          <a href="/calculator">Go Back</a>
        </body>
      </html>
    `);
    return res.end();
  });
};

exports.sumRequestHandler = sumRequestHandler;
