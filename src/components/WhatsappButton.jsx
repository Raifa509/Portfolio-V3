
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  const phoneNumber = '971509531558';
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="fixed bottom-6 right-6 z-9999 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
