import React from 'react'

export function LocationSection() {
    return (
        <div className="w-full  mx-auto">
            <div className="relative w-full h-[500px]  rounded-lg overflow-hidden shadow-lg border border-border">

                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="موقعنا على الخريطة"
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.769698589605!2d46.7908115019078!3d24.785113812830772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzA2LjQiTiA0NsKwNDcnMjYuOSJF!5e0!3m2!1sen!2seg!4v1758132248634!5m2!1sen!2seg"></iframe>
            </div>
        </div>
    )
}
