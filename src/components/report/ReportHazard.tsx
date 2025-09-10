// src/components/report/ReportHazard.tsx
import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import styles from './ReportHazard.module.css';

const ReportHazard: React.FC = () => {
    const [reportCategory, setReportCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'pending' | 'success' | 'failed'>('idle');

    // Dummy data for hazard recommendations
    const marineHazardsRecommendations = [
        "Rip Currents",
        "Oil Spills",
        "Floating Debris",
        "Dangerous Marine Life",
        "Polluted Water",
        "Unsafe Weather Conditions",
        "Damaged Infrastructure"
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setMediaFiles(Array.from(event.target.files));
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setSubmissionStatus('pending');

        // Simulate an API call or data submission
        setTimeout(() => {
            // Check for mandatory fields
            if (!location || !description) {
                setSubmissionStatus('failed');
                alert("Submission failed. Please fill in all mandatory fields (Location and Description).");
                return;
            }
            
            // Log the form data for now
            console.log({
                reportCategory,
                description,
                location,
                latitude,
                longitude,
                mediaFiles
            });

            // Simulate success
            setSubmissionStatus('success');
            // Clear the form after a successful submission
            setReportCategory('');
            setDescription('');
            setLocation('');
            setLatitude('');
            setLongitude('');
            setMediaFiles([]);

            // You can add a success alert or a modal here
            alert("Report submitted successfully!");

        }, 2000); // 2-second delay to simulate network latency
    };

    return (
        <div className={styles.appLayout}>
            <Sidebar />
            <div className={styles.mainContentArea}>
                <div className={styles.reportFormCard}>
                    <h1 className={styles.formTitle}>Report a Marine Hazard</h1>
                    <p className={styles.formSubtitle}>Your report helps keep our waters and coastlines safe.</p>

                    <form onSubmit={handleSubmit} className={styles.reportForm}>
                        <div className={styles.formSection}>
                            <label htmlFor="categoryInput" className={styles.formLabel}>Category</label>
                            <input
                                list="hazards"
                                id="categoryInput"
                                className={styles.input}
                                value={reportCategory}
                                onChange={(e) => setReportCategory(e.target.value)}
                                placeholder="e.g., Oil Spill"
                            />
                            <datalist id="hazards">
                                {marineHazardsRecommendations.map((hazard, index) => (
                                    <option key={index} value={hazard} />
                                ))}
                            </datalist>
                        </div>

                        <div className={styles.formSection}>
                            <label htmlFor="description" className={styles.formLabel}>Description*</label>
                            <textarea
                                id="description"
                                className={styles.textarea}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the hazard in detail..."
                                required
                            ></textarea>
                        </div>

                        <div className={styles.formSection}>
                            <label htmlFor="location" className={styles.formLabel}>Location*</label>
                            <input
                                type="text"
                                id="location"
                                className={styles.input}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="e.g., Near Marina Beach, Chennai"
                                required
                            />
                        </div>

                        <div className={styles.locationGrid}>
                            <div className={styles.formSection}>
                                <label htmlFor="latitude" className={styles.formLabel}>Latitude (Optional)</label>
                                <input
                                    type="text"
                                    id="latitude"
                                    className={styles.input}
                                    value={latitude}
                                    onChange={(e) => setLatitude(e.target.value)}
                                    placeholder="e.g., 13.0827"
                                />
                            </div>
                            <div className={styles.formSection}>
                                <label htmlFor="longitude" className={styles.formLabel}>Longitude (Optional)</label>
                                <input
                                    type="text"
                                    id="longitude"
                                    className={styles.input}
                                    value={longitude}
                                    onChange={(e) => setLongitude(e.target.value)}
                                    placeholder="e.g., 80.2707"
                                />
                            </div>
                        </div>

                        <div className={styles.formSection}>
                            <label htmlFor="media" className={styles.formLabel}>Upload Media (Photos/Videos)</label>
                            <input
                                type="file"
                                id="media"
                                className={styles.fileInput}
                                multiple
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                            />
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={submissionStatus === 'pending'}>
                            {submissionStatus === 'pending' ? 'Submitting...' : 'Submit Report'}
                        </button>
                    </form>

                    {submissionStatus === 'success' && (
                        <div className={`${styles.statusMessage} ${styles.success}`}>
                            <p>Report submitted successfully! Thank you for your contribution.</p>
                        </div>
                    )}
                    {submissionStatus === 'pending' && (
                        <div className={styles.statusMessage}>
                            <p>Submission pending...</p>
                        </div>
                    )}
                    {submissionStatus === 'failed' && (
                        <div className={`${styles.statusMessage} ${styles.failed}`}>
                            <p>Submission failed. Please fill in all mandatory fields.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReportHazard;