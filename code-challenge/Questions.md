# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```
The JavaScript runtime uses a message queue. The function setTimeout is called with 2 arguments: a message to add to the queue and a time value (in our case 100). The time value represents the delay after which the message will be pushed into the queue. So the code first executes console.log(2) and then the first argument of the setTimeout function (console.log(1)).

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

foo is a recursive function, a function that reference itself.
The code is executed first by calling foo(0), and foo is called ten more times, one for each recursive case until d is equal to ten. That is the first time the recursive function gets to the base case, resulting in the first call of console.log(10). Then the rest of the functions need to complete by calling the console.log
The output is the following:
10
9
8
...
1
0


Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```
The potential issues of the code are linked to the falsy values that can break the OR statement.
For example, if we pass zero (0) as an input, the d value ends up being 5. Using OR is ok if the team understands all the use cases of a function, but it's better to avoid it when it comes to defaulting a value. In ES6, you can declare the default argument value.


Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```
The output of the code is three (3). The var b is a function that returns "a + b" where one (1). The console.log calls "b" and passed two (2) as input b, which results in 3.


Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```
We would use the function double if we wanted to pass two arguments, a variable and a function. This functionality is handy if we want to pass a function as an argument and execute it based on a specific condition/logic. The double function runs a setTimeout and uses the function that it was passed as an argument.
If done function has the following simple definition:
function done(k) {
console.log(k);
}
Then the done function will run after the time value (100) and passes the input a * 2.