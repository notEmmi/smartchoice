import React from 'react';

const StyleGuide = () => {
	return (
		<div>
			<h1>Style Guide</h1>

			<h2>Branding</h2>

			<h3>About SmartChoice</h3>
			<p><strong>SmartChoice</strong> is an app that recommends activities tailored to your current mood.</p>

			<h3>Logo Usage</h3>
			<img src="" className="smartchoice-logo" alt="SmartChoice Logo" />
			<p>This is the primary logo for SmartChoice. It should appear next to the app name on all pages and serve as the home icon for brand consistency.</p>

			<h3>Tagline(s)</h3>
			<ul>
				<li>"Let your mood decide."</li>
				<li>"Smarter choices, happier you."</li>
			</ul>

			<h3>Color Palette</h3>
			<p>Include hex codes, color names, and examples (e.g., primary, secondary, background).</p>

			<h3>Typography</h3>
			<p>List font families, sizes, weights, and where they are used (e.g., headings vs body).</p>

			<h3>Visual Theme</h3>
			<p>Describe the mood/aesthetic (e.g., minimal, playful, calming) and any consistent visual patterns.</p>

			<h2>UI Components</h2>

			<h3>Buttons</h3>
			<p>Include primary/secondary buttons, disabled states, hover effects, etc.</p>

			<h3>Navigation</h3>
			<p>Describe nav bar layout, icons, responsiveness, active states, etc.</p>

			<h3>Forms & Inputs</h3>
			<p>Showcase input fields, checkboxes, dropdowns, and validation styles.</p>

			<h3>Cards / Modals / Lists (Optional)</h3>
			<p>Any additional UI blocks used in your app.</p>

			<h2>Layout & Spacing</h2>
			<p>Describe grid system, padding/margins, alignment rules, and responsive behavior.</p>

			<h2>Accessibility</h2>
			<p>Note practices like alt text, color contrast, keyboard navigation, and ARIA labels.</p>
		</div>
	)
}

export default StyleGuide;