import { Home, User, MessageCircle, Phone } from 'lucide-react';
import { NavBar } from "./tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Servizi', url: '#services', icon: User },
    { name: 'Testimonianze', url: '#testimonials', icon: MessageCircle },
    { name: 'Contatti', url: '#contact', icon: Phone }
  ];

  return <NavBar items={navItems} />;
}