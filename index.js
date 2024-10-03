require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const pageRouter = require('./routes/pageRoutes');
const userRouter = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoutes');

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', pageRouter);
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);

connectDB().then((conn) => {
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    app.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
    process.exit(1);
});

