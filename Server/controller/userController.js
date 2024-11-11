const RealspadPoints = require("../models/userModel");

exports.addPoints = async (req, res) => {
    try {
        const { walletAddress, refAddress,refPoint } = req.body;
        let existingUser = await RealspadPoints.findOne({ walletAddress: walletAddress });
        if (existingUser === null) {
            // Check if refAddress is not equal to "0x0000000000000000000000000000000000000000"
            if (refAddress !== "0x0000000000000000000000000000000000000000") {
                // Find the user with the refAddress in the database
                let refUser = await RealspadPoints.findOne({ walletAddress: refAddress });
                if (refUser) {
                    // If user with refAddress exists, add 4 points to their existing points
                    refUser.points = (parseInt(refUser.points) + refPoint).toString();
                    console.log("refUser", refUser);
                    await refUser.save();
                }
            }

            // Find or create the user with the given walletAddress

            // If user does not exist, create a new user
            const newUser = new RealspadPoints(req.body);
            await newUser.save();
            res.status(201).send({
                success: true,
                msg: "Data Stored Successfully"
            });
        } else {
            // If user already exists, send a response indicating that
            res.status(201).send({
                success: false,
                msg: "This Address already exists"
            });
        }
    } catch (error) {
        console.error("Error while adding points", error);
        res.status(500).send({
            success: false,
            msg: "Internal Server Error"
        });
    }
};

exports.getByAddress = async (req, res) => {
    try {

        let {
            walletAddress
        } = req.query

        const data = await RealspadPoints.findOne({
            walletAddress: walletAddress
        })
        // console.log("data", data);
        if (data !== null) {
            res.status(201).send({
                data: data,
                success: true,
            })
        } else {
            res.status(200).send({
                data: [],
                success: false,
            })
        }
    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.getAllAddress = async (req, res) => {
    try {
        const data = await RealspadPoints.findOne()
        // console.log("data", data);
        if (data !== null) {
            res.status(201).send({
                data: data,
                success: true,
            })
        } else {
            res.status(200).send({
                data: [],
                success: false,
            })
        }
    } catch (error) {
        console.error("error while get user", error);
    }
}