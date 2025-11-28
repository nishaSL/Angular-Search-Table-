# Angular Search Table - Test Assignment

## What it is
Small Angular app with:
- Search Panel (First Name, Last Name, Phone Number, Position)
- Data Table (shows results)
- Test data served by json-server.

## Setup / Run
Prerequisites: Node.js >= 18, npm. Angular Version >=16

1. Clone or copy repository.
2. Install dependencies:
3. cd frontend
4. npm install
5. Start both app and json-server: Run below command
`npm run start:all`
6. Angular app: http://localhost:4200
Test API: http://localhost:3000/employees

Build for production: Run below code
`npm run build`

Design decisions
1. json-server chosen for quick, realistic REST API mocking.
2. Service layer (EmployeeService) encapsulates HTTP and query building — keeps components clean (SRP).
3. Reactive forms used in SearchPanel for simple form state and future validation.
4. Components split into small parts (SearchPanel and DataTable) for reusability and testability.



Frontend architecture (visual)

AppComponent
 ├─ SearchPanelComponent  (ReactiveForm)  -> emits filter object
 ├─ DataTableComponent    (presentational)
 └─ EmployeeService       (HTTP client) -> json-server at /employees
