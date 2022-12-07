class Person {
  interest: string;
  constructor(interest: string) {
    this.interest = interest;
  }
}

let myul = new Person("Hej");

let myul1 = new Person("Tja");

let myu3 = new Person("Va");

let myul5 = new Person("Ha");

let myul6 = new Person("Hejhej");

let names = 0;

let ulTag = document.getElementById("myUL");

let myuls = ["Hej", "Tja", "Va", "Ha", "Hejhej"];

for (let i = 0; i < myuls.length; i++) {
  console.log(myuls);
  let li = document.createElement("li");

  var span = document.createElement("span");

  var txt = document.createTextNode("\u00D7");

  let ull = document.createElement("button");
  li.innerHTML = myuls[i];

  ull.appendChild(span);
  li.appendChild(span);
  ulTag?.appendChild(li);

  span.className = "close";
  span.appendChild(txt);

  span.addEventListener("click", () => {
    li.remove();
  });
}
