// tailwind.config.js
module.exports = {
	theme: {
		extend: {
			colors: {
				'pink-ink': '#3cc8a0',
				'paper-bg': '#fdfbf7',
				'dark-ink': '#2c2c2c',
			},
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				handwriting: ['Caveat', 'cursive'],
			},
			backgroundImage: {
				'grid-pattern': 'radial-gradient(#CEF3E7 1px, transparent 1px)',
				'header-texture': "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"%23E7F9F3\" d=\"M0 0h100v100H0z\"/></svg>')",
			}
		}
	}
}
