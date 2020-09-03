---
title: 'Jest: beginner tutorial'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
---

# Start up
1. Create a folder named: `Jest-test`
2. Open Terminal and commond: `npm init -y`
3.  Install Jest: `npm i -D jest` (D for dependency)
4.  Open **package.json**, modify `test` in **dependency**.  ![test dependency]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_test_dependency.PNG)
5.  Create a js file named **function.js** and a test file **function.test.js**   in folder **Jest-test**
6. **function.js**![function.js]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_functionJS.PNG)
7. **function.test.js** ![function.js]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_functionTest.PNG)
8. Commond `npm test` in terminal ![function.js]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_test_terminal.PNG)
9. Let's make litte change and try a **Fail Case**: ![function.js]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_fail_case_functionJS.PNG)
10. Commond `npm test` in terminal ![function.js]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-01_fail_terminal.PNG) 

#  Matchers

```js
const functions = require('./function');

//test('description',
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
})

//--------------------------Object-------------------------------

//toBe() uses Object.is to test exact equality(means: will check their memory location is same or not). 
//If you want to check the value of an object, use toEqual() instead:
test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
});


//--------------------------Truthiness-------------------------------

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

//--------------------------Numbers-------------------------------

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

//For floating point equality, use toBeCloseTo instead of toEqual,
// because you don't want a test to depend on a tiny rounding error.
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

//--------------------------Strings-------------------------------

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});


//--------------------------Arrays and iterables------------------------------- 

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
];

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
});

//--------------------------Exceptions------------------------------- 
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
});
```

# Async
1. I get fake api data from [jsonplaceholder](https://jsonplaceholder.typicode.com/)
2. Install **axios**, `npm i axios`

**function.js**
```js
const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

};

module.exports = functions;
```

**function.test.js**
```js
//--------------------------Async Data------------------------------- 

//Promise
test('name should be Leanne Graham', () => {
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        })
})
//If you expect a promise to be rejected use the .catch method
//Make sure to add expect.assertions to verify that a certain number of assertions are called. 
//Otherwise a fulfilled promise would not fail the test.
test('the fetch fails with an error', () => {
    expect.assertions(1);
    return functions.fetchUser().catch(e => expect(e).toMatch('error'));
});


//Async Await
test('name should be Leanne Graham', async () => {
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
})

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await functions.fetchUser();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
```

# Setup and Teardown

```js
const initDataBase = () => console.log('Database init...');
const closeDataBase = () => console.log('Database close...');

const initAllDataBase = () => console.log('ALL Database init...');
const closeAllDataBase = () => console.log('ALL Database close...');

const checkName = () => console.log('Checking name');

//for each
beforeEach(() => initDataBase());
afterEach(() => closeDataBase());

//one-time for all
beforeAll(() => initAllDataBase());
afterAll(() => closeAllDataBase());

//for part of all
describe('Checking...', () => {
    beforeEach(() => checkName());
    test('user name Frank', () => {
        const user = 'Frank';
        expect(user).toBe('Frank');
    });
    test('user name Mike', () => {
        const user = 'Mike';
        expect(user).toBe('Mike');
    });
})
```

![setup]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-02_jest-setup_message.PNG)

# Jest Watch
`jest --watchAll #runs all tests` <br/>

we add this commond in script part of **package.json**;
![jest_watch]({{ site.url }}{{ site.baseurl }}/assets/images/2020-02-02_jest_watch.PNG)

Then run commond : `npm run testwatch`, it will run the test and watch changes.

# Code Link

[github](https://github.com/LiMarcus/workplace/tree/master/jest-test)