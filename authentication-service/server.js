const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET; 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
    process.exit(1);
});


const User = require('./model/data');


app.post('/login', async (req, res) => {
    const { metamaskId, password, email, type } = req.body;

    try {
       
        let user = await User.findOne({ email });

        
        if (!user) {
            
            const hashedPassword = await bcrypt.hash(password, 10);

            
            user = await User.create({ metamaskId, password: hashedPassword, email, type});
        } else {
            
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
        }

        
        const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "3days" });

        res.status(200).json({ _id: user._id, email: user.email, type: user.type, metamaskId: user.metamaskId, token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
