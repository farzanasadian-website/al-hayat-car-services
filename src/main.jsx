import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import {Wrench, Droplets, BatteryCharging, Disc3, Gauge, Sparkles, Car, MapPin, Phone, MessageCircle, CalendarCheck, ShieldCheck, Timer, Star, Settings, Zap, Globe2, ChevronRight, PlayCircle, Languages, BadgeCheck, CircleDot} from 'lucide-react';
import './style.css';

const phoneCall = '+971506031369';
const phoneWhats = '+971522553418';
const website = 'www.alhayatcarservices.com';
const addressEN = 'Al Jurf, Ajman, United Arab Emirates';
const addressAR = 'الجرف، عجمان، الإمارات العربية المتحدة';
const waLink = `https://wa.me/${phoneWhats.replace('+','')}`;

const img = (name)=>`/images/${name}`;
const vid = (name)=>`/videos/${name}`;

const services = [
  ['Mechanical Repair','Engine, suspension, transmission & general repair','إصلاح ميكانيكي','المحرك، التعليق، ناقل الحركة والإصلاح العام', Wrench, '1000332058.jpg'],
  ['A/C Repair','Cooling system diagnosis & gas refill','إصلاح المكيف','تشخيص نظام التبريد وتعبئة الغاز', Sparkles, '1000332073.jpg'],
  ['Computer Diagnosis','Advanced fault detection','فحص كمبيوتر','كشف الأعطال بدقة', Gauge, '1000332064.jpg'],
  ['Injector Repair','Injector cleaning & repair','إصلاح البخاخات','تنظيف وإصلاح البخاخات', CircleDot, '1000332063.jpg'],
  ['Oil Change','Mobil 1 products & filters','تغيير الزيت','منتجات وفلاتر Mobil 1', Droplets, '1000332063.jpg'],
  ['Tyre Services','Replacement & balancing','خدمات الإطارات','تبديل وترصيص الإطارات', Disc3, '1000332061.jpg'],
  ['Brake Service','Pads, discs & inspection','خدمة الفرامل','فحمات، هوبات وفحص', ShieldCheck, '1000332096.jpg'],
  ['Electrical Repair','Wiring, lights & electrical systems','إصلاح الكهرباء','الأسلاك، الأنوار والأنظمة الكهربائية', Zap, '1000332064.jpg'],
  ['Battery Replacement','Battery testing & replacement','تبديل البطارية','فحص وتبديل البطارية', BatteryCharging, '1000332095.jpg'],
  ['Car Wash','Interior & exterior cleaning','غسيل السيارات','تنظيف داخلي وخارجي', Car, '1000332090.jpg'],
  ['Car Polish','Professional detailing & shine','تلميع السيارات','تلميع وديتيلينغ احترافي', Sparkles, '1000332091.jpg'],
  ['Auto Accessories','Seat covers, wipers & more','إكسسوارات السيارات','تلبيسات، مسّاحات والمزيد', Settings, '1000332072.jpg']
];

const gallery = ['1000332080.jpg','1000332078.jpg','1000332060.jpg','1000332056.jpg','1000332058.jpg','1000332061.jpg','1000332065.jpg','1000332068.jpg','1000332072.jpg','1000332076.jpg','1000332077.jpg','1000332081.jpg','1000332090.jpg','1000332091.jpg'];
const videos = ['1000332135.mp4','1000332138.mp4','1000332137.mp4'];

const text = {
  en: {
    nav:['Home','Services','About Us','Mobil 1 Center','Gallery','Contact'],
    loc:'Al Jurf, Ajman - UAE',
    hero:'Complete Car Care Under One Roof',
    heroRed:'One Roof',
    sub:'Professional automotive repair and maintenance services in Ajman powered by experience, quality and Mobil 1 products.',
    arabicLine:'خدمات متكاملة لسيارتك تحت سقف واحد',
    book:'Book Service', wa:'WhatsApp Us',
    stats:['Professional Technicians','Premium Mobil 1 Products','Modern Equipment','Fast Service','Customer Satisfaction','One Stop Solution'],
    services:'Our Services', about:'About Us', gallery:'Our Gallery', video:'Workshop Videos', contact:'Contact Us', powered:'Powered by',
    aboutText:'AL HAYAT CAR SERVICES is a professional automotive service center located in Al Jurf, Ajman, UAE. We provide complete vehicle care including mechanical repair, diagnostics, A/C services, oil changes, tyre services, electrical work, detailing and premium Mobil 1 lubrication products.',
    mission:'Our mission is to provide reliable service, transparent pricing and exceptional customer satisfaction.',
    read:'Read More About Us', view:'View Full Gallery', one:'One Stop Solution', products:'Mobil 1 Products', center:'Ajman Service Center', call:'Call Now', map:'Open Map', site:'Website', phone:'Phone', whatsapp:'WhatsApp'
  },
  ar: {
    nav:['الرئيسية','الخدمات','من نحن','مركز Mobil 1','المعرض','اتصل بنا'],
    loc:'الجرف، عجمان - الإمارات',
    hero:'خدمات متكاملة للسيارات تحت سقف واحد',
    heroRed:'سقف واحد',
    sub:'خدمات إصلاح وصيانة سيارات احترافية في عجمان بخبرة عالية وجودة ممتازة ومنتجات Mobil 1.',
    arabicLine:'Complete car care under one roof',
    book:'احجز خدمة', wa:'راسلنا واتساب',
    stats:['فنيون محترفون','منتجات Mobil 1 أصلية','معدات حديثة','خدمة سريعة','رضا العملاء','حل متكامل'],
    services:'خدماتنا', about:'من نحن', gallery:'المعرض', video:'فيديوهات الورشة', contact:'تواصل معنا', powered:'مدعوم من',
    aboutText:'الحياة لخدمات السيارات هو مركز صيانة سيارات احترافي يقع في الجرف، عجمان، الإمارات. نقدم رعاية متكاملة للسيارات تشمل الإصلاح الميكانيكي، فحص الكمبيوتر، خدمات المكيف، تغيير الزيت، الإطارات، الكهرباء، التلميع ومنتجات Mobil 1 عالية الجودة.',
    mission:'هدفنا تقديم خدمة موثوقة، أسعار واضحة وتجربة ممتازة للعملاء.',
    read:'اقرأ المزيد', view:'عرض المعرض', one:'حل متكامل', products:'منتجات Mobil 1', center:'مركز خدمة عجمان', call:'اتصل الآن', map:'افتح الخريطة', site:'الموقع', phone:'الهاتف', whatsapp:'واتساب'
  }
};

function App(){
 const [lang,setLang]=useState('en'); const t=text[lang]; const rtl=lang==='ar';
 const scrollTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
 return <main dir={rtl?'rtl':'ltr'} className={rtl?'rtl':''}>
   <div className="orb orb1"></div><div className="orb orb2"></div>
   <header className="topbar">
    <div className="brand"><img src={img('1782227313435.jpeg')} /><div><b>AL HAYAT</b><span>CAR SERVICES</span><small>الحياة لخدمات السيارات</small></div></div>
    <nav>{t.nav.map((n,i)=><button key={n} onClick={()=>scrollTo(['home','services','about','mobil','gallery','contact'][i])}>{n}</button>)}</nav>
    <div className="actions"><button className="lang" onClick={()=>setLang(lang==='en'?'ar':'en')}><Languages size={16}/>{lang==='en'?'EN | عربي':'عربي | EN'}</button><a className="wa" href={waLink}><MessageCircle size={18}/>{t.wa}</a></div>
   </header>

   <section id="home" className="hero">
    <div className="hero-bg"><img src={img('1000332080.jpg')} /></div>
    <div className="hero-content">
      <div className="left-copy">
        <div className="pin"><MapPin size={16}/>{t.loc}</div>
        <h1>{lang==='en'?<>Complete Car Care<br/>Under <em>One Roof</em></>:<>خدمات متكاملة<br/>للسيارات تحت <em>سقف واحد</em></>}</h1>
        <p>{t.sub}</p><h3>{t.arabicLine}</h3>
        <div className="cta"><a href={waLink} className="primary"><CalendarCheck size={20}/>{t.book}</a><a className="secondary" href={waLink}><MessageCircle size={20}/>{t.wa}</a></div>
      </div>
      <div className="hero-card tilt"><div className="shine"></div><img src={img('1782227313435.jpeg')} /><h2>AL HAYAT</h2><b>CAR SERVICES</b><small>الحياة لخدمات السيارات</small><div className="mini"><span><BadgeCheck/> {t.one}</span><span><Droplets/> {t.products}</span><span><MapPin/> {t.center}</span></div></div>
    </div>
    <div className="feature-strip">{t.stats.map((s,i)=>{const Icon=[Wrench,Droplets,Settings,Timer,Star,ShieldCheck][i]; return <div key={s}><Icon/><span>{s}</span></div>})}</div>
   </section>

   <section id="services" className="section services-wrap"><div className="title"><h2>{t.services}</h2><span></span></div><div className="services-grid">{services.map(([en,desc,ar,ardesc,Icon,image])=><article className="service-card" key={en}><img src={img(image)} /><div><Icon/><h4>{lang==='en'?en:ar}</h4><p>{lang==='en'?desc:ardesc}</p></div></article>)}</div></section>

   <section id="about" className="section split"><div className="panel about"><div className="title"><h2>{t.about}</h2><span></span></div><p>{t.aboutText}</p><p>{t.mission}</p><a href={waLink} className="darkbtn">{t.read}<ChevronRight size={18}/></a></div><div id="mobil" className="mobil panel"><h3>{t.powered}</h3><h2>Mobil 1™</h2><p>{lang==='en'?'We use premium Mobil 1 products to help keep your engine performing at its best.':'نستخدم منتجات Mobil 1 الممتازة للمساعدة في الحفاظ على أفضل أداء للمحرك.'}</p><img src={img('1000332063.jpg')} /></div></section>

   <section id="gallery" className="section"><div className="title"><h2>{t.gallery}</h2><span></span></div><div className="gallery-grid">{gallery.map((g,i)=><img key={g} src={img(g)} className={i%5===0?'wide':''}/>)}</div></section>

   <section className="section video-section"><div className="title"><h2>{t.video}</h2><span></span></div><div className="video-grid">{videos.map(v=><video key={v} src={vid(v)} controls muted playsInline preload="metadata" />)}</div></section>

   <section id="contact" className="contact"><div><h2>{t.contact}</h2><p><MapPin/> {rtl?addressAR:addressEN}</p></div><a href={waLink}><MessageCircle/> {phoneWhats} <small>({t.whatsapp})</small></a><a href={`tel:${phoneCall}`}><Phone/> {phoneCall} <small>({t.phone})</small></a><a href="https://www.google.com/maps/search/?api=1&query=AL+HAYAT+CAR+SERVICES+Al+Jurf+Ajman"><MapPin/> {t.map}</a><a href={`https://${website}`}><Globe2/> {website}</a></section>

   <footer><div className="brand small"><img src={img('1782227313435.jpeg')} /><div><b>AL HAYAT</b><span>CAR SERVICES</span></div></div><p>© 2026 AL HAYAT CAR SERVICES (S.P.S - L.L.C). All Rights Reserved.</p><div className="social"><a href={waLink}><MessageCircle/></a><a href={`tel:${phoneCall}`}><Phone/></a><a href="https://www.google.com/maps/search/?api=1&query=AL+HAYAT+CAR+SERVICES+Al+Jurf+Ajman"><MapPin/></a></div></footer>
   <a className="floatwa" href={waLink}><MessageCircle/> WhatsApp</a>
 </main>
}

createRoot(document.getElementById('root')).render(<App/>);
