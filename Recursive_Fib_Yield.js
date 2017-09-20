var count = 0;
var fibstore = [];

function* fib(n) {



    if (count == 0) { fibstore.push(count); yield (fibstore[count]); }
    else if (count == 1) { fibstore.push(count); yield (fibstore[count]); }
    else {

        fibstore.push(fibstore[count - 1] + fibstore[count - 2]);
        yield fibstore[count];

    }
    count++;
    if (count < n) { yield* fib(n); }


}

for (var n of fib(20)) {
    console.log(n);
}