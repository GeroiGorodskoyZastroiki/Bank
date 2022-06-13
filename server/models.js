const mongoose = require("mongoose");
const { Schema, model } = mongoose;

clientSchema = new Schema({
    company: { type: String, required: true },
    typeofProperty: { type: String, required: true },
    adress: { type: String, required: true },
    pjoneNumber: { type: Number, required: true },
    contactPerson: { type: String, required: true }
})

loanSchema = new Schema({
    clientID: { type: Schema.Types.ObjectId, ref: 'client', required: true },
    loanTypeID: { type: Schema.Types.ObjectId, ref: 'loanType', required: true },
    dateofIssue: { type: Date, required: true},
    dateofRepayment: { type: Date },
    debtAmount: { type: Number, required: true },
    currentDebtAmount: { type: Number, required: true }
})

loanTypeSchema = new Schema({
    title: { type: String, required: true },
    terms: { type: String, required: true },
    rate: { type: Number, required: true },
    term: { type: Number, required: true }
})

paymentSchema = new Schema({
    loanID: { type: Schema.Types.ObjectId, ref: 'loan', required: true },
    paymentAmount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now }
})

class models {
    client = new model("client", clientSchema)
    loan = new model("loan", loanSchema)
    loanType = new model("loanType", loanTypeSchema)
    payment = new model("payment", paymentSchema)
}

module.exports = new models();