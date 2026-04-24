"use client";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Navbar */}
      <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="nav-logo">माँ गढ़देवी</a>
          
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#" onClick={() => setMenuOpen(false)}>गृह</a></li>
            <li><a href="#history" onClick={() => setMenuOpen(false)}>इतिहास</a></li>
            <li><a href="#ardhanarishwar" onClick={() => setMenuOpen(false)}>अर्धनारीश्वर</a></li>
            <li><a href="#darshan" onClick={() => setMenuOpen(false)}>दर्शन</a></li>
          </ul>

          <div className="social-links">
            <a href="https://www.instagram.com/maa_garhdevi_mandir?igsh=MXNjdjU3bjNxejcyaw==" target="_blank" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Hamburger Button */}
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate">
          <p className="serif" style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1rem', marginBottom: '1rem' }}>हार्दिक अभिनंदन</p>
          <h1>माँ गढ़देवी मंदिर</h1>
          <p>गढ़वा के हृदय में स्थित अटूट श्रद्धा, परंपरा और दिव्य आशीर्वाद की एक पवित्र यात्रा।</p>
          <a href="#history" className="btn btn-gold">इतिहास जानें</a>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="container">
        <h2 className="section-title">पावन इतिहास</h2>
        <div className="history-grid">
          <div className="image-wrapper animate">
            <img src="/maa.png" alt="Maa Garhdevi Idol" style={{ objectPosition: 'center 20%' }} />
          </div>
          <div className="animate">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>200 वर्षों की गौरवशाली विरासत</h3>
            <p style={{ marginBottom: '1rem' }}>
              झारखंड के गढ़वा शहर के मध्य में स्थित माँ गढ़देवी मंदिर, सदियों की भक्ति का प्रतीक है। जबकि मंदिर की जड़ें 200 से अधिक वर्षों पुरानी हैं, यहाँ दुर्गा पूजा की औपचारिक परंपरा 1914 में शुरू हुई थी।
            </p>
            <p style={{ marginBottom: '1rem' }}>
              स्थानीय मान्यताओं के अनुसार, गढ़वा के तत्कालीन ज़मींदार, <strong>बाबू अमर दयाल सिंह</strong> को एक ब्राह्मण ने पुत्र प्राप्ति के लिए बंगाली परंपराओं के अनुसार दुर्गा पूजा करने की सलाह दी थी। उनकी मनोकामना पूर्ण होने पर, उन्होंने इस मंदिर की स्थापना की, और तब से यह परंपरा एक शताब्दी से भी अधिक समय से निरंतर चली आ रही है।
            </p>
            <p style={{ marginBottom: '1rem' }}>
              समय के साथ मंदिर की परंपराओं में भी बदलाव आया है। वर्ष 2000 में, मंदिर ट्रस्ट के मार्गदर्शन में, भैंसा बलि की सदियों पुरानी प्रथा को समुदाय की आध्यात्मिक प्रगति को देखते हुए गरिमापूर्ण तरीके से बंद कर दिया गया।
            </p>
            <p style={{ marginBottom: '1rem' }}>
              एक अनूठी परंपरा जो आज भी जारी है, वह है <strong>विसर्जन शोभायात्रा</strong>। विजयादशमी के दिन, माँ की प्रतिमा को वाहनों पर नहीं, बल्कि सैकड़ों समर्पित युवाओं के कंधों पर उठाकर पूरे गढ़वा शहर में भ्रमण कराया जाता है।
            </p>
            <p>
              आज, यह मंदिर पूरे गढ़वा क्षेत्र का आध्यात्मिक केंद्र है, जहाँ माना जाता है कि जगदंबा के दरबार में की गई हर प्रार्थना सुनी जाती है।
            </p>
          </div>
        </div>
      </section>

      {/* New Addition Section */}
      <section id="ardhanarishwar" style={{ background: 'var(--red-gradient)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ color: 'white' }}>अर्धनारीश्वर महादेव मंदिर</h2>
          <p className="serif" style={{ fontSize: '2rem', marginBottom: '2rem', fontStyle: 'italic' }}>
            "🌺🔱 जय श्री अर्धनारीश्वर महादेव 🔱🌺"
          </p>
          <div className="history-grid">
            <div className="image-wrapper animate" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
              <img src="/ardhanarishwara.jpeg" alt="Ardhanarishwara Mahadev" />
            </div>
            <div className="glass-card" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>भक्ति का नया युग</h3>
              <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
                मंदिर परिसर में एक भव्य नया अध्याय जोड़ते हुए, <strong>अर्धनारीश्वर महादेव मंदिर</strong> की प्राण प्रतिष्ठा वर्ष 2026 की शुरुआत में की गई। यह भव्य संरचना शिव और शक्ति के मिलन का प्रतीक है, जो गढ़देवी परिसर की आध्यात्मिक आभा को और भी बढ़ाती है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Darshan Section */}
      <section id="darshan" style={{ background: '#f9f3ef' }}>
        <div className="container">
          <h2 className="section-title">मंदिर दर्शन</h2>
          <div className="history-grid" style={{ marginBottom: '4rem' }}>
            <div className="animate">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--primary)' }}>दिव्य शांति</h3>
              <p>इन पावन झलकियों के माध्यम से माँ गढ़देवी मंदिर परिसर के शांत और दिव्य वातावरण का अनुभव करें।</p>
            </div>
            <div className="image-wrapper animate">
              <img src="/shrine_wide.jpeg" alt="Temple Shrine" />
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: '4rem' }}>आध्यात्मिक विशेषताएँ</h2>
          <div className="highlights">
            <div className="glass-card highlight-item">
              <span className="highlight-icon">🕉️</span>
              <h3 style={{ marginBottom: '1rem' }}>सिद्ध पीठ</h3>
              <p>झारखंड, बिहार और यूपी के भक्तों का विश्वास है कि यहाँ सच्चे मन से मांगी गई मुराद कभी खाली नहीं जाती।</p>
            </div>
            <div className="glass-card highlight-item">
              <span className="highlight-icon">🏰</span>
              <h3 style={{ marginBottom: '1rem' }}>वास्तुकला</h3>
              <p>मंदिर का शिखर लगभग 109 फीट ऊंचा है, जिसके ऊपर एक चमकता हुआ स्वर्ण कलश स्थापित है।</p>
            </div>
            <div className="glass-card highlight-item">
              <span className="highlight-icon">🌺</span>
              <h3 style={{ marginBottom: '1rem' }}>महा पूजा</h3>
              <p>शारदीय और चैत्र नवरात्र के दौरान यहाँ भव्य उत्सव और मेले का आयोजन होता है, जिसमें लाखों भक्त जुटते हैं।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container">
        <h2 className="section-title">दर्शन हेतु पधारें</h2>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
            गढ़वा शहर के हृदय में स्थित। दिव्य शांति और आशीर्वाद का अनुभव करें।
          </p>
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '30px', position: 'relative', height: '0', paddingBottom: '56.25%' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.361546416174!2d83.8118!3d24.1627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39893d9a13b63b51%3A0xe54e604f3d64c676!2sMaa%20Garhdevi%20Mandir%2C%20Garhwa!5e0!3m2!1sen!2sin!4v1714000000000!5m2!1sen!2sin" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="https://share.google/zyYZjvLtcyKfCyLyU" target="_blank" className="btn btn-gold">गूगल मैप्स पर देखें</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <span className="footer-logo">माँ गढ़देवी मंदिर</span>
          <p>© 2026 गढ़देवी मंदिर ट्रस्ट, गढ़वा। सर्वाधिकार सुरक्षित।</p>
          <div className="social-links" style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <a href="https://www.instagram.com/maa_garhdevi_mandir?igsh=MXNjdjU3bjNxejcyaw==" target="_blank" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://youtube.com" target="_blank" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
            </a>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '2rem' }}>भक्ति और सेवा के साथ निर्मित।</p>
        </div>
      </footer>
    </main>
  );
}
