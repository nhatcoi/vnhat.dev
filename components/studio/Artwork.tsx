import type { Dict } from "@/lib/dict";
import {
  ArrowUpRight,
  Code2,
  Command,
  Layers,
  Terminal,
  Check,
} from "lucide-react";
export function BuilderArt({ t }: { t: Dict["art"] }) {
  return (
    <div
      className="builder-art"
      role="img"
      aria-label={t.alt}
    >
      <div className="art-glow glow-lime" />
      <div className="art-glow glow-green" />
      <div className="art-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="art-label">{t.label}</div>
      <div className="floating idea">
        <span className="tiny">{t.startsWith}</span>
        <b>
          {t.whatIf}<span>_</span>
        </b>
        <span className="idea-spark">✳︎</span>
      </div>
      <div className="floating code">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>build.ts</span>
        </div>
        <pre>
          <span>const</span> idea = curiosity;
          <br />
          <span>const</span> product = <em>build</em>({"{"}
          <br /> purpose: <q>make it useful</q>,<br /> craft:{" "}
          <q>every detail</q>,<br />
          {"}"});
          <br />
          <br />
          <em>ship</em>(product);
          <i className="caret" />
        </pre>
        <div className="code-status">
          <span className="live-dot" /> {t.buildPassed}
          <b>
            <Check size={10} /> {t.noErrors}
          </b>
        </div>
      </div>
      <span className="chip chip-ts">TypeScript</span>
      <span className="chip chip-rs">Rust</span>
      <span className="chip chip-ai">AI</span>
      <div className="floating shipped">
        <div className="ship-icon">
          <Layers size={26} />
        </div>
        <div>
          <b>{t.shippedTitle}</b>
          <small>{t.shippedSub}</small>
          <span className="ship-bar">
            <i />
          </span>
        </div>
        <span className="check">
          <Check size={14} />
        </span>
      </div>
      <div className="art-cursor">
        <ArrowUpRight size={26} />
        <span>{t.mode}</span>
      </div>
      <div className="art-note">
        <span /> {t.note}
      </div>
    </div>
  );
}
export function ProjectArt({ slug }: { slug: string }) {
  return (
    <div className={`project-art art-${slug}`} aria-hidden="true">
      {slug === "jkauto" ? (
        <div className="mini-ide">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>JKAuto / checkout.test</span>
          </div>
          <div className="ide-body">
            <aside>
              <Command size={19} />
              <span>Explorer</span>
              <b>▾ Test suites</b>
              <span> checkout</span>
              <span> authentication</span>
              <span> api</span>
            </aside>
            <div>
              <span className="test-label">
                Checkout flow <em>Passed</em>
              </span>
              {[
                "Navigate to /store",
                "Add product to cart",
                "Complete checkout",
                "Verify order status",
              ].map((t, i) => (
                <p key={t}>
                  <span>{i + 1}</span> {t}
                  <Check size={12} />
                </p>
              ))}
              <div className="run-result">
                ✓ All steps passed <span>4 / 4</span>
              </div>
            </div>
          </div>
        </div>
      ) : slug === "necom" ? (
        <div className="mini-store">
          <div className="store-nav">
            <b>necom.</b>
            <span>Living / Collection / Objects</span>
          </div>
          <div className="store-main">
            <div>
              <small>Thoughtful objects.</small>
              <b>
                A little more
                <br />
                room to live.
              </b>
              <span>Explore the collection ↗</span>
            </div>
            <div className="chair">
              <div />
              <i />
              <em />
            </div>
          </div>
        </div>
      ) : slug === "procman" ? (
        <div className="mini-terminal">
          <div className="window-bar">
            <i />
            <i />
            <i />
            <span>procman — workspace</span>
          </div>
          <p>
            <span>❯</span> procman start
          </p>
          <div className="terminal-row">
            <span>PROCESS</span>
            <span>STATUS</span>
            <span>PORT</span>
          </div>
          {[
            ["api", "3001"],
            ["web", "3000"],
            ["worker", "8080"],
          ].map(([n, port]) => (
            <div className="terminal-row" key={n}>
              <b>{n}</b>
              <span>● running</span>
              <span>{port}</span>
            </div>
          ))}
          <p className="terminal-foot">
            3 processes. One place. <Terminal size={14} />
          </p>
        </div>
      ) : (
        <div className="generic-art">
          <Code2 size={50} />
          <b>
            {slug === "jink"
              ? "Type. Polish. Insert."
              : slug === "openpka"
                ? "A connected campus."
                : "Build with intention."}
          </b>
          <span>
            {slug === "jink"
              ? "A little AI, wherever you write."
              : "Software for the way people work."}
          </span>
        </div>
      )}
    </div>
  );
}
