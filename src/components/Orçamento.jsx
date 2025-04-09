import React, { useState } from "react";
import emailjs from "emailjs-com";
import NavBar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

function Orçamento() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telemovel: "",
    data_nascimento: "",
    preferencia_contacto: "",
    preferencia_artista: "",
    n_tatuagens: "",
    ideia_tatuagens: "",
    zona: "",
    tamanho_tatuagens: "",
    disponibilidade: "",
    questoes: "",
    images: [],
  });

  const [uploading, setUploading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const handleButtonClick = (service) => {
    setServiceType(service);
    setShowForm(true);
  };

  const handleBackButtonClick = () => {
    setServiceType("");
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files).slice(0, 4); // Limita a 4 imagens
    setUploading(true);

    const uploadPromises = files.map(async (file) => {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "tattoos");
      data.append("cloud_name", "dr9j4bjys");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dr9j4bjys/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();
      return result.secure_url;
    });

    try {
      const urls = await Promise.all(uploadPromises);

      // Atualiza o estado, adicionando as novas imagens às imagens existentes
      setForm((prev) => {
        // Garantir que o array de imagens não ultrapasse 4
        const updatedImages = [...prev.images, ...urls].slice(0, 4);
        return { ...prev, images: updatedImages };
      });
    } catch (err) {
      alert("Erro ao enviar imagens.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: form.name,
      email: form.email,
      telemovel: form.telemovel,
      data_nascimento: form.data_nascimento,
      preferencia_contacto: form.preferencia_contacto,
      preferencia_artista: form.preferencia_artista,
      n_tatuagens: form.n_tatuagens,
      ideia_tatuagens: form.ideia_tatuagens,
      zona: form.zona,
      tamanho_tatuagens: form.tamanho_tatuagens,
      disponibilidade: form.disponibilidade,
      questoes: form.questoes,
      images: form.images.join("\n"),
    };

    try {
      await emailjs.send(
        "service_fqrbqxa",
        "template_rg5r2cm",
        templateParams,
        "JYOMSlbMPg-scmNj4"
      );

      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar formulário.");
    }
  };

  return (
    <div>
      <NavBar
        bgColor="bg-[#101010]"
        shadow="inset 0 -20px 20px rgb(22, 22, 22)"
      />
      <section
        className="bg-[#101010] pt-[calc(150px+64px)] pb-[70px] px-[5%] sm:px-[10%] lg:px-[15%]"
        id="estudio"
      >
        <div className="relative flex items-center">
          <span className="absolute left-[-10px] border-t-2 border-[#727171] w-[35vw] -translate-x-full"></span>
          <h2
            className="text-xl uppercase text-[#727171] font-bold"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Orçamento {serviceType && `/ ${serviceType}`}
          </h2>
        </div>

        {showForm && (
          <button
            onClick={handleBackButtonClick}
            className="mt-5 bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Voltar a escolher o serviço
          </button>
        )}

        {!showForm && (
          <div className="flex flex-col items-center text-center mt-10">
            <h1
              className="text-[40px] text-white mb-8"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              Qual dos nossos serviços pretendes obter um orçamento?
            </h1>

            <div className="flex gap-5 mb-5">
              <button
                onClick={() => handleButtonClick("Tatuagem")}
                className="bg-black text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Orçamento Tatuagem
              </button>
              <button
                onClick={() => handleButtonClick("Piercing")}
                className="bg-black text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Orçamento Piercing
              </button>
            </div>
          </div>
        )}

        {showForm && serviceType === "Tatuagem" && (
          <div
            className="flex flex-col sm:flex-row gap-[50px]"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            <div className="max-w-xl mx-auto sm:p-0 text-white shadow-md space-y-4 mt-[70px]">
              <p>
                Obrigada pelo teu interesse no nosso estúdio. Este é o primeiro
                passo para a tua próxima nova tattoo! Antes de preencheres este
                formulário, por favor, lê com atenção o seguinte texto:
              </p>
              <ol className="list-disc pl-6 space-y-2 leading-[30px]">
                <li>
                  Entraremos em contacto contigo para te dar o teu orçamento e
                  falarmos sobre as tuas ideias em até 3 dias úteis após o
                  envio.
                </li>
                <li>
                  O preenchimento deste formulário é apenas para conseguirmos
                  realizar o teu orçamento sem compromisso. O mesmo não garante
                  marcação da sessão.
                </li>
                <li>
                  Para realizares a tua marcação, após receberes o teu
                  orçamento, terás de fazer um depósito de um sinal (o valor
                  será informado juntamente com o orçamento).
                </li>
                <li>
                  O valor do sinal será abatido ao valor total do orçamento no
                  dia da tua sessão (o mesmo só poderá ser reembolsado em caso
                  de desistência com aviso prévio de no mínimo 48h).
                </li>
                <li>O valor mínimo de uma tatuagem no estúdio são 45€.</li>
                <li>Apenas realizamos tatuagens a maiores de 18 anos.</li>
              </ol>
            </div>
            <form
              onSubmit={handleSubmit}
              className="max-w-xl mx-auto p-6 bg-black text-white shadow-md space-y-4 mt-[70px]"
            >
              <div className="flex gap-[40px] w-full">
                <div>
                  <label className="block text-sm font-bold mb-1">Nome*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="w-full p-2 text-black border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full p-2 text-black border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex gap-[40px] w-full">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Telemóvel*
                  </label>
                  <input
                    type="tel"
                    name="telemovel"
                    required
                    onChange={handleChange}
                    className="w-full p-2 text-black border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1">
                    Data de nascimento*
                  </label>
                  <input
                    type="date"
                    name="data_nascimento"
                    required
                    onChange={handleChange}
                    className="w-full p-2 text-black border border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Preferência de contacto*
                </label>
                <input
                  className="mr-[5px]"
                  type="radio"
                  id="contact_email"
                  name="preferencia_contacto"
                  value="Email"
                  checked={form.preferencia_contacto === "Email"}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      preferencia_contacto: e.target.value,
                    }))
                  }
                />
                <label htmlFor="contact_email" className="mr-[20px]">
                  Email
                </label>
                <input
                  className="mr-[5px]"
                  type="radio"
                  id="contact_wpp"
                  name="preferencia_contacto"
                  value="WhatsApp"
                  checked={form.preferencia_contacto === "WhatsApp"}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      preferencia_contacto: e.target.value,
                    }))
                  }
                />
                <label htmlFor="contact_wpp">WhatsApp</label>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Preferência de artista*
                </label>
                <select
                  name="preferencia_artista"
                  id="preferencia_artista"
                  className="p-2 text-black border border-gray-300"
                  value={form.preferencia_artista}
                  onChange={handleChange}
                >
                  <option value="Não tenho preferência">
                    Não tenho preferência
                  </option>
                  <option value="Maggie">Maggie</option>
                  <option value="João">João</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Quantas tatuagens queres fazer*
                </label>
                <input
                  type="text"
                  name="n_tatuagens"
                  required
                  onChange={handleChange}
                  className="p-2 text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Explica a(s) tua(s) ideias do que gostavas de tatuar*
                </label>
                <p
                  className="text-[12px] mb-3"
                  style={{ color: "rgb(103, 103, 103)" }}
                >
                  Neste campo deves descrever ao máximo a tua ideia, mencionar
                  elementos chaves para a tatuagem, estilo, detalhes e
                  significado caso haja. para que possamos construir uma arte
                  única dentro do que idealizas. No próximo campo conseguirás
                  colocar referências de imagens para reforçar a tua ideia.
                </p>
                <textarea
                  name="ideia_tatuagens"
                  rows="4"
                  required
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Quais são as tuas imagens de referência*
                </label>
                <p
                  className="text-[12px] mb-3"
                  style={{ color: "rgb(103, 103, 103)" }}
                >
                  Conseguirás colocar nestes campos no mínimo 1 imagem e no
                  máximo 4 imagens. Máximo 10MB.
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full"
                />
                {uploading && (
                  <p className="text-sm text-gray-500 mt-1">
                    A carregar imagens...
                  </p>
                )}
                {form.images.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
                    {form.images.map((url, i) => (
                      <li key={i}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          Imagem {i + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Em qual das zona(s) do corpo gostavas de tatuar?*
                </label>
                <input
                  type="text"
                  name="zona"
                  required
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Qual seria o tamanho em centímetros para a(s) tatuagem(s)?*{" "}
                </label>
                <p
                  className="text-[12px] mb-3"
                  style={{ color: "rgb(103, 103, 103)" }}
                >
                  Sê o mais específico(a) possível. Utiliza uma fita métrica ou
                  régua para fazer esta medição, saber o tamanho em centímetros
                  é essencial para conseguir realizar o teu orçamento.
                </p>
                <input
                  type="text"
                  name="tamanho_tatuagens"
                  required
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Qual a tua disponibilidade para tatuar?*
                </label>
                <p
                  className="text-[12px] mb-3"
                  style={{ color: "rgb(103, 103, 103)" }}
                >
                  Indica-nos os dias da semana e horários que tens
                  disponibilidade.
                </p>
                <input
                  type="text"
                  name="disponibilidade"
                  required
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-1">
                  Tens alguma questão ou algo que precisemos saber? Utiliza este
                  campo.
                </label>
                <textarea
                  name="questoes"
                  rows="4"
                  onChange={handleChange}
                  className="w-full p-2 text-black border border-gray-300"
                />
              </div>

              <button
                type="submit"
                disabled={uploading}
                className="w-[20%] bg-white text-black py-2"
              >
                {uploading ? "A carregar..." : "Enviar"}
              </button>
            </form>
          </div>
        )}
      </section>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default Orçamento;
