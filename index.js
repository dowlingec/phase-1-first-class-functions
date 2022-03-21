// const callbackFn = () => {
//     return "running callbackFn"
// }

function receivesAFunction(callbackFn) {
    callbackFn();
}

function returnsANamedFunction() {
    const iAmAFunction = () => {
        console.log("Chicken nugget")
    }
    return iAmAFunction
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log('bababooey')
    }
}