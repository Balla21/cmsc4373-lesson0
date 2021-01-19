const buttonTag = document.getElementById("button-lucky");
const messageTag = document.getElementById("message");

const f1 = firebase.functions().httpsCallable("doSomething");

buttonTag.addEventListener("click", buttonClick);

async function buttonClick(){
    console.log("button clicked");
    try{
        const n1 = Math.floor( Math.random() * 100 );
        const n2 = Math.floor( Math.random() * 100 );
        const result = await f1({n1: n1, n2: n2});
        const ret = result.data;
        console.log(ret);
        messageTag.innerHTML = "n1 = " + n1 + ", n2 = " + n2;
        messageTag.innerHTML += "<br/>ADD = " + ret.add + ", MUL = " + ret.mul;
    }
    catch(error){
        console.error(error);
    }
}