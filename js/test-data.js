//   });
// });

let fname = localStorage.getItem("fname");
let lname = localStorage.getItem("fname");
let age = localStorage.getItem("age");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let gender = localStorage.getItem("gender");

let sunday = localStorage.getItem("sunday", $("#sun").val());
let monday = localStorage.getItem("monday", $("#mon").val());
let tuesday = localStorage.getItem("tuesday", $("#tue").val());
let wednesday = localStorage.getItem("wednesday", $("#wed").val());
let thursday = localStorage.getItem("thursday", $("#thu").val());
let friday = localStorage.getItem("friday", $("#fri").val());
let saturday = localStorage.getItem("saturday", $("#sat").val());

// windows.open("../html/test-data.html");
$("#disTable").append(
  '<tr class="child"><td>' +
    fname +
    "" +
   
    "</td><td>" +
    age +
    "</td><td>" +
    phone +
    "</td><td>" +
    email +
    "</td><td>" +
    gender +
    "</td><td>" +
    sunday +
    "</td><td>" +
    monday +
    "</td><td>" +
    tuesday +
    "</td><td>" +
    wednesday +
    "</td><td>" +
    thursday +
    "</td><td>" +
    friday +
    "</td><td>" +
    saturday +
    "</td></tr>"
);

if (
  $("#fname").valid() &&
  $("#age").valid() &&
  $("#phone").valid() &&
  $("#email").valid() &&
  $("input[name='gender']:checked") != undefined
) {
  $("#form").submit(function (event) {
    event.preventDefault();

    localStorage.setItem("fname", $("#fname").val());
    localStorage.setItem("lname", $("#fname").val());
    localStorage.setItem("age", $("#age").val());
    localStorage.setItem("phone", $("#phone").val());
    localStorage.setItem("email", $("#email").val());
    localStorage.setItem("gender", $("input[name='gender']:checked").val());

    localStorage.setItem("sunday", $("#sun").val());
    localStorage.setItem("monday", $("#mon").val());
    localStorage.setItem("tuesday", $("#tue").val());
    localStorage.setItem("wednesday", $("#wed").val());
    localStorage.setItem("thursday", $("#thu").val());
    localStorage.setItem("friday", $("#fri").val());
    localStorage.setItem("saturday", $("#sat").val());

    windows.open("../html/test-data.html");
    console.log(
      fname,
      lname,
      age,
      phone,
      email,
      gender,
      sunday,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday
    );

    $("#disTable").append(
      "<tr><td>" +
        fname +
        "" +
        lname +
        "</td><td>" +
        age +
        "</td><td>" +
        phone +
        "</td><td>" +
        email +
        "</td><td>" +
        gender +
        "</td><td>" +
        sunday +
        "</td><td>" +
        monday +
        "</td><td>" +
        tuesday +
        "</td><td>" +
        wednesday +
        "</td><td>" +
        thursday +
        "</td><td>" +
        friday +
        "</td><td>" +
        saturday +
        "</td></tr>"
    );
  });
}
