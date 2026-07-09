(function () {
  "use strict";

  const seniorManagerData = window.INTERVIEW_DATA;

  const peopleDevelopmentGroups = [
    { id: "start", label: "Start here" },
    { id: "opening", label: "Opening and fit" },
    { id: "early-talent", label: "Early talent" },
    { id: "capability", label: "Capability building" },
    { id: "coaching", label: "Coaching and facilitation" },
    { id: "performance", label: "Performance consulting" },
    { id: "stakeholders", label: "Stakeholders and delivery" },
    { id: "growth", label: "Learning agility" },
    { id: "readiness", label: "SG28 readiness" },
  ];

  const groupLabels = Object.fromEntries(peopleDevelopmentGroups.map((group) => [group.id, group.label]));
  const peopleDevelopmentQuestions = window.PEOPLE_DEVELOPMENT_QUESTIONS || [];

  const peopleDevelopmentGuidePages = [
    {
      id: "pdc-guide-cover",
      type: "guide",
      group: "start",
      navIcon: "book",
      title: "Interview guide",
      searchText: "People Development Consultant SG28 People Team Makati City Optum internal application. Performance consulting, onboarding, coaching, facilitation, accessibility, stakeholder influence.",
      html: `
        <div class="guide-cover">
          <p class="question-meta">Interview preparation guide</p>
          <h2>People Development<br>Consultant</h2>
          <p class="guide-subtitle">Optum internal application <span>|</span> Kevin Tabora</p>
          <div class="positioning-card">
            <p class="column-label">Core positioning</p>
            <blockquote>"Instructional design helped me improve performance through learning. People Development lets me work on the larger system around performance: role readiness, coaching, manager support, culture, and growth."</blockquote>
          </div>
          <section class="guide-section">
            <p class="column-label orange">How to use this guide</p>
            <ul>
              <li>Use this role path during the People Development interview so you do not need to switch back to Senior Manager.</li>
              <li>Lead with business and operations impact first, then use internal ID capability-building as supporting evidence.</li>
              <li>Keep answers specific: who had the problem, what you built or changed, and what improved.</li>
              <li>When there is a gap, name it plainly and bridge to the adjacent experience you actually have.</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      id: "pdc-opening-lines",
      type: "guide",
      group: "start",
      navIcon: "chat",
      title: "Opening lines",
      searchText: "Opening lines for People Development Consultant interview. Warm greeting, rescheduled interview joke, calendar changes, role interest, onboarding, coaching, performance consulting, people development.",
      html: `
        <div class="guide-strategy opening-lines-page">
          <h2>Opening lines</h2>
          <p class="strategy-lead">Use these to begin naturally. If the schedule changes come up, acknowledge them lightly, then move back to the role.</p>

          <section class="opening-card opening-anchor-card">
            <p class="column-label orange">Simple default</p>
            <blockquote>"Hi [Name], good to finally meet you. I'm glad we were able to find time today. I know schedules have been full, so I appreciate you making room for this conversation. I'm excited to talk because this role connects a lot of the work I enjoy: onboarding, coaching, facilitation, and helping people perform better in the role they were hired to do."</blockquote>
          </section>

          <div class="opening-line-grid">
            <section class="opening-card">
              <h3>If you want the light joke</h3>
              <ul>
                <li>"I'm glad we finally get to connect. The calendar took the scenic route, but we made it."</li>
                <li>"No worries at all about the reschedules. I know calendars can get crowded. I'm just glad we found the time."</li>
              </ul>
            </section>

            <section class="opening-card">
              <h3>If they ask how you are</h3>
              <ul>
                <li>"I'm doing well, thank you. I'm glad we finally get to have the conversation. I've been thinking through how my work in onboarding, performance support, and capability building connects to this role."</li>
                <li>"I'm good, thank you. I appreciate you making time, especially with everything moving around. I'm looking forward to learning more about what the team needs from this role."</li>
              </ul>
            </section>

            <section class="opening-card">
              <h3>If the call starts directly</h3>
              <ul>
                <li>"Absolutely. Before we begin, thank you again for making the time. I am ready whenever you are."</li>
                <li>"Sounds good. I am ready. I am especially interested in the role's connection to early talent development, onboarding, and broader people capability."</li>
              </ul>
            </section>
          </div>
        </div>
      `,
    },
    {
      id: "pdc-interview-strategy",
      type: "guide",
      group: "start",
      navIcon: "compass",
      title: "Interview strategy",
      searchText: "Interview strategy People Development Consultant. Operations impact, training, job aids, coaching supervisors, onboarding, performance consulting, The Learning Studio.",
      html: `
        <div class="guide-strategy">
          <h2>Interview strategy</h2>
          <p class="strategy-lead">The strongest positioning is not "I design courses." It is "I help people become ready, capable, and supported enough to perform." Start with operations and business audiences, then bring in internal learning-team capability as proof that you can develop others too.</p>
          <section class="guide-section">
            <h3>Themes to reinforce</h3>
            <ul>
              <li>Elevating idea: ID improves performance through learning. People Development expands that work into role readiness, coaching, leadership support, culture, and talent growth.</li>
              <li>Follow the money: agents, technicians, analysts, trainers, supervisors, and operations outcomes come first.</li>
              <li>Training is one tool. Job aids, scripts, coaching guides, standards, workshops, and stakeholder alignment can matter just as much.</li>
              <li>When the issue is not a skill gap, say so. Good people development starts with diagnosis.</li>
              <li>Use The Learning Studio as internal capability-building evidence, not as the main proof of business impact.</li>
              <li>Be honest about the early-career hiring gap. Your strength is onboarding and development after selection.</li>
            </ul>
          </section>
          <section class="guide-section">
            <h3>Answer rhythm</h3>
            <div class="rhythm-grid">
              <div><strong>Problem</strong><span>What business or people problem existed?</span></div>
              <div><strong>People</strong><span>Who needed support?</span></div>
              <div><strong>Action</strong><span>What did you build, facilitate, coach, or recommend?</span></div>
              <div><strong>Result</strong><span>What changed, and what did you learn?</span></div>
            </div>
          </section>
        </div>
      `,
    },
    {
      id: "pdc-questions-map",
      type: "guide",
      group: "start",
      navIcon: "questions",
      title: "Questions map",
      searchText: `Questions map quick navigation People Development Consultant ${peopleDevelopmentQuestions.map((item) => item.question).join(" ")}`,
      html: buildQuestionsMap(peopleDevelopmentQuestions, groupLabels),
    },
    {
      id: "pdc-post-interview-questions",
      type: "guide",
      group: "start",
      navIcon: "flag",
      title: "Post-interview questions",
      searchText: "Questions to ask after People Development Consultant interview early careers existing program stakeholders clients success measures role priorities why role is open sponsor first problems to solve.",
      html: `
        <div class="guide-strategy closing-questions">
          <h2>Post-interview questions</h2>
          <p class="strategy-lead">Ask three to five depending on time. Prioritize the ones that help you understand the Early Careers system, the stakeholder map, and the real problem behind the opening.</p>
          <div class="closing-question-list">
            <article>
              <h3>Is there already an existing Early Careers or talent-development program this role would support, or would the consultant be helping build parts of it from the ground up?</h3>
              <p><strong>Listen for:</strong> existing program maturity, gaps in ownership, whether the work is maintenance, redesign, expansion, or new-build.</p>
            </article>
            <article>
              <h3>Who are the main stakeholders or internal clients for this role?</h3>
              <p><strong>Listen for:</strong> Talent Acquisition, HRBPs, People Team leaders, operations leaders, hiring managers, program owners, schools, mentors, and participants.</p>
            </article>
            <article>
              <h3>What would success look like for this role in the first 6 to 12 months?</h3>
              <p><strong>Listen for:</strong> readiness, speed to proficiency, manager confidence, participant experience, retention, mobility, stakeholder trust, or measurable program outcomes.</p>
            </article>
            <article>
              <h3>If I were selected for the role, what are the first problems you would want me to understand and help solve?</h3>
              <p><strong>Listen for:</strong> the problems he mentally assigns to you, where he sees urgency, and whether your strengths in diagnosis, learning systems, coaching, and stakeholder support match the need.</p>
            </article>
            <article>
              <h3>What prompted the need for this role now?</h3>
              <p><strong>Listen for:</strong> growth, backfill, new strategy, program expansion, capability gap, stakeholder demand, or a shift in how the team wants to support early-career and talent-development work.</p>
            </article>
          </div>
        </div>
      `,
    },
  ];

  const peopleDevelopmentData = {
    groups: peopleDevelopmentGroups,
    items: [
      ...peopleDevelopmentGuidePages,
      ...peopleDevelopmentQuestions,
    ],
  };

  window.INTERVIEW_ROLES = [
    {
      id: "senior-manager",
      label: "Senior Manager",
      title: "Senior Manager",
      positioning: "Communication + learning + measurement",
      theme: "senior-manager",
      data: seniorManagerData,
    },
    {
      id: "people-development-consultant",
      label: "People Development Consultant",
      title: "People Development",
      positioning: "Operations readiness + coaching + capability",
      theme: "people-development",
      data: peopleDevelopmentData,
    },
  ];

  function buildQuestionsMap(items, labels) {
    const groups = ["opening", "early-talent", "capability", "coaching", "performance", "stakeholders", "growth", "readiness"];

    return `
      <div class="guide-strategy questions-map-page">
        <h2>Questions map</h2>
        <p class="strategy-lead">Use this as your quick navigation view during the interview. Open the closest match, even if the interviewer words the question differently.</p>
        <div class="question-map-grid">
          ${groups.map((groupId) => {
            const groupItems = items.filter((item) => item.group === groupId);
            if (!groupItems.length) return "";
            return `
              <section class="question-map-group">
                <h3>${escapeHtml(labels[groupId])}</h3>
                <div class="question-map-list">
                  ${groupItems.map((item) => `
                    <a class="question-map-link" href="#${escapeAttribute(item.id)}" data-question-link="${escapeAttribute(item.id)}">
                      <span class="question-map-number">${String(item.number).padStart(2, "0")}</span>
                      <span><b>${escapeHtml(shortQuestion(item.question))}</b><small>${escapeHtml(item.competency || "Interview answer")}</small></span>
                    </a>
                  `).join("")}
                </div>
              </section>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  function shortQuestion(value) {
    const labels = {
      "Tell me about yourself.": "Career story",
      "Why do you want this People Development Consultant role now?": "Why this role",
      "This role asks for early-career hiring and talent development experience. How does your background fit?": "Early-career fit",
      "How do you develop early-career talent?": "Early-career development",
      "Tell me about a people-development program or capability-building effort you led.": "Learning Studio",
      "What is your greatest professional achievement?": "Engage and Connect",
      "Tell me about an innovation you introduced at Optum.": "AI Rise innovation",
      "Describe your coaching approach.": "Coaching approach",
      "Tell me about a time you coached someone and helped them grow.": "3E coaching",
      "Tell me about a session where you had to facilitate, not just present.": "Rise workshop",
      "Tell me about a time you discovered training was not the real solution.": "Not a training problem",
      "How do you diagnose development needs?": "Diagnose needs",
      "How do you use data and technology in people development?": "Data and AI",
      "How do you define and measure speed to proficiency?": "Speed to proficiency",
      "Describe a complex project involving many stakeholders.": "3E stakeholders",
      "Tell me about a time you faced resistance or disagreement.": "Resistance",
      "How do you prioritize competing tasks?": "Prioritization",
      "Tell me about a time you made development more accessible or equitable.": "Accessibility lesson",
      "Tell me about a time you received unexpected or difficult feedback.": "Difficult feedback",
      "Tell me about a time you failed.": "Failed adoption",
      "What is your biggest weakness?": "Taking over",
      "What would your first 90 days look like in this role?": "First 90 days",
      "What would you do if you do not get this role?": "If not selected",
      "What is your leadership philosophy?": "Leadership philosophy",
    };

    return labels[value] || value;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/'/g, "&#39;");
  }
})();
