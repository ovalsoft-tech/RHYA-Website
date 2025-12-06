import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer id="contact" className="bg-secondary text-white pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  {/* Logo-3.svg as Icon */}
                  <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <rect width="1000" height="1000" rx="500" fill="url(#paint0_linear_5_5458)"/>
                    <path d="M842.389 353.17C840.411 361.742 830.52 404.6 820.63 449.436L802.828 529.878L779.75 507.459L756.013 485.041L642.604 593.176C568.097 664.386 524.58 701.31 515.349 701.31C506.777 701.31 483.04 684.167 456.666 658.452C432.27 634.715 408.533 615.594 403.258 615.594C398.643 615.594 381.499 625.484 364.356 637.352C312.927 674.276 312.267 671.639 361.059 622.187L407.874 574.714L437.545 591.857C454.029 601.088 474.469 609 483.04 608.341C496.887 607.681 496.887 607.022 478.425 601.747C467.875 598.45 451.391 588.56 442.82 579.329C415.127 550.318 401.28 556.252 324.136 632.078L254.244 701.31H205.452H156L261.497 595.813C318.861 538.449 374.906 487.679 384.796 483.063C408.533 473.173 422.38 481.745 473.15 539.768C494.249 563.505 515.349 582.626 520.623 582.626C531.832 582.626 693.375 432.952 693.375 422.403C693.375 418.447 684.144 405.919 672.935 394.05L652.494 372.951L717.771 361.742C753.376 355.148 792.937 347.895 805.465 345.258C843.707 336.686 847.004 337.346 842.389 353.17Z" fill="#00D4FF"/>
                    <path d="M442.82 579.329C456.482 593.642 473.314 600.759 490.622 605.704L520.623 582.626C515.349 582.626 494.249 563.505 473.15 539.768C422.38 481.745 408.533 473.173 384.796 483.063C374.906 487.679 318.861 538.449 261.497 595.813L156 701.31H205.452H254.244L324.136 632.078C401.28 556.252 415.127 550.318 442.82 579.329Z" fill="white"/>
                    <path d="M570.076 411.193C603.044 411.193 620.187 365.039 595.791 343.28C557.548 308.993 505.459 361.742 541.724 398.006C548.976 405.259 562.164 411.193 570.076 411.193Z" fill="white"/>
                    <path d="M610.297 437.568C587.878 437.568 560.845 434.271 550.295 430.315C540.405 427.018 518.646 411.193 502.822 396.028C486.997 380.863 475.788 372.951 477.107 378.885C488.975 413.171 502.162 473.173 505.459 511.415C508.096 535.812 512.712 558.23 516.668 560.208C519.965 562.186 552.273 535.812 587.219 500.866L651.836 437.568H610.297Z" fill="white"/>
                    <path d="M245.013 440.865C274.684 467.899 317.543 428.997 295.124 394.71C283.256 376.908 253.585 372.292 239.739 386.139C227.87 398.007 230.508 427.678 245.013 440.865Z" fill="white"/>
                    <path d="M281.278 545.043C308.312 519.328 316.883 504.822 327.433 468.558C335.345 444.162 340.62 424.381 340.62 424.381C339.961 424.381 331.389 433.612 320.839 444.162C301.718 463.942 261.497 479.767 244.354 474.492C239.079 473.173 217.321 469.877 195.562 467.899L156 463.942L179.078 476.47C212.705 494.932 237.101 523.284 243.035 552.296L248.31 577.352L281.278 545.043Z" fill="white"/>
                    <path d="M456.007 347.895C458.479 333.72 446.116 308.994 436.225 304.049C412.489 287.565 370.291 311.631 370.291 341.961C370.291 363.06 392.049 384.819 413.149 384.819C431.611 384.819 456.007 363.72 456.007 347.895Z" fill="white"/>
                    <path d="M485.018 499.547C477.106 448.117 468.535 425.04 451.391 411.853C419.083 386.138 379.522 400.644 357.763 446.139C349.851 461.964 343.917 476.469 343.917 478.448C343.917 481.085 355.126 476.469 368.972 469.217C401.94 450.755 423.039 456.689 459.304 494.931L488.315 525.262L485.018 499.547Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_5_5458" x1="0" y1="0" x2="1072.5" y2="1028.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B050"/>
                    <stop offset="1" stopColor="#00D4FF"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight">RHYA</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                A grassroots-driven national movement mobilizing Nigerian youth to participate in national development through the Renewed Hope Agenda.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/RH_Youth_" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/renewedhopeyouthambassadors/" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-secondary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#priority-areas" className="text-gray-300 hover:text-white transition-colors">Priority Areas</a></li>
                <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Partner Benefits</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Volunteer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Resources</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Media Kit</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Registration Portal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-accent">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <a href="https://maps.app.goo.gl/eCMkk8CRzNr1o7yH8" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    22, Samora Machel Street,<br />Asokoro, FCT-Abuja
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <a href="mailto:info@renewedhopeyouth.org" className="text-gray-300 hover:text-white transition-colors">info@renewedhopeyouth.org</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Renewed Hope Youth Ambassadors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
