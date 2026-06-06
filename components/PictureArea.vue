<template>
  <section class="hero-section">
    <div class="hero-bg-overlay"></div>
    <div class="hero-container container">
      <!-- Left content block -->
      <div class="hero-content animate-fade-in-up">
        <span class="hero-tag">中国輸入・アパレル流通の自動化をサポート</span>
        <h1 class="hero-title">
          中国輸入ビジネスを、<br>
          <span class="highlight">もっとスマートに。</span>
        </h1>
        <p class="hero-desc">
          asuka（アスカ）は、タオバオやアリババでの商品買い付け代行、検品・オリジナル梱包、アパレル無在庫販売の発送代行からAmazon FBA納品まで、あらゆる輸入ビジネスをトータルサポートする信頼のパートナーです。
        </p>
        <div class="hero-actions">
          <NuxtLink to="/flow" class="btn-primary">
            代行の流れ <i class="fa-solid fa-arrow-right"></i>
          </NuxtLink>
          <NuxtLink to="/plan" class="btn-secondary">
            料金プランを見る
          </NuxtLink>
        </div>
      </div>

      <!-- Right graphics/floating glass block -->
      <div class="hero-graphics animate-fade-in-up">
        <NuxtLink to="/plan" class="glass-badge badge-1">
          <div class="badge-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <div class="badge-txt">
            <span class="badge-title">デポジット高速プラン</span>
            <span class="badge-sub">買い付け・発送を最速化</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/apparel" class="glass-badge badge-2">
          <div class="badge-icon">
            <i class="fa-solid fa-tags"></i>
          </div>
          <div class="badge-txt">
            <span class="badge-title">アパレル加工対応</span>
            <span class="badge-sub">紙タグ交換・検針・OPP</span>
          </div>
        </NuxtLink>

        <NuxtLink to="/shipping" class="glass-badge badge-3">
          <div class="badge-icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
          <div class="badge-txt">
            <span class="badge-title">業界最安水準</span>
            <span class="badge-sub">為替TTS + 0.5円・手数料無料〜</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 5rem;
  background-image: url('/img/hero_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

  .hero-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%);
    z-index: 1;
  }

.hero-container {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 4rem;
}

  .hero-content {
    color: #ffffff;
  }

.hero-tag {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #818cf8;
  background: rgba(99, 102, 241, 0.15);
  padding: 0.5rem 1.25rem;
  border-radius: var(--border-pill);
  border: 1px solid rgba(129, 140, 248, 0.3);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.hero-title .highlight {
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-desc {
  font-size: 1.15rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin-bottom: 2.5rem;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  gap: 1.25rem;
}

/* Secondary button adaptation for dark overlay */
.hero-actions .btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.hero-actions .btn-secondary:hover {
  background: #ffffff;
  color: var(--color-primary);
}

/* Right graphics / badges side */
.hero-graphics {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.glass-badge {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--border-radius-md);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.glass-badge:hover {
  transform: translateX(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.25);
}

.badge-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--grad-royal);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.badge-txt {
  display: flex;
  flex-direction: column;
}

.badge-title {
  font-weight: 700;
  font-size: 1rem;
  color: #ffffff;
}

.badge-sub {
  font-size: 0.8rem;
  color: #94a3b8;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero-title {
    font-size: 2.75rem;
  }
  
  .hero-graphics {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .glass-badge {
    flex: 1 1 250px;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2.25rem;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .hero-actions .btn-primary,
  .hero-actions .btn-secondary {
    width: 100%;
  }
}
</style>