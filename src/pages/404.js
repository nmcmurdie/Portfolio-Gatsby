import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import '@fontsource/open-sans'
import '@fontsource/roboto'
import { ErrorOutline } from '@material-ui/icons'
import './404.css'



function App() {  
  return (
    <div className="error-container">
        <Helmet htmlAttributes = {{ lang: 'en' }}>
            <title>Page Not Found</title>
        </Helmet>
        <div className="error-body">
            <ErrorOutline className="error-icon" />
            <h1>Page Not Found</h1>
            <br />
            <Link to='/'>Return Home</Link>
        </div> 
    </div>
  );
}

export default App;