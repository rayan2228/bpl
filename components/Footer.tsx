import { Manrope } from 'next/font/google'
import Link from 'next/link'

const manrope = Manrope({ subsets: ['latin'], weight: ["700"] })

const footerLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Services", href: "/" },
];

const Footer = () => {
    return (
        <footer>

            {/* BIG TITLE */}
            <h4 className={`bg-primary-color-four ${manrope.className} text-center text-5xl md:text-7xl lg:text-8xl text-white py-10 md:py-12`}>
                Stay Tuned!
            </h4>

            {/* FOOTER CONTENT */}
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center py-5 text-sm gap-4 md:gap-0">

                    {/* LEFT TEXT */}
                    <h6 className="text-center md:text-left">
                        © 2026 Chottogram Royals. All rights reserved.
                    </h6>

                    {/* LINKS */}
                    <div className="flex items-center gap-4">
                        {footerLinks.map((item, index) => (
                            <Link key={index} href={item.href} className="hover:underline">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
