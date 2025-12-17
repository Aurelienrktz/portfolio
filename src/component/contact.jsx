import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-between items-center rounded-2xl p-6 md:px-6 md:py-12 bg-slate-900 mx-auto w-11/12 md:w-9/12">
      <div className="md:w-1/2 mb-10 fadeIn3">
        <div className="flex justify-center items-center gap-4 w-11/12 mx-auto mb-6">
          <span className="flex-1 h-px  bg-sky-500"></span>
          <span className="text-sm md:text-xl uppercase tracking-widest text-slate-300">
            Contact
          </span>
          <span className="flex-1 h-px bg-sky-500"></span>
        </div>
        <p className="text-gray-300/80">
          Vous avez des projets en tête ou juste besoin de dire Salut? Je suis
          toujours ouvertes à des discussions de nouveau projet,de faire des
          échanges ou de faire partie de votre entourage.
        </p>
        <div className="pt-10 flex flex-col gap-6">
          <div className="flex gap-2 items-center">
            <img src="/image/mail.png" alt="icon email" className="w-10" />
            <a
              className="font-bold hover:-translate-y-1.5 transition-all duration-300"
              href="mailto:aurelienrakotozanaka07@gmail.com"
            >
              <span className="font-light text-gray-400">E-mail</span> <br />
              aurelienrakotozanaka07@gmail.com
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/image/telephone.png"
              alt="icon telephone"
              className="w-10"
            />
            <a
              className="font-bold hover:-translate-y-1.5 transition-all duration-300"
              href="tel:+261341234567"
            >
              <span className="font-light text-gray-400">Téléphone</span> <br />
              0386342231
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/image/github.png" alt="icon github" className="w-10" />
            <a
              className="font-bold hover:-translate-y-1.5 transition-all duration-300"
              target="blank"
              href="https://github.com/Aurelienrktz"
            >
              <span className="font-light text-gray-400">Github</span> <br />
              https://github.com/Aurelienrktz
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/image/circle.png"
              alt="icon localisation"
              className="w-10"
            />
            <p className="font-bold hover:-translate-y-1.5 transition-all duration-300">
              <span className="font-light text-gray-400">Localisation</span>{" "}
              <br />
              Cité Ankatso2 Bloc-39
            </p>
          </div>
        </div>
      </div>
      <form
        action="mailto:aurelienrakotozanaka07@gmail.com"
        method="POST"
        encType="text/plain"
        className="fadeIn2 w-full md:w-1/2 flex flex-col mx-auto gap-4 p-4 rounded-2xl bg-neutral-700/40 border border-slate-700/40"
      >
        <h1 className="py-4 text-xl font-bold">Envoyer un message</h1>
        <label htmlFor="nom">
          Nom <br />
          <input
            required
            type="text"
            name="nom"
            id="nom"
            placeholder="Votre nom"
            className=" bg-neutral-900 p-2 rounded-md mt-2 w-full"
          />
        </label>
        <label htmlFor="email">
          Email <br />
          <input
            required
            type="text"
            name="email"
            id="email"
            placeholder="Votre email"
            className=" bg-neutral-900 p-2 rounded-md mt-2 w-full"
          />
        </label>
        <label htmlFor="message">
          Message <br />
          <textarea
            required
            type="text"
            name="message"
            id="message"
            placeholder="Votre message"
            className=" bg-neutral-900 p-2 rounded-md mt-2 w-full h-30"
          />
        </label>
        <button className="w-full p-2 rounded-md bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all duration-300">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
