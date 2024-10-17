const axios = require('axios').default

async function EmployeeDetailget(ids) {
  try {
    const getEmplopyeeDetail = await axios({
      method: 'post',
      url: 'http://localhost:3001/v1/employee-detail',
      data: { ids },
      headers: { 'Content-Type': 'application/json' }
    })

    return await getEmplopyeeDetail
  } catch (error) {
    console.log(error)
  }
}
async function Employeeget(ids) {
  try {
    const getEmployee = await axios({
      method: 'get',
      url: 'http://localhost:3000/v1/employee',
      data: { ids },
      headers: { 'Content-Type': 'application/json' }
    })

    return getEmployee.data
  } catch (error) {
    console.log(error)
  }
}

async function EmployeegetId(ids) {
  try {
    const getEmployee = await axios({
      method: 'get',
      url: `http://localhost:3000/v1/employee/detail/${ids}`,
      data: { ids },
      headers: { 'Content-Type': 'application/json' }
    })

    return getEmployee.data
  } catch (error) {
    console.log(error)
  }
}

module.exports = { EmployeeDetailget, Employeeget, EmployeegetId }
