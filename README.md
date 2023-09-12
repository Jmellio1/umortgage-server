
## Setup info

This is the sever side that connect to mongodb with API calls.  The default port is 3306.
In order to run there needs to be an environment file (.env) that contains the connection string that’s not included. 
the format is normally  
ATLAS_URI=mongodb+srv://{change_user}:{ChangePassword}@cluster0.8vxj2.mongodb.net/?retryWrites=true&w=majority
Or whatever mongodb gives you but the ATLAS_URI= is required.
Within conn.mjs we are looking for a db named umortgage and the collection is also named umortgage this needs to be setup or changed in conn.mjs and routes 


## Available Scripts

In the project directory, you can run:

### `npm install`

There are some packages I used / refinanced to neaten up the UI some didn’t fully get used do to timing. These need to be installed

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3306](http://localhost:3306) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




