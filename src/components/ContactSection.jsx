import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Calendar, Send } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - connect to your backend/email service
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-xs tracking-[0.28em] uppercase text-luxury-gold mb-4">Private showing</div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-[-0.02em]">
            Request an appointment.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-3xl">
            We’ll confirm availability and send a private tour window.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border hairline surface p-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-luxury-gold/40 focus:border-white/20 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-luxury-gold/40 focus:border-white/20 transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-luxury-gold/40 focus:border-white/20 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-white/5 text-white outline-none focus:ring-2 focus:ring-luxury-gold/40 focus:border-white/20 transition resize-none"
                  placeholder="Preferred times, questions, or requests…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-luxury-gold text-black py-4 px-6 rounded-full font-semibold hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Request Tour
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-3xl border hairline surface p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">Contact</h3>
              
              <div className="space-y-6">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-white/85 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">Phone</p>
                    <p className="text-lg font-semibold text-white">(123) 456-7890</p>
                  </div>
                </a>

                <a
                  href="mailto:info@buenavistaproperty.com"
                  className="flex items-center gap-4 text-white/85 hover:text-white transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-luxury-gold group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">Email</p>
                    <p className="text-lg font-semibold text-white">info@buenavistaproperty.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-white/85">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">Availability</p>
                    <p className="text-lg font-semibold text-white">By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border hairline surface p-8">
              <h3 className="text-2xl font-display font-semibold mb-4">Quick facts</h3>
              <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">MLS: 6910360</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Price: $12,495,000</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Beds: 6</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Baths: 8</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
