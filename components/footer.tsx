import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">ا</span>
              </div>
              <h3 className="font-bold text-lg text-primary">ذيب للاستقدام</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              من أفضل مكاتب استقدام العمالة المنزلية بمعايير دولية ومهنية عالية، نسعى لتقديم تجربة استقدام مثالية
              لعملائنا
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                فيسبوك
              </Button>
              <Button size="sm" variant="outline">
                تويتر
              </Button>
              <Button size="sm" variant="outline">
                إنستغرام
              </Button>
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
