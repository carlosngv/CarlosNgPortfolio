export const en = {
  // Navigation
  "nav.home": "Home",
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "nav.hire": "Get in touch",

  // Hero
  "hero.greeting": "Hi, I'm",
  "hero.name": "Carlos Ng",
  "hero.title": "Software Engineer",
  "hero.brief":
    "Software developer with 5+ years of experience specializing in process automation, AI-driven solutions, and web development. I build LLM-based systems, AI-powered products, and full-stack applications.",
  "hero.cta.download": "Download CV",
  "hero.cta.contact": "Get in touch",
  "hero.status": "Available for new projects",
  "hero.location": "Guatemala",
  "hero.experience": "5+ yrs of experience",

  // About
  "about.heading": "About Me",
  "about.bio.p1":
    "I'm a Computer Science and Systems Engineer from Guatemala with over 5 years of professional experience. My work spans process automation with RPA, AI-powered product development, and full-stack web engineering.",
  "about.bio.p2":
    "I specialize in implementing LLM-based systems and building AI-driven products — from recruitment platforms powered by language models to digital signature systems with conversational AI agents. I thrive in agile teams and enjoy turning complex problems into elegant solutions.",
  "about.skills.heading": "Technologies I work with",

  // Experience
  "experience.heading": "Experience",
  "experience.present": "Present",

  // Projects
  "projects.heading": "Projects",
  "projects.cta": "View project",
  "projects.code": "Source code",

  // Blog
  "blog.heading": "From the Blog",
  "blog.readMore": "Read more",
  "blog.viewAll": "View all posts",
  "blog.by": "By",
  "blog.minRead": "min read",
  "blog.tags": "Tags",
  "blog.backToList": "Back to blog",
  "blog.noPostsFound": "No posts found.",

  // Contact
  "contact.heading": "Let's Work Together",
  "contact.intro":
    "I'm always open to interesting projects and collaborations. Feel free to reach out.",
  "contact.email": "Email",
  "contact.github": "GitHub",
  "contact.linkedin": "LinkedIn",
  "contact.twitter": "Twitter",

  // Contact form
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.message": "Message",
  "contact.form.name.placeholder": "Your name",
  "contact.form.email.placeholder": "your@email.com",
  "contact.form.message.placeholder": "Tell me about your project or idea...",
  "contact.form.submit": "Send Message",
  "contact.form.sending": "Sending...",
  "contact.form.success": "Message sent! I'll get back to you soon.",
  "contact.form.error": "Something went wrong. Please try again.",

  // Footer
  "footer.rights": "Carlos Ng - All rights reserved.",

  // Common
  "common.lang.en": "EN",
  "common.lang.es": "ES",
  "common.loading": "Loading...",
  "common.downloadCV": "Download CV",
} as const;

export type TranslationKeys = keyof typeof en;
