import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { u as useHead } from "./v3-gZWcuvll.js";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ofetch/dist/node.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/hookable/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/unctx/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/defu/dist/defu.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ufo/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-cbb627a4><div class="hero-bg-overlay" data-v-cbb627a4></div><div class="hero-container container" data-v-cbb627a4><div class="hero-content animate-fade-in-up" data-v-cbb627a4><span class="hero-tag" data-v-cbb627a4>中国輸入・アパレル流通の自動化をサポート</span><h1 class="hero-title" data-v-cbb627a4> 中国輸入ビジネスを、<br data-v-cbb627a4><span class="highlight" data-v-cbb627a4>もっとスマートに。</span></h1><p class="hero-desc" data-v-cbb627a4> asuka（アスカ）は、タオバオやアリババでの商品買い付け代行、検品・オリジナル梱包、アパレル無在庫販売の発送代行からAmazon FBA納品まで、あらゆる輸入ビジネスをトータルサポートする信頼のパートナーです。 </p><div class="hero-actions" data-v-cbb627a4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/flow",
    class: "btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 代行の流れ <i class="fa-solid fa-arrow-right" data-v-cbb627a4${_scopeId}></i>`);
      } else {
        return [
          createTextVNode(" 代行の流れ "),
          createVNode("i", { class: "fa-solid fa-arrow-right" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/plan",
    class: "btn-secondary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 料金プランを見る `);
      } else {
        return [
          createTextVNode(" 料金プランを見る ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="hero-graphics animate-fade-in-up" data-v-cbb627a4>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/plan",
    class: "glass-badge badge-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="badge-icon" data-v-cbb627a4${_scopeId}><i class="fa-solid fa-bolt" data-v-cbb627a4${_scopeId}></i></div><div class="badge-txt" data-v-cbb627a4${_scopeId}><span class="badge-title" data-v-cbb627a4${_scopeId}>デポジット高速プラン</span><span class="badge-sub" data-v-cbb627a4${_scopeId}>買い付け・発送を最速化</span></div>`);
      } else {
        return [
          createVNode("div", { class: "badge-icon" }, [
            createVNode("i", { class: "fa-solid fa-bolt" })
          ]),
          createVNode("div", { class: "badge-txt" }, [
            createVNode("span", { class: "badge-title" }, "デポジット高速プラン"),
            createVNode("span", { class: "badge-sub" }, "買い付け・発送を最速化")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/apparel",
    class: "glass-badge badge-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="badge-icon" data-v-cbb627a4${_scopeId}><i class="fa-solid fa-tags" data-v-cbb627a4${_scopeId}></i></div><div class="badge-txt" data-v-cbb627a4${_scopeId}><span class="badge-title" data-v-cbb627a4${_scopeId}>アパレル加工対応</span><span class="badge-sub" data-v-cbb627a4${_scopeId}>紙タグ交換・検針・OPP</span></div>`);
      } else {
        return [
          createVNode("div", { class: "badge-icon" }, [
            createVNode("i", { class: "fa-solid fa-tags" })
          ]),
          createVNode("div", { class: "badge-txt" }, [
            createVNode("span", { class: "badge-title" }, "アパレル加工対応"),
            createVNode("span", { class: "badge-sub" }, "紙タグ交換・検針・OPP")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/shipping",
    class: "glass-badge badge-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="badge-icon" data-v-cbb627a4${_scopeId}><i class="fa-solid fa-circle-check" data-v-cbb627a4${_scopeId}></i></div><div class="badge-txt" data-v-cbb627a4${_scopeId}><span class="badge-title" data-v-cbb627a4${_scopeId}>業界最安水準</span><span class="badge-sub" data-v-cbb627a4${_scopeId}>為替TTS + 0.5円・手数料無料〜</span></div>`);
      } else {
        return [
          createVNode("div", { class: "badge-icon" }, [
            createVNode("i", { class: "fa-solid fa-circle-check" })
          ]),
          createVNode("div", { class: "badge-txt" }, [
            createVNode("span", { class: "badge-title" }, "業界最安水準"),
            createVNode("span", { class: "badge-sub" }, "為替TTS + 0.5円・手数料無料〜")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PictureArea.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cbb627a4"]]);
const _imports_0 = publicAssetsURL("/img/Charts.gif");
const _imports_1 = publicAssetsURL("/img/Charity market.gif");
const _imports_2 = publicAssetsURL("/img/Charts (1).gif");
const _imports_3 = publicAssetsURL("/img/Container ship.gif");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "asuka - 中国輸入代行・タオバオアリババ代行・アパレル加工流通",
      meta: [
        { name: "description", content: "中国からの輸入代行ならasuka（アスカ）へ。タオバオ・アリババでの買い付け代行、アパレル商品加工・タグ付け、Amazon FBA納品までを日本人スタッフが徹底サポートします。" }
      ]
    });
    const planMode = ref("stock");
    const hoveredPlan = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PictureArea = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page animate-fade-in-up" }, _attrs))} data-v-88800708>`);
      _push(ssrRenderComponent(_component_PictureArea, null, null, _parent));
      _push(`<div class="container page-content" data-v-88800708><section class="page-section" data-v-88800708><h2 class="section-title" data-v-88800708>主なサービス内容</h2><p class="section-subtitle" data-v-88800708>中国輸入代行から検品・加工・個別配送・FBA納品まで、お客様のご要望に合わせた3つの基幹サービスを提供します。</p><div class="grid-3" data-v-88800708>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/flow",
        class: "glass-card service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="service-icon" data-v-88800708${_scopeId}><i class="fa-solid fa-cart-shopping" data-v-88800708${_scopeId}></i></div><h3 data-v-88800708${_scopeId}>タオバオ・アリババ代行</h3><p data-v-88800708${_scopeId}>中国の2大ECプラットフォームからの買い付け・検品・国際発送をフルサポート。初めての方でも日本人スタッフが安心サポートします。</p><span class="card-link" data-v-88800708${_scopeId}>代行の流れを見る <i class="fa-solid fa-chevron-right" data-v-88800708${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("div", { class: "service-icon" }, [
                createVNode("i", { class: "fa-solid fa-cart-shopping" })
              ]),
              createVNode("h3", null, "タオバオ・アリババ代行"),
              createVNode("p", null, "中国の2大ECプラットフォームからの買い付け・検品・国際発送をフルサポート。初めての方でも日本人スタッフが安心サポートします。"),
              createVNode("span", { class: "card-link" }, [
                createTextVNode("代行の流れを見る "),
                createVNode("i", { class: "fa-solid fa-chevron-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/apparel",
        class: "glass-card service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="service-icon" data-v-88800708${_scopeId}><i class="fa-solid fa-shirt" data-v-88800708${_scopeId}></i></div><h3 data-v-88800708${_scopeId}>アパレル加工・無在庫支援</h3><p data-v-88800708${_scopeId}>アパレル商品のタグ交換、個別検品、OPP袋入れ替え、防湿剤同封など、無在庫販売（ドロップシッピング）に不可欠な高品質流通加工を行います。</p><span class="card-link" data-v-88800708${_scopeId}>加工サービス詳細 <i class="fa-solid fa-chevron-right" data-v-88800708${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("div", { class: "service-icon" }, [
                createVNode("i", { class: "fa-solid fa-shirt" })
              ]),
              createVNode("h3", null, "アパレル加工・無在庫支援"),
              createVNode("p", null, "アパレル商品のタグ交換、個別検品、OPP袋入れ替え、防湿剤同封など、無在庫販売（ドロップシッピング）に不可欠な高品質流通加工を行います。"),
              createVNode("span", { class: "card-link" }, [
                createTextVNode("加工サービス詳細 "),
                createVNode("i", { class: "fa-solid fa-chevron-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/amazon-fba",
        class: "glass-card service-card"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="service-icon" data-v-88800708${_scopeId}><i class="fa-brands fa-amazon" data-v-88800708${_scopeId}></i></div><h3 data-v-88800708${_scopeId}>Amazon FBA納品サービス</h3><p data-v-88800708${_scopeId}>買い付けた商品を中国国内でセット組み・ラベル貼り・梱包し、直接日本のAmazon FBA倉庫へ納品。業務自動化とコスト削減を実現します。</p><span class="card-link" data-v-88800708${_scopeId}>FBA納品詳細 <i class="fa-solid fa-chevron-right" data-v-88800708${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("div", { class: "service-icon" }, [
                createVNode("i", { class: "fa-brands fa-amazon" })
              ]),
              createVNode("h3", null, "Amazon FBA納品サービス"),
              createVNode("p", null, "買い付けた商品を中国国内でセット組み・ラベル貼り・梱包し、直接日本のAmazon FBA倉庫へ納品。業務自動化とコスト削減を実現します。"),
              createVNode("span", { class: "card-link" }, [
                createTextVNode("FBA納品詳細 "),
                createVNode("i", { class: "fa-solid fa-chevron-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="page-section bg-gradient-section" data-v-88800708><h2 class="section-title" data-v-88800708>他社とのコスト比較</h2><p class="section-subtitle" data-v-88800708>asukaは「為替レート」と「中国国内送料の実費請求」にこだわり、トータルコストで業界最安水準に挑戦しています。</p><div class="comparison-grid" data-v-88800708><div class="comparison-info" data-v-88800708><div class="premium-badge" data-v-88800708>トータルコストで大きな差がでます</div><p class="comparison-desc" data-v-88800708> 代行手数料が「無料」と謳っていても、為替レートに高額な上乗せ（+1円など）があったり、中国国内送料を不当に高く請求されるケースが多々あります。<br data-v-88800708><strong data-v-88800708>asukaはゴールド会員なら為替TTS + 0.5円、手数料無料、国内送料は実費のみの請求です。</strong></p><div class="comparison-chart-box" data-v-88800708><img${ssrRenderAttr("src", _imports_0)} alt="コスト削減比較グラフ" class="comparison-gif" data-v-88800708></div></div><div class="table-responsive" data-v-88800708><div class="table-caption" data-v-88800708> 【シミュレーション条件】 為替レート：1元＝18円想定、商品代金30,000元、重量200kgの場合 </div><table class="premium-table comparison-table" data-v-88800708><thead data-v-88800708><tr data-v-88800708><th data-v-88800708>項目</th><th data-v-88800708>A社 (手数料無料型)</th><th data-v-88800708>B社 (手数料有料型)</th><th class="highlight-th" data-v-88800708>当社 (ゴールド会員)</th></tr></thead><tbody data-v-88800708><tr data-v-88800708><td class="bold-td" data-v-88800708>為替レート</td><td data-v-88800708>TTS ＋ 1円</td><td data-v-88800708>TTS ＋ 1円</td><td class="highlight-td" data-v-88800708>TTS ＋ 0.5円</td></tr><tr data-v-88800708><td class="bold-td" data-v-88800708>商品代金 (人民元)</td><td data-v-88800708>30,000元</td><td data-v-88800708>30,000元</td><td class="highlight-td" data-v-88800708>30,000元</td></tr><tr data-v-88800708><td class="bold-td" data-v-88800708>商品代金 (日本円)</td><td data-v-88800708>570,000円</td><td data-v-88800708>570,000円</td><td class="highlight-td text-primary-color" data-v-88800708>555,000円</td></tr><tr data-v-88800708><td class="bold-td" data-v-88800708>代行手数料</td><td data-v-88800708>無料</td><td data-v-88800708>7%（39,900円）</td><td class="highlight-td text-primary-color" data-v-88800708>無料</td></tr><tr data-v-88800708><td class="bold-td" data-v-88800708>中国国内送料</td><td data-v-88800708>5,000元（95,000円）</td><td data-v-88800708>4,500元（85,500円）</td><td class="highlight-td text-primary-color" data-v-88800708>3,000元（55,500円）<span class="note" data-v-88800708>*実費のみ</span></td></tr><tr data-v-88800708><td class="bold-td" data-v-88800708>国際送料</td><td data-v-88800708>3,400元（64,600円）</td><td data-v-88800708>4,400元（83,600円）</td><td class="highlight-td" data-v-88800708>3,400元（62,900円）</td></tr><tr class="total-row" data-v-88800708><td class="bold-td" data-v-88800708>合計コスト</td><td class="text-through" data-v-88800708>729,600円</td><td class="text-through" data-v-88800708>779,000円</td><td class="highlight-total" data-v-88800708>673,400円</td></tr></tbody></table><div class="savings-alert" data-v-88800708><i class="fa-solid fa-circle-check" data-v-88800708></i> 他社に比べ <strong data-v-88800708>56,200円 〜 105,600円</strong> のコスト削減が可能です！ </div></div></div></section><section class="page-section" data-v-88800708><h2 class="section-title" data-v-88800708>asukaが選ばれる理由</h2><p class="section-subtitle" data-v-88800708>日本人スタッフによる万全のサポート体制と、ムダを徹底排除した自社一貫物流システム。</p><div class="strengths-container" data-v-88800708><div class="strengths-graphics" data-v-88800708><img${ssrRenderAttr("src", _imports_1)} alt="サポートイメージ" class="strength-gif" data-v-88800708><div class="gifs-row" data-v-88800708><img${ssrRenderAttr("src", _imports_2)} alt="分析イメージ" class="strength-gif-sm" data-v-88800708><img${ssrRenderAttr("src", _imports_3)} alt="国際物流イメージ" class="strength-gif-sm" data-v-88800708></div></div><div class="strengths-list" data-v-88800708><div class="strength-item-card" data-v-88800708><span class="strength-num" data-v-88800708>01</span><div data-v-88800708><h4 data-v-88800708>業界最安水準の国際送料・選べる配送ルート</h4><p data-v-88800708>OCS、流通王、快速船便、電池特殊ルートなど複数の配送ラインと提携。荷姿やスピードに応じて最適な送料カットを提案します。</p></div></div><div class="strength-item-card" data-v-88800708><span class="strength-num" data-v-88800708>02</span><div data-v-88800708><h4 data-v-88800708>日本人スタッフによる迅速なサポート</h4><p data-v-88800708>現地駐在の日本人スタッフが買い付け・検品指示を直接管理。電話やチャット（Chatwork等）での対応により、細かな要望やトラブル対応もスムーズです。</p></div></div><div class="strength-item-card" data-v-88800708><span class="strength-num" data-v-88800708>03</span><div data-v-88800708><h4 data-v-88800708>独自システムによる業務効率化</h4><p data-v-88800708>受注から梱包、発送精算までを管理する自社独自システムを導入。ミスを防ぎ、ビジネスのスピードを大幅にアップさせます。</p></div></div><div class="strength-item-card" data-v-88800708><span class="strength-num" data-v-88800708>04</span><div data-v-88800708><h4 data-v-88800708>無在庫販売・個別加工の手数料が圧倒的低価格</h4><p data-v-88800708>アパレル商品のタグ付け替え、洗濯ラベル縫い直し、オリジナルOPP袋の作成など、競合他社と比較して圧倒的な安さで個別作業を承ります。</p></div></div></div></div></section><section class="page-section bg-gradient-section border-radius-section" data-v-88800708><h2 class="section-title" data-v-88800708>5種類の選べるプラン</h2><p class="section-subtitle" data-v-88800708>お客様の月間取扱量や発送体制（有在庫・無在庫・大口カスタム）に応じて、最適なプランをご選択いただけます。</p><div class="plan-toggle-wrap" data-v-88800708><button class="${ssrRenderClass([{ active: unref(planMode) === "stock" }, "plan-toggle-btn"])}" data-v-88800708><i class="fa-solid fa-boxes-stacked" data-v-88800708></i> 有在庫 </button><button class="${ssrRenderClass([{ active: unref(planMode) === "nostock" }, "plan-toggle-btn"])}" data-v-88800708><i class="fa-solid fa-truck-fast" data-v-88800708></i> 無在庫（ドロップシッピング） </button></div><div class="plans-grid" data-v-88800708><div class="${ssrRenderClass([{ "plan-card--active": unref(hoveredPlan) === "free" }, "plan-card glass-card"])}" data-v-88800708><div class="plan-card-header" data-v-88800708><span class="plan-label" data-v-88800708>無料会員</span><div class="plan-price" data-v-88800708><span class="plan-price-tag" data-v-88800708>無料</span><span class="plan-price-sub" data-v-88800708>月会費 0円</span></div></div><ul class="plan-features" data-v-88800708><li data-v-88800708><span class="feat-icon" data-v-88800708><i class="fa-solid fa-percent" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>代行手数料</strong><br data-v-88800708>`);
      if (unref(planMode) === "stock") {
        _push(`<!--[-->商品代金の6%（1万円以下一律1,000円）<!--]-->`);
      } else {
        _push(`<!--[-->15元 / 1件<!--]-->`);
      }
      _push(`</span></li><li data-v-88800708><span class="feat-icon" data-v-88800708><i class="fa-solid fa-yen-sign" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>為替レート</strong><br data-v-88800708>当日TTS + 0.9円</span></li><li data-v-88800708><span class="feat-icon" data-v-88800708><i class="fa-solid fa-truck" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>中国国内送料</strong><br data-v-88800708>実費のみ請求</span></li><li data-v-88800708><span class="feat-icon" data-v-88800708><i class="fa-solid fa-headset" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>サポート体制</strong><br data-v-88800708>チームサポート</span></li><li data-v-88800708><span class="feat-icon" data-v-88800708><i class="fa-solid fa-bolt" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>商品手配</strong><br data-v-88800708>通常手配</span></li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "plan-cta btn-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`無料で始める`);
          } else {
            return [
              createTextVNode("無料で始める")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "plan-card--active": unref(hoveredPlan) === "gold" }, "plan-card plan-card--gold glass-card"])}" data-v-88800708><div class="plan-popular-badge" data-v-88800708><i class="fa-solid fa-star" data-v-88800708></i> 人気No.1</div><div class="plan-card-header" data-v-88800708><span class="plan-label plan-label--gold" data-v-88800708>ゴールド会員</span><div class="plan-price" data-v-88800708><span class="plan-price-tag plan-price-tag--gold" data-v-88800708>¥19,800<small data-v-88800708>/月</small></span><span class="plan-price-sub" data-v-88800708>税込み</span></div></div><ul class="plan-features" data-v-88800708><li class="feat-highlight" data-v-88800708><span class="feat-icon feat-icon--gold" data-v-88800708><i class="fa-solid fa-gift" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>代行手数料</strong><br data-v-88800708>`);
      if (unref(planMode) === "stock") {
        _push(`<span class="highlight-text" data-v-88800708>無料！</span>`);
      } else {
        _push(`<span class="highlight-text" data-v-88800708>13元 / 1件</span>`);
      }
      _push(`</span></li><li class="feat-highlight" data-v-88800708><span class="feat-icon feat-icon--gold" data-v-88800708><i class="fa-solid fa-yen-sign" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>為替レート</strong><br data-v-88800708><span class="highlight-text" data-v-88800708>当日TTS + 0.5円</span></span></li><li data-v-88800708><span class="feat-icon feat-icon--gold" data-v-88800708><i class="fa-solid fa-truck" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>中国国内送料</strong><br data-v-88800708>実費のみ（最大限コストカット支援）</span></li><li class="feat-highlight" data-v-88800708><span class="feat-icon feat-icon--gold" data-v-88800708><i class="fa-solid fa-headset" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>サポート体制</strong><br data-v-88800708><span class="highlight-text" data-v-88800708>専任担当スタッフ優先対応</span></span></li><li class="feat-highlight" data-v-88800708><span class="feat-icon feat-icon--gold" data-v-88800708><i class="fa-solid fa-bolt" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>商品手配</strong><br data-v-88800708><span class="highlight-text" data-v-88800708>優先手配</span></span></li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "plan-cta btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ゴールドに申し込む`);
          } else {
            return [
              createTextVNode("ゴールドに申し込む")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([{ "plan-card--active": unref(hoveredPlan) === "custom" }, "plan-card plan-card--custom glass-card"])}" data-v-88800708><div class="plan-card-header" data-v-88800708><span class="plan-label plan-label--custom" data-v-88800708>カスタム会員</span><div class="plan-price" data-v-88800708><span class="plan-price-tag plan-price-tag--custom" data-v-88800708>要相談</span><span class="plan-price-sub" data-v-88800708>大口・法人向け特別プラン</span></div></div><ul class="plan-features" data-v-88800708><li data-v-88800708><span class="feat-icon feat-icon--custom" data-v-88800708><i class="fa-solid fa-sliders" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>代行手数料・為替レート</strong><br data-v-88800708>取引量に応じた個別設定</span></li><li data-v-88800708><span class="feat-icon feat-icon--custom" data-v-88800708><i class="fa-solid fa-comments" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>サポート体制</strong><br data-v-88800708>専任スタッフ + 専用管理ページ</span></li><li data-v-88800708><span class="feat-icon feat-icon--custom" data-v-88800708><i class="fa-solid fa-gem" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>OEM/ODM相談</strong><br data-v-88800708>無料相談・仕入れ先紹介対応</span></li><li data-v-88800708><span class="feat-icon feat-icon--custom" data-v-88800708><i class="fa-solid fa-file-invoice" data-v-88800708></i></span><span data-v-88800708><strong data-v-88800708>決済・請求</strong><br data-v-88800708>月次まとめ請求など柔軟対応</span></li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "plan-cta btn-custom"
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
      _push(`</div></div><div class="plans-common-row" data-v-88800708><span class="common-badge" data-v-88800708><i class="fa-solid fa-check-circle" data-v-88800708></i> 全プラン共通：OEM/ODM無料相談</span><span class="common-badge" data-v-88800708><i class="fa-solid fa-check-circle" data-v-88800708></i> Amazon FBA・アパレル加工対応</span><span class="common-badge" data-v-88800708><i class="fa-solid fa-check-circle" data-v-88800708></i> 中国国内送料は実費のみ</span></div><div class="plans-footer-link" data-v-88800708>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/plan",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-table" data-v-88800708${_scopeId}></i> 料金プランの全詳細を見る `);
          } else {
            return [
              createVNode("i", { class: "fa-solid fa-table" }),
              createTextVNode(" 料金プランの全詳細を見る ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="page-section cta-section text-center animate-fade-in-up" data-v-88800708><div class="glass-card cta-card" data-v-88800708><div class="cta-icon" data-v-88800708><i class="fa-solid fa-handshake-angle" data-v-88800708></i></div><h2 data-v-88800708>まずは一度、お試しください！</h2><p data-v-88800708> 日本人スタッフが買い付け交渉から物流手配まで迅速・丁寧に対応いたします。<br data-v-88800708> 新規会員登録、またはサービス内容に関するご質問・個別のご相談はお気軽にお問い合わせください。 </p><div class="cta-buttons" data-v-88800708>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary btn-large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-envelope" data-v-88800708${_scopeId}></i> お問い合わせはこちら `);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-envelope" }),
              createTextVNode(" お問い合わせはこちら ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/qa",
        class: "btn-secondary btn-large"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` よくある質問 (Q&amp;A) を見る `);
          } else {
            return [
              createTextVNode(" よくある質問 (Q&A) を見る ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-88800708"]]);
export {
  index as default
};
//# sourceMappingURL=index-RvEWHeID.js.map
