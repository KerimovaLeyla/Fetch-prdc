const products = document.getElementById('prdc');

// Task 1. Ən bahalı məhsul 

// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//         let highPrice = 0;

//         data.forEach(item => {
//             if (item.unitPrice > highPrice) {
//                 highPrice = item.unitPrice;
//                 highName = item;
//             }
//         });
//     console.log(highName.name);
//     console.log(highPrice);
        
//     });



//Task 2. Ortalama stok miqdarı


// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//         let sum = 0;

//         for(let i of data){
//             sum += i.unitsInStock; 
//         }
//         let a = data.length;
//         console.log(sum/a);    
//     });




//Task 3. “C” ilə başlayan məhsullar 


// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//        let a = data.filter(item => item.name[0] == "C")
//        console.log(a);
//     });





// Task 4.“London” şəhərindəki müştəriləri console a yaz 


// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.address.city == "London")
//         console.log(a);
//     });





// Task 5.Region NULL olan nə qədər customer var?

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.address.region == "NULL")
//         console.log(a);
//     });



// Task 6.Id-si 1 olan userin nə qədər postu var?


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.userId == 1)
//         console.log(a.length);
//     });


// Task 7.1 nömrəli albümdə nə qədər fotoqraf var?

// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(res => res.json())
//     .then(data => {
//         let a = data.filter(item => item.userId == 1)
//         console.log(a.length);
//     });