import React from 'react';
import '../css/StyleGuide.css'
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react';


// ColorSwatch component remains unchanged
const ColorSwatch = ({ name, color, description }) => (
	<div className="styleguide-color-swatch">
		<div className={`styleguide-color-box ${name}`} />
		<div className="styleguide-color-label">
			<p><strong>{name}</strong>: <span className='code'>#{color}</span></p>
			<p>{description}</p>
		</div>
	</div>
);

// Section component for main sections
const Section = ({ title, children }) => (
	<div className="styleguide-section">
		<h2 className="styleguide-heading">{title}</h2>
		{children}
	</div>
);

// Subsection component for repeated subsection structure
const Subsection = ({ title, children }) => (
	<div className="styleguide-subsection">
		{title && <h3>{title}</h3>}
		{children}
	</div>
);

// TypographySample component for consistent typography display
const TypographySample = ({ label, font, description, className, children }) => (
	<div>
		<div className="styleguide-typography-label">
			<p>
				<strong>{label}</strong>
				{font && <span className="code">{font}</span>}
			</p>
			<p>{description}</p>
		</div>
		<div className={`styleguide-typography-sample ${className || ''}`}>
			{children}
		</div>
	</div>
);

const ButtonStyle = ({label, description, children}) => (
	<div className='styleguide-buttons'>
		{children}
		<div className='styleguide-button-label'>
			<p><strong>{label}</strong></p>
			<p>{description}</p>
		</div>
	</div>
);

const TopNavExample = () => (
	<div className='top-nav example-nav'>
		<div className='left-nav example-nav'>
			<Menu className='nav-icon close-icon example-nav'/>
		</div>
		<div className='mid-nav example-nav'>
			<div className='nav-icon home-icon example-nav'>
				<img src={ logo } className="nav-logo example-nav" alt="Logo" />
				<p className='home-icon'>SmartChoice</p>
			</div>
		</div>
		<div className='right-nav example-nav'>
		</div>
	</div>
);

const NavigationExample = () => (
	<div className="nav-demo">
		<p>
			The <strong>top navigation</strong> features a menu button on the left and the SmartChoice logo with the app name. Clicking the logo or name returns users to the home page.
		</p>
		<div className='example-container'>
			<p><strong>Top Navigation</strong> Example:</p>
			<TopNavExample />
		</div>
		<p>
			The menu button opens a <strong>side navigation</strong> with links to all main pages. The active page is visually highlighted. The side nav is accessible and closes on outside click or ESC.
		</p>
		<div className='example-container'>
			<p><strong>Side Navigation</strong> Example:</p>
			<div className="side-nav-placeholder" style={{
				border: "2px dashed #aaa",
				borderRadius: "8px",
				padding: "24px",
				textAlign: "center",
				color: "#888",
				background: "#f9f9f9"
			}}>
				{/* Placeholder for side navigation example */}
				Side navigation example goes here.
			</div>
		</div>
	</div>
);

const StyleGuide = () => {
	return (
		<div className="styleguide-root">
			<h1 className="styleguide-title">Style Guide</h1>
			<Section title="Branding">
				<Subsection title="Visual Theme">
					<p>
						<strong>SmartChoice</strong> is an app that recommends activities tailored to your current mood. Its design draws inspiration from game interfaces, creating an interactive and playful experience that feels more like navigating a game than using a traditional productivity tool.
					</p>
				</Subsection>
				<Subsection title="Logo Usage">
					<div className='styleguide-logo-usage'>
						<img src={ logo } className="styleguide-logo" alt="SmartChoice Logo" aria-hidden="true" />
						<p>
							This is the primary logo for SmartChoice. It should always appear alongside the app name on every page and serve as the home icon to maintain brand consistency.
						</p>
					</div>
				</Subsection>
				<Subsection title="Tagline(s)">
					<p>All taglines should communicate the core mission of SmartChoice: empowering users to make decisions based on their mood.</p>
					<p>Taglines use the <code>tagline</code> class and should be styled consistently.</p>
					<p className="styleguide-tagline tagline">Sample Tagline</p>
				</Subsection>
				<Subsection title="Color Palette">
					<div className="styleguide-color-palette">
						<ColorSwatch name="tea-rose-red" color="FBC4C9ff" description="Primary background color, used as the main backdrop on all pages." />
						<ColorSwatch name="seashell" color="FDEEE7ff" description="Secondary background color for subtle contrast." />
						<ColorSwatch name="eggplant" color="60405Aff" description="Primary text color for high readability." />
						<ColorSwatch name="dark-eggplant" color="3d2236ff" description="Secondary text color for less prominent content." />
						<ColorSwatch name="pistachio" color="A8D18Dff" description="Contrast background for highlighting sections or elements." />
						<ColorSwatch name="misty-rose" color="FDE7E9ff" description="Highlight color for emphasis and interactive states." />
						<ColorSwatch name="bakermiller-pink" color="F292ADff" description="Accent color for highlights and call-to-action elements." />
					</div>
				</Subsection>
				<Subsection title="Typography">
					<div className='styleguide-typography'>
						<TypographySample
							label="Headings (h1, h2)"
							font="'Luckiest Guy', cursive, 68px/38px"
							description="Used for main titles and section headings. h1 must be used to title all pages. "
							className="styleguide-heading-sample"
						>
							Sample Heading
						</TypographySample>
						<TypographySample
							label="Subheadings (h3)"
							font="'Inter', sans-serif, 24px, 600, uppercase"
							description="Used for sub-section titles if h1 and h2 are not sufficient."
							className="styleguide-subheading-sample"
						>
							Sample Subheading
						</TypographySample>
						<TypographySample
							label="Body (p)"
							font="'Inter', sans-serif, 16px"
							description="Used for general content and descriptions throughout the app."
							className="styleguide-body-sample"
						>
							Sample body text
						</TypographySample>
						<TypographySample
							label="Tagline"
							font="'Inter', sans-serif, 20px, italic"
							description="Used for taglines and emphasis text, typically paired with page titles."
							className="styleguide-tagline-sample tagline"
						>
							Sample tagline text
						</TypographySample>
					</div>
				</Subsection>
			</Section>

			<Section title="UI Components">
				<Subsection title="Buttons">
					<p>button stuff here :)</p>
				</Subsection>
				<Subsection title="Navigation">
					<NavigationExample />
				</Subsection>
				<Subsection title="Forms & Inputs">
					<p>Showcase input fields, checkboxes, dropdowns, and validation styles.</p>

				</Subsection>
				<Subsection title="Cards / Modals / Lists (Optional)">
					<p>Any additional UI blocks used in your app.</p>
				</Subsection>
			</Section>

			<Section title="Layout & Spacing">
				<Subsection>
					<h3>Page Background & Content Area</h3>
					<p>
						Each page is wrapped in a <code>Background</code> component that visually resembles a browser window. The background has even margins on all sides to separate it from the app window, creating a "window within a window" effect.
					</p>
					<ul>
						<li>
							<b>Background Margin:</b> <code>32px</code> (or <code>2rem</code>) on all sides from the app window.
						</li>
						<li>
							<b>Content Area:</b> Inside the background, content has a larger top margin (<code>48px</code> or <code>3rem</code>) and side margins (<code>24px</code> or <code>1.5rem</code>).
						</li>
						<li>
							<b>Element Spacing:</b> Use <code>24px</code> vertical spacing between major sections, <code>16px</code> between related items, and <code>8px</code> between tightly grouped elements.
						</li>
						<li>
							<b>Proximity Principle:</b> Related items (e.g., form fields, nav links) are grouped closer together, while unrelated sections have more space between them.
						</li>
						<li>
							<b>Responsive:</b> Margins and padding scale down on smaller screens to maintain usability and visual balance.
						</li>
					</ul>
					<div className="layout-demo">
						<div className="background-demo" aria-label="Background demo">
							<div className="content-area-demo" aria-label="Content area demo">
								<h4>Content Area Example</h4>
								<p>This area represents the main content inside the background component.</p>
							</div>
						</div>
					</div>
				</Subsection>
			</Section>

			<Section title="Accessibility">
				<Subsection>
					<p>
						All images include descriptive <code>alt</code> text. Color contrast ratios meet or exceed WCAG AA standards for readability. All interactive elements are keyboard accessible and have visible focus states. ARIA labels and roles are used where appropriate. The UI passes Lighthouse accessibility tests.
					</p>
				</Subsection>
			</Section>
		</div>
	)
}

export default StyleGuide;