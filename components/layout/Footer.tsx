import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "@/components/ui";

const footerLinks = {
  company: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-gray-800 mt-auto w-full"
      style={{
        paddingBottom: `calc(3rem + env(safe-area-inset-bottom, 0))`,
        paddingLeft: `env(safe-area-inset-left, 0)`,
        paddingRight: `env(safe-area-inset-right, 0)`,
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              YourBrand
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              A production-ready, high-performance website with minimal design
              and exceptional user experience.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="minimal"
                    className="text-sm text-gray-400 hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    variant="minimal"
                    className="text-sm text-gray-400 hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} YourBrand. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

