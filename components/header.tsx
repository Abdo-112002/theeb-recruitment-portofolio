"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import AppLogo from "@/assets/AppLogo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+966555908232">
                <span>0555908232</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>theebalqahtani680@gmail.com</span>
            </div>
          </div>
          {/* <div className="text-xs">مرخص من منصة مساند الحكومية</div> */}
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Image
                src={AppLogo}
                alt="Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">مكتب ذيب للاستقدام</h1>
              <p className="text-sm text-muted-foreground">خدمات استقدام احترافية</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              الرئيسية
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              خدماتنا
            </Link>
            <Link href="/countries" className="text-foreground hover:text-primary transition-colors font-medium">
              دول الاستقدام
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              اتصل بنا
            </Link>
          </div>

          {/* CTA Button */}
          <Button className="hidden md:flex">

            <a href="https://wa.me/966555908232" target="_blank" rel="noopener noreferrer">
              طلب استقدام
            </a>

          </Button>

          {/* Mobile menu button */}
          <Button variant="outline" size="sm" className="md:hidden bg-transparent">
            القائمة
          </Button>
        </div>
      </nav>
    </header>
  )
}
