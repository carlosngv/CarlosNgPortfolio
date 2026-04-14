import type { Post } from "./types";

export const mockPosts: Post[] = [
  {
    slug: "building-ai-recruitment-platform-llms",
    title: "Building an AI Recruitment Platform with LLMs",
    titleEs: "Construyendo una Plataforma de Reclutamiento con LLMs",
    date: "2025-06-15",
    excerpt:
      "How we designed and deployed an AI-powered recruitment platform that analyzes candidate resumes using large language models, providing HR analysts with structured insights and reducing time-to-hire.",
    excerptEs:
      "Cómo diseñamos e implementamos una plataforma de reclutamiento con IA que analiza CVs de candidatos usando modelos de lenguaje, proporcionando insights estructurados a los analistas de RRHH y reduciendo el tiempo de contratación.",
    tags: ["LLMs", "AI Agents", "Python", "React"],
    readingTime: 9,
    content: `<h2>The Problem with Traditional Recruitment</h2>
<p>HR analysts at large organizations spend hours manually reviewing resumes, often missing qualified candidates due to the sheer volume. When the team at Fundación Genésis Empresarial asked me to tackle this, the goal was clear: automate the initial screening without losing the human judgment that matters.</p>
<h2>Architecture Overview</h2>
<p>The platform follows a straightforward pipeline: resumes are uploaded as PDFs, parsed into structured text, and then analyzed by an LLM with a carefully engineered prompt that extracts skills, experience, and suitability scores against a job description.</p>
<pre><code># Simplified pipeline
def analyze_candidate(resume_text: str, job_description: str) -> CandidateInsight:
    prompt = build_analysis_prompt(resume_text, job_description)
    response = llm_client.complete(prompt)
    return parse_structured_output(response)</code></pre>
<h2>Prompt Engineering for Consistency</h2>
<p>The hardest part wasn't the API calls — it was getting consistent, structured output. LLMs are probabilistic, and a recruitment platform needs deterministic outputs. The solution: a rigid JSON schema in the prompt, few-shot examples for edge cases, and a validation layer that retries on malformed responses.</p>
<h2>What the HR Analysts Actually Wanted</h2>
<p>After the first demo, feedback was immediate: analysts didn't want AI to make decisions — they wanted it to surface information faster. So instead of a "hire / don't hire" score, we built a structured insight card: top skills, experience summary, red flags, and open-ended observations. Analysts loved it.</p>
<h2>Lessons Learned</h2>
<p>LLMs are remarkably good at understanding resumes across languages and formats. The real engineering challenge is the plumbing around them: PDF parsing, retry logic, caching, and building a UI that presents AI output in a way that builds trust rather than replacing judgment.</p>`,
    contentEs: `<h2>El Problema con el Reclutamiento Tradicional</h2>
<p>Los analistas de RRHH en organizaciones grandes pasan horas revisando CVs manualmente, a menudo perdiendo candidatos calificados debido al volumen. Cuando el equipo de Fundación Genésis Empresarial me pidió abordar esto, el objetivo era claro: automatizar la revisión inicial sin perder el juicio humano que importa.</p>
<h2>Visión General de la Arquitectura</h2>
<p>La plataforma sigue un pipeline directo: los CVs se suben como PDFs, se parsean a texto estructurado, y luego un LLM los analiza con un prompt cuidadosamente diseñado que extrae habilidades, experiencia y puntajes de idoneidad contra una descripción de puesto.</p>
<pre><code># Pipeline simplificado
def analyze_candidate(resume_text: str, job_description: str) -> CandidateInsight:
    prompt = build_analysis_prompt(resume_text, job_description)
    response = llm_client.complete(prompt)
    return parse_structured_output(response)</code></pre>
<h2>Ingeniería de Prompts para Consistencia</h2>
<p>La parte más difícil no fueron las llamadas a la API — fue obtener una salida consistente y estructurada. Los LLMs son probabilísticos, y una plataforma de reclutamiento necesita salidas deterministas. La solución: un esquema JSON rígido en el prompt, ejemplos few-shot para casos extremos y una capa de validación que reintenta en respuestas malformadas.</p>
<h2>Lo que los Analistas de RRHH Realmente Querían</h2>
<p>Después de la primera demo, el feedback fue inmediato: los analistas no querían que la IA tomara decisiones — querían que les presentara información más rápido. Entonces, en lugar de un puntaje de "contratar / no contratar", construimos una tarjeta de insights estructurada: habilidades clave, resumen de experiencia, banderas rojas y observaciones abiertas. Les encantó.</p>
<h2>Lecciones Aprendidas</h2>
<p>Los LLMs son notablemente buenos para entender CVs en diferentes idiomas y formatos. El verdadero desafío de ingeniería es la "plomería" a su alrededor: parseo de PDF, lógica de reintentos, caché y construir una UI que presente el output de IA de manera que genere confianza en lugar de reemplazar el juicio.</p>`,
  },
  {
    slug: "from-monolith-to-microservices-nestjs-react",
    title: "From Monolith to Microservices: A NestJS + React Migration",
    titleEs: "De Monolito a Microservicios: Una Migración con NestJS + React",
    date: "2025-03-10",
    excerpt:
      "Lessons from migrating a legacy banking monolith to a modern microservices architecture using NestJS and React — what went smoothly, what was painful, and what I'd do differently.",
    excerptEs:
      "Lecciones de migrar un monolito bancario heredado a una arquitectura de microservicios moderna con NestJS y React — qué fue fluido, qué fue doloroso y qué haría diferente.",
    tags: ["NestJS", "React", "Microservices", "TypeScript"],
    readingTime: 8,
    content: `<h2>The Starting Point</h2>
<p>The legacy system at Banco de los Trabajadores was a classic big-ball-of-mud: a monolithic backend with tightly coupled modules, no clear domain boundaries, and a frontend that was half-jQuery, half-Angular — deployed as a single unit, scaled as a single unit, failing as a single unit.</p>
<h2>The Migration Strategy: Strangler Fig</h2>
<p>We didn't rewrite. We strangled. The strangler fig pattern means you build the new system alongside the old, routing traffic incrementally. Each module gets extracted into its own NestJS microservice when its turn comes, while the monolith continues handling everything else.</p>
<pre><code>// NestJS microservice registration
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
});
await app.listen();</code></pre>
<h2>The Frontend Challenge</h2>
<p>Building the React frontend alongside a mid-migration backend is humbling. APIs change. Contracts break. The solution was investing heavily in TypeScript interfaces shared between frontend and backend — a shared types package that both consumed. When the backend changed a response shape, TypeScript caught it immediately on the frontend.</p>
<h2>What Went Wrong</h2>
<p>Distributed systems are harder than they look. Synchronous REST calls between services introduce latency. Database transactions that used to be atomic now span service boundaries. We learned that not every module needs to be its own service — sometimes a well-structured module inside a monolith is the right answer.</p>
<h2>The Result</h2>
<p>After six months, the core business logic was running on four focused NestJS services. Deploy times dropped. Teams could ship independently. The React frontend, built entirely from Figma designs, gave users a significantly better experience.</p>`,
    contentEs: `<h2>El Punto de Partida</h2>
<p>El sistema heredado en Banco de los Trabajadores era un clásico: un backend monolítico con módulos fuertemente acoplados, sin límites de dominio claros, y un frontend que era mitad jQuery, mitad Angular — desplegado como una sola unidad, escalado como una sola unidad, fallando como una sola unidad.</p>
<h2>La Estrategia de Migración: Strangler Fig</h2>
<p>No reescribimos. Estrangulamos. El patrón strangler fig significa que construyes el nuevo sistema junto al viejo, enrutando el tráfico de manera incremental. Cada módulo se extrae a su propio microservicio NestJS cuando le llega el turno, mientras el monolito continúa manejando todo lo demás.</p>
<pre><code>// Registro de microservicio NestJS
const app = await NestFactory.createMicroservice(AppModule, {
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
});
await app.listen();</code></pre>
<h2>El Desafío del Frontend</h2>
<p>Construir el frontend en React junto a un backend en medio de la migración es humillante. Las APIs cambian. Los contratos se rompen. La solución fue invertir fuertemente en interfaces TypeScript compartidas entre frontend y backend — un paquete de tipos compartidos que ambos consumían.</p>
<h2>Qué Salió Mal</h2>
<p>Los sistemas distribuidos son más difíciles de lo que parecen. Las llamadas REST síncronas entre servicios introducen latencia. Las transacciones de base de datos que solían ser atómicas ahora cruzan límites de servicios. Aprendimos que no todos los módulos necesitan ser su propio servicio.</p>
<h2>El Resultado</h2>
<p>Después de seis meses, la lógica de negocio principal corría en cuatro servicios NestJS enfocados. Los tiempos de despliegue bajaron. Los equipos podían enviar de manera independiente. El frontend en React dio a los usuarios una experiencia significativamente mejor.</p>`,
  },
  {
    slug: "rpa-to-ai-automating-business-processes",
    title: "RPA to AI: The Evolution of Business Process Automation",
    titleEs: "De RPA a IA: La Evolución de la Automatización de Procesos",
    date: "2025-01-20",
    excerpt:
      "Four years of automating business processes — from rule-based RPA bots to LLM-powered agents. What changed, what didn't, and why the two technologies are better together than apart.",
    excerptEs:
      "Cuatro años automatizando procesos de negocio — desde bots RPA basados en reglas hasta agentes impulsados por LLMs. Qué cambió, qué no, y por qué las dos tecnologías son mejores juntas que separadas.",
    tags: ["RPA", "AI Agents", "Automation Anywhere", "LLMs"],
    readingTime: 7,
    content: `<h2>Where I Started: Pure RPA</h2>
<p>My first automation work was at Banco Promerica, building Automation Anywhere bots that handled repetitive banking processes: data extraction from legacy systems, report generation, reconciliation workflows. RPA is gloriously predictable — it does exactly what you tell it, every time, in the same order.</p>
<h2>The Limits of Rule-Based Automation</h2>
<p>The problem appears when the input isn't predictable. A bot that extracts data from a fixed-format PDF breaks immediately when the format changes slightly. You end up spending as much time maintaining bots as you saved automating. The rule-based approach works beautifully for stable, structured processes — and struggles everywhere else.</p>
<h2>Enter AI Agents</h2>
<p>When I started working with LLMs at Fundación Genésis, the contrast was striking. Instead of writing rules for every case, you describe the task in natural language and the model generalizes. An AI agent that reads and summarizes documents doesn't need to know the document's structure in advance — it adapts.</p>
<pre><code># RPA approach: brittle, explicit
if row[2] == "APPROVED" and row[4] > 1000:
    extract_field(row[7])

# AI approach: flexible, natural language
result = agent.run("Extract approval status and amount from this document")</code></pre>
<h2>The Hybrid Sweet Spot</h2>
<p>The best production systems I've built combine both. RPA handles the deterministic parts: navigating UIs, clicking buttons, moving files. AI handles the ambiguous parts: understanding documents, classifying inputs, generating summaries. RPA as the hands, AI as the brain.</p>`,
    contentEs: `<h2>Dónde Empecé: RPA Puro</h2>
<p>Mi primer trabajo de automatización fue en Banco Promerica, construyendo bots de Automation Anywhere que manejaban procesos bancarios repetitivos: extracción de datos de sistemas heredados, generación de reportes, flujos de reconciliación.</p>
<h2>Los Límites de la Automatización Basada en Reglas</h2>
<p>El problema aparece cuando la entrada no es predecible. Un bot que extrae datos de un PDF de formato fijo se rompe inmediatamente cuando el formato cambia ligeramente. Terminas gastando tanto tiempo manteniendo bots como el que ahorraste automatizando.</p>
<h2>Entran los Agentes de IA</h2>
<p>Cuando empecé a trabajar con LLMs en Fundación Genésis, el contraste fue notable. En lugar de escribir reglas para cada caso, describes la tarea en lenguaje natural y el modelo generaliza.</p>
<pre><code># Enfoque RPA: frágil, explícito
if row[2] == "APPROVED" and row[4] > 1000:
    extract_field(row[7])

# Enfoque IA: flexible, lenguaje natural
result = agent.run("Extrae el estado de aprobación y el monto de este documento")</code></pre>
<h2>El Punto Dulce Híbrido</h2>
<p>Los mejores sistemas en producción que he construido combinan ambos. RPA maneja las partes deterministas. La IA maneja las partes ambiguas. RPA como las manos, IA como el cerebro.</p>`,
  },
  {
    slug: "conversational-ai-agents-document-processing",
    title: "Building Conversational AI Agents for Document Processing",
    titleEs: "Construyendo Agentes Conversacionales de IA para Procesamiento de Documentos",
    date: "2024-12-05",
    excerpt:
      "A practical guide to building AI agents that can answer questions about documents — architecture decisions, retrieval strategies, and UX patterns that make the difference between a demo and a production system.",
    excerptEs:
      "Una guía práctica para construir agentes de IA que responden preguntas sobre documentos — decisiones de arquitectura, estrategias de recuperación y patrones UX que marcan la diferencia entre una demo y un sistema en producción.",
    tags: ["AI Agents", "LLMs", "Python", "RAG"],
    readingTime: 10,
    content: `<h2>The Use Case: Legal Document Q&A</h2>
<p>As part of the digital signature platform at Fundación Genésis, we needed users to be able to ask questions about documents they were about to sign: "What are the payment terms?", "Does this include a penalty clause?". Documents could be dozens of pages long.</p>
<h2>Why Naive Approaches Fail</h2>
<p>The first approach is always "just send the whole document to the LLM." This works until your document exceeds the context window, or until your API costs become unsustainable, or until the model starts hallucinating answers it can't find in the text.</p>
<h2>Retrieval-Augmented Generation (RAG)</h2>
<p>The standard solution is RAG: chunk the document, embed the chunks, store in a vector database, retrieve the most relevant chunks for each question, and send only those to the LLM as context.</p>
<pre><code># Simplified RAG pipeline
chunks = chunk_document(document_text, size=512, overlap=50)
embeddings = embed_chunks(chunks)
store_in_vector_db(embeddings, metadata={"doc_id": doc_id})

def answer_question(question: str, doc_id: str) -> str:
    relevant_chunks = retrieve(question, doc_id, top_k=5)
    return llm.complete(build_prompt(question, relevant_chunks))</code></pre>
<h2>Building Trust in the UI</h2>
<p>The hardest part of conversational AI isn't the AI — it's the UI. Users need to trust the answers. Our solution: always show source citations with the answer, highlighting the exact passage in the document that the answer came from.</p>`,
    contentEs: `<h2>El Caso de Uso: Preguntas sobre Documentos Legales</h2>
<p>Como parte de la plataforma de firma digital en Fundación Genésis, necesitábamos que los usuarios pudieran hacer preguntas sobre documentos que estaban a punto de firmar. Los documentos podían tener decenas de páginas.</p>
<h2>Por Qué Fallan los Enfoques Ingenuos</h2>
<p>El primer enfoque siempre es "simplemente envía todo el documento al LLM." Esto funciona hasta que tu documento supera la ventana de contexto, o hasta que los costos de la API se vuelven insostenibles, o hasta que el modelo empieza a alucinar respuestas.</p>
<h2>Generación Aumentada por Recuperación (RAG)</h2>
<p>La solución estándar es RAG: dividir el documento en chunks, embeddear los chunks, almacenar en una base de datos vectorial, recuperar los chunks más relevantes para cada pregunta y enviar solo esos al LLM.</p>
<pre><code># Pipeline RAG simplificado
chunks = chunk_document(document_text, size=512, overlap=50)
embeddings = embed_chunks(chunks)
store_in_vector_db(embeddings, metadata={"doc_id": doc_id})

def answer_question(question: str, doc_id: str) -> str:
    relevant_chunks = retrieve(question, doc_id, top_k=5)
    return llm.complete(build_prompt(question, relevant_chunks))</code></pre>
<h2>Construyendo Confianza en la UI</h2>
<p>La parte más difícil de la IA conversacional no es la IA — es la UI. Nuestra solución: siempre mostrar citas de fuentes con la respuesta, resaltando el pasaje exacto en el documento del que proviene la respuesta.</p>`,
  },
  {
    slug: "type-safe-fullstack-nestjs-typescript",
    title: "Type-Safe Full-Stack Development with NestJS and TypeScript",
    titleEs: "Desarrollo Full-Stack Type-Safe con NestJS y TypeScript",
    date: "2024-10-15",
    excerpt:
      "Practical patterns for sharing types between a NestJS backend and React frontend — DTOs, validation, and the shared types package approach that eliminates an entire category of bugs.",
    excerptEs:
      "Patrones prácticos para compartir tipos entre un backend NestJS y un frontend React — DTOs, validación y el enfoque de paquete de tipos compartidos que elimina toda una categoría de bugs.",
    tags: ["NestJS", "TypeScript", "React", "Best Practices"],
    readingTime: 7,
    content: `<h2>The Problem: Frontend and Backend Drift Apart</h2>
<p>Every full-stack team eventually hits this: the backend changes a response shape, the frontend doesn't know, and users see a broken UI at 2am on a Friday. The root cause is that TypeScript's type safety stops at the API boundary. Or does it?</p>
<h2>The Shared Types Package</h2>
<p>The most effective solution I've found across multiple projects is a shared types package — a small TypeScript package imported by both the NestJS backend and the React frontend. When the backend changes a DTO, the frontend TypeScript compilation immediately fails.</p>
<pre><code>// packages/shared-types/src/user.ts
export interface UserResponse {
  id: string;
  email: string;
  role: 'admin' | 'analyst' | 'viewer';
  createdAt: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
  role: UserResponse['role'];
}</code></pre>
<h2>NestJS DTOs with class-validator</h2>
<p>NestJS's integration with <code>class-validator</code> and <code>class-transformer</code> is excellent for runtime validation. Combine it with your shared types and you get compile-time safety from TypeScript and runtime safety from the validation pipe.</p>
<pre><code>import { IsEmail, IsIn } from 'class-validator';
import { CreateUserDto } from '@company/shared-types';

class CreateUserRequest implements CreateUserDto {
  @IsEmail()
  email: string;

  @IsIn(['admin', 'analyst', 'viewer'])
  role: CreateUserDto['role'];
}</code></pre>
<h2>Worth the Setup Cost?</h2>
<p>Yes. Absolutely. The monorepo tooling setup (typically Turborepo or Nx) takes a day to configure. The payoff is permanent: a whole class of "the backend and frontend disagree about data shapes" bugs becomes a compile error instead of a production incident.</p>`,
    contentEs: `<h2>El Problema: Frontend y Backend se Separan</h2>
<p>Todo equipo full-stack eventualmente se topa con esto: el backend cambia la forma de una respuesta, el frontend no lo sabe, y los usuarios ven una UI rota a las 2am de un viernes.</p>
<h2>El Paquete de Tipos Compartidos</h2>
<p>La solución más efectiva que he encontrado es un paquete de tipos compartidos — un pequeño paquete TypeScript importado tanto por el backend NestJS como por el frontend React. Cuando el backend cambia un DTO, la compilación TypeScript del frontend falla inmediatamente.</p>
<pre><code>// packages/shared-types/src/user.ts
export interface UserResponse {
  id: string;
  email: string;
  role: 'admin' | 'analyst' | 'viewer';
  createdAt: string;
}

export interface CreateUserDto {
  email: string;
  password: string;
  role: UserResponse['role'];
}</code></pre>
<h2>DTOs de NestJS con class-validator</h2>
<p>La integración de NestJS con <code>class-validator</code> y <code>class-transformer</code> es excelente para la validación en tiempo de ejecución. Combínala con tus tipos compartidos y obtienes seguridad en tiempo de compilación y en tiempo de ejecución.</p>
<pre><code>import { IsEmail, IsIn } from 'class-validator';

class CreateUserRequest {
  @IsEmail()
  email: string;

  @IsIn(['admin', 'analyst', 'viewer'])
  role: string;
}</code></pre>
<h2>¿Vale el Costo de Configuración?</h2>
<p>Sí. Absolutamente. La configuración del monorepo toma un día en configurar. La recompensa es permanente: toda una clase de bugs de "el backend y el frontend no están de acuerdo sobre la forma de los datos" se convierte en un error de compilación en lugar de un incidente en producción.</p>`,
  },
];
