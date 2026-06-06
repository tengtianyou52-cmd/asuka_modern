import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "plan",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "料金プラン - asuka",
      meta: [
        { name: "description", content: "asukaの料金プラン一覧。有在庫会員、無在庫会員、それぞれ無料プランとゴールドプランを用意。大口の方向けの個別カスタムプランも対応可能です。" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-42e3a8c4><h1 class="section-title" data-v-42e3a8c4>料金プラン</h1><p class="section-subtitle" data-v-42e3a8c4> お客様の仕入れ体制（有在庫・無在庫）に合わせて5つのプランをご用意しています。<br data-v-42e3a8c4> ご自身のビジネス規模やニーズに合わせて、最適なプランをご選択ください。 </p><div class="glass-card table-section" data-v-42e3a8c4><div class="table-responsive" data-v-42e3a8c4><table class="premium-table plan-table" data-v-42e3a8c4><thead data-v-42e3a8c4><tr data-v-42e3a8c4><th rowspan="2" class="category-th" data-v-42e3a8c4>プラン内容</th><th colspan="2" class="stock-th text-center" data-v-42e3a8c4>有在庫プラン</th><th colspan="2" class="no-stock-th text-center" data-v-42e3a8c4>無在庫プラン</th><th rowspan="2" class="custom-th text-center" data-v-42e3a8c4>カスタム会員<br data-v-42e3a8c4><span class="th-sub" data-v-42e3a8c4>(条件限定)</span></th></tr><tr data-v-42e3a8c4><th class="sub-th text-center" data-v-42e3a8c4>無料会員</th><th class="sub-th highlight-gold-th text-center" data-v-42e3a8c4>ゴールド会員</th><th class="sub-th text-center" data-v-42e3a8c4>無料会員</th><th class="sub-th highlight-gold-th text-center" data-v-42e3a8c4>ゴールド会員</th></tr></thead><tbody data-v-42e3a8c4><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>月会費</td><td data-v-42e3a8c4>無料</td><td class="gold-highlight-td" data-v-42e3a8c4>19,800円 / 月</td><td data-v-42e3a8c4>無料</td><td class="gold-highlight-td" data-v-42e3a8c4>19,800円 / 月</td><td rowspan="8" class="custom-span-td" data-v-42e3a8c4><div class="custom-info-box" data-v-42e3a8c4><i class="fa-solid fa-comments" data-v-42e3a8c4></i><p data-v-42e3a8c4>お客様の取扱規模や出荷状況をヒアリングさせていただき、最適な作業単価やサービス内容を個別にご相談・決定させていただきます。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary btn-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`個別相談を申し込む`);
          } else {
            return [
              createTextVNode("個別相談を申し込む")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>代行手数料</td><td data-v-42e3a8c4>商品代金の6%<br data-v-42e3a8c4><span class="note" data-v-42e3a8c4>(1万円以下は一律1,000円)</span></td><td class="gold-highlight-td text-primary-color font-bold" data-v-42e3a8c4>無料</td><td data-v-42e3a8c4>15元 / 1件</td><td class="gold-highlight-td text-primary-color font-bold" data-v-42e3a8c4>13元 / 1件</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>為替レート</td><td data-v-42e3a8c4>当日TTS + 0.9円</td><td class="gold-highlight-td text-primary-color font-bold" data-v-42e3a8c4>当日TTS + 0.5円</td><td data-v-42e3a8c4>当日TTS + 0.9円</td><td class="gold-highlight-td text-primary-color font-bold" data-v-42e3a8c4>当日TTS + 0.5円</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>中国国内送料</td><td data-v-42e3a8c4>実費のみ請求</td><td class="gold-highlight-td" data-v-42e3a8c4>実費のみ<br data-v-42e3a8c4><span class="note" data-v-42e3a8c4>(最大限のコストカットを支援)</span></td><td data-v-42e3a8c4>実費のみ請求</td><td class="gold-highlight-td" data-v-42e3a8c4>実費のみ請求</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>商品手配スピード</td><td data-v-42e3a8c4>通常手配</td><td class="gold-highlight-td font-bold" data-v-42e3a8c4>優先手配</td><td data-v-42e3a8c4>通常手配</td><td class="gold-highlight-td font-bold" data-v-42e3a8c4>優先手配</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>ご対応体制</td><td data-v-42e3a8c4>チームサポート</td><td class="gold-highlight-td font-bold" data-v-42e3a8c4>専任担当スタッフによる<br data-v-42e3a8c4>スピード対応</td><td data-v-42e3a8c4>チームサポート</td><td class="gold-highlight-td font-bold" data-v-42e3a8c4>専任担当スタッフによる<br data-v-42e3a8c4>スピード対応</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>OEM・ODM相談</td><td colspan="4" class="text-center" data-v-42e3a8c4>無料相談</td></tr><tr data-v-42e3a8c4><td class="bold-td" data-v-42e3a8c4>FBA納品・商品加工</td><td colspan="4" class="text-center font-bold" data-v-42e3a8c4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/amazon-fba",
        class: "inline-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Amazon FBA専用ページ`);
          } else {
            return [
              createTextVNode("Amazon FBA専用ページ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` ｜ `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/apparel",
        class: "inline-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`アパレル加工専用ページ`);
          } else {
            return [
              createTextVNode("アパレル加工専用ページ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` よりご確認ください。 </td></tr><tr class="action-row" data-v-42e3a8c4><td data-v-42e3a8c4></td><td colspan="2" data-v-42e3a8c4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary w-full text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`有在庫プランを登録`);
          } else {
            return [
              createTextVNode("有在庫プランを登録")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td colspan="2" data-v-42e3a8c4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-secondary w-full text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`無在庫プランを登録`);
          } else {
            return [
              createTextVNode("無在庫プランを登録")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td><td data-v-42e3a8c4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-outline w-full text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`カスタムプランの相談`);
          } else {
            return [
              createTextVNode("カスタムプランの相談")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</td></tr></tbody></table></div></div><div class="payment-section" data-v-42e3a8c4><h2 class="section-title" data-v-42e3a8c4>お支払い方法</h2><p class="section-subtitle" data-v-42e3a8c4>会費やデポジット（前金）、送料のお支払いには以下の決済方法をご利用いただけます。</p><div class="grid-2" data-v-42e3a8c4><div class="glass-card payment-card" data-v-42e3a8c4><div class="payment-header" data-v-42e3a8c4><span class="payment-icon" data-v-42e3a8c4><i class="fa-brands fa-paypal" data-v-42e3a8c4></i></span><h3 data-v-42e3a8c4>オンライン決済</h3></div><p class="payment-desc" data-v-42e3a8c4>クレジットカードやPayPalによる即時決済が可能です。月会費の定期購読にも対応しています。</p><div class="payment-badges" data-v-42e3a8c4><span class="badge" data-v-42e3a8c4>PayPal</span><span class="badge" data-v-42e3a8c4>VISA</span><span class="badge" data-v-42e3a8c4>Mastercard</span><span class="badge" data-v-42e3a8c4>JCB</span><span class="badge" data-v-42e3a8c4>American Express</span></div></div><div class="glass-card payment-card" data-v-42e3a8c4><div class="payment-header" data-v-42e3a8c4><span class="payment-icon" data-v-42e3a8c4><i class="fa-solid fa-building-columns" data-v-42e3a8c4></i></span><h3 data-v-42e3a8c4>銀行振込</h3></div><p class="payment-desc" data-v-42e3a8c4>日本国内の弊社取引銀行口座へのお振込みによる前金チャージ（デポジット）に対応しています。</p><div class="payment-banks" data-v-42e3a8c4><div class="bank-item" data-v-42e3a8c4><span class="bank-name" data-v-42e3a8c4>池田泉州銀行</span></div><div class="bank-item" data-v-42e3a8c4><span class="bank-name" data-v-42e3a8c4>楽天銀行</span></div></div></div></div></div><div class="caution-section glass-card" data-v-42e3a8c4><div class="caution-header" data-v-42e3a8c4><i class="fa-solid fa-triangle-exclamation" data-v-42e3a8c4></i><h3 data-v-42e3a8c4>プラン及び決済に関する注意事項</h3></div><ul class="caution-list" data-v-42e3a8c4><li data-v-42e3a8c4><span class="bullet" data-v-42e3a8c4><i class="fa-solid fa-circle-chevron-right" data-v-42e3a8c4></i></span><p data-v-42e3a8c4>通関時に発生する関税および国内の輸入消費税は、配送業者からの請求、または税関へ直接お客様自身でお支払いください。</p></li><li data-v-42e3a8c4><span class="bullet" data-v-42e3a8c4><i class="fa-solid fa-circle-chevron-right" data-v-42e3a8c4></i></span><p data-v-42e3a8c4>各商品の関税率などは弊社では判断いたしかねます。恐れ入りますが事前にお客様ご自身で税関へお問い合わせください。</p></li><li data-v-42e3a8c4><span class="bullet" data-v-42e3a8c4><i class="fa-solid fa-circle-chevron-right" data-v-42e3a8c4></i></span><p data-v-42e3a8c4>銀行振込にかかる手数料はお客様にてご負担をお願い申し上げます。</p></li><li data-v-42e3a8c4><span class="bullet" data-v-42e3a8c4><i class="fa-solid fa-circle-chevron-right" data-v-42e3a8c4></i></span><p data-v-42e3a8c4>クレジットカードおよびPayPalによるお支払いの場合は、決済手数料として一律 <strong data-v-42e3a8c4>3.6% + 40円</strong> が加算されますのでご了承ください。</p></li></ul></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const plan = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42e3a8c4"]]);
export {
  plan as default
};
//# sourceMappingURL=plan-D9rYu9AU.js.map
