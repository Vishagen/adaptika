function uploadFile1() {
  const a = document.createElement('input');
  a.type = 'file';
  a.onchange = function() {
    const file = a.files[0];
    console.log(file)
  }
  a.click();
}