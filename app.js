const APP_VERSION = '0.2';
const STORAGE_KEY = 'gradus.v0.2.state';
const LEGACY_STORAGE_KEY = 'gradus.v0.1.state';

const SEMESTERS = {
  all: 'Todo el curso',
  primer_cuatrimestre: 'Primer cuatrimestre',
  segundo_cuatrimestre: 'Segundo cuatrimestre',
  anual: 'Anuales / TFG',
  pendiente: 'Pendiente de clasificar'
};

const DEFAULT_STATE = {
  meta: {
    appName: 'GRADUS',
    course: '2026-2027',
    ownerLabel: 'Pedagogía UNED',
    lastUpdated: new Date().toISOString(),
    version: APP_VERSION
  },
  ui: {
    semesterFilter: 'all'
  },
  subjects: [
    {
      id: 'metodos',
      name: 'Métodos y Diseños de Investigación en Educación',
      code: '63022095',
      semester: 'segundo_cuatrimestre',
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
      semester: 'segundo_cuatrimestre',
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
      semester: 'primer_cuatrimestre',
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
      semester: 'segundo_cuatrimestre',
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
      semester: 'primer_cuatrimestre',
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
      semester: 'primer_cuatrimestre',
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
      semester: 'anual',
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
      semester: 'primer_cuatrimestre',
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
      semester: 'primer_cuatrimestre',
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
      semester: 'segundo_cuatrimestre',
      type: 'Entrega',
      date: '2027-04-06',
      notes: 'Fecha aproximada inicial según guía. No pondera en la nota final.'
    },
    {
      id: cryptoRandomId(),
      title: 'PEC-2 de Métodos',
      subjectId: 'metodos',
      semester: 'segundo_cuatrimestre',
      type: 'Entrega',
      date: '2027-05-10',
      notes: 'Inicio aproximado del periodo de entrega. Pondera el 20% si se cumplen condiciones.'
    },
    {
      id: cryptoRandomId(),
      title: 'Revisión de guías tras matrícula',
      subjectId: 'tfg',
      semester: 'anual',
      type: 'Aviso',
      date: '2026-10-01',
      notes: 'Actualizar fichas, evaluación, cronograma y materiales cuando el curso virtual esté operativo.'
    }
  ],
  materials: [
    {
      id: cryptoRandomId(),
      subjectId: 'metodos',
      semester: 'segundo_cuatrimestre',
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
      semester: 'segundo_cuatrimestre',
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
let supabaseClient = null;
let authSession = null;
let syncTimer = null;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function cryptoRandomId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `id-${Math.random().toString(36).slice(2)}-${Date.now()}`;
}

function clone(value) {
  return typeof structuredClone === 'function' ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function normalizeSemester(value) {
  const normalized = String(value || '').toLowerCase().trim();
  if (['primer_cuatrimestre', 'primer semestre', 'semestre 1', '1', '1º', 'primero'].includes(normalized)) return 'primer_cuatrimestre';
  if (['segundo_cuatrimestre', 'segundo semestre', 'semestre 2', '2', '2º', 'segundo'].includes(normalized)) return 'segundo_cuatrimestre';
  if (['anual', 'tfg', 'especial'].includes(normalized)) return normalized === 'especial' ? 'anual' : normalized;
  return 'pendiente';
}

function semesterLabel(value) {
  return SEMESTERS[normalizeSemester(value)] || SEMESTERS.pendiente;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function normalizeSubject(subject) {
  return {
    ...subject,
    id: subject.id || cryptoRandomId(),
    semester: normalizeSemester(subject.semester),
    credits: Number(subject.credits || 0),
    progress: Math.max(0, Math.min(100, Number(subject.progress || 0)))
  };
}

function subjectById(id) {
  return state.subjects.find(subject => subject.id === id);
}

function itemSemester(item) {
  if (item.semester) return normalizeSemester(item.semester);
  return normalizeSemester(subjectById(item.subjectId)?.semester);
}

function normalizeState(rawState) {
  const base = clone(DEFAULT_STATE);
  const merged = {
    ...base,
    ...rawState,
    meta: { ...base.meta, ...(rawState?.meta || {}), version: APP_VERSION },
    ui: { ...base.ui, ...(rawState?.ui || {}) },
    subjects: Array.isArray(rawState?.subjects) && rawState.subjects.length ? rawState.subjects.map(normalizeSubject) : base.subjects.map(normalizeSubject),
    events: Array.isArray(rawState?.events) ? rawState.events : base.events,
    materials: Array.isArray(rawState?.materials) ? rawState.materials : base.materials,
    exams: Array.isArray(rawState?.exams) ? rawState.exams : base.exams,
    attempts: Array.isArray(rawState?.attempts) ? rawState.attempts : []
  };

  merged.events = merged.events.map(event => ({ ...event, id: event.id || cryptoRandomId(), semester: itemSemester(event) }));
  merged.materials = merged.materials.map(material => ({ ...material, id: material.id || cryptoRandomId(), semester: itemSemester(material) }));
  merged.exams = merged.exams.map(exam => ({ ...exam, id: exam.id || cryptoRandomId(), semester: itemSemester(exam) }));
  merged.attempts = merged.attempts.map(attempt => ({ ...attempt, id: attempt.id || cryptoRandomId(), semester: itemSemester(attempt) }));
  merged.ui.semesterFilter = SEMESTERS[merged.ui.semesterFilter] ? merged.ui.semesterFilter : 'all';
  return merged;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!saved) return normalizeState(DEFAULT_STATE);
    return normalizeState(JSON.parse(saved));
  } catch (error) {
    console.warn('No se pudo cargar el estado guardado. Se restauran datos iniciales.', error);
    return normalizeState(DEFAULT_STATE);
  }
}

function saveLocalState() {
  state.meta.lastUpdated = new Date().toISOString();
  state.meta.version = APP_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function saveState({ sync = true } = {}) {
  saveLocalState();
  if (sync) scheduleSupabaseSync();
}

function activeSemesterFilter() {
  return state.ui?.semesterFilter || 'all';
}

function matchesSemester(item) {
  const filter = activeSemesterFilter();
  if (filter === 'all') return true;
  return itemSemester(item) === filter;
}

function filteredSubjects() {
  return state.subjects.filter(matchesSemester);
}

function filteredEvents() {
  return state.events.filter(matchesSemester);
}

function filteredMaterials() {
  return state.materials.filter(matchesSemester);
}

function filteredExams() {
  return state.exams.filter(matchesSemester);
}

function filteredAttempts() {
  return state.attempts.filter(matchesSemester);
}

function subjectName(id) {
  return subjectById(id)?.name || 'Sin asignatura';
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
  const map = { alto: 'danger', medio: 'warning', bajo: 'success' };
  return `<span class="badge ${map[risk] || 'neutral'}">Riesgo ${escapeHtml(risk || 'sin valorar')}</span>`;
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
  return `<span class="badge ${kind}">${escapeHtml(text)}</span>`;
}

function semesterBadge(value) {
  const semester = normalizeSemester(value);
  const kind = semester === 'primer_cuatrimestre' ? 'primary' : semester === 'segundo_cuatrimestre' ? 'success' : semester === 'anual' ? 'warning' : 'neutral';
  return `<span class="badge ${kind}">${semesterLabel(semester)}</span>`;
}

function setSyncStatus(text, mode = 'local') {
  const indicator = $('#syncStatus');
  if (!indicator) return;
  indicator.textContent = text;
  indicator.className = `sync-indicator ${mode}`;
}

function setSessionLabel() {
  const label = $('#sessionLabel');
  const authButton = $('#authBtn');
  const email = authSession?.user?.email;
  if (label) label.textContent = email ? `Sesión: ${email}` : 'Sin sesión';
  if (authButton) authButton.textContent = email ? 'Cuenta' : 'Conectar Supabase';
}

function getSupabaseConfigStatus() {
  const config = window.GRADUS_SUPABASE || {};
  const configured = Boolean(
    config.url &&
    config.anonKey &&
    !String(config.url).includes('PEGA_AQUI') &&
    !String(config.anonKey).includes('PEGA_AQUI')
  );
  return { config, configured };
}

function setupSupabaseClient() {
  const { config, configured } = getSupabaseConfigStatus();
  if (!configured) {
    setSyncStatus('Supabase sin configurar', 'local');
    return false;
  }
  if (!window.supabase?.createClient) {
    setSyncStatus('Supabase no cargado', 'warning');
    return false;
  }
  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  setSyncStatus('Supabase configurado', 'warning');
  return true;
}

async function setupAuth() {
  if (!supabaseClient) {
    setSessionLabel();
    return;
  }

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) console.warn('No se pudo recuperar la sesión:', error.message);
  authSession = data?.session || null;
  setSessionLabel();

  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    authSession = session;
    setSessionLabel();
    if (session) {
      setSyncStatus('Cargando datos privados...', 'warning');
      await loadFromSupabase();
      const activeView = $('.active-view')?.id || 'inicio';
      renderView(activeView);
    } else {
      setSyncStatus('Modo local', 'local');
    }
  });

  if (authSession) {
    await loadFromSupabase();
  }
}

function setupAuthDialog() {
  const dialog = $('#authDialog');
  const form = $('#authForm');
  const message = $('#authMessage');

  $('#authBtn').addEventListener('click', () => {
    if (!supabaseClient) {
      message.textContent = 'Primero debes pegar la Project URL y la anon/public key en supabase-config.js.';
    } else {
      message.textContent = authSession ? 'Sesión conectada. Puedes cerrar sesión si lo necesitas.' : 'Introduce tu correo y tu contraseña propia de GRADUS.';
    }
    dialog.showModal();
  });

  $('#logoutBtn').addEventListener('click', async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    authSession = null;
    setSessionLabel();
    setSyncStatus('Modo local', 'local');
    message.textContent = 'Sesión cerrada. GRADUS conserva también una copia local en este navegador.';
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (!supabaseClient) {
      message.textContent = 'Supabase todavía no está configurado en el archivo supabase-config.js.';
      return;
    }
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') || '').trim();
    const password = String(formData.get('password') || '').trim();
    const action = event.submitter?.value || 'login';

    if (!email || !password) {
      message.textContent = 'Introduce correo y contraseña.';
      return;
    }

    message.textContent = action === 'signup' ? 'Creando cuenta...' : 'Iniciando sesión...';
    const request = action === 'signup'
      ? supabaseClient.auth.signUp({ email, password })
      : supabaseClient.auth.signInWithPassword({ email, password });

    const { data, error } = await request;
    if (error) {
      message.textContent = `Error: ${error.message}`;
      return;
    }

    authSession = data.session || authSession;
    setSessionLabel();
    if (authSession) {
      message.textContent = 'Sesión iniciada. Sincronizando datos iniciales...';
      await loadFromSupabase();
      dialog.close();
      renderView($('.active-view')?.id || 'inicio');
    } else {
      message.textContent = 'Cuenta creada. Si Supabase exige confirmación, revisa tu correo antes de iniciar sesión.';
    }
  });
}

function rowFromSubject(subject) {
  return {
    user_id: authSession.user.id,
    id: subject.id,
    name: subject.name,
    code: subject.code,
    semester: normalizeSemester(subject.semester),
    credits: Number(subject.credits || 0),
    type: subject.type,
    status: subject.status,
    risk: subject.risk,
    progress: Number(subject.progress || 0),
    exam_type: subject.examType,
    evaluation: subject.evaluation,
    notes: subject.notes,
    strategy: subject.strategy
  };
}

function subjectFromRow(row) {
  return normalizeSubject({
    id: row.id,
    name: row.name,
    code: row.code,
    semester: row.semester,
    credits: row.credits,
    type: row.type,
    status: row.status,
    risk: row.risk,
    progress: row.progress,
    examType: row.exam_type,
    evaluation: row.evaluation,
    notes: row.notes,
    strategy: row.strategy
  });
}

function rowFromEvent(event) {
  return {
    user_id: authSession.user.id,
    id: event.id,
    subject_id: event.subjectId,
    semester: itemSemester(event),
    title: event.title,
    type: event.type,
    date: event.date,
    notes: event.notes
  };
}

function eventFromRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    semester: row.semester,
    title: row.title,
    type: row.type,
    date: row.date,
    notes: row.notes
  };
}

function rowFromMaterial(material) {
  return {
    user_id: authSession.user.id,
    id: material.id,
    subject_id: material.subjectId,
    semester: itemSemester(material),
    title: material.title,
    kind: material.kind,
    source: material.source,
    status: material.status,
    notes: material.notes,
    file_path: material.filePath || null
  };
}

function materialFromRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    semester: row.semester,
    title: row.title,
    kind: row.kind,
    source: row.source,
    status: row.status,
    notes: row.notes,
    filePath: row.file_path
  };
}

function rowFromExam(exam) {
  return {
    user_id: authSession.user.id,
    id: exam.id,
    subject_id: exam.subjectId,
    semester: itemSemester(exam),
    year: exam.year,
    call: exam.call,
    type: exam.type,
    status: exam.status,
    notes: exam.notes
  };
}

function examFromRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    semester: row.semester,
    year: row.year,
    call: row.call,
    type: row.type,
    status: row.status,
    notes: row.notes
  };
}

function rowFromAttempt(attempt) {
  return {
    user_id: authSession.user.id,
    id: attempt.id,
    subject_id: attempt.subjectId,
    semester: itemSemester(attempt),
    date: attempt.date,
    title: attempt.title,
    score: attempt.score,
    notes: attempt.notes
  };
}

function attemptFromRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    semester: row.semester,
    date: row.date,
    title: row.title,
    score: row.score,
    notes: row.notes
  };
}

async function loadFromSupabase() {
  if (!supabaseClient || !authSession) return;
  try {
    const [subjectsResult, eventsResult, materialsResult, examsResult, attemptsResult] = await Promise.all([
      supabaseClient.from('subjects').select('*').order('semester').order('name'),
      supabaseClient.from('academic_events').select('*').order('date'),
      supabaseClient.from('materials').select('*').order('created_at', { ascending: false }),
      supabaseClient.from('exams').select('*').order('year', { ascending: false }),
      supabaseClient.from('simulation_attempts').select('*').order('date', { ascending: false })
    ]);

    const firstError = [subjectsResult, eventsResult, materialsResult, examsResult, attemptsResult].find(result => result.error)?.error;
    if (firstError) throw firstError;

    if (!subjectsResult.data?.length) {
      setSyncStatus('Creando datos iniciales...', 'warning');
      await persistStateToSupabase({ immediate: true });
      setSyncStatus('Sincronizado con Supabase', 'online');
      return;
    }

    state = normalizeState({
      ...state,
      subjects: subjectsResult.data.map(subjectFromRow),
      events: eventsResult.data.map(eventFromRow),
      materials: materialsResult.data.map(materialFromRow),
      exams: examsResult.data.map(examFromRow),
      attempts: attemptsResult.data.map(attemptFromRow)
    });
    saveLocalState();
    setSyncStatus('Sincronizado con Supabase', 'online');
  } catch (error) {
    console.error('Error al cargar desde Supabase:', error);
    setSyncStatus('Error de sincronización', 'danger');
  }
}

function scheduleSupabaseSync() {
  if (!supabaseClient || !authSession) return;
  window.clearTimeout(syncTimer);
  setSyncStatus('Pendiente de sincronizar...', 'warning');
  syncTimer = window.setTimeout(() => persistStateToSupabase(), 600);
}

async function persistStateToSupabase({ immediate = false } = {}) {
  if (!supabaseClient || !authSession) return;
  if (!immediate) setSyncStatus('Sincronizando...', 'warning');
  try {
    const operations = [];
    if (state.subjects.length) operations.push(supabaseClient.from('subjects').upsert(state.subjects.map(rowFromSubject), { onConflict: 'user_id,id' }));
    if (state.events.length) operations.push(supabaseClient.from('academic_events').upsert(state.events.map(rowFromEvent), { onConflict: 'user_id,id' }));
    if (state.materials.length) operations.push(supabaseClient.from('materials').upsert(state.materials.map(rowFromMaterial), { onConflict: 'user_id,id' }));
    if (state.exams.length) operations.push(supabaseClient.from('exams').upsert(state.exams.map(rowFromExam), { onConflict: 'user_id,id' }));
    if (state.attempts.length) operations.push(supabaseClient.from('simulation_attempts').upsert(state.attempts.map(rowFromAttempt), { onConflict: 'user_id,id' }));
    const results = await Promise.all(operations);
    const firstError = results.find(result => result.error)?.error;
    if (firstError) throw firstError;
    setSyncStatus('Sincronizado con Supabase', 'online');
  } catch (error) {
    console.error('Error al guardar en Supabase:', error);
    setSyncStatus('Error de sincronización', 'danger');
  }
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
  return [...filteredEvents()]
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
  const subjects = filteredSubjects();
  const nextEvents = upcomingEvents(5);
  const pendingHigh = subjects.filter(subject => subject.risk === 'alto').length;
  const configured = subjects.filter(subject => subject.status !== 'por_configurar' && subject.status !== 'por_decidir').length;
  const averageProgress = subjects.length ? Math.round(subjects.reduce((sum, subject) => sum + Number(subject.progress || 0), 0) / subjects.length) : 0;

  $('#inicio').innerHTML = `
    <div class="semester-strip">
      ${Object.entries(SEMESTERS).filter(([key]) => key !== 'all').map(([key, label]) => `
        <button class="semester-card ${activeSemesterFilter() === key ? 'active' : ''}" data-semester-jump="${key}">
          <strong>${label}</strong>
          <span>${state.subjects.filter(subject => normalizeSemester(subject.semester) === key).length} asignaturas</span>
        </button>
      `).join('')}
    </div>
    <div class="grid-12">
      <article class="card metric col-3">
        <span class="metric-label">Asignaturas en vista</span>
        <span class="metric-value">${subjects.length}</span>
        <span class="metric-note">${configured} con datos iniciales útiles</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Fechas próximas</span>
        <span class="metric-value">${nextEvents.length}</span>
        <span class="metric-note">filtradas por cuatrimestre</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Riesgo alto</span>
        <span class="metric-value">${pendingHigh}</span>
        <span class="metric-note">requieren planificación temprana</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Progreso medio</span>
        <span class="metric-value">${averageProgress}%</span>
        <span class="metric-note">calculado sobre la vista actual</span>
      </article>

      <article class="card col-7">
        <h3>Próximas fechas · ${semesterLabel(activeSemesterFilter())}</h3>
        ${renderEventList(nextEvents)}
      </article>

      <article class="card col-5">
        <h3>Prioridad estratégica</h3>
        <div class="notice">
          <strong>Separación por cuatrimestres activada</strong>
          Las asignaturas, fechas, materiales, exámenes, simulacros y progreso se filtran ya por primer cuatrimestre, segundo cuatrimestre, anual o pendiente.
        </div>
        <div class="list" style="margin-top:14px">
          ${subjects.filter(s => s.risk === 'alto').map(subject => `
            <div class="list-item">
              <div>
                <strong>${escapeHtml(subject.name)}</strong>
                <p>${escapeHtml(subject.strategy)}</p>
              </div>
              ${riskBadge(subject.risk)}
            </div>
          `).join('') || renderEmptyState()}
        </div>
      </article>

      <article class="card col-12">
        <h3>Estado de preparación</h3>
        <div class="subject-grid">
          ${subjects.length ? subjects.slice(0, 8).map(subject => renderMiniSubject(subject)).join('') : renderEmptyState()}
        </div>
      </article>
    </div>
  `;

  $$('[data-semester-jump]').forEach(button => {
    button.addEventListener('click', () => {
      state.ui.semesterFilter = button.dataset.semesterJump;
      $('#globalSemesterFilter').value = state.ui.semesterFilter;
      saveState({ sync: false });
      renderHome();
    });
  });
  attachSubjectButtons();
}

function renderEventList(events) {
  if (!events.length) return renderEmptyState();
  return `<div class="list">${events.map(event => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(event.title)}</strong>
        <p>${escapeHtml(subjectName(event.subjectId))} · ${escapeHtml(event.type)} · ${formatDate(event.date)}</p>
        ${event.notes ? `<p>${escapeHtml(event.notes)}</p>` : ''}
      </div>
      <div class="badge-stack">
        ${semesterBadge(itemSemester(event))}
        ${urgencyBadge(event.date)}
      </div>
    </div>
  `).join('')}</div>`;
}

function renderMiniSubject(subject) {
  return `
    <button class="card compact subject-card subject-open" data-subject-id="${escapeHtml(subject.id)}" style="text-align:left;border:1px solid rgba(15,61,53,.09);">
      <header>
        <div>
          <h3>${escapeHtml(subject.name)}</h3>
          <p>${semesterLabel(subject.semester)} · ${escapeHtml(subject.credits)} ECTS</p>
        </div>
        ${riskBadge(subject.risk)}
      </header>
      <div class="subject-meta">
        ${statusBadge(subject.status)}
        ${semesterBadge(subject.semester)}
        <span class="badge neutral">${escapeHtml(subject.type)}</span>
      </div>
      <div class="progress-track" aria-label="Progreso ${escapeHtml(subject.progress)}%">
        <div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div>
      </div>
    </button>
  `;
}

function renderCalendar() {
  const monthName = calendarDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  const events = [...filteredEvents()].sort((a, b) => new Date(a.date) - new Date(b.date));
  $('#calendario').innerHTML = `
    <div class="grid-12">
      <article class="card col-12">
        <div class="toolbar">
          <button class="secondary-button" id="prevMonth">← Mes anterior</button>
          <button class="ghost-button" id="todayMonth">Hoy</button>
          <button class="secondary-button" id="nextMonth">Mes siguiente →</button>
          <strong style="font-size:1.1rem;text-transform:capitalize;">${monthName}</strong>
          ${semesterBadge(activeSemesterFilter())}
        </div>
        ${renderMonthGrid(calendarDate)}
      </article>
      <article class="card col-7">
        <h3>Todas las fechas registradas</h3>
        ${renderEventList(events)}
      </article>
      <article class="card col-5">
        <h3>Avisos automáticos internos</h3>
        <p style="color:var(--muted);margin-top:0">La lógica de avisos se aplicará por cuatrimestre. Las notificaciones push del móvil se incorporarán en una fase posterior.</p>
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
    const dayEvents = filteredEvents().filter(event => event.date === dateString);
    cells.push(`
      <div class="calendar-day">
        <span class="day-number">${day}</span>
        ${dayEvents.map(event => `<span class="calendar-dot" title="${escapeHtml(event.title)}">${escapeHtml(event.title)}</span>`).join('')}
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
      ${semesterBadge(activeSemesterFilter())}
    </div>
    <div id="subjectList" class="subject-grid"></div>
  `;
  const renderFiltered = () => {
    const query = $('#subjectSearch').value.toLowerCase().trim();
    const risk = $('#riskFilter').value;
    const filtered = filteredSubjects().filter(subject => {
      const content = `${subject.name} ${subject.code} ${subject.type} ${semesterLabel(subject.semester)}`.toLowerCase();
      return content.includes(query) && (risk === 'all' || subject.risk === risk);
    });
    $('#subjectList').innerHTML = filtered.length
      ? filtered.map(subject => `
        <article class="card subject-card">
          <header>
            <div>
              <h3>${escapeHtml(subject.name)}</h3>
              <p>${escapeHtml(subject.code)} · ${semesterLabel(subject.semester)}</p>
            </div>
            ${riskBadge(subject.risk)}
          </header>
          <div class="subject-meta">
            <span class="badge neutral">${escapeHtml(subject.credits)} ECTS</span>
            <span class="badge primary">${escapeHtml(subject.examType)}</span>
            ${statusBadge(subject.status)}
            ${semesterBadge(subject.semester)}
          </div>
          <p>${escapeHtml(subject.notes)}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div></div>
          <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;">
            <button class="primary-action subject-open" data-subject-id="${escapeHtml(subject.id)}">Abrir ficha</button>
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
    button.addEventListener('click', event => openSubject(event.currentTarget.dataset.subjectId));
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
      <div class="kpi"><span>Código</span><strong>${escapeHtml(subject.code)}</strong></div>
      <div class="kpi"><span>Créditos</span><strong>${escapeHtml(subject.credits)} ECTS</strong></div>
      <div class="kpi"><span>Periodo</span><strong>${semesterLabel(subject.semester)}</strong></div>
      <div class="kpi"><span>Riesgo</span><strong>${escapeHtml(subject.risk)}</strong></div>
    </div>
    <div class="grid-12">
      <article class="card compact col-6">
        <h4>Evaluación</h4>
        <p>${escapeHtml(subject.evaluation)}</p>
        <p><strong>Tipo de examen:</strong> ${escapeHtml(subject.examType)}</p>
      </article>
      <article class="card compact col-6">
        <h4>Estrategia personal</h4>
        <p>${escapeHtml(subject.strategy)}</p>
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
        ${subjectExams.length ? `<div class="list">${subjectExams.map(exam => `<div class="list-item"><div><strong>${escapeHtml(exam.year)} · ${escapeHtml(exam.call)}</strong><p>${escapeHtml(exam.type)}</p><p>${escapeHtml(exam.notes)}</p></div>${statusBadge(exam.status)}</div>`).join('')}</div>` : renderEmptyState()}
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
        <strong>${escapeHtml(material.title)}</strong>
        <p>${escapeHtml(material.kind)} · ${escapeHtml(material.source || 'Sin fuente')} · ${semesterLabel(itemSemester(material))}</p>
        ${material.notes ? `<p>${escapeHtml(material.notes)}</p>` : ''}
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
        <h3>Biblioteca · ${semesterLabel(activeSemesterFilter())}</h3>
        <div class="toolbar"><input id="materialSearch" type="search" placeholder="Buscar materiales..."></div>
        <div id="materialList"></div>
      </article>
    </div>
  `;
  $('#materialForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subjectId = String(formData.get('subjectId'));
    state.materials.push({
      id: cryptoRandomId(),
      title: String(formData.get('title')),
      subjectId,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      kind: String(formData.get('kind')),
      source: String(formData.get('source') || ''),
      status: String(formData.get('status')),
      notes: String(formData.get('notes') || '')
    });
    saveState();
    event.currentTarget.reset();
    renderMaterials();
  });
  const renderFiltered = () => {
    const query = ($('#materialSearch')?.value || '').toLowerCase();
    const filtered = filteredMaterials().filter(material => `${material.title} ${material.kind} ${subjectName(material.subjectId)} ${material.notes}`.toLowerCase().includes(query));
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
        <h3>Histórico de exámenes · ${semesterLabel(activeSemesterFilter())}</h3>
        ${filteredExams().length ? `
          <table class="exam-table">
            <thead><tr><th>Asignatura</th><th>Año</th><th>Convocatoria</th><th>Tipo</th><th>Periodo</th><th>Estado</th></tr></thead>
            <tbody>${filteredExams().map(exam => `
              <tr>
                <td>${escapeHtml(subjectName(exam.subjectId))}<br><small>${escapeHtml(exam.notes || '')}</small></td>
                <td>${escapeHtml(exam.year)}</td>
                <td>${escapeHtml(exam.call)}</td>
                <td>${escapeHtml(exam.type)}</td>
                <td>${semesterBadge(itemSemester(exam))}</td>
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
    const subjectId = String(formData.get('subjectId'));
    state.exams.push({
      id: cryptoRandomId(),
      subjectId,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      year: String(formData.get('year')),
      call: String(formData.get('call')),
      type: String(formData.get('type')),
      status: String(formData.get('status')),
      notes: String(formData.get('notes') || '')
    });
    saveState();
    renderExams();
  });
}

function renderSimulations() {
  const subjects = filteredSubjects();
  const attempts = filteredAttempts();
  $('#simulacros').innerHTML = `
    <div class="grid-12">
      <article class="card col-8">
        <h3>Simulador inicial · ${semesterLabel(activeSemesterFilter())}</h3>
        <p style="color:var(--muted);margin-top:0">Los simulacros rigurosos se activarán cuando hayamos cargado y clasificado preguntas reales de exámenes anteriores.</p>
        <div class="notice">
          <strong>Regla de rigor</strong>
          GRADUS no inventará preguntas oficiales. Cada simulacro deberá indicar si procede de pregunta histórica exacta, variante histórica o patrón documentado.
        </div>
        <div class="subject-grid" style="margin-top:16px">
          ${subjects.length ? subjects.map(subject => `
            <article class="card compact">
              <h4>${escapeHtml(subject.name)}</h4>
              <p>${escapeHtml(subject.examType || 'Pendiente de configurar')}</p>
              <p>${escapeHtml(subject.evaluation || '')}</p>
              ${semesterBadge(subject.semester)}
              <button class="primary-action mock-attempt-btn" data-subject-id="${escapeHtml(subject.id)}" style="margin-top:12px">Registrar simulacro de prueba</button>
            </article>
          `).join('') : renderEmptyState()}
        </div>
      </article>
      <article class="card col-4">
        <h3>Intentos registrados</h3>
        ${renderAttempts(attempts)}
      </article>
    </div>
  `;
  $$('.mock-attempt-btn').forEach(button => {
    button.addEventListener('click', () => {
      const subjectId = button.dataset.subjectId;
      state.attempts.push({
        id: cryptoRandomId(),
        subjectId,
        semester: normalizeSemester(subjectById(subjectId)?.semester),
        date: new Date().toISOString().slice(0, 10),
        title: 'Simulacro de prueba de estructura',
        score: null,
        notes: 'Intento de prueba registrado para comprobar historial.'
      });
      saveState();
      renderSimulations();
    });
  });
}

function renderAttempts(attempts = state.attempts) {
  if (!attempts.length) return renderEmptyState();
  return `<div class="list">${attempts.slice().reverse().map(attempt => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(attempt.title)}</strong>
        <p>${escapeHtml(subjectName(attempt.subjectId))} · ${formatDate(attempt.date)}</p>
        <p>${escapeHtml(attempt.notes)}</p>
      </div>
      <div class="badge-stack">
        ${semesterBadge(itemSemester(attempt))}
        <span class="badge primary">${escapeHtml(attempt.score ?? 'Sin nota')}</span>
      </div>
    </div>
  `).join('')}</div>`;
}

function renderProgress() {
  const subjects = filteredSubjects();
  $('#progreso').innerHTML = `
    <div class="grid-12">
      <article class="card col-12">
        <h3>Progreso por asignatura · ${semesterLabel(activeSemesterFilter())}</h3>
        ${subjects.length ? `
        <table class="data-table">
          <thead><tr><th>Asignatura</th><th>Periodo</th><th>Estado</th><th>Riesgo</th><th>Progreso</th><th>Estrategia</th></tr></thead>
          <tbody>${subjects.map(subject => `
            <tr>
              <td><strong>${escapeHtml(subject.name)}</strong><br><small>${escapeHtml(subject.code)}</small></td>
              <td>${semesterBadge(subject.semester)}</td>
              <td>${statusBadge(subject.status)}</td>
              <td>${riskBadge(subject.risk)}</td>
              <td style="min-width:180px"><div class="progress-track"><div class="progress-fill" style="width:${Number(subject.progress || 0)}%"></div></div><small>${escapeHtml(subject.progress)}%</small></td>
              <td>${escapeHtml(subject.strategy)}</td>
            </tr>
          `).join('')}</tbody>
        </table>` : renderEmptyState()}
      </article>
    </div>
  `;
}

function renderSettings() {
  const { configured } = getSupabaseConfigStatus();
  $('#ajustes').innerHTML = `
    <div class="grid-12">
      <article class="card col-6">
        <h3>Datos y sincronización</h3>
        <p style="color:var(--muted)">GRADUS conserva copia local en el navegador. Si Supabase está configurado y has iniciado sesión, también sincroniza tus datos privados con Row Level Security.</p>
        <div class="list">
          <div class="list-item"><strong>Aplicación</strong><p>${escapeHtml(state.meta.appName)} v${APP_VERSION}</p></div>
          <div class="list-item"><strong>Curso</strong><p>${escapeHtml(state.meta.course)}</p></div>
          <div class="list-item"><strong>Filtro activo</strong><p>${semesterLabel(activeSemesterFilter())}</p></div>
          <div class="list-item"><strong>Supabase</strong><p>${configured ? 'Configurado' : 'Pendiente de configurar en supabase-config.js'}</p></div>
          <div class="list-item"><strong>Última actualización</strong><p>${new Date(state.meta.lastUpdated).toLocaleString('es-ES')}</p></div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
          <button class="secondary-button" id="exportDataBtn">Exportar copia JSON</button>
          <button class="ghost-button" id="syncNowBtn">Sincronizar ahora</button>
          <button class="danger-button" id="resetDataBtn">Restaurar datos iniciales</button>
        </div>
      </article>
      <article class="card col-6">
        <h3>Estructura académica</h3>
        <div class="list">
          <div class="list-item"><strong>Primer cuatrimestre</strong><p>Asignaturas, entregas, exámenes, simulacros y progreso del primer bloque.</p></div>
          <div class="list-item"><strong>Segundo cuatrimestre</strong><p>Asignaturas, PEC, exámenes y simulacros del segundo bloque.</p></div>
          <div class="list-item"><strong>Anuales / TFG</strong><p>Seguimiento continuo, tutoría, borradores, defensa y cronograma propio.</p></div>
          <div class="list-item"><strong>Documentos privados</strong><p>La subida real de manuales y archivos irá en un bucket privado de Supabase en una fase posterior.</p></div>
        </div>
      </article>
    </div>
  `;
  $('#exportDataBtn').addEventListener('click', exportData);
  $('#syncNowBtn').addEventListener('click', () => persistStateToSupabase({ immediate: true }));
  $('#resetDataBtn').addEventListener('click', () => {
    if (!confirm('¿Seguro que quieres restaurar los datos iniciales de GRADUS v0.2?')) return;
    state = normalizeState(DEFAULT_STATE);
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
  return state.subjects
    .map(subject => `<option value="${escapeHtml(subject.id)}">${escapeHtml(subject.name)} · ${semesterLabel(subject.semester)}</option>`)
    .join('');
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
    const subjectId = String(formData.get('subjectId'));
    state.events.push({
      id: cryptoRandomId(),
      title: String(formData.get('title')),
      subjectId,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      type: String(formData.get('type')),
      date: String(formData.get('date')),
      notes: String(formData.get('notes') || '')
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

function setupSemesterFilter() {
  const select = $('#globalSemesterFilter');
  select.value = activeSemesterFilter();
  select.addEventListener('change', () => {
    state.ui.semesterFilter = select.value;
    saveState({ sync: false });
    renderView($('.active-view')?.id || 'inicio');
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

async function init() {
  setupNavigation();
  setupSemesterFilter();
  setupEventDialog();
  setupSubjectDialog();
  setupAuthDialog();
  setupPWA();
  setupSupabaseClient();
  await setupAuth();
  setSessionLabel();
  renderHome();
}

init();
