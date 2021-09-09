// Add your code here
// const formData = {
//   dogName: "Rahmans other dog",
//   dogBreed: "IDK"
// }

// const configObj = {
//   method: "POST",
//   headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };


function submitData(name, email) {
  const user = {
    name: `${name}`,
    email: `${email}`
  }
  const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(user)
  };
  return fetch('http://localhost:3000/users', configObj)
  .then(response => response.json())
  .then(appendUser)
  .catch(function(error){
    const errorEl = document.createElement('h2');
    errorEl.innerHTML = error.message; 
    document.body.appendChild(errorEl); 
    })
};

function appendUser(idNum) {
  const newEl = document.createElement('h2')
  newEl.innerHTML = idNum.id 
  document.body.appendChild(newEl);
}