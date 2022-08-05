window.activeUser;

document.getElementById('userCheckInput').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    loadUser();
  }
});

function loadUser() {
  const usernameOrEmail = $(`#userCheckInput`).val();
  document.getElementById('results').classList.remove('hidden');
  activeUser = usernameOrEmail;


  // 

}

function editEmail() {
  openModal('editProperty');
  $(`#editPropertyTitle`).text(`Edit Email`);
  $(`#editPropertyDescription`).text(`Enter the new email address:`);
  $(`#editPropertyInput`).val("");
  $(`#editPropertyInput`).focus();
  $(`#editPropertyInput`).get(0).addEventListener(`keyup`, function(event) { if (event.keyCode === 13) { event.preventDefault(); $(`#editPropertyFinish`).click() } });
  $(`#editPropertyFinish`).get(0).onclick = () => {
    let newEmail = $(`#editPropertyInput`).val().trim();
    console.log(newEmail);
    closeModal();

    $(`#emailField`).html(newEmail);
  }
}

function editDisplayName() {
  openModal('editProperty');
  $(`#editPropertyTitle`).text(`Edit Display Name`);
  $(`#editPropertyDescription`).text(`Enter the new display name:`);
  $(`#editPropertyInput`).val("");
  $(`#editPropertyInput`).focus();
  $(`#editPropertyInput`).get(0).addEventListener(`keyup`, function(event) { if (event.keyCode === 13) { event.preventDefault(); $(`#editPropertyFinish`).click() } });
  $(`#editPropertyFinish`).get(0).onclick = () => {
    let newName = $(`#editPropertyInput`).val().trim();
    console.log(newName);
    closeModal();

    $(`#displayNameField`).html(newName);
  }
}

function editFirstName() {
  openModal('editProperty');
  $(`#editPropertyTitle`).text(`Edit First Name`);
  $(`#editPropertyDescription`).text(`Enter the new first name:`);
  $(`#editPropertyInput`).val("");
  $(`#editPropertyInput`).focus();
  $(`#editPropertyInput`).get(0).addEventListener(`keyup`, function(event) { if (event.keyCode === 13) { event.preventDefault(); $(`#editPropertyFinish`).click() } });
  $(`#editPropertyFinish`).get(0).onclick = () => {
    let newFirstName = $(`#editPropertyInput`).val().trim();
    console.log(newFirstName);
    closeModal();

    $(`#firstNameField`).html(newFirstName);
  }
}

function editLastName() {
  openModal('editProperty');
  $(`#editPropertyTitle`).text(`Edit Last Name`);
  $(`#editPropertyDescription`).text(`Enter the new last name:`);
  $(`#editPropertyInput`).val("");
  $(`#editPropertyInput`).focus();
  $(`#editPropertyInput`).get(0).addEventListener(`keyup`, function(event) { if (event.keyCode === 13) { event.preventDefault(); $(`#editPropertyFinish`).click() } });
  $(`#editPropertyFinish`).get(0).onclick = () => {
    let newLastName = $(`#editPropertyInput`).val().trim();
    console.log(newLastName);
    closeModal();

    $(`#lastNameField`).html(newLastName);
  }
}

function editedServerID() {
  const newServerID = $(`#serverIDDropdown`).val();
  console.log(newServerID);
}

function editedRole() {
  const newRole = $(`#roleDropdown`).val();
  console.log(newRole);
}

function editedVerified() {
  const newVerified = $(`#verifiedDropdown`).val();
  console.log(newVerified);
}

function editedAdmin() {
  const newAdmin = $(`#adminDropdown`).val();
  console.log(newAdmin);
}