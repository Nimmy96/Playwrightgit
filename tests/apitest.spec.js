const { test,expect } = require("@playwright/test");

//get request

test ('get request',async({request})=>{
     const response=await request.get("https://jsonplaceholder.typicode.com/users");
     expect(response.ok()).toBeTruthy();
     const body=await response.json();
     expect (body.length).toBeGreaterThan(0);

});

//post request
test('post request',async({request})=>{
   const response= await request.post("https://jsonplaceholder.typicode.com/users",{
   data:{
    name:"Nimmy",
    email:"nn@gmail.com"
   }

});
expect(response.status()).toBe(201);
const responsebody=await response.json(); 
expect (responsebody.name).toBe("Nimmy");
});

//put request
test('put request',async({request})=>{
    const response=await request.put("https://jsonplaceholder.typicode.com/users/1",{
        data:{
            id:1,
            name:"Anu",
            email:"n@gmail.com"
        }
    });
    expect(response.status()).toBe(200);
    const responsebody=await response.json();
    expect (responsebody.email).toBe("n@gmail.com");
})
//patch
test('patch request',async({request})=>{
    const response=await request.patch("https://jsonplaceholder.typicode.com/users/1",{
        data:{
            name:"Ambu",
            

        }
    });
    expect(response.status()).toBe(200);
    const responsebody=await response.json();
    expect (responsebody.name).toBe("Ambu");
})

//delete

test('delete request',async({request})=>{
        const response=await request.delete("https://jsonplaceholder.typicode.com/users/1");
        expect(response.status()).toBe(200);
        });

