const fs = require("fs");

const userrequestHandler = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write('<link rel="stylesheet" href="/views/input.css">');
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name" required><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" required />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" required />');
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    let body = '';
    req.on("data", (chunk) => { body += chunk.toString(); });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const username = params.get('username');
      const gender = params.get('gender');
      fs.writeFileSync("user.txt", `Username: ${username}, Gender: ${gender}`);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
    return;
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = userrequestHandler;