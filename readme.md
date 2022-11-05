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

