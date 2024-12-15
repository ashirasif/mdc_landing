import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="w-full max-w-screen-xl bg-secondary font-inter flex flex-col-reverse sm:flex-row py-6 sm:px-10 gap-2 border border-borderColor text-lg rounded-3xl text-white">
      <div className="pt-16 hidden sm:pl-6 px-4 sm:flex flex-col gap-12 sm:w-1/2">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-medium">Contact Us</h2>
          <p className="text-foreground">
            Get in touch with us to discover how MDC can empower your mission
            and deliver tailored solutions for your needs
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="/location-dot-solid.svg" className="w-5 h-5" />
              <span className="text-base">MAIN CORPORATE OFFICE</span>
            </div>
            <span className="text-foreground">525-A, Service Road North, F10/2 Islamabad</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="/phone-solid.svg" className="w-5 h-5" />
              <span className="text-base">PHONE NUMBER</span>
            </div>
            <span className="text-foreground">+92 (51) 222 4 888</span>
            <span className="text-foreground">Fax: +92 (51) 222 4 886</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <img src="/envelope-regular.svg" className="w-5 h-5" />
              <span className="text-base">FOR GENERAL INQUIRIES</span>
            </div>
            <span className="text-foreground">info@metallondeltacorporation.com</span>
          </div>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}

export default Contact;
