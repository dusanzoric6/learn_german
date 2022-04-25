
Documentation
-------------

This project contains an automated tests for the website http://automationpractice.com. It is runnable in Chrome browser, and
contains following:

LoginTest:
1. LoginPositiveTest - Perform successful login with registered user
2. LoginNoEmailTest - Perform unsuccessful login with missing email input
3. LoginNoPasswordTest - Perform unsuccessful login with missing password input
4. LoginInvalidPasswordTest - Perform unsuccessful login with invalid password input
5. AuthenticationFailedTest - Perform unsuccessful login with wrong password input

ChartTest:
1. ItemsCountTest - Perform a search by three different criteria, add three items to the cart, check item count
2. ItemsRemovalTest - Perform a search by two different criteria, add two items to the cart, remove one item, check item count

CheckoutTest:
1. CheckoutFlowTest - Perform successful login with registered user. Perform a search, add item to the cart,
   proceed to summary page, proceed to address page, proceed to shipping page, agree on terms and conditions,
   proceed to payment page, pay by check, confirm the order, check for success message at te end of the flow. 



Execution
-------------
all tests:
```
mvn clean test
```
specific test:
```
mvn -Dtest=TestSuiteName#TestName test (e.g mvn -Dtest=LoginTest#LoginPositiveTest test)
```

Requirements
-------------
```
 java 11
 maven 3.8
 chrome Version 100.0.4896.127 (resources/chromedriver.exe should be updated for corresponding Chrome version)
```