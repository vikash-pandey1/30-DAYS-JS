// function createPromiseRes() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res('promise that resolves after 2 sec')
//         }, 2000)
//     })
// }
// createPromiseRes().then((message) => {
//     console.log(message)
// })

// function createPromiseRej() {
//     return new Promise((_, rej) => {
//         setTimeout(() => {
//             rej(new Error('promise rejected after 5 sec'));
//         }, 5000)
//     });
// }
// createPromiseRej().catch((error) => {
//     console.log(error.message)
// })


// function fetchDataFromServer(url, delay, message) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Fetching data from ${url}`);
//             resolve(message);
//         }, delay);
//     });
// }

// fetchDataFromServer('server1.com', 1000, 'Data from server 1')
//     .then((message1) => {
//         console.log(message1);
//         return fetchDataFromServer('server2.com', 2000, 'Data from server 2');
//     })
//     .then((message2) => {
//         console.log(message2);
//         return fetchDataFromServer('server3.com', 1500, 'Data from server 3');
//     })
//     .then((message3) => {
//         console.log(message3);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

//     async function logResolvedValue() {
//         function createPromise() {
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     resolve("Promise resolved with this value");
//                 }, 2000);
//             });
//         }
    
//         try {
//             const resolvedValue = await createPromise();
//             console.log(resolvedValue);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     }
    
//     logResolvedValue();

// async function createRejFunction(){
//     function rejectPromise(){
//         return new Promise((_,rej)=>{
//             setTimeout(()=>{
//                 rej(new Error('promise rej with this value'));
//             },10000);
//         });
//     }
//     try {
//         const rejPromise = await rejectPromise();
//         console.log(rejPromise);
//     } catch (error) {
//         console.log(error.message)
//     }
// }


// createRejFunction()

// function fetchData(){
//     const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
//     fetch(apiURL).then((res)=>{
//         if(!res.ok){
//             throw new Error('net res was not ok',res.statusText)
//         }
//         return res.json();
//     }).then((data)=>{
//         console.log("data fetch from api",data)
//     }).catch((error)=>{
//         console.log(error)
//     });
// }
// fetchData();

// async function fetchData2(){
//     const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';
//     try {
//         const res = await fetch(apiURL);
//         if(!res.ok){
//             throw new Error('net res was not ok',res.statusText)
//         }
//         const data = await res.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchData2();

function fetchDataFromAPI(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    });
}

const apiURLs = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

const fetchPromises = apiURLs.map(url => fetchDataFromAPI(url));

Promise.all(fetchPromises)
    .then(responses => {
        console.log('All data fetched:', responses);
    })
    .catch(error => {
        console.error('There was a problem with one of the fetch operations:', error);
    });
    
    Promise.race(fetchPromises)
        .then(responses => {
            console.log('All data fetched:', responses);
        })
        .catch(error => {
            console.error('There was a problem with one of the fetch operations:', error);
        });
    