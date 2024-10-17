const EmployeeDetails = require('../model/employeeDetailModel')
const { Employeeget, EmployeegetId } = require('../service')
const nodemailer = require('nodemailer')

const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'archana05.doodleblue@gmail.com',
      pass: 'vudl cndb pugr mitm'
    }
  })

  let id = req.params.id
  let data = await EmployeegetId(id)

  const mailOptions = {
    from: 'archana05.doodleblue@gmail.com',
    to,
    subject,
    text,
    html: `
    <h1>Employee Details</h1>
    <p><strong>Name:</strong> ${data?.data?.name}</p>
    <p><strong>Email:</strong> ${data?.data?.email}</p>
    <p><strong>Phone:</strong> ${data?.data?.phone}</p>
    <p><strong>Role:</strong> ${data?.data?.role}</p>
  `
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully!', info })
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error })
  }
}

const employeeDetail = async (req, res) => {
  try {
    const { address, department, salary, performanceRating, employeeId } = req.body

    if (!employeeId) {
      return res.status(400).json({ message: 'Employee ID is required.' })
    }

    const newEmployeeDetail = new EmployeeDetails({
      employeeId,
      address,
      department,
      salary,
      performanceRating
    })
    await newEmployeeDetail.save()
    res.status(200).json({ message: 'Employee Detail Added Successfully!' })
  } catch (error) {
    res.status(500).json({ message: 'Error Adding Employee Detail', error: error })
  }
}

const getEmployeeDetails = async (req, res) => {
  try {
    let data = await Employeeget()
    return res.status(200).json({ message: 'Data Received', data: data })
  } catch (error) {
    res.status(500).json({ message: 'Unable to receive Data', error: error })
  }
}

const getByIdEmployee = async (req, res) => {
  try {
    let id = req.params.id
    let data = await EmployeegetId(id)
    return res.status(200).json({ message: 'Data Received', data: data })
  } catch (error) {
    return res.status(500).json({ message: 'Unable to receive Data', error: error })
  }
}

module.exports = { employeeDetail, getEmployeeDetails, getByIdEmployee, sendEmail }
