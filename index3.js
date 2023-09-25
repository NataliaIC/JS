const valoare = true;
const valoare2 = false;
const falsy1 = 0;
const falsy2 = NaN;
const falsy3 = undefined;
const falsy4 = null;
const falsy5 = '';

if (falsy1 == falsy2 || falsy3 === falsy4) {
    console.log(valoare)
}
else { console.log(valoare2) }

if (falsy1 && falsy2 || falsy3 == falsy5) {
    console.log(valoare)
}
else { console.log(valoare2) }
