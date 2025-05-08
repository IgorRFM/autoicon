import React, { useState } from "react";

const TwoColumnToggle = () => {
  const [showBox1, setShowBox1] = useState(false);
  const [showBox2, setShowBox2] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10 grid grid-cols-2 gap-4">
      {/* Coluna 1 */}
      <div className="text-center">
        {!showBox1 ? (
          <button
            onClick={() => setShowBox1(true)}
            class="w-full py-2 rounded-md hover:bg-green-600 transition"
          >
            Qual é o meu UUID?
          </button>
        ) : (
          <div className="p-4 bg-grey-100 border border-green-300 rounded-md">
            <p>Para usar o teu UUID, basta pegar o seu nick no minecraft</p>
            <p class=" read-the-docs " >(Atenção: maiúsculos e minúsculos fazem diferença! Eu recomendo você ir no chat-ingame e copiar o bot com o seu nome, no discord! )</p>
            <br></br>
            <p>Depois, basta colar seu nick <a href="https://minecraft-serverlist.com/tools/offline-uuid">aqui</a> e clicar em "Get UUID".</p>
            <p class=" read-the-docs ">O seu uuid é o que vai estar em 'uuid:'SEU-UUID'</p>
          </div>
        )}
      </div>

      {/* Coluna 2 */}
      <div className="text-center">
        {!showBox2 ? (
          <button
            onClick={() => setShowBox2(true)}
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
          >
            Qual imagem usar?
          </button>
        ) : (
          <div className="p-4 bg-grey-100 border border-purple-300 rounded-md">
            <p>O bot vai aceitar qualquer imagem, mas saiba que ele vai recortar ela num quadrado centralizado. Tente manter o que importa bem no centro da imagem!</p>
            <p class=" read-the-docs ">Seria legal se a gente mantivessee o padrão de sempre usarmos as cabeças de cubitos! Sinta-se livre pra colocar outros tipos de imagens pra momentos específicos, mas seria legal se voltasse!</p>
            <br></br>
            <p>Recomendo, no entanto, que você use <a href="https://mchorse.github.io/mchead/">este site</a> para gerar a cabeça do seu cubito. (Talvez seja necessário que você recorte a imagem gerada, vou testar pra o quanto consigo automatizar ainda)</p>
            <p class=" read-the-docs "> Usei sempre o padrão 45 yaw + 45 pitch, na hora de gerar a cabeça</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoColumnToggle;
