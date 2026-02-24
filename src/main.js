import { academicData } from './data/academicProgram.js';

// Page Components
const Home = () => `
  <section class="fade-in section-padding">
    <div class="container">
      <div style="max-width: 900px; margin: 0 auto; text-align: center; margin-bottom: 6rem;">
        <span style="background: var(--primary-gradient); color: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2rem; display: inline-block;">Premium Mentorship</span>
        <h1>Unlocking Potential Through <span class="text-gradient">Curiosity</span></h1>
        <p style="font-size: 1.2rem; color: var(--text-muted); margin-top: 1.5rem; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">Advanced Science and Mathematics mentorship for Grades 6–12, AP preparation, and Competitive Olympiads.</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/academic-program" class="btn btn-primary" data-link>View Programs</a>
          <a href="/about" class="btn btn-outline" data-link>About Me</a>
        </div>
      </div>
      
      <!-- Bento Grid -->
      <div class="bento-grid">
        <div class="glass p-8 bento-item bento-large fade-in">
          <h2 style="margin-bottom: 1rem;">NGSS <span style="color: var(--primary);">Aligned</span></h2>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">Our curriculum strictly follows Next Generation Science Standards, ensuring a deep conceptual foundation.</p>
          <div style="aspect-ratio: 2/1; background: #f1f5f9; border-radius: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem;">🔬</div>
        </div>
        <div class="glass p-8 bento-item bento-medium fade-in">
          <h3 style="margin-bottom: 1rem;">Common Core <span style="color: var(--secondary);">Math</span></h3>
          <p style="color: var(--text-muted);">Mastering the domains from Ratios to Pre-Calculus with clinical precision.</p>
        </div>
        <div class="glass p-8 bento-item bento-medium fade-in" style="grid-column: span 2;">
          <h3 style="margin-bottom: 1rem;">Olympiad <span style="color: var(--primary);">Prep</span></h3>
          <p style="color: var(--text-muted);">Specialized training for AMC, Science Olympiad, and Global competitions.</p>
        </div>
      </div>

      <!-- CTA Above Footer -->
      <div class="cta-box" style="margin-top: 8rem;">
         <h2 style="margin-bottom: 1.5rem;">Ready to Start Your <span class="text-gradient">Journey?</span></h2>
         <p style="color: var(--text-muted); margin-bottom: 2.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">Join our specialized programs today and unlock your full academic potential.</p>
         <a href="/contact" class="btn btn-primary" data-link>Schedule a Consultation</a>
      </div>
    </div>
  </section>
`;

const About = () => `
  <section class="fade-in section-padding">
    <div class="container" style="max-width: 1100px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 450px), 1fr)); gap: 4rem; align-items: center;">
        <div>
          <span style="color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; display: block; margin-bottom: 1rem;">My Story</span>
          <h2 style="letter-spacing: -2px; margin-bottom: 2rem;">Dedicated to <span class="text-gradient">Excellence</span></h2>
          <p style="margin-bottom: 1.5rem; font-size: 1.15rem; font-weight: 500;">With over a decade of experience, I specialize in making complex Science and Mathematics accessible.</p>
          <p style="margin-bottom: 3rem; color: var(--text-muted);">My philosophy centers on Conceptual Clarity. I believe every student has a unique learning rhythm, and my programs are designed to adapt to that rhythm.</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
             <a href="/contact" class="btn btn-primary" data-link>Contact Me</a>
             <a href="/academic-program" class="btn btn-outline" data-link>Our Programs</a>
          </div>
        </div>
        <div class="glass" style="aspect-ratio: 4/5; background: radial-gradient(circle, #fff, #f1f5f9); display: flex; align-items: center; justify-content: center; font-size: 6rem; border-radius: 2rem;">👨‍🏫</div>
      </div>
    </div>
  </section>
`;

const Contact = () => `
  <section class="fade-in section-padding">
    <div class="container" style="max-width: 750px;">
      <div style="text-align: center; margin-bottom: 4rem;">
        <h2>Let's <span style="color: var(--secondary);">Connect</span></h2>
        <p style="color: var(--text-muted); margin-top: 1rem;">Have questions about our mentorship? Send a message.</p>
      </div>
      <form class="form-card" id="contact-form">
        <input type="text" placeholder="Full Name">
        <input type="email" placeholder="Email Address">
        <textarea rows="5" placeholder="How can I help you?"></textarea>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
`;

const Blogs = () => `
  <section class="fade-in section-padding">
    <div class="container">
      <h2 style="margin-bottom: 4rem;">Latest <span class="text-gradient">Insights</span></h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        ${[1, 2, 3].map(i => `
          <div class="glass p-6">
            <div style="aspect-ratio: 16/9; background: #f1f5f9; border-radius: 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📝</div>
            <p style="color: var(--primary); font-size: 0.8rem; font-weight: 700; margin-bottom: 0.5rem;">EDUCATION • 2026</p>
            <h3 style="margin-bottom: 1rem;">The Role of Visual Models in Science</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Bridging the gap between abstract concepts and real-world intuition...</p>
            <a href="#" style="color: var(--primary); font-weight: 700;">Read More →</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

const AcademicProgram = () => `
  <section class="fade-in section-padding">
    <div class="container">
      <div style="margin-bottom: 5rem;">
        <h2 style="letter-spacing: -1px;">Academic <span class="text-gradient">Program</span></h2>
        <p style="color: var(--text-muted); margin-top: 1rem; font-size: 1.1rem;">Notes and Worksheets categorized by grade and subject.</p>
      </div>
      
      <div class="tab-pill-group">
          <button class="tab-pill active" data-tab="notes">Notes</button>
          <button class="tab-pill" data-tab="worksheets">Worksheets</button>
      </div>
      
      <div id="academic-app">
          <aside id="academic-sidebar">
              <div class="glass p-6">
                <p style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: var(--text-muted); letter-spacing: 1px; margin-bottom: 1.5rem;">Grade Levels</p>
                <nav id="grade-nav"></nav>
              </div>
          </aside>
          <main id="academic-content"></main>
      </div>
    </div>
  </section>
`;

// Router & App State
const routes = {
  "/": Home,
  "/about": About,
  "/academic-program": AcademicProgram,
  "/blogs": Blogs,
  "/contact": Contact
};

const initMobileMenu = () => {
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.onclick = (e) => { e.stopPropagation(); navLinks.classList.toggle('open'); };
    document.onclick = () => navLinks.classList.remove('open');
  }
};

const getBasePath = () => {
  const path = window.location.pathname;
  if (path.startsWith('/lipikawebsite')) return '/lipikawebsite';
  return '';
};

const router = async () => {
  const base = getBasePath();
  let path = window.location.pathname;

  // Normalize path by removing base
  if (base && path.startsWith(base)) {
    path = path.replace(base, '') || '/';
  }

  const renderPage = routes[path] || routes["/"];
  const appRoot = document.getElementById('app-root');
  if (appRoot) {
    appRoot.innerHTML = renderPage();
    document.title = `${path.substring(1).toUpperCase() || 'HOME'} | TEACHER.EDU`;
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === path || (href === '/' && path === '/'));
  });

  if (path === '/academic-program') initAcademicApp();
  initMobileMenu();
  window.scrollTo(0, 0);
};

window.onscroll = () => document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 50);
window.onpopstate = router;

document.body.onclick = e => {
  const link = e.target.closest("[data-link]");
  if (link) {
    e.preventDefault();
    const targetPath = link.getAttribute('href');
    const base = getBasePath();
    history.pushState(null, null, base + targetPath);
    router();
  }
};

function initAcademicApp() {
  const state = { tab: 'notes', activeGrade: academicData.notes.grades[0].id };
  const renderSidebar = () => {
    const sidebar = document.getElementById('grade-nav');
    if (!sidebar) return;
    sidebar.innerHTML = academicData[state.tab].grades.map(grade => `
      <div class="grade-chip ${state.activeGrade === grade.id ? 'active' : ''}" data-grade="${grade.id}">
          ${grade.label}
      </div>
    `).join('');
    sidebar.querySelectorAll('.grade-chip').forEach(el => {
      el.onclick = () => { state.activeGrade = el.dataset.grade; renderSidebar(); renderContent(); };
    });
  };
  const renderContent = () => {
    const content = document.getElementById('academic-content');
    if (!content) return;
    const gradeData = academicData[state.tab].grades.find(g => g.id === state.activeGrade);
    content.innerHTML = `
      <div class="fade-in">
        <h3 style="margin-bottom: 2rem;">${gradeData.label} - <span class="text-gradient">${state.tab.charAt(0).toUpperCase() + state.tab.slice(1)}</span></h3>
        <div>
            ${gradeData.subjects.map(subject => `
                <div class="subject-card">
                    <h4 style="margin-bottom: 2rem; border-left: 4px solid var(--primary); padding-left: 1.25rem;">${subject.label}</h4>
                    <div class="academic-topics-grid">
                        ${subject.topics.map(topic => `
                            <div>
                                <h5 style="margin-bottom: 0.75rem; font-size: 1.1rem;">${typeof topic === 'string' ? topic : topic.label}</h5>
                                ${topic.subtopics ? `
                                    <ul style="border-left: 2px solid var(--bg-surface); padding-left: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                                        ${topic.subtopics.map(st => `<li style="margin-bottom: 0.4rem;">• ${st}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
      </div>
    `;
  };
  document.querySelectorAll('.tab-pill').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); state.tab = btn.dataset.tab;
      state.activeGrade = academicData[state.tab].grades[0].id; renderSidebar(); renderContent();
    };
  });
  renderSidebar(); renderContent();
}

router();
