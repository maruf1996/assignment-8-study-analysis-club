import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import QuestionAnswer from './component/QuestionAnswer/QuestionAnswer';
import Subjects from './component/Subjects/Subjects';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Subjects></Subjects>
      <QuestionAnswer></QuestionAnswer>
      <Footer></Footer>
    </div>
  );
}

export default App;
