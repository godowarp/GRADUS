const APP_VERSION = '0.1';
const STORAGE_KEY = 'gradus.v0.1.state';

const DEFAULT_STATE = {
  meta: {
    appName: 'GRADUS',
    course: '2026-2027',
    ownerLabel: 'Pedagogía UNED',
    lastUpdated: new Date().toISOString()
  },
  subjects: [
    {
      id: 'metodos',
      name: 'Métodos y Diseños de Investigación en Educación',
      code: '63022095',
      semester: 'Segundo semestre',
      credits: 6,
      type: 'Obligatoria pendiente',
      status: 'pendiente',
      risk: 'alto',
      progress: 8,
      examType: 'Mixto: 20 test + 1 desarrollo',
      evaluation: 'Examen 80% · PEC-2 20% · PEC-1 autoevaluable sin peso',
      notes: 'Datos iniciales tomados de la guía pública 2026-2027. Pendiente completar con manual y orientaciones del curso virtual cuando estén disponibles.',
      strategy: 'Prioridad alta por ser asignatura suspendida previamente. Conviene trabajar con simulacros de test, cálculos y desarrollo de una página.'
    },
    {
      id: 'bases',
      name: 'Bases del Aprendizaje y Educación',
      code: 'Pendiente de revisar',
      semester: 'Segundo semestre',
      credits: 6,
      type: 'Formación básica pendiente',
      status: 'pendiente',
      risk: 'alto',
      progress: 5,
      examType: 'Pendiente de confirmar con guía 2026-2027',
      evaluation: 'Pendiente de completar',
      notes: 'Asignatura pendiente de 1.º. Se completará cuando se revise la guía actualizada.',
      strategy: 'Prioridad alta por antecedente de suspensión. Necesitará calendario de repasos desde el inicio.'
    },
    {
      id: 'direccion',
      name: 'Dirección y Supervisión de Centros',
      code: 'Pendiente',
      semester: 'Primer semestre',
      credits: 6,
      type: '4.º curso',
      status: 'por_configurar',
      risk: 'medio',
      progress: 0,
      examType: 'Pendiente de analizar',
      evaluation: 'Pendiente de completar',
      notes: 'Ficha creada como estructura inicial. Falta análisis de guía y exámenes.',
      strategy: 'Pendiente de decidir carga y estrategia.'
    },
    {
      id: 'evaluacion-programas',
      name: 'Evaluación de Programas',
      code: 'Pendiente',
      semester: 'Pendiente',
      credits: 6,
      type: '4.º curso',
      status: 'por_configurar',
      risk: 'medio',
      progress: 0,
      examType: 'Pendiente de analizar',
      evaluation: 'Pendiente de completar',
      notes: 'Ficha creada como estructura inicial. Falta análisis de guía y exámenes.',
      strategy: 'Pendiente de decidir carga y estrategia.'
    },
    {
      id: 'evaluacion-centros',
      name: 'Evaluación de Centros y Profesores',
      code: 'Pendiente',
      semester: 'Pendiente',
      credits: 6,
      type: '4.º curso',
      status: 'por_configurar',
      risk: 'medio',
      progress: 0,
      examType: 'Pendiente de analizar',
      evaluation: 'Pendiente de completar',
      notes: 'Ficha creada como estructura inicial. Falta análisis de guía y exámenes.',
      strategy: 'Pendiente de decidir carga y estrategia.'
    },
    {
      id: 'orientacion-profesional',
      name: 'Orientación Profesional y Personal',
      code: 'Pendiente',
      semester: 'Pendiente',
      credits: 6,
      type: '4.º curso',
      status: 'por_configurar',
      risk: 'medio',
      progress: 0,
      examType: 'Pendiente de analizar',
      evaluation: 'Pendiente de completar',
      notes: 'Ficha creada como estructura inicial. Falta análisis de guía y exámenes.',
      strategy: 'Pendiente de decidir carga y estrategia.'
    },
    {
      id: 'tfg',
      name: 'Trabajo Fin de Grado',
      code: 'TFG',
      semester: 'Anual',
      credits: 6,
      type: 'TFG',
      status: 'por_configurar',
      risk: 'alto',
      progress: 0,
      examType: 'Defensa y trabajo escrito',
      evaluation: 'Pendiente de completar con normativa y cronograma vigente',
      notes: 'Módulo específico pendiente para tema, tutoría, borradores, bibliografía y defensa.',
      strategy: 'Crear cronograma propio en cuanto exista asignación de línea y tutoría.'
    },
    {
      id: 'optativa-1',
      name: 'Optativa 1',
      code: 'Pendiente',
      semester: 'Primer semestre',
      credits: 6,
      type: 'Optativa',
      status: 'por_decidir',
      risk: 'bajo',
      progress: 0,
      examType: 'Pendiente',
      evaluation: 'Pendiente',
      notes: 'Sustituir por la optativa elegida tras revisar guías y exámenes.',
      strategy: 'Priorizar asignaturas con preguntas repetidas y estructura de examen previsible.'
    },
    {
      id: 'optativa-2',
      name: 'Optativa 2',
      code: 'Pendiente',
      semester: 'Primer semestre',
      credits: 6,
      type: 'Optativa',
      status: 'por_decidir',
      risk: 'bajo',
      progress: 0,
      examType: 'Pendiente',
      evaluation: 'Pendiente',
      notes: 'Sustituir por la optativa elegida tras revisar guías y exámenes.',
      strategy: 'Priorizar asignaturas con preguntas repetidas y estructura de examen previsible.'
    }
  ],
  events: [
    {
      id: cryptoRandomId(),
      title: 'PEC-1 autoevaluable de Métodos',
      subjectId: 'metodos',
      type: 'Entrega',
      date: '2027-04-06',
      notes: 'Fecha aproximada inicial según guía. No pondera en la nota final.'
    },
    {
      id: cryptoRandomId(),
      title: 'PEC-2 de Métodos',
      subjectId: 'metodos',
      type: 'Entrega',
      date: '2027-05-10',
      notes: 'Inicio aproximado del periodo de entrega. Pondera el 20% si se cumplen condiciones.'
    },
    {
      id: cryptoRandomId(),
      title: 'Revisión de guías tras matrícula',
      subjectId: 'tfg',
      type: 'Aviso',
      date: '2026-10-01',
      notes: 'Actualizar fichas, evaluación, cronograma y materiales cuando el curso virtual esté operativo.'
    }
  ],
  materials: [
    {
      id: cryptoRandomId(),
      subjectId: 'metodos',
      title: 'Guía pública de Métodos 2026-2027',
      kind: 'Guía',
      source: 'UNED',
      status: 'revisado',
      notes: 'Documento base para la ficha inicial. Añadir manual cuando esté disponible.'
    }
  ],
  exams: [
    {
      id: cryptoRandomId(),
      subjectId: 'metodos',
      year: '2026',
      call: 'Junio · primera semana',
      type: 'Mixto',
      status: 'pendiente_analisis',
      notes: 'Registrar preguntas exactas, temas y patrón de repetición.'
    }
  ],
  attempts: []
};

let state = loadState();
let calendarDate = new Date();

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function cryptoRandomId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Math.random().toString(36).slice(2)}-${Date.now()}`;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(saved);
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      subjects: parsed.subjects?.length ? parsed.subjects : DEFAULT_STATE.subjects,
      events: parsed.events || DEFAULT_STATE.events,
      materials: parsed.materials || DEFAULT_STATE.materials,
      exams: parsed.exams || DEFAULT_STATE.exams,
      attempts: parsed.attempts || []
    };
  } catch (error) {
    console.warn('No se pudo cargar el estado guardado. Se restauran datos iniciales.', error);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  state.meta.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function subjectName(id) {
  return state.subjects.find(subject => subject.id === id)?.name || 'Sin asignatura';
}

function subjectById(id) {
  return state.subjects.find(subject => subject.id === id);
}

function formatDate(dateString, options = {}) {
  if (!dateString) return 'Sin fecha';
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: options.year === false ? undefined : 'numeric'
  });
}

function daysUntil(dateString) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${dateString}T00:00:00`);
  return Math.ceil((target - today) / 86400000);
}

function urgencyBadge(dateString) {
  const days = daysUntil(dateString);
  if (days < 0) return '<span class="badge danger">Vencido</span>';
  if (days <= 3) return `<span class="badge danger">${days} días</span>`;
  if (days <= 15) return `<span class="badge warning">${days} días</span>`;
  return `<span class="badge success">${days} días</span>`;
}

function riskBadge(risk) {
  const map = {
    alto: 'danger',
    medio: 'warning',
    bajo: 'success'
  };
  return `<span class="badge ${map[risk] || 'neutral'}">Riesgo ${risk || 'sin valorar'}</span>`;
}

function statusBadge(status) {
  const map = {
    pendiente: ['warning', 'Pendiente'],
    por_configurar: ['neutral', 'Por configurar'],
    por_decidir: ['primary', 'Por decidir'],
    revisado: ['success', 'Revisado'],
    pendiente_analisis: ['warning', 'Pendiente de análisis']
  };
  const [kind, text] = map[status] || ['neutral', status || 'Sin estado'];
  return `<span class="badge ${kind}">${text}</span>`;
}

function setView(viewId) {
  $$('.view').forEach(view => view.classList.toggle('active-view', view.id === viewId));
  $$('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.view === viewId));
  const titles = {
    inicio: 'Inicio',
    calendario: 'Calendario',
    asignaturas: 'Asignaturas',
    materiales: 'Materiales',
    examenes: 'Exámenes',
    simulacros: 'Simulacros',
    progreso: 'Progreso',
    ajustes: 'Ajustes'
  };
  $('#viewTitle').textContent = titles[viewId] || 'GRADUS';
  renderView(viewId);
}

function upcomingEvents(limit = 6) {
  return [...state.events]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .filter(event => daysUntil(event.date) >= -1)
    .slice(0, limit);
}

function renderView(viewId) {
  const renderers = {
    inicio: renderHome,
    calendario: renderCalendar,
    asignaturas: renderSubjects,
    materiales: renderMaterials,
    examenes: renderExams,
    simulacros: renderSimulations,
    progreso: renderProgress,
    ajustes: renderSettings
  };
  renderers[viewId]?.();
}

function renderHome() {
  const pendingHigh = state.subjects.filter(subject => subject.risk === 'alto').length;
  const configured = state.subjects.filter(subject => subject.status !== 'por_configurar' && subject.status !== 'por_decidir').length;
  const nextEvents = upcomingEvents(5);
  const averageProgress = Math.round(state.subjects.reduce((sum, subject) => sum + Number(subject.progress || 0), 0) / state.subjects.length);

  $('#inicio').innerHTML = `
    <div class="grid-12">
      <article class="card metric col-3">
        <span class="metric-label">Asignaturas registradas</span>
        <span class="metric-value">${state.subjects.length}</span>
        <span class="metric-note">${configured} con datos iniciales útiles</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Fechas próximas</span>
        <span class="metric-value">${nextEvents.length}</span>
        <span class="metric-note">ordenadas por urgencia</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Riesgo alto</span>
        <span class="metric-value">${pendingHigh}</span>
        <span class="metric-note">requieren planificación temprana</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Progreso medio</span>
        <span class="metric-value">${averageProgress}%</span>
        <span class="metric-note">dato editable por asignatura en próximas versiones</span>
      </article>

      <article class="card col-7">
        <h3>Próximas fechas</h3>
        ${renderEventList(nextEvents)}
      </article>

      <article class="card col-5">
        <h3>Prioridad estratégica</h3>
        <div class="notice">
          <strong>Versión inicial</strong>
          Ahora mismo GRADUS prioriza estructura, claridad y control de fechas. En la siguiente fase incorporaremos edición completa de asignaturas y base de datos real.
        </div>
        <div class="list" style="margin-top:14px">
          ${state.subjects.filter(s => s.risk === 'alto').map(subject => `
            <div class="list-item">
              <div>
                <strong>${subject.name}</strong>
                <p>${subject.strategy}</p>
              </div>
              ${riskBadge(subject.risk)}
            </div>
          `).join('') || renderEmptyState()}
        </div>
      </article>

      <article class="card col-12">
        <h3>Estado de preparación</h3>
        <div class="subject-grid">
          ${state.subjects.slice(0, 6).map(subject => renderMiniSubject(subject)).join('')}
        </div>
      </article>
    </div>
  `;
  attachSubjectButtons();
}

function renderEventList(events) {
  if (!events.length) return renderEmptyState();
  return `<div class="list">${events.map(event => `
    <div class="list-item">
      <div>
        <strong>${event.title}</strong>
        <p>${subjectName(event.subjectId)} · ${event.type} · ${formatDate(event.date)}</p>
        ${event.notes ? `<p>${event.notes}</p>` : ''}
      </div>
      ${urgencyBadge(event.date)}
    </div>
  `).join('')}</div>`;
}

function renderMiniSubject(subject) {
  return `
    <button class="card compact subject-card subject-open" data-subject-id="${subject.id}" style="text-align:left;border:1px solid rgba(15,61,53,.09);">
      <header>
        <div>
          <h3>${subject.name}</h3>
          <p>${subject.semester} · ${subject.credits} ECTS</p>
        </div>
        ${riskBadge(subject.risk)}
      </header>
      <div class="subject-meta">
        ${statusBadge(subject.status)}
        <span class="badge neutral">${subject.type}</span>
      </div>
      <div class="progress-track" aria-label="Progreso ${subject.progress}%">
        <div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div>
      </div>
    </button>
  `;
}

function renderCalendar() {
  const monthName = calendarDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  $('#calendario').innerHTML = `
    <div class="grid-12">
      <article class="card col-12">
        <div class="toolbar">
          <button class="secondary-button" id="prevMonth">← Mes anterior</button>
          <button class="ghost-button" id="todayMonth">Hoy</button>
          <button class="secondary-button" id="nextMonth">Mes siguiente →</button>
          <strong style="font-size:1.1rem;text-transform:capitalize;">${monthName}</strong>
        </div>
        ${renderMonthGrid(calendarDate)}
      </article>
      <article class="card col-7">
        <h3>Todas las fechas registradas</h3>
        ${renderEventList([...state.events].sort((a, b) => new Date(a.date) - new Date(b.date)))}
      </article>
      <article class="card col-5">
        <h3>Avisos automáticos internos</h3>
        <p style="color:var(--muted);margin-top:0">Esta primera versión muestra alertas dentro de la app. Las notificaciones push del móvil se incorporarán en una fase posterior.</p>
        <div class="list">
          <div class="list-item"><strong>30 días antes</strong><p>Planificación del bloque de estudio.</p></div>
          <div class="list-item"><strong>15 días antes</strong><p>Primer aviso serio y revisión del progreso.</p></div>
          <div class="list-item"><strong>7 días antes</strong><p>Simulacro o cierre de borrador.</p></div>
          <div class="list-item"><strong>3 días antes</strong><p>Alerta crítica si no hay progreso suficiente.</p></div>
        </div>
      </article>
    </div>
  `;
  $('#prevMonth').addEventListener('click', () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
    renderCalendar();
  });
  $('#nextMonth').addEventListener('click', () => {
    calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
    renderCalendar();
  });
  $('#todayMonth').addEventListener('click', () => {
    calendarDate = new Date();
    renderCalendar();
  });
}

function renderMonthGrid(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const labels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push('<div class="calendar-day muted"></div>');
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = state.events.filter(event => event.date === dateString);
    cells.push(`
      <div class="calendar-day">
        <span class="day-number">${day}</span>
        ${dayEvents.map(event => `<span class="calendar-dot" title="${event.title}">${event.title}</span>`).join('')}
      </div>
    `);
  }
  return `<div class="calendar-grid">${labels.map(label => `<div class="calendar-label">${label}</div>`).join('')}${cells.join('')}</div>`;
}

function renderSubjects() {
  $('#asignaturas').innerHTML = `
    <div class="toolbar">
      <input id="subjectSearch" type="search" placeholder="Buscar asignatura, código o tipo...">
      <select id="riskFilter">
        <option value="all">Todos los riesgos</option>
        <option value="alto">Riesgo alto</option>
        <option value="medio">Riesgo medio</option>
        <option value="bajo">Riesgo bajo</option>
      </select>
    </div>
    <div id="subjectList" class="subject-grid"></div>
  `;
  const renderFiltered = () => {
    const query = $('#subjectSearch').value.toLowerCase().trim();
    const risk = $('#riskFilter').value;
    const filtered = state.subjects.filter(subject => {
      const content = `${subject.name} ${subject.code} ${subject.type} ${subject.semester}`.toLowerCase();
      return content.includes(query) && (risk === 'all' || subject.risk === risk);
    });
    $('#subjectList').innerHTML = filtered.length
      ? filtered.map(subject => `
        <article class="card subject-card">
          <header>
            <div>
              <h3>${subject.name}</h3>
              <p>${subject.code} · ${subject.semester}</p>
            </div>
            ${riskBadge(subject.risk)}
          </header>
          <div class="subject-meta">
            <span class="badge neutral">${subject.credits} ECTS</span>
            <span class="badge primary">${subject.examType}</span>
            ${statusBadge(subject.status)}
          </div>
          <p>${subject.notes}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div></div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
            <button class="primary-action subject-open" data-subject-id="${subject.id}">Abrir ficha</button>
          </div>
        </article>
      `).join('')
      : renderEmptyState();
    attachSubjectButtons();
  };
  $('#subjectSearch').addEventListener('input', renderFiltered);
  $('#riskFilter').addEventListener('change', renderFiltered);
  renderFiltered();
}

function attachSubjectButtons() {
  $$('.subject-open').forEach(button => {
    button.addEventListener('click', event => {
      const id = event.currentTarget.dataset.subjectId;
      openSubject(id);
    });
  });
}

function openSubject(id) {
  const subject = subjectById(id);
  if (!subject) return;
  const subjectEvents = state.events.filter(event => event.subjectId === id).sort((a, b) => new Date(a.date) - new Date(b.date));
  const subjectMaterials = state.materials.filter(material => material.subjectId === id);
  const subjectExams = state.exams.filter(exam => exam.subjectId === id);
  $('#subjectDialogTitle').textContent = subject.name;
  $('#subjectDialogBody').innerHTML = `
    <div class="kpi-row">
      <div class="kpi"><span>Código</span><strong>${subject.code}</strong></div>
      <div class="kpi"><span>Créditos</span><strong>${subject.credits} ECTS</strong></div>
      <div class="kpi"><span>Periodo</span><strong>${subject.semester}</strong></div>
      <div class="kpi"><span>Riesgo</span><strong>${subject.risk}</strong></div>
    </div>
    <div class="grid-12">
      <article class="card compact col-6">
        <h4>Evaluación</h4>
        <p>${subject.evaluation}</p>
        <p><strong>Tipo de examen:</strong> ${subject.examType}</p>
      </article>
      <article class="card compact col-6">
        <h4>Estrategia personal</h4>
        <p>${subject.strategy}</p>
      </article>
      <article class="card compact col-4">
        <h4>Fechas</h4>
        ${renderEventList(subjectEvents)}
      </article>
      <article class="card compact col-4">
        <h4>Materiales</h4>
        ${renderMaterialList(subjectMaterials)}
      </article>
      <article class="card compact col-4">
        <h4>Exámenes</h4>
        ${subjectExams.length ? `<div class="list">${subjectExams.map(exam => `<div class="list-item"><div><strong>${exam.year} · ${exam.call}</strong><p>${exam.type}</p><p>${exam.notes}</p></div>${statusBadge(exam.status)}</div>`).join('')}</div>` : renderEmptyState()}
      </article>
    </div>
  `;
  $('#subjectDialog').showModal();
}

function renderMaterialList(materials) {
  if (!materials.length) return renderEmptyState();
  return `<div class="list">${materials.map(material => `
    <div class="list-item">
      <div>
        <strong>${material.title}</strong>
        <p>${material.kind} · ${material.source || 'Sin fuente'}</p>
        ${material.notes ? `<p>${material.notes}</p>` : ''}
      </div>
      ${statusBadge(material.status)}
    </div>
  `).join('')}</div>`;
}

function renderMaterials() {
  $('#materiales').innerHTML = `
    <div class="grid-12">
      <article class="card col-5">
        <h3>Registrar material</h3>
        <p style="color:var(--muted);margin-top:0">En esta versión se registra la ficha del documento. La subida real de archivos se incorporará con almacenamiento privado.</p>
        <form id="materialForm" class="form-grid">
          <label class="span-2">Título<input name="title" required placeholder="Guía, manual, orientaciones..."></label>
          <label>Asignatura<select name="subjectId" required>${subjectOptions()}</select></label>
          <label>Tipo
            <select name="kind" required>
              <option>Guía</option>
              <option>Manual</option>
              <option>Documento docente</option>
              <option>Examen</option>
              <option>PEC</option>
              <option>Resumen propio</option>
              <option>Otro</option>
            </select>
          </label>
          <label>Fuente<input name="source" placeholder="UNED, Ágora, manual..."></label>
          <label>Estado
            <select name="status">
              <option value="pendiente">Pendiente</option>
              <option value="revisado">Revisado</option>
            </select>
          </label>
          <label class="span-2">Notas<textarea name="notes" rows="3"></textarea></label>
          <button class="primary-action span-2">Guardar material</button>
        </form>
      </article>
      <article class="card col-7">
        <h3>Biblioteca</h3>
        <div class="toolbar"><input id="materialSearch" type="search" placeholder="Buscar materiales..."></div>
        <div id="materialList"></div>
      </article>
    </div>
  `;
  $('#materialForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    state.materials.push({
      id: cryptoRandomId(),
      title: formData.get('title'),
      subjectId: formData.get('subjectId'),
      kind: formData.get('kind'),
      source: formData.get('source'),
      status: formData.get('status'),
      notes: formData.get('notes')
    });
    saveState();
    event.currentTarget.reset();
    renderMaterials();
  });
  const renderFiltered = () => {
    const query = ($('#materialSearch')?.value || '').toLowerCase();
    const filtered = state.materials.filter(material => `${material.title} ${material.kind} ${subjectName(material.subjectId)} ${material.notes}`.toLowerCase().includes(query));
    $('#materialList').innerHTML = renderMaterialList(filtered);
  };
  $('#materialSearch').addEventListener('input', renderFiltered);
  renderFiltered();
}

function renderExams() {
  $('#examenes').innerHTML = `
    <div class="grid-12">
      <article class="card col-5">
        <h3>Registrar examen histórico</h3>
        <form id="examForm" class="form-grid">
          <label>Asignatura<select name="subjectId" required>${subjectOptions()}</select></label>
          <label>Año<input name="year" required placeholder="2026"></label>
          <label>Convocatoria<input name="call" required placeholder="Junio · primera semana"></label>
          <label>Tipo<input name="type" required placeholder="Test, desarrollo, mixto..."></label>
          <label>Estado
            <select name="status">
              <option value="pendiente_analisis">Pendiente de análisis</option>
              <option value="revisado">Revisado</option>
            </select>
          </label>
          <label class="span-2">Notas<textarea name="notes" rows="3" placeholder="Preguntas repetidas, temas, dificultad..."></textarea></label>
          <button class="primary-action span-2">Guardar examen</button>
        </form>
      </article>
      <article class="card col-7">
        <h3>Histórico de exámenes</h3>
        ${state.exams.length ? `
          <table class="exam-table">
            <thead><tr><th>Asignatura</th><th>Año</th><th>Convocatoria</th><th>Tipo</th><th>Estado</th></tr></thead>
            <tbody>${state.exams.map(exam => `
              <tr>
                <td>${subjectName(exam.subjectId)}<br><small>${exam.notes || ''}</small></td>
                <td>${exam.year}</td>
                <td>${exam.call}</td>
                <td>${exam.type}</td>
                <td>${statusBadge(exam.status)}</td>
              </tr>
            `).join('')}</tbody>
          </table>` : renderEmptyState()}
      </article>
    </div>
  `;
  $('#examForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    state.exams.push({
      id: cryptoRandomId(),
      subjectId: formData.get('subjectId'),
      year: formData.get('year'),
      call: formData.get('call'),
      type: formData.get('type'),
      status: formData.get('status'),
      notes: formData.get('notes')
    });
    saveState();
    renderExams();
  });
}

function renderSimulations() {
  const methods = subjectById('metodos');
  $('#simulacros').innerHTML = `
    <div class="grid-12">
      <article class="card col-8">
        <h3>Simulador inicial</h3>
        <p style="color:var(--muted);margin-top:0">La versión 0.1 solo prepara la estructura. Los simulacros rigurosos se activarán cuando hayamos cargado y clasificado preguntas reales de exámenes anteriores.</p>
        <div class="notice">
          <strong>Regla de rigor</strong>
          GRADUS no inventará preguntas oficiales. Cada simulacro deberá indicar si procede de pregunta histórica exacta, variante histórica o patrón documentado.
        </div>
        <div class="subject-grid" style="margin-top:16px">
          <article class="card compact">
            <h4>Plantilla Métodos</h4>
            <p>${methods?.examType || 'Pendiente de configurar'}</p>
            <p>${methods?.evaluation || ''}</p>
            <button class="primary-action" id="mockAttemptBtn">Registrar simulacro de prueba</button>
          </article>
          <article class="card compact">
            <h4>Modo test</h4>
            <p>Preparado para test con penalización, respuestas y registro de errores.</p>
            <span class="badge neutral">Pendiente v0.3</span>
          </article>
          <article class="card compact">
            <h4>Modo desarrollo</h4>
            <p>Preparado para preguntas madre, espacio de respuesta y autoevaluación por rúbrica.</p>
            <span class="badge neutral">Pendiente v0.4</span>
          </article>
        </div>
      </article>
      <article class="card col-4">
        <h3>Intentos registrados</h3>
        ${renderAttempts()}
      </article>
    </div>
  `;
  $('#mockAttemptBtn').addEventListener('click', () => {
    state.attempts.push({
      id: cryptoRandomId(),
      subjectId: 'metodos',
      date: new Date().toISOString().slice(0, 10),
      title: 'Simulacro de prueba de estructura',
      score: null,
      notes: 'Intento de prueba registrado para comprobar historial.'
    });
    saveState();
    renderSimulations();
  });
}

function renderAttempts() {
  if (!state.attempts.length) return renderEmptyState();
  return `<div class="list">${state.attempts.slice().reverse().map(attempt => `
    <div class="list-item">
      <div>
        <strong>${attempt.title}</strong>
        <p>${subjectName(attempt.subjectId)} · ${formatDate(attempt.date)}</p>
        <p>${attempt.notes}</p>
      </div>
      <span class="badge primary">${attempt.score ?? 'Sin nota'}</span>
    </div>
  `).join('')}</div>`;
}

function renderProgress() {
  $('#progreso').innerHTML = `
    <div class="grid-12">
      <article class="card col-12">
        <h3>Progreso por asignatura</h3>
        <table class="data-table">
          <thead><tr><th>Asignatura</th><th>Estado</th><th>Riesgo</th><th>Progreso</th><th>Estrategia</th></tr></thead>
          <tbody>${state.subjects.map(subject => `
            <tr>
              <td><strong>${subject.name}</strong><br><small>${subject.code} · ${subject.semester}</small></td>
              <td>${statusBadge(subject.status)}</td>
              <td>${riskBadge(subject.risk)}</td>
              <td style="min-width:180px"><div class="progress-track"><div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div></div><small>${subject.progress}%</small></td>
              <td>${subject.strategy}</td>
            </tr>
          `).join('')}</tbody>
        </table>
      </article>
    </div>
  `;
}

function renderSettings() {
  $('#ajustes').innerHTML = `
    <div class="grid-12">
      <article class="card col-6">
        <h3>Datos locales</h3>
        <p style="color:var(--muted)">Esta versión guarda la información en el navegador mediante localStorage. Es suficiente para prototipo, pero no para la versión definitiva.</p>
        <div class="list">
          <div class="list-item"><strong>Aplicación</strong><p>${state.meta.appName}</p></div>
          <div class="list-item"><strong>Curso</strong><p>${state.meta.course}</p></div>
          <div class="list-item"><strong>Última actualización</strong><p>${new Date(state.meta.lastUpdated).toLocaleString('es-ES')}</p></div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
          <button class="secondary-button" id="exportDataBtn">Exportar copia JSON</button>
          <button class="danger-button" id="resetDataBtn">Restaurar datos iniciales</button>
        </div>
      </article>
      <article class="card col-6">
        <h3>Próximas conexiones</h3>
        <div class="list">
          <div class="list-item"><strong>Login privado</strong><p>Correo propio de la app, preferiblemente con correo UNED como identificador, sin guardar contraseña real de la UNED.</p></div>
          <div class="list-item"><strong>Supabase</strong><p>Base de datos, almacenamiento de documentos y autenticación privada.</p></div>
          <div class="list-item"><strong>Avisos móviles</strong><p>Notificaciones push cuando la PWA esté desplegada en HTTPS.</p></div>
          <div class="list-item"><strong>Ágora/UNED</strong><p>Importación prudente de avisos y materiales, evitando credenciales inseguras.</p></div>
        </div>
      </article>
    </div>
  `;
  $('#exportDataBtn').addEventListener('click', exportData);
  $('#resetDataBtn').addEventListener('click', () => {
    if (!confirm('¿Seguro que quieres restaurar los datos iniciales de GRADUS v0.1?')) return;
    state = structuredClone(DEFAULT_STATE);
    saveState();
    renderSettings();
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `gradus-copia-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderEmptyState() {
  return $('#emptyStateTemplate').innerHTML;
}

function subjectOptions() {
  return state.subjects.map(subject => `<option value="${subject.id}">${subject.name}</option>`).join('');
}

function populateEventSubjectSelect() {
  $('#eventSubjectSelect').innerHTML = subjectOptions();
}

function setupEventDialog() {
  const dialog = $('#eventDialog');
  $('#quickAddBtn').addEventListener('click', () => {
    populateEventSubjectSelect();
    dialog.showModal();
  });
  $('#eventForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    state.events.push({
      id: cryptoRandomId(),
      title: formData.get('title'),
      subjectId: formData.get('subjectId'),
      type: formData.get('type'),
      date: formData.get('date'),
      notes: formData.get('notes')
    });
    saveState();
    event.currentTarget.reset();
    dialog.close();
    const activeView = $('.active-view')?.id || 'inicio';
    renderView(activeView);
  });
}

function setupNavigation() {
  $$('.nav-item').forEach(item => {
    item.addEventListener('click', () => setView(item.dataset.view));
  });
}

function setupSubjectDialog() {
  $('#closeSubjectDialog').addEventListener('click', () => $('#subjectDialog').close());
}

function setupPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(error => console.warn('Service worker no registrado:', error));
    });
  }
}

function init() {
  setupNavigation();
  setupEventDialog();
  setupSubjectDialog();
  setupPWA();
  renderHome();
}

init();
