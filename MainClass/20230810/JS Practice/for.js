outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i + j === 3) {
            continue outer;
        }
        console.log(i, j);
    }
}
// for (let i = 0; i < 20; i++) {
//     console.log('아가입니다');
//     if (i < 13) continue;
//     console.log(i + '살은 청소년입니다.');
// }

// let i = 0;
// while (i < 100) {
//     i++;
//     console.log(i + '살 입니다.');
//     if (i === 14) {
//         console.log(i + '살 부터 중학생이 됩니다.');
//         break;
//     }
// }
// console.log('중학교 입학을 축하합니다');

// let num = 0;

// do {
//     document.write(num, '<br>');
//     num += 1;
// } while (num < 11);
// let input;

// do {
//     input = prompt("숫자를 입력하세요.");
// } while (isNaN(input));

// console.log("입력한 숫자는 " + input + "입니다.");


// let num = 0;

// while (num < 11) {
//     document.write(num, '<br>');
//     num += 1;
// }


// const person = {
//     name: '재현',
//     age: 20,
//     gender: 'male'
// };

// const props = Object.keys(person);
// console.log(props);
// for (let i = 0; i < props.length; i++) {
//     console.log(`key: ${props[i]} , value : ${person[props[i]]} `);
// }