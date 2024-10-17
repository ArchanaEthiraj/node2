const mongoose = require('mongoose');

const employeeDetailsSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee', 
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    performanceRating: {
      type: Number,
      min: 1,
      max: 5,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeDetails = mongoose.model('EmployeeDetails', employeeDetailsSchema);

module.exports = EmployeeDetails;
