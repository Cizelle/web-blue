// src/components/missing/MissingPersonFinder.tsx
import React, { useState, useEffect } from 'react';
import styles from './MissingPersonFinder.module.css';
import { useLocation } from 'react-router-dom';

const MissingPersonFinder: React.FC = () => {
    const location = useLocation();
    
    const [isFilingComplaint, setIsFilingComplaint] = useState(false);
    const [isReportingFound, setIsReportingFound] = useState(false);
    
    // State for the "File Complaint" form data
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        description: '',
        weight: '',
        phone: '',
        photo: null as File | null,
    });
    
    // State for the "Report Found" form data
    const [foundData, setFoundData] = useState({
        name: '',
        age: '',
        description: '',
        location: '12.9716° N, 77.5946° E', // Dummy location
        time: new Date().toLocaleString(),
        photo: null as File | null,
    });

    // Dummy data for the list of missing people
    const [missingPeople, setMissingPeople] = useState([
        { id: 'MP001', name: 'Alok Singh', age: 25, description: 'Lost during the flood, last seen near the river bank. Wearing a blue jacket.', weight: 70, phone: '9876543210', photoUrl: 'https://via.placeholder.com/150' },
        { id: 'MP002', name: 'Priya Sharma', age: 12, description: 'Went missing from her home. Wearing a red dress.', weight: 35, phone: '9988776655', photoUrl: 'https://via.placeholder.com/150' },
    ]);
    
    // Check for the query parameter on component mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        if (queryParams.get('action') === 'file-complaint') {
            setIsFilingComplaint(true);
        }
    }, [location.search]);

    const handleFileComplaintSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Filing new complaint:', formData);
        
        const newPerson = {
            id: `MP00${missingPeople.length + 1}`,
            name: formData.name,
            age: parseInt(formData.age),
            description: formData.description,
            weight: parseInt(formData.weight),
            phone: formData.phone,
            photoUrl: formData.photo ? URL.createObjectURL(formData.photo) : 'https://via.placeholder.com/150'
        };
        setMissingPeople([...missingPeople, newPerson]);
        
        setFormData({ name: '', age: '', description: '', weight: '', phone: '', photo: null });
        setIsFilingComplaint(false);
        alert('Missing person complaint filed successfully!');
    };

    const handleReportFoundSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Reporting found person:', foundData);
        
        setFoundData({ name: '', age: '', description: '', location: '12.9716° N, 77.5946° E', time: new Date().toLocaleString(), photo: null });
        setIsReportingFound(false);
        alert('Found person reported successfully!');
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFormData({ ...formData, photo: event.target.files[0] });
        }
    };
    
    const handleFoundPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFoundData({ ...foundData, photo: event.target.files[0] });
        }
    };
    
    const handleReportFoundClick = (person?: typeof missingPeople[0]) => {
        if (person) {
            setFoundData({
                ...foundData,
                name: person.name,
                age: person.age.toString(),
                description: person.description,
            });
        } else {
            setFoundData({
                ...foundData,
                name: '',
                age: '',
                description: '',
            });
        }
        setIsReportingFound(true);
    };

    return (
        <>
            <div className={styles.greenHeaderCard}>
                <div className={styles.headerText}>
                    <h1 className={styles.headerTitle}>Missing Person Finder</h1>
                    <p className={styles.headerSubtitle}>Report or track missing persons in your community.</p>
                </div>
            </div>
            <div className={styles.headerButtonsContainer}>
                <button className={styles.mainButton} onClick={() => setIsFilingComplaint(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                    File Missing Person
                </button>
             
            </div>
            
            <h2 className={styles.listTitle}>Missing Person Complaints</h2>
            <div className={styles.missingList}>
                {missingPeople.map(person => (
                    <div key={person.id} className={styles.missingItem}>
                        <img src={person.photoUrl} alt={person.name} className={styles.personPhoto} />
                        <div className={styles.personDetails}>
                            <h3 className={styles.personName}>{person.name}</h3>
                            <p className={styles.personInfo}>Age: {person.age}</p>
                            <p className={styles.personDescription}>{person.description}</p>
                        </div>
                        <button 
                            className={styles.reportFoundButton}
                            onClick={() => handleReportFoundClick(person)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8l4 4-4 4M8 12h8"></path></svg>
                            Found
                        </button>
                    </div>
                ))}
            </div>

            {/* File Missing Person Modal */}
            {isFilingComplaint && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setIsFilingComplaint(false)}>&times;</button>
                        <h2 className={styles.modalTitle}>File Missing Person Complaint</h2>
                        <form onSubmit={handleFileComplaintSubmit} className={styles.form}>
                            <div className={styles.formSection}>
                                <label>Name:</label>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div className={styles.formSection}>
                                <label>Age:</label>
                                <input type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Weight (kg):</label>
                                <input type="number" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Phone Number:</label>
                                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Description (Mandatory):</label>
                                <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
                            </div>
                            <div className={styles.formSection}>
                                <label>Photo:</label>
                                <input type="file" accept="image/*" onChange={handlePhotoChange} />
                            </div>
                            <button type="submit" className={styles.submitButton}>Submit Complaint</button>
                        </form>
                    </div>
                </div>
            )}
            
            {/* Report Found Person Modal */}
            {isReportingFound && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setIsReportingFound(false)}>&times;</button>
                        <h2 className={styles.modalTitle}>Report Found Person</h2>
                        <form onSubmit={handleReportFoundSubmit} className={styles.form}>
                            <div className={styles.formSection}>
                                <label>Name:</label>
                                <input type="text" value={foundData.name} onChange={(e) => setFoundData({ ...foundData, name: e.target.value })} required />
                            </div>
                            <div className={styles.formSection}>
                                <label>Age:</label>
                                <input type="number" value={foundData.age} onChange={(e) => setFoundData({ ...foundData, age: e.target.value })} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Description:</label>
                                <textarea value={foundData.description} onChange={(e) => setFoundData({ ...foundData, description: e.target.value })} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Location:</label>
                                <input type="text" value={foundData.location} readOnly className={styles.readOnlyInput} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Time:</label>
                                <input type="text" value={foundData.time} readOnly className={styles.readOnlyInput} />
                            </div>
                            <div className={styles.formSection}>
                                <label>Upload Picture (Mandatory):</label>
                                <input type="file" accept="image/*" onChange={handleFoundPhotoChange} required />
                            </div>
                            <button type="submit" className={styles.submitButton}>Report Found</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default MissingPersonFinder;