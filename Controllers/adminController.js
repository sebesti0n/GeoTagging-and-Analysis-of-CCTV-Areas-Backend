const db = require('knex')(require('../Configuration/DBConfig')['development']);
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.adminLogin = (async (req, res) => {
    const { Email, Password } = req.body;
    try {
        const user = await db('users').where('Email', '=', Email).returning('*');
        if (user.length > 0 && user[0].Password === Password && user[0].isAdmin === true) {
            const token = jwt.sign({ id: user[0].user_id, name: user[0].Name }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                success: true,
                message: "Admin LoggedIn Successfully",
                token: token,
                user: user
            });
        }
        else {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }
    } catch (error) {

        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Error." })
    }

});
exports.getCameras = (async (req, res) => {
    const  uid = req.query.uid;
    try {
        const user = await db('users').where('user_id', '=', uid).returning('*');
        const cameras = await db('cameras').where('owner_id', '=', uid).returning('*');
        return res.status(200).json({ success: true, message: "Camera List got Successfully", camera: cameras , admin :user});
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ message: "Internal Server Error." })

    }
});