'use strict';
(self.webpackChunkruffle_selfhosted = self.webpackChunkruffle_selfhosted || []).push([
	[662],
	{
		762: (n, e, t) => {
			function _(n, e) {
				const t = n.length,
					_ = n.getChannelData(0),
					r = n.getChannelData(1);
				let b = 0,
					c = 0;
				for (; c < t; ) (_[c] = e[b]), (r[c] = e[b + 1]), c++, (b += 2);
			}
			t.d(e, { tM: () => _ });
		},
		662: (n, e, t) => {
			t.r(e), t.d(e, { Ruffle: () => U, default: () => H, initSync: () => q });
			var _ = t(762);
			n = t.hmd(n);
			const r =
				'undefined' != typeof AudioContext
					? AudioContext
					: 'undefined' != typeof webkitAudioContext
					? webkitAudioContext
					: void 0;
			let b;
			const c = new Array(32).fill(void 0);
			function f(n) {
				return c[n];
			}
			c.push(void 0, null, !0, !1);
			let o = c.length;
			function i(n) {
				const e = f(n);
				return (
					(function (n) {
						n < 36 || ((c[n] = o), (o = n));
					})(n),
					e
				);
			}
			const u = new TextDecoder('utf-8', { ignoreBOM: !0, fatal: !0 });
			u.decode();
			let a = new Uint8Array();
			function g() {
				return 0 === a.byteLength && (a = new Uint8Array(b.memory.buffer)), a;
			}
			function w(n, e) {
				return u.decode(g().subarray(n, n + e));
			}
			function d(n) {
				o === c.length && c.push(c.length + 1);
				const e = o;
				return (o = c[e]), (c[e] = n), e;
			}
			let s = 0;
			const l = new TextEncoder('utf-8'),
				m =
					'function' == typeof l.encodeInto
						? function (n, e) {
								return l.encodeInto(n, e);
						  }
						: function (n, e) {
								const t = l.encode(n);
								return e.set(t), { read: n.length, written: t.length };
						  };
			function y(n, e, t) {
				if (void 0 === t) {
					const t = l.encode(n),
						_ = e(t.length);
					return (
						g()
							.subarray(_, _ + t.length)
							.set(t),
						(s = t.length),
						_
					);
				}
				let _ = n.length,
					r = e(_);
				const b = g();
				let c = 0;
				for (; c < _; c++) {
					const e = n.charCodeAt(c);
					if (e > 127) break;
					b[r + c] = e;
				}
				if (c !== _) {
					0 !== c && (n = n.slice(c)), (r = t(r, _, (_ = c + 3 * n.length)));
					const e = g().subarray(r + c, r + _);
					c += m(n, e).written;
				}
				return (s = c), r;
			}
			function p(n) {
				return null == n;
			}
			let h = new Int32Array();
			function v() {
				return 0 === h.byteLength && (h = new Int32Array(b.memory.buffer)), h;
			}
			let A = new Float64Array();
			function x() {
				return 0 === A.byteLength && (A = new Float64Array(b.memory.buffer)), A;
			}
			let S = new BigInt64Array();
			function C(n) {
				const e = typeof n;
				if ('number' == e || 'boolean' == e || null == n) return `${n}`;
				if ('string' == e) return `"${n}"`;
				if ('symbol' == e) {
					const e = n.description;
					return null == e ? 'Symbol' : `Symbol(${e})`;
				}
				if ('function' == e) {
					const e = n.name;
					return 'string' == typeof e && e.length > 0 ? `Function(${e})` : 'Function';
				}
				if (Array.isArray(n)) {
					const e = n.length;
					let t = '[';
					e > 0 && (t += C(n[0]));
					for (let _ = 1; _ < e; _++) t += ', ' + C(n[_]);
					return (t += ']'), t;
				}
				const t = /\[object ([^\]]+)\]/.exec(toString.call(n));
				let _;
				if (!(t.length > 1)) return toString.call(n);
				if (((_ = t[1]), 'Object' == _))
					try {
						return 'Object(' + JSON.stringify(n) + ')';
					} catch (n) {
						return 'Object';
					}
				return n instanceof Error ? `${n.name}: ${n.message}\n${n.stack}` : _;
			}
			function R(n, e, t, _) {
				const r = { a: n, b: e, cnt: 1, dtor: t },
					c = (...n) => {
						r.cnt++;
						const e = r.a;
						r.a = 0;
						try {
							return _(e, r.b, ...n);
						} finally {
							0 == --r.cnt ? b.__wbindgen_export_2.get(r.dtor)(e, r.b) : (r.a = e);
						}
					};
				return (c.original = r), c;
			}
			function T(n, e) {
				b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h471d3388575a2044(
					n,
					e
				);
			}
			function E(n, e, t) {
				b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h76f79b9d5d810e41(
					n,
					e,
					d(t)
				);
			}
			function F(n, e, t) {
				b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha5bbdaf30b9327e7(
					n,
					e,
					t
				);
			}
			function k(n, e, t) {
				b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2625fb0eca2eb2c7(
					n,
					e,
					d(t)
				);
			}
			let M = new Float32Array();
			function P(n, e) {
				return (0 === M.byteLength && (M = new Float32Array(b.memory.buffer)), M).subarray(
					n / 4,
					n / 4 + e
				);
			}
			function L(n, e) {
				try {
					return n.apply(this, e);
				} catch (n) {
					b.__wbindgen_exn_store(d(n));
				}
			}
			let I = new Uint32Array();
			function O(n, e) {
				return g().subarray(n / 1, n / 1 + e);
			}
			function B(n, e) {
				return x().subarray(n / 8, n / 8 + e);
			}
			let W = new Uint8ClampedArray();
			function D(n, e) {
				return (0 === W.byteLength && (W = new Uint8ClampedArray(b.memory.buffer)), W).subarray(
					n / 1,
					n / 1 + e
				);
			}
			class U {
				static __wrap(n) {
					const e = Object.create(U.prototype);
					return (e.ptr = n), e;
				}
				__destroy_into_raw() {
					const n = this.ptr;
					return (this.ptr = 0), n;
				}
				free() {
					const n = this.__destroy_into_raw();
					b.__wbg_ruffle_free(n);
				}
				constructor(n, e, t) {
					return i(b.ruffle_new(d(n), d(e), d(t)));
				}
				stream_from(n, e) {
					try {
						const _ = b.__wbindgen_add_to_stack_pointer(-16),
							r = y(n, b.__wbindgen_malloc, b.__wbindgen_realloc),
							c = s;
						b.ruffle_stream_from(_, this.ptr, r, c, d(e));
						var t = v()[_ / 4 + 0];
						if (v()[_ / 4 + 1]) throw i(t);
					} finally {
						b.__wbindgen_add_to_stack_pointer(16);
					}
				}
				load_data(n, e) {
					try {
						const _ = b.__wbindgen_add_to_stack_pointer(-16);
						b.ruffle_load_data(_, this.ptr, d(n), d(e));
						var t = v()[_ / 4 + 0];
						if (v()[_ / 4 + 1]) throw i(t);
					} finally {
						b.__wbindgen_add_to_stack_pointer(16);
					}
				}
				play() {
					b.ruffle_play(this.ptr);
				}
				pause() {
					b.ruffle_pause(this.ptr);
				}
				is_playing() {
					return 0 !== b.ruffle_is_playing(this.ptr);
				}
				volume() {
					return b.ruffle_volume(this.ptr);
				}
				set_volume(n) {
					b.ruffle_set_volume(this.ptr, n);
				}
				renderer_name() {
					return i(b.ruffle_renderer_name(this.ptr));
				}
				prepare_context_menu() {
					return i(b.ruffle_prepare_context_menu(this.ptr));
				}
				run_context_menu_callback(n) {
					b.ruffle_run_context_menu_callback(this.ptr, n);
				}
				set_fullscreen(n) {
					b.ruffle_set_fullscreen(this.ptr, n);
				}
				clear_custom_menu_items() {
					b.ruffle_clear_custom_menu_items(this.ptr);
				}
				destroy() {
					b.ruffle_destroy(this.ptr);
				}
				call_exposed_callback(n, e) {
					const t = y(n, b.__wbindgen_malloc, b.__wbindgen_realloc),
						_ = s,
						r = (function (n, e) {
							const t = e(4 * n.length),
								_ = (0 === I.byteLength && (I = new Uint32Array(b.memory.buffer)), I);
							for (let e = 0; e < n.length; e++) _[t / 4 + e] = d(n[e]);
							return (s = n.length), t;
						})(e, b.__wbindgen_malloc),
						c = s;
					return i(b.ruffle_call_exposed_callback(this.ptr, t, _, r, c));
				}
				set_trace_observer(n) {
					b.ruffle_set_trace_observer(this.ptr, d(n));
				}
				audio_context() {
					return i(b.ruffle_audio_context(this.ptr));
				}
				static is_wasm_simd_used() {
					return 0 !== b.ruffle_is_wasm_simd_used();
				}
			}
			function V() {
				const e = { wbg: {} };
				return (
					(e.wbg.__wbindgen_object_drop_ref = function (n) {
						i(n);
					}),
					(e.wbg.__wbindgen_cb_drop = function (n) {
						const e = i(n).original;
						return 1 == e.cnt-- && ((e.a = 0), !0);
					}),
					(e.wbg.__wbindgen_string_new = function (n, e) {
						return d(w(n, e));
					}),
					(e.wbg.__wbindgen_object_clone_ref = function (n) {
						return d(f(n));
					}),
					(e.wbg.__wbg_ruffle_new = function (n) {
						return d(U.__wrap(n));
					}),
					(e.wbg.__wbindgen_is_function = function (n) {
						return 'function' == typeof f(n);
					}),
					(e.wbg.__wbindgen_error_new = function (n, e) {
						return d(new Error(w(n, e)));
					}),
					(e.wbg.__wbindgen_is_object = function (n) {
						const e = f(n);
						return 'object' == typeof e && null !== e;
					}),
					(e.wbg.__wbindgen_boolean_get = function (n) {
						const e = f(n);
						return 'boolean' == typeof e ? (e ? 1 : 0) : 2;
					}),
					(e.wbg.__wbg_copyToAudioBufferInterleaved_7975d0071e3cdc32 = function (n, e, t) {
						(0, _.tM)(f(n), P(e, t));
					}),
					(e.wbg.__wbg_setFullscreen_62846f9d4b5f6f48 = function () {
						return L(function (n, e) {
							f(n).setFullscreen(0 !== e);
						}, arguments);
					}),
					(e.wbg.__wbindgen_string_get = function (n, e) {
						const t = f(e),
							_ = 'string' == typeof t ? t : void 0;
						var r = p(_) ? 0 : y(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
							c = s;
						(v()[n / 4 + 1] = c), (v()[n / 4 + 0] = r);
					}),
					(e.wbg.__wbg_displayUnsupportedMessage_cb34e3c4ccb484e1 = function (n) {
						f(n).displayUnsupportedMessage();
					}),
					(e.wbg.__wbg_displayRootMovieDownloadFailedMessage_c90a7f0f0b73e4df = function (n) {
						f(n).displayRootMovieDownloadFailedMessage();
					}),
					(e.wbg.__wbg_displayMessage_e81323a872d4e00a = function (n, e, t) {
						f(n).displayMessage(w(e, t));
					}),
					(e.wbg.__wbg_setMetadata_11d904a2018b04c1 = function (n, e) {
						f(n).setMetadata(i(e));
					}),
					(e.wbg.__wbg_onCallbackAvailable_44f6acac6389d11d = function (n, e, t) {
						f(n).onCallbackAvailable(w(e, t));
					}),
					(e.wbg.__wbg_onFSCommand_b13bfd8f38fc3115 = function () {
						return L(function (n, e, t, _, r) {
							return f(n).onFSCommand(w(e, t), w(_, r));
						}, arguments);
					}),
					(e.wbg.__wbindgen_number_get = function (n, e) {
						const t = f(e),
							_ = 'number' == typeof t ? t : void 0;
						(x()[n / 8 + 1] = p(_) ? 0 : _), (v()[n / 4 + 0] = !p(_));
					}),
					(e.wbg.__wbindgen_number_new = function (n) {
						return d(n);
					}),
					(e.wbg.__wbg_new_f9bb493369a83c12 = function (n, e) {
						return d(new Error(w(n, e)));
					}),
					(e.wbg.__wbg_panic_cc9551d881f701ae = function (n, e) {
						f(n).panic(f(e));
					}),
					(e.wbg.__wbindgen_is_undefined = function (n) {
						return void 0 === f(n);
					}),
					(e.wbg.__wbindgen_in = function (n, e) {
						return f(n) in f(e);
					}),
					(e.wbg.__wbindgen_is_bigint = function (n) {
						return 'bigint' == typeof f(n);
					}),
					(e.wbg.__wbindgen_bigint_from_u64 = function (n) {
						return d(BigInt.asUintN(64, n));
					}),
					(e.wbg.__wbindgen_jsval_eq = function (n, e) {
						return f(n) === f(e);
					}),
					(e.wbg.__wbindgen_is_string = function (n) {
						return 'string' == typeof f(n);
					}),
					(e.wbg.__wbg_new_abda76e883ba8a5f = function () {
						return d(new Error());
					}),
					(e.wbg.__wbg_stack_658279fe44541cf6 = function (n, e) {
						const t = y(f(e).stack, b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_error_f851667af71bcfc6 = function (n, e) {
						try {
							console.error(w(n, e));
						} finally {
							b.__wbindgen_free(n, e);
						}
					}),
					(e.wbg.__wbindgen_jsval_loose_eq = function (n, e) {
						return f(n) == f(e);
					}),
					(e.wbg.__wbg_String_91fba7ded13ba54c = function (n, e) {
						const t = y(String(f(e)), b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_getwithrefkey_15c62c2b8546208d = function (n, e) {
						return d(f(n)[f(e)]);
					}),
					(e.wbg.__wbg_set_20cbc34131e76824 = function (n, e, t) {
						f(n)[i(e)] = i(t);
					}),
					(e.wbg.__wbg_randomFillSync_6894564c2c334c42 = function () {
						return L(function (n, e, t) {
							f(n).randomFillSync(O(e, t));
						}, arguments);
					}),
					(e.wbg.__wbg_getRandomValues_805f1c3d65988a5a = function () {
						return L(function (n, e) {
							f(n).getRandomValues(f(e));
						}, arguments);
					}),
					(e.wbg.__wbg_crypto_e1d53a1d73fb10b8 = function (n) {
						return d(f(n).crypto);
					}),
					(e.wbg.__wbg_process_038c26bf42b093f8 = function (n) {
						return d(f(n).process);
					}),
					(e.wbg.__wbg_versions_ab37218d2f0b24a8 = function (n) {
						return d(f(n).versions);
					}),
					(e.wbg.__wbg_node_080f4b19d15bc1fe = function (n) {
						return d(f(n).node);
					}),
					(e.wbg.__wbg_msCrypto_6e7d3e1f92610cbb = function (n) {
						return d(f(n).msCrypto);
					}),
					(e.wbg.__wbg_require_78a3dcfbdba9cbce = function () {
						return L(function () {
							return d(n.require);
						}, arguments);
					}),
					(e.wbg.__wbg_instanceof_WebGl2RenderingContext_fcfa91cd777063f3 = function (n) {
						let e;
						try {
							e = f(n) instanceof WebGL2RenderingContext;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_bindVertexArray_9d12800e272184b0 = function (n, e) {
						f(n).bindVertexArray(f(e));
					}),
					(e.wbg.__wbg_blitFramebuffer_cdc1ebf043046b70 = function (
						n,
						e,
						t,
						_,
						r,
						b,
						c,
						o,
						i,
						u,
						a
					) {
						f(n).blitFramebuffer(e, t, _, r, b, c, o, i, u >>> 0, a >>> 0);
					}),
					(e.wbg.__wbg_createVertexArray_8467a75e68fec199 = function (n) {
						const e = f(n).createVertexArray();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_deleteVertexArray_00194a31d79df7e5 = function (n, e) {
						f(n).deleteVertexArray(f(e));
					}),
					(e.wbg.__wbg_renderbufferStorageMultisample_3e76453eed60554b = function (
						n,
						e,
						t,
						_,
						r,
						b
					) {
						f(n).renderbufferStorageMultisample(e >>> 0, t, _ >>> 0, r, b);
					}),
					(e.wbg.__wbg_texImage2D_0b8061aa6eecc96a = function () {
						return L(function (n, e, t, _, r, b, c, o, i, u, a) {
							f(n).texImage2D(e >>> 0, t, _, r, b, c, o >>> 0, i >>> 0, 0 === u ? void 0 : O(u, a));
						}, arguments);
					}),
					(e.wbg.__wbg_bindFramebuffer_5c01742edd5d843a = function (n, e, t) {
						f(n).bindFramebuffer(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_bindRenderbuffer_f66dee160b94e5ef = function (n, e, t) {
						f(n).bindRenderbuffer(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_bindTexture_ae9620ea4a6ffb97 = function (n, e, t) {
						f(n).bindTexture(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_createFramebuffer_d5f3985ce3652661 = function (n) {
						const e = f(n).createFramebuffer();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_createRenderbuffer_531167a301a60e27 = function (n) {
						const e = f(n).createRenderbuffer();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_createTexture_269f67d411bdc4dc = function (n) {
						const e = f(n).createTexture();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_deleteFramebuffer_d7551444a28f508e = function (n, e) {
						f(n).deleteFramebuffer(f(e));
					}),
					(e.wbg.__wbg_deleteRenderbuffer_58c540348fb8606d = function (n, e) {
						f(n).deleteRenderbuffer(f(e));
					}),
					(e.wbg.__wbg_deleteTexture_68a539339fd87792 = function (n, e) {
						f(n).deleteTexture(f(e));
					}),
					(e.wbg.__wbg_framebufferRenderbuffer_963b305ac8cb6fd6 = function (n, e, t, _, r) {
						f(n).framebufferRenderbuffer(e >>> 0, t >>> 0, _ >>> 0, f(r));
					}),
					(e.wbg.__wbg_framebufferTexture2D_4b810902dffa1ef3 = function (n, e, t, _, r, b) {
						f(n).framebufferTexture2D(e >>> 0, t >>> 0, _ >>> 0, f(r), b);
					}),
					(e.wbg.__wbg_getError_8de2be43ffb2c4e0 = function (n) {
						return f(n).getError();
					}),
					(e.wbg.__wbg_getParameter_4e2ccc745690476a = function () {
						return L(function (n, e) {
							return d(f(n).getParameter(e >>> 0));
						}, arguments);
					}),
					(e.wbg.__wbg_texParameteri_21fd6b6b394882c9 = function (n, e, t, _) {
						f(n).texParameteri(e >>> 0, t >>> 0, _);
					}),
					(e.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4 = function (n) {
						let e;
						try {
							e = f(n) instanceof Window;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_document_3ead31dbcad65886 = function (n) {
						const e = f(n).document;
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_location_8cc8ccf27e342c0a = function (n) {
						return d(f(n).location);
					}),
					(e.wbg.__wbg_devicePixelRatio_476ddb014eb2520a = function (n) {
						return f(n).devicePixelRatio;
					}),
					(e.wbg.__wbg_localStorage_753b6d15a844c3dc = function () {
						return L(function (n) {
							const e = f(n).localStorage;
							return p(e) ? 0 : d(e);
						}, arguments);
					}),
					(e.wbg.__wbg_cancelAnimationFrame_679ac3913d7f9b34 = function () {
						return L(function (n, e) {
							f(n).cancelAnimationFrame(e);
						}, arguments);
					}),
					(e.wbg.__wbg_focus_6335df8e57f2356d = function () {
						return L(function (n) {
							f(n).focus();
						}, arguments);
					}),
					(e.wbg.__wbg_open_8b947bc096f5bb21 = function () {
						return L(function (n, e, t, _, r) {
							const b = f(n).open(w(e, t), w(_, r));
							return p(b) ? 0 : d(b);
						}, arguments);
					}),
					(e.wbg.__wbg_requestAnimationFrame_4181656476a7d86c = function () {
						return L(function (n, e) {
							return f(n).requestAnimationFrame(f(e));
						}, arguments);
					}),
					(e.wbg.__wbg_fetch_0fe04905cccfc2aa = function (n, e) {
						return d(f(n).fetch(f(e)));
					}),
					(e.wbg.__wbg_addColorStop_fd22191e62f12621 = function () {
						return L(function (n, e, t, _) {
							f(n).addColorStop(e, w(t, _));
						}, arguments);
					}),
					(e.wbg.__wbg_inverse_81ff934e39851558 = function (n) {
						return d(f(n).inverse());
					}),
					(e.wbg.__wbg_instanceof_HtmlFormElement_1c489ff7e99e43d3 = function (n) {
						let e;
						try {
							e = f(n) instanceof HTMLFormElement;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_submit_119222e1a26af942 = function () {
						return L(function (n) {
							f(n).submit();
						}, arguments);
					}),
					(e.wbg.__wbg_deltaY_a5393ec7ac0f7bb4 = function (n) {
						return f(n).deltaY;
					}),
					(e.wbg.__wbg_deltaMode_a90be314f5c676f1 = function (n) {
						return f(n).deltaMode;
					}),
					(e.wbg.__wbg_offsetX_8891849b36542d53 = function (n) {
						return f(n).offsetX;
					}),
					(e.wbg.__wbg_offsetY_1f52082687af467b = function (n) {
						return f(n).offsetY;
					}),
					(e.wbg.__wbg_button_2bb5dc0116d6b89b = function (n) {
						return f(n).button;
					}),
					(e.wbg.__wbg_pointerId_18be034781db46f3 = function (n) {
						return f(n).pointerId;
					}),
					(e.wbg.__wbg_instanceof_Response_eaa426220848a39e = function (n) {
						let e;
						try {
							e = f(n) instanceof Response;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_url_74285ddf2747cb3d = function (n, e) {
						const t = y(f(e).url, b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_ok_b8130e51d893123a = function (n) {
						return f(n).ok;
					}),
					(e.wbg.__wbg_statusText_7f6b7d97e47933bd = function (n, e) {
						const t = y(f(e).statusText, b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_arrayBuffer_4c27b6f00c530232 = function () {
						return L(function (n) {
							return d(f(n).arrayBuffer());
						}, arguments);
					}),
					(e.wbg.__wbg_setbuffer_ead89b52e0bf1c40 = function (n, e) {
						f(n).buffer = f(e);
					}),
					(e.wbg.__wbg_setonended_ae460558754eae1e = function (n, e) {
						f(n).onended = f(e);
					}),
					(e.wbg.__wbg_start_e330425e284a693a = function () {
						return L(function (n, e) {
							f(n).start(e);
						}, arguments);
					}),
					(e.wbg.__wbg_connect_463d4300ff833991 = function () {
						return L(function (n, e) {
							return d(f(n).connect(f(e)));
						}, arguments);
					}),
					(e.wbg.__wbg_setTransform_2b3e439b27d4098e = function (n, e) {
						f(n).setTransform(f(e));
					}),
					(e.wbg.__wbg_bindVertexArrayOES_84540c072ea96b75 = function (n, e) {
						f(n).bindVertexArrayOES(f(e));
					}),
					(e.wbg.__wbg_createVertexArrayOES_00a5c523e5b17eff = function (n) {
						const e = f(n).createVertexArrayOES();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_deleteVertexArrayOES_98b83132b3d85825 = function (n, e) {
						f(n).deleteVertexArrayOES(f(e));
					}),
					(e.wbg.__wbg_instanceof_HtmlCanvasElement_97761617af6ea089 = function (n) {
						let e;
						try {
							e = f(n) instanceof HTMLCanvasElement;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_width_2f4b0cbbf1c850d9 = function (n) {
						return f(n).width;
					}),
					(e.wbg.__wbg_setwidth_afb418d3fbf71ba7 = function (n, e) {
						f(n).width = e >>> 0;
					}),
					(e.wbg.__wbg_height_a81d308a000d91d0 = function (n) {
						return f(n).height;
					}),
					(e.wbg.__wbg_setheight_3eb8729b59493242 = function (n, e) {
						f(n).height = e >>> 0;
					}),
					(e.wbg.__wbg_getContext_4d5e97892c1b206a = function () {
						return L(function (n, e, t) {
							const _ = f(n).getContext(w(e, t));
							return p(_) ? 0 : d(_);
						}, arguments);
					}),
					(e.wbg.__wbg_getContext_a6ea7a8e317f182a = function () {
						return L(function (n, e, t, _) {
							const r = f(n).getContext(w(e, t), f(_));
							return p(r) ? 0 : d(r);
						}, arguments);
					}),
					(e.wbg.__wbg_new_83f04a482f055088 = function () {
						return L(function () {
							return d(new Path2D());
						}, arguments);
					}),
					(e.wbg.__wbg_addPath_d48d7b824460f443 = function (n, e, t) {
						f(n).addPath(f(e), f(t));
					}),
					(e.wbg.__wbg_closePath_56f0b905ac4c8ba7 = function (n) {
						f(n).closePath();
					}),
					(e.wbg.__wbg_lineTo_e1466b65cf3748fc = function (n, e, t) {
						f(n).lineTo(e, t);
					}),
					(e.wbg.__wbg_moveTo_ee2170c2ab195dfa = function (n, e, t) {
						f(n).moveTo(e, t);
					}),
					(e.wbg.__wbg_quadraticCurveTo_4f6b64d76c1cb275 = function (n, e, t, _, r) {
						f(n).quadraticCurveTo(e, t, _, r);
					}),
					(e.wbg.__wbg_rect_77f14f0bd1b4a24b = function (n, e, t, _, r) {
						f(n).rect(e, t, _, r);
					}),
					(e.wbg.__wbg_now_8172cd917e5eda6b = function (n) {
						return f(n).now();
					}),
					(e.wbg.__wbg_key_ad4fc49423a94efa = function (n, e) {
						const t = y(f(e).key, b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_code_06787cd3c7a60600 = function (n, e) {
						const t = y(f(e).code, b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbg_newwithstrandinit_05d7180788420c40 = function () {
						return L(function (n, e, t) {
							return d(new Request(w(n, e), f(t)));
						}, arguments);
					}),
					(e.wbg.__wbg_newwithbuffersourcesequenceandoptions_2aa7472e8169c8c5 = function () {
						return L(function (n, e) {
							return d(new Blob(f(n), f(e)));
						}, arguments);
					}),
					(e.wbg.__wbg_a_4c0135ca2c8ce7a5 = function (n) {
						return f(n).a;
					}),
					(e.wbg.__wbg_seta_da6577a0a85c2778 = function (n, e) {
						f(n).a = e;
					}),
					(e.wbg.__wbg_b_4162822a21d6c799 = function (n) {
						return f(n).b;
					}),
					(e.wbg.__wbg_c_ebe252ddb74bc688 = function (n) {
						return f(n).c;
					}),
					(e.wbg.__wbg_d_4f2c1b5fb69ba07f = function (n) {
						return f(n).d;
					}),
					(e.wbg.__wbg_setd_630cdaab51ce88c7 = function (n, e) {
						f(n).d = e;
					}),
					(e.wbg.__wbg_e_ec8bcff5cc8d5ef9 = function (n) {
						return f(n).e;
					}),
					(e.wbg.__wbg_f_7f94e9aa1ba636eb = function (n) {
						return f(n).f;
					}),
					(e.wbg.__wbg_new_23fecc9dcf2dc54d = function () {
						return L(function () {
							return d(new DOMMatrix());
						}, arguments);
					}),
					(e.wbg.__wbg_newwitharray64_a1cf121afec1f953 = function () {
						return L(function (n, e) {
							return d(new DOMMatrix(B(n, e)));
						}, arguments);
					}),
					(e.wbg.__wbg_body_3cb4b4042b9a632b = function (n) {
						const e = f(n).body;
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_createElement_976dbb84fe1661b5 = function () {
						return L(function (n, e, t) {
							return d(f(n).createElement(w(e, t)));
						}, arguments);
					}),
					(e.wbg.__wbg_createElementNS_1561aca8ee3693c0 = function () {
						return L(function (n, e, t, _, r) {
							return d(f(n).createElementNS(0 === e ? void 0 : w(e, t), w(_, r)));
						}, arguments);
					}),
					(e.wbg.__wbg_setid_d6ea60ebd257fe07 = function (n, e, t) {
						f(n).id = w(e, t);
					}),
					(e.wbg.__wbg_clientWidth_999b9163952471ee = function (n) {
						return f(n).clientWidth;
					}),
					(e.wbg.__wbg_clientHeight_1fc8bff4acf145b1 = function (n) {
						return f(n).clientHeight;
					}),
					(e.wbg.__wbg_querySelector_494c823e686113aa = function () {
						return L(function (n, e, t) {
							const _ = f(n).querySelector(w(e, t));
							return p(_) ? 0 : d(_);
						}, arguments);
					}),
					(e.wbg.__wbg_releasePointerCapture_45283df79b1542f3 = function () {
						return L(function (n, e) {
							f(n).releasePointerCapture(e);
						}, arguments);
					}),
					(e.wbg.__wbg_setAttribute_d8436c14a59ab1af = function () {
						return L(function (n, e, t, _, r) {
							f(n).setAttribute(w(e, t), w(_, r));
						}, arguments);
					}),
					(e.wbg.__wbg_setAttributeNS_cfa0d39367e3e143 = function () {
						return L(function (n, e, t, _, r, b, c) {
							f(n).setAttributeNS(0 === e ? void 0 : w(e, t), w(_, r), w(b, c));
						}, arguments);
					}),
					(e.wbg.__wbg_setPointerCapture_7cc6c6e831d5dae0 = function () {
						return L(function (n, e) {
							f(n).setPointerCapture(e);
						}, arguments);
					}),
					(e.wbg.__wbg_remove_a8fdc690909ea566 = function (n) {
						f(n).remove();
					}),
					(e.wbg.__wbg_style_e9380748cee29f13 = function (n) {
						return d(f(n).style);
					}),
					(e.wbg.__wbg_instanceof_WebGlRenderingContext_09249c25390b881f = function (n) {
						let e;
						try {
							e = f(n) instanceof WebGLRenderingContext;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_drawingBufferWidth_77aad8cbcc8a25ad = function (n) {
						return f(n).drawingBufferWidth;
					}),
					(e.wbg.__wbg_drawingBufferHeight_7035dfce71c321bd = function (n) {
						return f(n).drawingBufferHeight;
					}),
					(e.wbg.__wbg_bufferData_32fbc455f6b17a01 = function (n, e, t, _, r) {
						f(n).bufferData(e >>> 0, O(t, _), r >>> 0);
					}),
					(e.wbg.__wbg_texImage2D_4cb921906eba60bf = function () {
						return L(function (n, e, t, _, r, b, c, o, i, u, a) {
							f(n).texImage2D(e >>> 0, t, _, r, b, c, o >>> 0, i >>> 0, 0 === u ? void 0 : O(u, a));
						}, arguments);
					}),
					(e.wbg.__wbg_uniform1fv_3ae8a225eddaeba0 = function (n, e, t, _) {
						f(n).uniform1fv(f(e), P(t, _));
					}),
					(e.wbg.__wbg_uniform4fv_a513dc4d02f192d3 = function (n, e, t, _) {
						f(n).uniform4fv(f(e), P(t, _));
					}),
					(e.wbg.__wbg_uniformMatrix3fv_2b7de3010c8ed627 = function (n, e, t, _, r) {
						f(n).uniformMatrix3fv(f(e), 0 !== t, P(_, r));
					}),
					(e.wbg.__wbg_uniformMatrix4fv_f16e4a5553357886 = function (n, e, t, _, r) {
						f(n).uniformMatrix4fv(f(e), 0 !== t, P(_, r));
					}),
					(e.wbg.__wbg_activeTexture_02b7c73c76c2c06b = function (n, e) {
						f(n).activeTexture(e >>> 0);
					}),
					(e.wbg.__wbg_attachShader_f4d51147351a1906 = function (n, e, t) {
						f(n).attachShader(f(e), f(t));
					}),
					(e.wbg.__wbg_bindBuffer_8b5135aa633680f5 = function (n, e, t) {
						f(n).bindBuffer(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_bindFramebuffer_080d0b0cf22e1645 = function (n, e, t) {
						f(n).bindFramebuffer(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_bindRenderbuffer_6da549f066c1b8a5 = function (n, e, t) {
						f(n).bindRenderbuffer(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_bindTexture_6f1dec563e82e818 = function (n, e, t) {
						f(n).bindTexture(e >>> 0, f(t));
					}),
					(e.wbg.__wbg_blendEquationSeparate_fa6aebc5cd0c5285 = function (n, e, t) {
						f(n).blendEquationSeparate(e >>> 0, t >>> 0);
					}),
					(e.wbg.__wbg_blendFuncSeparate_9fef8acb74d50df5 = function (n, e, t, _, r) {
						f(n).blendFuncSeparate(e >>> 0, t >>> 0, _ >>> 0, r >>> 0);
					}),
					(e.wbg.__wbg_clear_576f67967748e95f = function (n, e) {
						f(n).clear(e >>> 0);
					}),
					(e.wbg.__wbg_clearColor_7489a3fbe484f2f1 = function (n, e, t, _, r) {
						f(n).clearColor(e, t, _, r);
					}),
					(e.wbg.__wbg_colorMask_bc13c97d0db65962 = function (n, e, t, _, r) {
						f(n).colorMask(0 !== e, 0 !== t, 0 !== _, 0 !== r);
					}),
					(e.wbg.__wbg_compileShader_22b038faa1f49857 = function (n, e) {
						f(n).compileShader(f(e));
					}),
					(e.wbg.__wbg_createBuffer_6e747d928c9ba46d = function (n) {
						const e = f(n).createBuffer();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_createProgram_1c5f8dffd1066e71 = function (n) {
						const e = f(n).createProgram();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_createShader_4017d9fbc36659af = function (n, e) {
						const t = f(n).createShader(e >>> 0);
						return p(t) ? 0 : d(t);
					}),
					(e.wbg.__wbg_createTexture_4ce49e8a8c655124 = function (n) {
						const e = f(n).createTexture();
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_deleteBuffer_6fd9bca7f8a6d9de = function (n, e) {
						f(n).deleteBuffer(f(e));
					}),
					(e.wbg.__wbg_deleteTexture_5c40169772519141 = function (n, e) {
						f(n).deleteTexture(f(e));
					}),
					(e.wbg.__wbg_disable_6835d16c2cd3fa26 = function (n, e) {
						f(n).disable(e >>> 0);
					}),
					(e.wbg.__wbg_disableVertexAttribArray_ab474d273ff59265 = function (n, e) {
						f(n).disableVertexAttribArray(e >>> 0);
					}),
					(e.wbg.__wbg_drawElements_e09dbef58c8f099a = function (n, e, t, _, r) {
						f(n).drawElements(e >>> 0, t, _ >>> 0, r);
					}),
					(e.wbg.__wbg_enable_fc393941ac400f72 = function (n, e) {
						f(n).enable(e >>> 0);
					}),
					(e.wbg.__wbg_enableVertexAttribArray_3d21f4936ad4a378 = function (n, e) {
						f(n).enableVertexAttribArray(e >>> 0);
					}),
					(e.wbg.__wbg_getAttribLocation_fcbe16b765cb1de0 = function (n, e, t, _) {
						return f(n).getAttribLocation(f(e), w(t, _));
					}),
					(e.wbg.__wbg_getExtension_d270fbbd8529e85f = function () {
						return L(function (n, e, t) {
							const _ = f(n).getExtension(w(e, t));
							return p(_) ? 0 : d(_);
						}, arguments);
					}),
					(e.wbg.__wbg_getParameter_585a5b83c595ada8 = function () {
						return L(function (n, e) {
							return d(f(n).getParameter(e >>> 0));
						}, arguments);
					}),
					(e.wbg.__wbg_getProgramInfoLog_e47d5073d57fb18d = function (n, e, t) {
						const _ = f(e).getProgramInfoLog(f(t));
						var r = p(_) ? 0 : y(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
							c = s;
						(v()[n / 4 + 1] = c), (v()[n / 4 + 0] = r);
					}),
					(e.wbg.__wbg_getProgramParameter_eaf768a9b399b7cf = function (n, e, t) {
						return d(f(n).getProgramParameter(f(e), t >>> 0));
					}),
					(e.wbg.__wbg_getShaderInfoLog_ec7e5b959e47645b = function (n, e, t) {
						const _ = f(e).getShaderInfoLog(f(t));
						var r = p(_) ? 0 : y(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
							c = s;
						(v()[n / 4 + 1] = c), (v()[n / 4 + 0] = r);
					}),
					(e.wbg.__wbg_getUniformLocation_8e9cc276a231ddcd = function (n, e, t, _) {
						const r = f(n).getUniformLocation(f(e), w(t, _));
						return p(r) ? 0 : d(r);
					}),
					(e.wbg.__wbg_linkProgram_25cda5f9318ea316 = function (n, e) {
						f(n).linkProgram(f(e));
					}),
					(e.wbg.__wbg_pixelStorei_bee1e2da4cb1115b = function (n, e, t) {
						f(n).pixelStorei(e >>> 0, t);
					}),
					(e.wbg.__wbg_shaderSource_a0001b8eab5d44f4 = function (n, e, t, _) {
						f(n).shaderSource(f(e), w(t, _));
					}),
					(e.wbg.__wbg_stencilFunc_b72fb7b1cdf11693 = function (n, e, t, _) {
						f(n).stencilFunc(e >>> 0, t, _ >>> 0);
					}),
					(e.wbg.__wbg_stencilMask_00541859199befd2 = function (n, e) {
						f(n).stencilMask(e >>> 0);
					}),
					(e.wbg.__wbg_stencilOp_3db65a0f2e42c622 = function (n, e, t, _) {
						f(n).stencilOp(e >>> 0, t >>> 0, _ >>> 0);
					}),
					(e.wbg.__wbg_texParameteri_1b210b807f1ea723 = function (n, e, t, _) {
						f(n).texParameteri(e >>> 0, t >>> 0, _);
					}),
					(e.wbg.__wbg_uniform1f_f60e1072e28b8c49 = function (n, e, t) {
						f(n).uniform1f(f(e), t);
					}),
					(e.wbg.__wbg_uniform1i_50124a48de1da66b = function (n, e, t) {
						f(n).uniform1i(f(e), t);
					}),
					(e.wbg.__wbg_useProgram_156511a425feb519 = function (n, e) {
						f(n).useProgram(f(e));
					}),
					(e.wbg.__wbg_vertexAttribPointer_63d2aef49627302b = function (n, e, t, _, r, b, c) {
						f(n).vertexAttribPointer(e >>> 0, t, _ >>> 0, 0 !== r, b, c);
					}),
					(e.wbg.__wbg_viewport_a93f3881c4202d5e = function (n, e, t, _, r) {
						f(n).viewport(e, t, _, r);
					}),
					(e.wbg.__wbg_currentTarget_57b4543ab256dfe7 = function (n) {
						const e = f(n).currentTarget;
						return p(e) ? 0 : d(e);
					}),
					(e.wbg.__wbg_preventDefault_3209279b490de583 = function (n) {
						f(n).preventDefault();
					}),
					(e.wbg.__wbg_addEventListener_cbe4c6f619b032f3 = function () {
						return L(function (n, e, t, _) {
							f(n).addEventListener(w(e, t), f(_));
						}, arguments);
					}),
					(e.wbg.__wbg_addEventListener_1fc744729ac6dc27 = function () {
						return L(function (n, e, t, _, r) {
							f(n).addEventListener(w(e, t), f(_), f(r));
						}, arguments);
					}),
					(e.wbg.__wbg_addEventListener_178e4d0f8a009cd3 = function () {
						return L(function (n, e, t, _, r) {
							f(n).addEventListener(w(e, t), f(_), 0 !== r);
						}, arguments);
					}),
					(e.wbg.__wbg_removeEventListener_dd20475efce70084 = function () {
						return L(function (n, e, t, _) {
							f(n).removeEventListener(w(e, t), f(_));
						}, arguments);
					}),
					(e.wbg.__wbg_removeEventListener_b10f1a66647f3aa0 = function () {
						return L(function (n, e, t, _, r) {
							f(n).removeEventListener(w(e, t), f(_), 0 !== r);
						}, arguments);
					}),
					(e.wbg.__wbg_newwithu8clampedarray_ec4b349a9ae3eaf6 = function () {
						return L(function (n, e, t) {
							return d(new ImageData(D(n, e), t >>> 0));
						}, arguments);
					}),
					(e.wbg.__wbg_baseURI_24f83c3784dbdd7a = function () {
						return L(function (n, e) {
							const t = f(e).baseURI;
							var _ = p(t) ? 0 : y(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
								r = s;
							(v()[n / 4 + 1] = r), (v()[n / 4 + 0] = _);
						}, arguments);
					}),
					(e.wbg.__wbg_appendChild_e513ef0e5098dfdd = function () {
						return L(function (n, e) {
							return d(f(n).appendChild(f(e)));
						}, arguments);
					}),
					(e.wbg.__wbg_debug_f15cb542ea509609 = function (n) {
						console.debug(f(n));
					}),
					(e.wbg.__wbg_error_ef9a0be47931175f = function (n) {
						console.error(f(n));
					}),
					(e.wbg.__wbg_info_2874fdd5393f35ce = function (n) {
						console.info(f(n));
					}),
					(e.wbg.__wbg_log_4b5638ad60bdc54a = function (n) {
						console.log(f(n));
					}),
					(e.wbg.__wbg_warn_58110c4a199df084 = function (n) {
						console.warn(f(n));
					}),
					(e.wbg.__wbg_destination_df4e9893e562390a = function (n) {
						return d(f(n).destination);
					}),
					(e.wbg.__wbg_sampleRate_30180c0ccae55e98 = function (n) {
						return f(n).sampleRate;
					}),
					(e.wbg.__wbg_currentTime_80316e838e7d1028 = function (n) {
						return f(n).currentTime;
					}),
					(e.wbg.__wbg_new_208829b3b7d06214 = function () {
						return L(function () {
							return d(new r());
						}, arguments);
					}),
					(e.wbg.__wbg_close_7d5aa2babb9d8fc2 = function () {
						return L(function (n) {
							return d(f(n).close());
						}, arguments);
					}),
					(e.wbg.__wbg_suspend_8c72404b7450feb3 = function () {
						return L(function (n) {
							return d(f(n).suspend());
						}, arguments);
					}),
					(e.wbg.__wbg_createBuffer_47ef089f86b99318 = function () {
						return L(function (n, e, t, _) {
							return d(f(n).createBuffer(e >>> 0, t >>> 0, _));
						}, arguments);
					}),
					(e.wbg.__wbg_createBufferSource_f06449934aee7f6f = function () {
						return L(function (n) {
							return d(f(n).createBufferSource());
						}, arguments);
					}),
					(e.wbg.__wbg_resume_244684c4c6bb49fa = function () {
						return L(function (n) {
							return d(f(n).resume());
						}, arguments);
					}),
					(e.wbg.__wbg_setProperty_e489dfd8c0a6bffc = function () {
						return L(function (n, e, t, _, r) {
							f(n).setProperty(w(e, t), w(_, r));
						}, arguments);
					}),
					(e.wbg.__wbg_protocol_70cc72a5ff78dc5f = function () {
						return L(function (n, e) {
							const t = y(f(e).protocol, b.__wbindgen_malloc, b.__wbindgen_realloc),
								_ = s;
							(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
						}, arguments);
					}),
					(e.wbg.__wbg_assign_4e2847f30bc3fef3 = function () {
						return L(function (n, e, t) {
							f(n).assign(w(e, t));
						}, arguments);
					}),
					(e.wbg.__wbg_get_5e2f6c6d27821e3f = function () {
						return L(function (n, e, t, _) {
							const r = f(e)[w(t, _)];
							var c = p(r) ? 0 : y(r, b.__wbindgen_malloc, b.__wbindgen_realloc),
								o = s;
							(v()[n / 4 + 1] = o), (v()[n / 4 + 0] = c);
						}, arguments);
					}),
					(e.wbg.__wbg_set_0a2938f1ef0852cf = function () {
						return L(function (n, e, t, _, r) {
							f(n)[w(e, t)] = w(_, r);
						}, arguments);
					}),
					(e.wbg.__wbg_delete_357ce721e4047d75 = function () {
						return L(function (n, e, t) {
							delete f(n)[w(e, t)];
						}, arguments);
					}),
					(e.wbg.__wbg_instanceof_CanvasRenderingContext2d_ff80c06d296e3622 = function (n) {
						let e;
						try {
							e = f(n) instanceof CanvasRenderingContext2D;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_setglobalAlpha_1ab443aee9cf0c66 = function (n, e) {
						f(n).globalAlpha = e;
					}),
					(e.wbg.__wbg_setglobalCompositeOperation_ab45d05cd8734f9f = function () {
						return L(function (n, e, t) {
							f(n).globalCompositeOperation = w(e, t);
						}, arguments);
					}),
					(e.wbg.__wbg_setstrokeStyle_899ea3720dae323b = function (n, e) {
						f(n).strokeStyle = f(e);
					}),
					(e.wbg.__wbg_setfillStyle_53ccf2a9886c1c4d = function (n, e) {
						f(n).fillStyle = f(e);
					}),
					(e.wbg.__wbg_setfilter_b73fcc09bfca8f6d = function (n, e, t) {
						f(n).filter = w(e, t);
					}),
					(e.wbg.__wbg_setimageSmoothingEnabled_495089fb53e4bd73 = function (n, e) {
						f(n).imageSmoothingEnabled = 0 !== e;
					}),
					(e.wbg.__wbg_setlineWidth_64004648773fed7a = function (n, e) {
						f(n).lineWidth = e;
					}),
					(e.wbg.__wbg_setlineCap_81847480524aaabe = function (n, e, t) {
						f(n).lineCap = w(e, t);
					}),
					(e.wbg.__wbg_setlineJoin_460906fc18195c47 = function (n, e, t) {
						f(n).lineJoin = w(e, t);
					}),
					(e.wbg.__wbg_setmiterLimit_913fefb6fe0e896a = function (n, e) {
						f(n).miterLimit = e;
					}),
					(e.wbg.__wbg_drawImage_2dbd3fe01f39300b = function () {
						return L(function (n, e, t, _) {
							f(n).drawImage(f(e), t, _);
						}, arguments);
					}),
					(e.wbg.__wbg_clip_4be1e59aa39a8e8e = function (n, e, t) {
						f(n).clip(f(e), i(t));
					}),
					(e.wbg.__wbg_fill_7da29b528956b8ba = function (n, e, t) {
						f(n).fill(f(e), i(t));
					}),
					(e.wbg.__wbg_stroke_74fc3534f240b639 = function (n, e) {
						f(n).stroke(f(e));
					}),
					(e.wbg.__wbg_createLinearGradient_acec41a619c23be4 = function (n, e, t, _, r) {
						return d(f(n).createLinearGradient(e, t, _, r));
					}),
					(e.wbg.__wbg_createPattern_bd15b1b47a033275 = function () {
						return L(function (n, e, t, _) {
							const r = f(n).createPattern(f(e), w(t, _));
							return p(r) ? 0 : d(r);
						}, arguments);
					}),
					(e.wbg.__wbg_createRadialGradient_ddeb1acd6889300f = function () {
						return L(function (n, e, t, _, r, b, c) {
							return d(f(n).createRadialGradient(e, t, _, r, b, c));
						}, arguments);
					}),
					(e.wbg.__wbg_putImageData_23e0cc41d4fabcde = function () {
						return L(function (n, e, t, _) {
							f(n).putImageData(f(e), t, _);
						}, arguments);
					}),
					(e.wbg.__wbg_clearRect_b3895f56c5ecd19d = function (n, e, t, _, r) {
						f(n).clearRect(e, t, _, r);
					}),
					(e.wbg.__wbg_fillRect_c7a19e13c5242507 = function (n, e, t, _, r) {
						f(n).fillRect(e, t, _, r);
					}),
					(e.wbg.__wbg_restore_556d7c38c007b3fe = function (n) {
						f(n).restore();
					}),
					(e.wbg.__wbg_save_a9bb370fb49c5df7 = function (n) {
						f(n).save();
					}),
					(e.wbg.__wbg_resetTransform_14d523baff625ade = function () {
						return L(function (n) {
							f(n).resetTransform();
						}, arguments);
					}),
					(e.wbg.__wbg_setTransform_f7cb1550b95885ee = function () {
						return L(function (n, e, t, _, r, b, c) {
							f(n).setTransform(e, t, _, r, b, c);
						}, arguments);
					}),
					(e.wbg.__wbg_transform_ddd3e67b70078921 = function () {
						return L(function (n, e, t, _, r, b, c) {
							f(n).transform(e, t, _, r, b, c);
						}, arguments);
					}),
					(e.wbg.__wbg_get_57245cc7d7c7619d = function (n, e) {
						return d(f(n)[e >>> 0]);
					}),
					(e.wbg.__wbg_length_6e3bbe7c8bd4dbd8 = function (n) {
						return f(n).length;
					}),
					(e.wbg.__wbg_new_1d9a920c6bfc44a8 = function () {
						return d(new Array());
					}),
					(e.wbg.__wbg_newnoargs_b5b063fc6c2f0376 = function (n, e) {
						return d(new Function(w(n, e)));
					}),
					(e.wbg.__wbg_next_aaef7c8aa5e212ac = function () {
						return L(function (n) {
							return d(f(n).next());
						}, arguments);
					}),
					(e.wbg.__wbg_done_1b73b0672e15f234 = function (n) {
						return f(n).done;
					}),
					(e.wbg.__wbg_value_1ccc36bc03462d71 = function (n) {
						return d(f(n).value);
					}),
					(e.wbg.__wbg_get_765201544a2b6869 = function () {
						return L(function (n, e) {
							return d(Reflect.get(f(n), f(e)));
						}, arguments);
					}),
					(e.wbg.__wbg_call_97ae9d8645dc388b = function () {
						return L(function (n, e) {
							return d(f(n).call(f(e)));
						}, arguments);
					}),
					(e.wbg.__wbg_new_0b9bfdd97583284e = function () {
						return d(new Object());
					}),
					(e.wbg.__wbg_self_6d479506f72c6a71 = function () {
						return L(function () {
							return d(self.self);
						}, arguments);
					}),
					(e.wbg.__wbg_window_f2557cc78490aceb = function () {
						return L(function () {
							return d(window.window);
						}, arguments);
					}),
					(e.wbg.__wbg_globalThis_7f206bda628d5286 = function () {
						return L(function () {
							return d(globalThis.globalThis);
						}, arguments);
					}),
					(e.wbg.__wbg_global_ba75c50d1cf384f4 = function () {
						return L(function () {
							return d(t.g.global);
						}, arguments);
					}),
					(e.wbg.__wbg_set_a68214f35c417fa9 = function (n, e, t) {
						f(n)[e >>> 0] = i(t);
					}),
					(e.wbg.__wbg_isArray_27c46c67f498e15d = function (n) {
						return Array.isArray(f(n));
					}),
					(e.wbg.__wbg_of_2ba33496c07f1349 = function (n, e) {
						return d(Array.of(f(n), f(e)));
					}),
					(e.wbg.__wbg_push_740e4b286702d964 = function (n, e) {
						return f(n).push(f(e));
					}),
					(e.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b = function (n) {
						let e;
						try {
							e = f(n) instanceof ArrayBuffer;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_new_9427a0d83657ea80 = function (n) {
						return d(new ArrayBuffer(n >>> 0));
					}),
					(e.wbg.__wbg_values_e42671acbf11ec04 = function (n) {
						return d(f(n).values());
					}),
					(e.wbg.__wbg_apply_22a3220d244124da = function () {
						return L(function (n, e, t) {
							return d(f(n).apply(f(e), f(t)));
						}, arguments);
					}),
					(e.wbg.__wbg_call_168da88779e35f61 = function () {
						return L(function (n, e, t) {
							return d(f(n).call(f(e), f(t)));
						}, arguments);
					}),
					(e.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a = function (n) {
						return Number.isSafeInteger(f(n));
					}),
					(e.wbg.__wbg_getTime_cb82adb2556ed13e = function (n) {
						return f(n).getTime();
					}),
					(e.wbg.__wbg_getTimezoneOffset_89bd4275e1ca8341 = function (n) {
						return f(n).getTimezoneOffset();
					}),
					(e.wbg.__wbg_new0_a57059d72c5b7aee = function () {
						return d(new Date());
					}),
					(e.wbg.__wbg_instanceof_Object_595a1007518cbea3 = function (n) {
						let e;
						try {
							e = f(n) instanceof Object;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_entries_65a76a413fc91037 = function (n) {
						return d(Object.entries(f(n)));
					}),
					(e.wbg.__wbg_fromEntries_7abdcb92016eb4b9 = function () {
						return L(function (n) {
							return d(Object.fromEntries(f(n)));
						}, arguments);
					}),
					(e.wbg.__wbg_is_40a66842732708e7 = function (n, e) {
						return Object.is(f(n), f(e));
					}),
					(e.wbg.__wbg_new_9962f939219f1820 = function (n, e) {
						try {
							var t = { a: n, b: e };
							const _ = new Promise((n, e) => {
								const _ = t.a;
								t.a = 0;
								try {
									return (function (n, e, t, _) {
										b.wasm_bindgen__convert__closures__invoke2_mut__h34b4d0e98ac9fd7d(
											n,
											e,
											d(t),
											d(_)
										);
									})(_, t.b, n, e);
								} finally {
									t.a = _;
								}
							});
							return d(_);
						} finally {
							t.a = t.b = 0;
						}
					}),
					(e.wbg.__wbg_resolve_99fe17964f31ffc0 = function (n) {
						return d(Promise.resolve(f(n)));
					}),
					(e.wbg.__wbg_then_11f7a54d67b4bfad = function (n, e) {
						return d(f(n).then(f(e)));
					}),
					(e.wbg.__wbg_then_cedad20fbbd9418a = function (n, e, t) {
						return d(f(n).then(f(e), f(t)));
					}),
					(e.wbg.__wbg_buffer_3f3d764d4747d564 = function (n) {
						return d(f(n).buffer);
					}),
					(e.wbg.__wbg_new_8c3f0052272a457a = function (n) {
						return d(new Uint8Array(f(n)));
					}),
					(e.wbg.__wbg_set_83db9690f9353e79 = function (n, e, t) {
						f(n).set(f(e), t >>> 0);
					}),
					(e.wbg.__wbg_length_9e1ae1900cb0fbd5 = function (n) {
						return f(n).length;
					}),
					(e.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003 = function (n) {
						let e;
						try {
							e = f(n) instanceof Uint8Array;
						} catch {
							e = !1;
						}
						return e;
					}),
					(e.wbg.__wbg_newwithlength_f5933855e4f48a19 = function (n) {
						return d(new Uint8Array(n >>> 0));
					}),
					(e.wbg.__wbg_fill_c9a2401d683fafbb = function (n, e, t, _) {
						return d(f(n).fill(e, t >>> 0, _ >>> 0));
					}),
					(e.wbg.__wbg_subarray_58ad4efbb5bcb886 = function (n, e, t) {
						return d(f(n).subarray(e >>> 0, t >>> 0));
					}),
					(e.wbg.__wbg_ownKeys_bf24e1178641d9f0 = function () {
						return L(function (n) {
							return d(Reflect.ownKeys(f(n)));
						}, arguments);
					}),
					(e.wbg.__wbg_set_bf3f89b92d5a34bf = function () {
						return L(function (n, e, t) {
							return Reflect.set(f(n), f(e), f(t));
						}, arguments);
					}),
					(e.wbg.__wbindgen_bigint_get_as_i64 = function (n, e) {
						const t = f(e),
							_ = 'bigint' == typeof t ? t : void 0;
						((0 === S.byteLength && (S = new BigInt64Array(b.memory.buffer)), S)[n / 8 + 1] = p(_)
							? 0n
							: _),
							(v()[n / 4 + 0] = !p(_));
					}),
					(e.wbg.__wbindgen_debug_string = function (n, e) {
						const t = y(C(f(e)), b.__wbindgen_malloc, b.__wbindgen_realloc),
							_ = s;
						(v()[n / 4 + 1] = _), (v()[n / 4 + 0] = t);
					}),
					(e.wbg.__wbindgen_throw = function (n, e) {
						throw new Error(w(n, e));
					}),
					(e.wbg.__wbindgen_memory = function () {
						return d(b.memory);
					}),
					(e.wbg.__wbindgen_closure_wrapper833 = function (n, e, t) {
						return d(R(n, e, 379, T));
					}),
					(e.wbg.__wbindgen_closure_wrapper834 = function (n, e, t) {
						return d(R(n, e, 379, E));
					}),
					(e.wbg.__wbindgen_closure_wrapper836 = function (n, e, t) {
						return d(R(n, e, 379, E));
					}),
					(e.wbg.__wbindgen_closure_wrapper838 = function (n, e, t) {
						return d(R(n, e, 379, E));
					}),
					(e.wbg.__wbindgen_closure_wrapper841 = function (n, e, t) {
						return d(R(n, e, 379, E));
					}),
					(e.wbg.__wbindgen_closure_wrapper843 = function (n, e, t) {
						return d(R(n, e, 379, F));
					}),
					(e.wbg.__wbindgen_closure_wrapper7136 = function (n, e, t) {
						return d(R(n, e, 3028, k));
					}),
					e
				);
			}
			function j(n, e) {
				return (
					(b = n.exports),
					(G.__wbindgen_wasm_module = e),
					(S = new BigInt64Array()),
					(M = new Float32Array()),
					(A = new Float64Array()),
					(h = new Int32Array()),
					(I = new Uint32Array()),
					(a = new Uint8Array()),
					(W = new Uint8ClampedArray()),
					b
				);
			}
			function q(n) {
				const e = V();
				return (
					n instanceof WebAssembly.Module || (n = new WebAssembly.Module(n)),
					j(new WebAssembly.Instance(n, e), n)
				);
			}
			async function G(n) {
				void 0 === n && (n = new URL(t(931), t.b));
				const e = V();
				('string' == typeof n ||
					('function' == typeof Request && n instanceof Request) ||
					('function' == typeof URL && n instanceof URL)) &&
					(n = fetch(n));
				const { instance: _, module: r } = await (async function (n, e) {
					if ('function' == typeof Response && n instanceof Response) {
						if ('function' == typeof WebAssembly.instantiateStreaming)
							try {
								return await WebAssembly.instantiateStreaming(n, e);
							} catch (e) {
								if ('application/wasm' == n.headers.get('Content-Type')) throw e;
								console.warn(
									'`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n',
									e
								);
							}
						const t = await n.arrayBuffer();
						return await WebAssembly.instantiate(t, e);
					}
					{
						const t = await WebAssembly.instantiate(n, e);
						return t instanceof WebAssembly.Instance ? { instance: t, module: n } : t;
					}
				})(await n, e);
				return j(_, r);
			}
			const H = G;
		}
	}
]);
//# sourceMappingURL=core.ruffle.f6ddc5b37c1f42d63f0c.js.map
