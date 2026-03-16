//-------------------เก็บข้อมูล-------------------------
//1. เก็บข้อมูล customers ด้วย Array
let customers = [
    {
        customer_id: 1,
        name: "Naruto",
        email: "Narunaru@gmail.com",
        phone: "0123456789",
        address: "Konoha",
    },
       {
        customer_id: 2,
        name: "Sanji",
        email: "Sanjiblackleg@gmail.com",
        phone: "0789456123",
        address: "North Blue",
    }
]

//2. เก็บข้อมูลไอติม main product
let products = [
    {
        product_id: 1,
        product_name: "Royal Vanilla Dream",
        flavor: "Vanilla",
        description: "Smooth vanilla ice cream made with premium vanilla beans from Madagascar.",
        price: 70.00
    },
    {
        product_id: 2,
        product_name: "Royal Belgian Chocolate",
        flavor: "Chocolate",
        description: "Creamy chocolate ice cream made with famous cocoa from Belgium.",
        price: 85.00
    },
    {
        product_id: 3,
        product_name: "Strawberry Pop",
        flavor: "Strawberry",
        description: "Creamy strawberry ice cream made with fresh strawberries from Japan.",
        price: 80.00
    }
]

//3. เก็บข้อมูล order
let orders = [
    {
        order_id: 101,
        customer_id: 1,           // FK เชื่อมกับ customers
        order_date: "2025-03-10",
        order_status: "confirmed",
        total_price: 180.00,
        payment_status: "paid",
        shipping_address: "Konoha",
        order_number: 1
    },
    {
        order_id: 102,
        customer_id: 2,
        order_date: "2025-03-10",
        order_status: "confirmed",
        total_price: 120.00,
        payment_status: "unpaid",
        shipping_address: "North Blue",
        order_number: 2
    }
]

//4. ข้อมูล custom_scoop

let customScoops = [
    {
        custom_id: 1,
        order_id: 101,             // FK เชื่อมกับ orders
        custom_base: "milk",
        custom_flavor: "Matcha",
        custom_topping: "Oreo crumbs, rainbow sprinkles",
        custom_price: 80.00
    }
]

//5. ข้อมูล payment

let payments = [
    {
        payment_id: 1,
        order_id: 101,             // FK เชื่อมกับ orders
        payment_method: "promptpay",
        amount: 180.00,
        payment_date: "2025-03-10",
        status: "success"
    }
]

//6. ข้อมูล delivery

let deliveries = [
    {
        delivery_id: 1,
        order_id: 101,             // FK เชื่อมกับ orders
        delivery_name: "Flash Express",
        tracking_number: "TH123456789",
        shipped_at: "2025-03-10",
        delivered_at: "2025-03-11",
        delivery_status: "delivered"
    }
]

//-------------------ฟังก์ชั่น-------------------------
//function 1 - เรียกแสดงเมนูที่มีทั้งหมด
function showAllProducts() {
    console.log("All Main Ice Cream Menu")
    for (let i = 0; i < products.length; i++) {   //( เริ่มต้น(นับจาก0) ; เงื่อนไข(iน้อยกว่าตารางสินค้า(3)ก็วนลูปต่อไป) ; เพิ่มค่า(แต่ละรอบบวกiเพิ่ม1) ) 
        let p = products[i]      //เอาสินค้าที่ i มาเก็บไว้ในตัวแปร p เพื่อให้เรียกง่ายๆ 
        console.log(`${p.product_id}. ${p.product_name} (${p.flavor}) - price ${p.price} ฿`)   //`` คือ Template Literal สามารถแทรกตัวแปรเข้าไปในประโยคได้เลย โดยใช้ ${ } ครอบตัวแปร
        console.log(`${p.description}`)    //คำอธิบายสินค้า 
    }
console.log("")   //เอาไว้เว้นบรรทัด
}


//function 2 - หาลูกค้าจาก customer id
function findCustomer(id) {     
    for (let i = 0; i < customers.length; i++) {   // วนหาใน array ดูลูกค้าทีละคน
        if (customers[i].customer_id === id) {    //แต่ละรอบเช็คว่า customer_id ตรงกับ id มั้ย ถ้าใช่ก็ return ออก หยุดทำงาน
        return customers[i]
        }
    }
    return null  // ถ้าวนครบแล้วหาไม่เจอ return null
}


//function 3 - ดูออเดอร์ของลูกค้า
function showOrderByCustomer(customerId) {
    let customer = findCustomer(customerId)

    if (customer === null) {     //เช็คว่า customer มีค่าเป็น null มั้ย มีก็ return หยุดทำงาน
        console.log("Not found customer")
        return
    }

    console.log(`order K.${customer.name}`)

    // กรองเอาเฉพาะออเดอร์ของลูกค้าคนนี้
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]

        if (order.customer_id === customerId) {
        console.log(`Order #${order.order_id}`)
        console.log(`  Order date       : ${order.order_date}`)
        console.log(`  Order status     : ${order.order_status}`)
        console.log(`  Total price      : ${order.total_price} ฿`)
        console.log(`  Payment status   : ${order.payment_status}`)
        console.log(`  Address          : ${order.shipping_address}`)
        console.log("")
        }
    }
}

//function 4 - ดูรายละเอียด Custom Scoop
function showCustomScoop(orderId) {
    console.log(`Custom Scoop - Order #${orderId} `)

    let found = false    //ตอนวนลูปถ้าเจอ order ที่ตรงกันจะเปลี่ยนเป็น true

    for (let i = 0; i < customScoops.length; i++) {
        let scoop = customScoops[i]

    if (scoop.order_id === orderId) {
        console.log(`  Base    : ${scoop.custom_base}`)
        console.log(`  Flavor  : ${scoop.custom_flavor}`)
        console.log(`  Topping : ${scoop.custom_topping}`)
        console.log(`  Price    : ${scoop.custom_price} ฿`)
        found = true    //เจอข้อมูลเปลี่ยน F>T
        }
    }

    if (!found) {
        console.log("No custom")
    }
    console.log("")
}

//function 5 : ดูสถานะการจัดส่ง
function trackDelivery(orderId) {
    console.log(`Tracking Order #${orderId} `)

    let found = false

    for (let i = 0; i < deliveries.length; i++) {
        let d = deliveries[i]

        if (d.order_id === orderId) {   //เช็คว่า เช็กว่า order_id ตรงกับที่รับเข้ามามั้ย ถ้าตรงก็เข้าไปทำงานข้างใน
        console.log(`  Shipping company    : ${d.delivery_name}`)  //เคาะข้างหน้าเว้นให้มีย่อหน้า
        console.log(`  Tracking Number : ${d.tracking_number}`)
        console.log(`  Shipping Date      : ${d.shipped_at}`)
        console.log(`  Delivery Date       : ${d.delivered_at}`)
        console.log(`  Shipping Status         : ${d.delivery_status}`)
        found = true   
        }
    }

    if (!found) {
        console.log("Not found Shipping Status")
    }
    console.log("")
}


//-------------------รันโปรแกรม-เรียกใช้ฟังก์ชั่น-------------------------
console.log("       Make a Scoop        ")
console.log("====================================================")

//function ข้างในมี console.log ซ่อนอยู่แล้ว ตอน run ใน terminal จะออกมาเอง
showAllProducts()    // แสดงเมนูทั้งหมด
showOrderByCustomer(1)   // ดูออเดอร์ของลูกค้า ID 1 (Naruto)
showOrderByCustomer(2)   // ดูออเดอร์ของลูกค้า ID 2 (Sanji)
showCustomScoop(101)     // ดู Custom Scoop ของ Order 101
showCustomScoop(102)     // ดู Custom Scoop ของ Order 102 (ยังไม่มีข้อมูล)
trackDelivery(101)       // ติดตามการจัดส่ง Order 101 
trackDelivery(102)      // ติดตามการจัดส่ง Order 102 (ยังไม่มีข้อมูล)


























//ลองเอามา represent ในเชิง js code
//ควรเขียน code ยังไงหน้าตายังไง
//รันให้ออกที่ terminal



/*
ตัวอย่าง

let productList = ["product_id_1", "product_id_2", "product_id_3"];

const product_A = {
    productId: "product_id_1",
    productName: "Orange",
    price: 80,
};

//ใช้ array object //datatype

let cart = [
    {
        productId: "product_id_1",
        quantity: 10,
    },
    {
        productId: "product_id_2",
        quantity: 5,    
    }
];

console.log(productList);
console.log(product_A);
console.log(cart);
*/


