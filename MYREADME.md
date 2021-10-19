# Nx.dev Tutorial | Angular
## by Nrwl - Narwhal Technologies Inc.
https://www.youtube.com/watch?v=i37yJKK8qGI&list=PLakNactNC1dFIZcYD38oeL1_NMOFkxOgZ

###### Install Nx CLI Globally
```
npm i -g nx
```
###### Or Locally
```
npm i nx
```
###### Creating a new Nx Workspace
```
npx create-nx-workspace
```
######  Build the Todos-App
```
cd nx-dev-tutorials
nx run todos:build
```
###### Run the Todos-App
```
$nx-dev-tutorials> nx serve todos
```
###### Open the App in the Browser
>http://localhost:4200/
###### Execute E2E Tests
First stop running the app.
```
$nx-dev-tutorials> nx e2e todos-e2e --watch
```
###### Install Plugin for Nest
```
nx list
npm i --save-dev @nrwl/nest
```
###### Create a Nest-App 'api'
```
nx g @nrwl/nest:app api --frontendProject=todos
```
###### Run the api-App
```
nx serve api
```

