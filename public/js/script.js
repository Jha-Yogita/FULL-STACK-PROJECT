(() => {
    'use strict'
  

    const forms = document.querySelectorAll('.needs-validation')
  
    
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

async function search(event) {
  event.preventDefault();
  const query=document.getElementsByClassName("search-input")[0].value;
  window.location.href=`/listings/search?q=${query}`;
  
  
}