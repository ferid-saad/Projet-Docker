CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telephone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO contacts (nom, email, telephone) VALUES
('ferid saad', 'fersd2018@gmail.com', '97460346'),
('Med Kacem Saad', 'MedKacem@gmail.com', '97111222'),
('Hadil Saad', 'Hadilsd@gmail.com', '97333444');