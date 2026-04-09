// import React, { useState, useEffect } from "react";

// /* ── Translations ── */
// const T = {
//   en: {
//     title: "Monthly Progress Reporting",
//     subtitle: "Rural Development Bureau",
//     formClosed: "This Form is Currently Closed",
//     formClosedDesc: "Monthly report collection has ended. Contact the office for more details.",
//     contactAdmin: "If you have urgent updates, please contact the administrator.",
//     personalInfo: "Officer Information",
//     sectionSelect: "Select Sections to Report",
//     nameLabel: "Name / Name",
//     positionLabel: "Designation / Position",
//     districtLabel: "District / District",
//     dateLabel: "Date / Date",
//     back: "Back",
//     next: "Next",
//     submit: "Submit to Google Sheets",
//     downloadExcel: "Download Excel Report",
//     downloadPdf: "Download PDF Report",
//     successMsg: "Data submitted successfully!",
//     errorMsg: "Submission failed. Please try again.",
//     newForm: "Submit New Form",
//     summaryTitle: "Report Summary",
//     required: "(Required)",
//     allDistricts: "-- Select District --"
//   },
//   si: {
//     title: "මාසික ප්‍රගතිය වාර්තා කිරීම",
//     subtitle: "ග්‍රාමීය සංවර්ධන කාර්යාංශය",
//     formClosed: "මෙම ආකෘති පත්‍රය දැනට වසා ඇත",
//     formClosedDesc: "මාසික වාර්තා ලබා ගැනීම අවසන් කර ඇත. වැඩි විස්තර සඳහා කාර්යාලය අමතන්න.",
//     contactAdmin: "ඔබට හදිසි යාවත්කාලීන කිරීම් තිබේ නම්, කරුණාකර කාර්යාලය අමතන්න.",
//     personalInfo: "නිලධාරියාගේ තොරතුරු",
//     sectionSelect: "අවශ්‍ය කොටස් තෝරන්න",
//     nameLabel: "නම / Name",
//     positionLabel: "තනතුර / Position",
//     districtLabel: "දිස්ත්‍රික්කය / District",
//     dateLabel: "දිනය / Date",
//     back: "ආපසු",
//     next: "මීළඟ",
//     submit: "Google Sheets වෙත යොමු කරන්න",
//     downloadExcel: "Excel බාගන්න",
//     downloadPdf: "PDF බාගන්න",
//     successMsg: "සාර්ථකව යොමු කරන ලදී!",
//     errorMsg: "යොමු කිරීම අසාර්ථක විය. නැවත උත්සාහ කරන්න.",
//     newForm: "නව ආකෘති පත්‍රයක්",
//     summaryTitle: "වාර්තා සාරාංශය",
//     required: "(අවශ්‍යයි)",
//     allDistricts: "-- දිස්ත්‍රික්කය තෝරන්න --"
//   }
// };

// /* ── Configuration ── */
// const SECTION_OPTIONS = [
//   { key: "s1", label: "දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිළිබඳ දැනුවත් කිරීමේ වැඩසටහන", number: "1" },
//   { key: "s2", label: "ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන", number: "2" },
//   { key: "s3", label: "ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම", number: "3" },
//   { key: "s4", label: "ව්‍යාපෘති ක්‍රියාත්මක කිරීම", number: "4" }
// ];

// const GOOGLE_SCRIPT_URLS = {
//   s1: "https://script.google.com/macros/s/AKfycbxjSbnhUJ0Um-DIz41F4s7B3n_HKpq4GmWOCaA2ymabQG8hYWZtXZgF2Ez_e7Q0ZLra/exec",
//   s2: "https://script.google.com/macros/s/AKfycbyXqCx1yOO4VmaLRWhsspAeABsO1Pa4Nk9tM1JQqD7uBGXLdjp83LgIpLfpb0ItC9oTtg/exec",
//   s3: "https://script.google.com/macros/s/AKfycbyI8pMF6JLC8AL36PZJS7Ukp5pIVBLkqE7tDp6iDagM4jMQ308W_UgPHUxQwbq35ShK/exec",
//   s4: "https://script.google.com/macros/s/AKfycbwOjOHoCMQMfExnKEFYgDrubGLx0osK4AK-Fc02tvVceUrKlOy3vqIfA5agsPl1xBG19w/exec",
// };

// const DISTRICTS = [
//   "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo", "Galle", "Gampaha", 
//   "Hambantota", "Jaffna", "Kalutara", "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", 
//   "Mannar", "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya", 
//   "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
// ];

// /* ── Components ── */

// function TextField({ label, value, onChange, placeholder, type = "text", required, style }) {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', ...style }}>
//       <label style={{ fontSize: '13px', fontWeight: '600', color: '#4b5563' }}>{label} {required && <span style={{ color: '#ef4444' }}>*</span>}</label>
//       <input 
//         type={type} 
//         value={value} 
//         onChange={(e) => onChange(e.target.value)} 
//         placeholder={placeholder}
//         style={{ 
//           padding: '10px 14px', 
//           borderRadius: '8px', 
//           border: '1px solid #d1d5db', 
//           fontSize: '14px',
//           outline: 'none',
//           backgroundColor: '#f9fafb'
//         }}
//       />
//     </div>
//   );
// }

// function SectionCard({ number, title, icon, children }) {
//   return (
//     <div style={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e5e7eb', overflow: 'hidden', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
//       <div style={{ backgroundColor: '#f8fafc', padding: '16px 20px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '12px' }}>
//         {number && <span style={{ width: '28px', height: '28px', backgroundColor: '#2c4c8f', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold' }}>{number}</span>}
//         {icon && <span style={{ fontSize: '20px' }}>{icon}</span>}
//         <h2 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', margin: 0 }}>{title}</h2>
//       </div>
//       <div style={{ padding: '20px' }}>{children}</div>
//     </div>
//   );
// }

// function SummaryRow({ label, value }) {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f1f5f9' }}>
//       <span style={{ fontSize: '13px', color: '#64748b' }}>{label}</span>
//       <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b', textAlign: 'right' }}>{value || "—"}</span>
//     </div>
//   );
// }

// const emptyProject = () => ({ id: Date.now() + Math.random(), pradeshiya: "", grama: "", name: "", approved: "", actual: "", admin: "", financial: "", physical: "" });

// /* ── Main App ── */

// export default function Progress() {
//   const isClosed = true; // Set to true to close the form
//   const [lang, setLang] = useState("si");
//   const [page, setPage] = useState("form");
//   const [section, setSection] = useState(1);
//   const [formData, setFormData] = useState({ district: "", studentName: "", position: "", date: "" });
//   const [s1, setS1] = useState({ approved: "", financial: "", programs: "", officers: "" });
//   const [s2, setS2] = useState({ approved: "", financial: "", programs: "", officers: "" });
//   const [s3, setS3] = useState({ approved: "", financial: "" });
//   const [projects, setProjects] = useState([emptyProject()]);
//   const [selectedSections, setSelectedSections] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [ setIsExporting] = useState(false);
//   const [sendStatus, setSendStatus] = useState({});

//   const t = T[lang];

//   const handleNext = () => {
//     if (section === 1 && (!formData.studentName || !formData.position || !formData.district)) {
//       alert(t.validation || "Please fill in basic details.");
//       return;
//     }
//     if (section < 4) setSection(section + 1);
//     else setPage("summary");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleBack = () => {
//     if (section > 1) setSection(section - 1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Load PDF & Excel Libs
//   useEffect(() => {
//     if (!window.XLSX) {
//       const script = document.createElement("script");
//       script.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
//       script.async = true;
//       document.head.appendChild(script);
//     }
//     if (!window.html2pdf) {
//       const script = document.createElement("script");
//       script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
//       script.async = true;
//       document.head.appendChild(script);
//     }
//   }, []);

//   if (isClosed) {
//     return (
//       <div style={{ backgroundColor: '#f3f6fc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }} className="font-sans">
//         <Header lang={lang} setLang={setLang} isClosed />
//         <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
//           <div style={{ backgroundColor: 'white', borderRadius: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', padding: '60px 40px', maxWidth: '600px', width: '100%', textAlign: 'center', border: '1px solid white' }}>
//             <div style={{ width: '96px', height: '96px', backgroundColor: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 40px', boxShadow: '0 10px 15px -3px rgba(239,68,68,0.3)' }}>
//               <span style={{ color: 'white', fontSize: '64px', fontWeight: 'bold' }}>!</span>
//             </div>
//             <div className="space-y-4">
//               <h1 style={{ color: '#2c4c8f', fontSize: '32px', fontWeight: 'bold', lineHeight: 1.2 }}>{t.formClosed}</h1>
//               <p style={{ color: '#64748b', fontSize: '18px', lineHeight: 1.6, maxWidth: '400px', margin: '16px auto 0' }}>{t.formClosedDesc}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const handleSendToSheets = async () => {
//     setIsSubmitting(true);
//     const status = {};
//     const officer = { district: formData.district, name: formData.studentName, position: formData.position, date: formData.date };
//     const jobs = [];

//     if (selectedSections.includes("s1")) jobs.push({ key: "s1", payload: { ...officer, ...s1 } });
//     if (selectedSections.includes("s2")) jobs.push({ key: "s2", payload: { ...officer, ...s2 } });
//     if (selectedSections.includes("s3")) jobs.push({ key: "s3", payload: { ...officer, ...s3 } });
//     if (selectedSections.includes("s4")) jobs.push({ key: "s4", payload: { ...officer, projects: projects } });

//     await Promise.all(jobs.map(async ({ key, payload }) => {
//       try {
//         const body = new URLSearchParams();
//         body.append("data", JSON.stringify(payload));
//         await fetch(GOOGLE_SCRIPT_URLS[key], { method: "POST", mode: "no-cors", body });
//         status[key] = "ok";
//       } catch (e) {
//         status[key] = "fail";
//       }
//       setSendStatus({ ...status });
//     }));

//     setIsSubmitting(false);
//     setPage("done");
//     window.scrollTo(0, 0);
//   };

//   const handleExportPDF = () => {
//     if (!window.html2pdf) { alert("PDF library is still loading..."); return; }
//     setIsExporting(true);
//     const element = document.getElementById("pdf-report-container");
//     const opt = {
//       margin: [15, 15],
//       filename: `Report_${formData.district}_${formData.date}.pdf`,
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
//     };
//     window.html2pdf().from(element).set(opt).save().finally(() => setIsExporting(false));
//   };

//   const handleExcelExport = () => {
//     if (!window.XLSX) { alert("Excel library is still loading..."); return; }
//     const XLSX = window.XLSX;
//     const wb = XLSX.utils.book_new();
//     const officerRows = [[""], ["Officer Information"], ["District", formData.district], ["Name", formData.studentName], ["Position", formData.position], ["Date", formData.date]];

//     if (selectedSections.includes("s1")) {
//       const ws = XLSX.utils.aoa_to_sheet([["Approved", "Financial", "Programs", "Officers"], [s1.approved, s1.financial, s1.programs, s1.officers], ...officerRows]);
//       XLSX.utils.book_append_sheet(wb, ws, "Section 1");
//     }
//     if (selectedSections.includes("s2")) {
//       const ws = XLSX.utils.aoa_to_sheet([["Approved", "Financial", "Programs", "Officers"], [s2.approved, s2.financial, s2.programs, s2.officers], ...officerRows]);
//       XLSX.utils.book_append_sheet(wb, ws, "Section 2");
//     }
//     if (selectedSections.includes("s3")) {
//       const ws = XLSX.utils.aoa_to_sheet([["Approved", "Financial"], [s3.approved, s3.financial], ...officerRows]);
//       XLSX.utils.book_append_sheet(wb, ws, "Section 3");
//     }
//     if (selectedSections.includes("s4")) {
//       const headers = ["#", "DS", "GN", "Project", "Approved", "Actual", "Admin", "Financial", "Physical"];
//       const rows = projects.map((p, i) => [i + 1, p.pradeshiya, p.grama, p.name, p.approved, p.actual, p.admin, p.financial, p.physical]);
//       const ws = XLSX.utils.aoa_to_sheet([headers, ...rows, ...officerRows]);
//       XLSX.utils.book_append_sheet(wb, ws, "Projects");
//     }

//     XLSX.writeFile(wb, `Report_${formData.district}_${formData.date}.xlsx`);
//   };

//   return (
//     <div style={{ backgroundColor: '#f3f6fc', minHeight: '100vh', paddingBottom: '80px' }}>
//       <Header lang={lang} setLang={setLang} />
      
//       <div style={{ maxWidth: '1000px', margin: '-100px auto 0', padding: '0 20px', position: 'relative', zIndex: 10 }}>
//         {page === "form" && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//             <SectionCard title={t.personalInfo} icon="👤">
//               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
//                 <TextField label={t.nameLabel} value={formData.studentName} onChange={(v) => setFormData({ ...formData, studentName: v })} required />
//                 <TextField label={t.positionLabel} value={formData.position} onChange={(v) => setFormData({ ...formData, position: v })} required />
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//                   <label style={{ fontSize: '13px', fontWeight: '600', color: '#4b5563' }}>{t.districtLabel} *</label>
//                   <select 
//                     value={formData.district} 
//                     onChange={(e) => setFormData({ ...formData, district: e.target.value })}
//                     style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '14px', outline: 'none', backgroundColor: '#f9fafb' }}
//                   >
//                     <option value="">{t.allDistricts}</option>
//                     {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
//                   </select>
//                 </div>
//                 <TextField label={t.dateLabel} type="date" value={formData.date} onChange={(v) => setFormData({ ...formData, date: v })} required />
//               </div>
//             </SectionCard>

//             {section === 1 && (
//             <SectionCard title={t.sectionSelect} icon="📋">
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 {SECTION_OPTIONS.map(opt => {
//                   const checked = selectedSections.includes(opt.key);
//                   return (
//                     <label key={opt.key} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', border: checked ? '2px solid #2c4c8f' : '1px solid #e5e7eb', borderRadius: '12px', cursor: 'pointer', backgroundColor: checked ? '#f0f4ff' : 'white', transition: 'all 0.2s' }}>
//                       <input type="checkbox" checked={checked} onChange={() => setSelectedSections(p => p.includes(opt.key) ? p.filter(k => k !== opt.key) : [...p, opt.key])} style={{ width: '20px', height: '20px' }} />
//                       <span style={{ fontSize: '14px', fontWeight: checked ? '600' : '400', color: checked ? '#2c4c8f' : '#4b5563' }}>{opt.number}. {opt.label}</span>
//                     </label>
//                   );
//                 })}
//               </div>
//             </SectionCard>
//             )}

//             {section === 2 && selectedSections.includes("s1") && (
//               <SectionCard number="1" title={SECTION_OPTIONS[0].label}>
//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
//                   <TextField label="අනුමත ප්‍රතිපාදන මුදල (රු.)" value={s1.approved} onChange={(v) => setS1({ ...s1, approved: v })} />
//                   <TextField label="මූල්‍ය ප්‍රගතිය (රු.)" value={s1.financial} onChange={(v) => setS1({ ...s1, financial: v })} />
//                   <TextField label="වැඩසටහන් ගණන" value={s1.programs} onChange={(v) => setS1({ ...s1, programs: v })} />
//                   <TextField label="නිලධාරී සංඛ්‍යාව" value={s1.officers} onChange={(v) => setS1({ ...s1, officers: v })} />
//                 </div>
//               </SectionCard>
//             )}

//             {section === 2 && selectedSections.includes("s2") && (
//               <SectionCard number="2" title={SECTION_OPTIONS[1].label}>
//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
//                   <TextField label="අනුමත ප්‍රතිපාදන මුදල (රු.)" value={s2.approved} onChange={(v) => setS2({ ...s2, approved: v })} />
//                   <TextField label="මූල්‍ය ප්‍රගතිය (රු.)" value={s2.financial} onChange={(v) => setS2({ ...s2, financial: v })} />
//                   <TextField label="වැඩසටහන් ගණන" value={s2.programs} onChange={(v) => setS2({ ...s2, programs: v })} />
//                   <TextField label="නිලධාරී සංඛ්‍යාව" value={s2.officers} onChange={(v) => setS2({ ...s2, officers: v })} />
//                 </div>
//               </SectionCard>
//             )}

//             {section === 3 && selectedSections.includes("s3") && (
//               <SectionCard number="3" title={SECTION_OPTIONS[2].label}>
//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
//                   <TextField label="අනුමත ප්‍රතිපාදන මුදල (රු.)" value={s3.approved} onChange={(v) => setS3({ ...s3, approved: v })} />
//                   <TextField label="මූල්‍ය ප්‍රගතිය (රු.)" value={s3.financial} onChange={(v) => setS3({ ...s3, financial: v })} />
//                 </div>
//               </SectionCard>
//             )}

//             {section === 4 && selectedSections.includes("s4") && (
//               <SectionCard number="4" title={SECTION_OPTIONS[3].label}>
//                 <div style={{ overflowX: 'auto' }}>
//                   <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px', fontSize: '13px' }}>
//                     <thead>
//                       <tr style={{ backgroundColor: '#2c4c8f', color: 'white' }}>
//                         <th style={{ padding: '10px' }}>#</th>
//                         <th style={{ padding: '10px' }}>ප්‍රාදේශීය ලේකම්</th>
//                         <th style={{ padding: '10px' }}>ග්‍රාම නිලධාරී</th>
//                         <th style={{ padding: '10px' }}>ව්‍යාපෘතිය</th>
//                         <th style={{ padding: '10px' }}>අනුමත</th>
//                         <th style={{ padding: '10px' }}>වියදම</th>
//                         <th style={{ padding: '10px' }}>පරිපාලන</th>
//                         <th style={{ padding: '10px' }}>මූල්‍ය</th>
//                         <th style={{ padding: '10px' }}>භෞතික</th>
//                         <th style={{ padding: '10px' }}></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {projects.map((p, i) => (
//                         <tr key={p.id}>
//                           <td style={{ padding: '8px', textAlign: 'center' }}>{i + 1}</td>
//                           <td style={{ padding: '4px' }}><input value={p.pradeshiya} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, pradeshiya: e.target.value } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><input value={p.grama} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, grama: e.target.value } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><input value={p.name} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, name: e.target.value } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><input type="number" value={p.approved} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, approved: e.target.value } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><input type="number" value={p.actual} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, actual: e.target.value, financial: (parseFloat(e.target.value)||0) + (parseFloat(rj.admin)||0) } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><input type="number" value={p.admin} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, admin: e.target.value, financial: (parseFloat(rj.actual)||0) + (parseFloat(e.target.value)||0) } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '8px', fontWeight: 'bold' }}>{p.financial}</td>
//                           <td style={{ padding: '4px' }}><input value={p.physical} onChange={(e) => setProjects(prev => prev.map(rj => rj.id === p.id ? { ...rj, physical: e.target.value } : rj))} style={{ width: '90%', padding: '6px' }} /></td>
//                           <td style={{ padding: '4px' }}><button onClick={() => setProjects(prev => prev.filter(rj => rj.id !== p.id))} disabled={projects.length === 1} style={{ color: 'red' }}>✕</button></td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <button 
//                   onClick={() => setProjects([...projects, emptyProject()])}
//                   style={{ marginTop: '16px', padding: '10px 20px', backgroundColor: '#f0f4ff', color: '#2c4c8f', border: '1.5px dashed #2c4c8f', borderRadius: '10px', cursor: 'pointer', fontWeight: '600' }}
//                 >
//                   ＋ නව ව්‍යාපෘතියක් ඇතුළත් කරන්න
//                 </button>
//               </SectionCard>
//             )}

//             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//               <button 
//                 onClick={handleBack}
//                 disabled={section === 1}
//                 style={{ padding: '14px 40px', borderRadius: '50px', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 'bold', border: 'none', cursor: 'pointer', opacity: section === 1 ? 0.5 : 1 }}
//               >
//                 ← {t.back}
//               </button>
//               <button 
//                 onClick={handleNext}
//                 style={{ backgroundColor: '#2c4c8f', color: 'white', padding: '14px 60px', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px rgba(44,76,143,0.3)' }}
//               >
//                 {section === 4 ? t.summaryTitle : t.next} →
//               </button>
//             </div>
//           </div>
//         )}

//         {page === "summary" && (
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
//             <div style={{ textAlign: 'center', padding: '20px 0' }}>
//               <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b' }}>{t.summaryTitle}</h1>
//               <p style={{ color: '#64748b' }}>කරුණාකර සියලු විස්තර නිවැරදි දැයි පරීක්ෂා කර බලා ඉදිරිපත් කරන්න.</p>
//             </div>
            
//             <SectionCard title={t.personalInfo} icon="👤">
//               <SummaryRow label={t.nameLabel} value={formData.studentName} />
//               <SummaryRow label={t.positionLabel} value={formData.position} />
//               <SummaryRow label={t.districtLabel} value={formData.district} />
//               <SummaryRow label={t.dateLabel} value={formData.date} />
//             </SectionCard>

//             {SECTION_OPTIONS.filter(o => selectedSections.includes(o.key)).map(opt => (
//               <SectionCard key={opt.key} number={opt.number} title={opt.label}>
//                 {opt.key === "s1" && (
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
//                     <SummaryRow label="අනුමත ප්‍රතීපාදන" value={s1.approved} />
//                     <SummaryRow label="මූල්‍ය ප්‍රගතිය" value={s1.financial} />
//                     <SummaryRow label="වැඩසටහන් ගණන" value={s1.programs} />
//                     <SummaryRow label="නිලධාරී සංඛ්‍යාව" value={s1.officers} />
//                   </div>
//                 )}
//                 {opt.key === "s2" && (
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
//                     <SummaryRow label="අනුමත ප්‍රතීපාදන" value={s2.approved} />
//                     <SummaryRow label="මූල්‍ය ප්‍රගතිය" value={s2.financial} />
//                     <SummaryRow label="වැඩසටහන් ගණන" value={s2.programs} />
//                     <SummaryRow label="නිලධාරී සංඛ්‍යාව" value={s2.officers} />
//                   </div>
//                 )}
//                 {opt.key === "s3" && (
//                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
//                     <SummaryRow label="අනුමත ප්‍රතීපාදන" value={s3.approved} />
//                     <SummaryRow label="මූල්‍ය ප්‍රගතිය" value={s3.financial} />
//                   </div>
//                 )}
//                 {opt.key === "s4" && (
//                    <div style={{ fontSize: '13px', color: '#64748b' }}>ව්‍යාපෘති {projects.length} ක් ඇතුළත් කර ඇත.</div>
//                 )}
//               </SectionCard>
//             ))}

//             <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
//               <button 
//                 onClick={() => setPage("form")}
//                 style={{ padding: '14px 40px', borderRadius: '50px', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
//               >
//                 ← {t.back}
//               </button>
//               <button 
//                 onClick={handleSendToSheets}
//                 disabled={isSubmitting}
//                 style={{ padding: '14px 40px', borderRadius: '50px', backgroundColor: '#2c4c8f', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px rgba(44,76,143,0.3)' }}
//               >
//                 {isSubmitting ? "යොමු කරමින්..." : t.submit}
//               </button>
//             </div>
//           </div>
//         )}

//         {page === "done" && (
//           <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'white', borderRadius: '32px', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
//             <div style={{ width: '80px', height: '80px', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 30px' }}>✓</div>
//             <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '16px' }}>{t.successMsg}</h1>
//             <p style={{ color: '#64748b', marginBottom: '40px' }}>ඔබේ දත්ත සාර්ථකව Google Sheets වෙත යොමු කරන ලදී.</p>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '32px', textAlign: 'left' }}>
//               {selectedSections.map(s => (
//                 <div key={s} style={{ padding: '8px 12px', borderRadius: '10px', border: '1px solid', backgroundColor: sendStatus[s] === 'ok' ? '#f0fff4' : '#fff5f5', borderColor: sendStatus[s] === 'ok' ? '#9ae6b4' : '#feb2b2', color: sendStatus[s] === 'ok' ? '#276749' : '#c53030', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
//                   <span>{sendStatus[s] === 'ok' ? "✅" : "⏳"}</span>
//                   <span>{SECTION_OPTIONS.find(o => o.key === s).number}. Section</span>
//                 </div>
//               ))}
//             </div>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
//               <button 
//                 onClick={handleExportPDF}
//                 style={{ padding: '14px 30px', borderRadius: '50px', backgroundColor: '#1e293b', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
//               >
//                 ⬇ {t.downloadPdf}
//               </button>
//               <button 
//                 onClick={handleExcelExport}
//                 style={{ padding: '14px 30px', borderRadius: '50px', backgroundColor: '#166534', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
//               >
//                 ⬇ {t.downloadExcel}
//               </button>
//               <button 
//                 onClick={() => { setFormData({ district: "", studentName: "", position: "", date: "" }); setSelectedSections([]); setPage("form"); setSection(1); }}
//                 style={{ padding: '14px 30px', borderRadius: '50px', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
//               >
//                 ↻ {t.newForm}
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Hidden PDF Template */}
//       <div id="pdf-report-container" style={{ position: 'absolute', left: '-9999px', width: '210mm' }}>
//         <div style={{ padding: '60px', backgroundColor: 'white', color: 'black', fontFamily: 'serif', lineHeight: '1.6' }}>
//           <div style={{ textAlign: 'center', marginBottom: '50px', borderBottom: '3px solid black', paddingBottom: '30px' }}>
//             <h1 style={{ margin: '0', fontSize: '28px', textTransform: 'uppercase' }}>{t.title}</h1>
//             <p style={{ margin: '10px 0 0', fontSize: '18px', fontStyle: 'italic' }}>{t.subtitle}</p>
//           </div>

//           <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px' }}>
//             <tbody>
//               <tr>
//                 <td style={{ padding: '12px', border: '1px solid #ddd', width: '30%', fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>{t.nameLabel}</td>
//                 <td style={{ padding: '12px', border: '1px solid #ddd' }}>{formData.studentName}</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>{t.positionLabel}</td>
//                 <td style={{ padding: '12px', border: '1px solid #ddd' }}>{formData.position}</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>{t.districtLabel}</td>
//                 <td style={{ padding: '12px', border: '1px solid #ddd' }}>{formData.district}</td>
//               </tr>
//               <tr>
//                 <td style={{ padding: '12px', border: '1px solid #ddd', fontWeight: 'bold', backgroundColor: '#f9f9f9' }}>{t.dateLabel}</td>
//                 <td style={{ padding: '12px', border: '1px solid #ddd' }}>{formData.date}</td>
//               </tr>
//             </tbody>
//           </table>

//           {selectedSections.includes("s1") && (
//             <div style={{ marginBottom: '30px' }}>
//               <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px' }}>1. {SECTION_OPTIONS[0].label}</h3>
//               <p>Approved: {s1.approved} | Financial: {s1.financial} | Programs: {s1.programs} | Officers: {s1.officers}</p>
//             </div>
//           )}
//           {selectedSections.includes("s2") && (
//             <div style={{ marginBottom: '30px' }}>
//               <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px' }}>2. {SECTION_OPTIONS[1].label}</h3>
//               <p>Approved: {s2.approved} | Financial: {s2.financial} | Programs: {s2.programs} | Officers: {s2.officers}</p>
//             </div>
//           )}
//           {selectedSections.includes("s3") && (
//             <div style={{ marginBottom: '30px' }}>
//               <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px' }}>3. {SECTION_OPTIONS[2].label}</h3>
//               <p>Approved: {s3.approved} | Financial: {s3.financial}</p>
//             </div>
//           )}
//           {selectedSections.includes("s4") && (
//             <div style={{ marginBottom: '30px' }}>
//               <h3 style={{ borderBottom: '1px solid #000', paddingBottom: '5px' }}>4. {SECTION_OPTIONS[3].label}</h3>
//               <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
//                 <thead>
//                   <tr style={{ backgroundColor: '#f0f0f0' }}>
//                     <th style={{ border: '1px solid #ccc', padding: '8px' }}>Project</th>
//                     <th style={{ border: '1px solid #ccc', padding: '8px' }}>Approved</th>
//                     <th style={{ border: '1px solid #ccc', padding: '8px' }}>Financial</th>
//                     <th style={{ border: '1px solid #ccc', padding: '8px' }}>Physical</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {projects.map((p, i) => (
//                     <tr key={i}>
//                       <td style={{ border: '1px solid #ccc', padding: '8px' }}>{p.name}</td>
//                       <td style={{ border: '1px solid #ccc', padding: '8px' }}>{p.approved}</td>
//                       <td style={{ border: '1px solid #ccc', padding: '8px' }}>{p.financial}</td>
//                       <td style={{ border: '1px solid #ccc', padding: '8px' }}>{p.physical}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}

//           <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '20px', fontSize: '10px', textAlign: 'center', color: '#999' }}>
//             Generated on {new Date().toLocaleString()} | Rural Development Bureau Progress Report
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Header({ lang, setLang, isClosed }) {
//   const t = T[lang];
//   return (
//     <div style={{ backgroundColor: '#2c4c8f', padding: '40px 48px', position: 'relative', overflow: 'hidden' }} className={!isClosed ? "pb-48" : ""}>
//       <div style={{ maxWidth: '1000px', margin: '0 auto', flexWrap: 'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', position: 'relative', zIndex: 10 }}>
//         <div style={{ textAlign: 'left' }}>
//           <h1 style={{ color: 'white', fontSize: '26px', fontWeight: '800', margin: 0, lineHeight: 1.2 }}>{t.subtitle} — {t.title}</h1>
//           <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontStyle: 'italic', marginTop: '6px' }}>Monthly Progress Report — Rural Development Bureau</p>
//         </div>
//         <div style={{ backgroundColor: 'white', padding: '4px', borderRadius: '50px', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
//           <button onClick={() => setLang("si")} style={{ padding: '8px 20px', borderRadius: '50px', backgroundColor: lang === 'si' ? '#f1f5f9' : 'transparent', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer', color: lang === 'si' ? '#1e293b' : '#64748b' }}>සිංහල</button>
//           <button onClick={() => setLang("en")} style={{ padding: '8px 20px', borderRadius: '50px', backgroundColor: lang === 'en' ? '#f1f5f9' : 'transparent', border: 'none', fontSize: '13px', fontWeight: '700', cursor: 'pointer', color: lang === 'en' ? '#1e293b' : '#64748b' }}>English</button>
//         </div>
//       </div>
//     </div>
//   );
// }









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
    councils: "මූල්‍ය ප්‍රගතිය වාර්තා කරනු ලබන ප්‍රජා සංවර්ධන සභා ගණන",
    councilsPlaceholder: "ගණන ඇතුළත් කරන්න...",
    bills: "අතැති බිල්පත් (රු.)",
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
    councils: "No. of Community Development Councils Reporting Financial Progress",
    councilsPlaceholder: "Enter count...",
    bills: "Bills in Hand (Rs.)",
    pdfTitle: "Monthly Progress Report — Rural Development Bureau",
  },
};

//const SECTION_KEYS = ["s1","s2","s3","s4"];

const GOOGLE_SCRIPT_URLS = {
  s1: "https://script.google.com/macros/s/AKfycbwVqn05wMXH12htLf_aF7FKxuH5V0eZCoMXcuwOpptMrNWUcYQw2eBmRRD0UWuZbN2x/exec",
  s2: "https://script.google.com/macros/s/AKfycbyvDWhYUuWvucV5lbgwPEV8RGPgJXAhvNID4fXB5zfdGimw3SSpDmnI4MpCizmt0wFd/exec",
  s3: "https://script.google.com/macros/s/AKfycbwaY8Fy-u-TnPacUQKvOjYveCZM3CcVXZ7mCGvLEHY4SmiYwHnufsnjDOb1vADhPpiV/exec",
  s4: "https://script.google.com/macros/s/AKfycbwSkYxZFH_jwNKI75nbLQB12aQzshSop5jb7gJced6NVU49rpJZu1UaUJPF_QpH_Set/exec",

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
function TextField({ label, name, value, onChange, placeholder, required = false, type = "text" }) {
  return (
    <div style={styles.fieldRow}>
      <label style={styles.fieldLabel}>{label}{required && <span style={{color:"#c53030"}}> *</span>}</label>
      <input type={type} name={name} value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder} required={required}
        step={type === "number" ? "any" : undefined}
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
  approved: "", actual: "", admin: "", financial: "", physical: "", bills: "",
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
    s1_approved: "", s1_financial: "", s1_bills: "", s1_programs: "", s1_officers: "",
    s2_approved: "", s2_financial: "", s2_bills: "", s2_programs: "", s2_officers: "",
    s3_approved: "", s3_financial: "", s3_bills: "", s3_councils: "",
    s5_bills: "",
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
    if (selectedSections.includes("s1")) jobs.push({ key: "s1", payload: { ...officer, approved: formData.s1_approved, financial: formData.s1_financial, bills: formData.s1_bills, programs: formData.s1_programs, officers: formData.s1_officers } });
    if (selectedSections.includes("s2")) jobs.push({ key: "s2", payload: { ...officer, approved: formData.s2_approved, financial: formData.s2_financial, bills: formData.s2_bills, programs: formData.s2_programs, officers: formData.s2_officers } });
    if (selectedSections.includes("s3")) jobs.push({ key: "s3", payload: { ...officer, approved: formData.s3_approved, financial: formData.s3_financial, bills: formData.s3_bills, councils: formData.s3_councils } });
    if (selectedSections.includes("s4")) jobs.push({ key: "s4", payload: { ...officer, projects: projects.map((p, i) => ({ no: i+1, pradeshiya: p.pradeshiya, grama: p.grama, name: p.name, approved: p.approved, actual: p.actual, admin: p.admin, financial: p.financial, physical: p.physical, bills: p.bills })) } });

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
    setFormData({ district:"", studentName:"", position:"", date:"", s1_approved:"", s1_financial:"", s1_bills:"", s1_programs:"", s1_officers:"", s2_approved:"", s2_financial:"", s2_bills:"", s2_programs:"", s2_officers:"", s3_approved:"", s3_financial:"", s3_bills:"", s3_councils:"", s5_bills:"" });
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
              <SummaryRow label={`③ ${t.bills}`} value={formData.s1_bills} />
              <SummaryRow label={`④ ${t.programs}`} value={formData.s1_programs} />
              <SummaryRow label={`⑤ ${t.officers}`} value={formData.s1_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s2") && (
            <SectionCard number="2" title={t.s2Label}>
              <SummaryRow label={`① ${t.approved}`} value={formData.s2_approved} />
              <SummaryRow label={`② ${t.financial}`} value={formData.s2_financial} />
              <SummaryRow label={`③ ${t.bills}`} value={formData.s2_bills} />
              <SummaryRow label={`④ ${t.programs}`} value={formData.s2_programs} />
              <SummaryRow label={`⑤ ${t.officers}`} value={formData.s2_officers} />
            </SectionCard>
          )}
          {selectedSections.includes("s3") && (
            <SectionCard number="3" title={t.s3Label}>
              <SummaryRow label={`① ${t.approved}`} value={formData.s3_approved} />
              <SummaryRow label={`② ${t.financial}`} value={formData.s3_financial} />
              <SummaryRow label={`③ ${t.bills}`} value={formData.s3_bills} />
              <SummaryRow label={`④ ${t.councils}`} value={formData.s3_councils} />
            </SectionCard>
          )}

          {selectedSections.includes("s4") && (
            <SectionCard number="4" title={t.s4Label}>
              <div style={styles.summaryTableWrap}>
                <table style={styles.summaryTable}>
                  <thead>
                    <tr>{[t.noCol,t.divSec,t.gnDiv,t.projName,t.approvedAmt,t.actualCost,t.adminCost,t.financialProg,t.bills,t.physicalProg].map(h=><th key={h} style={styles.sTh}>{h}</th>)}</tr>
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
                        <td style={{...styles.sTd,fontWeight:700,color:"#6b1a1a"}}>{p.financial?`රු.${Number(p.financial).toLocaleString()}`:"—"}</td>
                        <td style={styles.sTd}>{p.bills?`රු.${Number(p.bills).toLocaleString()}`:"—"}</td>
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
            <TextField label={`① ${t.approved}`} name="s1_approved" value={formData.s1_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} type="number" />
            <TextField label={`② ${t.financial}`} name="s1_financial" value={formData.s1_financial} onChange={handleChange} placeholder={t.financialPlaceholder} type="number" />
            <TextField label={`③ ${t.bills}`} name="s1_bills" value={formData.s1_bills} onChange={handleChange} placeholder={t.billsPlaceholder} type="number" />
            <TextField label={`④ ${t.programs}`} name="s1_programs" value={formData.s1_programs} onChange={handleChange} placeholder={t.programsPlaceholder} type="number" />
            <TextField label={`⑤ ${t.officers}`} name="s1_officers" value={formData.s1_officers} onChange={handleChange} placeholder={t.officersPlaceholder} type="number" />
          </SectionCard>
        )}
        {selectedSections.includes("s2") && (
          <SectionCard number="2" title={t.s2Label}>
            <TextField label={`① ${t.approved}`} name="s2_approved" value={formData.s2_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} type="number" />
            <TextField label={`② ${t.financial}`} name="s2_financial" value={formData.s2_financial} onChange={handleChange} placeholder={t.financialPlaceholder} type="number" />
            <TextField label={`③ ${t.bills}`} name="s2_bills" value={formData.s2_bills} onChange={handleChange} placeholder={t.billsPlaceholder} type="number" />
            <TextField label={`④ ${t.programs}`} name="s2_programs" value={formData.s2_programs} onChange={handleChange} placeholder={t.programsPlaceholder} type="number" />
            <TextField label={`⑤ ${t.officers}`} name="s2_officers" value={formData.s2_officers} onChange={handleChange} placeholder={t.officersPlaceholder} type="number" />
          </SectionCard>
        )}
        {selectedSections.includes("s3") && (
          <SectionCard number="3" title={t.s3Label}>
            <TextField label={`① ${t.approved}`} name="s3_approved" value={formData.s3_approved} onChange={handleChange} placeholder={t.approvedPlaceholder} type="number" />
            <TextField label={`② ${t.financial}`} name="s3_financial" value={formData.s3_financial} onChange={handleChange} placeholder={t.financialPlaceholder} type="number" />
            <TextField label={`③ ${t.bills}`} name="s3_bills" value={formData.s3_bills} onChange={handleChange} placeholder={t.billsPlaceholder} type="number" />
            <TextField label={`④ ${t.councils}`} name="s3_councils" value={formData.s3_councils} onChange={handleChange} placeholder={t.councilsPlaceholder} type="number" />
          </SectionCard>
        )}

        {selectedSections.includes("s4") && (
          <SectionCard number="4" title={t.s4Label}>
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <colgroup>
                  <col style={{width:"4%"}}/><col style={{width:"12%"}}/><col style={{width:"10%"}}/>
                  <col style={{width:"12%"}}/><col style={{width:"10%"}}/><col style={{width:"10%"}}/>
                  <col style={{width:"9%"}}/><col style={{width:"10%"}}/><col style={{width:"10%"}}/>
                  <col style={{width:"9%"}}/><col style={{width:"4%"}}/>
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
                    <th style={styles.th}>{t.bills}</th>
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
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" step="any" value={proj.approved} onChange={e=>handleProjectChange(proj.id,"approved",e.target.value)} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" step="any" value={proj.actual} onChange={e=>{const v=e.target.value;const f=(parseFloat(v)||0)+(parseFloat(proj.admin)||0);handleProjectChange(proj.id,"actual",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" step="any" value={proj.admin} onChange={e=>{const v=e.target.value;const f=(parseFloat(proj.actual)||0)+(parseFloat(v)||0);handleProjectChange(proj.id,"admin",v);handleProjectChange(proj.id,"financial",f||"");}} placeholder="0"/></td>
                      
                      <td style={{...styles.td,background:"#eff6ff"}}>
                        <div style={styles.calcCell}>
                          <span style={styles.calcValue}>{proj.financial?`රු.${Number(proj.financial).toLocaleString()}`:"—"}</span>
                          <span style={styles.calcNote}>{t.autoCalc}</span>
                        </div>
                      </td>
                      <td style={styles.td}><input style={styles.tableInput} type="number" min="0" step="any" value={proj.bills} onChange={e=>handleProjectChange(proj.id,"bills",e.target.value)} placeholder="0"/></td>
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
          <div style={{...styles.headerCenter, display:"flex", alignItems:"center", justifyContent:"center", gap:24}}>
            <img src="/favicon.ico" alt="Logo" style={styles.headerLogo} />
            <div>
              <h1 style={styles.mainTitle}>{t.mainTitle}</h1>
              <p style={styles.subtitle}>{t.subtitle}</p>
            </div>
          </div>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </div>
  );
}

/* ── PDF ──────────────────────────────────────────────── */
function buildPrintHTML(formData, selectedSections, projects, t, lang) {
  const row = (label, value) => `<tr><td style="padding:8px 12px;font-weight:600;color:#000;width:40%;border:1px solid #e2e8f0;">${label}</td><td style="padding:8px 12px;color:#000;border:1px solid #e2e8f0;">${value||"—"}</td></tr>`;
  const sHead = (num, title) => `<div style="background:linear-gradient(90deg,#6b1a1a,#c47a2a);color:#fff;padding:14px 20px;border-radius:10px 10px 0 0;display:flex;align-items:center;gap:12px;margin-top:20px;">
    ${num?`<span style="width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,0.2);display:inline-flex;align-items:center;justify-content:center;font-weight:700;">${num}</span>`:""}
    <span style="font-weight:600;font-size:14px;">${title}</span></div><div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;padding:16px;">`;

  let body = `${sHead("",t.officerSummary)}<table style="width:100%;border-collapse:collapse;">
    ${row(t.district, formData.district ? (lang === "en" ? (formData.district.split("|")[1] || formData.district) : (formData.district.split("|")[0] || formData.district)) : "")}${row(t.name,formData.studentName)}${row(t.position,formData.position)}${row(t.date,formData.date)}
  </table></div>`;

  if (selectedSections.includes("s1")) body += `${sHead("1",t.s1Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s1_approved)}${row(`② ${t.financial}`,formData.s1_financial)}${row(`③ ${t.bills}`,formData.s1_bills)}${row(`④ ${t.programs}`,formData.s1_programs)}${row(`⑤ ${t.officers}`,formData.s1_officers)}</table></div>`;
  if (selectedSections.includes("s2")) body += `${sHead("2",t.s2Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s2_approved)}${row(`② ${t.financial}`,formData.s2_financial)}${row(`③ ${t.bills}`,formData.s2_bills)}${row(`④ ${t.programs}`,formData.s2_programs)}${row(`⑤ ${t.officers}`,formData.s2_officers)}</table></div>`;
  if (selectedSections.includes("s3")) body += `${sHead("3",t.s3Label)}<table style="width:100%;border-collapse:collapse;">
    ${row(`① ${t.approved}`,formData.s3_approved)}${row(`② ${t.financial}`,formData.s3_financial)}${row(`③ ${t.bills}`,formData.s3_bills)}${row(`④ ${t.councils}`,formData.s3_councils)}</table></div>`;

  if (selectedSections.includes("s4")) {
    const projRows = projects.map((p,i)=>`<tr style="background:${i%2===0?"#f7fafc":"#fff"}">
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:center;font-size:10px;">${i+1}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;font-size:10px;">${p.pradeshiya||"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;font-size:10px;">${p.grama||"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;font-size:10px;">${p.name||"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:right;font-size:10px;">${p.approved?`රු.${Number(p.approved).toLocaleString()}`:"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:right;font-size:10px;">${p.actual?`රු.${Number(p.actual).toLocaleString()}`:"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:right;font-size:10px;">${p.admin?`රු.${Number(p.admin).toLocaleString()}`:"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:right;font-weight:700;color:#000;font-size:10px;">${p.financial?`රු.${Number(p.financial).toLocaleString()}`:"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;text-align:right;font-size:10px;">${p.bills?`රු.${Number(p.bills).toLocaleString()}`:"—"}</td>
      <td style="padding:4px 5px;border:1px solid #e2e8f0;font-size:10px;">${p.physical||"—"}</td>
    </tr>`).join("");
    body += `${sHead("4",t.s4Label)}<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;font-size:10px;table-layout:fixed;">
      <colgroup><col style="width:4%"/><col style="width:12%"/><col style="width:10%"/><col style="width:12%"/><col style="width:10%"/><col style="width:10%"/><col style="width:10%"/><col style="width:10%"/><col style="width:10%"/><col style="width:12%"/></colgroup>
      <thead><tr style="background:linear-gradient(135deg,#6b1a1a,#c47a2a);color:#fff;">
        ${[t.noCol,t.divSec,t.gnDiv,t.projName,t.approvedAmt,t.actualCost,t.adminCost,t.financialProg,t.bills,t.physicalProg].map(h=>`<th style="padding:6px 4px;border:1px solid rgba(255,255,255,0.2);text-align:center;font-size:9px;word-break:break-word;">${h}</th>`).join("")}
      </tr></thead><tbody>${projRows}</tbody></table></div></div>`;
  }

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${t.pdfTitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;700&display=swap');
    *{box-sizing:border-box;}
    body{font-family:'Noto Sans Sinhala',sans-serif;margin:0;padding:24px;color:#000;background:#fff;}
    h1{color:#000;font-size:18px;margin-bottom:16px;}
    @media print{body{padding:12px;}button{display:none;}@page{margin:10mm;size:A4 landscape;}}
  </style></head>
  <body><h1>${t.pdfTitle}</h1>${body}
  <script>window.onafterprint=function(){window.close()};</script>
  </body></html>`;
}

/* ── Styles ───────────────────────────────────────────── */
const styles = {
  container:{ minHeight:"100vh", background:"linear-gradient(135deg,#fdf2e9 0%,#f8e8d4 100%)", paddingBottom:60 },
  header:{ background:"linear-gradient(#6b1a1a,#6b1a1a 0%,#6b1a1a 100%)", padding:"32px 40px", position:"relative", overflow:"hidden", marginBottom:40, boxShadow:"0 8px 32px rgba(107,26,26,0.25)" },
  headerAccent:{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(255,255,255,0.07)" },
  headerContent:{ position:"relative", zIndex:1, maxWidth:1400, margin:"0 auto" },
  headerTop:{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:20, flexWrap:"wrap" },
  headerLogo:{ width:110, height:110, borderRadius:"50%", objectFit:"contain", background:"rgba(228, 42, 42, 0.15)", padding:4, flexShrink:0 },
  headerCenter:{ flex:1, textAlign:"center" },
  mainTitle:{ color:"#ffffff", fontSize:"clamp(16px,2.2vw,24px)", fontWeight:700, margin:0, lineHeight:1.3 },
  subtitle:{ color:"rgba(255,255,255,0.65)", fontSize:14, margin:"6px 0 0", fontStyle:"italic",  },
  langBar:{ display:"flex", gap:6, flexShrink:0 },
  langBtn:{ padding:"8px 20px", borderRadius:50, border:"2px solid rgba(255,255,255,0.4)", background:"transparent", color:"#fff", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" },
  langBtnActive:{ background:"#ffffff", color:"#6b1a1a", border:"2px solid #ffffff" },
  form:{ maxWidth:1400, margin:"0 auto", padding:"0 20px" },
  sectionCard:{ background:"#ffffff", borderRadius:16, overflow:"hidden", marginBottom:24, boxShadow:"0 2px 16px rgba(0,0,0,0.07)", border:"1px solid #e2e8f0" },
  sectionHeader:{ background:"linear-gradient(90deg,#6b1a1a,#c47a2a)", padding:"18px 28px", display:"flex", alignItems:"center", gap:14 },
  sectionNumber:{ width:36, height:36, borderRadius:"50%", background:"rgba(255,255,255,0.2)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700, fontSize:16, flexShrink:0 },
  sectionTitle:{ color:"#ffffff", fontSize:"clamp(13px,2vw,15px)", fontWeight:600, margin:0, lineHeight:1.4 },
  sectionBody:{ padding:"20px 28px", display:"flex", flexDirection:"column", gap:12 },
  fieldRow:{ display:"flex", flexDirection:"row", alignItems:"center", gap:16, background:"#f7fafc", borderRadius:10, padding:"12px 18px", border:"1px solid #e2e8f0" },
  fieldLabel:{ fontSize:13.5, fontWeight:600, color:"#2d3748", lineHeight:1.4, minWidth:300, flexShrink:0 },
  fieldInput:{ padding:"9px 13px", border:"1.5px solid #cbd5e0", borderRadius:8, fontSize:14, color:"#2d3748", background:"#ffffff", outline:"none", fontFamily:"inherit", flex:1, minWidth:0, boxSizing:"border-box" },
  selectorBox:{ background:"#fef3e2", borderRadius:12, padding:"18px 20px", border:"1.5px solid #f6c87a" },
  selectorHeader:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:14, flexWrap:"wrap", gap:10 },
  selectorTitle:{ fontSize:14, fontWeight:700, color:"#6b1a1a" },
  selectorActions:{ display:"flex", gap:8 },
  selectAllBtn:{ background:"#6b1a1a", color:"#fff", border:"none", borderRadius:20, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  clearAllBtn:{ background:"#fff", color:"#c53030", border:"1.5px solid #fed7d7", borderRadius:20, padding:"6px 16px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  checkboxList:{ display:"flex", flexDirection:"column", gap:10 },
  checkboxItem:{ display:"flex", alignItems:"center", gap:12, background:"#ffffff", borderRadius:10, padding:"12px 16px", border:"1.5px solid #f6c87a", cursor:"pointer", userSelect:"none" },
  checkboxItemActive:{ background:"#fef3e2", border:"1.5px solid #c47a2a" },
  checkboxBox:{ width:22, height:22, borderRadius:6, border:"2px solid #d4a574", background:"#ffffff", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  checkboxBoxChecked:{ background:"#6b1a1a", border:"2px solid #6b1a1a" },
  checkmark:{ color:"#ffffff", fontSize:13, fontWeight:700, lineHeight:1 },
  checkboxContent:{ display:"flex", alignItems:"center", gap:10 },
  checkboxNumber:{ width:26, height:26, borderRadius:"50%", background:"#6b1a1a", color:"#ffffff", fontSize:12, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  checkboxLabel:{ fontSize:13.5, fontWeight:500, color:"#2d3748", lineHeight:1.4 },
  selectionBadge:{ marginTop:12, background:"#6b1a1a", color:"#ffffff", borderRadius:20, padding:"5px 14px", fontSize:12, fontWeight:600, display:"inline-block" },
  tableWrapper:{ overflowX:"auto", borderRadius:10, border:"1.5px solid #d4a574", marginBottom:16, width:"100%" },
  table:{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:1400, tableLayout:"fixed" },
  th:{ background:"linear-gradient(135deg,#6b1a1a,#c47a2a)", color:"#ffffff", padding:"14px 12px", textAlign:"center", fontWeight:700, fontSize:12, lineHeight:1.5, borderRight:"1px solid rgba(255,255,255,0.15)", whiteSpace:"normal", wordBreak:"keep-all", verticalAlign:"middle" },
  thEn:{ fontWeight:400, fontSize:10, opacity:0.8, display:"block", fontStyle:"italic" },
  trEven:{ background:"#fdf8f3" }, trOdd:{ background:"#ffffff" },
  td:{ padding:"8px 6px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", verticalAlign:"middle" },
  tdCenter:{ padding:"8px 6px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", textAlign:"center", verticalAlign:"middle", fontWeight:600, color:"#4a5568", fontSize:13 },
  tableInput:{ width:"100%", padding:"8px 10px", border:"1.5px solid #cbd5e0", borderRadius:6, fontSize:13, color:"#2d3748", background:"transparent", outline:"none", fontFamily:"inherit", boxSizing:"border-box" },
  calcCell:{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, padding:"4px" },
  calcValue:{ fontSize:13, fontWeight:700, color:"#6b1a1a", whiteSpace:"nowrap" },
  calcNote:{ fontSize:9, color:"#718096", fontStyle:"italic" },
  deleteBtn:{ background:"#fff5f5", color:"#c53030", border:"1.5px solid #fed7d7", borderRadius:"50%", width:28, height:28, cursor:"pointer", fontSize:13, fontWeight:700, display:"inline-flex", alignItems:"center", justifyContent:"center" },
  addRowSection:{ display:"flex", alignItems:"center", justifyContent:"space-between", marginTop:4 },
  addRowBtn:{ background:"linear-gradient(135deg,#fef3e2,#f6c87a)", color:"#6b1a1a", border:"1.5px dashed #d4a574", borderRadius:10, padding:"10px 22px", fontSize:13.5, fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center", gap:8, fontFamily:"inherit" },
  addIcon:{ fontSize:18, fontWeight:700, color:"#8b3a1a" },
  rowCount:{ fontSize:13, color:"#718096", fontWeight:500 },
  submitSection:{ display:"flex", justifyContent:"center", marginTop:12 },
  submitButton:{ background:"linear-gradient(135deg,#6b1a1a,#c47a2a)", color:"#ffffff", border:"none", padding:"16px 48px", borderRadius:50, fontSize:16, fontWeight:700, cursor:"pointer", display:"flex", alignItems:"center", gap:10, boxShadow:"0 6px 24px rgba(107,26,26,0.35)", fontFamily:"inherit" },
  submitArrow:{ fontSize:20 },
  noticeBar:{ display:"flex", alignItems:"center", gap:12, background:"#fffbeb", border:"1.5px solid #f6e05e", borderRadius:12, padding:"14px 20px", marginBottom:24, fontSize:14, color:"#744210" },
  noticeIcon:{ fontSize:20, flexShrink:0 },
  summaryRow:{ display:"flex", alignItems:"center", gap:16, background:"#f7fafc", borderRadius:10, padding:"12px 18px", border:"1px solid #e2e8f0" },
  summaryLabel:{ fontSize:13.5, fontWeight:600, color:"#4a5568", minWidth:320, flexShrink:0 },
  summaryValue:{ fontSize:14, fontWeight:600, color:"#6b1a1a" },
  summaryTableWrap:{ overflowX:"auto", borderRadius:10, border:"1.5px solid #d4a574" },
  summaryTable:{ width:"100%", borderCollapse:"collapse", fontSize:13, minWidth:800 },
  sTh:{ background:"linear-gradient(135deg,#6b1a1a,#c47a2a)", color:"#fff", padding:"10px 10px", textAlign:"center", fontWeight:700, fontSize:12, borderRight:"1px solid rgba(255,255,255,0.15)" },
  sTd:{ padding:"9px 10px", borderBottom:"1px solid #e2e8f0", borderRight:"1px solid #e2e8f0", textAlign:"center", fontSize:13, color:"#2d3748", verticalAlign:"middle" },
  summaryActions:{ display:"flex", justifyContent:"center", gap:12, marginTop:8, flexWrap:"wrap", paddingBottom:20 },
  backBtn:{ background:"#ffffff", color:"#4a5568", border:"1.5px solid #cbd5e0", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"inherit" },
  pdfBtn:{ background:"linear-gradient(135deg,#c05621,#dd6b20)", color:"#ffffff", border:"none", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(192,86,33,0.3)" },
  sendBtn:{ background:"linear-gradient(135deg,#6b1a1a,#c47a2a)", color:"#ffffff", border:"none", padding:"14px 28px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 16px rgba(107,26,26,0.35)" },
  centeredPage:{ display:"flex", justifyContent:"center", padding:"40px 20px" },
  doneCard:{ background:"#ffffff", borderRadius:20, padding:"52px 40px", textAlign:"center", boxShadow:"0 8px 40px rgba(0,0,0,0.1)", maxWidth:520, width:"100%" },
  doneIcon:{ width:72, height:72, borderRadius:"50%", color:"#ffffff", fontSize:32, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px" },
  doneTitle:{ fontSize:22, fontWeight:700, color:"#6b1a1a", margin:"0 0 20px" },
  statusGrid:{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 },
  statusChip:{ display:"flex", alignItems:"center", gap:12, borderRadius:12, padding:"12px 18px", border:"1.5px solid", fontSize:14, fontWeight:500 },
  chipOk:{ background:"#f0fff4", borderColor:"#9ae6b4", color:"#276749" },
  chipFail:{ background:"#fff5f5", borderColor:"#feb2b2", color:"#c53030" },
  chipPending:{ background:"#fffff0", borderColor:"#faf089", color:"#744210" },
  doneActions:{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" },
  newBtn:{ background:"linear-gradient(135deg,#6b1a1a,#c47a2a)", color:"#ffffff", border:"none", padding:"14px 24px", borderRadius:50, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" },
};