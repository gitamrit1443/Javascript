// functions inside functions
const app = () => {
    const myFunc = () => {
        console.log("Inside my function");
    }
    myFunc();
    console.log("This is app function");
    // console.log("App function khatam");
}
app();

