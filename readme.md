# The Third Front

## Introduction
The Third Front is a simple web app to present the audience with harmless humorous 
satire news posts.
Mainstream media is too concerned with fear mongering, not caring enough about the key issues
so we decided to  **present the truth under the veil of satire**.
Our Goal-
Presenting the community with dose of humurous jokes and making news less scary and less morbid for 
the average John Doe.


## Getting Started
### Prerequisites
- List of required software and tools with download/installation links.

### Installation
1. Clone the repository.
2. Cd into /Frontend and Install frontend dependencies using `npm install`
2. Cd into /Backend and Install backend dependencies using `npm install`

## Architecture
### Tech Stack
- Vite.js/React.js
- Node.js
- Express
- MongoDB

### Folder Structure
/Truly-Trustable-News
  /Backend
    /src
      /model
        /Categories
        /News
      /methods
        - /News_Operation
        - /Category Operation
      index.js
      .env

  /Frontend
    /images
      - (Store images used in documentation)
    - CONTRIBUTING.md
    - API_DOCUMENTATION.md
    - USAGE_GUIDE.md
  /scripts
    - (Scripts for automation or other purposes)
  /data
    - (Data files, if any)
  /.gitignore
  /README.md



## Configuration
### Environment Variables
Set up environment variables
- env for /Frontend
    1. VITE_base_url = your backend api url eg. 'http://localhost:port'
- env for /Backend 
    1. MONGODB_URI = mongodb cluster uri
    2. PASSWORD = login password to perform crud operations(setting up the password)


## Development
### Running the App Locally
1. To run the Frontend locally `npm run dev`
2. To run the backend locally `npm run dev`

### Code Style


### Testing
Unit testing done for Data fetching and the authorization using the inbuilt **vitest** 
feature of vite.js which is similar to jest testing library.


## API Documentation
### Endpoints
List API endpoints, their methods, and descriptions.

### Authentication
Simple environment variable sessionStorage based authentication, since there is only one user who can perform the admin operations hence it seemed most plausible option at the time being.

## Database
### Database Schema
There are mainly two schemas used in this application
1. NewsSchema 
2. CategorySchema 

### Data Seeding
Provide information on how to seed the database.

## Deployment
### Deployment Process
Right Now, this entire Full stack web app is deployed on vercel

- Deploying the **Backend**
1. There is already an vercel.json file configured in the root folder of Backend,
if not present then visit vercel official docs to create one.
2. Go to vercel.com and make an account 
go to dashboard and crete a new project from your github repo and choose Backend directory as the source.
3. set up the environment variable for the Backend that are monogDB uri and passsword and click on deploy, note down the deployed url.

- Deploying the **Frontend** 
1. This time choose the gitub repo, and choose Frontend as the source directory.
2. The env variable for the frontend part is the base url 
VITE_base_url = url that you copied after deploying the backend part



## Additional Resources
### Links to Documentation
Provide link to vite js, react js docs, vite test, vercel js node js

### Contact Information
How to contact the development team.

## Conclusion
### Acknowledgments
Used reactquill for rich text, vitest for unit testing

