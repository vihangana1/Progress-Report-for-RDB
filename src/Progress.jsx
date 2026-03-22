import { useState } from "react";

const sectionStyles = {
  fontFamily: "'Noto Sans Sinhala', 'Iskoola Pota', sans-serif",
};

const SECTION_OPTIONS = [
  {
    key: "s1",
    label: "දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන",
    number: "1",
  },
  {
    key: "s2",
    label: "ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන",
    number: "2",
  },
  {
    key: "s3",
    label: "ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම",
    number: "3",
  },
  {
    key: "s4",
    label: "ව්‍යාපෘති ක්‍රියාත්මක කිරීම",
    number: "4",
  },
];

function TextField({ label, name, value, onChange, placeholder = "ඇතුළත් කරන්න..." }) {
  return (
    <div style={styles.fieldRow}>
      <label style={styles.fieldLabel}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        style={styles.fieldInput}
      />
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

const emptyProject = () => ({
  id: Date.now() + Math.random(),
  pradeshiya: "",
  grama: "",
  name: "",
  approved: "",
  actual: "",
  admin: "",
  financial: "",
  physical: "",
});

export default function Progress() {
  const [formData, setFormData] = useState({
    district: "",
    studentName: "",
    position: "",
    date: "",
    s1_approved: "",
    s1_financial: "",
    s1_programs: "",
    s1_officers: "",
    s2_approved: "",
    s2_financial: "",
    s2_programs: "",
    s2_officers: "",
    s3_approved: "",
    s3_financial: "",
  });

  const [selectedSections, setSelectedSections] = useState([]);
  const [projects, setProjects] = useState([emptyProject()]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleText = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSection = (key) => {
    setSelectedSections((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const selectAll = () => {
    setSelectedSections(SECTION_OPTIONS.map((s) => s.key));
  };

  const clearAll = () => {
    setSelectedSections([]);
  };

  const handleProjectChange = (id, field, value) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const addProject = () => {
    setProjects((prev) => [...prev, emptyProject()]);
  };

  const removeProject = (id) => {
    if (projects.length === 1) return;
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Submitted:", { formData, projects, selectedSections });
  };

  const handleReset = () => {
    setSubmitted(false);
    setSelectedSections([]);
    setFormData({
      district: "", studentName: "", position: "", date: "",
      s1_approved: "", s1_financial: "", s1_programs: "", s1_officers: "",
      s2_approved: "", s2_financial: "", s2_programs: "", s2_officers: "",
      s3_approved: "", s3_financial: "",
    });
    setProjects([emptyProject()]);
  };

  if (submitted) {
    return (
      <div style={styles.successContainer}>
        <div style={styles.successCard}>
          <div style={styles.successIcon}>✓</div>
          <h2 style={styles.successTitle}>ආකෘති පත්‍රය සාර්ථකව ඉදිරිපත් කරන ලදී!</h2>
          <p style={styles.successText}>
            <strong>{formData.studentName}</strong> ගේ වාර්තාව සාර්ථකව සුරකින ලදී.
          </p>
          <button style={styles.resetButton} onClick={handleReset}>
            නව ආකෘති පත්‍රයක් පුරවන්න
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ ...styles.container, ...sectionStyles }}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerAccent} />
        <div style={styles.headerContent}>
          <h1 style={styles.mainTitle}>ප්‍රගති වාර්තා ආකෘති පත්‍රය</h1>
          <p style={styles.subtitle}>Progress Report Form</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>

        {/* Officer Info Sectionn n  */}
        <SectionCard title="තොරතුරු ඇතුලත් කරනු ලබන නිලධාරියාගේ තොරතුරු">

          {/* District dropdown */}
          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>දිස්ත්‍රික්කය / District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleText}
              style={{ ...styles.fieldInput, cursor: "pointer" }}
            >
              <option value="">-- දිස්ත්‍රික්කය තෝරන්න / Select District --</option>
              <option value="අම්පාර">අම්පාර / Ampara</option>
              <option value="අනුරාධපුර">අනුරාධපුර / Anuradhapura</option>
              <option value="බදුල්ල">බදුල්ල / Badulla</option>
              <option value="බටිකලෝවා">මඩකලපුව / Batticaloa</option>
              <option value="කොළඹ">කොළඹ / Colombo</option>
              <option value="ගාල්ල">ගාල්ල / Galle</option>
              <option value="ගම්පහ">ගම්පහ / Gampaha</option>
              <option value="හම්බන්තොට">හම්බන්තොට / Hambantota</option>
              <option value="යාපනය">යාපනය / Jaffna</option>
              <option value="කළුතර">කළුතර / Kalutara</option>
              <option value="මහනුවර">මහනුවර / Kandy</option>
              <option value="කෑගල්ල">කෑගල්ල / Kegalle</option>
              <option value="කිලිනොච්චි">කිලිනොච්චි / Kilinochchi</option>
              <option value="කුරුණෑගල">කුරුණෑගල / Kurunegala</option>
              <option value="මන්නාරම">මන්නාරම / Mannar</option>
              <option value="මාතලේ">මාතලේ / Matale</option>
              <option value="මාතර">මාතර / Matara</option>
              <option value="මොණරාගල">මොණරාගල / Monaragala</option>
              <option value="මුලතිව්">මුලතිව් / Mullaitivu</option>
              <option value="නුවරඑළිය">නුවරඑළිය / Nuwara Eliya</option>
              <option value="පොළොන්නරුව">පොළොන්නරුව / Polonnaruwa</option>
              <option value="පුත්තලම">පුත්තලම / Puttalam</option>
              <option value="රත්නපුර">රත්නපුර / Ratnapura</option>
              <option value="ත්‍රිකුණාමලය">ත්‍රිකුණාමලය / Trincomalee</option>
              <option value="වව්නියා">වව්නියා / Vavuniya</option>
            </select>
          </div>

          {/* Name, Position, Date */}
          <TextField label="නම / Name" name="studentName" value={formData.studentName} onChange={handleChange} placeholder="නම ඇතුළත් කරන්න..." />
          <TextField label="තනතුර / Position" name="position" value={formData.position} onChange={handleChange} placeholder="තනතුර ඇතුළත් කරන්න..." />

          <div style={styles.fieldRow}>
            <label style={styles.fieldLabel}>දිනය / Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleText}
              style={styles.fieldInput}
            />
          </div>

          {/* Section selector - checkboxes */}
          <div style={styles.selectorBox}>
            <div style={styles.selectorHeader}>
              <span style={styles.selectorTitle}>අවශ්‍ය කොටස් තෝරන්න / Select Sections</span>
              <div style={styles.selectorActions}>
                <button type="button" onClick={selectAll} style={styles.selectAllBtn}>
                  සියල්ල තෝරන්න
                </button>
                <button type="button" onClick={clearAll} style={styles.clearAllBtn}>
                  ඉවත් කරන්න
                </button>
              </div>
            </div>
            <div style={styles.checkboxList}>
              {SECTION_OPTIONS.map((opt) => {
                const checked = selectedSections.includes(opt.key);
                return (
                  <label
                    key={opt.key}
                    style={{ ...styles.checkboxItem, ...(checked ? styles.checkboxItemActive : {}) }}
                    onClick={() => toggleSection(opt.key)}
                  >
                    <div style={{ ...styles.checkboxBox, ...(checked ? styles.checkboxBoxChecked : {}) }}>
                      {checked && <span style={styles.checkmark}>✓</span>}
                    </div>
                    <div style={styles.checkboxContent}>
                      <span style={styles.checkboxNumber}>{opt.number}</span>
                      <span style={styles.checkboxLabel}>{opt.label}</span>
                    </div>
                  </label>
                );
              })}
            </div>
            {selectedSections.length > 0 && (
              <div style={styles.selectionBadge}>
                {selectedSections.length} කොටස් තෝරා ඇත / {selectedSections.length} section{selectedSections.length > 1 ? "s" : ""} selected
              </div>
            )}
          </div>
        </SectionCard>

        {/* Section 1 - conditionally shown */}
        {selectedSections.includes("s1") && (
          <SectionCard number="1" title="දිස්ත්‍රික් ප්‍රජා සංවර්ධන සභා ක්‍රියාත්මක කිරීම පිලිබඳ දැනුවත් කිරීමේ වැඩසටහන">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s1_approved" value={formData.s1_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s1_financial" value={formData.s1_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="③ පැවැත්වූ වැඩසටහන් ගණන (භෞතික ප්‍රගතිය)" name="s1_programs" value={formData.s1_programs} onChange={handleChange} placeholder="ගණන ඇතුළත් කරන්න..." />
            <TextField label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" name="s1_officers" value={formData.s1_officers} onChange={handleChange} placeholder="සංඛ්‍යාව ඇතුළත් කරන්න..." />
          </SectionCard>
        )}

        {/* Section 2 - conditionally shown */}
        {selectedSections.includes("s2") && (
          <SectionCard number="2" title="ප්‍රජා සංවර්ධන සභා වල කාරක සභා නිලධාරීන් දැනුවත් කිරීමේ වැඩසටහන">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s2_approved" value={formData.s2_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s2_financial" value={formData.s2_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="③ පැවැත්වූ වැඩසටහන් ගණන (භෞතික ප්‍රගතිය)" name="s2_programs" value={formData.s2_programs} onChange={handleChange} placeholder="ගණන ඇතුළත් කරන්න..." />
            <TextField label="④ සහභාගී වූ නිලධාරී සංඛ්‍යාව" name="s2_officers" value={formData.s2_officers} onChange={handleChange} placeholder="සංඛ්‍යාව ඇතුළත් කරන්න..." />
          </SectionCard>
        )}

        {/* Section 3 - conditionally shown */}
        {selectedSections.includes("s3") && (
          <SectionCard number="3" title="ප්‍රජා සංවර්ධන සභා වල පරිපාලන කටයුතු සිදු කිරීම">
            <TextField label="① අනුමත ප්‍රතිපාදන මුදල (රු.)" name="s3_approved" value={formData.s3_approved} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
            <TextField label="② මූල්‍ය ප්‍රගතිය (රු.)" name="s3_financial" value={formData.s3_financial} onChange={handleChange} placeholder="රු. ඇතුළත් කරන්න..." />
          </SectionCard>
        )}

        {/* Section 4 - conditionally shown */}
        {selectedSections.includes("s4") && (
          <SectionCard number="4" title="ව්‍යාපෘති ක්‍රියාත්මක කිරීම">
            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <colgroup>
                  <col style={{width: "4%"}} />
                  <col style={{width: "14%"}} />
                  <col style={{width: "11%"}} />
                  <col style={{width: "14%"}} />
                  <col style={{width: "11%"}} />
                  <col style={{width: "11%"}} />
                  <col style={{width: "10%"}} />
                  <col style={{width: "11%"}} />
                  <col style={{width: "10%"}} />
                  <col style={{width: "4%"}} />
                </colgroup>
                <thead>
                  <tr>
                    <th style={styles.th}>අංකය<br /><span style={styles.thEn}>No.</span></th>
                    <th style={styles.th}>ප්‍රාදේශීය ලේකම් කාර්යාලය<br /><span style={styles.thEn}>Divisional Secretariat</span></th>
                    <th style={styles.th}>ග්‍රාම නිලධාරී වසම<br /><span style={styles.thEn}>GN Division</span></th>
                    <th style={styles.th}>ව්‍යාපෘතියේ නම<br /><span style={styles.thEn}>Project Name</span></th>
                    <th style={styles.th}>අනුමත ප්‍රතිපාදන මුදල (රු.)<br /><span style={styles.thEn}>Approved Amount</span></th>
                    <th style={styles.th}>ව්‍යාපෘතියේ සත්‍යය වියදම<br /><span style={styles.thEn}>Actual Cost</span></th>
                    <th style={styles.th}>පරිපාලන වියදම (රු.)<br /><span style={styles.thEn}>Admin Cost</span></th>
                    <th style={styles.th}>මූල්‍ය ප්‍රගතිය (රු.)<br /><span style={styles.thEn}>Financial Progress</span></th>
                    <th style={styles.th}>භෞතික ප්‍රගතිය<br /><span style={styles.thEn}>Physical Progress</span></th>
                    <th style={{ ...styles.th, background: "#c53030" }}>මකන්න</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj, idx) => (
                    <tr key={proj.id} style={idx % 2 === 0 ? styles.trEven : styles.trOdd}>
                      <td style={styles.tdCenter}>{idx + 1}</td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.pradeshiya} onChange={(e) => handleProjectChange(proj.id, "pradeshiya", e.target.value)} placeholder="ඇතුළත් කරන්න..." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.grama} onChange={(e) => handleProjectChange(proj.id, "grama", e.target.value)} placeholder="ඇතුළත් කරන්න..." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.name} onChange={(e) => handleProjectChange(proj.id, "name", e.target.value)} placeholder="ඇතුළත් කරන්න..." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.approved} onChange={(e) => handleProjectChange(proj.id, "approved", e.target.value)} placeholder="රු." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.actual} onChange={(e) => handleProjectChange(proj.id, "actual", e.target.value)} placeholder="රු." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.admin} onChange={(e) => handleProjectChange(proj.id, "admin", e.target.value)} placeholder="රු." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.financial} onChange={(e) => handleProjectChange(proj.id, "financial", e.target.value)} placeholder="රු." />
                      </td>
                      <td style={styles.td}>
                        <input style={styles.tableInput} value={proj.physical} onChange={(e) => handleProjectChange(proj.id, "physical", e.target.value)} placeholder="ඇතුළත් කරන්න..." />
                      </td>
                      <td style={styles.tdCenter}>
                        <button type="button" onClick={() => removeProject(proj.id)} style={styles.deleteBtn} disabled={projects.length === 1}>✕</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={styles.addRowSection}>
              <button type="button" onClick={addProject} style={styles.addRowBtn}>
                <span style={styles.addIcon}>＋</span>
                නව ව්‍යාපෘතියක් එකතු කරන්න / Add Project Row
              </button>
              <span style={styles.rowCount}>{projects.length} ව්‍යාපෘති</span>
            </div>
          </SectionCard>
        )}

        {/* Submit - only show if at least one section is selected */}
        {selectedSections.length > 0 && (
          <div style={styles.submitSection}>
            <button type="submit" style={styles.submitButton}>
              ආකෘති පත්‍රය ඉදිරිපත් කරන්න
              <span style={styles.submitArrow}>→</span>
            </button>
          </div>
        )}

      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0f4f8 0%, #e8f0fe 100%)",
    paddingBottom: 60,
  },
  header: {
    background: "linear-gradient(135deg, #1a3a6e 0%, #2d5aa0 100%)",
    padding: "48px 40px 40px",
    position: "relative",
    overflow: "hidden",
    marginBottom: 40,
    boxShadow: "0 8px 32px rgba(26,58,110,0.25)",
  },
  headerAccent: {
    position: "absolute",
    top: -60, right: -60,
    width: 220, height: 220,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.07)",
  },
  headerContent: {
    position: "relative",
    zIndex: 1,
    maxWidth: 820,
    margin: "0 auto",
  },
  mainTitle: {
    color: "#ffffff",
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.3,
  },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 15,
    margin: "8px 0 0",
    fontStyle: "italic",
  },
  form: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "0 20px",
  },
  infoCard: {
    background: "#ffffff",
    borderRadius: 12,
    padding: "18px 24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    border: "1px solid #e2e8f0",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    background: "#ffffff",
    borderRadius: 16,
    padding: 28,
    marginBottom: 28,
    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    border: "1px solid #e2e8f0",
  },
  infoField: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#4a5568",
  },
  textInput: {
    padding: "10px 14px",
    border: "1.5px solid #cbd5e0",
    borderRadius: 8,
    fontSize: 14,
    color: "#2d3748",
    background: "#f7fafc",
    outline: "none",
    fontFamily: "inherit",
  },
  sectionCard: {
    background: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 24,
    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
    border: "1px solid #e2e8f0",
  },
  sectionHeader: {
    background: "linear-gradient(90deg, #1a3a6e, #2d5aa0)",
    padding: "18px 28px",
    display: "flex",
    alignItems: "center",
    gap: 14,
  },
  sectionNumber: {
    width: 36, height: 36,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },
  sectionTitle: {
    color: "#ffffff",
    fontSize: "clamp(13px, 2vw, 15px)",
    fontWeight: 600,
    margin: 0,
    lineHeight: 1.4,
  },
  sectionBody: {
    padding: "20px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  fieldRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    background: "#f7fafc",
    borderRadius: 10,
    padding: "12px 18px",
    border: "1px solid #e2e8f0",
  },
  fieldLabel: {
    fontSize: 13.5,
    fontWeight: 600,
    color: "#2d3748",
    lineHeight: 1.4,
    minWidth: 300,
    flexShrink: 0,
  },
  fieldInput: {
    padding: "9px 13px",
    border: "1.5px solid #cbd5e0",
    borderRadius: 8,
    fontSize: 14,
    color: "#2d3748",
    background: "#ffffff",
    outline: "none",
    fontFamily: "inherit",
    flex: 1,
    minWidth: 0,
    boxSizing: "border-box",
  },

  /* Section selector / checkbox styles */
  selectorBox: {
    background: "#eef2ff",
    borderRadius: 12,
    padding: "18px 20px",
    border: "1.5px solid #c7d2fe",
  },
  selectorHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
    flexWrap: "wrap",
    gap: 10,
  },
  selectorTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1a3a6e",
  },
  selectorActions: {
    display: "flex",
    gap: 8,
  },
  selectAllBtn: {
    background: "#1a3a6e",
    color: "#fff",
    border: "none",
    borderRadius: 20,
    padding: "6px 16px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  clearAllBtn: {
    background: "#fff",
    color: "#c53030",
    border: "1.5px solid #fed7d7",
    borderRadius: 20,
    padding: "6px 16px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  checkboxList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  checkboxItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#ffffff",
    borderRadius: 10,
    padding: "12px 16px",
    border: "1.5px solid #c7d2fe",
    cursor: "pointer",
    transition: "all 0.15s",
    userSelect: "none",
  },
  checkboxItemActive: {
    background: "#e0e7ff",
    border: "1.5px solid #6366f1",
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    border: "2px solid #a5b4fc",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.15s",
  },
  checkboxBoxChecked: {
    background: "#1a3a6e",
    border: "2px solid #1a3a6e",
  },
  checkmark: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1,
  },
  checkboxContent: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  checkboxNumber: {
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "#1a3a6e",
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  checkboxLabel: {
    fontSize: 13.5,
    fontWeight: 500,
    color: "#2d3748",
    lineHeight: 1.4,
  },
  selectionBadge: {
    marginTop: 12,
    background: "#1a3a6e",
    color: "#ffffff",
    borderRadius: 20,
    padding: "5px 14px",
    fontSize: 12,
    fontWeight: 600,
    display: "inline-block",
  },

  /* Table styles */
  tableWrapper: {
    overflowX: "auto",
    borderRadius: 10,
    border: "1.5px solid #bee3f8",
    marginBottom: 16,
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 13,
    minWidth: 1400,
    tableLayout: "fixed",
  },
  th: {
    background: "linear-gradient(135deg, #1a3a6e, #2d5aa0)",
    color: "#ffffff",
    padding: "14px 12px",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 1.5,
    borderRight: "1px solid rgba(255,255,255,0.15)",
    whiteSpace: "normal",
    wordBreak: "keep-all",
    verticalAlign: "middle",
  },
  thEn: {
    fontWeight: 400,
    fontSize: 10,
    opacity: 0.8,
    display: "block",
    fontStyle: "italic",
  },
  trEven: { background: "#f7fafc" },
  trOdd: { background: "#ffffff" },
  td: {
    padding: "8px 6px",
    borderBottom: "1px solid #e2e8f0",
    borderRight: "1px solid #e2e8f0",
    verticalAlign: "middle",
  },
  tdCenter: {
    padding: "8px 6px",
    borderBottom: "1px solid #e2e8f0",
    borderRight: "1px solid #e2e8f0",
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: 600,
    color: "#4a5568",
    fontSize: 13,
  },
  tableInput: {
    width: "100%",
    padding: "8px 10px",
    border: "1.5px solid #cbd5e0",
    borderRadius: 6,
    fontSize: 13,
    color: "#2d3748",
    background: "transparent",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
  },
  deleteBtn: {
    background: "#fff5f5",
    color: "#c53030",
    border: "1.5px solid #fed7d7",
    borderRadius: "50%",
    width: 28,
    height: 28,
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 700,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addRowSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  addRowBtn: {
    background: "linear-gradient(135deg, #ebf8ff, #bee3f8)",
    color: "#2c5282",
    border: "1.5px dashed #90cdf4",
    borderRadius: 10,
    padding: "10px 22px",
    fontSize: 13.5,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "inherit",
  },
  addIcon: {
    fontSize: 18,
    fontWeight: 700,
    color: "#2b6cb0",
  },
  rowCount: {
    fontSize: 13,
    color: "#718096",
    fontWeight: 500,
  },
  submitSection: {
    display: "flex",
    justifyContent: "center",
    marginTop: 12,
  },
  submitButton: {
    background: "linear-gradient(135deg, #1a3a6e, #2d5aa0)",
    color: "#ffffff",
    border: "none",
    padding: "16px 48px",
    borderRadius: 50,
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 10,
    boxShadow: "0 6px 24px rgba(26,58,110,0.35)",
    fontFamily: "inherit",
  },
  submitArrow: { fontSize: 20 },
  successContainer: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0f4f8, #e8f0fe)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  successCard: {
    background: "#ffffff",
    borderRadius: 20,
    padding: "52px 40px",
    textAlign: "center",
    boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
    maxWidth: 480,
    width: "100%",
  },
  successIcon: {
    width: 72, height: 72,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #1a3a6e, #2d5aa0)",
    color: "#ffffff",
    fontSize: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1a3a6e",
    margin: "0 0 12px",
  },
  successText: {
    color: "#4a5568",
    fontSize: 15,
    marginBottom: 32,
  },
  resetButton: {
    background: "linear-gradient(135deg, #1a3a6e, #2d5aa0)",
    color: "#ffffff",
    border: "none",
    padding: "14px 36px",
    borderRadius: 50,
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    fontFamily: "inherit",
  },
};