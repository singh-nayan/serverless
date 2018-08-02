var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var request = require("request");
chai.should();
// describe is used to group individual tests
// The first parameter should indicate what we’re testing — in this case, since we’re going to test array
// functions, I’ve passed in the string 'Array'.
// it is used to create the actual tests. The first parameter to it
// should provide a human-readable description of the test.

// describe('Array',() =>{ 
    
//     it('should start empty', ()=>{
//         var arr = [23];
//         assert.equal(arr.length,arr.length>=1);
//       }).timeout(1000);        

// });

// returnName=(name)=>{
//     return name;
// }

// describe('Employee',()=>{
//     it('return same name as passed',()=>{
//         returnName('Nayan').should.equal('Nayan');
//     });
// });


var options = { method: 'GET',
  url: 'https://7fbywiydc5.execute-api.us-east-1.amazonaws.com/dev/subtraction',
  qs: {a:'8',b:'9'},
  headers: 
   { //'postman-token': 'c6efc2e6-de22-6849-ef2c-029d55acb23d',
     'cache-control': 'no-cache',
     'content-type': 'application/json' 
    } 
};

describe('add two numbers',()=>{
    it('return the sum',()=>{
        request(options,(error, response, body)=>{
            if (error) throw new Error(error);
            console.log(body);
            //console.log(response);
        })
    })
})