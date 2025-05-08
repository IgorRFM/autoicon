import React, { useState } from "react";

const ImageUpload = () => {
  const [uuid, setUuid] = useState("");
  const [image, setImage] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false); // 👈 novo estado


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const formData = new FormData();
    formData.append("uuid", uuid);
    formData.append("image", image);
//https://autoicon-api.onrender.com/api/icon/upload

    try {
      const res = await fetch("https://autoicon-api.onrender.com/api/icon/upload", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      setResponse(result);
    } catch (err) {
      console.error("Erro ao enviar:", err);
    }finally {
      setLoading(false);
    }
  };

  return (
    <div class="max-w-9/10 mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <form onSubmit={handleSubmit} class="w-full max-w-sm">
        
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    UUID
                </label>
            </div>
            <div class="md:w-2/3">
                <input
                type="text"
                placeholder="f81d4fae-7dec-11d0-a765-00a0c91e6bf6"
                value={uuid}
                onChange={(e) => setUuid(e.target.value)}
                required
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
            </div>
        </div>

        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                    Imagem
                </label>
            </div>
            <div class="md:w-2/3">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                    class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow size-fit"
                    />
            </div>
        </div>
                
        <button
                    type="submit"
                    class="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    disabled={loading}
                    >
                    {loading ? "Enviando..." : "Enviar"}
                    </button>
      </form>

      {response && (
        <div className="mt-4 p-3 bg-gray-700 rounded">
          <h3 className="font-semibold">Resposta da API:</h3>
          <pre className="text-sm overflow-x-auto">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
