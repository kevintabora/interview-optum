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
      id: "pdc-frameworks",
      type: "guide",
      group: "start",
      navIcon: "grid",
      title: "Frameworks",
      searchText: "People Development frameworks Early Careers structured path shared playbook workforce planning recruiting selection welcome onboarding development experience networking community transition mobility alumni retention ECPM recruiter manager buddy mentor EC talent.",
      html: `
        <div class="guide-strategy frameworks-page early-careers-framework-page">
          <h2>Framework: Structured, Shared, Social</h2>
          <p class="strategy-lead">Use this to explain Early Careers as a working system: clear expectations by phase and role, from workforce demand through alumni engagement.</p>

          <div class="early-journey-scroll" aria-label="Early Careers journey by phase and stakeholder">
            <div class="early-journey-grid">
              <article class="early-phase-card phase-planning">
                <header>
                  <span>01</span>
                  <h3>Workforce planning</h3>
                  <p>Align demand</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Confirms hiring targets, timeline, program needs, and business demand signals using planning trackers, headcount inputs, and Domo reports.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Aligns school outreach and recruiting strategy to the approved demand and target profiles.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Discovers the program and starts seeing where they might fit.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Not active yet, but future alumni or mentors can support events and role previews.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Commit roles, locations, skills needed, and possible project work.</span></div>
              </article>

              <article class="early-phase-card phase-recruiting">
                <header>
                  <span>02</span>
                  <h3>Recruiting &amp; selection</h3>
                  <p>Design experience</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Keeps the program promise clear and sends manager readiness materials, interview guides, and role expectations.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Explains programs, screens eligibility, communicates through email, updates Taleo, and coordinates interviews.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Applies, completes candidate steps in Taleo, interviews, shares real examples, and shows potential.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>May join events to share role realities and encourage candidates.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Interview for fit and begin drafting a meaningful summer or role plan.</span></div>
              </article>

              <article class="early-phase-card phase-onboarding">
                <header>
                  <span>03</span>
                  <h3>Welcome &amp; onboarding</h3>
                  <p>Create foundation</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Adds talent to the roster, confirms placement, tracks readiness, and protects handoffs between recruiting, managers, and program support.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Manages offer details, keep-warm email messages, and pre-start communication.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Accepts offer, completes surveys and onboarding steps, then starts with a clear plan.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Guides belonging through welcome messages, first-week check-ins, and practical answers.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Set expectations, prepare role clarity, welcome note, and first-week calendar plan.</span></div>
              </article>

              <article class="early-phase-card phase-development">
                <header>
                  <span>04</span>
                  <h3>Development experience</h3>
                  <p>Enable learning</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Runs bootcamp, learning paths, program events, feedback surveys, and progress checkpoints.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Stays aligned on future offer timing, requisition needs, and candidate status in recruiting systems.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Does real work, practices skills, reflects, receives feedback, and improves through projects and check-ins.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Coaches growth, points to examples, and helps the learner ask better questions in the flow of work.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Assign stretch work, review output, coach quickly, and document evidence for calibration.</span></div>
              </article>

              <article class="early-phase-card phase-community">
                <header>
                  <span>05</span>
                  <h3>Networking &amp; community</h3>
                  <p>Shape community</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Creates mentor groups, leader exposure, regional events, community invites, and connection points.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Supports engagement and keeps the program visible to future candidates through events and stories.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Builds network, meets peers, sees the mission, and learns how the company works beyond one team.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Makes introductions and answers questions interns may not ask managers.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Facilitate relationships and connect daily work to the broader business.</span></div>
              </article>

              <article class="early-phase-card phase-transition">
                <header>
                  <span>06</span>
                  <h3>Transition &amp; mobility</h3>
                  <p>Facilitate decisions</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Hosts calibration, gathers survey and performance evidence, and coordinates fair conversion decisions.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Coordinates offer timing, requisition constraints, Taleo updates, and full-time offer steps.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Presents work, names interests, receives feedback, and explores next pathways.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Validates readiness and helps talent reflect on role fit and next steps.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Evaluate performance, recommend placement, and bring work evidence to calibration.</span></div>
              </article>

              <article class="early-phase-card phase-alumni">
                <header>
                  <span>07</span>
                  <h3>Alumni &amp; retention</h3>
                  <p>Evaluate outcomes</p>
                </header>
                <div class="role-event people-dev"><b>People Dev / ECPM</b><span>Measures retention, mobility, experience, conversion, and program quality using surveys, rosters, and Domo reporting.</span></div>
                <div class="role-event recruitment"><b>Recruitment</b><span>Maintains pipeline through alumni referrals, events, email campaigns, and future candidate stories.</span></div>
                <div class="role-event talent"><b>EC Talent</b><span>Returns as full-time talent, joins community, and later supports others.</span></div>
                <div class="role-event buddy"><b>Buddy / Mentor</b><span>Sustains connection and may become the next mentor or event speaker.</span></div>
                <div class="role-event managers"><b>Managers</b><span>Retain talent through growth work, coaching, and continued career conversations.</span></div>
              </article>
            </div>
          </div>

          <section class="early-framework-note">
            <strong>How to use this in the interview</strong>
            <span>When asked about Early Careers, point to the handoffs: the candidate sees a journey, but the program manager sees a system. Strong programs make both experiences work.</span>
          </section>
        </div>
      `,
    },
    {
      id: "pdc-projects",
      type: "guide",
      group: "start",
      navIcon: "briefcase",
      title: "Projects",
      searchText: "Projects by company Alorica Thomson Reuters Optum. Davao CSAT, communication training, Rise onboarding module, Engage and Connect, 3E onboarding, ACS, accessibility, Learning Studio, AI Rise code, pharmacy technician training, job aids, SharePoint, Training Designer app.",
      html: `
        <div class="guide-strategy projects-page">
          <h2>Projects</h2>
          <p class="strategy-lead">Use this if they ask why several stories come from Thomson Reuters. The short answer: Thomson Reuters gave you several large, named case studies, but Optum has current and relevant people-development work too.</p>

          <section class="project-response-card">
            <p class="column-label orange">If they ask why many examples are from Thomson Reuters</p>
            <blockquote>"A lot of my Thomson Reuters examples are easy to tell because they were large, named projects with clear before-and-after outcomes. At Optum, my work is current and spread across training design, performance support, team onboarding, capability sharing, and adoption of new tools. So I can absolutely speak to Optum work; I just choose the example based on the question."</blockquote>
          </section>

          <div class="project-company-grid">
            <section class="project-company-card optum-projects">
              <div class="project-company-heading">
                <span>Current</span>
                <h3>Optum</h3>
              </div>
              <article>
                <h4>Pharmacy technician blended learning</h4>
                <div class="project-tags">
                  <a href="#pdc-q01-tell-me-about-yourself" data-question-link="pdc-q01-tell-me-about-yourself">current role</a>
                  <a href="#pdc-reuse-22-how-do-you-prioritize-competing-tasks" data-question-link="pdc-reuse-22-how-do-you-prioritize-competing-tasks">priority</a>
                </div>
                <p>Analyze training needs and build training for pharmacy technicians who process e-prescriptions, including new-tool readiness and efficiency improvements.</p>
              </article>
              <article>
                <h4>Performance support and job aids</h4>
                <p>Recommended leaner support when tenured pharmacy technicians needed help with a familiar-but-different tool instead of a full course.</p>
              </article>
              <article>
                <h4>The Learning Studio</h4>
                <div class="project-tags">
                  <a href="#pdc-q04-learning-studio" data-question-link="pdc-q04-learning-studio">capability</a>
                  <a href="#pdc-q05-coaching-approach" data-question-link="pdc-q05-coaching-approach">coaching</a>
                </div>
                <p>Launched monthly learning sessions for 100+ learning professionals so practical tools and techniques do not stay scattered across lines of business.</p>
              </article>
              <article>
                <h4>AI-generated Rise code adoption</h4>
                <div class="project-tags">
                  <a href="#pdc-reuse-15-q-optum-ai-generated-rise-code-innovation" data-question-link="pdc-reuse-15-q-optum-ai-generated-rise-code-innovation">innovation</a>
                  <a href="#pdc-q04-learning-studio" data-question-link="pdc-q04-learning-studio">adoption</a>
                </div>
                <p>Created a reusable prompt, guide, examples, walkthrough, and launch communication to help designers use AI-generated HTML activities inside Rise.</p>
              </article>
              <article>
                <h4>ID onboarding and team resources</h4>
                <div class="project-tags">
                  <a href="#pdc-q03-early-career-gap" data-question-link="pdc-q03-early-career-gap">onboarding</a>
                  <a href="#pdc-q02-why-this-role-now" data-question-link="pdc-q02-why-this-role-now">team work</a>
                </div>
                <p>Onboard new hires to the instructional design team and created a SharePoint space to centralize resources after learning sessions.</p>
              </article>
            </section>

            <section class="project-company-card">
              <div class="project-company-heading">
                <span>Major case studies</span>
                <h3>Thomson Reuters</h3>
              </div>
              <article>
                <h4>Engage and Connect</h4>
                <div class="project-tags">
                  <a href="#pdc-reuse-14-what-is-your-greatest-professional-achievement" data-question-link="pdc-reuse-14-what-is-your-greatest-professional-achievement">achievement</a>
                  <a href="#pdc-q12-diagnose-development-needs" data-question-link="pdc-q12-diagnose-development-needs">diagnosis</a>
                </div>
                <p>Built an in-house communication skills program with training, train-the-trainer support, job aids, and supervisor coaching support.</p>
              </article>
              <article>
                <h4>3E onboarding</h4>
                <div class="project-tags">
                  <a href="#pdc-reuse-16-describe-a-complex-project-involving-many-stakeh" data-question-link="pdc-reuse-16-describe-a-complex-project-involving-many-stakeh">stakeholders</a>
                  <a href="#pdc-reuse-24-how-do-you-define-and-measure-speed-to-proficien" data-question-link="pdc-reuse-24-how-do-you-define-and-measure-speed-to-proficien">proficiency</a>
                </div>
                <p>Led a complex onboarding solution with scenario-based workbooks, SME coordination, templates, trackers, and measurable speed-to-proficiency impact.</p>
              </article>
              <article>
                <h4>ACS probing scenario activity</h4>
                <div class="project-tags">
                  <a href="#pdc-q12-diagnose-development-needs" data-question-link="pdc-q12-diagnose-development-needs">diagnosis</a>
                </div>
                <p>Turned a vague request for “more engaging training” into a targeted scenario-based ILT activity after data showed probing was the real gap.</p>
              </article>
              <article>
                <h4>Training Designer app</h4>
                <div class="project-tags">
                  <a href="#pdc-q14-data-technology" data-question-link="pdc-q14-data-technology">data</a>
                </div>
                <p>Built a tool that helps quantify the structure of training by objective, activity, cognitive task, content type, media, method, and duration.</p>
              </article>
              <article>
                <h4>Articulate Rise workshop</h4>
                <div class="project-tags">
                  <a href="#pdc-q07-facilitation" data-question-link="pdc-q07-facilitation">facilitation</a>
                </div>
                <p>Facilitated a three-day Rise workshop that helped trainers move from a blank document to deployable self-paced courses uploaded to the LMS.</p>
              </article>
              <article>
                <h4>Designer coaching and QA standards</h4>
                <div class="project-tags">
                  <a href="#pdc-q06-coaching-designer" data-question-link="pdc-q06-coaching-designer">coaching</a>
                </div>
                <p>Coached junior instructional designers and built QA criteria around instructional content, visual design, and accessibility.</p>
              </article>
              <article>
                <h4>Accessibility reset</h4>
                <div class="project-tags">
                  <a href="#pdc-q09-accessibility" data-question-link="pdc-q09-accessibility">accessibility</a>
                </div>
                <p>Turned a difficult accessibility complaint into a stronger operating standard: design must match the objective, learner proficiency, and accessibility guidelines.</p>
              </article>
            </section>

            <section class="project-company-card">
              <div class="project-company-heading">
                <span>Foundation</span>
                <h3>Alorica</h3>
              </div>
              <article>
                <h4>New-hire communication training</h4>
                <div class="project-tags">
                  <a href="#pdc-q03-early-career-gap" data-question-link="pdc-q03-early-career-gap">readiness</a>
                </div>
                <p>Trained agents on grammar, accent, phone handling, communication skills, and job readiness using tell-show-do and practice-heavy facilitation.</p>
              </article>
              <article>
                <h4>ID onboarding Rise module</h4>
                <div class="project-tags">
                  <a href="#pdc-q03-early-career-gap" data-question-link="pdc-q03-early-career-gap">onboarding</a>
                </div>
                <p>Created a Rise-based onboarding module that made the instructional design workflow more structured, visual, and consistent for new designers.</p>
              </article>
              <article>
                <h4>Davao CSAT investigation</h4>
                <div class="project-tags">
                  <a href="#pdc-q08-performance-consulting" data-question-link="pdc-q08-performance-consulting">performance</a>
                </div>
                <p>Interviewed agents and supervisors, found a process issue behind low CSAT, built an empathetic script, and escalated the customer-effort issue to the client.</p>
              </article>
              <article>
                <h4>Tool workshops</h4>
                <p>Facilitated workshops on tools such as Articulate products, Camtasia, Vyond, Captivate, and Audacity to build practical production capability.</p>
              </article>
            </section>
          </div>
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
      "What measures of success would you use for an Early Careers program?": "Early Careers measures",
      "How do you diagnose development needs?": "Diagnose needs",
      "How do you use data and technology in people development?": "Data and AI",
      "How do you define and measure speed to proficiency?": "Speed to proficiency",
      "Describe a complex project involving many stakeholders.": "3E stakeholders",
      "Tell me about a time you faced resistance or disagreement.": "Resistance",
      "How do you prioritize competing tasks?": "Prioritization",
      "Tell me about a time you made development more accessible or equitable.": "Accessibility lesson",
      "Tell me about a time you received unexpected or difficult feedback.": "Difficult feedback",
      "Tell me about a time you failed.": "Failed adoption",
      "What was the most stressful experience of your career?": "Stressful stretch",
      "What is your biggest weakness?": "Taking over",
      "What would your first 90 days look like in this role?": "First 90 days",
      "What would you do if you do not get this role?": "If not selected",
      "Was there ever a time a request was vague but you navigated it successfully?": "Vague request",
      "If this role were SG27 as a lateral move with no increase, would you still take it?": "Lateral move",
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
