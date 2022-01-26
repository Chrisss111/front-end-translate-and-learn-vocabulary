import './App.css';
import TextInput from './components/TextInput';
import Title from './components/Title';
import VocabListsListing from './components/VocabListsListing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Translate and Build Vocabulary
        <p>
          <Title></Title>
        </p>
        <TextInput></TextInput>
      </header>
      <VocabListsListing></VocabListsListing>
    </div>
  );
}

export default App;
