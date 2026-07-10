(function () {
  "use strict";

  const roles = window.INTERVIEW_ROLES || [{
    id: "senior-manager",
    label: "Senior Manager",
    title: "Senior Manager",
    positioning: "Communication + learning + measurement",
    theme: "senior-manager",
    data: window.INTERVIEW_DATA,
  }];
  let data = roles[0].data;
  const CUE_STORAGE_KEY = "interviewGuideDeliveryCues";
  const ROLE_STORAGE_KEY = "interviewGuideRole";
  const state = {
    selectedId: data.items[0].id,
    roleId: roles[0].id,
    query: "",
    activeTab: "main-answer",
    focusedNavIndex: 0,
    showCues: false,
  };

  const elements = {
    body: document.body,
    nav: document.getElementById("question-nav"),
    search: document.getElementById("question-search"),
    clearSearch: document.getElementById("clear-search"),
    resultCount: document.getElementById("result-count"),
    roleSelect: document.getElementById("role-select"),
    roleTitle: document.getElementById("role-title"),
    rolePositioning: document.getElementById("role-positioning"),
    title: document.getElementById("question-title"),
    meta: document.getElementById("question-meta"),
    competency: document.getElementById("question-competency"),
    points: document.getElementById("talking-points"),
    script: document.getElementById("full-script"),
    optionalNotes: document.getElementById("optional-notes"),
    followUps: document.getElementById("follow-up-list"),
    coachNote: document.getElementById("coach-note"),
    coachNoteBox: document.querySelector(".coach-note"),
    answerTabs: document.getElementById("answer-tabs"),
    guidePage: document.getElementById("guide-page"),
    answerHeading: document.querySelector(".answer-heading"),
    answerPanel: document.getElementById("answer-panel"),
    questionsMapButton: document.getElementById("questions-map-button"),
    cueToggle: document.getElementById("cue-toggle"),
    copyButton: document.getElementById("copy-button"),
    focusToggle: document.getElementById("focus-toggle"),
    menuToggle: document.getElementById("menu-toggle"),
    backdrop: document.getElementById("backdrop"),
    toast: document.getElementById("toast"),
    tabs: Array.from(document.querySelectorAll(".tab")),
    panels: Array.from(document.querySelectorAll(".tab-panel")),
  };

  function normalize(value) {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function searchableText(question) {
    return normalize([
      question.title,
      question.question,
      question.competency,
      question.script,
      (question.points || []).join(" "),
      (question.followUps || []).map((item) => `${item.question} ${item.points.join(" ")}`).join(" "),
      question.searchText,
      question.group,
      (question.keywords || []).join(" "),
    ].join(" "));
  }

  function matchesQuery(question) {
    if (!state.query) return true;
    const terms = normalize(state.query).split(" ").filter(Boolean);
    const haystack = searchableText(question);
    return terms.every((term) => haystack.includes(term));
  }

  function getSelected() {
    return data.items.find((question) => question.id === state.selectedId) || data.items[0];
  }

  function getCurrentRole() {
    return roles.find((role) => role.id === state.roleId) || roles[0];
  }

  function renderNavigation() {
    const visible = data.items.filter(matchesQuery);
    const visibleIds = new Set(visible.map((question) => question.id));

    if (visible.length && !visibleIds.has(state.selectedId)) {
      state.selectedId = visible[0].id;
      renderAnswer();
    }

    elements.resultCount.textContent = state.query
      ? `${visible.length} matching question${visible.length === 1 ? "" : "s"}`
      : `${data.items.filter((item) => item.type === "question").length} questions + ${data.items.filter((item) => item.type === "guide").length} guide pages`;
    elements.clearSearch.hidden = !state.query;

    if (!visible.length) {
      elements.nav.innerHTML = '<p class="no-results">No matching questions. Try a story name, competency, metric, or keyword.</p>';
      return;
    }

    elements.nav.innerHTML = data.groups.map((group) => {
      const groupQuestions = visible.filter((question) => question.group === group.id);
      if (!groupQuestions.length) return "";

      const items = groupQuestions.map((question) => {
        const active = question.id === state.selectedId;
        const marker = question.type === "guide"
          ? guideIcon(question.navIcon)
          : escapeHtml(String(question.number).padStart(2, "0"));
        return `
          <button class="question-button${active ? " active" : ""}" type="button" data-question-id="${question.id}" aria-current="${active ? "true" : "false"}">
            <span class="question-number${question.type === "guide" ? " guide-icon" : ""}">${marker}</span>
            <span class="question-label">${escapeHtml(question.title || question.question)}</span>
          </button>
        `;
      }).join("");

      return `
        <section class="question-group" data-group-id="${group.id}">
          <button class="group-toggle" type="button" aria-expanded="true">
            <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            <span>${escapeHtml(group.label)}</span>
            <span class="group-count">${groupQuestions.length}</span>
          </button>
          <div class="group-items">${items}</div>
        </section>
      `;
    }).join("");

    bindNavigation();
  }

  function renderRoleSelector() {
    if (!elements.roleSelect) return;
    elements.roleSelect.innerHTML = roles.map((role) => `
      <option value="${escapeAttribute(role.id)}">${escapeHtml(role.label)}</option>
    `).join("");
    elements.roleSelect.value = state.roleId;
    updateRoleChrome();
  }

  function updateRoleChrome() {
    const role = getCurrentRole();
    elements.body.dataset.role = role.theme || role.id;
    if (elements.roleTitle) {
      elements.roleTitle.textContent = role.title || role.label;
    }
    if (elements.rolePositioning) {
      elements.rolePositioning.textContent = role.positioning || "";
    }
  }

  function selectRole(roleId, preferredId) {
    const role = roles.find((item) => item.id === roleId) || roles[0];
    state.roleId = role.id;
    data = role.data;
    state.selectedId = preferredId && data.items.some((item) => item.id === preferredId)
      ? preferredId
      : data.items[0].id;
    state.query = "";
    elements.search.value = "";
    storeRolePreference();
    if (elements.roleSelect) {
      elements.roleSelect.value = state.roleId;
    }
    updateRoleChrome();
    activateTab(state.activeTab);
    renderAnswer();
  }

  function renderAnswer() {
    const question = getSelected();
    const group = data.groups.find((item) => item.id === question.group);
    elements.answerPanel.classList.remove("wide-guide-panel", "framework-guide-panel", "question-map-guide-panel");

    if (question.type === "guide") {
      renderGuidePage(question, group);
      history.replaceState(null, "", `#${question.id}`);
      renderNavigation();
      return;
    }

    elements.answerHeading.hidden = false;
    elements.answerTabs.hidden = false;
    elements.coachNoteBox.hidden = false;
    elements.cueToggle.hidden = false;
    elements.guidePage.hidden = true;
    activateTab(state.activeTab);
    elements.meta.textContent = `Question ${String(question.number).padStart(2, "0")} · ${group.label}`;
    elements.title.textContent = question.question;
    elements.competency.textContent = question.competency;
    elements.points.innerHTML = question.points.map(renderTalkingPoint).join("");
    elements.script.innerHTML = renderScript(question.script);
    renderOptionalNotes(question.optionalNotes || []);
    elements.followUps.innerHTML = question.followUps.map((followUp, index) => `
      <div class="follow-up-card">
        <div class="follow-up-heading">
          <span class="follow-up-number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(followUp.question)}</h3>
        </div>
        <ul>${followUp.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      </div>
    `).join("");
    elements.coachNote.textContent = question.note;

    history.replaceState(null, "", `#${question.id}`);
    renderNavigation();
  }

  function renderGuidePage(page, group) {
    const isFrameworkPage = page.id.includes("framework");
    const isQuestionMapPage = page.id.includes("questions-map");
    elements.answerPanel.classList.toggle("wide-guide-panel", isFrameworkPage || isQuestionMapPage);
    elements.answerPanel.classList.toggle("framework-guide-panel", isFrameworkPage);
    elements.answerPanel.classList.toggle("question-map-guide-panel", isQuestionMapPage);
    elements.answerHeading.hidden = true;
    elements.answerTabs.hidden = true;
    elements.coachNoteBox.hidden = true;
    elements.cueToggle.hidden = true;
    elements.guidePage.hidden = false;
    elements.panels.forEach((panel) => {
      panel.hidden = true;
      panel.classList.remove("active");
    });
    elements.guidePage.innerHTML = page.html;
  }

  function renderOptionalNotes(notes) {
    elements.optionalNotes.hidden = !notes.length;
    elements.optionalNotes.innerHTML = notes.map((note) => `
      <aside class="optional-note-card">
        <p class="optional-note-label">${escapeHtml(note.label || "If probed")}</p>
        <div class="optional-note-script">${renderOptionalNoteText(note.text)}</div>
      </aside>
    `).join("");
  }

  function renderOptionalNoteText(text) {
    return text
      .split(/\n\n+/)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  function bindNavigation() {
    elements.nav.querySelectorAll(".group-toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const group = button.closest(".question-group");
        const collapsed = group.classList.toggle("collapsed");
        button.setAttribute("aria-expanded", String(!collapsed));
      });
    });

    elements.nav.querySelectorAll(".question-button").forEach((button) => {
      button.addEventListener("click", () => {
        selectQuestion(button.dataset.questionId);
      });
    });

  }

  function selectQuestion(id) {
    state.selectedId = id;
    renderAnswer();
    closeMobileMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderTalkingPoint(point) {
    const text = String(point);
    const match = text.match(/^([^:–-]{2,32})\s[-:–]\s(.+)$/);
    if (!match) {
      return `<li><span class="point-content">${escapeHtml(text)}</span></li>`;
    }
    const phrases = match[2].split("|").map((item) => item.trim()).filter(Boolean);
    const content = phrases.length > 1
      ? `<ul class="point-phrase-list">${phrases.map((phrase) => `<li>${escapeHtml(phrase)}</li>`).join("")}</ul>`
      : `<span class="point-content">${escapeHtml(match[2])}</span>`;

    return `
      <li class="structured-point">
        <span class="point-label">${escapeHtml(match[1])}</span>
        ${content}
      </li>
    `;
  }

  function selectQuestionsMap() {
    const questionsMap = data.items.find((item) => item.type === "guide" && item.title === "Questions map");
    selectQuestion(questionsMap?.id || "guide-questions-map");
  }

  function activateTab(name) {
    state.activeTab = name;
    elements.tabs.forEach((tab) => {
      const active = tab.id === `${name}-tab`;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    elements.panels.forEach((panel) => {
      const active = panel.id === `${name}-panel`;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  }

  function copyCurrentNotes() {
    const question = getSelected();
    const content = question.type === "guide"
      ? `${question.title}\n\n${question.searchText}`
      : state.activeTab === "follow-ups"
        ? `${question.question}\n\nLikely follow-ups:\n${question.followUps.map((item) => `${item.question}\n${item.points.map((point) => `- ${point}`).join("\n")}`).join("\n\n")}`
        : `${question.question}\n\n${formatScriptForCopy(question.script)}\n\nTalking points:\n${question.points.map((item) => `- ${item}`).join("\n")}`;

    navigator.clipboard.writeText(content).then(() => {
      showToast("Copied to clipboard");
    }).catch(() => {
      showToast("Copy was blocked by the browser");
    });
  }

  function renderScript(script) {
    const question = getSelected();
    const source = state.showCues && question.cueScript ? question.cueScript : script;

    return source
      .split(/\n\n+/)
      .map(renderScriptParagraph)
      .join("");
  }

  function renderScriptParagraph(paragraph) {
    const lines = paragraph.split(/\n/);
    const heading = lines.length > 1 && isScriptSectionLabel(lines[0]) ? lines.shift() : "";
    const body = lines.join("\n");
    const renderedBody = state.showCues ? renderCueParagraph(body) : escapeHtml(body).replace(/\n/g, "<br>");
    const renderedHeading = heading ? `<div class="script-section-label">${escapeHtml(heading)}</div>` : "";
    return `<section class="script-section">${renderedHeading}<p>${renderedBody}</p></section>`;
  }

  function formatScriptForCopy(script) {
    return String(script)
      .split(/\n\n+/)
      .map((paragraph) => {
        const lines = paragraph.split(/\n/);
        if (lines.length > 1 && isScriptSectionLabel(lines[0])) {
          lines.shift();
        }
        return lines.join("\n").trim();
      })
      .filter(Boolean)
      .join("\n\n");
  }

  function isScriptSectionLabel(value) {
    return /^[A-Z][A-Za-z0-9 &-]+$/.test(value.trim()) && value.trim().length <= 28;
  }

  function renderCueParagraph(paragraph) {
    let html = "";
    let index = 0;

    while (index < paragraph.length) {
      if (paragraph.startsWith("||", index)) {
        html += '<span class="pause-mark long" aria-hidden="true">||</span>';
        index += 2;
      } else if (paragraph[index] === "|") {
        html += '<span class="pause-mark short" aria-hidden="true">|</span>';
        index += 1;
      } else {
        const nextSpecial = findNextCueToken(paragraph, index);
        html += escapeHtml(paragraph.slice(index, nextSpecial));
        index = nextSpecial;
      }
    }

    return html;
  }

  function findNextCueToken(value, start) {
    const markers = ["||", "|"]
      .map((marker) => value.indexOf(marker, start))
      .filter((position) => position !== -1);
    return markers.length ? Math.min(...markers) : value.length;
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => elements.toast.classList.remove("show"), 1800);
  }

  function toggleFocusMode() {
    const active = elements.body.classList.toggle("focus-mode");
    elements.focusToggle.setAttribute("aria-pressed", String(active));
    elements.focusToggle.setAttribute("aria-label", active ? "Exit focus mode" : "Enter focus mode");
    elements.focusToggle.querySelector("span").textContent = active ? "Exit focus" : "Focus mode";
  }

  function toggleDeliveryCues() {
    state.showCues = !state.showCues;
    storeCuePreference();
    updateCueToggle();
    renderAnswer();
  }

  function updateCueToggle() {
    elements.body.classList.toggle("delivery-cues-on", state.showCues);
    elements.cueToggle.setAttribute("aria-pressed", String(state.showCues));
    elements.cueToggle.setAttribute("aria-label", state.showCues ? "Hide delivery cues" : "Show delivery cues");
    elements.cueToggle.querySelector("span").textContent = state.showCues ? "Hide cues" : "Cues";
  }

  function storeCuePreference() {
    try {
      window.localStorage.setItem(CUE_STORAGE_KEY, state.showCues ? "on" : "off");
    } catch {
      // Cues still work for the current session if browser storage is unavailable.
    }
  }

  function storeRolePreference() {
    try {
      window.localStorage.setItem(ROLE_STORAGE_KEY, state.roleId);
    } catch {
      // Role switching still works for the current session if browser storage is unavailable.
    }
  }

  function loadCuePreference() {
    try {
      state.showCues = window.localStorage.getItem(CUE_STORAGE_KEY) === "on";
    } catch {
      state.showCues = false;
    }
  }

  function loadRolePreference() {
    try {
      const storedRoleId = window.localStorage.getItem(ROLE_STORAGE_KEY);
      if (roles.some((role) => role.id === storedRoleId)) {
        state.roleId = storedRoleId;
        data = getCurrentRole().data;
        state.selectedId = data.items[0].id;
      }
    } catch {
      state.roleId = roles[0].id;
      data = roles[0].data;
      state.selectedId = data.items[0].id;
    }
  }

  function openMobileMenu() {
    elements.body.classList.add("menu-open");
    elements.backdrop.hidden = false;
    elements.menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    elements.body.classList.remove("menu-open");
    elements.backdrop.hidden = true;
    elements.menuToggle.setAttribute("aria-expanded", "false");
  }

  function handleKeyboard(event) {
    const tagName = document.activeElement?.tagName;
    const typing = tagName === "INPUT" || tagName === "TEXTAREA";

    if ((event.key === "/" || (event.ctrlKey && event.key.toLowerCase() === "k")) && !typing) {
      event.preventDefault();
      elements.search.focus();
      elements.search.select();
      return;
    }

    if (event.key === "Escape") {
      if (state.query) {
        state.query = "";
        elements.search.value = "";
        renderNavigation();
      }
      closeMobileMenu();
      return;
    }

    if (typing || !["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) return;

    const visible = data.items.filter(matchesQuery);
    if (!visible.length) return;

    const currentIndex = Math.max(0, visible.findIndex((question) => question.id === state.selectedId));
    if (event.key === "ArrowDown") {
      event.preventDefault();
      document.activeElement?.blur();
      selectQuestion(visible[(currentIndex + 1) % visible.length].id);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      document.activeElement?.blur();
      selectQuestion(visible[(currentIndex - 1 + visible.length) % visible.length].id);
    } else if (event.key === "Enter" && document.activeElement === elements.search) {
      event.preventDefault();
      selectQuestion(visible[0].id);
    }
  }

  function escapeHtml(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/"/g, "&quot;");
  }

  function guideIcon(name) {
    if (name === "questions") {
      return '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9.75 9.25a2.45 2.45 0 0 1 4.75.85c0 1.65-1.3 2.15-2.1 2.75-.55.4-.65.75-.65 1.4"/><path d="M12 17.2h.01"/></svg>';
    }
    if (name === "grid") {
      return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5h5v5H5zM14 5h5v5h-5zM5 14h5v5H5zM14 14h5v5h-5z"/><path d="M10 7.5h4M7.5 10v4M16.5 10v4M10 16.5h4"/></svg>';
    }
    if (name === "chat") {
      return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 5h14v10H9l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>';
    }
    if (name === "flag") {
      return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 21V4"/><path d="M6 4h11l-2 4 2 4H6"/></svg>';
    }
    if (name === "compass") {
      return '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>';
    }
    return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z"/></svg>';
  }

  function initialize() {
    loadCuePreference();
    loadRolePreference();
    renderRoleSelector();

    const hashId = location.hash.slice(1);
    const hashedRole = roles.find((role) => role.data.items.some((item) => item.id === hashId));
    if (hashedRole) {
      state.roleId = hashedRole.id;
      data = hashedRole.data;
      state.selectedId = hashId;
      if (elements.roleSelect) {
        elements.roleSelect.value = state.roleId;
      }
      updateRoleChrome();
    }

    elements.roleSelect?.addEventListener("change", (event) => {
      selectRole(event.target.value);
    });
    elements.search.addEventListener("input", (event) => {
      state.query = event.target.value;
      renderNavigation();
    });
    elements.clearSearch.addEventListener("click", () => {
      state.query = "";
      elements.search.value = "";
      renderNavigation();
      elements.search.focus();
    });
    elements.tabs.forEach((tab) => {
      tab.addEventListener("click", () => activateTab(tab.id.replace("-tab", "")));
    });
    elements.guidePage.addEventListener("click", (event) => {
      const link = event.target.closest("[data-question-link]");
      if (!link) return;

      event.preventDefault();
      selectQuestion(link.dataset.questionLink);
    });
    elements.questionsMapButton.addEventListener("click", selectQuestionsMap);
    elements.copyButton.addEventListener("click", copyCurrentNotes);
    elements.cueToggle.addEventListener("click", toggleDeliveryCues);
    elements.focusToggle.addEventListener("click", toggleFocusMode);
    elements.menuToggle.addEventListener("click", () => {
      elements.body.classList.contains("menu-open") ? closeMobileMenu() : openMobileMenu();
    });
    elements.backdrop.addEventListener("click", closeMobileMenu);
    document.addEventListener("keydown", handleKeyboard);

    updateCueToggle();
    activateTab(state.activeTab);
    renderAnswer();
  }

  initialize();
})();
