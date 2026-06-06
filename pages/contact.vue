<template>
  <div class="container page-section page-top-padding">
    <h1 class="section-title">お問い合わせ</h1>
    <p class="section-subtitle">
      サービス内容に関するご質問、お見積もりのご依頼、カスタムプランのご相談などお気軽にお問い合わせください。
    </p>

    <div class="glass-card contact-form-card">
      <!-- Form Progress Tracker -->
      <div class="form-progress">
        <div class="progress-step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
          <span class="step-badge">1</span>
          <span class="step-label">情報の入力</span>
        </div>
        <div class="progress-line" :class="{ completed: currentStep > 1 }"></div>
        <div class="progress-step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
          <span class="step-badge">2</span>
          <span class="step-label">入力内容の確認</span>
        </div>
        <div class="progress-line" :class="{ completed: currentStep > 2 }"></div>
        <div class="progress-step" :class="{ active: currentStep === 3 }">
          <span class="step-badge"><i class="fa-solid fa-check"></i></span>
          <span class="step-label">送信完了</span>
        </div>
      </div>

      <!-- STEP 1: Input Stage -->
      <form v-if="currentStep === 1" @submit.prevent="goToConfirm" class="form-body animate-fade-in-up">
        
        <!-- Inquiry Type -->
        <div class="form-group">
          <label class="form-label" for="inquiryType">お問い合わせ種類 <span class="required">*</span></label>
          <select v-model="formData.inquiryType" id="inquiryType" class="form-select" required>
            <option value="" disabled>選択してください</option>
            <option value="中国輸入について">中国輸入代行について</option>
            <option value="OEMについて">OEM・ODM・オリジナル製造について</option>
            <option value="有料会員について">有料プラン（ゴールド会員）について</option>
            <option value="サービス料金について">各種サービス料金について</option>
            <option value="サービス内容について">検品・アパレル加工などの内容について</option>
            <option value="その他お問い合わせ・ご相談">その他お問い合わせ・ご相談</option>
          </select>
        </div>

        <!-- Name -->
        <div class="form-group">
          <label class="form-label" for="clientName">お名前 <span class="required">*</span></label>
          <input 
            v-model="formData.clientName" 
            type="text" 
            id="clientName" 
            placeholder="山田 太郎" 
            class="form-input" 
            required
          >
        </div>

        <!-- Company Name -->
        <div class="form-group">
          <label class="form-label" for="companyName">会社名・屋号 <span class="required">*</span></label>
          <input 
            v-model="formData.companyName" 
            type="text" 
            id="companyName" 
            placeholder="株式会社〇〇（個人の場合は「個人」とご入力ください）" 
            class="form-input" 
            required
          >
        </div>

        <!-- Email -->
        <div class="form-group">
          <label class="form-label" for="email">メールアドレス <span class="required">*</span></label>
          <input 
            v-model="formData.email" 
            type="email" 
            id="email" 
            placeholder="example@aska-daikou.com" 
            class="form-input" 
            required
          >
        </div>

        <!-- Phone Number -->
        <div class="form-group">
          <label class="form-label" for="phone">電話番号 <span class="required">*</span></label>
          <input 
            v-model="formData.phone" 
            type="tel" 
            id="phone" 
            placeholder="070-1234-5678" 
            class="form-input" 
            required
          >
        </div>

        <!-- Experience Radio Buttons -->
        <div class="form-group">
          <label class="form-label">中国輸入のご経験 <span class="required">*</span></label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="formData.experience" value="あり" required>
              あり
            </label>
            <label class="radio-label">
              <input type="radio" v-model="formData.experience" value="なし" required>
              なし
            </label>
          </div>
        </div>

        <!-- Detail Message Textarea -->
        <div class="form-group">
          <label class="form-label" for="message">お問い合わせ内容 <span class="required">*</span></label>
          <textarea 
            v-model="formData.message" 
            id="message" 
            rows="8" 
            placeholder="ご相談内容やご質問、有在庫・無在庫どちらのご希望かなど、詳細をご入力ください。" 
            class="form-textarea" 
            required
          ></textarea>
        </div>

        <div class="form-actions-center">
          <button type="submit" class="btn-primary btn-large">入力内容を確認する</button>
        </div>
      </form>

      <!-- STEP 2: Confirmation Stage -->
      <div v-else-if="currentStep === 2" class="confirm-stage animate-fade-in-up">
        <h3>入力内容の確認</h3>
        <p class="confirm-desc">以下の内容でよろしければ「送信する」ボタンを押してください。</p>

        <div class="table-responsive confirm-table-box">
          <table class="premium-table">
            <tbody>
              <tr>
                <th class="confirm-th">お問い合わせ種類</th>
                <td>{{ formData.inquiryType }}</td>
              </tr>
              <tr>
                <th class="confirm-th">お名前</th>
                <td>{{ formData.clientName }}</td>
              </tr>
              <tr>
                <th class="confirm-th">会社名・屋号</th>
                <td>{{ formData.companyName }}</td>
              </tr>
              <tr>
                <th class="confirm-th">メールアドレス</th>
                <td>{{ formData.email }}</td>
              </tr>
              <tr>
                <th class="confirm-th">電話番号</th>
                <td>{{ formData.phone }}</td>
              </tr>
              <tr>
                <th class="confirm-th">中国輸入のご経験</th>
                <td>{{ formData.experience }}</td>
              </tr>
              <tr>
                <th class="confirm-th">お問い合わせ内容</th>
                <td class="whitespace-pre">{{ formData.message }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="confirm-actions">
          <button @click="backToInput" class="btn-secondary">戻って修正する</button>
          <button @click="submitForm" class="btn-primary" :disabled="submitting">
            <span v-if="submitting">送信中...</span>
            <span v-else>送信する <i class="fa-solid fa-paper-plane"></i></span>
          </button>
        </div>
      </div>

      <!-- STEP 3: Success Stage -->
      <div v-else-if="currentStep === 3" class="success-stage text-center animate-fade-in-up">
        <div class="success-icon"><i class="fa-solid fa-circle-check"></i></div>
        <h2>送信完了いたしました</h2>
        <p class="success-desc">
          お問い合わせいただき誠にありがとうございました。<br>
          ご入力いただいたメールアドレス宛てに自動返信メールをお送りしました。<br>
          確認後、通常24時間以内（休業日を除く）に日本人スタッフより折り返しご連絡差し上げます。
        </p>
        <NuxtLink to="/" class="btn-primary">トップページへ戻る</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const currentStep = ref(1)
const submitting = ref(false)

const formData = reactive({
  inquiryType: '',
  clientName: '',
  companyName: '',
  email: '',
  phone: '',
  experience: '',
  message: ''
})

const goToConfirm = () => {
  currentStep.value = 2
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const backToInput = () => {
  currentStep.value = 1
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const submitForm = async () => {
  submitting.value = true
  
  // Simulate API processing delay
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  submitting.value = false
  currentStep.value = 3
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

useHead({
  title: 'お問い合わせ - asuka',
  meta: [
    { name: 'description', content: 'asukaサービスに関するお問い合わせ窓口。新規ご利用お申し込み、OEM製造依頼、会員費やプラン料金のご相談など、お気軽にお尋ねください。' }
  ]
})
</script>

<style scoped>
.page-top-padding {
  padding-top: 100px;
}

.contact-form-card {
  max-width: 800px;
  margin: 0 auto;
  padding: 3.5rem;
}

/* Progress Tracker */
.form-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.5rem;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.step-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--bg-secondary);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  border: 2px solid #cbd5e1;
  transition: all 0.3s ease;
}

.step-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  white-space: nowrap;
}

.progress-line {
  flex: 1;
  height: 2px;
  background-color: #cbd5e1;
  margin: 0 1rem;
  margin-top: -1.2rem;
  z-index: 1;
  transition: all 0.3s ease;
}

/* Active and completed tracking states */
.progress-step.active .step-badge {
  background-color: #ffffff;
  color: var(--color-primary);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}

.progress-step.active .step-label {
  color: var(--color-primary);
}

.progress-step.completed .step-badge {
  background: var(--grad-royal);
  color: #ffffff;
  border-color: transparent;
}

.progress-step.completed .step-label {
  color: var(--color-primary);
}

.progress-line.completed {
  background: var(--color-primary);
}

/* Radio buttons alignment */
.radio-group {
  display: flex;
  gap: 2rem;
  padding: 0.5rem 0;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  cursor: pointer;
}

.radio-label input {
  width: 18px;
  height: 18px;
  accent-color: var(--color-primary);
}

.form-actions-center {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

/* Confirm stage */
.confirm-stage h3 {
  font-size: 1.35rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.confirm-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.confirm-table-box {
  margin-bottom: 2.5rem;
}

.confirm-th {
  width: 30%;
  background-color: var(--bg-secondary) !important;
  color: var(--text-main) !important;
  font-weight: 700;
  -webkit-text-stroke: 0px !important;
}

.whitespace-pre {
  white-space: pre-wrap;
}

.confirm-actions {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}

.confirm-actions button {
  flex: 1;
}

/* Success stage */
.success-stage {
  padding: 3rem 1rem;
}

.success-icon {
  font-size: 4rem;
  color: #10b981;
  margin-bottom: 1.5rem;
}

.success-stage h2 {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.success-desc {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
}

@media (max-width: 600px) {
  .contact-form-card {
    padding: 2rem;
  }
  .confirm-actions {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
