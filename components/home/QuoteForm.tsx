"use client";

import { useState } from "react";

import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

export default function QuoteForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    whatsapp: "",
    origen: "",
    destino: "",
    peso: "",
    largo: "",
    ancho: "",
    alto: "",
    valor_declarado: "",
    forma_pago: "Contado",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ocurrió un error");
      }

      alert("¡Solicitud enviada correctamente!");

      setForm({
        nombre: "",
        whatsapp: "",
        origen: "",
        destino: "",
        peso: "",
        largo: "",
        ancho: "",
        alto: "",
        valor_declarado: "",
        forma_pago: "Contado",
      });
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="cotizar" className="py-24 bg-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Solicita tu cotización
          </h2>

          <p className="text-gray-600 mt-3">
            Completa la información y recibirás tu cotización por WhatsApp.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />

              <Input
                label="WhatsApp"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                required
              />

              <Input
                label="Ciudad origen"
                name="origen"
                value={form.origen}
                onChange={handleChange}
                required
              />

              <Input
                label="Ciudad destino"
                name="destino"
                value={form.destino}
                onChange={handleChange}
                required
              />

              <Input
                label="Peso (kg)"
                type="number"
                name="peso"
                value={form.peso}
                onChange={handleChange}
                required
              />

              <Input
                label="Valor declarado"
                type="number"
                name="valor_declarado"
                value={form.valor_declarado}
                onChange={handleChange}
                required
              />

              <Input
                label="Largo (cm)"
                type="number"
                name="largo"
                value={form.largo}
                onChange={handleChange}
                required
              />

              <Input
                label="Ancho (cm)"
                type="number"
                name="ancho"
                value={form.ancho}
                onChange={handleChange}
                required
              />

              <Input
                label="Alto (cm)"
                type="number"
                name="alto"
                value={form.alto}
                onChange={handleChange}
                required
              />

              <Select
                label="Forma de pago"
                name="forma_pago"
                value={form.forma_pago}
                onChange={handleChange}
              >
                <option value="Contado">Contado</option>
                <option value="Contraentrega">Contraentrega</option>
              </Select>
            </div>

            <div className="mt-10">
              <Button
                type="submit"
                variant="success"
                className="w-full"
                disabled={loading}
              >
                {loading
                  ? "Enviando..."
                  : "Buscar mejores tarifas"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}