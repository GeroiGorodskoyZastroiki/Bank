const mongoose = require("mongoose");
const { clients, loans, loanTypes, payments } = require("./models.js");

class controller {
    
    async getLoans(req, res) {
        try {
            const id = req.body.id;
            const data = await loans.find({clientID:id, currentDebtAmount: { $gt: 0 }});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getPayments(req, res) {
        try {
            const id = req.body.id;
            const data = await payments.find({loanID:id});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async getProfile(req, res) {
        try {
            const id = req.body.id;
            const data = await clients.findOne({_id:id});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    async createLoan(req, res) {
        try {
            const { clientID, loanTypeID, debtAmount } = req.body;
            const loan = new loans({ clientID: clientID, loanTypeID: loanTypeID, dateofIssue: Date.now(), dateofRepayment: null, debtAmount: debtAmount, currentDebtAmount: debtAmount});
            loan.save();
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }

    async createPayment(req, res) {
        try {
            const { loanID, paymentAmount } = req.body;
            const payment = new payments({ loanID: loanID, paymentAmount: paymentAmount, paymentDate: Date.now() });
            payment.save();
            await loans.findOneAndUpdate({ _id: loanID }, {$inc: {currentDebtAmount: -paymentAmount}});
            res.status(200).send();
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new controller();