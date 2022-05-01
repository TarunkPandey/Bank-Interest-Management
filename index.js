/* Take input of bank balance of 5 account holders as I/P 
    If the balance > 2L -> Add an interest of 10% and deduct 0.2% maintainance charge
     If the balance > 1L -> Add an interest of  5% and deduct 0.05% maintainance charge
     If any balance less than or equal to 1L -> Give 3% interest
*/

// function calculateInterest() {
//   let balance1 = Number(document.getElementById("bank-balance-1").value); //use .value with input tag to access the value provided in it
//   let balance2 = Number(document.getElementById("bank-balance-2").value); //use .value with input tag
//   let balance3 = Number(document.getElementById("bank-balance-3").value); //use .value with input tag
//   let balance4 = Number(document.getElementById("bank-balance-4").value); //use .value with input tag
//   let balance5 = Number(document.getElementById("bank-balance-5").value); //use .value with input tag

//   let updateBankBalance1 = document.getElementById("updated-bank-balance-1");
//   let updateBankBalance2 = document.getElementById("updated-bank-balance-2");
//   let updateBankBalance3 = document.getElementById("updated-bank-balance-3");
//   let updateBankBalance4 = document.getElementById("updated-bank-balance-4");
//   let updateBankBalance5 = document.getElementById("updated-bank-balance-5");

//   let bankBalance = [balance1, balance2, balance3, balance4, balance5];

//   for (let i = 0; i < bankBalance.length; i++) {
//     bankBalance[i] = Number(bankBalance[i]);

//     if (bankBalance[i] > 200000) {
//       bankBalance[i] = 1.1 * bankBalance[i];
//       bankBalance[i] = bankBalance[i] - 0.002 * bankBalance[i];
//     } else if (bankBalance[i] > 100000) {
//       bankBalance[i] = 1.05 * bankBalance[i];
//       bankBalance[i] = bankBalance[i] - 0.0005 * bankBalance[i];
//     } else {
//       bankBalance[i] = 1.03 * bankBalance[i];
//     }
//   }

//   updateBankBalance1.value = bankBalance[0] //updating the value of output ids
//   updateBankBalance2.value = bankBalance[1]
//   updateBankBalance3.value = bankBalance[2]
//   updateBankBalance4.value = bankBalance[3]
//   updateBankBalance5.value = bankBalance[4]
// }

/*--------------------------------------------------------------------------------------------------------*/

function calculateInterest() {
  let inputBalanceNodes = document.getElementsByClassName("input-balance");
  let displayUpdatedBalances = document.getElementsByClassName("display-updated-balance");

  let bankBalance = []; //stores the values of inputBalanceNodes in an array

  for (let i = 0; i < inputBalanceNodes.length; i++) {
    bankBalance[i] = Number(inputBalanceNodes[i].value); //Value property always stores the string. So it is being typecasted to Integer.

    if (bankBalance[i] > 200000) {
      bankBalance[i] = 1.1 * bankBalance[i];
      bankBalance[i] = bankBalance[i] - 0.002 * bankBalance[i];
    } else if (bankBalance[i] > 100000) {
      bankBalance[i] = 1.05 * bankBalance[i];
      bankBalance[i] = bankBalance[i] - 0.0005 * bankBalance[i];
    } else {
      bankBalance[i] = 1.03 * bankBalance[i];
    }
    displayUpdatedBalances[i].value = bankBalance[i];
  }
}
