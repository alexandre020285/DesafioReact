
import './App.css'
import Uppercase from './components/Upercase/Upercase.jsx'
import ButtonAlert from './components/Button/buttonAlert'
import './components/Container/Contanier.css'



function App() {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam omnis? Aliquam officiis autem vero, minima quisquam recusandae aut quas eveniet ea quam corrupti. Facere quaerat ducimus amet veniam corrupti?';

  return (
    <div className='container'>

      <p className='paragraf'>{text}</p>
      <Uppercase color='red'>{text}</Uppercase>
      <ButtonAlert label="Baixar CV" />

    </div>
  );
}
export default App;
