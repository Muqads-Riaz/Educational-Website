import app from "./firebaseConfiguration";
import { getDatabase, ref, push, set } from "firebase/database";


const db = getDatabase();

let sendData = (data , nodeName)=>{
   return new Promise((resolve, reject) => {
    const postListRef = ref(db, `${nodeName}/`);
    const newPostRef = push(postListRef);
    set(newPostRef, data)
    .then(()=>{
        resolve("Data Sent Successfully")
    }) 
    .catch((error)=>{
        reject(error)
    })
    })   
}
let sendDataWithId = (data , nodeName)=>{
    return new Promise((resolve, reject) => {
        const postListRef = ref(db, `${nodeName}/`);
        const newPostRef = push(postListRef);
        data.id = push(postListRef).key;
        set(newPostRef, data)
        .then(()=>{
            resolve("Data Sent Successfully")
        }) 
        .catch((error)=>{
            reject(error)
        })
        }) 
   
}

export{ sendDataWithId, sendData}