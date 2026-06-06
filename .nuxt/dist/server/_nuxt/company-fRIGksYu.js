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
  __name: "company",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "会社概要 - asuka",
      meta: [
        { name: "description", content: "株式会社重錦倖の会社概要。大阪本社の情報、中国（浙江省義烏、北京）のグローバル拠点網、代表者、取引銀行、事業内容をご紹介します。" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheSidebar = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-8483fedf><div class="layout-with-sidebar" data-v-8483fedf>`);
      _push(ssrRenderComponent(_component_TheSidebar, { class: "page-sidebar" }, null, _parent));
      _push(`<main class="page-main-content animate-fade-in-up" data-v-8483fedf><h1 class="page-title" data-v-8483fedf>会社概要</h1><p class="page-subtitle" data-v-8483fedf>株式会社重錦倖（asuka）の企業情報・グローバル体制についてご紹介します。</p><div class="glass-card info-card" data-v-8483fedf><table class="profile-table" data-v-8483fedf><tbody data-v-8483fedf><tr data-v-8483fedf><th data-v-8483fedf>社名</th><td data-v-8483fedf>株式会社重錦倖 <span class="en-sub" data-v-8483fedf>(Jukin倖 Co., Ltd.)</span></td></tr><tr data-v-8483fedf><th data-v-8483fedf>本社所在地</th><td data-v-8483fedf>〒596-0803 大阪府岸和田市松風町14-15</td></tr><tr data-v-8483fedf><th data-v-8483fedf>設立年月日</th><td data-v-8483fedf>2019年 4月 24日</td></tr><tr data-v-8483fedf><th data-v-8483fedf>資本金</th><td data-v-8483fedf>500万円</td></tr><tr data-v-8483fedf><th data-v-8483fedf>代表者取締役社長</th><td data-v-8483fedf>向 莉苹</td></tr><tr data-v-8483fedf><th data-v-8483fedf>電話番号</th><td data-v-8483fedf>072-479-6355</td></tr><tr data-v-8483fedf><th data-v-8483fedf>E-mail</th><td data-v-8483fedf>info@aska-daikou.com</td></tr><tr data-v-8483fedf><th data-v-8483fedf>取引銀行</th><td data-v-8483fedf><ul data-v-8483fedf><li data-v-8483fedf>池田泉州銀行</li><li data-v-8483fedf>楽天銀行</li></ul></td></tr><tr data-v-8483fedf><th data-v-8483fedf>事業内容</th><td data-v-8483fedf><ul data-v-8483fedf><li data-v-8483fedf>中国輸入サポート事業 (asuka)</li><li data-v-8483fedf>貿易関連事業</li><li data-v-8483fedf>飲食事業</li></ul></td></tr></tbody></table></div><h2 class="sub-section-title" data-v-8483fedf>グローバル拠点</h2><div class="locations-grid" data-v-8483fedf><div class="location-card glass-card" data-v-8483fedf><span class="loc-icon" data-v-8483fedf><i class="fa-solid fa-hotel" data-v-8483fedf></i></span><h4 data-v-8483fedf>大阪本社</h4><p class="loc-tag" data-v-8483fedf>Head Office</p><p class="loc-desc" data-v-8483fedf>日本国内のお客様窓口およびカスタマーサポートを統括。輸入・検品・発送の全体管理を行います。</p></div><div class="location-card glass-card" data-v-8483fedf><span class="loc-icon" data-v-8483fedf><i class="fa-solid fa-warehouse" data-v-8483fedf></i></span><h4 data-v-8483fedf>浙江省義烏事務所 ＆ 倉庫</h4><p class="loc-tag" data-v-8483fedf>Yiwu Logistics Hub</p><p class="loc-desc" data-v-8483fedf>世界最大の雑貨卸売市場がある義烏（イーウー）に自社物流倉庫を設置。スピーディーな買い付け・検品加工が可能です。</p></div><div class="location-card glass-card" data-v-8483fedf><span class="loc-icon" data-v-8483fedf><i class="fa-solid fa-building" data-v-8483fedf></i></span><h4 data-v-8483fedf>北京事務所</h4><p class="loc-tag" data-v-8483fedf>Beijing Office</p><p class="loc-desc" data-v-8483fedf>現地の工場・メーカーとの直接交渉やOEM製品の品質管理、契約交渉の中核を担います。</p></div></div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/company.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const company = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8483fedf"]]);
export {
  company as default
};
//# sourceMappingURL=company-fRIGksYu.js.map
