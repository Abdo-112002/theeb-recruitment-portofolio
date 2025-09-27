"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, X, Menu } from "lucide-react"
import Image from "next/image"
import AppLogo from "@/assets/AppLogo.png"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Image
                src={AppLogo}
                alt="مكتب ذيب للاستقدام - theebrecruitment"
                width={60}
                height={60}
                className="object-contain w-[60px] h-[60px]"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl text-primary">مكتب ذيب للاستقدام</h1>
              <p className="text-sm text-muted-foreground">خدمات استقدام احترافية</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
          <Button className="hidden md:flex h-auto text-base rounded-md">
            <a href="https://wa.me/966555908232" className="block px-6 py-2" target="_blank" rel="noopener noreferrer">
              طلب استقدام
            </a>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-transparent cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-labelledby="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden" onClick={() => setIsOpen(false)}>
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close button */}
            <button className="self-end cursor-pointer" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link href="/" onClick={() => setIsOpen(false)}>الرئيسية</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>خدماتنا</Link>
              <Link href="/countries" onClick={() => setIsOpen(false)}>دول الاستقدام</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>اتصل بنا</Link>
            </nav>

            {/* CTA */}
            <Button className="text-base h-auto p-0 rounded-md">
              <a href="https://wa.me/966555908232" className="block w-full px-6 py-3" target="_blank" rel="noopener noreferrer">
                طلب استقدام
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
