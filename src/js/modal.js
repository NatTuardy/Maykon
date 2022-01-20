(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();





let sum = []
const chooseOptimalDistance = (t, k, ls) => {
function binom(a,b) {
    if(a < 2*b) b = a-b;
    var n = 1;
    for(var i=a-b+1; i<=a; ++i) n *= i;
    for(var i=2; i<=b; ++i) n /= i;
    return n;
  }
  const kombination = binom(ls.length, k)
  console.log(kombination)
 if (ls.length < k) {
   console.log('null') 
  }
  
  let uniqeNumbers = []
  let sumUniqeNumbers = 0
// for (let x = 0; x <= kombination; x++) {
// console.log(x)

let ii = 0;
console.log(sum.length)


// do {
//   for (let i = 0; i <k ; i++) { 
//     console.log(`i`, i)
//     let randomNumber = ls[Math.floor(Math.random() * ls.length)]
//     if (uniqeNumbers[i] !== randomNumber && uniqeNumbers.length <=k) {
//       if(!uniqeNumbers.includes(randomNumber)) {
//         uniqeNumbers.push(randomNumber)
//       }
//     } 
//     if(uniqeNumbers.length === 3) {
//       console.log(uniqeNumbers)
//       sumUniqeNumbers = uniqeNumbers.reduce((acc, x) => acc +=x)
//       uniqeNumbers = 0
//       console.log(sumUniqeNumbers)
//       if(!sum.includes(sumUniqeNumbers) ) {
//         console.log('llll',sumUniqeNumbers)
//         sum.push(sumUniqeNumbers)
        
//         }
//     }
//   }
// } while (ii < kombination);

//       if(!sum.includes(sumUniqeNumbers) ) {
// console.log('llll',sumUniqeNumbers)
// sum.push(sumUniqeNumbers)
// console.log(sum)
// }
console.log(sum)
// }


//     for (let i = 0; i = uniqeNumbers.length <k; i++) { 
//       let randomNumber = ls[Math.floor(Math.random() * ls.length)]
//       if (uniqeNumbers[i] !== randomNumber && uniqeNumbers.length <=k) {
//         if(!uniqeNumbers.includes(randomNumber)) {
//           uniqeNumbers.push(randomNumber)
//         }
//       } else {
//         return
//       }
//       if(uniqeNumbers.length === 3) {
//         console.log(uniqeNumbers)
//         sumUniqeNumbers = uniqeNumbers.reduce((acc, x) => acc +=x)
//         console.log(sumUniqeNumbers)
  
//       }
//     }
//     console.log(sumUniqeNumbers )
// //     if(!sum.includes(sumUniqeNumbers) && (sum.length < binom(ls.length, k))) {
// // console.log('llll',sumUniqeNumbers)
//       sum.push(sumUniqeNumbers)
//       console.log(sum)
//     // }
  }
  console.log(sum)

console.log(chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61])); //173
// console.log(chooseOptimalDistance(163, 3, [50])); // null



// function binom(a,b) {
//   if(a < 2*b) b = a-b;
//   var n = 1;
//   for(var i=a-b+1; i<=a; ++i) n *= i;
//   for(var i=2; i<=b; ++i) n /= i;
//   return n;
// }

// console.log(binom(5,3))
