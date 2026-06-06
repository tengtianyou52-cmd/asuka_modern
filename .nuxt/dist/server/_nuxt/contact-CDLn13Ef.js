import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { ref, reactive, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-gZWcuvll.js";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/hookable/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/unctx/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/defu/dist/defu.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ufo/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const currentStep = ref(1);
    const submitting = ref(false);
    const formData = reactive({
      inquiryType: "",
      clientName: "",
      companyName: "",
      email: "",
      phone: "",
      experience: "",
      message: ""
    });
    useHead({
      title: "お問い合わせ - asuka",
      meta: [
        { name: "description", content: "asukaサービスに関するお問い合わせ窓口。新規ご利用お申し込み、OEM製造依頼、会員費やプラン料金のご相談など、お気軽にお尋ねください。" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-cf452031><h1 class="section-title" data-v-cf452031>お問い合わせ</h1><p class="section-subtitle" data-v-cf452031> サービス内容に関するご質問、お見積もりのご依頼、カスタムプランのご相談などお気軽にお問い合わせください。 </p><div class="glass-card contact-form-card" data-v-cf452031><div class="form-progress" data-v-cf452031><div class="${ssrRenderClass([{ active: currentStep.value >= 1, completed: currentStep.value > 1 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031>1</span><span class="step-label" data-v-cf452031>情報の入力</span></div><div class="${ssrRenderClass([{ completed: currentStep.value > 1 }, "progress-line"])}" data-v-cf452031></div><div class="${ssrRenderClass([{ active: currentStep.value >= 2, completed: currentStep.value > 2 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031>2</span><span class="step-label" data-v-cf452031>入力内容の確認</span></div><div class="${ssrRenderClass([{ completed: currentStep.value > 2 }, "progress-line"])}" data-v-cf452031></div><div class="${ssrRenderClass([{ active: currentStep.value === 3 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031><i class="fa-solid fa-check" data-v-cf452031></i></span><span class="step-label" data-v-cf452031>送信完了</span></div></div>`);
      if (currentStep.value === 1) {
        _push(`<form class="form-body animate-fade-in-up" data-v-cf452031><div class="form-group" data-v-cf452031><label class="form-label" for="inquiryType" data-v-cf452031>お問い合わせ種類 <span class="required" data-v-cf452031>*</span></label><select id="inquiryType" class="form-select" required data-v-cf452031><option value="" disabled data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "") : ssrLooseEqual(formData.inquiryType, "")) ? " selected" : ""}>選択してください</option><option value="中国輸入について" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "中国輸入について") : ssrLooseEqual(formData.inquiryType, "中国輸入について")) ? " selected" : ""}>中国輸入代行について</option><option value="OEMについて" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "OEMについて") : ssrLooseEqual(formData.inquiryType, "OEMについて")) ? " selected" : ""}>OEM・ODM・オリジナル製造について</option><option value="有料会員について" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "有料会員について") : ssrLooseEqual(formData.inquiryType, "有料会員について")) ? " selected" : ""}>有料プラン（ゴールド会員）について</option><option value="サービス料金について" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "サービス料金について") : ssrLooseEqual(formData.inquiryType, "サービス料金について")) ? " selected" : ""}>各種サービス料金について</option><option value="サービス内容について" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "サービス内容について") : ssrLooseEqual(formData.inquiryType, "サービス内容について")) ? " selected" : ""}>検品・アパレル加工などの内容について</option><option value="その他お問い合わせ・ご相談" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "その他お問い合わせ・ご相談") : ssrLooseEqual(formData.inquiryType, "その他お問い合わせ・ご相談")) ? " selected" : ""}>その他お問い合わせ・ご相談</option></select></div><div class="form-group" data-v-cf452031><label class="form-label" for="clientName" data-v-cf452031>お名前 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.clientName)} type="text" id="clientName" placeholder="山田 太郎" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="companyName" data-v-cf452031>会社名・屋号 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.companyName)} type="text" id="companyName" placeholder="株式会社〇〇（個人の場合は「個人」とご入力ください）" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="email" data-v-cf452031>メールアドレス <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.email)} type="email" id="email" placeholder="example@aska-daikou.com" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="phone" data-v-cf452031>電話番号 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.phone)} type="tel" id="phone" placeholder="070-1234-5678" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" data-v-cf452031>中国輸入のご経験 <span class="required" data-v-cf452031>*</span></label><div class="radio-group" data-v-cf452031><label class="radio-label" data-v-cf452031><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.experience, "あり")) ? " checked" : ""} value="あり" required data-v-cf452031> あり </label><label class="radio-label" data-v-cf452031><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.experience, "なし")) ? " checked" : ""} value="なし" required data-v-cf452031> なし </label></div></div><div class="form-group" data-v-cf452031><label class="form-label" for="message" data-v-cf452031>お問い合わせ内容 <span class="required" data-v-cf452031>*</span></label><textarea id="message" rows="8" placeholder="ご相談内容やご質問、有在庫・無在庫どちらのご希望かなど、詳細をご入力ください。" class="form-textarea" required data-v-cf452031>${ssrInterpolate(formData.message)}</textarea></div><div class="form-actions-center" data-v-cf452031><button type="submit" class="btn-primary btn-large" data-v-cf452031>入力内容を確認する</button></div></form>`);
      } else if (currentStep.value === 2) {
        _push(`<div class="confirm-stage animate-fade-in-up" data-v-cf452031><h3 data-v-cf452031>入力内容の確認</h3><p class="confirm-desc" data-v-cf452031>以下の内容でよろしければ「送信する」ボタンを押してください。</p><div class="table-responsive confirm-table-box" data-v-cf452031><table class="premium-table" data-v-cf452031><tbody data-v-cf452031><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>お問い合わせ種類</th><td data-v-cf452031>${ssrInterpolate(formData.inquiryType)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>お名前</th><td data-v-cf452031>${ssrInterpolate(formData.clientName)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>会社名・屋号</th><td data-v-cf452031>${ssrInterpolate(formData.companyName)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>メールアドレス</th><td data-v-cf452031>${ssrInterpolate(formData.email)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>電話番号</th><td data-v-cf452031>${ssrInterpolate(formData.phone)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>中国輸入のご経験</th><td data-v-cf452031>${ssrInterpolate(formData.experience)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>お問い合わせ内容</th><td class="whitespace-pre" data-v-cf452031>${ssrInterpolate(formData.message)}</td></tr></tbody></table></div><div class="confirm-actions" data-v-cf452031><button class="btn-secondary" data-v-cf452031>戻って修正する</button><button class="btn-primary"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} data-v-cf452031>`);
        if (submitting.value) {
          _push(`<span data-v-cf452031>送信中...</span>`);
        } else {
          _push(`<span data-v-cf452031>送信する <i class="fa-solid fa-paper-plane" data-v-cf452031></i></span>`);
        }
        _push(`</button></div></div>`);
      } else if (currentStep.value === 3) {
        _push(`<div class="success-stage text-center animate-fade-in-up" data-v-cf452031><div class="success-icon" data-v-cf452031><i class="fa-solid fa-circle-check" data-v-cf452031></i></div><h2 data-v-cf452031>送信完了いたしました</h2><p class="success-desc" data-v-cf452031> お問い合わせいただき誠にありがとうございました。<br data-v-cf452031> ご入力いただいたメールアドレス宛てに自動返信メールをお送りしました。<br data-v-cf452031> 確認後、通常24時間以内（休業日を除く）に日本人スタッフより折り返しご連絡差し上げます。 </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`トップページへ戻る`);
            } else {
              return [
                createTextVNode("トップページへ戻る")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cf452031"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-CDLn13Ef.js.map
