<template>
  <div class="site-wrapper">
    <TheHeader />
    
    <main class="main-container">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<style>
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: radial-gradient(circle at 10% 20%, rgba(248, 250, 252, 1) 0%, rgba(239, 246, 255, 0.4) 100%);
}

.main-container {
  flex: 1;
  padding-bottom: 4rem;
}
</style>
