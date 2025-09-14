// Using prepared statements with Node.js and MySQL
const query = 'SELECT * FROM users WHERE email = ?';
db.query(query, [userEmail], (err, results) => {
  if (err) throw err;
  res.json(results);
});
const jwt = require('jsonwebtoken');

// To generate JWT token
const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '1h' });

// To authenticate using JWT token
app.get('/protected-route', (req, res) => {
  const token = req.headers['authorization'].split(' ')[1];
  jwt.verify(token, 'secretKey', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = decoded;
    next();
  });
});
const escapeHtml = require('escape-html');
const safeInput = escapeHtml(userInput);
test('should block SQL injection attempts', async () => {
  const response = await request(app)
    .post('/login')
    .send({ username: "' OR 1=1 --", password: "password" });
  expect(response.status).toBe(400);
});
## Vulnerabilities Addressed:
- **SQL Injection**: Prevented using parameterized queries and prepared statements.
- **XSS**: Sanitized user inputs before rendering on the frontend.
- **Authentication & Authorization**: Implemented JWT-based authentication and role-based access control (RBAC).

## Copilot Assistance:
- Copilot helped generate secure code snippets for input validation and SQL injection prevention.
- It suggested best practices for implementing JWT authentication and role-based access.
