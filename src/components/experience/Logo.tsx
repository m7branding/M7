// M7 wordmark — wit brandmark ("M7"), inline zodat 'ie meekleurt met de
// dark theme. Bron: officiële M7 "Light Brandmark".

export function M7Logo({ className = "", height = 28 }: { className?: string; height?: number }) {
  return (
    <svg
      viewBox="0 0 79 44"
      height={height}
      width={(79 / 44) * height}
      className={className}
      fill="currentColor"
      role="img"
      aria-label="M7"
    >
      <path d="M51.8486 43.8068L67.4769 9.80413H55.5577L51.9053 0H79L78.9717 9.46408L62.7205 43.8068H51.8486Z" />
      <path d="M67.4769 9.80408H55.5577L51.9053 0H57.2863L67.4769 9.80408Z" />
      <path d="M78.9715 9.46399L62.7203 43.8069L67.4767 9.80408L62.252 0H78.9999L78.9715 9.46399Z" />
      <path d="M62.7205 43.807H51.8486L67.477 9.8042L62.7205 43.807Z" />
      <path d="M0 0.105957H14.6194L24.7166 28.7487H24.8407L34.9997 0.105957H49.5572V44.0002H39.8935V10.3356H39.7697L28.2477 44.0002H20.8759L9.78762 10.3356H9.66373V44.0002H0V0.105957Z" />
    </svg>
  );
}
