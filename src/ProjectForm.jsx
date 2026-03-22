import React, { useState, useRef } from 'react';

// Simple icon components
const Upload = ({ style }) => (
  <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);

const Plus = ({ style }) => (
  <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const Trash2 = ({ style }) => (
  <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const Send = ({ style }) => (
  <svg style={style} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    district: '',
    dn: '',
    gn: '',
    file: null
  });

  const fileInputRef = useRef(null);

  const [projects, setProjects] = useState([
    {
      id: 1,
      no: '1',
      proposal: '',
      estimatedCost: '',
      approach: '',
      sdgGoals: '',
      fundingSource: '',
      name: '',
      institution: ''
    }
  ]);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxL0bHsfrslXj2d_YzyUObhM-uJJac76RBwJr-_cQiyoy0Ve8d7NdDtbeFbVNa1T3X30w/exec'
  
  // Check if form is complete
  const isFormComplete = () => {
    // Check main fields
    if (!formData.district || !formData.dn || !formData.gn || !formData.file) {
      return false;
    }
    
    // Check all projects have required fields
    for (const project of projects) {
      if (!project.proposal || !project.estimatedCost) {
        return false;
      }
    }
    
    return true;
  }
  
  // District options
  const districts = [
    { value: '', label: '-- දිස්ත්‍රික්කය තෝරන්න / Select District --' },
    { value: 'Colombo / කොළඹ', label: 'Colombo / කොළඹ' },
    { value: 'Gampaha / ගම්පහ', label: 'Gampaha / ගම්පහ' },
    { value: 'Kalutara / කළුතර', label: 'Kalutara / කළුතර' },
    { value: 'Kandy / මහනුවර', label: 'Kandy / මහනුවර' },
    { value: 'Matale / මාතලේ', label: 'Matale / මාතලේ' },
    { value: 'Nuwara Eliya / නුවරඑළිය', label: 'Nuwara Eliya / නුවරඑළිය' },
    { value: 'Galle / ගාල්ල', label: 'Galle / ගාල්ල' },
    { value: 'Matara / මාතර', label: 'Matara / මාතර' },
    { value: 'Hambantota / හම්බන්තොට', label: 'Hambantota / හම්බන්තොට' },
    { value: 'Jaffna / යාපනය', label: 'Jaffna / යාපනය' },
    { value: 'Kilinochchi / කිලිනොච්චි', label: 'Kilinochchi / කිලිනොච්චි' },
    { value: 'Mannar / මන්නාරම', label: 'Mannar / මන්නාරම' },
    { value: 'Mullaitivu / මුලතිව්', label: 'Mullaitivu / මුලතිව්' },
    { value: 'Vavuniya / වවුනියා', label: 'Vavuniya / වවුනියා' },
    { value: 'Trincomalee / ත්‍රිකුණාමලය', label: 'Trincomalee / ත්‍රිකුණාමලය' },
    { value: 'Batticaloa / මඩකලපුව', label: 'Batticaloa / මඩකලපුව' },
    { value: 'Ampara / අම්පාර', label: 'Ampara / අම්පාර' },
    { value: 'Kurunegala / කුරුණෑගල', label: 'Kurunegala / කුරුණෑගල' },
    { value: 'Puttalam / පුත්තලම', label: 'Puttalam / පුත්තලම' },
    { value: 'Anuradhapura / අනුරාධපුර', label: 'Anuradhapura / අනුරාධපුර' },
    { value: 'Polonnaruwa / පොළොන්නරුව', label: 'Polonnaruwa / පොළොන්නරුව' },
    { value: 'Badulla / බදුල්ල', label: 'Badulla / බදුල්ල' },
    { value: 'Monaragala / මොණරාගල', label: 'Monaragala / මොණරාගල' },
    { value: 'Ratnapura / රත්නපුර', label: 'Ratnapura / රත්නපුර' },
    { value: 'Kegalle / කෑගල්ල', label: 'Kegalle / කෑගල්ල' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'ගොනුව 10MB ට වඩා කුඩා විය යුතුය' });
        e.target.value = '';
        return;
      }

      const isPdf = file.type === 'application/pdf';
      const isImage = file.type.startsWith('image/');

      if (!isPdf && !isImage) {
        setMessage({ type: 'error', text: 'කරුණාකර PDF හෝ පින්තූරයක් (Image) පමණක් තෝරන්න' });
        e.target.value = '';
        setFormData(prev => ({ ...prev, file: null }));
        return;
      }

      setFormData(prev => ({ ...prev, file }));
      setMessage({ type: '', text: '' });
    }
  };

  const handleProjectChange = (id, field, value) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const addProject = () => {
    const newId = Math.max(...projects.map(p => p.id), 0) + 1;
    setProjects(prev => [
      ...prev,
      {
        id: newId,
        no: String(prev.length + 1),
        proposal: '',
        estimatedCost: '',
        approach: '',
        sdgGoals: '',
        fundingSource: '',
        name: '',
        institution: ''
      }
    ]);
  };

  const removeProject = (id) => {
    if (projects.length === 1) {
      setMessage({ type: 'error', text: 'අවම වශයෙන් එක් ව්‍යාපෘතියක් තිබිය යුතුය' });
      return;
    }
    setProjects(prev => {
      const filtered = prev.filter(project => project.id !== id);
      return filtered.map((project, index) => ({
        ...project,
        no: String(index + 1)
      }));
    });
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const validateForm = () => {
    if (!formData.district || !formData.dn || !formData.gn) {
      setMessage({ type: 'error', text: 'කරුණාකර සියලු ප්‍රධාන ක්ෂේත්‍ර පුරවන්න' });
      return false;
    }
    if (!formData.file) {
      setMessage({ type: 'error', text: 'කරුණාකර අදාළ ගොනුව උඩුගත කරන්න (File upload is required)' });
      return false;
    }
    for (const project of projects) {
      if (!project.proposal || !project.estimatedCost) {
        setMessage({ type: 'error', text: 'කරුණාකර සියලු ව්‍යාපෘති විස්තර පුරවන්න' });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setUploading(true);
    setMessage({ type: '', text: '' });

    try {
      let fileData = null;
      if (formData.file) {
        const base64 = await convertFileToBase64(formData.file);
        fileData = {
          name: formData.file.name,
          mimeType: formData.file.type,
          data: base64
        };
      }

      const payload = {
        district: formData.district,
        dn: formData.dn,
        gn: formData.gn,
        file: fileData,
        timestamp: new Date().toISOString(),
        projects: projects.map(p => ({
          no: p.no,
          proposal: p.proposal,
          estimatedCost: p.estimatedCost,
          approach: p.approach,
          sdgGoals: p.sdgGoals,
          fundingSource: p.fundingSource,
          name: p.name,
          institution: p.institution
        }))
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      setMessage({ type: 'success', text: 'දත්ත සාර්ථකව ඉදිරිපත් කරන ලදී!' });
      
      setFormData({ district: '', dn: '', gn: '', file: null });
      setProjects([{
        id: 1,
        no: '1',
        proposal: '',
        estimatedCost: '',
        approach: '',
        sdgGoals: '',
        fundingSource: '',
        name: '',
        institution: ''
      }]);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: 'error', text: 'දත්ත ඉදිරිපත් කිරීමේ දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formCard}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>
            සංවර්ධන යෝජනා ඉදිරිපත් කිරීමේ පෝරමය
          </h1>
          <p style={styles.subtitle}>
            Development Proposal Submission Form
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Main Fields */}
          <div style={styles.mainFieldsContainer}>
            <h2 style={styles.sectionTitle}>
              ප්‍රධාන තොරතුරු / Main Information
            </h2>
            
            <div style={styles.gridThree}>
              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  දිස්ත්‍රික්කය / District *
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                >
                  {districts.map((district) => (
                    <option key={district.value} value={district.value}>
                      {district.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  ප්‍රාදේශීය ලේකම් කොට්ඨාසය / DS *
                </label>
                <input
                  type="text"
                  name="dn"
                  value={formData.dn}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.fieldGroup}>
                <label style={styles.label}>
                  ග්‍රාම නිලධාරී වසම / GN *
                </label>
                <input
                  type="text"
                  name="gn"
                  value={formData.gn}
                  onChange={handleInputChange}
                  style={styles.input}
                  required
                />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div style={styles.projectsSection}>
            <div style={styles.projectsHeader}>
              <h2 style={styles.projectsTitle}>
                ව්‍යාපෘති / Projects
              </h2>
              <button
                type="button"
                onClick={addProject}
                style={styles.addProjectBtn}
              >
                <Plus style={styles.iconSmall} />
                <span style={styles.btnText}>ව්‍යාපෘතිය එක් කරන්න</span>
              </button>
            </div>

            {projects.map((project) => (
              <div key={project.id} style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <h3 style={styles.projectNumber}>
                    ව්‍යාපෘතිය #{project.no}
                  </h3>
                  {projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeProject(project.id)}
                      style={styles.removeProjectBtn}
                    >
                      <Trash2 style={styles.iconSmall} />
                      <span>ඉවත් කරන්න</span>
                    </button>
                  )}
                </div>

                <div style={styles.gridTwo}>
                  <div style={styles.fieldGroupFull}>
                    <label style={styles.label}>
                      සංවර්ධන යෝජනා (ව්‍යාපෘතියේ නම) / Development Proposal *
                    </label>
                    <textarea
                      value={project.proposal}
                      onChange={(e) => handleProjectChange(project.id, 'proposal', e.target.value)}
                      style={styles.textarea}
                      rows="3"
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      අපේක්ෂිත දළ ඇස්තමේන්තුව / Estimated Cost *
                    </label>
                    <input
                      type="number"
                      value={project.estimatedCost}
                      onChange={(e) => handleProjectChange(project.id, 'estimatedCost', e.target.value)}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      සංවර්දන ප්‍රවේශය / Development Approach
                    </label>
                    <select
                      value={project.approach}
                      onChange={(e) => handleProjectChange(project.id, 'approach', e.target.value)}
                      style={styles.input}
                    >
                      <option value="">-- Select --</option>
                      <option value="සමජ පරිසර">සමජ පරිසර</option>
                      <option value="ආහාර සුරක්ෂිතතාව">ආහාර සුරක්ෂිතතාව</option>
                      <option value="නිශ්පාදන ආර්ථිකය">නිශ්පාදන ආර්ථිකය</option>
                      <option value="මානව සම්පත් සංවර්දන">මානව සම්පත් සංවර්දන</option>
                      <option value="රැකවරනය">රැකවරනය</option>
                      <option value="සැලසුම් ජාල හා ප්‍රවේශය">සැලසුම් ජාල හා ප්‍රවේශය</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      තිරසර සංවර්ධන ඉලක්ක / SDG Goals
                    </label>
                    <input
                      type="text"
                      value={project.sdgGoals}
                      onChange={(e) => handleProjectChange(project.id, 'sdgGoals', e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      අපේක්ශිත ප්‍රතිපාදන ප්‍රභවය / Funding Source
                    </label>
                    <select
                      value={project.fundingSource}
                      onChange={(e) => handleProjectChange(project.id, 'fundingSource', e.target.value)}
                      style={styles.input}
                    >
                      <option value="">-- Select --</option>
                      <option value="පලාත් පාලන">පලාත් පාලන</option>
                      <option value="ප්‍රාදේශීය සභා">ප්‍රාදේශීය සභා</option>
                      <option value="රාජ්‍ය නොවන සංවිදාන">රාජ්‍ය නොවන සංවිදාන</option>
                      <option value="රේකීය අමාත්‍යාංශය">රේකීය අමාත්‍යාංශය</option>
                    </select>
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      ක්‍රියාත්මක ආයතනය / Implementing Institution
                    </label>
                    <input
                      type="text"
                      value={project.institution}
                      onChange={(e) => handleProjectChange(project.id, 'institution', e.target.value)}
                      style={styles.input}
                    />
                  </div>

                  <div style={styles.fieldGroup}>
                    <label style={styles.label}>
                      නම (ක්‍රියාත්මක ආයතනය) / Name
                    </label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)}
                      style={styles.input}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* File Upload Section */}
          <div style={styles.fileSection}>
            <label style={styles.label}>
              ගොනුව උඩුගත කරන්න / Upload File *
            </label>
            <div style={styles.fileInputWrapper}>
              <label style={styles.fileLabel}>
                <Upload style={styles.icon} />
                <span style={styles.fileText}>
                  {formData.file ? formData.file.name : 'ගොනුවක් තෝරන්න / Choose File'}
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  style={styles.hiddenInput}
                  accept="image/*,application/pdf"
                />
              </label>
              {formData.file && (
                <button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, file: null }));
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                  style={styles.removeFileBtn}
                >
                  ඉවත් කරන්න
                </button>
              )}
            </div>
            <p style={styles.helpText}>
              PDF or Image files (JPG, PNG) - Max 10MB
            </p>
          </div>

          {/* Submit Button */}
          <div style={styles.submitContainer}>
            <button
              type="submit"
              disabled={uploading || !isFormComplete()}
              style={{
                ...styles.submitBtn,
                ...((uploading || !isFormComplete()) ? styles.submitBtnDisabled : {})
              }}
            >
              {uploading ? (
                <>
                  <div style={styles.spinner}></div>
                  <span>ඉදිරිපත් කරමින්...</span>
                </>
              ) : (
                <>
                  <Send style={styles.iconSmall} />
                  <span>ඉදිරිපත් කරන්න / Submit</span>
                </>
              )}
            </button>
            {!isFormComplete() && !uploading && (
              <p style={styles.warningText}>
                කරුණාකර ඉදිරිපත් කිරීමට පෙර සියලු අවශ්‍ය ක්ෂේත්‍ර (*) පුරවන්න
                <br />
                Please fill all required fields (*) before submitting
              </p>
            )}
          </div>

          {/* Message Display */}
          {message.text && (
            <div style={{
              ...styles.message,
              ...(message.type === 'success' ? styles.messageSuccess : styles.messageError)
            }}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #EFF6FF, #E0E7FF)',
    padding: '16px',
    fontFamily: '"Noto Sans Sinhala", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  formCard: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '20px'
  },
  header: {
    borderBottom: '4px solid #4F46E5',
    paddingBottom: '16px',
    marginBottom: '24px'
  },
  title: {
    fontSize: 'clamp(20px, 5vw, 30px)',
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    margin: '0',
    lineHeight: '1.3'
  },
  subtitle: {
    color: '#6B7280',
    textAlign: 'center',
    marginTop: '8px',
    fontSize: 'clamp(12px, 3vw, 16px)'
  },
  message: {
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '14px'
  },
  messageSuccess: {
    backgroundColor: '#F0FDF4',
    border: '1px solid #BBF7D0',
    color: '#166534'
  },
  messageError: {
    backgroundColor: '#FEF2F2',
    border: '1px solid #FECACA',
    color: '#991B1B'
  },
  mainFieldsContainer: {
    backgroundColor: '#EEF2FF',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '24px'
  },
  sectionTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: '600',
    color: '#312E81',
    marginBottom: '16px'
  },
  gridThree: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
    gap: '16px'
  },
  gridTwo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: '16px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  fieldGroupFull: {
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '1 / -1'
  },
  label: {
    display: 'block',
    fontSize: 'clamp(13px, 3vw, 14px)',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px',
    lineHeight: '1.4'
  },
  input: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    appearance: 'none'
  },
  textarea: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    minHeight: '80px'
  },
  fileSection: {
    marginTop: '24px',
    marginBottom: '24px'
  },
  fileInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  },
  fileLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 16px',
    backgroundColor: '#ffffff',
    border: '2px dashed #D1D5DB',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    flexGrow: 1,
    minWidth: '200px'
  },
  fileText: {
    fontSize: '14px',
    color: '#6B7280',
    wordBreak: 'break-word',
    flex: 1
  },
  hiddenInput: {
    display: 'none'
  },
  removeFileBtn: {
    color: '#DC2626',
    fontSize: '14px',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: '8px'
  },
  helpText: {
    fontSize: '12px',
    color: '#6B7280',
    marginTop: '8px'
  },
  projectsSection: {
    marginBottom: '24px'
  },
  projectsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px'
  },
  projectsTitle: {
    fontSize: 'clamp(16px, 4vw, 20px)',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0'
  },
  addProjectBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    backgroundColor: '#16A34A',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    whiteSpace: 'nowrap'
  },
  btnText: {
    display: 'inline'
  },
  projectCard: {
    backgroundColor: '#F9FAFB',
    borderLeft: '4px solid #4F46E5',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '16px'
  },
  projectHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px'
  },
  projectNumber: {
    fontSize: 'clamp(16px, 4vw, 18px)',
    fontWeight: '600',
    color: '#374151',
    margin: '0'
  },
  removeProjectBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    color: '#DC2626',
    backgroundColor: 'transparent',
    border: '1px solid #DC2626',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  submitContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '24px',
    gap: '12px'
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '14px 32px',
    backgroundColor: '#4F46E5',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    width: '100%',
    maxWidth: '400px',
    minHeight: '50px'
  },
  submitBtnDisabled: {
    backgroundColor: '#9CA3AF',
    cursor: 'not-allowed'
  },
  warningText: {
    fontSize: '13px',
    color: '#DC2626',
    textAlign: 'center',
    margin: '0',
    lineHeight: '1.5'
  },
  icon: {
    width: '20px',
    height: '20px',
    flexShrink: 0
  },
  iconSmall: {
    width: '18px',
    height: '18px',
    flexShrink: 0
  },
  spinner: {
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid #ffffff',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    animation: 'spin 1s linear infinite'
  }
};

// Add keyframes for spinner animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 640px) {
    input, select, textarea {
      font-size: 16px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default ProjectForm;