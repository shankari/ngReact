To pre-compile the JSX files,
use the instructions at https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project
to install babel

Then run 
$ npx babel examples/jsx-transformer-precompiled/ --out-dir examples/jsx-transformer-precompiled --presets react-app/prod

Then this example will load
