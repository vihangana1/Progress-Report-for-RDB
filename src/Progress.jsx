//import { useState, useEffect, useRef } from "react";
import { useState } from "react";

const sectionStyles = {
  fontFamily: "'Noto Sans Sinhala', 'Iskoola Pota', sans-serif",
};

const SECTION_OPTIONS = [
  { key: "s1", label: "දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන", number: "1" },
  { key: "s2", label: "ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන", number: "2" },
  { key: "s3", label: "ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම", number: "3" },
  { key: "s4", label: "ව්‍යාපෘති ක්‍රියාත්මක කිරීම", number: "4" },
];

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
function TextField({ label, name, value, onChange, placeholder = "ඇතුළත් කරන්න...", required = false }) {
  return (
    <div style={styles.fieldRow}>
      <label style={styles.fieldLabel}>{label}</label>
      <input type="text" name={name} value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder} 
        required={required}
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

/* ── Main ─────────────────────────────────────────────── */
export default function Progress() {
  const [page, setPage] = useState("form"); // "form" | "summary" | "done"
  //const printRef = useRef(null);

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

  // Load XLSX from CDN
  // const [xlsxReady, setXlsxReady] = useState(!!window.XLSX);
  // useEffect(() => {
  //   if (window.XLSX) { setXlsxReady(true); return; }
  //   const s = document.createElement("script");
  //   s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
  //   s.onload = () => setXlsxReady(true);
  //   s.onerror = () => console.warn("XLSX CDN failed to load");
  //   document.head.appendChild(s);
  // }, []);

  /* handlers */
  const handleChange = (name, value) => setFormData(p => ({ ...p, [name]: value }));
  const handleText = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const toggleSection = (key) => setSelectedSections(p => p.includes(key) ? p.filter(k => k !== key) : [...p, key]);
  const selectAll = () => setSelectedSections(SECTION_OPTIONS.map(s => s.key));
  const clearAll = () => setSelectedSections([]);
  const handleProjectChange = (id, field, value) => setProjects(p => p.map(r => r.id === id ? { ...r, [field]: value } : r));
  const addProject = () => setProjects(p => [...p, emptyProject()]);
  const removeProject = (id) => { if (projects.length > 1) setProjects(p => p.filter(r => r.id !== id)); };

  /* Step 1: show summary */
  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    if (selectedSections.length === 0) {
      alert("කරුණාකර අවම වශයෙන් එක් කොටසක් තෝරන්න. / Please select at least one section.");
      return;
    }
    setPage("summary"); 
    window.scrollTo(0, 0); 
  };
  /* Step 2: send to Google Sheets */
  const handleSendToSheets = async () => {
    setIsSending(true);
    const status = {};
    const officer = { district: formData.district, name: formData.studentName, position: formData.position, date: formData.date };
    const jobs = [];
    if (selectedSections.includes("s1")) jobs.push({ key: "s1", payload: { ...officer, approved: formData.s1_approved, financial: formData.s1_financial, programs: formData.s1_programs, officers: formData.s1_officers } });
    if (selectedSections.includes("s2")) jobs.push({ key: "s2", payload: { ...officer, approved: formData.s2_approved, financial: formData.s2_financial, programs: formData.s2_programs, officers: formData.s2_officers } });
    if (selectedSections.includes("s3")) jobs.push({ key: "s3", payload: { ...officer, approved: formData.s3_approved, financial: formData.s3_financial } });
    if (selectedSections.includes("s4")) jobs.push({ key: "s4", payload: { ...officer, projects: projects.map((p, i) => ({ no: i+1, pradeshiya: p.pradeshiya, grama: p.grama, name: p.name, approved: p.approved, actual: p.actual, admin: p.admin, financial: p.financial, physical: p.physical })) } });

    await Promise.all(jobs.map(async ({ key, payload }) => {
      status[key] = "sending"; setSendStatus({ ...status });
      try {
        // Flatten payload into individual URL params for Google Apps Script
        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => {
          if (k === "projects") {
            // Send each project row as separate params
            v.forEach((proj, i) => {
              Object.entries(proj).forEach(([pk, pv]) => {
                params.append(`project_${i}_${pk}`, pv ?? "");
              });
            });
            params.append("projectCount", String(v.length));
          } else {
            params.append(k, v ?? "");
          }
        });
        // Use GET with query string - most reliable method for Google Apps Script
        const url = `${GOOGLE_SCRIPT_URLS[key]}?${params.toString()}`;
        await fetch(url, { method: "GET", mode: "no-cors" });
        status[key] = "ok";
      } catch (err) { status[key] = "fail"; }
      setSendStatus({ ...status });
    }));
    setIsSending(false);
    setPage("done");
    window.scrollTo(0, 0);
  };

  // /* Download Excel */
  // const handleDownloadExcel = () => {
  //   if (!xlsxReady || !window.XLSX) {
  //     alert("Excel library loading... please wait a moment and try again.");
  //     return;
  //   }
  //   const XLSX = window.XLSX;
  //   const wb = XLSX.utils.book_new();
  //   const officer = [[], ["නිලධාරියාගේ තොරතුරු / Officer Info"], ["දිස්ත්‍රික්කය", formData.district], ["නම", formData.studentName], ["තනතුර", formData.position], ["දිනය", formData.date]];

  //   const mkSheet = (headers, rows) => {
  //     const ws = XLSX.utils.aoa_to_sheet([headers, ...rows, ...officer]);
  //     ws["!cols"] = headers.map(() => ({ wch: 24 }));
  //     return ws;
  //   };

  //   if (selectedSections.includes("s1")) {
  //     XLSX.utils.book_append_sheet(wb, mkSheet(
  //       ["අංකය", "දිස්ත්‍රික්කය", "අනුමත ප්‍රතිපාදන මුදල (රු.)", "මූල්‍ය ප්‍රගතිය (රු.)", "වැඩසටහන් ගණන", "නිලධාරී සංඛ්‍යාව"],
  //       [[1, formData.district, formData.s1_approved, formData.s1_financial, formData.s1_programs, formData.s1_officers]]
  //     ), "1-දිස්ත්‍රික් දැනුවත් කිරීම");
  //   }
  //   if (selectedSections.includes("s2")) {
  //     XLSX.utils.book_append_sheet(wb, mkSheet(
  //       ["අංකය", "දිස්ත්‍රික්කය", "අනුමත ප්‍රතිපාදන මුදල (රු.)", "මූල්‍ය ප්‍රගතිය (රු.)", "වැඩසටහන් ගණන", "නිලධාරී සංඛ්‍යාව"],
  //       [[1, formData.district, formData.s2_approved, formData.s2_financial, formData.s2_programs, formData.s2_officers]]
  //     ), "2-කාරක සභා දැනුවත් කිරීම");
  //   }
  //   if (selectedSections.includes("s3")) {
  //     XLSX.utils.book_append_sheet(wb, mkSheet(
  //       ["අංකය", "දිස්ත්‍රික්කය", "අනුමත ප්‍රතිපාදන මුදල (රු.)", "මූල්‍ය ප්‍රගතිය (රු.)"],
  //       [[1, formData.district, formData.s3_approved, formData.s3_financial]]
  //     ), "3-පරිපාලන කටයුතු");
  //   }
  //   if (selectedSections.includes("s4")) {
  //     XLSX.utils.book_append_sheet(wb, mkSheet(
  //       ["අංකය", "දිස්ත්‍රික්කය", "ප්‍රාදේශීය ලේකම් කාර්යාලය", "ග්‍රාම නිලධාරී වසම", "ව්‍යාපෘතියේ නම", "අනුමත (රු.)", "සත්‍යය (රු.)", "පරිපාලන (රු.)", "මූල්‍ය (රු.)", "භෞතික"],
  //       projects.map((p, i) => [i+1, formData.district, p.pradeshiya, p.grama, p.name, p.approved||"", p.actual||"", p.admin||"", p.financial||"", p.physical])
  //     ), "4-ව්‍යාපෘති");
  //   }

  //   XLSX.writeFile(wb, `progress_${formData.district || "report"}_${formData.date || "date"}.xlsx`);
  // };

  /* Download PDF – uses browser print with styled hidden div */
  const handleDownloadPDF = () => {
    const printContent = buildPrintHTML(formData, selectedSections, projects);
    const win = window.open("", "_blank", "width=900,height=700");
    if (!win) { alert("Please allow popups for PDF download."); return; }
    win.document.write(printContent);
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); }, 600);
  };

  const handleReset = () => {
    setPage("form"); setSelectedSections([]); setSendStatus({}); setIsSending(false);
    setFormData({ district:"", studentName:"", position:"", date:"", s1_approved:"", s1_financial:"", s1_programs:"", s1_officers:"", s2_approved:"", s2_financial:"", s2_programs:"", s2_officers:"", s3_approved:"", s3_financial:"" });
    setProjects([emptyProject()]);
    window.scrollTo(0, 0);
  };

  /* ── DONE PAGE ─────────────────────────────────────── */
  if (page === "done") {
    const allOk = Object.values(sendStatus).every(v => v === "ok");
    const anyFail = Object.values(sendStatus).some(v => v === "fail");
    return (
      <div style={{ ...styles.container, ...sectionStyles }}>
        <Header />
        <div style={styles.centeredPage}>
          <div style={styles.doneCard}>
            <div style={{ ...styles.doneIcon, background: allOk ? "linear-gradient(135deg,#276749,#38a169)" : "linear-gradient(135deg,#c05621,#dd6b20)" }}>
              {allOk ? "✓" : "!"}
            </div>
            <h2 style={styles.doneTitle}>
              {allOk ? "සාර්ථකව යොමු කරන ලදී!" : anyFail ? "සමහර යොමු කිරීම් අසාර්ථක විය" : "යොමු කිරීම සම්පූර්ණ විය"}
            </h2>
            <div style={styles.statusGrid}>
              {SECTION_OPTIONS.filter(o => selectedSections.includes(o.key)).map(opt => {
                const st = sendStatus[opt.key];
                return (
                  <div key={opt.key} style={{ ...styles.statusChip, ...(st==="ok" ? styles.chipOk : st==="fail" ? styles.chipFail : styles.chipPending) }}>
                    <span>{st==="ok" ? "✅" : st==="fail" ? "❌" : "⏳"}</span>
                    <span>කොටස {opt.number} — {st==="ok" ? "සාර්ථකයි" : st==="fail" ? "අසාර්ථකයි" : "..."}</span>
                  </div>
                );
              })}
            </div>
            <div style={styles.doneActions}>
              {/* <button onClick={handleDownloadExcel} style={styles.xlsBtn}>📊 Excel බාගන්න</button> */}
              <button onClick={handleDownloadPDF}   style={styles.pdfBtn}>📄 PDF බාගන්න</button>
              <button onClick={handleReset}          style={styles.newBtn}>＋ නව ආකෘති පත්‍රයක්</button>
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
        <Header />
        <div style={styles.form}>

          <div style={styles.noticeBar}>
            <span style={styles.noticeIcon}>📋</span>
            <span>ඔබ ඇතුළු කළ තොරතුරු සමාලෝචනය කරන්න. නිවැරදි නම් <strong>"Submit"</strong> ක්ලික් කරන්න.</span>
          </div>

          {/* Officer */}
          <SectionCard title="නිලධාරියාගේ තොරතුරු">
            <SummaryRow label="දිස්ත්‍රික්කය" value={formData.district} />
            <SummaryRow label="නම" value={formData.studentName} />
            <SummaryRow label="තනතුර" value={formData.position} />
            <SummaryRow label="දිනය" value={formData.date} />
          </SectionCard>

          {selectedSections.includes("s1") && (
            <SectionCard number="1" title="දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන">
              <SummaryRow label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" value={formData.s1_approved} />
              <SummaryRow label="② මූල්‍ය ප්‍රගතිය (රු.)" value={formData.s1_financial} />
              <SummaryRow label="③ පැවැත්වූ වැඩසටහන් ගණන" value={formData.s1_programs} />
              <SummaryRow label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" value={formData.s1_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s2") && (
            <SectionCard number="2" title="ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන">
              <SummaryRow label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" value={formData.s2_approved} />
              <SummaryRow label="② මූල්‍ය ප්‍රගතිය (රු.)" value={formData.s2_financial} />
              <SummaryRow label="③ පැවැත්වූ වැඩසටහන් ගණන" value={formData.s2_programs} />
              <SummaryRow label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" value={formData.s2_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s3") && (
            <SectionCard number="3" title="ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම">
              <SummaryRow label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" value={formData.s3_approved} />
              <SummaryRow label="② මූල්‍ය ප්‍රගතිය (රු.)" value={formData.s3_financial} />
            </SectionCard>
          )}
          {selectedSections.includes("s4") && (
            <SectionCard number="4" title="ව්‍යාපෘති ක්‍රියාත්මක කිරීම">
              <div style={styles.summaryTableWrap}>
                <table style={styles.summaryTable}>
                  <thead>
                    <tr>{["#","ප්‍රාදේශීය ලේකම් කාර්යාලය","ග්‍රාම නිලධාරී වසම","ව්‍යාපෘතියේ නම","අනුමත ප්‍රතිපාදන මුදල (රු.)","ව්‍යාපෘතියේ සත්‍යය වියදම","පරිපාලන වියදම (රු.)","මූල්‍ය ප්‍රගතිය (රු.)","භෞතික ප්‍රගතිය"].map(h=><th key={h} style={styles.sTh}>{h}</th>)}</tr>
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
            <button type="button" onClick={() => { setPage("form"); window.scrollTo(0,0); }} style={styles.backBtn}>← ආපසු / Back</button>
            {/* <button type="button" onClick={handleDownloadExcel} style={styles.xlsBtn}>📊 Excel බාගන්න</button> */}
            <button type="button" onClick={handleDownloadPDF}   style={styles.pdfBtn}>📄 PDF බාගන්න</button>
            <button type="button" onClick={handleSendToSheets} disabled={isSending}
              style={{ ...styles.sendBtn, opacity: isSending?0.7:1, cursor: isSending?"not-allowed":"pointer" }}>
              {isSending ? "⏳ යොමු කරමින්..." : "📤 Submit"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── FORM PAGE ─────────────────────────────────────── */
  return (
    <div style={{ ...styles.container, ...sectionStyles }}>
      <Header />
      <form onSubmit={handleFormSubmit} style={styles.form}>
        <SectionCard title="තොරතුරු ඇතුළත් කරනු ලබන නිලධාරියාගේ තොරතුරු">
          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>දිස්ත්‍රික්කය / District</label>
            <select name="district" value={formData.district} onChange={handleText} style={{ ...styles.fieldInput, cursor:"pointer" }} required>
              <option value="">-- දිස්ත්‍රික්කය තෝරන්න / Select District --</option>
              {DISTRICTS.map(([si,en]) => <option key={si} value={si}>{si} / {en}</option>)}
            </select>
          </div>
          <TextField label="නම / Name" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="නම ඇතුළත් කරන්න..." required />
          <TextField label="තනතුර / Position" name="position" value={formData.position} onChange={handleChange} placeholder="තනතුර ඇතුළත් කරන්න..." required />
          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>දිනය / Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleText} style={styles.fieldInput} required  />
          </div>
          <div style={styles.selectorBox}>
            <div style={styles.selectorHeader}>
              <span style={styles.selectorTitle}>අවශ්‍ය කොටස් තෝරන්න / Select Sections</span>
              <div style={styles.selectorActions}>
                <button type="button" onClick={selectAll} style={styles.selectAllBtn}>සියල්ල තෝරන්න</button>
                <button type="button" onClick={clearAll}  style={styles.clearAllBtn}>ඉවත් කරන්න</button>
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
            {selectedSections.length > 0 && <div style={styles.selectionBadge}>{selectedSections.length} කොටස් තෝරා ඇත</div>}
          </div>
        </SectionCard>

        {selectedSections.includes("s1") && (
          <SectionCard number="1" title="දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s1_approved" value={formData.s1_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s1_financial" value={formData.s1_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="③ පැවැත්වූ වැඩසටහන් ගණන (භෞතික ප්‍රගතිය)" name="s1_programs" value={formData.s1_programs} onChange={handleChange} placeholder="ගණන ඇතුළත් කරන්න..." />
            <TextField label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" name="s1_officers" value={formData.s1_officers} onChange={handleChange} placeholder="සංඛ්‍යාව ඇතුළත් කරන්න..." />
          </SectionCard>
        )}
        {selectedSections.includes("s2") && (
          <SectionCard number="2" title="ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s2_approved" value={formData.s2_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s2_financial" value={formData.s2_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="③ පැවැත්වූ වැඩසටහන් ගණන (භෞතික ප්‍රගතිය)" name="s2_programs" value={formData.s2_programs} onChange={handleChange} placeholder="ගණන ඇතුළත් කරන්න..." />
            <TextField label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" name="s2_officers" value={formData.s2_officers} onChange={handleChange} placeholder="සංඛ්‍යාව ඇතුළත් කරන්න..." />
          </SectionCard>
        )}
        {selectedSections.includes("s3") && (
          <SectionCard number="3" title="ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s3_approved" value={formData.s3_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s3_financial" value={formData.s3_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
          </SectionCard>
        )}
        {selectedSections.includes("s4") && (
          <SectionCard number="4" title="ව්‍යාපෘති ක්‍රියාත්මක කිරීම">
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
                    <th style={styles.th}>අංකය<br/><span style={styles.thEn}>No.</span></th>
                    <th style={styles.th}>ප්‍රාදේශීය ලේකම් කාර්යාලය<br/><span style={styles.thEn}>Divisional Secretariat</span></th>
                    <th style={styles.th}>ග්‍රාම නිලධාරී වසම<br/><span style={styles.thEn}>GN Division</span></th>
                    <th style={styles.th}>ව්‍යාපෘතියේ නම<br/><span style={styles.thEn}>Project Name</span></th>
                    <th style={styles.th}>අනුමත ප්‍රතිපාදන මුදල (රු.)<br/><span style={styles.thEn}>Approved Amount</span></th>
                    <th style={styles.th}>ව්‍යාපෘතියේ සත්‍යය වියදම<br/><span style={styles.thEn}>Actual Cost</span></th>
                    <th style={styles.th}>පරිපාලන වියදම (රු.)<br/><span style={styles.thEn}>Admin Cost</span></th>
                    <th style={styles.th}>මූල්‍ය ප්‍රගතිය (රු.)<br/><span style={styles.thEn}>= සත්‍යය + පරිපාලන</span></th>
                    <th style={styles.th}>භෞතික ප්‍රගතිය<br/><span style={styles.thEn}>Physical Progress</span></th>
                    <th style={{...styles.th,background:"#c53030"}}>මකන්න</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj, idx) => (
                    <tr key={proj.id} style={idx%2===0?styles.trEven:styles.trOdd}>
                      <td style={styles.tdCenter}>{idx+1}</td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.pradeshiya} onChange={e=>handleProjectChange(proj.id,"pradeshiya",e.target.value)} placeholder="ඇතුළත් කරන්න..."/></td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.grama} onChange={e=>handleProjectChange(proj.id,"grama",e.target.value)} placeholder="ඇතුළත් කරන්න..."/></td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.name} onChange={e=>handleProjectChange(proj.id,"name",e.target.value)} placeholder="ඇතුළත් කරන්න..."/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.approved} onChange={e=>handleProjectChange(proj.id,"approved",e.target.value)} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.actual} onChange={e=>{const v=e.target.value;const f=(parseFloat(v)||0)+(parseFloat(proj.admin)||0);handleProjectChange(proj.id,"actual",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" value={proj.admin} onChange={e=>{const v=e.target.value;const f=(parseFloat(proj.actual)||0)+(parseFloat(v)||0);handleProjectChange(proj.id,"admin",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      <td style={{...styles.td,background:"#eff6ff"}}>
                        <div style={styles.calcCell}>
                          <span style={styles.calcValue}>{proj.financial?`රු.${Number(proj.financial).toLocaleString()}`:"—"}</span>
                          <span style={styles.calcNote}>ස්වයංක්‍රීය</span>
                        </div>
                      </td>
                      <td style={styles.td}><input style={styles.tableInput} value={proj.physical} onChange={e=>handleProjectChange(proj.id,"physical",e.target.value)} placeholder="ඇතුළත් කරන්න..."/></td>
                      <td style={styles.tdCenter}><button type="button" onClick={()=>removeProject(proj.id)} style={styles.deleteBtn} disabled={projects.length===1}>✕</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={styles.addRowSection}>
              <button type="button" onClick={addProject} style={styles.addRowBtn}><span style={styles.addIcon}>＋</span>නව ව්‍යාපෘතියක් එකතු කරන්න</button>
              <span style={styles.rowCount}>{projects.length} ව්‍යාපෘති</span>
            </div>
          </SectionCard>
        )}

        {selectedSections.length > 0 && (
          <div style={styles.submitSection}>
            <button type="submit" style={styles.submitButton}>
              ආකෘති පත්‍රය ඉදිරිපත් කරන්න <span style={styles.submitArrow}>→</span>
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

/* ── Header ───────────────────────────────────────────── */
function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.headerAccent} />
      <div style={styles.headerContent}>
        <h1 style={styles.mainTitle}>මාසික ප්‍රගතිය වාර්තා කිරීම - ග්‍රාමීය සංවර්ධන කාර්යාංශය</h1>
        <p style={styles.subtitle}>Monthly Progress Report — Rural Development Bureau</p>
      </div>
    </div>
  );
}

/* ── Build print-friendly HTML for PDF ───────────────── */
function buildPrintHTML(formData, selectedSections, projects) {
  const row = (label, value) => `<tr><td style="padding:8px 12px;font-weight:600;color:#4a5568;width:40%;border:1px solid #e2e8f0;">${label}</td><td style="padding:8px 12px;color:#1a3a6e;border:1px solid #e2e8f0;">${value || "—"}</td></tr>`;
  const sHead = (num, title) => `<div style="background:linear-gradient(90deg,#1a3a6e,#2d5aa0);color:#fff;padding:14px 20px;border-radius:10px 10px 0 0;display:flex;align-items:center;gap:12px;margin-top:20px;">
    ${num ? `<span style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.2);display:inline-flex;align-items:center;justify-content:center;font-weight:700;">${num}</span>` : ""}
    <span style="font-weight:600;font-size:14px;">${title}</span></div>
  <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;padding:16px;">`;

  let body = `
    ${sHead("", "නිලධාරියාගේ තොරතුරු")}
    <table style="width:100%;border-collapse:collapse;">
      ${row("දිස්ත්‍රික්කය", formData.district)}
      ${row("නම", formData.studentName)}
      ${row("තනතුර", formData.position)}
      ${row("දිනය", formData.date)}
    </table></div>`;

  if (selectedSections.includes("s1")) {
    body += `${sHead("1","දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන")}
    <table style="width:100%;border-collapse:collapse;">
      ${row("① අනුමත ප්‍රතිපාදන මුදල (රු.)", formData.s1_approved)}
      ${row("② මූල්‍ය ප්‍රගතිය (රු.)", formData.s1_financial)}
      ${row("③ පැවැත්වූ වැඩසටහන් ගණන", formData.s1_programs)}
      ${row("④ සහභාගී වූ නිලධාරී සංඛ්‍යාව", formData.s1_officers)}
    </table></div>`;
  }
  if (selectedSections.includes("s2")) {
    body += `${sHead("2","ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන")}
    <table style="width:100%;border-collapse:collapse;">
      ${row("① අනුමත ප්‍රතිපාදන මුදල (රු.)", formData.s2_approved)}
      ${row("② මූල්‍ය ප්‍රගතිය (රු.)", formData.s2_financial)}
      ${row("③ පැවැත්වූ වැඩසටහන් ගණන", formData.s2_programs)}
      ${row("④ සහභාගී වූ නිලධාරී සංඛ්‍යාව", formData.s2_officers)}
    </table></div>`;
  }
  if (selectedSections.includes("s3")) {
    body += `${sHead("3","ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම")}
    <table style="width:100%;border-collapse:collapse;">
      ${row("① අනුමත ප්‍රතිපාදන මුදල (රු.)", formData.s3_approved)}
      ${row("② මූල්‍ය ප්‍රගතිය (රු.)", formData.s3_financial)}
    </table></div>`;
  }
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
    body += `${sHead("4","ව්‍යාපෘති ක්‍රියාත්මක කිරීම")}
    <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead><tr style="background:linear-gradient(135deg,#1a3a6e,#2d5aa0);color:#fff;">
        ${["#","ප්‍රාදේශීය ලේකම් කාර්යාලය","ග්‍රාම නිලධාරී වසම","ව්‍යාපෘතියේ නම","අනුමත ප්‍රතිපාදන මුදල (රු.)","ව්‍යාපෘතියේ සත්‍යය වියදම","පරිපාලන වියදම (රු.)","මූල්‍ය ප්‍රගතිය (රු.)","භෞතික ප්‍රගතිය"].map(h=>`<th style="padding:9px 8px;border:1px solid rgba(255,255,255,0.2);text-align:center;font-size:11px;">${h}</th>`).join("")}
      </tr></thead>
      <tbody>${projRows}</tbody>
    </table></div></div>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>ප්‍රගති වාර්තාව - ${formData.district || ""} - ${formData.date || ""}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&display=swap');
    * { box-sizing:border-box; }
    body { font-family:'Noto Sans Sinhala',sans-serif; margin:0; padding:24px; color:#2d3748; background:#fff; }
    h1 { color:#1a3a6e; font-size:18px; margin-bottom:4px; }
    p { color:#718096; font-size:13px; margin:0 0 20px; }
    @media print {
      body { padding:12px; }
      button { display:none; }
      @page { margin:15mm; size:A4; }
    }
  </style></head>
  <body>
    <h1>මාසික ප්‍රගතිය වාර්තා කිරීම - ග්‍රාමීය සංවර්ධන කාර්යාංශය</h1>
    ${body}

    <script>
      window.onafterprint = function(){ window.close(); };
    </script>
  </body></html>`;
}

/* ── Styles ───────────────────────────────────────────── */
const styles = {
  container:{ minHeight:"100vh", background:"linear-gradient(135deg,#f0f4f8 0%,#e8f0fe 100%)", paddingBottom:60 },
  header:{ background:"linear-gradient(135deg,#1a3a6e 0%,#2d5aa0 100%)", padding:"48px 40px 40px", position:"relative", overflow:"hidden", marginBottom:40, boxShadow:"0 8px 32px rgba(26,58,110,0.25)" },
  headerAccent:{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.07)" },
  headerContent:{ position:"relative", zIndex:1, maxWidth:820, margin:"0 auto" },
  mainTitle:{ color:"#ffffff", fontSize:"clamp(18px,2.5vw,26px)", fontWeight:700, margin:0, lineHeight:1.3 },
  subtitle:{ color:"rgba(255,255,255,0.7)", fontSize:15, margin:"8px 0 0", fontStyle:"italic" },
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
  xlsBtn:{ background:"linear-gradient(135deg,#276749,#38a169)", color:"#ffffff", border:"none", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(39,103,73,0.3)" },
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