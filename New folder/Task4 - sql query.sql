SELECT Count() AS Population, Countries.name
FROM Users
LEFT JOIN Countries ON Users.citizenship_country_id = Countries.Id
GROUP BY Countries.Id
HAVING Population > 1000
ORDER BY Population DESC