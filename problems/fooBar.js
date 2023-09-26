function fooBar(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log('foobar', i);
            }
            else {
                console.log('foo', i);
            }
        }
        else if (i % 5 === 0) {
            if (i % 3 === 0) {
                console.log('foobar', i);
            }
            else {
                console.log('bar', i);
            }
        }
    }
}

fooBar(15);