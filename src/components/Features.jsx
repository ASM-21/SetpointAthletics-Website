export const Problem = () => (
  <section id="problem" className="block">
    <div className="container">
      <div className="section-head">
        <span className="eyebrow">01 &nbsp;//&nbsp; The problem</span>
        <h2>Players log thousands of jumps a season. Almost none of it gets measured.</h2>
        <p>
          Patellar tendinopathy. ACL tears. Chronic knee pain. The damage builds up invisibly — and
          most programs are still counting jumps with clickers.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat">
          <div className="index">[ 01 ]</div>
          <div className="figure">
            45<span className="accent">%</span>
            <sup>1</sup>
          </div>
          <p className="desc">
            of elite volleyball players develop patellar tendinopathy — vs. 7% in non-jumping
            controls.
          </p>
        </div>
        <div className="stat">
          <div className="index">[ 02 ]</div>
          <div className="figure">
            86<span className="accent">.5%</span>
            <sup>4</sup>
          </div>
          <p className="desc">
            of volleyball ACL injuries are non-contact — they happen on landings nobody was
            watching.
          </p>
        </div>
        <div className="stat">
          <div className="index">[ 03 ]</div>
          <div className="figure">
            $50<span className="accent">K</span>
            <sup>7</sup>
          </div>
          <p className="desc">
            per ACL surgery + rehab. 9–12 months out. Only 44% return to pre-injury level.
          </p>
        </div>
      </div>

      <div className="citations">
        <span>1 — Lian et al., AJSM 2005, PMID 15722279.</span>
        <span>4 — Takahashi et al., Medicine 2019, PMID 31261524.</span>
        <span>
          7 — CostHelper Health, ACL Reconstruction Cost, 2024. Ardern et al., BJSM 2011.
        </span>
      </div>
    </div>
  </section>
);
