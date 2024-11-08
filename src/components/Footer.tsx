import Facebook from '/facebook-brands-solid.svg'
import X from '/x-twitter-brands-solid.svg'
import LinkedIn from '/linkedin-brands-solid.svg'

function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "X", icon: X, url: "https://X.com" },
    { name: "LinkedIn", icon: LinkedIn, url: "https://linkedin.com" },
  ]
  return (
    <div className="bg-[#0F0F0F] p-8 font-inter w-full mt-8">
      <div className="flex flex-col gap-11 py-12 ">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8 sm:w-2/5">
            <img src="/Logo.png" className="w-24" />
            <div className="flex flex-col gap-24">
              <p>Truth, piety and diligence remain a hallmark in setting company’s goal and response</p>
              <div className="flex gap-6">
              {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label={`Visit our ${link.name} page`}
        >
          <img src={link.icon} className="w-6 h-6" />
        </a>
      ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 sm:w-1/5">
            <h4 className="text-xl font-medium text-white">Company</h4>
            <ul className="flex flex-col gap-6">
              <li>Service</li>
              <li>Resources</li>
              <li>About us</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-8 sm:w-1/5">
            <h4 className="text-xl font-medium text-white">Help</h4>
            <ul className="flex flex-col gap-6">
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
          <h4 className="text-xl font-medium text-white">Looking for a solution?</h4>
          <div className='py-3 px-4 rounded-lg border cursor-pointer shadow-heroBtn bg-white flex gap-4 justify-center items-center'>
        <span className='text-black font-medium'>Get in touch now</span>
        <svg xmlns="http://www.w3.org/2000/svg" width={'1.5rem'} viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
      </div>
          </div>
        </div>
      

      <div className="border border-accent w-full"></div>
      <p className="text-center">© Copyright 2024, All Rights Reserved by Metallon Delta Corporation (MDC)</p>
      </div>      
    </div>
  )
}

export default Footer
