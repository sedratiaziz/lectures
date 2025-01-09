//always have these 2 ************
const express = require("express");
const app = express();

const students = [
  {
    id: 1,
    studentName: "Abdulrahman",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 2,
    studentName: "Sara",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 3,
    studentName: "Loai",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 4,
    studentName: "Fatema",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 5,
    studentName: "Ali Dashti",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 6,
    studentName: "SHARIFA",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 7,
    studentName: "Hasan",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 8,
    studentName: "Adel",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 9,
    studentName: "Murtadha",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 10,
    studentName: "Abdulaziz",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 11,
    studentName: "Marwa",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 12,
    studentName: "Hussain",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 13,
    studentName: "Ali Abdulrasool",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 14,
    studentName: "Sayed",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 15,
    studentName: "Salman",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 16,
    studentName: "Rashid",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 17,
    studentName: "Faisal",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 18,
    studentName: "Ahmed Aljaber",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 19,
    studentName: "Ebrahim",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 20,
    studentName: "Walaa",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 21,
    studentName: "Ahmed Abdulwahab",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 22,
    studentName: "Abdulla Hasan",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 23,
    studentName: "Noora",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 24,
    studentName: "Abdulla Naser",
    course: "Software Engineering",
    country: "Bahrain",
  },
  {
    id: 25,
    studentName: "Omar",
    course: "Data Analytics",
    country: "Saudi Arabia",
  },
];

console.log("\n Good evening GA! \n");

//to stop the app, open terminal and click *** ctrl+c *** on keyboard

// get() takes two args,
// 1. a route to where it will redirect
// 2. a function that will run AFTER redirecting to the route
app.get("/home", (request, response) => {
  console.log("MY FIRST ROUTE!!");
  response.send("Welcome to Homepage!");
});

app.get("/students/:id", (request, response) => {
  let foundStudent = students.find((oneStudent) => {
    return oneStudent.id == request.params.id;
  });

  console.log(foundStudent);

  response.send(foundStudent);
});

// re.params to get one value

// app.get('/greet/:name', (req, res)=>{
//     let foundName = students.find((oneStudent)=>{
//         return oneStudent.studentName == req.params.name
//     })

//     res.send(`Hello, ${foundName.studentName}`)

// })

// req.query to filter
app.get("/search", (req, res) => {

  let foundStudent = students.find((oneStudent) => {
    return oneStudent.country == req.query.country;
  });

  res.send(foundStudent);
});

//excersize
// const name = "Abdulziz";

// app.get("/Abdulaziz", (request, response) => {
//   response.send(`<center><h2>Hello my name is ${name}</h2></center>`);
// });

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
