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
            45%<sup>1</sup>
          </div>
          <p className="desc">
            of elite volleyball players develop patellar tendinopathy — vs. 7% in non-jumping
            controls.
          </p>
        </div>
        <div className="stat">
          <div className="index">[ 02 ]</div>
          <div className="figure">
            86.5%<sup>2</sup>
          </div>
          <p className="desc">
            of volleyball ACL injuries are non-contact — they happen on landings nobody was
            watching.
          </p>
        </div>
        <div className="stat">
          <div className="index">[ 03 ]</div>
          <div className="figure">
            $50K<sup>3</sup>
          </div>
          <p className="desc">
            per ACL surgery + rehab. 9–12 months out. Only 44% return to pre-injury level.
          </p>
        </div>
      </div>

      <div className="citations">
        <span>1 — Lian et al., AJSM 2005, PMID 15722279.</span>
        <span>2 — Takahashi et al., Medicine 2019, PMID 31261524.</span>
        <span>3 — CostHelper Health, ACL Reconstruction Cost, 2024. Ardern et al., BJSM 2011.</span>
      </div>
    </div>
  </section>
);
