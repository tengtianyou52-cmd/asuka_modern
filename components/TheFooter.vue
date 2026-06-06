<template>
  <footer class="footer">
    <div class="footer-container container">
      <!-- Brand Section -->
      <div class="footer-brand">
        <div class="brand">
          <span class="brand-logo"><i class="fa-solid fa-plane-departure"></i></span>
          <span class="brand-name">asuka</span>
        </div>
        <p class="brand-desc">
          高品質な中国輸入代行・アパレル加工流通を一元管理し、ビジネスの自動化とコスト削減を追求するワンストップサービスです。
        </p>
        <p class="company-detail">
          運営元: 株式会社重錦倖
        </p>
      </div>

      <!-- Links Sections -->
      <div class="footer-links-grid">
        <div class="links-col">
          <span class="col-title">SERVICE</span>
          <ul>
            <li><NuxtLink to="/flow">代行の流れ</NuxtLink></li>
            <li><NuxtLink to="/amazon-fba">Amazon FBA納品</NuxtLink></li>
            <li><NuxtLink to="/apparel">アパレル加工・無在庫</NuxtLink></li>
            <li><NuxtLink to="/oem-odm">OEM・ODM製造</NuxtLink></li>
          </ul>
        </div>

        <div class="links-col">
          <span class="col-title">CHARGE & COMPANY</span>
          <ul>
            <li><NuxtLink to="/plan">料金プラン</NuxtLink></li>
            <li><NuxtLink to="/shipping">国際送料</NuxtLink></li>
            <li><NuxtLink to="/company">企業情報</NuxtLink></li>
            <li><NuxtLink to="/privacy">プライバシーポリシー</NuxtLink></li>
          </ul>
        </div>

        <div class="links-col">
          <span class="col-title">OTHER</span>
          <ul>
            <li><NuxtLink to="/terms">ご利用規約</NuxtLink></li>
            <li><NuxtLink to="/qa">Q＆A</NuxtLink></li>
            <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom">
      <div class="container footer-bottom-content">
        <p class="copyright">&copy; 2026 株式会社重錦倖 (asuka) All Rights Reserved.</p>
        <div class="back-to-top" @click="scrollToTop">
          ページトップへ戻る <i class="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background-color: #0f172a;
  color: #94a3b8;
  padding: 5rem 0 0;
  border-top: 1px solid #1e293b;
}

.footer-container {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  padding-bottom: 4rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  font-size: 1.5rem;
  color: #6366f1;
}

.brand-name {
  font-size: 1.6rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.03em;
}

.brand-desc {
  line-height: 1.7;
  font-size: 0.95rem;
}

.company-detail {
  font-size: 0.85rem;
  font-weight: 600;
  color: #cbd5e1;
}

.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.links-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.col-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 0.5rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 2px;
  background-color: #6366f1;
}

.links-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.links-col a {
  color: #94a3b8;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.links-col a:hover {
  color: #ffffff;
  padding-left: 0.25rem;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid #1e293b;
  padding: 1.5rem 0;
  font-size: 0.85rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-to-top {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.back-to-top:hover {
  color: #ffffff;
}

@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .footer-links-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>