const fs = require('fs');
const path = require('path');

const authFile = path.join(__dirname, 'auth.json');

// Helper function to read users
const readUsers = () => {
  const data = fs.readFileSync(authFile);
  return JSON.parse(data).users;
};

// Helper function to write users
const writeUsers = (users) => {
  fs.writeFileSync(authFile, JSON.stringify({ users }, null, 2));
};

exports.signup = (req, res) => {
  const { fullName, email, password } = req.body;
  const users = readUsers();
  
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }
  
  const newUser = {
    id: Date.now().toString(),
    fullName,
    email,
    password // In a real app, you should hash this!
  };
  
  users.push(newUser);
  writeUsers(users);
  
  res.json({ success: true, user: newUser });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
  
  res.json({ success: true, user });
};