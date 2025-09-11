// src/components/profile/ProfilePage.tsx
import React, { useState } from 'react';
import styles from './ProfilePage.module.css';

// Modal Component for Medical Data
const MedicalDataModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <h2>Add Medical Information</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.formGroup}>
                        <label htmlFor="allergies">Allergies</label>
                        <textarea id="allergies" placeholder="e.g., Penicillin, Peanuts" rows={3}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="disabilities">Disabilities</label>
                        <textarea id="disabilities" placeholder="e.g., Vision impairment" rows={3}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="blood_group">Blood Group</label>
                        <input type="text" id="blood_group" placeholder="e.g., A+" />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="hospital_names">Known Hospitals</label>
                        <textarea id="hospital_names" placeholder="List any hospitals you have visited" rows={3}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="past_medical_record">Past Medical History</label>
                        <textarea id="past_medical_record" placeholder="Briefly describe your medical history" rows={5}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="medical_reports_file">Upload Medical Reports</label>
                        <input type="file" id="medical_reports_file" multiple />
                        <small>Upload important medical files (PDF, image, etc.).</small>
                    </div>
                </div>
                <button type="button" className={styles.saveModalButton} onClick={onClose}>Save Medical Data</button>
            </div>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState({
        fullName: 'John Doe',
        dob: '1990-01-01',
        gender: 'Male',
        emergencyContact: 'Jane Doe (+91 9876543210)',
        height: '175 cm',
        weight: '75 kg',
        address: '123 Main St, New Delhi',
    });

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        // Here you would implement the logic to save the data to a backend
        console.log('Saving profile data:', profileData);
        setIsEditMode(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfileData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.mainHeader}>
                <h1>User Profile</h1>
                <p>View and manage your personal and medical details.</p>
            </div>
            
            <div className={styles.contentLayout}>
                <div className={styles.personalInfoCard}>
                    <h2 className={styles.cardHeader}>Your Name</h2>
                    <p className={styles.premiumTag}>Premium User</p>
                    
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionHeader}>Personal Information</h3>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Full Name:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={profileData.fullName}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.fullName}</span>
                                )}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Date of Birth:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="dob"
                                        value={profileData.dob}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.dob}</span>
                                )}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Gender:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="gender"
                                        value={profileData.gender}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.gender}</span>
                                )}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Emergency Contact:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="emergencyContact"
                                        value={profileData.emergencyContact}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.emergencyContact}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.otherInfoCard}>
                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionHeader}>Other Details</h3>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Height:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="height"
                                        value={profileData.height}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.height}</span>
                                )}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Weight:</span>
                                {isEditMode ? (
                                    <input
                                        type="text"
                                        name="weight"
                                        value={profileData.weight}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.weight}</span>
                                )}
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>Address:</span>
                                {isEditMode ? (
                                    <textarea
                                        name="address"
                                        value={profileData.address}
                                        onChange={handleChange}
                                        className={styles.inputField}
                                        rows={2}
                                    />
                                ) : (
                                    <span className={styles.infoValue}>{profileData.address}</span>
                                )}
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.infoSection}>
                        <h3 className={styles.sectionHeader}>Medical Records</h3>
                        <div className={styles.medicalContent}>
                            <p>No medical data has been added yet.</p>
                            <button className={styles.medicalButton} onClick={() => setIsModalOpen(true)}>Add Medical Data</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.actions}>
                {isEditMode ? (
                    <button onClick={handleSaveClick} className={styles.saveButton}>Save Profile</button>
                ) : (
                    <button onClick={handleEditClick} className={styles.editButton}>Edit Profile</button>
                )}
            </div>
            {isModalOpen && <MedicalDataModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
};

export default ProfilePage;