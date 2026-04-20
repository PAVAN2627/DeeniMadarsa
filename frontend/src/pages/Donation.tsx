import { useState, type FormEvent } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Donation = () => {
  const { t } = useLanguage();
  const [donationForm, setDonationForm] = useState({ name: "", email: "", phone: "", address: "", donationType: "" });

  const donationTypes = [
    "Zakat",
    "Sadaqah",
    "Student Sponsorship",
    "Education Support",
    "Food Support",
    "Building Fund",
    "General Donation"
  ];

  const whyDonateReasons = [
    "Free education for underprivileged students",
    "Quran memorization programs",
    "Food & accommodation support",
    "Books & study material"
  ];

  const handleDonationSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!donationForm.name || !donationForm.email || !donationForm.phone || !donationForm.address || !donationForm.donationType) {
      toast.error("Please complete all fields before donating.");
      return;
    }

    // Create WhatsApp message with form data
    const message = `I want to donate to DeeniMadarsa.%0A%0AName: ${donationForm.name}%0AEmail: ${donationForm.email}%0APhone: ${donationForm.phone}%0AAddress: ${donationForm.address}%0ADonation Type: ${donationForm.donationType}`;
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative h-auto sm:h-[80vh] min-h-0 flex items-start sm:items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/WhatsApp Image 2026-04-13 at 10.32.41 AM.jpeg" alt="Donation" className="w-full h-full object-cover scale-110 transition-transform duration-[8s] ease-out" />
           <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 via-emerald-900/82 to-green-950/88" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-600/15 blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center py-12 sm:py-14 md:py-16 lg:py-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">{t("donation.supportus")}</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fade-up">
            {t("donation.title")}
          </h1>
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-1 w-12 bg-amber-400 rounded-full" />
            <div className="h-1 w-4 bg-amber-400/50 rounded-full" />
            <div className="h-1 w-2 bg-amber-400/25 rounded-full" />
          </div>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {t("hero.donation.desc")}
          </p>
 main
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center items-start sm:items-center self-start sm:self-center">
                    <Button asChild size="lg"
                      className="w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-200">
                      <a href="https://wa.me/919876543210?text=I want to donate to DeeniMadarsa" target="_blank" rel="noopener noreferrer">
                        {t("Donate Now ")}
                      </a>
                    </Button>
                    <Button asChild size="lg"
                      className="w-auto bg-transparent border-2 border-white/60 text-white hover:bg-white/15 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:scale-105 transition-all duration-200">
                      <Link to="/contact">{t("nav.contact")}</Link>
                    </Button>
                  </div>

          <div className="flex flex-row flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg"
              className="bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-full px-8 shadow-2xl shadow-amber-900/40 hover:scale-105 transition-all duration-200">
              <Link to="/donation">{t("donation.button")}</Link>
            </Button>
            <Button asChild size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 rounded-full px-8 hover:scale-105 transition-all duration-200">
              <Link to="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
 main
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 block leading-none translate-y-px" style={{ marginBottom: "-2px" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ display: "block", marginBottom: "-1px" }}>
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── DONATION CARDS ── */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white -mt-px">
        <div className="container mx-auto px-3 sm:px-4 max-w-4xl">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-4"><span className="w-2 h-2 rounded-full bg-red-500" /><span className="text-red-700 text-xs font-bold uppercase tracking-widest">{t("donation.howtodonate")}</span></div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t("donation.subtitle")}</h2>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-base sm:text-lg text-slate-700">
              Fill the donation form below and click Donate Now to proceed on WhatsApp.
            </p>
          </div>
          <div className="mt-10 bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-4"><span className="w-2 h-2 rounded-full bg-red-500" /><span className="text-red-700 text-xs font-bold uppercase tracking-widest">Donation Need Form</span></div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">Tell us about your donation need</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-2">
                Share your name, email, phone number, address and select a donation type, then tap Donate Now to continue on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleDonationSubmit} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <Input
                placeholder="Name"
                value={donationForm.name}
                onChange={(e) => setDonationForm({ ...donationForm, name: e.target.value })}
                required
                className="rounded-2xl border-slate-300 focus:ring-red-500"
              />
              <Input
                type="email"
                placeholder="Email ID"
                value={donationForm.email}
                onChange={(e) => setDonationForm({ ...donationForm, email: e.target.value })}
                required
                className="rounded-2xl border-slate-300 focus:ring-red-500"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={donationForm.phone}
                onChange={(e) => setDonationForm({ ...donationForm, phone: e.target.value })}
                required
                className="rounded-2xl border-slate-300 focus:ring-red-500"
              />
              <Input
                placeholder="Address"
                value={donationForm.address}
                onChange={(e) => setDonationForm({ ...donationForm, address: e.target.value })}
                required
                className="rounded-2xl border-slate-300 focus:ring-red-500"
              />

              {/* WHY DONATE Section */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Why Donate (Trust + Clarity)</label>
                <Select>
                  <SelectTrigger className="rounded-2xl border-slate-300 focus:ring-red-500">
                    <SelectValue placeholder="Click to see why you should donate" />
                  </SelectTrigger>
                  <SelectContent>
                    {whyDonateReasons.map((reason, index) => (
                      <SelectItem key={index} value={reason}>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{reason}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Donation Type Selection Dropdown */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                <Select
                  value={donationForm.donationType}
                  onValueChange={(value) => setDonationForm({ ...donationForm, donationType: value })}
                  required
                >
                  <SelectTrigger className="rounded-2xl border-slate-300 focus:ring-red-500">
                    <SelectValue placeholder="Select donation type" />
                  </SelectTrigger>
                  <SelectContent>
                    {donationTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="sm:col-span-2 w-full bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 py-3"
              >
                <Send className="w-4 h-4" /> Donate Now
              </Button>
            </form>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Donation;
