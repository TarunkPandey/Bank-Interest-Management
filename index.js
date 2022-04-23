/* Take input of bank balance of 5 account holders as I/P 
    If the balance > 2L -> Add an interest of 10% and deduct 0.2% maintainance charge
     If the balance > 1L -> Add an interest of  5% and deduct 0.05% maintainance charge
     If any balance less than or equal to 1L -> Give 3% interest
*/

// let bankBalance = [245875, 15464, 3254, 784163, 101];
// for (let i = 0; i < bankBalance.length; i++) {
//   bankBalance[i] = Number(bankBalance[i]);
//   if (bankBalance[i] > 200000) {
//     bankBalance[i] = 1.1 * bankBalance[i];
//     bankBalance[i] = bankBalance[i] - 0.002 * bankBalance[i];
//   } else if (bankBalance[i] > 100000) {
//     bankBalance[i] = 1.05 * bankBalance[i];
//     bankBalance[i] = bankBalance[i] - 0.0005 * bankBalance[i];
//   } else {
//     bankBalance[i] = 1.03 * bankBalance[i];
//   }
// }
// console.log(bankBalance);

function calculateInterest(){
    let balance1 = Number(document.getElementById('bank-balance-1').value)//use .value with input tag
    let balance2 = Number(document.getElementById('bank-balance-2').value) //use .value with input tag
    let balance3 = Number(document.getElementById('bank-balance-3').value) //use .value with input tag
    let balance4 = Number(document.getElementById('bank-balance-4').value) //use .value with input tag
    let balance5 = Number(document.getElementById('bank-balance-5').value) //use .value with input tag

}




