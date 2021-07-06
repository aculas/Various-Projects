<<<<<<< HEAD

--1. Join the two tables so that every column and record appears, regardless of if there is not an owner_id.
--NOTE: I was getting an error from this query Error: Missing FROM-clause entry for table owner when I used FULL OUTER JOIN 

SELECT * FROM owners o 
FULL OUTER JOIN vehicles v 
ON o.id = v.owner_id;


--2. Count the number of cars for each owner. Display the owners first_name, last_name and count of vehicles. 
-- The first_name should be ordered in ascending order.

SELECT first_name, last_name,
COUNT(owner_id) FROM owners o
JOIN vehicles v on o.owner_id = v.owner_id
GROUP BY (first_name, last_name)
ORDER BY first_name;


--3. Count the number of cars for each owner and display the average price for each of the cars as integers. 
-- Display the owners first_name, last_name, average price and count of vehicles. The first_name should be ordered in descending order.
-- Only display results with more than one vehicle and an average price greater than 10000.

SELECT first_name, last_name, 
ROUND(AVG(price)) as average_price, 
COUNT(owner_id) 
FROM owners o 
JOIN vehicles v on o.id = v.owner_id 
GROUP BY (first_name, last_name) 
HAVING COUNT(owner_id) > 1 AND ROUND(AVG(price)) > 10000 
ORDER BY first_name DESC;
=======

--1. Join the two tables so that every column and record appears, regardless of if there is not an owner_id.






--2. Count the number of cars for each owner. Display the owners first_name, last_name and count of vehicles. The first_name should be ordered in ascending order.
>>>>>>> 11779653d8707b8efe20d96c90b39bbf0c3d1b2d
