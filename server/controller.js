const mongoose = require("mongoose");
const { client, loan, loanType, payment } = require("./models.js");

class controller {
    async getLoans(req, res) {
        try {
            const id = req.params.id;
            const data = await loan.find({clientID:id});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getPayments(req, res) {
        try {
            const id = req.params.id;
            const data = await payment.find({loanID:id});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getProfile(req, res) {
        try {
            const id = req.params.id;
            const data = await loan.find({_id:id});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new controller();