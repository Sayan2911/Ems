
const employee = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "pass1234",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Monthly Report",
                "taskDescription": "Compile all department reports into one final report.",
                "taskDate": "2025-04-25",
                "category": "Reporting"
            }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "securepass567",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project progress with the client.",
                "taskDate": "2025-04-20",
                "category": "Meetings"
            }
        ]
    },
    {
        "id": 3,
        "email": "mike.brown@example.com",
        "password": "mikepass321",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Submit Code Review",
                "taskDescription": "Review teammate's code and submit feedback.",
                "taskDate": "2025-04-22",
                "category": "Development"
            }
        ]
    },
    {
        "id": 4,
        "email": "alice.wonder@example.com",
        "password": "alice!pass789",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Design UI Mockups",
                "taskDescription": "Create mockups for new dashboard module.",
                "taskDate": "2025-04-27",
                "category": "Design"
            }
        ]
    },
    {
        "id": 5,
        "email": "robert.king@example.com",
        "password": "robkingpass",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Documentation",
                "taskDescription": "Update user manual with latest features.",
                "taskDate": "2025-04-24",
                "category": "Documentation"
            }
        ]
    }
]

const admin = [{
    "id": 0,
    "email": "admin@example.com",
    "password": "123"
}
]
export const setItemLocal = () => {
    localStorage.setItem("employees", JSON.stringify(employee))
    localStorage.setItem("admin", JSON.stringify(admin))

}
export const getItemLocal = () => {
   const employeeData= JSON.parse(localStorage.getItem('employees'))
   const adminData= JSON.parse(localStorage.getItem('admin'))

   return{employeeData,adminData};
}
