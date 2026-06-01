# The Faces Podcast — Website

A premium cinematic website for The Faces Podcast. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

---

## How to Customize

### 1. Add Your Hero Video

In `components/Hero.jsx`, find the comment `TO ADD YOUR VIDEO` and replace the placeholder div with:

```jsx
<video
  autoPlay muted loop playsInline
  className="absolute inset-0 w-full h-full object-cover"
  src="/videos/hero-video.mp4"
/>
```

Place your video at `public/videos/hero-video.mp4`.

---

### 2. Add Host Photos (Cody's Family Carousel)

In `components/Host.jsx`, update the `photos` array with real image paths:

```js
const photos = [
  { id: 1, src: '/images/cody-1.jpg', alt: 'Cody Hall' },
  { id: 2, src: '/images/cody-family.jpg', alt: 'Cody with family' },
  // ...
]
```

Place photos in the `public/images/` folder.

---

### 3. Add Your Logo

Replace the text logo in `components/Navbar.jsx` with:

```jsx
<img src="/images/logo.png" alt="The Faces Podcast" className="h-10" />
```

---

### 4. Add New Episodes

In `components/Episodes.jsx`, add entries to the `episodes` array:

```js
{
  number: 101,
  guest: 'Guest Name',
  title: 'Episode Title',
  youtubeId: 'YOUR_YOUTUBE_ID',
  thumbnail: 'https://img.youtube.com/vi/YOUR_YOUTUBE_ID/maxresdefault.jpg',
  tags: ['Tag1', 'Tag2'],
},
```

---

### 5. Connect the Booking Form

In `components/Booking.jsx`, replace the mock submit with your email/CRM integration:

```js
const handleSubmit = async (e) => {
  e.preventDefault()
  // Send to your backend, Formspree, EmailJS, etc.
  const res = await fetch('/api/apply', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
  if (res.ok) setSubmitted(true)
}
```

---

### 6. Update Brand Colors

All brand colors are in `styles/globals.css` and `tailwind.config.js`:

```css
--gold: #CD7F32;
--beige: #F0E6D0;
--black-deep: #0A0A0A;
```

---

## Project Structure

```
faces-podcast/
├── components/
│   ├── CustomCursor.jsx    # Premium cursor effect
│   ├── Navbar.jsx          # Sticky navigation
│   ├── Hero.jsx            # Cinematic hero section
│   ├── About.jsx           # Podcast mission section
│   ├── Episodes.jsx        # Featured episodes grid
│   ├── Host.jsx            # Cody Hall bio + photo carousel
│   ├── Booking.jsx         # Be a Guest application form
│   └── Footer.jsx          # Social links + contact
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/
│   ├── images/             ← Add your photos here
│   └── videos/             ← Add your video here
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## Deployment

Deploy easily to **Vercel** (recommended):

1. Push to GitHub
2. Connect repo to [vercel.com](https://vercel.com)
3. Deploy — zero config needed

Or use **Netlify**, **Render**, or any Node.js host.

---

## Tech Stack

- **Next.js 14** — React framework with SSR/SSG
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Cinematic animations
- **Cormorant Garamond** — Display / editorial font
- **DM Sans** — Body / UI font
