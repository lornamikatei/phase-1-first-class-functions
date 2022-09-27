const receivesAFunction =(callback) => {
    return callback ();
}
const returnsANamedFunction = () => {
    function AFunc() {
        // Your code here!!
    }
    return AFunc;
}
const returnsAnAnonymousFunction =() => {
    return () => {};
}