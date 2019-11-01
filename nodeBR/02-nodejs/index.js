/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir do seu ID
  2 Obter o endereco do usuario pelo ID
*/

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Aladin',
      birthDate: new Date()
    })
  }, 1000);

}

function getPhoneNumber(idUser, callback) {
  setTimeout(function () {
    return callback(null, {
      number: '1102102',
      ddd: '61'
    })
  }, 2000);
}

function getAddress(idUser, callback) {
  setTimeout(function () {
    return callback(null, {
      address: 'Washigton 1401',
      number: 18
    })
  }, 2000);
}

getUser(function userResolve(error, user) {
  // null || "" || 0 === false
  if (error) {
    console.log('getUser error: ', error)
    return;
  }
  getPhoneNumber(user.id, function phoneNumberResolve(error1, phone) {
    if (error1) {
      console.log('getPhoneNumber error: ', error1)
      return;
    }
    getAddress(user.id, function addressResolve(error2, address) {
      if (error2) {
        console.log('getAddress error: ', error2)
        return;
      }

      console.log(`
        user: ${user.name},
        Address: ${address.address, address.number},
        Phone: (${phone.ddd})${phone.number}
      `)

    })
  })

})

// const user = getUser()
// const phone = getPhoneNumber(user.id)

// console.log('user', user)
// console.log('phone', phone)
