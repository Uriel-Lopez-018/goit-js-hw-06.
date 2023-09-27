
const getTotalBalanceByGender = (users, gender) => {

    const filteredUsers = users.filter(user => user.gender === gender);


    const totalBalance = filteredUsers.reduce((total, user) => total + user.balance, 0);


    return totalBalance;
};


const users = [];


const balanceMale = getTotalBalanceByGender(users, 'male');
console.log('Saldo total de usuarios masculinos:', balanceMale); // Debería imprimir el número 12053

const balanceFemale = getTotalBalanceByGender(users, 'female');
console.log('Saldo total de usuarios femeninos:', balanceFemale); // Debería imprimir el número 8863


