import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { ref, reactive, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './v3-gZWcuvll.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/yuma/Desktop/asuka-modern/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/devalue/index.js';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/yuma/Desktop/asuka-modern/node_modules/vue-router/vue-router.node.mjs';

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
      title: "\u304A\u554F\u3044\u5408\u308F\u305B - asuka",
      meta: [
        { name: "description", content: "asuka\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u304A\u554F\u3044\u5408\u308F\u305B\u7A93\u53E3\u3002\u65B0\u898F\u3054\u5229\u7528\u304A\u7533\u3057\u8FBC\u307F\u3001OEM\u88FD\u9020\u4F9D\u983C\u3001\u4F1A\u54E1\u8CBB\u3084\u30D7\u30E9\u30F3\u6599\u91D1\u306E\u3054\u76F8\u8AC7\u306A\u3069\u3001\u304A\u6C17\u8EFD\u306B\u304A\u5C0B\u306D\u304F\u3060\u3055\u3044\u3002" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-cf452031><h1 class="section-title" data-v-cf452031>\u304A\u554F\u3044\u5408\u308F\u305B</h1><p class="section-subtitle" data-v-cf452031> \u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306B\u95A2\u3059\u308B\u3054\u8CEA\u554F\u3001\u304A\u898B\u7A4D\u3082\u308A\u306E\u3054\u4F9D\u983C\u3001\u30AB\u30B9\u30BF\u30E0\u30D7\u30E9\u30F3\u306E\u3054\u76F8\u8AC7\u306A\u3069\u304A\u6C17\u8EFD\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002 </p><div class="glass-card contact-form-card" data-v-cf452031><div class="form-progress" data-v-cf452031><div class="${ssrRenderClass([{ active: currentStep.value >= 1, completed: currentStep.value > 1 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031>1</span><span class="step-label" data-v-cf452031>\u60C5\u5831\u306E\u5165\u529B</span></div><div class="${ssrRenderClass([{ completed: currentStep.value > 1 }, "progress-line"])}" data-v-cf452031></div><div class="${ssrRenderClass([{ active: currentStep.value >= 2, completed: currentStep.value > 2 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031>2</span><span class="step-label" data-v-cf452031>\u5165\u529B\u5185\u5BB9\u306E\u78BA\u8A8D</span></div><div class="${ssrRenderClass([{ completed: currentStep.value > 2 }, "progress-line"])}" data-v-cf452031></div><div class="${ssrRenderClass([{ active: currentStep.value === 3 }, "progress-step"])}" data-v-cf452031><span class="step-badge" data-v-cf452031><i class="fa-solid fa-check" data-v-cf452031></i></span><span class="step-label" data-v-cf452031>\u9001\u4FE1\u5B8C\u4E86</span></div></div>`);
      if (currentStep.value === 1) {
        _push(`<form class="form-body animate-fade-in-up" data-v-cf452031><div class="form-group" data-v-cf452031><label class="form-label" for="inquiryType" data-v-cf452031>\u304A\u554F\u3044\u5408\u308F\u305B\u7A2E\u985E <span class="required" data-v-cf452031>*</span></label><select id="inquiryType" class="form-select" required data-v-cf452031><option value="" disabled data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "") : ssrLooseEqual(formData.inquiryType, "")) ? " selected" : ""}>\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044</option><option value="\u4E2D\u56FD\u8F38\u5165\u306B\u3064\u3044\u3066" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "\u4E2D\u56FD\u8F38\u5165\u306B\u3064\u3044\u3066") : ssrLooseEqual(formData.inquiryType, "\u4E2D\u56FD\u8F38\u5165\u306B\u3064\u3044\u3066")) ? " selected" : ""}>\u4E2D\u56FD\u8F38\u5165\u4EE3\u884C\u306B\u3064\u3044\u3066</option><option value="OEM\u306B\u3064\u3044\u3066" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "OEM\u306B\u3064\u3044\u3066") : ssrLooseEqual(formData.inquiryType, "OEM\u306B\u3064\u3044\u3066")) ? " selected" : ""}>OEM\u30FBODM\u30FB\u30AA\u30EA\u30B8\u30CA\u30EB\u88FD\u9020\u306B\u3064\u3044\u3066</option><option value="\u6709\u6599\u4F1A\u54E1\u306B\u3064\u3044\u3066" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "\u6709\u6599\u4F1A\u54E1\u306B\u3064\u3044\u3066") : ssrLooseEqual(formData.inquiryType, "\u6709\u6599\u4F1A\u54E1\u306B\u3064\u3044\u3066")) ? " selected" : ""}>\u6709\u6599\u30D7\u30E9\u30F3\uFF08\u30B4\u30FC\u30EB\u30C9\u4F1A\u54E1\uFF09\u306B\u3064\u3044\u3066</option><option value="\u30B5\u30FC\u30D3\u30B9\u6599\u91D1\u306B\u3064\u3044\u3066" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "\u30B5\u30FC\u30D3\u30B9\u6599\u91D1\u306B\u3064\u3044\u3066") : ssrLooseEqual(formData.inquiryType, "\u30B5\u30FC\u30D3\u30B9\u6599\u91D1\u306B\u3064\u3044\u3066")) ? " selected" : ""}>\u5404\u7A2E\u30B5\u30FC\u30D3\u30B9\u6599\u91D1\u306B\u3064\u3044\u3066</option><option value="\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306B\u3064\u3044\u3066" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306B\u3064\u3044\u3066") : ssrLooseEqual(formData.inquiryType, "\u30B5\u30FC\u30D3\u30B9\u5185\u5BB9\u306B\u3064\u3044\u3066")) ? " selected" : ""}>\u691C\u54C1\u30FB\u30A2\u30D1\u30EC\u30EB\u52A0\u5DE5\u306A\u3069\u306E\u5185\u5BB9\u306B\u3064\u3044\u3066</option><option value="\u305D\u306E\u4ED6\u304A\u554F\u3044\u5408\u308F\u305B\u30FB\u3054\u76F8\u8AC7" data-v-cf452031${ssrIncludeBooleanAttr(Array.isArray(formData.inquiryType) ? ssrLooseContain(formData.inquiryType, "\u305D\u306E\u4ED6\u304A\u554F\u3044\u5408\u308F\u305B\u30FB\u3054\u76F8\u8AC7") : ssrLooseEqual(formData.inquiryType, "\u305D\u306E\u4ED6\u304A\u554F\u3044\u5408\u308F\u305B\u30FB\u3054\u76F8\u8AC7")) ? " selected" : ""}>\u305D\u306E\u4ED6\u304A\u554F\u3044\u5408\u308F\u305B\u30FB\u3054\u76F8\u8AC7</option></select></div><div class="form-group" data-v-cf452031><label class="form-label" for="clientName" data-v-cf452031>\u304A\u540D\u524D <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.clientName)} type="text" id="clientName" placeholder="\u5C71\u7530 \u592A\u90CE" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="companyName" data-v-cf452031>\u4F1A\u793E\u540D\u30FB\u5C4B\u53F7 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.companyName)} type="text" id="companyName" placeholder="\u682A\u5F0F\u4F1A\u793E\u3007\u3007\uFF08\u500B\u4EBA\u306E\u5834\u5408\u306F\u300C\u500B\u4EBA\u300D\u3068\u3054\u5165\u529B\u304F\u3060\u3055\u3044\uFF09" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="email" data-v-cf452031>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.email)} type="email" id="email" placeholder="example@aska-daikou.com" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" for="phone" data-v-cf452031>\u96FB\u8A71\u756A\u53F7 <span class="required" data-v-cf452031>*</span></label><input${ssrRenderAttr("value", formData.phone)} type="tel" id="phone" placeholder="070-1234-5678" class="form-input" required data-v-cf452031></div><div class="form-group" data-v-cf452031><label class="form-label" data-v-cf452031>\u4E2D\u56FD\u8F38\u5165\u306E\u3054\u7D4C\u9A13 <span class="required" data-v-cf452031>*</span></label><div class="radio-group" data-v-cf452031><label class="radio-label" data-v-cf452031><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.experience, "\u3042\u308A")) ? " checked" : ""} value="\u3042\u308A" required data-v-cf452031> \u3042\u308A </label><label class="radio-label" data-v-cf452031><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(formData.experience, "\u306A\u3057")) ? " checked" : ""} value="\u306A\u3057" required data-v-cf452031> \u306A\u3057 </label></div></div><div class="form-group" data-v-cf452031><label class="form-label" for="message" data-v-cf452031>\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 <span class="required" data-v-cf452031>*</span></label><textarea id="message" rows="8" placeholder="\u3054\u76F8\u8AC7\u5185\u5BB9\u3084\u3054\u8CEA\u554F\u3001\u6709\u5728\u5EAB\u30FB\u7121\u5728\u5EAB\u3069\u3061\u3089\u306E\u3054\u5E0C\u671B\u304B\u306A\u3069\u3001\u8A73\u7D30\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044\u3002" class="form-textarea" required data-v-cf452031>${ssrInterpolate(formData.message)}</textarea></div><div class="form-actions-center" data-v-cf452031><button type="submit" class="btn-primary btn-large" data-v-cf452031>\u5165\u529B\u5185\u5BB9\u3092\u78BA\u8A8D\u3059\u308B</button></div></form>`);
      } else if (currentStep.value === 2) {
        _push(`<div class="confirm-stage animate-fade-in-up" data-v-cf452031><h3 data-v-cf452031>\u5165\u529B\u5185\u5BB9\u306E\u78BA\u8A8D</h3><p class="confirm-desc" data-v-cf452031>\u4EE5\u4E0B\u306E\u5185\u5BB9\u3067\u3088\u308D\u3057\u3051\u308C\u3070\u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p><div class="table-responsive confirm-table-box" data-v-cf452031><table class="premium-table" data-v-cf452031><tbody data-v-cf452031><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u304A\u554F\u3044\u5408\u308F\u305B\u7A2E\u985E</th><td data-v-cf452031>${ssrInterpolate(formData.inquiryType)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u304A\u540D\u524D</th><td data-v-cf452031>${ssrInterpolate(formData.clientName)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u4F1A\u793E\u540D\u30FB\u5C4B\u53F7</th><td data-v-cf452031>${ssrInterpolate(formData.companyName)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9</th><td data-v-cf452031>${ssrInterpolate(formData.email)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u96FB\u8A71\u756A\u53F7</th><td data-v-cf452031>${ssrInterpolate(formData.phone)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u4E2D\u56FD\u8F38\u5165\u306E\u3054\u7D4C\u9A13</th><td data-v-cf452031>${ssrInterpolate(formData.experience)}</td></tr><tr data-v-cf452031><th class="confirm-th" data-v-cf452031>\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9</th><td class="whitespace-pre" data-v-cf452031>${ssrInterpolate(formData.message)}</td></tr></tbody></table></div><div class="confirm-actions" data-v-cf452031><button class="btn-secondary" data-v-cf452031>\u623B\u3063\u3066\u4FEE\u6B63\u3059\u308B</button><button class="btn-primary"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} data-v-cf452031>`);
        if (submitting.value) {
          _push(`<span data-v-cf452031>\u9001\u4FE1\u4E2D...</span>`);
        } else {
          _push(`<span data-v-cf452031>\u9001\u4FE1\u3059\u308B <i class="fa-solid fa-paper-plane" data-v-cf452031></i></span>`);
        }
        _push(`</button></div></div>`);
      } else if (currentStep.value === 3) {
        _push(`<div class="success-stage text-center animate-fade-in-up" data-v-cf452031><div class="success-icon" data-v-cf452031><i class="fa-solid fa-circle-check" data-v-cf452031></i></div><h2 data-v-cf452031>\u9001\u4FE1\u5B8C\u4E86\u3044\u305F\u3057\u307E\u3057\u305F</h2><p class="success-desc" data-v-cf452031> \u304A\u554F\u3044\u5408\u308F\u305B\u3044\u305F\u3060\u304D\u8AA0\u306B\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3057\u305F\u3002<br data-v-cf452031> \u3054\u5165\u529B\u3044\u305F\u3060\u3044\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u5B9B\u3066\u306B\u81EA\u52D5\u8FD4\u4FE1\u30E1\u30FC\u30EB\u3092\u304A\u9001\u308A\u3057\u307E\u3057\u305F\u3002<br data-v-cf452031> \u78BA\u8A8D\u5F8C\u3001\u901A\u5E3824\u6642\u9593\u4EE5\u5185\uFF08\u4F11\u696D\u65E5\u3092\u9664\u304F\uFF09\u306B\u65E5\u672C\u4EBA\u30B9\u30BF\u30C3\u30D5\u3088\u308A\u6298\u308A\u8FD4\u3057\u3054\u9023\u7D61\u5DEE\u3057\u4E0A\u3052\u307E\u3059\u3002 </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "btn-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078\u623B\u308B`);
            } else {
              return [
                createTextVNode("\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078\u623B\u308B")
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

export { contact as default };
//# sourceMappingURL=contact-CDLn13Ef.mjs.map
