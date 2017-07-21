const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /* 
     * Rotas Abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    /*
     * Rotas protegidas por token JWT 
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)
    //const router = express.Router();
    //server.use('/api', router/*, protectedApi*/)

    protectedApi.use(auth)

    // Rotas da API
    //const billingCycleService = require('../api/billingCycle/billingCycleService')
    //billingCycleService.register(protectedApi, '/billingCycles')

    //const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    //protectedApi.route('/billingSummary').get(billingSummaryService.getSummary)
}