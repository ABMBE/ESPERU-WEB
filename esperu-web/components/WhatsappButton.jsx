export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/51966366499?text=Hola%20ESPERU,%20quiero%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-full
        bg-[#C8A95B]
        text-black
        flex
        items-center
        justify-center
        shadow-xl
        shadow-[#C8A95B]/20
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
      "
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.29-1.65a11.9 11.9 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.48-8.42z" />
      </svg>
    </a>
  );
}