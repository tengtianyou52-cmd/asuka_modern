<template>
  <div class="container page-section page-top-padding">
    <div class="layout-with-sidebar">
      <!-- Sidebar Menu Component -->
      <TheSidebar class="page-sidebar" />

      <!-- Main Contents -->
      <main class="page-main-content animate-fade-in-up">
        <h1 class="page-title">プライバシーポリシー</h1>
        <p class="page-subtitle">個人情報の定義、取得、管理、開示に関する基本方針を定めています。</p>

        <!-- Terms Contents Card -->
        <div class="glass-card privacy-card">
          <div class="intro-alert">
            <i class="fa-solid fa-shield-halved animate-pulse"></i>
            <p>
              株式会社重錦倖（以下、「当社」といいます。）が運営するasuka（以下、「当サイト」といいます。）は、お客様のプライバシーを尊重し、個人情報の取扱い及び保護に関して以下のように指針を定めております。
            </p>
          </div>

          <div class="privacy-body">
            
            <section class="privacy-group">
              <h3 class="privacy-heading">■個人情報の利用について</h3>
              <p>当社はお客様へのサービスと商品・情報提供のため個人情報を提供していただいております。ご提供いただいた個人情報は、業務上の目的以外には利用致しません。</p>
            </section>

            <section class="privacy-group">
              <h3 class="privacy-heading">■個人情報をご提供いただく場合</h3>
              <p>個人情報はメールにてお問い合わせいただく際や、お見積もり時に頂戴しております。また、ご契約時やサンプル、商品、書類等の発送時にはご本人確認及び発送に必要な住所等の個人情報をご提供いただいております。</p>
            </section>

            <section class="privacy-group">
              <h3 class="privacy-heading">■個人情報の取り扱いについて</h3>
              <p>当社は取り扱う個人情報の漏洩、滅失またはき損の防止、その他の個人情報の安全管理のために必要かつ適切な措置を講じます。お客様は当社の求める場合でも、当社に個人情報を提供することを拒否することが出来、この場合当社はどのようなことに対する情報なのかを説明致します。</p>
            </section>

            <section class="privacy-group">
              <h3 class="privacy-heading">■情報の安全性を保護します</h3>
              <p>当社は業務上合理的な注意を払って、個人情報を安全に管理します。</p>
            </section>

            <section class="privacy-group">
              <h3 class="privacy-heading">■個人情報の開示・訂正等、保護について</h3>
              <p>ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。その際、ご本人であることが確認できない場合には、開示に応じません。</p>
              <p>個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。その際、ご本人であることが確認できない場合には、これらの請求に応じません。</p>
              <p>当社はお客様の個人情報を適切に保護し、個人情報保護法その他の法令等により認められた場合を除き、お客様の同意なく第三者に提供、開示することはありません。ただし、当社の業務にて必要な範囲において情報を開示する場合もございます。当社の業務外での開示については事前にご本人の同意を得てから開示しております。</p>
            </section>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'プライバシーポリシー - asuka',
  meta: [
    { name: 'description', content: 'asukaサービスを運営する株式会社重錦倖のプライバシーポリシー（個人情報保護方針）。個人情報の利用目的、安全対策、第三者への提供、開示開示請求への対応についての指針。' }
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

.privacy-card {
  padding: 3rem 2.5rem;
}

.intro-alert {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-sm);
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 3rem;
  border-left: 4px solid var(--color-primary);
}

.intro-alert i {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-top: 0.15rem;
}

.intro-alert p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-main);
  font-weight: 500;
}

.privacy-body {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.privacy-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.privacy-heading {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
  border-bottom: 1.5px solid var(--bg-secondary);
  padding-bottom: 0.5rem;
}

.privacy-group p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.8;
}

@media (max-width: 992px) {
  .layout-with-sidebar {
    grid-template-columns: 1fr;
  }
  .page-sidebar {
    display: none;
  }
}
</style>
