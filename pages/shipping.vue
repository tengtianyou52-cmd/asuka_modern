<template>
  <div class="container page-section page-top-padding">
    <h1 class="section-title">国際送料一覧</h1>
    <p class="section-subtitle">
      無在庫航空便から大口コンテナ船便まで、荷物の種類やボリュームに応じた最適な物流ルートを用意しています。
    </p>

    <!-- Volume Weight Explainer / Calculator Helper -->
    <div class="glass-card calculator-helper animate-fade-in-up">
      <div class="calc-header">
        <i class="fa-solid fa-calculator"></i>
        <h3>容積重量の計算方法について</h3>
      </div>
      <p class="calc-desc">
        国際送料は、梱包後の<strong>「実重量」</strong>と、梱包サイズから算出する<strong>「容積重量」</strong>のいずれか大きい方を基準に決定されます。
      </p>
      <div class="calc-formula">
        <div class="formula-box">
          <span class="formula-title">容積重量の算出式</span>
          <span class="formula-text">縦 (cm) × 横 (cm) × 高さ (cm) ÷ 5000 または 6000 ＝ 容積重量 (kg)</span>
        </div>
      </div>
    </div>

    <!-- Route Tabs Navigation -->
    <div class="tabs-container">
      <div class="tabs-list">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <i :class="tab.icon"></i> {{ tab.label }}
        </button>
      </div>

      <div class="tab-panels-content">
        <!-- TAB 1: 無在庫航空便 -->
        <div v-if="activeTab === 'no-stock-air'" class="tab-panel glass-card animate-fade-in-up">
          <h3>無在庫航空便</h3>
          <p class="panel-desc">顧客へのダイレクト配送（個別直送）に特化した無在庫販売支援用の航空便ルートです。</p>
          
          <div class="table-responsive">
            <table class="premium-table">
              <thead>
                <tr>
                  <th>重量区分</th>
                  <th>日本向け (直送)</th>
                  <th>韓国向け (直送)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-td">0g ～ 500g</td>
                  <td class="text-primary-color font-bold">50元</td>
                  <td>100元</td>
                </tr>
                <tr>
                  <td class="bold-td">以降 500g 毎に加算</td>
                  <td class="font-bold">+15元</td>
                  <td>+20元</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="panel-notes">
            <h4><i class="fa-solid fa-circle-info"></i> 注意事項</h4>
            <ul>
              <li>発送手続き完了後の配送先住所の変更は、転送手数料として別途 <strong>1,200円</strong> が発生します。</li>
              <li>エンドユーザー様による受け取り拒否、または商品の破棄を希望される場合、別途 <strong>1,200円</strong> の手数料を申し受けます。</li>
              <li>韓国便は航空価格の変動が大きいため、ご利用前に担当スタッフまで最新レートをお問い合わせください。</li>
            </ul>
          </div>
        </div>

        <!-- TAB 2: 有在庫航空便 -->
        <div v-if="activeTab === 'air'" class="tab-panel glass-card animate-fade-in-up">
          <h3>有在庫向け 航空便ルート</h3>
          <p class="panel-desc">21kg以上のまとまった荷物を最速で納品する有在庫・大口向けの主力航空ルートです。</p>

          <div class="table-responsive">
            <table class="premium-table">
              <thead>
                <tr>
                  <th>重量帯</th>
                  <th>OCS (推奨)</th>
                  <th>流通王</th>
                  <th>電池・液体特殊ルート</th>
                  <th>EMS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-td">21kg 未満</td>
                  <td>最初の500g: 95元<br>以降500g毎: 25元</td>
                  <td>最初の500g: 90元<br>以降500g毎: 20元</td>
                  <td>最初の500g: 150元<br>以降500g毎: 30元</td>
                  <td rowspan="5" class="vertical-middle">最初の500g: 150元<br>以降500g毎: 30元</td>
                </tr>
                <tr>
                  <td class="bold-td">21kg ～ 50kg</td>
                  <td class="font-bold text-primary-color">27元 / kg</td>
                  <td>30元 / kg</td>
                  <td rowspan="4" class="vertical-middle text-muted">22kg以上は都度お見積り（お問い合わせください）</td>
                </tr>
                <tr>
                  <td class="bold-td">51kg ～ 100kg</td>
                  <td class="font-bold text-primary-color">27元 / kg</td>
                  <td>29元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">101kg ～ 300kg</td>
                  <td class="font-bold text-primary-color">26元 / kg</td>
                  <td>28元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">300kg 以上</td>
                  <td class="font-bold text-primary-color">26元 / kg</td>
                  <td>28元 / kg</td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">FBA直送</td>
                  <td class="text-success font-bold"><i class="fa-solid fa-circle-check"></i> 対応可</td>
                  <td class="text-success font-bold"><i class="fa-solid fa-circle-check"></i> 対応可</td>
                  <td class="text-danger font-bold"><i class="fa-solid fa-circle-xmark"></i> 不可</td>
                  <td class="text-danger font-bold"><i class="fa-solid fa-circle-xmark"></i> 不可</td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">着荷目安日数</td>
                  <td>3 ～ 5日</td>
                  <td>5 ～ 7日</td>
                  <td>5 ～ 10日</td>
                  <td>7 ～ 10日</td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">関税お支払い</td>
                  <td>口座引き落とし / 都度振込</td>
                  <td>口座引き落とし / 都度振込</td>
                  <td>到着時支払い</td>
                  <td>到着時支払い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="panel-notes">
            <h4><i class="fa-solid fa-circle-info"></i> 注意事項</h4>
            <ul>
              <li>FBA倉庫へ直接納品する場合、納品設定された商品のASIN番号および出品者マイページのキャプチャ画面が事前に必要となります。</li>
              <li>液体・粉末・磁気を含む危険物検査が別途必要となる場合、検査費用（1品目約400元）が実費発生する場合がございます。</li>
            </ul>
          </div>
        </div>

        <!-- TAB 3: 快速船便 -->
        <div v-if="activeTab === 'sea'" class="tab-panel glass-card animate-fade-in-up">
          <h3>快速船便ルート</h3>
          <p class="panel-desc">配送スピードと低コストを兼ね備えた、大口貨物向けの快速船便プランです。</p>

          <div class="table-responsive">
            <table class="premium-table">
              <thead>
                <tr>
                  <th>重量帯</th>
                  <th>海源船便 (個人宅宛て)</th>
                  <th>海源船便 (FBA直送)</th>
                  <th>EMS船便</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="bold-td">21kg 未満</td>
                  <td>-</td>
                  <td>-</td>
                  <td rowspan="8" class="vertical-middle">最初の2kgまで: 140元<br>以降1kg毎に: +20元<br><span class="note">(最大1箱30kgまで)</span></td>
                </tr>
                <tr>
                  <td class="bold-td">21kg ～ 50kg</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td class="bold-td">51kg ～ 74kg</td>
                  <td>-</td>
                  <td class="font-bold text-primary-color">17元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">75kg ～ 100kg</td>
                  <td>-</td>
                  <td class="font-bold text-primary-color">17元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">101kg ～ 200kg</td>
                  <td>-</td>
                  <td class="font-bold text-primary-color">16元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">201kg ～ 300kg</td>
                  <td class="font-bold">13元 / kg</td>
                  <td class="font-bold text-primary-color">16元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">301kg ～ 500kg</td>
                  <td class="font-bold">13元 / kg</td>
                  <td class="font-bold text-primary-color">15元 / kg</td>
                </tr>
                <tr>
                  <td class="bold-td">501kg 以上</td>
                  <td class="font-bold">12元 / kg</td>
                  <td class="font-bold text-primary-color">15元 / kg</td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">FBA直送</td>
                  <td class="text-success font-bold"><i class="fa-solid fa-circle-check"></i> 対応可</td>
                  <td class="text-success font-bold"><i class="fa-solid fa-circle-check"></i> 対応可</td>
                  <td class="text-danger font-bold"><i class="fa-solid fa-circle-xmark"></i> 不可</td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">着荷目安日数</td>
                  <td colspan="2" class="text-center">7 ～ 14日</td>
                  <td>20 ～ 30日 <span class="note">(繁忙期は遅延の可能性あり)</span></td>
                </tr>
                <tr class="info-row">
                  <td class="bold-td">関税お支払い</td>
                  <td colspan="3" class="text-center">都度、船会社より直接ご請求</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="panel-notes">
            <h4><i class="fa-solid fa-circle-info"></i> 注意事項</h4>
            <ul>
              <li>FBA納品の場合、輸入者名義と出品アカウントの登録者名が一致している必要があります。</li>
              <li>海源船便をご利用いただける商品の種類は、1回の発送につき最大3品目までと制限がございます。</li>
              <li>梱包ダンボールの3辺合計が150cmを超える場合、日本国内での配送時に大型追加送料が発生することがございます。</li>
              <li>沖縄、北海道、および離島への発送は、転送中継料金として1箱あたり別途 <strong>3,000円</strong> を申し受けます。</li>
            </ul>
          </div>
        </div>

        <!-- TAB 4: 混載便・コンテナ -->
        <div v-if="activeTab === 'container'" class="tab-panel glass-card animate-fade-in-up">
          <h3>混載船便（LCL）＆ コンテナ便（FCL）</h3>
          <p class="panel-desc">パレット単位での大量仕入れや、コンテナチャーターが必要な超大口の輸入案件に対応します。</p>

          <div class="container-options-grid">
            <div class="container-card">
              <span class="card-icon"><i class="fa-solid fa-boxes-stacked"></i></span>
              <h4>混載船便 (LCL)</h4>
              <p class="card-tag">ドア to ポート / ドア to ドア</p>
              <p class="desc">複数のお客様の貨物を1つのコンテナに混載して輸送します。物量に応じた立方メートル（CBM）単位での請求となります。</p>
            </div>
            
            <div class="container-card">
              <span class="card-icon"><i class="fa-solid fa-truck-flatbed-container"></i></span>
              <h4>20F / 40F コンテナチャーター</h4>
              <p class="card-tag">コンテナ貸切輸送</p>
              <p class="desc">自社専用にコンテナを借り切って輸送します。品目が単一で物量が多い場合、最も立方単価を下げられる輸送方法です。</p>
            </div>
          </div>

          <div class="quote-inquiry-box">
            <p>※混載便およびコンテナ便は、お取り扱い品目、梱包サイズ、通関時の法令検査の有無、および提携通関業者によって料金が日々変動いたします。詳細なお見積もりは、お問い合わせフォームよりご相談ください。</p>
            <NuxtLink to="/contact" class="btn-primary">お見積もり・個別相談</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Global Shipping Rules / Cautions -->
    <div class="caution-section glass-card">
      <div class="caution-header">
        <i class="fa-solid fa-circle-exclamation"></i>
        <h3>国際発送についての基本ルール</h3>
      </div>
      <ul class="caution-list">
        <li>特に配送ルートのご指定がない場合は、信頼性とスピードのバランスが良い <strong>OCS航空便</strong> にて手配いたします。</li>
        <li>燃料サーチャージ等、送料表に記載のない追加の手数料請求は一切ございませんのでご安心ください。</li>
        <li>送料は原則、中国からの発送前にお支払いいただき、着金確認後の出荷手配となります。（高速プラン除く）</li>
        <li>通関時に発生する関税および国内輸入消費税は、配送業者より直接着払い等でご請求されますので、お客様ご自身にてお支払いをお願いいたします。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>


const activeTab = ref('no-stock-air')

const tabs = [
  { id: 'no-stock-air', label: '無在庫航空便', icon: 'fa-solid fa-plane' },
  { id: 'air', label: '有在庫航空便', icon: 'fa-solid fa-plane-departure' },
  { id: 'sea', label: '快速船便', icon: 'fa-solid fa-ship' },
  { id: 'container', label: '混載・コンテナ便', icon: 'fa-solid fa-truck-ramp-box' }
]

useHead({
  title: '国際送料 - asuka',
  meta: [
    { name: 'description', content: 'asukaの国際送料表。無在庫向け個別配送、航空便（OCS、流通王、EMS、液体・バッテリー特別便）、快速船便、混載コンテナ船便など各種配送手段の単価・リードタイム一覧。' }
  ]
})
</script>

<style scoped>
.page-top-padding {
  padding-top: 100px;
}

/* Calculator helper */
.calculator-helper {
  border-left: 4px solid var(--color-primary);
  margin-bottom: 3.5rem;
}

.calc-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.calc-header i {
  font-size: 1.4rem;
}

.calc-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
}

.calc-desc {
  font-size: 0.95rem;
  color: var(--text-main);
  margin-bottom: 1.25rem;
}

.calc-formula {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-sm);
  padding: 1.25rem 1.5rem;
}

.formula-box {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.formula-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
}

.formula-text {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-primary);
}

/* Tabs list */
.tabs-container {
  margin-bottom: 4rem;
}

.tabs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-bottom: 2px solid var(--bg-secondary);
  padding-bottom: 0.5rem;
  margin-bottom: 2.5rem;
}

.tab-btn {
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  color: var(--color-primary);
  background-color: var(--bg-secondary);
}

.tab-btn.active {
  color: #ffffff;
  background: var(--grad-royal);
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
}

/* Tab Panels */
.tab-panel h3 {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.panel-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.vertical-middle {
  vertical-align: middle;
}

.text-success {
  color: #10b981;
}

.text-danger {
  color: #ef4444;
}

.text-center {
  text-align: center;
}

.info-row td {
  background-color: #fafbfc;
}

/* Notes inner panel */
.panel-notes {
  margin-top: 2rem;
  border-top: 1px solid var(--bg-secondary);
  padding-top: 1.5rem;
}

.panel-notes h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1rem;
}

.panel-notes ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.25rem;
}

.panel-notes li {
  font-size: 0.9rem;
  color: var(--text-muted);
  position: relative;
  padding-left: 1.25rem;
}

.panel-notes li::before {
  content: '・';
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Container cards styles */
.container-options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.container-card {
  background-color: var(--bg-secondary);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.container-card .card-icon {
  font-size: 2.2rem;
  color: var(--color-primary);
}

.container-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
}

.container-card .card-tag {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  background-color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-pill);
}

.container-card .desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.quote-inquiry-box {
  background: var(--grad-soft);
  padding: 2rem;
  border-radius: var(--border-radius-md);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.quote-inquiry-box p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-main);
  max-width: 800px;
}

/* Caution Section */
.caution-section {
  border-left: 4px solid #ef4444; /* Alert color */
  padding: 2rem 2.5rem;
}

.caution-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ef4444;
  margin-bottom: 1.5rem;
}

.caution-header i {
  font-size: 1.4rem;
}

.caution-header h3 {
  font-size: 1.2rem;
  font-weight: 700;
}

.caution-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.caution-list li {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  position: relative;
  padding-left: 1.25rem;
}

.caution-list li::before {
  content: '・';
  position: absolute;
  left: 0;
  font-weight: bold;
  color: #ef4444;
}

@media (max-width: 768px) {
  .container-options-grid {
    grid-template-columns: 1fr;
  }
}
</style>
