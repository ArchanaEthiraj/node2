const express = require('express')
const router = express.Router()
const {
  employeeDetail,
  getEmployeeDetails,
  getByIdEmployee,
  sendEmail
} = require('../controller/employeeDetailController')

router.post('/employee-detail', employeeDetail)
router.get('/employee-details', getEmployeeDetails)
router.get('/employee-detail/:id', getByIdEmployee)
router.post('/send-email/:id', sendEmail)

module.exports = router
