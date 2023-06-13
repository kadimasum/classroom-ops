
      const students = [
        {
          first_name: "Caleb",
          last_name: "Bii",
          student_email: "caleb.bii@student.moringaschool.com",
          student_contact: "9878078985"
        },
        {
          first_name: "Brian",
          last_name: "Mark",
          student_email: "brian.mark@student.moringaschool.com",
          student_contact: "9878078985"
        },
        {
          first_name: "Lynne",
          last_name: "Bett",
          student_email: "lyne.bett@student.moringaschool.com",
          student_contact: "0087646948"
        },
        {
          first_name: "Minnah",
          last_name: "Ali",
          student_email: "minnah.ali@student.moringaschool.com",
          student_contact: "0765356344"
        },
        {
          first_name: "Kelvin",
          last_name: "Mugambi",
          student_email: "kelvin@student.moringaschool.com",
          student_contact: "0986378585"
        }
      ];

      function buildTable(data) {
        var table = document.getElementById("financeDashboardTable");

        for (var i = 0; i < data.length; i++) {
          var row = document.createElement("tr");

          row.innerHTML = `
            <td>${data[i].first_name}</td>
            <td>${data[i].last_name}</td>
            <td>${data[i].student_email}</td>
            <td>${data[i].student_contact}</td>
            
          `;

          table.appendChild(row);
        }
      }

      buildTable(students);