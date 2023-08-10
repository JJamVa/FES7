// Math.random(); // 0 ~ 0.999999... 사이의 실수

// Math.random() * 10 // 0 ~ 9.99999999...

// Math.random * 10 + 2 // 2 ~ 11.99999999...

// Math.random * 8 + 2 // 2 ~ 9.9999999 ....

// parseInt(Math.random * 8 + 2);

function lottoGenerator() {
    const lottArr = [];

    while (lottArr.length < 6) {

        // 1 ~ 44.999999
        const result = parseInt(Math.random() * 45 + 1);

        if (!lottArr.includes(result)) {
            lottArr.push(result);
        }
    }

    return lottArr;
}

console.log(lottoGenerator());