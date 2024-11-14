import './employee_list.scss'

function Employee_list() {
    return  <div id="employee-div" class="container">
                <h1>Current Employees</h1>
                <table id="employee-table" class="display"></table>
                <a href="/">Home</a>
            </div>
}

export default Employee_list