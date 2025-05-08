import ImageUpload from "./components/ImageUpload";
import Colunas from "./components/Colunas";
import './App.css'

function App() {

  return (
    <>
      <h1> Ícones para o chat-ingame </h1>

      <div class="max-w-0.9/10 mx-auto p-6 shadow-lg rounded-xl mt-10">
            <ImageUpload class="w-full px-4"/>
          <p className="read-the-docs">
            Qualquer dúvida, leia abaixo ou abra um ticket no servidor do Discord!
          </p>
            <Colunas />
      </div>
      
    </>
  )
}

export default App
