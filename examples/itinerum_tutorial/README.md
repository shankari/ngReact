Install all dependencies

```
npm install
```

If you want to install the specific dependencies here, you can do so as well.

To pre-compile the JSX files, install babel and run it

```
$ npm install babel-cli@6 babel-preset-react-app@3
$ npx babel examples/itinerum_tutorial --out-dir examples/itinerum_tutorial --presets react-app/prod
```

More details at https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

Also run to convert scss to css

```
$ npm install node-sass
$ npx node-sass examples/itinerum_tutorial/tutorialStyles.scss > examples/itinerum_tutorial/tutorialStyles.css
```

Run the http-server to avoid CORS issues

```
$ npm install http-server
$ npx http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8081
  http://192.168.10.126:8081
  http://10.10.138.196:8081
Hit CTRL-C to stop the server
```

Then access this example by navigating to one of the URLs printed by the http-server and browsing the tree
