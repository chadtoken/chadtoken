"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{94796:function(e,a,t){t.r(a),t.d(a,{default:function(){return w},validate:function(){return s}});var r=t(71002),s=w,i=t(48923).default,n=RegExp("^[\\w ]+$","u"),m=RegExp("^[\\w]+$","u"),o=RegExp("^[ \\w]+$","u"),p=RegExp("^[ \\w\\.,:]+$","u"),h=t(16870).u5["date-time"],f=t(16870).u5.uri,d=RegExp("^0x[a-fA-F0-9]{40}$","u"),u=RegExp("^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$","u"),c=RegExp("^[a-zA-Z0-9+\\-%/$.]+$","u");function y(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,r=void 0===t?"":t;a.parentData,a.parentDataProperty,a.rootData;var s=null,n=0,m=!1,o=!1;if("string"==typeof e){if(i(e)>42){var p={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===s?s=[p]:s.push(p),n++}else if(1>i(e)){var h={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===s?s=[h]:s.push(h),n++}}else{var f={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===s?s=[f]:s.push(f),n++}var d=0===n;if(!(o=o||d)){var u=n;if("boolean"!=typeof e){var c={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===s?s=[c]:s.push(c),n++}var d=u===n;if(!(o=o||d)){var l=n;if(!("number"==typeof e&&isFinite(e))){var g={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===s?s=[g]:s.push(g),n++}var d=l===n;if(!(o=o||d)){var v=n;if(null!==e){var P={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===s?s=[P]:s.push(P),n++}var d=v===n;o=o||d}}}if(o)n=0,null!==s&&(s=null);else{var w={instancePath:r,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===s?s=[w]:s.push(w),n++}var k=0===n;if(m=m||k)n=0,null!==s&&(s=null);else{var b={instancePath:r,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===s?s=[b]:s.push(b),n++,y.errors=s,!1}return y.errors=s,0===n}function l(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0,f=!1,d=!1;if("string"==typeof e){if(i(e)>42){var u={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[u]:p.push(u),h++}else if(1>i(e)){var c={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[c]:p.push(c),h++}}else{var g={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[g]:p.push(g),h++}var v=0===h;if(!(d=d||v)){var P=h;if("boolean"!=typeof e){var w={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[w]:p.push(w),h++}var v=P===h;if(!(d=d||v)){var k=h;if(!("number"==typeof e&&isFinite(e))){var b={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[b]:p.push(b),h++}var v=k===h;if(!(d=d||v)){var x=h;if(null!==e){var N={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[N]:p.push(N),h++}var v=x===h;d=d||v}}}if(d)h=0,null!==p&&(p=null);else{var O={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[O]:p.push(O),h++}var $=0===h;if(!(f=f||$)){var T=h;if(h===T){if(e&&"object"==(0,r.Z)(e)&&!Array.isArray(e)){if(Object.keys(e).length>10){var I={instancePath:s,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[I]:p.push(I),h++}else{for(var L in e){var z=h,D=h;if(h===D){if("string"==typeof L){if(i(L)>40){var j={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:L};null===p?p=[j]:p.push(j),h++}else if(1>i(L)){var E={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:L};null===p?p=[E]:p.push(E),h++}else if(!m.test(L)){var A={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:L};null===p?p=[A]:p.push(A),h++}}else{var V={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:L};null===p?p=[V]:p.push(V),h++}}var _=z===h;if(!_){var R={instancePath:s,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:L},message:"property name must be valid"};null===p?p=[R]:p.push(R),h++;break}}if(_)for(var F in e){var q=h;if(y(e[F],{instancePath:s+"/"+F.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:F,rootData:o})||(h=(p=null===p?y.errors:p.concat(y.errors)).length),q!==h)break}}}else{var Z={instancePath:s,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[Z]:p.push(Z),h++}}var $=T===h;f=f||$}if(f)h=0,null!==p&&(p=null);else{var U={instancePath:s,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[U]:p.push(U),h++,l.errors=p,!1}return l.errors=p,0===h}function g(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0,f=!1,d=!1;if("string"==typeof e){if(i(e)>42){var u={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/maxLength",keyword:"maxLength",params:{limit:42},message:"must NOT have more than 42 characters"};null===p?p=[u]:p.push(u),h++}else if(1>i(e)){var c={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"};null===p?p=[c]:p.push(c),h++}}else{var y={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/0/type",keyword:"type",params:{type:"string"},message:"must be string"};null===p?p=[y]:p.push(y),h++}var v=0===h;if(!(d=d||v)){var P=h;if("boolean"!=typeof e){var w={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/1/type",keyword:"type",params:{type:"boolean"},message:"must be boolean"};null===p?p=[w]:p.push(w),h++}var v=P===h;if(!(d=d||v)){var k=h;if(!("number"==typeof e&&isFinite(e))){var b={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/2/type",keyword:"type",params:{type:"number"},message:"must be number"};null===p?p=[b]:p.push(b),h++}var v=k===h;if(!(d=d||v)){var x=h;if(null!==e){var N={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf/3/type",keyword:"type",params:{type:"null"},message:"must be null"};null===p?p=[N]:p.push(N),h++}var v=x===h;d=d||v}}}if(d)h=0,null!==p&&(p=null);else{var O={instancePath:s,schemaPath:"#/definitions/ExtensionPrimitiveValue/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};null===p?p=[O]:p.push(O),h++}var $=0===h;if(!(f=f||$)){var T=h;if(h===T){if(e&&"object"==(0,r.Z)(e)&&!Array.isArray(e)){if(Object.keys(e).length>10){var I={instancePath:s,schemaPath:"#/anyOf/1/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"};null===p?p=[I]:p.push(I),h++}else{for(var L in e){var z=h,D=h;if(h===D){if("string"==typeof L){if(i(L)>40){var j={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:L};null===p?p=[j]:p.push(j),h++}else if(1>i(L)){var E={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:L};null===p?p=[E]:p.push(E),h++}else if(!m.test(L)){var A={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:L};null===p?p=[A]:p.push(A),h++}}else{var V={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:L};null===p?p=[V]:p.push(V),h++}}var _=z===h;if(!_){var R={instancePath:s,schemaPath:"#/anyOf/1/propertyNames",keyword:"propertyNames",params:{propertyName:L},message:"property name must be valid"};null===p?p=[R]:p.push(R),h++;break}}if(_)for(var F in e){var q=h;if(l(e[F],{instancePath:s+"/"+F.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:F,rootData:o})||(h=(p=null===p?l.errors:p.concat(l.errors)).length),q!==h)break}}}else{var Z={instancePath:s,schemaPath:"#/anyOf/1/type",keyword:"type",params:{type:"object"},message:"must be object"};null===p?p=[Z]:p.push(Z),h++}}var $=T===h;f=f||$}if(f)h=0,null!==p&&(p=null);else{var U={instancePath:s,schemaPath:"#/anyOf",keyword:"anyOf",params:{},message:"must match a schema in anyOf"};return null===p?p=[U]:p.push(U),h++,g.errors=p,!1}return g.errors=p,0===h}function v(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var n=a.rootData,o=void 0===n?e:n,p=null,h=0;if(!e||"object"!=(0,r.Z)(e)||Array.isArray(e))return v.errors=[{instancePath:s,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(e).length>10)return v.errors=[{instancePath:s,schemaPath:"#/maxProperties",keyword:"maxProperties",params:{limit:10},message:"must NOT have more than 10 properties"}],!1;for(var f in e){var d=h,u=h;if(h===u){if("string"==typeof f){if(i(f)>40){var c={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters",propertyName:f};null===p?p=[c]:p.push(c),h++}else if(1>i(f)){var y={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:f};null===p?p=[y]:p.push(y),h++}else if(!m.test(f)){var l={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:f};null===p?p=[l]:p.push(l),h++}}else{var P={instancePath:s,schemaPath:"#/definitions/ExtensionIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:f};null===p?p=[P]:p.push(P),h++}}var w=d===h;if(!w){var k={instancePath:s,schemaPath:"#/propertyNames",keyword:"propertyNames",params:{propertyName:f},message:"property name must be valid"};return null===p?p=[k]:p.push(k),h++,v.errors=p,!1}}if(w)for(var b in e){var x=h;if(g(e[b],{instancePath:s+"/"+b.replace(/~/g,"~0").replace(/\//g,"~1"),parentData:e,parentDataProperty:b,rootData:o})||(h=(p=null===p?g.errors:p.concat(g.errors)).length),x!==h)break}return v.errors=p,0===h}function P(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.instancePath,n=void 0===s?"":s;t.parentData,t.parentDataProperty;var o=t.rootData,p=null,h=0;if(!e||"object"!=(0,r.Z)(e)||Array.isArray(e))return P.errors=[{instancePath:n,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(void 0===e.chainId&&(a="chainId")||void 0===e.address&&(a="address")||void 0===e.decimals&&(a="decimals")||void 0===e.name&&(a="name")||void 0===e.symbol&&(a="symbol"))return P.errors=[{instancePath:n,schemaPath:"#/required",keyword:"required",params:{missingProperty:a},message:"must have required property '"+a+"'"}],!1;var y=h;for(var l in e)if(!("chainId"===l||"address"===l||"decimals"===l||"name"===l||"symbol"===l||"logoURI"===l||"tags"===l||"extensions"===l))return P.errors=[{instancePath:n,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:l},message:"must NOT have additional properties"}],!1;if(y===h){if(void 0!==e.chainId){var g=e.chainId,w=h;if(!("number"==typeof g&&!(g%1)&&!isNaN(g)&&isFinite(g)))return P.errors=[{instancePath:n+"/chainId",schemaPath:"#/properties/chainId/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===w&&"number"==typeof g&&isFinite(g)&&(g<1||isNaN(g)))return P.errors=[{instancePath:n+"/chainId",schemaPath:"#/properties/chainId/minimum",keyword:"minimum",params:{comparison:">=",limit:1},message:"must be >= 1"}],!1;var k=w===h}else var k=!0;if(k){if(void 0!==e.address){var b=e.address,x=h;if(h===x){if("string"!=typeof b)return P.errors=[{instancePath:n+"/address",schemaPath:"#/properties/address/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!d.test(b))return P.errors=[{instancePath:n+"/address",schemaPath:"#/properties/address/pattern",keyword:"pattern",params:{pattern:"^0x[a-fA-F0-9]{40}$"},message:'must match pattern "^0x[a-fA-F0-9]{40}$"'}],!1}var k=x===h}else var k=!0;if(k){if(void 0!==e.decimals){var N=e.decimals,O=h;if(!("number"==typeof N&&!(N%1)&&!isNaN(N)&&isFinite(N)))return P.errors=[{instancePath:n+"/decimals",schemaPath:"#/properties/decimals/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(h===O&&"number"==typeof N&&isFinite(N)){if(N>255||isNaN(N))return P.errors=[{instancePath:n+"/decimals",schemaPath:"#/properties/decimals/maximum",keyword:"maximum",params:{comparison:"<=",limit:255},message:"must be <= 255"}],!1;if(N<0||isNaN(N))return P.errors=[{instancePath:n+"/decimals",schemaPath:"#/properties/decimals/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1}var k=O===h}else var k=!0;if(k){if(void 0!==e.name){var $=e.name,T=h;if(h===T){if("string"!=typeof $)return P.errors=[{instancePath:n+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i($)>40)return P.errors=[{instancePath:n+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:40},message:"must NOT have more than 40 characters"}],!1;if(1>i($))return P.errors=[{instancePath:n+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!u.test($))return P.errors=[{instancePath:n+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w.'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"},message:'must match pattern "^[ \\w.\'+\\-%/\xc0-\xd6\xd8-\xf6\xf8-\xff:&\\[\\]\\(\\)]+$"'}],!1}var k=T===h}else var k=!0;if(k){if(void 0!==e.symbol){var I=e.symbol,L=h;if(h===L){if("string"!=typeof I)return P.errors=[{instancePath:n+"/symbol",schemaPath:"#/properties/symbol/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(I)>20)return P.errors=[{instancePath:n+"/symbol",schemaPath:"#/properties/symbol/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(1>i(I))return P.errors=[{instancePath:n+"/symbol",schemaPath:"#/properties/symbol/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!c.test(I))return P.errors=[{instancePath:n+"/symbol",schemaPath:"#/properties/symbol/pattern",keyword:"pattern",params:{pattern:"^[a-zA-Z0-9+\\-%/$.]+$"},message:'must match pattern "^[a-zA-Z0-9+\\-%/$.]+$"'}],!1}var k=L===h}else var k=!0;if(k){if(void 0!==e.logoURI){var z=e.logoURI,D=h;if(h===D&&h===D){if("string"!=typeof z)return P.errors=[{instancePath:n+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(z))return P.errors=[{instancePath:n+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}var k=D===h}else var k=!0;if(k){if(void 0!==e.tags){var j=e.tags,E=h;if(h===E){if(!Array.isArray(j))return P.errors=[{instancePath:n+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(j.length>10)return P.errors=[{instancePath:n+"/tags",schemaPath:"#/properties/tags/maxItems",keyword:"maxItems",params:{limit:10},message:"must NOT have more than 10 items"}],!1;for(var A=!0,V=j.length,_=0;_<V;_++){var R=j[_],F=h,q=h;if(h===q){if("string"!=typeof R)return P.errors=[{instancePath:n+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(R)>10)return P.errors=[{instancePath:n+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters"}],!1;if(1>i(R))return P.errors=[{instancePath:n+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!m.test(R))return P.errors=[{instancePath:n+"/tags/"+_,schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"'}],!1}var A=F===h;if(!A)break}}var k=E===h}else var k=!0;if(k){if(void 0!==e.extensions){var Z=h;v(e.extensions,{instancePath:n+"/extensions",parentData:e,parentDataProperty:"extensions",rootData:void 0===o?e:o})||(h=(p=null===p?v.errors:p.concat(v.errors)).length);var k=Z===h}else var k=!0}}}}}}}}return P.errors=p,0===h}function w(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.instancePath,s=void 0===t?"":t;a.parentData,a.parentDataProperty;var d=a.rootData,u=void 0===d?e:d,c=null,y=0;if(!e||"object"!=(0,r.Z)(e)||Array.isArray(e))return w.errors=[{instancePath:s,schemaPath:"#/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(void 0===e.tokens&&(O="tokens"))return w.errors=[{instancePath:s,schemaPath:"#/required",keyword:"required",params:{missingProperty:O},message:"must have required property '"+O+"'"}],!1;var l=y;for(var g in e)if(!("name"===g||"timestamp"===g||"version"===g||"tokens"===g||"keywords"===g||"tags"===g||"logoURI"===g))return w.errors=[{instancePath:s,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:g},message:"must NOT have additional properties"}],!1;if(l===y){if(void 0!==e.name){var v=e.name,k=y;if(y===k){if("string"!=typeof v)return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(v)>30)return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/maxLength",keyword:"maxLength",params:{limit:30},message:"must NOT have more than 30 characters"}],!1;if(1>i(v))return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!n.test(v))return w.errors=[{instancePath:s+"/name",schemaPath:"#/properties/name/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}var b=k===y}else var b=!0;if(b){if(void 0!==e.timestamp){var x=e.timestamp,N=y;if(y===N&&y===N){if("string"!=typeof x)return w.errors=[{instancePath:s+"/timestamp",schemaPath:"#/properties/timestamp/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!h.validate(x))return w.errors=[{instancePath:s+"/timestamp",schemaPath:"#/properties/timestamp/format",keyword:"format",params:{format:"date-time"},message:'must match format "date-time"'}],!1}var b=N===y}else var b=!0;if(b){if(void 0!==e.version){var O,$,T=e.version,I=y,L=y;if(y===L){if(!T||"object"!=(0,r.Z)(T)||Array.isArray(T))return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(void 0===T.major&&($="major")||void 0===T.minor&&($="minor")||void 0===T.patch&&($="patch"))return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/required",keyword:"required",params:{missingProperty:$},message:"must have required property '"+$+"'"}],!1;var z=y;for(var D in T)if(!("major"===D||"minor"===D||"patch"===D))return w.errors=[{instancePath:s+"/version",schemaPath:"#/definitions/Version/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:D},message:"must NOT have additional properties"}],!1;if(z===y){if(void 0!==T.major){var j=T.major,E=y;if(!("number"==typeof j&&!(j%1)&&!isNaN(j)&&isFinite(j)))return w.errors=[{instancePath:s+"/version/major",schemaPath:"#/definitions/Version/properties/major/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===E&&"number"==typeof j&&isFinite(j)&&(j<0||isNaN(j)))return w.errors=[{instancePath:s+"/version/major",schemaPath:"#/definitions/Version/properties/major/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var A=E===y}else var A=!0;if(A){if(void 0!==T.minor){var V=T.minor,_=y;if(!("number"==typeof V&&!(V%1)&&!isNaN(V)&&isFinite(V)))return w.errors=[{instancePath:s+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===_&&"number"==typeof V&&isFinite(V)&&(V<0||isNaN(V)))return w.errors=[{instancePath:s+"/version/minor",schemaPath:"#/definitions/Version/properties/minor/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var A=_===y}else var A=!0;if(A){if(void 0!==T.patch){var R=T.patch,F=y;if(!("number"==typeof R&&!(R%1)&&!isNaN(R)&&isFinite(R)))return w.errors=[{instancePath:s+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/type",keyword:"type",params:{type:"integer"},message:"must be integer"}],!1;if(y===F&&"number"==typeof R&&isFinite(R)&&(R<0||isNaN(R)))return w.errors=[{instancePath:s+"/version/patch",schemaPath:"#/definitions/Version/properties/patch/minimum",keyword:"minimum",params:{comparison:">=",limit:0},message:"must be >= 0"}],!1;var A=F===y}else var A=!0}}}}var b=I===y}else var b=!0;if(b){if(void 0!==e.tokens){var q=e.tokens,Z=y;if(y===Z){if(!Array.isArray(q))return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(q.length>1e4)return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/maxItems",keyword:"maxItems",params:{limit:1e4},message:"must NOT have more than 10000 items"}],!1;if(q.length<1)return w.errors=[{instancePath:s+"/tokens",schemaPath:"#/properties/tokens/minItems",keyword:"minItems",params:{limit:1},message:"must NOT have fewer than 1 items"}],!1;for(var U=!0,C=q.length,M=0;M<C;M++){var S=y;P(q[M],{instancePath:s+"/tokens/"+M,parentData:q,parentDataProperty:M,rootData:u})||(y=(c=null===c?P.errors:c.concat(P.errors)).length);var U=S===y;if(!U)break}}var b=Z===y}else var b=!0;if(b){if(void 0!==e.keywords){var H=e.keywords,W=y;if(y===W){if(!Array.isArray(H))return w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/type",keyword:"type",params:{type:"array"},message:"must be array"}],!1;if(H.length>20)return w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/maxItems",keyword:"maxItems",params:{limit:20},message:"must NOT have more than 20 items"}],!1;for(var Y=!0,B=H.length,G=0;G<B;G++){var J=H[G],K=y;if(y===K){if("string"!=typeof J)return w.errors=[{instancePath:s+"/keywords/"+G,schemaPath:"#/properties/keywords/items/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(J)>20)return w.errors=[{instancePath:s+"/keywords/"+G,schemaPath:"#/properties/keywords/items/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(1>i(J))return w.errors=[{instancePath:s+"/keywords/"+G,schemaPath:"#/properties/keywords/items/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!n.test(J))return w.errors=[{instancePath:s+"/keywords/"+G,schemaPath:"#/properties/keywords/items/pattern",keyword:"pattern",params:{pattern:"^[\\w ]+$"},message:'must match pattern "^[\\w ]+$"'}],!1}var Y=K===y;if(!Y)break}if(Y){var Q,X=H.length;if(X>1)for(var ee={};X--;){var ea=H[X];if("string"==typeof ea){if("number"==typeof ee[ea])return Q=ee[ea],w.errors=[{instancePath:s+"/keywords",schemaPath:"#/properties/keywords/uniqueItems",keyword:"uniqueItems",params:{i:X,j:Q},message:"must NOT have duplicate items (items ## "+Q+" and "+X+" are identical)"}],!1;ee[ea]=X}}}}var b=W===y}else var b=!0;if(b){if(void 0!==e.tags){var et=e.tags,er=y;if(y===er){if(!et||"object"!=(0,r.Z)(et)||Array.isArray(et))return w.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;if(Object.keys(et).length>20)return w.errors=[{instancePath:s+"/tags",schemaPath:"#/properties/tags/maxProperties",keyword:"maxProperties",params:{limit:20},message:"must NOT have more than 20 properties"}],!1;for(var es in et){var ei=y,en=y;if(y===en){if("string"==typeof es){if(i(es)>10){var em={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/maxLength",keyword:"maxLength",params:{limit:10},message:"must NOT have more than 10 characters",propertyName:es};null===c?c=[em]:c.push(em),y++}else if(1>i(es)){var eo={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters",propertyName:es};null===c?c=[eo]:c.push(eo),y++}else if(!m.test(es)){var ep={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/pattern",keyword:"pattern",params:{pattern:"^[\\w]+$"},message:'must match pattern "^[\\w]+$"',propertyName:es};null===c?c=[ep]:c.push(ep),y++}}else{var eh={instancePath:s+"/tags",schemaPath:"#/definitions/TagIdentifier/type",keyword:"type",params:{type:"string"},message:"must be string",propertyName:es};null===c?c=[eh]:c.push(eh),y++}}var ef=ei===y;if(!ef){var ed={instancePath:s+"/tags",schemaPath:"#/properties/tags/propertyNames",keyword:"propertyNames",params:{propertyName:es},message:"property name must be valid"};return null===c?c=[ed]:c.push(ed),y++,w.errors=c,!1}}if(ef)for(var eu in et){var ec=et[eu],ey=y,el=y;if(y===el){if(!ec||"object"!=(0,r.Z)(ec)||Array.isArray(ec))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/type",keyword:"type",params:{type:"object"},message:"must be object"}],!1;var eg=void 0;if(void 0===ec.name&&(eg="name")||void 0===ec.description&&(eg="description"))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/required",keyword:"required",params:{missingProperty:eg},message:"must have required property '"+eg+"'"}],!1;var ev=y;for(var eP in ec)if(!("name"===eP||"description"===eP))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1"),schemaPath:"#/definitions/TagDefinition/additionalProperties",keyword:"additionalProperties",params:{additionalProperty:eP},message:"must NOT have additional properties"}],!1;if(ev===y){if(void 0!==ec.name){var ew=ec.name,ek=y;if(y===ek){if("string"!=typeof ew)return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(ew)>20)return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/maxLength",keyword:"maxLength",params:{limit:20},message:"must NOT have more than 20 characters"}],!1;if(1>i(ew))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!o.test(ew))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/name",schemaPath:"#/definitions/TagDefinition/properties/name/pattern",keyword:"pattern",params:{pattern:"^[ \\w]+$"},message:'must match pattern "^[ \\w]+$"'}],!1}var eb=ek===y}else var eb=!0;if(eb){if(void 0!==ec.description){var ex=ec.description,eN=y;if(y===eN){if("string"!=typeof ex)return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(i(ex)>200)return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/maxLength",keyword:"maxLength",params:{limit:200},message:"must NOT have more than 200 characters"}],!1;if(1>i(ex))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/minLength",keyword:"minLength",params:{limit:1},message:"must NOT have fewer than 1 characters"}],!1;if(!p.test(ex))return w.errors=[{instancePath:s+"/tags/"+eu.replace(/~/g,"~0").replace(/\//g,"~1")+"/description",schemaPath:"#/definitions/TagDefinition/properties/description/pattern",keyword:"pattern",params:{pattern:"^[ \\w\\.,:]+$"},message:'must match pattern "^[ \\w\\.,:]+$"'}],!1}var eb=eN===y}else var eb=!0}}}if(ey!==y)break}}var b=er===y}else var b=!0;if(b){if(void 0!==e.logoURI){var eO=e.logoURI,e$=y;if(y===e$&&y===e$){if("string"!=typeof eO)return w.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/type",keyword:"type",params:{type:"string"},message:"must be string"}],!1;if(!f(eO))return w.errors=[{instancePath:s+"/logoURI",schemaPath:"#/properties/logoURI/format",keyword:"format",params:{format:"uri"},message:'must match format "uri"'}],!1}var b=e$===y}else var b=!0}}}}}}}return w.errors=c,0===y}},48923:function(e,a){function t(e){let a;let t=e.length,r=0,s=0;for(;s<t;)r++,(a=e.charCodeAt(s++))>=55296&&a<=56319&&s<t&&(64512&(a=e.charCodeAt(s)))==56320&&s++;return r}Object.defineProperty(a,"__esModule",{value:!0}),a.default=t,t.code='require("ajv/dist/runtime/ucs2length").default'},16870:function(e,a){function t(e,a){return{validate:e,compare:a}}a.u5=void 0,a.u5={date:t(i,n),time:t(o,p),"date-time":t(function(e){let a=e.split(h);return 2===a.length&&i(a[0])&&o(a[1],!0)},f),duration:/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,uri:function(e){return d.test(e)&&u.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,url:/^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:/^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,regex:function(e){if(v.test(e))return!1;try{return RegExp(e),!0}catch(e){return!1}},uuid:/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,"json-pointer":/^(?:\/(?:[^~/]|~0|~1)*)*$/,"json-pointer-uri-fragment":/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,"relative-json-pointer":/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,byte:function(e){return c.lastIndex=0,c.test(e)},int32:{type:"number",validate:function(e){return Number.isInteger(e)&&e<=l&&e>=y}},int64:{type:"number",validate:function(e){return Number.isInteger(e)}},float:{type:"number",validate:g},double:{type:"number",validate:g},password:!0,binary:!0},a.u5,t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/,n),t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,p),t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,f),Object.keys(a.u5);let r=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,s=[0,31,28,31,30,31,30,31,31,30,31,30,31];function i(e){var a;let t=r.exec(e);if(!t)return!1;let i=+t[1],n=+t[2],m=+t[3];return n>=1&&n<=12&&m>=1&&m<=(2===n&&(a=i)%4==0&&(a%100!=0||a%400==0)?29:s[n])}function n(e,a){if(e&&a)return e>a?1:e<a?-1:0}let m=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;function o(e,a){let t=m.exec(e);if(!t)return!1;let r=+t[1],s=+t[2],i=+t[3],n=t[5];return(r<=23&&s<=59&&i<=59||23===r&&59===s&&60===i)&&(!a||""!==n)}function p(e,a){if(!(e&&a))return;let t=m.exec(e),r=m.exec(a);if(t&&r)return(e=t[1]+t[2]+t[3]+(t[4]||""))>(a=r[1]+r[2]+r[3]+(r[4]||""))?1:e<a?-1:0}let h=/t|\s/i;function f(e,a){if(!(e&&a))return;let[t,r]=e.split(h),[s,i]=a.split(h),m=n(t,s);if(void 0!==m)return m||p(r,i)}let d=/\/|:/,u=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,c=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm,y=-2147483648,l=2147483648-1;function g(){return!0}let v=/[^\\]\\Z/}}]);