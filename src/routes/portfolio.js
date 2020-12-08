const express = require('express');
const portfolioRouter = express.Router();


portfolioRouter.get('', (req, res) => {
    res.render('index');
});

module.exports = portfolioRouter;