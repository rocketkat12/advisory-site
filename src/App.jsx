
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, LineChart, Users2, Target, MessageSquare, Shield, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const COMPANY = {
  name: "Timely Insights Advisory Group LLC",
  tagline: "Mentoring • Business Consulting • Strategy",
  email: "hello@timelyinsights.com",
  phone: "770-570-8365",
  address: "455 Grayson Hwy Ste 113-40, Lawrenceville GA 30046",
  contact: "Joseph Anthony",
};

// CONTENT — single source of truth
const SERVICES = [
  { icon: <Target className="h-5 w-5" />, title: "Strategy Sprints", desc: "90-day focus cycles to clarify goals, set KPIs, and execute with discipline." },
  { icon: <Users2 className="h-5 w-5" />, title: "Leadership Mentoring", desc: "1:1 and team sessions to level up decision-making and communication." },
  { icon: <LineChart className="h-5 w-5" />, title: "Revenue Operations", desc: "Pipeline design, pricing, and enablement to drive predictable growth." },
];

const PROCESS = [
  { step: "01", title: "Discovery", text: "Free call to understand goals, constraints, and timeline." },
  { step: "02", title: "Audit", text: "Rapid assessment of strategy, ops, and revenue levers." },
  { step: "03", title: "Plan", text: "Roadmap with milestones, ownership, and KPIs." },
  { step: "04", title: "Execute", text: "Weekly working sessions with progress dashboards." },
];

const TESTIMONIALS = [
  { 
    quote: "Timely Insights helped us tighten our strategy and gave us a clear roadmap for sustainable growth. Their support has been a real game-changer for our organization.", 
    name: "David Abbie", 
    role: "Authentic Empire Music Group" 
  },
  { 
    quote: "The team brought structure and accountability that allowed us to scale more effectively. Their insights saved us time and positioned us for long-term success.", 
    name: "Kevin Core", 
    role: "StreamCut Media" 
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Timely_logo.png" alt={COMPANY.name} className="h-14 md:h-16 object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900 text-slate-600">Services</a>
            <a href="#process" className="hover:text-slate-900 text-slate-600">Process</a>
            <a href="#about" className="hover:text-slate-900 text-slate-600">About</a>
            <a href="#testimonials" className="hover:text-slate-900 text-slate-600">Testimonials</a>
            <a href="#contact" className="hover:text-slate-900 text-slate-600">Contact</a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:opacity-90">Book a Call</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <CheckCircle className="h-3.5 w-3.5 mr-1.5" /> Proven outcomes for owners
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Strategy that turns uncertainty into momentum.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              We mentor founders and leadership teams, streamline operations, and craft winning go-to-market plans—so you can scale with confidence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:opacity-90">
                Schedule a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#services" className="rounded-2xl border border-slate-300 px-4 py-2.5 text-center text-sm font-medium hover:bg-white/70">
                Explore Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Confidential & ethical</div>
              <div className="flex items-center gap-2"><Target className="h-4 w-4" /> Outcome-focused</div>
            </div>
          </motion.div>

          {/* Hero card preview */}
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-900 to-slate-700 shadow-2xl p-1">
              <div className="h-full w-full rounded-[20px] bg-white grid md:grid-cols-2">
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-semibold text-lg">Growth Dashboard</h3>
                  <p className="text-sm text-slate-600 mt-1">See your pipeline, revenue, and ops health at a glance.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><LineChart className="h-4 w-4" /> KPI scorecards</li>
                    <li className="flex items-center gap-2"><Users2 className="h-4 w-4" /> Team accountability</li>
                    <li className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Advisory check-ins</li>
                  </ul>
                </div>
                <div className="p-6 bg-slate-50 rounded-r-[20px] flex items-center justify-center">
                  <div className="h-40 w-40 rounded-2xl bg-slate-200" aria-hidden />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">What we do</h2>
            <p className="mt-2 text-slate-600">Tailored advisory to unblock growth and build durable systems.</p>
          </motion.div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl shadow-sm border border-slate-200 bg-white">
                <div className="p-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 rounded-xl bg-slate-900 text-white items-center justify-center">{s.icon}</span>
                  <div className="font-semibold">{s.title}</div>
                </div>
                <div className="px-6 pb-6 text-sm text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-2 text-slate-600">A simple, transparent engagement model.</p>
          </motion.div>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {PROCESS.map((p) => (
              <div key={p.step} className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                <div className="text-xs font-semibold text-slate-500">{p.step}</div>
                <div className="mt-2 font-semibold">{p.title}</div>
                <p className="mt-1 text-sm text-slate-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-bold tracking-tight">About {COMPANY.name}</h2>
            <p className="mt-3 text-slate-600">
              We partner closely with founders across advisory, mentoring, and strategic planning. Our playbooks blend practical operator experience with data-driven rigor so you can move faster with less friction.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5" /> 15+ years across growth, finance, and ops</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5" /> Bench of subject-matter experts on demand</li>
              <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5" /> Clear pricing, no long-term lock‑ins</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp}>
            <div className="rounded-2xl shadow-sm border border-slate-200 bg-white">
              <div className="p-6 border-b border-slate-200">
                <div className="text-lg font-semibold">Engagement Options</div>
              </div>
              <div className="p-6 text-sm text-slate-600 space-y-4">
                <div>
                  <div className="font-medium">Advisor Access</div>
                  <div>Monthly retainer for ongoing mentorship and strategic input.</div>
                </div>
                <div>
                  <div className="font-medium">Sprint Projects</div>
                  <div>2–6 week focused initiatives: pricing, GTM, or ops redesign.</div>
                </div>
                <div>
                  <div className="font-medium">Fractional Leadership</div>
                  <div>Part-time interim roles (e.g., COO, CRO) to bridge gaps.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Client results</h2>
            <p className="mt-2 text-slate-600">What leaders say after partnering with us.</p>
          </motion.div>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="rounded-2xl h-full shadow-sm border border-slate-200 bg-white p-6">
                <p className="text-slate-800">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-600">{t.name} • {t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Let’s talk</h2>
            <p className="mt-2 text-slate-600">Tell us about your goals. We’ll reply within one business day.</p>
          </motion.div>
          <form className="mt-10 grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Full name" required />
              <input type="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Email" required />
            </div>
            <input className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="Company (optional)" />
            <textarea className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="How can we help?" rows={5} required />
            <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-5">
                <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {COMPANY.email}</span>
                <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {COMPANY.phone}</span>
                <span className="hidden sm:inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.address}</span>
              </div>
              <button className="rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm font-medium">Send message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
            <a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
            <a className="text-slate-600 hover:text-slate-900" href="#">Impressum</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
