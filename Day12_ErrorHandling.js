try {
    throw new Error('invalid request')
} catch (error) {
    console.log('error in loop :'+error.message)
}
function divide(num,deno){
    try {
        if(deno==0) throw new Error('invalid denominator')
        return num/deno;
    } catch (error) {
        console.log(error.message)
    }
}
console.log(divide(1,2))
console.log(divide(2,0))

function handleTryCatch(){
    try {
        console.log('inside try blocks')
        throw new Error('an error in try blocks')
    } catch (error) {
        console.log('inside catch blocks')
        console.error(error.message)
    }finally{
        console.log('inside finally blocks')
    }
}
handleTryCatch()

// Define a custom error class that extends the built-in Error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        // Throw an instance of the custom error
        throw new CustomError("This is a custom error message.");
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Caught a custom error.");
            console.error("CustomError: ", error.message);
        } else {
            console.log("Caught an unexpected error.");
            console.error("Error: ", error.message);
        }
    } finally {
        console.log("Finally block executed.");
    }
}

// Call the function
throwCustomError();

function checkValidString(str){
    try {
        if(str.length==0) throw new Error("invalid string");

    } catch (error) {
        console.log('Caught exception:',error.message)
    }
}
checkValidString("a")

function randomResolveReject(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if(isSuccess){
                res('promise res successfully')
            }else{
                rej(new Error('promies rejected'))
            }
        }, 1000);
    })
}

randomResolveReject().then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.error(error.message)
})

function randomResolveReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate a random boolean value
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve("Promise resolved successfully!");
            } else {
                reject(new Error("Promise rejected!"));
            }
        }, 1000);
    });
}

async function handlePromise() {
    try {
        const message = await randomResolveReject();
        console.log(message);
    } catch (error) {
        console.error("An error occurred: ", error.message);
    } finally {
        console.log("Finally block executed.");
    }
}

// Call the async function
handlePromise();

function fetchData() {
    const invalidUrl = 'https://invalid-url.example.com/data';

    fetch(invalidUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
        })
        .catch(error => {
            console.error('An error occurred while fetching data:', error.message);
        })
        .finally(() => {
            console.log('Fetch attempt completed.');
        });
}

// Call the function to fetch data
fetchData();


async function fetchData() {
    const invalidUrl = 'https://invalid-url.example.com/data';

    try {
        const response = await fetch(invalidUrl);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data fetched successfully:', data);
    } catch (error) {
        console.error('An error occurred while fetching data:', error.message);
    } finally {
        console.log('Fetch attempt completed.');
    }
}

// Call the async function to fetch data
fetchData();

