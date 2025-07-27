const ramos = [
  // 🌟 SEMESTRE 1
  { nombre: "Química General I", semestre: 1 },
  { nombre: "Biología Celular", semestre: 1 },
  { nombre: "Matemática", semestre: 1 },
  { nombre: "Introducción a las Ciencias Farmacéuticas", semestre: 1 },
  { nombre: "Integrado de Habilidades del Químico Farmacéutico", semestre: 1 },
  { nombre: "Antropología", semestre: 1 },

  // 🌟 SEMESTRE 2
  { nombre: "Química General II", semestre: 2, prereq: ["Química General I"] },
  { nombre: "Cálculo Diferencial", semestre: 2, prereq: ["Matemática"] },
  { nombre: "Física", semestre: 2, prereq: ["Matemática"] },
  { nombre: "Bioestadística", semestre: 2, prereq: ["Matemática"] },
  { nombre: "Fundamentos del Quehacer Farmacéutico", semestre: 2, prereq: ["Introducción a las Ciencias Farmacéuticas"] },
  { nombre: "Ética", semestre: 2, prereq: ["Antropología"] },

  // 🌟 SEMESTRE 3
  { nombre: "Química Analítica Cualitativa", semestre: 3, prereq: ["Química General II"] },
  { nombre: "Química Orgánica", semestre: 3, prereq: ["Química General I"] },
  { nombre: "Fisicoquímica", semestre: 3, prereq: ["Química General II"] },
  { nombre: "Fisiología Integrada", semestre: 3, prereq: ["Biología Celular"] },
  { nombre: "Salud Poblacional", semestre: 3 },
  { nombre: "Gestión Personal y Habilidades para la Vida", semestre: 3 },

  // 🌟 SEMESTRE 4
  { nombre: "Análisis Químico Instrumental", semestre: 4, prereq: ["Química Analítica Cualitativa"] },
  { nombre: "Química Orgánica Avanzada", semestre: 4, prereq: ["Química Orgánica"] },
  { nombre: "Bioquímica General", semestre: 4, prereq: ["Química Orgánica"] },
  { nombre: "Fisiopatología", semestre: 4, prereq: ["Fisiología Integrada"] },
  { nombre: "Epidemiología", semestre: 4, prereq: ["Salud Poblacional"] },
  { nombre: "Hito Evaluativo Integrativo", semestre: 4, prereq: [
  "Química General II",
  "Cálculo Diferencial",
  "Física",
  "Bioestadística",
  "Fundamentos del Quehacer Farmacéutico",
  "Ética",
  "Química Analítica Cualitativa",
  "Química Orgánica",
  "Fisicoquímica",
  "Fisiología Integrada",
  "Salud Poblacional",
  "Gestión Personal y Habilidades para la Vida"
] },

  // 🌟 SEMESTRE 5
  { nombre: "Farmacología I", semestre: 5, prereq: ["Fisiopatología"] },
  { nombre: "Salud Digital", semestre: 5 },
  { nombre: "Microbiología General", semestre: 5, prereq: ["Bioquímica General"] },
  { nombre: "Tecnología Farmacéutica I", semestre: 5, prereq: ["Fisicoquímica"] },
  { nombre: "Química Farmacéutica I", semestre: 5, prereq: ["Química Orgánica Avanzada"] },
  { nombre: "Persona y Sociedad", semestre: 5, prereq: ["Ética"] },

  // 🌟 SEMESTRE 6
  { nombre: "Farmacología II", semestre: 6, prereq: ["Farmacología I"] },
  { nombre: "Bioética", semestre: 6 },
  { nombre: "Tecnología Farmacéutica II", semestre: 6, prereq: ["Tecnología Farmacéutica I"] },
  { nombre: "Química Farmacéutica II", semestre: 6, prereq: ["Química Farmacéutica I"] },
  { nombre: "Práctica I: Rol del Químico Farmacéutico", semestre: 6, prereq: ["Farmacología II"] },
  { nombre: "Electivo I: Formación Integral", semestre: 6 },

  // 🌟 SEMESTRE 7
  { nombre: "Farmacia Clínica y Atención Farmacéutica I", semestre: 7, prereq: ["Farmacología II"] },
  { nombre: "Metodología de la Investigación", semestre: 7 },
  { nombre: "Legislación Farmacéutica", semestre: 7, prereq: ["Tecnología Farmacéutica II"] },
  { nombre: "Farmacognosia y Fitoterapia", semestre: 7, prereq: ["Química Farmacéutica II"] },
  { nombre: "Electivo II: Formación e Identidad", semestre: 7 },
  { nombre: "Control y Aseguramiento de la Calidad Farmacéutica", semestre: 7 },

  // 🌟 SEMESTRE 8
  { nombre: "Toxicología", semestre: 8, prereq: ["Farmacología II"] },
  { nombre: "Farmacia Clínica y Atención Farmacéutica II", semestre: 8, prereq: ["Farmacia Clínica y Atención Farmacéutica I"] },
  { nombre: "Biofarmacia", semestre: 8, prereq: ["Control y Aseguramiento de la Calidad Farmacéutica"] },
  { nombre: "Práctica II: Farmacia Comunitaria", semestre: 8, prereq: ["Farmacia Clínica y Atención Farmacéutica I"] },
  { nombre: "Hito Evaluativo Integrativo Interprofesional", semestre: 8, prereq: [
    "Tópicos Avanzados de Química Orgánica",
    "Técnicas Instrumentales de Análisis Químico",
    "Farmacología General",
    "Biotecnología Farmacéutica",
    "Microbiología",
    "Salud Pública",
    "Formulación y Tecnología Farmacéutica I",
    "Farmacología del Sistema Nervioso Central",
    "Toxicología General",
    "Microbiología Clínica y Parasitología",
    "Legislación Farmacéutica",
    "Formulación y Tecnología Farmacéutica II"
] },
  { nombre: "Farmacia Asistencial", semestre: 8 },

  // 🌟 SEMESTRE 9
  { nombre: "Gestión y Marketing Farmacéutico", semestre: 9 },
  { nombre: "Farmacovigilancia y Tecnovigilancia", semestre: 9 },
  { nombre: "Electivo III: Formación Integral", semestre: 9 },
  { nombre: "Electivo I", semestre: 9, prereq: ["Nivel 7 aprobado"] },
  { nombre: "Electivo II", semestre: 9, prereq: ["Nivel 7 aprobado"] },
  { nombre: "Electivo III", semestre: 9, prereq: ["Nivel 7 aprobado"] },

  // 🌟 SEMESTRE 10
  { nombre: "Internado Profesional", semestre: 10, prereq: ["Nivel 8 y 9 aprobados"] }
];

const mallaDiv = document.getElementById("malla");
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function guardarProgreso() {
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

function estaDesbloqueado(ramo) {
  if (!ramo.prereq) return true;
  return ramo.prereq.every(r => aprobados.includes(r));
}

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = ramo.nombre;

  function actualizarEstado() {
    if (aprobados.includes(ramo.nombre)) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    } else if (!estaDesbloqueado(ramo)) {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
    } else {
      div.classList.remove("bloqueado");
      div.classList.remove("aprobado");
    }
  }

  actualizarEstado();

  div.addEventListener("click", () => {
    if (!estaDesbloqueado(ramo)) return;
    if (!aprobados.includes(ramo.nombre)) {
      aprobados.push(ramo.nombre);
    } else {
      aprobados = aprobados.filter(n => n !== ramo.nombre);
    }
    guardarProgreso();
    actualizarTodo();
  });

  return div;
}

function actualizarTodo() {
  mallaDiv.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "columna";
    columna.style.gridColumn = i;

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${i}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const ramoDiv = crearRamo(ramo);
      columna.appendChild(ramoDiv);
    });

    mallaDiv.appendChild(columna);
  }
}

actualizarTodo();
