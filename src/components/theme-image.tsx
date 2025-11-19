import { useTheme } from "@/contexts/theme-context";

interface ThemeImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  ...imgProps
}: ThemeImageProps) {
  const { isDark } = useTheme();
  const src = isDark ? darkSrc : lightSrc;

  return (
    <img {...imgProps} alt={alt} height={height} src={src} width={width} />
  );
}
