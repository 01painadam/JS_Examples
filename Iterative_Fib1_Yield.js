function* fib(n) {

    var sum = [];
    sum[0] = 0;
    sum[1] = 1;

    for (var i = 0; i <= n; i++) {

        if (i < 2) { yield sum[i]; }
        else{

            var temp = sum[i - 2] + sum[i - 1];
            sum.push(temp);
            yield sum[i];

        }
        

    }

    //return sum[n];


}

for (var n of fib(20)) {
    console.log(n);
}




/*

for (var i = 0; i < 20; i++) {


    console.log(`fib(${i}) = ${fib(i)}`);

}

*/