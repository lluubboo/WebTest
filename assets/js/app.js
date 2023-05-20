//payroll button

const newPayrollBtn = document.getElementById("NewPayrollBtn")

newPayrollBtn.addEventListener("click", () => {
    const payrollTable = document.getElementById("PayrollTable")
    payrollTable.style.display = "table"
    newPayrollBtn.style.display = "none"
    }
)

//load json

let personalList = []
const loadPersons = async () => {
    try {
        const res = await fetch("assets/data/Persons.json")
        personalList = await res.json();
    } catch (error) {
        console.log(error)
    }
}

//display persoa to the DOM

const displayEmployees = (employee)=>{
    const employeeTable = employee.map((employee)=>{
        return 
    })
}

loadPersons()