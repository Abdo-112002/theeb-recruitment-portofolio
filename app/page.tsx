import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, CheckCircle, Phone, MessageCircle, Globe, TrendingUp } from "lucide-react"
import { LocationSection } from "@/components/LocationSection"
import ServicesCounteries from "@/components/ServicesCounteries"

export const metadata: Metadata = {
  title: "الرئيسية",
  description:
    "مكتب ذيب للاستقدام - من أفضل مكاتب استقدام العمالة المنزلية بالمملكة العربية السعودية. نوفر خدمات استقدام احترافية وسريعة من الفلبين والهند وبنجلاديش وكينيا وأوغندا وإثيوبيا.",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-l from-primary/10 to-secondary/5 pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* <Badge className="bg-primary/10 text-primary border-primary/20">مرخص من منصة مساند الحكومية</Badge> */}
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                مكتب ذيب للاستقدام
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                من أفضل مكاتب الاستقدام بالمملكة العربية السعودية بمهارة عالية ودقة وسرعة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Phone className="h-5 w-5 ml-2" />
                  طلب استقدام الآن
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  <MessageCircle className="h-5 w-5 ml-2" />

                  <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
                    تواصل عبر واتساب
                  </a>

                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/zeepBg.png"
                alt="مكتب ذيب للاستقدام - خدمات استقدام العمالة المنزلية"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/aboutImage.jpeg"
                alt="من نحن - مكتب ذيب للاستقدام"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">من نحن</h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                انطلق مكتب ذيب لخدمات استقدام العمالة المنزلية برؤية عالمية، يقودها الطموح نحو خلق آليات جديدة وسهلة
                للوصول إلى أيدي عاملة أمينة وعلى قدر عالي من الكفاءة وذلك لتقديم حلول الاستقدام لإيجاد العمالة المنزلية
                الأنسب لعملائنا.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                يعتبر مكتب ذيب للاستقدام من أفضل مكاتب استقدام العمالة المنزلية حاصل على ترخيص من منصة مساند
                الحكومية لتوفير خدمات استقدام عمالة منزلية بمعايير الجودة العالمية.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">مرخص حكومياً</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">خبرة عالية</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">خدمة سريعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">خدماتنا المميزة</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              نقدم مجموعة شاملة من خدمات الاستقدام بأعلى معايير الجودة والاحترافية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">خدمة عملاء مميزة</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  فريق خدمة العملاء معكم خطوة بخطوة بدءاً من طلب استقدام عمالة منزلية حتى وصول العمالة إليكم
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">خدمات استقدام رقمية متكاملة</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  خطوات بسيطة تفصلك عن استقدام العمالة المنزلية التي تحتاجها. الرؤية لخدمات استقدام عمالة منزلية بمعايير
                  الجودة العالمية
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">المتابعة المستمرة والتطوير الشامل</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  نوفر كافة الإمكانيات لمتابعة احتياجات العملاء وتسهيل عملهم بسرعة فائقة. كما نطور خدماتنا بما يتوافق مع
                  نظام العمل السعودي
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-foreground mb-4">دول الاستقدام</h2>
            <p className="text-muted-foreground text-lg text-pretty">يمكنك اختيار دولة الاستقدام حسب رغبتك</p>
          </div>

          <ServicesCounteries />
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">متطلبات الاستقدام</h2>
            <p className="text-muted-foreground text-lg text-pretty">هذه هي المتطلبات التي تحتاجها للاستقدام</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">الوثائق المطلوبة لاستقدام العمالة المنزلية</h3>
              <div className="space-y-4">
                {[
                  "اختيار السيرة الذاتية",
                  "صورة الهوية الوطنية أو الإقامة للمقيمين والرقم المربوط في أبشر",
                  "تعاقد الاستقدام عبر مساند وسداد الرسوم",
                  "تخليص إجراءات الاستقدام",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">إجراءات الاستقدام</h3>
              <div className="space-y-4">
                {[
                  "الدخول إلى منصة مساند",
                  "التحقق من تأهيلك للحصول على التأشيرة",
                  "إدخال البيانات المطلوبة وإثبات القدرة المالية",
                  "الإقرار بالمعلومات الصحيحة وسداد الرسوم",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-xl mb-8 opacity-90 text-pretty">نسعد بتواصلكم معنا، موظفونا جاهزون للرد على طلبكم</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="h-5 w-5 ml-2" />

              <a href="tel:+966555908232">
                اتصل بنا الآن
              </a>

            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="h-5 w-5 ml-2" />

              <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
                عبر تطبيق واتساب
              </a>

            </Button>
          </div>
          <div className="mt-10">
            <LocationSection />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
