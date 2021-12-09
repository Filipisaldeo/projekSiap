 
 function submitForm(){
    let name = document.getElementById('input-name').value
    console.log(name)

    let email = document.getElementById('input-email').value
    console.log(email)

    let phoneNumber = document.getElementById('input-phone_number').value
    console.log(phoneNumber)

    let Subject = document.getElementById('input-subject').value
    console.log(Subject)

    let inputPesan = document.getElementById('input-pesan').value
    console.log(inputPesan)

    if(name == '') {
        alert("Nama harus diisi bos")
    } else if (email == ''){
        alert("Email harus diisi bos")
    } else if (phoneNumber == ''){
        alert("PhoneNumber harus diisi bos")
    } else if (Subject == '') {
        alert("Subject harus diisi bos")
    } else if (inputPesan == ''){
        alert("Pesan harus diisi bos")
    }

    let receiverMail = 'jokowi@gmail.com'

    let a = document.createElement('a');

    a.href = 'mailto:' + receiverMail + '?subject=' + Subject + '&body=Halo nama saya' + name + ',' + inputPesan

    a.click()

 }