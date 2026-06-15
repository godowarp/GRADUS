const APP_VERSION = '0.8';
const STORAGE_KEY = 'gradus.v0.8.state';
const LEGACY_STORAGE_KEYS = ['gradus.v0.7.state', 'gradus.v0.6.state', 'gradus.v0.5.state', 'gradus.v0.4.state', 'gradus.v0.3.state', 'gradus.v0.2.state', 'gradus.v0.1.state'];
const MATERIAL_BUCKET = 'gradus-materials';

const SEMESTERS = {
  all: 'Todo el curso',
  primer_cuatrimestre: 'Primer cuatrimestre',
  segundo_cuatrimestre: 'Segundo cuatrimestre',
  anual: 'Anuales / TFG',
  pendiente: 'Pendiente de clasificar'
};


const COURSE_SUBJECT_TEMPLATES = [
  {
    id: 'diseno-curriculo',
    name: 'Diseño, Desarrollo e Innovación del Currículum',
    code: '63022037',
    semester: 'primer_cuatrimestre',
    credits: 6,
    type: 'Obligatoria 4.º',
    status: 'por_configurar',
    risk: 'medio',
    progress: 0,
    examType: 'Pendiente de analizar con guía y exámenes históricos',
    evaluation: 'Pendiente de completar con la guía 2026-2027',
    notes: 'Guía pública disponible en el paquete documental. Manual aportado: Ensayos sobre el currículum. Pendiente de registrar temas, criterios y exámenes tipo.',
    strategy: 'Primer cuatrimestre. Prioridad temprana: revisar guía, extraer sistema de evaluación y construir temas madre o banco de preguntas según el modelo de examen.'
  },
  {
    id: 'evaluacion-centros',
    name: 'Evaluación de Centros y Profesores',
    code: '63024036',
    semester: 'primer_cuatrimestre',
    credits: 6,
    type: 'Obligatoria 4.º',
    status: 'revisado',
    risk: 'alto',
    progress: 12,
    examType: 'Mixto: 15 preguntas tipo test + 1 pregunta de desarrollo',
    evaluation: 'Examen 60% · PEC obligatoria 40% · actividad optativa hasta +1 punto',
    notes: 'Revisión v0.8: el examen incluye test de 15 ítems, desarrollo de 4 puntos, 120 minutos y sin material. La PEC es obligatoria, debe aprobarse con 5 y se pondera al 40%.',
    strategy: 'Primer cuatrimestre. Prioridad alta: preparar test histórico, desarrollo de una cara o dos caras según modelo y PEC obligatoria antes del examen.'
  },
  {
    id: 'practicas-v',
    name: 'Prácticas Profesionales V',
    code: '63024065',
    semester: 'primer_cuatrimestre',
    credits: 6,
    type: 'Obligatoria 4.º',
    status: 'por_configurar',
    risk: 'alto',
    progress: 0,
    examType: 'Sin examen ordinario si la guía confirma evaluación por actividades/prácticas',
    evaluation: 'Pendiente de completar con instrucciones oficiales y cronograma del centro/tutorial',
    notes: 'Debe tener módulo propio de tareas, evidencias, entregas, anexos y control formal.',
    strategy: 'Prioridad alta por dependencia de plazos y documentación. Preparar checklist de evidencias y entregas desde el inicio.'
  },
  {
    id: 'evaluacion-politicas',
    name: 'Evaluación de Políticas y Sistemas Educativos',
    code: '63024088',
    semester: 'primer_cuatrimestre',
    credits: 6,
    type: 'Optativa escogida',
    status: 'por_configurar',
    risk: 'medio',
    progress: 0,
    examType: 'Pendiente de analizar con guía y exámenes históricos',
    evaluation: 'Pendiente de completar con la guía 2026-2027',
    notes: 'Optativa elegida para 4.º. Guía y exámenes históricos disponibles en el paquete documental.',
    strategy: 'Primer cuatrimestre. Conviene detectar cuanto antes si el examen repite patrones y si admite preparación por temas madre.'
  },
  {
    id: 'educacion-economia-desarrollo',
    name: 'Educación, Economía y Desarrollo',
    code: '63014167',
    semester: 'primer_cuatrimestre',
    credits: 6,
    type: 'Optativa escogida',
    status: 'por_configurar',
    risk: 'medio',
    progress: 0,
    examType: 'Pendiente de analizar con guía y exámenes históricos',
    evaluation: 'Pendiente de completar con la guía 2026-2027',
    notes: 'Optativa elegida. Guía pública y exámenes históricos disponibles en el paquete documental.',
    strategy: 'Primer cuatrimestre. Crear mapa de conceptos económicos básicos, desarrollo y educación antes de entrar en simulacros.'
  },
  {
    id: 'evaluacion-programas',
    name: 'Evaluación de Programas',
    code: '63024059',
    semester: 'segundo_cuatrimestre',
    credits: 6,
    type: 'Obligatoria 4.º',
    status: 'por_configurar',
    risk: 'medio',
    progress: 0,
    examType: 'Pendiente de analizar con guía y exámenes históricos',
    evaluation: 'Pendiente de completar con la guía 2026-2027',
    notes: 'Segundo cuatrimestre. Guía pública y exámenes históricos disponibles en el paquete documental.',
    strategy: 'Segundo cuatrimestre. Trabajar con lógica de programas, criterios, evaluación y casos prácticos si aparecen en exámenes.'
  },
  {
    id: 'funcion-pedagogica',
    name: 'Formación y Actualización en la Función Pedagógica',
    code: '6302402-',
    semester: 'segundo_cuatrimestre',
    credits: 6,
    type: 'Obligatoria 4.º',
    status: 'por_configurar',
    risk: 'medio',
    progress: 0,
    examType: 'Pendiente de analizar con guía y exámenes históricos',
    evaluation: 'Pendiente de completar con la guía 2026-2027',
    notes: 'El código aparece así en la guía extraída. Conviene verificarlo visualmente en el documento oficial antes de cerrar la ficha.',
    strategy: 'Segundo cuatrimestre. Identificar temas recurrentes y posibles preguntas de desarrollo o test antes de mayo.'
  },
  {
    id: 'tfg',
    name: 'Trabajo Fin de Grado',
    code: '63024013',
    semester: 'segundo_cuatrimestre',
    credits: 6,
    type: 'TFG',
    status: 'por_configurar',
    risk: 'alto',
    progress: 0,
    examType: 'Trabajo escrito y defensa, según normativa y cronograma vigente',
    evaluation: 'Pendiente de completar con línea, tutoría, cronograma, rúbrica y normativa 2026-2027',
    notes: 'Incluye cronograma, líneas, normativa, proceso de valoración, declaración de autoría e integridad académica con IA en el paquete documental.',
    strategy: 'Segundo cuatrimestre con seguimiento especial. Abrir módulo propio de tema, tutoría, borradores, bibliografía, revisión formal y defensa.'
  },
  {
    id: 'bases',
    name: 'Bases del Aprendizaje y Educación',
    code: '63901098',
    semester: 'segundo_cuatrimestre',
    credits: 6,
    type: 'Formación básica pendiente',
    status: 'revisado',
    risk: 'alto',
    progress: 15,
    examType: 'Test verdadero/falso: 40 ítems, 120 minutos, sin material',
    evaluation: 'Examen 2/3 · PEC 1/3 · fórmula P=(A-E)/4 · aprobado sin PEC exige 7,5 en examen',
    notes: 'Revisión v0.8: guía, manual y exámenes 2026 incorporados como base para simulacros de verdadero/falso. PEC en abril; la PEC no se entrega en septiembre, pero computa si está hecha.',
    strategy: 'Prioridad alta por antecedente de suspensión. Estudio diario con recuperación activa: bloques breves de verdadero/falso, corrección inmediata y lista de errores por unidad.'
  },
  {
    id: 'metodos',
    name: 'Métodos y Diseños de Investigación en Educación',
    code: '63022095',
    semester: 'segundo_cuatrimestre',
    credits: 6,
    type: 'Obligatoria pendiente',
    status: 'revisado',
    risk: 'alto',
    progress: 15,
    examType: 'Mixto: 20 test (12 teoría + 8 práctica) + 1 desarrollo',
    evaluation: 'Examen 80% · PEC-2 20% · PEC-1 autoevaluable sin peso · errores test restan E/2',
    notes: 'Revisión v0.8: el test combina 12 ítems teóricos y 8 prácticos, permite formulario y calculadora, y el desarrollo solo se califica si se aprueba la prueba objetiva.',
    strategy: 'Prioridad alta por antecedente de suspensión. Separar teoría, cálculo práctico y desarrollo de una página; registrar errores de planteamiento y errores de cálculo.'
  }
];

const COURSE_MATERIAL_TEMPLATES = [
  { id: 'mat-guia-diseno-curriculo', subjectId: 'diseno-curriculo', semester: 'primer_cuatrimestre', title: 'Guía pública 2026-2027 · Diseño, Desarrollo e Innovación del Currículum', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de subir como archivo privado o vincular a ficha.' },
  { id: 'mat-manual-curriculum', subjectId: 'diseno-curriculo', semester: 'primer_cuatrimestre', title: 'Ensayos sobre el currículum', kind: 'Manual', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Material disponible en el ZIP aportado. Pendiente de revisión académica.' },
  { id: 'mat-guia-evaluacion-centros', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', title: 'Guía pública 2026-2027 · Evaluación de Centros y Profesores', kind: 'Guía', source: 'Paquete documental aportado', status: 'revisado', notes: 'Sistema de evaluación extraído: examen mixto 60%, PEC obligatoria 40%, actividad optativa +1.' },
  { id: 'mat-guia-practicas-v', subjectId: 'practicas-v', semester: 'primer_cuatrimestre', title: 'Guía pública 2026-2027 · Prácticas Profesionales V', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de extraer entregas, evidencias y cronograma.' },
  { id: 'mat-guia-politicas', subjectId: 'evaluacion-politicas', semester: 'primer_cuatrimestre', title: 'Guía pública 2026-2027 · Evaluación de Políticas y Sistemas Educativos', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de análisis de examen y evaluación.' },
  { id: 'mat-guia-economia', subjectId: 'educacion-economia-desarrollo', semester: 'primer_cuatrimestre', title: 'Guía pública 2026-2027 · Educación, Economía y Desarrollo', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de análisis de examen y evaluación.' },
  { id: 'mat-guia-programas', subjectId: 'evaluacion-programas', semester: 'segundo_cuatrimestre', title: 'Guía pública 2026-2027 · Evaluación de Programas', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de análisis de examen y evaluación.' },
  { id: 'mat-guia-funcion', subjectId: 'funcion-pedagogica', semester: 'segundo_cuatrimestre', title: 'Guía pública 2026-2027 · Formación y Actualización en la Función Pedagógica', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Pendiente de revisar código, evaluación y exámenes.' },
  { id: 'mat-guia-tfg', subjectId: 'tfg', semester: 'segundo_cuatrimestre', title: 'Guía pública 2026-2027 · Trabajo Fin de Grado', kind: 'Guía', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Complementar con normativa, cronograma y líneas.' },
  { id: 'mat-tfg-cronograma', subjectId: 'tfg', semester: 'segundo_cuatrimestre', title: 'Cronograma TFG 2025-2026', kind: 'TFG', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Útil como referencia provisional hasta cronograma 2026-2027.' },
  { id: 'mat-tfg-integridad-ia', subjectId: 'tfg', semester: 'segundo_cuatrimestre', title: 'Guía para asegurar la integridad académica con IA', kind: 'Normativa', source: 'Paquete documental aportado', status: 'pendiente_analisis', notes: 'Relevante para declaración de autoría, uso de IA y revisión ética.' },
  { id: 'mat-guia-bases', subjectId: 'bases', semester: 'segundo_cuatrimestre', title: 'Guía pública 2026-2027 · Bases del Aprendizaje y Educación', kind: 'Guía', source: 'Paquete documental aportado', status: 'revisado', notes: 'Sistema de evaluación extraído: test V/F de 40 ítems, fórmula P=(A-E)/4, examen 2/3 y PEC 1/3.' },
  { id: 'mat-manual-bases', subjectId: 'bases', semester: 'segundo_cuatrimestre', title: 'Manual · Bases del Aprendizaje', kind: 'Manual', source: 'Paquete documental aportado', status: 'revisado', notes: 'Manual disponible; usado como referencia para validar preguntas de entrenamiento seleccionadas.' },
  { id: 'mat-guia-metodos', subjectId: 'metodos', semester: 'segundo_cuatrimestre', title: 'Guía pública 2026-2027 · Métodos y Diseños de Investigación en Educación', kind: 'Guía', source: 'Paquete documental aportado', status: 'revisado', notes: 'Ficha revisada: examen mixto 20 test + desarrollo, PEC-2 20% y PEC-1 autoevaluable sin peso.' }
];

const COURSE_EXAM_SUMMARIES = [
  { id: 'hist-diseno-curriculo', subjectId: 'diseno-curriculo', semester: 'primer_cuatrimestre', year: '2012-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'pendiente_analisis', notes: '48 exámenes detectados para el código 63022037. Pendiente de registrar preguntas, temas y patrones.' },
  { id: 'hist-evaluacion-centros', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', year: '2014-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'revisado_parcial', notes: '40 exámenes detectados para el código 63024036. Modelos 2025 incorporados como simulacros autocorregibles de test + desarrollo.' },
  { id: 'hist-politicas', subjectId: 'evaluacion-politicas', semester: 'primer_cuatrimestre', year: '2014-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'pendiente_analisis', notes: '40 exámenes detectados para el código 63024088. Pendiente de análisis.' },
  { id: 'hist-economia', subjectId: 'educacion-economia-desarrollo', semester: 'primer_cuatrimestre', year: '2013-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'pendiente_analisis', notes: '44 exámenes detectados para el código 63014167. Pendiente de análisis.' },
  { id: 'hist-programas', subjectId: 'evaluacion-programas', semester: 'segundo_cuatrimestre', year: '2014-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'pendiente_analisis', notes: '38 exámenes detectados para el código 63024059. Pendiente de análisis.' },
  { id: 'hist-funcion', subjectId: 'funcion-pedagogica', semester: 'segundo_cuatrimestre', year: '2014-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'pendiente_analisis', notes: '38 exámenes detectados para el código 6302402. Pendiente de confirmar código y analizar.' },
  { id: 'hist-tfg', subjectId: 'tfg', semester: 'segundo_cuatrimestre', year: '2025-2026', call: 'Normativa y proceso', type: 'TFG', status: 'pendiente_analisis', notes: 'No es banco de examen: agrupa cronograma, líneas, normativa, declaración de autoría y proceso de valoración.' },
  { id: 'hist-bases', subjectId: 'bases', semester: 'segundo_cuatrimestre', year: '2012-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'revisado_parcial', notes: '54 exámenes detectados para el código 63901098. Modelos 2026 incorporados como simulacros autocorregibles V/F.' },
  { id: 'hist-metodos', subjectId: 'metodos', semester: 'segundo_cuatrimestre', year: '2012-2026', call: 'Paquete histórico recibido', type: 'Histórico', status: 'revisado_parcial', notes: '45 exámenes detectados para el código 63022095. Modelos 2025 y 2026 incorporados como simulacros autocorregibles de teoría + desarrollo guiado.' }
];


const COURSE_QUESTION_TEMPLATES = [
  { id: 'bases-26j1-q01', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Neurobiología básica', statement: 'El axón constituye el centro metabólico de la neurona.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El centro metabólico de la neurona es el soma o cuerpo celular, no el axón.', sourceLabel: 'E639010980-26J1, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'baja', notes: 'Pregunta histórica exacta normalizada ortográficamente.' },
  { id: 'bases-26j1-q02', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sinapsis', statement: 'En las sinapsis eléctricas, el impulso nervioso pasa directamente a través de uniones comunicantes.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Las sinapsis eléctricas funcionan mediante uniones comunicantes o gap junctions.', sourceLabel: 'E639010980-26J1, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q03', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Meninges', statement: 'El espacio subaracnoideo se encuentra entre la aracnoides y la duramadre.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El espacio subaracnoideo se sitúa entre aracnoides y piamadre.', sourceLabel: 'E639010980-26J1, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q04', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sistema nervioso', statement: 'El núcleo rojo forma parte del bulbo raquídeo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El núcleo rojo se localiza en el mesencéfalo.', sourceLabel: 'E639010980-26J1, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q05', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Diencéfalo', statement: 'El epitálamo controla el sistema endocrino.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El control endocrino se asocia principalmente al hipotálamo.', sourceLabel: 'E639010980-26J1, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q06', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Cerebelo', statement: 'Los dos hemisferios del cerebelo están unidos por el cuerpo calloso.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El cuerpo calloso une los hemisferios cerebrales, no los hemisferios del cerebelo.', sourceLabel: 'E639010980-26J1, ítem 6', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q07', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Emoción', statement: 'La amígdala interviene de manera decisiva en la expresión de las emociones.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La amígdala tiene un papel central en el procesamiento emocional.', sourceLabel: 'E639010980-26J1, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q08', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Periodos sensibles', statement: 'La adquisición de los aprendizajes fuera de su correspondiente periodo sensible requerirá más tiempo y mayor cantidad de recursos cognitivos.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Fuera del periodo sensible el aprendizaje suele ser posible, pero menos eficiente.', sourceLabel: 'E639010980-26J1, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q09', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Desarrollo prenatal', statement: 'El estado nutricional de las gestantes constituye un factor clave para garantizar tanto la salud materna como el adecuado crecimiento del feto.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La nutrición prenatal es un factor de protección para madre y feto.', sourceLabel: 'E639010980-26J1, ítem 9', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q10', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Estrés y aprendizaje', statement: 'La ansiedad y el estrés activan la respuesta neuroendocrina del organismo, incrementándose los niveles de cortisol en el torrente sanguíneo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La respuesta de estrés implica activación neuroendocrina y liberación de cortisol.', sourceLabel: 'E639010980-26J1, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q11', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Desarrollo prenatal', statement: 'Las drogas legales e ilegales suelen atravesar fácilmente la membrana placentaria.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Muchas sustancias de abuso atraviesan la placenta y pueden afectar al desarrollo fetal.', sourceLabel: 'E639010980-26J1, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q12', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Ambientes de aprendizaje', statement: 'La evidencia científica respalda la necesidad de enriquecer de manera artificial los ambientes de aprendizaje.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El principio relevante es evitar ambientes empobrecidos y favorecer experiencias ricas y significativas, no artificializar el aprendizaje.', sourceLabel: 'E639010980-26J1, ítem 12', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q13', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sueño', statement: 'El sueño paradójico se caracteriza por la presencia de ondas lentas y de gran amplitud en el electroencefalograma.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El sueño paradójico o REM no se caracteriza por ondas lentas de gran amplitud.', sourceLabel: 'E639010980-26J1, ítem 13', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q14', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Ejercicio y cognición', statement: 'El ejercicio físico de tipo aeróbico contribuye a mejorar los procesos de aprendizaje y memoria.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La actividad aeróbica se asocia a beneficios cognitivos y neuroplásticos.', sourceLabel: 'E639010980-26J1, ítem 14', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q15', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Emoción', statement: 'Las emociones tienen un importante valor adaptativo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Las emociones orientan la acción, la atención y la adaptación al entorno.', sourceLabel: 'E639010980-26J1, ítem 15', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q16', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Atención', statement: 'La atención es un constructo unidimensional.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La atención comprende distintos componentes y redes funcionales.', sourceLabel: 'E639010980-26J1, ítem 16', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j1-q17', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Neurodesarrollo', statement: 'Durante el desarrollo embrionario, la producción neuronal no sigue la misma secuencia temporal en todas las áreas del sistema nervioso.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La neurogénesis y maduración siguen ritmos diferentes según regiones.', sourceLabel: 'E639010980-26J1, ítem 17', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q18', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Desarrollo prenatal', statement: 'La edad y el nivel educativo de las mujeres embarazadas son variables explicativas del consumo de drogas durante el embarazo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La literatura educativa y sanitaria considera edad y nivel educativo como variables asociadas a conductas de riesgo durante la gestación.', sourceLabel: 'E639010980-26J1, ítem 18', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q19', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Mielinización', statement: 'La mielinización de las diferentes regiones del sistema nervioso sigue un patrón temporal ordenado y predecible.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La mielinización sigue un curso madurativo secuenciado.', sourceLabel: 'E639010980-26J1, ítem 19', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j1-q20', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Periodos sensibles', statement: 'La mayoría de los periodos sensibles de aprendizaje tiene lugar durante la adolescencia.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'Buena parte de los periodos sensibles se sitúan en etapas tempranas del desarrollo.', sourceLabel: 'E639010980-26J1, ítem 20', isExactHistorical: true, frequency: 1, difficulty: 'media' },

  { id: 'bases-26j2-q01', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Neurobiología básica', statement: 'En el cerebro, las células gliales son menos numerosas que las neuronas.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'Las células gliales no son menos numerosas que las neuronas.', sourceLabel: 'E639010980-26J2, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q02', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sinapsis', statement: 'En las sinapsis eléctricas, las membranas de las neuronas presinápticas y postsinápticas están separadas por la hendidura sináptica.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La hendidura sináptica es característica de la sinapsis química; en la eléctrica hay acoplamiento por uniones comunicantes.', sourceLabel: 'E639010980-26J2, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q03', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Meninges', statement: 'La duramadre es una membrana protectora de tejido conjuntivo que se encuentra íntimamente adherida al encéfalo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La membrana íntimamente adherida al encéfalo es la piamadre.', sourceLabel: 'E639010980-26J2, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q04', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Diencéfalo', statement: 'El hipotálamo forma parte del diencéfalo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'El hipotálamo es una de las estructuras principales del diencéfalo.', sourceLabel: 'E639010980-26J2, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q05', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sueño', statement: 'La glándula pineal está implicada en la regulación de los ciclos sueño-vigilia.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La glándula pineal participa en la secreción de melatonina y en ritmos sueño-vigilia.', sourceLabel: 'E639010980-26J2, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q06', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sustancia blanca', statement: 'Las fibras de asociación conectan regiones corticales del mismo hemisferio.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Las fibras de asociación conectan áreas corticales dentro de un mismo hemisferio.', sourceLabel: 'E639010980-26J2, ítem 6', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q07', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Memoria', statement: 'La formación hipocampal está especialmente implicada en los procesos de aprendizaje y de memoria.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'El hipocampo tiene un papel clave en aprendizaje y memoria declarativa.', sourceLabel: 'E639010980-26J2, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q08', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Neurogénesis', statement: 'El periodo más intenso de neurogénesis tiene lugar durante el primer año de vida extrauterina.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La neurogénesis más intensa se produce durante el desarrollo prenatal.', sourceLabel: 'E639010980-26J2, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q09', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Desarrollo prenatal', statement: 'Las necesidades nutricionales del feto y de la gestante pueden ser satisfechas con una dieta variada y equilibrada.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Una dieta variada y equilibrada es el principio general de cobertura nutricional durante la gestación.', sourceLabel: 'E639010980-26J2, ítem 9', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q10', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Estrés prenatal', statement: 'El efecto pernicioso del estrés prenatal parece depender del tipo de estrés, el momento de la gestación o el sexo del feto.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Los efectos del estrés prenatal varían por intensidad, momento, tipo de estrés y características del feto.', sourceLabel: 'E639010980-26J2, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q11', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Desarrollo prenatal', statement: 'El Trastorno del Espectro Alcohólico Fetal se asocia a la exposición postnatal al alcohol.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El TEAF se asocia a exposición prenatal al alcohol.', sourceLabel: 'E639010980-26J2, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q12', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Ambientes de aprendizaje', statement: 'Los resultados de la investigación neurocientífica advierten sobre las consecuencias nefastas de los ambientes empobrecidos en el desarrollo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'Los ambientes empobrecidos perjudican el desarrollo y el aprendizaje.', sourceLabel: 'E639010980-26J2, ítem 12', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q13', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Sueño', statement: 'Las ondas registradas mediante EEG durante el sueño profundo son de baja amplitud, similares a las que se registran en vigilia.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El sueño profundo se caracteriza por ondas lentas de mayor amplitud.', sourceLabel: 'E639010980-26J2, ítem 13', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q14', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Nutrición y cognición', statement: 'Los ácidos grasos Omega 3 y Omega 6 son los únicos nutrientes necesarios para un buen funcionamiento cognitivo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El funcionamiento cognitivo requiere un conjunto amplio de nutrientes y condiciones saludables.', sourceLabel: 'E639010980-26J2, ítem 14', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q15', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Emoción y memoria', statement: 'Las emociones ejercen un papel fundamental tanto en los procesos de aprendizaje como en los de memoria.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'La emoción modula atención, codificación, consolidación y recuperación.', sourceLabel: 'E639010980-26J2, ítem 15', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q16', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Emoción', statement: 'Las neuronas espejo podrían ser el mecanismo neural responsable del control emocional.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'Las neuronas espejo se relacionan más con acción, imitación y comprensión social que con el control emocional como tal.', sourceLabel: 'E639010980-26J2, ítem 16', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q17', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Neurodesarrollo', statement: 'La corteza prefrontal es una de las primeras regiones del cerebro en completar su desarrollo.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La corteza prefrontal completa su maduración de forma tardía.', sourceLabel: 'E639010980-26J2, ítem 19', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q18', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Adolescencia y sueño', statement: 'Adelantar la hora de inicio de las clases durante Educación Secundaria parece mejorar los resultados educativos de los estudiantes.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'La evidencia suele apoyar retrasar, no adelantar, el inicio de las clases en adolescentes.', sourceLabel: 'E639010980-26J2, ítem 22', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'bases-26j2-q19', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Adultez', statement: 'Una vez alcanzada la etapa adulta, el cerebro deja de experimentar cambios estructurales y funcionales.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'B', explanation: 'El cerebro mantiene plasticidad estructural y funcional durante la adultez.', sourceLabel: 'E639010980-26J2, ítem 23', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'bases-26j2-q20', subjectId: 'bases', semester: 'segundo_cuatrimestre', questionType: 'Verdadero/Falso', topic: 'Envejecimiento', statement: 'El entrenamiento cognitivo puede contribuir a contrarrestar el deterioro cognitivo asociado al envejecimiento.', options: ['A. Verdadero', 'B. Falso'], correctAnswer: 'A', explanation: 'El entrenamiento cognitivo puede actuar como factor de estimulación y mantenimiento funcional.', sourceLabel: 'E639010980-26J2, ítem 24', isExactHistorical: true, frequency: 1, difficulty: 'baja' },

  { id: 'metodos-26j1-q01', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Método científico', statement: 'El método inductivo trata de:', options: ['A. Extraer conclusiones mediante la observación repetida de hechos concretos.', 'B. Sacar una determinada conclusión partiendo de leyes generales.', 'C. Extraer conclusiones que van de lo general a lo particular.'], correctAnswer: 'A', explanation: 'El razonamiento inductivo avanza desde observaciones particulares hacia conclusiones generales.', sourceLabel: 'E630220950-26J1, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'metodos-26j1-q02', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Ética', statement: 'El código ético de la APA está organizado en secciones. ¿Cuál de estas opciones recoge la relación más completa?', options: ['A. Resolver problemas éticos, competencia, relaciones humanas, privacidad y confidencialidad, publicidad y otras declaraciones públicas, mantenimiento de registros y tarifas, educación y entrenamiento, investigación y publicación, evaluación y terapia.', 'B. Resolver problemas éticos, competencia, relaciones humanas, privacidad y confidencialidad, publicidad y otras declaraciones públicas, mantenimiento de registros y tarifas, educación y entrenamiento, investigación y publicación, evaluación.', 'C. Resolver problemas éticos, competencia, relaciones humanas, privacidad y confidencialidad, publicidad y otras declaraciones públicas, mantenimiento de registros y tarifas, educación y entrenamiento, investigación y publicación y terapia.'], correctAnswer: 'A', explanation: 'La opción A incluye evaluación y terapia, completando la enumeración.', sourceLabel: 'E630220950-26J1, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q03', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Informe de investigación', statement: 'Uno de los apartados más importantes de un informe cuantitativo es el análisis crítico, compuesto por:', options: ['A. Implicaciones y recomendaciones, conclusiones, limitaciones y prospectivas.', 'B. Implicaciones y recomendaciones, limitaciones, validez externa y validez interna.', 'C. Tratamiento estadístico, validez externa y validez interna.'], correctAnswer: 'A', explanation: 'El cierre crítico integra implicaciones, conclusiones, limitaciones y líneas prospectivas.', sourceLabel: 'E630220950-26J1, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q04', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Cualitativa', statement: '¿Qué criterios se emplean para determinar si conviene usar grupos focales en una investigación cualitativa?', options: ['A. Para investigaciones relacionadas con normas, significados y procesos grupales.', 'B. Para investigaciones relacionadas con normas, significados y trabajos de campo.', 'C. Para investigaciones relacionadas con estudios de caso, significados y trabajos de campo.'], correctAnswer: 'A', explanation: 'Los grupos focales son pertinentes para explorar significados, normas y procesos de interacción grupal.', sourceLabel: 'E630220950-26J1, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q05', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Análisis de contenido', statement: 'La definición de Bardin sobre técnicas de análisis de las comunicaciones mediante procedimientos sistemáticos y objetivos hace referencia a:', options: ['A. El análisis de contenido.', 'B. La triangulación.', 'C. Técnicas biográficas.'], correctAnswer: 'A', explanation: 'La formulación corresponde al análisis de contenido.', sourceLabel: 'E630220950-26J1, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'metodos-26j1-q06', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Cambio educativo', statement: '¿Qué autora ha analizado el cambio educativo en torno a mejora escolar, desarrollo de la escuela, innovación educativa y reforma?', options: ['A. Gimeno (2012).', 'B. Sancho Gil (2018).', 'C. Calvo (2017).'], correctAnswer: 'B', explanation: 'La opción histórica del examen vincula esa formulación con Sancho Gil (2018).', sourceLabel: 'E630220950-26J1, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q07', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Innovación educativa', statement: 'Según Martínez Sanahuja (2019), una innovación educativa debe ser siempre:', options: ['A. Planificada, evaluable, flexible, integradora, sostenible económicamente.', 'B. Realista y factible, planificada, evaluable, flexible, integradora, sostenible en el tiempo.', 'C. Realista y factible, planificada, evaluable, flexible, integradora, sostenible económicamente.'], correctAnswer: 'B', explanation: 'La sostenibilidad relevante se formula en términos de continuidad en el tiempo.', sourceLabel: 'E630220950-26J1, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q08', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Problema de investigación', statement: 'Las normas para que el planteamiento o marco teórico de un informe de investigación esté planteado adecuadamente son:', options: ['A. Enunciarse en forma de afirmación, ser resoluble, formularse operacionalmente y mensurables sus variables, construirse en una situación relevante.', 'B. Enunciarse en forma de pregunta, formularse operacionalmente y mensurables sus hipótesis, construirse en una situación relevante.', 'C. Definirlo en términos de relación entre dos o más variables, enunciarse en forma de pregunta, ser resoluble, construirse en una situación relevante.'], correctAnswer: 'C', explanation: 'La formulación correcta del problema exige relación entre variables, forma de pregunta, resolubilidad y relevancia contextual.', sourceLabel: 'E630220950-26J1, ítem 9', isExactHistorical: true, frequency: 1, difficulty: 'alta' },
  { id: 'metodos-26j1-q09', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Historias de vida', statement: '¿Cuál de las siguientes opciones pertenece a etapas o fases de las historias de vida?', options: ['A. Recogida previa de información sobre el tema, determinar objetivos, seleccionar informantes, recoger información de los informantes.', 'B. Preparar las técnicas de recogida de información, transcribir la información y elaborar la historia de vida, análisis e interpretación.', 'C. Ambas son correctas.'], correctAnswer: 'C', explanation: 'Ambas opciones recogen fases compatibles dentro del proceso de elaboración de historias de vida.', sourceLabel: 'E630220950-26J1, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-26j1-q10', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Métodos mixtos', statement: 'Según López-Aguado (2018), ¿qué aspectos son especialmente relevantes en el enfoque de los métodos mixtos?', options: ['A. Pluralidad, contextualización y complementariedad de paradigmas.', 'B. Contextualización, sistematicidad y complementariedad de paradigmas.', 'C. Pluralidad, contextualización, sistematicidad y complementariedad de paradigmas.'], correctAnswer: 'C', explanation: 'La opción completa integra pluralidad, contextualización, sistematicidad/validez y complementariedad.', sourceLabel: 'E630220950-26J1, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'media' },

  { id: 'metodos-25j1-q01', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Conocimiento científico', statement: 'La tipología del conocimiento depende de:', options: ['A. Los objetivos, el objeto y el método utilizado.', 'B. La fuente de la que surge, el objeto que pretende estudiar y el método utilizado.', 'C. La fuente, los objetivos y el procedimiento utilizado.'], correctAnswer: 'B', explanation: 'La clasificación atiende a fuente, objeto y método.', sourceLabel: 'E630220950-25J1, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-25j1-q02', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Modalidades de investigación', statement: 'Si nos centramos en la finalidad, las modalidades de investigación educativa pueden ser:', options: ['A. Básica, aplicada y evaluativa.', 'B. Básica, longitudinal y evaluativa.', 'C. Básica, longitudinal y aplicada.'], correctAnswer: 'A', explanation: 'Según finalidad, la clasificación habitual distingue investigación básica, aplicada y evaluativa.', sourceLabel: 'E630220950-25J1, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'metodos-25j1-q03', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Métodos cuantitativos', statement: '¿Cuál es el objetivo fundamental de los métodos cuantitativos en la investigación empírica?', options: ['A. Que todas las fases del proceso estén bien desarrolladas y justificadas.', 'B. Obtener datos para dar respuesta a problemas educativos identificados por el investigador.', 'C. Determinar la relación entre una variable dependiente y una variable independiente dentro de una población determinada.'], correctAnswer: 'C', explanation: 'La opción más específica recoge el propósito relacional/explicativo propio del enfoque cuantitativo del examen.', sourceLabel: 'E630220950-25J1, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-25j1-q04', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Investigación cualitativa', statement: 'Los objetivos de la investigación cualitativa son:', options: ['A. Describir y explicar las relaciones y comprender las normas o comportamientos de un grupo social.', 'B. Describir y explicar las relaciones y describir las características de una población.', 'C. Analizar experiencias individuales y describir las características de un grupo social.'], correctAnswer: 'A', explanation: 'El foco cualitativo recae en comprensión de significados, normas y comportamientos contextualizados.', sourceLabel: 'E630220950-25J1, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-25j1-q05', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Métodos mixtos', statement: 'La primera revista en publicar artículos con investigaciones mixtas fue:', options: ['A. Journal of Mixed Methods Research.', 'B. Quality and Quantity.', 'C. Field Methods.'], correctAnswer: 'B', explanation: 'El modelo histórico del examen señala Quality and Quantity.', sourceLabel: 'E630220950-25J1, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'alta' },
  { id: 'metodos-25j1-q06', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Encuesta', statement: '¿Cuáles son algunos pasos que deben seguirse para realizar una encuesta?', options: ['A. Definir el problema de investigación, la información necesaria y el objeto de estudio.', 'B. Definir los objetivos de la encuesta, decidir la información necesaria y establecer los recursos disponibles.', 'C. Definir el problema de investigación y establecer criterios de selección de ítems.'], correctAnswer: 'B', explanation: 'La preparación de una encuesta exige objetivos, información necesaria y recursos disponibles.', sourceLabel: 'E630220950-25J1, ítem 6', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-25j1-q07', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Redacción científica', statement: 'Para una buena redacción científica se requiere:', options: ['A. Dominar varios idiomas.', 'B. Entender y aplicar los principios fundamentales de la redacción científica.', 'C. Enfocarse en el trabajo y establecer los principios fundamentales de una investigación científica.'], correctAnswer: 'B', explanation: 'La clave evaluada es la aplicación de principios de redacción científica.', sourceLabel: 'E630220950-25J1, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'metodos-25j1-q08', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Innovación', statement: '¿Cuáles son los tres rasgos básicos de la innovación?', options: ['A. Novedad, continuidad y resultado práctico.', 'B. Bondad, aceptación del cambio e integración.', 'C. Novedad, aceptación del cambio y resultado práctico.'], correctAnswer: 'C', explanation: 'Los rasgos básicos evaluados son novedad, aceptación del cambio y resultado práctico.', sourceLabel: 'E630220950-25J1, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'metodos-25j1-q09', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Paradigmas', statement: 'Los paradigmas de investigación son positivista, naturalista y...', options: ['A. Natural.', 'B. Sociocrítico.', 'C. Interpretativo.'], correctAnswer: 'B', explanation: 'La tríada habitual es positivista, naturalista/interpretativo y sociocrítico.', sourceLabel: 'E630220950-25J1, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'metodos-25j1-q10', subjectId: 'metodos', semester: 'segundo_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Cuestionario', statement: 'Una ventaja importante del cuestionario es:', options: ['A. Procedimiento relativamente barato y fácil de aplicar, naturaleza impersonal, garantía de anonimato y gran alcance.', 'B. Procedimiento barato y fácil que recoge información estandarizada y facilita el análisis cuantitativo.', 'C. Procedimiento barato y fácil que recoge información estandarizada.'], correctAnswer: 'A', explanation: 'La opción A recoge el conjunto más completo de ventajas enumeradas.', sourceLabel: 'E630220950-25J1, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'media' },

  { id: 'centros-a25f1-q01', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Democratización de la evaluación', statement: '¿Qué afirmación define mejor la democratización de la evaluación?', options: ['A. Evaluación que trata por igual a todos los sujetos y objetos evaluados.', 'B. Evaluación cuyos resultados se comunican de forma transparente a la opinión pública.', 'C. Evaluación no solo al servicio de patrocinadores y que considera necesidades, visión y valores de grupos e instituciones implicadas.'], correctAnswer: 'C', explanation: 'La democratización implica considerar a los grupos concernidos, no solo a quienes patrocinan la evaluación.', sourceLabel: 'E630240360A25F1, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q02', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Evaluación docente', statement: 'La gran disyuntiva al plantear un sistema de evaluación del desempeño docente es:', options: ['A. Méritos académicos y formación inicial frente a comportamiento docente en aula.', 'B. Participación voluntaria u obligatoria del profesorado.', 'C. Orientación de control sobre el profesorado u orientación de desarrollo profesional docente.'], correctAnswer: 'C', explanation: 'El eje de fondo es control/rendición de cuentas frente a desarrollo profesional.', sourceLabel: 'E630240360A25F1, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q03', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Accountability', statement: '¿Qué es en esencia la accountability?', options: ['A. Asunción de responsabilidades profesionales ante quienes reciben, financian y proveen el servicio.', 'B. Imposición administrativa para justificar decisiones presupuestarias.', 'C. Modalidad de autoevaluación institucional de centros educativos.'], correctAnswer: 'A', explanation: 'Accountability remite a responsabilidad, rendición de cuentas y obligación de responder ante la comunidad.', sourceLabel: 'E630240360A25F1, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q04', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Mejora escolar', statement: '¿Qué enfoque se sugiere para trabajar con las escuelas en lugar de estrategias prescriptivas?', options: ['A. Estrategias competitivas.', 'B. Modos horizontales de trabajo.', 'C. Estrategias de control.'], correctAnswer: 'B', explanation: 'La mejora escolar requiere cooperación y horizontalidad, no prescripción vertical.', sourceLabel: 'E630240360A25F1, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q05', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Evaluación externa', statement: '¿Qué se considera una precondición para responder mejor a las evaluaciones externas?', options: ['A. Procesos internos de rendición de cuentas.', 'B. Aumentar la burocracia.', 'C. Reducir la autonomía escolar.'], correctAnswer: 'A', explanation: 'Los procesos internos preparan al centro para interpretar y utilizar evaluaciones externas.', sourceLabel: 'E630240360A25F1, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q06', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Validez', statement: '¿Qué se entiende por validez interna en el proceso de evaluación de la docencia?', options: ['A. Capacidad de generalizar a otros contextos.', 'B. Consistencia de los diferentes elementos que componen el proceso de evaluación.', 'C. Utilidad de la evaluación para los estudiantes.'], correctAnswer: 'B', explanation: 'La validez interna se relaciona con coherencia y consistencia del proceso evaluativo.', sourceLabel: 'E630240360A25F1, ítem 6', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q07', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Calidad docente', statement: '¿Qué se debe considerar al definir el perfil de calidad docente?', options: ['A. Cantidad de años de experiencia.', 'B. Competencias, habilidades y actitudes del profesorado.', 'C. Número de publicaciones del docente.'], correctAnswer: 'B', explanation: 'Un perfil de calidad docente integra competencias, habilidades y actitudes profesionales.', sourceLabel: 'E630240360A25F1, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q08', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Equidad', statement: '¿Qué concepto es fundamental para garantizar la igualdad de oportunidades en la educación?', options: ['A. Competitividad.', 'B. Equidad.', 'C. Exclusividad.'], correctAnswer: 'B', explanation: 'La equidad es condición de igualdad real de oportunidades.', sourceLabel: 'E630240360A25F1, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q09', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Indicadores', statement: '¿Qué se considera un indicador de resultados en el sistema educativo?', options: ['A. Número de ordenadores en las escuelas.', 'B. Tasa de abandono escolar.', 'C. Ratio profesor/alumno.'], correctAnswer: 'B', explanation: 'La tasa de abandono escolar es un indicador de resultado, no de recurso o contexto.', sourceLabel: 'E630240360A25F1, ítem 9', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q10', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Tipos de evaluación', statement: '¿Qué tipo de evaluación se realiza una vez concluido el programa o acción?', options: ['A. Evaluación formativa.', 'B. Evaluación diagnóstica.', 'C. Evaluación sumativa.'], correctAnswer: 'C', explanation: 'La evaluación sumativa se realiza al final para valorar resultados.', sourceLabel: 'E630240360A25F1, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-a25f1-q11', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Evaluación docente', statement: '¿Por qué es importante evaluar al profesorado en ejercicio?', options: ['A. Porque la sociedad debe saber cómo se realiza la equidad educativa.', 'B. Porque la falta de un sistema riguroso hurta a la opinión pública su derecho a saber qué pasa dentro de las aulas.', 'C. Porque de ello dependen los incentivos del profesorado.'], correctAnswer: 'B', explanation: 'El examen vincula la evaluación docente con transparencia pública sobre lo que ocurre en las aulas.', sourceLabel: 'E630240360A25F1, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q12', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Escuelas eficaces', statement: 'La diferencia fundamental entre Escuelas Eficaces y Mejora de la Escuela es que...', options: ['A. El primer movimiento usa los resultados de aprendizaje como criterio exclusivo de éxito y el segundo se centra más en procesos.', 'B. El primero ignora las condiciones de los centros que posibilitan el éxito y el segundo se centra en identificarlas.', 'C. El primero está impulsado desde administraciones y el segundo nace exclusivamente de las bases.'], correctAnswer: 'A', explanation: 'La distinción clásica contrapone énfasis en resultados frente a procesos de mejora.', sourceLabel: 'E630240360A25F1, ítem 12', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q13', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Desempeño docente', statement: 'La evaluación del desempeño docente se fundamenta en:', options: ['A. Dominio de saberes y dominio de conductas, junto a sus propuestas resultantes.', 'B. La práctica que el docente desempeña en el aula.', 'C. La formación específica que consigue antes y después de su práctica.'], correctAnswer: 'A', explanation: 'El modelo del examen destaca saberes, conductas y propuestas resultantes.', sourceLabel: 'E630240360A25F1, ítem 13', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q14', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Educación superior', statement: 'En evaluación de la educación superior europea, ¿cuáles son procedimientos habituales?', options: ['A. Creación de agencias nacionales de evaluación y acreditación.', 'B. Creación de unidades internas combinadas con agencias europeas.', 'C. Autoinforme de la institución, visita de expertos externos e informe final.'], correctAnswer: 'C', explanation: 'El procedimiento típico combina autoinforme, visita externa e informe final.', sourceLabel: 'E630240360A25F1, ítem 14', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-a25f1-q15', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'ANECA', statement: '¿Qué es la ANECA?', options: ['A. Agencia Europea para la evaluación de la calidad universitaria.', 'B. Agencia Española para evaluación de centros educativos y acreditación de currículos escolares.', 'C. Agencia Española para evaluación de la calidad y acreditación en las universidades.'], correctAnswer: 'C', explanation: 'ANECA es la Agencia Nacional de Evaluación de la Calidad y Acreditación universitaria.', sourceLabel: 'E630240360A25F1, ítem 15', isExactHistorical: true, frequency: 1, difficulty: 'baja' },

  { id: 'centros-b25f2-q01', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Democratización de la evaluación', statement: '¿Qué afirmación define mejor la democratización de la evaluación?', options: ['A. Evaluación cuyo propósito es impartir justicia.', 'B. Evaluación no solo al servicio de patrocinadores y que considera necesidades, visión y valores de grupos e instituciones implicadas.', 'C. Evaluación que trata por igual a todos con instrumentos y criterios comunes.'], correctAnswer: 'B', explanation: 'La democratización incorpora a los colectivos concernidos por la evaluación.', sourceLabel: 'E630240360B25F2, ítem 1', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q02', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Indicadores educativos', statement: '¿Cuál es el mejor ejemplo de indicador educativo útil para decisiones en un centro y en un país?', options: ['A. Tasa de abandono escolar temprano.', 'B. Periódicos vendidos por habitante y año.', 'C. Renta per cápita.'], correctAnswer: 'A', explanation: 'La tasa de abandono escolar temprano es un indicador educativo de gran valor decisional.', sourceLabel: 'E630240360B25F2, ítem 2', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-b25f2-q03', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Mejora escolar', statement: '¿Qué componente clave para una mejora escolar exitosa señalan Sleegers y Leithwood?', options: ['A. Evaluación externa.', 'B. Aprendizaje docente en el contexto de trabajo.', 'C. Memorización de contenidos.'], correctAnswer: 'B', explanation: 'La mejora escolar se vincula al aprendizaje profesional situado del profesorado.', sourceLabel: 'E630240360B25F2, ítem 3', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q04', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Comunidad profesional', statement: '¿Qué modelo educativo se menciona como el más coherente y actual?', options: ['A. Escuela tradicional.', 'B. Escuela competitiva.', 'C. Escuela como Comunidad de Aprendizaje Profesional.'], correctAnswer: 'C', explanation: 'El modelo de comunidad profesional de aprendizaje es el enfoque más coherente con mejora y aprendizaje institucional.', sourceLabel: 'E630240360B25F2, ítem 4', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-b25f2-q05', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Validez de constructo', statement: '¿A qué se refiere la validez de constructo en evaluación de la docencia?', options: ['A. Capacidad para predecir rendimiento futuro.', 'B. Grado en que los indicadores responden al planteamiento teórico que guía la definición de calidad.', 'C. Facilidad de uso de los instrumentos.'], correctAnswer: 'B', explanation: 'La validez de constructo exige coherencia entre indicadores y constructo teórico evaluado.', sourceLabel: 'E630240360B25F2, ítem 5', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q06', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Validez', statement: '¿Qué estrategia ayuda a asegurar la validez durante el proceso de evaluación?', options: ['A. Cuidar la flexibilidad de la planificación.', 'B. Utilizar únicamente métodos cuantitativos.', 'C. Evitar la participación de estudiantes.'], correctAnswer: 'A', explanation: 'Una planificación flexible ayuda a adaptar el proceso y sostener su validez contextual.', sourceLabel: 'E630240360B25F2, ítem 6', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q07', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Calidad', statement: '¿Qué tipo de calidad se centra en satisfacer necesidades y expectativas razonables de los clientes?', options: ['A. Calidad como fenómeno excepcional.', 'B. Calidad como perfección o mérito.', 'C. Calidad como adecuación a propósitos.'], correctAnswer: 'C', explanation: 'La calidad como adecuación a propósitos atiende a necesidades, expectativas y finalidad del servicio.', sourceLabel: 'E630240360B25F2, ítem 7', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q08', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Equidad', statement: '¿Qué ámbito de análisis de la equidad educativa se refiere a inserción productiva y desarrollo social y cultural del alumnado?', options: ['A. Pre-sistema.', 'B. Intra-sistema.', 'C. Post-sistema.'], correctAnswer: 'C', explanation: 'El post-sistema mira los resultados posteriores y la inserción social, productiva y cultural.', sourceLabel: 'E630240360B25F2, ítem 8', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q09', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Mejora de la escuela', statement: '¿Qué enfoque considera la escuela como comunidad de aprendizaje y organización capaz de aprender?', options: ['A. Rendición de cuentas.', 'B. Mejora de la escuela.', 'C. Evaluación sumativa.'], correctAnswer: 'B', explanation: 'El enfoque de mejora de la escuela concibe los centros como organizaciones que aprenden.', sourceLabel: 'E630240360B25F2, ítem 9', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-b25f2-q10', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Evaluación respondente', statement: '¿Qué autor planteó que los estudios de evaluación deben responder a las demandas de la comunidad?', options: ['A. Michael Fullan.', 'B. Robert Stake.', 'C. Helen Simons.'], correctAnswer: 'B', explanation: 'Robert Stake se asocia con la evaluación respondente.', sourceLabel: 'E630240360B25F2, ítem 10', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q11', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Autoevaluación', statement: 'La autoevaluación de un centro surge:', options: ['A. A iniciativa de la Administración educativa, como control.', 'B. A iniciativa de planteamientos estatutarios del centro, como medida instaurada.', 'C. A iniciativa del propio centro y de sus integrantes, para conocer logros y deficiencias.'], correctAnswer: 'C', explanation: 'La autoevaluación institucional nace del propio centro para conocerse y mejorar.', sourceLabel: 'E630240360B25F2, ítem 11', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-b25f2-q12', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Autoevaluación institucional', statement: 'La autoevaluación institucional de centros educativos...', options: ['A. Tiene sentido como contraste de una evaluación externa y como proceso interno centrado en prioridades de la escuela.', 'B. Tiene sentido solo como contraste de evaluación externa.', 'C. Tiene sentido solo como proceso interno orientado a la mejora.'], correctAnswer: 'A', explanation: 'Puede servir tanto para contrastar evaluación externa como para orientar procesos internos de mejora.', sourceLabel: 'E630240360B25F2, ítem 12', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q13', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Indicadores', statement: 'Un indicador educativo debe:', options: ['A. Medir hechos y cuestiones perdurables del sistema.', 'B. Recogerse siempre en tablas de doble entrada.', 'C. Tener datos interpretables de forma distinta según el perfil de quien analiza.'], correctAnswer: 'A', explanation: 'Un buen indicador mide aspectos relevantes y sostenidos del sistema.', sourceLabel: 'E630240360B25F2, ítem 13', isExactHistorical: true, frequency: 1, difficulty: 'media' },
  { id: 'centros-b25f2-q14', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'ANECA', statement: '¿Qué es la ANECA?', options: ['A. Agencia Europea para la evaluación de la calidad universitaria.', 'B. Agencia Española para evaluación de centros educativos y acreditación de nuevos currículos escolares.', 'C. Agencia Española para evaluación de la calidad y acreditación en las universidades.'], correctAnswer: 'C', explanation: 'ANECA es la agencia española de calidad y acreditación universitaria.', sourceLabel: 'E630240360B25F2, ítem 14', isExactHistorical: true, frequency: 1, difficulty: 'baja' },
  { id: 'centros-b25f2-q15', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', questionType: 'Test 3 opciones', topic: 'Evaluación centrada en la escuela', statement: '¿Qué principio debe cumplir la evaluación centrada en la escuela?', options: ['A. El alumnado y sus resultados no deberían ser el único objeto de evaluación escolar.', 'B. Solo debe llevarse a cabo por profesores sin agentes externos.', 'C. Profesorado y actuaciones didácticas deberían ser el único objeto de evaluación.'], correctAnswer: 'A', explanation: 'La evaluación centrada en la escuela debe ser amplia y no reducirse a resultados del alumnado.', sourceLabel: 'E630240360B25F2, ítem 15', isExactHistorical: true, frequency: 1, difficulty: 'baja' }
];

const SIMULATION_BLUEPRINTS = [
  { id: 'sim-bases-26j1', subjectId: 'bases', semester: 'segundo_cuatrimestre', title: 'Bases · Simulacro V/F 2026 modelo 1', source: 'E639010980-26J1', examMode: 'Entrenamiento histórico autocorregible', durationMinutes: 60, scoring: 'bases_tf', description: '20 ítems verdadero/falso seleccionados del modelo 1 de junio 2026. La nota se escala sobre 10 con la fórmula oficial adaptada: aciertos menos errores.', questionIds: ['bases-26j1-q01','bases-26j1-q02','bases-26j1-q03','bases-26j1-q04','bases-26j1-q05','bases-26j1-q06','bases-26j1-q07','bases-26j1-q08','bases-26j1-q09','bases-26j1-q10','bases-26j1-q11','bases-26j1-q12','bases-26j1-q13','bases-26j1-q14','bases-26j1-q15','bases-26j1-q16','bases-26j1-q17','bases-26j1-q18','bases-26j1-q19','bases-26j1-q20'] },
  { id: 'sim-bases-26j2', subjectId: 'bases', semester: 'segundo_cuatrimestre', title: 'Bases · Simulacro V/F 2026 modelo 2', source: 'E639010980-26J2', examMode: 'Entrenamiento histórico autocorregible', durationMinutes: 60, scoring: 'bases_tf', description: '20 ítems verdadero/falso del modelo 2 de junio 2026. Sirve para recuperación activa rápida y lista de errores.', questionIds: ['bases-26j2-q01','bases-26j2-q02','bases-26j2-q03','bases-26j2-q04','bases-26j2-q05','bases-26j2-q06','bases-26j2-q07','bases-26j2-q08','bases-26j2-q09','bases-26j2-q10','bases-26j2-q11','bases-26j2-q12','bases-26j2-q13','bases-26j2-q14','bases-26j2-q15','bases-26j2-q16','bases-26j2-q17','bases-26j2-q18','bases-26j2-q19','bases-26j2-q20'] },
  { id: 'sim-metodos-26j1', subjectId: 'metodos', semester: 'segundo_cuatrimestre', title: 'Métodos · Teoría 2026 + desarrollo', source: 'E630220950-26J1', examMode: 'Mixto parcial autocorregible', durationMinutes: 45, scoring: 'metodos_objective', developmentMax: 2, developmentPrompt: 'Desarrollo histórico: La etnografía. Redacta una respuesta de una página con definición, finalidad, rasgos, proceso y utilidad educativa.', description: 'Bloque teórico autocorregible de 10 ítems + desarrollo guiado. Los cálculos prácticos se incorporarán después de verificar plantillas.', questionIds: ['metodos-26j1-q01','metodos-26j1-q02','metodos-26j1-q03','metodos-26j1-q04','metodos-26j1-q05','metodos-26j1-q06','metodos-26j1-q07','metodos-26j1-q08','metodos-26j1-q09','metodos-26j1-q10'] },
  { id: 'sim-metodos-25j1', subjectId: 'metodos', semester: 'segundo_cuatrimestre', title: 'Métodos · Teoría 2025 + desarrollo', source: 'E630220950-25J1', examMode: 'Mixto parcial autocorregible', durationMinutes: 45, scoring: 'metodos_objective', developmentMax: 2, developmentPrompt: 'Desarrollo guiado: plantea un informe breve sobre métodos mixtos, indicando finalidad, integración de enfoques y utilidad en investigación educativa.', description: 'Bloque teórico autocorregible de 10 ítems + desarrollo guiado. Replica el estilo de la primera parte del examen.', questionIds: ['metodos-25j1-q01','metodos-25j1-q02','metodos-25j1-q03','metodos-25j1-q04','metodos-25j1-q05','metodos-25j1-q06','metodos-25j1-q07','metodos-25j1-q08','metodos-25j1-q09','metodos-25j1-q10'] },
  { id: 'sim-centros-a25f1', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', title: 'Evaluación de Centros · Modelo A 2025', source: 'E630240360A25F1', examMode: 'Mixto autocorregible', durationMinutes: 75, scoring: 'centros_mixed', developmentMax: 4, developmentPrompt: 'Pregunta de desarrollo histórica: Modalidades de evaluación en un centro educativo como objeto de evaluación.', description: '15 ítems tipo test con penalización oficial y desarrollo guiado de 4 puntos.', questionIds: ['centros-a25f1-q01','centros-a25f1-q02','centros-a25f1-q03','centros-a25f1-q04','centros-a25f1-q05','centros-a25f1-q06','centros-a25f1-q07','centros-a25f1-q08','centros-a25f1-q09','centros-a25f1-q10','centros-a25f1-q11','centros-a25f1-q12','centros-a25f1-q13','centros-a25f1-q14','centros-a25f1-q15'] },
  { id: 'sim-centros-b25f2', subjectId: 'evaluacion-centros', semester: 'primer_cuatrimestre', title: 'Evaluación de Centros · Modelo B 2025', source: 'E630240360B25F2', examMode: 'Mixto autocorregible', durationMinutes: 75, scoring: 'centros_mixed', developmentMax: 4, developmentPrompt: 'Pregunta de desarrollo histórica: claves de los aspectos organizativos de un proceso de autoevaluación.', description: '15 ítems tipo test con penalización oficial y desarrollo guiado de 4 puntos.', questionIds: ['centros-b25f2-q01','centros-b25f2-q02','centros-b25f2-q03','centros-b25f2-q04','centros-b25f2-q05','centros-b25f2-q06','centros-b25f2-q07','centros-b25f2-q08','centros-b25f2-q09','centros-b25f2-q10','centros-b25f2-q11','centros-b25f2-q12','centros-b25f2-q13','centros-b25f2-q14','centros-b25f2-q15'] }
];

const OBSOLETE_INITIAL_SUBJECT_IDS = new Set(['direccion', 'orientacion-profesional', 'optativa-1', 'optativa-2']);

const DEFAULT_STATE = {
  meta: {
    appName: 'GRADUS',
    course: '2026-2027',
    ownerLabel: 'Pedagogía UNED',
    lastUpdated: new Date().toISOString(),
    version: APP_VERSION
  },
  ui: {
    semesterFilter: 'all',
    focusMode: false
  },
  subjects: COURSE_SUBJECT_TEMPLATES.map(subject => ({ ...subject })),
  events: [
    {
      id: cryptoRandomId(),
      title: 'Revisión inicial de guías y cronograma 1.º cuatrimestre',
      subjectId: 'diseno-curriculo',
      semester: 'primer_cuatrimestre',
      type: 'Aviso',
      date: '2026-09-15',
      notes: 'Bloque inicial para cerrar evaluación, materiales mínimos y calendario de Diseño, Evaluación de Centros, Prácticas V y optativas.'
    },
    {
      id: cryptoRandomId(),
      title: 'Primer bloque de simulacros del 1.º cuatrimestre',
      subjectId: 'evaluacion-centros',
      semester: 'primer_cuatrimestre',
      type: 'Repaso',
      date: '2026-12-10',
      notes: 'Fecha estratégica provisional para iniciar simulacros antes de exámenes del primer cuatrimestre.'
    },
    {
      id: cryptoRandomId(),
      title: 'Revisión de guías y materiales del 2.º cuatrimestre',
      subjectId: 'evaluacion-programas',
      semester: 'segundo_cuatrimestre',
      type: 'Aviso',
      date: '2027-02-15',
      notes: 'Abrir planificación de Evaluación de Programas, Función Pedagógica, TFG, Bases y Métodos.'
    },
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
      title: 'Primer bloque de simulacros del 2.º cuatrimestre',
      subjectId: 'bases',
      semester: 'segundo_cuatrimestre',
      type: 'Repaso',
      date: '2027-05-12',
      notes: 'Fecha estratégica provisional para Bases, Métodos y resto de asignaturas del segundo cuatrimestre.'
    }
  ],  materials: COURSE_MATERIAL_TEMPLATES.map(material => ({ ...material })),
  exams: COURSE_EXAM_SUMMARIES.map(exam => ({ ...exam })),
  attempts: [],
  questions: COURSE_QUESTION_TEMPLATES.map(question => ({ ...question })),
  gradeRules: {}
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

function slugify(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48) || `asignatura-${Date.now()}`;
}

function normalizeSemester(value) {
  const normalized = String(value || '').toLowerCase().trim();
  if (['primer_cuatrimestre', 'primer semestre', 'semestre 1', '1', '1º', 'primero'].includes(normalized)) return 'primer_cuatrimestre';
  if (['segundo_cuatrimestre', 'segundo semestre', 'semestre 2', '2', '2º', 'segundo'].includes(normalized)) return 'segundo_cuatrimestre';
  if (['anual', 'tfg', 'especial'].includes(normalized)) return normalized === 'especial' ? 'anual' : normalized;
  return 'pendiente';
}

function semesterLabel(value) {
  if (value === 'all') return SEMESTERS.all;
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

function sanitizeFileName(value) {
  const name = String(value || 'documento')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 120);
  return name || `documento-${Date.now()}`;
}

function formatFileSize(bytes) {
  const value = Number(bytes || 0);
  if (!value) return 'Sin tamaño';
  if (value < 1024) return `${value} B`;
  if (value < 1024 ** 2) return `${(value / 1024).toFixed(1)} KB`;
  return `${(value / (1024 ** 2)).toFixed(1)} MB`;
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


function mergeById(existingItems, templateItems, options = {}) {
  const removeIds = options.removeIds || new Set();
  const map = new Map();
  existingItems
    .filter(item => !removeIds.has(item.id))
    .forEach(item => map.set(item.id, { ...item }));

  templateItems.forEach(template => {
    const current = map.get(template.id);
    if (!current) {
      map.set(template.id, { ...template });
      return;
    }
    map.set(template.id, {
      ...template,
      ...current,
      name: template.name,
      code: template.code,
      semester: template.semester,
      credits: template.credits,
      type: template.type,
      examType: current.examType && !String(current.examType).includes('Pendiente') ? current.examType : template.examType,
      evaluation: current.evaluation && !String(current.evaluation).includes('Pendiente') ? current.evaluation : template.evaluation,
      notes: current.notes && !String(current.notes).includes('Ficha creada como estructura inicial') ? current.notes : template.notes,
      strategy: current.strategy && !String(current.strategy).includes('Pendiente') ? current.strategy : template.strategy
    });
  });

  const knownOrder = new Map(templateItems.map((item, index) => [item.id, index]));
  return Array.from(map.values()).sort((a, b) => {
    const orderA = knownOrder.has(a.id) ? knownOrder.get(a.id) : 999;
    const orderB = knownOrder.has(b.id) ? knownOrder.get(b.id) : 999;
    if (orderA !== orderB) return orderA - orderB;
    return String(a.name || '').localeCompare(String(b.name || ''), 'es');
  });
}

function reconcileAcademicTemplates(stateToReconcile) {
  stateToReconcile.subjects = mergeById(stateToReconcile.subjects || [], COURSE_SUBJECT_TEMPLATES, { removeIds: OBSOLETE_INITIAL_SUBJECT_IDS }).map(normalizeSubject);
  stateToReconcile.materials = mergeById(stateToReconcile.materials || [], COURSE_MATERIAL_TEMPLATES).map(material => ({
    ...material,
    semester: itemSemester(material)
  }));
  stateToReconcile.exams = mergeById(stateToReconcile.exams || [], COURSE_EXAM_SUMMARIES).map(exam => ({
    ...exam,
    semester: itemSemester(exam)
  }));
  stateToReconcile.questions = mergeById(stateToReconcile.questions || [], COURSE_QUESTION_TEMPLATES).map(question => ({
    ...question,
    semester: itemSemester(question),
    frequency: Number(question.frequency || 1)
  }));
  return stateToReconcile;
}

function applyUiMode() {
  document.body.classList.toggle('focus-mode', Boolean(state.ui?.focusMode));
  const button = $('#focusModeBtn');
  if (button) {
    button.classList.toggle('active', Boolean(state.ui?.focusMode));
    button.setAttribute('aria-pressed', String(Boolean(state.ui?.focusMode)));
    button.textContent = state.ui?.focusMode ? 'Foco activo' : 'Modo foco';
  }
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
    attempts: Array.isArray(rawState?.attempts) ? rawState.attempts : [],
    questions: Array.isArray(rawState?.questions) ? rawState.questions : [],
    gradeRules: rawState?.gradeRules && typeof rawState.gradeRules === 'object' ? rawState.gradeRules : {}
  };

  merged.events = merged.events.map(event => ({ ...event, id: event.id || cryptoRandomId(), semester: itemSemester(event) }));
  merged.materials = merged.materials.map(material => ({
    ...material,
    id: material.id || cryptoRandomId(),
    semester: itemSemester(material),
    filePath: material.filePath || null,
    fileName: material.fileName || null,
    fileSize: Number(material.fileSize || 0),
    mimeType: material.mimeType || null,
    uploadedAt: material.uploadedAt || null
  }));
  merged.exams = merged.exams.map(exam => ({ ...exam, id: exam.id || cryptoRandomId(), semester: itemSemester(exam) }));
  merged.attempts = merged.attempts.map(attempt => ({ ...attempt, id: attempt.id || cryptoRandomId(), semester: itemSemester(attempt) }));
  merged.questions = merged.questions.map(question => ({ ...question, id: question.id || cryptoRandomId(), semester: itemSemester(question), frequency: Number(question.frequency || 1) }));
  merged.ui.semesterFilter = SEMESTERS[merged.ui.semesterFilter] ? merged.ui.semesterFilter : 'all';
  merged.ui.focusMode = Boolean(merged.ui.focusMode);
  reconcileAcademicTemplates(merged);
  return merged;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) || LEGACY_STORAGE_KEYS.map(key => localStorage.getItem(key)).find(Boolean);
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

function filteredQuestions() {
  return state.questions.filter(matchesSemester);
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
  if (value === 'all') return `<span class="badge neutral">${SEMESTERS.all}</span>`;
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
    file_path: material.filePath || null,
    file_name: material.fileName || null,
    file_size: Number(material.fileSize || 0) || null,
    mime_type: material.mimeType || null,
    uploaded_at: material.uploadedAt || null
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
    filePath: row.file_path,
    fileName: row.file_name,
    fileSize: row.file_size,
    mimeType: row.mime_type,
    uploadedAt: row.uploaded_at
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

function rowFromQuestion(question) {
  return {
    user_id: authSession.user.id,
    id: question.id,
    subject_id: question.subjectId,
    exam_id: question.examId || null,
    semester: itemSemester(question),
    question_type: question.questionType || 'pendiente',
    topic: question.topic || null,
    statement: question.statement,
    options: question.options || null,
    correct_answer: question.correctAnswer || null,
    explanation: question.explanation || null,
    source_label: question.sourceLabel || null,
    is_exact_historical: Boolean(question.isExactHistorical ?? true),
    frequency: Number(question.frequency || 1),
    difficulty: question.difficulty || null,
    notes: question.notes || null
  };
}

function questionFromRow(row) {
  return {
    id: row.id,
    subjectId: row.subject_id,
    examId: row.exam_id,
    semester: row.semester,
    questionType: row.question_type,
    topic: row.topic,
    statement: row.statement,
    options: row.options,
    correctAnswer: row.correct_answer,
    explanation: row.explanation,
    sourceLabel: row.source_label,
    isExactHistorical: row.is_exact_historical,
    frequency: row.frequency,
    difficulty: row.difficulty,
    notes: row.notes
  };
}

async function loadFromSupabase() {
  if (!supabaseClient || !authSession) return;
  try {
    const [subjectsResult, eventsResult, materialsResult, examsResult, attemptsResult, questionsResult] = await Promise.all([
      supabaseClient.from('subjects').select('*').order('semester').order('name'),
      supabaseClient.from('academic_events').select('*').order('date'),
      supabaseClient.from('materials').select('*').order('created_at', { ascending: false }),
      supabaseClient.from('exams').select('*').order('year', { ascending: false }),
      supabaseClient.from('simulation_attempts').select('*').order('date', { ascending: false }),
      supabaseClient.from('exam_questions').select('*').order('created_at', { ascending: false })
    ]);

    const firstError = [subjectsResult, eventsResult, materialsResult, examsResult, attemptsResult, questionsResult].find(result => result.error)?.error;
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
      attempts: attemptsResult.data.map(attemptFromRow),
      questions: questionsResult.data.map(questionFromRow)
    });
    saveLocalState();
    scheduleSupabaseSync();
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
    if (state.questions.length) operations.push(supabaseClient.from('exam_questions').upsert(state.questions.map(rowFromQuestion), { onConflict: 'user_id,id' }));
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
    planificacion: 'Planificación',
    notas: 'Notas',
    progreso: 'Progreso',
    ajustes: 'Ajustes'
  };
  $('#viewTitle').textContent = titles[viewId] || 'GRADUS';
  renderView(viewId);
  applyUiMode();
}

function upcomingEvents(limit = 6) {
  return [...filteredEvents()]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .filter(event => daysUntil(event.date) >= -1)
    .slice(0, limit);
}


function allVisibleEventsForPlanning() {
  return [...filteredEvents()].sort((a, b) => new Date(a.date) - new Date(b.date));
}

function eventPhase(days) {
  if (days < 0) return { severity: 'danger', label: 'Vencido', phase: 'vencido' };
  if (days === 0) return { severity: 'danger', label: 'Hoy', phase: 'hoy' };
  if (days <= 3) return { severity: 'danger', label: `${days} días`, phase: 'critico' };
  if (days <= 7) return { severity: 'warning', label: `${days} días`, phase: 'cierre' };
  if (days <= 15) return { severity: 'warning', label: `${days} días`, phase: 'serio' };
  if (days <= 30) return { severity: 'success', label: `${days} días`, phase: 'preparacion' };
  return { severity: 'neutral', label: `${days} días`, phase: 'futuro' };
}

function recommendedActionForEvent(event, subject, days) {
  const type = String(event.type || '').toLowerCase();
  const progress = Number(subject?.progress || 0);
  if (days < 0) return 'Revisar si sigue pendiente, registrar resultado o reprogramar inmediatamente.';
  if (type.includes('examen')) {
    if (days <= 3) return 'Hacer repaso final, revisar errores frecuentes y realizar al menos un simulacro breve.';
    if (days <= 7) return 'Cerrar temario prioritario y realizar un simulacro con tiempo real.';
    if (days <= 15) return 'Programar dos bloques de estudio y un simulacro parcial.';
    return 'Planificar lectura, banco de preguntas y calendario de repasos.';
  }
  if (type.includes('entrega')) {
    if (days <= 3) return 'Cerrar versión final, revisar formato, criterios y copia de seguridad.';
    if (days <= 7) return 'Completar borrador y dejar margen para revisión formal.';
    return 'Dividir el trabajo en lectura, esquema, redacción, revisión y entrega.';
  }
  if (type.includes('repaso')) return 'Realizar recuperación activa y registrar dudas o errores.';
  if (progress < 25 && days <= 15) return 'Abrir ficha de asignatura y fijar un bloque mínimo de avance esta semana.';
  return 'Revisar la fecha y comprobar si requiere preparación previa.';
}

function buildAcademicAlerts(limit = 12) {
  const alerts = [];
  const events = allVisibleEventsForPlanning();

  events.forEach(event => {
    const days = daysUntil(event.date);
    if (days > 30) return;
    const subject = subjectById(event.subjectId);
    const phase = eventPhase(days);
    alerts.push({
      id: `event-${event.id}`,
      severity: phase.severity,
      label: phase.label,
      title: event.title,
      subtitle: `${subjectName(event.subjectId)} · ${event.type} · ${formatDate(event.date)}`,
      text: recommendedActionForEvent(event, subject, days),
      days,
      subjectId: event.subjectId,
      source: 'event'
    });
  });

  filteredSubjects().forEach(subject => {
    const progress = Number(subject.progress || 0);
    const risk = String(subject.risk || 'medio');
    const subjectEvents = events.filter(event => event.subjectId === subject.id && daysUntil(event.date) >= 0).sort((a, b) => daysUntil(a.date) - daysUntil(b.date));
    const nearest = subjectEvents[0];
    const nearestDays = nearest ? daysUntil(nearest.date) : null;
    if (risk === 'alto' && progress < 30) {
      alerts.push({
        id: `risk-${subject.id}`,
        severity: 'danger',
        label: 'Riesgo alto',
        title: subject.name,
        subtitle: nearest ? `Próxima fecha: ${nearest.title} · ${formatDate(nearest.date)}` : 'Sin fecha próxima registrada',
        text: 'Conviene abrir un bloque de intervención: revisar guía, completar materiales mínimos y fijar primera sesión de estudio.',
        days: nearestDays ?? 999,
        subjectId: subject.id,
        source: 'risk'
      });
    } else if (progress < 15 && nearestDays !== null && nearestDays <= 30) {
      alerts.push({
        id: `progress-${subject.id}`,
        severity: 'warning',
        label: 'Progreso bajo',
        title: subject.name,
        subtitle: `Quedan ${nearestDays} días para ${nearest.title}`,
        text: 'El progreso registrado es bajo para la proximidad de la fecha. Programa una sesión corta de diagnóstico.',
        days: nearestDays,
        subjectId: subject.id,
        source: 'progress'
      });
    }
  });

  return alerts
    .sort((a, b) => severityWeight(a.severity) - severityWeight(b.severity) || a.days - b.days || a.title.localeCompare(b.title, 'es'))
    .slice(0, limit);
}

function severityWeight(severity) {
  return { danger: 0, warning: 1, success: 2, neutral: 3 }[severity] ?? 4;
}

function subjectPriorityScore(subject) {
  const progress = Number(subject.progress || 0);
  const riskScore = { alto: 45, medio: 25, bajo: 8 }[subject.risk] ?? 15;
  const events = state.events.filter(event => event.subjectId === subject.id && matchesSemester(event));
  const upcoming = events.map(event => daysUntil(event.date)).filter(days => days >= 0).sort((a, b) => a - b)[0];
  const dateScore = upcoming == null ? 5 : upcoming <= 3 ? 45 : upcoming <= 7 ? 35 : upcoming <= 15 ? 24 : upcoming <= 30 ? 14 : 5;
  const progressScore = Math.max(0, 35 - Math.round(progress / 3));
  const questions = state.questions.filter(question => question.subjectId === subject.id).length;
  const evidenceScore = questions ? 0 : 8;
  return riskScore + dateScore + progressScore + evidenceScore;
}

function buildStudyPlan() {
  return filteredSubjects()
    .map(subject => {
      const score = subjectPriorityScore(subject);
      const progress = Number(subject.progress || 0);
      let minutes = 25;
      if (score >= 95) minutes = 120;
      else if (score >= 75) minutes = 90;
      else if (score >= 55) minutes = 60;
      else if (score >= 35) minutes = 40;
      const focus = progress < 10 ? 'diagnóstico inicial y organización de materiales' : progress < 35 ? 'lectura guiada y esquema base' : progress < 65 ? 'preguntas históricas y recuperación activa' : 'simulacro, repaso de errores y cierre';
      return { subject, score, minutes, focus };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function renderAlertList(alerts) {
  if (!alerts.length) return renderEmptyState();
  return `<div class="list alert-list">${alerts.map(alert => `
    <div class="list-item alert-item ${escapeHtml(alert.severity)}">
      <div>
        <strong>${escapeHtml(alert.title)}</strong>
        <p>${escapeHtml(alert.subtitle)}</p>
        <p>${escapeHtml(alert.text)}</p>
        ${alert.subjectId ? `<div class="inline-actions"><button class="tiny-button subject-open" data-subject-id="${escapeHtml(alert.subjectId)}">Abrir asignatura</button></div>` : ''}
      </div>
      <div class="badge-stack"><span class="badge ${escapeHtml(alert.severity)}">${escapeHtml(alert.label)}</span></div>
    </div>
  `).join('')}</div>`;
}

function renderStudyPlanList(plan) {
  if (!plan.length) return renderEmptyState();
  return `<div class="list plan-list">${plan.map(item => `
    <div class="list-item plan-item">
      <div>
        <strong>${escapeHtml(item.subject.name)}</strong>
        <p>${semesterLabel(item.subject.semester)} · ${escapeHtml(item.minutes)} min recomendados · ${escapeHtml(item.focus)}</p>
        <p>${escapeHtml(item.subject.strategy || 'Pendiente de estrategia específica.')}</p>
        <div class="inline-actions">
          <button class="tiny-button" data-add-study-event="${escapeHtml(item.subject.id)}" data-study-minutes="${escapeHtml(item.minutes)}">Añadir sesión</button>
          <button class="tiny-button subject-open" data-subject-id="${escapeHtml(item.subject.id)}">Abrir ficha</button>
        </div>
      </div>
      <div class="badge-stack">
        ${riskBadge(item.subject.risk)}
        <span class="badge neutral">Prioridad ${escapeHtml(item.score)}</span>
      </div>
    </div>
  `).join('')}</div>`;
}

function addStudyEvent(subjectId, minutes) {
  const subject = subjectById(subjectId);
  if (!subject) return;
  const today = new Date().toISOString().slice(0, 10);
  state.events.push({
    id: cryptoRandomId(),
    title: `Sesión de estudio · ${minutes} min`,
    subjectId: subject.id,
    semester: normalizeSemester(subject.semester),
    type: 'Repaso',
    date: today,
    notes: `Sesión generada desde Planificación para ${subject.name}. Objetivo: avanzar con foco realista y registrar dudas.`
  });
  saveState();
  renderPlanning();
}

function buildSemesterDiagnosis() {
  return Object.entries(SEMESTERS)
    .filter(([key]) => key !== 'all')
    .map(([key, label]) => {
      const subjects = state.subjects.filter(subject => normalizeSemester(subject.semester) === key);
      const events = state.events.filter(event => itemSemester(event) === key);
      const alerts = buildAcademicAlerts(50).filter(alert => subjects.some(subject => subject.id === alert.subjectId));
      const avg = subjects.length ? Math.round(subjects.reduce((sum, subject) => sum + Number(subject.progress || 0), 0) / subjects.length) : 0;
      return { key, label, subjects, events, alerts, avg };
    });
}

function renderView(viewId) {
  const renderers = {
    inicio: renderHome,
    calendario: renderCalendar,
    asignaturas: renderSubjects,
    materiales: renderMaterials,
    examenes: renderExams,
    simulacros: renderSimulations,
    planificacion: renderPlanning,
    notas: renderGrades,
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
  const alerts = buildAcademicAlerts(6);
  const urgentAlerts = alerts.filter(alert => alert.severity === 'danger').length;

  const plan = buildStudyPlan();
  const topPlan = plan[0];
  const topAlert = alerts[0];

  $('#inicio').innerHTML = `
    <section class="hero-dashboard">
      <div class="hero-copy">
        <span class="hero-kicker">GRADUS · control académico inteligente</span>
        <h3>Hoy, céntrate solo en lo siguiente.</h3>
        <p>${topAlert ? escapeHtml(topAlert.text) : 'Cuando registres fechas y materiales, GRADUS priorizará por ti lo urgente, lo importante y lo que conviene repasar.'}</p>
        <div class="hero-actions">
          <button class="primary-action" data-jump-view="planificacion">Ver plan de hoy</button>
          <button class="ghost-button" data-jump-view="simulacros">Preparar simulacro</button>
        </div>
      </div>
      <div class="focus-stack">
        <div class="focus-card pulse-card">
          <span>1</span><strong>${topPlan ? escapeHtml(topPlan.subject.name) : 'Configurar asignaturas'}</strong><p>${topPlan ? `${escapeHtml(topPlan.minutes)} min · ${escapeHtml(topPlan.focus)}` : 'Completa datos oficiales, guías y fechas.'}</p>
        </div>
        <div class="focus-card">
          <span>2</span><strong>${topAlert ? escapeHtml(topAlert.label) : 'Sin alerta crítica'}</strong><p>${topAlert ? escapeHtml(topAlert.title) : 'Todavía no hay fechas urgentes.'}</p>
        </div>
        <div class="focus-card">
          <span>3</span><strong>Bloque TDAH</strong><p>Sesiones cortas, avisos visibles, tarjetas claras y siguiente acción concreta.</p>
        </div>
      </div>
    </section>
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
        <span class="metric-label">Avisos activos</span>
        <span class="metric-value">${alerts.length}</span>
        <span class="metric-note">${urgentAlerts} críticos o vencidos</span>
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
        <div class="section-heading">
          <div>
            <h3>Avisos y planificación inmediata</h3>
            <p>Priorización automática según fechas, riesgo y progreso registrado.</p>
          </div>
          <button class="ghost-button" data-jump-view="planificacion">Abrir planificación</button>
        </div>
        ${renderAlertList(alerts)}
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
        <div class="inline-actions"><button class="tiny-button danger-text" data-delete-collection="events" data-delete-id="${escapeHtml(event.id)}">Eliminar fecha</button></div>
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
        <p class="subtle-note">GRADUS calcula avisos de 30, 15, 7 y 3 días combinando fechas, progreso y riesgo. Las notificaciones push reales llegarán en una fase posterior.</p>
        ${renderAlertList(buildAcademicAlerts(5))}
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
    <details class="card collapsible">
      <summary>+ Añadir asignatura o completar una optativa</summary>
      <form id="subjectForm" class="form-grid subject-form">
        <label class="span-2">Nombre de la asignatura<input name="name" required placeholder="Nombre oficial de la asignatura"></label>
        <label>Código<input name="code" placeholder="Código UNED"></label>
        <label>Cuatrimestre
          <select name="semester" required>
            <option value="primer_cuatrimestre">Primer cuatrimestre</option>
            <option value="segundo_cuatrimestre">Segundo cuatrimestre</option>
            <option value="anual">Anual / TFG</option>
            <option value="pendiente">Pendiente de clasificar</option>
          </select>
        </label>
        <label>ECTS<input name="credits" type="number" min="0" max="30" step="0.5" value="6"></label>
        <label>Tipo<input name="type" placeholder="Obligatoria, optativa, TFG..."></label>
        <label>Riesgo
          <select name="risk"><option value="medio">Medio</option><option value="alto">Alto</option><option value="bajo">Bajo</option></select>
        </label>
        <label>Progreso inicial<input name="progress" type="number" min="0" max="100" value="0"></label>
        <label>Estado
          <select name="status"><option value="por_configurar">Por configurar</option><option value="pendiente">Pendiente</option><option value="por_decidir">Por decidir</option><option value="revisado">Revisado</option></select>
        </label>
        <label class="span-2">Tipo de examen<input name="examType" placeholder="Test, desarrollo, mixto, trabajo..."></label>
        <label class="span-2">Evaluación<textarea name="evaluation" rows="2" placeholder="Examen, PEC, porcentajes, mínimos..."></textarea></label>
        <label class="span-2">Estrategia<textarea name="strategy" rows="2" placeholder="Prioridad, forma de estudio, patrón de exámenes..."></textarea></label>
        <label class="span-2">Notas<textarea name="notes" rows="2" placeholder="Datos pendientes de confirmar, observaciones..."></textarea></label>
        <button class="primary-action span-2">Guardar asignatura</button>
      </form>
    </details>
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

  $('#subjectForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    if (!name) return;
    const baseId = slugify(name);
    const id = state.subjects.some(subject => subject.id === baseId) ? `${baseId}-${Date.now().toString(36)}` : baseId;
    state.subjects.push(normalizeSubject({
      id,
      name,
      code: String(formData.get('code') || 'Pendiente'),
      semester: normalizeSemester(formData.get('semester')),
      credits: Number(formData.get('credits') || 0),
      type: String(formData.get('type') || 'Pendiente de clasificar'),
      status: String(formData.get('status') || 'por_configurar'),
      risk: String(formData.get('risk') || 'medio'),
      progress: Number(formData.get('progress') || 0),
      examType: String(formData.get('examType') || 'Pendiente de analizar'),
      evaluation: String(formData.get('evaluation') || 'Pendiente de completar'),
      notes: String(formData.get('notes') || ''),
      strategy: String(formData.get('strategy') || 'Pendiente de decidir estrategia.')
    }));
    saveState();
    state.ui.semesterFilter = activeSemesterFilter() === 'all' ? 'all' : state.ui.semesterFilter;
    event.currentTarget.reset();
    renderSubjects();
  });

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
  const subjectQuestions = state.questions.filter(question => question.subjectId === id);
  $('#subjectDialogTitle').textContent = subject.name;
  $('#subjectDialogBody').innerHTML = `
    <div class="kpi-row">
      <div class="kpi"><span>Código</span><strong>${escapeHtml(subject.code)}</strong></div>
      <div class="kpi"><span>Créditos</span><strong>${escapeHtml(subject.credits)} ECTS</strong></div>
      <div class="kpi"><span>Periodo</span><strong>${semesterLabel(subject.semester)}</strong></div>
      <div class="kpi"><span>Preguntas</span><strong>${subjectQuestions.length}</strong></div>
    </div>
    <details class="collapsible inner-collapsible">
      <summary>Editar ficha básica</summary>
      <form id="subjectEditForm" class="form-grid">
        <label class="span-2">Nombre<input name="name" required value="${escapeHtml(subject.name)}"></label>
        <label>Código<input name="code" value="${escapeHtml(subject.code)}"></label>
        <label>Cuatrimestre
          <select name="semester">
            ${Object.entries(SEMESTERS).filter(([key]) => key !== 'all').map(([key, label]) => `<option value="${key}" ${normalizeSemester(subject.semester) === key ? 'selected' : ''}>${label}</option>`).join('')}
          </select>
        </label>
        <label>ECTS<input name="credits" type="number" min="0" max="30" step="0.5" value="${escapeHtml(subject.credits)}"></label>
        <label>Tipo<input name="type" value="${escapeHtml(subject.type)}"></label>
        <label>Riesgo
          <select name="risk"><option value="alto" ${subject.risk === 'alto' ? 'selected' : ''}>Alto</option><option value="medio" ${subject.risk === 'medio' ? 'selected' : ''}>Medio</option><option value="bajo" ${subject.risk === 'bajo' ? 'selected' : ''}>Bajo</option></select>
        </label>
        <label>Progreso<input name="progress" type="number" min="0" max="100" value="${escapeHtml(subject.progress)}"></label>
        <label>Estado<input name="status" value="${escapeHtml(subject.status)}"></label>
        <label class="span-2">Tipo de examen<input name="examType" value="${escapeHtml(subject.examType)}"></label>
        <label class="span-2">Evaluación<textarea name="evaluation" rows="2">${escapeHtml(subject.evaluation)}</textarea></label>
        <label class="span-2">Estrategia<textarea name="strategy" rows="2">${escapeHtml(subject.strategy)}</textarea></label>
        <label class="span-2">Notas<textarea name="notes" rows="2">${escapeHtml(subject.notes)}</textarea></label>
        <button class="primary-action span-2">Guardar cambios de la ficha</button>
      </form>
    </details>
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
        <h4>Exámenes y preguntas</h4>
        ${subjectExams.length ? `<div class="list">${subjectExams.map(exam => `<div class="list-item"><div><strong>${escapeHtml(exam.year)} · ${escapeHtml(exam.call)}</strong><p>${escapeHtml(exam.type)}</p><p>${escapeHtml(exam.notes)}</p></div>${statusBadge(exam.status)}</div>`).join('')}</div>` : renderEmptyState()}
        <p class="subtle-note">Preguntas históricas registradas: <strong>${subjectQuestions.length}</strong></p>
      </article>
    </div>
  `;
  $('#subjectEditForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    Object.assign(subject, normalizeSubject({
      ...subject,
      name: String(formData.get('name') || subject.name),
      code: String(formData.get('code') || ''),
      semester: normalizeSemester(formData.get('semester')),
      credits: Number(formData.get('credits') || 0),
      type: String(formData.get('type') || ''),
      status: String(formData.get('status') || ''),
      risk: String(formData.get('risk') || 'medio'),
      progress: Number(formData.get('progress') || 0),
      examType: String(formData.get('examType') || ''),
      evaluation: String(formData.get('evaluation') || ''),
      notes: String(formData.get('notes') || ''),
      strategy: String(formData.get('strategy') || '')
    }));
    state.events = state.events.map(eventItem => eventItem.subjectId === subject.id ? { ...eventItem, semester: subject.semester } : eventItem);
    state.materials = state.materials.map(material => material.subjectId === subject.id ? { ...material, semester: subject.semester } : material);
    state.exams = state.exams.map(exam => exam.subjectId === subject.id ? { ...exam, semester: subject.semester } : exam);
    state.questions = state.questions.map(question => question.subjectId === subject.id ? { ...question, semester: subject.semester } : question);
    state.attempts = state.attempts.map(attempt => attempt.subjectId === subject.id ? { ...attempt, semester: subject.semester } : attempt);
    saveState();
    $('#subjectDialog').close();
    renderView($('.active-view')?.id || 'asignaturas');
  });
  $('#subjectDialog').showModal();
}

function renderMaterialList(materials) {
  if (!materials.length) return renderEmptyState();
  return `<div class="list">${materials.map(material => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(material.title)}</strong>
        <p>${escapeHtml(material.kind)} · ${escapeHtml(material.source || 'Sin fuente')} · ${semesterLabel(itemSemester(material))}</p>
        ${material.filePath ? `<p><strong>Archivo privado:</strong> ${escapeHtml(material.fileName || 'archivo')} · ${formatFileSize(material.fileSize)} · ${escapeHtml(material.mimeType || 'tipo no registrado')}</p>` : '<p class="subtle-note">Ficha registrada sin archivo adjunto.</p>'}
        ${material.notes ? `<p>${escapeHtml(material.notes)}</p>` : ''}
        <div class="inline-actions">
          ${material.filePath ? `<button class="tiny-button" data-open-material-id="${escapeHtml(material.id)}">Abrir archivo privado</button>` : ''}
          <button class="tiny-button danger-text" data-delete-collection="materials" data-delete-id="${escapeHtml(material.id)}">Eliminar material</button>
        </div>
      </div>
      <div class="badge-stack">
        ${statusBadge(material.status)}
        ${material.filePath ? '<span class="badge success">Con archivo</span>' : '<span class="badge neutral">Sin archivo</span>'}
      </div>
    </div>
  `).join('')}</div>`;
}

function renderMaterials() {
  $('#materiales').innerHTML = `
    <div class="grid-12">
      <article class="card col-5">
        <h3>Registrar material privado</h3>
        <p style="color:var(--muted);margin-top:0">Puedes crear una ficha de material y, si has iniciado sesión, subir el archivo a Supabase Storage en un bucket privado.</p>
        <div class="notice storage-notice">
          <strong>Privacidad</strong>
          Los archivos se guardarán en la carpeta privada de tu usuario. No subas aquí claves, contraseñas ni documentación que no debas conservar en tu espacio personal.
        </div>
        <form id="materialForm" class="form-grid" enctype="multipart/form-data">
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
          <label class="span-2 file-label">Archivo privado
            <input name="file" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.jpg,.jpeg,.png,.webp,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
            <small>Máximo recomendado: 50 MB. Para manuales editoriales, mantén el acceso estrictamente privado.</small>
          </label>
          <label class="span-2">Notas<textarea name="notes" rows="3"></textarea></label>
          <p id="materialFormMessage" class="form-message span-2"></p>
          <button class="primary-action span-2">Guardar material</button>
        </form>
      </article>
      <article class="card col-7">
        <h3>Biblioteca privada · ${semesterLabel(activeSemesterFilter())}</h3>
        <div class="toolbar">
          <input id="materialSearch" type="search" placeholder="Buscar materiales...">
          <select id="materialKindFilter">
            <option value="all">Todos los tipos</option>
            <option>Guía</option>
            <option>Manual</option>
            <option>Documento docente</option>
            <option>Examen</option>
            <option>PEC</option>
            <option>Resumen propio</option>
            <option>Otro</option>
          </select>
          <select id="materialFileFilter">
            <option value="all">Con y sin archivo</option>
            <option value="with">Solo con archivo</option>
            <option value="without">Solo sin archivo</option>
          </select>
        </div>
        <div id="materialList"></div>
      </article>
    </div>
  `;
  $('#materialForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const message = $('#materialFormMessage');
    const subjectId = String(formData.get('subjectId'));
    const file = formData.get('file');
    const material = {
      id: cryptoRandomId(),
      title: String(formData.get('title')),
      subjectId,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      kind: String(formData.get('kind')),
      source: String(formData.get('source') || ''),
      status: String(formData.get('status')),
      notes: String(formData.get('notes') || ''),
      filePath: null,
      fileName: null,
      fileSize: null,
      mimeType: null,
      uploadedAt: null
    };

    if (file && file instanceof File && file.size > 0) {
      if (!supabaseClient || !authSession) {
        message.textContent = 'Para subir archivos privados debes iniciar sesión en Supabase. Puedes guardar la ficha sin archivo o iniciar sesión.';
        return;
      }
      message.textContent = 'Subiendo archivo privado...';
      const safeName = sanitizeFileName(file.name);
      const path = `${authSession.user.id}/${subjectId}/${Date.now()}-${safeName}`;
      const { error: uploadError } = await supabaseClient.storage
        .from(MATERIAL_BUCKET)
        .upload(path, file, { cacheControl: '3600', upsert: false, contentType: file.type || 'application/octet-stream' });
      if (uploadError) {
        message.textContent = `Error al subir el archivo: ${uploadError.message}`;
        return;
      }
      material.filePath = path;
      material.fileName = file.name;
      material.fileSize = file.size;
      material.mimeType = file.type || 'application/octet-stream';
      material.uploadedAt = new Date().toISOString();
    }

    state.materials.push(material);
    saveState();
    form.reset();
    message.textContent = material.filePath ? 'Material y archivo guardados.' : 'Ficha de material guardada sin archivo.';
    renderMaterials();
  });
  const renderFiltered = () => {
    const query = ($('#materialSearch')?.value || '').toLowerCase();
    const kind = $('#materialKindFilter')?.value || 'all';
    const fileMode = $('#materialFileFilter')?.value || 'all';
    const filtered = filteredMaterials().filter(material => {
      const content = `${material.title} ${material.kind} ${subjectName(material.subjectId)} ${material.notes} ${material.fileName || ''}`.toLowerCase();
      const matchesText = content.includes(query);
      const matchesKind = kind === 'all' || material.kind === kind;
      const matchesFile = fileMode === 'all' || (fileMode === 'with' ? Boolean(material.filePath) : !material.filePath);
      return matchesText && matchesKind && matchesFile;
    });
    $('#materialList').innerHTML = renderMaterialList(filtered);
  };
  $('#materialSearch').addEventListener('input', renderFiltered);
  $('#materialKindFilter').addEventListener('change', renderFiltered);
  $('#materialFileFilter').addEventListener('change', renderFiltered);
  renderFiltered();
}

function renderExams() {
  const exams = filteredExams();
  const questions = filteredQuestions();
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
        ${exams.length ? `
          <table class="exam-table">
            <thead><tr><th>Asignatura</th><th>Año</th><th>Convocatoria</th><th>Tipo</th><th>Periodo</th><th>Estado</th></tr></thead>
            <tbody>${exams.map(exam => `
              <tr>
                <td>${escapeHtml(subjectName(exam.subjectId))}<br><small>${escapeHtml(exam.notes || '')}</small><div class="inline-actions"><button class="tiny-button danger-text" data-delete-collection="exams" data-delete-id="${escapeHtml(exam.id)}">Eliminar</button></div></td>
                <td>${escapeHtml(exam.year)}</td>
                <td>${escapeHtml(exam.call)}</td>
                <td>${escapeHtml(exam.type)}</td>
                <td>${semesterBadge(itemSemester(exam))}</td>
                <td>${statusBadge(exam.status)}</td>
              </tr>
            `).join('')}</tbody>
          </table>` : renderEmptyState()}
      </article>

      <article class="card col-5">
        <h3>Registrar pregunta histórica</h3>
        <p class="subtle-note">Cada pregunta debe estar vinculada a un examen real, a una variante histórica o a un patrón documentado. Este será el banco de base para los simulacros rigurosos.</p>
        <form id="questionForm" class="form-grid">
          <label>Asignatura<select name="subjectId" required id="questionSubjectSelect">${subjectOptions()}</select></label>
          <label>Examen de referencia<select name="examId" id="questionExamSelect"><option value="">Sin examen concreto</option>${examOptions()}</select></label>
          <label>Tipo
            <select name="questionType">
              <option value="test">Test</option>
              <option value="desarrollo">Desarrollo</option>
              <option value="corta">Respuesta corta</option>
              <option value="calculo">Cálculo</option>
              <option value="caso_practico">Caso práctico</option>
            </select>
          </label>
          <label>Dificultad
            <select name="difficulty"><option value="media">Media</option><option value="baja">Baja</option><option value="alta">Alta</option></select>
          </label>
          <label>Tema<input name="topic" placeholder="Tema, bloque o unidad"></label>
          <label>Frecuencia<input name="frequency" type="number" min="1" value="1"></label>
          <label class="span-2">Enunciado<textarea name="statement" rows="4" required placeholder="Copia exacta o formulación controlada de la pregunta"></textarea></label>
          <label class="span-2">Opciones, si es tipo test<textarea name="options" rows="3" placeholder="Una opción por línea. Marca la correcta abajo."></textarea></label>
          <label class="span-2">Respuesta correcta<input name="correctAnswer" placeholder="Letra, texto o esquema de respuesta"></label>
          <label class="span-2">Explicación o criterio de corrección<textarea name="explanation" rows="3"></textarea></label>
          <label>Fuente<input name="sourceLabel" placeholder="2025 J1, 2024 SO..."></label>
          <label>Origen
            <select name="isExactHistorical"><option value="true">Pregunta histórica exacta</option><option value="false">Variante o patrón documentado</option></select>
          </label>
          <label class="span-2">Notas<textarea name="notes" rows="2"></textarea></label>
          <button class="primary-action span-2">Guardar pregunta</button>
        </form>
      </article>
      <article class="card col-7">
        <h3>Banco de preguntas · ${semesterLabel(activeSemesterFilter())}</h3>
        <div class="toolbar"><input id="questionSearch" type="search" placeholder="Buscar por asignatura, tema, fuente o enunciado..."></div>
        <div id="questionList"></div>
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

  $('#questionForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subjectId = String(formData.get('subjectId'));
    const optionsText = String(formData.get('options') || '').trim();
    state.questions.push({
      id: cryptoRandomId(),
      subjectId,
      examId: String(formData.get('examId') || '') || null,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      questionType: String(formData.get('questionType') || 'pendiente'),
      topic: String(formData.get('topic') || ''),
      statement: String(formData.get('statement') || ''),
      options: optionsText ? optionsText.split('\n').map(option => option.trim()).filter(Boolean) : null,
      correctAnswer: String(formData.get('correctAnswer') || ''),
      explanation: String(formData.get('explanation') || ''),
      sourceLabel: String(formData.get('sourceLabel') || ''),
      isExactHistorical: String(formData.get('isExactHistorical')) === 'true',
      frequency: Number(formData.get('frequency') || 1),
      difficulty: String(formData.get('difficulty') || 'media'),
      notes: String(formData.get('notes') || '')
    });
    saveState();
    renderExams();
  });

  const renderFilteredQuestions = () => {
    const query = ($('#questionSearch')?.value || '').toLowerCase().trim();
    const filtered = questions.filter(question => {
      const content = `${subjectName(question.subjectId)} ${question.topic} ${question.statement} ${question.correctAnswer} ${question.sourceLabel} ${question.notes}`.toLowerCase();
      return content.includes(query);
    });
    $('#questionList').innerHTML = renderQuestionList(filtered);
  };
  $('#questionSearch').addEventListener('input', renderFilteredQuestions);
  renderFilteredQuestions();
}

function renderQuestionList(questions) {
  if (!questions.length) return renderEmptyState();
  return `<div class="list question-list">${questions.map(question => `
    <div class="list-item question-item">
      <div>
        <strong>${escapeHtml(subjectName(question.subjectId))} · ${escapeHtml(question.topic || 'Sin tema')}</strong>
        <p>${escapeHtml(question.statement)}</p>
        ${question.options?.length ? `<ol class="options-list">${question.options.map(option => `<li>${escapeHtml(typeof option === 'string' ? option : `${option.id}. ${option.text}`)}</li>`).join('')}</ol>` : ''}
        ${question.correctAnswer ? `<p><strong>Respuesta:</strong> ${escapeHtml(question.correctAnswer)}</p>` : ''}
        ${question.explanation ? `<p>${escapeHtml(question.explanation)}</p>` : ''}
        <div class="inline-actions"><button class="tiny-button danger-text" data-delete-collection="questions" data-delete-id="${escapeHtml(question.id)}">Eliminar pregunta</button></div>
      </div>
      <div class="badge-stack">
        <span class="badge primary">${escapeHtml(question.questionType || 'Tipo pendiente')}</span>
        <span class="badge neutral">${escapeHtml(question.sourceLabel || 'Sin fuente')}</span>
        <span class="badge warning">Frecuencia ${escapeHtml(question.frequency || 1)}</span>
        ${semesterBadge(itemSemester(question))}
      </div>
    </div>
  `).join('')}</div>`;
}

function renderSimulations() {
  const subjects = filteredSubjects();
  const attempts = filteredAttempts();
  const simulations = availableSimulations();
  const active = simulationById(state.ui?.activeSimulationId);
  $('#simulacros').innerHTML = `
    <div class="grid-12">
      <article class="hero-panel col-12 simulation-hero">
        <div>
          <p class="eyebrow">Simulacros verificados</p>
          <h3>Entrenamiento autocorregible basado en exámenes reales</h3>
          <p>Bases, Métodos y Evaluación de Centros ya tienen modelos interactivos. Primero se corrige la parte objetiva; los desarrollos se trabajan con autoevaluación guiada cuando el examen real incluye pregunta abierta.</p>
        </div>
        <div class="hero-actions">
          <span class="badge success">${simulations.length} simulacros disponibles</span>
          <span class="badge primary">${state.questions.length} preguntas verificadas</span>
        </div>
      </article>

      <article class="card col-8">
        <div class="section-heading">
          <div>
            <h3>Simulacros disponibles · ${semesterLabel(activeSemesterFilter())}</h3>
            <p>Selecciona uno y responde sin salir de GRADUS. Cada intento queda registrado.</p>
          </div>
        </div>
        <div class="simulation-grid">
          ${simulations.length ? simulations.map(renderSimulationCard).join('') : renderEmptyState()}
        </div>
      </article>

      <article class="card col-4">
        <h3>Intentos registrados</h3>
        ${renderAttempts(attempts)}
      </article>

      <article class="card col-12 simulation-stage" id="simulationStage">
        ${active ? renderActiveSimulation(active) : renderSimulationWelcome(subjects)}
      </article>
    </div>
  `;
  attachSimulationEvents();
}

function availableSimulations() {
  return SIMULATION_BLUEPRINTS.filter(simulation => matchesSemester({ semester: simulation.semester, subjectId: simulation.subjectId }));
}

function simulationById(id) {
  return SIMULATION_BLUEPRINTS.find(simulation => simulation.id === id) || null;
}

function questionsForSimulation(simulation) {
  return simulation.questionIds.map(id => state.questions.find(question => question.id === id) || COURSE_QUESTION_TEMPLATES.find(question => question.id === id)).filter(Boolean);
}

function renderSimulationCard(simulation) {
  const questions = questionsForSimulation(simulation);
  return `
    <article class="simulation-card">
      <div class="simulation-card-top">
        <span class="badge primary">${escapeHtml(subjectName(simulation.subjectId))}</span>
        <span class="badge neutral">${escapeHtml(simulation.source)}</span>
      </div>
      <h4>${escapeHtml(simulation.title)}</h4>
      <p>${escapeHtml(simulation.description)}</p>
      <div class="simulation-meta">
        <span>${questions.length} ítems</span>
        <span>${simulation.durationMinutes} min</span>
        <span>${escapeHtml(simulation.examMode)}</span>
      </div>
      <button class="primary-action start-simulation-btn" data-simulation-id="${escapeHtml(simulation.id)}">Iniciar</button>
    </article>
  `;
}

function renderSimulationWelcome(subjects) {
  const readySubjects = subjects.filter(subject => SIMULATION_BLUEPRINTS.some(sim => sim.subjectId === subject.id));
  return `
    <div class="simulation-welcome">
      <div class="focus-orb" aria-hidden="true">◎</div>
      <div>
        <h3>Elige un simulacro para empezar</h3>
        <p>Recomendación TDAH: haz un bloque corto, corrige al momento y revisa solo los errores. No abras manuales durante el intento.</p>
        <div class="rule-grid compact-rules">
          <div class="rule-card"><strong>Bases</strong><p>Verdadero/falso con penalización por error.</p></div>
          <div class="rule-card"><strong>Métodos</strong><p>Test teórico autocorregible y desarrollo guiado.</p></div>
          <div class="rule-card"><strong>Centros</strong><p>Test penalizado + desarrollo de 4 puntos.</p></div>
        </div>
        <p class="subtle-note">Asignaturas con simulacros listos en esta vista: ${readySubjects.map(subject => escapeHtml(subject.name)).join(' · ') || 'ninguna'}.</p>
      </div>
    </div>
  `;
}

function renderActiveSimulation(simulation) {
  const questions = questionsForSimulation(simulation);
  return `
    <form id="activeSimulationForm" class="simulation-form" data-simulation-id="${escapeHtml(simulation.id)}">
      <div class="simulation-active-header">
        <div>
          <p class="eyebrow">${escapeHtml(subjectName(simulation.subjectId))}</p>
          <h3>${escapeHtml(simulation.title)}</h3>
          <p>${escapeHtml(simulation.description)}</p>
        </div>
        <div class="timer-chip" data-duration="${escapeHtml(simulation.durationMinutes)}">${escapeHtml(simulation.durationMinutes)} min</div>
      </div>
      <div class="notice">
        <strong>Modo examen</strong>
        Responde sin consultar materiales. Puedes dejar preguntas en blanco; GRADUS aplicará la penalización correspondiente al modelo.
      </div>
      <div class="simulation-questions">
        ${questions.map((question, index) => renderSimulationQuestion(question, index)).join('')}
      </div>
      ${simulation.developmentPrompt ? `
        <div class="development-box">
          <h4>Pregunta de desarrollo</h4>
          <p>${escapeHtml(simulation.developmentPrompt)}</p>
          <textarea name="developmentText" rows="6" placeholder="Escribe aquí un esquema o respuesta breve. GRADUS no inventa una corrección cerrada para desarrollos, pero registra tu autoevaluación."></textarea>
          <label>Autoevaluación del desarrollo, máximo ${escapeHtml(simulation.developmentMax)} puntos
            <input name="developmentScore" type="number" min="0" max="${escapeHtml(simulation.developmentMax)}" step="0.25" value="0">
          </label>
          <p class="subtle-note">Criterio: pertinencia, precisión conceptual, estructura, aplicación práctica y expresión académica.</p>
        </div>` : ''}
      <div id="simulationResult" class="simulation-result" aria-live="polite"></div>
      <div class="modal-actions sticky-actions">
        <button type="button" class="secondary-button cancel-simulation-btn">Cerrar simulacro</button>
        <button type="submit" class="primary-action">Corregir y guardar intento</button>
      </div>
    </form>
  `;
}

function renderSimulationQuestion(question, index) {
  const options = (question.options || []).map(option => parseOption(option));
  return `
    <fieldset class="simulation-question">
      <legend><span>${index + 1}</span>${escapeHtml(question.statement)}</legend>
      <div class="simulation-options">
        ${options.map(option => `
          <label class="option-pill">
            <input type="radio" name="q-${escapeHtml(question.id)}" value="${escapeHtml(option.id)}">
            <span><strong>${escapeHtml(option.id)}</strong> ${escapeHtml(option.text)}</span>
          </label>
        `).join('')}
      </div>
      <small>${escapeHtml(question.topic || 'Sin tema')} · ${escapeHtml(question.sourceLabel || '')}</small>
    </fieldset>
  `;
}

function parseOption(option) {
  if (typeof option !== 'string') return { id: String(option.id || ''), text: String(option.text || '') };
  const match = option.match(/^([A-Z])\.\s*(.*)$/);
  if (match) return { id: match[1], text: match[2] };
  return { id: option.slice(0, 1), text: option };
}

function attachSimulationEvents() {
  $$('.start-simulation-btn').forEach(button => {
    button.addEventListener('click', () => {
      state.ui.activeSimulationId = button.dataset.simulationId;
      saveState({ sync: false });
      renderSimulations();
      $('#simulationStage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  $('.cancel-simulation-btn')?.addEventListener('click', () => {
    state.ui.activeSimulationId = null;
    saveState({ sync: false });
    renderSimulations();
  });
  $('#activeSimulationForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const simulation = simulationById(event.currentTarget.dataset.simulationId);
    if (!simulation) return;
    const result = evaluateSimulation(simulation, new FormData(event.currentTarget));
    renderSimulationResult(result, simulation);
    state.attempts.push({
      id: cryptoRandomId(),
      subjectId: simulation.subjectId,
      semester: simulation.semester,
      date: new Date().toISOString().slice(0, 10),
      title: simulation.title,
      score: result.score,
      notes: result.notes
    });
    updateProgressAfterSimulation(simulation.subjectId, result.score);
    saveState();
    renderAttempts(filteredAttempts());
  });
}

function evaluateSimulation(simulation, formData) {
  const questions = questionsForSimulation(simulation);
  let correct = 0;
  let wrong = 0;
  let blank = 0;
  const detail = [];
  questions.forEach(question => {
    const answer = String(formData.get(`q-${question.id}`) || '');
    if (!answer) {
      blank += 1;
      detail.push({ question, answer: 'En blanco', ok: false, blank: true });
      return;
    }
    const ok = answer === question.correctAnswer;
    if (ok) correct += 1; else wrong += 1;
    detail.push({ question, answer, ok, blank: false });
  });
  const developmentScore = Math.max(0, Math.min(Number(simulation.developmentMax || 0), Number(String(formData.get('developmentScore') || '0').replace(',', '.')) || 0));
  const objective = calculateSimulationObjective(simulation, correct, wrong, blank, questions.length);
  const score = Number(Math.max(0, Math.min(10, objective.score + developmentScore)).toFixed(2));
  return {
    correct,
    wrong,
    blank,
    objective,
    developmentScore,
    score,
    detail,
    notes: `${correct} aciertos, ${wrong} errores, ${blank} en blanco. Objetiva: ${objective.label}. Desarrollo: ${developmentScore}/${simulation.developmentMax || 0}. Nota registrada: ${score}.`
  };
}

function calculateSimulationObjective(simulation, correct, wrong, blank, total) {
  if (simulation.scoring === 'bases_tf') {
    const score = ((correct - wrong) / total) * 10;
    return { score: Math.max(0, score), label: `${Math.max(0, score).toFixed(2)}/10 con fórmula V/F escalada` };
  }
  if (simulation.scoring === 'centros_mixed') {
    const score = Math.max(0, correct * (6 / total) - wrong * (3 / total));
    return { score, label: `${score.toFixed(2)}/6 en test` };
  }
  if (simulation.scoring === 'metodos_objective') {
    const objective10 = Math.max(0, ((correct - (wrong / 2)) / total) * 10);
    const score = objective10 * 0.8;
    return { score, label: `${objective10.toFixed(2)}/10 en objetiva; ${score.toFixed(2)}/8 ponderado` };
  }
  const fallback = total ? (correct / total) * 10 : 0;
  return { score: fallback, label: `${fallback.toFixed(2)}/10` };
}

function renderSimulationResult(result, simulation) {
  const target = $('#simulationResult');
  if (!target) return;
  const wrongItems = result.detail.filter(item => !item.ok);
  target.innerHTML = `
    <div class="result-card ${result.score >= 5 ? 'success' : 'danger'}">
      <div>
        <span class="metric-label">Nota estimada</span>
        <strong>${result.score}</strong>
        <p>${escapeHtml(result.notes)}</p>
      </div>
      <div class="result-stats">
        <span>Aciertos: ${result.correct}</span>
        <span>Errores: ${result.wrong}</span>
        <span>Blanco: ${result.blank}</span>
      </div>
    </div>
    <div class="correction-list">
      <h4>Corrección inmediata</h4>
      ${wrongItems.length ? wrongItems.map(item => `
        <div class="correction-item">
          <strong>${escapeHtml(item.question.statement)}</strong>
          <p>Tu respuesta: ${escapeHtml(item.answer)} · Correcta: ${escapeHtml(item.question.correctAnswer)}</p>
          <p>${escapeHtml(item.question.explanation || '')}</p>
        </div>
      `).join('') : '<p class="subtle-note">No hay errores en la parte objetiva.</p>'}
    </div>
  `;
}

function updateProgressAfterSimulation(subjectId, score) {
  state.subjects = state.subjects.map(subject => {
    if (subject.id !== subjectId) return subject;
    const increment = score >= 7 ? 3 : score >= 5 ? 2 : 1;
    return { ...subject, progress: Math.min(100, Number(subject.progress || 0) + increment) };
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
        <div class="inline-actions"><button class="tiny-button danger-text" data-delete-collection="attempts" data-delete-id="${escapeHtml(attempt.id)}">Eliminar intento</button></div>
      </div>
      <div class="badge-stack">
        ${semesterBadge(itemSemester(attempt))}
        <span class="badge primary">${escapeHtml(attempt.score ?? 'Sin nota')}</span>
      </div>
    </div>
  `).join('')}</div>`;
}


function renderPlanning() {
  const alerts = buildAcademicAlerts(12);
  const plan = buildStudyPlan();
  const diagnosis = buildSemesterDiagnosis();
  const urgent = alerts.filter(alert => alert.severity === 'danger').length;
  const warning = alerts.filter(alert => alert.severity === 'warning').length;
  const plannedMinutes = plan.reduce((sum, item) => sum + item.minutes, 0);

  $('#planificacion').innerHTML = `
    <div class="grid-12">
      <article class="card metric col-3">
        <span class="metric-label">Avisos críticos</span>
        <span class="metric-value">${urgent}</span>
        <span class="metric-note">vencidos, de hoy o a 3 días</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Avisos preventivos</span>
        <span class="metric-value">${warning}</span>
        <span class="metric-note">entre 4 y 15 días</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Tiempo sugerido</span>
        <span class="metric-value">${plannedMinutes}</span>
        <span class="metric-note">minutos para el próximo bloque</span>
      </article>
      <article class="card metric col-3">
        <span class="metric-label">Vista activa</span>
        <span class="metric-value">${filteredSubjects().length}</span>
        <span class="metric-note">asignaturas en ${semesterLabel(activeSemesterFilter()).toLowerCase()}</span>
      </article>

      <article class="card col-7">
        <div class="section-heading">
          <div>
            <h3>Plan de estudio recomendado</h3>
            <p>Ordenado por riesgo, proximidad de fechas, progreso y falta de evidencias.</p>
          </div>
        </div>
        ${renderStudyPlanList(plan)}
      </article>

      <article class="card col-5">
        <h3>Avisos internos</h3>
        ${renderAlertList(alerts)}
      </article>

      <article class="card col-12">
        <h3>Diagnóstico por cuatrimestre</h3>
        <div class="semester-diagnosis-grid">
          ${diagnosis.map(item => `
            <button class="semester-diagnosis-card ${activeSemesterFilter() === item.key ? 'active' : ''}" data-semester-jump="${escapeHtml(item.key)}">
              <strong>${escapeHtml(item.label)}</strong>
              <span>${item.subjects.length} asignaturas · ${item.events.length} fechas · ${item.avg}% progreso medio</span>
              <small>${item.alerts.length} avisos asociados</small>
            </button>
          `).join('')}
        </div>
      </article>

      <article class="card col-12">
        <h3>Criterios de avisos</h3>
        <div class="rule-grid">
          <div class="rule-card"><strong>30 días</strong><p>Activación de planificación del bloque y revisión de materiales mínimos.</p></div>
          <div class="rule-card"><strong>15 días</strong><p>Alerta preventiva: conviene cerrar lectura, esquema o borrador.</p></div>
          <div class="rule-card"><strong>7 días</strong><p>Fase de cierre: simulacro, recuperación activa o revisión formal del trabajo.</p></div>
          <div class="rule-card"><strong>3 días</strong><p>Alerta crítica: priorización inmediata y reducción de tareas no esenciales.</p></div>
        </div>
      </article>
    </div>
  `;

  $$('[data-add-study-event]').forEach(button => {
    button.addEventListener('click', () => addStudyEvent(button.dataset.addStudyEvent, Number(button.dataset.studyMinutes || 25)));
  });
  $$('[data-semester-jump]').forEach(button => {
    button.addEventListener('click', () => {
      state.ui.semesterFilter = button.dataset.semesterJump;
      $('#globalSemesterFilter').value = state.ui.semesterFilter;
      saveState({ sync: false });
      renderPlanning();
    });
  });
  attachSubjectButtons();
}


function defaultGradeRuleForSubject(subjectId) {
  const subject = subjectById(subjectId) || filteredSubjects()[0] || state.subjects[0] || {};
  const evaluation = String(subject.evaluation || '').toLowerCase();
  const examType = String(subject.examType || '').toLowerCase();
  let examWeight = 100;
  let pecWeight = 0;
  let minExamForPec = 5;
  let minPec = 5;
  let minPass = 5;

  if (evaluation.includes('80') && evaluation.includes('20')) {
    examWeight = 80;
    pecWeight = 20;
  } else if (evaluation.includes('70') && evaluation.includes('30')) {
    examWeight = 70;
    pecWeight = 30;
  } else if (evaluation.includes('60') && evaluation.includes('40')) {
    examWeight = 60;
    pecWeight = 40;
  }

  return {
    subjectId: subject.id,
    examWeight,
    pecWeight,
    minExamForPec,
    minPec,
    minPass,
    maxNoPec: examWeight < 100 ? Number((examWeight / 10).toFixed(1)) : 10,
    testItems: examType.includes('20') ? 20 : 30,
    options: 3,
    developmentWeight: examType.includes('desarrollo') || examType.includes('mixto') ? 20 : 0,
    notes: 'Regla editable. Debe revisarse con la guía oficial de la asignatura.'
  };
}

function gradeRuleForSubject(subjectId) {
  const fallback = defaultGradeRuleForSubject(subjectId);
  const saved = state.gradeRules?.[subjectId] || {};
  return { ...fallback, ...saved, subjectId };
}

function saveGradeRule(subjectId, rule) {
  state.gradeRules = state.gradeRules || {};
  state.gradeRules[subjectId] = {
    examWeight: Number(rule.examWeight || 0),
    pecWeight: Number(rule.pecWeight || 0),
    minExamForPec: Number(rule.minExamForPec || 0),
    minPec: Number(rule.minPec || 0),
    minPass: Number(rule.minPass || 5),
    maxNoPec: Number(rule.maxNoPec || 10),
    testItems: Number(rule.testItems || 0),
    options: Number(rule.options || 3),
    developmentWeight: Number(rule.developmentWeight || 0),
    notes: String(rule.notes || '')
  };
}

function normalizeGradeInput(value) {
  const num = Number(String(value || '').replace(',', '.'));
  if (Number.isNaN(num)) return 0;
  return Math.max(0, Math.min(10, num));
}

function calculateFinalGrade({ examScore, pecScore, hasPec, rule }) {
  const examWeight = Math.max(0, Number(rule.examWeight || 0)) / 100;
  const pecWeight = Math.max(0, Number(rule.pecWeight || 0)) / 100;
  const minExamForPec = Number(rule.minExamForPec || 0);
  const minPec = Number(rule.minPec || 0);
  const minPass = Number(rule.minPass || 5);
  const pecApplies = Boolean(hasPec && pecWeight > 0 && examScore >= minExamForPec && pecScore >= minPec);
  const maxNoPec = Number(rule.maxNoPec || 10);
  const finalScore = pecApplies ? (examScore * examWeight) + (pecScore * pecWeight) : Math.min(examScore, maxNoPec);
  return {
    finalScore: Math.max(0, Math.min(10, Number(finalScore.toFixed(2)))),
    pecApplies,
    passed: finalScore >= minPass,
    examContribution: Number((pecApplies ? examScore * (examWeight || 1) : Math.min(examScore, maxNoPec)).toFixed(2)),
    pecContribution: pecApplies ? Number((pecScore * pecWeight).toFixed(2)) : 0
  };
}

function neededExamForTarget(target, pecScore, hasPec, rule) {
  const examWeight = Math.max(0, Number(rule.examWeight || 0)) / 100;
  const pecWeight = Math.max(0, Number(rule.pecWeight || 0)) / 100;
  if (!examWeight) return null;
  let needed = target;
  if (hasPec && pecWeight > 0 && pecScore >= Number(rule.minPec || 0)) {
    needed = (target - pecScore * pecWeight) / examWeight;
    needed = Math.max(needed, Number(rule.minExamForPec || 0));
  }
  if (needed < 0) needed = 0;
  if (!(hasPec && pecWeight > 0 && pecScore >= Number(rule.minPec || 0)) && needed > Number(rule.maxNoPec || 10)) return null;
  if (needed > 10) return null;
  return Number(needed.toFixed(2));
}

function calculateTestScore({ items, options, correct, wrong, blank }) {
  const totalItems = Math.max(1, Number(items || 1));
  const optionCount = Math.max(2, Number(options || 3));
  const c = Math.max(0, Number(correct || 0));
  const w = Math.max(0, Number(wrong || 0));
  const b = Math.max(0, Number(blank || 0));
  const penalty = w / (optionCount - 1);
  const raw = Math.max(0, c - penalty);
  const score = Math.max(0, Math.min(10, raw / totalItems * 10));
  return {
    score: Number(score.toFixed(2)),
    raw: Number(raw.toFixed(2)),
    penalty: Number(penalty.toFixed(2)),
    answered: c + w + b,
    warning: c + w + b !== totalItems ? 'La suma de correctas, erróneas y en blanco no coincide con el número de preguntas.' : ''
  };
}

function renderGradeTargets(rule, pecScore, hasPec) {
  const targets = [5, 7, 9, 9.5];
  return `<div class="grade-targets">${targets.map(target => {
    const needed = neededExamForTarget(target, pecScore, hasPec, rule);
    return `<div class="target-card"><strong>${target}</strong><span>${needed === null ? 'No alcanzable con estos datos' : `Necesitas ${needed} en examen`}</span></div>`;
  }).join('')}</div>`;
}

function gradeScenarioAttempts() {
  return state.attempts
    .filter(attempt => String(attempt.title || '').startsWith('Escenario de nota'))
    .filter(matchesSemester)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderGradeScenarioList() {
  const attempts = gradeScenarioAttempts();
  if (!attempts.length) return renderEmptyState();
  return `<div class="list">${attempts.map(attempt => `
    <div class="list-item">
      <div>
        <strong>${escapeHtml(attempt.title)}</strong>
        <p>${escapeHtml(subjectName(attempt.subjectId))} · ${formatDate(attempt.date)}</p>
        <p>${escapeHtml(attempt.notes || '')}</p>
        <div class="inline-actions"><button class="tiny-button danger-text" data-delete-collection="attempts" data-delete-id="${escapeHtml(attempt.id)}">Eliminar escenario</button></div>
      </div>
      <div class="badge-stack">
        ${semesterBadge(itemSemester(attempt))}
        <span class="badge primary">${escapeHtml(attempt.score ?? 'Sin nota')}</span>
      </div>
    </div>
  `).join('')}</div>`;
}

function renderGrades() {
  const subjects = filteredSubjects().length ? filteredSubjects() : state.subjects;
  const selectedSubjectId = subjects[0]?.id || state.subjects[0]?.id;
  const rule = gradeRuleForSubject(selectedSubjectId);
  const subject = subjectById(selectedSubjectId) || {};

  $('#notas').innerHTML = `
    <div class="grid-12">
      <article class="card col-7">
        <div class="section-heading">
          <div>
            <h3>Calculadora de nota final</h3>
            <p>Calcula escenarios con examen, PEC y mínimos. Las reglas son editables y deben contrastarse con cada guía.</p>
          </div>
        </div>
        <form id="finalGradeForm" class="form-grid">
          <label class="span-2">Asignatura
            <select name="subjectId" id="gradeSubjectSelect" required>${subjects.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)} · ${semesterLabel(item.semester)}</option>`).join('')}</select>
          </label>
          <label>Nota examen<input name="examScore" type="number" min="0" max="10" step="0.01" value="5" required></label>
          <label>Nota PEC/trabajo<input name="pecScore" type="number" min="0" max="10" step="0.01" value="8"></label>
          <label>Peso examen %<input name="examWeight" type="number" min="0" max="100" step="1" value="${escapeHtml(rule.examWeight)}"></label>
          <label>Peso PEC %<input name="pecWeight" type="number" min="0" max="100" step="1" value="${escapeHtml(rule.pecWeight)}"></label>
          <label>Mínimo examen para sumar PEC<input name="minExamForPec" type="number" min="0" max="10" step="0.01" value="${escapeHtml(rule.minExamForPec)}"></label>
          <label>Mínimo PEC<input name="minPec" type="number" min="0" max="10" step="0.01" value="${escapeHtml(rule.minPec)}"></label>
          <label>Mínimo para aprobar<input name="minPass" type="number" min="0" max="10" step="0.01" value="${escapeHtml(rule.minPass)}"></label>
          <label>Máx. sin PEC<input name="maxNoPec" type="number" min="0" max="10" step="0.01" value="${escapeHtml(rule.maxNoPec)}"></label>
          <label>Aplicar PEC
            <select name="hasPec"><option value="yes" selected>Sí, si cumple mínimos</option><option value="no">No</option></select>
          </label>
          <label class="span-2">Notas de la regla<textarea name="ruleNotes" rows="2">${escapeHtml(rule.notes || '')}</textarea></label>
          <div class="modal-actions span-2" style="padding:0">
            <button class="secondary-button" type="button" id="loadSubjectRuleBtn">Cargar regla de la asignatura</button>
            <button class="primary-action" type="submit">Calcular y guardar escenario</button>
          </div>
        </form>
      </article>

      <article class="card col-5">
        <h3>Resultado</h3>
        <div id="gradeResult" class="result-panel">
          <p class="subtle-note">Introduce los datos y pulsa calcular. Para Métodos, GRADUS detecta por defecto la estructura 80% examen y 20% PEC, pero debe revisarse siempre con la guía vigente.</p>
          <div class="notice"><strong>Control de rigor</strong> La calculadora ayuda a planificar, pero la regla oficial siempre será la guía de la asignatura.</div>
        </div>
      </article>

      <article class="card col-5">
        <h3>Calculadora de test con penalización</h3>
        <form id="testScoreForm" class="form-grid">
          <label>N.º preguntas<input name="items" type="number" min="1" value="${escapeHtml(rule.testItems || 20)}"></label>
          <label>Opciones por pregunta<input name="options" type="number" min="2" value="${escapeHtml(rule.options || 3)}"></label>
          <label>Correctas<input name="correct" type="number" min="0" value="0"></label>
          <label>Erróneas<input name="wrong" type="number" min="0" value="0"></label>
          <label>En blanco<input name="blank" type="number" min="0" value="0"></label>
          <button class="primary-action">Calcular test</button>
        </form>
        <div id="testResult" class="result-panel small-result"></div>
      </article>

      <article class="card col-7">
        <h3>Escenarios guardados</h3>
        <p class="subtle-note">Se guardan como intentos de simulacro para aprovechar la sincronización existente sin añadir más tablas.</p>
        <div id="gradeScenarioList">${renderGradeScenarioList()}</div>
      </article>
    </div>
  `;

  const form = $('#finalGradeForm');
  const select = $('#gradeSubjectSelect');
  select.value = selectedSubjectId;
  select.addEventListener('change', () => populateGradeRuleForm(select.value));
  $('#loadSubjectRuleBtn').addEventListener('click', () => populateGradeRuleForm(select.value));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subjectId = String(data.get('subjectId'));
    const currentRule = {
      examWeight: Number(data.get('examWeight') || 0),
      pecWeight: Number(data.get('pecWeight') || 0),
      minExamForPec: Number(data.get('minExamForPec') || 0),
      minPec: Number(data.get('minPec') || 0),
      minPass: Number(data.get('minPass') || 5),
      maxNoPec: Number(data.get('maxNoPec') || 10),
      testItems: gradeRuleForSubject(subjectId).testItems,
      options: gradeRuleForSubject(subjectId).options,
      notes: String(data.get('ruleNotes') || '')
    };
    saveGradeRule(subjectId, currentRule);
    const examScore = normalizeGradeInput(data.get('examScore'));
    const pecScore = normalizeGradeInput(data.get('pecScore'));
    const hasPec = data.get('hasPec') === 'yes';
    const result = calculateFinalGrade({ examScore, pecScore, hasPec, rule: currentRule });
    const today = new Date().toISOString().slice(0, 10);
    state.attempts.push({
      id: cryptoRandomId(),
      subjectId,
      semester: normalizeSemester(subjectById(subjectId)?.semester),
      date: today,
      title: `Escenario de nota · ${subjectName(subjectId)}`,
      score: result.finalScore,
      durationMinutes: null,
      notes: `Examen ${examScore}; PEC ${hasPec ? pecScore : 'no aplicada'}; regla ${currentRule.examWeight}%/${currentRule.pecWeight}%; máximo sin PEC ${currentRule.maxNoPec}; PEC ${result.pecApplies ? 'aplicada' : 'no aplicada'}; resultado ${result.passed ? 'aprobado' : 'no aprobado'}.`
    });
    saveState();
    renderGradeResult(subjectId, examScore, pecScore, hasPec, currentRule, result);
  });

  $('#testScoreForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = calculateTestScore({
      items: data.get('items'),
      options: data.get('options'),
      correct: data.get('correct'),
      wrong: data.get('wrong'),
      blank: data.get('blank')
    });
    $('#testResult').innerHTML = `
      <div class="score-meter"><strong>${result.score}</strong><span>/10</span></div>
      <p>Puntuación bruta: ${result.raw}. Penalización aplicada: ${result.penalty} puntos brutos.</p>
      ${result.warning ? `<div class="notice danger-notice"><strong>Revisar</strong> ${escapeHtml(result.warning)}</div>` : ''}
    `;
  });
}

function populateGradeRuleForm(subjectId) {
  const rule = gradeRuleForSubject(subjectId);
  const form = $('#finalGradeForm');
  if (!form) return;
  form.elements.examWeight.value = rule.examWeight;
  form.elements.pecWeight.value = rule.pecWeight;
  form.elements.minExamForPec.value = rule.minExamForPec;
  form.elements.minPec.value = rule.minPec;
  form.elements.minPass.value = rule.minPass;
  form.elements.maxNoPec.value = rule.maxNoPec;
  form.elements.ruleNotes.value = rule.notes || '';
}

function renderGradeResult(subjectId, examScore, pecScore, hasPec, rule, result) {
  const targets = renderGradeTargets(rule, pecScore, hasPec);
  $('#gradeResult').innerHTML = `
    <div class="score-meter ${result.passed ? 'passed' : 'failed'}"><strong>${result.finalScore}</strong><span>/10</span></div>
    <div class="list compact-list">
      <div class="list-item"><strong>Asignatura</strong><p>${escapeHtml(subjectName(subjectId))}</p></div>
      <div class="list-item"><strong>Examen</strong><p>${examScore} aporta ${result.examContribution}</p></div>
      <div class="list-item"><strong>PEC/trabajo</strong><p>${result.pecApplies ? `${pecScore} aporta ${result.pecContribution}` : 'No aplicada con esta regla'}</p></div>
      <div class="list-item"><strong>Estado</strong><p>${result.passed ? 'Superaría la asignatura con esta simulación.' : 'No alcanzaría el mínimo configurado.'}</p></div>
    </div>
    <h4>Notas necesarias según objetivo</h4>
    ${targets}
  `;
  const scenarioList = $('#gradeScenarioList');
  if (scenarioList) scenarioList.innerHTML = renderGradeScenarioList();
}


function renderProgress() {
  const subjects = filteredSubjects();
  $('#progreso').innerHTML = `
    <div class="grid-12">
      <article class="card col-4">
        <h3>Actualizar progreso</h3>
        <form id="progressForm" class="form-grid">
          <label class="span-2">Asignatura<select name="subjectId" required>${subjectOptions()}</select></label>
          <label>Progreso %<input name="progress" type="number" min="0" max="100" required placeholder="0-100"></label>
          <label>Riesgo
            <select name="risk"><option value="alto">Alto</option><option value="medio" selected>Medio</option><option value="bajo">Bajo</option></select>
          </label>
          <label class="span-2">Estado
            <select name="status"><option value="por_configurar">Por configurar</option><option value="pendiente">Pendiente</option><option value="revisado">Revisado</option><option value="por_decidir">Por decidir</option></select>
          </label>
          <label class="span-2">Estrategia u observación<textarea name="strategy" rows="3" placeholder="Actualizar estrategia si procede"></textarea></label>
          <button class="primary-action span-2">Guardar progreso</button>
        </form>
      </article>
      <article class="card col-8">
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
  $('#progressForm').addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = subjectById(String(formData.get('subjectId')));
    if (!subject) return;
    subject.progress = Math.max(0, Math.min(100, Number(formData.get('progress') || 0)));
    subject.risk = String(formData.get('risk') || subject.risk || 'medio');
    subject.status = String(formData.get('status') || subject.status || 'pendiente');
    const strategy = String(formData.get('strategy') || '').trim();
    if (strategy) subject.strategy = strategy;
    saveState();
    renderProgress();
  });
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
          <div class="list-item"><strong>Banco de preguntas</strong><p>${escapeHtml(state.questions.length)} preguntas históricas o patrones documentados</p></div>
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
          <div class="list-item"><strong>Documentos privados</strong><p>La biblioteca puede guardar fichas y archivos en un bucket privado de Supabase Storage.</p></div>
        </div>
      </article>
    </div>
  `;
  $('#exportDataBtn').addEventListener('click', exportData);
  $('#syncNowBtn').addEventListener('click', () => persistStateToSupabase({ immediate: true }));
  $('#resetDataBtn').addEventListener('click', () => {
    if (!confirm('¿Seguro que quieres restaurar los datos iniciales de GRADUS v0.8?')) return;
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

function examOptions() {
  return state.exams
    .map(exam => `<option value="${escapeHtml(exam.id)}">${escapeHtml(subjectName(exam.subjectId))} · ${escapeHtml(exam.year)} · ${escapeHtml(exam.call)}</option>`)
    .join('');
}

function populateEventSubjectSelect() {
  $('#eventSubjectSelect').innerHTML = subjectOptions();
}

async function openMaterialFile(materialId) {
  const material = state.materials.find(item => String(item.id) === String(materialId));
  if (!material?.filePath) {
    alert('Este material no tiene archivo privado adjunto.');
    return;
  }
  if (!supabaseClient || !authSession) {
    alert('Debes iniciar sesión en Supabase para abrir archivos privados.');
    return;
  }
  setSyncStatus('Generando enlace privado...', 'warning');
  const { data, error } = await supabaseClient.storage
    .from(MATERIAL_BUCKET)
    .createSignedUrl(material.filePath, 60 * 10, { download: false });
  if (error) {
    console.error('Error al abrir archivo privado:', error);
    setSyncStatus('Error al abrir archivo', 'danger');
    alert(`No se pudo abrir el archivo: ${error.message}`);
    return;
  }
  setSyncStatus('Sincronizado con Supabase', 'online');
  window.open(data.signedUrl, '_blank', 'noopener');
}

async function deleteMaterialFile(material) {
  if (!material?.filePath || !supabaseClient || !authSession) return;
  const { error } = await supabaseClient.storage.from(MATERIAL_BUCKET).remove([material.filePath]);
  if (error) {
    console.warn('No se pudo eliminar el archivo privado asociado:', error.message);
    setSyncStatus('Archivo no eliminado', 'warning');
  }
}

async function deleteFromSupabase(collection, id) {
  if (!supabaseClient || !authSession) return;
  const tableMap = {
    events: 'academic_events',
    materials: 'materials',
    exams: 'exams',
    attempts: 'simulation_attempts',
    questions: 'exam_questions'
  };
  const table = tableMap[collection];
  if (!table) return;
  const { error } = await supabaseClient.from(table).delete().eq('user_id', authSession.user.id).eq('id', id);
  if (error) {
    console.error('Error al eliminar en Supabase:', error);
    setSyncStatus('Error al eliminar', 'danger');
  } else {
    setSyncStatus('Sincronizado con Supabase', 'online');
  }
}


function setupFocusToggle() {
  const button = $('#focusModeBtn');
  if (!button) return;
  button.addEventListener('click', () => {
    state.ui.focusMode = !state.ui.focusMode;
    applyUiMode();
    saveState({ sync: false });
  });
  applyUiMode();
}

function setupGlobalActions() {
  document.addEventListener('click', async event => {
    const jumpButton = event.target.closest('[data-jump-view]');
    if (jumpButton) {
      setView(jumpButton.dataset.jumpView);
      return;
    }

    const openMaterialButton = event.target.closest('[data-open-material-id]');
    if (openMaterialButton) {
      await openMaterialFile(openMaterialButton.dataset.openMaterialId);
      return;
    }

    const deleteButton = event.target.closest('[data-delete-collection]');
    if (!deleteButton) return;
    const collection = deleteButton.dataset.deleteCollection;
    const id = deleteButton.dataset.deleteId;
    const labels = { events: 'fecha', materials: 'material', exams: 'examen', attempts: 'intento', questions: 'pregunta' };
    if (!state[collection] || !id) return;
    if (!confirm(`¿Eliminar esta ${labels[collection] || 'entrada'}?`)) return;
    const materialToDelete = collection === 'materials' ? state.materials.find(item => String(item.id) === String(id)) : null;
    if (materialToDelete) await deleteMaterialFile(materialToDelete);
    state[collection] = state[collection].filter(item => String(item.id) !== String(id));
    if (collection === 'exams') {
      state.questions = state.questions.filter(question => String(question.examId || '') !== String(id));
    }
    saveLocalState();
    await deleteFromSupabase(collection, id);
    const dialog = $('#subjectDialog');
    if (dialog?.open) dialog.close();
    renderView($('.active-view')?.id || 'inicio');
  });
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
  setupFocusToggle();
  setupEventDialog();
  setupSubjectDialog();
  setupAuthDialog();
  setupGlobalActions();
  setupPWA();
  setupSupabaseClient();
  await setupAuth();
  setSessionLabel();
  renderHome();
}

init();
