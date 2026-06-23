
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import { Wrench, Droplets, BatteryCharging, Gauge, Car, Sparkles, MapPin, Phone, MessageCircle, ShieldCheck, Clock, Star, Settings, Wind, Disc3, Zap, Paintbrush, ShoppingBag, Sofa, ExternalLink } from 'lucide-react';
import './styles.css';

const img=(n)=>`/images/${n}.jpg`;
const maps='https://maps.app.goo.gl/4mMGvUdzmmTAJtbcA?g_st=ac';
const whats1='https://wa.me/971522553418';
const whats2='https://wa.me/971555780839';
const phone1='tel:+971522553418';
const phone2='tel:+971555780839';

const services=[
  ['Mechanical Repair','Engine, suspension, transmission and general repair','mechanical',Wrench,'إصلاح ميكانيكي'],
  ['A/C Repair','Cooling system diagnosis and gas refill','ac',Wind,'إصلاح التكييف'],
  ['Computer Diagnosis','Advanced fault detection and scanning','diagnostic',Gauge,'فحص الكمبيوتر'],
  ['Injector Repair','Injector testing, cleaning and repair','injector',Settings,'إصلاح البخاخات'],
  ['Oil Change','Premium Mobil 1 oil service and filters','oil',Droplets,'تغيير الزيت'],
  ['Tyre Services','Tyre replacement, balancing and inspection','tyre',Disc3,'خدمات الإطارات'],
  ['Brake Service','Pads, discs and full brake inspection','workshop2',ShieldCheck,'خدمة الفرامل'],
  ['Electrical Repair','Wiring, lights, battery and sensors','battery',Zap,'إصلاح كهربائي'],
  ['Car Wash','Interior and exterior professional cleaning','wash',Car,'غسيل السيارات'],
  ['Car Polish','Detailing, shine and premium finishing','polish',Sparkles,'تلميع السيارات'],
  ['Painting Services','Body painting and scratch repair','outside',Paintbrush,'خدمات الصبغ'],
  ['Auto Accessories','Car covers, wipers, films and interior products','accessories',ShoppingBag,'اكسسوارات السيارات'],
];

function Header(){return <header className="header"><a className="brand" href="#home"><img src={img('logo')} /><span><b>AL HAYAT</b><em>CAR SERVICES</em><small>الحياة لخدمات السيارات</small></span></a><nav><a href="#services">Services</a><a href="#mobil">Mobil 1</a><a href="#workshop">Workshop</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav><div className="top-actions"><a href={whats1} target="_blank" className="whatsapp"><MessageCircle size={18}/> WhatsApp</a></div></header>}
function Hero(){return <section id="home" className="hero"><div className="hero-bg"/><div className="hero-overlay"/><Header/><div className="hero-content hero-content-clean"><div className="hero-copy"><div className="location"><MapPin size={16}/> Al Jurf Industrial Area 1, Ajman</div><h1><span>Premium Automotive Care</span><br/>Under One Roof</h1><p>Modern repair, diagnostics, Mobil 1 oil service, car wash and accessories — built around quality, speed and customer trust.</p><p className="arabic">خدمات متكاملة لسيارتك تحت سقف واحد في عجمان</p><div className="hero-buttons"><a className="btn primary" href={whats1} target="_blank"><MessageCircle size={20}/> Book on WhatsApp</a><a className="btn glass" href={maps} target="_blank"><MapPin size={20}/> Get Directions</a></div></div></div><div className="trustbar"><span><ShieldCheck/> Professional Technicians</span><span><Droplets/> Mobil 1 Products</span><span><Clock/> Fast Service</span><span><Star/> Customer Satisfaction</span></div></section>}
function Services(){return <section id="services" className="section light"><div className="section-head"><span>OUR SERVICES</span><h2>Premium services with real workshop capability</h2><p>Every service card uses the closest matching photo from your own workshop and facility.</p></div><div className="services-grid">{services.map(([t,d,im,Icon,ar])=><article className="service" key={t}><div className="service-img"><img src={img(im)}/><div className="icon"><Icon size={22}/></div></div><div className="service-body"><h3>{t}</h3><p>{d}</p><small>{ar}</small></div></article>)}</div></section>}
function Mobil(){return <section id="mobil" className="section dark split"><div className="split-text"><span>MOBIL 1 CENTER</span><h2>Powered by genuine Mobil 1 products</h2><p>Premium engine oils and lubrication products selected for modern vehicles in UAE driving conditions.</p><ul><li>Genuine Mobil 1 products</li><li>Professional oil change service</li><li>Wide range of oil grades</li><li>Clean, organized service area</li></ul></div><div className="premium-photo"><img src={img('mobil')} /></div></section>}
function Workshop(){return <section id="workshop" className="section light workshop"><div className="section-head"><span>WORKSHOP</span><h2>Equipped for complete car care</h2><p>Multiple lifts, diagnostics, tyre service, oil service, car wash bays and accessories — all in one location.</p></div><div className="feature-grid"><div className="feature large"><img src={img('workshop')}/><div><h3>Professional repair bays</h3><p>Spacious workshop with lifts and trained technicians.</p></div></div><div className="feature"><img src={img('washbays')}/><div><h3>Dedicated wash bays</h3><p>Separate car wash area with proper drainage.</p></div></div><div className="feature"><img src={img('lounge')}/><div><h3>Customer lounge</h3><p>Air-conditioned waiting area with refreshments.</p></div></div><div className="feature"><img src={img('accessories2')}/><div><h3>Accessories shop</h3><p>Covers, wipers, interior products and more.</p></div></div></div></section>}
function Gallery(){const gs=['hero','mobil','workshop','mechanical','polish','wash','diagnostic','injector','battery','tyre','ac','accessories','accessories2','lounge','lounge2','outside','outside2','washbays'];return <section id="gallery" className="section dark"><div className="section-head"><span>GALLERY</span><h2>Real photos from AL HAYAT</h2><p>Workshop, services, Mobil 1 center, customer lounge and car wash areas.</p></div><div className="masonry">{gs.map((g,i)=><img key={g+i} src={img(g)} />)}</div></section>}
function Contact(){return <section id="contact" className="section contact"><div className="contact-card"><div><span>CONTACT</span><h2>Visit AL HAYAT CAR SERVICES</h2><p>Al Jurf Industrial Area 1, Ajman, United Arab Emirates</p><div className="contact-lines"><a href={phone1}><Phone/> +971 52 255 3418</a><a href={phone2}><Phone/> +971 55 578 0839</a></div><div className="hero-buttons"><a className="btn primary" href={whats1} target="_blank"><MessageCircle/> WhatsApp 1</a><a className="btn primary alt" href={whats2} target="_blank"><MessageCircle/> WhatsApp 2</a><a className="btn darkbtn" href={maps} target="_blank"><MapPin/> Get Directions</a></div></div><a className="map-box" href={maps} target="_blank"><MapPin size={44}/><b>Open Google Maps</b><small>Tap to navigate directly to the workshop</small><ExternalLink size={18}/></a></div></section>}
function App(){return <><Hero/><Services/><Mobil/><Workshop/><Gallery/><Contact/><footer><img src={img('logo')}/><b>AL HAYAT CAR SERVICES</b><span>© 2026 All Rights Reserved</span></footer><a className="float-wa" href={whats1} target="_blank"><MessageCircle/> WhatsApp</a></>}

createRoot(document.getElementById('root')).render(<App/>);
