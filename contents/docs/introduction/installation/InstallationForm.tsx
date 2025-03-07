"use client"
import { useState } from "react"

interface FormDataType {
  fecha: string
  operador: string
  horaInicio: string
  horaEntrega: string
  maquina: string
  turno: string
  tipoFalla: string
  descripcionFalla: string
  accionCorrectiva: string[]
  razonFalla: string[]
  refacciones: string
  firmaTecnico: string
  firmaEncargado: string
}

export default function InstallationForm() {
  // Estado del formulario tipado
  const [formData, setFormData] = useState<FormDataType>({
    fecha: "",
    operador: "",
    horaInicio: "",
    horaEntrega: "",
    maquina: "",
    turno: "",
    tipoFalla: "",
    descripcionFalla: "",
    accionCorrectiva: [],
    razonFalla: [],
    refacciones: "",
    firmaTecnico: "",
    firmaEncargado: "",
  })

  // Función para manejar cambios en inputs de texto y textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Función para manejar checkboxes; restringimos category a los dos posibles valores
  const handleCheckboxChange = (
    category: "accionCorrectiva" | "razonFalla",
    value: string
  ) => {
    setFormData((prevData) => {
      const updatedList = prevData[category].includes(value)
        ? prevData[category].filter((item) => item !== value)
        : [...prevData[category], value]
      return { ...prevData, [category]: updatedList }
    })
  }

  // Función para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("Formulario enviado correctamente.")
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Hoja de Paro - Automatización</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Datos generales */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Fecha</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Nombre del Operador</label>
            <input
              type="text"
              name="operador"
              value={formData.operador}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold">Hora de Inicio</label>
            <input
              type="time"
              name="horaInicio"
              value={formData.horaInicio}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Hora de Entrega</label>
            <input
              type="time"
              name="horaEntrega"
              value={formData.horaEntrega}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Turno</label>
            <input
              type="text"
              name="turno"
              value={formData.turno}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Ej: 1, 2, 3"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Máquina</label>
          <input
            type="text"
            name="maquina"
            value={formData.maquina}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Tipo de Falla */}
        <div>
          <label className="block font-semibold">Tipo de Falla</label>
          <select
            name="tipoFalla"
            value={formData.tipoFalla}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Selecciona...</option>
            <option value="Mecánica">Mecánica</option>
            <option value="Hidráulica">Hidráulica</option>
            <option value="Eléctrica">Eléctrica</option>
            <option value="Neumática">Neumática</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        {/* Descripción de la Falla */}
        <div>
          <label className="block font-semibold">Descripción de la Falla</label>
          <textarea
            name="descripcionFalla"
            value={formData.descripcionFalla}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={3}
          />
        </div>

        {/* Acción Correctiva */}
        <div>
          <label className="block font-semibold">Acción Correctiva</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Cambio de piezas",
              "Reprogramación",
              "Limpieza",
              "Cambio refacción",
              "Otro",
            ].map((accion) => (
              <label key={accion} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={() =>
                    handleCheckboxChange("accionCorrectiva", accion)
                  }
                />
                {accion}
              </label>
            ))}
          </div>
        </div>

        {/* Razón de la Falla */}
        <div>
          <label className="block font-semibold">Razón de la Falla</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Lubricador",
              "Robot",
              "Máquina",
              "Horno BSN",
              "Programa Lubri",
              "Programa Robot",
              "Liner Conveyor",
              "Mal operación",
            ].map((razon) => (
              <label key={razon} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange("razonFalla", razon)}
                />
                {razon}
              </label>
            ))}
          </div>
        </div>

        {/* Refacciones usadas */}
        <div>
          <label className="block font-semibold">Refacciones Usadas</label>
          <textarea
            name="refacciones"
            value={formData.refacciones}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={2}
          />
        </div>

        {/* Firmas */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">
              Firma Técnico (Automatización)
            </label>
            <input
              type="text"
              name="firmaTecnico"
              value={formData.firmaTecnico}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">
              Firma Encargado de Turno (Producción)
            </label>
            <input
              type="text"
              name="firmaEncargado"
              value={formData.firmaEncargado}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Enviar Hoja de Paro
        </button>
      </form>
    </div>
  )
}
