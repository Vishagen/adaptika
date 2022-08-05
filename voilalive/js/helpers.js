window.modalOpen = false;

function timer(ms) {
  return new Promise(res => setTimeout(res, ms));
} 

async function openModal(id) {
  if (modalOpen) {
    // Close the modal if it's open
    closeModal();
    await timer(399);
  }

  modalOpen = true;
  $('#modalContent').html($('#modalContent_' + id).html());

  $('#modal-background').removeClass('fadeOut');
  $('#modal-background').addClass('fadeIn');

  $('#modal-background').removeClass('hidden');
  $('#modal').removeClass('hidden');

  $('#modalAnimationContainer').removeClass('modalAnimationOut');
  $('#modalAnimationContainer').addClass('modalAnimationIn');
  $(`#modalAnimationContainer`).get(0).focus();
  
  $('.closeModalButtonOnclick').each((index, object) => {
    $(object).get(0).onclick = () => closeModal()
  });
}

function closeModal() {
  modalOpen = false;
  $('#modalAnimationContainer').removeClass('modalAnimationIn');
  $('#modalAnimationContainer').addClass('modalAnimationOut');

  $('#modal-background').removeClass('fadeIn');
  $('#modal-background').addClass('fadeOut');

  window.setTimeout(() => {
    $('#modal').addClass('hidden');
    $('#modal-background').addClass('hidden');
  }, 300) 
}