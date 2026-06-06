import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "sidebar-card" }, _attrs))} data-v-6113c0f0><span class="sidebar-title" data-v-6113c0f0>MENU</span><ul class="sidebar-links" data-v-6113c0f0><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-house" data-v-6113c0f0${_scopeId}></i> HOME `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-house" }),
          createTextVNode(" HOME ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/plan",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-credit-card" data-v-6113c0f0${_scopeId}></i> 料金プラン `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-credit-card" }),
          createTextVNode(" 料金プラン ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/flow",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-road" data-v-6113c0f0${_scopeId}></i> 代行の流れ `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-road" }),
          createTextVNode(" 代行の流れ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/shipping",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-ship" data-v-6113c0f0${_scopeId}></i> 国際送料 `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-ship" }),
          createTextVNode(" 国際送料 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/amazon-fba",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-box-open" data-v-6113c0f0${_scopeId}></i> Amazon FBA `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-box-open" }),
          createTextVNode(" Amazon FBA ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/apparel",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-shirt" data-v-6113c0f0${_scopeId}></i> アパレル加工・無在庫 `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-shirt" }),
          createTextVNode(" アパレル加工・無在庫 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/oem-odm",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-industry" data-v-6113c0f0${_scopeId}></i> OEM・ODM `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-industry" }),
          createTextVNode(" OEM・ODM ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/company",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-circle-info" data-v-6113c0f0${_scopeId}></i> 企業情報 `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-circle-info" }),
          createTextVNode(" 企業情報 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-file-contract" data-v-6113c0f0${_scopeId}></i> ご利用規約 `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-file-contract" }),
          createTextVNode(" ご利用規約 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-shield-halved" data-v-6113c0f0${_scopeId}></i> プライバシーポリシー `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-shield-halved" }),
          createTextVNode(" プライバシーポリシー ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/qa",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-circle-question" data-v-6113c0f0${_scopeId}></i> Q＆A `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-circle-question" }),
          createTextVNode(" Q＆A ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-6113c0f0>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "sidebar-link",
    "active-class": "active"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fa-solid fa-envelope" data-v-6113c0f0${_scopeId}></i> お問い合わせ `);
      } else {
        return [
          createVNode("i", { class: "fa-solid fa-envelope" }),
          createTextVNode(" お問い合わせ ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></aside>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6113c0f0"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=TheSidebar-yflW6J9S.js.map
