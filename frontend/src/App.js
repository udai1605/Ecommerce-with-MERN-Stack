import './App.css';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    < >
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen/>
          <h1>welcome</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
