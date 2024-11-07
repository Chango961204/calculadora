import React, { useState } from "react";

function App() {
  const [pagoInstructor, setPagoInstructor] = useState("");
  const [horasCurso, setHorasCurso] = useState("");
  const [vehiculo, setVehiculo] = useState("fiesta");
  const [consumoKmLitro, setConsumoKmLitro] = useState("");
  const [kmDestino, setKmDestino] = useState("");
  const [costoLitroGas, setCostoLitroGas] = useState("");
  const [casetas, setCasetas] = useState("");
  const [numPersonas, setNumPersonas] = useState("");
  const [costoMaxViaticos, setCostoMaxViaticos] = useState("");
  const [clausura, setClausura] = useState("no");
  const [multiplicadorCostosPorDia, setMultiplicadorCostosPorDia] = useState(1);
  const [numParticipantes, setNumParticipantes] = useState("");
  const [costoConstancia, setCostoConstancia] = useState("");
  const [insumos, setInsumos] = useState("");
  const [hospedaje, setHospedaje] = useState("");
  const [diasHospedaje, setDiasHospedaje] = useState("");
  const [material, setMaterial] = useState("");
  const [diasCapacitacion, setDiasCapacitacion] = useState("");
  const [otros, setOtros] = useState("");
  const [arrendamiento, setArrendamiento] = useState("");
  const [porcentajeRecuperacion, setPorcentajeRecuperacion] = useState(0);

  // Estados para los resultados
  const [mensaje, setMensaje] = useState("No se puede calcular los costos. Pago pendiente.");

  // Función deshabilitada para cálculo
  const calcularCostos = () => {
    setMensaje("La funcionalidad está deshabilitada ya que no se ha recibido el pago por los servicios.");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Calculadora de Costos - Deshabilitada</h1>
      <div>
        <h2>CONSIDERACIÓN DE COSTOS Y PAGO</h2>

        <label>Pago General Instructor:</label>
        <input type="number" value={pagoInstructor} onChange={(e) => setPagoInstructor(e.target.value)} disabled />
        
        <label>Horas Curso:</label>
        <input type="number" value={horasCurso} onChange={(e) => setHorasCurso(e.target.value)} disabled />

        <label>Vehículo (Fiesta o Ranger):</label>
        <select value={vehiculo} onChange={(e) => setVehiculo(e.target.value)} disabled>
          <option value="fiesta">Fiesta</option>
          <option value="ranger">Ranger</option>
        </select>

        <label>Consumo KM por Litro:</label>
        <input type="number" value={consumoKmLitro} onChange={(e) => setConsumoKmLitro(e.target.value)} disabled />

        <label>Kilómetros a Destino (ida y vuelta):</label>
        <input type="number" value={kmDestino} onChange={(e) => setKmDestino(e.target.value)} disabled />

        <label>Costo por Litro de Gasolina:</label>
        <input type="number" value={costoLitroGas} onChange={(e) => setCostoLitroGas(e.target.value)} disabled />

        <label>Casetas (ida y vuelta):</label>
        <input type="number" value={casetas} onChange={(e) => setCasetas(e.target.value)} disabled />

        <label>Número de Personas a Ir:</label>
        <input type="number" value={numPersonas} onChange={(e) => setNumPersonas(e.target.value)} disabled />

        <label>Costo Máximo Viáticos por Persona:</label>
        <input type="number" value={costoMaxViaticos} onChange={(e) => setCostoMaxViaticos(e.target.value)} disabled />

        <label>Clausura o Ida Diferente Día:</label>
        <select value={clausura} onChange={(e) => setClausura(e.target.value)} disabled>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>

        <label>Multiplicador Costos por Día:</label>
        <input type="number" value={multiplicadorCostosPorDia} onChange={(e) => setMultiplicadorCostosPorDia(Number(e.target.value))} disabled />

        <label>Número de Participantes:</label>
        <input type="number" value={numParticipantes} onChange={(e) => setNumParticipantes(e.target.value)} disabled />

        <label>Costo Constancia:</label>
        <input type="number" value={costoConstancia} onChange={(e) => setCostoConstancia(e.target.value)} disabled />

        <label>Insumos:</label>
        <input type="number" value={insumos} onChange={(e) => setInsumos(e.target.value)} disabled />

        <label>Hospedaje:</label>
        <input type="number" value={hospedaje} onChange={(e) => setHospedaje(e.target.value)} disabled />

        <label>Días de Hospedaje:</label>
        <input type="number" value={diasHospedaje} onChange={(e) => setDiasHospedaje(e.target.value)} disabled />

        <label>Material:</label>
        <input type="number" value={material} onChange={(e) => setMaterial(e.target.value)} disabled />

        <label>Días de Capacitación:</label>
        <input type="number" value={diasCapacitacion} onChange={(e) => setDiasCapacitacion(e.target.value)} disabled />

        <label>Otros:</label>
        <input type="number" value={otros} onChange={(e) => setOtros(e.target.value)} disabled />

        <label>Arrendamiento:</label>
        <input type="number" value={arrendamiento} onChange={(e) => setArrendamiento(e.target.value)} disabled />

        <label>Porcentaje de Recuperación del Instituto:</label>
        <select value={porcentajeRecuperacion} onChange={(e) => setPorcentajeRecuperacion(Number(e.target.value))} disabled>
          <option value="0">0%</option>
          <option value="10">35%</option>
          <option value="15">50%</option>
        </select>
        
        <button onClick={calcularCostos}>Calcular Costos</button>
      </div>

      <h3>Advertencia</h3>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;