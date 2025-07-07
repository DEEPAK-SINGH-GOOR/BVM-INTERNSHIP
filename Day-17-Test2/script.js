document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("form-Data");
  // console.log(form);
  
  let firstName = document.getElementById("first-Name");
  let lastName = document.getElementById("last-Name");
  let rollNo = document.getElementById("rollNo");
  let dateOfBirth = document.getElementById("DateOfBirth");
  let selectedCountry = document.getElementById("select-country");
  let imageFile = document.getElementById("input-file");

  let list = document.getElementById("student-data");

  //Error
  let error_name = document.getElementById("error_name");
  let error_last = document.getElementById("error_last");
  let error_roll = document.getElementById("error_roll");
  let error_date = document.getElementById("error_date");
  let error_gender = document.getElementById("error_gender");
  let error_country = document.getElementById("error_country");
  let error_language = document.getElementById("error_language");

  let imageData = [];
  let selectedRow = null;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let fName = firstName.value;
    let lName = lastName.value;
    let roll = rollNo.value;
    let dob = dateOfBirth.value;
    let country = selectedCountry.value;
    let gender = form.querySelector('input[name="gender"]:checked')?.value;
    let language = Array.from(
      form.querySelectorAll(`input[name="language"]:checked`)
    ).map((input) => input.value);

    error_name.textContent = "";
    error_last.textContent = "";
    error_roll.textContent = "";
    error_date.textContent = "";
    error_gender.textContent = "";
    error_country.textContent = "";
    error_language.textContent = "";

    let isValid = true;
    if (!fName) {error_name.textContent = "First Name Required";isValid = false;
      console.log('hello1');
    }
    if (!lName) {error_last.textContent = "Last Name Required";isValid = false;
      console.log('hello2');
    }
    if (!roll) {error_roll.textContent = "Roll Number Required";isValid = false;
      console.log('hello3');
    }
    if (!dob) {error_date.textContent = "Date of Birth Required";isValid = false;
      console.log('hello4');
    }
    if (!gender) {error_gender.textContent = "Gender Required";isValid = false;
      console.log('hello5');
    }
    if (!country) {error_country.textContent = "Country Required";isValid = false;
      console.log('hello6');
    }
    if (language == 0) {error_language.textContent = "At List 1 Language Required";isValid = false;
      console.log('hello7');
    }
    if (!isValid) return
    console.log(!isValid);

    let imageHTML = imageData.map(
      (src) => `<img src="${src}" height="50px" width="50px">`
    );

    if (selectedRow === null) {
      let row = document.createElement("tr");
      row.innerHTML = `
            <td>${imageHTML}</td>
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${roll}</td>
            <td>${dob}</td>
            <td>${gender}</td>
            <td>${country}</td>
            <td>${language}</td>
             <td>
                
           </td>     
        `;
      list.append(row);
    } else {
      selectedRow.children[0].innerHTML = imageHTML;
      selectedRow.children[1].innerHTML = fName;
      selectedRow.children[2].innerHTML = lName;
      selectedRow.children[3].innerHTML = roll;
      selectedRow.children[4].innerHTML = dob;
      selectedRow.children[5].innerHTML = gender;
      selectedRow.children[6].innerHTML = country;
      selectedRow.children[7].innerHTML = language;
    }
    form.reset();
    selectedRow = null;

  });

  list.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("edit")) {
      selectedRow = e.target.closest("tr");

      imageData = Array.from(
        selectedRow.children[0].querySelectorAll("img")
      ).map((img) => img.src);

      firstName.value = selectedRow.children[1].textContent;
      lastName.value = selectedRow.children[2].textContent;
      rollNo.value = selectedRow.children[3].textContent;
      dateOfBirth.value = selectedRow.children[4].textContent;
      const genderValue = selectedRow.children[5].textContent;

      const genderInput = form.querySelector(
        `input[name="gender"][value="${genderValue}"]`
      );
      if (genderInput) genderInput.checked = true;

      selectedCountry.value = selectedRow.children[6].textContent;

      const language = selectedRow.children[7].textContent.split(",").map((l) => l);
      form.querySelectorAll('input[name="language"]').forEach((input) => {
        input.checked = language.includes(input.value);
      });
    }
    
    // if (e.target.classList.contains("delete")) {
    //   e.target.closest("tr").remove();
    //   form.reset();
    //   selectedRow = null;
    //   imageData = [];
    // }
    // function deleteData(index){
    //   list.splice(index,1).remove()
    // } deleteData()
    // function deleteData(index){
    //   if(Array.isArray(list) && index>=0 && index < list.length){
    //     list.splice(index,1)
        
    //   }
    //   else{
    //     console.log('invalid Index');
    //     alert("invalid Index !!")
    //   }
    // }
   
  });

  imageFile.addEventListener("change", function () {
    
    imageData = [];
    const files = [...imageFile.files];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        imageData.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  });
  let Gender = document.getElementById("filter-gender");
  let Country = document.getElementById("filter-country");
  let Language = document.getElementById("filter-language");

  function Filter() {
    let genderValue = Gender.value;
    let countryValue = Country.value;
    let languageValue = Language.value;

    const rows = list.querySelectorAll("tr");

    rows.forEach((row) => {
      const gender = row.children[5].textContent;
      const country = row.children[6].textContent;
      const language = row.children[7].textContent;

      const genderMatch = genderValue === "" || gender === genderValue;
      console.log(genderMatch);
      const countryMatch = countryValue === "" || country === countryValue;
      const languageMatch =
        languageValue === "" || language.includes(languageValue);

      if (genderMatch && countryMatch && languageMatch) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
  Gender.addEventListener("change", Filter);
  Country.addEventListener("change", Filter);
  Language.addEventListener("change", Filter);
  // console.log('running');
  
});
