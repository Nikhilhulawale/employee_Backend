const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);

// Show endpoints on home route
server.get('/', (req, res) => {
  res.send(`
    <h2>✅ JSON Server is running!</h2>
    <ul>
      <li><a href="/users">/users</a></li>
      <li><a href="/employees">/employees</a></li>
      <li><a href="/attendance">/attendance</a></li>
      <li><a href="/leaves">/leaves</a></li>
      <li><a href="/payslips">/payslips</a></li>
    </ul>
  `);
});

server.use(router);
server.listen(port, () => {
  console.log(`✅ JSON Server is running on port ${port}`);
});
