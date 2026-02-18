// regex in js
let regex=/c.t/;
let text=["cat","cow","counter","cusard","crow"];
for(let val of text)
{
    let res=regex.test(val);
    if(res) console.log(`${val} pattern is matched`);
    else console.log("pattern not matched");
}
// Another REGEX

let rule=/^(\+91)?[6-9][0-9]{9}$/;
let numbers=["+919761377180","+9186794393180","+918706929107","+1185565329","+918944137784","+917406263797"];
for(let number of numbers)
{
    let res=rule.test(number);
    if(res) console.log(`${number} number  is indian number`);
    else console.log("Number not indian number");
}