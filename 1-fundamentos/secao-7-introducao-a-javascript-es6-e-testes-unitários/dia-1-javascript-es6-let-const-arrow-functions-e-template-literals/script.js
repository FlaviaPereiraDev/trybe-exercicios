// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
//   }
//   userInfo();

  if (true) {
    // inicio do escopo do if
   let userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20


  const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

