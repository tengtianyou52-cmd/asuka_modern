<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <div class="header-container container">
      <!-- Site Logo / Brand -->
      <NuxtLink to="/" class="brand">
        <span class="brand-logo"><i class="fa-solid fa-plane-departure"></i></span>
        <span class="brand-name">asuka</span>
      </NuxtLink>

      <!-- Desktop Navigation Menu -->
      <nav class="desktop-nav">
        <ul class="nav-links">
          <li>
            <NuxtLink to="/" class="nav-link" active-class="active">HOME</NuxtLink>
          </li>
          
          <li class="nav-dropdown" @mouseenter="openDropdown('service')" @mouseleave="closeDropdown">
            <span class="nav-link" :class="{ active: isDropdownActive(['/flow', '/amazon-fba', '/apparel', '/oem-odm']) }">
              SERVICE <i class="fa-solid fa-chevron-down"></i>
            </span>
            <ul class="dropdown-menu" :class="{ show: activeDropdown === 'service' }">
              <li><NuxtLink to="/flow">代行の流れ</NuxtLink></li>
              <li><NuxtLink to="/amazon-fba">Amazon FBA</NuxtLink></li>
              <li><NuxtLink to="/apparel">アパレル加工・無在庫</NuxtLink></li>
              <li><NuxtLink to="/oem-odm">OEM・ODM</NuxtLink></li>
            </ul>
          </li>

          <li class="nav-dropdown" @mouseenter="openDropdown('charge')" @mouseleave="closeDropdown">
            <span class="nav-link" :class="{ active: isDropdownActive(['/plan', '/shipping']) }">
              CHARGE <i class="fa-solid fa-chevron-down"></i>
            </span>
            <ul class="dropdown-menu" :class="{ show: activeDropdown === 'charge' }">
              <li><NuxtLink to="/plan">料金プラン</NuxtLink></li>
              <li><NuxtLink to="/shipping">国際送料</NuxtLink></li>
            </ul>
          </li>

          <li class="nav-dropdown" @mouseenter="openDropdown('company')" @mouseleave="closeDropdown">
            <span class="nav-link" :class="{ active: isDropdownActive(['/company', '/privacy']) }">
              COMPANY <i class="fa-solid fa-chevron-down"></i>
            </span>
            <ul class="dropdown-menu" :class="{ show: activeDropdown === 'company' }">
              <li><NuxtLink to="/company">企業情報</NuxtLink></li>
              <li><NuxtLink to="/privacy">プライバシーポリシー</NuxtLink></li>
            </ul>
          </li>

          <li class="nav-dropdown" @mouseenter="openDropdown('other')" @mouseleave="closeDropdown">
            <span class="nav-link" :class="{ active: isDropdownActive(['/terms', '/qa']) }">
              OTHER <i class="fa-solid fa-chevron-down"></i>
            </span>
            <ul class="dropdown-menu" :class="{ show: activeDropdown === 'other' }">
              <li><NuxtLink to="/terms">ご利用規約</NuxtLink></li>
              <li><NuxtLink to="/qa">Q＆A</NuxtLink></li>
            </ul>
          </li>
        </ul>

        <div class="header-cta">
          <NuxtLink to="/contact" class="btn-cta">
            <i class="fa-regular fa-envelope"></i> お問い合わせ
          </NuxtLink>
        </div>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle Menu">
        <span class="bar" :class="{ 'bar-open': mobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-open': mobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar-open': mobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Drawer Overlay Menu -->
    <transition name="fade">
      <div v-if="mobileMenuOpen" class="mobile-nav-overlay" @click.self="closeMobileMenu">
        <nav class="mobile-nav animate-fade-in-up">
          <ul class="mobile-links">
            <li><NuxtLink to="/" @click="closeMobileMenu">HOME</NuxtLink></li>
            
            <li class="mobile-group">
              <span class="group-title">SERVICE</span>
              <ul>
                <li><NuxtLink to="/flow" @click="closeMobileMenu">代行の流れ</NuxtLink></li>
                <li><NuxtLink to="/amazon-fba" @click="closeMobileMenu">Amazon FBA</NuxtLink></li>
                <li><NuxtLink to="/apparel" @click="closeMobileMenu">アパレル加工・無在庫</NuxtLink></li>
                <li><NuxtLink to="/oem-odm" @click="closeMobileMenu">OEM・ODM</NuxtLink></li>
              </ul>
            </li>

            <li class="mobile-group">
              <span class="group-title">CHARGE</span>
              <ul>
                <li><NuxtLink to="/plan" @click="closeMobileMenu">料金プラン</NuxtLink></li>
                <li><NuxtLink to="/shipping" @click="closeMobileMenu">国際送料</NuxtLink></li>
              </ul>
            </li>

            <li class="mobile-group">
              <span class="group-title">COMPANY</span>
              <ul>
                <li><NuxtLink to="/company" @click="closeMobileMenu">企業情報</NuxtLink></li>
                <li><NuxtLink to="/privacy" @click="closeMobileMenu">プライバシーポリシー</NuxtLink></li>
              </ul>
            </li>

            <li class="mobile-group">
              <span class="group-title">OTHER</span>
              <ul>
                <li><NuxtLink to="/terms" @click="closeMobileMenu">ご利用規約</NuxtLink></li>
                <li><NuxtLink to="/qa" @click="closeMobileMenu">Q＆A</NuxtLink></li>
              </ul>
            </li>

            <li>
              <NuxtLink to="/contact" class="mobile-btn-cta" @click="closeMobileMenu">
                お問い合わせ
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const scrolled = ref(false)
const activeDropdown = ref('')
const mobileMenuOpen = ref(false)
const route = useRoute()

const openDropdown = (menu) => {
  activeDropdown.value = menu
}

const closeDropdown = () => {
  activeDropdown.value = ''
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isDropdownActive = (paths) => {
  return paths.some(path => route.path === path)
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.05);
  border-bottom-color: rgba(99, 102, 241, 0.1);
  padding: 0.25rem 0;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

/* Brand Logo */
.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-logo {
  font-size: 1.5rem;
  background: var(--grad-royal);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.brand-name {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--grad-royal);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Desktop Nav */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-main);
  cursor: pointer;
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;
}

.nav-link:hover, .nav-link.active {
  color: var(--color-primary);
  background-color: rgba(79, 70, 229, 0.05);
}

.nav-link i {
  font-size: 0.75rem;
  transition: transform 0.2s ease;
}

.nav-dropdown:hover .nav-link i {
  transform: rotate(180deg);
}

/* Dropdown Menu */
.nav-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: #ffffff;
  min-width: 220px;
  border-radius: var(--border-radius-sm);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.75rem 0;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.625rem 1.5rem;
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-menu a:hover {
  background: var(--bg-secondary);
  color: var(--color-primary);
  padding-left: 1.75rem;
}

/* Header Call to Action Button */
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  border-radius: var(--border-pill);
  background: var(--grad-royal);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
  transition: all 0.2s ease;
}

.btn-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(79, 70, 229, 0.35);
  color: #ffffff;
}

/* Mobile Toggle Hamburger button */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.mobile-toggle .bar {
  width: 100%;
  height: 2px;
  background: var(--text-main);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.bar-open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.bar-open:nth-child(2) {
  opacity: 0;
}

.bar-open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Drawer overlays */
.mobile-nav-overlay {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
}

.mobile-nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: #ffffff;
  box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
  padding: 2rem 1.5rem;
  overflow-y: auto;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-links > li > a {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-main);
}

.mobile-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-group .group-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}

.mobile-group ul {
  list-style: none;
  padding-left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-left: 2px solid var(--bg-secondary);
}

.mobile-group a {
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 500;
}

.mobile-btn-cta {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: var(--grad-royal);
  color: white;
  border-radius: var(--border-pill);
  font-weight: 600;
  text-align: center;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 868px) {
  .desktop-nav {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>