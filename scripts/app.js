const submit = document.querySelector('#submit')
const dismiss = document.querySelector('#dismiss')
const finish = document.querySelector('#finish')
const card = document.querySelector('#card')
const miInput = document.querySelector('#input')
const label = document.querySelector('label')





function modalDismiss() {
  finish.style.display = "none"
  card.style = "display: flex"
  miInput.value = ""
  miInput.style = ""
}
submit.addEventListener('click', () => {
  let rex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  let exp = rex.test(miInput.value)
  console.log(exp);
  if (exp) {
    miInput.style = "background-color: #57ff76; border: 1px solid #57ff76;"
    finish.style.display = "block"
    card.style.display = "none"
    document.querySelector('#emailto').innerHTML = `
        <p>
          A confirmation email has been sent to <span class="fw-bold">${miInput.value}</span>
          Please open it and click the button inside to confirm your subscription.
        </p>
        
       `
  } else {
    miInput.style = "background-color: #ff62573e; border: 1px solid #ff6257;"
    label.textContent = "Valid email required"
    label.style = "color:#ff6257;"
  }
})
dismiss.addEventListener('click', modalDismiss) 
