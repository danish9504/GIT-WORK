const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});


app.get('/hello',(req,res)=>{
   res.send('hello world 🚀');
});
// Sample POST route
app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
