import React from 'react';

const Blog = () => {
  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      padding: '2rem',
      backgroundColor: '#fff8fb',
      minHeight: '100vh',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      color: '#e673a7',
      marginBottom: '1rem',
    },
    intro: {
      textAlign: 'center',
      color: '#555',
      fontSize: '1.1rem',
      marginBottom: '3rem',
    },
    post: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
      marginBottom: '2rem',
    },
    postTitle: {
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
      color: '#333',
    },
    postMeta: {
      fontSize: '0.9rem',
      color: '#999',
      marginBottom: '1rem',
    },
    postContent: {
      fontSize: '1rem',
      color: '#444',
      lineHeight: 1.6,
    },
        footer: {
      backgroundColor: '#f8f4f2',
      color: '#4d4d4d',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
    },
    footerBottom: {
      textAlign: 'center',
      marginTop: '15px',
      fontSize: '14px',
      color: '#777',
    },
    footerContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '10px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerSection: {
      minWidth: '200px',
    },
    footerSectionTitle: {
      marginBottom: '10px',
      fontWeight: 600,
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
    },
    footerLink: {
      textDecoration: 'none',
      color: '#4d4d4d',
      display: 'block',
      marginBottom: '8px',
      transition: 'color 0.2s ease',
    },
    
  };

  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Summer Skincare Tips',
      date: 'June 1, 2025',
      content: 'Keep your skin hydrated, wear SPF daily, and exfoliate regularly. Choose lightweight moisturizers and never skip your night routine.',
    },
    {
      id: 2,
      title: 'How to Choose the Right Lip Balm',
      date: 'May 20, 2025',
      content: 'Always look for SPF, natural ingredients, and hydration boosters like hyaluronic acid or shea butter.',
    },
    {
      id: 3,
      title: 'Why Vitamin C is a Skincare Essential',
      date: 'May 10, 2025',
      content: 'Vitamin C helps brighten the skin, reduce pigmentation, and protect against sun damage. Use it in the morning under sunscreen for best results.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Beauty Blog</h1>
      <p style={styles.intro}>Explore skincare tips, product guides, and beauty inspiration!</p>
      {blogPosts.map(post => (
        <div key={post.id} style={styles.post}>
          <h2 style={styles.postTitle}>{post.title}</h2>
          <p style={styles.postMeta}>{post.date}</p>
          <p style={styles.postContent}>{post.content}</p>
        </div>
      ))}

    </div>
  );
};

export default Blog;
