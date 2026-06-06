import { _ as __nuxt_component_0 } from "./TheSidebar-yflW6J9S.js";
import { _ as _export_sfc, a as __nuxt_component_0$1 } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/hookable/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/unctx/dist/index.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/defu/dist/defu.mjs";
import "C:/Users/yuma/Desktop/asuka-modern/node_modules/ufo/dist/index.mjs";
const _sfc_main = {
  __name: "qa",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    const qaData = ref([
      {
        name: "会員登録について",
        icon: "fa-solid fa-address-card",
        items: [
          {
            q: "新規会員登録はどうすればいいですか？",
            a: "まずはお問い合わせ・お申し込みフォームより必要事項をご記入のうえ、ご希望の会員種類をお選びください。システムログイン用のアカウント設定をご案内します。",
            open: false
          },
          {
            q: "会員登録後すぐに利用できますか？",
            a: "会員登録後、弊社システムにてアカウント登録およびセットアップを行いますので、最短1営業日〜数営業日お時間を頂戴しております。準備が整い次第ログイン情報をお送りします。",
            open: false
          },
          {
            q: "会員はすべて有料ですか？",
            a: "いいえ、無料会員プランもご用意しております。仕入れの規模や体制に合わせて、「無料会員」「ゴールド会員」からご自身に最適なプランをご選択ください。",
            open: false
          },
          {
            q: "無料会員から有料会員に切り替えられますか？",
            a: "もちろん可能でございます。まずは無料会員で弊社の手配スピードやシステム操作感をお試しいただき、サービスにご納得いただいてからゴールド会員へ切り替えることをお勧めいたします。",
            open: false
          },
          {
            q: "プレミアムプラン（ゴールド会員）のお試し期間とサービス内容を教えて下さい。",
            a: "お試し期間は1カ月間となっており、この期間内も通常ゴールド会員が利用できる「代行手数料無料」「為替レート上乗せ緩和 (TTS + 0.5円)」「専任スタッフ対応」などのすべてのプレミアム特典をご利用いただけます。",
            open: false
          },
          {
            q: "有料会員の解約はどうすればいいですか？",
            a: "解約希望の旨をチャットワークまたはメールにて弊社担当までご連絡のうえ、PayPalの定期購読設定を解除していただければ、即座に無料会員プランへランクを切り替えさせていただきます。",
            open: false
          }
        ]
      },
      {
        name: "お支払いについて",
        icon: "fa-solid fa-credit-card",
        items: [
          {
            q: "会費のお支払いはどうすればいいですか？",
            a: "有料会員（ゴールドプラン）の会費のお支払いはPayPalによる自動決済を利用しております。PayPalのアカウントをご登録のうえ、定期購読設定を行ってください。",
            open: false
          },
          {
            q: "商品代金、送料等のお支払いはどうすればいいですか？",
            a: "お支払いはクレジットカード（PayPal決済）または日本国内口座への銀行振込（池田泉州銀行・楽天銀行）をご利用いただけます。",
            open: false
          }
        ]
      },
      {
        name: "ご注文について",
        icon: "fa-solid fa-cart-flatbed",
        items: [
          {
            q: "注文方法はどうすればいいですか？",
            a: "弊社システムへログイン後、ご希望の買い付け商品のURLやサイズ、色、数量等を専用オーダーシートにご記入いただき、送信・ご注文をお願いいたします。",
            open: false
          },
          {
            q: "注文前に見積りしていただけますか？",
            a: "通常の買い付け代行では、事前見積もりは承っておりません。システム上の注文シートに入力いただくと自動的に概算金額が算出されます。なお、オリジナル商品（OEM・ODM）の製造については、都度個別に見積もり書を発行いたします。",
            open: false
          },
          {
            q: "注文の進捗状況を確認できますか？",
            a: "はい、弊社管理システムを通じて、「買い付け中」「中国倉庫到着」「検品中」「国際発送済み（追跡番号）」などの手配状況をリアルタイムでご確認いただけます。",
            open: false
          },
          {
            q: "注文のキャンセルはできますか？",
            a: "弊社から現地のショップへ発注手続きを行う前の段階であれば、キャンセル可能でございます。発注後は店舗側がキャンセルを受け付けないため、変更・キャンセルがある場合はなるべく早くご連絡ください。",
            open: false
          },
          {
            q: "追加注文は可能ですか？",
            a: "可能でございます。追加品数が少ない場合は既存のオーダーシートに追加指示をいただければ問題ありません。品数が多い場合は、新規注文として別シートをご作成ください。事前に十分なデポジットをお預けいただくことで、手配が非常にスムーズに進みます。",
            open: false
          },
          {
            q: "商品はいつ届きますか？",
            a: "ご注文内容や店舗の出荷スピード、輸送ルートによって異なりますが、通常の航空便であれば何も問題がない場合、発注から平均1週間〜10日程度でお手元にお届けしております。",
            open: false
          }
        ]
      },
      {
        name: "商品・検品について",
        icon: "fa-solid fa-magnifying-glass-chart",
        items: [
          {
            q: "簡易検品の検品内容を教えて下さい。",
            a: "通常料金に含まれる簡易検品（外観検査）では、入荷した全商品の数量、カラー、サイズがオーダーシートと合致しているか、またパッケージを開封せずに外側から目視で確認できる大きな破損や著しい汚れがないかを確認します。より細かい動作チェックやアパレル縫製チェックを希望される場合は詳細検品をご指定ください。",
            open: false
          },
          {
            q: "詳細検品について教えて下さい。",
            a: "商品パッケージを開封し、手作業にて製品の細部まで汚れ、ほつれ、傷、破損等をチェックします。アパレル製品の特有のチェック指示や重点検品箇所がございましたら、あらかじめシートに細かな指示をご記載いただくことで、ご指示に沿って検品を行います。",
            open: false
          },
          {
            q: "返品はできますか？",
            a: "中国倉庫での検品時に不良が見つかった場合、店舗側へ交換・返品の交渉を代理で行います。ただし、現地の商習慣上、軽微なほつれや水洗いで落ちる程度の汚れは不良品として返品を認めない店舗が多いため、あらかじめご了承ください。",
            open: false
          },
          {
            q: "不良品があった場合はどうすればいいですか？",
            a: "万が一、日本への到着後に不良品が見つかった場合は速やかに担当スタッフまでご連絡ください。ショップ側と交渉を試みますが、中国の店舗は発送から日数が経過している場合や開封後の返品交渉に応じないケースが非常に多いため、可能な限り有償の詳細検品をご利用いただき、中国国内にあるうちに解決することをお勧めします。",
            open: false
          },
          {
            q: "到着商品に不足が発生したら？",
            a: "出荷履歴と現地の在庫ログを調査いたしますので、外箱の画像および到着時の梱包状況を撮影いただき、速やかに担当スタッフまでチャットワークにてご連絡ください。",
            open: false
          },
          {
            q: "到着した商品が破損していた場合はどうすればいいですか？",
            a: "配送会社による輸送中の事故が疑われる場合、配送会社より補償を受けられることがございます。外箱と商品の破損状態を保持したまま、直接配送会社へ事故申告をお願いいたします。なお、商品の外箱（化粧箱）の潰れについては国際輸送の特性上、補償対象外となりますのでご了承ください。",
            open: false
          }
        ]
      },
      {
        name: "OEM・ODM・オリジナル商品製造について",
        icon: "fa-solid fa-industry",
        items: [
          {
            q: "どんな商品の製造が可能ですか？",
            a: "asukaには現地工場と直接交渉を行うOEM・ODM専門のディレクターチームがございます。バッグ、雑貨、日用品、アパレル縫製品、アクリル製品、電子部品など幅広い製品の自社ブランド化や特注生産に対応いたします。",
            open: false
          },
          {
            q: "最低ロット（MOQ）はいくらですか？",
            a: "製造する商品カテゴリーや提携工場によって大きく異なりますが、簡易的な名入れ・ロゴ印字のOEMであれば100個〜、完全新規設計のオリジナルODM製品は1,000個〜が一般的な目安となります。",
            open: false
          },
          {
            q: "納期について教えて下さい。",
            a: "仕様確認、デザイン校了後のサンプル作成に15日〜30日、その後の工場での本生産に30日〜60日程度かかります。輸送期間も含め、ご発注から納品までトータルで90日程度を目安として計画をおすすめします。",
            open: false
          },
          {
            q: "OEM・オリジナル製造品の返品はできますか？",
            a: "特注製造品・ロゴ印字製品につきましては、製品仕様を事前にサンプルで相互確認のうえ生産するため、お客様都合によるご返品は一切承ることはできません。",
            open: false
          }
        ]
      },
      {
        name: "配送について",
        icon: "fa-solid fa-truck-ramp-box",
        items: [
          {
            q: "送料の見積りを事前に依頼できますか？",
            a: "商品の重量だけでなく、ダンボールに梱包した後の「容積重量」の計算が必要となるため、商品が実際に中国倉庫に到着し、梱包が完了した時点で初めて正確な送料が算出されます。そのため、出荷前の事前見積もりは承ることができません。料金の目安は送料一覧表をご参照ください。",
            open: false
          },
          {
            q: "中国国内送料はどれくらいかかりますか？",
            a: "中国の仕入れ店舗から当社の義烏倉庫までの送料は、仕入れショップの規定および商品の重量によって決定されます。asukaでは手数料等を上乗せせず、店舗より提示された「実費のみ」をご請求します（概ね1小口につき5元〜15元程度が目安です）。",
            open: false
          },
          {
            q: "発送方法を教えて下さい。",
            a: "通常は信頼性と手配スピードが優秀なOCS航空便を利用して発送します。ご要望や荷物の量に合わせて、流通王航空便、船便、大口混載コンテナ便等もご選択いただけます。",
            open: false
          },
          {
            q: "配送の時間指定は可能ですか？",
            a: "国際輸送の段階では時間指定は行えません。日本国内の税関を通過し、国内配送業者（佐川急便やヤマト運輸など）へ貨物が引き渡された後、追跡番号をもとに各配送業者へ直接時間指定をご依頼いただく形となります。",
            open: false
          },
          {
            q: "輸入できるかどうかわからない商品はどうすればいいですか？",
            a: "輸入規制（薬機法、食品衛生法、知的財産権など）に関する適合判断は、当社では責任を負いかねます。トラブルを防ぐためにも、発注前に必ず直接日本の税関窓口、または該当する関係官庁へご確認いただくようお願いいたします。",
            open: false
          },
          {
            q: "電池・磁石を含む商品は輸入可能ですか？",
            a: "リチウムイオン電池や強い磁石を含む商品は、通常の航空便ルートでは積載制限により発送できません。これらを含む場合は「電池特殊航空便」または「船便」ルートをご指定いただくことで発送が可能です。",
            open: false
          },
          {
            q: "国際送料に保険は含まれてますか？",
            a: "基本料金としての国際送料には貨物保険は付帯しておりません。高額な商品や破損リスクの高い精密機器などを発送される場合は、発送手配前に有償の任意貨物保険への加入をご相談ください。",
            open: false
          },
          {
            q: "関税について教えて下さい。",
            a: "商品が日本の税関を通る際、商品の材質や品目に応じて関税・輸入消費税が課税されます。これらは当社の代行手数料や送料には含まれておらず、すべて輸入者であるお客様の実費負担となります。",
            open: false
          },
          {
            q: "関税の支払い方法について教えて下さい。",
            a: "配送会社が通関を代行し、荷物をお届けする際に「着払い（代引き）」にて配達員にお支払いいただく形や、後日配送会社から請求書が届き銀行振込でお支払いいただく形が一般的です。また、税関にリアルタイム口座を登録されている場合は、口座から自動的にダイレクト引き落としを行う設定も可能です。",
            open: false
          },
          {
            q: "大型商品やコンテナ単位の輸入は可能ですか？",
            a: "はい、家具や大型機材、イベント資材などの輸入にも対応しています。混載船便（LCL）または20フィート/40フィートの専用コンテナを手配いたしますので、都度個別にご相談ください。",
            open: false
          }
        ]
      },
      {
        name: "その他",
        icon: "fa-solid fa-circle-nodes",
        items: [
          {
            q: "誰でもサービスを利用することができますか？",
            a: "当社の利用規約に同意いただき、ルールおよび商習慣をご理解いただける個人事業主・法人様であれば、どなたでもご利用いただけます。",
            open: false
          },
          {
            q: "中国語が全く分かりませんが、大丈夫ですか？",
            a: "はい、問題ありません。お客様とのご連絡やシステムのやり取りはすべて日本国内のスタッフおよび日本語が堪能なスタッフが対応します。中国のショップや工場との交渉もすべて弊社が仲介しますのでご安心ください。",
            open: false
          },
          {
            q: "電話での注文は可能ですか？",
            a: "聞き間違いなどのヒューマンエラーやログの紛失を防ぐため、お電話口での直接の買い付け注文は一切承っておりません。必ず弊社管理システムよりオーダーシートを作成のうえご送信ください。",
            open: false
          },
          {
            q: "領収書は発行していますか？",
            a: "弊社がお客様から受託・請求させていただくのは「輸入代行サービス手数料および送料」であり、商品代金の販売元ではないため、代行手数料分としての領収書（PDF形式）を発行いたします。確定申告等の経費証明には、当サイトが発行する清算明細書と、銀行振込の取引控やPayPalの決済受領メールを組み合わせていただくことで正規の証明書類としてご使用いただけます。",
            open: false
          },
          {
            q: "輸入できない商品はありますか？",
            a: "コピー商品や海賊版などの知的財産権を侵害する物品、ワシントン条約違反品、刀剣類などの武器・火薬類、その他日本・中国の両政府が法律で輸出入を禁止している物品は一切お取り扱いできません。",
            open: false
          },
          {
            q: "届いた商品がコピー品（偽ブランド品）だった場合はどうなりますか？",
            a: "弊社は代行会社であり、真贋を鑑定するライセンスや専門知識は有しておりません。コピー品を輸入しようとした場合、日本の税関で没収・廃棄され、滅却処分費用がお客様に請求される場合がございます。偽物・非正規品の買い付け依頼は固くお断りしており、購入はすべてお客様の自己責任となります。",
            open: false
          }
        ]
      }
    ]);
    const filteredQA = computed(() => {
      if (!searchQuery.value) {
        return qaData.value.map((cat) => ({
          ...cat,
          items: cat.items.map((item) => ({ ...item }))
        }));
      }
      const query = searchQuery.value.toLowerCase().trim();
      return qaData.value.map((cat) => {
        const items = cat.items.filter(
          (item) => item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)
        ).map((item) => ({ ...item, open: true }));
        return { ...cat, items };
      }).filter((cat) => cat.items.length > 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheSidebar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container page-section page-top-padding" }, _attrs))} data-v-b4da00f5><div class="layout-with-sidebar" data-v-b4da00f5>`);
      _push(ssrRenderComponent(_component_TheSidebar, { class: "page-sidebar" }, null, _parent));
      _push(`<main class="page-main-content animate-fade-in-up" data-v-b4da00f5><h1 class="page-title" data-v-b4da00f5>よくあるご質問 (Q＆A)</h1><p class="page-subtitle" data-v-b4da00f5>お客様から多くいただくご質問とその回答をカテゴリ別にまとめています。</p><div class="search-box glass-card" data-v-b4da00f5><i class="fa-solid fa-magnifying-glass search-icon" data-v-b4da00f5></i><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="キーワードを入力して質問を検索..." class="search-input" data-v-b4da00f5>`);
      if (searchQuery.value) {
        _push(`<button class="clear-btn" data-v-b4da00f5><i class="fa-solid fa-xmark" data-v-b4da00f5></i></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="qa-categories-container" data-v-b4da00f5><!--[-->`);
      ssrRenderList(filteredQA.value, (cat, catIndex) => {
        _push(`<div class="category-group" data-v-b4da00f5><h2 class="category-heading" data-v-b4da00f5><i class="${ssrRenderClass(cat.icon)}" data-v-b4da00f5></i> ${ssrInterpolate(cat.name)}</h2><div class="questions-list" data-v-b4da00f5><!--[-->`);
        ssrRenderList(cat.items, (item, itemIndex) => {
          _push(`<div class="${ssrRenderClass([{ active: item.open }, "qa-item"])}" data-v-b4da00f5><button class="qa-question-btn" data-v-b4da00f5><span class="q-prefix" data-v-b4da00f5>Q</span><span class="q-text" data-v-b4da00f5>${ssrInterpolate(item.q)}</span><span class="toggle-icon" data-v-b4da00f5><i class="${ssrRenderClass([item.open ? "fa-minus" : "fa-plus", "fa-solid"])}" data-v-b4da00f5></i></span></button><div class="qa-answer-container" style="${ssrRenderStyle(item.open ? null : { display: "none" })}" data-v-b4da00f5><div class="qa-answer-content" data-v-b4da00f5><span class="a-prefix" data-v-b4da00f5>A</span><p class="a-text" data-v-b4da00f5>${ssrInterpolate(item.a)}</p></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]-->`);
      if (filteredQA.value.length === 0) {
        _push(`<div class="empty-state glass-card" data-v-b4da00f5><i class="fa-solid fa-folder-open empty-icon" data-v-b4da00f5></i><p data-v-b4da00f5>ご指定のキーワードに一致する質問が見つかりませんでした。</p><button class="btn-secondary btn-sm" data-v-b4da00f5>検索をリセット</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="qa-footer glass-card text-center" data-v-b4da00f5><h3 data-v-b4da00f5>解決しないご不明な点がございますか？</h3><p data-v-b4da00f5>その他の個別のご相談や気になる点については、お問い合わせ窓口よりお気軽にご連絡ください。</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-regular fa-envelope" data-v-b4da00f5${_scopeId}></i> お問い合わせ窓口へ `);
          } else {
            return [
              createVNode("i", { class: "fa-regular fa-envelope" }),
              createTextVNode(" お問い合わせ窓口へ ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/qa.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const qa = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4da00f5"]]);
export {
  qa as default
};
//# sourceMappingURL=qa-DRiUEmWV.js.map
