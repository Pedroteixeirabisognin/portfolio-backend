/* ==========================================================================
   Pedro Teixeira Bisognin — Portfolio Interactivity & i18n
   ========================================================================== */

const translations = {
  pt: {
    "nav.status": "Senior Backend Engineer",
    "nav.about": "Resumo",
    "nav.highlights": "Impacto",
    "nav.experience": "Experiência",
    "nav.skills": "Stack",
    "nav.education": "Formação",
    "nav.contact": "Contato",
    "nav.print": "Currículo PDF",

    "hero.badge": "Arquitetura Backend & Sistemas Críticos",
    "hero.role": 'Senior Backend Engineer <span class="role-sep">|</span> Java <span class="role-sep">•</span> Spring Boot <span class="role-sep">•</span> Microsserviços <span class="role-sep">•</span> AWS ROSA',
    "hero.summary": 'Engenheiro de Software Backend Sênior com cerca de <strong>10 anos de experiência</strong> no desenvolvimento, modernização e sustentação de aplicações corporativas críticas de alta disponibilidade nos setores <strong>financeiro e de seguros</strong>. Especialista no ecossistema Java, Spring Boot, microsserviços e arquiteturas em nuvem (OpenShift, Kubernetes e AWS ROSA), com histórico comprovado em otimização de performance, resolução de incidentes em produção e liderança técnica autônoma.',
    "hero.ctaContact": "Entrar em Contato",
    "hero.copyEmail": "Copiar E-mail",

    "metrics.years": "Anos de Experiência em Engenharia de Software",
    "metrics.perf": "Redução no Tempo de Rotinas Críticas (2h → 30min)",
    "metrics.java": "Domínio de Java 8/11/17/21 & Ecossistema Spring",
    "metrics.cloud": "OpenShift na AWS, Kafka & Alta Disponibilidade",

    "highlights.kicker": "ENGENHARIA DE IMPACTO",
    "highlights.title": "Destaques Técnicos & Resultados em Produção",
    "highlights.subtitle": "Soluções arquiteturais orientadas a performance, resiliência operacional e governança em ecossistemas financeiros de larga escala.",
    "highlights.card1.title": "Otimização de Consultas & Processamento Crítico",
    "highlights.card1.desc": 'Refatoração profunda de consultas e rotinas críticas de banco de dados em ambiente cooperativo financeiro, reduzindo o tempo de processamento em <strong>75%</strong> (de 2 horas para aproximadamente 30 minutos) e liberando janelas operacionais essenciais.',
    "highlights.card2.title": "Microsserviços, Mensageria & Governança de APIs",
    "highlights.card2.desc": 'Desenvolvimento, deploy e troubleshooting de microsserviços em Red Hat OpenShift Service on AWS (ROSA / Kubernetes), mensageria assíncrona com <strong>Apache Kafka</strong>, governança com <strong>IBM API Connect</strong> e observabilidade via Grafana e Graylog.',
    "highlights.card3.title": "Sustentação de Alta Disponibilidade & Liderança Técnica",
    "highlights.card3.desc": "Atuação transversal em um dos projetos de maior relevância e custo operacional da companhia. Mitigação de incidentes críticos em produção, padronização de documentação arquitetural inédita e evolução de Pleno a Sênior como referência para múltiplos squads.",

    "exp.kicker": "TRAJETÓRIA PROFISSIONAL",
    "exp.title": "Experiência em Engenharia de Software",
    "exp.subtitle": "Histórico sólido atuando em instituições financeiras, seguradoras e órgãos federais de grande porte.",

    "exp.sicoob.badge": "Setor Financeiro Cooperativo",
    "exp.sicoob.summary": "Atuação no desenvolvimento, sustentação e evolução de aplicações corporativas críticas, com responsabilidade técnica e participação ativa em decisões de implementação, integração e otimização.",
    "exp.sicoob.b1": "Responsável técnico por aplicações críticas, atuando de forma autônoma na manutenção e evolução arquitetural.",
    "exp.sicoob.b2": "Desenvolvimento e sustentação de microsserviços em <strong>Java 11+ com Spring Boot</strong>.",
    "exp.sicoob.b3": "<strong>Otimização de alta performance:</strong> Refatoração de consultas críticas com redução do tempo de execução de <strong>2 horas para aproximadamente 30 minutos (-75%)</strong>.",
    "exp.sicoob.b4": "Construção, padronização e documentação de APIs REST com <strong>OpenAPI / Swagger</strong> e governança com <strong>IBM API Connect (APIC)</strong>.",
    "exp.sicoob.b5": "Implementação de testes automatizados unitários e de integração com <strong>JUnit e Mockito (TDD)</strong>.",
    "exp.sicoob.b6": "Deploy e troubleshooting em ambiente <strong>OpenShift baseado em Kubernetes + AWS (ROSA - Red Hat OpenShift Service on AWS)</strong>.",
    "exp.sicoob.b7": "Implementação de arquitetura orientada a eventos e mensageria com <strong>Apache Kafka</strong>.",
    "exp.sicoob.b8": "Monitoramento proativo de pods, logs e métricas em produção utilizando <strong>Grafana e Graylog</strong>.",
    "exp.sicoob.b9": "Apoio técnico e orientação a novos colaboradores, condução de dailys e alinhamentos técnicos com equipes multidisciplinares.",
    "exp.sicoob.b10": "Adoção de engenharia de prompt com IA utilizando <strong>Codex</strong> para aceleração de produtividade e qualidade de código.",

    "exp.ebix.client": "Cliente: Bradesco Seguros",
    "exp.ebix.duration": "4 anos e 7 meses",
    "exp.ebix.summary": "Atuação transversal no desenvolvimento, sustentação e modernização de múltiplos sistemas e aplicações corporativas críticas para diferentes áreas de negócio do Bradesco Seguros, lidando com ecossistemas complexos e legados.",
    "exp.ebix.b1": "Atuação crítica na sustentação e evolução de sistemas corporativos de alta disponibilidade, incluindo participação em um dos <strong>projetos de maior relevância e custo operacional da companhia</strong>, garantindo estabilidade e eficiência.",
    "exp.ebix.b2": "Condução de investigações e mitigação de incidentes críticos em produção em múltiplos sistemas, assegurando a continuidade de serviços essenciais e protegendo o negócio contra impactos operacionais e financeiros.",
    "exp.ebix.b3": "Desenvolvimento, manutenção e otimização de consultas e rotinas SQL complexas em <strong>SQL Server</strong>, elevando a performance de processamentos de diferentes áreas.",
    "exp.ebix.b4": "<strong>Estruturação de documentação técnica:</strong> condução da criação de documentações, manuais e guias de arquitetura e processos que não existiam, padronizando o conhecimento e facilitando o alinhamento técnico entre equipes.",
    "exp.ebix.b5": "Participação em processos de integração e entrega contínua (<strong>CI/CD com Jenkins</strong>) e contribuição gradual na modernização de interfaces utilizando <strong>React e Vue</strong>.",
    "exp.ebix.b6": "<strong>Reconhecimento profissional:</strong> evolução interna de desenvolvedor Pleno para Sênior, consolidando-se como referência técnica no atendimento a múltiplos squads e sistemas do cliente.",

    "exp.mindtek.client": "Cliente: IBGE",
    "exp.mindtek.b1": "Atuação especializada em desenvolvimento e sustentação de aplicações Java estruturadas em <strong>microsserviços</strong> para sistemas de órgão federal (IBGE).",
    "exp.mindtek.b2": "Implementação de melhorias estruturais de código e arquitetura em ambiente <strong>JBoss</strong>, aumentando a estabilidade e reduzindo a dívida técnica das aplicações.",
    "exp.mindtek.b3": "Colaboração técnica na migração de interfaces legadas em <strong>AngularJS para Angular 5</strong>, melhorando a manutenibilidade do front-end.",

    "exp.gluck.b1": "Desenvolvimento de funcionalidades backend de alta performance em <strong>.NET Core</strong>, aplicando padrões arquiteturais de <strong>CQRS</strong>.",
    "exp.gluck.b2": "Atuação direta e presencial (face a face) com clientes, realizando alinhamentos de requisitos, explicando características técnicas complexas e traduzindo a lógica de negócio para as soluções desenvolvidas.",
    "exp.gluck.b3": "Implementação de segurança e controle de acesso em aplicações Java utilizando autenticação <strong>OAuth 2.0 com Spring Boot</strong>.",
    "exp.gluck.b4": "Modelagem, desenvolvimento e manutenção de consultas, views e triggers em <strong>SQL Server</strong>.",
    "exp.gluck.b5": "Participação na conteinerização de aplicações com <strong>Docker</strong>, migração de interfaces (AngularJS para Angular 2) e versionamento com Git e TFS.",

    "skills.kicker": "ARSENAL TÉCNICO",
    "skills.title": "Competências Técnicas & Ecossistema",
    "skills.filterAll": "Todas",
    "skills.filterArch": "Arquitetura & Integração",
    "skills.filterDb": "Bancos de Dados",
    "skills.backend.sub": "Linguagens, Frameworks & Testes Automatizados",
    "skills.arch.title": "Arquitetura & Integração",
    "skills.arch.sub": "Sistemas Distribuídos, Mensageria & Segurança",
    "skills.cloud.title": "Cloud & Infraestrutura",
    "skills.cloud.sub": "Orquestração de Containers & Application Servers",
    "skills.devops.title": "DevOps & Observabilidade",
    "skills.devops.sub": "CI/CD, Monitoramento de Produção & Engenharia com IA",
    "skills.db.title": "Bancos de Dados & Performance",
    "skills.db.sub": "Modelagem Relacional, Views, Triggers & Query Tuning",
    "skills.front.title": "Frontend & Ecossistema Complementar",
    "skills.front.sub": "Modernização de Interfaces & Sistemas Legados",

    "edu.kicker": "CREDENCIAIS ACADÊMICAS",
    "edu.title": "Formação Acadêmica & Idiomas",
    "edu.mba.title": "MBA em Arquitetura de Software",
    "edu.mba.year": "Concluído em 2025",
    "edu.mba.focus": "Sistemas Distribuídos, DDD, Microsserviços & Cloud",
    "edu.bsc.badge": "GRADUAÇÃO",
    "edu.bsc.title": "Bacharelado em Sistemas de Informação",
    "edu.bsc.year": "Concluído em 2017",
    "edu.lang.badge": "COMUNICAÇÃO",
    "edu.lang.title": "Idiomas",
    "edu.lang.pt": "Português",
    "edu.lang.ptLevel": "Nativo",
    "edu.lang.en": "Inglês",
    "edu.lang.enLevel": "Intermediário • Leitura técnica avançada (Cursando)",

    "contact.kicker": "CONEXÃO DIRETA",
    "contact.title": "Vamos conversar sobre Arquitetura Backend ou Oportunidades Sênior?",
    "contact.desc": "Disponível para conexões profissionais, projetos de engenharia backend de alta criticidade, arquitetura Java/Spring Boot e plataformas em nuvem.",
    "contact.phoneLabel": "Telefone / WhatsApp",
    "contact.copy": "Copiar",
    "contact.open": "Abrir ↗",
    "toast.copied": "Copiado para a área de transferência:"
  },
  en: {
    "nav.status": "Senior Backend Engineer",
    "nav.about": "Summary",
    "nav.highlights": "Impact",
    "nav.experience": "Experience",
    "nav.skills": "Tech Stack",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.print": "Resume PDF",

    "hero.badge": "Backend Architecture & Mission-Critical Systems",
    "hero.role": 'Senior Backend Engineer <span class="role-sep">|</span> Java <span class="role-sep">•</span> Spring Boot <span class="role-sep">•</span> Microservices <span class="role-sep">•</span> AWS ROSA',
    "hero.summary": 'Senior Backend Software Engineer with nearly <strong>10 years of experience</strong> developing, modernizing, and sustaining high-availability mission-critical enterprise applications in the <strong>financial and insurance</strong> sectors. Specialist in the Java ecosystem, Spring Boot, microservices, and cloud architectures (OpenShift, Kubernetes, and AWS ROSA), with a proven track record in performance optimization, production incident resolution, and autonomous technical leadership.',
    "hero.ctaContact": "Get in Touch",
    "hero.copyEmail": "Copy Email",

    "metrics.years": "Years of Experience in Software Engineering",
    "metrics.perf": "Execution Time Reduction in Critical Routines (2h → 30m)",
    "metrics.java": "Mastery of Java 8/11/17/21 & Spring Ecosystem",
    "metrics.cloud": "OpenShift on AWS (ROSA), Kafka & High Availability",

    "highlights.kicker": "ENGINEERING IMPACT",
    "highlights.title": "Technical Highlights & Production Outcomes",
    "highlights.subtitle": "Architectural solutions driven by performance, operational resilience, and governance across large-scale financial ecosystems.",
    "highlights.card1.title": "Query Optimization & Critical Batch Processing",
    "highlights.card1.desc": 'Deep refactoring of complex database queries and critical routines in a cooperative banking environment, cutting execution time by <strong>75%</strong> (from 2 hours down to ~30 minutes) and freeing critical operational windows.',
    "highlights.card2.title": "Microservices, Event Streaming & API Governance",
    "highlights.card2.desc": 'End-to-end development, deployment, and troubleshooting of microservices on Red Hat OpenShift Service on AWS (ROSA / Kubernetes), event-driven messaging with <strong>Apache Kafka</strong>, API governance via <strong>IBM API Connect</strong>, and observability with Grafana & Graylog.',
    "highlights.card3.title": "High-Availability Sustainment & Technical Leadership",
    "highlights.card3.desc": "Cross-functional leadership on one of the highest-value and most operationally critical initiatives at Bradesco Seguros. Led production incident mitigation, authored foundational architecture documentation, and earned promotion from Mid-level to Senior reference across multiple squads.",

    "exp.kicker": "CAREER TIMELINE",
    "exp.title": "Software Engineering Experience",
    "exp.subtitle": "Proven track record across major financial institutions, insurance leaders, and federal government agencies.",

    "exp.sicoob.badge": "Cooperative Financial Sector",
    "exp.sicoob.summary": "Leading development, sustainment, and evolution of mission-critical enterprise applications, holding technical ownership and participating in architecture, integration, and optimization decisions.",
    "exp.sicoob.b1": "Technical owner for critical enterprise applications, operating autonomously in maintenance and evolutionary architecture.",
    "exp.sicoob.b2": "Development and sustainment of distributed microservices in <strong>Java 11+ with Spring Boot</strong>.",
    "exp.sicoob.b3": "<strong>High-impact performance tuning:</strong> Refactored critical database queries, reducing execution time from <strong>2 hours to ~30 minutes (-75%)</strong>.",
    "exp.sicoob.b4": "Design, standardization, and documentation of REST APIs with <strong>OpenAPI / Swagger</strong> and enterprise governance via <strong>IBM API Connect (APIC)</strong>.",
    "exp.sicoob.b5": "Implementation of automated unit and integration tests using <strong>JUnit and Mockito (TDD)</strong>.",
    "exp.sicoob.b6": "Deployment and troubleshooting on <strong>OpenShift powered by Kubernetes + AWS (ROSA - Red Hat OpenShift Service on AWS)</strong>.",
    "exp.sicoob.b7": "Implementation of asynchronous messaging systems using <strong>Apache Kafka</strong>.",
    "exp.sicoob.b8": "Production monitoring of pods, logs, and telemetry metrics with <strong>Grafana and Graylog</strong>.",
    "exp.sicoob.b9": "Technical mentoring and onboarding of new engineers; leading daily standups and technical alignments with cross-functional teams.",
    "exp.sicoob.b10": "Applied AI prompt engineering with <strong>Codex</strong> to accelerate engineering delivery and code quality.",

    "exp.ebix.client": "Client: Bradesco Seguros",
    "exp.ebix.duration": "4 yrs 7 mos",
    "exp.ebix.summary": "Cross-functional engineering in the development, sustainment, and modernization of multiple mission-critical enterprise applications across diverse business units at Bradesco Seguros, navigating complex and legacy ecosystems.",
    "exp.ebix.b1": "Critical role sustaining and evolving high-availability enterprise systems, including participation in one of the <strong>company's highest-relevance and highest-operational-cost projects</strong>, ensuring stability and efficiency.",
    "exp.ebix.b2": "Led root-cause investigations and mitigation of critical production incidents across multiple systems, safeguarding essential services against operational and financial impacts.",
    "exp.ebix.b3": "Developed, maintained, and optimized complex SQL queries and routines in <strong>SQL Server</strong>, improving batch and transactional performance across business units.",
    "exp.ebix.b4": "<strong>Technical documentation architecture:</strong> Spearheaded the creation of previously non-existent architectural manuals, guides, and process docs, standardizing knowledge across squads.",
    "exp.ebix.b5": "Contributed to continuous integration and delivery (<strong>CI/CD with Jenkins</strong>) and gradual frontend modernization using <strong>React and Vue</strong>.",
    "exp.ebix.b6": "<strong>Professional recognition:</strong> Promoted internally from Mid-level to Senior Engineer, establishing technical reference status supporting multiple client squads and systems.",

    "exp.mindtek.client": "Client: IBGE",
    "exp.mindtek.b1": "Specialized development and sustainment of Java applications structured in <strong>microservices</strong> for a Brazilian federal agency (IBGE).",
    "exp.mindtek.b2": "Implemented structural code and architectural improvements in a <strong>JBoss</strong> environment, increasing stability and reducing technical debt.",
    "exp.mindtek.b3": "Technical collaboration in migrating legacy interfaces from <strong>AngularJS to Angular 5</strong>, improving frontend maintainability.",

    "exp.gluck.b1": "Developed high-performance backend features in <strong>.NET Core</strong> leveraging <strong>CQRS</strong> architectural patterns.",
    "exp.gluck.b2": "Direct face-to-face engagement with clients, conducting requirement alignments, explaining complex technical trade-offs, and translating business logic into software solutions.",
    "exp.gluck.b3": "Implemented security and access control in Java applications using <strong>OAuth 2.0 authentication with Spring Boot</strong>.",
    "exp.gluck.b4": "Modeled, developed, and maintained complex queries, views, and triggers in <strong>SQL Server</strong>.",
    "exp.gluck.b5": "Participated in application containerization with <strong>Docker</strong>, interface migration (AngularJS to Angular 2), and version control with Git and TFS.",

    "skills.kicker": "TECHNICAL ARSENAL",
    "skills.title": "Technical Competencies & Ecosystem",
    "skills.filterAll": "All",
    "skills.filterArch": "Architecture & Integration",
    "skills.filterDb": "Databases",
    "skills.backend.sub": "Languages, Frameworks & Automated Testing",
    "skills.arch.title": "Architecture & Integration",
    "skills.arch.sub": "Distributed Systems, Messaging & Security",
    "skills.cloud.title": "Cloud & Infrastructure",
    "skills.cloud.sub": "Container Orchestration & Application Servers",
    "skills.devops.title": "DevOps & Observability",
    "skills.devops.sub": "CI/CD, Production Telemetry & AI Engineering",
    "skills.db.title": "Databases & Performance",
    "skills.db.sub": "Relational Modeling, Views, Triggers & Query Tuning",
    "skills.front.title": "Frontend & Complementary Stack",
    "skills.front.sub": "Interface Modernization & Legacy Ecosystems",

    "edu.kicker": "ACADEMIC CREDENTIALS",
    "edu.title": "Education & Languages",
    "edu.mba.title": "MBA in Software Architecture",
    "edu.mba.year": "Completed in 2025",
    "edu.mba.focus": "Distributed Systems, DDD, Microservices & Cloud",
    "edu.bsc.badge": "BACHELOR'S DEGREE",
    "edu.bsc.title": "B.Sc. in Information Systems",
    "edu.bsc.year": "Completed in 2017",
    "edu.lang.badge": "COMMUNICATION",
    "edu.lang.title": "Languages",
    "edu.lang.pt": "Portuguese",
    "edu.lang.ptLevel": "Native",
    "edu.lang.en": "English",
    "edu.lang.enLevel": "Intermediate • Technical documentation reading (In progress)",

    "contact.kicker": "DIRECT CONNECTION",
    "contact.title": "Let's talk about Backend Architecture or Senior Engineering Roles?",
    "contact.desc": "Available for professional networking, mission-critical backend engineering initiatives, Java/Spring Boot architecture, and cloud-native platforms.",
    "contact.phoneLabel": "Phone / WhatsApp",
    "contact.copy": "Copy",
    "contact.open": "Open ↗",
    "toast.copied": "Copied to clipboard:"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const toastEl = document.getElementById("toast");

  let currentLang = localStorage.getItem("ptb_lang") || "pt";
  let currentTheme = localStorage.getItem("ptb_theme") || "dark";

  // Apply initial theme
  htmlEl.setAttribute("data-theme", currentTheme);

  // Apply initial language
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("ptb_lang", lang);
    htmlEl.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    if (langLabel) {
      langLabel.textContent = lang === "pt" ? "EN" : "PT";
    }

    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict && dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

  applyLanguage(currentLang);

  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      htmlEl.setAttribute("data-theme", currentTheme);
      localStorage.setItem("ptb_theme", currentTheme);
    });
  }

  // Language Toggle
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "pt" ? "en" : "pt";
      applyLanguage(nextLang);
    });
  }

  // Skills Category Filter
  const filterButtons = document.querySelectorAll(".filter-btn");
  const skillCards = document.querySelectorAll(".skill-domain-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      skillCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // Copy to Clipboard
  let toastTimeout;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2600);
  }

  document.querySelectorAll(".copy-email-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const valueToCopy = btn.getAttribute("data-copy");
      if (!valueToCopy) return;
      try {
        await navigator.clipboard.writeText(valueToCopy);
        const prefix = translations[currentLang]["toast.copied"] || "Copiado:";
        showToast(`${prefix} ${valueToCopy}`);
      } catch {
        // Fallback copy
        const tempInput = document.createElement("textarea");
        tempInput.value = valueToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        const prefix = translations[currentLang]["toast.copied"] || "Copiado:";
        showToast(`${prefix} ${valueToCopy}`);
      }
    });
  });

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav, { passive: true });
});
