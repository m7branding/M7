/** Rendert platte content-tekst: alinea's (\n\n) en lijsten ("- "). */
export function RichText({ text, className }: { text: string; className?: string }) {
  const blocks = text.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className={`rich${className ? " " + className : ""}`}>
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        const list = lines.filter((l) => l.trim().startsWith("- "));
        if (list.length && list.length === lines.length) {
          return (
            <ul key={i}>
              {list.map((l, j) => (
                <li key={j}>{l.trim().slice(2)}</li>
              ))}
            </ul>
          );
        }
        if (list.length) {
          const intro = lines.filter((l) => !l.trim().startsWith("- "));
          return (
            <div key={i}>
              {intro.map((l, j) => (
                <p key={j}>{l}</p>
              ))}
              <ul>
                {list.map((l, j) => (
                  <li key={j}>{l.trim().slice(2)}</li>
                ))}
              </ul>
            </div>
          );
        }
        return <p key={i}>{b}</p>;
      })}
    </div>
  );
}
