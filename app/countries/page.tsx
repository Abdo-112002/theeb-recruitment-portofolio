import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, Users, CheckCircle } from "lucide-react"
import { LocationSection } from "@/components/LocationSection"
import ServicesCounteries from "@/components/ServicesCounteries"

export const metadata: Metadata = {
  title: "دول الاستقدام",
  description:
    "اختر من بين أفضل دول الاستقدام للعمالة المنزلية. نوفر خدمات استقدام من الفلبين والهند وبنجلاديش وكينيا وأوغندا وإثيوبيا بأفضل الأسعار وأعلى معايير الجودة.",
}



export default function CountriesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">دول الاستقدام</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              يمكنك اختيار دولة الاستقدام حسب رغبتك واحتياجاتك من بين أفضل الدول المتاحة
            </p>
          </div>
        </div>
      </section>

      <ServicesCounteries />

      {/* Info Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">لماذا نختار هذه الدول؟</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
              نحن نختار دول الاستقدام بعناية فائقة لضمان حصولكم على أفضل العمالة المنزلية المدربة والمؤهلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">عمالة مدربة</h3>
              <p className="text-muted-foreground text-pretty">
                جميع العمالة المستقدمة تخضع لبرامج تدريب متخصصة قبل السفر
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">فحوصات طبية شاملة</h3>
              <p className="text-muted-foreground text-pretty">فحوصات طبية شاملة ومعتمدة لضمان سلامة العمالة</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">ضمان الجودة</h3>
              <p className="text-muted-foreground text-pretty">
                نضمن جودة العمالة مع إمكانية الاستبدال في حالة عدم الرضا
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-10 container mx-auto">
        <LocationSection />
      </div>
      <Footer />
    </div>
  )
}
