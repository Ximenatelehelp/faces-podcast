import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Booking() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    website: '',
    linkedin: '',
    instagram: '',
    bio: '',
    expertise: '',
    topics: '',
    why: '',
    referral: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate submission — connect to your backend / email service
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="booking" className="section-pad bg-black-deep relative overflow-hidden grain-overlay" ref={ref}>
      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-5"
        style={{ background: 'radial-gradient(ellipse, #C9A84C 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="w-8 h-px bg-gold/60" />
            <span className="text-xs tracking-ultra uppercase text-gold">Apply to Appear</span>
            <span className="w-8 h-px bg-gold/60" />
          </motion.div>

          <motion.h2
            className="font-display font-light leading-tight mb-6"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Share Your Story
            <br />
            <span className="italic text-gold-gradient">with the World.</span>
          </motion.h2>

          <motion.p
            className="text-gray-warm max-w-xl mx-auto text-base font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're always looking for compelling founders and leaders with powerful stories to share. 
            Apply to be a guest on The Faces Podcast.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
        <div className="text-center py-20">
  <a
  href="https://www.thefacespodcast.com/beaguest"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-black-deep px-10 py-5"
>
  Apply to Be a Guest →
</a>

  <p className="text-gray-muted mt-6">
    Complete your application through our official guest application form.
  </p>
</div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] tracking-wider uppercase text-gray-warm">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border border-gold/20 focus:border-gold/50 text-beige text-sm px-4 py-3 outline-none placeholder-gray-muted/50 transition-colors duration-200"
      />
    </div>
  )
}

function TextAreaField({ label, name, value, onChange, required, placeholder, rows = 4 }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] tracking-wider uppercase text-gray-warm">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="bg-transparent border border-gold/20 focus:border-gold/50 text-beige text-sm px-4 py-3 outline-none placeholder-gray-muted/50 transition-colors duration-200 resize-none"
      />
    </div>
  )
}
