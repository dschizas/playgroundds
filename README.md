# playgroundds - Virtualtrips JavaScript code challenge

"Playgroundds" is a simple repository that uses Node.js, sqlite and React.js to create an search functionality for different UK locations. I created this repository for the virtual trips coding challenge.

The core structure of the product is as follows:
- The code-challenge folder has some javascript questions and answers (Pt I)
- The server folder addresses the Pt II. 
- The src includes the react component that requests information from the server (Pt III)
- There are two more folders, the "test" folder has some integration tests and the testE2E has some end to end tests.
- The application is using various technologies to achieve the end result. For more details I suggest you to look at the package.json.

## Features

- Query the database by sending requests to the server (/all and /location?q=input_value)
- Use a search bar to query specific words and show the related results as a dropdown
 
Query the server and return the names of point of interests in the UK (locations).
For this requirement I had to use SQLite as a data storage. Installing SQLite was straight forward but I have never used it in the past and due to the limited amount of time that I wanted to allocate to this subtask I skipped the part of sorting any data incosistencies and I loaded ten records on SQLite.
The original format was TSV and for more info please use the link http://creativecommons.org/licenses/by/3.0/
I converted the TSV to CSV and ran a query to create a local database called database.sqlite (/server/db/database.sqlite)

There are two types of queries:
1. The **/all** returns all records and I used it for testing my packages and integration. 
Sample response:
>{"locations":[{"id":1,"name":"Afon Wnion","country_code":"GB"},{"id":2,"name":"Aberystwyth railway station","country_code":"GB"},{"id":3,"name":"Baglan Railway Station","country_code":"GB"},{"id":4,"name":"Bridgend Railway Station","country_code":"GB"},{"id":5,"name":"Carmarthen Railway Station","country_code":"GB"},{"id":6,"name":"Welshpool Airport","country_code":"GB"},{"id":7,"name":"Kilgetty Railway Station","country_code":"GB"},{"id":8,"name":"Morfa Mawddach","country_code":"GB"},{"id":9,"name":"Penally Railway Station","country_code":"GB"},{"id":10,"name":"St Thomas","country_code":"GB"}]}

2. The **/locations?q=input_value** returns a list of results that start with the input_value
>{"locations":[{"id":1,"name":"Afon Wnion","country_code":"GB"},{"id":2,"name":"Aberystwyth railway station","country_code":"GB"}]}

- The application is using the **express** module to create the server, handle the routes and the requests.
- The **db.js** is responsible to connect with the SQLite. For this task I used knex.
- As part of this task, I created a basic **route** structure that can be used to streamline the file management of the express server's requests as well as the SQLite queries.
- The **location-cotroller** has the two request that I described above. The requests are implemented with knex.
- The **test** folder has the server integration tests (access different methods and validate if the status and responses are matching the expectations)

## UI Location Search
- For the Location search page, I used ReactJS to create the main component and the **react-bootstrap-typeahead** to achieve the async typeahead  functionality. The react-bootstrap-typeahead has different ways to cache the search queries but I had to compromise that feature to complete the project in time.
- For the styling element I decided to use the **bootstrap** library.
- The end to end testing scenarios can be found in the **testE2E** folder. For the E2E testing I used **Nightwatch.js**

## Installation
1. Install the dependencies and devDependencies
2. Start the server locally by running ```npm run start-server```
3. Start the client locally by running ```npm run start-front```
4. Visit http://localhost:3000 to test the location search
5. Another useful url - http://localhost:4001/locations?q=A

If you want to run the test you can do it by running the following commands:
1. For the integration tests ```npm test``` (make sure that the server is running)
2. For the E2E testing ```npx nightwatch testE2E/searchE2ETest.js```

## Screenshots

Landing Screen\
![Alt text](/other/screenshots/sc4.png "Landing")

Integration Testing\
![Alt text](/other/screenshots/sc5.png "Integration Testing")

E2E Nightwatch #1\
![Alt text](/other/screenshots/sc1.png "E2E Nightwatch #1")

E2E Nightwatch #2\
![Alt text](/other/screenshots/sc2.png "E2E Nightwatch #2")

E2E Testing\
![Alt text](/other/screenshots/sc3.png "E2E Testing")