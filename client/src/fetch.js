const axios = require("axios");

class fetch {

    async getLoans(id) {
        return await axios({
            method: "get",
            url: "http://localhost:3000/api/loans",
            headers: {"Content-Type": "application/json"},
            data: { id: id }
        });
    }

    async getPayments(id) {
        return await axios({
            method: "get",
            url: "http://localhost:3000/api/payments",
            headers: {"Content-Type": "application/json"},
            data: { id: id }
        });
    }

    async getProfile(id) {
        const { data } = await axios({
            method: "get",
            url: "http://localhost:3000/api/profile",
            headers: {"Content-Type": "application/json"},
            data: { id: id }
        });
        return data
    }

    async createLoan(clientID, loanTypeID, debtAmount) {
        await axios({
            method: "post",
            url: "http://localhost:3000/api/create-loan",
            headers: {"Content-Type": "application/json"},
            data: { clientID: clientID, loanTypeID: loanTypeID, debtAmount: debtAmount }
        });
    }

    async createPayment(loanID, paymentAmount) {
        await axios({
            method: "post",
            url: "http://localhost:3000/api/create-payment",
            headers: {"Content-Type": "application/json"},
            data: { loanID: loanID, paymentAmount: paymentAmount }
        });
    }

}

module.exports = new fetch();