
Documentation
-------------

Test suite for GitHub API:

- POSITIVE : Create new repository
- POSITIVE : Update repository
- POSITIVE : Delete repository
- NEGATIVE : Create new repository - unknown gitignoreTemplate
- NEGATIVE : Create new repository - empty name


Execution
-------------
```
 mvn clean test
```

Requirements
-------------
```
 java 11
 maven 3.8 
```

