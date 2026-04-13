import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
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
                  <Phone className="w-4 h-4" />
                </span>
                {t("footer.phone")}
              </a>
              <a href="#" className="flex items-center gap-3 w-fit transition-colors group hover:text-white">
                <span
                  className="p-2 rounded-lg transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
                  <Mail className="w-4 h-4" />
                </span>
                {t("footer.email")}
              </a>
              <div className="flex items-start gap-3 w-fit transition-colors group cursor-default hover:text-white">
                <span
                  className="p-2 rounded-lg transition-all mt-0.5"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}
                >
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="leading-relaxed max-w-sm">{t("footer.address")}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: "#ffffff" }}>
              {t("footer.quicklinks")}
            </h3>
            <nav className="grid grid-cols-1 gap-2.5 text-sm" style={{ color: "#e8fff4" }}>
              {[
                { to: "/", label: t("nav.home") },
                { to: "/about", label: t("nav.about") },
                { to: "/courses", label: t("nav.courses") },
                { to: "/faculty", label: t("nav.faculty") },
                { to: "/donation", label: t("nav.donation") },
                { to: "/contact", label: t("nav.contact") },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="w-fit flex items-center gap-2 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#ffffff" }} />
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Follow Us */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading text-lg font-bold mb-4" style={{ color: "#ffffff" }}>
              {t("footer.followus")}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "Facebook", icon: <Facebook className="w-4 h-4" /> },
                { name: "Twitter", icon: <Twitter className="w-4 h-4" /> },
                { name: "Instagram", icon: <Instagram className="w-4 h-4" /> },
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
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;