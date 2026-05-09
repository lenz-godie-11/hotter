//trying harder brainstorming on this concept 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


const handleSignup = (e) => {
    e.preventDefault();
    let newErrors = {};

    const usernameRegex = /^[a-zA-Z\s]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.username) {
      newErrors.username = "This field is required";
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username = "Username must only contain letters";
    }

    if (!formData.email) {
      newErrors.email = "This field is required";
    }

    if (!formData.password) {
      newErrors.password = "This field is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Must include a-z , A-Z, 0-9, and a symbol";
    }

    if (formData.password !== formData.confirm) {
      newErrors.confirm = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSuccess(true);
      setTimeout(() => navigate('/vacancies'), 2000);
    }
  };