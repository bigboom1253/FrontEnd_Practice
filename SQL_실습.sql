-- 데이터베이스 선택 
use w3schools;

-- Q.도쿄에위치한공급자(Supplier)가생산한상품목록조회:
select * from products; -- productName, supplierID 확인
select * from suppliers; -- supplierID, City 확인

select city, SupplierName, ProductName, price
	from products
		inner join suppliers
		on products.SupplierID = suppliers.SupplierID
        where city = 'Tokyo';
        
-- Q.분류(Categories)가Seafood인상품명(ProductName):
select * from categories; -- categoryID, categoryName = seafood 
select * from products; -- categoryID, productName

select CategoryName, ProductName 
	from products
		inner join categories
		on products.categoryID = categories.categoryID
		where categoryName = 'Seafood';
        
-- 공급자(Supplier)가공급한상품의공급자국가(Country)별로상품카테고리(ProductName)의상품건수와평균가격:
select * from suppliers; -- 공급자가 공급한 상품의 Country 별로 
select * from products; -- 상품 건수와 평균 가격
select * from categories; -- categoryName 

select Country, productName, count(productName), avg(price)
	from suppliers 
	inner join products
    on suppliers.supplierID = products.supplierID
    inner join categories
    on products.CategoryID = categories.CategoryID
    group by country;

-- Q.주문별주문자명(CustomerName),직원명(LastName),배송자명(ShipperName),주문상세갯수:
select * from orders; -- orderID customerID employeeID shipperID
select * from order_details; -- orderID quantity 
select * from customers; -- customerID customerName
select * from employees; -- employeeID  LastName
select * from shippers; -- shipperID shipperName

select orderID, CustomerName, LastName as employeeName, ShipperName, quantity
	from orders
    inner join order_details
    on orders.OrderID = order_details.OrderID
    inner join customers
    on orders.CustomerID = customers.CustomerID
    inner join employees
    on orders.EmployeeID = employees.EmployeeID
    inner join shippers
    on orders.ShipperID = shippers.ShipperID;
    
-- Q.판매량(Quantity)상위TOP3공급자(supplier)목록:
select * from suppliers; -- surpplierName, supplierID
select * from products; -- supplierID , productID
select * from order_details; -- productID, quantity

select SupplierName, Quantity
	from suppliers
    inner join products
    on suppliers.SupplierID = products.SupplierID
    inner join order_details
    on products.ProductID = order_details.ProductID
    order by Quantity desc
    limit 3;
    
-- Q.상품분류(Category)별,고객지역별(City)판매량(Quantity)많은순으로정렬: -->
select * from orders; -- orderID customerID employeeID shipperID
select * from order_details; -- productID orderID Quantity
select * from customers; -- customerID city
select * from products; -- productID categoryID
select * from categories; -- categoryID categoyName

select CategoryName, city, Quantity
	from orders
    inner join order_details
    on orders.OrderID = order_details.OrderID
    inner join customers
    on orders.CustomerID = customers.CustomerID
    inner join products
    on order_details.ProductID = products.ProductID
    inner join categories
    on products.CategoryID = categories.CategoryID
	group by Country, city, Quantity
    order by Quantity desc;
    
-- Q.고객국가(Country)가USA이고,상품별판매량(Quantity)의합이많은순으로정렬:
select * from customers; -- customerID city 
select * from products; -- productID productName price
select * from orders; -- orderID customerID 
select * from order_details; -- orderID productID quantity

select country, productName, sum(Quantity), sum(Price)
	from orders
    inner join order_details
    on orders.orderID = order_details.OrderID
    inner join products
    on order_details.ProductID = products.ProductID
    inner join customers
    on orders.CustomerID = customers.CustomerID
    where Country ='USA'
    group by ProductName
	order by sum(Quantity) desc;


