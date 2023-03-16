//Dynamic dropdown menu- to make the course change depending on if its UG or PG thats choosen
const courses = {
    ug: ["Artificial Intelligence and Data Science", "Artificial Intelligence and Machine Learning", "Biotechnology Engineering", "Civil Engineering","Computer and Communication Engineering","Computer Science Engineering","Electronics and Communication Engineering","Electrical and Electronics Engineering","Information Science Engineering","Mechanical Engineering","Robotics and Artificial Intelligence"],
    pg: ["Construction Technology", "Computer Science Engineering", "Cyber Security","Electric Vehicle Technology","Structural Engineering","Machine Design","VLSI and Embedded System","MCA"]
  };
  
  function changeCourses() {
    const program = document.getElementById("program").value;
    const courseDropdown = document.getElementById("course");
    courseDropdown.innerHTML = ""; // clear existing options
    
    if (program !== "") {
      const programCourses = courses[program];
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      placeholderOption.textContent = "Select a course";
      courseDropdown.appendChild(placeholderOption);

      for (let i = 0; i < programCourses.length; i++) {
        const option = document.createElement("option");
        option.text = programCourses[i];
        option.value = programCourses[i];
        courseDropdown.add(option);
      }
    }
  }

//Password Visibility
  function toggleVisibility() {
    var x = document.getElementById("mypass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

 function vistog() {
    var x = document.getElementById("myp");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


//Password Errors-empty boxes, password character length, password and confirm password match

function verifyPassword() {  
    var pw = document.getElementById("myp").value;  
    var nm = document.getElementById("name").value;
    var em = document.getElementById("mail").value;
    var mps= document.getElementById('mypass').value;
     
    if(pw == "") {  
       document.getElementById("error").innerHTML = "Please fill field!";  
       return false;  
    } 

    if(nm == "") {  
        document.getElementById("error").innerHTML = "Please fill field!";  
        return false;  
    }  
    
    if(em == "") {  
        document.getElementById("error").innerHTML = "Please fill field!";  
        return false;  
    }  
     
    if(pw.length < 8) {  
       document.getElementById("error").innerHTML = "Password length must be atleast 8 characters!";  
       return false;  
    }  
    
    if (pw!==mps){
      document.getElementById("error").innerHTML = "Password and Confirm password doesn't match!";  
      return false; 
    }
    return true
}
  
