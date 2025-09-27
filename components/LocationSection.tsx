import React from 'react'

export function LocationSection() {
    return (
        <div className="w-full  mx-auto">
            <div className="relative w-full h-[500px]  rounded-lg overflow-hidden shadow-lg border border-border">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.301136233619!2d46.7882432749677!3d24.78513994826818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2eff0505496133%3A0xc635b8c50412d054!2z2YXZg9iq2Kgg2LDZitioINit2LPZhiDYp9mE2YLYrdi32KfZhtmKINmE2YTYp9iz2KrZgtiv2KfZhQ!5e0!3m2!1sen!2seg!4v1758906531348!5m2!1sen!2seg" 
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="مكتب ذيب القحطاني للاستقدام موقعنا على الخريطة"
                    className="w-full h-full">
                </iframe>

            </div>
        </div>
    )
}
