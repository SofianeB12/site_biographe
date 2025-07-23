"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <section className="pt-16 px-8 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-center">Contact</h1>
      <p>Prêt à franchir le cap, contactez-moi !</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input type="text" name="name" placeholder="Votre nom" required className="w-full p-2 border rounded"
          onChange={handleChange} />
        <input type="email" name="email" placeholder="Votre email" required className="w-full p-2 border rounded"
          onChange={handleChange} />
        <textarea name="message" placeholder="Votre message" required className="w-full p-2 border rounded"
          onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Envoyer</button>
      </form>
    </section>
  );
}
