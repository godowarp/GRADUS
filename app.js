const STORAGE_KEY = 'gradus.simple.state';
const MATERIAL_BUCKET = 'gradus-materials';

const SEMESTERS = {
  primer: 'Primer cuatrimestre',
  segundo: 'Segundo cuatrimestre'
};

const SUBJECTS = [
  {
    id: 'diseno-curriculo', color: '#6f4e37', name: 'Diseño, Desarrollo e Innovación del Currículum', code: '63022037', semester: 'primer', credits: 6, kind: 'Obligatoria',
    exam: 'Sí. Examen de desarrollo: 4 temas de ensayo, 120 minutos, sin material.',
    pec: 'Opcional. Puede sumar hasta 2 puntos si el examen está aprobado con al menos 5. Fecha orientativa: 10 de enero de 2027.',
    weighting: 'Examen 100%. PEC opcional como mejora hasta +2 puntos.',
    bibliography: {
      manual: ['Gimeno Sacristán, J., Santos Guerra, M. A., Torres Santomé, J., Jackson, P. W. y Marrero Acosta, J. Ensayos sobre el curriculum: teoría y práctica. Morata.'],
      complementary: ['Escuelas y justicia social. Morata.', 'Beane, J. A. La integración del curriculum. Morata.', 'Tanner, R. A. y Ayers, W. Enseñar, un viaje en cómic. Morata.', 'Pennac, D. Mal de escuela. Debolsillo.']
    }
  },
  {
    id: 'evaluacion-centros', color: '#9a4f2d', name: 'Evaluación de Centros y Profesores', code: '63024036', semester: 'primer', credits: 6, kind: 'Obligatoria',
    exam: 'Sí. Examen mixto: 15 preguntas tipo test y 1 pregunta de desarrollo. 120 minutos, sin material.',
    pec: 'Sí. PEC obligatoria. Debe presentarse antes del examen. Sin PEC, no se pondera el examen.',
    weighting: 'Examen 60%. PEC obligatoria 40%. Test: 15 ítems, 0,4 por acierto y -0,2 por error. Desarrollo: 4 puntos.',
    bibliography: {
      manual: ['Redondo Duarte, S. Evaluación de centros y profesorado. Sanz y Torres.'],
      complementary: ['Lecturas complementarias por temas facilitadas en el curso virtual.']
    }
  },
  {
    id: 'practicas-v', color: '#557a46', name: 'Prácticas Profesionales V', code: '63024065', semester: 'primer', credits: 6, kind: 'Obligatoria',
    exam: 'No hay prueba presencial.',
    pec: 'No hay PEC. La evaluación se realiza mediante dos actividades evaluables.',
    weighting: 'Actividad 1: formación práctica y autoevaluación, 20%. Actividad 2: proyecto profesional creativo e innovador, 80%. Ambas partes deben superarse con al menos 5.',
    bibliography: {
      manual: ['Guía de Estudio de la asignatura y documentos del aula virtual.'],
      complementary: ['Martín Cuadrado, A. M. La intervención socioeducativa: diseño, desarrollo y evaluación, vol. I. UNED.', 'Quintanal Díaz, J., Sevillano García, M. L. y Ruiz-Corbella, M. Las prácticas profesionales en titulaciones de educación. UNED.']
    }
  },
  {
    id: 'evaluacion-politicas', color: '#496a8f', name: 'Evaluación de Políticas y Sistemas Educativos', code: '63024088', semester: 'primer', credits: 6, kind: 'Optativa',
    exam: 'Sí. Examen de desarrollo: 2 preguntas obligatorias, 90 minutos, sin material.',
    pec: 'No hay PEC.',
    weighting: 'Examen 100%. Cada pregunta vale 5 puntos. La guía advierte de penalización severa por faltas de ortografía.',
    bibliography: {
      manual: ['No hay un único manual básico. La bibliografía básica se organiza por lecturas de las cuatro unidades didácticas.'],
      complementary: ['Kisilevsky, M. y Roca, E. (coords.). Indicadores, metas y políticas educativas. OEI.', 'Martín, E. y Martínez Rizo, F. (coords.). Avances y desafíos en la evaluación educativa. OEI.', 'Tiana, A. Tratamiento y usos de la información en evaluación. OEI.']
    }
  },
  {
    id: 'educacion-economia', color: '#8a6f2d', name: 'Educación, Economía y Desarrollo', code: '63014167', semester: 'primer', credits: 6, kind: 'Optativa',
    exam: 'Sí. Examen de desarrollo: se proponen 5 preguntas y se responden 4. 120 minutos, sin material.',
    pec: 'No consta PEC en la ficha analizada.',
    weighting: 'Examen 100%. Se valora claridad, precisión, pertinencia de datos, análisis crítico y relación entre contenidos.',
    bibliography: {
      manual: ['Morduchowicz, A. Discusiones de economía de la educación. Losada.', 'Navarro, V. El subdesarrollo social de España. Anagrama.'],
      complementary: ['González, M. J. Introducción a la economía. Pearson Alhambra.', 'Carnoy, M. Economía de la educación. UOC.']
    }
  },
  {
    id: 'evaluacion-programas', color: '#3d6f7c', name: 'Evaluación de Programas', code: '63024059', semester: 'segundo', credits: 6, kind: 'Obligatoria',
    exam: 'Sí. Examen de desarrollo: 4 preguntas teóricas y un supuesto práctico con 4 preguntas. 120 minutos, sin material.',
    pec: 'No hay PEC. Hay trabajo práctico voluntario.',
    weighting: 'Examen 100%. Trabajo voluntario hasta +2 puntos si el examen está aprobado con 5 o más. Entrega aproximada del trabajo: 7 de mayo de 2027.',
    bibliography: {
      manual: ['Martínez Mediano, C. Evaluación de programas. UNED.', 'Martínez Mediano, C. E-book: Evaluación de programas. UNED.'],
      complementary: ['Martínez Mediano, C. Técnicas e instrumentos de recogida y análisis de datos. UNED.', 'Bibliografía adicional indicada en la guía.']
    }
  },
  {
    id: 'funcion-pedagogica', color: '#6f5c91', name: 'Formación y Actualización en la Función Pedagógica', code: '6302402-', semester: 'segundo', credits: 6, kind: 'Obligatoria',
    exam: 'Sí. Examen de desarrollo: 5 preguntas breves y 2 temas a elegir entre 3. 120 minutos, sin material.',
    pec: 'Sí. PEC obligatoria. Deben aprobarse examen y PEC con 5 o más.',
    weighting: 'Examen 60%. PEC obligatoria 30%. Actividad adicional 10% si procede según guía.',
    bibliography: {
      manual: ['Martín Cuadrado, A. M., Campos Barrionuevo, B. y Pérez Sánchez, L. El desarrollo de la profesión docente. UNED.', 'Relatos biográficos en la formación docente, según opción de PEC. UNED.'],
      complementary: ['Recursos para atender a la diversidad en contextos educativos. UNED.', 'Manual teórico-práctico para programar por competencias. UNED.']
    }
  },
  {
    id: 'tfg', color: '#323f4b', name: 'Trabajo Fin de Grado', code: '63024013', semester: 'segundo', credits: 6, kind: 'TFG',
    exam: 'No hay prueba presencial. Hay memoria y defensa oral.',
    pec: 'No existe PEC.',
    weighting: 'Memoria 80%. Defensa 20%. Para defender, la memoria debe estar aprobada por la dirección académica.',
    bibliography: {
      manual: ['Bibliografía específica según línea de TFG.', 'Normativa, cronograma, líneas, declaración de autoría y documentación de integridad académica.'],
      complementary: ['Recursos de biblioteca UNED sobre búsqueda bibliográfica, citas y referencias.']
    }
  },
  {
    id: 'bases', color: '#b14b57', name: 'Bases del Aprendizaje y Educación', code: '63901098', semester: 'segundo', credits: 6, kind: 'Pendiente',
    exam: 'Sí. Test verdadero/falso: 40 ítems, 120 minutos, sin material.',
    pec: 'Sí. PEC en abril. No puede entregarse en septiembre, pero computa en ordinaria y extraordinaria si fue realizada.',
    weighting: 'Examen 2/3. PEC 1/3. Fórmula del test: P = (A - E) / 4. Sin PEC, para aprobar se requiere 7,5 en el examen.',
    bibliography: {
      manual: ['López-Martín, E., Martín-Aragoneses, M. T. y Expósito-Casas, E. Bases del aprendizaje y educación. Sanz y Torres.'],
      complementary: ['No precisa bibliografía complementaria obligatoria. El equipo docente puede facilitar recomendaciones.']
    }
  },
  {
    id: 'metodos', color: '#2f6f62', name: 'Métodos y Diseños de Investigación en Educación', code: '63022095', semester: 'segundo', credits: 6, kind: 'Pendiente',
    exam: 'Sí. Examen mixto: 20 preguntas test, 12 teóricas y 8 prácticas, más 1 pregunta de desarrollo. 120 minutos.',
    pec: 'Sí. PEC-1 autoevaluable sin peso. PEC-2 obligatoria para ponderar, análisis de un proyecto de investigación, entrega aproximada del 10 al 14 de mayo de 2027.',
    weighting: 'Examen 80%. PEC-2 20%. En el test, cada dos errores restan un punto. Desarrollo de una página y se califica solo si se aprueba la prueba objetiva.',
    bibliography: {
      manual: ['Quintanal, J. y Sánchez. Métodos y diseños de investigación en contextos socioeducativos. Sanz y Torres.'],
      complementary: ['Sánchez Huete, J. C. y Quintanal Díaz, J. Métodos y diseños de investigación en contextos socioeducativos. CCS.', 'Bibliografía complementaria indicada en la guía para ampliar y practicar.']
    }
  }
];

const SEED_EVENTS = [
  { id: 'ev-diseno-pec', subjectId: 'diseno-curriculo', type: 'Entrega', title: 'PEC opcional · Diseño del Currículum', date: '2027-01-10', notes: 'Fecha orientativa indicada en la guía: 15 días antes de las primeras pruebas presenciales.' },
  { id: 'ev-practicas-1', subjectId: 'practicas-v', type: 'Entrega', title: 'Prácticas V · primera entrega', date: '2026-12-14', notes: 'Entrega de actividades en Ágora.' },
  { id: 'ev-practicas-2', subjectId: 'practicas-v', type: 'Entrega', title: 'Prácticas V · segunda entrega', date: '2027-01-08', notes: 'Entrega de actividades en Ágora.' },
  { id: 'ev-metodos-pec1', subjectId: 'metodos', type: 'Entrega', title: 'Métodos · PEC-1 autoevaluable', date: '2027-04-06', notes: 'Ventana aproximada: 6 al 9 de abril de 2027.' },
  { id: 'ev-programas-aviso', subjectId: 'evaluacion-programas', type: 'Entrega', title: 'Evaluación de Programas · comunicar intención de trabajo', date: '2027-04-09', notes: 'Comunicar intención de entregar trabajo voluntario antes del 9 de abril.' },
  { id: 'ev-programas-trabajo', subjectId: 'evaluacion-programas', type: 'Entrega', title: 'Evaluación de Programas · trabajo voluntario', date: '2027-05-07', notes: 'Entrega aproximada del trabajo voluntario.' },
  { id: 'ev-metodos-pec2', subjectId: 'metodos', type: 'Entrega', title: 'Métodos · PEC-2', date: '2027-05-14', notes: 'Ventana aproximada: 10 al 14 de mayo de 2027.' }
];

const MATERIAL_TEMPLATES = SUBJECTS.flatMap(subject => ([
  { id: `guide-${subject.id}`, subjectId: subject.id, title: `Guía de ${subject.name}`, kind: 'Guía', notes: 'Documento oficial de la asignatura.' },
  { id: `manual-${subject.id}`, subjectId: subject.id, title: subject.bibliography.manual[0] || 'Manual de la asignatura', kind: 'Manual', notes: 'Referencia bibliográfica básica.' },
  { id: `bib-${subject.id}`, subjectId: subject.id, title: 'Bibliografía complementaria', kind: 'Bibliografía', notes: subject.bibliography.complementary.join(' · ') }
]));

const SIMULATIONS = [
  {
    id: 'bases-1', subjectId: 'bases', title: 'Bases · Simulacro V/F 1', format: 'Verdadero/Falso', duration: 20,
    questions: [
      { q: 'El axón constituye el centro metabólico de la neurona.', type: 'tf', a: 'Falso', exp: 'El centro metabólico de la neurona es el soma o cuerpo celular.' },
      { q: 'En las sinapsis eléctricas, el impulso nervioso pasa directamente a través de uniones comunicantes.', type: 'tf', a: 'Verdadero', exp: 'Las sinapsis eléctricas se producen mediante uniones comunicantes o gap junctions.' },
      { q: 'El espacio subaracnoideo se encuentra entre la aracnoides y la duramadre.', type: 'tf', a: 'Falso', exp: 'Se sitúa entre la aracnoides y la piamadre.' },
      { q: 'El núcleo rojo forma parte del bulbo raquídeo.', type: 'tf', a: 'Falso', exp: 'El núcleo rojo se localiza en el mesencéfalo.' },
      { q: 'El epitálamo controla el sistema endocrino.', type: 'tf', a: 'Falso', exp: 'La regulación endocrina se asocia principalmente al hipotálamo; el epitálamo incluye la glándula pineal.' },
      { q: 'Los dos hemisferios del cerebelo están unidos por el cuerpo calloso.', type: 'tf', a: 'Falso', exp: 'El cuerpo calloso conecta los hemisferios cerebrales, no los cerebelosos.' },
      { q: 'La amígdala interviene de manera decisiva en la expresión de las emociones.', type: 'tf', a: 'Verdadero', exp: 'La amígdala forma parte del sistema límbico y se relaciona con la emoción.' },
      { q: 'Aprender fuera de un periodo sensible puede requerir más tiempo y más recursos cognitivos.', type: 'tf', a: 'Verdadero', exp: 'Los periodos sensibles facilitan determinados aprendizajes.' }
    ]
  },
  {
    id: 'bases-2', subjectId: 'bases', title: 'Bases · Simulacro V/F 2', format: 'Verdadero/Falso', duration: 20,
    questions: [
      { q: 'En el cerebro, las células gliales son menos numerosas que las neuronas.', type: 'tf', a: 'Falso', exp: 'Las células gliales son muy abundantes y cumplen funciones esenciales de soporte y regulación.' },
      { q: 'En las sinapsis eléctricas, las membranas están separadas por una hendidura sináptica como en la sinapsis química.', type: 'tf', a: 'Falso', exp: 'La hendidura sináptica caracteriza la sinapsis química; en la eléctrica hay comunicación directa mediante uniones.' },
      { q: 'La duramadre se encuentra íntimamente adherida al encéfalo.', type: 'tf', a: 'Falso', exp: 'La piamadre es la meninge íntimamente adherida al encéfalo.' },
      { q: 'El hipotálamo forma parte del diencéfalo.', type: 'tf', a: 'Verdadero', exp: 'El hipotálamo es una estructura del diencéfalo.' },
      { q: 'La glándula pineal está implicada en la regulación del ciclo sueño-vigilia.', type: 'tf', a: 'Verdadero', exp: 'La pineal secreta melatonina, relacionada con ritmos circadianos.' },
      { q: 'Las fibras de asociación conectan regiones corticales del mismo hemisferio.', type: 'tf', a: 'Verdadero', exp: 'Las fibras de asociación comunican áreas dentro de un mismo hemisferio.' },
      { q: 'La formación hipocampal está especialmente implicada en aprendizaje y memoria.', type: 'tf', a: 'Verdadero', exp: 'El hipocampo es clave para procesos de memoria y aprendizaje.' },
      { q: 'El periodo más intenso de neurogénesis tiene lugar durante el primer año de vida extrauterina.', type: 'tf', a: 'Falso', exp: 'La neurogénesis más intensa se produce durante el desarrollo prenatal.' }
    ]
  },
  {
    id: 'metodos-1', subjectId: 'metodos', title: 'Métodos · Test teórico 1', format: 'Alternativa múltiple', duration: 25,
    questions: [
      { q: 'El método inductivo trata de:', type: 'mc', options: ['Extraer conclusiones mediante la observación repetida de hechos concretos.', 'Partir de una teoría general y comprobar un caso particular.', 'Construir una escala normativa a partir de una muestra aleatoria.'], a: 'Extraer conclusiones mediante la observación repetida de hechos concretos.', exp: 'La inducción parte de observaciones particulares para formular generalizaciones.' },
      { q: 'En los métodos mixtos son especialmente relevantes:', type: 'mc', options: ['La pluralidad y la complementariedad, sin necesidad de sistematicidad.', 'La contextualización, pero no la combinación de paradigmas.', 'La pluralidad, la contextualización, la sistematicidad y la complementariedad de paradigmas.'], a: 'La pluralidad, la contextualización, la sistematicidad y la complementariedad de paradigmas.', exp: 'El enfoque mixto integra perspectivas y exige coherencia metodológica.' },
      { q: 'En una historia de vida, forman parte del proceso:', type: 'mc', options: ['Determinar objetivos y seleccionar informantes.', 'Transcribir información, analizarla e interpretarla.', 'Ambas respuestas son correctas.'], a: 'Ambas respuestas son correctas.', exp: 'La historia de vida requiere preparación, recogida, transcripción, análisis e interpretación.' },
      { q: 'La investigación cualitativa suele utilizar como técnicas:', type: 'mc', options: ['Entrevista, observación, diario, cuestionario y estudio de casos.', 'Solo pruebas paramétricas y análisis de varianza.', 'Únicamente escalas normativas estandarizadas.'], a: 'Entrevista, observación, diario, cuestionario y estudio de casos.', exp: 'Son técnicas habituales de recogida de información cualitativa.' },
      { q: 'En el examen de Métodos, la prueba objetiva incluye:', type: 'mc', options: ['20 ítems: 12 teóricos y 8 prácticos.', '40 ítems verdadero/falso.', '15 ítems y un desarrollo de dos caras.'], a: '20 ítems: 12 teóricos y 8 prácticos.', exp: 'La guía distingue 12 ítems teóricos y 8 prácticos.' },
      { q: 'La pregunta de desarrollo de Métodos:', type: 'mc', options: ['Se califica siempre, aunque el test esté suspenso.', 'Solo se califica si se aprueba la prueba objetiva.', 'Sustituye a la PEC-2.'], a: 'Solo se califica si se aprueba la prueba objetiva.', exp: 'La guía indica que el desarrollo requiere aprobar la prueba objetiva.' },
      { q: 'La PEC-2 de Métodos consiste en:', type: 'mc', options: ['Un análisis de un proyecto de investigación real publicado.', 'Un examen oral por videoconferencia.', 'Un test de 40 preguntas verdadero/falso.'], a: 'Un análisis de un proyecto de investigación real publicado.', exp: 'La PEC-2 se centra en analizar un proyecto de investigación publicado.' },
      { q: 'En el test de Métodos, los errores:', type: 'mc', options: ['No penalizan.', 'Penalizan: cada dos errores restan un punto.', 'Anulan automáticamente la pregunta de desarrollo.'], a: 'Penalizan: cada dos errores restan un punto.', exp: 'La guía recoge penalización por error en la prueba objetiva.' }
    ]
  },
  {
    id: 'metodos-2', subjectId: 'metodos', title: 'Métodos · Test aplicado 2', format: 'Alternativa múltiple', duration: 25,
    questions: [
      { q: 'Un problema de investigación debe formularse de forma:', type: 'mc', options: ['Clara, resoluble y vinculada a una situación relevante.', 'Ambigua para permitir más interpretaciones.', 'Sin relación con variables ni contexto.'], a: 'Clara, resoluble y vinculada a una situación relevante.', exp: 'La formulación del problema exige claridad, posibilidad de resolución y relevancia.' },
      { q: 'La calidad de un informe de investigación exige:', type: 'mc', options: ['Precisión, coherencia entre apartados y justificación metodológica.', 'Extensión máxima aunque no responda al problema.', 'Eliminar la discusión de resultados.'], a: 'Precisión, coherencia entre apartados y justificación metodológica.', exp: 'Un informe debe articular problema, método, resultados y conclusiones con coherencia.' },
      { q: 'En un diseño experimental, la validez interna se relaciona con:', type: 'mc', options: ['La seguridad con la que se atribuyen los efectos a la intervención.', 'La belleza formal del informe.', 'La extensión de la bibliografía complementaria.'], a: 'La seguridad con la que se atribuyen los efectos a la intervención.', exp: 'La validez interna se refiere al control de explicaciones alternativas.' },
      { q: 'La reducción de datos cualitativos sirve para:', type: 'mc', options: ['Organizar, seleccionar y simplificar información sin perder significado relevante.', 'Eliminar los datos que contradicen la hipótesis.', 'Convertir cualquier dato en porcentajes.'], a: 'Organizar, seleccionar y simplificar información sin perder significado relevante.', exp: 'La reducción facilita el análisis cualitativo respetando la información sustantiva.' },
      { q: 'El estudio de caso se caracteriza por:', type: 'mc', options: ['El análisis profundo de una realidad delimitada.', 'La imposibilidad de usar varias fuentes.', 'La ausencia de contexto.'], a: 'El análisis profundo de una realidad delimitada.', exp: 'El estudio de caso busca comprensión intensiva y contextualizada.' },
      { q: 'La investigación empírica en educación exige:', type: 'mc', options: ['Recogida e interpretación rigurosa de evidencias.', 'Opiniones personales sin contraste.', 'Sustituir el marco teórico por intuiciones.'], a: 'Recogida e interpretación rigurosa de evidencias.', exp: 'La investigación empírica se apoya en datos y criterios de rigor.' },
      { q: 'La metodología mixta combina:', type: 'mc', options: ['Estrategias cuantitativas y cualitativas con integración justificada.', 'Solo técnicas estadísticas.', 'Solo relatos biográficos.'], a: 'Estrategias cuantitativas y cualitativas con integración justificada.', exp: 'Los métodos mixtos integran enfoques para ampliar la comprensión del problema.' },
      { q: 'La pregunta de desarrollo de Métodos tiene una extensión orientativa de:', type: 'mc', options: ['Una página.', 'Diez páginas.', 'No se permite respuesta escrita.'], a: 'Una página.', exp: 'La guía indica una pregunta de desarrollo amplio de una página.' }
    ]
  },
  {
    id: 'centros-1', subjectId: 'evaluacion-centros', title: 'Centros y Profesores · Test 1', format: 'Mixto, bloque test', duration: 25,
    questions: [
      { q: 'La democratización de la evaluación se entiende mejor como:', type: 'mc', options: ['Evaluar a todos con los mismos instrumentos sin atender al contexto.', 'Comunicar resultados a la opinión pública sin más condiciones.', 'Considerar necesidades, visión y valores de los grupos e instituciones implicadas.'], a: 'Considerar necesidades, visión y valores de los grupos e instituciones implicadas.', exp: 'La democratización no reduce la evaluación al patrocinador, sino que incorpora a los implicados.' },
      { q: 'La gran disyuntiva al evaluar el desempeño docente es:', type: 'mc', options: ['Méritos académicos o comportamiento docente en el aula.', 'Control administrativo o desarrollo profesional docente.', 'Evaluación voluntaria u obligatoria exclusivamente.'], a: 'Control administrativo o desarrollo profesional docente.', exp: 'La evaluación docente puede orientarse al control o a la mejora profesional.' },
      { q: 'Accountability se refiere esencialmente a:', type: 'mc', options: ['Asunción de responsabilidades ante quienes reciben, financian y proveen el servicio.', 'Autoevaluación informal del centro sin rendición de cuentas.', 'Una técnica de calificación del profesorado.'], a: 'Asunción de responsabilidades ante quienes reciben, financian y proveen el servicio.', exp: 'Implica rendición de cuentas y responsabilidad pública.' },
      { q: 'Frente a estrategias prescriptivas, se sugiere trabajar con las escuelas mediante:', type: 'mc', options: ['Estrategias competitivas.', 'Modos horizontales de trabajo.', 'Estrategias de control centralizado.'], a: 'Modos horizontales de trabajo.', exp: 'La mejora escolar requiere colaboración y construcción compartida.' },
      { q: 'Una precondición para responder mejor a evaluaciones externas es:', type: 'mc', options: ['Procesos internos de rendición de cuentas.', 'Aumentar la burocracia.', 'Reducir la autonomía escolar.'], a: 'Procesos internos de rendición de cuentas.', exp: 'Los procesos internos preparan al centro para interpretar y usar evaluaciones externas.' },
      { q: 'La validez interna en la evaluación de la docencia se refiere a:', type: 'mc', options: ['La generalización a otros contextos.', 'La consistencia de los elementos del proceso de evaluación.', 'La utilidad para los estudiantes exclusivamente.'], a: 'La consistencia de los elementos del proceso de evaluación.', exp: 'Debe haber coherencia entre modelo, criterios, instrumentos e interpretación.' },
      { q: 'Al definir el perfil de calidad docente deben considerarse:', type: 'mc', options: ['Competencias, habilidades y actitudes del profesorado.', 'Solo años de experiencia.', 'Solo número de publicaciones.'], a: 'Competencias, habilidades y actitudes del profesorado.', exp: 'La calidad docente no puede reducirse a antigüedad o producción académica.' },
      { q: 'Un indicador educativo útil para decisiones de centro o país sería:', type: 'mc', options: ['Tasa de abandono escolar temprano.', 'Periódicos vendidos por habitante.', 'Renta per cápita sin relación educativa.'], a: 'Tasa de abandono escolar temprano.', exp: 'Es un indicador educativo relevante para política y gestión escolar.' }
    ]
  },
  {
    id: 'centros-2', subjectId: 'evaluacion-centros', title: 'Centros y Profesores · Test 2', format: 'Mixto, bloque test', duration: 25,
    questions: [
      { q: 'Un modelo escolar mencionado como coherente y actual es:', type: 'mc', options: ['Escuela tradicional.', 'Escuela competitiva.', 'Escuela como comunidad de aprendizaje profesional.'], a: 'Escuela como comunidad de aprendizaje profesional.', exp: 'Este modelo vincula mejora, colaboración y aprendizaje profesional.' },
      { q: 'La validez de constructo en evaluación docente se refiere a:', type: 'mc', options: ['El grado en que los indicadores responden al planteamiento teórico de calidad.', 'La facilidad de uso del instrumento.', 'La capacidad para predecir rendimiento futuro sin modelo previo.'], a: 'El grado en que los indicadores responden al planteamiento teórico de calidad.', exp: 'Los indicadores deben representar el constructo que se pretende evaluar.' },
      { q: 'La evaluación de centros debería servir para:', type: 'mc', options: ['Mejorar la institución y orientar decisiones fundamentadas.', 'Ordenar centros sin interpretar datos.', 'Sustituir la reflexión profesional.'], a: 'Mejorar la institución y orientar decisiones fundamentadas.', exp: 'La evaluación se vincula a mejora, calidad e innovación.' },
      { q: 'En la pregunta de desarrollo se valora especialmente:', type: 'mc', options: ['Rigor conceptual, precisión terminológica y relación entre contenidos.', 'Responder de memoria sin ejemplos.', 'La extensión por encima de la pertinencia.'], a: 'Rigor conceptual, precisión terminológica y relación entre contenidos.', exp: 'La guía y los modelos de examen insisten en pertinencia, rigor y expresión escrita.' },
      { q: 'La PEC de Evaluación de Centros y Profesores es:', type: 'mc', options: ['Obligatoria y pesa el 40%.', 'Voluntaria y suma hasta 2 puntos.', 'Inexistente.'], a: 'Obligatoria y pesa el 40%.', exp: 'Debe presentarse antes del examen para poder ponderar.' },
      { q: 'El test del examen tiene:', type: 'mc', options: ['15 ítems con tres opciones.', '40 ítems verdadero/falso.', '20 ítems y 8 problemas prácticos.'], a: '15 ítems con tres opciones.', exp: 'La prueba escrita incluye un test de 15 ítems.' },
      { q: 'Cada respuesta incorrecta del test supone:', type: 'mc', options: ['-0,2 puntos.', '-1 punto.', 'No penaliza.'], a: '-0,2 puntos.', exp: 'Los modelos indican 0,4 por acierto y -0,2 por error.' },
      { q: 'Si se acude al examen sin haber presentado la PEC:', type: 'mc', options: ['No se califica la prueba y consta como NP.', 'Se pondera solo el test.', 'La PEC se sustituye por el desarrollo.'], a: 'No se califica la prueba y consta como NP.', exp: 'La guía advierte que la PEC debe presentarse antes de la prueba escrita.' }
    ]
  }
];

const SUBJECT_COLORS = {
  'diseno-curriculo': '#7c3aed',
  'evaluacion-centros': '#d97706',
  'practicas-v': '#16a34a',
  'evaluacion-politicas': '#2563eb',
  'educacion-economia': '#be123c',
  'evaluacion-programas': '#0891b2',
  'funcion-pedagogica': '#a21caf',
  'tfg': '#334155',
  'bases': '#0f766e',
  'metodos': '#ea580c'
};
SUBJECTS.forEach(s => { if (SUBJECT_COLORS[s.id]) s.color = SUBJECT_COLORS[s.id]; });

const SPECIAL_TRACKS = {
  'tfg': [
    'Elección y delimitación del tema',
    'Contacto con tutor/a y acuerdo de enfoque',
    'Búsqueda bibliográfica inicial',
    'Estructura provisional del trabajo',
    'Primer borrador',
    'Revisión formal y APA 7',
    'Entrega final',
    'Preparación de la defensa'
  ],
  'practicas-v': [
    'Lectura completa de la guía',
    'Identificación de actividades obligatorias',
    'Planificación de evidencias',
    'Borrador de Actividad 1',
    'Borrador de Actividad 2',
    'Revisión de rúbrica y requisitos',
    'Entrega final'
  ]
};

const dom = {
  loginScreen: document.getElementById('loginScreen'),
  appShell: document.getElementById('appShell'),
  loginForm: document.getElementById('loginForm'),
  loginMessage: document.getElementById('loginMessage'),
  viewTitle: document.getElementById('viewTitle'),
  viewEyebrow: document.getElementById('viewEyebrow'),
  views: document.querySelectorAll('.view'),
  nav: document.querySelectorAll('.nav-link'),
  signOutBtn: document.getElementById('signOutBtn'),
  studyTodayBtn: document.getElementById('studyTodayBtn'),
  addEventBtn: document.getElementById('addEventBtn'),
  eventDialog: document.getElementById('eventDialog'),
  eventForm: document.getElementById('eventForm'),
  simulationDialog: document.getElementById('simulationDialog'),
  simulationTitle: document.getElementById('simulationTitle'),
  simulationBody: document.getElementById('simulationBody'),
  closeSimulationDialog: document.getElementById('closeSimulationDialog')
};

let supabaseClient = null;
let session = null;
let state = loadLocalState();
let currentView = 'desk';
let activeSubjectId = null;
let calendarMode = 'month';
let calendarDate = new Date();
let currentSimulation = null;

function loadLocalState() {
  const base = {
    events: SEED_EVENTS,
    materials: MATERIAL_TEMPLATES,
    attempts: [],
    studyLog: {},
    taskChecks: {},
    settings: { notifications: false, inactivityHour: '21:00' }
  };
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return base;
  try {
    const parsed = JSON.parse(raw);
    return {
      events: mergeById(SEED_EVENTS, parsed.events || []),
      materials: mergeById(MATERIAL_TEMPLATES, parsed.materials || []),
      attempts: parsed.attempts || [],
      studyLog: parsed.studyLog || {},
      taskChecks: parsed.taskChecks || {},
      settings: { ...base.settings, ...(parsed.settings || {}) }
    };
  } catch {
    return base;
  }
}
function saveLocalState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function mergeById(a, b) { const map = new Map(); [...a, ...b].forEach(item => map.set(item.id, item)); return [...map.values()]; }
function todayISO() { return new Date().toISOString().slice(0,10); }
function toDate(str) { const [y,m,d] = String(str).split('-').map(Number); return new Date(y, (m || 1) - 1, d || 1); }
function formatDate(str) { return toDate(str).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }); }
function daysUntil(str) { const today = toDate(todayISO()); return Math.ceil((toDate(str) - today) / 86400000); }
function subject(id) { return SUBJECTS.find(s => s.id === id) || SUBJECTS[0]; }
function escapeHtml(value='') { return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
function semesterName(semester) { return SEMESTERS[semester] || semester; }
function hasExam(s) { return !/^no\b/i.test(s.exam || ''); }
function hasPec(s) { return !/^no\b/i.test(s.pec || ''); }
function getSupabase() {
  const cfg = window.GRADUS_SUPABASE;
  if (!window.supabase || !cfg?.url || !cfg?.anonKey) return null;
  return window.supabase.createClient(cfg.url, cfg.anonKey);
}

async function init() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  supabaseClient = getSupabase();
  bindEvents();
  if (!supabaseClient) {
    showLogin('Falta la configuración privada de GRADUS.');
    return;
  }
  const { data } = await supabaseClient.auth.getSession();
  session = data.session;
  if (session) await enterApp(); else showLogin();
}
function bindEvents() {
  dom.loginForm.addEventListener('submit', handleAuth);
  dom.signOutBtn.addEventListener('click', signOut);
  dom.nav.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  dom.studyTodayBtn.addEventListener('click', markStudyToday);
  dom.addEventBtn.addEventListener('click', openEventDialog);
  dom.eventForm.addEventListener('submit', saveEvent);
  dom.closeSimulationDialog.addEventListener('click', () => dom.simulationDialog.close());
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const card = event.target.closest?.('[data-open-subject]');
      if (card) openSubject(card.dataset.openSubject);
    }
  });
  document.addEventListener('submit', event => {
    const form = event.target.closest('[data-upload-form]');
    if (form) { event.preventDefault(); handleUpload(form); }
  });
  setInterval(checkStudyReminder, 60 * 1000);
  setInterval(() => maybeNotifyUpcoming(false), 30 * 60 * 1000);
}
function showLogin(message='') {
  dom.appShell.hidden = true;
  dom.loginScreen.hidden = false;
  dom.loginMessage.textContent = message;
  document.body.classList.add('login-only');
}
async function handleAuth(event) {
  event.preventDefault();
  const data = new FormData(dom.loginForm);
  const email = String(data.get('email') || '').trim();
  const password = String(data.get('password') || '');
  const action = event.submitter?.value || 'login';
  dom.loginMessage.textContent = 'Comprobando cuenta…';
  const redirectTo = `${location.origin}${location.pathname}`;
  const result = action === 'signup'
    ? await supabaseClient.auth.signUp({ email, password, options: { emailRedirectTo: redirectTo } })
    : await supabaseClient.auth.signInWithPassword({ email, password });
  if (result.error) { dom.loginMessage.textContent = result.error.message; return; }
  if (action === 'signup' && !result.data.session) { dom.loginMessage.textContent = 'Cuenta creada. Revisa el correo para confirmar el acceso.'; return; }
  session = result.data.session;
  await enterApp();
}
async function enterApp() {
  dom.loginScreen.hidden = true;
  dom.appShell.hidden = false;
  document.body.classList.remove('login-only');
  await seedSubjects();
  await loadRemoteData();
  markVisit();
  renderAll();
  maybeNotifyUpcoming(false);
  notifyIfPreviousDayMissed();
}
async function signOut() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  session = null;
  activeSubjectId = null;
  showLogin();
}
async function seedSubjects() {
  if (!session) return;
  const rows = SUBJECTS.map(s => ({
    user_id: session.user.id,
    id: s.id,
    name: s.name,
    code: s.code,
    semester: s.semester === 'primer' ? 'primer_cuatrimestre' : 'segundo_cuatrimestre',
    credits: s.credits,
    type: s.kind,
    status: 'activo',
    risk: ['bases','metodos','evaluacion-centros','practicas-v','tfg'].includes(s.id) ? 'alto' : 'medio',
    progress: Math.round(subjectProgress(s.id)),
    exam_type: s.exam,
    evaluation: s.weighting,
    notes: s.pec,
    strategy: hasExam(s) ? 'Trabajar materiales y realizar simulacros con registro de resultados.' : 'Trabajar por hitos, entregables y revisión de requisitos.'
  }));
  try { await supabaseClient.from('subjects').upsert(rows).select(); } catch {}
}
async function loadRemoteData() {
  if (!session) return;
  const user = session.user.id;
  try {
    const [eventsRes, materialsRes, attemptsRes] = await Promise.all([
      supabaseClient.from('academic_events').select('*').eq('user_id', user),
      supabaseClient.from('materials').select('*').eq('user_id', user),
      supabaseClient.from('simulation_attempts').select('*').eq('user_id', user).order('created_at', { ascending: false })
    ]);
    if (!eventsRes.error && eventsRes.data?.length) {
      const remoteEvents = eventsRes.data.map(e => ({ id: e.id, subjectId: e.subject_id, type: e.type, title: e.title, date: e.date, notes: e.notes || '', notice: e.notice || '7', remote: true }));
      state.events = mergeById(SEED_EVENTS, mergeById(state.events, remoteEvents));
    }
    if (!materialsRes.error && materialsRes.data?.length) {
      const remoteMaterials = materialsRes.data.map(m => ({ id: m.id, subjectId: m.subject_id, title: m.title, kind: m.kind || 'Documento', notes: m.notes || '', filePath: m.file_path || '', remote: true }));
      state.materials = mergeById(MATERIAL_TEMPLATES, mergeById(state.materials, remoteMaterials));
    }
    if (!attemptsRes.error && attemptsRes.data?.length) {
      state.attempts = attemptsRes.data.map(a => ({ id: a.id, subjectId: a.subject_id, title: a.title, score: Number(a.score), date: a.date, notes: a.notes || '' }));
    }
    saveLocalState();
  } catch {}
}
function markVisit() {
  localStorage.setItem('gradus.lastVisit', todayISO());
}

function renderAll() {
  renderDesk();
  renderSubjects();
  renderSubjectDetail();
  renderCalendar();
  renderSimulations();
  renderSettings();
}
function setView(view) {
  currentView = view;
  if (view !== 'subjectDetail') activeSubjectId = null;
  dom.views.forEach(v => v.classList.toggle('active-view', v.id === view));
  dom.nav.forEach(n => n.classList.toggle('active', n.dataset.view === view));
  const titles = { desk:'Inicio', subjects:'Asignaturas', subjectDetail: activeSubjectId ? subject(activeSubjectId).name : 'Asignatura', calendar:'Calendario', simulations:'Simulacros', settings:'Cuenta y avisos' };
  const eyebrows = { desk:'Escritorio personal', subjects:'Archivador por asignaturas', subjectDetail:'Mesa de asignatura', calendar:'Corcho de fechas', simulations:'Práctica autocorregible', settings:'Acceso y notificaciones' };
  dom.viewTitle.textContent = titles[view] || 'GRADUS';
  dom.viewEyebrow.textContent = eyebrows[view] || 'GRADUS';
  renderAll();
}
function upcomingEvents(limit=7) {
  const today = toDate(todayISO());
  return state.events.filter(e => e.date && toDate(e.date) >= today).sort((a,b) => toDate(a.date)-toDate(b.date)).slice(0, limit);
}
function subjectProgress(subjectId) {
  const s = subject(subjectId);
  if (SPECIAL_TRACKS[subjectId]) {
    const tasks = SPECIAL_TRACKS[subjectId];
    const checked = tasks.filter((_, i) => state.taskChecks[`${subjectId}-${i}`]).length;
    return tasks.length ? (checked / tasks.length) * 100 : 0;
  }
  const attempts = state.attempts.filter(a => a.subjectId === subjectId);
  if (!attempts.length) return 0;
  const best = Math.max(...attempts.map(a => Number(a.score) || 0));
  const volume = Math.min(30, attempts.length * 7.5);
  return Math.min(100, Math.round((best * 7) + volume));
}
function attemptStats(subjectId) {
  const attempts = state.attempts.filter(a => a.subjectId === subjectId);
  if (!attempts.length) return { count:0, best:null, avg:null, last:null };
  const scores = attempts.map(a => Number(a.score) || 0);
  return { count: attempts.length, best: Math.max(...scores), avg: scores.reduce((a,b)=>a+b,0)/scores.length, last: attempts[0] };
}

function renderDesk() {
  const el = document.getElementById('desk');
  const up = upcomingEvents(6);
  const today = todayISO();
  const studied = !!state.studyLog[today];
  const urgent = up.filter(e => daysUntil(e.date) <= 15).length;
  el.innerHTML = `
    <div class="grid two">
      <section class="desk-panel">
        <div class="grid three">
          <article class="card"><p class="mini">Hoy</p><div class="metric">${studied ? '✓' : '—'}</div><p>${studied ? 'Estudio registrado' : 'Sin registro de estudio'}</p></article>
          <article class="card"><p class="mini">Fechas próximas</p><div class="metric">${up.length}</div><p>${urgent} requieren atención en 15 días o menos</p></article>
          <article class="card"><p class="mini">Simulacros</p><div class="metric">${state.attempts.length}</div><p>intentos guardados</p></article>
        </div>
        <div class="card" style="margin-top:16px">
          <h3>Lo siguiente en el corcho</h3>
          ${up.length ? `<div class="next-list">${up.map(renderEventItem).join('')}</div>` : `<div class="empty">Añade exámenes, entregas y tutorías para ver aquí tu ruta diaria.</div>`}
        </div>
      </section>
      <aside class="card">
        <h3>Asignaturas de trabajo inmediato</h3>
        <p>Accede directamente a materiales, evaluación, simulacros e historial.</p>
        <div class="plain-list">
          ${['evaluacion-centros','bases','metodos','tfg'].map(id => renderCompactSubject(subject(id))).join('')}
        </div>
      </aside>
    </div>`;
}
function renderEventItem(e) {
  const s = subject(e.subjectId);
  const d = daysUntil(e.date);
  return `<article class="next-item" style="--subject-color:${s.color}">
    <strong>${escapeHtml(e.title)}</strong>
    <span>${formatDate(e.date)} · ${escapeHtml(e.type)} · ${escapeHtml(s.name)}</span>
    <span>${d === 0 ? 'Hoy' : d > 0 ? `Faltan ${d} días` : `Hace ${Math.abs(d)} días`}${e.notes ? ` · ${escapeHtml(e.notes)}` : ''}</span>
  </article>`;
}
function renderCompactSubject(s) {
  const progress = Math.round(subjectProgress(s.id));
  return `<article class="next-item" data-open-subject="${s.id}" tabindex="0" role="button" style="--subject-color:${s.color}">
    <strong>${escapeHtml(s.name)}</strong>
    <span>${escapeHtml(s.kind)} · ${semesterName(s.semester)} · ${hasExam(s) ? 'con examen' : 'sin examen'}</span>
    <div class="progress-track" style="--progress:${progress}%"><span></span></div>
  </article>`;
}

function renderSubjects() {
  const el = document.getElementById('subjects');
  const first = SUBJECTS.filter(s => s.semester === 'primer');
  const second = SUBJECTS.filter(s => s.semester === 'segundo');
  el.innerHTML = `
    ${renderSubjectGroup('Primer cuatrimestre', first)}
    ${renderSubjectGroup('Segundo cuatrimestre', second)}
  `;
}
function renderSubjectGroup(title, subjects) {
  return `<section class="subject-group">
    <div class="semester-title"><h3>${title}</h3><span class="muted">${subjects.length} asignaturas</span></div>
    <div class="grid subjects">${subjects.map(renderSubjectCard).join('')}</div>
  </section>`;
}
function renderSubjectCard(s) {
  const progress = Math.round(subjectProgress(s.id));
  const stats = attemptStats(s.id);
  return `<article class="subject-card" data-open-subject="${s.id}" tabindex="0" role="button" style="--subject-color:${s.color}">
    <h3>${escapeHtml(s.name)}</h3>
    <div class="subject-code">${escapeHtml(s.code)} · ${s.credits} ECTS · ${semesterName(s.semester)}</div>
    <div class="badge-row">
      <span class="badge ok">${escapeHtml(s.kind)}</span>
      <span class="badge exam">${hasExam(s) ? 'Con examen' : 'Sin examen'}</span>
      <span class="badge pec">${hasPec(s) ? 'Con PEC / trabajos' : 'Sin PEC'}</span>
    </div>
    <div class="progress-track" style="--progress:${progress}%"><span></span></div>
    <div class="subject-card-footer">${progress}% · ${stats.count ? `${stats.count} simulacro(s)` : SPECIAL_TRACKS[s.id] ? 'seguimiento por hitos' : 'sin simulacros todavía'}</div>
  </article>`;
}
function openSubject(id) {
  activeSubjectId = id;
  currentView = 'subjectDetail';
  dom.views.forEach(v => v.classList.toggle('active-view', v.id === 'subjectDetail'));
  dom.nav.forEach(n => n.classList.remove('active'));
  dom.viewTitle.textContent = subject(id).name;
  dom.viewEyebrow.textContent = 'Mesa de asignatura';
  renderSubjectDetail();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function renderSubjectDetail() {
  const el = document.getElementById('subjectDetail');
  if (!activeSubjectId) { el.innerHTML = `<div class="empty">Selecciona una asignatura.</div>`; return; }
  const s = subject(activeSubjectId);
  const mats = state.materials.filter(m => m.subjectId === s.id);
  const sims = SIMULATIONS.filter(sim => sim.subjectId === s.id);
  const stats = attemptStats(s.id);
  const progress = Math.round(subjectProgress(s.id));
  el.innerHTML = `
    <section class="subject-hero" style="--subject-color:${s.color}">
      <button class="plain-button" data-view-target="subjects" style="width:max-content">Volver a asignaturas</button>
      <h3>${escapeHtml(s.name)}</h3>
      <div class="badge-row">
        <span class="badge ok">${escapeHtml(s.kind)}</span>
        <span class="badge">${escapeHtml(s.code)}</span>
        <span class="badge">${s.credits} ECTS</span>
        <span class="badge exam">${hasExam(s) ? 'Con examen' : 'Sin examen'}</span>
        <span class="badge pec">${hasPec(s) ? 'Con PEC / trabajos' : 'Sin PEC'}</span>
      </div>
      <div class="progress-track" style="--progress:${progress}%"><span></span></div>
      <span class="mini">Progreso de trabajo: ${progress}%${stats.count ? ` · mejor simulacro: ${stats.best.toFixed(2)}/10` : ''}</span>
    </section>
    <div class="detail-layout" style="--subject-color:${s.color}">
      <section class="grid">
        <article class="card">
          <h3>Evaluación y requisitos</h3>
          <div class="info-table">
            <div class="info-row"><span>Tipo</span><span>${escapeHtml(s.kind)}</span></div>
            <div class="info-row"><span>Examen</span><span>${escapeHtml(s.exam)}</span></div>
            <div class="info-row"><span>PEC / trabajos</span><span>${escapeHtml(s.pec)}</span></div>
            <div class="info-row"><span>Ponderación</span><span>${escapeHtml(s.weighting)}</span></div>
          </div>
        </article>
        <article class="card">
          <h3>Documentos de la asignatura</h3>
          ${renderMaterialSections(mats)}
          <form class="upload-row" data-upload-form="${s.id}">
            <label>Subir documento privado
              <input type="file" name="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png">
            </label>
            <label>Título del documento
              <input type="text" name="title" placeholder="Manual, guía, examen, orientaciones…">
            </label>
            <label>Tipo
              <select name="kind"><option>Manual</option><option>Guía</option><option>Bibliografía</option><option>Examen</option><option>PEC</option><option>TFG</option><option>Prácticas</option><option>Otro</option></select>
            </label>
            <button class="primary-button" type="submit">Guardar documento</button>
          </form>
        </article>
      </section>
      <aside class="grid">
        <article class="card">
          <h3>${SPECIAL_TRACKS[s.id] ? 'Seguimiento especial' : 'Simulacros'}</h3>
          ${SPECIAL_TRACKS[s.id] ? renderSpecialTrack(s.id) : renderSubjectSimulations(sims)}
        </article>
        <article class="card">
          <h3>Historial de resultados</h3>
          ${renderAttemptHistory(s.id)}
        </article>
        <article class="card">
          <h3>Bibliografía</h3>
          <div class="plain-list">
            ${s.bibliography.manual.map(x => `<div class="doc-item" style="--subject-color:${s.color}"><strong>Manual básico</strong><span>${escapeHtml(x)}</span></div>`).join('')}
            ${s.bibliography.complementary.map(x => `<div class="doc-item" style="--subject-color:${s.color}"><strong>Complementaria</strong><span>${escapeHtml(x)}</span></div>`).join('')}
          </div>
        </article>
      </aside>
    </div>`;
}
function renderMaterialSections(mats) {
  const kinds = ['Manual','Guía','Bibliografía','Examen','PEC','TFG','Prácticas','Otro'];
  const html = kinds.map(kind => {
    const list = mats.filter(m => m.kind === kind);
    if (!list.length) return '';
    return `<div class="doc-section"><h4>${kind}</h4><div class="plain-list">${list.map(renderMaterialItem).join('')}</div></div>`;
  }).join('');
  return html || `<div class="empty">Aún no hay archivos subidos para esta asignatura.</div>`;
}
function renderMaterialItem(m) {
  const open = m.filePath ? `<button class="secondary-button" data-open-file="${escapeHtml(m.filePath)}">Abrir documento</button>` : `<span class="mini">Archivo pendiente de subir</span>`;
  return `<article class="doc-item" style="--subject-color:${subject(m.subjectId).color}">
    <strong>${escapeHtml(m.title)}</strong>
    ${m.notes ? `<span>${escapeHtml(m.notes)}</span>` : ''}
    ${open}
  </article>`;
}
function renderSubjectSimulations(sims) {
  if (!sims.length) return `<div class="empty">Aún no hay simulacros fiables para esta asignatura.</div>`;
  return `<div class="plain-list">${sims.map(sim => `<article class="doc-item" style="--subject-color:${subject(sim.subjectId).color}"><strong>${escapeHtml(sim.title)}</strong><span>${escapeHtml(sim.format)} · ${sim.questions.length} preguntas · repetible</span><button class="primary-button" data-start-sim="${sim.id}">Hacer simulacro</button></article>`).join('')}</div>`;
}
function renderAttemptHistory(subjectId) {
  const attempts = state.attempts.filter(a => a.subjectId === subjectId);
  if (!attempts.length) return `<div class="empty">Todavía no hay intentos registrados.</div>`;
  return `<div class="plain-list">${attempts.slice(0,8).map(a => `<article class="attempt-item" style="--subject-color:${subject(subjectId).color}"><strong>${Number(a.score).toFixed(2)}/10 · ${escapeHtml(a.title)}</strong><span>${formatDate(a.date)} · ${escapeHtml(a.notes || '')}</span></article>`).join('')}</div>`;
}
function renderSpecialTrack(subjectId) {
  const tasks = SPECIAL_TRACKS[subjectId] || [];
  return `<div class="task-list">${tasks.map((task, i) => {
    const key = `${subjectId}-${i}`;
    return `<label class="task-item"><input type="checkbox" data-task-key="${key}" ${state.taskChecks[key] ? 'checked' : ''}><span>${escapeHtml(task)}</span></label>`;
  }).join('')}</div>`;
}

function renderCalendar() {
  const el = document.getElementById('calendar');
  el.innerHTML = `
    <div class="tabs">
      <button class="tab-button ${calendarMode === 'month' ? 'active' : ''}" data-calendar-mode="month">Mes</button>
      <button class="tab-button ${calendarMode === 'semester' ? 'active' : ''}" data-calendar-mode="semester">Cuatrimestre completo</button>
    </div>
    <div class="calendar-layout">
      <div class="calendar-panel">${calendarMode === 'month' ? renderMonthCalendar() : renderSemesterTimeline()}</div>
      <aside class="card">
        <h3>Leyenda</h3>
        <div class="plain-list">${SUBJECTS.map(s => `<article class="next-item" data-open-subject="${s.id}" style="--subject-color:${s.color}"><strong>${escapeHtml(s.name)}</strong><span>${semesterName(s.semester)}</span></article>`).join('')}</div>
      </aside>
    </div>`;
}
function renderMonthCalendar() {
  const y = calendarDate.getFullYear();
  const m = calendarDate.getMonth();
  const first = new Date(y, m, 1);
  const start = new Date(first); start.setDate(first.getDate() - ((first.getDay() + 6) % 7));
  const cells = [];
  for (let i = 0; i < 42; i++) { const d = new Date(start); d.setDate(start.getDate() + i); cells.push(d); }
  return `<div class="calendar-head">
    <button class="plain-button" data-month-move="-1">Anterior</button>
    <div style="text-align:center"><h3>${calendarDate.toLocaleDateString('es-ES', { month:'long', year:'numeric' })}</h3><button class="plain-button" data-calendar-today>Hoy</button></div>
    <button class="plain-button" data-month-move="1">Siguiente</button>
  </div>
  <div class="calendar-grid">
    ${['L','M','X','J','V','S','D'].map(d => `<div class="weekday">${d}</div>`).join('')}
    ${cells.map(d => renderDayCell(d, m)).join('')}
  </div>`;
}
function renderDayCell(d, visibleMonth) {
  const iso = d.toISOString().slice(0,10);
  const events = state.events.filter(e => e.date === iso).sort((a,b) => String(a.type).localeCompare(String(b.type)));
  const isToday = iso === todayISO();
  return `<div class="day-cell ${d.getMonth() !== visibleMonth ? 'out' : ''} ${isToday ? 'today' : ''}">
    <div class="day-num">${d.getDate()}${isToday ? ' · hoy' : ''}</div>
    ${events.map(e => `<span class="event-chip ${escapeHtml(e.type)}" style="--subject-color:${subject(e.subjectId).color}" title="${escapeHtml(e.title)}">${escapeHtml(e.type)} · ${escapeHtml(e.title)}</span>`).join('')}
  </div>`;
}
function renderSemesterTimeline() {
  const months = {};
  state.events.slice().sort((a,b) => toDate(a.date)-toDate(b.date)).forEach(e => {
    const d = toDate(e.date);
    const key = d.toLocaleDateString('es-ES', { month:'long', year:'numeric' });
    (months[key] ||= []).push(e);
  });
  const body = Object.entries(months).map(([month, events]) => `<section class="month-band"><h4>${month}</h4><div class="plain-list">${events.map(renderEventItem).join('')}</div></section>`).join('');
  return `<div class="calendar-head"><h3>Cuatrimestre completo</h3><button class="secondary-button" data-add-event>Añadir fecha</button></div><div class="semester-timeline">${body || '<div class="empty">Añade fechas para construir el calendario del curso.</div>'}</div>`;
}

function renderSimulations() {
  const el = document.getElementById('simulations');
  const bySubject = SIMULATIONS.reduce((acc, sim) => { (acc[sim.subjectId] ||= []).push(sim); return acc; }, {});
  el.innerHTML = `<div class="sim-grid">${Object.entries(bySubject).map(([subjectId, sims]) => {
    const s = subject(subjectId);
    const stats = attemptStats(subjectId);
    return `<article class="card sim-card" style="--subject-color:${s.color}">
      <h3>${escapeHtml(s.name)}</h3>
      <p>${sims.length} simulacro(s) autocorregibles. Puedes repetirlos tantas veces como quieras.</p>
      <div class="badge-row"><span class="badge">Intentos: ${stats.count}</span>${stats.best !== null ? `<span class="badge ok">Mejor: ${stats.best.toFixed(2)}/10</span>` : ''}</div>
      <div class="plain-list">${sims.map(sim => `<button class="secondary-button" data-start-sim="${sim.id}">${escapeHtml(sim.title)}</button>`).join('')}</div>
    </article>`;
  }).join('')}</div>`;
}
function startSimulation(id) {
  currentSimulation = SIMULATIONS.find(s => s.id === id);
  if (!currentSimulation) return;
  const s = subject(currentSimulation.subjectId);
  dom.simulationTitle.textContent = currentSimulation.title;
  dom.simulationBody.innerHTML = `<div style="padding:18px 20px 22px; --subject-color:${s.color}">
    <div class="notice-box"><strong>${escapeHtml(s.name)}</strong><p class="muted">${escapeHtml(currentSimulation.format)} · ${currentSimulation.duration} minutos · intento repetible y registrable.</p></div>
    <form id="simulationForm">
      ${currentSimulation.questions.map(renderQuestion).join('')}
      <div class="dialog-actions"><button class="primary-button" type="submit">Corregir y guardar intento</button></div>
    </form>
    <div id="simulationResult"></div>
  </div>`;
  document.getElementById('simulationForm').addEventListener('submit', correctSimulation);
  dom.simulationDialog.showModal();
}
function renderQuestion(q, i) {
  const options = q.type === 'tf' ? ['Verdadero','Falso'] : q.options;
  return `<div class="question"><p>${i+1}. ${escapeHtml(q.q)}</p>${options.map(opt => `<label class="option"><input type="radio" name="q${i}" value="${escapeHtml(opt)}"> ${escapeHtml(opt)}</label>`).join('')}</div>`;
}
async function correctSimulation(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  let correct = 0, blank = 0;
  const details = currentSimulation.questions.map((q,i) => {
    const given = form.get(`q${i}`);
    if (!given) blank++;
    const ok = given === q.a;
    if (ok) correct++;
    return { question: q.q, given: given || '', correct: q.a, ok, exp: q.exp || '' };
  });
  const score = Math.max(0, (correct / currentSimulation.questions.length) * 10);
  document.getElementById('simulationResult').innerHTML = `<div class="result-box ${score < 5 ? 'error' : ''}">
    <h3>Resultado: ${score.toFixed(2)}/10</h3>
    <p>Aciertos: ${correct}. Blancos: ${blank}. Errores: ${currentSimulation.questions.length - correct - blank}.</p>
    <div class="plain-list">${details.map((d,i) => `<article class="doc-item" style="--subject-color:${d.ok ? '#28745a' : '#b33a3a'}"><strong>${i+1}. ${d.ok ? 'Correcta' : 'Revisar'}</strong><span>Tu respuesta: ${escapeHtml(d.given || 'en blanco')}</span><span>Correcta: ${escapeHtml(d.correct)}</span>${d.exp ? `<span>${escapeHtml(d.exp)}</span>` : ''}</article>`).join('')}</div>
  </div>`;
  const attempt = { id: crypto.randomUUID(), subjectId: currentSimulation.subjectId, title: currentSimulation.title, score, date: todayISO(), notes: `${correct}/${currentSimulation.questions.length} aciertos` };
  state.attempts = [attempt, ...state.attempts];
  saveLocalState();
  if (session) {
    try {
      await supabaseClient.from('simulation_attempts').insert({
        user_id: session.user.id,
        subject_id: attempt.subjectId,
        semester: subject(attempt.subjectId).semester === 'primer' ? 'primer_cuatrimestre' : 'segundo_cuatrimestre',
        title: attempt.title,
        score: attempt.score,
        date: attempt.date,
        notes: attempt.notes,
        answers: details
      });
    } catch {}
  }
  renderSimulations();
  if (activeSubjectId) renderSubjectDetail();
}

function renderSettings() {
  const el = document.getElementById('settings');
  const permission = 'Notification' in window ? Notification.permission : 'no disponible';
  el.innerHTML = `<div class="grid two">
    <article class="card">
      <h3>Notificaciones</h3>
      <p>GRADUS avisará de fechas próximas cuando la app tenga permiso de notificación en el navegador o en la PWA instalada.</p>
      <div class="info-table">
        <div class="info-row"><span>Permiso del navegador</span><span>${escapeHtml(permission)}</span></div>
        <div class="info-row"><span>Estado en GRADUS</span><span>${state.settings.notifications ? 'Activadas' : 'Desactivadas'}</span></div>
        <div class="info-row"><span>Recordatorio diario</span><span>${escapeHtml(state.settings.inactivityHour)}</span></div>
      </div>
      <div class="dialog-actions" style="padding-left:0; padding-right:0">
        <button class="primary-button" data-enable-notifications>Activar notificaciones</button>
        <button class="secondary-button" data-test-notification>Probar aviso</button>
      </div>
      <div class="notice-box"><strong>Aviso técnico</strong><p class="muted">Las notificaciones funcionan mejor si GRADUS está instalada en el móvil como app. Las notificaciones push totalmente independientes de abrir la app requieren una fase posterior con servicio push.</p></div>
    </article>
    <article class="card">
      <h3>Cuenta</h3>
      <p>Sesión iniciada como <strong>${escapeHtml(session?.user?.email || '')}</strong>.</p>
      <button class="danger-button" id="settingsSignOut">Cerrar sesión</button>
    </article>
  </div>`;
  document.getElementById('settingsSignOut')?.addEventListener('click', signOut);
}
function openEventDialog() {
  const select = dom.eventForm.elements.subjectId;
  select.innerHTML = SUBJECTS.map(s => `<option value="${s.id}">${escapeHtml(s.name)}</option>`).join('');
  dom.eventForm.reset();
  dom.eventForm.elements.date.value = todayISO();
  dom.eventDialog.showModal();
}
async function saveEvent(event) {
  event.preventDefault();
  const data = new FormData(dom.eventForm);
  const s = subject(data.get('subjectId'));
  const item = { id: crypto.randomUUID(), subjectId: s.id, title: data.get('title'), type: data.get('type'), date: data.get('date'), notes: data.get('notes') || '', notice: data.get('notice') || '7' };
  state.events.push(item);
  saveLocalState();
  if (session) {
    try {
      const { data: inserted } = await supabaseClient.from('academic_events').insert({ user_id: session.user.id, subject_id: item.subjectId, semester: s.semester === 'primer' ? 'primer_cuatrimestre' : 'segundo_cuatrimestre', title: item.title, type: item.type, date: item.date, notes: item.notes }).select().single();
      if (inserted?.id) item.id = inserted.id;
    } catch {}
  }
  dom.eventDialog.close();
  renderAll();
  maybeNotifyUpcoming(true);
}
async function markStudyToday() {
  state.studyLog[todayISO()] = { at: new Date().toISOString() };
  saveLocalState();
  await notify('GRADUS', 'Sesión de estudio registrada para hoy.', 'study');
  renderDesk();
  if (activeSubjectId) renderSubjectDetail();
}
async function enableNotifications() {
  if (!('Notification' in window)) return alert('Este navegador no permite notificaciones.');
  const perm = await Notification.requestPermission();
  state.settings.notifications = perm === 'granted';
  saveLocalState();
  renderSettings();
  if (perm === 'granted') await notify('GRADUS', 'Notificaciones activadas.', 'enabled');
}
async function notify(title, body, tag='gradus') {
  if (!state.settings.notifications || !('Notification' in window) || Notification.permission !== 'granted') return;
  if (navigator.serviceWorker?.ready) {
    const reg = await navigator.serviceWorker.ready;
    reg.showNotification(title, { body, tag, icon:'assets/icon-192.png', badge:'assets/icon-192.png' });
  } else {
    new Notification(title, { body, tag, icon:'assets/icon-192.png' });
  }
}
function maybeNotifyUpcoming(force=false) {
  if (!state.settings.notifications) return;
  const today = todayISO();
  const keyPrefix = `gradus.notified.${today}`;
  state.events.forEach(e => {
    const d = daysUntil(e.date);
    const notice = Number(e.notice || 7);
    if (d >= 0 && d <= notice) {
      const key = `${keyPrefix}.${e.id}`;
      if (force || !localStorage.getItem(key)) {
        notify('GRADUS: fecha próxima', `${e.title}: ${formatDate(e.date)} · ${subject(e.subjectId).name}`, `event-${e.id}`);
        localStorage.setItem(key, '1');
      }
    }
  });
}
function checkStudyReminder() {
  if (!state.settings.notifications) return;
  const [h,m] = state.settings.inactivityHour.split(':').map(Number);
  const now = new Date();
  if (now.getHours() !== h || now.getMinutes() !== m) return;
  const key = `gradus.studyReminder.${todayISO()}`;
  if (!state.studyLog[todayISO()] && !localStorage.getItem(key)) {
    notify('GRADUS: estudio diario', 'Hoy no has registrado estudio. Entra un momento y deja cerrada la sesión del día.', 'daily-study');
    localStorage.setItem(key, '1');
  }
}
function notifyIfPreviousDayMissed() {
  if (!state.settings.notifications) return;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const y = yesterday.toISOString().slice(0,10);
  const key = `gradus.missed.${y}`;
  if (!state.studyLog[y] && !localStorage.getItem(key)) {
    notify('GRADUS: revisión pendiente', 'Ayer no consta una sesión de estudio registrada.', 'missed-day');
    localStorage.setItem(key, '1');
  }
}
async function handleUpload(form) {
  const subjectId = form.dataset.uploadForm;
  const file = form.elements.file.files[0];
  const title = form.elements.title.value.trim() || file?.name || 'Documento';
  const kind = form.elements.kind.value;
  if (!file) return alert('Selecciona un archivo.');
  let filePath = '';
  if (session) {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, '-');
    const path = `${session.user.id}/${subjectId}/${Date.now()}-${safeName}`;
    const { error } = await supabaseClient.storage.from(MATERIAL_BUCKET).upload(path, file, { upsert: false });
    if (!error) filePath = path;
  }
  const item = { id: crypto.randomUUID(), subjectId, title, kind, notes: file.name, filePath };
  state.materials.push(item);
  saveLocalState();
  if (session) {
    try { await supabaseClient.from('materials').insert({ user_id: session.user.id, subject_id: subjectId, semester: subject(subjectId).semester === 'primer' ? 'primer_cuatrimestre' : 'segundo_cuatrimestre', title, kind, notes: file.name, file_path: filePath }); } catch {}
  }
  renderSubjectDetail();
}
async function openFile(path) {
  if (!session || !path) return alert('Archivo pendiente de subir.');
  const { data, error } = await supabaseClient.storage.from(MATERIAL_BUCKET).createSignedUrl(path, 60 * 10);
  if (!error && data?.signedUrl) window.open(data.signedUrl, '_blank', 'noopener');
  else alert('No he podido abrir el documento. Revisa las políticas de Storage.');
}
function handleDocumentClick(event) {
  const viewBtn = event.target.closest('[data-view-target]');
  if (viewBtn) { setView(viewBtn.dataset.viewTarget); return; }
  const subjectEl = event.target.closest('[data-open-subject]');
  if (subjectEl) { openSubject(subjectEl.dataset.openSubject); return; }
  const simBtn = event.target.closest('[data-start-sim]');
  if (simBtn) { startSimulation(simBtn.dataset.startSim); return; }
  const modeBtn = event.target.closest('[data-calendar-mode]');
  if (modeBtn) { calendarMode = modeBtn.dataset.calendarMode; renderCalendar(); return; }
  const monthBtn = event.target.closest('[data-month-move]');
  if (monthBtn) { calendarDate.setMonth(calendarDate.getMonth() + Number(monthBtn.dataset.monthMove)); renderCalendar(); return; }
  if (event.target.closest('[data-calendar-today]')) { calendarDate = new Date(); renderCalendar(); return; }
  if (event.target.closest('[data-add-event]')) { openEventDialog(); return; }
  if (event.target.closest('[data-enable-notifications]')) { enableNotifications(); return; }
  if (event.target.closest('[data-test-notification]')) { notify('GRADUS', 'Este es un aviso de prueba.', 'test'); return; }
  const fileBtn = event.target.closest('[data-open-file]');
  if (fileBtn) { openFile(fileBtn.dataset.openFile); return; }
  const task = event.target.closest('[data-task-key]');
  if (task) {
    state.taskChecks[task.dataset.taskKey] = task.checked;
    saveLocalState();
    renderSubjectDetail();
    return;
  }
}

init();
