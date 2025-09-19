"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react"
import { useState } from "react"
import { LocationSection } from "@/components/LocationSection"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // رسالة منسقة سطر بسطر
    const message = `
      *الاسم:* ${formData.name}\n
      *رقم الجوال:* ${formData.phone}\n
      *البريد الإلكتروني:* ${formData.email || "-"}\n
      *نوع الخدمة:* ${formData.service}\n
      *الرسالة:* ${formData.message || "-"}`

    const phoneNumber = "966555908232"

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, "_blank")
  }



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary/10 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              نسعد بتواصلكم معنا، موظفونا جاهزون للرد على طلبكم وتقديم أفضل الخدمات
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-16 pb-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">أرسل لنا رسالة</h2>
                  <p className="text-muted-foreground">سنتواصل معك في أقرب وقت ممكن</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="05xxxxxxxx"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">نوع الخدمة المطلوبة *</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">اختر نوع الخدمة</option>
                      <option value="philippines">استقدام من الفلبين</option>
                      <option value="india">استقدام من الهند</option>
                      <option value="bangladesh">استقدام من بنجلاديش</option>
                      <option value="kenya">استقدام من كينيا</option>
                      <option value="uganda">استقدام من أوغندا</option>
                      <option value="ethiopia">استقدام من إثيوبيا</option>
                      <option value="consultation">استشارة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    إرسال الرسالة
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">معلومات التواصل</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">عنوان مقرنا</h4>
                        <p className="text-muted-foreground">  شارع الصحابه - حي إشبيلية - الرياض</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">أرقام التواصل</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>المبيعات: 0500928007 - 0501144651</p>
                          <p>الشكاوي والاقتراحات: 0555908232 </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">البريد الإلكتروني</h4>
                        <p className="text-muted-foreground">theebalqahtani680@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">ساعات العمل</h4>
                        <p className="text-muted-foreground">السبت - الخميس: 8:00 ص - 10:00 م</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="p-6 bg-green-50 border-green-200">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800">تواصل سريع عبر واتساب</h3>
                  <p className="text-green-700 text-pretty">للحصول على رد فوري، تواصل معنا عبر واتساب</p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageCircle className="h-5 w-5 ml-2" />

                    <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
                      فتح واتساب
                    </a>

                  </Button>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <CardContent className="space-y-2">
                    <Users className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">عميل راضي</div>
                  </CardContent>
                </Card>

                <Card className="p-4 text-center">
                  <CardContent className="space-y-2">
                    <Clock className="h-8 w-8 text-primary mx-auto" />
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-sm text-muted-foreground">خدمة العملاء</div>
                  </CardContent>
                </Card>
              </div>
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
