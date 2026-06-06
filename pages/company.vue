<template>
  <div class="container page-section page-top-padding">
    <div class="layout-with-sidebar">
      <!-- Sidebar Menu Component -->
      <TheSidebar class="page-sidebar" />

      <!-- Main Contents -->
      <main class="page-main-content animate-fade-in-up">
        <h1 class="page-title">会社概要</h1>
        <p class="page-subtitle">株式会社重錦倖（asuka）の企業情報・グローバル体制についてご紹介します。</p>

        <!-- Company Info Table Card -->
        <div class="glass-card info-card">
          <table class="profile-table">
            <tbody>
              <tr>
                <th>社名</th>
                <td>株式会社重錦倖 <span class="en-sub">(Jukin倖 Co., Ltd.)</span></td>
              </tr>
              <tr>
                <th>本社所在地</th>
                <td>〒596-0803 大阪府岸和田市松風町14-15</td>
              </tr>
              <tr>
                <th>設立年月日</th>
                <td>2019年 4月 24日</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>500万円</td>
              </tr>
              <tr>
                <th>代表者取締役社長</th>
                <td>向 莉苹</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>072-479-6355</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>info@aska-daikou.com</td>
              </tr>
              <tr>
                <th>取引銀行</th>
                <td>
                  <ul>
                    <li>池田泉州銀行</li>
                    <li>楽天銀行</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  <ul>
                    <li>中国輸入サポート事業 (asuka)</li>
                    <li>貿易関連事業</li>
                    <li>飲食事業</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Global Locations Section -->
        <h2 class="sub-section-title">グローバル拠点</h2>
        <div class="locations-grid">
          <!-- Office 1 -->
          <div class="location-card glass-card">
            <span class="loc-icon"><i class="fa-solid fa-hotel"></i></span>
            <h4>大阪本社</h4>
            <p class="loc-tag">Head Office</p>
            <p class="loc-desc">日本国内のお客様窓口およびカスタマーサポートを統括。輸入・検品・発送の全体管理を行います。</p>
          </div>

          <!-- Office 2 -->
          <div class="location-card glass-card">
            <span class="loc-icon"><i class="fa-solid fa-warehouse"></i></span>
            <h4>浙江省義烏事務所 ＆ 倉庫</h4>
            <p class="loc-tag">Yiwu Logistics Hub</p>
            <p class="loc-desc">世界最大の雑貨卸売市場がある義烏（イーウー）に自社物流倉庫を設置。スピーディーな買い付け・検品加工が可能です。</p>
          </div>

          <!-- Office 3 -->
          <div class="location-card glass-card">
            <span class="loc-icon"><i class="fa-solid fa-building"></i></span>
            <h4>北京事務所</h4>
            <p class="loc-tag">Beijing Office</p>
            <p class="loc-desc">現地の工場・メーカーとの直接交渉やOEM製品の品質管理、契約交渉の中核を担います。</p>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: '会社概要 - asuka',
  meta: [
    { name: 'description', content: '株式会社重錦倖の会社概要。大阪本社の情報、中国（浙江省義烏、北京）のグローバル拠点網、代表者、取引銀行、事業内容をご紹介します。' }
  ]
})
</script>

<style scoped>
.page-top-padding {
  padding-top: 100px;
}

/* Sidebar structure */
.layout-with-sidebar {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 3rem;
  align-items: start;
}

.page-title {
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

.info-card {
  padding: 3rem 2.5rem;
  margin-bottom: 3.5rem;
}

/* Corporate info table styling */
.profile-table {
  width: 100%;
  border-collapse: collapse;
}

.profile-table tr {
  border-bottom: 1px solid var(--bg-secondary);
}

.profile-table tr:last-child {
  border-bottom: none;
}

.profile-table th {
  text-align: left;
  width: 28%;
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-main);
  padding: 1.5rem 0.5rem;
  vertical-align: top;
}

.profile-table td {
  padding: 1.5rem 0.5rem;
  font-size: 0.95rem;
  color: var(--text-main);
  line-height: 1.7;
}

.en-sub {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: normal;
  margin-left: 0.5rem;
}

.profile-table ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.profile-table li {
  position: relative;
  padding-left: 1rem;
}

.profile-table li::before {
  content: '・';
  position: absolute;
  left: 0;
  font-weight: bold;
  color: var(--color-primary);
}

/* Locations sub-section */
.sub-section-title {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 0.75rem;
}

.sub-section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.25rem;
  bottom: 0.25rem;
  width: 4px;
  background: var(--grad-royal);
  border-radius: 2px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.location-card {
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
}

.location-card:hover {
  transform: translateY(-2px);
}

.loc-icon {
  font-size: 1.8rem;
  color: var(--color-primary);
}

.location-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

.loc-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background-color: var(--bg-secondary);
  padding: 0.15rem 0.5rem;
  border-radius: var(--border-pill);
}

.loc-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 992px) {
  .layout-with-sidebar {
    grid-template-columns: 1fr;
  }
  .page-sidebar {
    display: none;
  }
  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
