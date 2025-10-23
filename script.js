console.log('it work')
let listaEl = document.getElementById('lista')
for(let i=0; i<10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
.then((res)=>{
   console.log(res.data.response)
    const mail= res.data.response
    const li= document.createElement('li')
    li.textContent=mail;
    listaEl.appendChild(li)


})
}