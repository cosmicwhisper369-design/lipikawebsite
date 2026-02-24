(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const n={notes:{title:"Notes",grades:[{id:"6-8",label:"Grades 6–8",subjects:[{id:"science-68",label:"Science (NGSS-Aligned)",topics:[{id:"earth-space",label:"Earth & Space Science",subtopics:["Earth's Systems","Plate Tectonics & Earth History","Weather & Climate","Natural Resources & Human Impact","Solar System & Gravity"]},{id:"life-science",label:"Life Science",subtopics:["Cell Structure & Function","Organization of Organisms","Ecosystems & Energy Flow","Heredity (Genes & Traits)","Natural Selection & Adaptation"]},{id:"physical-science",label:"Physical Science",subtopics:["Structure & Properties of Matter","Chemical Reactions","Forces & Motion","Energy","Waves & Electromagnetic Radiation"]}]},{id:"math-68",label:"Mathematics (Common Core)",topics:[{id:"ratios",label:"Ratios & Proportional Relationships"},{id:"number-system",label:"The Number System"},{id:"expressions",label:"Expressions & Equations"},{id:"functions-8",label:"Functions (Grade 8)"},{id:"geometry",label:"Geometry"},{id:"stats",label:"Statistics & Probability"}]}]},{id:"9-10",label:"Grades 9–10",subjects:[{id:"science-910",label:"Science (NGSS High School)",topics:[{id:"biology-hs",label:"Biology",subtopics:["Structure & Function","Matter & Energy in Organisms","Inheritance & Variation of Traits","Natural Selection & Evolution","Ecosystem Dynamics"]},{id:"chemistry-hs",label:"Chemistry",subtopics:["Atomic Structure","Periodic Trends","Chemical Bonding","Chemical Reactions & Stoichiometry","Energy in Chemical Processes","Reaction Rates & Equilibrium"]},{id:"physics-hs",label:"Physics",subtopics:["Kinematics","Newton’s Laws of Motion","Work, Energy & Power","Momentum","Waves & Sound","Electricity & Magnetism"]}]},{id:"math-910",label:"Mathematics (Common Core HS)",topics:[{id:"algebra-1",label:"Algebra I",subtopics:["Linear Equations","Systems of Equations","Exponential Functions","Quadratic Functions"]},{id:"geometry-hs",label:"Geometry",subtopics:["Congruence & Proof","Similarity & Trigonometry","Circles","Coordinate Geometry","Geometric Measurement"]},{id:"algebra-2",label:"Algebra II",subtopics:["Polynomial Functions","Complex Numbers","Exponential & Logarithmic","Sequences & Series","Probability & Statistics"]},{id:"pre-calculus",label:"Pre-Calculus",subtopics:["Function Analysis","Trigonometric Functions","Polar Coordinates & Vectors","Matrices","Limits"]}]}]},{id:"ap-courses",label:"AP Courses",subjects:[{id:"ap-bio",label:"AP Biology",topics:["Chemistry of Life","Cell Structure & Function","Cellular Energetics","Cell Communication","Heredity","Gene Expression","Natural Selection","Ecology"]},{id:"ap-chem",label:"AP Chemistry",topics:["Atomic Structure","Molecular Bonding","Intermolecular Forces","Chemical Reactions","Kinetics","Thermodynamics","Equilibrium","Acids & Bases"]},{id:"ap-physics-1",label:"AP Physics 1",topics:["Kinematics","Dynamics","Circular Motion","Energy","Momentum","Simple Harmonic Motion","Electric Charge & Circuits"]},{id:"ap-physics-2",label:"AP Physics 2",topics:["Fluids","Thermodynamics","Electric Force","Circuits","Magnetism","Optics","Modern Physics"]},{id:"ap-physics-c-m",label:"AP Physics C: Mechanics",topics:["Calculus-Based Kinematics","Newton’s Laws","Work, Energy & Power","Systems of Particles","Rotation","Oscillations & Gravitation"]},{id:"ap-physics-c-em",label:"AP Physics C: Electricity & Magnetism",topics:["Electrostatics","Conductors & Capacitors","Electric Circuits","Magnetic Fields","Electromagnetic Induction"]}]},{id:"standardized-exams",label:"Standardized Exams",subjects:[{id:"mcat",label:"MCAT Physics & Chemistry",topics:["Translational Motion","Fluids","Thermodynamics","Electrochemistry","Circuits","Acid–Base Chemistry"]}]},{id:"academic-olympiads",label:"Academic Olympiads",subjects:[{id:"amc",label:"AMC 8 / AMC 10",topics:["Number Theory","Algebra","Geometry","Counting & Probability"]},{id:"sci-oly",label:"Science Olympiad",topics:["Experimental Design","Anatomy & Physiology","Chemistry Lab","Physics Lab"]},{id:"phys-oly",label:"Physics Olympiad",topics:["Advanced Mechanics","Electromagnetism","Waves & Optics","Modern Physics"]},{id:"chem-oly",label:"Chemistry Olympiad",topics:["Stoichiometry","Thermodynamics","Equilibrium","Organic Chemistry"]}]}]},worksheets:{title:"Worksheets",grades:[]}};n.worksheets.grades=JSON.parse(JSON.stringify(n.notes.grades));const p=()=>`
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
`,u=()=>`
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
`,g=()=>`
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
`,y=()=>`
  <section class="fade-in section-padding">
    <div class="container">
      <h2 style="margin-bottom: 4rem;">Latest <span class="text-gradient">Insights</span></h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        ${[1,2,3].map(t=>`
          <div class="glass p-6">
            <div style="aspect-ratio: 16/9; background: #f1f5f9; border-radius: 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.5rem;">📝</div>
            <p style="color: var(--primary); font-size: 0.8rem; font-weight: 700; margin-bottom: 0.5rem;">EDUCATION • 2026</p>
            <h3 style="margin-bottom: 1rem;">The Role of Visual Models in Science</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Bridging the gap between abstract concepts and real-world intuition...</p>
            <a href="#" style="color: var(--primary); font-weight: 700;">Read More →</a>
          </div>
        `).join("")}
      </div>
    </div>
  </section>
`,b=()=>`
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
`,l={"/":p,"/about":u,"/academic-program":b,"/blogs":y,"/contact":g},h=()=>{const t=document.getElementById("mobile-toggle"),i=document.querySelector(".nav-links");t&&i&&(t.onclick=o=>{o.stopPropagation(),i.classList.toggle("open")},document.onclick=()=>i.classList.remove("open"))},d=()=>window.location.pathname.startsWith("/lipikawebsite")?"/lipikawebsite":"",c=async()=>{const t=d();let i=window.location.pathname;t&&i.startsWith(t)&&(i=i.replace(t,"")||"/");const o=l[i]||l["/"],s=document.getElementById("app-root");s&&(s.innerHTML=o(),document.title=`${i.substring(1).toUpperCase()||"HOME"} | TEACHER.EDU`),document.querySelectorAll(".nav-link").forEach(e=>{const a=e.getAttribute("href");e.classList.toggle("active",a===i||a==="/"&&i==="/")}),i==="/academic-program"&&f(),h(),window.scrollTo(0,0)};window.onscroll=()=>document.getElementById("header")?.classList.toggle("scrolled",window.scrollY>50);window.onpopstate=c;document.body.onclick=t=>{const i=t.target.closest("[data-link]");if(i){t.preventDefault();const o=i.getAttribute("href"),s=d();history.pushState(null,null,s+o),c()}};function f(){const t={tab:"notes",activeGrade:n.notes.grades[0].id},i=()=>{const s=document.getElementById("grade-nav");s&&(s.innerHTML=n[t.tab].grades.map(e=>`
      <div class="grade-chip ${t.activeGrade===e.id?"active":""}" data-grade="${e.id}">
          ${e.label}
      </div>
    `).join(""),s.querySelectorAll(".grade-chip").forEach(e=>{e.onclick=()=>{t.activeGrade=e.dataset.grade,i(),o()}}))},o=()=>{const s=document.getElementById("academic-content");if(!s)return;const e=n[t.tab].grades.find(a=>a.id===t.activeGrade);s.innerHTML=`
      <div class="fade-in">
        <h3 style="margin-bottom: 2rem;">${e.label} - <span class="text-gradient">${t.tab.charAt(0).toUpperCase()+t.tab.slice(1)}</span></h3>
        <div>
            ${e.subjects.map(a=>`
                <div class="subject-card">
                    <h4 style="margin-bottom: 2rem; border-left: 4px solid var(--primary); padding-left: 1.25rem;">${a.label}</h4>
                    <div class="academic-topics-grid">
                        ${a.topics.map(r=>`
                            <div>
                                <h5 style="margin-bottom: 0.75rem; font-size: 1.1rem;">${typeof r=="string"?r:r.label}</h5>
                                ${r.subtopics?`
                                    <ul style="border-left: 2px solid var(--bg-surface); padding-left: 1rem; color: var(--text-muted); font-size: 0.9rem;">
                                        ${r.subtopics.map(m=>`<li style="margin-bottom: 0.4rem;">• ${m}</li>`).join("")}
                                    </ul>
                                `:""}
                            </div>
                        `).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
      </div>
    `};document.querySelectorAll(".tab-pill").forEach(s=>{s.onclick=()=>{document.querySelectorAll(".tab-pill").forEach(e=>e.classList.remove("active")),s.classList.add("active"),t.tab=s.dataset.tab,t.activeGrade=n[t.tab].grades[0].id,i(),o()}}),i(),o()}c();
