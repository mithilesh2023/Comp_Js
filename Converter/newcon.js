// let isDecimalToOther = true;

//         function convertNumber() {
//             const inputValue = document.getElementById('input-value').value;
//             const conversionType = document.getElementById('conversionType').value;
//             let result = '';

//             if (isDecimalToOther) {
//                 switch (conversionType) {
                   
//                     case 'binary':
//                         result = parseInt(inputValue, 10).toString(2);
//                         break;
//                     case 'octal':
//                         result = parseInt(inputValue, 10).toString(8);
//                         break;
//                     case 'hexadecimal':
//                         result = parseInt(inputValue, 10).toString(16).toUpperCase();
//                         break;
//                     default:
//                         result = 'Invalid Conversion Type';
//                 }
//             } else {
//                 result = parseInt(inputValue, 2).toString(10);
//             }

//             const resultElement = document.getElementById('result');
//             resultElement.textContent = `${isDecimalToOther ? conversionType : 'Decimal'}: ${result}`;
//         }

//         function swapConversion() {
//             isDecimalToOther = !isDecimalToOther;
//             const conversionType = document.getElementById('conversionType');
//             conversionType.disabled = isDecimalToOther;
//             const buttonText = isDecimalToOther ? 'Convert' : 'Submit Back';
//             document.querySelector("button").textContent = buttonText;
//         }