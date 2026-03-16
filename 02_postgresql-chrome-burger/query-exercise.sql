--Exercise 1 : Write a query to see a list of all employees working at Chrome & Burger.
/*
SELECT * FROM Staff
*/



--Exercise 2 : Write a query to find all menu items that fall under the 'Burger' category.
/*
SELECT * FROM MenuItems
WHERE category = 'Burger';
*/



--Exercise 3 : Write a query to show all menu items, but list them from the most expensive to the least expensive.
/*
SELECT * FROM MenuItems
ORDER BY price DESC
*/



--Exercise 4 : Write a query to find the three cheapest items available on the menu.
/*
SELECT * FROM MenuItems
ORDER BY price 
LIMIT 3
*/



--Exercise 5 : Write a query to find all the ingredients supplied by 'Patty''s Premium Meats'.
/*
SELECT Ingredients.name
FROM Ingredients
INNER JOIN Suppliers ON Ingredients.supplier_id = Suppliers.supplier_id
WHERE Suppliers.name = 'Patty''s Premium Meats';
*/



--Exercise 6 : Write a query to see all orders processed by the staff member with staff_id = 1
/*
SELECT * FROM Orders WHERE staff_id = 1;
*/



--Exercise 7 : Write a query to find out how many orders each staff member has processed. Show the staff member's first name, last name, and their total order count.
/*
SELECT
    Staff.first_name,       --ย่อ Staff เป็น s ได้
    Staff.last_name,
    COUNT(Orders.order_id) AS order_count
FROM Staff
JOIN Orders ON Staff.staff_id = Orders.staff_id
GROUP BY Staff.staff_id
ORDER BY order_count;
*/



--Exercise 8 : Write a query to calculate the total revenue for each day of sales.
/*
SELECT
    DATE(order_date) AS sales_day,
    SUM(total_price) AS daily_revenue
FROM Orders
GROUP BY sales_day
ORDER BY sales_day;
*/



--Exercise 9 : Write a query to find out which menu item has been ordered the most.
/*
SELECT
    MenuItems.name,        ------ย่อเป็น mi ได้
    SUM(OrderItems.quantity) AS total_sold    ------ย่อเป็น oi ได้
FROM OrderItems
JOIN MenuItems ON OrderItems.item_id = MenuItems.item_id
GROUP BY MenuItems.name
ORDER BY total_sold DESC
LIMIT 1;
*/


--Exercise 10 : List All Ingredients for the 'Bacon Cheeseburger'
SELECT
    i.name,
    ri.quantity_needed,
    i.unit
FROM RecipeItems ri
JOIN MenuItems mi ON ri.item_id = mi.item_id
JOIN Ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE mi.name = 'Bacon Cheeseburger';