import { useState } from "react";

const sectionStyles = {
  fontFamily: "'Noto Sans Sinhala', 'Iskoola Pota', sans-serif",
};

// ── Translations ──────────────────────────────────────────────
const T = {
  si: {
    mainTitle: "මාසික ප්‍රගතිය වාර්තා කිරීම - ග්‍රාමීය සංවර්ධන කාර්යාංශය",
    subtitle: "Monthly Progress Report — Rural Development Bureau",
    officerSection: "තොරතුරු ඇතුළත් කරනු ලබන නිලධාරියාගේ තොරතුරු",
    district: "දිස්ත්‍රික්කය",
    districtPlaceholder: "-- දිස්ත්‍රික්කය තෝරන්න --",
    name: "නම",
    namePlaceholder: "නම ඇතුළත් කරන්න...",
    position: "තනතුර",
    positionPlaceholder: "තනතුර ඇතුළත් කරන්න...",
    date: "දිනය",
    selectSections: "අවශ්‍ය කොටස් තෝරන්න",
    selectAll: "සියල්ල තෝරන්න",
    clearAll: "ඉවත් කරන්න",
    sectionsSelected: "කොටස් තෝරා ඇත",
    approved: "අනුමත ප්‍රතිපාදන මුදල (රු.)",
    approvedPlaceholder: "රු. ඇතුළත් කරන්න...",
    financial: "මූල්‍ය ප්‍රගතිය (රු.)",
    financialPlaceholder: "රු. ඇතුළත් කරන්න...",
    programs: "පැවැත්වූ වැඩසටහන් ගණන (භෞතික ප්‍රගතිය)",
    programsPlaceholder: "ගණන ඇතුළත් කරන්න...",
    officers: "සහභාගී වූ නිලධාරී සංඛ්‍යාව",
    officersPlaceholder: "සංඛ්‍යාව ඇතුළත් කරන්න...",
    submitBtn: "ආකෘති පත්‍රය ඉදිරිපත් කරන්න",
    selectSectionAlert: "කරුණාකර අවම වශයෙන් එක් කොටසක් තෝරන්න.",
    noticeText: "ඔබ ඇතුළු කළ තොරතුරු සමාලෝචනය කරන්න. නිවැරදි නම්",
    noticeSubmit: "\"Submit\"",
    noticeClick: "ක්ලික් කරන්න.",
    officerSummary: "නිලධාරියාගේ තොරතුරු",
    back: "← ආපසු",
    downloadPDF: "📄 PDF බාගන්න",
    submitToSheets: "📤 Submit",
    submitting: "⏳ යොමු කරමින්...",
    successTitle: "සාර්ථකව යොමු කරන ලදී!",
    failTitle: "සමහර යොමු කිරීම් අසාර්ථක විය",
    doneTitle: "යොමු කිරීම සම්පූර්ණ විය",
    sectionOk: "සාර්ථකයි",
    sectionFail: "අසාර්ථකයි",
    section: "කොටස",
    newForm: "＋ නව ආකෘති පත්‍රයක්",
    addProject: "නව ව්‍යාපෘතියක් එකතු කරන්න",
    projects: "ව්‍යාපෘති",
    deleteCol: "මකන්න",
    noCol: "අංකය",
    divSec: "ප්‍රාදේශීය ලේකම් කාර්යාලය",
    gnDiv: "ග්‍රාම නිලධාරී වසම",
    projName: "ව්‍යාපෘතියේ නම",
    approvedAmt: "අනුමත ප්‍රතිපාදන මුදල (රු.)",
    actualCost: "ව්‍යාපෘතියේ සත්‍යය වියදම",
    adminCost: "පරිපාලන වියදම (රු.)",
    financialProg: "මූල්‍ය ප්‍රගතිය (රු.)",
    physicalProg: "භෞතික ප්‍රගතිය",
    autoCalc: "ස්වයංක්‍රීය",
    enter: "ඇතුළත් කරන්න...",
    s1Label: "දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන",
    s2Label: "ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන",
    s3Label: "ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම",
    s4Label: "ව්‍යාපෘති ක්‍රියාත්මක කිරීම",
    pdfTitle: "මාසික ප්‍රගතිය වාර්තා කිරීම - ග්‍රාමීය සංවර්ධන කාර්යාංශය",
  },
  en: {
    mainTitle: "Monthly Progress Report — Rural Development Bureau",
    subtitle: "මාසික ප්‍රගතිය වාර්තා කිරීම - ග්‍රාමීය සංවර්ධන කාර්යාංශය",
    officerSection: "Information of the officer entering the information",
    district: "District",
    districtPlaceholder: "-- Select District --",
    name: "Name",
    namePlaceholder: "Enter name...",
    position: "Designation",
    positionPlaceholder: "Enter designation...",
    date: "Date",
    selectSections: "Select Sections",
    selectAll: "Select All",
    clearAll: "Clear All",
    sectionsSelected: "sections selected",
    approved: "Approved Allocation (Rs.)",
    approvedPlaceholder: "Enter Rs...",
    financial: "Financial Progress (Rs.)",
    financialPlaceholder: "Enter Rs...",
    programs: "No. of Programs Held (Physical Progress)",
    programsPlaceholder: "Enter count...",
    officers: "No. of Officers Participated",
    officersPlaceholder: "Enter count...",
    submitBtn: "Submit Form",
    selectSectionAlert: "Please select at least one section.",
    noticeText: "Review the information you entered. If correct, click",
    noticeSubmit: "\"Submit\"",
    noticeClick: "to proceed.",
    officerSummary: "Officer Information",
    back: "← Back",
    downloadPDF: "📄 Download PDF",
    submitToSheets: "📤 Submit",
    submitting: "⏳ Submitting...",
    successTitle: "Successfully Submitted!",
    failTitle: "Some Submissions Failed",
    doneTitle: "Submission Complete",
    sectionOk: "Success",
    sectionFail: "Failed",
    section: "Section",
    newForm: "＋ New Form",
    addProject: "Add New Project Row",
    projects: "Projects",
    deleteCol: "Delete",
    noCol: "No.",
    divSec: "Divisional Secretariat",
    gnDiv: "GN Division",
    projName: "Project Name",
    approvedAmt: "Approved Amount (Rs.)",
    actualCost: "Actual Cost",
    adminCost: "Admin Cost (Rs.)",
    financialProg: "Financial Progress (Rs.)",
    physicalProg: "Physical Progress",
    autoCalc: "Auto",
    enter: "Enter...",
    s1Label: "Awareness Program on Implementing District Community Development Councils",
    s2Label: "Awareness Program for Committee Officers of Community Development Councils",
    s3Label: "Administrative Activities of Community Development Councils",
    s4Label: "Project Implementation",
    pdfTitle: "Monthly Progress Report — Rural Development Bureau",
  },
};

//const SECTION_KEYS = ["s1","s2","s3","s4"];

const GOOGLE_SCRIPT_URLS = {
  s1: "https://script.google.com/macros/s/AKfycbxxo8eWJZSLfM0oh70-Lnz_fTPfA13Aw6LjGuy0UjWN1sg6aCiMS_2dUFuOvSKu9y-Y7g/exec",
  s2: "https://script.google.com/macros/s/AKfycbyEgKo9QX6Ml9i10plWUViFokxOK_wrMkYjmi1xPU1BdLvLP2Cr1OMmB-XV0J2-155iyQ/exec",
  s3: "https://script.google.com/macros/s/AKfycbzOrhXk2KfHBkJcxB2z5XYPuuH3erV4o1lhvelIcqp9KGa31mQIJJPUEn9EpjsbA0Cy/exec",
  s4: "https://script.google.com/macros/s/AKfycbyIwQlaTI7F2viABAVDBVcmuLyzMQB1ZR2RnV1jBD6GZ1gBY6tNtM5wKf5wRh60jzaJpQ/exec",
};

const DISTRICTS = [
  ["අම්පාර","Ampara"],["අනුරාධපුර","Anuradhapura"],["බදුල්ල","Badulla"],
  ["මඩකලපුව","Batticaloa"],["කොළඹ","Colombo"],["ගාල්ල","Galle"],
  ["ගම්පහ","Gampaha"],["හම්බන්තොට","Hambantota"],["යාපනය","Jaffna"],
  ["කළුතර","Kalutara"],["මහනුවර","Kandy"],["කෑගල්ල","Kegalle"],
  ["කිලිනොච්චි","Kilinochchi"],["කුරුණෑගල","Kurunegala"],["මන්නාරම","Mannar"],
  ["මාතලේ","Matale"],["මාතර","Matara"],["මොණරාගල","Monaragala"],
  ["මුලතිව්","Mullaitivu"],["නුවරඑළිය","Nuwara Eliya"],["පොළොන්නරුව","Polonnaruwa"],
  ["පුත්තලම","Puttalam"],["රත්නපුර","Ratnapura"],["ත්‍රිකුණාමලය","Trincomalee"],
  ["වව්නියා","Vavuniya"],
];

/* ── Helpers ─────────────────────────────────────────── */
function TextField({ label, name, value, onChange, placeholder, required = false }) {
  return (
    <div style={styles.fieldRow}>
      <label style={styles.fieldLabel}>{label}{required && <span style={{color:"#c53030"}}> *</span>}</label>
      <input type="text" name={name} value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder} required={required}
        style={styles.fieldInput} />
    </div>
  );
}

function SectionCard({ number, title, children }) {
  return (
    <div style={styles.sectionCard}>
      <div style={styles.sectionHeader}>
        {number && <span style={styles.sectionNumber}>{number}</span>}
        <h2 style={styles.sectionTitle}>{title}</h2>
      </div>
      <div style={styles.sectionBody}>{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div style={styles.summaryRow}>
      <span style={styles.summaryLabel}>{label}</span>
      <span style={styles.summaryValue}>{value || "—"}</span>
    </div>
  );
}

const emptyProject = () => ({
  id: Date.now() + Math.random(),
  pradeshiya: "", grama: "", name: "",
  approved: "", actual: "", admin: "", financial: "", physical: "",
});

/* ── Language Toggle ──────────────────────────────────── */
function LangToggle({ lang, setLang }) {
  return (
    <div style={styles.langBar}>
      <button
        type="button"
        onClick={() => setLang("si")}
        style={{ ...styles.langBtn, ...(lang === "si" ? styles.langBtnActive : {}) }}
      >
        සිංහල
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        style={{ ...styles.langBtn, ...(lang === "en" ? styles.langBtnActive : {}) }}
      >
        English
      </button>
    </div>
  );
}

/* ── Main ─────────────────────────────────────────────── */
export default function Progress() {
  const [lang, setLang] = useState("si");
  const t = T[lang];
  const [page, setPage] = useState("form");

  const SECTION_OPTIONS = [
    { key: "s1", label: t.s1Label, number: "1" },
    { key: "s2", label: t.s2Label, number: "2" },
    { key: "s3", label: t.s3Label, number: "3" },
    { key: "s4", label: t.s4Label, number: "4" },
  ];

  const [formData, setFormData] = useState({
    district: "", studentName: "", position: "", date: "",
    s1_approved: "", s1_financial: "", s1_programs: "", s1_officers: "",
    s2_approved: "", s2_financial: "", s2_programs: "", s2_officers: "",
    s3_approved: "", s3_financial: "",
  });
  const [selectedSections, setSelectedSections] = useState([]);
  const [projects, setProjects] = useState([emptyProject()]);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({});

  const handleChange = (name, value) => setFormData(p => ({ ...p, [name]: value }));
  const handleText = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const toggleSection = (key) => setSelectedSections(p => p.includes(key) ? p.filter(k => k !== key) : [...p, key]);
  const selectAll = () => setSelectedSections(SECTION_OPTIONS.map(s => s.key));
  const clearAll = () => setSelectedSections([]);
  const handleProjectChange = (id, field, value) => setProjects(p => p.map(r => r.id === id ? { ...r, [field]: value } : r));
  const addProject = () => setProjects(p => [...p, emptyProject()]);
  const removeProject = (id) => { if (projects.length > 1) setProjects(p => p.filter(r => r.id !== id)); };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedSections.length === 0) { alert(t.selectSectionAlert); return; }
    setPage("summary"); window.scrollTo(0, 0);
  };

  const handleSendToSheets = async () => {
    setIsSending(true);
    const status = {};
    const districtDisplay = formData.district ? formData.district.split('|')[0] : '';
    const officer = { district: districtDisplay, name: formData.studentName, position: formData.position, date: formData.date };
    const jobs = [];
    if (selectedSections.includes("s1")) jobs.push({ key: "s1", payload: { ...officer, approved: formData.s1_approved, financial: formData.s1_financial, programs: formData.s1_programs, officers: formData.s1_officers } });
    if (selectedSections.includes("s2")) jobs.push({ key: "s2", payload: { ...officer, approved: formData.s2_approved, financial: formData.s2_financial, programs: formData.s2_programs, officers: formData.s2_officers } });
    if (selectedSections.includes("s3")) jobs.push({ key: "s3", payload: { ...officer, approved: formData.s3_approved, financial: formData.s3_financial } });
    if (selectedSections.includes("s4")) jobs.push({ key: "s4", payload: { ...officer, projects: projects.map((p, i) => ({ no: i+1, pradeshiya: p.pradeshiya, grama: p.grama, name: p.name, approved: p.approved, actual: p.actual, admin: p.admin, financial: p.financial, physical: p.physical })) } });

    await Promise.all(jobs.map(async ({ key, payload }) => {
      status[key] = "sending"; setSendStatus({ ...status });
      try {
        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => {
          if (k === "projects") {
            v.forEach((proj, i) => Object.entries(proj).forEach(([pk, pv]) => params.append(`project_${i}_${pk}`, pv ?? "")));
            params.append("projectCount", String(v.length));
          } else { params.append(k, v ?? ""); }
        });
        await fetch(`${GOOGLE_SCRIPT_URLS[key]}?${params.toString()}`, { method: "GET", mode: "no-cors" });
        status[key] = "ok";
      } catch { status[key] = "fail"; }
      setSendStatus({ ...status });
    }));
    setIsSending(false); setPage("done"); window.scrollTo(0, 0);
  };

  const handleDownloadPDF = () => {
      const printContent = buildPrintHTML(formData, selectedSections, projects, t, lang);
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) { alert("Please allow popups for PDF download."); return; }
    win.document.write(printContent);
    win.document.close(); win.focus();
    setTimeout(() => { win.print(); }, 600);
  };

  const handleReset = () => {
    setPage("form"); setSelectedSections([]); setSendStatus({}); setIsSending(false);
    setFormData({ district:"", studentName:"", position:"", date:"", s1_approved:"", s1_financial:"", s1_programs:"", s1_officers:"", s2_approved:"", s2_financial:"", s2_programs:"", s2_officers:"", s3_approved:"", s3_financial:"" });
    setProjects([emptyProject()]); window.scrollTo(0, 0);
  };

  /* ── DONE PAGE ─────────────────────────────────────── */
  if (page === "done") {
    const allOk = Object.values(sendStatus).every(v => v === "ok");
    const anyFail = Object.values(sendStatus).some(v => v === "fail");
    return (
      <div style={{ ...styles.container, ...sectionStyles }}>
        <Header t={t} lang={lang} setLang={setLang} />
        <div style={styles.centeredPage}>
          <div style={styles.doneCard}>
            <div style={{ ...styles.doneIcon, background: allOk ? "linear-gradient(135deg,#276749,#38a169)" : "linear-gradient(135deg,#c05621,#dd6b20)" }}>
              {allOk ? "✓" : "!"}
            </div>
            <h2 style={styles.doneTitle}>{allOk ? t.successTitle : anyFail ? t.failTitle : t.doneTitle}</h2>
            <div style={styles.statusGrid}>
              {SECTION_OPTIONS.filter(o => selectedSections.includes(o.key)).map(opt => {
                const st = sendStatus[opt.key];
                return (
                  <div key={opt.key} style={{ ...styles.statusChip, ...(st==="ok"?styles.chipOk:st==="fail"?styles.chipFail:styles.chipPending) }}>
                    <span>{st==="ok"?"✅":st==="fail"?"❌":"⏳"}</span>
                    <span>{t.section} {opt.number} — {st==="ok"?t.sectionOk:st==="fail"?t.sectionFail:"..."}</span>
                  </div>
                );
              })}
            </div>
            <div style={styles.doneActions}>
              <button onClick={handleDownloadPDF} style={styles.pdfBtn}>{t.downloadPDF}</button>
              <button onClick={handleReset} style={styles.newBtn}>{t.newForm}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── SUMMARY PAGE ──────────────────────────────────── */
  if (page === "summary") {
    return (
      <div style={{ ...styles.container, ...sectionStyles }}>
        <Header t={t} lang={lang} setLang={setLang} />
        <div style={styles.form}>
          <div style={styles.noticeBar}>
            <span style={styles.noticeIcon}>📋</span>
            <span>{t.noticeText} <strong>{t.noticeSubmit}</strong> {t.noticeClick}</span>
          </div>
          <SectionCard title={t.officerSummary}>
            <SummaryRow label={t.district} value={
              formData.district
                ? (lang === "en"
                    ? (formData.district.split("|")[1] || formData.district)
                    : (formData.district.split("|")[0] || formData.district))
                : ""
            } />
            <SummaryRow label={t.name} value={formData.studentName} />
            <SummaryRow label={t.position} value={formData.position} />
            <SummaryRow label={t.date} value={formData.date} />
          </SectionCard>
          {selectedSections.includes("s1") && (
            <SectionCard number="1" title={t.s1Label}>
              <SummaryRow label={`① ${t.approved}`} value={formData.s1_approved} />
              <SummaryRow label={`② ${t.financial}`} value={formData.s1_financial} />
              <SummaryRow label={`③ ${t.programs}`} value={formData.s1_programs} />
              <SummaryRow label={`④ ${t.officers}`} value={formData.s1_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s2") && (
            <SectionCard number="2" title={t.s2Label}>
              <SummaryRow label={`① ${t.approved}`} value={formData.s2_approved} />
              <SummaryRow label={`② ${t.financial}`} value={formData.s2_financial} />
              <SummaryRow label={`③ ${t.programs}`} value={formData.s2_programs} />
              <SummaryRow label={`④ ${t.officers}`} value={formData.s2_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s3") && (
            <SectionCard number="3" title={t.s3Label}>
              <SummaryRow label={`① ${t.approved}`} value={formData.s3_approved} />
              <SummaryRow label={`② ${t.financial}`} value={formData.s3_financial} />
            </SectionCard>
          )}
          {selectedSections.includes("s4") && (
            <SectionCard number="4" title={t.s4Label}>
              <div style={styles.summaryTableWrap}>
                <table style={styles.summaryTable}>
                  <thead>
                    <tr>{[t.noCol,t.divSec,t.gnDiv,t.projName,t.approvedAmt,t.actualCost,t.adminCost,t.financialProg,t.physicalProg].map(h=><th key={h} style={styles.sTh}>{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {projects.map((p,i)=>(
                      <tr key={p.id} style={i%2===0?styles.trEven:styles.trOdd}>
                        <td style={styles.sTd}>{i+1}</td>
                        <td style={styles.sTd}>{p.pradeshiya||"—"}</td>
                        <td style={styles.sTd}>{p.grama||"—"}</td>
                        <td style={styles.sTd}>{p.name||"—"}</td>
                        <td style={styles.sTd}>{p.approved?`රු.${Number(p.approved).toLocaleString()}`:"—"}</td>
                        <td style={styles.sTd}>{p.actual?`රු.${Number(p.actual).toLocaleString()}`:"—"}</td>
                        <td style={styles.sTd}>{p.admin?`රු.${Number(p.admin).toLocaleString()}`:"—"}</td>
                        <td style={{...styles.sTd,fontWeight:700,color:"#1a3a6e"}}>{p.financial?`රු.${Number(p.financial).toLocaleString()}`:"—"}</td>
                        <td style={styles.sTd}>{p.physical||"—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          )}
          <div style={styles.summaryActions}>
            <button type="button" onClick={() => { setPage("form"); window.scrollTo(0,0); }} style={styles.backBtn}>{t.back}</button>
            <button type="button" onClick={handleDownloadPDF} style={styles.pdfBtn}>{t.downloadPDF}</button>
            <button type="button" onClick={handleSendToSheets} disabled={isSending}
              style={{ ...styles.sendBtn, opacity: isSending?0.7:1, cursor: isSending?"not-allowed":"pointer" }}>
              {isSending ? t.submitting : t.submitToSheets}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── FORM PAGE ─────────────────────────────────────── */
  return (
    <div style={{ ...styles.container, ...sectionStyles }}>
      <Header t={t} lang={lang} setLang={setLang} />
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <SectionCard title={t.officerSection}>
          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>{t.district}<span style={{color:"#c53030"}}> *</span></label>
            <select
              name="district"
              value={formData.district}
              onChange={(e) => {
                const val = e.target.value;
                setFormData(p => ({ ...p, district: val }));
              }}
              style={{ ...styles.fieldInput, cursor:"pointer" }}
              required
            >
              <option value="">{t.districtPlaceholder}</option>
              {DISTRICTS.map(([si,en]) => (
                <option key={si} value={`${si}|${en}`}>
                  {lang === "en" ? en : si}
                </option>
              ))}
            </select>
          </div>
          <TextField label={t.name} name="studentName" value={formData.studentName} onChange={handleChange} placeholder={t.namePlaceholder} required />
          <TextField label={t.position} name="position" value={formData.position} onChange={handleChange} placeholder={t.positionPlaceholder} required />
          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>{t.date}<span style={{color:"#c53030"}}> *</span></label>
            <input type="date" name="date" value={formData.date} onChange={handleText} style={styles.fieldInput} required />
          </div>

          <div style={styles.selectorBox}>
            <div style={styles.selectorHeader}>
              <span style={styles.selectorTitle}>{t.selectSections}</span>
              <div style={styles.selectorActions}>
                <button type="button" onClick={selectAll} style={styles.selectAllBtn}>{t.selectAll}</button>
                <button type="button" onClick={clearAll} style={styles.clearAllBtn}>{t.clearAll}</button>
              </div>
            </div>
            <div style={styles.checkboxList}>
              {SECTION_OPTIONS.map(opt => {
                const checked = selectedSections.includes(opt.key);
                return (
                  <label key={opt.key} style={{ ...styles.checkboxItem, ...(checked?styles.checkboxItemActive:{}) }} onClick={() => toggleSection(opt.key)}>
                    <div style={{ ...styles.checkboxBox, ...(checked?styles.checkboxBoxChecked:{}) }}>{checked && <span style={styles.checkmark}>✓</span>}</div>
                    <div style={styles.checkboxContent}>
                      <span style={styles.checkboxNumber}>{opt.number}</span>
                      <span style={styles.checkboxLabel}>{opt.label}</span>
                    </div>
                  </label>
                );
              })}
            </div>
            {selectedSections.length > 0 && <div style={styles.selectionBadge}>{selectedSections.length} {t.sectionsSelected}</div>}
          </div>
        </SectionCard>

        {selectedSections.includes("s1") && (
          <SectionCard number="1" title={t.s1Label}>
            <TextField label={`① ${t.approved}`} name="s1_approved" value={formData.s1_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} />
            <TextField label={`② ${t.financial}`} name="s1_financial" value={formData.s1_financial} onChange={handleChange} placeholder={t.financialPlaceholder} />
            <TextField label={`③ ${t.programs}`} name="s1_programs" value={formData.s1_programs} onChange={handleChange} placeholder={t.programsPlaceholder} />
            <TextField label={`④ ${t.officers}`} name="s1_officers" value={formData.s1_officers} onChange={handleChange} placeholder={t.officersPlaceholder} />
          </SectionCard>
        )}
        {selectedSections.includes("s2") && (
          <SectionCard number="2" title={t.s2Label}>
            <TextField label={`① ${t.approved}`} name="s2_approved" value={formData.s2_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} />
            <TextField label={`② ${t.financial}`} name="s2_financial" value={formData.s2_financial} onChange={handleChange} placeholder={t.financialPlaceholder} />
            <TextField label={`③ ${t.programs}`} name="s2_programs" value={formData.s2_programs} onChange={handleChange} placeholder={t.programsPlaceholder} />
            <TextField label={`④ ${t.officers}`} name="s2_officers" value={formData.s2_officers} onChange={handleChange} placeholder={t.officersPlaceholder} />
          </SectionCard>
        )}
        {selectedSections.includes("s3") && (
          <SectionCard number="3" title={t.s3Label}>
            <TextField label={`① ${t.approved}`} name="s3_approved" value={formData.s3_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} />
            <TextField label={`② ${t.financial}`} name="s3_financial" value={formData.s3_financial} onChange={handleChange} placeholder={t.financialPlaceholder} />
          </SectionCard>
        )}
        {selectedSections.includes("s4") && (
          <SectionCard number="4" title={t.s4Label}>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <colgroup>
                  <col style={{width:"4%"}}/><col style={{width:"14%"}}/><col style={{width:"11%"}}/>
                  <col style={{width:"14%"}}/><col style={{width:"11%"}}/><col style={{width:"11%"}}/>
                  <col style={{width:"10%"}}/><col style={{width:"11%"}}/><col style={{width:"10%"}}/>
                  <col style={{width:"4%"}}/>
                </colgroup>
                <thead>
                  <tr>
                    <th style={styles.th}>{t.noCol}</th>
                    <th style={styles.th}>{t.divSec}</th>
                    <th style={styles.th}>{t.gnDiv}</th>
                    <th style={styles.th}>{t.projName}</th>
                    <th style={styles.th}>{t.approvedAmt}</th>
                    <th style={styles.th}>{t.actualCost}</th>
                    <th style={styles.th}>{t.adminCost}</th>
                    <th style={styles.th}>{t.financialProg}<br/><span style={styles.thEn}>= {t.actualCost} + {t.adminCost}</span></th>
                    <th style={styles.th}>{t.physicalProg}</th>
                    <th style={{...styles.th,background:"#c53030"}}>{t.deleteCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj, idx) => (
                    <tr key={proj.id} style={idx%2===0?styles.trEven:styles.trOdd}>
                      <td style={styles.tdCenter}>{idx+1}</td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.pradeshiya} onChange={e=>handleProjectChange(proj.id,"pradeshiya",e.target.value)} placeholder={t.enter}/></td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.grama} onChange={e=>handleProjectChange(proj.id,"grama",e.target.value)} placeholder={t.enter}/></td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.name} onChange={e=>handleProjectChange(proj.id,"name",e.target.value)} placeholder={t.enter}/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.approved} onChange={e=>handleProjectChange(proj.id,"approved",e.target.value)} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.actual} onChange={e=>{const v=e.target.value;const f=(parseFloat(v)||0)+(parseFloat(proj.admin)||0);handleProjectChange(proj.id,"actual",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.admin} onChange={e=>{const v=e.target.value;const f=(parseFloat(proj.actual)||0)+(parseFloat(v)||0);handleProjectChange(proj.id,"admin",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      <td style={{...styles.td,background:"#eff6ff"}}>
                        <div style={styles.calcCell}>
                          <span style={styles.calcValue}>{proj.financial?`රු.${Number(proj.financial).toLocaleString()}`:"—"}</span>
                          <span style={styles.calcNote}>{t.autoCalc}</span>
                        </div>
                      </td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.physical} onChange={e=>handleProjectChange(proj.id,"physical",e.target.value)} placeholder={t.enter}/></td>
                      <td style={styles.tdCenter}><button type="button" onClick={()=>removeProject(proj.id)} style={styles.deleteBtn} disabled={projects.length===1}>✕</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={styles.addRowSection}>
              <button type="button" onClick={addProject} style={styles.addRowBtn}><span style={styles.addIcon}>＋</span>{t.addProject}</button>
              <span style={styles.rowCount}>{projects.length} {t.projects}</span>
            </div>
          </SectionCard>
        )}

        {selectedSections.length > 0 && (
          <div style={styles.submitSection}>
            <button type="submit" style={styles.submitButton}>
              {t.submitBtn} <span style={styles.submitArrow}>→</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

/* ── Header with lang toggle ──────────────────────────── */
function Header({ t, lang, setLang }) {
  return (
    <div style={styles.header}>
      <div style={styles.headerAccent} />
      <div style={styles.headerContent}>
        <div style={styles.headerTop}>
          <div>
            <h1 style={styles.mainTitle}>{t.mainTitle}</h1>
            <p style={styles.subtitle}>{t.subtitle}</p>
          </div>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </div>
  );
}

/* ── PDF ──────────────────────────────────────────────── */
function buildPrintHTML(formData, selectedSections, projects, t, lang) {
  const row = (label, value) => `<tr><td style="padding:8px 12px;font-weight:600;color:#4a5568;width:40%;border:1px solid #e2e8f0;">${label}</td><td style="padding:8px 12px;color:#1a3a6e;border:1px solid #e2e8f0;">${value||"—"}</td></tr>`;
  const sHead = (num, title) => `<div style="background:linear-gradient(90deg,#1a3a6e,#2d5aa0);color:#fff;padding:14px 20px;border-radius:10px 10px 0 0;display:flex;align-items:center;gap:12px;margin-top:20px;">
    ${num?`<span style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.2);display:inline-flex;align-items:center;justify-content:center;font-weight:700;">${num}</span>`:""}
    <span style="font-weight:600;font-size:14px;">${title}</span></div><div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;padding:16px;">`;

  let body = `${sHead("",t.officerSummary)}<table style="width:100%;border-collapse:collapse;">
    ${row(t.district, formData.district ? (lang === "en" ? (formData.district.split("|")[1] || formData.district) : (formData.district.split("|")[0] || formData.district)) : "")}${row(t.name,formData.studentName)}${row(t.position,formData.position)}${row(t.date,formData.date)}
  </table></div>`;

  if (selectedSections.includes("s1")) body += `${sHead("1",t.s1Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s1_approved)}${row(`② ${t.financial}`,formData.s1_financial)}${row(`③ ${t.programs}`,formData.s1_programs)}${row(`④ ${t.officers}`,formData.s1_officers)}</table></div>`;
  if (selectedSections.includes("s2")) body += `${sHead("2",t.s2Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s2_approved)}${row(`② ${t.financial}`,formData.s2_financial)}${row(`③ ${t.programs}`,formData.s2_programs)}${row(`④ ${t.officers}`,formData.s2_officers)}</table></div>`;
  if (selectedSections.includes("s3")) body += `${sHead("3",t.s3Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s3_approved)}${row(`② ${t.financial}`,formData.s3_financial)}</table></div>`;
  if (selectedSections.includes("s4")) {
    const projRows = projects.map((p,i)=>`<tr style="background:${i%2===0?"#f7fafc":"#fff"}">
      <td style="padding:7px 8px;border:1px solid #e2e8f0;text-align:center;">${i+1}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;">${p.pradeshiya||"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;">${p.grama||"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;">${p.name||"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;text-align:right;">${p.approved?`රු.${Number(p.approved).toLocaleString()}`:"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;text-align:right;">${p.actual?`රු.${Number(p.actual).toLocaleString()}`:"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;text-align:right;">${p.admin?`රු.${Number(p.admin).toLocaleString()}`:"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;text-align:right;font-weight:700;color:#1a3a6e;">${p.financial?`රු.${Number(p.financial).toLocaleString()}`:"—"}</td>
      <td style="padding:7px 8px;border:1px solid #e2e8f0;">${p.physical||"—"}</td>
    </tr>`).join("");
    body += `${sHead("4",t.s4Label)}<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:linear-gradient(135deg,#1a3a6e,#2d5aa0);color:#fff;">
        ${[t.noCol,t.divSec,t.gnDiv,t.projName,t.approvedAmt,t.actualCost,t.adminCost,t.financialProg,t.physicalProg].map(h=>`<th style="padding:9px 8px;border:1px solid rgba(255,255,255,0.2);text-align:center;font-size:11px;">${h}</th>`).join("")}
      </tr></thead><tbody>${projRows}</tbody></table></div></div>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${t.pdfTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&display=swap');
    *{box-sizing:border-box;}
    body{font-family:'Noto Sans Sinhala',sans-serif;margin:0;padding:24px;color:#2d3748;background:#fff;}
    h1{color:#1a3a6e;font-size:18px;margin-bottom:16px;}
    @media print{body{padding:12px;}button{display:none;}@page{margin:15mm;size:A4;}}
  </style></head>
  <body><h1>${t.pdfTitle}</h1>${body}
  <script>window.onafterprint=function(){window.close()};</script>
  </body></html>`;
}

/* ── Styles ───────────────────────────────────────────── */
const styles = {
  container:{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f4f8 0%,#e8f0fe 100%)", paddingBottom:60 },
  header:{ background:"linear-gradient(135deg,#1a3a6e 0%,#2d5aa0 100%)", padding:"32px 40px", position:"relative", overflow:"hidden", marginBottom:40, boxShadow:"0 8px 32px rgba(26,58,110,0.25)" },
  headerAccent:{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.07)" },
  headerContent:{ position:"relative", zIndex:1, maxWidth:1400, margin:"0 auto" },
  headerTop:{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" },
  mainTitle:{ color:"#ffffff", fontSize:"clamp(16px,2.2vw,24px)", fontWeight:700, margin:0, lineHeight:1.3 },
  subtitle:{ color:"rgba(255,255,255,0.65)", fontSize:14, margin:"6px 0 0", fontStyle:"italic",  },
  langBar:{ display:"flex", gap:6, flexShrink:0 },
  langBtn:{ padding:"8px 20px", borderRadius:50, border:"2px solid rgba(255,255,255,0.4)", background:"transparent", color:"#fff", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" },
  langBtnActive:{ background:"#ffffff", color:"#1a3a6e", border:"2px solid #ffffff" },
  form:{ maxWidth:1400, margin:"0 auto", padding:"0 20px" },
  sectionCard:{ background:"#ffffff", borderRadius:16, overflow:"hidden", marginBottom:24, boxShadow:"0 2px 16px rgba(0,0,0,0.07)", border:"1px solid #e2e8f0" },
  sectionHeader:{ background:"linear-gradient(90deg,#1a3a6e,#2d5aa0)", padding:"18px 28px", display:"flex", alignItems:"center", gap:14 },
  sectionNumber:{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.2)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:16, flexShrink:0 },
  sectionTitle:{ color:"#ffffff", fontSize:"clamp(13px,2vw,15px)", fontWeight:600, margin:0, lineHeight:1.4 },
  sectionBody:{ padding:"20px 28px", display:"flex", flexDirection:"column", gap:12 },
  fieldRow:{ display:"flex", flexDirection:"row", alignItems:"center", gap:16, background:"#f7fafc", borderRadius:10, padding:"12px 18px", border:"1px solid #e2e8f0" },
  fieldLabel:{ fontSize:13.5, fontWeight:600, color:"#2d3748", lineHeight:1.4, minWidth:300, flexShrink:0 },
  fieldInput:{ padding:"9px 13px", border:"1.5px solid #cbd5e0", borderRadius:8, fontSize:14, color:"#2d3748", background:"#ffffff", outline:"none", fontFamily:"inherit", flex:1, minWidth:0, boxSizing:"border-box" },
  selectorBox:{ background:"#eef2ff", borderRadius:12, padding:"18px 20px", border:"1.5px solid #c7d2fe" },
  selectorHeader:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:10 },
  selectorTitle:{ fontSize:14, fontWeight:700, color:"#1a3a6e" },
  selectorActions:{ display:"flex", gap:8 },
  selectAllBtn:{ background:"#1a3a6e", color:"#fff", border:"none", borderRadius:20, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  clearAllBtn:{ background:"#fff", color:"#c53030", border:"1.5px solid #fed7d7", borderRadius:20, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  checkboxList:{ display:"flex", flexDirection:"column", gap:10 },
  checkboxItem:{ display:"flex", alignItems:"center", gap:12, background:"#ffffff", borderRadius:10, padding:"12px 16px", border:"1.5px solid #c7d2fe", cursor:"pointer", userSelect:"none" },
  checkboxItemActive:{ background:"#e0e7ff", border:"1.5px solid #6366f1" },
  checkboxBox:{ width:22, height:22, borderRadius:6, border:"2px solid #a5b4fc", background:"#ffffff", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  checkboxBoxChecked:{ background:"#1a3a6e", border:"2px solid #1a3a6e" },
  checkmark:{ color:"#ffffff", fontSize:13, fontWeight:700, lineHeight:1 },
  checkboxContent:{ display:"flex", alignItems:"center", gap:10 },
  checkboxNumber:{ width:26, height:26, borderRadius:"50%", background:"#1a3a6e", color:"#ffffff", fontSize:12, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  checkboxLabel:{ fontSize:13.5, fontWeight:500, color:"#2d3748", lineHeight:1.4 },
  selectionBadge:{ marginTop:12, background:"#1a3a6e", color:"#ffffff", borderRadius:20, padding:"5px 14px", fontSize:12, fontWeight:600, display:"inline-block" },
  tableWrapper:{ overflowX:"auto", borderRadius:10, border:"1.5px solid #bee3f8", marginBottom:16, width:"100%" },
  table:{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:1400, tableLayout:"fixed" },
  th:{ background:"linear-gradient(135deg,#1a3a6e,#2d5aa0)", color:"#ffffff", padding:"14px 12px", textAlign:"center", fontWeight:700, fontSize:12, lineHeight:1.5, borderRight:"1px solid rgba(255,255,255,0.15)", whiteSpace:"normal", wordBreak:"keep-all", verticalAlign:"middle" },
  thEn:{ fontWeight:400, fontSize:10, opacity:0.8, display:"block", fontStyle:"italic" },
  trEven:{ background:"#f7fafc" }, trOdd:{ background:"#ffffff" },
  td:{ padding:"8px 6px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", verticalAlign:"middle" },
  tdCenter:{ padding:"8px 6px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", textAlign:"center", verticalAlign:"middle", fontWeight:600, color:"#4a5568", fontSize:13 },
  tableInput:{ width:"100%", padding:"8px 10px", border:"1.5px solid #cbd5e0", borderRadius:6, fontSize:13, color:"#2d3748", background:"transparent", outline:"none", fontFamily:"inherit", boxSizing:"border-box" },
  calcCell:{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px" },
  calcValue:{ fontSize:13, fontWeight:700, color:"#1a3a6e", whiteSpace:"nowrap" },
  calcNote:{ fontSize:9, color:"#718096", fontStyle:"italic" },
  deleteBtn:{ background:"#fff5f5", color:"#c53030", border:"1.5px solid #fed7d7", borderRadius:"50%", width:28, height:28, cursor:"pointer", fontSize:13, fontWeight:700, display:"inline-flex", alignItems:"center", justifyContent:"center" },
  addRowSection:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:4 },
  addRowBtn:{ background:"linear-gradient(135deg,#ebf8ff,#bee3f8)", color:"#2c5282", border:"1.5px dashed #90cdf4", borderRadius:10, padding:"10px 22px", fontSize:13.5, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"inherit" },
  addIcon:{ fontSize:18, fontWeight:700, color:"#2b6cb0" },
  rowCount:{ fontSize:13, color:"#718096", fontWeight:500 },
  submitSection:{ display:"flex", justifyContent:"center", marginTop:12 },
  submitButton:{ background:"linear-gradient(135deg,#1a3a6e,#2d5aa0)", color:"#ffffff", border:"none", padding:"16px 48px", borderRadius:50, fontSize:16, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:10, boxShadow:"0 6px 24px rgba(26,58,110,0.35)", fontFamily:"inherit" },
  submitArrow:{ fontSize:20 },
  noticeBar:{ display:"flex", alignItems:"center", gap:12, background:"#fffbeb", border:"1.5px solid #f6e05e", borderRadius:12, padding:"14px 20px", marginBottom:24, fontSize:14, color:"#744210" },
  noticeIcon:{ fontSize:20, flexShrink:0 },
  summaryRow:{ display:"flex", alignItems:"center", gap:16, background:"#f7fafc", borderRadius:10, padding:"12px 18px", border:"1px solid #e2e8f0" },
  summaryLabel:{ fontSize:13.5, fontWeight:600, color:"#4a5568", minWidth:320, flexShrink:0 },
  summaryValue:{ fontSize:14, fontWeight:600, color:"#1a3a6e" },
  summaryTableWrap:{ overflowX:"auto", borderRadius:10, border:"1.5px solid #bee3f8" },
  summaryTable:{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:800 },
  sTh:{ background:"linear-gradient(135deg,#1a3a6e,#2d5aa0)", color:"#fff", padding:"10px 10px", textAlign:"center", fontWeight:700, fontSize:12, borderRight:"1px solid rgba(255,255,255,0.15)" },
  sTd:{ padding:"9px 10px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", textAlign:"center", fontSize:13, color:"#2d3748", verticalAlign:"middle" },
  summaryActions:{ display:"flex", justifyContent:"center", gap:12, marginTop:8, flexWrap:"wrap", paddingBottom:20 },
  backBtn:{ background:"#ffffff", color:"#4a5568", border:"1.5px solid #cbd5e0", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  pdfBtn:{ background:"linear-gradient(135deg,#c05621,#dd6b20)", color:"#ffffff", border:"none", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(192,86,33,0.3)" },
  sendBtn:{ background:"linear-gradient(135deg,#1a3a6e,#2d5aa0)", color:"#ffffff", border:"none", padding:"14px 28px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(26,58,110,0.35)" },
  centeredPage:{ display:"flex", justifyContent:"center", padding:"40px 20px" },
  doneCard:{ background:"#ffffff", borderRadius:20, padding:"52px 40px", textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.1)", maxWidth:520, width:"100%" },
  doneIcon:{ width:72, height:72, borderRadius:"50%", color:"#ffffff", fontSize:32, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px" },
  doneTitle:{ fontSize:22, fontWeight:700, color:"#1a3a6e", margin:"0 0 20px" },
  statusGrid:{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 },
  statusChip:{ display:"flex", alignItems:"center", gap:12, borderRadius:12, padding:"12px 18px", border:"1.5px solid", fontSize:14, fontWeight:500 },
  chipOk:{ background:"#f0fff4", borderColor:"#9ae6b4", color:"#276749" },
  chipFail:{ background:"#fff5f5", borderColor:"#feb2b2", color:"#c53030" },
  chipPending:{ background:"#fffff0", borderColor:"#faf089", color:"#744210" },
  doneActions:{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" },
  newBtn:{ background:"linear-gradient(135deg,#1a3a6e,#2d5aa0)", color:"#ffffff", border:"none", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
};