export const WhatWeMeasure = () => (
  <section id="measure" className="block">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">03 &nbsp;//&nbsp; What we measure</span>
        <h2>Signals other wearables can&apos;t see.</h2>
        <p>
          Trunk-worn sensors estimate load from acceleration. Force plates work in a lab. Insoles
          measure the actual impact at the actual joint that breaks — every landing, every practice.
        </p>
      </div>

      <div className="measure-list">
        <div className="measure-row">
          <div className="num">M.01</div>
          <h3>Bilateral force asymmetry</h3>
          <p>
            Left vs. right load distribution on every landing. Asymmetry over 15% is a leading
            indicator of compensation patterns and ACL risk.
          </p>
        </div>
        <div className="measure-row">
          <div className="num">M.02</div>
          <h3>Ground reaction forces</h3>
          <p>
            Direct measurement at the foot — not estimated from torso acceleration. Peak force in
            body-weights, per leg, per landing.
          </p>
        </div>
        <div className="measure-row">
          <div className="num">M.03</div>
          <h3>Landing quality</h3>
          <p>
            Pressure distribution patterns that distinguish a controlled landing from a collapse.
            The signature of jumper&apos;s knee starts here.
          </p>
        </div>
        <div className="measure-row">
          <div className="num">M.04</div>
          <h3>Cumulative load &amp; fatigue</h3>
          <p>
            Per practice, per match, per season. We surface the trend before the threshold — not
            the injury after it.
          </p>
        </div>
      </div>
    </div>
  </section>
);
