const translations = {
  pt: {
    experiencia: "Experiência",
    formacao: "Formação",
    contato: "Contato",
    introducaoTitulo: "Desenvolvedor<br>Front End &<br>UX/UI Designer",
    introducaoTexto: "Localizado em Curitiba ❄️",
    experience_title: "Experiência",
    role_junior_dev: "Desenvolvedor Júnior",
    experienciaTexto:
      "Desenvolvo pequenos projetos como o Bikcraft utilizando apenas <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>. Para aplicativos web como a rede social Dogs eu trabalhei no <strong>UX</strong> e <strong>UI</strong> Design do projeto.",
    bikcraft_text:
      "No projeto Bikcraft eu trabalhei no desenvolvimento completo do HTML, CSS e JavaScript do site. Além disso, também prestei consultoria no Design.",
    role_mid_designer: "Designer Pleno",
    jurisoft_text:
      "Atuei cuidando do design de landing pages e na criação de interfaces com foco em UX/UI, buscando soluções visuais que otimizassem a experiência do usuário.",
    role_jr_designer: "Designer Júnior",
    projetec_text:
      "Desenvolvi identidades visuais para eventos corporativos e atuei na operação de vídeo para garantir qualidade visual durante as execuções.",
    education_title: "Formação",
    education_text:
      "Minha mais recente experiência acadêmica foi a <strong>Graduação</strong> 🎓 que fiz em <strong>Design Visual</strong>. Além disso me mantenho sempre atualizado com cursos intensivos online.",
    degree_bachelor: "Bacharel",
    course_visual_design: "Design Visual",
    degree_technologist: "Tecnólogo",
    course_graphic_design: "Design Gráfico",
    course_electrotechnics: "Eletrotécnica",
    intensive_courses: "Cursos Intensivos",
    course_frontend: "Front End Para Iniciantes <span>90h</span>",
    course_js: "JavaScript ES6 Complete <span>72h</span>",
    languages: "Idiomas",
    language_english: "Inglês <span> / Fluente</span>",
    language_portuguese: "Português<span> / Nativo</span>",
    footer_text:
      "Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋",
    footer_copy: "Vinicius. Alguns direitos Reservados.",
    title: "Vinicius L - Desenvolvedor e Designer UX/UI",
  },
  en: {
    experiencia: "Experience",
    formacao: "Education",
    contato: "Contact",
    introducaoTitulo: "Front End Developer<br>& UX/UI Designer",
    introducaoTexto: "Based in Curitiba ❄️",
    experience_title: "Experience",
    role_junior_dev: "Junior Developer",
    experienciaTexto:
      "I develop small projects like Bikcraft using only <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. For web apps like the social network Dogs, I worked on the project's <strong>UX</strong> and <strong>UI</strong> Design.",
    bikcraft_text:
      "In the Bikcraft project, I worked on the complete development of the website's HTML, CSS, and JavaScript. Additionally, I also provided design consulting.",
    role_mid_designer: "Full Designer",
    jurisoft_text:
      "I worked on the design of landing pages and the creation of interfaces focused on UX/UI, seeking visual solutions to optimize the user experience.",
    role_jr_designer: "Junior Designer",
    projetec_text:
      "I developed visual identities for corporate events and worked in video operations to ensure visual quality during executions.",
    education_title: "Qualifications",
    education_text:
      "My most recent academic experience was a <strong>Degree</strong> 🎓 in <strong>Visual Design</strong>. I also stay up-to-date with intensive online courses.",
    degree_bachelor: "Bachelor",
    course_visual_design: "Visual Design",
    degree_technologist: "Technologist",
    course_graphic_design: "Graphic Design",
    course_electrotechnics: "Electrotechnics",
    intensive_courses: "Intensive Courses",
    course_frontend: "Front End for begginers <span>90h</span>",
    course_js: "JavaScript ES6 Complete <span>72h</span>",
    languages: "Languages",
    language_english: "English <span> / C1</span>",
    language_portuguese: "Portuguese<span> / Native</span>",
    footer_text:
      "I’m available for new projects right now. Get in touch and let's talk 👋",
    footer_copy: "Vinicius. Some rights reserved.",
    title: "Vinicius L - Developer & UX/UI Designer",
  },
};

const toggle = document.getElementById("languageToggle");
let currentLanguage = localStorage.getItem("language") || "en"; // 🌍 Idioma padrão em inglês

function changeLanguage(language) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = translations[language][key];
  });
  document.documentElement.lang = language;
  currentLanguage = language; // Atualiza o idioma atual
  localStorage.setItem("language", language);
}

// 🚀 Aplica a tradução para inglês assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
  changeLanguage(currentLanguage);
  toggle.checked = currentLanguage === "en"; // Mantém o botão sincronizado com o idioma
});

// Alterna o idioma quando o botão for clicado
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    changeLanguage("en"); // Altera para inglês
  } else {
    changeLanguage("pt"); // Altera para português
  }
});
