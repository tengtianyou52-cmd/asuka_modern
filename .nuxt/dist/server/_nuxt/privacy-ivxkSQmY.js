import { _ as __nuxt_component_0 } from "./TheSidebar-yflW6J9S.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-gZWcuvll.js";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/@unhead/vue/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/hookable/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/unctx/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/defu/dist/defu.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "プライバシーポリシー - asuka",
      meta: [
        { name: "description", content: "asukaサービスを運営する株式会社重錦倖のプライバシーポリシー（個人情報保護方針）。個人情報の利用目的、安全対策、第三者への提供、開示開示請求への対応についての指針。" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheSidebar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-a64d8088><div class="layout-with-sidebar" data-v-a64d8088>`);
      _push(ssrRenderComponent(_component_TheSidebar, { class: "page-sidebar" }, null, _parent));
      _push(`<main class="page-main-content animate-fade-in-up" data-v-a64d8088><h1 class="page-title" data-v-a64d8088>プライバシーポリシー</h1><p class="page-subtitle" data-v-a64d8088>個人情報の定義、取得、管理、開示に関する基本方針を定めています。</p><div class="glass-card privacy-card" data-v-a64d8088><div class="intro-alert" data-v-a64d8088><i class="fa-solid fa-shield-halved animate-pulse" data-v-a64d8088></i><p data-v-a64d8088> 株式会社重錦倖（以下、「当社」といいます。）が運営するasuka（以下、「当サイト」といいます。）は、お客様のプライバシーを尊重し、個人情報の取扱い及び保護に関して以下のように指針を定めております。 </p></div><div class="privacy-body" data-v-a64d8088><section class="privacy-group" data-v-a64d8088><h3 class="privacy-heading" data-v-a64d8088>■個人情報の利用について</h3><p data-v-a64d8088>当社はお客様へのサービスと商品・情報提供のため個人情報を提供していただいております。ご提供いただいた個人情報は、業務上の目的以外には利用致しません。</p></section><section class="privacy-group" data-v-a64d8088><h3 class="privacy-heading" data-v-a64d8088>■個人情報をご提供いただく場合</h3><p data-v-a64d8088>個人情報はメールにてお問い合わせいただく際や、お見積もり時に頂戴しております。また、ご契約時やサンプル、商品、書類等の発送時にはご本人確認及び発送に必要な住所等の個人情報をご提供いただいております。</p></section><section class="privacy-group" data-v-a64d8088><h3 class="privacy-heading" data-v-a64d8088>■個人情報の取り扱いについて</h3><p data-v-a64d8088>当社は取り扱う個人情報の漏洩、滅失またはき損の防止、その他の個人情報の安全管理のために必要かつ適切な措置を講じます。お客様は当社の求める場合でも、当社に個人情報を提供することを拒否することが出来、この場合当社はどのようなことに対する情報なのかを説明致します。</p></section><section class="privacy-group" data-v-a64d8088><h3 class="privacy-heading" data-v-a64d8088>■情報の安全性を保護します</h3><p data-v-a64d8088>当社は業務上合理的な注意を払って、個人情報を安全に管理します。</p></section><section class="privacy-group" data-v-a64d8088><h3 class="privacy-heading" data-v-a64d8088>■個人情報の開示・訂正等、保護について</h3><p data-v-a64d8088>ご本人から自己の個人情報についての開示の請求がある場合、速やかに開示を致します。その際、ご本人であることが確認できない場合には、開示に応じません。</p><p data-v-a64d8088>個人情報の内容に誤りがあり、ご本人から訂正・追加・削除の請求がある場合、調査の上、速やかにこれらの請求に対応致します。その際、ご本人であることが確認できない場合には、これらの請求に応じません。</p><p data-v-a64d8088>当社はお客様の個人情報を適切に保護し、個人情報保護法その他の法令等により認められた場合を除き、お客様の同意なく第三者に提供、開示することはありません。ただし、当社の業務にて必要な範囲において情報を開示する場合もございます。当社の業務外での開示については事前にご本人の同意を得てから開示しております。</p></section></div></div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a64d8088"]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-ivxkSQmY.js.map
