import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import AppLogo from "@/assets/AppLogo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <Image
                    src={AppLogo}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="font-bold text-lg text-primary">ذيب للاستقدام</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              من أفضل مكاتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية، نسعى لتقديم تجربة استقدام مثالية
              لعملائنا
            </p>
            <div className="flex gap-2">
              <div className="flex gap-4">
                <a
                  href="https://x.com/theeboffice1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-primary/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L5.02 21.75H1.708l7.73-8.835L1.25 2.25H8.08l4.713 6.231 5.451-6.231Z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61580388674335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-primary/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/theeb_recruitment/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-primary/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@theeb.alqahtani02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-full hover:bg-primary/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.5 2h4.021a5.99 5.99 0 0 0 5.979 5.979v4.021a9.99 9.99 0 0 1-5.979-1.954v8.454A5.5 5.5 0 1 1 11 13.042V17.5a2.5 2.5 0 1 0 3 2.45V2Z"></path>
                  </svg>
                </a>
              </div>

            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">خدماتنا</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  الاستقدام
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  خدمات العملاء
                </Link>
              </li>
              <li>
                <Link href="/countries" className="hover:text-primary transition-colors">
                  دول الاستقدام
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  المتابعة والتطوير
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">روابط سريعة</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/countries" className="hover:text-primary transition-colors">
                  دول الاستقدام
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">  شارع الصحابه - حي إشبيلية - الرياض</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  <a href="tel:+966555908232">
                    <span>0555908232</span>
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">theebalqahtani680@gmail.com</span>
              </div>
              <Button className="w-full mt-4" size="sm">
                <MessageCircle className="h-4 w-4 ml-2" />
                <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2025 مكتب ذيب للاستقدام. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
}
