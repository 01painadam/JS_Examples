var fib = n => {

    return n < 2 ? n : fib(n - 1) + fib(n - 2);

}

for (var i = 0; i < 20; i++) {

    console.log(`fib(${i}) = ${fib(i)}`);

}