To pre-compile the JSX files,
use the instructions at https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
to install babel

Then run 
```
$ npx babel examples/jsx-transformer-precompiled/ --out-dir examples/jsx-transformer-precompiled --presets react-app/prod
```

Also run to convert scss to css

```
$ npm install node-sass
$ npx node-sass examples/itinerum_tutorial/tutorialStyles.scss > examples/itinerum_tutorial/tutorialStyles.css
```

Then this example will load
