import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
function App() {
  return (
    <Router >
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/products/:id' target='_blank' component={ProductScreen}/>
          <Route path='/cart/:id?' target='_blank' component={CartScreen}/>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
