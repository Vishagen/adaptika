function selectRole() {
  const role = $(`#rolesDropdown`).val();

  if (role == '--newrole--') {
    addRole();
    return;
  }

  console.log("Selected")
  $(`#results`).removeClass("hidden");
}

function deleteRole() {
  const role = $(`#rolesDropdown`).val();
  console.log(role)
}

function addRole() {
  openModal('addRole');

  $(`#addRoleName`).focus();

  $(`#addRoleButton`).get(0).onclick = () => {
    const roleName = $(`#addRoleName`).val().trim();
    const roleDescription = $(`#addRoleDescription`).val().trim();

    console.log(roleName, roleDescription);

    closeModal();
  }
}

function confirmAddPermission() {
  const role = $(`#permissionsDropdown`).val();
  console.log(role)
}