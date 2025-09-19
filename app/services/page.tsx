import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Clock, Shield, Award, CheckCircle, MessageCircle } from "lucide-react"
import { LocationSection } from "@/components/LocationSection"

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "تعرف على خدمات مكتب ذيب للاستقدام المتميزة. نقدم خدمات استقدام عمالة منزلية احترافية مع متابعة مستمرة وخدمة عملاء مميزة على مدار الساعة.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">خدماتنا</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              نقدم مجموعة شاملة من خدمات الاستقدام بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">خدمة عملاء مميزة</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    فريق خدمة العملاء معكم خطوة بخطوة بدءاً من طلب استقدام عمالة منزلية حتى وصول العمالة إليكم. نوفر دعماً
                    فنياً متخصصاً ومتابعة مستمرة لضمان رضاكم التام.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-right">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>دعم فني متخصص</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>متابعة مستمرة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>خدمة على مدار الساعة</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">خدمات استقدام رقمية متكاملة</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها. الرؤية لخدمات استقدام عمالة منزلية
                    بمعايير الجودة العالمية مع استخدام أحدث التقنيات.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-right">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>منصة رقمية متطورة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>إجراءات مبسطة</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>معايير جودة عالمية</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">المتابعة المستمرة والتطوير الشامل</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة فائقة. كما نطور خدماتنا بما يتوافق
                    مع نظام العمل السعودي والمعايير الدولية.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 text-right">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>متابعة دورية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>تطوير مستمر</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>توافق مع الأنظمة السعودية</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدمات إضافية</h2>
            <p className="text-muted-foreground text-lg text-pretty">
              نقدم مجموعة من الخدمات الإضافية لضمان تجربة استقدام مثالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "ضمان الجودة",
                description: "نضمن جودة العمالة المستقدمة",
              },
              {
                icon: Shield,
                title: "التأمين الشامل",
                description: "تأمين شامل على جميع الخدمات",
              },
              {
                icon: Clock,
                title: "سرعة الإنجاز",
                description: "إنجاز المعاملات في أسرع وقت",
              },
              {
                icon: Users,
                title: "التدريب المتخصص",
                description: "عمالة مدربة ومؤهلة",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">نسعد بتواصلكم معنا، موظفونا جاهزون للرد على طلبكم</p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <MessageCircle className="h-5 w-5 ml-2" />
            <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
              عبر تطبيق واتساب
            </a>
          </Button>
        </div>
        <div className="mt-10 container mx-auto">
          <LocationSection />
        </div>
      </section>

      <Footer />
    </div>
  )
}
