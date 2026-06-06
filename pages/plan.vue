<template>
  <div class="container page-section page-top-padding">
    <h1 class="section-title">料金プラン</h1>
    <p class="section-subtitle">
      お客様の仕入れ体制（有在庫・無在庫）に合わせて5つのプランをご用意しています。<br>
      ご自身のビジネス規模やニーズに合わせて、最適なプランをご選択ください。
    </p>

    <!-- 1. Comparison Table -->
    <div class="glass-card table-section">
      <div class="table-responsive">
        <table class="premium-table plan-table">
          <thead>
            <tr>
              <th rowspan="2" class="category-th">プラン内容</th>
              <th colspan="2" class="stock-th text-center">有在庫プラン</th>
              <th colspan="2" class="no-stock-th text-center">無在庫プラン</th>
              <th rowspan="2" class="custom-th text-center">カスタム会員<br><span class="th-sub">(条件限定)</span></th>
            </tr>
            <tr>
              <th class="sub-th text-center">無料会員</th>
              <th class="sub-th highlight-gold-th text-center">ゴールド会員</th>
              <th class="sub-th text-center">無料会員</th>
              <th class="sub-th highlight-gold-th text-center">ゴールド会員</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="bold-td">月会費</td>
              <td>無料</td>
              <td class="gold-highlight-td">19,800円 / 月</td>
              <td>無料</td>
              <td class="gold-highlight-td">19,800円 / 月</td>
              <td rowspan="8" class="custom-span-td">
                <div class="custom-info-box">
                  <i class="fa-solid fa-comments"></i>
                  <p>お客様の取扱規模や出荷状況をヒアリングさせていただき、最適な作業単価やサービス内容を個別にご相談・決定させていただきます。</p>
                  <NuxtLink to="/contact" class="btn-primary btn-sm">個別相談を申し込む</NuxtLink>
                </div>
              </td>
            </tr>
            <tr>
              <td class="bold-td">代行手数料</td>
              <td>商品代金の6%<br><span class="note">(1万円以下は一律1,000円)</span></td>
              <td class="gold-highlight-td text-primary-color font-bold">無料</td>
              <td>15元 / 1件</td>
              <td class="gold-highlight-td text-primary-color font-bold">13元 / 1件</td>
            </tr>
            <tr>
              <td class="bold-td">為替レート</td>
              <td>当日TTS + 0.9円</td>
              <td class="gold-highlight-td text-primary-color font-bold">当日TTS + 0.5円</td>
              <td>当日TTS + 0.9円</td>
              <td class="gold-highlight-td text-primary-color font-bold">当日TTS + 0.5円</td>
            </tr>
            <tr>
              <td class="bold-td">中国国内送料</td>
              <td>実費のみ請求</td>
              <td class="gold-highlight-td">実費のみ<br><span class="note">(最大限のコストカットを支援)</span></td>
              <td>実費のみ請求</td>
              <td class="gold-highlight-td">実費のみ請求</td>
            </tr>
            <tr>
              <td class="bold-td">商品手配スピード</td>
              <td>通常手配</td>
              <td class="gold-highlight-td font-bold">優先手配</td>
              <td>通常手配</td>
              <td class="gold-highlight-td font-bold">優先手配</td>
            </tr>
            <tr>
              <td class="bold-td">ご対応体制</td>
              <td>チームサポート</td>
              <td class="gold-highlight-td font-bold">専任担当スタッフによる<br>スピード対応</td>
              <td>チームサポート</td>
              <td class="gold-highlight-td font-bold">専任担当スタッフによる<br>スピード対応</td>
            </tr>
            <tr>
              <td class="bold-td">OEM・ODM相談</td>
              <td colspan="4" class="text-center">無料相談</td>
            </tr>
            <tr>
              <td class="bold-td">FBA納品・商品加工</td>
              <td colspan="4" class="text-center font-bold">
                <NuxtLink to="/amazon-fba" class="inline-link">Amazon FBA専用ページ</NuxtLink> ｜ 
                <NuxtLink to="/apparel" class="inline-link">アパレル加工専用ページ</NuxtLink> よりご確認ください。
              </td>
            </tr>
            <tr class="action-row">
              <td></td>
              <td colspan="2">
                <NuxtLink to="/contact" class="btn-primary w-full text-center">有在庫プランを登録</NuxtLink>
              </td>
              <td colspan="2">
                <NuxtLink to="/contact" class="btn-secondary w-full text-center">無在庫プランを登録</NuxtLink>
              </td>
              <td>
                <NuxtLink to="/contact" class="btn-outline w-full text-center">カスタムプランの相談</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 2. Payment Methods -->
    <div class="payment-section">
      <h2 class="section-title">お支払い方法</h2>
      <p class="section-subtitle">会費やデポジット（前金）、送料のお支払いには以下の決済方法をご利用いただけます。</p>
      
      <div class="grid-2">
        <!-- PayPal / Card -->
        <div class="glass-card payment-card">
          <div class="payment-header">
            <span class="payment-icon"><i class="fa-brands fa-paypal"></i></span>
            <h3>オンライン決済</h3>
          </div>
          <p class="payment-desc">クレジットカードやPayPalによる即時決済が可能です。月会費の定期購読にも対応しています。</p>
          <div class="payment-badges">
            <span class="badge">PayPal</span>
            <span class="badge">VISA</span>
            <span class="badge">Mastercard</span>
            <span class="badge">JCB</span>
            <span class="badge">American Express</span>
          </div>
        </div>

        <!-- Bank Transfer -->
        <div class="glass-card payment-card">
          <div class="payment-header">
            <span class="payment-icon"><i class="fa-solid fa-building-columns"></i></span>
            <h3>銀行振込</h3>
          </div>
          <p class="payment-desc">日本国内の弊社取引銀行口座へのお振込みによる前金チャージ（デポジット）に対応しています。</p>
          <div class="payment-banks">
            <div class="bank-item">
              <span class="bank-name">池田泉州銀行</span>
            </div>
            <div class="bank-item">
              <span class="bank-name">楽天銀行</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Cautions Alert -->
    <div class="caution-section glass-card">
      <div class="caution-header">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <h3>プラン及び決済に関する注意事項</h3>
      </div>
      <ul class="caution-list">
        <li>
          <span class="bullet"><i class="fa-solid fa-circle-chevron-right"></i></span>
          <p>通関時に発生する関税および国内の輸入消費税は、配送業者からの請求、または税関へ直接お客様自身でお支払いください。</p>
        </li>
        <li>
          <span class="bullet"><i class="fa-solid fa-circle-chevron-right"></i></span>
          <p>各商品の関税率などは弊社では判断いたしかねます。恐れ入りますが事前にお客様ご自身で税関へお問い合わせください。</p>
        </li>
        <li>
          <span class="bullet"><i class="fa-solid fa-circle-chevron-right"></i></span>
          <p>銀行振込にかかる手数料はお客様にてご負担をお願い申し上げます。</p>
        </li>
        <li>
          <span class="bullet"><i class="fa-solid fa-circle-chevron-right"></i></span>
          <p>クレジットカードおよびPayPalによるお支払いの場合は、決済手数料として一律 <strong>3.6% + 40円</strong> が加算されますのでご了承ください。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '料金プラン - asuka',
  meta: [
    { name: 'description', content: 'asukaの料金プラン一覧。有在庫会員、無在庫会員、それぞれ無料プランとゴールドプランを用意。大口の方向けの個別カスタムプランも対応可能です。' }
  ]
})
</script>

<style scoped>
.page-top-padding {
  padding-top: 100px;
}

.table-section {
  margin-bottom: 5rem;
}

.plan-table th {
  font-size: 0.95rem;
  vertical-align: middle;
}

.plan-table .category-th {
  width: 15%;
}

.plan-table .stock-th {
  background-color: var(--color-primary);
}

.plan-table .no-stock-th {
  background-color: var(--color-secondary);
}

.plan-table .custom-th {
  background-color: #0f172a;
}

.plan-table .sub-th {
  font-size: 0.85rem;
  padding: 0.75rem;
}

.plan-table .highlight-gold-th {
  background-color: #d97706; /* Gold Amber */
}

.plan-table td {
  font-size: 0.9rem;
  line-height: 1.6;
}

.gold-highlight-td {
  background-color: rgba(217, 119, 6, 0.03) !important;
}

.custom-span-td {
  vertical-align: middle;
  background-color: #faf9f6 !important;
}

.custom-info-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1.5rem 0.5rem;
}

.custom-info-box i {
  font-size: 2.2rem;
  color: var(--text-muted);
}

.custom-info-box p {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.7;
}

.text-primary-color {
  color: var(--color-primary);
}

.font-bold {
  font-weight: 700;
}

.note {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: normal;
  display: block;
}

.inline-link {
  color: var(--color-primary);
  text-decoration: underline;
}

.action-row td {
  padding: 1.5rem 0.5rem;
  background: transparent !important;
}

.w-full {
  width: 100%;
}

/* Custom outline button for table action */
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: var(--border-pill);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}

/* Payment Methods */
.payment-section {
  margin-bottom: 5rem;
}

.payment-card {
  padding: 2.5rem;
}

.payment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.payment-icon {
  font-size: 2rem;
  color: var(--color-primary);
}

.payment-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
}

.payment-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.payment-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.badge {
  background-color: var(--bg-secondary);
  color: var(--text-main);
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
}

.payment-banks {
  display: flex;
  gap: 1rem;
}

.bank-item {
  flex: 1;
  background-color: var(--bg-secondary);
  padding: 0.75rem;
  border-radius: var(--border-radius-sm);
  text-align: center;
  font-weight: 700;
  font-size: 0.9rem;
}

/* Caution Section */
.caution-section {
  border-left: 4px solid var(--color-accent);
  padding: 2rem 2.5rem;
}

.caution-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #d97706;
  margin-bottom: 1.5rem;
}

.caution-header i {
  font-size: 1.5rem;
}

.caution-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
}

.caution-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.caution-list li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.bullet {
  color: #cbd5e1;
  font-size: 1rem;
  margin-top: 0.15rem;
}

.caution-list p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-main);
}

@media (max-width: 768px) {
  .plan-table .category-th {
    width: 25%;
  }
}
</style>
