import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [textoInput, setTextoInput] = useState('');

  function adicionarTarefa(evento) {
    evento.preventDefault(); 
    
    if (textoInput === '') return;

    const novaTarefa = {
      id: Date.now(),
      text: textoInput
    };

    setTarefas([...tarefas, novaTarefa]);
    setTextoInput(''); 
  }

  function removerTarefa(id) {
    const listaNova = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(listaNova);
  }

  return (
    <div className="container">
      <h1>Minhas Tarefas</h1>
      
      <form onSubmit={adicionarTarefa} className="formulario">
        <input 
          type="text" 
          value={textoInput} 
          onChange={(e) => setTextoInput(e.target.value)} 
          placeholder="O que preciso fazer hoje?"
        />
        <button type="submit">Adicionar</button>
      </form>

      <ul className="lista">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="item">
            <span>{tarefa.text}</span>
            <button onClick={() => removerTarefa(tarefa.id)} className="btn-apagar">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;