const express = require("express");
const router = express.Router();
const { getLoans, getPayments, getProfile, createLoan, createPayment } = require("./controller.js");

router.get("/loans", getLoans);
router.get("/payments", getPayments);
router.get("/profile", getProfile);
router.post("/create-loan", createLoan);
router.post("/create-payment", createPayment);

module.exports = router;