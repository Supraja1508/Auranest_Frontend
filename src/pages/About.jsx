import React from 'react';

const About = () => {
  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      color: '#333',
      lineHeight: 1.6,
      padding: '2rem',
      backgroundColor: '#fff8fb',
    },
    hero: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '3rem',
    },
    heroImage: {
      flex: '1 1 300px',
      maxWidth: '400px',
      margin: '1rem',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    },
    heroText: {
      flex: '1 1 300px',
      margin: '1rem',
      textAlign: 'left',
    },
    heroTitle: {
      fontSize: '2.5rem',
      color: '#e673a7',
      marginBottom: '1rem',
    },
    section: {
      marginBottom: '3rem',
      padding: '1rem',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#e673a7',
      marginBottom: '0.5rem',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginTop: '1rem',
    },
    memberCard: {
      backgroundColor: '#fffafc',
      borderRadius: '12px',
      padding: '1rem',
      textAlign: 'center',
      boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    memberImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    memberName: {
      fontSize: '1.2rem',
      fontWeight: '600',
      color: '#333',
      marginBottom: '0.5rem',
    },
    memberRole: {
      fontSize: '0.9rem',
      color: '#777',
    },
    valuesList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '1rem',
    },
    valueItem: {
      marginBottom: '0.75rem',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
    },
    valueBullet: {
      width: '12px',
      height: '12px',
      backgroundColor: '#e673a7',
      borderRadius: '50%',
      marginRight: '0.75rem',
    },
    quote: {
      fontStyle: 'italic',
      textAlign: 'center',
      padding: '1rem',
      color: '#555',
      margin: '2rem 0',
    },

  };

  const team = [
    {
      name: 'Supraja',
      role: 'Founder & CEO',
      img: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=',
    },
    {
      name: 'Shiva Hariny',
      role: 'Head of Design',
      img: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww',
    },
    {
      name: 'Meera Iyer',
      role: 'Skincare Expert',
      img: 'https://t3.ftcdn.net/jpg/07/88/50/48/360_F_788504831_JdpN6ujefLwj0k51gDJhGt5QspblOun4.jpg',
    },
  ];

  const values = [
    'Natural and cruelty-free ingredients',
    'Inclusive beauty for all',
    'Sustainability at our core',
    'Innovative and effective solutions',
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <img
          src="https://github.com/ShivaHariny07/auranest/blob/main/pictures/logo.jpg?raw=true"
          alt="AuraNest"
          style={styles.heroImage}
        />
        <div style={styles.heroText}>
          <h1 style={styles.heroTitle}>About AuraNest</h1>
          <p>
            Founded with passion, AuraNest is a premium cosmetics brand dedicated
            to delivering natural, cruelty-free beauty products that respect both
            skin and planet. Our journey began with a simple belief: everyone
            deserves radiant, healthy skin.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <ul style={styles.valuesList}>
          {values.map((val, idx) => (
            <li key={idx} style={styles.valueItem}>
              <div style={styles.valueBullet} />
              {val}
            </li>
          ))}
        </ul>
      </div>

      {/* Team Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Meet the Team</h2>
        <div style={styles.teamGrid}>
          {team.map((m, idx) => (
            <div
              key={idx}
              style={styles.memberCard}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <img src={m.img} alt={m.name} style={styles.memberImage} />
              <div style={styles.memberName}>{m.name}</div>
              <div style={styles.memberRole}>{m.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Quote */}
      <div style={styles.quote}>
        “AuraNest’s products have totally changed my skincare routine—the results
        are soft, natural, and radiant. I feel beautiful, inside and out.”
        — Sarah, Happy Customer
      </div>

    </div>
  );
};

export default About;
