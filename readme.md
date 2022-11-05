# Functional Programming with JavaScript

## First-Class Functions

```javascript

function add(x,y) {
    return x + y;
}

```

- **Function** object was created called `add`.

```javascript

const add = function(x,y) {
    return x + y;
}

```

- **function expression** assigned in a variable.

In JavaScript, once it loaded both functions are the same. 
A function called `add` that accepts two values and performs a `function computation`.

Theoretically, I have two differents **Function objects**.

1. Defined as a declaration
2. Defined as an expression

<br /> <br />
<hr />

### Opportunities of defining a function as an expression

- Pass a function as an argument to another function.

```javascript

document.addEventListener('click', function (e) {
    //todo
});

```

- Return a function from another function.

```javascript

const greet = function (saluation) {
    return function (firstName) {
        return `${saluation} ${firstName}`;
    }
}

const hello = greet('Hello')

hello('Blue');
hello('Jui');

```

- It's a good way to re-use code.

## Declarative Programming

- Instead of doing step-by-step like in `Imperative Style`:

```javascript

const fruits = ['Apple', 'Banana', 'Mango'];

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

```

- In `Functional Programming` is done by calling functions (methods):

```javascript

fruits.forEach(function(fruit) {
    console.log(fruit);
})

```

## Pure and Impure Functions

### Pure Function

- Easy to test, easy to predict.

1. It only works on data that is passed to it.

```javascript

function add (x,y) {
    return x + y;
}

add(1,2); //3
add(1,2); //3
add(1,2); //3

```

<br /> <br />
<hr />

### Impure Function

1. It relies on external data (information)

```javascript

function add2 (x,y) {
    console.log(x+y) //console is an external data, also a side-effect.

    return x + y;
}

add2(1,2); //3: Despite it produces the same result
add2(1,2); //3: It mutates the state of our application
add2(1,2); //3: With it own side-effect

```

## Immutability

- It cannot be changed (mutated).

```javascript

let salutation = "hello";
salutation = "bye"; //salutation was mutated

```

- To fix this kind of behaviour, use `const`.

```javascript
const salutation = "hello";

//Now, it is immutable, salutation cannot be changed

const person = {
    firstName: "Blue"
}

```

1. It protects the variable, but not the `Object`
2. To protect the immutability of the `Object`, it's used **Object.freeze(obj)**.

```javascript

const person = Object.freeze({
    firstName: "Blue"
})

//Now, it can't be mutated

```

1. A variable that is protected with the `const` property.
2. An object that is immutable with the `Object.freeze()`.

```javascript

const order = Object.freeze([1,2,3,4,5]);

function addOrder(arr) {
    return Object.freeze([...arr, arr.length]);
}

const newOrder = addOrder(order)
```