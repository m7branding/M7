import { siFacebook, siGoogle, siInstagram, siLinkedin, siWhatsapp, siYoutube } from "simple-icons";

const MAP: Record<string, { path: string; title: string }> = {
  instagram: siInstagram,
  linkedin: siLinkedin,
  facebook: siFacebook,
  youtube: siYoutube,
  google: siGoogle,
  whatsapp: siWhatsapp,
};

export function SocialIcon({ name, size = 18 }: { name: string; size?: number }) {
  const icon = MAP[name];
  if (!icon) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={icon.path} />
    </svg>
  );
}

export const socialLabel = (name: string) => MAP[name]?.title ?? name;
