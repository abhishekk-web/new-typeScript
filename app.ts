const number1 = document.getElementById('num1') as HTMLInputElement;
const number2 = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: Array<number> = [];
const textResults: string[] =[];

type NumOrString = number | string;
type Result = {val: number; timestamp: Date};

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 ==='number') {
        return num1 + num2;
    } else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}

function printResult(resultObj: {val: number; timestamp: Date}) {
    console.log(resultObj.val);
}

buttonElement.addEventListener('click', () => {
    const num1 = number1.value;
    const num2 = number2.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    numResults.push(result as number);
    textResults.push(stringResult as string);
    console.log(numResults, textResults);
})

function presultResult(resultObj: Result){
    console.log(resultObj.val);
}

const myPromise = new Promise<string>((resolve, reject)=> {
    setTimeout(()=> {
        resolve('It worked!');
    }, 1000)
})

myPromise.then((result) => {
    console.log(result.split('w'));
})