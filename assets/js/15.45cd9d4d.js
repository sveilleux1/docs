(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{390:function(t,e,a){"use strict";a.r(e);var s=a(5),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" Auth")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("Terra's Auth module inherits from Cosmos SDK's "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/v0.37.4/docs/spec/auth",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("auth")]),a("OutboundLink")],1),t._v(" module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.")])]),t._v(" "),a("p",[t._v("Terra's Auth module extends the functionality from Cosmos SDK's "),a("code",[t._v("auth")]),t._v(" module with a modified ante handler which applies the stability layer fee alongside the all basic transaction validity checks (signatures, nonces, auxiliary fields). In addition, a special vesting account type is defined, which handles the logic for token vesting from the Luna presale.")]),t._v(" "),a("h2",{attrs:{id:"fees"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fees"}},[t._v("#")]),t._v(" Fees")]),t._v(" "),a("p",[t._v("The Auth module reads the current effective "),a("code",[t._v("TaxRate")]),t._v(" and "),a("code",[t._v("TaxCap")]),t._v(" parameters from the "),a("RouterLink",{attrs:{to:"/dev/spec-treasury.html"}},[a("code",[t._v("Treasury")])]),t._v(" module to enforce a stability layer fee.")],1),t._v(" "),a("h3",{attrs:{id:"gas-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-fee"}},[t._v("#")]),t._v(" Gas Fee")]),t._v(" "),a("p",[t._v("As with any other transaction, "),a("RouterLink",{attrs:{to:"/dev/spec-bank.html#msgsend"}},[a("code",[t._v("MsgSend")])]),t._v(" and "),a("RouterLink",{attrs:{to:"/dev/spec-bank.html#msgmultisend"}},[a("code",[t._v("MsgMultiSend")])]),t._v(" pay a gas fee the size of which depends on validator's preferences (each validator sets his own min-gas-fees) and the complexity of the transaction. "),a("RouterLink",{attrs:{to:"/terracli/#a-note-on-gas-and-fees"}},[t._v("Notes on gas and fees")]),t._v(" has a more detailed explanation of how gas is computed. Important detail to note here is that gas fees are specified by the sender when the transaction is outbound.")],1),t._v(" "),a("h3",{attrs:{id:"stability-fee"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stability-fee"}},[t._v("#")]),t._v(" Stability Fee")]),t._v(" "),a("p",[t._v("In addition to the gas fee, the ante handler charges a stability fee that is a percentage of the transaction's value only for the "),a("strong",[t._v("Stable Coins")]),t._v(" except "),a("strong",[t._v("LUNA")]),t._v(". It reads the Tax Rate and Tax Cap parameters from the "),a("RouterLink",{attrs:{to:"/dev/spec-treasury.html"}},[a("code",[t._v("Treasury")])]),t._v(" module to compute the amount of stability tax that needs to be charged.")],1),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("Tax Rate")]),t._v(" is a parameter agreed upon by the network that specifies the percentage of payment transactions that will be collected as Tax Proceeds in the block reward, which will be distributed among the validators. The distribution model is a bit complicated and explained in detail "),a("RouterLink",{attrs:{to:"/validator/faq.html#how-are-block-provisions-distributed"}},[t._v("here")]),t._v(". The taxes collected per transaction cannot exceed the specific "),a("strong",[t._v("Tax Cap")]),t._v(" defined for that transaction's denomination. Every epoch, the Tax Rate and Tax Caps are recalibrated automatically by the network; see "),a("RouterLink",{attrs:{to:"/dev/spec-treasury.html#monetary-policy-levers"}},[t._v("here")]),t._v(" for more details.")],1),t._v(" "),a("p",[t._v("For an example "),a("code",[t._v("MsgSend")]),t._v(" transaction of µSDR tokens,")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("stability fee = min(1000 * tax_rate, tax_cap(usdr))\n")])])]),a("p",[t._v("For a "),a("code",[t._v("MsgMultiSend")]),t._v(" transaction, a stability fee is charged from every outbound transaction.")]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("p",[t._v("The subspace for the Auth module is "),a("code",[t._v("auth")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Params "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tMaxMemoCharacters      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"max_memo_characters" yaml:"max_memo_characters"`')]),t._v("\n\tTxSigLimit             "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"tx_sig_limit" yaml:"tx_sig_limit"`')]),t._v("\n\tTxSizeCostPerByte      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"tx_size_cost_per_byte" yaml:"tx_size_cost_per_byte"`')]),t._v("\n\tSigVerifyCostED25519   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"sig_verify_cost_ed25519" yaml:"sig_verify_cost_ed25519"`')]),t._v("\n\tSigVerifyCostSecp256k1 "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"sig_verify_cost_secp256k1" yaml:"sig_verify_cost_secp256k1"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"maxmemocharacters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxmemocharacters"}},[t._v("#")]),t._v(" MaxMemoCharacters")]),t._v(" "),a("p",[t._v("Maximum permitted number of characters in the memo of a transaction.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("256")])])]),t._v(" "),a("h3",{attrs:{id:"txsiglimit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txsiglimit"}},[t._v("#")]),t._v(" TxSigLimit")]),t._v(" "),a("p",[t._v("The maximum number of singers in a transaction. A single transaction can have multiple messages and multiple signers. The sig verification cost is much higher than other operations, so we limit this to 100.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("100")])])]),t._v(" "),a("h3",{attrs:{id:"txsizecostperbyte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#txsizecostperbyte"}},[t._v("#")]),t._v(" TxSizeCostPerByte")]),t._v(" "),a("p",[t._v("Used to compute gas consumption of the transaction, "),a("code",[t._v("TxSizeCostPerByte * txsize")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("10")])])]),t._v(" "),a("h3",{attrs:{id:"sigverifycosted25519"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sigverifycosted25519"}},[t._v("#")]),t._v(" SigVerifyCostED25519")]),t._v(" "),a("p",[t._v("The gas cost for verifying ED25519 signatures.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("590")])])]),t._v(" "),a("h3",{attrs:{id:"sigverifycostsecp256k1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sigverifycostsecp256k1"}},[t._v("#")]),t._v(" SigVerifyCostSecp256k1")]),t._v(" "),a("p",[t._v("The gas cost for verifying Secp256k1 signatures.")]),t._v(" "),a("ul",[a("li",[t._v("type: "),a("code",[t._v("uint64")])]),t._v(" "),a("li",[t._v("default value: "),a("code",[t._v("1000")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);