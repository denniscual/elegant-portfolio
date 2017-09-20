const app = require('./app');
// getting the port value
const PORT = process.env.PORT || 9900;

// running our server
app.listen(PORT, () => console.log('Our app is running on PORT ', PORT));
