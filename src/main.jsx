import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Wrench, Gauge, Battery, Disc3, Car, Sparkles, Droplets, Snowflake, Cpu, MapPin, Phone, MessageCircle, Clock3, ShieldCheck, Star, Settings, Zap, Languages, ChevronRight } from 'lucide-react';
import './styles.css';

const img = (n)=>`/images/${n}`;
const wa = 'https://wa.me/971522553418';
const phone = 'tel:+971506031369';

const content = {
  en: {
    nav:['Home','Services','About Us','Mobil 1 Center','Gallery','Contact'],
    heroTitle:<><span>Complete Car Care</span><span>Under <b>One Roof</b></span></>,
    heroText:'Professional automotive repair, maintenance, premium Mobil 1 lubrication, car wash and detailing services in Al Jurf, Ajman.',
    heroSub:'Integrated vehicle services under one trusted roof.',
    book:'Book Service', whats:'WhatsApp Us',
    badges:['Professional Technicians','Premium Mobil 1 Products','Modern Equipment','Fast Service','Customer Satisfaction','One Stop Solution'],
    aboutTitle:'ABOUT US',
    about:'AL HAYAT CAR SERVICES is a professional automotive service center located in Al Jurf, Ajman, UAE. We provide complete vehicle care including mechanical repair, diagnostics, A/C services, oil changes, tyre services, electrical work, car wash, polishing, detailing and premium Mobil 1 lubrication products.',
    mobil:'Powered by premium Mobil 1 products, stocked and displayed professionally for quick oil service and customer confidence.',
    gallery:'OUR GALLERY', contact:'CONTACT US',
    address:'Al Jurf, Ajman, United Arab Emirates',
  },
  ar: {
    nav:['الرئيسية','الخدمات','من نحن','مركز موبيل 1','المعرض','اتصل بنا'],
    heroTitle:<><span>خدمات متكاملة</span><span>للسيارات <b>تحت سقف واحد</b></span></>,
    heroText:'خدمات احترافية لصيانة وإصلاح السيارات وتغيير زيوت Mobil 1 وغسيل وتلميع السيارات في الجرف، عجمان.',
    heroSub:'خدمة موثوقة ومتكاملة لسيارتك في مكان واحد.',
    book:'احجز خدمة', whats:'واتساب',
    badges:['فنيون محترفون','منتجات Mobil 1 أصلية','معدات حديثة','خدمة سريعة','رضا العملاء','حل متكامل'],
    aboutTitle:'من نحن',
    about:'الحياة لخدمات السيارات مركز متخصص في الجرف، عجمان، الإمارات. نقدم خدمات متكاملة تشمل الإصلاحات الميكانيكية، الفحص بالكمبيوتر، التكييف، تغيير الزيوت، الإطارات، الكهرباء، غسيل السيارات، التلميع ومنتجات Mobil 1 الممتازة.',
    mobil:'مدعومون بمنتجات Mobil 1 الممتازة مع عرض احترافي للزيوت لتقديم خدمة أسرع وثقة أعلى للعملاء.',
    gallery:'المعرض', contact:'اتصل بنا',
    address:'الجرف، عجمان، الإمارات العربية المتحدة',
  }
};

const serviceData = [
  ['Mechanical Repair','إصلاح ميكانيكي','Engine, suspension, transmission & general repair','المحرك، التعليق، الجير والإصلاح العام',img('mechanical.jpg'),Wrench],
  ['A/C Repair','إصلاح التكييف','Cooling system diagnosis & gas refill','فحص نظام التبريد وتعبئة الغاز',img('ac-service.jpg'),Snowflake],
  ['Computer Diagnosis','فحص كمبيوتر','Advanced fault detection','كشف الأعطال بالكمبيوتر',img('oil-corner.jpg'),Cpu],
  ['Injector Repair','إصلاح الانجكتر','Injector cleaning & repair','تنظيف وإصلاح الانجكتر',img('ac-service.jpg'),Gauge],
  ['Oil Change','تغيير الزيت','Mobil 1 oil products & filters','زيوت Mobil 1 والفلاتر',img('mobil-stand.jpg'),Droplets],
  ['Tyre Services','خدمات الإطارات','Replacement & balancing','تبديل وميزان الإطارات',img('tyre.jpg'),Disc3],
  ['Brake Service','خدمة الفرامل','Pads, discs & inspection','فحص وتبديل الفحمات والدسكات',img('lifts.jpg'),Disc3],
  ['Electrical Repair','إصلاح الكهرباء','Wiring, lights & electrical systems','الأسلاك والأنوار والأنظمة الكهربائية',img('workshop-wide.jpg'),Zap],
  ['Battery Replacement','تبديل البطارية','Battery testing & replacement','فحص وتبديل البطارية',img('workshop-wide.jpg'),Battery],
  ['Car Wash','غسيل سيارات','Interior & exterior cleaning','غسيل داخلي وخارجي',img('carwash.jpg'),Car],
  ['Car Polish','تلميع السيارات','Professional detailing & shine','تلميع وتفصيل احترافي',img('carwash-detail.jpg'),Sparkles],
  ['Auto Accessories','إكسسوارات السيارات','Seat covers, wipers, interior accessories & more','تلبيسات، مساحات وإكسسوارات داخلية',img('accessories.jpg'),Settings],
];

function ExplodedCar(){
  return <div className="exploded-wrap" aria-label="Interactive exploded car concept">
    <div className="exploded-glow"></div>
    <div className="part body"></div><div className="part hood"></div><div className="part roof"></div><div className="part wheel w1"></div><div className="part wheel w2"></div><div className="part engine"></div><div className="part light l1"></div><div className="part light l2"></div>
    <div className="label-chip">Interactive 3D-style care system</div>
  </div>
}

function App(){
  const [lang,setLang]=useState('en'); const t=content[lang]; const rtl=lang==='ar';
  const nav = t.nav;
  return <main className={rtl?'rtl':''} dir={rtl?'rtl':'ltr'}>
    <header className="topbar">
      <a className="brand" href="#home"><img src={img('logo.jpg')} /><div><strong>AL HAYAT</strong><span>CAR SERVICES</span><small>الحياة لخدمات السيارات</small></div></a>
      <nav>{nav.map((n,i)=><a key={n} href={`#${['home','services','about','mobil','gallery','contact'][i]}`}>{n}</a>)}</nav>
      <div className="actions"><button onClick={()=>setLang(lang==='en'?'ar':'en')} className="lang"><Languages size={16}/>{lang==='en'?'عربي':'EN'}</button><a className="wa" href={wa}><MessageCircle size={18}/> WhatsApp</a></div>
    </header>

    <section id="home" className="hero">
      <div className="hero-bg" style={{backgroundImage:`url(${img('exterior3.jpg')})`}}></div><div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="copy"><p className="loc"><MapPin size={16}/> {t.address}</p><h1>{t.heroTitle}</h1><p className="lead">{t.heroText}</p><p className="arabic-line">{t.heroSub}</p><div className="hero-buttons"><a className="primary" href={wa}>{t.book}</a><a className="secondary" href={wa}><MessageCircle size={18}/>{t.whats}</a></div></div>
        <div className="hero-visual"><ExplodedCar/><div className="video-card"><video src="/videos/showcase.mp4" autoPlay muted loop playsInline poster={img('workshop-wide.jpg')}></video><div className="video-caption"><b>AL HAYAT</b><span>Workshop in action</span></div></div></div>
      </div>
      <div className="trust-row">{t.badges.map((b,i)=>{const icons=[Wrench,Droplets,Settings,Clock3,Star,ShieldCheck]; const I=icons[i]; return <div className="trust" key={b}><I size={25}/><span>{b}</span></div>})}</div>
    </section>

    <section id="services" className="section services-section"><div className="section-title"><span>OUR</span><b>SERVICES</b></div><div className="services-grid">
      {serviceData.map(([en,ar,ed,ad,photo,Icon])=><article className="service-card" key={en}><img src={photo}/><div className="service-icon"><Icon size={22}/></div><h3>{rtl?ar:en}</h3><p>{rtl?ad:ed}</p></article>)}
    </div></section>

    <section id="about" className="section about-grid"><div className="about-card"><h2>{t.aboutTitle}</h2><p>{t.about}</p><div className="about-stats"><span><b>12+</b> Services</span><span><b>Mobil 1</b> Products</span><span><b>Ajman</b> Location</span></div><a className="readmore" href="#contact">Contact Us <ChevronRight size={17}/></a></div><div id="mobil" className="mobil-card"><img src={img('mobil-stand.jpg')} /><div><h2>Powered by <b>Mobil 1™</b></h2><p>{t.mobil}</p></div></div></section>

    <section id="gallery" className="section gallery"><div className="section-title"><span>{rtl?'':'OUR'}</span><b>{t.gallery}</b></div><div className="gallery-grid">
      {['hero-exterior.jpg','workshop-wide.jpg','lifts.jpg','carwash.jpg','accessories.jpg','tint.jpg','lounge.jpg','exterior2.jpg'].map((g,i)=><img key={g} src={img(g)} className={i===0?'wide':''}/>) }
    </div></section>

    <section id="contact" className="contact"><div><h2>{t.contact}</h2><p><MapPin/> {t.address}</p><p><MessageCircle/> +971 52 255 3418 (WhatsApp)</p><p><Phone/> +971 50 603 1369 (Phone)</p></div><div className="contact-actions"><a href={wa} className="primary"><MessageCircle/> WhatsApp Us</a><a href={phone} className="secondary"><Phone/> Call Now</a></div></section>

    <footer><div className="brand small"><img src={img('logo.jpg')} /><div><strong>AL HAYAT</strong><span>CAR SERVICES</span></div></div><p>© 2026 AL HAYAT CAR SERVICES (S.P.S - L.L.C). All Rights Reserved.</p><div><Star/><MessageCircle/><Phone/></div></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App/>);
