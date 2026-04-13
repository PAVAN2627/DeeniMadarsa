import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
<<<<<<< HEAD
    <footer
      className="relative z-10 border-t border-green-200"
      style={{
        background: "linear-gradient(135deg, #3ab87a 0%, #2da066 50%, #228a55 100%)",
      }}
    >
      <div className="container mx-auto px-4 py-4 md:py-6">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand & Contact */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: "#ffffff" }}>
              {t("footer.contact")}
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "#e8fff4" }}>
              <a href="#" className="flex items-center gap-3 w-fit transition-colors group hover:text-white">
                <span
                  className="p-2 rounded-lg transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
=======
    <footer className="bg-white border-t-4 border-teal-700 relative z-10">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-2xl text-teal-700">☪</span>
              <span className="font-heading text-xl font-bold text-gray-900">Al-Noor Madarsa</span>
            </div>
            <p className="text-gray-500 text-sm mb-5 leading-relaxed max-w-xs">
              Providing quality Islamic and moral education since 1998.
            </p>
            <div className="space-y-3 text-sm text-gray-600">
              <a href="tel:+919876543210" className="flex items-center gap-3 w-fit hover:text-teal-700 transition-colors group">
                <span className="p-2 bg-teal-50 rounded-lg text-teal-500 group-hover:bg-teal-100 transition-all">
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
                  <Phone className="w-4 h-4" />
                </span>
                {t("footer.phone")}
              </a>
<<<<<<< HEAD
              <a href="#" className="flex items-center gap-3 w-fit transition-colors group hover:text-white">
                <span
                  className="p-2 rounded-lg transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
=======
              <a href="mailto:info@alnoormadarsa.com" className="flex items-center gap-3 w-fit hover:text-teal-700 transition-colors group">
                <span className="p-2 bg-teal-50 rounded-lg text-teal-500 group-hover:bg-teal-100 transition-all">
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
                  <Mail className="w-4 h-4" />
                </span>
                {t("footer.email")}
              </a>
<<<<<<< HEAD
              <div className="flex items-start gap-3 w-fit transition-colors group cursor-default hover:text-white">
                <span
                  className="p-2 rounded-lg transition-all mt-0.5"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
=======
              <div className="flex items-start gap-3">
                <span className="p-2 bg-teal-50 rounded-lg text-teal-500 mt-0.5 shrink-0">
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="leading-relaxed">{t("footer.address")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
<<<<<<< HEAD
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: "#ffffff" }}>
              {t("footer.quicklinks")}
            </h3>
            <nav className="grid grid-cols-1 gap-2.5 text-sm" style={{ color: "#e8fff4" }}>
=======
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-gray-900">{t("footer.quicklinks")}</h3>
            <nav className="flex flex-col gap-2.5 text-sm text-gray-500">
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
              {[
                { to: "/",         label: t("nav.home") },
                { to: "/about",    label: t("nav.about") },
                { to: "/courses",  label: t("nav.courses") },
                { to: "/faculty",  label: t("nav.faculty") },
                { to: "/donation", label: t("nav.donation") },
                { to: "/contact",  label: t("nav.contact") },
              ].map(({ to, label }) => (
<<<<<<< HEAD
                <Link
                  key={to}
                  to={to}
                  className="w-fit flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#ffffff" }} />
=======
                <Link key={to} to={to}
                  className="w-fit flex items-center gap-2 hover:text-teal-700 hover:translate-x-1 transition-all duration-200">
                  <span className="w-1 h-1 rounded-full bg-teal-300" />
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Follow Us */}
<<<<<<< HEAD
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: "#ffffff" }}>
              {t("footer.followus")}
            </h3>
=======
          <div>
            <h3 className="font-heading text-base font-bold mb-4 text-gray-900">{t("footer.followus")}</h3>
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "Facebook",  icon: <Facebook  className="w-4 h-4" /> },
                { name: "Twitter",   icon: <Twitter   className="w-4 h-4" /> },
                { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
<<<<<<< HEAD
                { name: "YouTube", icon: <Youtube className="w-4 h-4" /> },
              ].map((platform) => (
                <button
                  key={platform.name}
                  className="p-2.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    border: "1px solid rgba(255,255,255,0.4)",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    color: "#ffffff",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#228a55";
                    e.currentTarget.style.borderColor = "#ffffff";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                  }}
                  aria-label={platform.name}
                >
                  {platform.icon}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.3)", color: "#e8fff4" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.5)" }} />
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
=======
                { name: "YouTube",   icon: <Youtube   className="w-4 h-4" /> },
              ].map((p) => (
                <button key={p.name} aria-label={p.name}
                  className="p-2.5 bg-teal-50 border border-teal-100 rounded-xl text-teal-600 hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  {p.icon}
                </button>
              ))}
            </div>
>>>>>>> b6168c707c9db7bcc0f9dbbc3ba5d7057d3ccc0e
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-teal-700 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-gray-200" />
            <span className="hover:text-teal-700 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
