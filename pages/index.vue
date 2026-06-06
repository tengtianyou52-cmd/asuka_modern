<template>
  <div class="home-page animate-fade-in-up">
    <!-- Hero Header Component -->
    <PictureArea />

    <div class="container page-content">
      
      <!-- 1. 主なサービス内容 (Services Section) -->
      <section class="page-section">
        <h2 class="section-title">主なサービス内容</h2>
        <p class="section-subtitle">中国輸入代行から検品・加工・個別配送・FBA納品まで、お客様のご要望に合わせた3つの基幹サービスを提供します。</p>
        
        <div class="grid-3">
          <!-- Card 1 -->
          <NuxtLink to="/flow" class="glass-card service-card">
            <div class="service-icon"><i class="fa-solid fa-cart-shopping"></i></div>
            <h3>タオバオ・アリババ代行</h3>
            <p>中国の2大ECプラットフォームからの買い付け・検品・国際発送をフルサポート。初めての方でも日本人スタッフが安心サポートします。</p>
            <span class="card-link">代行の流れを見る <i class="fa-solid fa-chevron-right"></i></span>
          </NuxtLink>

          <!-- Card 2 -->
          <NuxtLink to="/apparel" class="glass-card service-card">
            <div class="service-icon"><i class="fa-solid fa-shirt"></i></div>
            <h3>アパレル加工・無在庫支援</h3>
            <p>アパレル商品のタグ交換、個別検品、OPP袋入れ替え、防湿剤同封など、無在庫販売（ドロップシッピング）に不可欠な高品質流通加工を行います。</p>
            <span class="card-link">加工サービス詳細 <i class="fa-solid fa-chevron-right"></i></span>
          </NuxtLink>

          <!-- Card 3 -->
          <NuxtLink to="/amazon-fba" class="glass-card service-card">
            <div class="service-icon"><i class="fa-brands fa-amazon"></i></div>
            <h3>Amazon FBA納品サービス</h3>
            <p>買い付けた商品を中国国内でセット組み・ラベル貼り・梱包し、直接日本のAmazon FBA倉庫へ納品。業務自動化とコスト削減を実現します。</p>
            <span class="card-link">FBA納品詳細 <i class="fa-solid fa-chevron-right"></i></span>
          </NuxtLink>
        </div>
      </section>

      <!-- 2. 他社との比較 (Comparison Section) -->
      <section class="page-section bg-gradient-section">
        <h2 class="section-title">他社とのコスト比較</h2>
        <p class="section-subtitle">asukaは「為替レート」と「中国国内送料の実費請求」にこだわり、トータルコストで業界最安水準に挑戦しています。</p>

        <div class="comparison-grid">
          <div class="comparison-info">
            <div class="premium-badge">トータルコストで大きな差がでます</div>
            <p class="comparison-desc">
              代行手数料が「無料」と謳っていても、為替レートに高額な上乗せ（+1円など）があったり、中国国内送料を不当に高く請求されるケースが多々あります。<br>
              <strong>asukaはゴールド会員なら為替TTS + 0.5円、手数料無料、国内送料は実費のみの請求です。</strong>
            </p>
            <div class="comparison-chart-box">
              <img src="/img/Charts.gif" alt="コスト削減比較グラフ" class="comparison-gif">
            </div>
          </div>

          <div class="table-responsive">
            <div class="table-caption">
              【シミュレーション条件】 為替レート：1元＝18円想定、商品代金30,000元、重量200kgの場合
            </div>
            <table class="premium-table comparison-table">
              <thead>
                <tr>
                  <th>項目</th>
                  <th>A社 (手数料無料型)</th>
                  <th>B社 (手数料有料型)</th>
                  <th class="highlight-th">当社 (ゴールド会員)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-td">為替レート</td>
                  <td>TTS ＋ 1円</td>
                  <td>TTS ＋ 1円</td>
                  <td class="highlight-td">TTS ＋ 0.5円</td>
                </tr>
                <tr>
                  <td class="bold-td">商品代金 (人民元)</td>
                  <td>30,000元</td>
                  <td>30,000元</td>
                  <td class="highlight-td">30,000元</td>
                </tr>
                <tr>
                  <td class="bold-td">商品代金 (日本円)</td>
                  <td>570,000円</td>
                  <td>570,000円</td>
                  <td class="highlight-td text-primary-color">555,000円</td>
                </tr>
                <tr>
                  <td class="bold-td">代行手数料</td>
                  <td>無料</td>
                  <td>7%（39,900円）</td>
                  <td class="highlight-td text-primary-color">無料</td>
                </tr>
                <tr>
                  <td class="bold-td">中国国内送料</td>
                  <td>5,000元（95,000円）</td>
                  <td>4,500元（85,500円）</td>
                  <td class="highlight-td text-primary-color">3,000元（55,500円）<span class="note">*実費のみ</span></td>
                </tr>
                <tr>
                  <td class="bold-td">国際送料</td>
                  <td>3,400元（64,600円）</td>
                  <td>4,400元（83,600円）</td>
                  <td class="highlight-td">3,400元（62,900円）</td>
                </tr>
                <tr class="total-row">
                  <td class="bold-td">合計コスト</td>
                  <td class="text-through">729,600円</td>
                  <td class="text-through">779,000円</td>
                  <td class="highlight-total">673,400円</td>
                </tr>
              </tbody>
            </table>
            <div class="savings-alert">
              <i class="fa-solid fa-circle-check"></i> 他社に比べ <strong>56,200円 〜 105,600円</strong> のコスト削減が可能です！
            </div>
          </div>
        </div>
      </section>

      <!-- 3. 弊社の強み (Company Strengths) -->
      <section class="page-section">
        <h2 class="section-title">asukaが選ばれる理由</h2>
        <p class="section-subtitle">日本人スタッフによる万全のサポート体制と、ムダを徹底排除した自社一貫物流システム。</p>

        <div class="strengths-container">
          <div class="strengths-graphics">
            <img src="/img/Charity market.gif" alt="サポートイメージ" class="strength-gif">
            <div class="gifs-row">
              <img src="/img/Charts (1).gif" alt="分析イメージ" class="strength-gif-sm">
              <img src="/img/Container ship.gif" alt="国際物流イメージ" class="strength-gif-sm">
            </div>
          </div>

          <div class="strengths-list">
            <div class="strength-item-card">
              <span class="strength-num">01</span>
              <div>
                <h4>業界最安水準の国際送料・選べる配送ルート</h4>
                <p>OCS、流通王、快速船便、電池特殊ルートなど複数の配送ラインと提携。荷姿やスピードに応じて最適な送料カットを提案します。</p>
              </div>
            </div>

            <div class="strength-item-card">
              <span class="strength-num">02</span>
              <div>
                <h4>日本人スタッフによる迅速なサポート</h4>
                <p>現地駐在の日本人スタッフが買い付け・検品指示を直接管理。電話やチャット（Chatwork等）での対応により、細かな要望やトラブル対応もスムーズです。</p>
              </div>
            </div>

            <div class="strength-item-card">
              <span class="strength-num">03</span>
              <div>
                <h4>独自システムによる業務効率化</h4>
                <p>受注から梱包、発送精算までを管理する自社独自システムを導入。ミスを防ぎ、ビジネスのスピードを大幅にアップさせます。</p>
              </div>
            </div>

            <div class="strength-item-card">
              <span class="strength-num">04</span>
              <div>
                <h4>無在庫販売・個別加工の手数料が圧倒的低価格</h4>
                <p>アパレル商品のタグ付け替え、洗濯ラベル縫い直し、オリジナルOPP袋の作成など、競合他社と比較して圧倒的な安さで個別作業を承ります。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. 選べる5種類のプラン (Interactive Pricing Cards) -->
      <section class="page-section bg-gradient-section border-radius-section">
        <h2 class="section-title">5種類の選べるプラン</h2>
        <p class="section-subtitle">お客様の月間取扱量や発送体制（有在庫・無在庫・大口カスタム）に応じて、最適なプランをご選択いただけます。</p>

        <!-- Toggle -->
        <div class="plan-toggle-wrap">
          <button
            class="plan-toggle-btn"
            :class="{ active: planMode === 'stock' }"
            @click="planMode = 'stock'"
          >
            <i class="fa-solid fa-boxes-stacked"></i> 有在庫
          </button>
          <button
            class="plan-toggle-btn"
            :class="{ active: planMode === 'nostock' }"
            @click="planMode = 'nostock'"
          >
            <i class="fa-solid fa-truck-fast"></i> 無在庫（ドロップシッピング）
          </button>
        </div>

        <!-- Cards Grid -->
        <div class="plans-grid">

          <!-- Free Plan -->
          <div class="plan-card glass-card" :class="{ 'plan-card--active': hoveredPlan === 'free' }" @mouseenter="hoveredPlan = 'free'" @mouseleave="hoveredPlan = null">
            <div class="plan-card-header">
              <span class="plan-label">無料会員</span>
              <div class="plan-price">
                <span class="plan-price-tag">無料</span>
                <span class="plan-price-sub">月会費 0円</span>
              </div>
            </div>
            <ul class="plan-features">
              <li>
                <span class="feat-icon"><i class="fa-solid fa-percent"></i></span>
                <span>
                  <strong>代行手数料</strong><br>
                  <template v-if="planMode === 'stock'">商品代金の6%（1万円以下一律1,000円）</template>
                  <template v-else>15元 / 1件</template>
                </span>
              </li>
              <li>
                <span class="feat-icon"><i class="fa-solid fa-yen-sign"></i></span>
                <span><strong>為替レート</strong><br>当日TTS + 0.9円</span>
              </li>
              <li>
                <span class="feat-icon"><i class="fa-solid fa-truck"></i></span>
                <span><strong>中国国内送料</strong><br>実費のみ請求</span>
              </li>
              <li>
                <span class="feat-icon"><i class="fa-solid fa-headset"></i></span>
                <span><strong>サポート体制</strong><br>チームサポート</span>
              </li>
              <li>
                <span class="feat-icon"><i class="fa-solid fa-bolt"></i></span>
                <span><strong>商品手配</strong><br>通常手配</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="plan-cta btn-secondary">無料で始める</NuxtLink>
          </div>

          <!-- Gold Plan -->
          <div class="plan-card plan-card--gold glass-card" :class="{ 'plan-card--active': hoveredPlan === 'gold' }" @mouseenter="hoveredPlan = 'gold'" @mouseleave="hoveredPlan = null">
            <div class="plan-popular-badge"><i class="fa-solid fa-star"></i> 人気No.1</div>
            <div class="plan-card-header">
              <span class="plan-label plan-label--gold">ゴールド会員</span>
              <div class="plan-price">
                <span class="plan-price-tag plan-price-tag--gold">¥19,800<small>/月</small></span>
                <span class="plan-price-sub">税込み</span>
              </div>
            </div>
            <ul class="plan-features">
              <li class="feat-highlight">
                <span class="feat-icon feat-icon--gold"><i class="fa-solid fa-gift"></i></span>
                <span>
                  <strong>代行手数料</strong><br>
                  <template v-if="planMode === 'stock'"><span class="highlight-text">無料！</span></template>
                  <template v-else><span class="highlight-text">13元 / 1件</span></template>
                </span>
              </li>
              <li class="feat-highlight">
                <span class="feat-icon feat-icon--gold"><i class="fa-solid fa-yen-sign"></i></span>
                <span><strong>為替レート</strong><br><span class="highlight-text">当日TTS + 0.5円</span></span>
              </li>
              <li>
                <span class="feat-icon feat-icon--gold"><i class="fa-solid fa-truck"></i></span>
                <span><strong>中国国内送料</strong><br>実費のみ（最大限コストカット支援）</span>
              </li>
              <li class="feat-highlight">
                <span class="feat-icon feat-icon--gold"><i class="fa-solid fa-headset"></i></span>
                <span><strong>サポート体制</strong><br><span class="highlight-text">専任担当スタッフ優先対応</span></span>
              </li>
              <li class="feat-highlight">
                <span class="feat-icon feat-icon--gold"><i class="fa-solid fa-bolt"></i></span>
                <span><strong>商品手配</strong><br><span class="highlight-text">優先手配</span></span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="plan-cta btn-primary">ゴールドに申し込む</NuxtLink>
          </div>

          <!-- Custom Plan -->
          <div class="plan-card plan-card--custom glass-card" :class="{ 'plan-card--active': hoveredPlan === 'custom' }" @mouseenter="hoveredPlan = 'custom'" @mouseleave="hoveredPlan = null">
            <div class="plan-card-header">
              <span class="plan-label plan-label--custom">カスタム会員</span>
              <div class="plan-price">
                <span class="plan-price-tag plan-price-tag--custom">要相談</span>
                <span class="plan-price-sub">大口・法人向け特別プラン</span>
              </div>
            </div>
            <ul class="plan-features">
              <li>
                <span class="feat-icon feat-icon--custom"><i class="fa-solid fa-sliders"></i></span>
                <span><strong>代行手数料・為替レート</strong><br>取引量に応じた個別設定</span>
              </li>
              <li>
                <span class="feat-icon feat-icon--custom"><i class="fa-solid fa-comments"></i></span>
                <span><strong>サポート体制</strong><br>専任スタッフ + 専用管理ページ</span>
              </li>
              <li>
                <span class="feat-icon feat-icon--custom"><i class="fa-solid fa-gem"></i></span>
                <span><strong>OEM/ODM相談</strong><br>無料相談・仕入れ先紹介対応</span>
              </li>
              <li>
                <span class="feat-icon feat-icon--custom"><i class="fa-solid fa-file-invoice"></i></span>
                <span><strong>決済・請求</strong><br>月次まとめ請求など柔軟対応</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="plan-cta btn-custom">カスタムプランの相談</NuxtLink>
          </div>

        </div>

        <!-- Common Features Bar -->
        <div class="plans-common-row">
          <span class="common-badge"><i class="fa-solid fa-check-circle"></i> 全プラン共通：OEM/ODM無料相談</span>
          <span class="common-badge"><i class="fa-solid fa-check-circle"></i> Amazon FBA・アパレル加工対応</span>
          <span class="common-badge"><i class="fa-solid fa-check-circle"></i> 中国国内送料は実費のみ</span>
        </div>

        <div class="plans-footer-link">
          <NuxtLink to="/plan" class="btn-primary">
            <i class="fa-solid fa-table"></i> 料金プランの全詳細を見る
          </NuxtLink>
        </div>
      </section>

      <!-- 5. CTA (Sign-up / Contact) -->
      <section class="page-section cta-section text-center animate-fade-in-up">
        <div class="glass-card cta-card">
          <div class="cta-icon"><i class="fa-solid fa-handshake-angle"></i></div>
          <h2>まずは一度、お試しください！</h2>
          <p>
            日本人スタッフが買い付け交渉から物流手配まで迅速・丁寧に対応いたします。<br>
            新規会員登録、またはサービス内容に関するご質問・個別のご相談はお気軽にお問い合わせください。
          </p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="btn-primary btn-large">
              <i class="fa-regular fa-envelope"></i> お問い合わせはこちら
            </NuxtLink>
            <NuxtLink to="/qa" class="btn-secondary btn-large">
              よくある質問 (Q&A) を見る
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>


useHead({
  title: 'asuka - 中国輸入代行・タオバオアリババ代行・アパレル加工流通',
  meta: [
    { name: 'description', content: '中国からの輸入代行ならasuka（アスカ）へ。タオバオ・アリババでの買い付け代行、アパレル商品加工・タグ付け、Amazon FBA納品までを日本人スタッフが徹底サポートします。' }
  ]
})

const planMode = ref('stock')
const hoveredPlan = ref(null)
</script>

<style scoped>
.home-page {
  padding-bottom: 3rem;
}

/* Service Card customization */
.service-card {
  text-align: center;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: var(--grad-royal);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.15);
}

.service-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.service-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.card-link {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
}

.service-card:hover .card-link {
  color: var(--color-secondary);
}

/* Comparison Section style */
.comparison-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 3rem;
  align-items: center;
}

.premium-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-primary);
  background: rgba(79, 70, 229, 0.1);
  padding: 0.35rem 1rem;
  border-radius: var(--border-pill);
  margin-bottom: 1rem;
}

.comparison-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.comparison-chart-box {
  background: #ffffff;
  border-radius: var(--border-radius-md);
  padding: 1rem;
  border: 1px solid rgba(0,0,0,0.04);
  box-shadow: var(--shadow-md);
}

.comparison-gif {
  width: 100%;
  border-radius: var(--border-radius-sm);
  display: block;
}

.table-caption {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.comparison-table .highlight-th {
  background: var(--grad-royal);
  color: white;
  text-align: center;
}

.comparison-table .highlight-td {
  background-color: rgba(99, 102, 241, 0.04);
  font-weight: 600;
  text-align: center;
}

.comparison-table .text-primary-color {
  color: var(--color-primary);
}

.comparison-table .text-through {
  text-decoration: line-through;
  color: var(--text-muted);
}

.comparison-table .total-row td {
  font-weight: 700;
  font-size: 1.05rem;
  border-top: 2px solid var(--text-main);
}

.comparison-table .highlight-total {
  background-color: rgba(99, 102, 241, 0.08);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--color-primary);
  text-align: center;
  border-top: 2px solid var(--text-main);
}

.savings-alert {
  margin-top: 1rem;
  background: rgba(16, 185, 129, 0.1);
  color: #065f46;
  padding: 0.85rem 1.25rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.savings-alert i {
  color: #10b981;
}

/* Strengths Section */
.strengths-container {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
  align-items: center;
}

.strengths-graphics {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.strength-gif {
  width: 100%;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0,0,0,0.05);
}

.gifs-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.strength-gif-sm {
  width: 100%;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(0,0,0,0.05);
}

.strengths-list {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.strength-item-card {
  background: #ffffff;
  border-radius: var(--border-radius-md);
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0,0,0,0.02);
  transition: transform 0.2s ease;
}

.strength-item-card:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.strength-num {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-primary-light);
  line-height: 1;
}

.strength-item-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.strength-item-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* ============================
   Pricing Plans Section
   ============================ */

/* Toggle */
.plan-toggle-wrap {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  background: rgba(255,255,255,0.7);
  padding: 0.5rem;
  border-radius: var(--border-pill);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0,0,0,0.06);
}

.plan-toggle-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.75rem;
  border: none;
  border-radius: var(--border-pill);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.25s ease;
}

.plan-toggle-btn.active {
  background: var(--grad-royal);
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.25);
}

/* Cards Grid */
.plans-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr 1fr;
  gap: 1.75rem;
  align-items: stretch; /* Ensure cards have equal height */
  margin-bottom: 2rem;
}

/* Individual Card */
.plan-card {
  position: relative;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1.5px solid rgba(0,0,0,0.06);
}

.plan-card--active {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(79, 70, 229, 0.15) !important;
}

/* Gold Card Special */
.plan-card--gold {
  background: linear-gradient(145deg, #fff9ee 0%, #ffffff 60%, #fffbf0 100%);
  border: 2px solid rgba(217, 119, 6, 0.3);
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(217, 119, 6, 0.12) !important;
}

.plan-card--gold.plan-card--active {
  transform: translateY(-14px);
  box-shadow: 0 24px 56px rgba(217, 119, 6, 0.22) !important;
}

/* Custom Card */
.plan-card--custom {
  background: linear-gradient(145deg, #f0f4ff 0%, #ffffff 70%);
  border: 1.5px solid rgba(79, 70, 229, 0.12);
}

/* Popular Badge */
.plan-popular-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #d97706, #f59e0b);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.3rem 1.25rem;
  border-radius: var(--border-pill);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
  letter-spacing: 0.03em;
}

/* Card Header */
.plan-card-header {
  margin-bottom: 1.75rem;
}

.plan-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary);
  padding: 0.25rem 0.85rem;
  border-radius: var(--border-pill);
  margin-bottom: 0.75rem;
  letter-spacing: 0.04em;
}

.plan-label--gold {
  background: rgba(217, 119, 6, 0.12);
  color: #b45309;
}

.plan-label--custom {
  background: rgba(30, 41, 59, 0.08);
  color: #334155;
}

.plan-price {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.plan-price-tag {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text-main);
  line-height: 1.1;
}

.plan-price-tag small {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
}

.plan-price-tag--gold {
  color: #b45309;
}

.plan-price-tag--custom {
  font-size: 1.75rem;
  color: var(--color-primary);
}

.plan-price-sub {
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Feature List */
.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-grow: 1;
  padding: 0;
}

.plan-features li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--text-muted);
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.plan-features li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.plan-features li strong {
  display: block;
  font-weight: 700;
  color: var(--text-main);
  font-size: 0.85rem;
  margin-bottom: 0.15rem;
}

.feat-highlight {
  position: relative;
}

.feat-icon {
  width: 34px;
  height: 34px;
  min-width: 34px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.08);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  margin-top: 0.1rem;
}

.feat-icon--gold {
  background: rgba(217, 119, 6, 0.1);
  color: #d97706;
}

.feat-icon--custom {
  background: rgba(79, 70, 229, 0.1);
  color: var(--color-primary);
}

.highlight-text {
  font-weight: 700;
  color: #b45309;
}

/* CTA Button in card */
.plan-cta {
  display: block;
  text-align: center;
  padding: 0.9rem 1.25rem;
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--border-pill);
  transition: all 0.25s ease;
  margin-top: auto;
}

.btn-custom {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.btn-custom:hover {
  opacity: 0.88;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(30, 41, 59, 0.25);
}

/* Common features bar */
.plans-common-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  margin-top: 0.5rem;
}

.common-badge {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(16, 185, 129, 0.08);
  color: #065f46;
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border-radius: var(--border-pill);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.common-badge i {
  color: #10b981;
}

/* Footer Link */
.plans-footer-link {
  text-align: center;
}

@media (max-width: 900px) {
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .plan-card--gold {
    transform: none;
  }
  .plan-card--gold.plan-card--active {
    transform: translateY(-6px);
  }
  .plan-toggle-wrap {
    flex-direction: column;
    width: 100%;
    max-width: 380px;
  }
}

/* CTA Section custom styling */
.cta-card {
  padding: 4rem 3rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(239, 246, 255, 0.9) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.1);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.cta-card h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.cta-card p {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 750px;
  margin-bottom: 3rem;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.btn-large {
  padding: 1.1rem 2.5rem;
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .comparison-grid, .strengths-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  .btn-large {
    width: 100%;
  }
  .cta-card h2 {
    font-size: 1.75rem;
  }
}
</style>
