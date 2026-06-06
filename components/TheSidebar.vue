<template>
  <aside class="sidebar-card">
    <span class="sidebar-title">MENU</span>
    <ul class="sidebar-links">
      <li>
        <NuxtLink to="/" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-house"></i> HOME
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/plan" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-credit-card"></i> 料金プラン
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/flow" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-road"></i> 代行の流れ
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/shipping" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-ship"></i> 国際送料
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/amazon-fba" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-box-open"></i> Amazon FBA
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/apparel" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-shirt"></i> アパレル加工・無在庫
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/oem-odm" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-industry"></i> OEM・ODM
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/company" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-circle-info"></i> 企業情報
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/terms" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-file-contract"></i> ご利用規約
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/privacy" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-shield-halved"></i> プライバシーポリシー
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/qa" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-circle-question"></i> Q＆A
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="sidebar-link" active-class="active">
          <i class="fa-solid fa-envelope"></i> お問い合わせ
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar-card {
  background: #ffffff;
  border-radius: var(--border-radius-md);
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 100px;
}

.sidebar-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--bg-secondary);
  padding-bottom: 0.5rem;
}

.sidebar-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-sm);
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.sidebar-link i {
  font-size: 1rem;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.sidebar-link:hover {
  background-color: var(--bg-secondary);
  color: var(--color-primary);
}

.sidebar-link:hover i {
  color: var(--color-primary);
}

.sidebar-link.active {
  background-color: rgba(79, 70, 229, 0.08);
  color: var(--color-primary);
  font-weight: 700;
}

.sidebar-link.active i {
  color: var(--color-primary);
}
</style>