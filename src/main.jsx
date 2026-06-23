import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Phone, MapPin, MessageCircle, Wrench, Droplets, Battery, Gauge, Sparkles, Disc3, Wind, Car, ShieldCheck, Clock, Star, Languages, ChevronRight, Menu, X } from 'lucide-react';
import './styles.css';

const phone = '0522553418';
const whatsapp = '971522553418';
const addressEN = 'Al Jurf, Ajman, UAE';
const addressAR = 'الجرف، عجمان، الإمارات';
const company = 'AL HAYAT CAR SERVICES (S.P.S - L.L.C)';

const services = [
  ['Mechanical Repair','Engine, suspension, transmission & general repair','إصلاح ميكانيكي','المحرك، التعليق، ناقل الحركة والإصلاح العام', Wrench],
  ['A/C Repair','Cooling system, refrigerant & compressor service','إصلاح التكييف','فحص وإصلاح نظام التبريد والغاز والكمبروسر', Wind],
  ['Computer Diagnosis','Advanced fault detection and troubleshooting','فحص الكمبيوتر','تشخيص الأعطال بالكمبيوتر', Gauge],
  ['Injector Repair','Injector cleaning and repair','إصلاح البخاخات','تنظيف وإصلاح البخاخات', Droplets],
  ['Oil Change','Mobil 1 products and filters','تغيير الزيت','زيوت Mobil 1 والفلاتر', Droplets],
  ['Tyre Services','Replacement, balancing and tyre care','خدمات الإطارات','تبديل وترصيص وصيانة الإطارات', Disc3],
  ['Brake Service','Pads, discs and safety inspection','خدمة الفرامل','فحص وتغيير الفحمات والدسكات', ShieldCheck],
  ['Electrical Repair','Wiring, lights, sensors and battery checks','إصلاح كهرباء السيارات','الأسلاك، الأنوار، الحساسات وفحص البطارية', Battery],
  ['Battery Replacement','Testing, replacement and installation','تبديل البطارية','فحص وتركيب البطاريات', Battery],
  ['Car Wash','Interior and exterior cleaning','غسيل السيارات','تنظيف داخلي وخارجي', Droplets],
  ['Car Polish','Detailing, shine and protection','تلميع السيارات','تلميع وحماية ولمعان احترافي', Sparkles],
  ['Auto Accessories','Car covers, wipers, seat covers and accessories','اكسسوارات السيارات','أغطية، مساحات، تلبيسات واكسسوارات', Car]
];

const gallery = [
  '1000332072.jpg','1000332094.jpg','1000332093.jpg','1000332080.jpg','1000332065.jpg','1000332064.jpg','1000332077.jpg','1000332078.jpg','1000332079.jpg','1000332074.jpg','1000332075.jpg','1000332071.jpg','1000332073.jpg','1000332069.jpg','1000332067.jpg','1000332076.jpg','1000332063.jpg','1000332062.jpg','1000332060.jpg','1000332058.jpg','1000332056.jpg','1000332055.jpg','1000332066.jpg','1000332089.jpg'
];

const heroImages = ['1000332072.jpg','1000332094.jpg','1000332093.jpg','1000332080.jpg'];

function App(){
  const [lang,setLang] = useState('en');
  const [open,setOpen] = useState(false);
  const ar = lang==='ar';
  const t = {
    nav:['Home','Services','About Us','Mobil 1 Center','Gallery','Contact'],
    navAr:['الرئيسية','الخدمات','من نحن','مركز Mobil 1','المعرض','اتصل بنا'],
    heroTitle: ar ? 'خدمة سيارات متكاملة تحت سقف واحد' : 'Complete Car Care Under One Roof',
    heroSub: ar ? 'مركز احترافي لصيانة وإصلاح السيارات في عجمان، مدعوم بخبرة عملية، تجهيزات حديثة ومنتجات Mobil 1 الأصلية.' : 'Professional automotive repair, maintenance, Mobil 1 oil service, car wash and detailing in Ajman — powered by experience, modern equipment and trusted products.',
    book: ar ? 'احجز خدمة' : 'Book Service',
    whats: ar ? 'واتساب' : 'WhatsApp Us'
  };
  const nav = ar ? t.navAr : t.nav;
  return <div dir={ar?'rtl':'ltr'} className="site">
    <header className="nav">
      <a className="brand" href="#home"><img src="/images/logo.png"/><span><b>AL HAYAT</b><small>{ar?'الحياة لخدمات السيارات':'CAR SERVICES'}</small></span></a>
      <button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <nav className={open?'show':''}>{nav.map((n,i)=><a onClick={()=>setOpen(false)} href={['#home','#services','#about','#mobil','#gallery','#contact'][i]} key={n}>{n}</a>)}<button onClick={()=>setLang(ar?'en':'ar')} className="lang"><Languages size={16}/>{ar?'EN':'عربي'}</button><a className="wa" href={`https://wa.me/${whatsapp}`}><MessageCircle size={17}/> WhatsApp</a></nav>
    </header>

    <main id="home">
      <section className="hero">
        <div className="glow one"></div><div className="glow two"></div>
        <div className="heroText">
          <p className="eyebrow"><MapPin size={16}/>{ar?addressAR:addressEN}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroSub}</p>
          <div className="cta"><a className="primary" href={`tel:${phone}`}><Phone size={18}/>{ar?'اتصل الآن':'Call Now'} {phone}</a><a className="secondary" href={`https://wa.me/${whatsapp}`}><MessageCircle size={18}/>{t.whats}</a></div>
          <div className="stats"><span><b>12+</b>{ar?'خدمة':'Services'}</span><span><b>Mobil 1</b>{ar?'منتجات':'Products'}</span><span><b>Ajman</b>{ar?'موقع مميز':'Service Center'}</span></div>
        </div>
        <div className="heroVisual"><video src="/videos/outside.mp4" autoPlay muted loop playsInline poster="/images/1000332072.jpg"></video><div className="logoCard"><img src="/images/logo.png"/><span>{company}</span></div></div>
      </section>

      <section className="trustbar">
        {[ar?'فنيون محترفون':'Professional Technicians', ar?'معدات حديثة':'Modern Equipment', ar?'خدمة سريعة':'Fast Service', ar?'منتجات Mobil 1':'Mobil 1 Products', ar?'حل متكامل':'One Stop Solution'].map(x=><span key={x}><Star size={16}/>{x}</span>)}
      </section>

      <section id="services" className="section light"><div className="sectionHead"><p>{ar?'خدماتنا':'Our Services'}</p><h2>{ar?'كل ما تحتاجه سيارتك في مكان واحد':'Everything your car needs, handled with care.'}</h2></div><div className="serviceGrid">{services.map(([en,sub,ara,suba,Icon])=><article className="service" key={en}><Icon/><h3>{ar?ara:en}</h3><p>{ar?suba:sub}</p></article>)}</div></section>

      <section id="about" className="split"><div><p className="eyebrow blue">{ar?'من نحن':'About AL HAYAT'}</p><h2>{ar?'مركز خدمة سيارات واسع في قلب الجرف، عجمان':'A large, capable car service center in Al Jurf, Ajman.'}</h2><p>{ar?'نقدم خدمات الصيانة والإصلاح وغسيل السيارات والتلميع وتغيير الزيت وخدمات الإطارات والبطارية والتكييف وفحص الكمبيوتر، مع الاعتماد على منتجات Mobil 1 الأصلية وتجهيزات ورشة حديثة.':'We provide complete vehicle care including mechanical repairs, A/C service, diagnostics, oil changes, tyre services, battery, car wash, polishing and accessories — with Mobil 1 products and modern workshop equipment.'}</p><div className="featureList"><span><ShieldCheck/> {ar?'شفافية في الخدمة':'Transparent service'}</span><span><Clock/> {ar?'استجابة سريعة':'Fast response'}</span><span><Wrench/> {ar?'معدات ورشة حديثة':'Modern workshop equipment'}</span></div></div><div className="imageStack"><img src="/images/1000332094.jpg"/><img src="/images/1000332093.jpg"/></div></section>

      <section id="mobil" className="mobil"><div><p className="eyebrow">Mobil 1 Center</p><h2>{ar?'منتجات Mobil 1 الأصلية لخدمة أفضل للمحرك':'Premium Mobil 1 products for better engine care.'}</h2><p>{ar?'نستخدم منتجات Mobil 1 لتقديم خدمة زيت موثوقة وتحسين أداء المحرك والمحافظة عليه.':'We use Mobil 1 products for trusted oil service, engine protection and long-lasting performance.'}</p></div><video src="/videos/showroom.mp4" autoPlay muted loop playsInline poster="/images/1000332066.jpg"></video></section>

      <section id="gallery" className="section dark"><div className="sectionHead"><p>{ar?'المعرض':'Gallery'}</p><h2>{ar?'صور حقيقية من المركز':'Real photos from the service center.'}</h2></div><div className="gallery">{gallery.map((g,i)=><img key={g} src={`/images/${g}`} loading="lazy" className={i%7===0?'wide':''}/>)}</div></section>

      <section id="contact" className="contact"><div><p className="eyebrow blue">{ar?'اتصل بنا':'Contact'}</p><h2>{ar?'احجز خدمتك الآن':'Book your service now.'}</h2><p><b>{company}</b><br/>{ar?addressAR:addressEN}<br/>Phone / WhatsApp: {phone}<br/>TRN: 105291908900001</p><div className="cta"><a className="primary" href={`tel:${phone}`}><Phone/> {phone}</a><a className="secondary darkText" href={`https://wa.me/${whatsapp}`}><MessageCircle/> WhatsApp</a></div></div><iframe title="map" src="https://www.google.com/maps?q=Al%20Hayat%20Car%20Services%20Al%20Jurf%20Ajman%20UAE&output=embed" loading="lazy"></iframe></section>
    </main>

    <footer><div><b>AL HAYAT CAR SERVICES</b><p>{ar?'الحياة لخدمات السيارات - الجرف، عجمان':'Al Jurf, Ajman, UAE'}</p></div><a href={`https://wa.me/${whatsapp}`}>{ar?'تواصل عبر واتساب':'Chat on WhatsApp'} <ChevronRight size={16}/></a></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
