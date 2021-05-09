// Import deps
import React from 'react'
import { render } from 'react-dom'

// Import styles
import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import LocationSearch from './components/search'

// Find div container
const rootElement = document.getElementById('root')

// Render Bookshelf component in the DOM
render(<LocationSearch />, rootElement)
