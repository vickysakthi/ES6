
function click() {
        return fetch('assets/student.json')
          .then(res => res.json())
          .then(data => {
            data.students;
            list = data.students;
            return list;
          });
      }
      
      function onLoad() {
        click()
          var tbody = document.getElementById('table');
          tbody.innerHTML = '';
      
          for (var i = 0; i < list.length; i++) {
            var stdRow = document.createElement('tr');
            stdRow.innerHTML = `
              <td>${list[i].name}</td>
              <td>${list[i].marks.Tamil}</td>
              <td>${list[i].marks.English}</td>
              <td>${list[i].marks.Maths}</td>
              <td>${list[i].marks.Science}</td>
              <td>${list[i].marks.Social}</td>
            `;
            tbody.appendChild(stdRow);
          }
       
      }
      
      document.addEventListener('DOMContentLoaded', onLoad);
      

// function genreClick(data) {
//         var mydata = data;
    
//         var xhttp = new XMLHttpRequest();
    
//         xhttp.onreadystatechange = function () {
//         //     console.log('Ready state:', xhttp.readyState);
//         //     console.log('Status:', xhttp.status);
    
//             if (this.readyState == 4 && this.status == 200) {
//                 var response = JSON.parse(this.responseText);
//                 // console.log('Response:', response);
//                 var students = response.students;
//                 // console.log('Students:', students);
    
//                 var tbody = document.getElementById('table');
//                 tbody.innerHTML = '';
//                 console.log(mydata)
//                 for (var i = 0; i < students.length; i++) {
//                         console.log(students[i])
//                     if (mydata == students[i]) {
                        
//                         var stdRow = document.createElement('tr');
//                         stdRow.innerHTML = `
//                             <td>${students[i].name}</td>
//                             <td>${students[i].marks.Tamil}</td>
//                             <td>${students[i].marks.English}</td>
//                             <td>${students[i].marks.Maths}</td>
//                             <td>${students[i].marks.Science}</td>
//                             <td>${students[i].marks.Social}</td>
//                         `;
//                         tbody.appendChild(stdRow);
//                     }
//                 }
//             }
//         };
    
//         xhttp.open("GET", "assets/student.json", true);
//         xhttp.send();
//     }
    