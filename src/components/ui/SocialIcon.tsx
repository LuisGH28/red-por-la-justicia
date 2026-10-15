type SocialIconName = "instagram" | "facebook" | "tiktok";

type SocialIconProps = {
  name: SocialIconName;
};

const paths: Record<SocialIconName, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M13.7 22v-8.8h3l.5-3.4h-3.5V7.6c0-1 .3-1.7 1.8-1.7h1.9v-3A25 25 0 0 0 14.6 3c-2.8 0-4.7 1.7-4.7 4.8v2H7v3.4h2.9V22h3.8Z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      stroke="none"
      d="M16.6 3c.2 1.8 1.2 3.1 3.1 3.8v3.4a8.3 8.3 0 0 1-3.1-.8v6.3a6.3 6.3 0 1 1-5.4-6.2v3.5a2.9 2.9 0 1 0 1.9 2.7V3h3.5Z"
    />
  ),
};

export function SocialIcon({ name }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
