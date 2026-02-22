import { type CopyKeys } from "@/lib/copy";

type T = Record<CopyKeys, string>;

export function Footer({ t }: { t: T }) {
  return (
    <footer>
      <div className="container">
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}
