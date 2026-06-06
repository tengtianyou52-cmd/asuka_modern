<template>
  <div class="container page-section page-top-padding">
    <h1 class="section-title">代行の流れ</h1>
    <p class="section-subtitle">
      asukaのタオバオ・アリババ輸入代行サービスには、「通常プラン」と、手続きを大幅にスキップして買い付け・発送を急ぐ「デポジットチャージ高速プラン」の2つの流れがあります。
    </p>

    <!-- Introductory Banner -->
    <div class="glass-card intro-banner animate-fade-in-up">
      <div class="banner-badge"><i class="fa-solid fa-gauge-high"></i> スピード重視の方へ</div>
      <p>
        「デポジットチャージ高速プラン」では、事前にお預かりしたデポジット（預け金）からお支払い・清算を自動処理するため、<strong>「見積書の確認」や「入金確認の待ち時間」が一切ありません。</strong><br>
        通常のフローに比べて最短で商品を手配・発送することができます。
      </p>
    </div>

    <!-- Comparative Flow Timeline -->
    <div class="timeline-container">
      
      <!-- Step 1 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 1</div>
          <div class="step-image step-image--signup"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>会員登録</h4>
            <p>お申し込みフォームより会員登録を行ってください。「無料会員」「ゴールド会員」「無在庫会員」からご希望の種別をご選択いただけます。登録の際は必ず<strong>「チャットワークID」</strong>をご入力ください。</p>
          </div>
          <div class="flow-panel fast-flow">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <h4>会員登録 & デポジットチャージ</h4>
            <p>通常会員登録に加え、高速手配を有効化するために、事前チャットワークにて合意した目安予算をデポジット（前払金）として弊社指定口座へチャージしていただきます。</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="timeline-arrow"><i class="fa-solid fa-arrow-down"></i></div>

      <!-- Step 2 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 2</div>
          <div class="step-image step-image--write"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>オーダーシート作成</h4>
            <p>弊社管理システムのマイページより、ご希望の商品情報を入力しオーダーシートを作成・ご提出ください。</p>
          </div>
          <div class="flow-panel fast-flow">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <h4>オーダーシート作成</h4>
            <p>通常プランと同様にマイページよりオーダーシートを作成・ご提出ください。提出と同時に手配プロセスが始まります。</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="timeline-arrow"><i class="fa-solid fa-arrow-down"></i></div>

      <!-- Step 3 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 3</div>
          <div class="step-image step-image--calculate"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>お見積り ＆ 前金のお支払い</h4>
            <p>ご注文確定後、商品代金に基づいたお見積書を発行します。チャットワークで通知が届きますので、前金をお支払いください。</p>
          </div>
          <div class="flow-panel fast-flow skipped-panel">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <div class="skip-badge">SKIP <i class="fa-solid fa-circle-check"></i></div>
            <h4>お見積り確認のスキップ</h4>
            <p>見積もり発行と入金確認の手続きをすべてスキップします。余分な連絡の往復がなく、時間ロスがゼロになります。</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="timeline-arrow"><i class="fa-solid fa-arrow-down"></i></div>

      <!-- Step 4 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 4</div>
          <div class="step-image step-image--buying"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>商品買い付け開始</h4>
            <p>お客様からの前金ご入金を弊社にて確認でき次第、現地の店舗または工場へ買い付けの手配をスタートします。</p>
          </div>
          <div class="flow-panel fast-flow highlight-panel">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <div class="speed-badge">IMMEDIATE <i class="fa-solid fa-bolt"></i></div>
            <h4>ご注文確定後、即時買い付け</h4>
            <p>オーダーシートの送信内容が確定した時点で、デポジットから充当する形で<strong>ただちに買い付けを行います。</strong>入金確認待ちがありません。</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="timeline-arrow"><i class="fa-solid fa-arrow-down"></i></div>

      <!-- Step 5 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 5</div>
          <div class="step-image step-image--liquidation"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>検品・梱包・清算書の受領</h4>
            <p>商品が中国倉庫に到着後、検品と二重梱包を行い、送料を含めた最終的な清算書（請求書）を発行します。差額のお支払いをお願いします。</p>
          </div>
          <div class="flow-panel fast-flow skipped-panel">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <div class="skip-badge">SKIP <i class="fa-solid fa-circle-check"></i></div>
            <h4>発送前清算のスキップ</h4>
            <p>発送前の追加清算手続きをスキップ。到着後すぐに発送作業に移行するため、出荷のタイミングを逃しません。</p>
          </div>
        </div>
      </div>

      <!-- Arrow -->
      <div class="timeline-arrow"><i class="fa-solid fa-arrow-down"></i></div>

      <!-- Step 6 -->
      <div class="timeline-step">
        <div class="step-meta">
          <div class="step-num">STEP 6</div>
          <div class="step-image step-image--sending"></div>
        </div>
        <div class="step-flows">
          <div class="flow-panel normal-flow">
            <span class="flow-tag">通常プラン</span>
            <h4>国際発送</h4>
            <p>送料および最終清算金額のご入金が確認でき次第、商品を日本（またはご指定の納品先）へ発送いたします。※関税等が発生した場合は商品到着時にお支払いください。</p>
          </div>
          <div class="flow-panel fast-flow highlight-panel">
            <span class="flow-tag fast-tag">デポジットチャージ高速プラン</span>
            <div class="speed-badge">IMMEDIATE <i class="fa-solid fa-plane-departure"></i></div>
            <h4>検品完了後、即時発送</h4>
            <p>検品完了後、即座に出荷手続きを行い発送します。発送後にデポジット残高より自動清算され、マイページにて清算内訳書が発行されます。</p>
          </div>
        </div>
      </div>

    </div>

    <!-- CTA Section -->
    <div class="flow-cta glass-card text-center">
      <h3>どちらのプランが最適か迷われていますか？</h3>
      <p>お客様の取扱品目や仕入れ頻度から、最適なプラン設定をご提案させていただきます。お気軽にご相談ください。</p>
      <NuxtLink to="/contact" class="btn-primary">
        <i class="fa-solid fa-envelope"></i> プランの相談・問い合わせをする
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '代行の流れ - asuka',
  meta: [
    { name: 'description', content: 'asukaの中国輸入代行業務フロー。通常プランと、見積・清算プロセスをスキップして即時手配・即時発送を行うデポジットチャージ高速プランの流れを比較紹介。' }
  ]
})
</script>

<style scoped>
.page-top-padding {
  padding-top: 100px;
}

.intro-banner {
  border-left: 4px solid var(--color-primary);
  padding: 2rem;
  margin-bottom: 4rem;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--color-primary);
  background-color: rgba(79, 70, 229, 0.1);
  padding: 0.35rem 1rem;
  border-radius: var(--border-pill);
  margin-bottom: 0.75rem;
}

.intro-banner p {
  font-size: 1.05rem;
  color: var(--text-main);
  line-height: 1.7;
}

/* Timeline grid */
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.timeline-step {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 2rem;
  align-items: stretch;
}

.step-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.step-num {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.step-image {
  width: 90px;
  height: 90px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--border-radius-sm);
}

.step-image--signup {
  background-image: url('/img/sign-up.png');
}

.step-image--write {
  background-image: url('/img/write.png');
}

.step-image--calculate {
  background-image: url('/img/calculate.png');
}

.step-image--buying {
  background-image: url('/img/buying.png');
}

.step-image--liquidation {
  background-image: url('/img/liquidation.png');
}

.step-image--sending {
  background-image: url('/img/sending-plane.png');
}

.step-flows {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.flow-panel {
  background: #ffffff;
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  position: relative;
  display: flex;
  flex-direction: column;
}

.flow-tag {
  align-self: flex-start;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  background-color: var(--bg-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-pill);
  margin-bottom: 1rem;
}

.fast-tag {
  color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.1);
}

.flow-panel h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}

.flow-panel p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
}

/* Specific panels styling */
.highlight-panel {
  border-color: rgba(59, 130, 246, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, rgba(59, 130, 246, 0.02) 100%);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.05);
}

.skipped-panel {
  background-color: #f8fafc;
  border: 1px dashed #cbd5e1;
}

.skipped-panel p, .skipped-panel h4 {
  opacity: 0.75;
}

.skip-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: #f59e0b; /* Amber */
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-pill);
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.speed-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: #10b981; /* Green */
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-pill);
  font-size: 0.75rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
}

/* Arrow divider styling */
.timeline-arrow {
  text-align: center;
  color: #cbd5e1;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  margin-left: 90px;
}

.flow-cta {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.flow-cta h3 {
  font-size: 1.4rem;
  font-weight: 700;
}

.flow-cta p {
  color: var(--text-muted);
  max-width: 600px;
  margin-bottom: 1rem;
}

@media (max-width: 1024px) {
  .step-flows {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .timeline-step {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .step-meta {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem 1.5rem;
  }
  .step-image {
    width: 60px;
    height: 60px;
  }
  .timeline-arrow {
    margin-left: 0;
  }
}
</style>
