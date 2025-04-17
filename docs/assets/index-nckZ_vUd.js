(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(s) {
    const r = {};
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    );
  }
  function i(s) {
    if (s.ep) return;
    s.ep = !0;
    const r = t(s);
    fetch(s.href, r);
  }
})();
let Fs = [],
  ia = [];
(() => {
  let n =
    'lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o'
      .split(',')
      .map((e) => (e ? parseInt(e, 36) : 1));
  for (let e = 0, t = 0; e < n.length; e++) (e % 2 ? ia : Fs).push((t = t + n[e]));
})();
function jc(n) {
  if (n < 768) return !1;
  for (let e = 0, t = Fs.length; ; ) {
    let i = (e + t) >> 1;
    if (n < Fs[i]) t = i;
    else if (n >= ia[i]) e = i + 1;
    else return !0;
    if (e == t) return !1;
  }
}
function mo(n) {
  return n >= 127462 && n <= 127487;
}
const go = 8205;
function _c(n, e, t = !0, i = !0) {
  return (t ? na : Uc)(n, e, i);
}
function na(n, e, t) {
  if (e == n.length) return e;
  e && sa(n.charCodeAt(e)) && ra(n.charCodeAt(e - 1)) && e--;
  let i = ds(n, e);
  for (e += yo(i); e < n.length; ) {
    let s = ds(n, e);
    if (i == go || s == go || (t && jc(s))) (e += yo(s)), (i = s);
    else if (mo(s)) {
      let r = 0,
        o = e - 2;
      for (; o >= 0 && mo(ds(n, o)); ) r++, (o -= 2);
      if (r % 2 == 0) break;
      e += 2;
    } else break;
  }
  return e;
}
function Uc(n, e, t) {
  for (; e > 0; ) {
    let i = na(n, e - 2, t);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function ds(n, e) {
  let t = n.charCodeAt(e);
  if (!ra(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return sa(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t;
}
function sa(n) {
  return n >= 56320 && n < 57344;
}
function ra(n) {
  return n >= 55296 && n < 56320;
}
function yo(n) {
  return n < 65536 ? 1 : 2;
}
class z {
  lineAt(e) {
    if (e < 0 || e > this.length)
      throw new RangeError(`Invalid position ${e} in document of length ${this.length}`);
    return this.lineInner(e, !1, 1, 0);
  }
  line(e) {
    if (e < 1 || e > this.lines)
      throw new RangeError(`Invalid line number ${e} in ${this.lines}-line document`);
    return this.lineInner(e, !0, 1, 0);
  }
  replace(e, t, i) {
    [e, t] = Qt(this, e, t);
    let s = [];
    return (
      this.decompose(0, e, s, 2),
      i.length && i.decompose(0, i.length, s, 3),
      this.decompose(t, this.length, s, 1),
      Ge.from(s, this.length - (t - e) + i.length)
    );
  }
  append(e) {
    return this.replace(this.length, this.length, e);
  }
  slice(e, t = this.length) {
    [e, t] = Qt(this, e, t);
    let i = [];
    return this.decompose(e, t, i, 0), Ge.from(i, t - e);
  }
  eq(e) {
    if (e == this) return !0;
    if (e.length != this.length || e.lines != this.lines) return !1;
    let t = this.scanIdentical(e, 1),
      i = this.length - this.scanIdentical(e, -1),
      s = new vi(this),
      r = new vi(e);
    for (let o = t, l = t; ; ) {
      if (
        (s.next(o),
        r.next(o),
        (o = 0),
        s.lineBreak != r.lineBreak || s.done != r.done || s.value != r.value)
      )
        return !1;
      if (((l += s.value.length), s.done || l >= i)) return !0;
    }
  }
  iter(e = 1) {
    return new vi(this, e);
  }
  iterRange(e, t = this.length) {
    return new oa(this, e, t);
  }
  iterLines(e, t) {
    let i;
    if (e == null) i = this.iter();
    else {
      t == null && (t = this.lines + 1);
      let s = this.line(e).from;
      i = this.iterRange(
        s,
        Math.max(s, t == this.lines + 1 ? this.length : t <= 1 ? 0 : this.line(t - 1).to),
      );
    }
    return new la(i);
  }
  toString() {
    return this.sliceString(0);
  }
  toJSON() {
    let e = [];
    return this.flatten(e), e;
  }
  constructor() {}
  static of(e) {
    if (e.length == 0) throw new RangeError('A document must have at least one line');
    return e.length == 1 && !e[0] ? z.empty : e.length <= 32 ? new Q(e) : Ge.from(Q.split(e, []));
  }
}
class Q extends z {
  constructor(e, t = Gc(e)) {
    super(), (this.text = e), (this.length = t);
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.text[r],
        l = s + o.length;
      if ((t ? i : l) >= e) return new Yc(s, l, i, o);
      (s = l + 1), i++;
    }
  }
  decompose(e, t, i, s) {
    let r =
      e <= 0 && t >= this.length
        ? this
        : new Q(bo(this.text, e, t), Math.min(t, this.length) - Math.max(0, e));
    if (s & 1) {
      let o = i.pop(),
        l = vn(r.text, o.text.slice(), 0, r.length);
      if (l.length <= 32) i.push(new Q(l, o.length + r.length));
      else {
        let a = l.length >> 1;
        i.push(new Q(l.slice(0, a)), new Q(l.slice(a)));
      }
    } else i.push(r);
  }
  replace(e, t, i) {
    if (!(i instanceof Q)) return super.replace(e, t, i);
    [e, t] = Qt(this, e, t);
    let s = vn(this.text, vn(i.text, bo(this.text, 0, e)), t),
      r = this.length + i.length - (t - e);
    return s.length <= 32 ? new Q(s, r) : Ge.from(Q.split(s, []), r);
  }
  sliceString(
    e,
    t = this.length,
    i = `
`,
  ) {
    [e, t] = Qt(this, e, t);
    let s = '';
    for (let r = 0, o = 0; r <= t && o < this.text.length; o++) {
      let l = this.text[o],
        a = r + l.length;
      r > e && o && (s += i),
        e < a && t > r && (s += l.slice(Math.max(0, e - r), t - r)),
        (r = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.text) e.push(t);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, t) {
    let i = [],
      s = -1;
    for (let r of e)
      i.push(r), (s += r.length + 1), i.length == 32 && (t.push(new Q(i, s)), (i = []), (s = -1));
    return s > -1 && t.push(new Q(i, s)), t;
  }
}
class Ge extends z {
  constructor(e, t) {
    super(), (this.children = e), (this.length = t), (this.lines = 0);
    for (let i of e) this.lines += i.lines;
  }
  lineInner(e, t, i, s) {
    for (let r = 0; ; r++) {
      let o = this.children[r],
        l = s + o.length,
        a = i + o.lines - 1;
      if ((t ? a : l) >= e) return o.lineInner(e, t, i, s);
      (s = l + 1), (i = a + 1);
    }
  }
  decompose(e, t, i, s) {
    for (let r = 0, o = 0; o <= t && r < this.children.length; r++) {
      let l = this.children[r],
        a = o + l.length;
      if (e <= a && t >= o) {
        let h = s & ((o <= e ? 1 : 0) | (a >= t ? 2 : 0));
        o >= e && a <= t && !h ? i.push(l) : l.decompose(e - o, t - o, i, h);
      }
      o = a + 1;
    }
  }
  replace(e, t, i) {
    if ((([e, t] = Qt(this, e, t)), i.lines < this.lines))
      for (let s = 0, r = 0; s < this.children.length; s++) {
        let o = this.children[s],
          l = r + o.length;
        if (e >= r && t <= l) {
          let a = o.replace(e - r, t - r, i),
            h = this.lines - o.lines + a.lines;
          if (a.lines < h >> 4 && a.lines > h >> 6) {
            let c = this.children.slice();
            return (c[s] = a), new Ge(c, this.length - (t - e) + i.length);
          }
          return super.replace(r, l, a);
        }
        r = l + 1;
      }
    return super.replace(e, t, i);
  }
  sliceString(
    e,
    t = this.length,
    i = `
`,
  ) {
    [e, t] = Qt(this, e, t);
    let s = '';
    for (let r = 0, o = 0; r < this.children.length && o <= t; r++) {
      let l = this.children[r],
        a = o + l.length;
      o > e && r && (s += i), e < a && t > o && (s += l.sliceString(e - o, t - o, i)), (o = a + 1);
    }
    return s;
  }
  flatten(e) {
    for (let t of this.children) t.flatten(e);
  }
  scanIdentical(e, t) {
    if (!(e instanceof Ge)) return 0;
    let i = 0,
      [s, r, o, l] =
        t > 0
          ? [0, 0, this.children.length, e.children.length]
          : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; s += t, r += t) {
      if (s == o || r == l) return i;
      let a = this.children[s],
        h = e.children[r];
      if (a != h) return i + a.scanIdentical(h, t);
      i += a.length + 1;
    }
  }
  static from(e, t = e.reduce((i, s) => i + s.length + 1, -1)) {
    let i = 0;
    for (let d of e) i += d.lines;
    if (i < 32) {
      let d = [];
      for (let p of e) p.flatten(d);
      return new Q(d, t);
    }
    let s = Math.max(32, i >> 5),
      r = s << 1,
      o = s >> 1,
      l = [],
      a = 0,
      h = -1,
      c = [];
    function f(d) {
      let p;
      if (d.lines > r && d instanceof Ge) for (let m of d.children) f(m);
      else
        d.lines > o && (a > o || !a)
          ? (u(), l.push(d))
          : d instanceof Q && a && (p = c[c.length - 1]) instanceof Q && d.lines + p.lines <= 32
            ? ((a += d.lines),
              (h += d.length + 1),
              (c[c.length - 1] = new Q(p.text.concat(d.text), p.length + 1 + d.length)))
            : (a + d.lines > s && u(), (a += d.lines), (h += d.length + 1), c.push(d));
    }
    function u() {
      a != 0 && (l.push(c.length == 1 ? c[0] : Ge.from(c, h)), (h = -1), (a = c.length = 0));
    }
    for (let d of e) f(d);
    return u(), l.length == 1 ? l[0] : new Ge(l, t);
  }
}
z.empty = new Q([''], 0);
function Gc(n) {
  let e = -1;
  for (let t of n) e += t.length + 1;
  return e;
}
function vn(n, e, t = 0, i = 1e9) {
  for (let s = 0, r = 0, o = !0; r < n.length && s <= i; r++) {
    let l = n[r],
      a = s + l.length;
    a >= t &&
      (a > i && (l = l.slice(0, i - s)),
      s < t && (l = l.slice(t - s)),
      o ? ((e[e.length - 1] += l), (o = !1)) : e.push(l)),
      (s = a + 1);
  }
  return e;
}
function bo(n, e, t) {
  return vn(n, [''], e, t);
}
class vi {
  constructor(e, t = 1) {
    (this.dir = t),
      (this.done = !1),
      (this.lineBreak = !1),
      (this.value = ''),
      (this.nodes = [e]),
      (this.offsets = [t > 0 ? 1 : (e instanceof Q ? e.text.length : e.children.length) << 1]);
  }
  nextInner(e, t) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1,
        s = this.nodes[i],
        r = this.offsets[i],
        o = r >> 1,
        l = s instanceof Q ? s.text.length : s.children.length;
      if (o == (t > 0 ? l : 0)) {
        if (i == 0) return (this.done = !0), (this.value = ''), this;
        t > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((r & 1) == (t > 0 ? 0 : 1)) {
        if (((this.offsets[i] += t), e == 0))
          return (
            (this.lineBreak = !0),
            (this.value = `
`),
            this
          );
        e--;
      } else if (s instanceof Q) {
        let a = s.text[o + (t < 0 ? -1 : 0)];
        if (((this.offsets[i] += t), a.length > Math.max(0, e)))
          return (this.value = e == 0 ? a : t > 0 ? a.slice(e) : a.slice(0, a.length - e)), this;
        e -= a.length;
      } else {
        let a = s.children[o + (t < 0 ? -1 : 0)];
        e > a.length
          ? ((e -= a.length), (this.offsets[i] += t))
          : (t < 0 && this.offsets[i]--,
            this.nodes.push(a),
            this.offsets.push(
              t > 0 ? 1 : (a instanceof Q ? a.text.length : a.children.length) << 1,
            ));
      }
    }
  }
  next(e = 0) {
    return (
      e < 0 && (this.nextInner(-e, -this.dir), (e = this.value.length)), this.nextInner(e, this.dir)
    );
  }
}
class oa {
  constructor(e, t, i) {
    (this.value = ''),
      (this.done = !1),
      (this.cursor = new vi(e, t > i ? -1 : 1)),
      (this.pos = t > i ? e.length : 0),
      (this.from = Math.min(t, i)),
      (this.to = Math.max(t, i));
  }
  nextInner(e, t) {
    if (t < 0 ? this.pos <= this.from : this.pos >= this.to)
      return (this.value = ''), (this.done = !0), this;
    e += Math.max(0, t < 0 ? this.pos - this.to : this.from - this.pos);
    let i = t < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), (i -= e);
    let { value: s } = this.cursor.next(e);
    return (
      (this.pos += (s.length + e) * t),
      (this.value = s.length <= i ? s : t < 0 ? s.slice(s.length - i) : s.slice(0, i)),
      (this.done = !this.value),
      this
    );
  }
  next(e = 0) {
    return (
      e < 0
        ? (e = Math.max(e, this.from - this.pos))
        : e > 0 && (e = Math.min(e, this.to - this.pos)),
      this.nextInner(e, this.cursor.dir)
    );
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != '';
  }
}
class la {
  constructor(e) {
    (this.inner = e), (this.afterBreak = !0), (this.value = ''), (this.done = !1);
  }
  next(e = 0) {
    let { done: t, lineBreak: i, value: s } = this.inner.next(e);
    return (
      t && this.afterBreak
        ? ((this.value = ''), (this.afterBreak = !1))
        : t
          ? ((this.done = !0), (this.value = ''))
          : i
            ? this.afterBreak
              ? (this.value = '')
              : ((this.afterBreak = !0), this.next())
            : ((this.value = s), (this.afterBreak = !1)),
      this
    );
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < 'u' &&
  ((z.prototype[Symbol.iterator] = function () {
    return this.iter();
  }),
  (vi.prototype[Symbol.iterator] =
    oa.prototype[Symbol.iterator] =
    la.prototype[Symbol.iterator] =
      function () {
        return this;
      }));
class Yc {
  constructor(e, t, i, s) {
    (this.from = e), (this.to = t), (this.number = i), (this.text = s);
  }
  get length() {
    return this.to - this.from;
  }
}
function Qt(n, e, t) {
  return (e = Math.max(0, Math.min(n.length, e))), [e, Math.max(e, Math.min(n.length, t))];
}
function ce(n, e, t = !0, i = !0) {
  return _c(n, e, t, i);
}
function Jc(n) {
  return n >= 56320 && n < 57344;
}
function Xc(n) {
  return n >= 55296 && n < 56320;
}
function we(n, e) {
  let t = n.charCodeAt(e);
  if (!Xc(t) || e + 1 == n.length) return t;
  let i = n.charCodeAt(e + 1);
  return Jc(i) ? ((t - 55296) << 10) + (i - 56320) + 65536 : t;
}
function Pr(n) {
  return n <= 65535
    ? String.fromCharCode(n)
    : ((n -= 65536), String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320));
}
function Ye(n) {
  return n < 65536 ? 1 : 2;
}
const Vs = /\r\n?|\n/;
var ye = (function (n) {
  return (
    (n[(n.Simple = 0)] = 'Simple'),
    (n[(n.TrackDel = 1)] = 'TrackDel'),
    (n[(n.TrackBefore = 2)] = 'TrackBefore'),
    (n[(n.TrackAfter = 3)] = 'TrackAfter'),
    n
  );
})(ye || (ye = {}));
class et {
  constructor(e) {
    this.sections = e;
  }
  get length() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) e += this.sections[t];
    return e;
  }
  get newLength() {
    let e = 0;
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t + 1];
      e += i < 0 ? this.sections[t] : i;
    }
    return e;
  }
  get empty() {
    return this.sections.length == 0 || (this.sections.length == 2 && this.sections[1] < 0);
  }
  iterGaps(e) {
    for (let t = 0, i = 0, s = 0; t < this.sections.length; ) {
      let r = this.sections[t++],
        o = this.sections[t++];
      o < 0 ? (e(i, s, r), (s += r)) : (s += o), (i += r);
    }
  }
  iterChangedRanges(e, t = !1) {
    Ws(this, e, t);
  }
  get invertedDesc() {
    let e = [];
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        s = this.sections[t++];
      s < 0 ? e.push(i, s) : e.push(s, i);
    }
    return new et(e);
  }
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : aa(this, e);
  }
  mapDesc(e, t = !1) {
    return e.empty ? this : zs(this, e, t);
  }
  mapPos(e, t = -1, i = ye.Simple) {
    let s = 0,
      r = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++],
        a = this.sections[o++],
        h = s + l;
      if (a < 0) {
        if (h > e) return r + (e - s);
        r += l;
      } else {
        if (
          i != ye.Simple &&
          h >= e &&
          ((i == ye.TrackDel && s < e && h > e) ||
            (i == ye.TrackBefore && s < e) ||
            (i == ye.TrackAfter && h > e))
        )
          return null;
        if (h > e || (h == e && t < 0 && !l)) return e == s || t < 0 ? r : r + a;
        r += a;
      }
      s = h;
    }
    if (e > s) throw new RangeError(`Position ${e} is out of range for changeset of length ${s}`);
    return r;
  }
  touchesRange(e, t = e) {
    for (let i = 0, s = 0; i < this.sections.length && s <= t; ) {
      let r = this.sections[i++],
        o = this.sections[i++],
        l = s + r;
      if (o >= 0 && s <= t && l >= e) return s < e && l > t ? 'cover' : !0;
      s = l;
    }
    return !1;
  }
  toString() {
    let e = '';
    for (let t = 0; t < this.sections.length; ) {
      let i = this.sections[t++],
        s = this.sections[t++];
      e += (e ? ' ' : '') + i + (s >= 0 ? ':' + s : '');
    }
    return e;
  }
  toJSON() {
    return this.sections;
  }
  static fromJSON(e) {
    if (!Array.isArray(e) || e.length % 2 || e.some((t) => typeof t != 'number'))
      throw new RangeError('Invalid JSON representation of ChangeDesc');
    return new et(e);
  }
  static create(e) {
    return new et(e);
  }
}
class ie extends et {
  constructor(e, t) {
    super(e), (this.inserted = t);
  }
  apply(e) {
    if (this.length != e.length)
      throw new RangeError('Applying change set to a document with the wrong length');
    return Ws(this, (t, i, s, r, o) => (e = e.replace(s, s + (i - t), o)), !1), e;
  }
  mapDesc(e, t = !1) {
    return zs(this, e, t, !0);
  }
  invert(e) {
    let t = this.sections.slice(),
      i = [];
    for (let s = 0, r = 0; s < t.length; s += 2) {
      let o = t[s],
        l = t[s + 1];
      if (l >= 0) {
        (t[s] = l), (t[s + 1] = o);
        let a = s >> 1;
        for (; i.length < a; ) i.push(z.empty);
        i.push(o ? e.slice(r, r + o) : z.empty);
      }
      r += o;
    }
    return new ie(t, i);
  }
  compose(e) {
    return this.empty ? e : e.empty ? this : aa(this, e, !0);
  }
  map(e, t = !1) {
    return e.empty ? this : zs(this, e, t, !0);
  }
  iterChanges(e, t = !1) {
    Ws(this, e, t);
  }
  get desc() {
    return et.create(this.sections);
  }
  filter(e) {
    let t = [],
      i = [],
      s = [],
      r = new Ti(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || (l == a && r.len == 0); ) {
        if (r.done) break e;
        let c = Math.min(r.len, a - l);
        fe(s, c, -1);
        let f = r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0;
        fe(t, c, f), f > 0 && pt(i, t, r.text), r.forward(c), (l += c);
      }
      let h = e[o++];
      for (; l < h; ) {
        if (r.done) break e;
        let c = Math.min(r.len, h - l);
        fe(t, c, -1), fe(s, c, r.ins == -1 ? -1 : r.off == 0 ? r.ins : 0), r.forward(c), (l += c);
      }
    }
    return { changes: new ie(t, i), filtered: et.create(s) };
  }
  toJSON() {
    let e = [];
    for (let t = 0; t < this.sections.length; t += 2) {
      let i = this.sections[t],
        s = this.sections[t + 1];
      s < 0 ? e.push(i) : s == 0 ? e.push([i]) : e.push([i].concat(this.inserted[t >> 1].toJSON()));
    }
    return e;
  }
  static of(e, t, i) {
    let s = [],
      r = [],
      o = 0,
      l = null;
    function a(c = !1) {
      if (!c && !s.length) return;
      o < t && fe(s, t - o, -1);
      let f = new ie(s, r);
      (l = l ? l.compose(f.map(l)) : f), (s = []), (r = []), (o = 0);
    }
    function h(c) {
      if (Array.isArray(c)) for (let f of c) h(f);
      else if (c instanceof ie) {
        if (c.length != t)
          throw new RangeError(`Mismatched change set length (got ${c.length}, expected ${t})`);
        a(), (l = l ? l.compose(c.map(l)) : c);
      } else {
        let { from: f, to: u = f, insert: d } = c;
        if (f > u || f < 0 || u > t)
          throw new RangeError(`Invalid change range ${f} to ${u} (in doc of length ${t})`);
        let p = d ? (typeof d == 'string' ? z.of(d.split(i || Vs)) : d) : z.empty,
          m = p.length;
        if (f == u && m == 0) return;
        f < o && a(), f > o && fe(s, f - o, -1), fe(s, u - f, m), pt(r, s, p), (o = u);
      }
    }
    return h(e), a(!l), l;
  }
  static empty(e) {
    return new ie(e ? [e, -1] : [], []);
  }
  static fromJSON(e) {
    if (!Array.isArray(e)) throw new RangeError('Invalid JSON representation of ChangeSet');
    let t = [],
      i = [];
    for (let s = 0; s < e.length; s++) {
      let r = e[s];
      if (typeof r == 'number') t.push(r, -1);
      else {
        if (
          !Array.isArray(r) ||
          typeof r[0] != 'number' ||
          r.some((o, l) => l && typeof o != 'string')
        )
          throw new RangeError('Invalid JSON representation of ChangeSet');
        if (r.length == 1) t.push(r[0], 0);
        else {
          for (; i.length < s; ) i.push(z.empty);
          (i[s] = z.of(r.slice(1))), t.push(r[0], i[s].length);
        }
      }
    }
    return new ie(t, i);
  }
  static createSet(e, t) {
    return new ie(e, t);
  }
}
function fe(n, e, t, i = !1) {
  if (e == 0 && t <= 0) return;
  let s = n.length - 2;
  s >= 0 && t <= 0 && t == n[s + 1]
    ? (n[s] += e)
    : s >= 0 && e == 0 && n[s] == 0
      ? (n[s + 1] += t)
      : i
        ? ((n[s] += e), (n[s + 1] += t))
        : n.push(e, t);
}
function pt(n, e, t) {
  if (t.length == 0) return;
  let i = (e.length - 2) >> 1;
  if (i < n.length) n[n.length - 1] = n[n.length - 1].append(t);
  else {
    for (; n.length < i; ) n.push(z.empty);
    n.push(t);
  }
}
function Ws(n, e, t) {
  let i = n.inserted;
  for (let s = 0, r = 0, o = 0; o < n.sections.length; ) {
    let l = n.sections[o++],
      a = n.sections[o++];
    if (a < 0) (s += l), (r += l);
    else {
      let h = s,
        c = r,
        f = z.empty;
      for (
        ;
        (h += l),
          (c += a),
          a && i && (f = f.append(i[(o - 2) >> 1])),
          !(t || o == n.sections.length || n.sections[o + 1] < 0);

      )
        (l = n.sections[o++]), (a = n.sections[o++]);
      e(s, h, r, c, f), (s = h), (r = c);
    }
  }
}
function zs(n, e, t, i = !1) {
  let s = [],
    r = i ? [] : null,
    o = new Ti(n),
    l = new Ti(e);
  for (let a = -1; ; ) {
    if ((o.done && l.len) || (l.done && o.len)) throw new Error('Mismatched change set lengths');
    if (o.ins == -1 && l.ins == -1) {
      let h = Math.min(o.len, l.len);
      fe(s, h, -1), o.forward(h), l.forward(h);
    } else if (
      l.ins >= 0 &&
      (o.ins < 0 || a == o.i || (o.off == 0 && (l.len < o.len || (l.len == o.len && !t))))
    ) {
      let h = l.len;
      for (fe(s, l.ins, -1); h; ) {
        let c = Math.min(o.len, h);
        o.ins >= 0 && a < o.i && o.len <= c && (fe(s, 0, o.ins), r && pt(r, s, o.text), (a = o.i)),
          o.forward(c),
          (h -= c);
      }
      l.next();
    } else if (o.ins >= 0) {
      let h = 0,
        c = o.len;
      for (; c; )
        if (l.ins == -1) {
          let f = Math.min(c, l.len);
          (h += f), (c -= f), l.forward(f);
        } else if (l.ins == 0 && l.len < c) (c -= l.len), l.next();
        else break;
      fe(s, h, a < o.i ? o.ins : 0),
        r && a < o.i && pt(r, s, o.text),
        (a = o.i),
        o.forward(o.len - c);
    } else {
      if (o.done && l.done) return r ? ie.createSet(s, r) : et.create(s);
      throw new Error('Mismatched change set lengths');
    }
  }
}
function aa(n, e, t = !1) {
  let i = [],
    s = t ? [] : null,
    r = new Ti(n),
    o = new Ti(e);
  for (let l = !1; ; ) {
    if (r.done && o.done) return s ? ie.createSet(i, s) : et.create(i);
    if (r.ins == 0) fe(i, r.len, 0, l), r.next();
    else if (o.len == 0 && !o.done) fe(i, 0, o.ins, l), s && pt(s, i, o.text), o.next();
    else {
      if (r.done || o.done) throw new Error('Mismatched change set lengths');
      {
        let a = Math.min(r.len2, o.len),
          h = i.length;
        if (r.ins == -1) {
          let c = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          fe(i, a, c, l), s && c && pt(s, i, o.text);
        } else
          o.ins == -1
            ? (fe(i, r.off ? 0 : r.len, a, l), s && pt(s, i, r.textBit(a)))
            : (fe(i, r.off ? 0 : r.len, o.off ? 0 : o.ins, l), s && !o.off && pt(s, i, o.text));
        (l = (r.ins > a || (o.ins >= 0 && o.len > a)) && (l || i.length > h)),
          r.forward2(a),
          o.forward(a);
      }
    }
  }
}
class Ti {
  constructor(e) {
    (this.set = e), (this.i = 0), this.next();
  }
  next() {
    let { sections: e } = this.set;
    this.i < e.length
      ? ((this.len = e[this.i++]), (this.ins = e[this.i++]))
      : ((this.len = 0), (this.ins = -2)),
      (this.off = 0);
  }
  get done() {
    return this.ins == -2;
  }
  get len2() {
    return this.ins < 0 ? this.len : this.ins;
  }
  get text() {
    let { inserted: e } = this.set,
      t = (this.i - 2) >> 1;
    return t >= e.length ? z.empty : e[t];
  }
  textBit(e) {
    let { inserted: t } = this.set,
      i = (this.i - 2) >> 1;
    return i >= t.length && !e ? z.empty : t[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : ((this.len -= e), (this.off += e));
  }
  forward2(e) {
    this.ins == -1
      ? this.forward(e)
      : e == this.ins
        ? this.next()
        : ((this.ins -= e), (this.off += e));
  }
}
class Ot {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.flags = i);
  }
  get anchor() {
    return this.flags & 32 ? this.to : this.from;
  }
  get head() {
    return this.flags & 32 ? this.from : this.to;
  }
  get empty() {
    return this.from == this.to;
  }
  get assoc() {
    return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
  }
  get bidiLevel() {
    let e = this.flags & 7;
    return e == 7 ? null : e;
  }
  get goalColumn() {
    let e = this.flags >> 6;
    return e == 16777215 ? void 0 : e;
  }
  map(e, t = -1) {
    let i, s;
    return (
      this.empty
        ? (i = s = e.mapPos(this.from, t))
        : ((i = e.mapPos(this.from, 1)), (s = e.mapPos(this.to, -1))),
      i == this.from && s == this.to ? this : new Ot(i, s, this.flags)
    );
  }
  extend(e, t = e) {
    if (e <= this.anchor && t >= this.anchor) return b.range(e, t);
    let i = Math.abs(e - this.anchor) > Math.abs(t - this.anchor) ? e : t;
    return b.range(this.anchor, i);
  }
  eq(e, t = !1) {
    return (
      this.anchor == e.anchor && this.head == e.head && (!t || !this.empty || this.assoc == e.assoc)
    );
  }
  toJSON() {
    return { anchor: this.anchor, head: this.head };
  }
  static fromJSON(e) {
    if (!e || typeof e.anchor != 'number' || typeof e.head != 'number')
      throw new RangeError('Invalid JSON representation for SelectionRange');
    return b.range(e.anchor, e.head);
  }
  static create(e, t, i) {
    return new Ot(e, t, i);
  }
}
class b {
  constructor(e, t) {
    (this.ranges = e), (this.mainIndex = t);
  }
  map(e, t = -1) {
    return e.empty
      ? this
      : b.create(
          this.ranges.map((i) => i.map(e, t)),
          this.mainIndex,
        );
  }
  eq(e, t = !1) {
    if (this.ranges.length != e.ranges.length || this.mainIndex != e.mainIndex) return !1;
    for (let i = 0; i < this.ranges.length; i++) if (!this.ranges[i].eq(e.ranges[i], t)) return !1;
    return !0;
  }
  get main() {
    return this.ranges[this.mainIndex];
  }
  asSingle() {
    return this.ranges.length == 1 ? this : new b([this.main], 0);
  }
  addRange(e, t = !0) {
    return b.create([e].concat(this.ranges), t ? 0 : this.mainIndex + 1);
  }
  replaceRange(e, t = this.mainIndex) {
    let i = this.ranges.slice();
    return (i[t] = e), b.create(i, this.mainIndex);
  }
  toJSON() {
    return { ranges: this.ranges.map((e) => e.toJSON()), main: this.mainIndex };
  }
  static fromJSON(e) {
    if (!e || !Array.isArray(e.ranges) || typeof e.main != 'number' || e.main >= e.ranges.length)
      throw new RangeError('Invalid JSON representation for EditorSelection');
    return new b(
      e.ranges.map((t) => Ot.fromJSON(t)),
      e.main,
    );
  }
  static single(e, t = e) {
    return new b([b.range(e, t)], 0);
  }
  static create(e, t = 0) {
    if (e.length == 0) throw new RangeError('A selection needs at least one range');
    for (let i = 0, s = 0; s < e.length; s++) {
      let r = e[s];
      if (r.empty ? r.from <= i : r.from < i) return b.normalized(e.slice(), t);
      i = r.to;
    }
    return new b(e, t);
  }
  static cursor(e, t = 0, i, s) {
    return Ot.create(
      e,
      e,
      (t == 0 ? 0 : t < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | ((s ?? 16777215) << 6),
    );
  }
  static range(e, t, i, s) {
    let r = ((i ?? 16777215) << 6) | (s == null ? 7 : Math.min(6, s));
    return t < e ? Ot.create(t, e, 48 | r) : Ot.create(e, t, (t > e ? 8 : 0) | r);
  }
  static normalized(e, t = 0) {
    let i = e[t];
    e.sort((s, r) => s.from - r.from), (t = e.indexOf(i));
    for (let s = 1; s < e.length; s++) {
      let r = e[s],
        o = e[s - 1];
      if (r.empty ? r.from <= o.to : r.from < o.to) {
        let l = o.from,
          a = Math.max(r.to, o.to);
        s <= t && t--, e.splice(--s, 2, r.anchor > r.head ? b.range(a, l) : b.range(l, a));
      }
    }
    return new b(e, t);
  }
}
function ha(n, e) {
  for (let t of n.ranges)
    if (t.to > e) throw new RangeError('Selection points outside of document');
}
let Rr = 0;
class D {
  constructor(e, t, i, s, r) {
    (this.combine = e),
      (this.compareInput = t),
      (this.compare = i),
      (this.isStatic = s),
      (this.id = Rr++),
      (this.default = e([])),
      (this.extensions = typeof r == 'function' ? r(this) : r);
  }
  get reader() {
    return this;
  }
  static define(e = {}) {
    return new D(
      e.combine || ((t) => t),
      e.compareInput || ((t, i) => t === i),
      e.compare || (e.combine ? (t, i) => t === i : Ir),
      !!e.static,
      e.enables,
    );
  }
  of(e) {
    return new kn([], this, 0, e);
  }
  compute(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new kn(e, this, 1, t);
  }
  computeN(e, t) {
    if (this.isStatic) throw new Error("Can't compute a static facet");
    return new kn(e, this, 2, t);
  }
  from(e, t) {
    return t || (t = (i) => i), this.compute([e], (i) => t(i.field(e)));
  }
}
function Ir(n, e) {
  return n == e || (n.length == e.length && n.every((t, i) => t === e[i]));
}
class kn {
  constructor(e, t, i, s) {
    (this.dependencies = e), (this.facet = t), (this.type = i), (this.value = s), (this.id = Rr++);
  }
  dynamicSlot(e) {
    var t;
    let i = this.value,
      s = this.facet.compareInput,
      r = this.id,
      o = e[r] >> 1,
      l = this.type == 2,
      a = !1,
      h = !1,
      c = [];
    for (let f of this.dependencies)
      f == 'doc'
        ? (a = !0)
        : f == 'selection'
          ? (h = !0)
          : (((t = e[f.id]) !== null && t !== void 0 ? t : 1) & 1) == 0 && c.push(e[f.id]);
    return {
      create(f) {
        return (f.values[o] = i(f)), 1;
      },
      update(f, u) {
        if ((a && u.docChanged) || (h && (u.docChanged || u.selection)) || qs(f, c)) {
          let d = i(f);
          if (l ? !xo(d, f.values[o], s) : !s(d, f.values[o])) return (f.values[o] = d), 1;
        }
        return 0;
      },
      reconfigure: (f, u) => {
        let d,
          p = u.config.address[r];
        if (p != null) {
          let m = Bn(u, p);
          if (
            this.dependencies.every((g) =>
              g instanceof D
                ? u.facet(g) === f.facet(g)
                : g instanceof re
                  ? u.field(g, !1) == f.field(g, !1)
                  : !0,
            ) ||
            (l ? xo((d = i(f)), m, s) : s((d = i(f)), m))
          )
            return (f.values[o] = m), 0;
        } else d = i(f);
        return (f.values[o] = d), 1;
      },
    };
  }
}
function xo(n, e, t) {
  if (n.length != e.length) return !1;
  for (let i = 0; i < n.length; i++) if (!t(n[i], e[i])) return !1;
  return !0;
}
function qs(n, e) {
  let t = !1;
  for (let i of e) ki(n, i) & 1 && (t = !0);
  return t;
}
function Qc(n, e, t) {
  let i = t.map((a) => n[a.id]),
    s = t.map((a) => a.type),
    r = i.filter((a) => !(a & 1)),
    o = n[e.id] >> 1;
  function l(a) {
    let h = [];
    for (let c = 0; c < i.length; c++) {
      let f = Bn(a, i[c]);
      if (s[c] == 2) for (let u of f) h.push(u);
      else h.push(f);
    }
    return e.combine(h);
  }
  return {
    create(a) {
      for (let h of i) ki(a, h);
      return (a.values[o] = l(a)), 1;
    },
    update(a, h) {
      if (!qs(a, r)) return 0;
      let c = l(a);
      return e.compare(c, a.values[o]) ? 0 : ((a.values[o] = c), 1);
    },
    reconfigure(a, h) {
      let c = qs(a, i),
        f = h.config.facets[e.id],
        u = h.facet(e);
      if (f && !c && Ir(t, f)) return (a.values[o] = u), 0;
      let d = l(a);
      return e.compare(d, u) ? ((a.values[o] = u), 0) : ((a.values[o] = d), 1);
    },
  };
}
const Xi = D.define({ static: !0 });
class re {
  constructor(e, t, i, s, r) {
    (this.id = e),
      (this.createF = t),
      (this.updateF = i),
      (this.compareF = s),
      (this.spec = r),
      (this.provides = void 0);
  }
  static define(e) {
    let t = new re(Rr++, e.create, e.update, e.compare || ((i, s) => i === s), e);
    return e.provide && (t.provides = e.provide(t)), t;
  }
  create(e) {
    let t = e.facet(Xi).find((i) => i.field == this);
    return ((t == null ? void 0 : t.create) || this.createF)(e);
  }
  slot(e) {
    let t = e[this.id] >> 1;
    return {
      create: (i) => ((i.values[t] = this.create(i)), 1),
      update: (i, s) => {
        let r = i.values[t],
          o = this.updateF(r, s);
        return this.compareF(r, o) ? 0 : ((i.values[t] = o), 1);
      },
      reconfigure: (i, s) => {
        let r = i.facet(Xi),
          o = s.facet(Xi),
          l;
        return (l = r.find((a) => a.field == this)) && l != o.find((a) => a.field == this)
          ? ((i.values[t] = l.create(i)), 1)
          : s.config.address[this.id] != null
            ? ((i.values[t] = s.field(this)), 0)
            : ((i.values[t] = this.create(i)), 1);
      },
    };
  }
  init(e) {
    return [this, Xi.of({ field: this, create: e })];
  }
  get extension() {
    return this;
  }
}
const Tt = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function ai(n) {
  return (e) => new ca(e, n);
}
const Wt = {
  highest: ai(Tt.highest),
  high: ai(Tt.high),
  default: ai(Tt.default),
  low: ai(Tt.low),
  lowest: ai(Tt.lowest),
};
class ca {
  constructor(e, t) {
    (this.inner = e), (this.prec = t);
  }
}
class es {
  of(e) {
    return new $s(this, e);
  }
  reconfigure(e) {
    return es.reconfigure.of({ compartment: this, extension: e });
  }
  get(e) {
    return e.config.compartments.get(this);
  }
}
class $s {
  constructor(e, t) {
    (this.compartment = e), (this.inner = t);
  }
}
class Ln {
  constructor(e, t, i, s, r, o) {
    for (
      this.base = e,
        this.compartments = t,
        this.dynamicSlots = i,
        this.address = s,
        this.staticValues = r,
        this.facets = o,
        this.statusTemplate = [];
      this.statusTemplate.length < i.length;

    )
      this.statusTemplate.push(0);
  }
  staticFacet(e) {
    let t = this.address[e.id];
    return t == null ? e.default : this.staticValues[t >> 1];
  }
  static resolve(e, t, i) {
    let s = [],
      r = Object.create(null),
      o = new Map();
    for (let u of Zc(e, t, o))
      u instanceof re ? s.push(u) : (r[u.facet.id] || (r[u.facet.id] = [])).push(u);
    let l = Object.create(null),
      a = [],
      h = [];
    for (let u of s) (l[u.id] = h.length << 1), h.push((d) => u.slot(d));
    let c = i == null ? void 0 : i.config.facets;
    for (let u in r) {
      let d = r[u],
        p = d[0].facet,
        m = (c && c[u]) || [];
      if (d.every((g) => g.type == 0))
        if (((l[p.id] = (a.length << 1) | 1), Ir(m, d))) a.push(i.facet(p));
        else {
          let g = p.combine(d.map((y) => y.value));
          a.push(i && p.compare(g, i.facet(p)) ? i.facet(p) : g);
        }
      else {
        for (let g of d)
          g.type == 0
            ? ((l[g.id] = (a.length << 1) | 1), a.push(g.value))
            : ((l[g.id] = h.length << 1), h.push((y) => g.dynamicSlot(y)));
        (l[p.id] = h.length << 1), h.push((g) => Qc(g, p, d));
      }
    }
    let f = h.map((u) => u(l));
    return new Ln(e, o, f, l, a, r);
  }
}
function Zc(n, e, t) {
  let i = [[], [], [], [], []],
    s = new Map();
  function r(o, l) {
    let a = s.get(o);
    if (a != null) {
      if (a <= l) return;
      let h = i[a].indexOf(o);
      h > -1 && i[a].splice(h, 1), o instanceof $s && t.delete(o.compartment);
    }
    if ((s.set(o, l), Array.isArray(o))) for (let h of o) r(h, l);
    else if (o instanceof $s) {
      if (t.has(o.compartment)) throw new RangeError('Duplicate use of compartment in extensions');
      let h = e.get(o.compartment) || o.inner;
      t.set(o.compartment, h), r(h, l);
    } else if (o instanceof ca) r(o.inner, o.prec);
    else if (o instanceof re) i[l].push(o), o.provides && r(o.provides, l);
    else if (o instanceof kn) i[l].push(o), o.facet.extensions && r(o.facet.extensions, Tt.default);
    else {
      let h = o.extension;
      if (!h)
        throw new Error(
          `Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`,
        );
      r(h, l);
    }
  }
  return r(n, Tt.default), i.reduce((o, l) => o.concat(l));
}
function ki(n, e) {
  if (e & 1) return 2;
  let t = e >> 1,
    i = n.status[t];
  if (i == 4) throw new Error('Cyclic dependency between fields and/or facets');
  if (i & 2) return i;
  n.status[t] = 4;
  let s = n.computeSlot(n, n.config.dynamicSlots[t]);
  return (n.status[t] = 2 | s);
}
function Bn(n, e) {
  return e & 1 ? n.config.staticValues[e >> 1] : n.values[e >> 1];
}
const fa = D.define(),
  Ks = D.define({ combine: (n) => n.some((e) => e), static: !0 }),
  ua = D.define({ combine: (n) => (n.length ? n[0] : void 0), static: !0 }),
  da = D.define(),
  pa = D.define(),
  ma = D.define(),
  ga = D.define({ combine: (n) => (n.length ? n[0] : !1) });
class ct {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  static define() {
    return new ef();
  }
}
class ef {
  of(e) {
    return new ct(this, e);
  }
}
class tf {
  constructor(e) {
    this.map = e;
  }
  of(e) {
    return new P(this, e);
  }
}
class P {
  constructor(e, t) {
    (this.type = e), (this.value = t);
  }
  map(e) {
    let t = this.type.map(this.value, e);
    return t === void 0 ? void 0 : t == this.value ? this : new P(this.type, t);
  }
  is(e) {
    return this.type == e;
  }
  static define(e = {}) {
    return new tf(e.map || ((t) => t));
  }
  static mapEffects(e, t) {
    if (!e.length) return e;
    let i = [];
    for (let s of e) {
      let r = s.map(t);
      r && i.push(r);
    }
    return i;
  }
}
P.reconfigure = P.define();
P.appendConfig = P.define();
class ne {
  constructor(e, t, i, s, r, o) {
    (this.startState = e),
      (this.changes = t),
      (this.selection = i),
      (this.effects = s),
      (this.annotations = r),
      (this.scrollIntoView = o),
      (this._doc = null),
      (this._state = null),
      i && ha(i, t.newLength),
      r.some((l) => l.type == ne.time) || (this.annotations = r.concat(ne.time.of(Date.now())));
  }
  static create(e, t, i, s, r, o) {
    return new ne(e, t, i, s, r, o);
  }
  get newDoc() {
    return this._doc || (this._doc = this.changes.apply(this.startState.doc));
  }
  get newSelection() {
    return this.selection || this.startState.selection.map(this.changes);
  }
  get state() {
    return this._state || this.startState.applyTransaction(this), this._state;
  }
  annotation(e) {
    for (let t of this.annotations) if (t.type == e) return t.value;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get reconfigured() {
    return this.startState.config != this.state.config;
  }
  isUserEvent(e) {
    let t = this.annotation(ne.userEvent);
    return !!(
      t &&
      (t == e || (t.length > e.length && t.slice(0, e.length) == e && t[e.length] == '.'))
    );
  }
}
ne.time = ct.define();
ne.userEvent = ct.define();
ne.addToHistory = ct.define();
ne.remote = ct.define();
function nf(n, e) {
  let t = [];
  for (let i = 0, s = 0; ; ) {
    let r, o;
    if (i < n.length && (s == e.length || e[s] >= n[i])) (r = n[i++]), (o = n[i++]);
    else if (s < e.length) (r = e[s++]), (o = e[s++]);
    else return t;
    !t.length || t[t.length - 1] < r ? t.push(r, o) : t[t.length - 1] < o && (t[t.length - 1] = o);
  }
}
function ya(n, e, t) {
  var i;
  let s, r, o;
  return (
    t
      ? ((s = e.changes), (r = ie.empty(e.changes.length)), (o = n.changes.compose(e.changes)))
      : ((s = e.changes.map(n.changes)),
        (r = n.changes.mapDesc(e.changes, !0)),
        (o = n.changes.compose(s))),
    {
      changes: o,
      selection: e.selection
        ? e.selection.map(r)
        : (i = n.selection) === null || i === void 0
          ? void 0
          : i.map(s),
      effects: P.mapEffects(n.effects, s).concat(P.mapEffects(e.effects, r)),
      annotations: n.annotations.length ? n.annotations.concat(e.annotations) : e.annotations,
      scrollIntoView: n.scrollIntoView || e.scrollIntoView,
    }
  );
}
function js(n, e, t) {
  let i = e.selection,
    s = Ut(e.annotations);
  return (
    e.userEvent && (s = s.concat(ne.userEvent.of(e.userEvent))),
    {
      changes: e.changes instanceof ie ? e.changes : ie.of(e.changes || [], t, n.facet(ua)),
      selection: i && (i instanceof b ? i : b.single(i.anchor, i.head)),
      effects: Ut(e.effects),
      annotations: s,
      scrollIntoView: !!e.scrollIntoView,
    }
  );
}
function ba(n, e, t) {
  let i = js(n, e.length ? e[0] : {}, n.doc.length);
  e.length && e[0].filter === !1 && (t = !1);
  for (let r = 1; r < e.length; r++) {
    e[r].filter === !1 && (t = !1);
    let o = !!e[r].sequential;
    i = ya(i, js(n, e[r], o ? i.changes.newLength : n.doc.length), o);
  }
  let s = ne.create(n, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return rf(t ? sf(s) : s);
}
function sf(n) {
  let e = n.startState,
    t = !0;
  for (let s of e.facet(da)) {
    let r = s(n);
    if (r === !1) {
      t = !1;
      break;
    }
    Array.isArray(r) && (t = t === !0 ? r : nf(t, r));
  }
  if (t !== !0) {
    let s, r;
    if (t === !1) (r = n.changes.invertedDesc), (s = ie.empty(e.doc.length));
    else {
      let o = n.changes.filter(t);
      (s = o.changes), (r = o.filtered.mapDesc(o.changes).invertedDesc);
    }
    n = ne.create(
      e,
      s,
      n.selection && n.selection.map(r),
      P.mapEffects(n.effects, r),
      n.annotations,
      n.scrollIntoView,
    );
  }
  let i = e.facet(pa);
  for (let s = i.length - 1; s >= 0; s--) {
    let r = i[s](n);
    r instanceof ne
      ? (n = r)
      : Array.isArray(r) && r.length == 1 && r[0] instanceof ne
        ? (n = r[0])
        : (n = ba(e, Ut(r), !1));
  }
  return n;
}
function rf(n) {
  let e = n.startState,
    t = e.facet(ma),
    i = n;
  for (let s = t.length - 1; s >= 0; s--) {
    let r = t[s](n);
    r && Object.keys(r).length && (i = ya(i, js(e, r, n.changes.newLength), !0));
  }
  return i == n
    ? n
    : ne.create(e, n.changes, n.selection, i.effects, i.annotations, i.scrollIntoView);
}
const of = [];
function Ut(n) {
  return n == null ? of : Array.isArray(n) ? n : [n];
}
var X = (function (n) {
  return (n[(n.Word = 0)] = 'Word'), (n[(n.Space = 1)] = 'Space'), (n[(n.Other = 2)] = 'Other'), n;
})(X || (X = {}));
const lf =
  /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let _s;
try {
  _s = new RegExp('[\\p{Alphabetic}\\p{Number}_]', 'u');
} catch {}
function af(n) {
  if (_s) return _s.test(n);
  for (let e = 0; e < n.length; e++) {
    let t = n[e];
    if (/\w/.test(t) || (t > '' && (t.toUpperCase() != t.toLowerCase() || lf.test(t)))) return !0;
  }
  return !1;
}
function hf(n) {
  return (e) => {
    if (!/\S/.test(e)) return X.Space;
    if (af(e)) return X.Word;
    for (let t = 0; t < n.length; t++) if (e.indexOf(n[t]) > -1) return X.Word;
    return X.Other;
  };
}
class V {
  constructor(e, t, i, s, r, o) {
    (this.config = e),
      (this.doc = t),
      (this.selection = i),
      (this.values = s),
      (this.status = e.statusTemplate.slice()),
      (this.computeSlot = r),
      o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++) ki(this, l << 1);
    this.computeSlot = null;
  }
  field(e, t = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (t) throw new RangeError('Field is not present in this state');
      return;
    }
    return ki(this, i), Bn(this, i);
  }
  update(...e) {
    return ba(this, e, !0);
  }
  applyTransaction(e) {
    let t = this.config,
      { base: i, compartments: s } = t;
    for (let l of e.effects)
      l.is(es.reconfigure)
        ? (t && ((s = new Map()), t.compartments.forEach((a, h) => s.set(h, a)), (t = null)),
          s.set(l.value.compartment, l.value.extension))
        : l.is(P.reconfigure)
          ? ((t = null), (i = l.value))
          : l.is(P.appendConfig) && ((t = null), (i = Ut(i).concat(l.value)));
    let r;
    t
      ? (r = e.startState.values.slice())
      : ((t = Ln.resolve(i, s, this)),
        (r = new V(
          t,
          this.doc,
          this.selection,
          t.dynamicSlots.map(() => null),
          (a, h) => h.reconfigure(a, this),
          null,
        ).values));
    let o = e.startState.facet(Ks) ? e.newSelection : e.newSelection.asSingle();
    new V(t, e.newDoc, o, r, (l, a) => a.update(l, e), e);
  }
  replaceSelection(e) {
    return (
      typeof e == 'string' && (e = this.toText(e)),
      this.changeByRange((t) => ({
        changes: { from: t.from, to: t.to, insert: e },
        range: b.cursor(t.from + e.length),
      }))
    );
  }
  changeByRange(e) {
    let t = this.selection,
      i = e(t.ranges[0]),
      s = this.changes(i.changes),
      r = [i.range],
      o = Ut(i.effects);
    for (let l = 1; l < t.ranges.length; l++) {
      let a = e(t.ranges[l]),
        h = this.changes(a.changes),
        c = h.map(s);
      for (let u = 0; u < l; u++) r[u] = r[u].map(c);
      let f = s.mapDesc(h, !0);
      r.push(a.range.map(f)),
        (s = s.compose(c)),
        (o = P.mapEffects(o, c).concat(P.mapEffects(Ut(a.effects), f)));
    }
    return { changes: s, selection: b.create(r, t.mainIndex), effects: o };
  }
  changes(e = []) {
    return e instanceof ie ? e : ie.of(e, this.doc.length, this.facet(V.lineSeparator));
  }
  toText(e) {
    return z.of(e.split(this.facet(V.lineSeparator) || Vs));
  }
  sliceDoc(e = 0, t = this.doc.length) {
    return this.doc.sliceString(e, t, this.lineBreak);
  }
  facet(e) {
    let t = this.config.address[e.id];
    return t == null ? e.default : (ki(this, t), Bn(this, t));
  }
  toJSON(e) {
    let t = { doc: this.sliceDoc(), selection: this.selection.toJSON() };
    if (e)
      for (let i in e) {
        let s = e[i];
        s instanceof re &&
          this.config.address[s.id] != null &&
          (t[i] = s.spec.toJSON(this.field(e[i]), this));
      }
    return t;
  }
  static fromJSON(e, t = {}, i) {
    if (!e || typeof e.doc != 'string')
      throw new RangeError('Invalid JSON representation for EditorState');
    let s = [];
    if (i) {
      for (let r in i)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          let o = i[r],
            l = e[r];
          s.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return V.create({
      doc: e.doc,
      selection: b.fromJSON(e.selection),
      extensions: t.extensions ? s.concat([t.extensions]) : s,
    });
  }
  static create(e = {}) {
    let t = Ln.resolve(e.extensions || [], new Map()),
      i =
        e.doc instanceof z
          ? e.doc
          : z.of((e.doc || '').split(t.staticFacet(V.lineSeparator) || Vs)),
      s = e.selection
        ? e.selection instanceof b
          ? e.selection
          : b.single(e.selection.anchor, e.selection.head)
        : b.single(0);
    return (
      ha(s, i.length),
      t.staticFacet(Ks) || (s = s.asSingle()),
      new V(
        t,
        i,
        s,
        t.dynamicSlots.map(() => null),
        (r, o) => o.create(r),
        null,
      )
    );
  }
  get tabSize() {
    return this.facet(V.tabSize);
  }
  get lineBreak() {
    return (
      this.facet(V.lineSeparator) ||
      `
`
    );
  }
  get readOnly() {
    return this.facet(ga);
  }
  phrase(e, ...t) {
    for (let i of this.facet(V.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return (
      t.length &&
        (e = e.replace(/\$(\$|\d*)/g, (i, s) => {
          if (s == '$') return '$';
          let r = +(s || 1);
          return !r || r > t.length ? i : t[r - 1];
        })),
      e
    );
  }
  languageDataAt(e, t, i = -1) {
    let s = [];
    for (let r of this.facet(fa))
      for (let o of r(this, t, i)) Object.prototype.hasOwnProperty.call(o, e) && s.push(o[e]);
    return s;
  }
  charCategorizer(e) {
    return hf(this.languageDataAt('wordChars', e).join(''));
  }
  wordAt(e) {
    let { text: t, from: i, length: s } = this.doc.lineAt(e),
      r = this.charCategorizer(e),
      o = e - i,
      l = e - i;
    for (; o > 0; ) {
      let a = ce(t, o, !1);
      if (r(t.slice(a, o)) != X.Word) break;
      o = a;
    }
    for (; l < s; ) {
      let a = ce(t, l);
      if (r(t.slice(l, a)) != X.Word) break;
      l = a;
    }
    return o == l ? null : b.range(o + i, l + i);
  }
}
V.allowMultipleSelections = Ks;
V.tabSize = D.define({ combine: (n) => (n.length ? n[0] : 4) });
V.lineSeparator = ua;
V.readOnly = ga;
V.phrases = D.define({
  compare(n, e) {
    let t = Object.keys(n),
      i = Object.keys(e);
    return t.length == i.length && t.every((s) => n[s] == e[s]);
  },
});
V.languageData = fa;
V.changeFilter = da;
V.transactionFilter = pa;
V.transactionExtender = ma;
es.reconfigure = P.define();
function nt(n, e, t = {}) {
  let i = {};
  for (let s of n)
    for (let r of Object.keys(s)) {
      let o = s[r],
        l = i[r];
      if (l === void 0) i[r] = o;
      else if (!(l === o || o === void 0))
        if (Object.hasOwnProperty.call(t, r)) i[r] = t[r](l, o);
        else throw new Error('Config merge conflict for field ' + r);
    }
  for (let s in e) i[s] === void 0 && (i[s] = e[s]);
  return i;
}
class It {
  eq(e) {
    return this == e;
  }
  range(e, t = e) {
    return Us.create(e, t, this);
  }
}
It.prototype.startSide = It.prototype.endSide = 0;
It.prototype.point = !1;
It.prototype.mapMode = ye.TrackDel;
let Us = class xa {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.value = i);
  }
  static create(e, t, i) {
    return new xa(e, t, i);
  }
};
function Gs(n, e) {
  return n.from - e.from || n.value.startSide - e.value.startSide;
}
class Nr {
  constructor(e, t, i, s) {
    (this.from = e), (this.to = t), (this.value = i), (this.maxPoint = s);
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  findIndex(e, t, i, s = 0) {
    let r = i ? this.to : this.from;
    for (let o = s, l = r.length; ; ) {
      if (o == l) return o;
      let a = (o + l) >> 1,
        h = r[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - t;
      if (a == o) return h >= 0 ? o : l;
      h >= 0 ? (l = a) : (o = a + 1);
    }
  }
  between(e, t, i, s) {
    for (let r = this.findIndex(t, -1e9, !0), o = this.findIndex(i, 1e9, !1, r); r < o; r++)
      if (s(this.from[r] + e, this.to[r] + e, this.value[r]) === !1) return !1;
  }
  map(e, t) {
    let i = [],
      s = [],
      r = [],
      o = -1,
      l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let h = this.value[a],
        c = this.from[a] + e,
        f = this.to[a] + e,
        u,
        d;
      if (c == f) {
        let p = t.mapPos(c, h.startSide, h.mapMode);
        if (
          p == null ||
          ((u = d = p), h.startSide != h.endSide && ((d = t.mapPos(c, h.endSide)), d < u))
        )
          continue;
      } else if (
        ((u = t.mapPos(c, h.startSide)),
        (d = t.mapPos(f, h.endSide)),
        u > d || (u == d && h.startSide > 0 && h.endSide <= 0))
      )
        continue;
      (d - u || h.endSide - h.startSide) < 0 ||
        (o < 0 && (o = u),
        h.point && (l = Math.max(l, d - u)),
        i.push(h),
        s.push(u - o),
        r.push(d - o));
    }
    return { mapped: i.length ? new Nr(s, r, i, l) : null, pos: o };
  }
}
class W {
  constructor(e, t, i, s) {
    (this.chunkPos = e), (this.chunk = t), (this.nextLayer = i), (this.maxPoint = s);
  }
  static create(e, t, i, s) {
    return new W(e, t, i, s);
  }
  get length() {
    let e = this.chunk.length - 1;
    return e < 0 ? 0 : Math.max(this.chunkEnd(e), this.nextLayer.length);
  }
  get size() {
    if (this.isEmpty) return 0;
    let e = this.nextLayer.size;
    for (let t of this.chunk) e += t.value.length;
    return e;
  }
  chunkEnd(e) {
    return this.chunkPos[e] + this.chunk[e].length;
  }
  update(e) {
    let { add: t = [], sort: i = !1, filterFrom: s = 0, filterTo: r = this.length } = e,
      o = e.filter;
    if (t.length == 0 && !o) return this;
    if ((i && (t = t.slice().sort(Gs)), this.isEmpty)) return t.length ? W.of(t) : this;
    let l = new wa(this, null, -1).goto(0),
      a = 0,
      h = [],
      c = new tt();
    for (; l.value || a < t.length; )
      if (a < t.length && (l.from - t[a].from || l.startSide - t[a].value.startSide) >= 0) {
        let f = t[a++];
        c.addInner(f.from, f.to, f.value) || h.push(f);
      } else
        l.rangeIndex == 1 &&
        l.chunkIndex < this.chunk.length &&
        (a == t.length || this.chunkEnd(l.chunkIndex) < t[a].from) &&
        (!o || s > this.chunkEnd(l.chunkIndex) || r < this.chunkPos[l.chunkIndex]) &&
        c.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex])
          ? l.nextChunk()
          : ((!o || s > l.to || r < l.from || o(l.from, l.to, l.value)) &&
              (c.addInner(l.from, l.to, l.value) || h.push(Us.create(l.from, l.to, l.value))),
            l.next());
    return c.finishInner(
      this.nextLayer.isEmpty && !h.length
        ? W.empty
        : this.nextLayer.update({ add: h, filter: o, filterFrom: s, filterTo: r }),
    );
  }
  map(e) {
    if (e.empty || this.isEmpty) return this;
    let t = [],
      i = [],
      s = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o],
        a = this.chunk[o],
        h = e.touchesRange(l, l + a.length);
      if (h === !1) (s = Math.max(s, a.maxPoint)), t.push(a), i.push(e.mapPos(l));
      else if (h === !0) {
        let { mapped: c, pos: f } = a.map(l, e);
        c && ((s = Math.max(s, c.maxPoint)), t.push(c), i.push(f));
      }
    }
    let r = this.nextLayer.map(e);
    return t.length == 0 ? r : new W(i, t, r || W.empty, s);
  }
  between(e, t, i) {
    if (!this.isEmpty) {
      for (let s = 0; s < this.chunk.length; s++) {
        let r = this.chunkPos[s],
          o = this.chunk[s];
        if (t >= r && e <= r + o.length && o.between(r, e - r, t - r, i) === !1) return;
      }
      this.nextLayer.between(e, t, i);
    }
  }
  iter(e = 0) {
    return Di.from([this]).goto(e);
  }
  get isEmpty() {
    return this.nextLayer == this;
  }
  static iter(e, t = 0) {
    return Di.from(e).goto(t);
  }
  static compare(e, t, i, s, r = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      l = t.filter((f) => f.maxPoint > 0 || (!f.isEmpty && f.maxPoint >= r)),
      a = wo(o, l, i),
      h = new hi(o, a, r),
      c = new hi(l, a, r);
    i.iterGaps((f, u, d) => vo(h, f, c, u, d, s)), i.empty && i.length == 0 && vo(h, 0, c, 0, 0, s);
  }
  static eq(e, t, i = 0, s) {
    s == null && (s = 999999999);
    let r = e.filter((c) => !c.isEmpty && t.indexOf(c) < 0),
      o = t.filter((c) => !c.isEmpty && e.indexOf(c) < 0);
    if (r.length != o.length) return !1;
    if (!r.length) return !0;
    let l = wo(r, o),
      a = new hi(r, l, 0).goto(i),
      h = new hi(o, l, 0).goto(i);
    for (;;) {
      if (
        a.to != h.to ||
        !Ys(a.active, h.active) ||
        (a.point && (!h.point || !a.point.eq(h.point)))
      )
        return !1;
      if (a.to > s) return !0;
      a.next(), h.next();
    }
  }
  static spans(e, t, i, s, r = -1) {
    let o = new hi(e, null, r).goto(t),
      l = t,
      a = o.openStart;
    for (;;) {
      let h = Math.min(o.to, i);
      if (o.point) {
        let c = o.activeForPoint(o.to),
          f =
            o.pointFrom < t
              ? c.length + 1
              : o.point.startSide < 0
                ? c.length
                : Math.min(c.length, a);
        s.point(l, h, o.point, c, f, o.pointRank), (a = Math.min(o.openEnd(h), c.length));
      } else h > l && (s.span(l, h, o.active, a), (a = o.openEnd(h)));
      if (o.to > i) return a + (o.point && o.to > i ? 1 : 0);
      (l = o.to), o.next();
    }
  }
  static of(e, t = !1) {
    let i = new tt();
    for (let s of e instanceof Us ? [e] : t ? cf(e) : e) i.add(s.from, s.to, s.value);
    return i.finish();
  }
  static join(e) {
    if (!e.length) return W.empty;
    let t = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let s = e[i]; s != W.empty; s = s.nextLayer)
        t = new W(s.chunkPos, s.chunk, t, Math.max(s.maxPoint, t.maxPoint));
    return t;
  }
}
W.empty = new W([], [], null, -1);
function cf(n) {
  if (n.length > 1)
    for (let e = n[0], t = 1; t < n.length; t++) {
      let i = n[t];
      if (Gs(e, i) > 0) return n.slice().sort(Gs);
      e = i;
    }
  return n;
}
W.empty.nextLayer = W.empty;
class tt {
  finishChunk(e) {
    this.chunks.push(new Nr(this.from, this.to, this.value, this.maxPoint)),
      this.chunkPos.push(this.chunkStart),
      (this.chunkStart = -1),
      (this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
      (this.maxPoint = -1),
      e && ((this.from = []), (this.to = []), (this.value = []));
  }
  constructor() {
    (this.chunks = []),
      (this.chunkPos = []),
      (this.chunkStart = -1),
      (this.last = null),
      (this.lastFrom = -1e9),
      (this.lastTo = -1e9),
      (this.from = []),
      (this.to = []),
      (this.value = []),
      (this.maxPoint = -1),
      (this.setMaxPoint = -1),
      (this.nextLayer = null);
  }
  add(e, t, i) {
    this.addInner(e, t, i) || (this.nextLayer || (this.nextLayer = new tt())).add(e, t, i);
  }
  addInner(e, t, i) {
    let s = e - this.lastTo || i.startSide - this.last.endSide;
    if (s <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error('Ranges must be added sorted by `from` position and `startSide`');
    return s < 0
      ? !1
      : (this.from.length == 250 && this.finishChunk(!0),
        this.chunkStart < 0 && (this.chunkStart = e),
        this.from.push(e - this.chunkStart),
        this.to.push(t - this.chunkStart),
        (this.last = i),
        (this.lastFrom = e),
        (this.lastTo = t),
        this.value.push(i),
        i.point && (this.maxPoint = Math.max(this.maxPoint, t - e)),
        !0);
  }
  addChunk(e, t) {
    if ((e - this.lastTo || t.value[0].startSide - this.last.endSide) < 0) return !1;
    this.from.length && this.finishChunk(!0),
      (this.setMaxPoint = Math.max(this.setMaxPoint, t.maxPoint)),
      this.chunks.push(t),
      this.chunkPos.push(e);
    let i = t.value.length - 1;
    return (
      (this.last = t.value[i]), (this.lastFrom = t.from[i] + e), (this.lastTo = t.to[i] + e), !0
    );
  }
  finish() {
    return this.finishInner(W.empty);
  }
  finishInner(e) {
    if ((this.from.length && this.finishChunk(!1), this.chunks.length == 0)) return e;
    let t = W.create(
      this.chunkPos,
      this.chunks,
      this.nextLayer ? this.nextLayer.finishInner(e) : e,
      this.setMaxPoint,
    );
    return (this.from = null), t;
  }
}
function wo(n, e, t) {
  let i = new Map();
  for (let r of n)
    for (let o = 0; o < r.chunk.length; o++)
      r.chunk[o].maxPoint <= 0 && i.set(r.chunk[o], r.chunkPos[o]);
  let s = new Set();
  for (let r of e)
    for (let o = 0; o < r.chunk.length; o++) {
      let l = i.get(r.chunk[o]);
      l != null &&
        (t ? t.mapPos(l) : l) == r.chunkPos[o] &&
        !(t != null && t.touchesRange(l, l + r.chunk[o].length)) &&
        s.add(r.chunk[o]);
    }
  return s;
}
class wa {
  constructor(e, t, i, s = 0) {
    (this.layer = e), (this.skip = t), (this.minPoint = i), (this.rank = s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  get endSide() {
    return this.value ? this.value.endSide : 0;
  }
  goto(e, t = -1e9) {
    return (this.chunkIndex = this.rangeIndex = 0), this.gotoInner(e, t, !1), this;
  }
  gotoInner(e, t, i) {
    for (; this.chunkIndex < this.layer.chunk.length; ) {
      let s = this.layer.chunk[this.chunkIndex];
      if (
        !(
          (this.skip && this.skip.has(s)) ||
          this.layer.chunkEnd(this.chunkIndex) < e ||
          s.maxPoint < this.minPoint
        )
      )
        break;
      this.chunkIndex++, (i = !1);
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let s = this.layer.chunk[this.chunkIndex].findIndex(
        e - this.layer.chunkPos[this.chunkIndex],
        t,
        !0,
      );
      (!i || this.rangeIndex < s) && this.setRangeIndex(s);
    }
    this.next();
  }
  forward(e, t) {
    (this.to - e || this.endSide - t) < 0 && this.gotoInner(e, t, !0);
  }
  next() {
    for (;;)
      if (this.chunkIndex == this.layer.chunk.length) {
        (this.from = this.to = 1e9), (this.value = null);
        break;
      } else {
        let e = this.layer.chunkPos[this.chunkIndex],
          t = this.layer.chunk[this.chunkIndex],
          i = e + t.from[this.rangeIndex];
        if (
          ((this.from = i),
          (this.to = e + t.to[this.rangeIndex]),
          (this.value = t.value[this.rangeIndex]),
          this.setRangeIndex(this.rangeIndex + 1),
          this.minPoint < 0 || (this.value.point && this.to - this.from >= this.minPoint))
        )
          break;
      }
  }
  setRangeIndex(e) {
    if (e == this.layer.chunk[this.chunkIndex].value.length) {
      if ((this.chunkIndex++, this.skip))
        for (
          ;
          this.chunkIndex < this.layer.chunk.length &&
          this.skip.has(this.layer.chunk[this.chunkIndex]);

        )
          this.chunkIndex++;
      this.rangeIndex = 0;
    } else this.rangeIndex = e;
  }
  nextChunk() {
    this.chunkIndex++, (this.rangeIndex = 0), this.next();
  }
  compare(e) {
    return (
      this.from - e.from ||
      this.startSide - e.startSide ||
      this.rank - e.rank ||
      this.to - e.to ||
      this.endSide - e.endSide
    );
  }
}
class Di {
  constructor(e) {
    this.heap = e;
  }
  static from(e, t = null, i = -1) {
    let s = [];
    for (let r = 0; r < e.length; r++)
      for (let o = e[r]; !o.isEmpty; o = o.nextLayer) o.maxPoint >= i && s.push(new wa(o, t, i, r));
    return s.length == 1 ? s[0] : new Di(s);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, t = -1e9) {
    for (let i of this.heap) i.goto(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) ps(this.heap, i);
    return this.next(), this;
  }
  forward(e, t) {
    for (let i of this.heap) i.forward(e, t);
    for (let i = this.heap.length >> 1; i >= 0; i--) ps(this.heap, i);
    (this.to - e || this.value.endSide - t) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0) (this.from = this.to = 1e9), (this.value = null), (this.rank = -1);
    else {
      let e = this.heap[0];
      (this.from = e.from),
        (this.to = e.to),
        (this.value = e.value),
        (this.rank = e.rank),
        e.value && e.next(),
        ps(this.heap, 0);
    }
  }
}
function ps(n, e) {
  for (let t = n[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= n.length) break;
    let s = n[i];
    if ((i + 1 < n.length && s.compare(n[i + 1]) >= 0 && ((s = n[i + 1]), i++), t.compare(s) < 0))
      break;
    (n[i] = t), (n[e] = s), (e = i);
  }
}
class hi {
  constructor(e, t, i) {
    (this.minPoint = i),
      (this.active = []),
      (this.activeTo = []),
      (this.activeRank = []),
      (this.minActive = -1),
      (this.point = null),
      (this.pointFrom = 0),
      (this.pointRank = 0),
      (this.to = -1e9),
      (this.endSide = 0),
      (this.openStart = -1),
      (this.cursor = Di.from(e, t, i));
  }
  goto(e, t = -1e9) {
    return (
      this.cursor.goto(e, t),
      (this.active.length = this.activeTo.length = this.activeRank.length = 0),
      (this.minActive = -1),
      (this.to = e),
      (this.endSide = t),
      (this.openStart = -1),
      this.next(),
      this
    );
  }
  forward(e, t) {
    for (
      ;
      this.minActive > -1 &&
      (this.activeTo[this.minActive] - e || this.active[this.minActive].endSide - t) < 0;

    )
      this.removeActive(this.minActive);
    this.cursor.forward(e, t);
  }
  removeActive(e) {
    Qi(this.active, e),
      Qi(this.activeTo, e),
      Qi(this.activeRank, e),
      (this.minActive = ko(this.active, this.activeTo));
  }
  addActive(e) {
    let t = 0,
      { value: i, to: s, rank: r } = this.cursor;
    for (; t < this.activeRank.length && (r - this.activeRank[t] || s - this.activeTo[t]) > 0; )
      t++;
    Zi(this.active, t, i),
      Zi(this.activeTo, t, s),
      Zi(this.activeRank, t, r),
      e && Zi(e, t, this.cursor.from),
      (this.minActive = ko(this.active, this.activeTo));
  }
  next() {
    let e = this.to,
      t = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (;;) {
      let s = this.minActive;
      if (
        s > -1 &&
        (this.activeTo[s] - this.cursor.from || this.active[s].endSide - this.cursor.startSide) < 0
      ) {
        if (this.activeTo[s] > e) {
          (this.to = this.activeTo[s]), (this.endSide = this.active[s].endSide);
          break;
        }
        this.removeActive(s), i && Qi(i, s);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          (this.to = this.cursor.from), (this.endSide = this.cursor.startSide);
          break;
        } else {
          let r = this.cursor.value;
          if (!r.point) this.addActive(i), this.cursor.next();
          else if (t && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            (this.point = r),
              (this.pointFrom = this.cursor.from),
              (this.pointRank = this.cursor.rank),
              (this.to = this.cursor.to),
              (this.endSide = r.endSide),
              this.cursor.next(),
              this.forward(this.to, this.endSide);
            break;
          }
        }
      else {
        this.to = this.endSide = 1e9;
        break;
      }
    }
    if (i) {
      this.openStart = 0;
      for (let s = i.length - 1; s >= 0 && i[s] < e; s--) this.openStart++;
    }
  }
  activeForPoint(e) {
    if (!this.active.length) return this.active;
    let t = [];
    for (let i = this.active.length - 1; i >= 0 && !(this.activeRank[i] < this.pointRank); i--)
      (this.activeTo[i] > e ||
        (this.activeTo[i] == e && this.active[i].endSide >= this.point.endSide)) &&
        t.push(this.active[i]);
    return t.reverse();
  }
  openEnd(e) {
    let t = 0;
    for (let i = this.activeTo.length - 1; i >= 0 && this.activeTo[i] > e; i--) t++;
    return t;
  }
}
function vo(n, e, t, i, s, r) {
  n.goto(e), t.goto(i);
  let o = i + s,
    l = i,
    a = i - e;
  for (;;) {
    let h = n.to + a - t.to,
      c = h || n.endSide - t.endSide,
      f = c < 0 ? n.to + a : t.to,
      u = Math.min(f, o);
    if (
      (n.point || t.point
        ? (n.point &&
            t.point &&
            (n.point == t.point || n.point.eq(t.point)) &&
            Ys(n.activeForPoint(n.to), t.activeForPoint(t.to))) ||
          r.comparePoint(l, u, n.point, t.point)
        : u > l && !Ys(n.active, t.active) && r.compareRange(l, u, n.active, t.active),
      f > o)
    )
      break;
    (h || n.openEnd != t.openEnd) && r.boundChange && r.boundChange(f),
      (l = f),
      c <= 0 && n.next(),
      c >= 0 && t.next();
  }
}
function Ys(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) if (n[t] != e[t] && !n[t].eq(e[t])) return !1;
  return !0;
}
function Qi(n, e) {
  for (let t = e, i = n.length - 1; t < i; t++) n[t] = n[t + 1];
  n.pop();
}
function Zi(n, e, t) {
  for (let i = n.length - 1; i >= e; i--) n[i + 1] = n[i];
  n[e] = t;
}
function ko(n, e) {
  let t = -1,
    i = 1e9;
  for (let s = 0; s < e.length; s++)
    (e[s] - i || n[s].endSide - n[t].endSide) < 0 && ((t = s), (i = e[s]));
  return t;
}
function ri(n, e, t = n.length) {
  let i = 0;
  for (let s = 0; s < t && s < n.length; )
    n.charCodeAt(s) == 9 ? ((i += e - (i % e)), s++) : (i++, (s = ce(n, s)));
  return i;
}
function Js(n, e, t, i) {
  for (let s = 0, r = 0; ; ) {
    if (r >= e) return s;
    if (s == n.length) break;
    (r += n.charCodeAt(s) == 9 ? t - (r % t) : 1), (s = ce(n, s));
  }
  return i === !0 ? -1 : n.length;
}
const Xs = 'ͼ',
  So = typeof Symbol > 'u' ? '__' + Xs : Symbol.for(Xs),
  Qs = typeof Symbol > 'u' ? '__styleSet' + Math.floor(Math.random() * 1e8) : Symbol('styleSet'),
  Co = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : {};
class xt {
  constructor(e, t) {
    this.rules = [];
    let { finish: i } = t || {};
    function s(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function r(o, l, a, h) {
      let c = [],
        f = /^@(\w+)\b/.exec(o[0]),
        u = f && f[1] == 'keyframes';
      if (f && l == null) return a.push(o[0] + ';');
      for (let d in l) {
        let p = l[d];
        if (/&/.test(d))
          r(
            d
              .split(/,\s*/)
              .map((m) => o.map((g) => m.replace(/&/, g)))
              .reduce((m, g) => m.concat(g)),
            p,
            a,
          );
        else if (p && typeof p == 'object') {
          if (!f)
            throw new RangeError(
              'The value of a property (' + d + ') should be a primitive value.',
            );
          r(s(d), p, c, u);
        } else
          p != null &&
            c.push(
              d.replace(/_.*/, '').replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()) + ': ' + p + ';',
            );
      }
      (c.length || u) &&
        a.push((i && !f && !h ? o.map(i) : o).join(', ') + ' {' + c.join(' ') + '}');
    }
    for (let o in e) r(s(o), e[o], this.rules);
  }
  getRules() {
    return this.rules.join(`
`);
  }
  static newName() {
    let e = Co[So] || 1;
    return (Co[So] = e + 1), Xs + e.toString(36);
  }
  static mount(e, t, i) {
    let s = e[Qs],
      r = i && i.nonce;
    s ? r && s.setNonce(r) : (s = new ff(e, r)), s.mount(Array.isArray(t) ? t : [t], e);
  }
}
let Ao = new Map();
class ff {
  constructor(e, t) {
    let i = e.ownerDocument || e,
      s = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && s.CSSStyleSheet) {
      let r = Ao.get(i);
      if (r) return (e[Qs] = r);
      (this.sheet = new s.CSSStyleSheet()), Ao.set(i, this);
    } else (this.styleTag = i.createElement('style')), t && this.styleTag.setAttribute('nonce', t);
    (this.modules = []), (e[Qs] = this);
  }
  mount(e, t) {
    let i = this.sheet,
      s = 0,
      r = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o],
        a = this.modules.indexOf(l);
      if ((a < r && a > -1 && (this.modules.splice(a, 1), r--, (a = -1)), a == -1)) {
        if ((this.modules.splice(r++, 0, l), i))
          for (let h = 0; h < l.rules.length; h++) i.insertRule(l.rules[h], s++);
      } else {
        for (; r < a; ) s += this.modules[r++].rules.length;
        (s += l.rules.length), r++;
      }
    }
    if (i)
      t.adoptedStyleSheets.indexOf(this.sheet) < 0 &&
        (t.adoptedStyleSheets = [this.sheet, ...t.adoptedStyleSheets]);
    else {
      let o = '';
      for (let a = 0; a < this.modules.length; a++)
        o +=
          this.modules[a].getRules() +
          `
`;
      this.styleTag.textContent = o;
      let l = t.head || t;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag &&
      this.styleTag.getAttribute('nonce') != e &&
      this.styleTag.setAttribute('nonce', e);
  }
}
var wt = {
    8: 'Backspace',
    9: 'Tab',
    10: 'Enter',
    12: 'NumLock',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    44: 'PrintScreen',
    45: 'Insert',
    46: 'Delete',
    59: ';',
    61: '=',
    91: 'Meta',
    92: 'Meta',
    106: '*',
    107: '+',
    108: ',',
    109: '-',
    110: '.',
    111: '/',
    144: 'NumLock',
    145: 'ScrollLock',
    160: 'Shift',
    161: 'Shift',
    162: 'Control',
    163: 'Control',
    164: 'Alt',
    165: 'Alt',
    173: '-',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: "'",
  },
  Oi = {
    48: ')',
    49: '!',
    50: '@',
    51: '#',
    52: '$',
    53: '%',
    54: '^',
    55: '&',
    56: '*',
    57: '(',
    59: ':',
    61: '+',
    173: '_',
    186: ':',
    187: '+',
    188: '<',
    189: '_',
    190: '>',
    191: '?',
    192: '~',
    219: '{',
    220: '|',
    221: '}',
    222: '"',
  },
  uf = typeof navigator < 'u' && /Mac/.test(navigator.platform),
  df =
    typeof navigator < 'u' &&
    /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var ae = 0; ae < 10; ae++) wt[48 + ae] = wt[96 + ae] = String(ae);
for (var ae = 1; ae <= 24; ae++) wt[ae + 111] = 'F' + ae;
for (var ae = 65; ae <= 90; ae++)
  (wt[ae] = String.fromCharCode(ae + 32)), (Oi[ae] = String.fromCharCode(ae));
for (var ms in wt) Oi.hasOwnProperty(ms) || (Oi[ms] = wt[ms]);
function pf(n) {
  var e =
      (uf && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey) ||
      (df && n.shiftKey && n.key && n.key.length == 1) ||
      n.key == 'Unidentified',
    t = (!e && n.key) || (n.shiftKey ? Oi : wt)[n.keyCode] || n.key || 'Unidentified';
  return (
    t == 'Esc' && (t = 'Escape'),
    t == 'Del' && (t = 'Delete'),
    t == 'Left' && (t = 'ArrowLeft'),
    t == 'Up' && (t = 'ArrowUp'),
    t == 'Right' && (t = 'ArrowRight'),
    t == 'Down' && (t = 'ArrowDown'),
    t
  );
}
function Li(n) {
  let e;
  return n.nodeType == 11 ? (e = n.getSelection ? n : n.ownerDocument) : (e = n), e.getSelection();
}
function Zs(n, e) {
  return e ? n == e || n.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function Sn(n, e) {
  if (!e.anchorNode) return !1;
  try {
    return Zs(n, e.anchorNode);
  } catch {
    return !1;
  }
}
function Bi(n) {
  return n.nodeType == 3
    ? Ht(n, 0, n.nodeValue.length).getClientRects()
    : n.nodeType == 1
      ? n.getClientRects()
      : [];
}
function Si(n, e, t, i) {
  return t ? Mo(n, e, t, i, -1) || Mo(n, e, t, i, 1) : !1;
}
function Nt(n) {
  for (var e = 0; ; e++) if (((n = n.previousSibling), !n)) return e;
}
function Pn(n) {
  return n.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(n.nodeName);
}
function Mo(n, e, t, i, s) {
  for (;;) {
    if (n == t && e == i) return !0;
    if (e == (s < 0 ? 0 : it(n))) {
      if (n.nodeName == 'DIV') return !1;
      let r = n.parentNode;
      if (!r || r.nodeType != 1) return !1;
      (e = Nt(n) + (s < 0 ? 0 : 1)), (n = r);
    } else if (n.nodeType == 1) {
      if (
        ((n = n.childNodes[e + (s < 0 ? -1 : 0)]), n.nodeType == 1 && n.contentEditable == 'false')
      )
        return !1;
      e = s < 0 ? it(n) : 0;
    } else return !1;
  }
}
function it(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ts(n, e) {
  let t = e ? n.left : n.right;
  return { left: t, right: t, top: n.top, bottom: n.bottom };
}
function mf(n) {
  let e = n.visualViewport;
  return e
    ? { left: 0, right: e.width, top: 0, bottom: e.height }
    : { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
}
function va(n, e) {
  let t = e.width / n.offsetWidth,
    i = e.height / n.offsetHeight;
  return (
    ((t > 0.995 && t < 1.005) || !isFinite(t) || Math.abs(e.width - n.offsetWidth) < 1) && (t = 1),
    ((i > 0.995 && i < 1.005) || !isFinite(i) || Math.abs(e.height - n.offsetHeight) < 1) &&
      (i = 1),
    { scaleX: t, scaleY: i }
  );
}
function gf(n, e, t, i, s, r, o, l) {
  let a = n.ownerDocument,
    h = a.defaultView || window;
  for (let c = n, f = !1; c && !f; )
    if (c.nodeType == 1) {
      let u,
        d = c == a.body,
        p = 1,
        m = 1;
      if (d) u = mf(h);
      else {
        if (
          (/^(fixed|sticky)$/.test(getComputedStyle(c).position) && (f = !0),
          c.scrollHeight <= c.clientHeight && c.scrollWidth <= c.clientWidth)
        ) {
          c = c.assignedSlot || c.parentNode;
          continue;
        }
        let x = c.getBoundingClientRect();
        ({ scaleX: p, scaleY: m } = va(c, x)),
          (u = {
            left: x.left,
            right: x.left + c.clientWidth * p,
            top: x.top,
            bottom: x.top + c.clientHeight * m,
          });
      }
      let g = 0,
        y = 0;
      if (s == 'nearest')
        e.top < u.top
          ? ((y = e.top - (u.top + o)),
            t > 0 && e.bottom > u.bottom + y && (y = e.bottom - u.bottom + o))
          : e.bottom > u.bottom &&
            ((y = e.bottom - u.bottom + o),
            t < 0 && e.top - y < u.top && (y = e.top - (u.top + o)));
      else {
        let x = e.bottom - e.top,
          v = u.bottom - u.top;
        y =
          (s == 'center' && x <= v
            ? e.top + x / 2 - v / 2
            : s == 'start' || (s == 'center' && t < 0)
              ? e.top - o
              : e.bottom - v + o) - u.top;
      }
      if (
        (i == 'nearest'
          ? e.left < u.left
            ? ((g = e.left - (u.left + r)),
              t > 0 && e.right > u.right + g && (g = e.right - u.right + r))
            : e.right > u.right &&
              ((g = e.right - u.right + r),
              t < 0 && e.left < u.left + g && (g = e.left - (u.left + r)))
          : (g =
              (i == 'center'
                ? e.left + (e.right - e.left) / 2 - (u.right - u.left) / 2
                : (i == 'start') == l
                  ? e.left - r
                  : e.right - (u.right - u.left) + r) - u.left),
        g || y)
      )
        if (d) h.scrollBy(g, y);
        else {
          let x = 0,
            v = 0;
          if (y) {
            let k = c.scrollTop;
            (c.scrollTop += y / m), (v = (c.scrollTop - k) * m);
          }
          if (g) {
            let k = c.scrollLeft;
            (c.scrollLeft += g / p), (x = (c.scrollLeft - k) * p);
          }
          (e = { left: e.left - x, top: e.top - v, right: e.right - x, bottom: e.bottom - v }),
            x && Math.abs(x - g) < 1 && (i = 'nearest'),
            v && Math.abs(v - y) < 1 && (s = 'nearest');
        }
      if (d) break;
      (e.top < u.top || e.bottom > u.bottom || e.left < u.left || e.right > u.right) &&
        (e = {
          left: Math.max(e.left, u.left),
          right: Math.min(e.right, u.right),
          top: Math.max(e.top, u.top),
          bottom: Math.min(e.bottom, u.bottom),
        }),
        (c = c.assignedSlot || c.parentNode);
    } else if (c.nodeType == 11) c = c.host;
    else break;
}
function yf(n) {
  let e = n.ownerDocument,
    t,
    i;
  for (let s = n.parentNode; s && !(s == e.body || (t && i)); )
    if (s.nodeType == 1)
      !i && s.scrollHeight > s.clientHeight && (i = s),
        !t && s.scrollWidth > s.clientWidth && (t = s),
        (s = s.assignedSlot || s.parentNode);
    else if (s.nodeType == 11) s = s.host;
    else break;
  return { x: t, y: i };
}
class bf {
  constructor() {
    (this.anchorNode = null),
      (this.anchorOffset = 0),
      (this.focusNode = null),
      (this.focusOffset = 0);
  }
  eq(e) {
    return (
      this.anchorNode == e.anchorNode &&
      this.anchorOffset == e.anchorOffset &&
      this.focusNode == e.focusNode &&
      this.focusOffset == e.focusOffset
    );
  }
  setRange(e) {
    let { anchorNode: t, focusNode: i } = e;
    this.set(t, Math.min(e.anchorOffset, t ? it(t) : 0), i, Math.min(e.focusOffset, i ? it(i) : 0));
  }
  set(e, t, i, s) {
    (this.anchorNode = e), (this.anchorOffset = t), (this.focusNode = i), (this.focusOffset = s);
  }
}
let qt = null;
function ka(n) {
  if (n.setActive) return n.setActive();
  if (qt) return n.focus(qt);
  let e = [];
  for (
    let t = n;
    t && (e.push(t, t.scrollTop, t.scrollLeft), t != t.ownerDocument);
    t = t.parentNode
  );
  if (
    (n.focus(
      qt == null
        ? {
            get preventScroll() {
              return (qt = { preventScroll: !0 }), !0;
            },
          }
        : void 0,
    ),
    !qt)
  ) {
    qt = !1;
    for (let t = 0; t < e.length; ) {
      let i = e[t++],
        s = e[t++],
        r = e[t++];
      i.scrollTop != s && (i.scrollTop = s), i.scrollLeft != r && (i.scrollLeft = r);
    }
  }
}
let Eo;
function Ht(n, e, t = e) {
  let i = Eo || (Eo = document.createRange());
  return i.setEnd(n, t), i.setStart(n, e), i;
}
function Gt(n, e, t, i) {
  let s = { key: e, code: e, keyCode: t, which: t, cancelable: !0 };
  i && ({ altKey: s.altKey, ctrlKey: s.ctrlKey, shiftKey: s.shiftKey, metaKey: s.metaKey } = i);
  let r = new KeyboardEvent('keydown', s);
  (r.synthetic = !0), n.dispatchEvent(r);
  let o = new KeyboardEvent('keyup', s);
  return (o.synthetic = !0), n.dispatchEvent(o), r.defaultPrevented || o.defaultPrevented;
}
function xf(n) {
  for (; n; ) {
    if (n && (n.nodeType == 9 || (n.nodeType == 11 && n.host))) return n;
    n = n.assignedSlot || n.parentNode;
  }
  return null;
}
function Sa(n) {
  for (; n.attributes.length; ) n.removeAttributeNode(n.attributes[0]);
}
function wf(n, e) {
  let t = e.focusNode,
    i = e.focusOffset;
  if (!t || e.anchorNode != t || e.anchorOffset != i) return !1;
  for (i = Math.min(i, it(t)); ; )
    if (i) {
      if (t.nodeType != 1) return !1;
      let s = t.childNodes[i - 1];
      s.contentEditable == 'false' ? i-- : ((t = s), (i = it(t)));
    } else {
      if (t == n) return !0;
      (i = Nt(t)), (t = t.parentNode);
    }
}
function Ca(n) {
  return n.scrollTop > Math.max(1, n.scrollHeight - n.clientHeight - 4);
}
function Aa(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i > 0) return { node: t, offset: i };
    if (t.nodeType == 1 && i > 0) {
      if (t.contentEditable == 'false') return null;
      (t = t.childNodes[i - 1]), (i = it(t));
    } else if (t.parentNode && !Pn(t)) (i = Nt(t)), (t = t.parentNode);
    else return null;
  }
}
function Ma(n, e) {
  for (let t = n, i = e; ; ) {
    if (t.nodeType == 3 && i < t.nodeValue.length) return { node: t, offset: i };
    if (t.nodeType == 1 && i < t.childNodes.length) {
      if (t.contentEditable == 'false') return null;
      (t = t.childNodes[i]), (i = 0);
    } else if (t.parentNode && !Pn(t)) (i = Nt(t) + 1), (t = t.parentNode);
    else return null;
  }
}
class ue {
  constructor(e, t, i = !0) {
    (this.node = e), (this.offset = t), (this.precise = i);
  }
  static before(e, t) {
    return new ue(e.parentNode, Nt(e), t);
  }
  static after(e, t) {
    return new ue(e.parentNode, Nt(e) + 1, t);
  }
}
const Hr = [];
class U {
  constructor() {
    (this.parent = null), (this.dom = null), (this.flags = 2);
  }
  get overrideDOMText() {
    return null;
  }
  get posAtStart() {
    return this.parent ? this.parent.posBefore(this) : 0;
  }
  get posAtEnd() {
    return this.posAtStart + this.length;
  }
  posBefore(e) {
    let t = this.posAtStart;
    for (let i of this.children) {
      if (i == e) return t;
      t += i.length + i.breakAfter;
    }
    throw new RangeError('Invalid child in posBefore');
  }
  posAfter(e) {
    return this.posBefore(e) + e.length;
  }
  sync(e, t) {
    if (this.flags & 2) {
      let i = this.dom,
        s = null,
        r;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (r = s ? s.nextSibling : i.firstChild)) {
            let l = U.get(r);
            (!l || (!l.parent && l.canReuseDOM(o))) && o.reuseDOM(r);
          }
          o.sync(e, t), (o.flags &= -8);
        }
        if (
          ((r = s ? s.nextSibling : i.firstChild),
          t && !t.written && t.node == i && r != o.dom && (t.written = !0),
          o.dom.parentNode == i)
        )
          for (; r && r != o.dom; ) r = To(r);
        else i.insertBefore(o.dom, r);
        s = o.dom;
      }
      for (r = s ? s.nextSibling : i.firstChild, r && t && t.node == i && (t.written = !0); r; )
        r = To(r);
    } else if (this.flags & 1)
      for (let i of this.children) i.flags & 7 && (i.sync(e, t), (i.flags &= -8));
  }
  reuseDOM(e) {}
  localPosFromDOM(e, t) {
    let i;
    if (e == this.dom) i = this.dom.childNodes[t];
    else {
      let s = it(e) == 0 ? 0 : t == 0 ? -1 : 1;
      for (;;) {
        let r = e.parentNode;
        if (r == this.dom) break;
        s == 0 && r.firstChild != r.lastChild && (e == r.firstChild ? (s = -1) : (s = 1)), (e = r);
      }
      s < 0 ? (i = e) : (i = e.nextSibling);
    }
    if (i == this.dom.firstChild) return 0;
    for (; i && !U.get(i); ) i = i.nextSibling;
    if (!i) return this.length;
    for (let s = 0, r = 0; ; s++) {
      let o = this.children[s];
      if (o.dom == i) return r;
      r += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, t, i = 0) {
    let s = -1,
      r = -1,
      o = -1,
      l = -1;
    for (let a = 0, h = i, c = i; a < this.children.length; a++) {
      let f = this.children[a],
        u = h + f.length;
      if (h < e && u > t) return f.domBoundsAround(e, t, h);
      if ((u >= e && s == -1 && ((s = a), (r = h)), h > t && f.dom.parentNode == this.dom)) {
        (o = a), (l = c);
        break;
      }
      (c = u), (h = u + f.breakAfter);
    }
    return {
      from: r,
      to: l < 0 ? i + this.length : l,
      startDOM: (s ? this.children[s - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null,
    };
  }
  markDirty(e = !1) {
    (this.flags |= 2), this.markParentsDirty(e);
  }
  markParentsDirty(e) {
    for (let t = this.parent; t; t = t.parent) {
      if ((e && (t.flags |= 2), t.flags & 1)) return;
      (t.flags |= 1), (e = !1);
    }
  }
  setParent(e) {
    this.parent != e && ((this.parent = e), this.flags & 7 && this.markParentsDirty(!0));
  }
  setDOM(e) {
    this.dom != e && (this.dom && (this.dom.cmView = null), (this.dom = e), (e.cmView = this));
  }
  get rootView() {
    for (let e = this; ; ) {
      let t = e.parent;
      if (!t) return e;
      e = t;
    }
  }
  replaceChildren(e, t, i = Hr) {
    this.markDirty();
    for (let s = e; s < t; s++) {
      let r = this.children[s];
      r.parent == this && i.indexOf(r) < 0 && r.destroy();
    }
    i.length < 250
      ? this.children.splice(e, t - e, ...i)
      : (this.children = [].concat(this.children.slice(0, e), i, this.children.slice(t)));
    for (let s = 0; s < i.length; s++) i[s].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new Ea(this.children, e, this.children.length);
  }
  childPos(e, t = 1) {
    return this.childCursor().findPos(e, t);
  }
  toString() {
    let e = this.constructor.name.replace('View', '');
    return (
      e +
      (this.children.length
        ? '(' + this.children.join() + ')'
        : this.length
          ? '[' + (e == 'Text' ? this.text : this.length) + ']'
          : '') +
      (this.breakAfter ? '#' : '')
    );
  }
  static get(e) {
    return e.cmView;
  }
  get isEditable() {
    return !0;
  }
  get isWidget() {
    return !1;
  }
  get isHidden() {
    return !1;
  }
  merge(e, t, i, s, r, o) {
    return !1;
  }
  become(e) {
    return !1;
  }
  canReuseDOM(e) {
    return e.constructor == this.constructor && !((this.flags | e.flags) & 8);
  }
  getSide() {
    return 0;
  }
  destroy() {
    for (let e of this.children) e.parent == this && e.destroy();
    this.parent = null;
  }
}
U.prototype.breakAfter = 0;
function To(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Ea {
  constructor(e, t, i) {
    (this.children = e), (this.pos = t), (this.i = i), (this.off = 0);
  }
  findPos(e, t = 1) {
    for (;;) {
      if (
        e > this.pos ||
        (e == this.pos && (t > 0 || this.i == 0 || this.children[this.i - 1].breakAfter))
      )
        return (this.off = e - this.pos), this;
      let i = this.children[--this.i];
      this.pos -= i.length + i.breakAfter;
    }
  }
}
function Ta(n, e, t, i, s, r, o, l, a) {
  let { children: h } = n,
    c = h.length ? h[e] : null,
    f = r.length ? r[r.length - 1] : null,
    u = f ? f.breakAfter : o;
  if (
    !(e == i && c && !o && !u && r.length < 2 && c.merge(t, s, r.length ? f : null, t == 0, l, a))
  ) {
    if (i < h.length) {
      let d = h[i];
      d && (s < d.length || (d.breakAfter && f != null && f.breakAfter))
        ? (e == i && ((d = d.split(s)), (s = 0)),
          !u && f && d.merge(0, s, f, !0, 0, a)
            ? (r[r.length - 1] = d)
            : ((s || (d.children.length && !d.children[0].length)) && d.merge(0, s, null, !1, 0, a),
              r.push(d)))
        : d != null && d.breakAfter && (f ? (f.breakAfter = 1) : (o = 1)),
        i++;
    }
    for (
      c &&
      ((c.breakAfter = o),
      t > 0 &&
        (!o && r.length && c.merge(t, c.length, r[0], !1, l, 0)
          ? (c.breakAfter = r.shift().breakAfter)
          : (t < c.length ||
              (c.children.length && c.children[c.children.length - 1].length == 0)) &&
            c.merge(t, c.length, null, !1, l, 0),
        e++));
      e < i && r.length;

    )
      if (h[i - 1].become(r[r.length - 1])) i--, r.pop(), (a = r.length ? 0 : l);
      else if (h[e].become(r[0])) e++, r.shift(), (l = r.length ? 0 : a);
      else break;
    !r.length &&
      e &&
      i < h.length &&
      !h[e - 1].breakAfter &&
      h[i].merge(0, 0, h[e - 1], !1, l, a) &&
      e--,
      (e < i || r.length) && n.replaceChildren(e, i, r);
  }
}
function Da(n, e, t, i, s, r) {
  let o = n.childCursor(),
    { i: l, off: a } = o.findPos(t, 1),
    { i: h, off: c } = o.findPos(e, -1),
    f = e - t;
  for (let u of i) f += u.length;
  (n.length += f), Ta(n, h, c, l, a, i, 0, s, r);
}
let ve = typeof navigator < 'u' ? navigator : { userAgent: '', vendor: '', platform: '' },
  er = typeof document < 'u' ? document : { documentElement: { style: {} } };
const tr = /Edge\/(\d+)/.exec(ve.userAgent),
  Oa = /MSIE \d/.test(ve.userAgent),
  ir = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ve.userAgent),
  is = !!(Oa || ir || tr),
  Do = !is && /gecko\/(\d+)/i.test(ve.userAgent),
  gs = !is && /Chrome\/(\d+)/.exec(ve.userAgent),
  vf = 'webkitFontSmoothing' in er.documentElement.style,
  La = !is && /Apple Computer/.test(ve.vendor),
  Oo = La && (/Mobile\/\w+/.test(ve.userAgent) || ve.maxTouchPoints > 2);
var T = {
  mac: Oo || /Mac/.test(ve.platform),
  windows: /Win/.test(ve.platform),
  linux: /Linux|X11/.test(ve.platform),
  ie: is,
  ie_version: Oa ? er.documentMode || 6 : ir ? +ir[1] : tr ? +tr[1] : 0,
  gecko: Do,
  gecko_version: Do ? +(/Firefox\/(\d+)/.exec(ve.userAgent) || [0, 0])[1] : 0,
  chrome: !!gs,
  chrome_version: gs ? +gs[1] : 0,
  ios: Oo,
  android: /Android\b/.test(ve.userAgent),
  safari: La,
  webkit_version: vf ? +(/\bAppleWebKit\/(\d+)/.exec(ve.userAgent) || [0, 0])[1] : 0,
  tabSize: er.documentElement.style.tabSize != null ? 'tab-size' : '-moz-tab-size',
};
const kf = 256;
class Ve extends U {
  constructor(e) {
    super(), (this.text = e);
  }
  get length() {
    return this.text.length;
  }
  createDOM(e) {
    this.setDOM(e || document.createTextNode(this.text));
  }
  sync(e, t) {
    this.dom || this.createDOM(),
      this.dom.nodeValue != this.text &&
        (t && t.node == this.dom && (t.written = !0), (this.dom.nodeValue = this.text));
  }
  reuseDOM(e) {
    e.nodeType == 3 && this.createDOM(e);
  }
  merge(e, t, i) {
    return this.flags & 8 ||
      (i && (!(i instanceof Ve) || this.length - (t - e) + i.length > kf || i.flags & 8))
      ? !1
      : ((this.text = this.text.slice(0, e) + (i ? i.text : '') + this.text.slice(t)),
        this.markDirty(),
        !0);
  }
  split(e) {
    let t = new Ve(this.text.slice(e));
    return (this.text = this.text.slice(0, e)), this.markDirty(), (t.flags |= this.flags & 8), t;
  }
  localPosFromDOM(e, t) {
    return e == this.dom ? t : t ? this.text.length : 0;
  }
  domAtPos(e) {
    return new ue(this.dom, e);
  }
  domBoundsAround(e, t, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, t) {
    return Sf(this.dom, e, t);
  }
}
class at extends U {
  constructor(e, t = [], i = 0) {
    super(), (this.mark = e), (this.children = t), (this.length = i);
    for (let s of t) s.setParent(this);
  }
  setAttrs(e) {
    if ((Sa(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs))
      for (let t in this.mark.attrs) e.setAttribute(t, this.mark.attrs[t]);
    return e;
  }
  canReuseDOM(e) {
    return super.canReuseDOM(e) && !((this.flags | e.flags) & 8);
  }
  reuseDOM(e) {
    e.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    this.dom
      ? this.flags & 4 && this.setAttrs(this.dom)
      : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))),
      super.sync(e, t);
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof at && i.mark.eq(this.mark)) || (e && r <= 0) || (t < this.length && o <= 0))
      ? !1
      : (Da(this, e, t, i ? i.children.slice() : [], r - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let t = [],
      i = 0,
      s = -1,
      r = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && t.push(i < e ? l.split(e - i) : l), s < 0 && i >= e && (s = r), (i = a), r++;
    }
    let o = this.length - e;
    return (
      (this.length = e),
      s > -1 && ((this.children.length = s), this.markDirty()),
      new at(this.mark, t, o)
    );
  }
  domAtPos(e) {
    return Ba(this, e);
  }
  coordsAt(e, t) {
    return Ra(this, e, t);
  }
}
function Sf(n, e, t) {
  let i = n.nodeValue.length;
  e > i && (e = i);
  let s = e,
    r = e,
    o = 0;
  (e == 0 && t < 0) || (e == i && t >= 0)
    ? T.chrome || T.gecko || (e ? (s--, (o = 1)) : r < i && (r++, (o = -1)))
    : t < 0
      ? s--
      : r < i && r++;
  let l = Ht(n, s, r).getClientRects();
  if (!l.length) return null;
  let a = l[(o ? o < 0 : t >= 0) ? 0 : l.length - 1];
  return (
    T.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (h) => h.width) || a),
    o ? ts(a, o < 0) : a || null
  );
}
class mt extends U {
  static create(e, t, i) {
    return new mt(e, t, i);
  }
  constructor(e, t, i) {
    super(), (this.widget = e), (this.length = t), (this.side = i), (this.prevWidget = null);
  }
  split(e) {
    let t = mt.create(this.widget, this.length - e, this.side);
    return (this.length -= e), t;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = 'false'));
  }
  getSide() {
    return this.side;
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof mt) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
  }
  become(e) {
    return e instanceof mt && e.side == this.side && this.widget.constructor == e.widget.constructor
      ? (this.widget.compare(e.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0) return z.empty;
    let e = this;
    for (; e.parent; ) e = e.parent;
    let { view: t } = e,
      i = t && t.state.doc,
      s = this.posAtStart;
    return i ? i.slice(s, s + this.length) : z.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0)
      ? ue.before(this.dom)
      : ue.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    if (i) return i;
    let s = this.dom.getClientRects(),
      r = null;
    if (!s.length) return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (
      let l = o ? s.length - 1 : 0;
      (r = s[l]), !(e > 0 ? l == 0 : l == s.length - 1 || r.top < r.bottom);
      l += o ? -1 : 1
    );
    return ts(r, !o);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  get isHidden() {
    return this.widget.isHidden;
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
}
class Zt extends U {
  constructor(e) {
    super(), (this.side = e);
  }
  get length() {
    return 0;
  }
  merge() {
    return !1;
  }
  become(e) {
    return e instanceof Zt && e.side == this.side;
  }
  split() {
    return new Zt(this.side);
  }
  sync() {
    if (!this.dom) {
      let e = document.createElement('img');
      (e.className = 'cm-widgetBuffer'), e.setAttribute('aria-hidden', 'true'), this.setDOM(e);
    }
  }
  getSide() {
    return this.side;
  }
  domAtPos(e) {
    return this.side > 0 ? ue.before(this.dom) : ue.after(this.dom);
  }
  localPosFromDOM() {
    return 0;
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e) {
    return this.dom.getBoundingClientRect();
  }
  get overrideDOMText() {
    return z.empty;
  }
  get isHidden() {
    return !0;
  }
}
Ve.prototype.children = mt.prototype.children = Zt.prototype.children = Hr;
function Ba(n, e) {
  let t = n.dom,
    { children: i } = n,
    s = 0;
  for (let r = 0; s < i.length; s++) {
    let o = i[s],
      l = r + o.length;
    if (!(l == r && o.getSide() <= 0)) {
      if (e > r && e < l && o.dom.parentNode == t) return o.domAtPos(e - r);
      if (e <= r) break;
      r = l;
    }
  }
  for (let r = s; r > 0; r--) {
    let o = i[r - 1];
    if (o.dom.parentNode == t) return o.domAtPos(o.length);
  }
  for (let r = s; r < i.length; r++) {
    let o = i[r];
    if (o.dom.parentNode == t) return o.domAtPos(0);
  }
  return new ue(t, 0);
}
function Pa(n, e, t) {
  let i,
    { children: s } = n;
  t > 0 && e instanceof at && s.length && (i = s[s.length - 1]) instanceof at && i.mark.eq(e.mark)
    ? Pa(i, e.children[0], t - 1)
    : (s.push(e), e.setParent(n)),
    (n.length += e.length);
}
function Ra(n, e, t) {
  let i = null,
    s = -1,
    r = null,
    o = -1;
  function l(h, c) {
    for (let f = 0, u = 0; f < h.children.length && u <= c; f++) {
      let d = h.children[f],
        p = u + d.length;
      p >= c &&
        (d.children.length
          ? l(d, c - u)
          : (!r || (r.isHidden && (t > 0 || Af(r, d)))) && (p > c || (u == p && d.getSide() > 0))
            ? ((r = d), (o = c - u))
            : (u < c || (u == p && d.getSide() < 0 && !d.isHidden)) && ((i = d), (s = c - u))),
        (u = p);
    }
  }
  l(n, e);
  let a = (t < 0 ? i : r) || i || r;
  return a ? a.coordsAt(Math.max(0, a == i ? s : o), t) : Cf(n);
}
function Cf(n) {
  let e = n.dom.lastChild;
  if (!e) return n.dom.getBoundingClientRect();
  let t = Bi(e);
  return t[t.length - 1] || null;
}
function Af(n, e) {
  let t = n.coordsAt(0, 1),
    i = e.coordsAt(0, 1);
  return t && i && i.top < t.bottom;
}
function nr(n, e) {
  for (let t in n)
    t == 'class' && e.class
      ? (e.class += ' ' + n.class)
      : t == 'style' && e.style
        ? (e.style += ';' + n.style)
        : (e[t] = n[t]);
  return e;
}
const Lo = Object.create(null);
function Rn(n, e, t) {
  if (n == e) return !0;
  n || (n = Lo), e || (e = Lo);
  let i = Object.keys(n),
    s = Object.keys(e);
  if (i.length - (t && i.indexOf(t) > -1 ? 1 : 0) != s.length - (t && s.indexOf(t) > -1 ? 1 : 0))
    return !1;
  for (let r of i) if (r != t && (s.indexOf(r) == -1 || n[r] !== e[r])) return !1;
  return !0;
}
function sr(n, e, t) {
  let i = !1;
  if (e)
    for (let s in e)
      (t && s in t) || ((i = !0), s == 'style' ? (n.style.cssText = '') : n.removeAttribute(s));
  if (t)
    for (let s in t)
      (e && e[s] == t[s]) ||
        ((i = !0), s == 'style' ? (n.style.cssText = t[s]) : n.setAttribute(s, t[s]));
  return i;
}
function Mf(n) {
  let e = Object.create(null);
  for (let t = 0; t < n.attributes.length; t++) {
    let i = n.attributes[t];
    e[i.name] = i.value;
  }
  return e;
}
class Ct {
  eq(e) {
    return !1;
  }
  updateDOM(e, t) {
    return !1;
  }
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  get estimatedHeight() {
    return -1;
  }
  get lineBreaks() {
    return 0;
  }
  ignoreEvent(e) {
    return !0;
  }
  coordsAt(e, t, i) {
    return null;
  }
  get isHidden() {
    return !1;
  }
  get editable() {
    return !1;
  }
  destroy(e) {}
}
var be = (function (n) {
  return (
    (n[(n.Text = 0)] = 'Text'),
    (n[(n.WidgetBefore = 1)] = 'WidgetBefore'),
    (n[(n.WidgetAfter = 2)] = 'WidgetAfter'),
    (n[(n.WidgetRange = 3)] = 'WidgetRange'),
    n
  );
})(be || (be = {}));
class O extends It {
  constructor(e, t, i, s) {
    super(), (this.startSide = e), (this.endSide = t), (this.widget = i), (this.spec = s);
  }
  get heightRelevant() {
    return !1;
  }
  static mark(e) {
    return new Ki(e);
  }
  static widget(e) {
    let t = Math.max(-1e4, Math.min(1e4, e.side || 0)),
      i = !!e.block;
    return (
      (t += i && !e.inlineOrder ? (t > 0 ? 3e8 : -4e8) : t > 0 ? 1e8 : -1e8),
      new vt(e, t, t, i, e.widget || null, !1)
    );
  }
  static replace(e) {
    let t = !!e.block,
      i,
      s;
    if (e.isBlockGap) (i = -5e8), (s = 4e8);
    else {
      let { start: r, end: o } = Ia(e, t);
      (i = (r ? (t ? -3e8 : -1) : 5e8) - 1), (s = (o ? (t ? 2e8 : 1) : -6e8) + 1);
    }
    return new vt(e, i, s, t, e.widget || null, !0);
  }
  static line(e) {
    return new ji(e);
  }
  static set(e, t = !1) {
    return W.of(e, t);
  }
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
O.none = W.empty;
class Ki extends O {
  constructor(e) {
    let { start: t, end: i } = Ia(e);
    super(t ? -1 : 5e8, i ? 1 : -6e8, null, e),
      (this.tagName = e.tagName || 'span'),
      (this.class = e.class || ''),
      (this.attrs = e.attributes || null);
  }
  eq(e) {
    var t, i;
    return (
      this == e ||
      (e instanceof Ki &&
        this.tagName == e.tagName &&
        (this.class || ((t = this.attrs) === null || t === void 0 ? void 0 : t.class)) ==
          (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) &&
        Rn(this.attrs, e.attrs, 'class'))
    );
  }
  range(e, t = e) {
    if (e >= t) throw new RangeError('Mark decorations may not be empty');
    return super.range(e, t);
  }
}
Ki.prototype.point = !1;
class ji extends O {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return (
      e instanceof ji &&
      this.spec.class == e.spec.class &&
      Rn(this.spec.attributes, e.spec.attributes)
    );
  }
  range(e, t = e) {
    if (t != e) throw new RangeError('Line decoration ranges must be zero-length');
    return super.range(e, t);
  }
}
ji.prototype.mapMode = ye.TrackBefore;
ji.prototype.point = !0;
class vt extends O {
  constructor(e, t, i, s, r, o) {
    super(t, i, r, e),
      (this.block = s),
      (this.isReplace = o),
      (this.mapMode = s ? (t <= 0 ? ye.TrackBefore : ye.TrackAfter) : ye.TrackDel);
  }
  get type() {
    return this.startSide != this.endSide
      ? be.WidgetRange
      : this.startSide <= 0
        ? be.WidgetBefore
        : be.WidgetAfter;
  }
  get heightRelevant() {
    return (
      this.block ||
      (!!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0))
    );
  }
  eq(e) {
    return (
      e instanceof vt &&
      Ef(this.widget, e.widget) &&
      this.block == e.block &&
      this.startSide == e.startSide &&
      this.endSide == e.endSide
    );
  }
  range(e, t = e) {
    if (this.isReplace && (e > t || (e == t && this.startSide > 0 && this.endSide <= 0)))
      throw new RangeError('Invalid range for replacement decoration');
    if (!this.isReplace && t != e)
      throw new RangeError('Widget decorations can only have zero-length ranges');
    return super.range(e, t);
  }
}
vt.prototype.point = !0;
function Ia(n, e = !1) {
  let { inclusiveStart: t, inclusiveEnd: i } = n;
  return (
    t == null && (t = n.inclusive), i == null && (i = n.inclusive), { start: t ?? e, end: i ?? e }
  );
}
function Ef(n, e) {
  return n == e || !!(n && e && n.compare(e));
}
function Cn(n, e, t, i = 0) {
  let s = t.length - 1;
  s >= 0 && t[s] + i >= n ? (t[s] = Math.max(t[s], e)) : t.push(n, e);
}
class ee extends U {
  constructor() {
    super(...arguments),
      (this.children = []),
      (this.length = 0),
      (this.prevAttrs = void 0),
      (this.attrs = null),
      (this.breakAfter = 0);
  }
  merge(e, t, i, s, r, o) {
    if (i) {
      if (!(i instanceof ee)) return !1;
      this.dom || i.transferDOM(this);
    }
    return (
      s && this.setDeco(i ? i.attrs : null), Da(this, e, t, i ? i.children.slice() : [], r, o), !0
    );
  }
  split(e) {
    let t = new ee();
    if (((t.breakAfter = this.breakAfter), this.length == 0)) return t;
    let { i, off: s } = this.childPos(e);
    s &&
      (t.append(this.children[i].split(s), 0),
      this.children[i].merge(s, this.children[i].length, null, !1, 0, 0),
      i++);
    for (let r = i; r < this.children.length; r++) t.append(this.children[r], 0);
    for (; i > 0 && this.children[i - 1].length == 0; ) this.children[--i].destroy();
    return (this.children.length = i), this.markDirty(), (this.length = e), t;
  }
  transferDOM(e) {
    this.dom &&
      (this.markDirty(),
      e.setDOM(this.dom),
      (e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs),
      (this.prevAttrs = void 0),
      (this.dom = null));
  }
  setDeco(e) {
    Rn(this.attrs, e) ||
      (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()), (this.attrs = e));
  }
  append(e, t) {
    Pa(this, e, t);
  }
  addLineDeco(e) {
    let t = e.spec.attributes,
      i = e.spec.class;
    t && (this.attrs = nr(t, this.attrs || {})),
      i && (this.attrs = nr({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return Ba(this, e);
  }
  reuseDOM(e) {
    e.nodeName == 'DIV' && (this.setDOM(e), (this.flags |= 6));
  }
  sync(e, t) {
    var i;
    this.dom
      ? this.flags & 4 &&
        (Sa(this.dom),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0))
      : (this.setDOM(document.createElement('div')),
        (this.dom.className = 'cm-line'),
        (this.prevAttrs = this.attrs ? null : void 0)),
      this.prevAttrs !== void 0 &&
        (sr(this.dom, this.prevAttrs, this.attrs),
        this.dom.classList.add('cm-line'),
        (this.prevAttrs = void 0)),
      super.sync(e, t);
    let s = this.dom.lastChild;
    for (; s && U.get(s) instanceof at; ) s = s.lastChild;
    if (
      !s ||
      !this.length ||
      (s.nodeName != 'BR' &&
        ((i = U.get(s)) === null || i === void 0 ? void 0 : i.isEditable) == !1 &&
        (!T.ios || !this.children.some((r) => r instanceof Ve)))
    ) {
      let r = document.createElement('BR');
      (r.cmIgnore = !0), this.dom.appendChild(r);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20) return null;
    let e = 0,
      t;
    for (let i of this.children) {
      if (!(i instanceof Ve) || /[^ -~]/.test(i.text)) return null;
      let s = Bi(i.dom);
      if (s.length != 1) return null;
      (e += s[0].width), (t = s[0].height);
    }
    return e
      ? {
          lineHeight: this.dom.getBoundingClientRect().height,
          charWidth: e / this.length,
          textHeight: t,
        }
      : null;
  }
  coordsAt(e, t) {
    let i = Ra(this, e, t);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: s } = this.parent.view.viewState,
        r = i.bottom - i.top;
      if (Math.abs(r - s.lineHeight) < 2 && s.textHeight < r) {
        let o = (r - s.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return (
      e instanceof ee &&
      this.children.length == 0 &&
      e.children.length == 0 &&
      Rn(this.attrs, e.attrs) &&
      this.breakAfter == e.breakAfter
    );
  }
  covers() {
    return !0;
  }
  static find(e, t) {
    for (let i = 0, s = 0; i < e.children.length; i++) {
      let r = e.children[i],
        o = s + r.length;
      if (o >= t) {
        if (r instanceof ee) return r;
        if (o > t) break;
      }
      s = o + r.breakAfter;
    }
    return null;
  }
}
class lt extends U {
  constructor(e, t, i) {
    super(),
      (this.widget = e),
      (this.length = t),
      (this.deco = i),
      (this.breakAfter = 0),
      (this.prevWidget = null);
  }
  merge(e, t, i, s, r, o) {
    return i &&
      (!(i instanceof lt) ||
        !this.widget.compare(i.widget) ||
        (e > 0 && r <= 0) ||
        (t < this.length && o <= 0))
      ? !1
      : ((this.length = e + (i ? i.length : 0) + (this.length - t)), !0);
  }
  domAtPos(e) {
    return e == 0 ? ue.before(this.dom) : ue.after(this.dom, e == this.length);
  }
  split(e) {
    let t = this.length - e;
    this.length = e;
    let i = new lt(this.widget, t, this.deco);
    return (i.breakAfter = this.breakAfter), i;
  }
  get children() {
    return Hr;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) &&
      (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
      (this.prevWidget = null),
      this.setDOM(this.widget.toDOM(e)),
      this.widget.editable || (this.dom.contentEditable = 'false'));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : z.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof lt && e.widget.constructor == this.widget.constructor
      ? (e.widget.compare(this.widget) || this.markDirty(!0),
        this.dom && !this.prevWidget && (this.prevWidget = this.widget),
        (this.widget = e.widget),
        (this.length = e.length),
        (this.deco = e.deco),
        (this.breakAfter = e.breakAfter),
        !0)
      : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get isEditable() {
    return !1;
  }
  get isWidget() {
    return !0;
  }
  coordsAt(e, t) {
    let i = this.widget.coordsAt(this.dom, e, t);
    return (
      i ||
      (this.widget instanceof rr
        ? null
        : ts(this.dom.getBoundingClientRect(), this.length ? e == 0 : t <= 0))
    );
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: t, endSide: i } = this.deco;
    return t == i ? !1 : e < 0 ? t < 0 : i > 0;
  }
}
class rr extends Ct {
  constructor(e) {
    super(), (this.height = e);
  }
  toDOM() {
    let e = document.createElement('div');
    return (e.className = 'cm-gap'), this.updateDOM(e), e;
  }
  eq(e) {
    return e.height == this.height;
  }
  updateDOM(e) {
    return (e.style.height = this.height + 'px'), !0;
  }
  get editable() {
    return !0;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return !1;
  }
}
class Ci {
  constructor(e, t, i, s) {
    (this.doc = e),
      (this.pos = t),
      (this.end = i),
      (this.disallowBlockEffectsFor = s),
      (this.content = []),
      (this.curLine = null),
      (this.breakAtStart = 0),
      (this.pendingBuffer = 0),
      (this.bufferMarks = []),
      (this.atCursorPos = !0),
      (this.openStart = -1),
      (this.openEnd = -1),
      (this.text = ''),
      (this.textOff = 0),
      (this.cursor = e.iter()),
      (this.skip = t);
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || (e instanceof lt && e.deco.endSide < 0));
  }
  getLine() {
    return (
      this.curLine || (this.content.push((this.curLine = new ee())), (this.atCursorPos = !0)),
      this.curLine
    );
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer &&
      (this.curLine.append(en(new Zt(-1), e), e.length), (this.pendingBuffer = 0));
  }
  addBlockWidget(e) {
    this.flushBuffer(), (this.curLine = null), this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length
      ? this.flushBuffer()
      : (this.pendingBuffer = 0),
      !this.posCovered() &&
        !(e && this.content.length && this.content[this.content.length - 1] instanceof lt) &&
        this.getLine();
  }
  buildText(e, t, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: r, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (((this.skip = 0), l))
          throw new Error('Ran out of text content when drawing inline views');
        if (o) {
          this.posCovered() || this.getLine(),
            this.content.length
              ? (this.content[this.content.length - 1].breakAfter = 1)
              : (this.breakAtStart = 1),
            this.flushBuffer(),
            (this.curLine = null),
            (this.atCursorPos = !0),
            e--;
          continue;
        } else (this.text = r), (this.textOff = 0);
      }
      let s = Math.min(this.text.length - this.textOff, e, 512);
      this.flushBuffer(t.slice(t.length - i)),
        this.getLine().append(en(new Ve(this.text.slice(this.textOff, this.textOff + s)), t), i),
        (this.atCursorPos = !0),
        (this.textOff += s),
        (e -= s),
        (i = 0);
    }
  }
  span(e, t, i, s) {
    this.buildText(t - e, i, s), (this.pos = t), this.openStart < 0 && (this.openStart = s);
  }
  point(e, t, i, s, r, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof vt) {
      if (i.block) throw new RangeError('Block decorations may not be specified via plugins');
      if (t > this.doc.lineAt(this.pos).to)
        throw new RangeError(
          'Decorations that replace line breaks may not be specified via plugins',
        );
    }
    let l = t - e;
    if (i instanceof vt)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(),
          this.addBlockWidget(new lt(i.widget || ei.block, l, i));
      else {
        let a = mt.create(i.widget || ei.inline, l, l ? 0 : i.startSide),
          h = this.atCursorPos && !a.isEditable && r <= s.length && (e < t || i.startSide > 0),
          c = !a.isEditable && (e < t || r > s.length || i.startSide <= 0),
          f = this.getLine();
        this.pendingBuffer == 2 && !h && !a.isEditable && (this.pendingBuffer = 0),
          this.flushBuffer(s),
          h && (f.append(en(new Zt(1), s), r), (r = s.length + Math.max(0, r - s.length))),
          f.append(en(a, s), r),
          (this.atCursorPos = c),
          (this.pendingBuffer = c ? (e < t || r > s.length ? 1 : 2) : 0),
          this.pendingBuffer && (this.bufferMarks = s.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l &&
      (this.textOff + l <= this.text.length
        ? (this.textOff += l)
        : ((this.skip += l - (this.text.length - this.textOff)),
          (this.text = ''),
          (this.textOff = 0)),
      (this.pos = t)),
      this.openStart < 0 && (this.openStart = r);
  }
  static build(e, t, i, s, r) {
    let o = new Ci(e, t, i, r);
    return (
      (o.openEnd = W.spans(s, t, i, o)),
      o.openStart < 0 && (o.openStart = o.openEnd),
      o.finish(o.openEnd),
      o
    );
  }
}
function en(n, e) {
  for (let t of e) n = new at(t, [n], n.length);
  return n;
}
class ei extends Ct {
  constructor(e) {
    super(), (this.tag = e);
  }
  eq(e) {
    return e.tag == this.tag;
  }
  toDOM() {
    return document.createElement(this.tag);
  }
  updateDOM(e) {
    return e.nodeName.toLowerCase() == this.tag;
  }
  get isHidden() {
    return !0;
  }
}
ei.inline = new ei('span');
ei.block = new ei('div');
var J = (function (n) {
  return (n[(n.LTR = 0)] = 'LTR'), (n[(n.RTL = 1)] = 'RTL'), n;
})(J || (J = {}));
const Ft = J.LTR,
  Fr = J.RTL;
function Na(n) {
  let e = [];
  for (let t = 0; t < n.length; t++) e.push(1 << +n[t]);
  return e;
}
const Tf = Na(
    '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008',
  ),
  Df = Na(
    '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333',
  ),
  or = Object.create(null),
  Ke = [];
for (let n of ['()', '[]', '{}']) {
  let e = n.charCodeAt(0),
    t = n.charCodeAt(1);
  (or[e] = t), (or[t] = -e);
}
function Ha(n) {
  return n <= 247
    ? Tf[n]
    : 1424 <= n && n <= 1524
      ? 2
      : 1536 <= n && n <= 1785
        ? Df[n - 1536]
        : 1774 <= n && n <= 2220
          ? 4
          : 8192 <= n && n <= 8204
            ? 256
            : 64336 <= n && n <= 65023
              ? 4
              : 1;
}
const Of = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class gt {
  get dir() {
    return this.level % 2 ? Fr : Ft;
  }
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.level = i);
  }
  side(e, t) {
    return (this.dir == t) == e ? this.to : this.from;
  }
  forward(e, t) {
    return e == (this.dir == t);
  }
  static find(e, t, i, s) {
    let r = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= t && l.to >= t) {
        if (l.level == i) return o;
        (r < 0 || (s != 0 ? (s < 0 ? l.from < t : l.to > t) : e[r].level > l.level)) && (r = o);
      }
    }
    if (r < 0) throw new RangeError('Index out of range');
    return r;
  }
}
function Fa(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) {
    let i = n[t],
      s = e[t];
    if (i.from != s.from || i.to != s.to || i.direction != s.direction || !Fa(i.inner, s.inner))
      return !1;
  }
  return !0;
}
const _ = [];
function Lf(n, e, t, i, s) {
  for (let r = 0; r <= i.length; r++) {
    let o = r ? i[r - 1].to : e,
      l = r < i.length ? i[r].from : t,
      a = r ? 256 : s;
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = Ha(n.charCodeAt(h));
      u == 512 ? (u = c) : u == 8 && f == 4 && (u = 16),
        (_[h] = u == 4 ? 2 : u),
        u & 7 && (f = u),
        (c = u);
    }
    for (let h = o, c = a, f = a; h < l; h++) {
      let u = _[h];
      if (u == 128) h < l - 1 && c == _[h + 1] && c & 24 ? (u = _[h] = c) : (_[h] = 256);
      else if (u == 64) {
        let d = h + 1;
        for (; d < l && _[d] == 64; ) d++;
        let p = (h && c == 8) || (d < t && _[d] == 8) ? (f == 1 ? 1 : 8) : 256;
        for (let m = h; m < d; m++) _[m] = p;
        h = d - 1;
      } else u == 8 && f == 1 && (_[h] = 1);
      (c = u), u & 7 && (f = u);
    }
  }
}
function Bf(n, e, t, i, s) {
  let r = s == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let h = o ? i[o - 1].to : e,
      c = o < i.length ? i[o].from : t;
    for (let f = h, u, d, p; f < c; f++)
      if ((d = or[(u = n.charCodeAt(f))]))
        if (d < 0) {
          for (let m = l - 3; m >= 0; m -= 3)
            if (Ke[m + 1] == -d) {
              let g = Ke[m + 2],
                y = g & 2 ? s : g & 4 ? (g & 1 ? r : s) : 0;
              y && (_[f] = _[Ke[m]] = y), (l = m);
              break;
            }
        } else {
          if (Ke.length == 189) break;
          (Ke[l++] = f), (Ke[l++] = u), (Ke[l++] = a);
        }
      else if ((p = _[f]) == 2 || p == 1) {
        let m = p == s;
        a = m ? 0 : 1;
        for (let g = l - 3; g >= 0; g -= 3) {
          let y = Ke[g + 2];
          if (y & 2) break;
          if (m) Ke[g + 2] |= 2;
          else {
            if (y & 4) break;
            Ke[g + 2] |= 4;
          }
        }
      }
  }
}
function Pf(n, e, t, i) {
  for (let s = 0, r = i; s <= t.length; s++) {
    let o = s ? t[s - 1].to : n,
      l = s < t.length ? t[s].from : e;
    for (let a = o; a < l; ) {
      let h = _[a];
      if (h == 256) {
        let c = a + 1;
        for (;;)
          if (c == l) {
            if (s == t.length) break;
            (c = t[s++].to), (l = s < t.length ? t[s].from : e);
          } else if (_[c] == 256) c++;
          else break;
        let f = r == 1,
          u = (c < e ? _[c] : i) == 1,
          d = f == u ? (f ? 1 : 2) : i;
        for (let p = c, m = s, g = m ? t[m - 1].to : n; p > a; )
          p == g && ((p = t[--m].from), (g = m ? t[m - 1].to : n)), (_[--p] = d);
        a = c;
      } else (r = h), a++;
    }
  }
}
function lr(n, e, t, i, s, r, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == s % 2)
    for (let a = e, h = 0; a < t; ) {
      let c = !0,
        f = !1;
      if (h == r.length || a < r[h].from) {
        let m = _[a];
        m != l && ((c = !1), (f = m == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? i : i + 1,
        p = a;
      e: for (;;)
        if (h < r.length && p == r[h].from) {
          if (f) break e;
          let m = r[h];
          if (!c)
            for (let g = m.to, y = h + 1; ; ) {
              if (g == t) break e;
              if (y < r.length && r[y].from == g) g = r[y++].to;
              else {
                if (_[g] == l) break e;
                break;
              }
            }
          if ((h++, u)) u.push(m);
          else {
            m.from > a && o.push(new gt(a, m.from, d));
            let g = (m.direction == Ft) != !(d % 2);
            ar(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), (a = m.to);
          }
          p = m.to;
        } else {
          if (p == t || (c ? _[p] != l : _[p] == l)) break;
          p++;
        }
      u ? lr(n, a, p, i + 1, s, u, o) : a < p && o.push(new gt(a, p, d)), (a = p);
    }
  else
    for (let a = t, h = r.length; a > e; ) {
      let c = !0,
        f = !1;
      if (!h || a > r[h - 1].to) {
        let m = _[a - 1];
        m != l && ((c = !1), (f = m == 16));
      }
      let u = !c && l == 1 ? [] : null,
        d = c ? i : i + 1,
        p = a;
      e: for (;;)
        if (h && p == r[h - 1].to) {
          if (f) break e;
          let m = r[--h];
          if (!c)
            for (let g = m.from, y = h; ; ) {
              if (g == e) break e;
              if (y && r[y - 1].to == g) g = r[--y].from;
              else {
                if (_[g - 1] == l) break e;
                break;
              }
            }
          if (u) u.push(m);
          else {
            m.to < a && o.push(new gt(m.to, a, d));
            let g = (m.direction == Ft) != !(d % 2);
            ar(n, g ? i + 1 : i, s, m.inner, m.from, m.to, o), (a = m.from);
          }
          p = m.from;
        } else {
          if (p == e || (c ? _[p - 1] != l : _[p - 1] == l)) break;
          p--;
        }
      u ? lr(n, p, a, i + 1, s, u, o) : p < a && o.push(new gt(p, a, d)), (a = p);
    }
}
function ar(n, e, t, i, s, r, o) {
  let l = e % 2 ? 2 : 1;
  Lf(n, s, r, i, l), Bf(n, s, r, i, l), Pf(s, r, i, l), lr(n, s, r, e, t, i, o);
}
function Rf(n, e, t) {
  if (!n) return [new gt(0, 0, e == Fr ? 1 : 0)];
  if (e == Ft && !t.length && !Of.test(n)) return Va(n.length);
  if (t.length) for (; n.length > _.length; ) _[_.length] = 256;
  let i = [],
    s = e == Ft ? 0 : 1;
  return ar(n, s, s, t, 0, n.length, i), i;
}
function Va(n) {
  return [new gt(0, n, 0)];
}
let Wa = '';
function If(n, e, t, i, s) {
  var r;
  let o = i.head - n.from,
    l = gt.find(e, o, (r = i.bidiLevel) !== null && r !== void 0 ? r : -1, i.assoc),
    a = e[l],
    h = a.side(s, t);
  if (o == h) {
    let u = (l += s ? 1 : -1);
    if (u < 0 || u >= e.length) return null;
    (a = e[(l = u)]), (o = a.side(!s, t)), (h = a.side(s, t));
  }
  let c = ce(n.text, o, a.forward(s, t));
  (c < a.from || c > a.to) && (c = h), (Wa = n.text.slice(Math.min(o, c), Math.max(o, c)));
  let f = l == (s ? e.length - 1 : 0) ? null : e[l + (s ? 1 : -1)];
  return f && c == h && f.level + (s ? 0 : 1) < a.level
    ? b.cursor(f.side(!s, t) + n.from, f.forward(s, t) ? 1 : -1, f.level)
    : b.cursor(c + n.from, a.forward(s, t) ? -1 : 1, a.level);
}
function Nf(n, e, t) {
  for (let i = e; i < t; i++) {
    let s = Ha(n.charCodeAt(i));
    if (s == 1) return Ft;
    if (s == 2 || s == 4) return Fr;
  }
  return Ft;
}
const za = D.define(),
  qa = D.define(),
  $a = D.define(),
  Ka = D.define(),
  hr = D.define(),
  ja = D.define(),
  _a = D.define(),
  Vr = D.define(),
  Wr = D.define(),
  Ua = D.define({ combine: (n) => n.some((e) => e) }),
  Ga = D.define({ combine: (n) => n.some((e) => e) }),
  Ya = D.define();
class Yt {
  constructor(e, t = 'nearest', i = 'nearest', s = 5, r = 5, o = !1) {
    (this.range = e),
      (this.y = t),
      (this.x = i),
      (this.yMargin = s),
      (this.xMargin = r),
      (this.isSnapshot = o);
  }
  map(e) {
    return e.empty
      ? this
      : new Yt(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length
      ? this
      : new Yt(b.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const tn = P.define({ map: (n, e) => n.map(e) }),
  Ja = P.define();
function Se(n, e, t) {
  let i = n.facet(Ka);
  i.length
    ? i[0](e)
    : window.onerror
      ? window.onerror(String(e), t, void 0, void 0, e)
      : t
        ? console.error(t + ':', e)
        : console.error(e);
}
const ot = D.define({ combine: (n) => (n.length ? n[0] : !0) });
let Hf = 0;
const mi = D.define();
class te {
  constructor(e, t, i, s, r) {
    (this.id = e),
      (this.create = t),
      (this.domEventHandlers = i),
      (this.domEventObservers = s),
      (this.extension = r(this));
  }
  static define(e, t) {
    const { eventHandlers: i, eventObservers: s, provide: r, decorations: o } = t || {};
    return new te(Hf++, e, i, s, (l) => {
      let a = [mi.of(l)];
      return (
        o &&
          a.push(
            Pi.of((h) => {
              let c = h.plugin(l);
              return c ? o(c) : O.none;
            }),
          ),
        r && a.push(r(l)),
        a
      );
    });
  }
  static fromClass(e, t) {
    return te.define((i) => new e(i), t);
  }
}
class ys {
  constructor(e) {
    (this.spec = e), (this.mustUpdate = null), (this.value = null);
  }
  update(e) {
    if (this.value) {
      if (this.mustUpdate) {
        let t = this.mustUpdate;
        if (((this.mustUpdate = null), this.value.update))
          try {
            this.value.update(t);
          } catch (i) {
            if ((Se(t.state, i, 'CodeMirror plugin crashed'), this.value.destroy))
              try {
                this.value.destroy();
              } catch {}
            this.deactivate();
          }
      }
    } else if (this.spec)
      try {
        this.value = this.spec.create(e);
      } catch (t) {
        Se(e.state, t, 'CodeMirror plugin crashed'), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var t;
    if (!((t = this.value) === null || t === void 0) && t.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        Se(e.state, i, 'CodeMirror plugin crashed');
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const Xa = D.define(),
  zr = D.define(),
  Pi = D.define(),
  Qa = D.define(),
  qr = D.define(),
  Za = D.define();
function Bo(n, e) {
  let t = n.state.facet(Za);
  if (!t.length) return t;
  let i = t.map((r) => (r instanceof Function ? r(n) : r)),
    s = [];
  return (
    W.spans(i, e.from, e.to, {
      point() {},
      span(r, o, l, a) {
        let h = r - e.from,
          c = o - e.from,
          f = s;
        for (let u = l.length - 1; u >= 0; u--, a--) {
          let d = l[u].spec.bidiIsolate,
            p;
          if (
            (d == null && (d = Nf(e.text, h, c)),
            a > 0 && f.length && (p = f[f.length - 1]).to == h && p.direction == d)
          )
            (p.to = c), (f = p.inner);
          else {
            let m = { from: h, to: c, direction: d, inner: [] };
            f.push(m), (f = m.inner);
          }
        }
      },
    }),
    s
  );
}
const eh = D.define();
function $r(n) {
  let e = 0,
    t = 0,
    i = 0,
    s = 0;
  for (let r of n.state.facet(eh)) {
    let o = r(n);
    o &&
      (o.left != null && (e = Math.max(e, o.left)),
      o.right != null && (t = Math.max(t, o.right)),
      o.top != null && (i = Math.max(i, o.top)),
      o.bottom != null && (s = Math.max(s, o.bottom)));
  }
  return { left: e, right: t, top: i, bottom: s };
}
const gi = D.define();
class Re {
  constructor(e, t, i, s) {
    (this.fromA = e), (this.toA = t), (this.fromB = i), (this.toB = s);
  }
  join(e) {
    return new Re(
      Math.min(this.fromA, e.fromA),
      Math.max(this.toA, e.toA),
      Math.min(this.fromB, e.fromB),
      Math.max(this.toB, e.toB),
    );
  }
  addToSet(e) {
    let t = e.length,
      i = this;
    for (; t > 0; t--) {
      let s = e[t - 1];
      if (!(s.fromA > i.toA)) {
        if (s.toA < i.fromA) break;
        (i = i.join(s)), e.splice(t - 1, 1);
      }
    }
    return e.splice(t, 0, i), e;
  }
  static extendWithRanges(e, t) {
    if (t.length == 0) return e;
    let i = [];
    for (let s = 0, r = 0, o = 0, l = 0; ; s++) {
      let a = s == e.length ? null : e[s],
        h = o - l,
        c = a ? a.fromB : 1e9;
      for (; r < t.length && t[r] < c; ) {
        let f = t[r],
          u = t[r + 1],
          d = Math.max(l, f),
          p = Math.min(c, u);
        if ((d <= p && new Re(d + h, p + h, d, p).addToSet(i), u > c)) break;
        r += 2;
      }
      if (!a) return i;
      new Re(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), (o = a.toA), (l = a.toB);
    }
  }
}
class In {
  constructor(e, t, i) {
    (this.view = e),
      (this.state = t),
      (this.transactions = i),
      (this.flags = 0),
      (this.startState = e.state),
      (this.changes = ie.empty(this.startState.doc.length));
    for (let r of i) this.changes = this.changes.compose(r.changes);
    let s = [];
    this.changes.iterChangedRanges((r, o, l, a) => s.push(new Re(r, o, l, a))),
      (this.changedRanges = s);
  }
  static create(e, t, i) {
    return new In(e, t, i);
  }
  get viewportChanged() {
    return (this.flags & 4) > 0;
  }
  get viewportMoved() {
    return (this.flags & 8) > 0;
  }
  get heightChanged() {
    return (this.flags & 2) > 0;
  }
  get geometryChanged() {
    return this.docChanged || (this.flags & 18) > 0;
  }
  get focusChanged() {
    return (this.flags & 1) > 0;
  }
  get docChanged() {
    return !this.changes.empty;
  }
  get selectionSet() {
    return this.transactions.some((e) => e.selection);
  }
  get empty() {
    return this.flags == 0 && this.transactions.length == 0;
  }
}
class Po extends U {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(),
      (this.view = e),
      (this.decorations = []),
      (this.dynamicDecorationMap = [!1]),
      (this.domChanged = null),
      (this.hasComposition = null),
      (this.markedForComposition = new Set()),
      (this.editContextFormatting = O.none),
      (this.lastCompositionAfterCursor = !1),
      (this.minWidth = 0),
      (this.minWidthFrom = 0),
      (this.minWidthTo = 0),
      (this.impreciseAnchor = null),
      (this.impreciseHead = null),
      (this.forceSelection = !1),
      (this.lastUpdate = Date.now()),
      this.setDOM(e.contentDOM),
      (this.children = [new ee()]),
      this.children[0].setParent(this),
      this.updateDeco(),
      this.updateInner([new Re(0, 0, 0, e.state.doc.length)], 0, null);
  }
  update(e) {
    var t;
    let i = e.changedRanges;
    this.minWidth > 0 &&
      i.length &&
      (i.every(({ fromA: h, toA: c }) => c < this.minWidthFrom || h > this.minWidthTo)
        ? ((this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1)),
          (this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)))
        : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
      this.updateEditContextFormatting(e);
    let s = -1;
    this.view.inputState.composing >= 0 &&
      !this.view.observer.editContext &&
      (!((t = this.domChanged) === null || t === void 0) && t.newSel
        ? (s = this.domChanged.newSel.head)
        : !Kf(e.changes, this.hasComposition) &&
          !e.selectionSet &&
          (s = e.state.selection.main.head));
    let r = s > -1 ? Vf(this.view, e.changes, s) : null;
    if (((this.domChanged = null), this.hasComposition)) {
      this.markedForComposition.clear();
      let { from: h, to: c } = this.hasComposition;
      i = new Re(h, c, e.changes.mapPos(h, -1), e.changes.mapPos(c, 1)).addToSet(i.slice());
    }
    (this.hasComposition = r ? { from: r.range.fromB, to: r.range.toB } : null),
      (T.ie || T.chrome) &&
        !r &&
        e &&
        e.state.doc.lines != e.startState.doc.lines &&
        (this.forceSelection = !0);
    let o = this.decorations,
      l = this.updateDeco(),
      a = qf(o, l, e.changes);
    return (
      (i = Re.extendWithRanges(i, a)),
      !(this.flags & 7) && i.length == 0
        ? !1
        : (this.updateInner(i, e.startState.doc.length, r),
          e.transactions.length && (this.lastUpdate = Date.now()),
          !0)
    );
  }
  updateInner(e, t, i) {
    (this.view.viewState.mustMeasureContent = !0), this.updateChildren(e, t, i);
    let { observer: s } = this.view;
    s.ignore(() => {
      (this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + 'px'),
        (this.dom.style.flexBasis = this.minWidth ? this.minWidth + 'px' : '');
      let o = T.chrome || T.ios ? { node: s.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o),
        (this.flags &= -8),
        o && (o.written || s.selectionRange.focusNode != o.node) && (this.forceSelection = !0),
        (this.dom.style.height = '');
    }),
      this.markedForComposition.forEach((o) => (o.flags &= -9));
    let r = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children) o instanceof lt && o.widget instanceof rr && r.push(o.dom);
    s.updateGaps(r);
  }
  updateChildren(e, t, i) {
    let s = i ? i.range.addToSet(e.slice()) : e,
      r = this.childCursor(t);
    for (let o = s.length - 1; ; o--) {
      let l = o >= 0 ? s[o] : null;
      if (!l) break;
      let { fromA: a, toA: h, fromB: c, toB: f } = l,
        u,
        d,
        p,
        m;
      if (i && i.range.fromB < f && i.range.toB > c) {
        let k = Ci.build(
            this.view.state.doc,
            c,
            i.range.fromB,
            this.decorations,
            this.dynamicDecorationMap,
          ),
          w = Ci.build(
            this.view.state.doc,
            i.range.toB,
            f,
            this.decorations,
            this.dynamicDecorationMap,
          );
        (d = k.breakAtStart), (p = k.openStart), (m = w.openEnd);
        let S = this.compositionView(i);
        w.breakAtStart
          ? (S.breakAfter = 1)
          : w.content.length &&
            S.merge(S.length, S.length, w.content[0], !1, w.openStart, 0) &&
            ((S.breakAfter = w.content[0].breakAfter), w.content.shift()),
          k.content.length &&
            S.merge(0, 0, k.content[k.content.length - 1], !0, 0, k.openEnd) &&
            k.content.pop(),
          (u = k.content.concat(S).concat(w.content));
      } else
        ({
          content: u,
          breakAtStart: d,
          openStart: p,
          openEnd: m,
        } = Ci.build(this.view.state.doc, c, f, this.decorations, this.dynamicDecorationMap));
      let { i: g, off: y } = r.findPos(h, 1),
        { i: x, off: v } = r.findPos(a, -1);
      Ta(this, x, v, g, y, u, d, p, m);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let t of e.transactions)
      for (let i of t.effects) i.is(Ja) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let t = new Ve(e.text.nodeValue);
    t.flags |= 8;
    for (let { deco: s } of e.marks) t = new at(s, [t], t.length);
    let i = new ee();
    return i.append(t, 0), i;
  }
  fixCompositionDOM(e) {
    let t = (r, o) => {
        (o.flags |= 8 | (o.children.some((a) => a.flags & 7) ? 1 : 0)),
          this.markedForComposition.add(o);
        let l = U.get(r);
        l && l != o && (l.dom = null), o.setDOM(r);
      },
      i = this.childPos(e.range.fromB, 1),
      s = this.children[i.i];
    t(e.line, s);
    for (let r = e.marks.length - 1; r >= -1; r--)
      (i = s.childPos(i.off, 1)), (s = s.children[i.i]), t(r >= 0 ? e.marks[r].node : e.text, s);
  }
  updateSelection(e = !1, t = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement,
      s = i == this.dom,
      r =
        !s &&
        !(this.view.state.facet(ot) || this.dom.tabIndex > -1) &&
        Sn(this.dom, this.view.observer.selectionRange) &&
        !(i && this.dom.contains(i));
    if (!(s || t || r)) return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main,
      a = this.moveToLine(this.domAtPos(l.anchor)),
      h = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (T.gecko && l.empty && !this.hasComposition && Ff(a)) {
      let f = document.createTextNode('');
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)),
        (a = h = new ue(f, 0)),
        (o = !0);
    }
    let c = this.view.observer.selectionRange;
    (o ||
      !c.focusNode ||
      ((!Si(a.node, a.offset, c.anchorNode, c.anchorOffset) ||
        !Si(h.node, h.offset, c.focusNode, c.focusOffset)) &&
        !this.suppressWidgetCursorChange(c, l))) &&
      (this.view.observer.ignore(() => {
        T.android &&
          T.chrome &&
          this.dom.contains(c.focusNode) &&
          $f(c.focusNode, this.dom) &&
          (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
        let f = Li(this.view.root);
        if (f)
          if (l.empty) {
            if (T.gecko) {
              let u = Wf(a.node, a.offset);
              if (u && u != 3) {
                let d = (u == 1 ? Aa : Ma)(a.node, a.offset);
                d && (a = new ue(d.node, d.offset));
              }
            }
            f.collapse(a.node, a.offset),
              l.bidiLevel != null &&
                f.caretBidiLevel !== void 0 &&
                (f.caretBidiLevel = l.bidiLevel);
          } else if (f.extend) {
            f.collapse(a.node, a.offset);
            try {
              f.extend(h.node, h.offset);
            } catch {}
          } else {
            let u = document.createRange();
            l.anchor > l.head && ([a, h] = [h, a]),
              u.setEnd(h.node, h.offset),
              u.setStart(a.node, a.offset),
              f.removeAllRanges(),
              f.addRange(u);
          }
        r && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
      }),
      this.view.observer.setSelectionRange(a, h)),
      (this.impreciseAnchor = a.precise ? null : new ue(c.anchorNode, c.anchorOffset)),
      (this.impreciseHead = h.precise ? null : new ue(c.focusNode, c.focusOffset));
  }
  suppressWidgetCursorChange(e, t) {
    return (
      this.hasComposition &&
      t.empty &&
      Si(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) &&
      this.posFromDOM(e.focusNode, e.focusOffset) == t.head
    );
  }
  enforceCursorAssoc() {
    if (this.hasComposition) return;
    let { view: e } = this,
      t = e.state.selection.main,
      i = Li(e.root),
      { anchorNode: s, anchorOffset: r } = e.observer.selectionRange;
    if (!i || !t.empty || !t.assoc || !i.modify) return;
    let o = ee.find(this, t.head);
    if (!o) return;
    let l = o.posAtStart;
    if (t.head == l || t.head == l + o.length) return;
    let a = this.coordsAt(t.head, -1),
      h = this.coordsAt(t.head, 1);
    if (!a || !h || a.bottom > h.top) return;
    let c = this.domAtPos(t.head + t.assoc);
    i.collapse(c.node, c.offset),
      i.modify('move', t.assoc < 0 ? 'forward' : 'backward', 'lineboundary'),
      e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != t.from && i.collapse(s, r);
  }
  moveToLine(e) {
    let t = this.dom,
      i;
    if (e.node != t) return e;
    for (let s = e.offset; !i && s < t.childNodes.length; s++) {
      let r = U.get(t.childNodes[s]);
      r instanceof ee && (i = r.domAtPos(0));
    }
    for (let s = e.offset - 1; !i && s >= 0; s--) {
      let r = U.get(t.childNodes[s]);
      r instanceof ee && (i = r.domAtPos(r.length));
    }
    return i ? new ue(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let t = e; t; ) {
      let i = U.get(t);
      if (i && i.rootView == this) return i;
      t = t.parentNode;
    }
    return null;
  }
  posFromDOM(e, t) {
    let i = this.nearest(e);
    if (!i)
      throw new RangeError('Trying to find position for a DOM position outside of the document');
    return i.localPosFromDOM(e, t) + i.posAtStart;
  }
  domAtPos(e) {
    let { i: t, off: i } = this.childCursor().findPos(e, -1);
    for (; t < this.children.length - 1; ) {
      let s = this.children[t];
      if (i < s.length || s instanceof ee) break;
      t++, (i = 0);
    }
    return this.children[t].domAtPos(i);
  }
  coordsAt(e, t) {
    let i = null,
      s = 0;
    for (let r = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o],
        a = r - l.breakAfter,
        h = a - l.length;
      if (a < e) break;
      if (
        h <= e &&
        (h < e || l.covers(-1)) &&
        (a > e || l.covers(1)) &&
        (!i || (l instanceof ee && !(i instanceof ee && t >= 0)))
      )
        (i = l), (s = h);
      else if (i && h == e && a == e && l instanceof lt && Math.abs(t) < 2) {
        if (l.deco.startSide < 0) break;
        o && (i = null);
      }
      r = h;
    }
    return i ? i.coordsAt(e - s, t) : null;
  }
  coordsForChar(e) {
    let { i: t, off: i } = this.childPos(e, 1),
      s = this.children[t];
    if (!(s instanceof ee)) return null;
    for (; s.children.length; ) {
      let { i: l, off: a } = s.childPos(i, 1);
      for (; ; l++) {
        if (l == s.children.length) return null;
        if ((s = s.children[l]).length) break;
      }
      i = a;
    }
    if (!(s instanceof Ve)) return null;
    let r = ce(s.text, i);
    if (r == i) return null;
    let o = Ht(s.dom, i, r).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || (a.top < a.bottom && a.left < a.right)) return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let t = [],
      { from: i, to: s } = e,
      r = this.view.contentDOM.clientWidth,
      o = r > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
      l = -1,
      a = this.view.textDirection == J.LTR;
    for (let h = 0, c = 0; c < this.children.length; c++) {
      let f = this.children[c],
        u = h + f.length;
      if (u > s) break;
      if (h >= i) {
        let d = f.dom.getBoundingClientRect();
        if ((t.push(d.height), o)) {
          let p = f.dom.lastChild,
            m = p ? Bi(p) : [];
          if (m.length) {
            let g = m[m.length - 1],
              y = a ? g.right - d.left : d.right - g.left;
            y > l && ((l = y), (this.minWidth = r), (this.minWidthFrom = h), (this.minWidthTo = u));
          }
        }
      }
      h = u + f.breakAfter;
    }
    return t;
  }
  textDirectionAt(e) {
    let { i: t } = this.childPos(e, 1);
    return getComputedStyle(this.children[t].dom).direction == 'rtl' ? J.RTL : J.LTR;
  }
  measureTextSize() {
    for (let r of this.children)
      if (r instanceof ee) {
        let o = r.measureTextSize();
        if (o) return o;
      }
    let e = document.createElement('div'),
      t,
      i,
      s;
    return (
      (e.className = 'cm-line'),
      (e.style.width = '99999px'),
      (e.style.position = 'absolute'),
      (e.textContent = 'abc def ghi jkl mno pqr stu'),
      this.view.observer.ignore(() => {
        this.dom.appendChild(e);
        let r = Bi(e.firstChild)[0];
        (t = e.getBoundingClientRect().height),
          (i = r ? r.width / 27 : 7),
          (s = r ? r.height : t),
          e.remove();
      }),
      { lineHeight: t, charWidth: i, textHeight: s }
    );
  }
  childCursor(e = this.length) {
    let t = this.children.length;
    return t && (e -= this.children[--t].length), new Ea(this.children, e, t);
  }
  computeBlockGapDeco() {
    let e = [],
      t = this.view.viewState;
    for (let i = 0, s = 0; ; s++) {
      let r = s == t.viewports.length ? null : t.viewports[s],
        o = r ? r.from - 1 : this.length;
      if (o > i) {
        let l = (t.lineBlockAt(o).bottom - t.lineBlockAt(i).top) / this.view.scaleY;
        e.push(
          O.replace({ widget: new rr(l), block: !0, inclusive: !0, isBlockGap: !0 }).range(i, o),
        );
      }
      if (!r) break;
      i = r.to + 1;
    }
    return O.set(e);
  }
  updateDeco() {
    let e = 1,
      t = this.view.state
        .facet(Pi)
        .map((r) => ((this.dynamicDecorationMap[e++] = typeof r == 'function') ? r(this.view) : r)),
      i = !1,
      s = this.view.state.facet(Qa).map((r, o) => {
        let l = typeof r == 'function';
        return l && (i = !0), l ? r(this.view) : r;
      });
    for (
      s.length && ((this.dynamicDecorationMap[e++] = i), t.push(W.join(s))),
        this.decorations = [
          this.editContextFormatting,
          ...t,
          this.computeBlockGapDeco(),
          this.view.viewState.lineGapDeco,
        ];
      e < this.decorations.length;

    )
      this.dynamicDecorationMap[e++] = !1;
    return this.decorations;
  }
  scrollIntoView(e) {
    if (e.isSnapshot) {
      let h = this.view.viewState.lineBlockAt(e.range.head);
      (this.view.scrollDOM.scrollTop = h.top - e.yMargin),
        (this.view.scrollDOM.scrollLeft = e.xMargin);
      return;
    }
    for (let h of this.view.state.facet(Ya))
      try {
        if (h(this.view, e.range, e)) return !0;
      } catch (c) {
        Se(this.view.state, c, 'scroll handler');
      }
    let { range: t } = e,
      i = this.coordsAt(t.head, t.empty ? t.assoc : t.head > t.anchor ? -1 : 1),
      s;
    if (!i) return;
    !t.empty &&
      (s = this.coordsAt(t.anchor, t.anchor > t.head ? -1 : 1)) &&
      (i = {
        left: Math.min(i.left, s.left),
        top: Math.min(i.top, s.top),
        right: Math.max(i.right, s.right),
        bottom: Math.max(i.bottom, s.bottom),
      });
    let r = $r(this.view),
      o = {
        left: i.left - r.left,
        top: i.top - r.top,
        right: i.right + r.right,
        bottom: i.bottom + r.bottom,
      },
      { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    gf(
      this.view.scrollDOM,
      o,
      t.head < t.anchor ? -1 : 1,
      e.x,
      e.y,
      Math.max(Math.min(e.xMargin, l), -l),
      Math.max(Math.min(e.yMargin, a), -a),
      this.view.textDirection == J.LTR,
    );
  }
}
function Ff(n) {
  return (
    n.node.nodeType == 1 &&
    n.node.firstChild &&
    (n.offset == 0 || n.node.childNodes[n.offset - 1].contentEditable == 'false') &&
    (n.offset == n.node.childNodes.length || n.node.childNodes[n.offset].contentEditable == 'false')
  );
}
function th(n, e) {
  let t = n.observer.selectionRange;
  if (!t.focusNode) return null;
  let i = Aa(t.focusNode, t.focusOffset),
    s = Ma(t.focusNode, t.focusOffset),
    r = i || s;
  if (s && i && s.node != i.node) {
    let l = U.get(s.node);
    if (!l || (l instanceof Ve && l.text != s.node.nodeValue)) r = s;
    else if (n.docView.lastCompositionAfterCursor) {
      let a = U.get(i.node);
      !a || (a instanceof Ve && a.text != i.node.nodeValue) || (r = s);
    }
  }
  if (((n.docView.lastCompositionAfterCursor = r != i), !r)) return null;
  let o = e - r.offset;
  return { from: o, to: o + r.node.nodeValue.length, node: r.node };
}
function Vf(n, e, t) {
  let i = th(n, t);
  if (!i) return null;
  let { node: s, from: r, to: o } = i,
    l = s.nodeValue;
  if (/[\n\r]/.test(l) || n.state.doc.sliceString(i.from, i.to) != l) return null;
  let a = e.invertedDesc,
    h = new Re(a.mapPos(r), a.mapPos(o), r, o),
    c = [];
  for (let f = s.parentNode; ; f = f.parentNode) {
    let u = U.get(f);
    if (u instanceof at) c.push({ node: f, deco: u.mark });
    else {
      if (u instanceof ee || (f.nodeName == 'DIV' && f.parentNode == n.contentDOM))
        return { range: h, text: s, marks: c, line: f };
      if (f != n.contentDOM)
        c.push({
          node: f,
          deco: new Ki({ inclusive: !0, attributes: Mf(f), tagName: f.tagName.toLowerCase() }),
        });
      else return null;
    }
  }
}
function Wf(n, e) {
  return n.nodeType != 1
    ? 0
    : (e && n.childNodes[e - 1].contentEditable == 'false' ? 1 : 0) |
        (e < n.childNodes.length && n.childNodes[e].contentEditable == 'false' ? 2 : 0);
}
let zf = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, t) {
    Cn(e, t, this.changes);
  }
  comparePoint(e, t) {
    Cn(e, t, this.changes);
  }
  boundChange(e) {
    Cn(e, e, this.changes);
  }
};
function qf(n, e, t) {
  let i = new zf();
  return W.compare(n, e, t, i), i.changes;
}
function $f(n, e) {
  for (let t = n; t && t != e; t = t.assignedSlot || t.parentNode)
    if (t.nodeType == 1 && t.contentEditable == 'false') return !0;
  return !1;
}
function Kf(n, e) {
  let t = !1;
  return (
    e &&
      n.iterChangedRanges((i, s) => {
        i < e.to && s > e.from && (t = !0);
      }),
    t
  );
}
function jf(n, e, t = 1) {
  let i = n.charCategorizer(e),
    s = n.doc.lineAt(e),
    r = e - s.from;
  if (s.length == 0) return b.cursor(e);
  r == 0 ? (t = 1) : r == s.length && (t = -1);
  let o = r,
    l = r;
  t < 0 ? (o = ce(s.text, r, !1)) : (l = ce(s.text, r));
  let a = i(s.text.slice(o, l));
  for (; o > 0; ) {
    let h = ce(s.text, o, !1);
    if (i(s.text.slice(h, o)) != a) break;
    o = h;
  }
  for (; l < s.length; ) {
    let h = ce(s.text, l);
    if (i(s.text.slice(l, h)) != a) break;
    l = h;
  }
  return b.range(o + s.from, l + s.from);
}
function _f(n, e) {
  return e.left > n ? e.left - n : Math.max(0, n - e.right);
}
function Uf(n, e) {
  return e.top > n ? e.top - n : Math.max(0, n - e.bottom);
}
function bs(n, e) {
  return n.top < e.bottom - 1 && n.bottom > e.top + 1;
}
function Ro(n, e) {
  return e < n.top ? { top: e, left: n.left, right: n.right, bottom: n.bottom } : n;
}
function Io(n, e) {
  return e > n.bottom ? { top: n.top, left: n.left, right: n.right, bottom: e } : n;
}
function cr(n, e, t) {
  let i,
    s,
    r,
    o,
    l = !1,
    a,
    h,
    c,
    f;
  for (let p = n.firstChild; p; p = p.nextSibling) {
    let m = Bi(p);
    for (let g = 0; g < m.length; g++) {
      let y = m[g];
      s && bs(s, y) && (y = Ro(Io(y, s.bottom), s.top));
      let x = _f(e, y),
        v = Uf(t, y);
      if (x == 0 && v == 0) return p.nodeType == 3 ? No(p, e, t) : cr(p, e, t);
      if (!i || o > v || (o == v && r > x)) {
        (i = p), (s = y), (r = x), (o = v);
        let k = v ? (t < y.top ? -1 : 1) : x ? (e < y.left ? -1 : 1) : 0;
        l = !k || (k > 0 ? g < m.length - 1 : g > 0);
      }
      x == 0
        ? t > y.bottom && (!c || c.bottom < y.bottom)
          ? ((a = p), (c = y))
          : t < y.top && (!f || f.top > y.top) && ((h = p), (f = y))
        : c && bs(c, y)
          ? (c = Io(c, y.bottom))
          : f && bs(f, y) && (f = Ro(f, y.top));
    }
  }
  if ((c && c.bottom >= t ? ((i = a), (s = c)) : f && f.top <= t && ((i = h), (s = f)), !i))
    return { node: n, offset: 0 };
  let u = Math.max(s.left, Math.min(s.right, e));
  if (i.nodeType == 3) return No(i, u, t);
  if (l && i.contentEditable != 'false') return cr(i, u, t);
  let d = Array.prototype.indexOf.call(n.childNodes, i) + (e >= (s.left + s.right) / 2 ? 1 : 0);
  return { node: n, offset: d };
}
function No(n, e, t) {
  let i = n.nodeValue.length,
    s = -1,
    r = 1e9,
    o = 0;
  for (let l = 0; l < i; l++) {
    let a = Ht(n, l, l + 1).getClientRects();
    for (let h = 0; h < a.length; h++) {
      let c = a[h];
      if (c.top == c.bottom) continue;
      o || (o = e - c.left);
      let f = (c.top > t ? c.top - t : t - c.bottom) - 1;
      if (c.left - 1 <= e && c.right + 1 >= e && f < r) {
        let u = e >= (c.left + c.right) / 2,
          d = u;
        if (
          ((T.chrome || T.gecko) && Ht(n, l).getBoundingClientRect().left == c.right && (d = !u),
          f <= 0)
        )
          return { node: n, offset: l + (d ? 1 : 0) };
        (s = l + (d ? 1 : 0)), (r = f);
      }
    }
  }
  return { node: n, offset: s > -1 ? s : o > 0 ? n.nodeValue.length : 0 };
}
function ih(n, e, t, i = -1) {
  var s, r;
  let o = n.contentDOM.getBoundingClientRect(),
    l = o.top + n.viewState.paddingTop,
    a,
    { docHeight: h } = n.viewState,
    { x: c, y: f } = e,
    u = f - l;
  if (u < 0) return 0;
  if (u > h) return n.state.doc.length;
  for (
    let k = n.viewState.heightOracle.textHeight / 2, w = !1;
    (a = n.elementAtHeight(u)), a.type != be.Text;

  )
    for (; (u = i > 0 ? a.bottom + k : a.top - k), !(u >= 0 && u <= h); ) {
      if (w) return t ? null : 0;
      (w = !0), (i = -i);
    }
  f = l + u;
  let d = a.from;
  if (d < n.viewport.from) return n.viewport.from == 0 ? 0 : t ? null : Ho(n, o, a, c, f);
  if (d > n.viewport.to)
    return n.viewport.to == n.state.doc.length ? n.state.doc.length : t ? null : Ho(n, o, a, c, f);
  let p = n.dom.ownerDocument,
    m = n.root.elementFromPoint ? n.root : p,
    g = m.elementFromPoint(c, f);
  g && !n.contentDOM.contains(g) && (g = null),
    g ||
      ((c = Math.max(o.left + 1, Math.min(o.right - 1, c))),
      (g = m.elementFromPoint(c, f)),
      g && !n.contentDOM.contains(g) && (g = null));
  let y,
    x = -1;
  if (g && ((s = n.docView.nearest(g)) === null || s === void 0 ? void 0 : s.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let k = p.caretPositionFromPoint(c, f);
      k && ({ offsetNode: y, offset: x } = k);
    } else if (p.caretRangeFromPoint) {
      let k = p.caretRangeFromPoint(c, f);
      k &&
        (({ startContainer: y, startOffset: x } = k),
        (!n.contentDOM.contains(y) || (T.safari && Gf(y, x, c)) || (T.chrome && Yf(y, x, c))) &&
          (y = void 0));
    }
    y && (x = Math.min(it(y), x));
  }
  if (!y || !n.docView.dom.contains(y)) {
    let k = ee.find(n.docView, d);
    if (!k) return u > a.top + a.height / 2 ? a.to : a.from;
    ({ node: y, offset: x } = cr(k.dom, c, f));
  }
  let v = n.docView.nearest(y);
  if (!v) return null;
  if (v.isWidget && ((r = v.dom) === null || r === void 0 ? void 0 : r.nodeType) == 1) {
    let k = v.dom.getBoundingClientRect();
    return e.y < k.top || (e.y <= k.bottom && e.x <= (k.left + k.right) / 2)
      ? v.posAtStart
      : v.posAtEnd;
  } else return v.localPosFromDOM(y, x) + v.posAtStart;
}
function Ho(n, e, t, i, s) {
  let r = Math.round((i - e.left) * n.defaultCharacterWidth);
  if (n.lineWrapping && t.height > n.defaultLineHeight * 1.5) {
    let l = n.viewState.heightOracle.textHeight,
      a = Math.floor((s - t.top - (n.defaultLineHeight - l) * 0.5) / l);
    r += a * n.viewState.heightOracle.lineLength;
  }
  let o = n.state.sliceDoc(t.from, t.to);
  return t.from + Js(o, r, n.state.tabSize);
}
function Gf(n, e, t) {
  let i;
  if (n.nodeType != 3 || e != (i = n.nodeValue.length)) return !1;
  for (let s = n.nextSibling; s; s = s.nextSibling)
    if (s.nodeType != 1 || s.nodeName != 'BR') return !1;
  return Ht(n, i - 1, i).getBoundingClientRect().left > t;
}
function Yf(n, e, t) {
  if (e != 0) return !1;
  for (let s = n; ; ) {
    let r = s.parentNode;
    if (!r || r.nodeType != 1 || r.firstChild != s) return !1;
    if (r.classList.contains('cm-line')) break;
    s = r;
  }
  let i =
    n.nodeType == 1
      ? n.getBoundingClientRect()
      : Ht(n, 0, Math.max(n.nodeValue.length, 1)).getBoundingClientRect();
  return t - i.left > 5;
}
function fr(n, e) {
  let t = n.lineBlockAt(e);
  if (Array.isArray(t.type)) {
    for (let i of t.type)
      if (i.to > e || (i.to == e && (i.to == t.to || i.type == be.Text))) return i;
  }
  return t;
}
function Jf(n, e, t, i) {
  let s = fr(n, e.head),
    r =
      !i || s.type != be.Text || !(n.lineWrapping || s.widgetLineBreaks)
        ? null
        : n.coordsAtPos(e.assoc < 0 && e.head > s.from ? e.head - 1 : e.head);
  if (r) {
    let o = n.dom.getBoundingClientRect(),
      l = n.textDirectionAt(s.from),
      a = n.posAtCoords({
        x: t == (l == J.LTR) ? o.right - 1 : o.left + 1,
        y: (r.top + r.bottom) / 2,
      });
    if (a != null) return b.cursor(a, t ? -1 : 1);
  }
  return b.cursor(t ? s.to : s.from, t ? -1 : 1);
}
function Fo(n, e, t, i) {
  let s = n.state.doc.lineAt(e.head),
    r = n.bidiSpans(s),
    o = n.textDirectionAt(s.from);
  for (let l = e, a = null; ; ) {
    let h = If(s, r, o, l, t),
      c = Wa;
    if (!h) {
      if (s.number == (t ? n.state.doc.lines : 1)) return l;
      (c = `
`),
        (s = n.state.doc.line(s.number + (t ? 1 : -1))),
        (r = n.bidiSpans(s)),
        (h = n.visualLineSide(s, !t));
    }
    if (a) {
      if (!a(c)) return l;
    } else {
      if (!i) return h;
      a = i(c);
    }
    l = h;
  }
}
function Xf(n, e, t) {
  let i = n.state.charCategorizer(e),
    s = i(t);
  return (r) => {
    let o = i(r);
    return s == X.Space && (s = o), s == o;
  };
}
function Qf(n, e, t, i) {
  let s = e.head,
    r = t ? 1 : -1;
  if (s == (t ? n.state.doc.length : 0)) return b.cursor(s, e.assoc);
  let o = e.goalColumn,
    l,
    a = n.contentDOM.getBoundingClientRect(),
    h = n.coordsAtPos(s, e.assoc || -1),
    c = n.documentTop;
  if (h) o == null && (o = h.left - a.left), (l = r < 0 ? h.top : h.bottom);
  else {
    let d = n.viewState.lineBlockAt(s);
    o == null && (o = Math.min(a.right - a.left, n.defaultCharacterWidth * (s - d.from))),
      (l = (r < 0 ? d.top : d.bottom) + c);
  }
  let f = a.left + o,
    u = i ?? n.viewState.heightOracle.textHeight >> 1;
  for (let d = 0; ; d += 10) {
    let p = l + (u + d) * r,
      m = ih(n, { x: f, y: p }, !1, r);
    if (p < a.top || p > a.bottom || (r < 0 ? m < s : m > s)) {
      let g = n.docView.coordsForChar(m),
        y = !g || p < g.top ? -1 : 1;
      return b.cursor(m, y, void 0, o);
    }
  }
}
function An(n, e, t) {
  for (;;) {
    let i = 0;
    for (let s of n)
      s.between(e - 1, e + 1, (r, o, l) => {
        if (e > r && e < o) {
          let a = i || t || (e - r < o - e ? -1 : 1);
          (e = a < 0 ? r : o), (i = a);
        }
      });
    if (!i) return e;
  }
}
function xs(n, e, t) {
  let i = An(
    n.state.facet(qr).map((s) => s(n)),
    t.from,
    e.head > t.from ? -1 : 1,
  );
  return i == t.from ? t : b.cursor(i, i < t.from ? 1 : -1);
}
const yi = '￿';
class Zf {
  constructor(e, t) {
    (this.points = e), (this.text = ''), (this.lineSeparator = t.facet(V.lineSeparator));
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += yi;
  }
  readRange(e, t) {
    if (!e) return this;
    let i = e.parentNode;
    for (let s = e; ; ) {
      this.findPointBefore(i, s);
      let r = this.text.length;
      this.readNode(s);
      let o = s.nextSibling;
      if (o == t) break;
      let l = U.get(s),
        a = U.get(o);
      (l && a
        ? l.breakAfter
        : (l ? l.breakAfter : Pn(s)) ||
          (Pn(o) && (s.nodeName != 'BR' || s.cmIgnore) && this.text.length > r)) &&
        this.lineBreak(),
        (s = o);
    }
    return this.findPointBefore(i, t), this;
  }
  readTextNode(e) {
    let t = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, t.length));
    for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let r = -1,
        o = 1,
        l;
      if (
        (this.lineSeparator
          ? ((r = t.indexOf(this.lineSeparator, i)), (o = this.lineSeparator.length))
          : (l = s.exec(t)) && ((r = l.index), (o = l[0].length)),
        this.append(t.slice(i, r < 0 ? t.length : r)),
        r < 0)
      )
        break;
      if ((this.lineBreak(), o > 1))
        for (let a of this.points) a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = r + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore) return;
    let t = U.get(e),
      i = t && t.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let s = i.iter(); !s.next().done; )
        s.lineBreak ? this.lineBreak() : this.append(s.value);
    } else
      e.nodeType == 3
        ? this.readTextNode(e)
        : e.nodeName == 'BR'
          ? e.nextSibling && this.lineBreak()
          : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, t) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == t && (i.pos = this.text.length);
  }
  findPointInside(e, t) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) &&
        (i.pos = this.text.length + (eu(e, i.node, i.offset) ? t : 0));
  }
}
function eu(n, e, t) {
  for (;;) {
    if (!e || t < it(e)) return !1;
    if (e == n) return !0;
    (t = Nt(e) + 1), (e = e.parentNode);
  }
}
class Vo {
  constructor(e, t) {
    (this.node = e), (this.offset = t), (this.pos = -1);
  }
}
class tu {
  constructor(e, t, i, s) {
    (this.typeOver = s), (this.bounds = null), (this.text = ''), (this.domChanged = t > -1);
    let { impreciseHead: r, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && t > -1) this.newSel = null;
    else if (t > -1 && (this.bounds = e.docView.domBoundsAround(t, i, 0))) {
      let l = r || o ? [] : su(e),
        a = new Zf(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM),
        (this.text = a.text),
        (this.newSel = ru(l, this.bounds.from));
    } else {
      let l = e.observer.selectionRange,
        a =
          (r && r.node == l.focusNode && r.offset == l.focusOffset) ||
          !Zs(e.contentDOM, l.focusNode)
            ? e.state.selection.main.head
            : e.docView.posFromDOM(l.focusNode, l.focusOffset),
        h =
          (o && o.node == l.anchorNode && o.offset == l.anchorOffset) ||
          !Zs(e.contentDOM, l.anchorNode)
            ? e.state.selection.main.anchor
            : e.docView.posFromDOM(l.anchorNode, l.anchorOffset),
        c = e.viewport;
      if (
        (T.ios || T.chrome) &&
        e.state.selection.main.empty &&
        a != h &&
        (c.from > 0 || c.to < e.state.doc.length)
      ) {
        let f = Math.min(a, h),
          u = Math.max(a, h),
          d = c.from - f,
          p = c.to - u;
        (d == 0 || d == 1 || f == 0) &&
          (p == 0 || p == -1 || u == e.state.doc.length) &&
          ((a = 0), (h = e.state.doc.length));
      }
      this.newSel = b.single(h, a);
    }
  }
}
function nh(n, e) {
  let t,
    { newSel: i } = e,
    s = n.state.selection.main,
    r = n.inputState.lastKeyTime > Date.now() - 100 ? n.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds,
      a = s.from,
      h = null;
    (r === 8 || (T.android && e.text.length < l - o)) && ((a = s.to), (h = 'end'));
    let c = nu(n.state.doc.sliceString(o, l, yi), e.text, a - o, h);
    c &&
      (T.chrome &&
        r == 13 &&
        c.toB == c.from + 2 &&
        e.text.slice(c.from, c.toB) == yi + yi &&
        c.toB--,
      (t = {
        from: o + c.from,
        to: o + c.toA,
        insert: z.of(e.text.slice(c.from, c.toB).split(yi)),
      }));
  } else i && ((!n.hasFocus && n.state.facet(ot)) || i.main.eq(s)) && (i = null);
  if (!t && !i) return !1;
  if (
    (!t && e.typeOver && !s.empty && i && i.main.empty
      ? (t = { from: s.from, to: s.to, insert: n.state.doc.slice(s.from, s.to) })
      : (T.mac || T.android) &&
          t &&
          t.from == t.to &&
          t.from == s.head - 1 &&
          /^\. ?$/.test(t.insert.toString()) &&
          n.contentDOM.getAttribute('autocorrect') == 'off'
        ? (i && t.insert.length == 2 && (i = b.single(i.main.anchor - 1, i.main.head - 1)),
          (t = { from: t.from, to: t.to, insert: z.of([t.insert.toString().replace('.', ' ')]) }))
        : t &&
            t.from >= s.from &&
            t.to <= s.to &&
            (t.from != s.from || t.to != s.to) &&
            s.to - s.from - (t.to - t.from) <= 4
          ? (t = {
              from: s.from,
              to: s.to,
              insert: n.state.doc
                .slice(s.from, t.from)
                .append(t.insert)
                .append(n.state.doc.slice(t.to, s.to)),
            })
          : T.chrome &&
            t &&
            t.from == t.to &&
            t.from == s.head &&
            t.insert.toString() ==
              `
 ` &&
            n.lineWrapping &&
            (i && (i = b.single(i.main.anchor - 1, i.main.head - 1)),
            (t = { from: s.from, to: s.to, insert: z.of([' ']) })),
    t)
  )
    return Kr(n, t, i, r);
  if (i && !i.main.eq(s)) {
    let o = !1,
      l = 'select';
    return (
      n.inputState.lastSelectionTime > Date.now() - 50 &&
        (n.inputState.lastSelectionOrigin == 'select' && (o = !0),
        (l = n.inputState.lastSelectionOrigin)),
      n.dispatch({ selection: i, scrollIntoView: o, userEvent: l }),
      !0
    );
  } else return !1;
}
function Kr(n, e, t, i = -1) {
  if (T.ios && n.inputState.flushIOSKey(e)) return !0;
  let s = n.state.selection.main;
  if (
    T.android &&
    ((e.to == s.to &&
      (e.from == s.from || (e.from == s.from - 1 && n.state.sliceDoc(e.from, s.from) == ' ')) &&
      e.insert.length == 1 &&
      e.insert.lines == 2 &&
      Gt(n.contentDOM, 'Enter', 13)) ||
      (((e.from == s.from - 1 && e.to == s.to && e.insert.length == 0) ||
        (i == 8 && e.insert.length < e.to - e.from && e.to > s.head)) &&
        Gt(n.contentDOM, 'Backspace', 8)) ||
      (e.from == s.from &&
        e.to == s.to + 1 &&
        e.insert.length == 0 &&
        Gt(n.contentDOM, 'Delete', 46)))
  )
    return !0;
  let r = e.insert.toString();
  n.inputState.composing >= 0 && n.inputState.composing++;
  let o,
    l = () => o || (o = iu(n, e, t));
  return n.state.facet(ja).some((a) => a(n, e.from, e.to, r, l)) || n.dispatch(l()), !0;
}
function iu(n, e, t) {
  let i,
    s = n.state,
    r = s.selection.main;
  if (
    e.from >= r.from &&
    e.to <= r.to &&
    e.to - e.from >= (r.to - r.from) / 3 &&
    (!t || (t.main.empty && t.main.from == e.from + e.insert.length)) &&
    n.inputState.composing < 0
  ) {
    let l = r.from < e.from ? s.sliceDoc(r.from, e.from) : '',
      a = r.to > e.to ? s.sliceDoc(e.to, r.to) : '';
    i = s.replaceSelection(
      n.state.toText(l + e.insert.sliceString(0, void 0, n.state.lineBreak) + a),
    );
  } else {
    let l = s.changes(e),
      a = t && t.main.to <= l.newLength ? t.main : void 0;
    if (
      s.selection.ranges.length > 1 &&
      n.inputState.composing >= 0 &&
      e.to <= r.to &&
      e.to >= r.to - 10
    ) {
      let h = n.state.sliceDoc(e.from, e.to),
        c,
        f = t && th(n, t.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        c = { from: f.from, to: f.to - p };
      } else c = n.state.doc.lineAt(r.head);
      let u = r.to - e.to,
        d = r.to - r.from;
      i = s.changeByRange((p) => {
        if (p.from == r.from && p.to == r.to) return { changes: l, range: a || p.map(l) };
        let m = p.to - u,
          g = m - h.length;
        if (p.to - p.from != d || n.state.sliceDoc(g, m) != h || (p.to >= c.from && p.from <= c.to))
          return { range: p };
        let y = s.changes({ from: g, to: m, insert: e.insert }),
          x = p.to - r.to;
        return {
          changes: y,
          range: a ? b.range(Math.max(0, a.anchor + x), Math.max(0, a.head + x)) : p.map(y),
        };
      });
    } else i = { changes: l, selection: a && s.selection.replaceRange(a) };
  }
  let o = 'input.type';
  return (
    (n.composing ||
      (n.inputState.compositionPendingChange &&
        n.inputState.compositionEndedAt > Date.now() - 50)) &&
      ((n.inputState.compositionPendingChange = !1),
      (o += '.compose'),
      n.inputState.compositionFirstChange &&
        ((o += '.start'), (n.inputState.compositionFirstChange = !1))),
    s.update(i, { userEvent: o, scrollIntoView: !0 })
  );
}
function nu(n, e, t, i) {
  let s = Math.min(n.length, e.length),
    r = 0;
  for (; r < s && n.charCodeAt(r) == e.charCodeAt(r); ) r++;
  if (r == s && n.length == e.length) return null;
  let o = n.length,
    l = e.length;
  for (; o > 0 && l > 0 && n.charCodeAt(o - 1) == e.charCodeAt(l - 1); ) o--, l--;
  if (i == 'end') {
    let a = Math.max(0, r - Math.min(o, l));
    t -= o + a - r;
  }
  if (o < r && n.length < e.length) {
    let a = t <= r && t >= o ? r - t : 0;
    (r -= a), (l = r + (l - o)), (o = r);
  } else if (l < r) {
    let a = t <= r && t >= l ? r - t : 0;
    (r -= a), (o = r + (o - l)), (l = r);
  }
  return { from: r, toA: o, toB: l };
}
function su(n) {
  let e = [];
  if (n.root.activeElement != n.contentDOM) return e;
  let { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r } = n.observer.selectionRange;
  return t && (e.push(new Vo(t, i)), (s != t || r != i) && e.push(new Vo(s, r))), e;
}
function ru(n, e) {
  if (n.length == 0) return null;
  let t = n[0].pos,
    i = n.length == 2 ? n[1].pos : t;
  return t > -1 && i > -1 ? b.single(t + e, i + e) : null;
}
class ou {
  setSelectionOrigin(e) {
    (this.lastSelectionOrigin = e), (this.lastSelectionTime = Date.now());
  }
  constructor(e) {
    (this.view = e),
      (this.lastKeyCode = 0),
      (this.lastKeyTime = 0),
      (this.lastTouchTime = 0),
      (this.lastFocusTime = 0),
      (this.lastScrollTop = 0),
      (this.lastScrollLeft = 0),
      (this.pendingIOSKey = void 0),
      (this.tabFocusMode = -1),
      (this.lastSelectionOrigin = null),
      (this.lastSelectionTime = 0),
      (this.lastContextMenu = 0),
      (this.scrollHandlers = []),
      (this.handlers = Object.create(null)),
      (this.composing = -1),
      (this.compositionFirstChange = null),
      (this.compositionEndedAt = 0),
      (this.compositionPendingKey = !1),
      (this.compositionPendingChange = !1),
      (this.mouseSelection = null),
      (this.draggedContent = null),
      (this.handleEvent = this.handleEvent.bind(this)),
      (this.notifiedFocused = e.hasFocus),
      T.safari && e.contentDOM.addEventListener('input', () => null),
      T.gecko && ku(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !pu(this.view, e) ||
      this.ignoreDuringComposition(e) ||
      (e.type == 'keydown' && this.keydown(e)) ||
      (this.view.updateState != 0
        ? Promise.resolve().then(() => this.runHandlers(e.type, e))
        : this.runHandlers(e.type, e));
  }
  runHandlers(e, t) {
    let i = this.handlers[e];
    if (i) {
      for (let s of i.observers) s(this.view, t);
      for (let s of i.handlers) {
        if (t.defaultPrevented) break;
        if (s(this.view, t)) {
          t.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let t = lu(e),
      i = this.handlers,
      s = this.view.contentDOM;
    for (let r in t)
      if (r != 'scroll') {
        let o = !t[r].handlers.length,
          l = i[r];
        l && o != !l.handlers.length && (s.removeEventListener(r, this.handleEvent), (l = null)),
          l || s.addEventListener(r, this.handleEvent, { passive: o });
      }
    for (let r in i) r != 'scroll' && !t[r] && s.removeEventListener(r, this.handleEvent);
    this.handlers = t;
  }
  keydown(e) {
    if (
      ((this.lastKeyCode = e.keyCode),
      (this.lastKeyTime = Date.now()),
      e.keyCode == 9 &&
        this.tabFocusMode > -1 &&
        (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
    )
      return !0;
    if (
      (this.tabFocusMode > 0 &&
        e.keyCode != 27 &&
        rh.indexOf(e.keyCode) < 0 &&
        (this.tabFocusMode = -1),
      T.android && T.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
    )
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let t;
    return T.ios &&
      !e.synthetic &&
      !e.altKey &&
      !e.metaKey &&
      (((t = sh.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey) ||
        (au.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
      ? ((this.pendingIOSKey = t || e), setTimeout(() => this.flushIOSKey(), 250), !0)
      : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let t = this.pendingIOSKey;
    return !t || (t.key == 'Enter' && e && e.from < e.to && /^\S+$/.test(e.insert.toString()))
      ? !1
      : ((this.pendingIOSKey = void 0),
        Gt(this.view.contentDOM, t.key, t.keyCode, t instanceof KeyboardEvent ? t : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type)
      ? this.composing > 0
        ? !0
        : T.safari &&
            !T.ios &&
            this.compositionPendingKey &&
            Date.now() - this.compositionEndedAt < 100
          ? ((this.compositionPendingKey = !1), !0)
          : !1
      : !1;
  }
  startMouseSelection(e) {
    this.mouseSelection && this.mouseSelection.destroy(), (this.mouseSelection = e);
  }
  update(e) {
    this.view.observer.update(e),
      this.mouseSelection && this.mouseSelection.update(e),
      this.draggedContent &&
        e.docChanged &&
        (this.draggedContent = this.draggedContent.map(e.changes)),
      e.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
  }
  destroy() {
    this.mouseSelection && this.mouseSelection.destroy();
  }
}
function Wo(n, e) {
  return (t, i) => {
    try {
      return e.call(n, i, t);
    } catch (s) {
      Se(t.state, s);
    }
  };
}
function lu(n) {
  let e = Object.create(null);
  function t(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of n) {
    let s = i.spec;
    if (s && s.domEventHandlers)
      for (let r in s.domEventHandlers) {
        let o = s.domEventHandlers[r];
        o && t(r).handlers.push(Wo(i.value, o));
      }
    if (s && s.domEventObservers)
      for (let r in s.domEventObservers) {
        let o = s.domEventObservers[r];
        o && t(r).observers.push(Wo(i.value, o));
      }
  }
  for (let i in We) t(i).handlers.push(We[i]);
  for (let i in Ne) t(i).observers.push(Ne[i]);
  return e;
}
const sh = [
    { key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward' },
    { key: 'Enter', keyCode: 13, inputType: 'insertParagraph' },
    { key: 'Enter', keyCode: 13, inputType: 'insertLineBreak' },
    { key: 'Delete', keyCode: 46, inputType: 'deleteContentForward' },
  ],
  au = 'dthko',
  rh = [16, 17, 18, 20, 91, 92, 224, 225],
  nn = 6;
function sn(n) {
  return Math.max(0, n) * 0.7 + 8;
}
function hu(n, e) {
  return Math.max(Math.abs(n.clientX - e.clientX), Math.abs(n.clientY - e.clientY));
}
class cu {
  constructor(e, t, i, s) {
    (this.view = e),
      (this.startEvent = t),
      (this.style = i),
      (this.mustSelect = s),
      (this.scrollSpeed = { x: 0, y: 0 }),
      (this.scrolling = -1),
      (this.lastEvent = t),
      (this.scrollParents = yf(e.contentDOM)),
      (this.atoms = e.state.facet(qr).map((o) => o(e)));
    let r = e.contentDOM.ownerDocument;
    r.addEventListener('mousemove', (this.move = this.move.bind(this))),
      r.addEventListener('mouseup', (this.up = this.up.bind(this))),
      (this.extend = t.shiftKey),
      (this.multiple = e.state.facet(V.allowMultipleSelections) && fu(e, t)),
      (this.dragging = du(e, t) && ah(t) == 1 ? null : !1);
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0) return this.destroy();
    if (this.dragging || (this.dragging == null && hu(this.startEvent, e) < 10)) return;
    this.select((this.lastEvent = e));
    let t = 0,
      i = 0,
      s = 0,
      r = 0,
      o = this.view.win.innerWidth,
      l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: s, right: o } = this.scrollParents.x.getBoundingClientRect()),
      this.scrollParents.y &&
        ({ top: r, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = $r(this.view);
    e.clientX - a.left <= s + nn
      ? (t = -sn(s - e.clientX))
      : e.clientX + a.right >= o - nn && (t = sn(e.clientX - o)),
      e.clientY - a.top <= r + nn
        ? (i = -sn(r - e.clientY))
        : e.clientY + a.bottom >= l - nn && (i = sn(e.clientY - l)),
      this.setScrollSpeed(t, i);
  }
  up(e) {
    this.dragging == null && this.select(this.lastEvent),
      this.dragging || e.preventDefault(),
      this.destroy();
  }
  destroy() {
    this.setScrollSpeed(0, 0);
    let e = this.view.contentDOM.ownerDocument;
    e.removeEventListener('mousemove', this.move),
      e.removeEventListener('mouseup', this.up),
      (this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null);
  }
  setScrollSpeed(e, t) {
    (this.scrollSpeed = { x: e, y: t }),
      e || t
        ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50))
        : this.scrolling > -1 && (clearInterval(this.scrolling), (this.scrolling = -1));
  }
  scroll() {
    let { x: e, y: t } = this.scrollSpeed;
    e && this.scrollParents.x && ((this.scrollParents.x.scrollLeft += e), (e = 0)),
      t && this.scrollParents.y && ((this.scrollParents.y.scrollTop += t), (t = 0)),
      (e || t) && this.view.win.scrollBy(e, t),
      this.dragging === !1 && this.select(this.lastEvent);
  }
  skipAtoms(e) {
    let t = null;
    for (let i = 0; i < e.ranges.length; i++) {
      let s = e.ranges[i],
        r = null;
      if (s.empty) {
        let o = An(this.atoms, s.from, 0);
        o != s.from && (r = b.cursor(o, -1));
      } else {
        let o = An(this.atoms, s.from, -1),
          l = An(this.atoms, s.to, 1);
        (o != s.from || l != s.to) &&
          (r = b.range(s.from == s.anchor ? o : l, s.from == s.head ? o : l));
      }
      r && (t || (t = e.ranges.slice()), (t[i] = r));
    }
    return t ? b.create(t, e.mainIndex) : e;
  }
  select(e) {
    let { view: t } = this,
      i = this.skipAtoms(this.style.get(e, this.extend, this.multiple));
    (this.mustSelect || !i.eq(t.state.selection, this.dragging === !1)) &&
      this.view.dispatch({ selection: i, userEvent: 'select.pointer' }),
      (this.mustSelect = !1);
  }
  update(e) {
    e.transactions.some((t) => t.isUserEvent('input.type'))
      ? this.destroy()
      : this.style.update(e) && setTimeout(() => this.select(this.lastEvent), 20);
  }
}
function fu(n, e) {
  let t = n.state.facet(za);
  return t.length ? t[0](e) : T.mac ? e.metaKey : e.ctrlKey;
}
function uu(n, e) {
  let t = n.state.facet(qa);
  return t.length ? t[0](e) : T.mac ? !e.altKey : !e.ctrlKey;
}
function du(n, e) {
  let { main: t } = n.state.selection;
  if (t.empty) return !1;
  let i = Li(n.root);
  if (!i || i.rangeCount == 0) return !0;
  let s = i.getRangeAt(0).getClientRects();
  for (let r = 0; r < s.length; r++) {
    let o = s[r];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function pu(n, e) {
  if (!e.bubbles) return !0;
  if (e.defaultPrevented) return !1;
  for (let t = e.target, i; t != n.contentDOM; t = t.parentNode)
    if (!t || t.nodeType == 11 || ((i = U.get(t)) && i.ignoreEvent(e))) return !1;
  return !0;
}
const We = Object.create(null),
  Ne = Object.create(null),
  oh = (T.ie && T.ie_version < 15) || (T.ios && T.webkit_version < 604);
function mu(n) {
  let e = n.dom.parentNode;
  if (!e) return;
  let t = e.appendChild(document.createElement('textarea'));
  (t.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    t.focus(),
    setTimeout(() => {
      n.focus(), t.remove(), lh(n, t.value);
    }, 50);
}
function ns(n, e, t) {
  for (let i of n.facet(e)) t = i(t, n);
  return t;
}
function lh(n, e) {
  e = ns(n.state, Vr, e);
  let { state: t } = n,
    i,
    s = 1,
    r = t.toText(e),
    o = r.lines == t.selection.ranges.length;
  if (ur != null && t.selection.ranges.every((a) => a.empty) && ur == r.toString()) {
    let a = -1;
    i = t.changeByRange((h) => {
      let c = t.doc.lineAt(h.from);
      if (c.from == a) return { range: h };
      a = c.from;
      let f = t.toText((o ? r.line(s++).text : e) + t.lineBreak);
      return { changes: { from: c.from, insert: f }, range: b.cursor(h.from + f.length) };
    });
  } else
    o
      ? (i = t.changeByRange((a) => {
          let h = r.line(s++);
          return {
            changes: { from: a.from, to: a.to, insert: h.text },
            range: b.cursor(a.from + h.length),
          };
        }))
      : (i = t.replaceSelection(r));
  n.dispatch(i, { userEvent: 'input.paste', scrollIntoView: !0 });
}
Ne.scroll = (n) => {
  (n.inputState.lastScrollTop = n.scrollDOM.scrollTop),
    (n.inputState.lastScrollLeft = n.scrollDOM.scrollLeft);
};
We.keydown = (n, e) => (
  n.inputState.setSelectionOrigin('select'),
  e.keyCode == 27 &&
    n.inputState.tabFocusMode != 0 &&
    (n.inputState.tabFocusMode = Date.now() + 2e3),
  !1
);
Ne.touchstart = (n, e) => {
  (n.inputState.lastTouchTime = Date.now()), n.inputState.setSelectionOrigin('select.pointer');
};
Ne.touchmove = (n) => {
  n.inputState.setSelectionOrigin('select.pointer');
};
We.mousedown = (n, e) => {
  if ((n.observer.flush(), n.inputState.lastTouchTime > Date.now() - 2e3)) return !1;
  let t = null;
  for (let i of n.state.facet($a)) if (((t = i(n, e)), t)) break;
  if ((!t && e.button == 0 && (t = bu(n, e)), t)) {
    let i = !n.hasFocus;
    n.inputState.startMouseSelection(new cu(n, e, t, i)),
      i &&
        n.observer.ignore(() => {
          ka(n.contentDOM);
          let r = n.root.activeElement;
          r && !r.contains(n.contentDOM) && r.blur();
        });
    let s = n.inputState.mouseSelection;
    if (s) return s.start(e), s.dragging === !1;
  }
  return !1;
};
function zo(n, e, t, i) {
  if (i == 1) return b.cursor(e, t);
  if (i == 2) return jf(n.state, e, t);
  {
    let s = ee.find(n.docView, e),
      r = n.state.doc.lineAt(s ? s.posAtEnd : e),
      o = s ? s.posAtStart : r.from,
      l = s ? s.posAtEnd : r.to;
    return l < n.state.doc.length && l == r.to && l++, b.range(o, l);
  }
}
let qo = (n, e, t) => e >= t.top && e <= t.bottom && n >= t.left && n <= t.right;
function gu(n, e, t, i) {
  let s = ee.find(n.docView, e);
  if (!s) return 1;
  let r = e - s.posAtStart;
  if (r == 0) return 1;
  if (r == s.length) return -1;
  let o = s.coordsAt(r, -1);
  if (o && qo(t, i, o)) return -1;
  let l = s.coordsAt(r, 1);
  return l && qo(t, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function $o(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: t, bias: gu(n, t, e.clientX, e.clientY) };
}
const yu = T.ie && T.ie_version <= 11;
let Ko = null,
  jo = 0,
  _o = 0;
function ah(n) {
  if (!yu) return n.detail;
  let e = Ko,
    t = _o;
  return (
    (Ko = n),
    (_o = Date.now()),
    (jo =
      !e ||
      (t > Date.now() - 400 &&
        Math.abs(e.clientX - n.clientX) < 2 &&
        Math.abs(e.clientY - n.clientY) < 2)
        ? (jo + 1) % 3
        : 1)
  );
}
function bu(n, e) {
  let t = $o(n, e),
    i = ah(e),
    s = n.state.selection;
  return {
    update(r) {
      r.docChanged && ((t.pos = r.changes.mapPos(t.pos)), (s = s.map(r.changes)));
    },
    get(r, o, l) {
      let a = $o(n, r),
        h,
        c = zo(n, a.pos, a.bias, i);
      if (t.pos != a.pos && !o) {
        let f = zo(n, t.pos, t.bias, i),
          u = Math.min(f.from, c.from),
          d = Math.max(f.to, c.to);
        c = u < c.from ? b.range(u, d) : b.range(d, u);
      }
      return o
        ? s.replaceRange(s.main.extend(c.from, c.to))
        : l && i == 1 && s.ranges.length > 1 && (h = xu(s, a.pos))
          ? h
          : l
            ? s.addRange(c)
            : b.create([c]);
    },
  };
}
function xu(n, e) {
  for (let t = 0; t < n.ranges.length; t++) {
    let { from: i, to: s } = n.ranges[t];
    if (i <= e && s >= e)
      return b.create(
        n.ranges.slice(0, t).concat(n.ranges.slice(t + 1)),
        n.mainIndex == t ? 0 : n.mainIndex - (n.mainIndex > t ? 1 : 0),
      );
  }
  return null;
}
We.dragstart = (n, e) => {
  let {
    selection: { main: t },
  } = n.state;
  if (e.target.draggable) {
    let s = n.docView.nearest(e.target);
    if (s && s.isWidget) {
      let r = s.posAtStart,
        o = r + s.length;
      (r >= t.to || o <= t.from) && (t = b.range(r, o));
    }
  }
  let { inputState: i } = n;
  return (
    i.mouseSelection && (i.mouseSelection.dragging = !0),
    (i.draggedContent = t),
    e.dataTransfer &&
      (e.dataTransfer.setData('Text', ns(n.state, Wr, n.state.sliceDoc(t.from, t.to))),
      (e.dataTransfer.effectAllowed = 'copyMove')),
    !1
  );
};
We.dragend = (n) => ((n.inputState.draggedContent = null), !1);
function Uo(n, e, t, i) {
  if (((t = ns(n.state, Vr, t)), !t)) return;
  let s = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    { draggedContent: r } = n.inputState,
    o = i && r && uu(n, e) ? { from: r.from, to: r.to } : null,
    l = { from: s, insert: t },
    a = n.state.changes(o ? [o, l] : l);
  n.focus(),
    n.dispatch({
      changes: a,
      selection: { anchor: a.mapPos(s, -1), head: a.mapPos(s, 1) },
      userEvent: o ? 'move.drop' : 'input.drop',
    }),
    (n.inputState.draggedContent = null);
}
We.drop = (n, e) => {
  if (!e.dataTransfer) return !1;
  if (n.state.readOnly) return !0;
  let t = e.dataTransfer.files;
  if (t && t.length) {
    let i = Array(t.length),
      s = 0,
      r = () => {
        ++s == t.length && Uo(n, e, i.filter((o) => o != null).join(n.state.lineBreak), !1);
      };
    for (let o = 0; o < t.length; o++) {
      let l = new FileReader();
      (l.onerror = r),
        (l.onload = () => {
          /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), r();
        }),
        l.readAsText(t[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData('Text');
    if (i) return Uo(n, e, i, !0), !0;
  }
  return !1;
};
We.paste = (n, e) => {
  if (n.state.readOnly) return !0;
  n.observer.flush();
  let t = oh ? null : e.clipboardData;
  return t ? (lh(n, t.getData('text/plain') || t.getData('text/uri-list')), !0) : (mu(n), !1);
};
function wu(n, e) {
  let t = n.dom.parentNode;
  if (!t) return;
  let i = t.appendChild(document.createElement('textarea'));
  (i.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
    (i.value = e),
    i.focus(),
    (i.selectionEnd = e.length),
    (i.selectionStart = 0),
    setTimeout(() => {
      i.remove(), n.focus();
    }, 50);
}
function vu(n) {
  let e = [],
    t = [],
    i = !1;
  for (let s of n.selection.ranges) s.empty || (e.push(n.sliceDoc(s.from, s.to)), t.push(s));
  if (!e.length) {
    let s = -1;
    for (let { from: r } of n.selection.ranges) {
      let o = n.doc.lineAt(r);
      o.number > s &&
        (e.push(o.text), t.push({ from: o.from, to: Math.min(n.doc.length, o.to + 1) })),
        (s = o.number);
    }
    i = !0;
  }
  return { text: ns(n, Wr, e.join(n.lineBreak)), ranges: t, linewise: i };
}
let ur = null;
We.copy = We.cut = (n, e) => {
  let { text: t, ranges: i, linewise: s } = vu(n.state);
  if (!t && !s) return !1;
  (ur = s ? t : null),
    e.type == 'cut' &&
      !n.state.readOnly &&
      n.dispatch({ changes: i, scrollIntoView: !0, userEvent: 'delete.cut' });
  let r = oh ? null : e.clipboardData;
  return r ? (r.clearData(), r.setData('text/plain', t), !0) : (wu(n, t), !1);
};
const hh = ct.define();
function ch(n, e) {
  let t = [];
  for (let i of n.facet(_a)) {
    let s = i(n, e);
    s && t.push(s);
  }
  return t ? n.update({ effects: t, annotations: hh.of(!0) }) : null;
}
function fh(n) {
  setTimeout(() => {
    let e = n.hasFocus;
    if (e != n.inputState.notifiedFocused) {
      let t = ch(n.state, e);
      t ? n.dispatch(t) : n.update([]);
    }
  }, 10);
}
Ne.focus = (n) => {
  (n.inputState.lastFocusTime = Date.now()),
    !n.scrollDOM.scrollTop &&
      (n.inputState.lastScrollTop || n.inputState.lastScrollLeft) &&
      ((n.scrollDOM.scrollTop = n.inputState.lastScrollTop),
      (n.scrollDOM.scrollLeft = n.inputState.lastScrollLeft)),
    fh(n);
};
Ne.blur = (n) => {
  n.observer.clearSelectionRange(), fh(n);
};
Ne.compositionstart = Ne.compositionupdate = (n) => {
  n.observer.editContext ||
    (n.inputState.compositionFirstChange == null && (n.inputState.compositionFirstChange = !0),
    n.inputState.composing < 0 && (n.inputState.composing = 0));
};
Ne.compositionend = (n) => {
  n.observer.editContext ||
    ((n.inputState.composing = -1),
    (n.inputState.compositionEndedAt = Date.now()),
    (n.inputState.compositionPendingKey = !0),
    (n.inputState.compositionPendingChange = n.observer.pendingRecords().length > 0),
    (n.inputState.compositionFirstChange = null),
    T.chrome && T.android
      ? n.observer.flushSoon()
      : n.inputState.compositionPendingChange
        ? Promise.resolve().then(() => n.observer.flush())
        : setTimeout(() => {
            n.inputState.composing < 0 && n.docView.hasComposition && n.update([]);
          }, 50));
};
Ne.contextmenu = (n) => {
  n.inputState.lastContextMenu = Date.now();
};
We.beforeinput = (n, e) => {
  var t, i;
  if (e.inputType == 'insertReplacementText' && n.observer.editContext) {
    let r = (t = e.dataTransfer) === null || t === void 0 ? void 0 : t.getData('text/plain'),
      o = e.getTargetRanges();
    if (r && o.length) {
      let l = o[0],
        a = n.posAtDOM(l.startContainer, l.startOffset),
        h = n.posAtDOM(l.endContainer, l.endOffset);
      return Kr(n, { from: a, to: h, insert: n.state.toText(r) }, null), !0;
    }
  }
  let s;
  if (
    T.chrome &&
    T.android &&
    (s = sh.find((r) => r.inputType == e.inputType)) &&
    (n.observer.delayAndroidKey(s.key, s.keyCode), s.key == 'Backspace' || s.key == 'Delete')
  ) {
    let r = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > r + 10 &&
        n.hasFocus &&
        (n.contentDOM.blur(), n.focus());
    }, 100);
  }
  return (
    T.ios && e.inputType == 'deleteContentForward' && n.observer.flushSoon(),
    T.safari &&
      e.inputType == 'insertText' &&
      n.inputState.composing >= 0 &&
      setTimeout(() => Ne.compositionend(n, e), 20),
    !1
  );
};
const Go = new Set();
function ku(n) {
  Go.has(n) ||
    (Go.add(n), n.addEventListener('copy', () => {}), n.addEventListener('cut', () => {}));
}
const Yo = ['pre-wrap', 'normal', 'pre-line', 'break-spaces'];
let ti = !1;
function Jo() {
  ti = !1;
}
class Su {
  constructor(e) {
    (this.lineWrapping = e),
      (this.doc = z.empty),
      (this.heightSamples = {}),
      (this.lineHeight = 14),
      (this.charWidth = 7),
      (this.textHeight = 14),
      (this.lineLength = 30);
  }
  heightForGap(e, t) {
    let i = this.doc.lineAt(t).number - this.doc.lineAt(e).number + 1;
    return (
      this.lineWrapping &&
        (i += Math.max(0, Math.ceil((t - e - i * this.lineLength * 0.5) / this.lineLength))),
      this.lineHeight * i
    );
  }
  heightForLine(e) {
    return this.lineWrapping
      ? (1 + Math.max(0, Math.ceil((e - this.lineLength) / (this.lineLength - 5)))) *
          this.lineHeight
      : this.lineHeight;
  }
  setDoc(e) {
    return (this.doc = e), this;
  }
  mustRefreshForWrapping(e) {
    return Yo.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let t = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      s < 0
        ? i++
        : this.heightSamples[Math.floor(s * 10)] ||
          ((t = !0), (this.heightSamples[Math.floor(s * 10)] = !0));
    }
    return t;
  }
  refresh(e, t, i, s, r, o) {
    let l = Yo.indexOf(e) > -1,
      a = Math.round(t) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (
      ((this.lineWrapping = l),
      (this.lineHeight = t),
      (this.charWidth = i),
      (this.textHeight = s),
      (this.lineLength = r),
      a)
    ) {
      this.heightSamples = {};
      for (let h = 0; h < o.length; h++) {
        let c = o[h];
        c < 0 ? h++ : (this.heightSamples[Math.floor(c * 10)] = !0);
      }
    }
    return a;
  }
}
class Cu {
  constructor(e, t) {
    (this.from = e), (this.heights = t), (this.index = 0);
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Je {
  constructor(e, t, i, s, r) {
    (this.from = e), (this.length = t), (this.top = i), (this.height = s), (this._content = r);
  }
  get type() {
    return typeof this._content == 'number'
      ? be.Text
      : Array.isArray(this._content)
        ? this._content
        : this._content.type;
  }
  get to() {
    return this.from + this.length;
  }
  get bottom() {
    return this.top + this.height;
  }
  get widget() {
    return this._content instanceof vt ? this._content.widget : null;
  }
  get widgetLineBreaks() {
    return typeof this._content == 'number' ? this._content : 0;
  }
  join(e) {
    let t = (Array.isArray(this._content) ? this._content : [this]).concat(
      Array.isArray(e._content) ? e._content : [e],
    );
    return new Je(this.from, this.length + e.length, this.top, this.height + e.height, t);
  }
}
var Y = (function (n) {
  return (
    (n[(n.ByPos = 0)] = 'ByPos'),
    (n[(n.ByHeight = 1)] = 'ByHeight'),
    (n[(n.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
    n
  );
})(Y || (Y = {}));
const Mn = 0.001;
class xe {
  constructor(e, t, i = 2) {
    (this.length = e), (this.height = t), (this.flags = i);
  }
  get outdated() {
    return (this.flags & 2) > 0;
  }
  set outdated(e) {
    this.flags = (e ? 2 : 0) | (this.flags & -3);
  }
  setHeight(e) {
    this.height != e && (Math.abs(this.height - e) > Mn && (ti = !0), (this.height = e));
  }
  replace(e, t, i) {
    return xe.of(i);
  }
  decomposeLeft(e, t) {
    t.push(this);
  }
  decomposeRight(e, t) {
    t.push(this);
  }
  applyChanges(e, t, i, s) {
    let r = this,
      o = i.doc;
    for (let l = s.length - 1; l >= 0; l--) {
      let { fromA: a, toA: h, fromB: c, toB: f } = s[l],
        u = r.lineAt(a, Y.ByPosNoHeight, i.setDoc(t), 0, 0),
        d = u.to >= h ? u : r.lineAt(h, Y.ByPosNoHeight, i, 0, 0);
      for (f += d.to - h, h = d.to; l > 0 && u.from <= s[l - 1].toA; )
        (a = s[l - 1].fromA),
          (c = s[l - 1].fromB),
          l--,
          a < u.from && (u = r.lineAt(a, Y.ByPosNoHeight, i, 0, 0));
      (c += u.from - a), (a = u.from);
      let p = jr.build(i.setDoc(o), e, c, f);
      r = Nn(r, r.replace(a, h, p));
    }
    return r.updateHeight(i, 0);
  }
  static empty() {
    return new Ee(0, 0);
  }
  static of(e) {
    if (e.length == 1) return e[0];
    let t = 0,
      i = e.length,
      s = 0,
      r = 0;
    for (;;)
      if (t == i)
        if (s > r * 2) {
          let l = e[t - 1];
          l.break ? e.splice(--t, 1, l.left, null, l.right) : e.splice(--t, 1, l.left, l.right),
            (i += 1 + l.break),
            (s -= l.size);
        } else if (r > s * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right),
            (i += 2 + l.break),
            (r -= l.size);
        } else break;
      else if (s < r) {
        let l = e[t++];
        l && (s += l.size);
      } else {
        let l = e[--i];
        l && (r += l.size);
      }
    let o = 0;
    return (
      e[t - 1] == null ? ((o = 1), t--) : e[t] == null && ((o = 1), i++),
      new Au(xe.of(e.slice(0, t)), o, xe.of(e.slice(i)))
    );
  }
}
function Nn(n, e) {
  return n == e ? n : (n.constructor != e.constructor && (ti = !0), e);
}
xe.prototype.size = 1;
class uh extends xe {
  constructor(e, t, i) {
    super(e, t), (this.deco = i);
  }
  blockAt(e, t, i, s) {
    return new Je(s, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, t, i, s, r) {
    return this.blockAt(0, i, s, r);
  }
  forEachLine(e, t, i, s, r, o) {
    e <= r + this.length && t >= r && o(this.blockAt(0, i, s, r));
  }
  updateHeight(e, t = 0, i = !1, s) {
    return (
      s && s.from <= t && s.more && this.setHeight(s.heights[s.index++]), (this.outdated = !1), this
    );
  }
  toString() {
    return `block(${this.length})`;
  }
}
class Ee extends uh {
  constructor(e, t) {
    super(e, t, null), (this.collapsed = 0), (this.widgetHeight = 0), (this.breaks = 0);
  }
  blockAt(e, t, i, s) {
    return new Je(s, this.length, i, this.height, this.breaks);
  }
  replace(e, t, i) {
    let s = i[0];
    return i.length == 1 &&
      (s instanceof Ee || (s instanceof le && s.flags & 4)) &&
      Math.abs(this.length - s.length) < 10
      ? (s instanceof le ? (s = new Ee(s.length, this.height)) : (s.height = this.height),
        this.outdated || (s.outdated = !1),
        s)
      : xe.of(i);
  }
  updateHeight(e, t = 0, i = !1, s) {
    return (
      s && s.from <= t && s.more
        ? this.setHeight(s.heights[s.index++])
        : (i || this.outdated) &&
          this.setHeight(
            Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) +
              this.breaks * e.lineHeight,
          ),
      (this.outdated = !1),
      this
    );
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${this.widgetHeight ? ':' + this.widgetHeight : ''})`;
  }
}
class le extends xe {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, t) {
    let i = e.doc.lineAt(t).number,
      s = e.doc.lineAt(t + this.length).number,
      r = s - i + 1,
      o,
      l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * r);
      (o = a / r), this.length > r + 1 && (l = (this.height - a) / (this.length - r - 1));
    } else o = this.height / r;
    return { firstLine: i, lastLine: s, perLine: o, perChar: l };
  }
  blockAt(e, t, i, s) {
    let { firstLine: r, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(t, s);
    if (t.lineWrapping) {
      let h =
          s +
          (e < t.lineHeight
            ? 0
            : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)),
        c = t.doc.lineAt(h),
        f = l + c.length * a,
        u = Math.max(i, e - f / 2);
      return new Je(c.from, c.length, u, f, 0);
    } else {
      let h = Math.max(0, Math.min(o - r, Math.floor((e - i) / l))),
        { from: c, length: f } = t.doc.line(r + h);
      return new Je(c, f, i + l * h, l, 0);
    }
  }
  lineAt(e, t, i, s, r) {
    if (t == Y.ByHeight) return this.blockAt(e, i, s, r);
    if (t == Y.ByPosNoHeight) {
      let { from: d, to: p } = i.doc.lineAt(e);
      return new Je(d, p - d, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, r),
      h = i.doc.lineAt(e),
      c = l + h.length * a,
      f = h.number - o,
      u = s + l * f + a * (h.from - r - f);
    return new Je(h.from, h.length, Math.max(s, Math.min(u, s + this.height - c)), c, 0);
  }
  forEachLine(e, t, i, s, r, o) {
    (e = Math.max(e, r)), (t = Math.min(t, r + this.length));
    let { firstLine: l, perLine: a, perChar: h } = this.heightMetrics(i, r);
    for (let c = e, f = s; c <= t; ) {
      let u = i.doc.lineAt(c);
      if (c == e) {
        let p = u.number - l;
        f += a * p + h * (e - r - p);
      }
      let d = a + h * u.length;
      o(new Je(u.from, u.length, f, d, 0)), (f += d), (c = u.to + 1);
    }
  }
  replace(e, t, i) {
    let s = this.length - t;
    if (s > 0) {
      let r = i[i.length - 1];
      r instanceof le ? (i[i.length - 1] = new le(r.length + s)) : i.push(null, new le(s - 1));
    }
    if (e > 0) {
      let r = i[0];
      r instanceof le ? (i[0] = new le(e + r.length)) : i.unshift(new le(e - 1), null);
    }
    return xe.of(i);
  }
  decomposeLeft(e, t) {
    t.push(new le(e - 1), null);
  }
  decomposeRight(e, t) {
    t.push(null, new le(this.length - e - 1));
  }
  updateHeight(e, t = 0, i = !1, s) {
    let r = t + this.length;
    if (s && s.from <= t + this.length && s.more) {
      let o = [],
        l = Math.max(t, s.from),
        a = -1;
      for (s.from > t && o.push(new le(s.from - t - 1).updateHeight(e, t)); l <= r && s.more; ) {
        let c = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = s.heights[s.index++];
        a == -1 ? (a = f) : Math.abs(f - a) >= Mn && (a = -2);
        let u = new Ee(c, f);
        (u.outdated = !1), o.push(u), (l += c + 1);
      }
      l <= r && o.push(null, new le(r - l).updateHeight(e, l));
      let h = xe.of(o);
      return (
        (a < 0 ||
          Math.abs(h.height - this.height) >= Mn ||
          Math.abs(a - this.heightMetrics(e, t).perLine) >= Mn) &&
          (ti = !0),
        Nn(this, h)
      );
    } else
      (i || this.outdated) &&
        (this.setHeight(e.heightForGap(t, t + this.length)), (this.outdated = !1));
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class Au extends xe {
  constructor(e, t, i) {
    super(e.length + t + i.length, e.height + i.height, t | (e.outdated || i.outdated ? 2 : 0)),
      (this.left = e),
      (this.right = i),
      (this.size = e.size + i.size);
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, t, i, s) {
    let r = i + this.left.height;
    return e < r
      ? this.left.blockAt(e, t, i, s)
      : this.right.blockAt(e, t, r, s + this.left.length + this.break);
  }
  lineAt(e, t, i, s, r) {
    let o = s + this.left.height,
      l = r + this.left.length + this.break,
      a = t == Y.ByHeight ? e < o : e < l,
      h = a ? this.left.lineAt(e, t, i, s, r) : this.right.lineAt(e, t, i, o, l);
    if (this.break || (a ? h.to < l : h.from > l)) return h;
    let c = t == Y.ByPosNoHeight ? Y.ByPosNoHeight : Y.ByPos;
    return a ? h.join(this.right.lineAt(l, c, i, o, l)) : this.left.lineAt(l, c, i, s, r).join(h);
  }
  forEachLine(e, t, i, s, r, o) {
    let l = s + this.left.height,
      a = r + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, t, i, s, r, o),
        t >= a && this.right.forEachLine(e, t, i, l, a, o);
    else {
      let h = this.lineAt(a, Y.ByPos, i, s, r);
      e < h.from && this.left.forEachLine(e, h.from - 1, i, s, r, o),
        h.to >= e && h.from <= t && o(h),
        t > h.to && this.right.forEachLine(h.to + 1, t, i, l, a, o);
    }
  }
  replace(e, t, i) {
    let s = this.left.length + this.break;
    if (t < s) return this.balanced(this.left.replace(e, t, i), this.right);
    if (e > this.left.length) return this.balanced(this.left, this.right.replace(e - s, t - s, i));
    let r = [];
    e > 0 && this.decomposeLeft(e, r);
    let o = r.length;
    for (let l of i) r.push(l);
    if ((e > 0 && Xo(r, o - 1), t < this.length)) {
      let l = r.length;
      this.decomposeRight(t, r), Xo(r, l);
    }
    return xe.of(r);
  }
  decomposeLeft(e, t) {
    let i = this.left.length;
    if (e <= i) return this.left.decomposeLeft(e, t);
    t.push(this.left),
      this.break && (i++, e >= i && t.push(null)),
      e > i && this.right.decomposeLeft(e - i, t);
  }
  decomposeRight(e, t) {
    let i = this.left.length,
      s = i + this.break;
    if (e >= s) return this.right.decomposeRight(e - s, t);
    e < i && this.left.decomposeRight(e, t),
      this.break && e < s && t.push(null),
      t.push(this.right);
  }
  balanced(e, t) {
    return e.size > 2 * t.size || t.size > 2 * e.size
      ? xe.of(this.break ? [e, null, t] : [e, t])
      : ((this.left = Nn(this.left, e)),
        (this.right = Nn(this.right, t)),
        this.setHeight(e.height + t.height),
        (this.outdated = e.outdated || t.outdated),
        (this.size = e.size + t.size),
        (this.length = e.length + this.break + t.length),
        this);
  }
  updateHeight(e, t = 0, i = !1, s) {
    let { left: r, right: o } = this,
      l = t + r.length + this.break,
      a = null;
    return (
      s && s.from <= t + r.length && s.more
        ? (a = r = r.updateHeight(e, t, i, s))
        : r.updateHeight(e, t, i),
      s && s.from <= l + o.length && s.more
        ? (a = o = o.updateHeight(e, l, i, s))
        : o.updateHeight(e, l, i),
      a
        ? this.balanced(r, o)
        : ((this.height = this.left.height + this.right.height), (this.outdated = !1), this)
    );
  }
  toString() {
    return this.left + (this.break ? ' ' : '-') + this.right;
  }
}
function Xo(n, e) {
  let t, i;
  n[e] == null &&
    (t = n[e - 1]) instanceof le &&
    (i = n[e + 1]) instanceof le &&
    n.splice(e - 1, 3, new le(t.length + 1 + i.length));
}
const Mu = 5;
class jr {
  constructor(e, t) {
    (this.pos = e),
      (this.oracle = t),
      (this.nodes = []),
      (this.lineStart = -1),
      (this.lineEnd = -1),
      (this.covering = null),
      (this.writtenTo = e);
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, t) {
    if (this.lineStart > -1) {
      let i = Math.min(t, this.lineEnd),
        s = this.nodes[this.nodes.length - 1];
      s instanceof Ee
        ? (s.length += i - this.pos)
        : (i > this.pos || !this.isCovered) && this.nodes.push(new Ee(i - this.pos, -1)),
        (this.writtenTo = i),
        t > i && (this.nodes.push(null), this.writtenTo++, (this.lineStart = -1));
    }
    this.pos = t;
  }
  point(e, t, i) {
    if (e < t || i.heightRelevant) {
      let s = i.widget ? i.widget.estimatedHeight : 0,
        r = i.widget ? i.widget.lineBreaks : 0;
      s < 0 && (s = this.oracle.lineHeight);
      let o = t - e;
      i.block ? this.addBlock(new uh(o, s, i)) : (o || r || s >= Mu) && this.addLineDeco(s, r, o);
    } else t > e && this.span(e, t);
    this.lineEnd > -1 &&
      this.lineEnd < this.pos &&
      (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1) return;
    let { from: e, to: t } = this.oracle.doc.lineAt(this.pos);
    (this.lineStart = e),
      (this.lineEnd = t),
      this.writtenTo < e &&
        ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) &&
          this.nodes.push(this.blankContent(this.writtenTo, e - 1)),
        this.nodes.push(null)),
      this.pos > e && this.nodes.push(new Ee(this.pos - e, -1)),
      (this.writtenTo = this.pos);
  }
  blankContent(e, t) {
    let i = new le(t - e);
    return this.oracle.doc.lineAt(e).to == t && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof Ee) return e;
    let t = new Ee(0, -1);
    return this.nodes.push(t), t;
  }
  addBlock(e) {
    this.enterLine();
    let t = e.deco;
    t && t.startSide > 0 && !this.isCovered && this.ensureLine(),
      this.nodes.push(e),
      (this.writtenTo = this.pos = this.pos + e.length),
      t && t.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, t, i) {
    let s = this.ensureLine();
    (s.length += i),
      (s.collapsed += i),
      (s.widgetHeight = Math.max(s.widgetHeight, e)),
      (s.breaks += t),
      (this.writtenTo = this.pos = this.pos + i);
  }
  finish(e) {
    let t = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(t instanceof Ee) && !this.isCovered
      ? this.nodes.push(new Ee(0, -1))
      : (this.writtenTo < this.pos || t == null) &&
        this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let s of this.nodes)
      s instanceof Ee && s.updateHeight(this.oracle, i), (i += s ? s.length : 1);
    return this.nodes;
  }
  static build(e, t, i, s) {
    let r = new jr(i, e);
    return W.spans(t, i, s, r, 0), r.finish(i);
  }
}
function Eu(n, e, t) {
  let i = new Tu();
  return W.compare(n, e, t, i, 0), i.changes;
}
class Tu {
  constructor() {
    this.changes = [];
  }
  compareRange() {}
  comparePoint(e, t, i, s) {
    (e < t || (i && i.heightRelevant) || (s && s.heightRelevant)) && Cn(e, t, this.changes, 5);
  }
}
function Du(n, e) {
  let t = n.getBoundingClientRect(),
    i = n.ownerDocument,
    s = i.defaultView || window,
    r = Math.max(0, t.left),
    o = Math.min(s.innerWidth, t.right),
    l = Math.max(0, t.top),
    a = Math.min(s.innerHeight, t.bottom);
  for (let h = n.parentNode; h && h != i.body; )
    if (h.nodeType == 1) {
      let c = h,
        f = window.getComputedStyle(c);
      if (
        (c.scrollHeight > c.clientHeight || c.scrollWidth > c.clientWidth) &&
        f.overflow != 'visible'
      ) {
        let u = c.getBoundingClientRect();
        (r = Math.max(r, u.left)),
          (o = Math.min(o, u.right)),
          (l = Math.max(l, u.top)),
          (a = Math.min(h == n.parentNode ? s.innerHeight : a, u.bottom));
      }
      h = f.position == 'absolute' || f.position == 'fixed' ? c.offsetParent : c.parentNode;
    } else if (h.nodeType == 11) h = h.host;
    else break;
  return {
    left: r - t.left,
    right: Math.max(r, o) - t.left,
    top: l - (t.top + e),
    bottom: Math.max(l, a) - (t.top + e),
  };
}
function Ou(n) {
  let e = n.getBoundingClientRect(),
    t = n.ownerDocument.defaultView || window;
  return e.left < t.innerWidth && e.right > 0 && e.top < t.innerHeight && e.bottom > 0;
}
function Lu(n, e) {
  let t = n.getBoundingClientRect();
  return { left: 0, right: t.right - t.left, top: e, bottom: t.bottom - (t.top + e) };
}
class ws {
  constructor(e, t, i, s) {
    (this.from = e), (this.to = t), (this.size = i), (this.displaySize = s);
  }
  static same(e, t) {
    if (e.length != t.length) return !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i],
        r = t[i];
      if (s.from != r.from || s.to != r.to || s.size != r.size) return !1;
    }
    return !0;
  }
  draw(e, t) {
    return O.replace({ widget: new Bu(this.displaySize * (t ? e.scaleY : e.scaleX), t) }).range(
      this.from,
      this.to,
    );
  }
}
class Bu extends Ct {
  constructor(e, t) {
    super(), (this.size = e), (this.vertical = t);
  }
  eq(e) {
    return e.size == this.size && e.vertical == this.vertical;
  }
  toDOM() {
    let e = document.createElement('div');
    return (
      this.vertical
        ? (e.style.height = this.size + 'px')
        : ((e.style.width = this.size + 'px'),
          (e.style.height = '2px'),
          (e.style.display = 'inline-block')),
      e
    );
  }
  get estimatedHeight() {
    return this.vertical ? this.size : -1;
  }
}
class Qo {
  constructor(e) {
    (this.state = e),
      (this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }),
      (this.inView = !0),
      (this.paddingTop = 0),
      (this.paddingBottom = 0),
      (this.contentDOMWidth = 0),
      (this.contentDOMHeight = 0),
      (this.editorHeight = 0),
      (this.editorWidth = 0),
      (this.scrollTop = 0),
      (this.scrolledToBottom = !1),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.scrollAnchorPos = 0),
      (this.scrollAnchorHeight = -1),
      (this.scaler = Zo),
      (this.scrollTarget = null),
      (this.printing = !1),
      (this.mustMeasureContent = !0),
      (this.defaultTextDirection = J.LTR),
      (this.visibleRanges = []),
      (this.mustEnforceCursorAssoc = !1);
    let t = e.facet(zr).some((i) => typeof i != 'function' && i.class == 'cm-lineWrapping');
    (this.heightOracle = new Su(t)),
      (this.stateDeco = e.facet(Pi).filter((i) => typeof i != 'function')),
      (this.heightMap = xe
        .empty()
        .applyChanges(this.stateDeco, z.empty, this.heightOracle.setDoc(e.doc), [
          new Re(0, 0, 0, e.doc.length),
        ]));
    for (
      let i = 0;
      i < 2 && ((this.viewport = this.getViewport(0, null)), !!this.updateForViewport());
      i++
    );
    this.updateViewportLines(),
      (this.lineGaps = this.ensureLineGaps([])),
      (this.lineGapDeco = O.set(this.lineGaps.map((i) => i.draw(this, !1)))),
      this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport],
      { main: t } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let s = i ? t.head : t.anchor;
      if (!e.some(({ from: r, to: o }) => s >= r && s <= o)) {
        let { from: r, to: o } = this.lineBlockAt(s);
        e.push(new rn(r, o));
      }
    }
    return (this.viewports = e.sort((i, s) => i.from - s.from)), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return (
      (this.scaler =
        this.heightMap.height <= 7e6
          ? Zo
          : new _r(this.heightOracle, this.heightMap, this.viewports)),
      e.eq(this.scaler) ? 0 : 2
    );
  }
  updateViewportLines() {
    (this.viewportLines = []),
      this.heightMap.forEachLine(
        this.viewport.from,
        this.viewport.to,
        this.heightOracle.setDoc(this.state.doc),
        0,
        0,
        (e) => {
          this.viewportLines.push(bi(e, this.scaler));
        },
      );
  }
  update(e, t = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(Pi).filter((c) => typeof c != 'function');
    let s = e.changedRanges,
      r = Re.extendWithRanges(
        s,
        Eu(i, this.stateDeco, e ? e.changes : ie.empty(this.state.doc.length)),
      ),
      o = this.heightMap.height,
      l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Jo(),
      (this.heightMap = this.heightMap.applyChanges(
        this.stateDeco,
        e.startState.doc,
        this.heightOracle.setDoc(this.state.doc),
        r,
      )),
      (this.heightMap.height != o || ti) && (e.flags |= 2),
      l
        ? ((this.scrollAnchorPos = e.changes.mapPos(l.from, -1)), (this.scrollAnchorHeight = l.top))
        : ((this.scrollAnchorPos = -1), (this.scrollAnchorHeight = this.heightMap.height));
    let a = r.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    ((t && (t.range.head < a.from || t.range.head > a.to)) || !this.viewportIsAppropriate(a)) &&
      (a = this.getViewport(0, t));
    let h = a.from != this.viewport.from || a.to != this.viewport.to;
    (this.viewport = a),
      (e.flags |= this.updateForViewport()),
      (h || !e.changes.empty || e.flags & 2) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))),
      (e.flags |= this.computeVisibleRanges(e.changes)),
      t && (this.scrollTarget = t),
      !this.mustEnforceCursorAssoc &&
        e.selectionSet &&
        e.view.lineWrapping &&
        e.state.selection.main.empty &&
        e.state.selection.main.assoc &&
        !e.state.facet(Ga) &&
        (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let t = e.contentDOM,
      i = window.getComputedStyle(t),
      s = this.heightOracle,
      r = i.whiteSpace;
    this.defaultTextDirection = i.direction == 'rtl' ? J.RTL : J.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(r),
      l = t.getBoundingClientRect(),
      a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    (this.contentDOMHeight = l.height), (this.mustMeasureContent = !1);
    let h = 0,
      c = 0;
    if (l.width && l.height) {
      let { scaleX: k, scaleY: w } = va(t, l);
      ((k > 0.005 && Math.abs(this.scaleX - k) > 0.005) ||
        (w > 0.005 && Math.abs(this.scaleY - w) > 0.005)) &&
        ((this.scaleX = k), (this.scaleY = w), (h |= 16), (o = a = !0));
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY,
      u = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != u) &&
      ((this.paddingTop = f), (this.paddingBottom = u), (h |= 18)),
      this.editorWidth != e.scrollDOM.clientWidth &&
        (s.lineWrapping && (a = !0), (this.editorWidth = e.scrollDOM.clientWidth), (h |= 16));
    let d = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != d && ((this.scrollAnchorHeight = -1), (this.scrollTop = d)),
      (this.scrolledToBottom = Ca(e.scrollDOM));
    let p = (this.printing ? Lu : Du)(t, this.paddingTop),
      m = p.top - this.pixelViewport.top,
      g = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let y =
      this.pixelViewport.bottom > this.pixelViewport.top &&
      this.pixelViewport.right > this.pixelViewport.left;
    if (
      (y != this.inView && ((this.inView = y), y && (a = !0)),
      !this.inView && !this.scrollTarget && !Ou(e.dom))
    )
      return 0;
    let x = l.width;
    if (
      ((this.contentDOMWidth != x || this.editorHeight != e.scrollDOM.clientHeight) &&
        ((this.contentDOMWidth = l.width),
        (this.editorHeight = e.scrollDOM.clientHeight),
        (h |= 16)),
      a)
    ) {
      let k = e.docView.measureVisibleLineHeights(this.viewport);
      if (
        (s.mustRefreshForHeights(k) && (o = !0),
        o || (s.lineWrapping && Math.abs(x - this.contentDOMWidth) > s.charWidth))
      ) {
        let { lineHeight: w, charWidth: S, textHeight: A } = e.docView.measureTextSize();
        (o = w > 0 && s.refresh(r, w, S, A, x / S, k)), o && ((e.docView.minWidth = 0), (h |= 16));
      }
      m > 0 && g > 0 ? (c = Math.max(m, g)) : m < 0 && g < 0 && (c = Math.min(m, g)), Jo();
      for (let w of this.viewports) {
        let S = w.from == this.viewport.from ? k : e.docView.measureVisibleLineHeights(w);
        this.heightMap = (
          o
            ? xe
                .empty()
                .applyChanges(this.stateDeco, z.empty, this.heightOracle, [
                  new Re(0, 0, 0, e.state.doc.length),
                ])
            : this.heightMap
        ).updateHeight(s, 0, o, new Cu(w.from, S));
      }
      ti && (h |= 2);
    }
    let v =
      !this.viewportIsAppropriate(this.viewport, c) ||
      (this.scrollTarget &&
        (this.scrollTarget.range.head < this.viewport.from ||
          this.scrollTarget.range.head > this.viewport.to));
    return (
      v &&
        (h & 2 && (h |= this.updateScaler()),
        (this.viewport = this.getViewport(c, this.scrollTarget)),
        (h |= this.updateForViewport())),
      (h & 2 || v) && this.updateViewportLines(),
      (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) &&
        this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)),
      (h |= this.computeVisibleRanges()),
      this.mustEnforceCursorAssoc &&
        ((this.mustEnforceCursorAssoc = !1), e.docView.enforceCursorAssoc()),
      h
    );
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, t) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)),
      s = this.heightMap,
      r = this.heightOracle,
      { visibleTop: o, visibleBottom: l } = this,
      a = new rn(
        s.lineAt(o - i * 1e3, Y.ByHeight, r, 0, 0).from,
        s.lineAt(l + (1 - i) * 1e3, Y.ByHeight, r, 0, 0).to,
      );
    if (t) {
      let { head: h } = t.range;
      if (h < a.from || h > a.to) {
        let c = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top),
          f = s.lineAt(h, Y.ByPos, r, 0, 0),
          u;
        t.y == 'center'
          ? (u = (f.top + f.bottom) / 2 - c / 2)
          : t.y == 'start' || (t.y == 'nearest' && h < a.from)
            ? (u = f.top)
            : (u = f.bottom - c),
          (a = new rn(
            s.lineAt(u - 1e3 / 2, Y.ByHeight, r, 0, 0).from,
            s.lineAt(u + c + 1e3 / 2, Y.ByHeight, r, 0, 0).to,
          ));
      }
    }
    return a;
  }
  mapViewport(e, t) {
    let i = t.mapPos(e.from, -1),
      s = t.mapPos(e.to, 1);
    return new rn(
      this.heightMap.lineAt(i, Y.ByPos, this.heightOracle, 0, 0).from,
      this.heightMap.lineAt(s, Y.ByPos, this.heightOracle, 0, 0).to,
    );
  }
  viewportIsAppropriate({ from: e, to: t }, i = 0) {
    if (!this.inView) return !0;
    let { top: s } = this.heightMap.lineAt(e, Y.ByPos, this.heightOracle, 0, 0),
      { bottom: r } = this.heightMap.lineAt(t, Y.ByPos, this.heightOracle, 0, 0),
      { visibleTop: o, visibleBottom: l } = this;
    return (
      (e == 0 || s <= o - Math.max(10, Math.min(-i, 250))) &&
      (t == this.state.doc.length || r >= l + Math.max(10, Math.min(i, 250))) &&
      s > o - 2 * 1e3 &&
      r < l + 2 * 1e3
    );
  }
  mapLineGaps(e, t) {
    if (!e.length || t.empty) return e;
    let i = [];
    for (let s of e)
      t.touchesRange(s.from, s.to) ||
        i.push(new ws(t.mapPos(s.from), t.mapPos(s.to), s.size, s.displaySize));
    return i;
  }
  ensureLineGaps(e, t) {
    let i = this.heightOracle.lineWrapping,
      s = i ? 1e4 : 2e3,
      r = s >> 1,
      o = s << 1;
    if (this.defaultTextDirection != J.LTR && !i) return [];
    let l = [],
      a = (c, f, u, d) => {
        if (f - c < r) return;
        let p = this.state.selection.main,
          m = [p.from];
        p.empty || m.push(p.to);
        for (let y of m)
          if (y > c && y < f) {
            a(c, y - 10, u, d), a(y + 10, f, u, d);
            return;
          }
        let g = Ru(
          e,
          (y) =>
            y.from >= u.from &&
            y.to <= u.to &&
            Math.abs(y.from - c) < r &&
            Math.abs(y.to - f) < r &&
            !m.some((x) => y.from < x && y.to > x),
        );
        if (!g) {
          if (f < u.to && t && i && t.visibleRanges.some((v) => v.from <= f && v.to >= f)) {
            let v = t.moveToLineBoundary(b.cursor(f), !1, !0).head;
            v > c && (f = v);
          }
          let y = this.gapSize(u, c, f, d),
            x = i || y < 2e6 ? y : 2e6;
          g = new ws(c, f, y, x);
        }
        l.push(g);
      },
      h = (c) => {
        if (c.length < o || c.type != be.Text) return;
        let f = Pu(c.from, c.to, this.stateDeco);
        if (f.total < o) return;
        let u = this.scrollTarget ? this.scrollTarget.range.head : null,
          d,
          p;
        if (i) {
          let m = (s / this.heightOracle.lineLength) * this.heightOracle.lineHeight,
            g,
            y;
          if (u != null) {
            let x = ln(f, u),
              v = ((this.visibleBottom - this.visibleTop) / 2 + m) / c.height;
            (g = x - v), (y = x + v);
          } else
            (g = (this.visibleTop - c.top - m) / c.height),
              (y = (this.visibleBottom - c.top + m) / c.height);
          (d = on(f, g)), (p = on(f, y));
        } else {
          let m = f.total * this.heightOracle.charWidth,
            g = s * this.heightOracle.charWidth,
            y = 0;
          if (m > 2e6)
            for (let S of e)
              S.from >= c.from &&
                S.from < c.to &&
                S.size != S.displaySize &&
                S.from * this.heightOracle.charWidth + y < this.pixelViewport.left &&
                (y = S.size - S.displaySize);
          let x = this.pixelViewport.left + y,
            v = this.pixelViewport.right + y,
            k,
            w;
          if (u != null) {
            let S = ln(f, u),
              A = ((v - x) / 2 + g) / m;
            (k = S - A), (w = S + A);
          } else (k = (x - g) / m), (w = (v + g) / m);
          (d = on(f, k)), (p = on(f, w));
        }
        d > c.from && a(c.from, d, c, f), p < c.to && a(p, c.to, c, f);
      };
    for (let c of this.viewportLines) Array.isArray(c.type) ? c.type.forEach(h) : h(c);
    return l;
  }
  gapSize(e, t, i, s) {
    let r = ln(s, i) - ln(s, t);
    return this.heightOracle.lineWrapping
      ? e.height * r
      : s.total * this.heightOracle.charWidth * r;
  }
  updateLineGaps(e) {
    ws.same(e, this.lineGaps) ||
      ((this.lineGaps = e),
      (this.lineGapDeco = O.set(e.map((t) => t.draw(this, this.heightOracle.lineWrapping)))));
  }
  computeVisibleRanges(e) {
    let t = this.stateDeco;
    this.lineGaps.length && (t = t.concat(this.lineGapDeco));
    let i = [];
    W.spans(
      t,
      this.viewport.from,
      this.viewport.to,
      {
        span(r, o) {
          i.push({ from: r, to: o });
        },
        point() {},
      },
      20,
    );
    let s = 0;
    if (i.length != this.visibleRanges.length) s = 12;
    else
      for (let r = 0; r < i.length && !(s & 8); r++) {
        let o = this.visibleRanges[r],
          l = i[r];
        (o.from != l.from || o.to != l.to) &&
          ((s |= 4),
          (e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to) || (s |= 8));
      }
    return (this.visibleRanges = i), s;
  }
  lineBlockAt(e) {
    return (
      (e >= this.viewport.from &&
        e <= this.viewport.to &&
        this.viewportLines.find((t) => t.from <= e && t.to >= e)) ||
      bi(this.heightMap.lineAt(e, Y.ByPos, this.heightOracle, 0, 0), this.scaler)
    );
  }
  lineBlockAtHeight(e) {
    return (
      (e >= this.viewportLines[0].top &&
        e <= this.viewportLines[this.viewportLines.length - 1].bottom &&
        this.viewportLines.find((t) => t.top <= e && t.bottom >= e)) ||
      bi(
        this.heightMap.lineAt(this.scaler.fromDOM(e), Y.ByHeight, this.heightOracle, 0, 0),
        this.scaler,
      )
    );
  }
  scrollAnchorAt(e) {
    let t = this.lineBlockAtHeight(e + 8);
    return t.from >= this.viewport.from || this.viewportLines[0].top - e > 200
      ? t
      : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return bi(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class rn {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
function Pu(n, e, t) {
  let i = [],
    s = n,
    r = 0;
  return (
    W.spans(
      t,
      n,
      e,
      {
        span() {},
        point(o, l) {
          o > s && (i.push({ from: s, to: o }), (r += o - s)), (s = l);
        },
      },
      20,
    ),
    s < e && (i.push({ from: s, to: e }), (r += e - s)),
    { total: r, ranges: i }
  );
}
function on({ total: n, ranges: e }, t) {
  if (t <= 0) return e[0].from;
  if (t >= 1) return e[e.length - 1].to;
  let i = Math.floor(n * t);
  for (let s = 0; ; s++) {
    let { from: r, to: o } = e[s],
      l = o - r;
    if (i <= l) return r + i;
    i -= l;
  }
}
function ln(n, e) {
  let t = 0;
  for (let { from: i, to: s } of n.ranges) {
    if (e <= s) {
      t += e - i;
      break;
    }
    t += s - i;
  }
  return t / n.total;
}
function Ru(n, e) {
  for (let t of n) if (e(t)) return t;
}
const Zo = {
  toDOM(n) {
    return n;
  },
  fromDOM(n) {
    return n;
  },
  scale: 1,
  eq(n) {
    return n == this;
  },
};
class _r {
  constructor(e, t, i) {
    let s = 0,
      r = 0,
      o = 0;
    (this.viewports = i.map(({ from: l, to: a }) => {
      let h = t.lineAt(l, Y.ByPos, e, 0, 0).top,
        c = t.lineAt(a, Y.ByPos, e, 0, 0).bottom;
      return (s += c - h), { from: l, to: a, top: h, bottom: c, domTop: 0, domBottom: 0 };
    })),
      (this.scale = (7e6 - s) / (t.height - s));
    for (let l of this.viewports)
      (l.domTop = o + (l.top - r) * this.scale),
        (o = l.domBottom = l.domTop + (l.bottom - l.top)),
        (r = l.bottom);
  }
  toDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.top) return s + (e - i) * this.scale;
      if (e <= r.bottom) return r.domTop + (e - r.top);
      (i = r.bottom), (s = r.domBottom);
    }
  }
  fromDOM(e) {
    for (let t = 0, i = 0, s = 0; ; t++) {
      let r = t < this.viewports.length ? this.viewports[t] : null;
      if (!r || e < r.domTop) return i + (e - s) / this.scale;
      if (e <= r.domBottom) return r.top + (e - r.domTop);
      (i = r.bottom), (s = r.domBottom);
    }
  }
  eq(e) {
    return e instanceof _r
      ? this.scale == e.scale &&
          this.viewports.length == e.viewports.length &&
          this.viewports.every((t, i) => t.from == e.viewports[i].from && t.to == e.viewports[i].to)
      : !1;
  }
}
function bi(n, e) {
  if (e.scale == 1) return n;
  let t = e.toDOM(n.top),
    i = e.toDOM(n.bottom);
  return new Je(
    n.from,
    n.length,
    t,
    i - t,
    Array.isArray(n._content) ? n._content.map((s) => bi(s, e)) : n._content,
  );
}
const an = D.define({ combine: (n) => n.join(' ') }),
  dr = D.define({ combine: (n) => n.indexOf(!0) > -1 }),
  pr = xt.newName(),
  dh = xt.newName(),
  ph = xt.newName(),
  mh = { '&light': '.' + dh, '&dark': '.' + ph };
function mr(n, e, t) {
  return new xt(e, {
    finish(i) {
      return /&/.test(i)
        ? i.replace(/&\w*/, (s) => {
            if (s == '&') return n;
            if (!t || !t[s]) throw new RangeError(`Unsupported selector: ${s}`);
            return t[s];
          })
        : n + ' ' + i;
    },
  });
}
const Iu = mr(
    '.' + pr,
    {
      '&': {
        position: 'relative !important',
        boxSizing: 'border-box',
        '&.cm-focused': { outline: '1px dotted #212121' },
        display: 'flex !important',
        flexDirection: 'column',
      },
      '.cm-scroller': {
        display: 'flex !important',
        alignItems: 'flex-start !important',
        fontFamily: 'monospace',
        lineHeight: 1.4,
        height: '100%',
        overflowX: 'auto',
        position: 'relative',
        zIndex: 0,
        overflowAnchor: 'none',
      },
      '.cm-content': {
        margin: 0,
        flexGrow: 2,
        flexShrink: 0,
        display: 'block',
        whiteSpace: 'pre',
        wordWrap: 'normal',
        boxSizing: 'border-box',
        minHeight: '100%',
        padding: '4px 0',
        outline: 'none',
        '&[contenteditable=true]': { WebkitUserModify: 'read-write-plaintext-only' },
      },
      '.cm-lineWrapping': {
        whiteSpace_fallback: 'pre-wrap',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        overflowWrap: 'anywhere',
        flexShrink: 1,
      },
      '&light .cm-content': { caretColor: 'black' },
      '&dark .cm-content': { caretColor: 'white' },
      '.cm-line': { display: 'block', padding: '0 2px 0 6px' },
      '.cm-layer': {
        position: 'absolute',
        left: 0,
        top: 0,
        contain: 'size style',
        '& > *': { position: 'absolute' },
      },
      '&light .cm-selectionBackground': { background: '#d9d9d9' },
      '&dark .cm-selectionBackground': { background: '#222' },
      '&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
        background: '#d7d4f0',
      },
      '&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground': {
        background: '#233',
      },
      '.cm-cursorLayer': { pointerEvents: 'none' },
      '&.cm-focused > .cm-scroller > .cm-cursorLayer': {
        animation: 'steps(1) cm-blink 1.2s infinite',
      },
      '@keyframes cm-blink': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
      '@keyframes cm-blink2': { '0%': {}, '50%': { opacity: 0 }, '100%': {} },
      '.cm-cursor, .cm-dropCursor': {
        borderLeft: '1.2px solid black',
        marginLeft: '-0.6px',
        pointerEvents: 'none',
      },
      '.cm-cursor': { display: 'none' },
      '&dark .cm-cursor': { borderLeftColor: '#ddd' },
      '.cm-dropCursor': { position: 'absolute' },
      '&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor': { display: 'block' },
      '.cm-iso': { unicodeBidi: 'isolate' },
      '.cm-announced': { position: 'fixed', top: '-10000px' },
      '@media print': { '.cm-announced': { display: 'none' } },
      '&light .cm-activeLine': { backgroundColor: '#cceeff44' },
      '&dark .cm-activeLine': { backgroundColor: '#99eeff33' },
      '&light .cm-specialChar': { color: 'red' },
      '&dark .cm-specialChar': { color: '#f78' },
      '.cm-gutters': {
        flexShrink: 0,
        display: 'flex',
        height: '100%',
        boxSizing: 'border-box',
        insetInlineStart: 0,
        zIndex: 200,
      },
      '&light .cm-gutters': {
        backgroundColor: '#f5f5f5',
        color: '#6c6c6c',
        borderRight: '1px solid #ddd',
      },
      '&dark .cm-gutters': { backgroundColor: '#333338', color: '#ccc' },
      '.cm-gutter': {
        display: 'flex !important',
        flexDirection: 'column',
        flexShrink: 0,
        boxSizing: 'border-box',
        minHeight: '100%',
        overflow: 'hidden',
      },
      '.cm-gutterElement': { boxSizing: 'border-box' },
      '.cm-lineNumbers .cm-gutterElement': {
        padding: '0 3px 0 5px',
        minWidth: '20px',
        textAlign: 'right',
        whiteSpace: 'nowrap',
      },
      '&light .cm-activeLineGutter': { backgroundColor: '#e2f2ff' },
      '&dark .cm-activeLineGutter': { backgroundColor: '#222227' },
      '.cm-panels': { boxSizing: 'border-box', position: 'sticky', left: 0, right: 0, zIndex: 300 },
      '&light .cm-panels': { backgroundColor: '#f5f5f5', color: 'black' },
      '&light .cm-panels-top': { borderBottom: '1px solid #ddd' },
      '&light .cm-panels-bottom': { borderTop: '1px solid #ddd' },
      '&dark .cm-panels': { backgroundColor: '#333338', color: 'white' },
      '.cm-tab': { display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' },
      '.cm-widgetBuffer': { verticalAlign: 'text-top', height: '1em', width: 0, display: 'inline' },
      '.cm-placeholder': {
        color: '#888',
        display: 'inline-block',
        verticalAlign: 'top',
        userSelect: 'none',
      },
      '.cm-highlightSpace': {
        backgroundImage: 'radial-gradient(circle at 50% 55%, #aaa 20%, transparent 5%)',
        backgroundPosition: 'center',
      },
      '.cm-highlightTab': {
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right 90%',
        backgroundRepeat: 'no-repeat',
      },
      '.cm-trailingSpace': { backgroundColor: '#ff332255' },
      '.cm-button': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        padding: '.2em 1em',
        borderRadius: '1px',
      },
      '&light .cm-button': {
        backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)' },
      },
      '&dark .cm-button': {
        backgroundImage: 'linear-gradient(#393939, #111)',
        border: '1px solid #888',
        '&:active': { backgroundImage: 'linear-gradient(#111, #333)' },
      },
      '.cm-textfield': {
        verticalAlign: 'middle',
        color: 'inherit',
        fontSize: '70%',
        border: '1px solid silver',
        padding: '.2em .5em',
      },
      '&light .cm-textfield': { backgroundColor: 'white' },
      '&dark .cm-textfield': { border: '1px solid #555', backgroundColor: 'inherit' },
    },
    mh,
  ),
  Nu = { childList: !0, characterData: !0, subtree: !0, attributes: !0, characterDataOldValue: !0 },
  vs = T.ie && T.ie_version <= 11;
class Hu {
  constructor(e) {
    (this.view = e),
      (this.active = !1),
      (this.editContext = null),
      (this.selectionRange = new bf()),
      (this.selectionChanged = !1),
      (this.delayedFlush = -1),
      (this.resizeTimeout = -1),
      (this.queue = []),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1),
      (this.lastChange = 0),
      (this.scrollTargets = []),
      (this.intersection = null),
      (this.resizeScroll = null),
      (this.intersecting = !1),
      (this.gapIntersection = null),
      (this.gaps = []),
      (this.printQuery = null),
      (this.parentCheck = -1),
      (this.dom = e.contentDOM),
      (this.observer = new MutationObserver((t) => {
        for (let i of t) this.queue.push(i);
        ((T.ie && T.ie_version <= 11) || (T.ios && e.composing)) &&
        t.some(
          (i) =>
            (i.type == 'childList' && i.removedNodes.length) ||
            (i.type == 'characterData' && i.oldValue.length > i.target.nodeValue.length),
        )
          ? this.flushSoon()
          : this.flush();
      })),
      window.EditContext &&
        e.constructor.EDIT_CONTEXT !== !1 &&
        !(T.chrome && T.chrome_version < 126) &&
        ((this.editContext = new Vu(e)),
        e.state.facet(ot) && (e.contentDOM.editContext = this.editContext.editContext)),
      vs &&
        (this.onCharData = (t) => {
          this.queue.push({ target: t.target, type: 'characterData', oldValue: t.prevValue }),
            this.flushSoon();
        }),
      (this.onSelectionChange = this.onSelectionChange.bind(this)),
      (this.onResize = this.onResize.bind(this)),
      (this.onPrint = this.onPrint.bind(this)),
      (this.onScroll = this.onScroll.bind(this)),
      window.matchMedia && (this.printQuery = window.matchMedia('print')),
      typeof ResizeObserver == 'function' &&
        ((this.resizeScroll = new ResizeObserver(() => {
          var t;
          ((t = this.view.docView) === null || t === void 0 ? void 0 : t.lastUpdate) <
            Date.now() - 75 && this.onResize();
        })),
        this.resizeScroll.observe(e.scrollDOM)),
      this.addWindowListeners((this.win = e.win)),
      this.start(),
      typeof IntersectionObserver == 'function' &&
        ((this.intersection = new IntersectionObserver(
          (t) => {
            this.parentCheck < 0 &&
              (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)),
              t.length > 0 &&
                t[t.length - 1].intersectionRatio > 0 != this.intersecting &&
                ((this.intersecting = !this.intersecting),
                this.intersecting != this.view.inView &&
                  this.onScrollChanged(document.createEvent('Event')));
          },
          { threshold: [0, 0.001] },
        )),
        this.intersection.observe(this.dom),
        (this.gapIntersection = new IntersectionObserver((t) => {
          t.length > 0 &&
            t[t.length - 1].intersectionRatio > 0 &&
            this.onScrollChanged(document.createEvent('Event'));
        }, {}))),
      this.listenForScroll(),
      this.readSelectionRange();
  }
  onScrollChanged(e) {
    this.view.inputState.runHandlers('scroll', e), this.intersecting && this.view.measure();
  }
  onScroll(e) {
    this.intersecting && this.flush(!1),
      this.editContext && this.view.requestMeasure(this.editContext.measureReq),
      this.onScrollChanged(e);
  }
  onResize() {
    this.resizeTimeout < 0 &&
      (this.resizeTimeout = setTimeout(() => {
        (this.resizeTimeout = -1), this.view.requestMeasure();
      }, 50));
  }
  onPrint(e) {
    ((e.type == 'change' || !e.type) && !e.matches) ||
      ((this.view.viewState.printing = !0),
      this.view.measure(),
      setTimeout(() => {
        (this.view.viewState.printing = !1), this.view.requestMeasure();
      }, 500));
  }
  updateGaps(e) {
    if (
      this.gapIntersection &&
      (e.length != this.gaps.length || this.gaps.some((t, i) => t != e[i]))
    ) {
      this.gapIntersection.disconnect();
      for (let t of e) this.gapIntersection.observe(t);
      this.gaps = e;
    }
  }
  onSelectionChange(e) {
    let t = this.selectionChanged;
    if (!this.readSelectionRange() || this.delayedAndroidKey) return;
    let { view: i } = this,
      s = this.selectionRange;
    if (i.state.facet(ot) ? i.root.activeElement != this.dom : !Sn(this.dom, s)) return;
    let r = s.anchorNode && i.docView.nearest(s.anchorNode);
    if (r && r.ignoreEvent(e)) {
      t || (this.selectionChanged = !1);
      return;
    }
    ((T.ie && T.ie_version <= 11) || (T.android && T.chrome)) &&
    !i.state.selection.main.empty &&
    s.focusNode &&
    Si(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
      ? this.flushSoon()
      : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this,
      t = Li(e.root);
    if (!t) return !1;
    let i =
      (T.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && Fu(this.view, t)) ||
      t;
    if (!i || this.selectionRange.eq(i)) return !1;
    let s = Sn(this.dom, i);
    return s &&
      !this.selectionChanged &&
      e.inputState.lastFocusTime > Date.now() - 200 &&
      e.inputState.lastTouchTime < Date.now() - 300 &&
      wf(this.dom, i)
      ? ((this.view.inputState.lastFocusTime = 0), e.docView.updateSelection(), !1)
      : (this.selectionRange.setRange(i), s && (this.selectionChanged = !0), !0);
  }
  setSelectionRange(e, t) {
    this.selectionRange.set(e.node, e.offset, t.node, t.offset), (this.selectionChanged = !1);
  }
  clearSelectionRange() {
    this.selectionRange.set(null, 0, null, 0);
  }
  listenForScroll() {
    this.parentCheck = -1;
    let e = 0,
      t = null;
    for (let i = this.dom; i; )
      if (i.nodeType == 1)
        !t && e < this.scrollTargets.length && this.scrollTargets[e] == i
          ? e++
          : t || (t = this.scrollTargets.slice(0, e)),
          t && t.push(i),
          (i = i.assignedSlot || i.parentNode);
      else if (i.nodeType == 11) i = i.host;
      else break;
    if ((e < this.scrollTargets.length && !t && (t = this.scrollTargets.slice(0, e)), t)) {
      for (let i of this.scrollTargets) i.removeEventListener('scroll', this.onScroll);
      for (let i of (this.scrollTargets = t)) i.addEventListener('scroll', this.onScroll);
    }
  }
  ignore(e) {
    if (!this.active) return e();
    try {
      return this.stop(), e();
    } finally {
      this.start(), this.clear();
    }
  }
  start() {
    this.active ||
      (this.observer.observe(this.dom, Nu),
      vs && this.dom.addEventListener('DOMCharacterDataModified', this.onCharData),
      (this.active = !0));
  }
  stop() {
    this.active &&
      ((this.active = !1),
      this.observer.disconnect(),
      vs && this.dom.removeEventListener('DOMCharacterDataModified', this.onCharData));
  }
  clear() {
    this.processRecords(), (this.queue.length = 0), (this.selectionChanged = !1);
  }
  delayAndroidKey(e, t) {
    var i;
    if (!this.delayedAndroidKey) {
      let s = () => {
        let r = this.delayedAndroidKey;
        r &&
          (this.clearDelayedAndroidKey(),
          (this.view.inputState.lastKeyCode = r.keyCode),
          (this.view.inputState.lastKeyTime = Date.now()),
          !this.flush() && r.force && Gt(this.dom, r.key, r.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(s);
    }
    (!this.delayedAndroidKey || e == 'Enter') &&
      (this.delayedAndroidKey = {
        key: e,
        keyCode: t,
        force:
          this.lastChange < Date.now() - 50 ||
          !!(!((i = this.delayedAndroidKey) === null || i === void 0) && i.force),
      });
  }
  clearDelayedAndroidKey() {
    this.win.cancelAnimationFrame(this.flushingAndroidKey),
      (this.delayedAndroidKey = null),
      (this.flushingAndroidKey = -1);
  }
  flushSoon() {
    this.delayedFlush < 0 &&
      (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
        (this.delayedFlush = -1), this.flush();
      }));
  }
  forceFlush() {
    this.delayedFlush >= 0 &&
      (this.view.win.cancelAnimationFrame(this.delayedFlush), (this.delayedFlush = -1)),
      this.flush();
  }
  pendingRecords() {
    for (let e of this.observer.takeRecords()) this.queue.push(e);
    return this.queue;
  }
  processRecords() {
    let e = this.pendingRecords();
    e.length && (this.queue = []);
    let t = -1,
      i = -1,
      s = !1;
    for (let r of e) {
      let o = this.readMutation(r);
      o &&
        (o.typeOver && (s = !0),
        t == -1 ? ({ from: t, to: i } = o) : ((t = Math.min(o.from, t)), (i = Math.max(o.to, i))));
    }
    return { from: t, to: i, typeOver: s };
  }
  readChange() {
    let { from: e, to: t, typeOver: i } = this.processRecords(),
      s = this.selectionChanged && Sn(this.dom, this.selectionRange);
    if (e < 0 && !s) return null;
    e > -1 && (this.lastChange = Date.now()),
      (this.view.inputState.lastFocusTime = 0),
      (this.selectionChanged = !1);
    let r = new tu(this.view, e, t, i);
    return (this.view.docView.domChanged = { newSel: r.newSel ? r.newSel.main : null }), r;
  }
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
    e && this.readSelectionRange();
    let t = this.readChange();
    if (!t) return this.view.requestMeasure(), !1;
    let i = this.view.state,
      s = nh(this.view, t);
    return (
      this.view.state == i &&
        (t.domChanged || (t.newSel && !t.newSel.main.eq(this.view.state.selection.main))) &&
        this.view.update([]),
      s
    );
  }
  readMutation(e) {
    let t = this.view.docView.nearest(e.target);
    if (!t || t.ignoreMutation(e)) return null;
    if (
      (t.markDirty(e.type == 'attributes'),
      e.type == 'attributes' && (t.flags |= 4),
      e.type == 'childList')
    ) {
      let i = el(t, e.previousSibling || e.target.previousSibling, -1),
        s = el(t, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? t.posAfter(i) : t.posAtStart,
        to: s ? t.posBefore(s) : t.posAtEnd,
        typeOver: !1,
      };
    } else
      return e.type == 'characterData'
        ? { from: t.posAtStart, to: t.posAtEnd, typeOver: e.target.nodeValue == e.oldValue }
        : null;
  }
  setWindow(e) {
    e != this.win &&
      (this.removeWindowListeners(this.win), (this.win = e), this.addWindowListeners(this.win));
  }
  addWindowListeners(e) {
    e.addEventListener('resize', this.onResize),
      this.printQuery
        ? this.printQuery.addEventListener
          ? this.printQuery.addEventListener('change', this.onPrint)
          : this.printQuery.addListener(this.onPrint)
        : e.addEventListener('beforeprint', this.onPrint),
      e.addEventListener('scroll', this.onScroll),
      e.document.addEventListener('selectionchange', this.onSelectionChange);
  }
  removeWindowListeners(e) {
    e.removeEventListener('scroll', this.onScroll),
      e.removeEventListener('resize', this.onResize),
      this.printQuery
        ? this.printQuery.removeEventListener
          ? this.printQuery.removeEventListener('change', this.onPrint)
          : this.printQuery.removeListener(this.onPrint)
        : e.removeEventListener('beforeprint', this.onPrint),
      e.document.removeEventListener('selectionchange', this.onSelectionChange);
  }
  update(e) {
    this.editContext &&
      (this.editContext.update(e),
      e.startState.facet(ot) != e.state.facet(ot) &&
        (e.view.contentDOM.editContext = e.state.facet(ot) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, t, i;
    this.stop(),
      (e = this.intersection) === null || e === void 0 || e.disconnect(),
      (t = this.gapIntersection) === null || t === void 0 || t.disconnect(),
      (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let s of this.scrollTargets) s.removeEventListener('scroll', this.onScroll);
    this.removeWindowListeners(this.win),
      clearTimeout(this.parentCheck),
      clearTimeout(this.resizeTimeout),
      this.win.cancelAnimationFrame(this.delayedFlush),
      this.win.cancelAnimationFrame(this.flushingAndroidKey),
      this.editContext && ((this.view.contentDOM.editContext = null), this.editContext.destroy());
  }
}
function el(n, e, t) {
  for (; e; ) {
    let i = U.get(e);
    if (i && i.parent == n) return i;
    let s = e.parentNode;
    e = s != n.dom ? s : t > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function tl(n, e) {
  let t = e.startContainer,
    i = e.startOffset,
    s = e.endContainer,
    r = e.endOffset,
    o = n.docView.domAtPos(n.state.selection.main.anchor);
  return (
    Si(o.node, o.offset, s, r) && ([t, i, s, r] = [s, r, t, i]),
    { anchorNode: t, anchorOffset: i, focusNode: s, focusOffset: r }
  );
}
function Fu(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s) return tl(n, s);
  }
  let t = null;
  function i(s) {
    s.preventDefault(), s.stopImmediatePropagation(), (t = s.getTargetRanges()[0]);
  }
  return (
    n.contentDOM.addEventListener('beforeinput', i, !0),
    n.dom.ownerDocument.execCommand('indent'),
    n.contentDOM.removeEventListener('beforeinput', i, !0),
    t ? tl(n, t) : null
  );
}
class Vu {
  constructor(e) {
    (this.from = 0),
      (this.to = 0),
      (this.pendingContextChange = null),
      (this.handlers = Object.create(null)),
      (this.composing = null),
      this.resetRange(e.state);
    let t = (this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(
        Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor)),
      ),
      selectionEnd: this.toContextPos(e.state.selection.main.head),
    }));
    (this.handlers.textupdate = (i) => {
      let s = e.state.selection.main,
        { anchor: r, head: o } = s,
        l = this.toEditorPos(i.updateRangeStart),
        a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 &&
        !this.composing &&
        (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let h = {
        from: l,
        to: a,
        insert: z.of(
          i.text.split(`
`),
        ),
      };
      if (
        (h.from == this.from && r < this.from
          ? (h.from = r)
          : h.to == this.to && r > this.to && (h.to = r),
        h.from == h.to && !h.insert.length)
      ) {
        let c = b.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        c.main.eq(s) || e.dispatch({ selection: c, userEvent: 'select' });
        return;
      }
      if (
        ((T.mac || T.android) &&
          h.from == o - 1 &&
          /^\. ?$/.test(i.text) &&
          e.contentDOM.getAttribute('autocorrect') == 'off' &&
          (h = { from: l, to: a, insert: z.of([i.text.replace('.', ' ')]) }),
        (this.pendingContextChange = h),
        !e.state.readOnly)
      ) {
        let c = this.to - this.from + (h.to - h.from + h.insert.length);
        Kr(
          e,
          h,
          b.single(this.toEditorPos(i.selectionStart, c), this.toEditorPos(i.selectionEnd, c)),
        );
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }),
      (this.handlers.characterboundsupdate = (i) => {
        let s = [],
          r = null;
        for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
          let a = e.coordsForChar(o);
          (r =
            (a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top)) ||
            r ||
            new DOMRect()),
            s.push(r);
        }
        t.updateCharacterBounds(i.rangeStart, s);
      }),
      (this.handlers.textformatupdate = (i) => {
        let s = [];
        for (let r of i.getTextFormats()) {
          let o = r.underlineStyle,
            l = r.underlineThickness;
          if (o != 'None' && l != 'None') {
            let a = this.toEditorPos(r.rangeStart),
              h = this.toEditorPos(r.rangeEnd);
            if (a < h) {
              let c = `text-decoration: underline ${o == 'Dashed' ? 'dashed ' : o == 'Squiggle' ? 'wavy ' : ''}${l == 'Thin' ? 1 : 2}px`;
              s.push(O.mark({ attributes: { style: c } }).range(a, h));
            }
          }
        }
        e.dispatch({ effects: Ja.of(O.set(s)) });
      }),
      (this.handlers.compositionstart = () => {
        e.inputState.composing < 0 &&
          ((e.inputState.composing = 0), (e.inputState.compositionFirstChange = !0));
      }),
      (this.handlers.compositionend = () => {
        if (
          ((e.inputState.composing = -1),
          (e.inputState.compositionFirstChange = null),
          this.composing)
        ) {
          let { drifted: i } = this.composing;
          (this.composing = null), i && this.reset(e.state);
        }
      });
    for (let i in this.handlers) t.addEventListener(i, this.handlers[i]);
    this.measureReq = {
      read: (i) => {
        this.editContext.updateControlBounds(i.contentDOM.getBoundingClientRect());
        let s = Li(i.root);
        s &&
          s.rangeCount &&
          this.editContext.updateSelectionBounds(s.getRangeAt(0).getBoundingClientRect());
      },
    };
  }
  applyEdits(e) {
    let t = 0,
      i = !1,
      s = this.pendingContextChange;
    return (
      e.changes.iterChanges((r, o, l, a, h) => {
        if (i) return;
        let c = h.length - (o - r);
        if (s && o >= s.to)
          if (s.from == r && s.to == o && s.insert.eq(h)) {
            (s = this.pendingContextChange = null), (t += c), (this.to += c);
            return;
          } else (s = null), this.revertPending(e.state);
        if (((r += t), (o += t), o <= this.from)) (this.from += c), (this.to += c);
        else if (r < this.to) {
          if (r < this.from || o > this.to || this.to - this.from + h.length > 3e4) {
            i = !0;
            return;
          }
          this.editContext.updateText(this.toContextPos(r), this.toContextPos(o), h.toString()),
            (this.to += c);
        }
        t += c;
      }),
      s && !i && this.revertPending(e.state),
      !i
    );
  }
  update(e) {
    let t = this.pendingContextChange,
      i = e.startState.selection.main;
    this.composing &&
    (this.composing.drifted ||
      (!e.changes.touchesRange(i.from, i.to) &&
        e.transactions.some(
          (s) => !s.isUserEvent('input.type') && s.changes.touchesRange(this.from, this.to),
        )))
      ? ((this.composing.drifted = !0),
        (this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)))
      : !this.applyEdits(e) || !this.rangeIsValid(e.state)
        ? ((this.pendingContextChange = null), this.reset(e.state))
        : (e.docChanged || e.selectionSet || t) && this.setSelection(e.state),
      (e.geometryChanged || e.docChanged || e.selectionSet) &&
        e.view.requestMeasure(this.measureReq);
  }
  resetRange(e) {
    let { head: t } = e.selection.main;
    (this.from = Math.max(0, t - 1e4)), (this.to = Math.min(e.doc.length, t + 1e4));
  }
  reset(e) {
    this.resetRange(e),
      this.editContext.updateText(
        0,
        this.editContext.text.length,
        e.doc.sliceString(this.from, this.to),
      ),
      this.setSelection(e);
  }
  revertPending(e) {
    let t = this.pendingContextChange;
    (this.pendingContextChange = null),
      this.editContext.updateText(
        this.toContextPos(t.from),
        this.toContextPos(t.from + t.insert.length),
        e.doc.sliceString(t.from, t.to),
      );
  }
  setSelection(e) {
    let { main: t } = e.selection,
      i = this.toContextPos(Math.max(this.from, Math.min(this.to, t.anchor))),
      s = this.toContextPos(t.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != s) &&
      this.editContext.updateSelection(i, s);
  }
  rangeIsValid(e) {
    let { head: t } = e.selection.main;
    return !(
      (this.from > 0 && t - this.from < 500) ||
      (this.to < e.doc.length && this.to - t < 500) ||
      this.to - this.from > 1e4 * 3
    );
  }
  toEditorPos(e, t = this.to - this.from) {
    e = Math.min(e, t);
    let i = this.composing;
    return i && i.drifted ? i.editorBase + (e - i.contextBase) : e + this.from;
  }
  toContextPos(e) {
    let t = this.composing;
    return t && t.drifted ? t.contextBase + (e - t.editorBase) : e - this.from;
  }
  destroy() {
    for (let e in this.handlers) this.editContext.removeEventListener(e, this.handlers[e]);
  }
}
class E {
  get state() {
    return this.viewState.state;
  }
  get viewport() {
    return this.viewState.viewport;
  }
  get visibleRanges() {
    return this.viewState.visibleRanges;
  }
  get inView() {
    return this.viewState.inView;
  }
  get composing() {
    return this.inputState.composing > 0;
  }
  get compositionStarted() {
    return this.inputState.composing >= 0;
  }
  get root() {
    return this._root;
  }
  get win() {
    return this.dom.ownerDocument.defaultView || window;
  }
  constructor(e = {}) {
    var t;
    (this.plugins = []),
      (this.pluginMap = new Map()),
      (this.editorAttrs = {}),
      (this.contentAttrs = {}),
      (this.bidiCache = []),
      (this.destroyed = !1),
      (this.updateState = 2),
      (this.measureScheduled = -1),
      (this.measureRequests = []),
      (this.contentDOM = document.createElement('div')),
      (this.scrollDOM = document.createElement('div')),
      (this.scrollDOM.tabIndex = -1),
      (this.scrollDOM.className = 'cm-scroller'),
      this.scrollDOM.appendChild(this.contentDOM),
      (this.announceDOM = document.createElement('div')),
      (this.announceDOM.className = 'cm-announced'),
      this.announceDOM.setAttribute('aria-live', 'polite'),
      (this.dom = document.createElement('div')),
      this.dom.appendChild(this.announceDOM),
      this.dom.appendChild(this.scrollDOM),
      e.parent && e.parent.appendChild(this.dom);
    let { dispatch: i } = e;
    (this.dispatchTransactions =
      e.dispatchTransactions ||
      (i && ((s) => s.forEach((r) => i(r, this)))) ||
      ((s) => this.update(s))),
      (this.dispatch = this.dispatch.bind(this)),
      (this._root = e.root || xf(e.parent) || document),
      (this.viewState = new Qo(e.state || V.create(e))),
      e.scrollTo &&
        e.scrollTo.is(tn) &&
        (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)),
      (this.plugins = this.state.facet(mi).map((s) => new ys(s)));
    for (let s of this.plugins) s.update(this);
    (this.observer = new Hu(this)),
      (this.inputState = new ou(this)),
      this.inputState.ensureHandlers(this.plugins),
      (this.docView = new Po(this)),
      this.mountStyles(),
      this.updateAttrs(),
      (this.updateState = 0),
      this.requestMeasure(),
      !((t = document.fonts) === null || t === void 0) &&
        t.ready &&
        document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let t =
      e.length == 1 && e[0] instanceof ne
        ? e
        : e.length == 1 && Array.isArray(e[0])
          ? e[0]
          : [this.state.update(...e)];
    this.dispatchTransactions(t, this);
  }
  update(e) {
    if (this.updateState != 0)
      throw new Error('Calls to EditorView.update are not allowed while an update is in progress');
    let t = !1,
      i = !1,
      s,
      r = this.state;
    for (let u of e) {
      if (u.startState != r)
        throw new RangeError(
          "Trying to update state with a transaction that doesn't start from the previous state.",
        );
      r = u.state;
    }
    if (this.destroyed) {
      this.viewState.state = r;
      return;
    }
    let o = this.hasFocus,
      l = 0,
      a = null;
    e.some((u) => u.annotation(hh))
      ? ((this.inputState.notifiedFocused = o), (l = 1))
      : o != this.inputState.notifiedFocused &&
        ((this.inputState.notifiedFocused = o), (a = ch(r, o)), a || (l = 1));
    let h = this.observer.delayedAndroidKey,
      c = null;
    if (
      (h
        ? (this.observer.clearDelayedAndroidKey(),
          (c = this.observer.readChange()),
          ((c && !this.state.doc.eq(r.doc)) || !this.state.selection.eq(r.selection)) && (c = null))
        : this.observer.clear(),
      r.facet(V.phrases) != this.state.facet(V.phrases))
    )
      return this.setState(r);
    (s = In.create(this, r, e)), (s.flags |= l);
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let u of e) {
        if ((f && (f = f.map(u.changes)), u.scrollIntoView)) {
          let { main: d } = u.state.selection;
          f = new Yt(d.empty ? d : b.cursor(d.head, d.head > d.anchor ? -1 : 1));
        }
        for (let d of u.effects) d.is(tn) && (f = d.value.clip(this.state));
      }
      this.viewState.update(s, f),
        (this.bidiCache = Hn.update(this.bidiCache, s.changes)),
        s.empty || (this.updatePlugins(s), this.inputState.update(s)),
        (t = this.docView.update(s)),
        this.state.facet(gi) != this.styleModules && this.mountStyles(),
        (i = this.updateAttrs()),
        this.showAnnouncements(e),
        this.docView.updateSelection(
          t,
          e.some((u) => u.isUserEvent('select.pointer')),
        );
    } finally {
      this.updateState = 0;
    }
    if (
      (s.startState.facet(an) != s.state.facet(an) && (this.viewState.mustMeasureContent = !0),
      (t || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) &&
        this.requestMeasure(),
      t && this.docViewUpdate(),
      !s.empty)
    )
      for (let u of this.state.facet(hr))
        try {
          u(s);
        } catch (d) {
          Se(this.state, d, 'update listener');
        }
    (a || c) &&
      Promise.resolve().then(() => {
        a && this.state == a.startState && this.dispatch(a),
          c && !nh(this, c) && h.force && Gt(this.contentDOM, h.key, h.keyCode);
      });
  }
  setState(e) {
    if (this.updateState != 0)
      throw new Error(
        'Calls to EditorView.setState are not allowed while an update is in progress',
      );
    if (this.destroyed) {
      this.viewState.state = e;
      return;
    }
    this.updateState = 2;
    let t = this.hasFocus;
    try {
      for (let i of this.plugins) i.destroy(this);
      (this.viewState = new Qo(e)),
        (this.plugins = e.facet(mi).map((i) => new ys(i))),
        this.pluginMap.clear();
      for (let i of this.plugins) i.update(this);
      this.docView.destroy(),
        (this.docView = new Po(this)),
        this.inputState.ensureHandlers(this.plugins),
        this.mountStyles(),
        this.updateAttrs(),
        (this.bidiCache = []);
    } finally {
      this.updateState = 0;
    }
    t && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let t = e.startState.facet(mi),
      i = e.state.facet(mi);
    if (t != i) {
      let s = [];
      for (let r of i) {
        let o = t.indexOf(r);
        if (o < 0) s.push(new ys(r));
        else {
          let l = this.plugins[o];
          (l.mustUpdate = e), s.push(l);
        }
      }
      for (let r of this.plugins) r.mustUpdate != e && r.destroy(this);
      (this.plugins = s), this.pluginMap.clear();
    } else for (let s of this.plugins) s.mustUpdate = e;
    for (let s = 0; s < this.plugins.length; s++) this.plugins[s].update(this);
    t != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let t = e.value;
      if (t && t.docViewUpdate)
        try {
          t.docViewUpdate(this);
        } catch (i) {
          Se(this.state, i, 'doc view update listener');
        }
    }
  }
  measure(e = !0) {
    if (this.destroyed) return;
    if (
      (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
      this.observer.delayedAndroidKey)
    ) {
      (this.measureScheduled = -1), this.requestMeasure();
      return;
    }
    (this.measureScheduled = 0), e && this.observer.forceFlush();
    let t = null,
      i = this.scrollDOM,
      s = i.scrollTop * this.scaleY,
      { scrollAnchorPos: r, scrollAnchorHeight: o } = this.viewState;
    Math.abs(s - this.viewState.scrollTop) > 1 && (o = -1),
      (this.viewState.scrollAnchorHeight = -1);
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (Ca(i)) (r = -1), (o = this.viewState.heightMap.height);
          else {
            let d = this.viewState.scrollAnchorAt(s);
            (r = d.from), (o = d.top);
          }
        this.updateState = 1;
        let a = this.viewState.measure(this);
        if (!a && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
        if (l > 5) {
          console.warn(
            this.measureRequests.length
              ? 'Measure loop restarted more than 5 times'
              : 'Viewport failed to stabilize',
          );
          break;
        }
        let h = [];
        a & 4 || ([this.measureRequests, h] = [h, this.measureRequests]);
        let c = h.map((d) => {
            try {
              return d.read(this);
            } catch (p) {
              return Se(this.state, p), il;
            }
          }),
          f = In.create(this, this.state, []),
          u = !1;
        (f.flags |= a),
          t ? (t.flags |= a) : (t = f),
          (this.updateState = 2),
          f.empty ||
            (this.updatePlugins(f),
            this.inputState.update(f),
            this.updateAttrs(),
            (u = this.docView.update(f)),
            u && this.docViewUpdate());
        for (let d = 0; d < h.length; d++)
          if (c[d] != il)
            try {
              let p = h[d];
              p.write && p.write(c[d], this);
            } catch (p) {
              Se(this.state, p);
            }
        if (
          (u && this.docView.updateSelection(!0),
          !f.viewportChanged && this.measureRequests.length == 0)
        ) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget),
                (this.viewState.scrollTarget = null),
                (o = -1);
              continue;
            } else {
              let p =
                (r < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(r).top) - o;
              if (p > 1 || p < -1) {
                (s = s + p), (i.scrollTop = s / this.scaleY), (o = -1);
                continue;
              }
            }
          break;
        }
      }
    } finally {
      (this.updateState = 0), (this.measureScheduled = -1);
    }
    if (t && !t.empty) for (let l of this.state.facet(hr)) l(t);
  }
  get themeClasses() {
    return pr + ' ' + (this.state.facet(dr) ? ph : dh) + ' ' + this.state.facet(an);
  }
  updateAttrs() {
    let e = nl(this, Xa, {
        class: 'cm-editor' + (this.hasFocus ? ' cm-focused ' : ' ') + this.themeClasses,
      }),
      t = {
        spellcheck: 'false',
        autocorrect: 'off',
        autocapitalize: 'off',
        writingsuggestions: 'false',
        translate: 'no',
        contenteditable: this.state.facet(ot) ? 'true' : 'false',
        class: 'cm-content',
        style: `${T.tabSize}: ${this.state.tabSize}`,
        role: 'textbox',
        'aria-multiline': 'true',
      };
    this.state.readOnly && (t['aria-readonly'] = 'true'), nl(this, zr, t);
    let i = this.observer.ignore(() => {
      let s = sr(this.contentDOM, this.contentAttrs, t),
        r = sr(this.dom, this.editorAttrs, e);
      return s || r;
    });
    return (this.editorAttrs = e), (this.contentAttrs = t), i;
  }
  showAnnouncements(e) {
    let t = !0;
    for (let i of e)
      for (let s of i.effects)
        if (s.is(E.announce)) {
          t && (this.announceDOM.textContent = ''), (t = !1);
          let r = this.announceDOM.appendChild(document.createElement('div'));
          r.textContent = s.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(gi);
    let e = this.state.facet(E.cspNonce);
    xt.mount(this.root, this.styleModules.concat(Iu).reverse(), e ? { nonce: e } : void 0);
  }
  readMeasured() {
    if (this.updateState == 2)
      throw new Error("Reading the editor layout isn't allowed during an update");
    this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
  }
  requestMeasure(e) {
    if (
      (this.measureScheduled < 0 &&
        (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())),
      e)
    ) {
      if (this.measureRequests.indexOf(e) > -1) return;
      if (e.key != null) {
        for (let t = 0; t < this.measureRequests.length; t++)
          if (this.measureRequests[t].key === e.key) {
            this.measureRequests[t] = e;
            return;
          }
      }
      this.measureRequests.push(e);
    }
  }
  plugin(e) {
    let t = this.pluginMap.get(e);
    return (
      (t === void 0 || (t && t.spec != e)) &&
        this.pluginMap.set(e, (t = this.plugins.find((i) => i.spec == e) || null)),
      t && t.update(this).value
    );
  }
  get documentTop() {
    return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
  }
  get documentPadding() {
    return { top: this.viewState.paddingTop, bottom: this.viewState.paddingBottom };
  }
  get scaleX() {
    return this.viewState.scaleX;
  }
  get scaleY() {
    return this.viewState.scaleY;
  }
  elementAtHeight(e) {
    return this.readMeasured(), this.viewState.elementAtHeight(e);
  }
  lineBlockAtHeight(e) {
    return this.readMeasured(), this.viewState.lineBlockAtHeight(e);
  }
  get viewportLineBlocks() {
    return this.viewState.viewportLines;
  }
  lineBlockAt(e) {
    return this.viewState.lineBlockAt(e);
  }
  get contentHeight() {
    return this.viewState.contentHeight;
  }
  moveByChar(e, t, i) {
    return xs(this, e, Fo(this, e, t, i));
  }
  moveByGroup(e, t) {
    return xs(
      this,
      e,
      Fo(this, e, t, (i) => Xf(this, e.head, i)),
    );
  }
  visualLineSide(e, t) {
    let i = this.bidiSpans(e),
      s = this.textDirectionAt(e.from),
      r = i[t ? i.length - 1 : 0];
    return b.cursor(r.side(t, s) + e.from, r.forward(!t, s) ? 1 : -1);
  }
  moveToLineBoundary(e, t, i = !0) {
    return Jf(this, e, t, i);
  }
  moveVertically(e, t, i) {
    return xs(this, e, Qf(this, e, t, i));
  }
  domAtPos(e) {
    return this.docView.domAtPos(e);
  }
  posAtDOM(e, t = 0) {
    return this.docView.posFromDOM(e, t);
  }
  posAtCoords(e, t = !0) {
    return this.readMeasured(), ih(this, e, t);
  }
  coordsAtPos(e, t = 1) {
    this.readMeasured();
    let i = this.docView.coordsAt(e, t);
    if (!i || i.left == i.right) return i;
    let s = this.state.doc.lineAt(e),
      r = this.bidiSpans(s),
      o = r[gt.find(r, e - s.from, -1, t)];
    return ts(i, (o.dir == J.LTR) == t > 0);
  }
  coordsForChar(e) {
    return this.readMeasured(), this.docView.coordsForChar(e);
  }
  get defaultCharacterWidth() {
    return this.viewState.heightOracle.charWidth;
  }
  get defaultLineHeight() {
    return this.viewState.heightOracle.lineHeight;
  }
  get textDirection() {
    return this.viewState.defaultTextDirection;
  }
  textDirectionAt(e) {
    return !this.state.facet(Ua) || e < this.viewport.from || e > this.viewport.to
      ? this.textDirection
      : (this.readMeasured(), this.docView.textDirectionAt(e));
  }
  get lineWrapping() {
    return this.viewState.heightOracle.lineWrapping;
  }
  bidiSpans(e) {
    if (e.length > Wu) return Va(e.length);
    let t = this.textDirectionAt(e.from),
      i;
    for (let r of this.bidiCache)
      if (r.from == e.from && r.dir == t && (r.fresh || Fa(r.isolates, (i = Bo(this, e)))))
        return r.order;
    i || (i = Bo(this, e));
    let s = Rf(e.text, t, i);
    return this.bidiCache.push(new Hn(e.from, e.to, t, i, !0, s)), s;
  }
  get hasFocus() {
    var e;
    return (
      (this.dom.ownerDocument.hasFocus() ||
        (T.safari &&
          ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) >
            Date.now() - 3e4)) &&
      this.root.activeElement == this.contentDOM
    );
  }
  focus() {
    this.observer.ignore(() => {
      ka(this.contentDOM), this.docView.updateSelection();
    });
  }
  setRoot(e) {
    this._root != e &&
      ((this._root = e),
      this.observer.setWindow((e.nodeType == 9 ? e : e.ownerDocument).defaultView || window),
      this.mountStyles());
  }
  destroy() {
    this.root.activeElement == this.contentDOM && this.contentDOM.blur();
    for (let e of this.plugins) e.destroy(this);
    (this.plugins = []),
      this.inputState.destroy(),
      this.docView.destroy(),
      this.dom.remove(),
      this.observer.destroy(),
      this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled),
      (this.destroyed = !0);
  }
  static scrollIntoView(e, t = {}) {
    return tn.of(new Yt(typeof e == 'number' ? b.cursor(e) : e, t.y, t.x, t.yMargin, t.xMargin));
  }
  scrollSnapshot() {
    let { scrollTop: e, scrollLeft: t } = this.scrollDOM,
      i = this.viewState.scrollAnchorAt(e);
    return tn.of(new Yt(b.cursor(i.from), 'start', 'start', i.top - e, t, !0));
  }
  setTabFocusMode(e) {
    e == null
      ? (this.inputState.tabFocusMode = this.inputState.tabFocusMode < 0 ? 0 : -1)
      : typeof e == 'boolean'
        ? (this.inputState.tabFocusMode = e ? 0 : -1)
        : this.inputState.tabFocusMode != 0 && (this.inputState.tabFocusMode = Date.now() + e);
  }
  static domEventHandlers(e) {
    return te.define(() => ({}), { eventHandlers: e });
  }
  static domEventObservers(e) {
    return te.define(() => ({}), { eventObservers: e });
  }
  static theme(e, t) {
    let i = xt.newName(),
      s = [an.of(i), gi.of(mr(`.${i}`, e))];
    return t && t.dark && s.push(dr.of(!0)), s;
  }
  static baseTheme(e) {
    return Wt.lowest(gi.of(mr('.' + pr, e, mh)));
  }
  static findFromDOM(e) {
    var t;
    let i = e.querySelector('.cm-content'),
      s = (i && U.get(i)) || U.get(e);
    return (
      ((t = s == null ? void 0 : s.rootView) === null || t === void 0 ? void 0 : t.view) || null
    );
  }
}
E.styleModule = gi;
E.inputHandler = ja;
E.clipboardInputFilter = Vr;
E.clipboardOutputFilter = Wr;
E.scrollHandler = Ya;
E.focusChangeEffect = _a;
E.perLineTextDirection = Ua;
E.exceptionSink = Ka;
E.updateListener = hr;
E.editable = ot;
E.mouseSelectionStyle = $a;
E.dragMovesSelection = qa;
E.clickAddsSelectionRange = za;
E.decorations = Pi;
E.outerDecorations = Qa;
E.atomicRanges = qr;
E.bidiIsolatedRanges = Za;
E.scrollMargins = eh;
E.darkTheme = dr;
E.cspNonce = D.define({ combine: (n) => (n.length ? n[0] : '') });
E.contentAttributes = zr;
E.editorAttributes = Xa;
E.lineWrapping = E.contentAttributes.of({ class: 'cm-lineWrapping' });
E.announce = P.define();
const Wu = 4096,
  il = {};
class Hn {
  constructor(e, t, i, s, r, o) {
    (this.from = e),
      (this.to = t),
      (this.dir = i),
      (this.isolates = s),
      (this.fresh = r),
      (this.order = o);
  }
  static update(e, t) {
    if (t.empty && !e.some((r) => r.fresh)) return e;
    let i = [],
      s = e.length ? e[e.length - 1].dir : J.LTR;
    for (let r = Math.max(0, e.length - 10); r < e.length; r++) {
      let o = e[r];
      o.dir == s &&
        !t.touchesRange(o.from, o.to) &&
        i.push(new Hn(t.mapPos(o.from, 1), t.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function nl(n, e, t) {
  for (let i = n.state.facet(e), s = i.length - 1; s >= 0; s--) {
    let r = i[s],
      o = typeof r == 'function' ? r(n) : r;
    o && nr(o, t);
  }
  return t;
}
const zu = T.mac ? 'mac' : T.windows ? 'win' : T.linux ? 'linux' : 'key';
function qu(n, e) {
  const t = n.split(/-(?!$)/);
  let i = t[t.length - 1];
  i == 'Space' && (i = ' ');
  let s, r, o, l;
  for (let a = 0; a < t.length - 1; ++a) {
    const h = t[a];
    if (/^(cmd|meta|m)$/i.test(h)) l = !0;
    else if (/^a(lt)?$/i.test(h)) s = !0;
    else if (/^(c|ctrl|control)$/i.test(h)) r = !0;
    else if (/^s(hift)?$/i.test(h)) o = !0;
    else if (/^mod$/i.test(h)) e == 'mac' ? (l = !0) : (r = !0);
    else throw new Error('Unrecognized modifier name: ' + h);
  }
  return (
    s && (i = 'Alt-' + i),
    r && (i = 'Ctrl-' + i),
    l && (i = 'Meta-' + i),
    o && (i = 'Shift-' + i),
    i
  );
}
function hn(n, e, t) {
  return (
    e.altKey && (n = 'Alt-' + n),
    e.ctrlKey && (n = 'Ctrl-' + n),
    e.metaKey && (n = 'Meta-' + n),
    t !== !1 && e.shiftKey && (n = 'Shift-' + n),
    n
  );
}
const $u = Wt.default(
    E.domEventHandlers({
      keydown(n, e) {
        return yh(gh(e.state), n, e, 'editor');
      },
    }),
  ),
  Ur = D.define({ enables: $u }),
  sl = new WeakMap();
function gh(n) {
  let e = n.facet(Ur),
    t = sl.get(e);
  return t || sl.set(e, (t = _u(e.reduce((i, s) => i.concat(s), [])))), t;
}
function Ku(n, e, t) {
  return yh(gh(n.state), e, n, t);
}
let dt = null;
const ju = 4e3;
function _u(n, e = zu) {
  let t = Object.create(null),
    i = Object.create(null),
    s = (o, l) => {
      let a = i[o];
      if (a == null) i[o] = l;
      else if (a != l)
        throw new Error(
          'Key binding ' + o + ' is used both as a regular binding and as a multi-stroke prefix',
        );
    },
    r = (o, l, a, h, c) => {
      var f, u;
      let d = t[o] || (t[o] = Object.create(null)),
        p = l.split(/ (?!$)/).map((y) => qu(y, e));
      for (let y = 1; y < p.length; y++) {
        let x = p.slice(0, y).join(' ');
        s(x, !0),
          d[x] ||
            (d[x] = {
              preventDefault: !0,
              stopPropagation: !1,
              run: [
                (v) => {
                  let k = (dt = { view: v, prefix: x, scope: o });
                  return (
                    setTimeout(() => {
                      dt == k && (dt = null);
                    }, ju),
                    !0
                  );
                },
              ],
            });
      }
      let m = p.join(' ');
      s(m, !1);
      let g =
        d[m] ||
        (d[m] = {
          preventDefault: !1,
          stopPropagation: !1,
          run:
            ((u = (f = d._any) === null || f === void 0 ? void 0 : f.run) === null || u === void 0
              ? void 0
              : u.slice()) || [],
        });
      a && g.run.push(a), h && (g.preventDefault = !0), c && (g.stopPropagation = !0);
    };
  for (let o of n) {
    let l = o.scope ? o.scope.split(' ') : ['editor'];
    if (o.any)
      for (let h of l) {
        let c = t[h] || (t[h] = Object.create(null));
        c._any || (c._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let u in c) c[u].run.push((d) => f(d, gr));
      }
    let a = o[e] || o.key;
    if (a)
      for (let h of l)
        r(h, a, o.run, o.preventDefault, o.stopPropagation),
          o.shift && r(h, 'Shift-' + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return t;
}
let gr = null;
function yh(n, e, t, i) {
  gr = e;
  let s = pf(e),
    r = we(s, 0),
    o = Ye(r) == s.length && s != ' ',
    l = '',
    a = !1,
    h = !1,
    c = !1;
  dt &&
    dt.view == t &&
    dt.scope == i &&
    ((l = dt.prefix + ' '), rh.indexOf(e.keyCode) < 0 && ((h = !0), (dt = null)));
  let f = new Set(),
    u = (g) => {
      if (g) {
        for (let y of g.run)
          if (!f.has(y) && (f.add(y), y(t))) return g.stopPropagation && (c = !0), !0;
        g.preventDefault && (g.stopPropagation && (c = !0), (h = !0));
      }
      return !1;
    },
    d = n[i],
    p,
    m;
  return (
    d &&
      (u(d[l + hn(s, e, !o)])
        ? (a = !0)
        : o &&
            (e.altKey || e.metaKey || e.ctrlKey) &&
            !(T.windows && e.ctrlKey && e.altKey) &&
            (p = wt[e.keyCode]) &&
            p != s
          ? (u(d[l + hn(p, e, !0)]) ||
              (e.shiftKey && (m = Oi[e.keyCode]) != s && m != p && u(d[l + hn(m, e, !1)]))) &&
            (a = !0)
          : o && e.shiftKey && u(d[l + hn(s, e, !0)]) && (a = !0),
      !a && u(d._any) && (a = !0)),
    h && (a = !0),
    a && c && e.stopPropagation(),
    (gr = null),
    a
  );
}
class _i {
  constructor(e, t, i, s, r) {
    (this.className = e), (this.left = t), (this.top = i), (this.width = s), (this.height = r);
  }
  draw() {
    let e = document.createElement('div');
    return (e.className = this.className), this.adjust(e), e;
  }
  update(e, t) {
    return t.className != this.className ? !1 : (this.adjust(e), !0);
  }
  adjust(e) {
    (e.style.left = this.left + 'px'),
      (e.style.top = this.top + 'px'),
      this.width != null && (e.style.width = this.width + 'px'),
      (e.style.height = this.height + 'px');
  }
  eq(e) {
    return (
      this.left == e.left &&
      this.top == e.top &&
      this.width == e.width &&
      this.height == e.height &&
      this.className == e.className
    );
  }
  static forRange(e, t, i) {
    if (i.empty) {
      let s = e.coordsAtPos(i.head, i.assoc || 1);
      if (!s) return [];
      let r = bh(e);
      return [new _i(t, s.left - r.left, s.top - r.top, null, s.bottom - s.top)];
    } else return Uu(e, t, i);
  }
}
function bh(n) {
  let e = n.scrollDOM.getBoundingClientRect();
  return {
    left:
      (n.textDirection == J.LTR ? e.left : e.right - n.scrollDOM.clientWidth * n.scaleX) -
      n.scrollDOM.scrollLeft * n.scaleX,
    top: e.top - n.scrollDOM.scrollTop * n.scaleY,
  };
}
function rl(n, e, t, i) {
  let s = n.coordsAtPos(e, t * 2);
  if (!s) return i;
  let r = n.dom.getBoundingClientRect(),
    o = (s.top + s.bottom) / 2,
    l = n.posAtCoords({ x: r.left + 1, y: o }),
    a = n.posAtCoords({ x: r.right - 1, y: o });
  return l == null || a == null
    ? i
    : { from: Math.max(i.from, Math.min(l, a)), to: Math.min(i.to, Math.max(l, a)) };
}
function Uu(n, e, t) {
  if (t.to <= n.viewport.from || t.from >= n.viewport.to) return [];
  let i = Math.max(t.from, n.viewport.from),
    s = Math.min(t.to, n.viewport.to),
    r = n.textDirection == J.LTR,
    o = n.contentDOM,
    l = o.getBoundingClientRect(),
    a = bh(n),
    h = o.querySelector('.cm-line'),
    c = h && window.getComputedStyle(h),
    f = l.left + (c ? parseInt(c.paddingLeft) + Math.min(0, parseInt(c.textIndent)) : 0),
    u = l.right - (c ? parseInt(c.paddingRight) : 0),
    d = fr(n, i),
    p = fr(n, s),
    m = d.type == be.Text ? d : null,
    g = p.type == be.Text ? p : null;
  if (
    (m && (n.lineWrapping || d.widgetLineBreaks) && (m = rl(n, i, 1, m)),
    g && (n.lineWrapping || p.widgetLineBreaks) && (g = rl(n, s, -1, g)),
    m && g && m.from == g.from && m.to == g.to)
  )
    return x(v(t.from, t.to, m));
  {
    let w = m ? v(t.from, null, m) : k(d, !1),
      S = g ? v(null, t.to, g) : k(p, !0),
      A = [];
    return (
      (m || d).to < (g || p).from - (m && g ? 1 : 0) ||
      (d.widgetLineBreaks > 1 && w.bottom + n.defaultLineHeight / 2 < S.top)
        ? A.push(y(f, w.bottom, u, S.top))
        : w.bottom < S.top &&
          n.elementAtHeight((w.bottom + S.top) / 2).type == be.Text &&
          (w.bottom = S.top = (w.bottom + S.top) / 2),
      x(w).concat(A).concat(x(S))
    );
  }
  function y(w, S, A, R) {
    return new _i(e, w - a.left, S - a.top, A - w, R - S);
  }
  function x({ top: w, bottom: S, horizontal: A }) {
    let R = [];
    for (let H = 0; H < A.length; H += 2) R.push(y(A[H], w, A[H + 1], S));
    return R;
  }
  function v(w, S, A) {
    let R = 1e9,
      H = -1e9,
      K = [];
    function N(q, G, ge, Ae, qe) {
      let oe = n.coordsAtPos(q, q == A.to ? -2 : 2),
        De = n.coordsAtPos(ge, ge == A.from ? 2 : -2);
      !oe ||
        !De ||
        ((R = Math.min(oe.top, De.top, R)),
        (H = Math.max(oe.bottom, De.bottom, H)),
        qe == J.LTR
          ? K.push(r && G ? f : oe.left, r && Ae ? u : De.right)
          : K.push(!r && Ae ? f : De.left, !r && G ? u : oe.right));
    }
    let L = w ?? A.from,
      $ = S ?? A.to;
    for (let q of n.visibleRanges)
      if (q.to > L && q.from < $)
        for (let G = Math.max(q.from, L), ge = Math.min(q.to, $); ; ) {
          let Ae = n.state.doc.lineAt(G);
          for (let qe of n.bidiSpans(Ae)) {
            let oe = qe.from + Ae.from,
              De = qe.to + Ae.from;
            if (oe >= ge) break;
            De > G &&
              N(
                Math.max(oe, G),
                w == null && oe <= L,
                Math.min(De, ge),
                S == null && De >= $,
                qe.dir,
              );
          }
          if (((G = Ae.to + 1), G >= ge)) break;
        }
    return (
      K.length == 0 && N(L, w == null, $, S == null, n.textDirection),
      { top: R, bottom: H, horizontal: K }
    );
  }
  function k(w, S) {
    let A = l.top + (S ? w.top : w.bottom);
    return { top: A, bottom: A, horizontal: [] };
  }
}
function Gu(n, e) {
  return n.constructor == e.constructor && n.eq(e);
}
class Yu {
  constructor(e, t) {
    (this.view = e),
      (this.layer = t),
      (this.drawn = []),
      (this.scaleX = 1),
      (this.scaleY = 1),
      (this.measureReq = { read: this.measure.bind(this), write: this.draw.bind(this) }),
      (this.dom = e.scrollDOM.appendChild(document.createElement('div'))),
      this.dom.classList.add('cm-layer'),
      t.above && this.dom.classList.add('cm-layer-above'),
      t.class && this.dom.classList.add(t.class),
      this.scale(),
      this.dom.setAttribute('aria-hidden', 'true'),
      this.setOrder(e.state),
      e.requestMeasure(this.measureReq),
      t.mount && t.mount(this.dom, e);
  }
  update(e) {
    e.startState.facet(En) != e.state.facet(En) && this.setOrder(e.state),
      (this.layer.update(e, this.dom) || e.geometryChanged) &&
        (this.scale(), e.view.requestMeasure(this.measureReq));
  }
  docViewUpdate(e) {
    this.layer.updateOnDocViewUpdate !== !1 && e.requestMeasure(this.measureReq);
  }
  setOrder(e) {
    let t = 0,
      i = e.facet(En);
    for (; t < i.length && i[t] != this.layer; ) t++;
    this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - t);
  }
  measure() {
    return this.layer.markers(this.view);
  }
  scale() {
    let { scaleX: e, scaleY: t } = this.view;
    (e != this.scaleX || t != this.scaleY) &&
      ((this.scaleX = e),
      (this.scaleY = t),
      (this.dom.style.transform = `scale(${1 / e}, ${1 / t})`));
  }
  draw(e) {
    if (e.length != this.drawn.length || e.some((t, i) => !Gu(t, this.drawn[i]))) {
      let t = this.dom.firstChild,
        i = 0;
      for (let s of e)
        s.update && t && s.constructor && this.drawn[i].constructor && s.update(t, this.drawn[i])
          ? ((t = t.nextSibling), i++)
          : this.dom.insertBefore(s.draw(), t);
      for (; t; ) {
        let s = t.nextSibling;
        t.remove(), (t = s);
      }
      this.drawn = e;
    }
  }
  destroy() {
    this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
  }
}
const En = D.define();
function xh(n) {
  return [te.define((e) => new Yu(e, n)), En.of(n)];
}
const Ri = D.define({
  combine(n) {
    return nt(
      n,
      { cursorBlinkRate: 1200, drawRangeCursor: !0 },
      { cursorBlinkRate: (e, t) => Math.min(e, t), drawRangeCursor: (e, t) => e || t },
    );
  },
});
function Ju(n = {}) {
  return [Ri.of(n), Xu, Qu, Zu, Ga.of(!0)];
}
function wh(n) {
  return n.startState.facet(Ri) != n.state.facet(Ri);
}
const Xu = xh({
  above: !0,
  markers(n) {
    let { state: e } = n,
      t = e.facet(Ri),
      i = [];
    for (let s of e.selection.ranges) {
      let r = s == e.selection.main;
      if (s.empty || t.drawRangeCursor) {
        let o = r ? 'cm-cursor cm-cursor-primary' : 'cm-cursor cm-cursor-secondary',
          l = s.empty ? s : b.cursor(s.head, s.head > s.anchor ? -1 : 1);
        for (let a of _i.forRange(n, o, l)) i.push(a);
      }
    }
    return i;
  },
  update(n, e) {
    n.transactions.some((i) => i.selection) &&
      (e.style.animationName = e.style.animationName == 'cm-blink' ? 'cm-blink2' : 'cm-blink');
    let t = wh(n);
    return t && ol(n.state, e), n.docChanged || n.selectionSet || t;
  },
  mount(n, e) {
    ol(e.state, n);
  },
  class: 'cm-cursorLayer',
});
function ol(n, e) {
  e.style.animationDuration = n.facet(Ri).cursorBlinkRate + 'ms';
}
const Qu = xh({
    above: !1,
    markers(n) {
      return n.state.selection.ranges
        .map((e) => (e.empty ? [] : _i.forRange(n, 'cm-selectionBackground', e)))
        .reduce((e, t) => e.concat(t));
    },
    update(n, e) {
      return n.docChanged || n.selectionSet || n.viewportChanged || wh(n);
    },
    class: 'cm-selectionLayer',
  }),
  Zu = Wt.highest(
    E.theme({
      '.cm-line': {
        '& ::selection, &::selection': { backgroundColor: 'transparent !important' },
        caretColor: 'transparent !important',
      },
      '.cm-content': {
        caretColor: 'transparent !important',
        '& :focus': {
          caretColor: 'initial !important',
          '&::selection, & ::selection': { backgroundColor: 'Highlight !important' },
        },
      },
    }),
  ),
  vh = P.define({
    map(n, e) {
      return n == null ? null : e.mapPos(n);
    },
  }),
  xi = re.define({
    create() {
      return null;
    },
    update(n, e) {
      return (
        n != null && (n = e.changes.mapPos(n)),
        e.effects.reduce((t, i) => (i.is(vh) ? i.value : t), n)
      );
    },
  }),
  ed = te.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.cursor = null),
          (this.measureReq = { read: this.readPos.bind(this), write: this.drawCursor.bind(this) });
      }
      update(n) {
        var e;
        let t = n.state.field(xi);
        t == null
          ? this.cursor != null &&
            ((e = this.cursor) === null || e === void 0 || e.remove(), (this.cursor = null))
          : (this.cursor ||
              ((this.cursor = this.view.scrollDOM.appendChild(document.createElement('div'))),
              (this.cursor.className = 'cm-dropCursor')),
            (n.startState.field(xi) != t || n.docChanged || n.geometryChanged) &&
              this.view.requestMeasure(this.measureReq));
      }
      readPos() {
        let { view: n } = this,
          e = n.state.field(xi),
          t = e != null && n.coordsAtPos(e);
        if (!t) return null;
        let i = n.scrollDOM.getBoundingClientRect();
        return {
          left: t.left - i.left + n.scrollDOM.scrollLeft * n.scaleX,
          top: t.top - i.top + n.scrollDOM.scrollTop * n.scaleY,
          height: t.bottom - t.top,
        };
      }
      drawCursor(n) {
        if (this.cursor) {
          let { scaleX: e, scaleY: t } = this.view;
          n
            ? ((this.cursor.style.left = n.left / e + 'px'),
              (this.cursor.style.top = n.top / t + 'px'),
              (this.cursor.style.height = n.height / t + 'px'))
            : (this.cursor.style.left = '-100000px');
        }
      }
      destroy() {
        this.cursor && this.cursor.remove();
      }
      setDropPos(n) {
        this.view.state.field(xi) != n && this.view.dispatch({ effects: vh.of(n) });
      }
    },
    {
      eventObservers: {
        dragover(n) {
          this.setDropPos(this.view.posAtCoords({ x: n.clientX, y: n.clientY }));
        },
        dragleave(n) {
          (n.target == this.view.contentDOM || !this.view.contentDOM.contains(n.relatedTarget)) &&
            this.setDropPos(null);
        },
        dragend() {
          this.setDropPos(null);
        },
        drop() {
          this.setDropPos(null);
        },
      },
    },
  );
function td() {
  return [xi, ed];
}
function ll(n, e, t, i, s) {
  e.lastIndex = 0;
  for (let r = n.iterRange(t, i), o = t, l; !r.next().done; o += r.value.length)
    if (!r.lineBreak) for (; (l = e.exec(r.value)); ) s(o + l.index, l);
}
function id(n, e) {
  let t = n.visibleRanges;
  if (t.length == 1 && t[0].from == n.viewport.from && t[0].to == n.viewport.to) return t;
  let i = [];
  for (let { from: s, to: r } of t)
    (s = Math.max(n.state.doc.lineAt(s).from, s - e)),
      (r = Math.min(n.state.doc.lineAt(r).to, r + e)),
      i.length && i[i.length - 1].to >= s ? (i[i.length - 1].to = r) : i.push({ from: s, to: r });
  return i;
}
class nd {
  constructor(e) {
    const { regexp: t, decoration: i, decorate: s, boundary: r, maxLength: o = 1e3 } = e;
    if (!t.global)
      throw new RangeError(
        "The regular expression given to MatchDecorator should have its 'g' flag set",
      );
    if (((this.regexp = t), s)) this.addMatch = (l, a, h, c) => s(c, h, h + l[0].length, l, a);
    else if (typeof i == 'function')
      this.addMatch = (l, a, h, c) => {
        let f = i(l, a, h);
        f && c(h, h + l[0].length, f);
      };
    else if (i) this.addMatch = (l, a, h, c) => c(h, h + l[0].length, i);
    else
      throw new RangeError(
        "Either 'decorate' or 'decoration' should be provided to MatchDecorator",
      );
    (this.boundary = r), (this.maxLength = o);
  }
  createDeco(e) {
    let t = new tt(),
      i = t.add.bind(t);
    for (let { from: s, to: r } of id(e, this.maxLength))
      ll(e.state.doc, this.regexp, s, r, (o, l) => this.addMatch(l, e, o, i));
    return t.finish();
  }
  updateDeco(e, t) {
    let i = 1e9,
      s = -1;
    return (
      e.docChanged &&
        e.changes.iterChanges((r, o, l, a) => {
          a >= e.view.viewport.from &&
            l <= e.view.viewport.to &&
            ((i = Math.min(l, i)), (s = Math.max(a, s)));
        }),
      e.viewportMoved || s - i > 1e3
        ? this.createDeco(e.view)
        : s > -1
          ? this.updateRange(e.view, t.map(e.changes), i, s)
          : t
    );
  }
  updateRange(e, t, i, s) {
    for (let r of e.visibleRanges) {
      let o = Math.max(r.from, i),
        l = Math.min(r.to, s);
      if (l > o) {
        let a = e.state.doc.lineAt(o),
          h = a.to < l ? e.state.doc.lineAt(l) : a,
          c = Math.max(r.from, a.from),
          f = Math.min(r.to, h.to);
        if (this.boundary) {
          for (; o > a.from; o--)
            if (this.boundary.test(a.text[o - 1 - a.from])) {
              c = o;
              break;
            }
          for (; l < h.to; l++)
            if (this.boundary.test(h.text[l - h.from])) {
              f = l;
              break;
            }
        }
        let u = [],
          d,
          p = (m, g, y) => u.push(y.range(m, g));
        if (a == h)
          for (
            this.regexp.lastIndex = c - a.from;
            (d = this.regexp.exec(a.text)) && d.index < f - a.from;

          )
            this.addMatch(d, e, d.index + a.from, p);
        else ll(e.state.doc, this.regexp, c, f, (m, g) => this.addMatch(g, e, m, p));
        t = t.update({ filterFrom: c, filterTo: f, filter: (m, g) => m < c || g > f, add: u });
      }
    }
    return t;
  }
}
const yr = /x/.unicode != null ? 'gu' : 'g',
  sd = new RegExp(
    `[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]`,
    yr,
  ),
  rd = {
    0: 'null',
    7: 'bell',
    8: 'backspace',
    10: 'newline',
    11: 'vertical tab',
    13: 'carriage return',
    27: 'escape',
    8203: 'zero width space',
    8204: 'zero width non-joiner',
    8205: 'zero width joiner',
    8206: 'left-to-right mark',
    8207: 'right-to-left mark',
    8232: 'line separator',
    8237: 'left-to-right override',
    8238: 'right-to-left override',
    8294: 'left-to-right isolate',
    8295: 'right-to-left isolate',
    8297: 'pop directional isolate',
    8233: 'paragraph separator',
    65279: 'zero width no-break space',
    65532: 'object replacement',
  };
let ks = null;
function od() {
  var n;
  if (ks == null && typeof document < 'u' && document.body) {
    let e = document.body.style;
    ks = ((n = e.tabSize) !== null && n !== void 0 ? n : e.MozTabSize) != null;
  }
  return ks || !1;
}
const Tn = D.define({
  combine(n) {
    let e = nt(n, { render: null, specialChars: sd, addSpecialChars: null });
    return (
      (e.replaceTabs = !od()) && (e.specialChars = new RegExp('	|' + e.specialChars.source, yr)),
      e.addSpecialChars &&
        (e.specialChars = new RegExp(e.specialChars.source + '|' + e.addSpecialChars.source, yr)),
      e
    );
  },
});
function ld(n = {}) {
  return [Tn.of(n), ad()];
}
let al = null;
function ad() {
  return (
    al ||
    (al = te.fromClass(
      class {
        constructor(n) {
          (this.view = n),
            (this.decorations = O.none),
            (this.decorationCache = Object.create(null)),
            (this.decorator = this.makeDecorator(n.state.facet(Tn))),
            (this.decorations = this.decorator.createDeco(n));
        }
        makeDecorator(n) {
          return new nd({
            regexp: n.specialChars,
            decoration: (e, t, i) => {
              let { doc: s } = t.state,
                r = we(e[0], 0);
              if (r == 9) {
                let o = s.lineAt(i),
                  l = t.state.tabSize,
                  a = ri(o.text, l, i - o.from);
                return O.replace({
                  widget: new ud(
                    ((l - (a % l)) * this.view.defaultCharacterWidth) / this.view.scaleX,
                  ),
                });
              }
              return (
                this.decorationCache[r] ||
                (this.decorationCache[r] = O.replace({ widget: new fd(n, r) }))
              );
            },
            boundary: n.replaceTabs ? void 0 : /[^]/,
          });
        }
        update(n) {
          let e = n.state.facet(Tn);
          n.startState.facet(Tn) != e
            ? ((this.decorator = this.makeDecorator(e)),
              (this.decorations = this.decorator.createDeco(n.view)))
            : (this.decorations = this.decorator.updateDeco(n, this.decorations));
        }
      },
      { decorations: (n) => n.decorations },
    ))
  );
}
const hd = '•';
function cd(n) {
  return n >= 32 ? hd : n == 10 ? '␤' : String.fromCharCode(9216 + n);
}
class fd extends Ct {
  constructor(e, t) {
    super(), (this.options = e), (this.code = t);
  }
  eq(e) {
    return e.code == this.code;
  }
  toDOM(e) {
    let t = cd(this.code),
      i =
        e.state.phrase('Control character') +
        ' ' +
        (rd[this.code] || '0x' + this.code.toString(16)),
      s = this.options.render && this.options.render(this.code, i, t);
    if (s) return s;
    let r = document.createElement('span');
    return (
      (r.textContent = t),
      (r.title = i),
      r.setAttribute('aria-label', i),
      (r.className = 'cm-specialChar'),
      r
    );
  }
  ignoreEvent() {
    return !1;
  }
}
class ud extends Ct {
  constructor(e) {
    super(), (this.width = e);
  }
  eq(e) {
    return e.width == this.width;
  }
  toDOM() {
    let e = document.createElement('span');
    return (e.textContent = '	'), (e.className = 'cm-tab'), (e.style.width = this.width + 'px'), e;
  }
  ignoreEvent() {
    return !1;
  }
}
function dd() {
  return md;
}
const pd = O.line({ class: 'cm-activeLine' }),
  md = te.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n);
      }
      update(n) {
        (n.docChanged || n.selectionSet) && (this.decorations = this.getDeco(n.view));
      }
      getDeco(n) {
        let e = -1,
          t = [];
        for (let i of n.state.selection.ranges) {
          let s = n.lineBlockAt(i.head);
          s.from > e && (t.push(pd.range(s.from)), (e = s.from));
        }
        return O.set(t);
      }
    },
    { decorations: (n) => n.decorations },
  ),
  br = 2e3;
function gd(n, e, t) {
  let i = Math.min(e.line, t.line),
    s = Math.max(e.line, t.line),
    r = [];
  if (e.off > br || t.off > br || e.col < 0 || t.col < 0) {
    let o = Math.min(e.off, t.off),
      l = Math.max(e.off, t.off);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a);
      h.length <= l && r.push(b.range(h.from + o, h.to + l));
    }
  } else {
    let o = Math.min(e.col, t.col),
      l = Math.max(e.col, t.col);
    for (let a = i; a <= s; a++) {
      let h = n.doc.line(a),
        c = Js(h.text, o, n.tabSize, !0);
      if (c < 0) r.push(b.cursor(h.to));
      else {
        let f = Js(h.text, l, n.tabSize);
        r.push(b.range(h.from + c, h.from + f));
      }
    }
  }
  return r;
}
function yd(n, e) {
  let t = n.coordsAtPos(n.viewport.from);
  return t ? Math.round(Math.abs((t.left - e) / n.defaultCharacterWidth)) : -1;
}
function hl(n, e) {
  let t = n.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
    i = n.state.doc.lineAt(t),
    s = t - i.from,
    r = s > br ? -1 : s == i.length ? yd(n, e.clientX) : ri(i.text, n.state.tabSize, t - i.from);
  return { line: i.number, col: r, off: s };
}
function bd(n, e) {
  let t = hl(n, e),
    i = n.state.selection;
  return t
    ? {
        update(s) {
          if (s.docChanged) {
            let r = s.changes.mapPos(s.startState.doc.line(t.line).from),
              o = s.state.doc.lineAt(r);
            (t = { line: o.number, col: t.col, off: Math.min(t.off, o.length) }),
              (i = i.map(s.changes));
          }
        },
        get(s, r, o) {
          let l = hl(n, s);
          if (!l) return i;
          let a = gd(n.state, t, l);
          return a.length ? (o ? b.create(a.concat(i.ranges)) : b.create(a)) : i;
        },
      }
    : null;
}
function xd(n) {
  let e = (t) => t.altKey && t.button == 0;
  return E.mouseSelectionStyle.of((t, i) => (e(i) ? bd(t, i) : null));
}
const wd = {
    Alt: [18, (n) => !!n.altKey],
    Control: [17, (n) => !!n.ctrlKey],
    Shift: [16, (n) => !!n.shiftKey],
    Meta: [91, (n) => !!n.metaKey],
  },
  vd = { style: 'cursor: crosshair' };
function kd(n = {}) {
  let [e, t] = wd[n.key || 'Alt'],
    i = te.fromClass(
      class {
        constructor(s) {
          (this.view = s), (this.isDown = !1);
        }
        set(s) {
          this.isDown != s && ((this.isDown = s), this.view.update([]));
        }
      },
      {
        eventObservers: {
          keydown(s) {
            this.set(s.keyCode == e || t(s));
          },
          keyup(s) {
            (s.keyCode == e || !t(s)) && this.set(!1);
          },
          mousemove(s) {
            this.set(t(s));
          },
        },
      },
    );
  return [
    i,
    E.contentAttributes.of((s) => {
      var r;
      return !((r = s.plugin(i)) === null || r === void 0) && r.isDown ? vd : null;
    }),
  ];
}
const ci = '-10000px';
class kh {
  constructor(e, t, i, s) {
    (this.facet = t),
      (this.createTooltipView = i),
      (this.removeTooltipView = s),
      (this.input = e.state.facet(t)),
      (this.tooltips = this.input.filter((o) => o));
    let r = null;
    this.tooltipViews = this.tooltips.map((o) => (r = i(o, r)));
  }
  update(e, t) {
    var i;
    let s = e.state.facet(this.facet),
      r = s.filter((a) => a);
    if (s === this.input) {
      for (let a of this.tooltipViews) a.update && a.update(e);
      return !1;
    }
    let o = [],
      l = t ? [] : null;
    for (let a = 0; a < r.length; a++) {
      let h = r[a],
        c = -1;
      if (h) {
        for (let f = 0; f < this.tooltips.length; f++) {
          let u = this.tooltips[f];
          u && u.create == h.create && (c = f);
        }
        if (c < 0) (o[a] = this.createTooltipView(h, a ? o[a - 1] : null)), l && (l[a] = !!h.above);
        else {
          let f = (o[a] = this.tooltipViews[c]);
          l && (l[a] = t[c]), f.update && f.update(e);
        }
      }
    }
    for (let a of this.tooltipViews)
      o.indexOf(a) < 0 &&
        (this.removeTooltipView(a), (i = a.destroy) === null || i === void 0 || i.call(a));
    return (
      t && (l.forEach((a, h) => (t[h] = a)), (t.length = l.length)),
      (this.input = s),
      (this.tooltips = r),
      (this.tooltipViews = o),
      !0
    );
  }
}
function Sd(n) {
  let e = n.dom.ownerDocument.documentElement;
  return { top: 0, left: 0, bottom: e.clientHeight, right: e.clientWidth };
}
const Ss = D.define({
    combine: (n) => {
      var e, t, i;
      return {
        position: T.ios
          ? 'absolute'
          : ((e = n.find((s) => s.position)) === null || e === void 0 ? void 0 : e.position) ||
            'fixed',
        parent:
          ((t = n.find((s) => s.parent)) === null || t === void 0 ? void 0 : t.parent) || null,
        tooltipSpace:
          ((i = n.find((s) => s.tooltipSpace)) === null || i === void 0
            ? void 0
            : i.tooltipSpace) || Sd,
      };
    },
  }),
  cl = new WeakMap(),
  Gr = te.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.above = []),
          (this.inView = !0),
          (this.madeAbsolute = !1),
          (this.lastTransaction = 0),
          (this.measureTimeout = -1);
        let e = n.state.facet(Ss);
        (this.position = e.position),
          (this.parent = e.parent),
          (this.classes = n.themeClasses),
          this.createContainer(),
          (this.measureReq = {
            read: this.readMeasure.bind(this),
            write: this.writeMeasure.bind(this),
            key: this,
          }),
          (this.resizeObserver =
            typeof ResizeObserver == 'function'
              ? new ResizeObserver(() => this.measureSoon())
              : null),
          (this.manager = new kh(
            n,
            Yr,
            (t, i) => this.createTooltip(t, i),
            (t) => {
              this.resizeObserver && this.resizeObserver.unobserve(t.dom), t.dom.remove();
            },
          )),
          (this.above = this.manager.tooltips.map((t) => !!t.above)),
          (this.intersectionObserver =
            typeof IntersectionObserver == 'function'
              ? new IntersectionObserver(
                  (t) => {
                    Date.now() > this.lastTransaction - 50 &&
                      t.length > 0 &&
                      t[t.length - 1].intersectionRatio < 1 &&
                      this.measureSoon();
                  },
                  { threshold: [1] },
                )
              : null),
          this.observeIntersection(),
          n.win.addEventListener('resize', (this.measureSoon = this.measureSoon.bind(this))),
          this.maybeMeasure();
      }
      createContainer() {
        this.parent
          ? ((this.container = document.createElement('div')),
            (this.container.style.position = 'relative'),
            (this.container.className = this.view.themeClasses),
            this.parent.appendChild(this.container))
          : (this.container = this.view.dom);
      }
      observeIntersection() {
        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
          for (let n of this.manager.tooltipViews) this.intersectionObserver.observe(n.dom);
        }
      }
      measureSoon() {
        this.measureTimeout < 0 &&
          (this.measureTimeout = setTimeout(() => {
            (this.measureTimeout = -1), this.maybeMeasure();
          }, 50));
      }
      update(n) {
        n.transactions.length && (this.lastTransaction = Date.now());
        let e = this.manager.update(n, this.above);
        e && this.observeIntersection();
        let t = e || n.geometryChanged,
          i = n.state.facet(Ss);
        if (i.position != this.position && !this.madeAbsolute) {
          this.position = i.position;
          for (let s of this.manager.tooltipViews) s.dom.style.position = this.position;
          t = !0;
        }
        if (i.parent != this.parent) {
          this.parent && this.container.remove(), (this.parent = i.parent), this.createContainer();
          for (let s of this.manager.tooltipViews) this.container.appendChild(s.dom);
          t = !0;
        } else
          this.parent &&
            this.view.themeClasses != this.classes &&
            (this.classes = this.container.className = this.view.themeClasses);
        t && this.maybeMeasure();
      }
      createTooltip(n, e) {
        let t = n.create(this.view),
          i = e ? e.dom : null;
        if (
          (t.dom.classList.add('cm-tooltip'),
          n.arrow && !t.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
        ) {
          let s = document.createElement('div');
          (s.className = 'cm-tooltip-arrow'), t.dom.appendChild(s);
        }
        return (
          (t.dom.style.position = this.position),
          (t.dom.style.top = ci),
          (t.dom.style.left = '0px'),
          this.container.insertBefore(t.dom, i),
          t.mount && t.mount(this.view),
          this.resizeObserver && this.resizeObserver.observe(t.dom),
          t
        );
      }
      destroy() {
        var n, e, t;
        this.view.win.removeEventListener('resize', this.measureSoon);
        for (let i of this.manager.tooltipViews)
          i.dom.remove(), (n = i.destroy) === null || n === void 0 || n.call(i);
        this.parent && this.container.remove(),
          (e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
          (t = this.intersectionObserver) === null || t === void 0 || t.disconnect(),
          clearTimeout(this.measureTimeout);
      }
      readMeasure() {
        let n = 1,
          e = 1,
          t = !1;
        if (this.position == 'fixed' && this.manager.tooltipViews.length) {
          let { dom: r } = this.manager.tooltipViews[0];
          if (T.gecko) t = r.offsetParent != this.container.ownerDocument.body;
          else if (r.style.top == ci && r.style.left == '0px') {
            let o = r.getBoundingClientRect();
            t = Math.abs(o.top + 1e4) > 1 || Math.abs(o.left) > 1;
          }
        }
        if (t || this.position == 'absolute')
          if (this.parent) {
            let r = this.parent.getBoundingClientRect();
            r.width &&
              r.height &&
              ((n = r.width / this.parent.offsetWidth), (e = r.height / this.parent.offsetHeight));
          } else ({ scaleX: n, scaleY: e } = this.view.viewState);
        let i = this.view.scrollDOM.getBoundingClientRect(),
          s = $r(this.view);
        return {
          visible: {
            left: i.left + s.left,
            top: i.top + s.top,
            right: i.right - s.right,
            bottom: i.bottom - s.bottom,
          },
          parent: this.parent
            ? this.container.getBoundingClientRect()
            : this.view.dom.getBoundingClientRect(),
          pos: this.manager.tooltips.map((r, o) => {
            let l = this.manager.tooltipViews[o];
            return l.getCoords ? l.getCoords(r.pos) : this.view.coordsAtPos(r.pos);
          }),
          size: this.manager.tooltipViews.map(({ dom: r }) => r.getBoundingClientRect()),
          space: this.view.state.facet(Ss).tooltipSpace(this.view),
          scaleX: n,
          scaleY: e,
          makeAbsolute: t,
        };
      }
      writeMeasure(n) {
        var e;
        if (n.makeAbsolute) {
          (this.madeAbsolute = !0), (this.position = 'absolute');
          for (let l of this.manager.tooltipViews) l.dom.style.position = 'absolute';
        }
        let { visible: t, space: i, scaleX: s, scaleY: r } = n,
          o = [];
        for (let l = 0; l < this.manager.tooltips.length; l++) {
          let a = this.manager.tooltips[l],
            h = this.manager.tooltipViews[l],
            { dom: c } = h,
            f = n.pos[l],
            u = n.size[l];
          if (
            !f ||
            (a.clip !== !1 &&
              (f.bottom <= Math.max(t.top, i.top) ||
                f.top >= Math.min(t.bottom, i.bottom) ||
                f.right < Math.max(t.left, i.left) - 0.1 ||
                f.left > Math.min(t.right, i.right) + 0.1))
          ) {
            c.style.top = ci;
            continue;
          }
          let d = a.arrow ? h.dom.querySelector('.cm-tooltip-arrow') : null,
            p = d ? 7 : 0,
            m = u.right - u.left,
            g = (e = cl.get(h)) !== null && e !== void 0 ? e : u.bottom - u.top,
            y = h.offset || Ad,
            x = this.view.textDirection == J.LTR,
            v =
              u.width > i.right - i.left
                ? x
                  ? i.left
                  : i.right - u.width
                : x
                  ? Math.max(i.left, Math.min(f.left - (d ? 14 : 0) + y.x, i.right - m))
                  : Math.min(Math.max(i.left, f.left - m + (d ? 14 : 0) - y.x), i.right - m),
            k = this.above[l];
          !a.strictSide &&
            (k ? f.top - g - p - y.y < i.top : f.bottom + g + p + y.y > i.bottom) &&
            k == i.bottom - f.bottom > f.top - i.top &&
            (k = this.above[l] = !k);
          let w = (k ? f.top - i.top : i.bottom - f.bottom) - p;
          if (w < g && h.resize !== !1) {
            if (w < this.view.defaultLineHeight) {
              c.style.top = ci;
              continue;
            }
            cl.set(h, g), (c.style.height = (g = w) / r + 'px');
          } else c.style.height && (c.style.height = '');
          let S = k ? f.top - g - p - y.y : f.bottom + p + y.y,
            A = v + m;
          if (h.overlap !== !0)
            for (let R of o)
              R.left < A &&
                R.right > v &&
                R.top < S + g &&
                R.bottom > S &&
                (S = k ? R.top - g - 2 - p : R.bottom + p + 2);
          if (
            (this.position == 'absolute'
              ? ((c.style.top = (S - n.parent.top) / r + 'px'), fl(c, (v - n.parent.left) / s))
              : ((c.style.top = S / r + 'px'), fl(c, v / s)),
            d)
          ) {
            let R = f.left + (x ? y.x : -y.x) - (v + 14 - 7);
            d.style.left = R / s + 'px';
          }
          h.overlap !== !0 && o.push({ left: v, top: S, right: A, bottom: S + g }),
            c.classList.toggle('cm-tooltip-above', k),
            c.classList.toggle('cm-tooltip-below', !k),
            h.positioned && h.positioned(n.space);
        }
      }
      maybeMeasure() {
        if (
          this.manager.tooltips.length &&
          (this.view.inView && this.view.requestMeasure(this.measureReq),
          this.inView != this.view.inView && ((this.inView = this.view.inView), !this.inView))
        )
          for (let n of this.manager.tooltipViews) n.dom.style.top = ci;
      }
    },
    {
      eventObservers: {
        scroll() {
          this.maybeMeasure();
        },
      },
    },
  );
function fl(n, e) {
  let t = parseInt(n.style.left, 10);
  (isNaN(t) || Math.abs(e - t) > 1) && (n.style.left = e + 'px');
}
const Cd = E.baseTheme({
    '.cm-tooltip': { zIndex: 500, boxSizing: 'border-box' },
    '&light .cm-tooltip': { border: '1px solid #bbb', backgroundColor: '#f5f5f5' },
    '&light .cm-tooltip-section:not(:first-child)': { borderTop: '1px solid #bbb' },
    '&dark .cm-tooltip': { backgroundColor: '#333338', color: 'white' },
    '.cm-tooltip-arrow': {
      height: '7px',
      width: `${7 * 2}px`,
      position: 'absolute',
      zIndex: -1,
      overflow: 'hidden',
      '&:before, &:after': {
        content: "''",
        position: 'absolute',
        width: 0,
        height: 0,
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
      },
      '.cm-tooltip-above &': {
        bottom: '-7px',
        '&:before': { borderTop: '7px solid #bbb' },
        '&:after': { borderTop: '7px solid #f5f5f5', bottom: '1px' },
      },
      '.cm-tooltip-below &': {
        top: '-7px',
        '&:before': { borderBottom: '7px solid #bbb' },
        '&:after': { borderBottom: '7px solid #f5f5f5', top: '1px' },
      },
    },
    '&dark .cm-tooltip .cm-tooltip-arrow': {
      '&:before': { borderTopColor: '#333338', borderBottomColor: '#333338' },
      '&:after': { borderTopColor: 'transparent', borderBottomColor: 'transparent' },
    },
  }),
  Ad = { x: 0, y: 0 },
  Yr = D.define({ enables: [Gr, Cd] }),
  Fn = D.define({ combine: (n) => n.reduce((e, t) => e.concat(t), []) });
class ss {
  static create(e) {
    return new ss(e);
  }
  constructor(e) {
    (this.view = e),
      (this.mounted = !1),
      (this.dom = document.createElement('div')),
      this.dom.classList.add('cm-tooltip-hover'),
      (this.manager = new kh(
        e,
        Fn,
        (t, i) => this.createHostedView(t, i),
        (t) => t.dom.remove(),
      ));
  }
  createHostedView(e, t) {
    let i = e.create(this.view);
    return (
      i.dom.classList.add('cm-tooltip-section'),
      this.dom.insertBefore(i.dom, t ? t.dom.nextSibling : this.dom.firstChild),
      this.mounted && i.mount && i.mount(this.view),
      i
    );
  }
  mount(e) {
    for (let t of this.manager.tooltipViews) t.mount && t.mount(e);
    this.mounted = !0;
  }
  positioned(e) {
    for (let t of this.manager.tooltipViews) t.positioned && t.positioned(e);
  }
  update(e) {
    this.manager.update(e);
  }
  destroy() {
    var e;
    for (let t of this.manager.tooltipViews) (e = t.destroy) === null || e === void 0 || e.call(t);
  }
  passProp(e) {
    let t;
    for (let i of this.manager.tooltipViews) {
      let s = i[e];
      if (s !== void 0) {
        if (t === void 0) t = s;
        else if (t !== s) return;
      }
    }
    return t;
  }
  get offset() {
    return this.passProp('offset');
  }
  get getCoords() {
    return this.passProp('getCoords');
  }
  get overlap() {
    return this.passProp('overlap');
  }
  get resize() {
    return this.passProp('resize');
  }
}
const Md = Yr.compute([Fn], (n) => {
  let e = n.facet(Fn);
  return e.length === 0
    ? null
    : {
        pos: Math.min(...e.map((t) => t.pos)),
        end: Math.max(
          ...e.map((t) => {
            var i;
            return (i = t.end) !== null && i !== void 0 ? i : t.pos;
          }),
        ),
        create: ss.create,
        above: e[0].above,
        arrow: e.some((t) => t.arrow),
      };
});
class Ed {
  constructor(e, t, i, s, r) {
    (this.view = e),
      (this.source = t),
      (this.field = i),
      (this.setHover = s),
      (this.hoverTime = r),
      (this.hoverTimeout = -1),
      (this.restartTimeout = -1),
      (this.pending = null),
      (this.lastMove = { x: 0, y: 0, target: e.dom, time: 0 }),
      (this.checkHover = this.checkHover.bind(this)),
      e.dom.addEventListener('mouseleave', (this.mouseleave = this.mouseleave.bind(this))),
      e.dom.addEventListener('mousemove', (this.mousemove = this.mousemove.bind(this)));
  }
  update() {
    this.pending &&
      ((this.pending = null),
      clearTimeout(this.restartTimeout),
      (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
  }
  get active() {
    return this.view.state.field(this.field);
  }
  checkHover() {
    if (((this.hoverTimeout = -1), this.active.length)) return;
    let e = Date.now() - this.lastMove.time;
    e < this.hoverTime
      ? (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - e))
      : this.startHover();
  }
  startHover() {
    clearTimeout(this.restartTimeout);
    let { view: e, lastMove: t } = this,
      i = e.docView.nearest(t.target);
    if (!i) return;
    let s,
      r = 1;
    if (i instanceof mt) s = i.posAtStart;
    else {
      if (((s = e.posAtCoords(t)), s == null)) return;
      let l = e.coordsAtPos(s);
      if (
        !l ||
        t.y < l.top ||
        t.y > l.bottom ||
        t.x < l.left - e.defaultCharacterWidth ||
        t.x > l.right + e.defaultCharacterWidth
      )
        return;
      let a = e.bidiSpans(e.state.doc.lineAt(s)).find((c) => c.from <= s && c.to >= s),
        h = a && a.dir == J.RTL ? -1 : 1;
      r = t.x < l.left ? -h : h;
    }
    let o = this.source(e, s, r);
    if (o != null && o.then) {
      let l = (this.pending = { pos: s });
      o.then(
        (a) => {
          this.pending == l &&
            ((this.pending = null),
            a &&
              !(Array.isArray(a) && !a.length) &&
              e.dispatch({ effects: this.setHover.of(Array.isArray(a) ? a : [a]) }));
        },
        (a) => Se(e.state, a, 'hover tooltip'),
      );
    } else
      o &&
        !(Array.isArray(o) && !o.length) &&
        e.dispatch({ effects: this.setHover.of(Array.isArray(o) ? o : [o]) });
  }
  get tooltip() {
    let e = this.view.plugin(Gr),
      t = e ? e.manager.tooltips.findIndex((i) => i.create == ss.create) : -1;
    return t > -1 ? e.manager.tooltipViews[t] : null;
  }
  mousemove(e) {
    var t, i;
    (this.lastMove = { x: e.clientX, y: e.clientY, target: e.target, time: Date.now() }),
      this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
    let { active: s, tooltip: r } = this;
    if ((s.length && r && !Td(r.dom, e)) || this.pending) {
      let { pos: o } = s[0] || this.pending,
        l =
          (i = (t = s[0]) === null || t === void 0 ? void 0 : t.end) !== null && i !== void 0
            ? i
            : o;
      (o == l
        ? this.view.posAtCoords(this.lastMove) != o
        : !Dd(this.view, o, l, e.clientX, e.clientY)) &&
        (this.view.dispatch({ effects: this.setHover.of([]) }), (this.pending = null));
    }
  }
  mouseleave(e) {
    clearTimeout(this.hoverTimeout), (this.hoverTimeout = -1);
    let { active: t } = this;
    if (t.length) {
      let { tooltip: i } = this;
      i && i.dom.contains(e.relatedTarget)
        ? this.watchTooltipLeave(i.dom)
        : this.view.dispatch({ effects: this.setHover.of([]) });
    }
  }
  watchTooltipLeave(e) {
    let t = (i) => {
      e.removeEventListener('mouseleave', t),
        this.active.length &&
          !this.view.dom.contains(i.relatedTarget) &&
          this.view.dispatch({ effects: this.setHover.of([]) });
    };
    e.addEventListener('mouseleave', t);
  }
  destroy() {
    clearTimeout(this.hoverTimeout),
      this.view.dom.removeEventListener('mouseleave', this.mouseleave),
      this.view.dom.removeEventListener('mousemove', this.mousemove);
  }
}
const cn = 4;
function Td(n, e) {
  let { left: t, right: i, top: s, bottom: r } = n.getBoundingClientRect(),
    o;
  if ((o = n.querySelector('.cm-tooltip-arrow'))) {
    let l = o.getBoundingClientRect();
    (s = Math.min(l.top, s)), (r = Math.max(l.bottom, r));
  }
  return e.clientX >= t - cn && e.clientX <= i + cn && e.clientY >= s - cn && e.clientY <= r + cn;
}
function Dd(n, e, t, i, s, r) {
  let o = n.scrollDOM.getBoundingClientRect(),
    l = n.documentTop + n.documentPadding.top + n.contentHeight;
  if (o.left > i || o.right < i || o.top > s || Math.min(o.bottom, l) < s) return !1;
  let a = n.posAtCoords({ x: i, y: s }, !1);
  return a >= e && a <= t;
}
function Od(n, e = {}) {
  let t = P.define(),
    i = re.define({
      create() {
        return [];
      },
      update(s, r) {
        if (
          s.length &&
          (e.hideOnChange && (r.docChanged || r.selection)
            ? (s = [])
            : e.hideOn && (s = s.filter((o) => !e.hideOn(r, o))),
          r.docChanged)
        ) {
          let o = [];
          for (let l of s) {
            let a = r.changes.mapPos(l.pos, -1, ye.TrackDel);
            if (a != null) {
              let h = Object.assign(Object.create(null), l);
              (h.pos = a), h.end != null && (h.end = r.changes.mapPos(h.end)), o.push(h);
            }
          }
          s = o;
        }
        for (let o of r.effects) o.is(t) && (s = o.value), o.is(Ld) && (s = []);
        return s;
      },
      provide: (s) => Fn.from(s),
    });
  return {
    active: i,
    extension: [i, te.define((s) => new Ed(s, n, i, t, e.hoverTime || 300)), Md],
  };
}
function Sh(n, e) {
  let t = n.plugin(Gr);
  if (!t) return null;
  let i = t.manager.tooltips.indexOf(e);
  return i < 0 ? null : t.manager.tooltipViews[i];
}
const Ld = P.define(),
  ul = D.define({
    combine(n) {
      let e, t;
      for (let i of n) (e = e || i.topContainer), (t = t || i.bottomContainer);
      return { topContainer: e, bottomContainer: t };
    },
  });
function Ii(n, e) {
  let t = n.plugin(Ch),
    i = t ? t.specs.indexOf(e) : -1;
  return i > -1 ? t.panels[i] : null;
}
const Ch = te.fromClass(
  class {
    constructor(n) {
      (this.input = n.state.facet(Ni)),
        (this.specs = this.input.filter((t) => t)),
        (this.panels = this.specs.map((t) => t(n)));
      let e = n.state.facet(ul);
      (this.top = new fn(n, !0, e.topContainer)),
        (this.bottom = new fn(n, !1, e.bottomContainer)),
        this.top.sync(this.panels.filter((t) => t.top)),
        this.bottom.sync(this.panels.filter((t) => !t.top));
      for (let t of this.panels) t.dom.classList.add('cm-panel'), t.mount && t.mount();
    }
    update(n) {
      let e = n.state.facet(ul);
      this.top.container != e.topContainer &&
        (this.top.sync([]), (this.top = new fn(n.view, !0, e.topContainer))),
        this.bottom.container != e.bottomContainer &&
          (this.bottom.sync([]), (this.bottom = new fn(n.view, !1, e.bottomContainer))),
        this.top.syncClasses(),
        this.bottom.syncClasses();
      let t = n.state.facet(Ni);
      if (t != this.input) {
        let i = t.filter((a) => a),
          s = [],
          r = [],
          o = [],
          l = [];
        for (let a of i) {
          let h = this.specs.indexOf(a),
            c;
          h < 0 ? ((c = a(n.view)), l.push(c)) : ((c = this.panels[h]), c.update && c.update(n)),
            s.push(c),
            (c.top ? r : o).push(c);
        }
        (this.specs = i), (this.panels = s), this.top.sync(r), this.bottom.sync(o);
        for (let a of l) a.dom.classList.add('cm-panel'), a.mount && a.mount();
      } else for (let i of this.panels) i.update && i.update(n);
    }
    destroy() {
      this.top.sync([]), this.bottom.sync([]);
    }
  },
  {
    provide: (n) =>
      E.scrollMargins.of((e) => {
        let t = e.plugin(n);
        return t && { top: t.top.scrollMargin(), bottom: t.bottom.scrollMargin() };
      }),
  },
);
class fn {
  constructor(e, t, i) {
    (this.view = e),
      (this.top = t),
      (this.container = i),
      (this.dom = void 0),
      (this.classes = ''),
      (this.panels = []),
      this.syncClasses();
  }
  sync(e) {
    for (let t of this.panels) t.destroy && e.indexOf(t) < 0 && t.destroy();
    (this.panels = e), this.syncDOM();
  }
  syncDOM() {
    if (this.panels.length == 0) {
      this.dom && (this.dom.remove(), (this.dom = void 0));
      return;
    }
    if (!this.dom) {
      (this.dom = document.createElement('div')),
        (this.dom.className = this.top ? 'cm-panels cm-panels-top' : 'cm-panels cm-panels-bottom'),
        (this.dom.style[this.top ? 'top' : 'bottom'] = '0');
      let t = this.container || this.view.dom;
      t.insertBefore(this.dom, this.top ? t.firstChild : null);
    }
    let e = this.dom.firstChild;
    for (let t of this.panels)
      if (t.dom.parentNode == this.dom) {
        for (; e != t.dom; ) e = dl(e);
        e = e.nextSibling;
      } else this.dom.insertBefore(t.dom, e);
    for (; e; ) e = dl(e);
  }
  scrollMargin() {
    return !this.dom || this.container
      ? 0
      : Math.max(
          0,
          this.top
            ? this.dom.getBoundingClientRect().bottom -
                Math.max(0, this.view.scrollDOM.getBoundingClientRect().top)
            : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) -
                this.dom.getBoundingClientRect().top,
        );
  }
  syncClasses() {
    if (!(!this.container || this.classes == this.view.themeClasses)) {
      for (let e of this.classes.split(' ')) e && this.container.classList.remove(e);
      for (let e of (this.classes = this.view.themeClasses).split(' '))
        e && this.container.classList.add(e);
    }
  }
}
function dl(n) {
  let e = n.nextSibling;
  return n.remove(), e;
}
const Ni = D.define({ enables: Ch });
class ht extends It {
  compare(e) {
    return this == e || (this.constructor == e.constructor && this.eq(e));
  }
  eq(e) {
    return !1;
  }
  destroy(e) {}
}
ht.prototype.elementClass = '';
ht.prototype.toDOM = void 0;
ht.prototype.mapMode = ye.TrackBefore;
ht.prototype.startSide = ht.prototype.endSide = -1;
ht.prototype.point = !0;
const Dn = D.define(),
  Bd = D.define(),
  Pd = {
    class: '',
    renderEmptyElements: !1,
    elementStyle: '',
    markers: () => W.empty,
    lineMarker: () => null,
    widgetMarker: () => null,
    lineMarkerChange: null,
    initialSpacer: null,
    updateSpacer: null,
    domEventHandlers: {},
  },
  Ai = D.define();
function Rd(n) {
  return [Ah(), Ai.of(Object.assign(Object.assign({}, Pd), n))];
}
const pl = D.define({ combine: (n) => n.some((e) => e) });
function Ah(n) {
  return [Id];
}
const Id = te.fromClass(
  class {
    constructor(n) {
      (this.view = n),
        (this.prevViewport = n.viewport),
        (this.dom = document.createElement('div')),
        (this.dom.className = 'cm-gutters'),
        this.dom.setAttribute('aria-hidden', 'true'),
        (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
        (this.gutters = n.state.facet(Ai).map((e) => new gl(n, e)));
      for (let e of this.gutters) this.dom.appendChild(e.dom);
      (this.fixed = !n.state.facet(pl)),
        this.fixed && (this.dom.style.position = 'sticky'),
        this.syncGutters(!1),
        n.scrollDOM.insertBefore(this.dom, n.contentDOM);
    }
    update(n) {
      if (this.updateGutters(n)) {
        let e = this.prevViewport,
          t = n.view.viewport,
          i = Math.min(e.to, t.to) - Math.max(e.from, t.from);
        this.syncGutters(i < (t.to - t.from) * 0.8);
      }
      n.geometryChanged &&
        (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + 'px'),
        this.view.state.facet(pl) != !this.fixed &&
          ((this.fixed = !this.fixed), (this.dom.style.position = this.fixed ? 'sticky' : '')),
        (this.prevViewport = n.view.viewport);
    }
    syncGutters(n) {
      let e = this.dom.nextSibling;
      n && this.dom.remove();
      let t = W.iter(this.view.state.facet(Dn), this.view.viewport.from),
        i = [],
        s = this.gutters.map((r) => new Nd(r, this.view.viewport, -this.view.documentPadding.top));
      for (let r of this.view.viewportLineBlocks)
        if ((i.length && (i = []), Array.isArray(r.type))) {
          let o = !0;
          for (let l of r.type)
            if (l.type == be.Text && o) {
              xr(t, i, l.from);
              for (let a of s) a.line(this.view, l, i);
              o = !1;
            } else if (l.widget) for (let a of s) a.widget(this.view, l);
        } else if (r.type == be.Text) {
          xr(t, i, r.from);
          for (let o of s) o.line(this.view, r, i);
        } else if (r.widget) for (let o of s) o.widget(this.view, r);
      for (let r of s) r.finish();
      n && this.view.scrollDOM.insertBefore(this.dom, e);
    }
    updateGutters(n) {
      let e = n.startState.facet(Ai),
        t = n.state.facet(Ai),
        i =
          n.docChanged ||
          n.heightChanged ||
          n.viewportChanged ||
          !W.eq(
            n.startState.facet(Dn),
            n.state.facet(Dn),
            n.view.viewport.from,
            n.view.viewport.to,
          );
      if (e == t) for (let s of this.gutters) s.update(n) && (i = !0);
      else {
        i = !0;
        let s = [];
        for (let r of t) {
          let o = e.indexOf(r);
          o < 0
            ? s.push(new gl(this.view, r))
            : (this.gutters[o].update(n), s.push(this.gutters[o]));
        }
        for (let r of this.gutters) r.dom.remove(), s.indexOf(r) < 0 && r.destroy();
        for (let r of s) this.dom.appendChild(r.dom);
        this.gutters = s;
      }
      return i;
    }
    destroy() {
      for (let n of this.gutters) n.destroy();
      this.dom.remove();
    }
  },
  {
    provide: (n) =>
      E.scrollMargins.of((e) => {
        let t = e.plugin(n);
        return !t || t.gutters.length == 0 || !t.fixed
          ? null
          : e.textDirection == J.LTR
            ? { left: t.dom.offsetWidth * e.scaleX }
            : { right: t.dom.offsetWidth * e.scaleX };
      }),
  },
);
function ml(n) {
  return Array.isArray(n) ? n : [n];
}
function xr(n, e, t) {
  for (; n.value && n.from <= t; ) n.from == t && e.push(n.value), n.next();
}
class Nd {
  constructor(e, t, i) {
    (this.gutter = e), (this.height = i), (this.i = 0), (this.cursor = W.iter(e.markers, t.from));
  }
  addElement(e, t, i) {
    let { gutter: s } = this,
      r = (t.top - this.height) / e.scaleY,
      o = t.height / e.scaleY;
    if (this.i == s.elements.length) {
      let l = new Mh(e, o, r, i);
      s.elements.push(l), s.dom.appendChild(l.dom);
    } else s.elements[this.i].update(e, o, r, i);
    (this.height = t.bottom), this.i++;
  }
  line(e, t, i) {
    let s = [];
    xr(this.cursor, s, t.from), i.length && (s = s.concat(i));
    let r = this.gutter.config.lineMarker(e, t, s);
    r && s.unshift(r);
    let o = this.gutter;
    (s.length == 0 && !o.config.renderEmptyElements) || this.addElement(e, t, s);
  }
  widget(e, t) {
    let i = this.gutter.config.widgetMarker(e, t.widget, t),
      s = i ? [i] : null;
    for (let r of e.state.facet(Bd)) {
      let o = r(e, t.widget, t);
      o && (s || (s = [])).push(o);
    }
    s && this.addElement(e, t, s);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let t = e.elements.pop();
      e.dom.removeChild(t.dom), t.destroy();
    }
  }
}
class gl {
  constructor(e, t) {
    (this.view = e),
      (this.config = t),
      (this.elements = []),
      (this.spacer = null),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-gutter' + (this.config.class ? ' ' + this.config.class : ''));
    for (let i in t.domEventHandlers)
      this.dom.addEventListener(i, (s) => {
        let r = s.target,
          o;
        if (r != this.dom && this.dom.contains(r)) {
          for (; r.parentNode != this.dom; ) r = r.parentNode;
          let a = r.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else o = s.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        t.domEventHandlers[i](e, l, s) && s.preventDefault();
      });
    (this.markers = ml(t.markers(e))),
      t.initialSpacer &&
        ((this.spacer = new Mh(e, 0, 0, [t.initialSpacer(e)])),
        this.dom.appendChild(this.spacer.dom),
        (this.spacer.dom.style.cssText += 'visibility: hidden; pointer-events: none'));
  }
  update(e) {
    let t = this.markers;
    if (
      ((this.markers = ml(this.config.markers(e.view))), this.spacer && this.config.updateSpacer)
    ) {
      let s = this.config.updateSpacer(this.spacer.markers[0], e);
      s != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [s]);
    }
    let i = e.view.viewport;
    return (
      !W.eq(this.markers, t, i.from, i.to) ||
      (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1)
    );
  }
  destroy() {
    for (let e of this.elements) e.destroy();
  }
}
class Mh {
  constructor(e, t, i, s) {
    (this.height = -1),
      (this.above = 0),
      (this.markers = []),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-gutterElement'),
      this.update(e, t, i, s);
  }
  update(e, t, i, s) {
    this.height != t && ((this.height = t), (this.dom.style.height = t + 'px')),
      this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
      Hd(this.markers, s) || this.setMarkers(e, s);
  }
  setMarkers(e, t) {
    let i = 'cm-gutterElement',
      s = this.dom.firstChild;
    for (let r = 0, o = 0; ; ) {
      let l = o,
        a = r < t.length ? t[r++] : null,
        h = !1;
      if (a) {
        let c = a.elementClass;
        c && (i += ' ' + c);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            (l = f), (h = !0);
            break;
          }
      } else l = this.markers.length;
      for (; o < l; ) {
        let c = this.markers[o++];
        if (c.toDOM) {
          c.destroy(s);
          let f = s.nextSibling;
          s.remove(), (s = f);
        }
      }
      if (!a) break;
      a.toDOM && (h ? (s = s.nextSibling) : this.dom.insertBefore(a.toDOM(e), s)), h && o++;
    }
    (this.dom.className = i), (this.markers = t);
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function Hd(n, e) {
  if (n.length != e.length) return !1;
  for (let t = 0; t < n.length; t++) if (!n[t].compare(e[t])) return !1;
  return !0;
}
const Fd = D.define(),
  Vd = D.define(),
  jt = D.define({
    combine(n) {
      return nt(
        n,
        { formatNumber: String, domEventHandlers: {} },
        {
          domEventHandlers(e, t) {
            let i = Object.assign({}, e);
            for (let s in t) {
              let r = i[s],
                o = t[s];
              i[s] = r ? (l, a, h) => r(l, a, h) || o(l, a, h) : o;
            }
            return i;
          },
        },
      );
    },
  });
class Cs extends ht {
  constructor(e) {
    super(), (this.number = e);
  }
  eq(e) {
    return this.number == e.number;
  }
  toDOM() {
    return document.createTextNode(this.number);
  }
}
function As(n, e) {
  return n.state.facet(jt).formatNumber(e, n.state);
}
const Wd = Ai.compute([jt], (n) => ({
  class: 'cm-lineNumbers',
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(Fd);
  },
  lineMarker(e, t, i) {
    return i.some((s) => s.toDOM) ? null : new Cs(As(e, e.state.doc.lineAt(t.from).number));
  },
  widgetMarker: (e, t, i) => {
    for (let s of e.state.facet(Vd)) {
      let r = s(e, t, i);
      if (r) return r;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(jt) != e.state.facet(jt),
  initialSpacer(e) {
    return new Cs(As(e, yl(e.state.doc.lines)));
  },
  updateSpacer(e, t) {
    let i = As(t.view, yl(t.view.state.doc.lines));
    return i == e.number ? e : new Cs(i);
  },
  domEventHandlers: n.facet(jt).domEventHandlers,
}));
function zd(n = {}) {
  return [jt.of(n), Ah(), Wd];
}
function yl(n) {
  let e = 9;
  for (; e < n; ) e = e * 10 + 9;
  return e;
}
const qd = new (class extends ht {
    constructor() {
      super(...arguments), (this.elementClass = 'cm-activeLineGutter');
    }
  })(),
  $d = Dn.compute(['selection'], (n) => {
    let e = [],
      t = -1;
    for (let i of n.selection.ranges) {
      let s = n.doc.lineAt(i.head).from;
      s > t && ((t = s), e.push(qd.range(s)));
    }
    return W.of(e);
  });
function Kd() {
  return $d;
}
const jd = 1024;
let _d = 0;
class Ms {
  constructor(e, t) {
    (this.from = e), (this.to = t);
  }
}
class F {
  constructor(e = {}) {
    (this.id = _d++),
      (this.perNode = !!e.perNode),
      (this.deserialize =
        e.deserialize ||
        (() => {
          throw new Error("This node type doesn't define a deserialize function");
        }));
  }
  add(e) {
    if (this.perNode) throw new RangeError("Can't add per-node props to node types");
    return (
      typeof e != 'function' && (e = He.match(e)),
      (t) => {
        let i = e(t);
        return i === void 0 ? null : [this, i];
      }
    );
  }
}
F.closedBy = new F({ deserialize: (n) => n.split(' ') });
F.openedBy = new F({ deserialize: (n) => n.split(' ') });
F.group = new F({ deserialize: (n) => n.split(' ') });
F.isolate = new F({
  deserialize: (n) => {
    if (n && n != 'rtl' && n != 'ltr' && n != 'auto')
      throw new RangeError('Invalid value for isolate: ' + n);
    return n || 'auto';
  },
});
F.contextHash = new F({ perNode: !0 });
F.lookAhead = new F({ perNode: !0 });
F.mounted = new F({ perNode: !0 });
class Vn {
  constructor(e, t, i) {
    (this.tree = e), (this.overlay = t), (this.parser = i);
  }
  static get(e) {
    return e && e.props && e.props[F.mounted.id];
  }
}
const Ud = Object.create(null);
class He {
  constructor(e, t, i, s = 0) {
    (this.name = e), (this.props = t), (this.id = i), (this.flags = s);
  }
  static define(e) {
    let t = e.props && e.props.length ? Object.create(null) : Ud,
      i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0),
      s = new He(e.name || '', t, e.id, i);
    if (e.props) {
      for (let r of e.props)
        if ((Array.isArray(r) || (r = r(s)), r)) {
          if (r[0].perNode) throw new RangeError("Can't store a per-node prop on a node type");
          t[r[0].id] = r[1];
        }
    }
    return s;
  }
  prop(e) {
    return this.props[e.id];
  }
  get isTop() {
    return (this.flags & 1) > 0;
  }
  get isSkipped() {
    return (this.flags & 2) > 0;
  }
  get isError() {
    return (this.flags & 4) > 0;
  }
  get isAnonymous() {
    return (this.flags & 8) > 0;
  }
  is(e) {
    if (typeof e == 'string') {
      if (this.name == e) return !0;
      let t = this.prop(F.group);
      return t ? t.indexOf(e) > -1 : !1;
    }
    return this.id == e;
  }
  static match(e) {
    let t = Object.create(null);
    for (let i in e) for (let s of i.split(' ')) t[s] = e[i];
    return (i) => {
      for (let s = i.prop(F.group), r = -1; r < (s ? s.length : 0); r++) {
        let o = t[r < 0 ? i.name : s[r]];
        if (o) return o;
      }
    };
  }
}
He.none = new He('', Object.create(null), 0, 8);
const un = new WeakMap(),
  bl = new WeakMap();
var he;
(function (n) {
  (n[(n.ExcludeBuffers = 1)] = 'ExcludeBuffers'),
    (n[(n.IncludeAnonymous = 2)] = 'IncludeAnonymous'),
    (n[(n.IgnoreMounts = 4)] = 'IgnoreMounts'),
    (n[(n.IgnoreOverlays = 8)] = 'IgnoreOverlays');
})(he || (he = {}));
class de {
  constructor(e, t, i, s, r) {
    if (
      ((this.type = e),
      (this.children = t),
      (this.positions = i),
      (this.length = s),
      (this.props = null),
      r && r.length)
    ) {
      this.props = Object.create(null);
      for (let [o, l] of r) this.props[typeof o == 'number' ? o : o.id] = l;
    }
  }
  toString() {
    let e = Vn.get(this);
    if (e && !e.overlay) return e.tree.toString();
    let t = '';
    for (let i of this.children) {
      let s = i.toString();
      s && (t && (t += ','), (t += s));
    }
    return this.type.name
      ? (/\W/.test(this.type.name) && !this.type.isError
          ? JSON.stringify(this.type.name)
          : this.type.name) + (t.length ? '(' + t + ')' : '')
      : t;
  }
  cursor(e = 0) {
    return new vr(this.topNode, e);
  }
  cursorAt(e, t = 0, i = 0) {
    let s = un.get(this) || this.topNode,
      r = new vr(s);
    return r.moveTo(e, t), un.set(this, r._tree), r;
  }
  get topNode() {
    return new Ie(this, 0, 0, null);
  }
  resolve(e, t = 0) {
    let i = Hi(un.get(this) || this.topNode, e, t, !1);
    return un.set(this, i), i;
  }
  resolveInner(e, t = 0) {
    let i = Hi(bl.get(this) || this.topNode, e, t, !0);
    return bl.set(this, i), i;
  }
  resolveStack(e, t = 0) {
    return Jd(this, e, t);
  }
  iterate(e) {
    let { enter: t, leave: i, from: s = 0, to: r = this.length } = e,
      o = e.mode || 0,
      l = (o & he.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | he.IncludeAnonymous); ; ) {
      let h = !1;
      if (a.from <= r && a.to >= s && ((!l && a.type.isAnonymous) || t(a) !== !1)) {
        if (a.firstChild()) continue;
        h = !0;
      }
      for (; h && i && (l || !a.type.isAnonymous) && i(a), !a.nextSibling(); ) {
        if (!a.parent()) return;
        h = !0;
      }
    }
  }
  prop(e) {
    return e.perNode ? (this.props ? this.props[e.id] : void 0) : this.type.prop(e);
  }
  get propValues() {
    let e = [];
    if (this.props) for (let t in this.props) e.push([+t, this.props[t]]);
    return e;
  }
  balance(e = {}) {
    return this.children.length <= 8
      ? this
      : Qr(
          He.none,
          this.children,
          this.positions,
          0,
          this.children.length,
          0,
          this.length,
          (t, i, s) => new de(this.type, t, i, s, this.propValues),
          e.makeTree || ((t, i, s) => new de(He.none, t, i, s)),
        );
  }
  static build(e) {
    return Xd(e);
  }
}
de.empty = new de(He.none, [], [], 0);
class Jr {
  constructor(e, t) {
    (this.buffer = e), (this.index = t);
  }
  get id() {
    return this.buffer[this.index - 4];
  }
  get start() {
    return this.buffer[this.index - 3];
  }
  get end() {
    return this.buffer[this.index - 2];
  }
  get size() {
    return this.buffer[this.index - 1];
  }
  get pos() {
    return this.index;
  }
  next() {
    this.index -= 4;
  }
  fork() {
    return new Jr(this.buffer, this.index);
  }
}
class kt {
  constructor(e, t, i) {
    (this.buffer = e), (this.length = t), (this.set = i);
  }
  get type() {
    return He.none;
  }
  toString() {
    let e = [];
    for (let t = 0; t < this.buffer.length; ) e.push(this.childString(t)), (t = this.buffer[t + 3]);
    return e.join(',');
  }
  childString(e) {
    let t = this.buffer[e],
      i = this.buffer[e + 3],
      s = this.set.types[t],
      r = s.name;
    if ((/\W/.test(r) && !s.isError && (r = JSON.stringify(r)), (e += 4), i == e)) return r;
    let o = [];
    for (; e < i; ) o.push(this.childString(e)), (e = this.buffer[e + 3]);
    return r + '(' + o.join(',') + ')';
  }
  findChild(e, t, i, s, r) {
    let { buffer: o } = this,
      l = -1;
    for (let a = e; a != t && !(Eh(r, s, o[a + 1], o[a + 2]) && ((l = a), i > 0)); a = o[a + 3]);
    return l;
  }
  slice(e, t, i) {
    let s = this.buffer,
      r = new Uint16Array(t - e),
      o = 0;
    for (let l = e, a = 0; l < t; ) {
      (r[a++] = s[l++]), (r[a++] = s[l++] - i);
      let h = (r[a++] = s[l++] - i);
      (r[a++] = s[l++] - e), (o = Math.max(o, h));
    }
    return new kt(r, o, this.set);
  }
}
function Eh(n, e, t, i) {
  switch (n) {
    case -2:
      return t < e;
    case -1:
      return i >= e && t < e;
    case 0:
      return t < e && i > e;
    case 1:
      return t <= e && i > e;
    case 2:
      return i > e;
    case 4:
      return !0;
  }
}
function Hi(n, e, t, i) {
  for (
    var s;
    n.from == n.to || (t < 1 ? n.from >= e : n.from > e) || (t > -1 ? n.to <= e : n.to < e);

  ) {
    let o = !i && n instanceof Ie && n.index < 0 ? null : n.parent;
    if (!o) return n;
    n = o;
  }
  let r = i ? 0 : he.IgnoreOverlays;
  if (i)
    for (let o = n, l = o.parent; l; o = l, l = o.parent)
      o instanceof Ie &&
        o.index < 0 &&
        ((s = l.enter(e, t, r)) === null || s === void 0 ? void 0 : s.from) != o.from &&
        (n = l);
  for (;;) {
    let o = n.enter(e, t, r);
    if (!o) return n;
    n = o;
  }
}
class Th {
  cursor(e = 0) {
    return new vr(this, e);
  }
  getChild(e, t = null, i = null) {
    let s = xl(this, e, t, i);
    return s.length ? s[0] : null;
  }
  getChildren(e, t = null, i = null) {
    return xl(this, e, t, i);
  }
  resolve(e, t = 0) {
    return Hi(this, e, t, !1);
  }
  resolveInner(e, t = 0) {
    return Hi(this, e, t, !0);
  }
  matchContext(e) {
    return wr(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let t = this.childBefore(e),
      i = this;
    for (; t; ) {
      let s = t.lastChild;
      if (!s || s.to != t.to) break;
      s.type.isError && s.from == s.to ? ((i = t), (t = s.prevSibling)) : (t = s);
    }
    return i;
  }
  get node() {
    return this;
  }
  get next() {
    return this.parent;
  }
}
class Ie extends Th {
  constructor(e, t, i, s) {
    super(), (this._tree = e), (this.from = t), (this.index = i), (this._parent = s);
  }
  get type() {
    return this._tree.type;
  }
  get name() {
    return this._tree.type.name;
  }
  get to() {
    return this.from + this._tree.length;
  }
  nextChild(e, t, i, s, r = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, h = t > 0 ? l.length : -1; e != h; e += t) {
        let c = l[e],
          f = a[e] + o.from;
        if (Eh(s, i, f, f + c.length)) {
          if (c instanceof kt) {
            if (r & he.ExcludeBuffers) continue;
            let u = c.findChild(0, c.buffer.length, t, i - f, s);
            if (u > -1) return new yt(new Gd(o, c, e, f), null, u);
          } else if (r & he.IncludeAnonymous || !c.type.isAnonymous || Xr(c)) {
            let u;
            if (!(r & he.IgnoreMounts) && (u = Vn.get(c)) && !u.overlay)
              return new Ie(u.tree, f, e, o);
            let d = new Ie(c, f, e, o);
            return r & he.IncludeAnonymous || !d.type.isAnonymous
              ? d
              : d.nextChild(t < 0 ? c.children.length - 1 : 0, t, i, s);
          }
        }
      }
      if (
        r & he.IncludeAnonymous ||
        !o.type.isAnonymous ||
        (o.index >= 0 ? (e = o.index + t) : (e = t < 0 ? -1 : o._parent._tree.children.length),
        (o = o._parent),
        !o)
      )
        return null;
    }
  }
  get firstChild() {
    return this.nextChild(0, 1, 0, 4);
  }
  get lastChild() {
    return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
  }
  childAfter(e) {
    return this.nextChild(0, 1, e, 2);
  }
  childBefore(e) {
    return this.nextChild(this._tree.children.length - 1, -1, e, -2);
  }
  enter(e, t, i = 0) {
    let s;
    if (!(i & he.IgnoreOverlays) && (s = Vn.get(this._tree)) && s.overlay) {
      let r = e - this.from;
      for (let { from: o, to: l } of s.overlay)
        if ((t > 0 ? o <= r : o < r) && (t < 0 ? l >= r : l > r))
          return new Ie(s.tree, s.overlay[0].from + this.from, -1, this);
    }
    return this.nextChild(0, 1, e, t, i);
  }
  nextSignificantParent() {
    let e = this;
    for (; e.type.isAnonymous && e._parent; ) e = e._parent;
    return e;
  }
  get parent() {
    return this._parent ? this._parent.nextSignificantParent() : null;
  }
  get nextSibling() {
    return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
  }
  get prevSibling() {
    return this._parent && this.index >= 0
      ? this._parent.nextChild(this.index - 1, -1, 0, 4)
      : null;
  }
  get tree() {
    return this._tree;
  }
  toTree() {
    return this._tree;
  }
  toString() {
    return this._tree.toString();
  }
}
function xl(n, e, t, i) {
  let s = n.cursor(),
    r = [];
  if (!s.firstChild()) return r;
  if (t != null) {
    for (let o = !1; !o; ) if (((o = s.type.is(t)), !s.nextSibling())) return r;
  }
  for (;;) {
    if (i != null && s.type.is(i)) return r;
    if ((s.type.is(e) && r.push(s.node), !s.nextSibling())) return i == null ? r : [];
  }
}
function wr(n, e, t = e.length - 1) {
  for (let i = n; t >= 0; i = i.parent) {
    if (!i) return !1;
    if (!i.type.isAnonymous) {
      if (e[t] && e[t] != i.name) return !1;
      t--;
    }
  }
  return !0;
}
class Gd {
  constructor(e, t, i, s) {
    (this.parent = e), (this.buffer = t), (this.index = i), (this.start = s);
  }
}
class yt extends Th {
  get name() {
    return this.type.name;
  }
  get from() {
    return this.context.start + this.context.buffer.buffer[this.index + 1];
  }
  get to() {
    return this.context.start + this.context.buffer.buffer[this.index + 2];
  }
  constructor(e, t, i) {
    super(),
      (this.context = e),
      (this._parent = t),
      (this.index = i),
      (this.type = e.buffer.set.types[e.buffer.buffer[i]]);
  }
  child(e, t, i) {
    let { buffer: s } = this.context,
      r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.context.start, i);
    return r < 0 ? null : new yt(this.context, this, r);
  }
  get firstChild() {
    return this.child(1, 0, 4);
  }
  get lastChild() {
    return this.child(-1, 0, 4);
  }
  childAfter(e) {
    return this.child(1, e, 2);
  }
  childBefore(e) {
    return this.child(-1, e, -2);
  }
  enter(e, t, i = 0) {
    if (i & he.ExcludeBuffers) return null;
    let { buffer: s } = this.context,
      r = s.findChild(
        this.index + 4,
        s.buffer[this.index + 3],
        t > 0 ? 1 : -1,
        e - this.context.start,
        t,
      );
    return r < 0 ? null : new yt(this.context, this, r);
  }
  get parent() {
    return this._parent || this.context.parent.nextSignificantParent();
  }
  externalSibling(e) {
    return this._parent ? null : this.context.parent.nextChild(this.context.index + e, e, 0, 4);
  }
  get nextSibling() {
    let { buffer: e } = this.context,
      t = e.buffer[this.index + 3];
    return t < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length)
      ? new yt(this.context, this._parent, t)
      : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context,
      t = this._parent ? this._parent.index + 4 : 0;
    return this.index == t
      ? this.externalSibling(-1)
      : new yt(this.context, this._parent, e.findChild(t, this.index, -1, 0, 4));
  }
  get tree() {
    return null;
  }
  toTree() {
    let e = [],
      t = [],
      { buffer: i } = this.context,
      s = this.index + 4,
      r = i.buffer[this.index + 3];
    if (r > s) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(s, r, o)), t.push(0);
    }
    return new de(this.type, e, t, this.to - this.from);
  }
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function Dh(n) {
  if (!n.length) return null;
  let e = 0,
    t = n[0];
  for (let r = 1; r < n.length; r++) {
    let o = n[r];
    (o.from > t.from || o.to < t.to) && ((t = o), (e = r));
  }
  let i = t instanceof Ie && t.index < 0 ? null : t.parent,
    s = n.slice();
  return i ? (s[e] = i) : s.splice(e, 1), new Yd(s, t);
}
class Yd {
  constructor(e, t) {
    (this.heads = e), (this.node = t);
  }
  get next() {
    return Dh(this.heads);
  }
}
function Jd(n, e, t) {
  let i = n.resolveInner(e, t),
    s = null;
  for (let r = i instanceof Ie ? i : i.context.parent; r; r = r.parent)
    if (r.index < 0) {
      let o = r.parent;
      (s || (s = [i])).push(o.resolve(e, t)), (r = o);
    } else {
      let o = Vn.get(r.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new Ie(o.tree, o.overlay[0].from + r.from, -1, r);
        (s || (s = [i])).push(Hi(l, e, t, !1));
      }
    }
  return s ? Dh(s) : i;
}
class vr {
  get name() {
    return this.type.name;
  }
  constructor(e, t = 0) {
    if (
      ((this.mode = t),
      (this.buffer = null),
      (this.stack = []),
      (this.index = 0),
      (this.bufferNode = null),
      e instanceof Ie)
    )
      this.yieldNode(e);
    else {
      (this._tree = e.context.parent), (this.buffer = e.context);
      for (let i = e._parent; i; i = i._parent) this.stack.unshift(i.index);
      (this.bufferNode = e), this.yieldBuf(e.index);
    }
  }
  yieldNode(e) {
    return e
      ? ((this._tree = e), (this.type = e.type), (this.from = e.from), (this.to = e.to), !0)
      : !1;
  }
  yieldBuf(e, t) {
    this.index = e;
    let { start: i, buffer: s } = this.buffer;
    return (
      (this.type = t || s.set.types[s.buffer[e]]),
      (this.from = i + s.buffer[e + 1]),
      (this.to = i + s.buffer[e + 2]),
      !0
    );
  }
  yield(e) {
    return e
      ? e instanceof Ie
        ? ((this.buffer = null), this.yieldNode(e))
        : ((this.buffer = e.context), this.yieldBuf(e.index, e.type))
      : !1;
  }
  toString() {
    return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
  }
  enterChild(e, t, i) {
    if (!this.buffer)
      return this.yield(
        this._tree.nextChild(e < 0 ? this._tree._tree.children.length - 1 : 0, e, t, i, this.mode),
      );
    let { buffer: s } = this.buffer,
      r = s.findChild(this.index + 4, s.buffer[this.index + 3], e, t - this.buffer.start, i);
    return r < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(r));
  }
  firstChild() {
    return this.enterChild(1, 0, 4);
  }
  lastChild() {
    return this.enterChild(-1, 0, 4);
  }
  childAfter(e) {
    return this.enterChild(1, e, 2);
  }
  childBefore(e) {
    return this.enterChild(-1, e, -2);
  }
  enter(e, t, i = this.mode) {
    return this.buffer
      ? i & he.ExcludeBuffers
        ? !1
        : this.enterChild(1, e, t)
      : this.yield(this._tree.enter(e, t, i));
  }
  parent() {
    if (!this.buffer)
      return this.yieldNode(
        this.mode & he.IncludeAnonymous ? this._tree._parent : this._tree.parent,
      );
    if (this.stack.length) return this.yieldBuf(this.stack.pop());
    let e =
      this.mode & he.IncludeAnonymous
        ? this.buffer.parent
        : this.buffer.parent.nextSignificantParent();
    return (this.buffer = null), this.yieldNode(e);
  }
  sibling(e) {
    if (!this.buffer)
      return this._tree._parent
        ? this.yield(
            this._tree.index < 0
              ? null
              : this._tree._parent.nextChild(this._tree.index + e, e, 0, 4, this.mode),
          )
        : !1;
    let { buffer: t } = this.buffer,
      i = this.stack.length - 1;
    if (e < 0) {
      let s = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != s) return this.yieldBuf(t.findChild(s, this.index, -1, 0, 4));
    } else {
      let s = t.buffer[this.index + 3];
      if (s < (i < 0 ? t.buffer.length : t.buffer[this.stack[i] + 3])) return this.yieldBuf(s);
    }
    return i < 0
      ? this.yield(this.buffer.parent.nextChild(this.buffer.index + e, e, 0, 4, this.mode))
      : !1;
  }
  nextSibling() {
    return this.sibling(1);
  }
  prevSibling() {
    return this.sibling(-1);
  }
  atLastNode(e) {
    let t,
      i,
      { buffer: s } = this;
    if (s) {
      if (e > 0) {
        if (this.index < s.buffer.buffer.length) return !1;
      } else
        for (let r = 0; r < this.index; r++) if (s.buffer.buffer[r + 3] < this.index) return !1;
      ({ index: t, parent: i } = s);
    } else ({ index: t, _parent: i } = this._tree);
    for (; i; { index: t, _parent: i } = i)
      if (t > -1)
        for (let r = t + e, o = e < 0 ? -1 : i._tree.children.length; r != o; r += e) {
          let l = i._tree.children[r];
          if (this.mode & he.IncludeAnonymous || l instanceof kt || !l.type.isAnonymous || Xr(l))
            return !1;
        }
    return !0;
  }
  move(e, t) {
    if (t && this.enterChild(e, 0, 4)) return !0;
    for (;;) {
      if (this.sibling(e)) return !0;
      if (this.atLastNode(e) || !this.parent()) return !1;
    }
  }
  next(e = !0) {
    return this.move(1, e);
  }
  prev(e = !0) {
    return this.move(-1, e);
  }
  moveTo(e, t = 0) {
    for (
      ;
      (this.from == this.to ||
        (t < 1 ? this.from >= e : this.from > e) ||
        (t > -1 ? this.to <= e : this.to < e)) &&
      this.parent();

    );
    for (; this.enterChild(1, e, t); );
    return this;
  }
  get node() {
    if (!this.buffer) return this._tree;
    let e = this.bufferNode,
      t = null,
      i = 0;
    if (e && e.context == this.buffer)
      e: for (let s = this.index, r = this.stack.length; r >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == s) {
            if (s == this.index) return o;
            (t = o), (i = r + 1);
            break e;
          }
        s = this.stack[--r];
      }
    for (let s = i; s < this.stack.length; s++) t = new yt(this.buffer, t, this.stack[s]);
    return (this.bufferNode = new yt(this.buffer, t, this.index));
  }
  get tree() {
    return this.buffer ? null : this._tree._tree;
  }
  iterate(e, t) {
    for (let i = 0; ; ) {
      let s = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (s = !0);
      }
      for (;;) {
        if ((s && t && t(this), (s = this.type.isAnonymous), !i)) return;
        if (this.nextSibling()) break;
        this.parent(), i--, (s = !0);
      }
    }
  }
  matchContext(e) {
    if (!this.buffer) return wr(this.node.parent, e);
    let { buffer: t } = this.buffer,
      { types: i } = t.set;
    for (let s = e.length - 1, r = this.stack.length - 1; s >= 0; r--) {
      if (r < 0) return wr(this._tree, e, s);
      let o = i[t.buffer[this.stack[r]]];
      if (!o.isAnonymous) {
        if (e[s] && e[s] != o.name) return !1;
        s--;
      }
    }
    return !0;
  }
}
function Xr(n) {
  return n.children.some((e) => e instanceof kt || !e.type.isAnonymous || Xr(e));
}
function Xd(n) {
  var e;
  let {
      buffer: t,
      nodeSet: i,
      maxBufferLength: s = jd,
      reused: r = [],
      minRepeatType: o = i.types.length,
    } = n,
    l = Array.isArray(t) ? new Jr(t, t.length) : t,
    a = i.types,
    h = 0,
    c = 0;
  function f(w, S, A, R, H, K) {
    let { id: N, start: L, end: $, size: q } = l,
      G = c,
      ge = h;
    for (; q < 0; )
      if ((l.next(), q == -1)) {
        let rt = r[N];
        A.push(rt), R.push(L - w);
        return;
      } else if (q == -3) {
        h = N;
        return;
      } else if (q == -4) {
        c = N;
        return;
      } else throw new RangeError(`Unrecognized record size: ${q}`);
    let Ae = a[N],
      qe,
      oe,
      De = L - w;
    if ($ - L <= s && (oe = g(l.pos - S, H))) {
      let rt = new Uint16Array(oe.size - oe.skip),
        Oe = l.pos - oe.size,
        $e = rt.length;
      for (; l.pos > Oe; ) $e = y(oe.start, rt, $e);
      (qe = new kt(rt, $ - oe.start, i)), (De = oe.start - w);
    } else {
      let rt = l.pos - q;
      l.next();
      let Oe = [],
        $e = [],
        Mt = N >= o ? N : -1,
        zt = 0,
        Ji = $;
      for (; l.pos > rt; )
        Mt >= 0 && l.id == Mt && l.size >= 0
          ? (l.end <= Ji - s &&
              (p(Oe, $e, L, zt, l.end, Ji, Mt, G, ge), (zt = Oe.length), (Ji = l.end)),
            l.next())
          : K > 2500
            ? u(L, rt, Oe, $e)
            : f(L, rt, Oe, $e, Mt, K + 1);
      if (
        (Mt >= 0 && zt > 0 && zt < Oe.length && p(Oe, $e, L, zt, L, Ji, Mt, G, ge),
        Oe.reverse(),
        $e.reverse(),
        Mt > -1 && zt > 0)
      ) {
        let po = d(Ae, ge);
        qe = Qr(Ae, Oe, $e, 0, Oe.length, 0, $ - L, po, po);
      } else qe = m(Ae, Oe, $e, $ - L, G - $, ge);
    }
    A.push(qe), R.push(De);
  }
  function u(w, S, A, R) {
    let H = [],
      K = 0,
      N = -1;
    for (; l.pos > S; ) {
      let { id: L, start: $, end: q, size: G } = l;
      if (G > 4) l.next();
      else {
        if (N > -1 && $ < N) break;
        N < 0 && (N = q - s), H.push(L, $, q), K++, l.next();
      }
    }
    if (K) {
      let L = new Uint16Array(K * 4),
        $ = H[H.length - 2];
      for (let q = H.length - 3, G = 0; q >= 0; q -= 3)
        (L[G++] = H[q]), (L[G++] = H[q + 1] - $), (L[G++] = H[q + 2] - $), (L[G++] = G);
      A.push(new kt(L, H[2] - $, i)), R.push($ - w);
    }
  }
  function d(w, S) {
    return (A, R, H) => {
      let K = 0,
        N = A.length - 1,
        L,
        $;
      if (N >= 0 && (L = A[N]) instanceof de) {
        if (!N && L.type == w && L.length == H) return L;
        ($ = L.prop(F.lookAhead)) && (K = R[N] + L.length + $);
      }
      return m(w, A, R, H, K, S);
    };
  }
  function p(w, S, A, R, H, K, N, L, $) {
    let q = [],
      G = [];
    for (; w.length > R; ) q.push(w.pop()), G.push(S.pop() + A - H);
    w.push(m(i.types[N], q, G, K - H, L - K, $)), S.push(H - A);
  }
  function m(w, S, A, R, H, K, N) {
    if (K) {
      let L = [F.contextHash, K];
      N = N ? [L].concat(N) : [L];
    }
    if (H > 25) {
      let L = [F.lookAhead, H];
      N = N ? [L].concat(N) : [L];
    }
    return new de(w, S, A, R, N);
  }
  function g(w, S) {
    let A = l.fork(),
      R = 0,
      H = 0,
      K = 0,
      N = A.end - s,
      L = { size: 0, start: 0, skip: 0 };
    e: for (let $ = A.pos - w; A.pos > $; ) {
      let q = A.size;
      if (A.id == S && q >= 0) {
        (L.size = R), (L.start = H), (L.skip = K), (K += 4), (R += 4), A.next();
        continue;
      }
      let G = A.pos - q;
      if (q < 0 || G < $ || A.start < N) break;
      let ge = A.id >= o ? 4 : 0,
        Ae = A.start;
      for (A.next(); A.pos > G; ) {
        if (A.size < 0)
          if (A.size == -3) ge += 4;
          else break e;
        else A.id >= o && (ge += 4);
        A.next();
      }
      (H = Ae), (R += q), (K += ge);
    }
    return (
      (S < 0 || R == w) && ((L.size = R), (L.start = H), (L.skip = K)), L.size > 4 ? L : void 0
    );
  }
  function y(w, S, A) {
    let { id: R, start: H, end: K, size: N } = l;
    if ((l.next(), N >= 0 && R < o)) {
      let L = A;
      if (N > 4) {
        let $ = l.pos - (N - 4);
        for (; l.pos > $; ) A = y(w, S, A);
      }
      (S[--A] = L), (S[--A] = K - w), (S[--A] = H - w), (S[--A] = R);
    } else N == -3 ? (h = R) : N == -4 && (c = R);
    return A;
  }
  let x = [],
    v = [];
  for (; l.pos > 0; ) f(n.start || 0, n.bufferStart || 0, x, v, -1, 0);
  let k = (e = n.length) !== null && e !== void 0 ? e : x.length ? v[0] + x[0].length : 0;
  return new de(a[n.topID], x.reverse(), v.reverse(), k);
}
const wl = new WeakMap();
function On(n, e) {
  if (!n.isAnonymous || e instanceof kt || e.type != n) return 1;
  let t = wl.get(e);
  if (t == null) {
    t = 1;
    for (let i of e.children) {
      if (i.type != n || !(i instanceof de)) {
        t = 1;
        break;
      }
      t += On(n, i);
    }
    wl.set(e, t);
  }
  return t;
}
function Qr(n, e, t, i, s, r, o, l, a) {
  let h = 0;
  for (let p = i; p < s; p++) h += On(n, e[p]);
  let c = Math.ceil((h * 1.5) / 8),
    f = [],
    u = [];
  function d(p, m, g, y, x) {
    for (let v = g; v < y; ) {
      let k = v,
        w = m[v],
        S = On(n, p[v]);
      for (v++; v < y; v++) {
        let A = On(n, p[v]);
        if (S + A >= c) break;
        S += A;
      }
      if (v == k + 1) {
        if (S > c) {
          let A = p[k];
          d(A.children, A.positions, 0, A.children.length, m[k] + x);
          continue;
        }
        f.push(p[k]);
      } else {
        let A = m[v - 1] + p[v - 1].length - w;
        f.push(Qr(n, p, m, k, v, w, A, null, a));
      }
      u.push(w + x - r);
    }
  }
  return d(e, t, i, s, 0), (l || a)(f, u, o);
}
class Pt {
  constructor(e, t, i, s, r = !1, o = !1) {
    (this.from = e),
      (this.to = t),
      (this.tree = i),
      (this.offset = s),
      (this.open = (r ? 1 : 0) | (o ? 2 : 0));
  }
  get openStart() {
    return (this.open & 1) > 0;
  }
  get openEnd() {
    return (this.open & 2) > 0;
  }
  static addTree(e, t = [], i = !1) {
    let s = [new Pt(0, e.length, e, 0, !1, i)];
    for (let r of t) r.to > e.length && s.push(r);
    return s;
  }
  static applyChanges(e, t, i = 128) {
    if (!t.length) return e;
    let s = [],
      r = 1,
      o = e.length ? e[0] : null;
    for (let l = 0, a = 0, h = 0; ; l++) {
      let c = l < t.length ? t[l] : null,
        f = c ? c.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let u = o;
          if (a >= u.from || f <= u.to || h) {
            let d = Math.max(u.from, a) - h,
              p = Math.min(u.to, f) - h;
            u = d >= p ? null : new Pt(d, p, u.tree, u.offset + h, l > 0, !!c);
          }
          if ((u && s.push(u), o.to > f)) break;
          o = r < e.length ? e[r++] : null;
        }
      if (!c) break;
      (a = c.toA), (h = c.toA - c.toB);
    }
    return s;
  }
}
class Qd {
  startParse(e, t, i) {
    return (
      typeof e == 'string' && (e = new Zd(e)),
      (i = i
        ? i.length
          ? i.map((s) => new Ms(s.from, s.to))
          : [new Ms(0, 0)]
        : [new Ms(0, e.length)]),
      this.createParse(e, t || [], i)
    );
  }
  parse(e, t, i) {
    let s = this.startParse(e, t, i);
    for (;;) {
      let r = s.advance();
      if (r) return r;
    }
  }
}
class Zd {
  constructor(e) {
    this.string = e;
  }
  get length() {
    return this.string.length;
  }
  chunk(e) {
    return this.string.slice(e);
  }
  get lineChunks() {
    return !1;
  }
  read(e, t) {
    return this.string.slice(e, t);
  }
}
new F({ perNode: !0 });
let ep = 0;
class Le {
  constructor(e, t, i, s) {
    (this.name = e), (this.set = t), (this.base = i), (this.modified = s), (this.id = ep++);
  }
  toString() {
    let { name: e } = this;
    for (let t of this.modified) t.name && (e = `${t.name}(${e})`);
    return e;
  }
  static define(e, t) {
    let i = typeof e == 'string' ? e : '?';
    if ((e instanceof Le && (t = e), t != null && t.base))
      throw new Error('Can not derive from a modified tag');
    let s = new Le(i, [], null, []);
    if ((s.set.push(s), t)) for (let r of t.set) s.set.push(r);
    return s;
  }
  static defineModifier(e) {
    let t = new Wn(e);
    return (i) =>
      i.modified.indexOf(t) > -1
        ? i
        : Wn.get(
            i.base || i,
            i.modified.concat(t).sort((s, r) => s.id - r.id),
          );
  }
}
let tp = 0;
class Wn {
  constructor(e) {
    (this.name = e), (this.instances = []), (this.id = tp++);
  }
  static get(e, t) {
    if (!t.length) return e;
    let i = t[0].instances.find((l) => l.base == e && ip(t, l.modified));
    if (i) return i;
    let s = [],
      r = new Le(e.name, s, e, t);
    for (let l of t) l.instances.push(r);
    let o = np(t);
    for (let l of e.set) if (!l.modified.length) for (let a of o) s.push(Wn.get(l, a));
    return r;
  }
}
function ip(n, e) {
  return n.length == e.length && n.every((t, i) => t == e[i]);
}
function np(n) {
  let e = [[]];
  for (let t = 0; t < n.length; t++)
    for (let i = 0, s = e.length; i < s; i++) e.push(e[i].concat(n[t]));
  return e.sort((t, i) => i.length - t.length);
}
function sp(n) {
  let e = Object.create(null);
  for (let t in n) {
    let i = n[t];
    Array.isArray(i) || (i = [i]);
    for (let s of t.split(' '))
      if (s) {
        let r = [],
          o = 2,
          l = s;
        for (let f = 0; ; ) {
          if (l == '...' && f > 0 && f + 3 == s.length) {
            o = 1;
            break;
          }
          let u = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!u) throw new RangeError('Invalid path: ' + s);
          if (
            (r.push(u[0] == '*' ? '' : u[0][0] == '"' ? JSON.parse(u[0]) : u[0]),
            (f += u[0].length),
            f == s.length)
          )
            break;
          let d = s[f++];
          if (f == s.length && d == '!') {
            o = 0;
            break;
          }
          if (d != '/') throw new RangeError('Invalid path: ' + s);
          l = s.slice(f);
        }
        let a = r.length - 1,
          h = r[a];
        if (!h) throw new RangeError('Invalid path: ' + s);
        let c = new zn(i, o, a > 0 ? r.slice(0, a) : null);
        e[h] = c.sort(e[h]);
      }
  }
  return Oh.add(e);
}
const Oh = new F();
class zn {
  constructor(e, t, i, s) {
    (this.tags = e), (this.mode = t), (this.context = i), (this.next = s);
  }
  get opaque() {
    return this.mode == 0;
  }
  get inherit() {
    return this.mode == 1;
  }
  sort(e) {
    return !e || e.depth < this.depth ? ((this.next = e), this) : ((e.next = this.sort(e.next)), e);
  }
  get depth() {
    return this.context ? this.context.length : 0;
  }
}
zn.empty = new zn([], 2, null);
function Lh(n, e) {
  let t = Object.create(null);
  for (let r of n)
    if (!Array.isArray(r.tag)) t[r.tag.id] = r.class;
    else for (let o of r.tag) t[o.id] = r.class;
  let { scope: i, all: s = null } = e || {};
  return {
    style: (r) => {
      let o = s;
      for (let l of r)
        for (let a of l.set) {
          let h = t[a.id];
          if (h) {
            o = o ? o + ' ' + h : h;
            break;
          }
        }
      return o;
    },
    scope: i,
  };
}
function rp(n, e) {
  let t = null;
  for (let i of n) {
    let s = i.style(e);
    s && (t = t ? t + ' ' + s : s);
  }
  return t;
}
function op(n, e, t, i = 0, s = n.length) {
  let r = new lp(i, Array.isArray(e) ? e : [e], t);
  r.highlightRange(n.cursor(), i, s, '', r.highlighters), r.flush(s);
}
class lp {
  constructor(e, t, i) {
    (this.at = e), (this.highlighters = t), (this.span = i), (this.class = '');
  }
  startSpan(e, t) {
    t != this.class && (this.flush(e), e > this.at && (this.at = e), (this.class = t));
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, t, i, s, r) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= t) return;
    o.isTop && (r = this.highlighters.filter((d) => !d.scope || d.scope(o)));
    let h = s,
      c = ap(e) || zn.empty,
      f = rp(r, c.tags);
    if (
      (f && (h && (h += ' '), (h += f), c.mode == 1 && (s += (s ? ' ' : '') + f)),
      this.startSpan(Math.max(t, l), h),
      c.opaque)
    )
      return;
    let u = e.tree && e.tree.prop(F.mounted);
    if (u && u.overlay) {
      let d = e.node.enter(u.overlay[0].from + l, 1),
        p = this.highlighters.filter((g) => !g.scope || g.scope(u.tree.type)),
        m = e.firstChild();
      for (let g = 0, y = l; ; g++) {
        let x = g < u.overlay.length ? u.overlay[g] : null,
          v = x ? x.from + l : a,
          k = Math.max(t, y),
          w = Math.min(i, v);
        if (k < w && m)
          for (
            ;
            e.from < w &&
            (this.highlightRange(e, k, w, s, r),
            this.startSpan(Math.min(w, e.to), h),
            !(e.to >= v || !e.nextSibling()));

          );
        if (!x || v > i) break;
        (y = x.to + l),
          y > t &&
            (this.highlightRange(d.cursor(), Math.max(t, x.from + l), Math.min(i, y), '', p),
            this.startSpan(Math.min(i, y), h));
      }
      m && e.parent();
    } else if (e.firstChild()) {
      u && (s = '');
      do
        if (!(e.to <= t)) {
          if (e.from >= i) break;
          this.highlightRange(e, t, i, s, r), this.startSpan(Math.min(i, e.to), h);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function ap(n) {
  let e = n.type.prop(Oh);
  for (; e && e.context && !n.matchContext(e.context); ) e = e.next;
  return e || null;
}
const C = Le.define,
  dn = C(),
  ft = C(),
  vl = C(ft),
  kl = C(ft),
  ut = C(),
  pn = C(ut),
  Es = C(ut),
  Ue = C(),
  Et = C(Ue),
  je = C(),
  _e = C(),
  kr = C(),
  fi = C(kr),
  mn = C(),
  M = {
    comment: dn,
    lineComment: C(dn),
    blockComment: C(dn),
    docComment: C(dn),
    name: ft,
    variableName: C(ft),
    typeName: vl,
    tagName: C(vl),
    propertyName: kl,
    attributeName: C(kl),
    className: C(ft),
    labelName: C(ft),
    namespace: C(ft),
    macroName: C(ft),
    literal: ut,
    string: pn,
    docString: C(pn),
    character: C(pn),
    attributeValue: C(pn),
    number: Es,
    integer: C(Es),
    float: C(Es),
    bool: C(ut),
    regexp: C(ut),
    escape: C(ut),
    color: C(ut),
    url: C(ut),
    keyword: je,
    self: C(je),
    null: C(je),
    atom: C(je),
    unit: C(je),
    modifier: C(je),
    operatorKeyword: C(je),
    controlKeyword: C(je),
    definitionKeyword: C(je),
    moduleKeyword: C(je),
    operator: _e,
    derefOperator: C(_e),
    arithmeticOperator: C(_e),
    logicOperator: C(_e),
    bitwiseOperator: C(_e),
    compareOperator: C(_e),
    updateOperator: C(_e),
    definitionOperator: C(_e),
    typeOperator: C(_e),
    controlOperator: C(_e),
    punctuation: kr,
    separator: C(kr),
    bracket: fi,
    angleBracket: C(fi),
    squareBracket: C(fi),
    paren: C(fi),
    brace: C(fi),
    content: Ue,
    heading: Et,
    heading1: C(Et),
    heading2: C(Et),
    heading3: C(Et),
    heading4: C(Et),
    heading5: C(Et),
    heading6: C(Et),
    contentSeparator: C(Ue),
    list: C(Ue),
    quote: C(Ue),
    emphasis: C(Ue),
    strong: C(Ue),
    link: C(Ue),
    monospace: C(Ue),
    strikethrough: C(Ue),
    inserted: C(),
    deleted: C(),
    changed: C(),
    invalid: C(),
    meta: mn,
    documentMeta: C(mn),
    annotation: C(mn),
    processingInstruction: C(mn),
    definition: Le.defineModifier('definition'),
    constant: Le.defineModifier('constant'),
    function: Le.defineModifier('function'),
    standard: Le.defineModifier('standard'),
    local: Le.defineModifier('local'),
    special: Le.defineModifier('special'),
  };
for (let n in M) {
  let e = M[n];
  e instanceof Le && (e.name = n);
}
Lh([
  { tag: M.link, class: 'tok-link' },
  { tag: M.heading, class: 'tok-heading' },
  { tag: M.emphasis, class: 'tok-emphasis' },
  { tag: M.strong, class: 'tok-strong' },
  { tag: M.keyword, class: 'tok-keyword' },
  { tag: M.atom, class: 'tok-atom' },
  { tag: M.bool, class: 'tok-bool' },
  { tag: M.url, class: 'tok-url' },
  { tag: M.labelName, class: 'tok-labelName' },
  { tag: M.inserted, class: 'tok-inserted' },
  { tag: M.deleted, class: 'tok-deleted' },
  { tag: M.literal, class: 'tok-literal' },
  { tag: M.string, class: 'tok-string' },
  { tag: M.number, class: 'tok-number' },
  { tag: [M.regexp, M.escape, M.special(M.string)], class: 'tok-string2' },
  { tag: M.variableName, class: 'tok-variableName' },
  { tag: M.local(M.variableName), class: 'tok-variableName tok-local' },
  { tag: M.definition(M.variableName), class: 'tok-variableName tok-definition' },
  { tag: M.special(M.variableName), class: 'tok-variableName2' },
  { tag: M.definition(M.propertyName), class: 'tok-propertyName tok-definition' },
  { tag: M.typeName, class: 'tok-typeName' },
  { tag: M.namespace, class: 'tok-namespace' },
  { tag: M.className, class: 'tok-className' },
  { tag: M.macroName, class: 'tok-macroName' },
  { tag: M.propertyName, class: 'tok-propertyName' },
  { tag: M.operator, class: 'tok-operator' },
  { tag: M.comment, class: 'tok-comment' },
  { tag: M.meta, class: 'tok-meta' },
  { tag: M.invalid, class: 'tok-invalid' },
  { tag: M.punctuation, class: 'tok-punctuation' },
]);
var Ts;
const wi = new F(),
  hp = new F();
class Xe {
  constructor(e, t, i = [], s = '') {
    (this.data = e),
      (this.name = s),
      V.prototype.hasOwnProperty('tree') ||
        Object.defineProperty(V.prototype, 'tree', {
          get() {
            return pe(this);
          },
        }),
      (this.parser = t),
      (this.extension = [
        St.of(this),
        V.languageData.of((r, o, l) => {
          let a = Sl(r, o, l),
            h = a.type.prop(wi);
          if (!h) return [];
          let c = r.facet(h),
            f = a.type.prop(hp);
          if (f) {
            let u = a.resolve(o - a.from, l);
            for (let d of f)
              if (d.test(u, r)) {
                let p = r.facet(d.facet);
                return d.type == 'replace' ? p : p.concat(c);
              }
          }
          return c;
        }),
      ].concat(i));
  }
  isActiveAt(e, t, i = -1) {
    return Sl(e, t, i).type.prop(wi) == this.data;
  }
  findRegions(e) {
    let t = e.facet(St);
    if ((t == null ? void 0 : t.data) == this.data) return [{ from: 0, to: e.doc.length }];
    if (!t || !t.allowsNesting) return [];
    let i = [],
      s = (r, o) => {
        if (r.prop(wi) == this.data) {
          i.push({ from: o, to: o + r.length });
          return;
        }
        let l = r.prop(F.mounted);
        if (l) {
          if (l.tree.prop(wi) == this.data) {
            if (l.overlay) for (let a of l.overlay) i.push({ from: a.from + o, to: a.to + o });
            else i.push({ from: o, to: o + r.length });
            return;
          } else if (l.overlay) {
            let a = i.length;
            if ((s(l.tree, l.overlay[0].from + o), i.length > a)) return;
          }
        }
        for (let a = 0; a < r.children.length; a++) {
          let h = r.children[a];
          h instanceof de && s(h, r.positions[a] + o);
        }
      };
    return s(pe(e), 0), i;
  }
  get allowsNesting() {
    return !0;
  }
}
Xe.setState = P.define();
function Sl(n, e, t) {
  let i = n.facet(St),
    s = pe(n).topNode;
  if (!i || i.allowsNesting)
    for (let r = s; r; r = r.enter(e, t, he.ExcludeBuffers)) r.type.isTop && (s = r);
  return s;
}
function pe(n) {
  let e = n.field(Xe.state, !1);
  return e ? e.tree : de.empty;
}
class cp {
  constructor(e) {
    (this.doc = e), (this.cursorPos = 0), (this.string = ''), (this.cursor = e.iter());
  }
  get length() {
    return this.doc.length;
  }
  syncTo(e) {
    return (
      (this.string = this.cursor.next(e - this.cursorPos).value),
      (this.cursorPos = e + this.string.length),
      this.cursorPos - this.string.length
    );
  }
  chunk(e) {
    return this.syncTo(e), this.string;
  }
  get lineChunks() {
    return !0;
  }
  read(e, t) {
    let i = this.cursorPos - this.string.length;
    return e < i || t >= this.cursorPos
      ? this.doc.sliceString(e, t)
      : this.string.slice(e - i, t - i);
  }
}
let ui = null;
class qn {
  constructor(e, t, i = [], s, r, o, l, a) {
    (this.parser = e),
      (this.state = t),
      (this.fragments = i),
      (this.tree = s),
      (this.treeLen = r),
      (this.viewport = o),
      (this.skipped = l),
      (this.scheduleOn = a),
      (this.parse = null),
      (this.tempSkipped = []);
  }
  static create(e, t, i) {
    return new qn(e, t, [], de.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new cp(this.state.doc), this.fragments);
  }
  work(e, t) {
    return (
      t != null && t >= this.state.doc.length && (t = void 0),
      this.tree != de.empty && this.isDone(t ?? this.state.doc.length)
        ? (this.takeTree(), !0)
        : this.withContext(() => {
            var i;
            if (typeof e == 'number') {
              let s = Date.now() + e;
              e = () => Date.now() > s;
            }
            for (
              this.parse || (this.parse = this.startParse()),
                t != null &&
                  (this.parse.stoppedAt == null || this.parse.stoppedAt > t) &&
                  t < this.state.doc.length &&
                  this.parse.stopAt(t);
              ;

            ) {
              let s = this.parse.advance();
              if (s)
                if (
                  ((this.fragments = this.withoutTempSkipped(
                    Pt.addTree(s, this.fragments, this.parse.stoppedAt != null),
                  )),
                  (this.treeLen =
                    (i = this.parse.stoppedAt) !== null && i !== void 0
                      ? i
                      : this.state.doc.length),
                  (this.tree = s),
                  (this.parse = null),
                  this.treeLen < (t ?? this.state.doc.length))
                )
                  this.parse = this.startParse();
                else return !0;
              if (e()) return !1;
            }
          })
    );
  }
  takeTree() {
    let e, t;
    this.parse &&
      (e = this.parse.parsedPos) >= this.treeLen &&
      ((this.parse.stoppedAt == null || this.parse.stoppedAt > e) && this.parse.stopAt(e),
      this.withContext(() => {
        for (; !(t = this.parse.advance()); );
      }),
      (this.treeLen = e),
      (this.tree = t),
      (this.fragments = this.withoutTempSkipped(Pt.addTree(this.tree, this.fragments, !0))),
      (this.parse = null));
  }
  withContext(e) {
    let t = ui;
    ui = this;
    try {
      return e();
    } finally {
      ui = t;
    }
  }
  withoutTempSkipped(e) {
    for (let t; (t = this.tempSkipped.pop()); ) e = Cl(e, t.from, t.to);
    return e;
  }
  changes(e, t) {
    let { fragments: i, tree: s, treeLen: r, viewport: o, skipped: l } = this;
    if ((this.takeTree(), !e.empty)) {
      let a = [];
      if (
        (e.iterChangedRanges((h, c, f, u) => a.push({ fromA: h, toA: c, fromB: f, toB: u })),
        (i = Pt.applyChanges(i, a)),
        (s = de.empty),
        (r = 0),
        (o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }),
        this.skipped.length)
      ) {
        l = [];
        for (let h of this.skipped) {
          let c = e.mapPos(h.from, 1),
            f = e.mapPos(h.to, -1);
          c < f && l.push({ from: c, to: f });
        }
      }
    }
    return new qn(this.parser, t, i, s, r, o, l, this.scheduleOn);
  }
  updateViewport(e) {
    if (this.viewport.from == e.from && this.viewport.to == e.to) return !1;
    this.viewport = e;
    let t = this.skipped.length;
    for (let i = 0; i < this.skipped.length; i++) {
      let { from: s, to: r } = this.skipped[i];
      s < e.to &&
        r > e.from &&
        ((this.fragments = Cl(this.fragments, s, r)), this.skipped.splice(i--, 1));
    }
    return this.skipped.length >= t ? !1 : (this.reset(), !0);
  }
  reset() {
    this.parse && (this.takeTree(), (this.parse = null));
  }
  skipUntilInView(e, t) {
    this.skipped.push({ from: e, to: t });
  }
  static getSkippingParser(e) {
    return new (class extends Qd {
      createParse(t, i, s) {
        let r = s[0].from,
          o = s[s.length - 1].to;
        return {
          parsedPos: r,
          advance() {
            let a = ui;
            if (a) {
              for (let h of s) a.tempSkipped.push(h);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return (this.parsedPos = o), new de(He.none, [], [], o - r);
          },
          stoppedAt: null,
          stopAt() {},
        };
      }
    })();
  }
  isDone(e) {
    e = Math.min(e, this.state.doc.length);
    let t = this.fragments;
    return this.treeLen >= e && t.length && t[0].from == 0 && t[0].to >= e;
  }
  static get() {
    return ui;
  }
}
function Cl(n, e, t) {
  return Pt.applyChanges(n, [{ fromA: e, toA: t, fromB: e, toB: t }]);
}
class ii {
  constructor(e) {
    (this.context = e), (this.tree = e.tree);
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree) return this;
    let t = this.context.changes(e.changes, e.state),
      i =
        this.context.treeLen == e.startState.doc.length
          ? void 0
          : Math.max(e.changes.mapPos(this.context.treeLen), t.viewport.to);
    return t.work(20, i) || t.takeTree(), new ii(t);
  }
  static init(e) {
    let t = Math.min(3e3, e.doc.length),
      i = qn.create(e.facet(St).parser, e, { from: 0, to: t });
    return i.work(20, t) || i.takeTree(), new ii(i);
  }
}
Xe.state = re.define({
  create: ii.init,
  update(n, e) {
    for (let t of e.effects) if (t.is(Xe.setState)) return t.value;
    return e.startState.facet(St) != e.state.facet(St) ? ii.init(e.state) : n.apply(e);
  },
});
let Bh = (n) => {
  let e = setTimeout(() => n(), 500);
  return () => clearTimeout(e);
};
typeof requestIdleCallback < 'u' &&
  (Bh = (n) => {
    let e = -1,
      t = setTimeout(() => {
        e = requestIdleCallback(n, { timeout: 400 });
      }, 100);
    return () => (e < 0 ? clearTimeout(t) : cancelIdleCallback(e));
  });
const Ds =
    typeof navigator < 'u' &&
    !((Ts = navigator.scheduling) === null || Ts === void 0) &&
    Ts.isInputPending
      ? () => navigator.scheduling.isInputPending()
      : null,
  fp = te.fromClass(
    class {
      constructor(e) {
        (this.view = e),
          (this.working = null),
          (this.workScheduled = 0),
          (this.chunkEnd = -1),
          (this.chunkBudget = -1),
          (this.work = this.work.bind(this)),
          this.scheduleWork();
      }
      update(e) {
        let t = this.view.state.field(Xe.state).context;
        (t.updateViewport(e.view.viewport) || this.view.viewport.to > t.treeLen) &&
          this.scheduleWork(),
          (e.docChanged || e.selectionSet) &&
            (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()),
          this.checkAsyncSchedule(t);
      }
      scheduleWork() {
        if (this.working) return;
        let { state: e } = this.view,
          t = e.field(Xe.state);
        (t.tree != t.context.tree || !t.context.isDone(e.doc.length)) &&
          (this.working = Bh(this.work));
      }
      work(e) {
        this.working = null;
        let t = Date.now();
        if (
          (this.chunkEnd < t &&
            (this.chunkEnd < 0 || this.view.hasFocus) &&
            ((this.chunkEnd = t + 3e4), (this.chunkBudget = 3e3)),
          this.chunkBudget <= 0)
        )
          return;
        let {
            state: i,
            viewport: { to: s },
          } = this.view,
          r = i.field(Xe.state);
        if (r.tree == r.context.tree && r.context.isDone(s + 1e5)) return;
        let o =
            Date.now() +
            Math.min(this.chunkBudget, 100, e && !Ds ? Math.max(25, e.timeRemaining() - 5) : 1e9),
          l = r.context.treeLen < s && i.doc.length > s + 1e3,
          a = r.context.work(() => (Ds && Ds()) || Date.now() > o, s + (l ? 0 : 1e5));
        (this.chunkBudget -= Date.now() - t),
          (a || this.chunkBudget <= 0) &&
            (r.context.takeTree(),
            this.view.dispatch({ effects: Xe.setState.of(new ii(r.context)) })),
          this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(),
          this.checkAsyncSchedule(r.context);
      }
      checkAsyncSchedule(e) {
        e.scheduleOn &&
          (this.workScheduled++,
          e.scheduleOn
            .then(() => this.scheduleWork())
            .catch((t) => Se(this.view.state, t))
            .then(() => this.workScheduled--),
          (e.scheduleOn = null));
      }
      destroy() {
        this.working && this.working();
      }
      isWorking() {
        return !!(this.working || this.workScheduled > 0);
      }
    },
    {
      eventHandlers: {
        focus() {
          this.scheduleWork();
        },
      },
    },
  ),
  St = D.define({
    combine(n) {
      return n.length ? n[0] : null;
    },
    enables: (n) => [
      Xe.state,
      fp,
      E.contentAttributes.compute([n], (e) => {
        let t = e.facet(n);
        return t && t.name ? { 'data-language': t.name } : {};
      }),
    ],
  }),
  up = D.define(),
  Zr = D.define({
    combine: (n) => {
      if (!n.length) return '  ';
      let e = n[0];
      if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
        throw new Error('Invalid indent unit: ' + JSON.stringify(n[0]));
      return e;
    },
  });
function $n(n) {
  let e = n.facet(Zr);
  return e.charCodeAt(0) == 9 ? n.tabSize * e.length : e.length;
}
function Fi(n, e) {
  let t = '',
    i = n.tabSize,
    s = n.facet(Zr)[0];
  if (s == '	') {
    for (; e >= i; ) (t += '	'), (e -= i);
    s = ' ';
  }
  for (let r = 0; r < e; r++) t += s;
  return t;
}
function eo(n, e) {
  n instanceof V && (n = new rs(n));
  for (let i of n.state.facet(up)) {
    let s = i(n, e);
    if (s !== void 0) return s;
  }
  let t = pe(n.state);
  return t.length >= e ? pp(n, t, e) : null;
}
class rs {
  constructor(e, t = {}) {
    (this.state = e), (this.options = t), (this.unit = $n(e));
  }
  lineAt(e, t = 1) {
    let i = this.state.doc.lineAt(e),
      { simulateBreak: s, simulateDoubleBreak: r } = this.options;
    return s != null && s >= i.from && s <= i.to
      ? r && s == e
        ? { text: '', from: e }
        : (t < 0 ? s < e : s <= e)
          ? { text: i.text.slice(s - i.from), from: s }
          : { text: i.text.slice(0, s - i.from), from: i.from }
      : i;
  }
  textAfterPos(e, t = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak) return '';
    let { text: i, from: s } = this.lineAt(e, t);
    return i.slice(e - s, Math.min(i.length, e + 100 - s));
  }
  column(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t),
      r = this.countColumn(i, e - s),
      o = this.options.overrideIndentation ? this.options.overrideIndentation(s) : -1;
    return o > -1 && (r += o - this.countColumn(i, i.search(/\S|$/))), r;
  }
  countColumn(e, t = e.length) {
    return ri(e, this.state.tabSize, t);
  }
  lineIndent(e, t = 1) {
    let { text: i, from: s } = this.lineAt(e, t),
      r = this.options.overrideIndentation;
    if (r) {
      let o = r(s);
      if (o > -1) return o;
    }
    return this.countColumn(i, i.search(/\S|$/));
  }
  get simulatedBreak() {
    return this.options.simulateBreak || null;
  }
}
const dp = new F();
function pp(n, e, t) {
  let i = e.resolveStack(t),
    s = e.resolveInner(t, -1).resolve(t, 0).enterUnfinishedNodesBefore(t);
  if (s != i.node) {
    let r = [];
    for (let o = s; o && !(o.from == i.node.from && o.type == i.node.type); o = o.parent) r.push(o);
    for (let o = r.length - 1; o >= 0; o--) i = { node: r[o], next: i };
  }
  return Ph(i, n, t);
}
function Ph(n, e, t) {
  for (let i = n; i; i = i.next) {
    let s = gp(i.node);
    if (s) return s(to.create(e, t, i));
  }
  return 0;
}
function mp(n) {
  return n.pos == n.options.simulateBreak && n.options.simulateDoubleBreak;
}
function gp(n) {
  let e = n.type.prop(dp);
  if (e) return e;
  let t = n.firstChild,
    i;
  if (t && (i = t.type.prop(F.closedBy))) {
    let s = n.lastChild,
      r = s && i.indexOf(s.name) > -1;
    return (o) => wp(o, !0, 1, void 0, r && !mp(o) ? s.from : void 0);
  }
  return n.parent == null ? yp : null;
}
function yp() {
  return 0;
}
class to extends rs {
  constructor(e, t, i) {
    super(e.state, e.options), (this.base = e), (this.pos = t), (this.context = i);
  }
  get node() {
    return this.context.node;
  }
  static create(e, t, i) {
    return new to(e, t, i);
  }
  get textAfter() {
    return this.textAfterPos(this.pos);
  }
  get baseIndent() {
    return this.baseIndentFor(this.node);
  }
  baseIndentFor(e) {
    let t = this.state.doc.lineAt(e.from);
    for (;;) {
      let i = e.resolve(t.from);
      for (; i.parent && i.parent.from == i.from; ) i = i.parent;
      if (bp(i, e)) break;
      t = this.state.doc.lineAt(i.from);
    }
    return this.lineIndent(t.from);
  }
  continue() {
    return Ph(this.context.next, this.base, this.pos);
  }
}
function bp(n, e) {
  for (let t = e; t; t = t.parent) if (n == t) return !0;
  return !1;
}
function xp(n) {
  let e = n.node,
    t = e.childAfter(e.from),
    i = e.lastChild;
  if (!t) return null;
  let s = n.options.simulateBreak,
    r = n.state.doc.lineAt(t.from),
    o = s == null || s <= r.from ? r.to : Math.min(r.to, s);
  for (let l = t.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i) return null;
    if (!a.type.isSkipped) {
      if (a.from >= o) return null;
      let h = /^ */.exec(r.text.slice(t.to - r.from))[0].length;
      return { from: t.from, to: t.to + h };
    }
    l = a.to;
  }
}
function wp(n, e, t, i, s) {
  let r = n.textAfter,
    o = r.match(/^\s*/)[0].length,
    l = (i && r.slice(o, o + i.length) == i) || s == n.pos + o,
    a = xp(n);
  return a ? (l ? n.column(a.from) : n.column(a.to)) : n.baseIndent + (l ? 0 : n.unit * t);
}
const vp = 200;
function kp() {
  return V.transactionFilter.of((n) => {
    if (!n.docChanged || (!n.isUserEvent('input.type') && !n.isUserEvent('input.complete')))
      return n;
    let e = n.startState.languageDataAt('indentOnInput', n.startState.selection.main.head);
    if (!e.length) return n;
    let t = n.newDoc,
      { head: i } = n.newSelection.main,
      s = t.lineAt(i);
    if (i > s.from + vp) return n;
    let r = t.sliceString(s.from, i);
    if (!e.some((h) => h.test(r))) return n;
    let { state: o } = n,
      l = -1,
      a = [];
    for (let { head: h } of o.selection.ranges) {
      let c = o.doc.lineAt(h);
      if (c.from == l) continue;
      l = c.from;
      let f = eo(o, c.from);
      if (f == null) continue;
      let u = /^\s*/.exec(c.text)[0],
        d = Fi(o, f);
      u != d && a.push({ from: c.from, to: c.from + u.length, insert: d });
    }
    return a.length ? [n, { changes: a, sequential: !0 }] : n;
  });
}
const Sp = D.define(),
  Cp = new F();
function Ap(n, e, t) {
  let i = pe(n);
  if (i.length < t) return null;
  let s = i.resolveStack(t, 1),
    r = null;
  for (let o = s; o; o = o.next) {
    let l = o.node;
    if (l.to <= t || l.from > t) continue;
    if (r && l.from < e) break;
    let a = l.type.prop(Cp);
    if (a && (l.to < i.length - 50 || i.length == n.doc.length || !Mp(l))) {
      let h = a(l, n);
      h && h.from <= t && h.from >= e && h.to > t && (r = h);
    }
  }
  return r;
}
function Mp(n) {
  let e = n.lastChild;
  return e && e.to == n.to && e.type.isError;
}
function Kn(n, e, t) {
  for (let i of n.facet(Sp)) {
    let s = i(n, e, t);
    if (s) return s;
  }
  return Ap(n, e, t);
}
function Rh(n, e) {
  let t = e.mapPos(n.from, 1),
    i = e.mapPos(n.to, -1);
  return t >= i ? void 0 : { from: t, to: i };
}
const os = P.define({ map: Rh }),
  Ui = P.define({ map: Rh });
function Ih(n) {
  let e = [];
  for (let { head: t } of n.state.selection.ranges)
    e.some((i) => i.from <= t && i.to >= t) || e.push(n.lineBlockAt(t));
  return e;
}
const Vt = re.define({
  create() {
    return O.none;
  },
  update(n, e) {
    n = n.map(e.changes);
    for (let t of e.effects)
      if (t.is(os) && !Ep(n, t.value.from, t.value.to)) {
        let { preparePlaceholder: i } = e.state.facet(Fh),
          s = i ? O.replace({ widget: new Rp(i(e.state, t.value)) }) : Al;
        n = n.update({ add: [s.range(t.value.from, t.value.to)] });
      } else
        t.is(Ui) &&
          (n = n.update({
            filter: (i, s) => t.value.from != i || t.value.to != s,
            filterFrom: t.value.from,
            filterTo: t.value.to,
          }));
    if (e.selection) {
      let t = !1,
        { head: i } = e.selection.main;
      n.between(i, i, (s, r) => {
        s < i && r > i && (t = !0);
      }),
        t && (n = n.update({ filterFrom: i, filterTo: i, filter: (s, r) => r <= i || s >= i }));
    }
    return n;
  },
  provide: (n) => E.decorations.from(n),
  toJSON(n, e) {
    let t = [];
    return (
      n.between(0, e.doc.length, (i, s) => {
        t.push(i, s);
      }),
      t
    );
  },
  fromJSON(n) {
    if (!Array.isArray(n) || n.length % 2) throw new RangeError('Invalid JSON for fold state');
    let e = [];
    for (let t = 0; t < n.length; ) {
      let i = n[t++],
        s = n[t++];
      if (typeof i != 'number' || typeof s != 'number')
        throw new RangeError('Invalid JSON for fold state');
      e.push(Al.range(i, s));
    }
    return O.set(e, !0);
  },
});
function jn(n, e, t) {
  var i;
  let s = null;
  return (
    (i = n.field(Vt, !1)) === null ||
      i === void 0 ||
      i.between(e, t, (r, o) => {
        (!s || s.from > r) && (s = { from: r, to: o });
      }),
    s
  );
}
function Ep(n, e, t) {
  let i = !1;
  return (
    n.between(e, e, (s, r) => {
      s == e && r == t && (i = !0);
    }),
    i
  );
}
function Nh(n, e) {
  return n.field(Vt, !1) ? e : e.concat(P.appendConfig.of(Vh()));
}
const Tp = (n) => {
    for (let e of Ih(n)) {
      let t = Kn(n.state, e.from, e.to);
      if (t) return n.dispatch({ effects: Nh(n.state, [os.of(t), Hh(n, t)]) }), !0;
    }
    return !1;
  },
  Dp = (n) => {
    if (!n.state.field(Vt, !1)) return !1;
    let e = [];
    for (let t of Ih(n)) {
      let i = jn(n.state, t.from, t.to);
      i && e.push(Ui.of(i), Hh(n, i, !1));
    }
    return e.length && n.dispatch({ effects: e }), e.length > 0;
  };
function Hh(n, e, t = !0) {
  let i = n.state.doc.lineAt(e.from).number,
    s = n.state.doc.lineAt(e.to).number;
  return E.announce.of(
    `${n.state.phrase(t ? 'Folded lines' : 'Unfolded lines')} ${i} ${n.state.phrase('to')} ${s}.`,
  );
}
const Op = (n) => {
    let { state: e } = n,
      t = [];
    for (let i = 0; i < e.doc.length; ) {
      let s = n.lineBlockAt(i),
        r = Kn(e, s.from, s.to);
      r && t.push(os.of(r)), (i = (r ? n.lineBlockAt(r.to) : s).to + 1);
    }
    return t.length && n.dispatch({ effects: Nh(n.state, t) }), !!t.length;
  },
  Lp = (n) => {
    let e = n.state.field(Vt, !1);
    if (!e || !e.size) return !1;
    let t = [];
    return (
      e.between(0, n.state.doc.length, (i, s) => {
        t.push(Ui.of({ from: i, to: s }));
      }),
      n.dispatch({ effects: t }),
      !0
    );
  },
  Bp = [
    { key: 'Ctrl-Shift-[', mac: 'Cmd-Alt-[', run: Tp },
    { key: 'Ctrl-Shift-]', mac: 'Cmd-Alt-]', run: Dp },
    { key: 'Ctrl-Alt-[', run: Op },
    { key: 'Ctrl-Alt-]', run: Lp },
  ],
  Pp = { placeholderDOM: null, preparePlaceholder: null, placeholderText: '…' },
  Fh = D.define({
    combine(n) {
      return nt(n, Pp);
    },
  });
function Vh(n) {
  return [Vt, Hp];
}
function Wh(n, e) {
  let { state: t } = n,
    i = t.facet(Fh),
    s = (o) => {
      let l = n.lineBlockAt(n.posAtDOM(o.target)),
        a = jn(n.state, l.from, l.to);
      a && n.dispatch({ effects: Ui.of(a) }), o.preventDefault();
    };
  if (i.placeholderDOM) return i.placeholderDOM(n, s, e);
  let r = document.createElement('span');
  return (
    (r.textContent = i.placeholderText),
    r.setAttribute('aria-label', t.phrase('folded code')),
    (r.title = t.phrase('unfold')),
    (r.className = 'cm-foldPlaceholder'),
    (r.onclick = s),
    r
  );
}
const Al = O.replace({
  widget: new (class extends Ct {
    toDOM(n) {
      return Wh(n, null);
    }
  })(),
});
class Rp extends Ct {
  constructor(e) {
    super(), (this.value = e);
  }
  eq(e) {
    return this.value == e.value;
  }
  toDOM(e) {
    return Wh(e, this.value);
  }
}
const Ip = {
  openText: '⌄',
  closedText: '›',
  markerDOM: null,
  domEventHandlers: {},
  foldingChanged: () => !1,
};
class Os extends ht {
  constructor(e, t) {
    super(), (this.config = e), (this.open = t);
  }
  eq(e) {
    return this.config == e.config && this.open == e.open;
  }
  toDOM(e) {
    if (this.config.markerDOM) return this.config.markerDOM(this.open);
    let t = document.createElement('span');
    return (
      (t.textContent = this.open ? this.config.openText : this.config.closedText),
      (t.title = e.state.phrase(this.open ? 'Fold line' : 'Unfold line')),
      t
    );
  }
}
function Np(n = {}) {
  let e = Object.assign(Object.assign({}, Ip), n),
    t = new Os(e, !0),
    i = new Os(e, !1),
    s = te.fromClass(
      class {
        constructor(o) {
          (this.from = o.viewport.from), (this.markers = this.buildMarkers(o));
        }
        update(o) {
          (o.docChanged ||
            o.viewportChanged ||
            o.startState.facet(St) != o.state.facet(St) ||
            o.startState.field(Vt, !1) != o.state.field(Vt, !1) ||
            pe(o.startState) != pe(o.state) ||
            e.foldingChanged(o)) &&
            (this.markers = this.buildMarkers(o.view));
        }
        buildMarkers(o) {
          let l = new tt();
          for (let a of o.viewportLineBlocks) {
            let h = jn(o.state, a.from, a.to) ? i : Kn(o.state, a.from, a.to) ? t : null;
            h && l.add(a.from, a.from, h);
          }
          return l.finish();
        }
      },
    ),
    { domEventHandlers: r } = e;
  return [
    s,
    Rd({
      class: 'cm-foldGutter',
      markers(o) {
        var l;
        return ((l = o.plugin(s)) === null || l === void 0 ? void 0 : l.markers) || W.empty;
      },
      initialSpacer() {
        return new Os(e, !1);
      },
      domEventHandlers: Object.assign(Object.assign({}, r), {
        click: (o, l, a) => {
          if (r.click && r.click(o, l, a)) return !0;
          let h = jn(o.state, l.from, l.to);
          if (h) return o.dispatch({ effects: Ui.of(h) }), !0;
          let c = Kn(o.state, l.from, l.to);
          return c ? (o.dispatch({ effects: os.of(c) }), !0) : !1;
        },
      }),
    }),
    Vh(),
  ];
}
const Hp = E.baseTheme({
  '.cm-foldPlaceholder': {
    backgroundColor: '#eee',
    border: '1px solid #ddd',
    color: '#888',
    borderRadius: '.2em',
    margin: '0 1px',
    padding: '0 1px',
    cursor: 'pointer',
  },
  '.cm-foldGutter span': { padding: '0 1px', cursor: 'pointer' },
});
class ls {
  constructor(e, t) {
    this.specs = e;
    let i;
    function s(l) {
      let a = xt.newName();
      return ((i || (i = Object.create(null)))['.' + a] = l), a;
    }
    const r = typeof t.all == 'string' ? t.all : t.all ? s(t.all) : void 0,
      o = t.scope;
    (this.scope = o instanceof Xe ? (l) => l.prop(wi) == o.data : o ? (l) => l == o : void 0),
      (this.style = Lh(
        e.map((l) => ({ tag: l.tag, class: l.class || s(Object.assign({}, l, { tag: null })) })),
        { all: r },
      ).style),
      (this.module = i ? new xt(i) : null),
      (this.themeType = t.themeType);
  }
  static define(e, t) {
    return new ls(e, t || {});
  }
}
const Sr = D.define(),
  zh = D.define({
    combine(n) {
      return n.length ? [n[0]] : null;
    },
  });
function Ls(n) {
  let e = n.facet(Sr);
  return e.length ? e : n.facet(zh);
}
function Fp(n, e) {
  let t = [Wp],
    i;
  return (
    n instanceof ls && (n.module && t.push(E.styleModule.of(n.module)), (i = n.themeType)),
    e != null && e.fallback
      ? t.push(zh.of(n))
      : i
        ? t.push(
            Sr.computeN([E.darkTheme], (s) => (s.facet(E.darkTheme) == (i == 'dark') ? [n] : [])),
          )
        : t.push(Sr.of(n)),
    t
  );
}
class Vp {
  constructor(e) {
    (this.markCache = Object.create(null)),
      (this.tree = pe(e.state)),
      (this.decorations = this.buildDeco(e, Ls(e.state))),
      (this.decoratedTo = e.viewport.to);
  }
  update(e) {
    let t = pe(e.state),
      i = Ls(e.state),
      s = i != Ls(e.startState),
      { viewport: r } = e.view,
      o = e.changes.mapPos(this.decoratedTo, 1);
    t.length < r.to && !s && t.type == this.tree.type && o >= r.to
      ? ((this.decorations = this.decorations.map(e.changes)), (this.decoratedTo = o))
      : (t != this.tree || e.viewportChanged || s) &&
        ((this.tree = t),
        (this.decorations = this.buildDeco(e.view, i)),
        (this.decoratedTo = r.to));
  }
  buildDeco(e, t) {
    if (!t || !this.tree.length) return O.none;
    let i = new tt();
    for (let { from: s, to: r } of e.visibleRanges)
      op(
        this.tree,
        t,
        (o, l, a) => {
          i.add(o, l, this.markCache[a] || (this.markCache[a] = O.mark({ class: a })));
        },
        s,
        r,
      );
    return i.finish();
  }
}
const Wp = Wt.high(te.fromClass(Vp, { decorations: (n) => n.decorations })),
  zp = ls.define([
    { tag: M.meta, color: '#404740' },
    { tag: M.link, textDecoration: 'underline' },
    { tag: M.heading, textDecoration: 'underline', fontWeight: 'bold' },
    { tag: M.emphasis, fontStyle: 'italic' },
    { tag: M.strong, fontWeight: 'bold' },
    { tag: M.strikethrough, textDecoration: 'line-through' },
    { tag: M.keyword, color: '#708' },
    { tag: [M.atom, M.bool, M.url, M.contentSeparator, M.labelName], color: '#219' },
    { tag: [M.literal, M.inserted], color: '#164' },
    { tag: [M.string, M.deleted], color: '#a11' },
    { tag: [M.regexp, M.escape, M.special(M.string)], color: '#e40' },
    { tag: M.definition(M.variableName), color: '#00f' },
    { tag: M.local(M.variableName), color: '#30a' },
    { tag: [M.typeName, M.namespace], color: '#085' },
    { tag: M.className, color: '#167' },
    { tag: [M.special(M.variableName), M.macroName], color: '#256' },
    { tag: M.definition(M.propertyName), color: '#00c' },
    { tag: M.comment, color: '#940' },
    { tag: M.invalid, color: '#f00' },
  ]),
  qp = E.baseTheme({
    '&.cm-focused .cm-matchingBracket': { backgroundColor: '#328c8252' },
    '&.cm-focused .cm-nonmatchingBracket': { backgroundColor: '#bb555544' },
  }),
  qh = 1e4,
  $h = '()[]{}',
  Kh = D.define({
    combine(n) {
      return nt(n, { afterCursor: !0, brackets: $h, maxScanDistance: qh, renderMatch: jp });
    },
  }),
  $p = O.mark({ class: 'cm-matchingBracket' }),
  Kp = O.mark({ class: 'cm-nonmatchingBracket' });
function jp(n) {
  let e = [],
    t = n.matched ? $p : Kp;
  return (
    e.push(t.range(n.start.from, n.start.to)), n.end && e.push(t.range(n.end.from, n.end.to)), e
  );
}
const _p = re.define({
    create() {
      return O.none;
    },
    update(n, e) {
      if (!e.docChanged && !e.selection) return n;
      let t = [],
        i = e.state.facet(Kh);
      for (let s of e.state.selection.ranges) {
        if (!s.empty) continue;
        let r =
          Qe(e.state, s.head, -1, i) ||
          (s.head > 0 && Qe(e.state, s.head - 1, 1, i)) ||
          (i.afterCursor &&
            (Qe(e.state, s.head, 1, i) ||
              (s.head < e.state.doc.length && Qe(e.state, s.head + 1, -1, i))));
        r && (t = t.concat(i.renderMatch(r, e.state)));
      }
      return O.set(t, !0);
    },
    provide: (n) => E.decorations.from(n),
  }),
  Up = [_p, qp];
function Gp(n = {}) {
  return [Kh.of(n), Up];
}
const Yp = new F();
function Cr(n, e, t) {
  let i = n.prop(e < 0 ? F.openedBy : F.closedBy);
  if (i) return i;
  if (n.name.length == 1) {
    let s = t.indexOf(n.name);
    if (s > -1 && s % 2 == (e < 0 ? 1 : 0)) return [t[s + e]];
  }
  return null;
}
function Ar(n) {
  let e = n.type.prop(Yp);
  return e ? e(n.node) : n;
}
function Qe(n, e, t, i = {}) {
  let s = i.maxScanDistance || qh,
    r = i.brackets || $h,
    o = pe(n),
    l = o.resolveInner(e, t);
  for (let a = l; a; a = a.parent) {
    let h = Cr(a.type, t, r);
    if (h && a.from < a.to) {
      let c = Ar(a);
      if (c && (t > 0 ? e >= c.from && e < c.to : e > c.from && e <= c.to))
        return Jp(n, e, t, a, c, h, r);
    }
  }
  return Xp(n, e, t, o, l.type, s, r);
}
function Jp(n, e, t, i, s, r, o) {
  let l = i.parent,
    a = { from: s.from, to: s.to },
    h = 0,
    c = l == null ? void 0 : l.cursor();
  if (c && (t < 0 ? c.childBefore(i.from) : c.childAfter(i.to)))
    do
      if (t < 0 ? c.to <= i.from : c.from >= i.to) {
        if (h == 0 && r.indexOf(c.type.name) > -1 && c.from < c.to) {
          let f = Ar(c);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (Cr(c.type, t, o)) h++;
        else if (Cr(c.type, -t, o)) {
          if (h == 0) {
            let f = Ar(c);
            return {
              start: a,
              end: f && f.from < f.to ? { from: f.from, to: f.to } : void 0,
              matched: !1,
            };
          }
          h--;
        }
      }
    while (t < 0 ? c.prevSibling() : c.nextSibling());
  return { start: a, matched: !1 };
}
function Xp(n, e, t, i, s, r, o) {
  let l = t < 0 ? n.sliceDoc(e - 1, e) : n.sliceDoc(e, e + 1),
    a = o.indexOf(l);
  if (a < 0 || (a % 2 == 0) != t > 0) return null;
  let h = { from: t < 0 ? e - 1 : e, to: t > 0 ? e + 1 : e },
    c = n.doc.iterRange(e, t > 0 ? n.doc.length : 0),
    f = 0;
  for (let u = 0; !c.next().done && u <= r; ) {
    let d = c.value;
    t < 0 && (u += d.length);
    let p = e + u * t;
    for (let m = t > 0 ? 0 : d.length - 1, g = t > 0 ? d.length : -1; m != g; m += t) {
      let y = o.indexOf(d[m]);
      if (!(y < 0 || i.resolveInner(p + m, 1).type != s))
        if ((y % 2 == 0) == t > 0) f++;
        else {
          if (f == 1)
            return { start: h, end: { from: p + m, to: p + m + 1 }, matched: y >> 1 == a >> 1 };
          f--;
        }
    }
    t > 0 && (u += d.length);
  }
  return c.done ? { start: h, matched: !1 } : null;
}
const Qp = Object.create(null),
  Ml = [He.none],
  El = [],
  Tl = Object.create(null),
  Zp = Object.create(null);
for (let [n, e] of [
  ['variable', 'variableName'],
  ['variable-2', 'variableName.special'],
  ['string-2', 'string.special'],
  ['def', 'variableName.definition'],
  ['tag', 'tagName'],
  ['attribute', 'attributeName'],
  ['type', 'typeName'],
  ['builtin', 'variableName.standard'],
  ['qualifier', 'modifier'],
  ['error', 'invalid'],
  ['header', 'heading'],
  ['property', 'propertyName'],
])
  Zp[n] = em(Qp, e);
function Bs(n, e) {
  El.indexOf(n) > -1 || (El.push(n), console.warn(e));
}
function em(n, e) {
  let t = [];
  for (let l of e.split(' ')) {
    let a = [];
    for (let h of l.split('.')) {
      let c = n[h] || M[h];
      c
        ? typeof c == 'function'
          ? a.length
            ? (a = a.map(c))
            : Bs(h, `Modifier ${h} used at start of tag`)
          : a.length
            ? Bs(h, `Tag ${h} used as modifier`)
            : (a = Array.isArray(c) ? c : [c])
        : Bs(h, `Unknown highlighting tag ${h}`);
    }
    for (let h of a) t.push(h);
  }
  if (!t.length) return 0;
  let i = e.replace(/ /g, '_'),
    s = i + ' ' + t.map((l) => l.id),
    r = Tl[s];
  if (r) return r.id;
  let o = (Tl[s] = He.define({ id: Ml.length, name: i, props: [sp({ [i]: t })] }));
  return Ml.push(o), o.id;
}
J.RTL, J.LTR;
const tm = (n) => {
  let { state: e } = n,
    t = e.doc.lineAt(e.selection.main.from),
    i = no(n.state, t.from);
  return i.line ? im(n) : i.block ? sm(n) : !1;
};
function io(n, e) {
  return ({ state: t, dispatch: i }) => {
    if (t.readOnly) return !1;
    let s = n(e, t);
    return s ? (i(t.update(s)), !0) : !1;
  };
}
const im = io(lm, 0),
  nm = io(jh, 0),
  sm = io((n, e) => jh(n, e, om(e)), 0);
function no(n, e) {
  let t = n.languageDataAt('commentTokens', e, 1);
  return t.length ? t[0] : {};
}
const di = 50;
function rm(n, { open: e, close: t }, i, s) {
  let r = n.sliceDoc(i - di, i),
    o = n.sliceDoc(s, s + di),
    l = /\s*$/.exec(r)[0].length,
    a = /^\s*/.exec(o)[0].length,
    h = r.length - l;
  if (r.slice(h - e.length, h) == e && o.slice(a, a + t.length) == t)
    return { open: { pos: i - l, margin: l && 1 }, close: { pos: s + a, margin: a && 1 } };
  let c, f;
  s - i <= 2 * di
    ? (c = f = n.sliceDoc(i, s))
    : ((c = n.sliceDoc(i, i + di)), (f = n.sliceDoc(s - di, s)));
  let u = /^\s*/.exec(c)[0].length,
    d = /\s*$/.exec(f)[0].length,
    p = f.length - d - t.length;
  return c.slice(u, u + e.length) == e && f.slice(p, p + t.length) == t
    ? {
        open: { pos: i + u + e.length, margin: /\s/.test(c.charAt(u + e.length)) ? 1 : 0 },
        close: { pos: s - d - t.length, margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0 },
      }
    : null;
}
function om(n) {
  let e = [];
  for (let t of n.selection.ranges) {
    let i = n.doc.lineAt(t.from),
      s = t.to <= i.to ? i : n.doc.lineAt(t.to);
    s.from > i.from && s.from == t.to && (s = t.to == i.to + 1 ? i : n.doc.lineAt(t.to - 1));
    let r = e.length - 1;
    r >= 0 && e[r].to > i.from
      ? (e[r].to = s.to)
      : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: s.to });
  }
  return e;
}
function jh(n, e, t = e.selection.ranges) {
  let i = t.map((r) => no(e, r.from).block);
  if (!i.every((r) => r)) return null;
  let s = t.map((r, o) => rm(e, i[o], r.from, r.to));
  if (n != 2 && !s.every((r) => r))
    return {
      changes: e.changes(
        t.map((r, o) =>
          s[o]
            ? []
            : [
                { from: r.from, insert: i[o].open + ' ' },
                { from: r.to, insert: ' ' + i[o].close },
              ],
        ),
      ),
    };
  if (n != 1 && s.some((r) => r)) {
    let r = [];
    for (let o = 0, l; o < s.length; o++)
      if ((l = s[o])) {
        let a = i[o],
          { open: h, close: c } = l;
        r.push(
          { from: h.pos - a.open.length, to: h.pos + h.margin },
          { from: c.pos - c.margin, to: c.pos + a.close.length },
        );
      }
    return { changes: r };
  }
  return null;
}
function lm(n, e, t = e.selection.ranges) {
  let i = [],
    s = -1;
  for (let { from: r, to: o } of t) {
    let l = i.length,
      a = 1e9,
      h = no(e, r).line;
    if (h) {
      for (let c = r; c <= o; ) {
        let f = e.doc.lineAt(c);
        if (f.from > s && (r == o || o > f.from)) {
          s = f.from;
          let u = /^\s*/.exec(f.text)[0].length,
            d = u == f.length,
            p = f.text.slice(u, u + h.length) == h ? u : -1;
          u < f.text.length && u < a && (a = u),
            i.push({ line: f, comment: p, token: h, indent: u, empty: d, single: !1 });
        }
        c = f.to + 1;
      }
      if (a < 1e9)
        for (let c = l; c < i.length; c++) i[c].indent < i[c].line.text.length && (i[c].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (n != 2 && i.some((r) => r.comment < 0 && (!r.empty || r.single))) {
    let r = [];
    for (let { line: l, token: a, indent: h, empty: c, single: f } of i)
      (f || !c) && r.push({ from: l.from + h, insert: a + ' ' });
    let o = e.changes(r);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (n != 1 && i.some((r) => r.comment >= 0)) {
    let r = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let h = o.from + l,
          c = h + a.length;
        o.text[c - o.from] == ' ' && c++, r.push({ from: h, to: c });
      }
    return { changes: r };
  }
  return null;
}
const Mr = ct.define(),
  am = ct.define(),
  hm = D.define(),
  _h = D.define({
    combine(n) {
      return nt(
        n,
        { minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t },
        {
          minDepth: Math.max,
          newGroupDelay: Math.min,
          joinToEvent: (e, t) => (i, s) => e(i, s) || t(i, s),
        },
      );
    },
  }),
  Uh = re.define({
    create() {
      return Ze.empty;
    },
    update(n, e) {
      let t = e.state.facet(_h),
        i = e.annotation(Mr);
      if (i) {
        let a = Ce.fromTransaction(e, i.selection),
          h = i.side,
          c = h == 0 ? n.undone : n.done;
        return (
          a ? (c = _n(c, c.length, t.minDepth, a)) : (c = Jh(c, e.startState.selection)),
          new Ze(h == 0 ? i.rest : c, h == 0 ? c : i.rest)
        );
      }
      let s = e.annotation(am);
      if (
        ((s == 'full' || s == 'before') && (n = n.isolate()), e.annotation(ne.addToHistory) === !1)
      )
        return e.changes.empty ? n : n.addMapping(e.changes.desc);
      let r = Ce.fromTransaction(e),
        o = e.annotation(ne.time),
        l = e.annotation(ne.userEvent);
      return (
        r
          ? (n = n.addChanges(r, o, l, t, e))
          : e.selection && (n = n.addSelection(e.startState.selection, o, l, t.newGroupDelay)),
        (s == 'full' || s == 'after') && (n = n.isolate()),
        n
      );
    },
    toJSON(n) {
      return { done: n.done.map((e) => e.toJSON()), undone: n.undone.map((e) => e.toJSON()) };
    },
    fromJSON(n) {
      return new Ze(n.done.map(Ce.fromJSON), n.undone.map(Ce.fromJSON));
    },
  });
function cm(n = {}) {
  return [
    Uh,
    _h.of(n),
    E.domEventHandlers({
      beforeinput(e, t) {
        let i = e.inputType == 'historyUndo' ? Gh : e.inputType == 'historyRedo' ? Er : null;
        return i ? (e.preventDefault(), i(t)) : !1;
      },
    }),
  ];
}
function as(n, e) {
  return function ({ state: t, dispatch: i }) {
    if (!e && t.readOnly) return !1;
    let s = t.field(Uh, !1);
    if (!s) return !1;
    let r = s.pop(n, t, e);
    return r ? (i(r), !0) : !1;
  };
}
const Gh = as(0, !1),
  Er = as(1, !1),
  fm = as(0, !0),
  um = as(1, !0);
class Ce {
  constructor(e, t, i, s, r) {
    (this.changes = e),
      (this.effects = t),
      (this.mapped = i),
      (this.startSelection = s),
      (this.selectionsAfter = r);
  }
  setSelAfter(e) {
    return new Ce(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, t, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (t = this.mapped) === null || t === void 0 ? void 0 : t.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((s) => s.toJSON()),
    };
  }
  static fromJSON(e) {
    return new Ce(
      e.changes && ie.fromJSON(e.changes),
      [],
      e.mapped && et.fromJSON(e.mapped),
      e.startSelection && b.fromJSON(e.startSelection),
      e.selectionsAfter.map(b.fromJSON),
    );
  }
  static fromTransaction(e, t) {
    let i = Be;
    for (let s of e.startState.facet(hm)) {
      let r = s(e);
      r.length && (i = i.concat(r));
    }
    return !i.length && e.changes.empty
      ? null
      : new Ce(e.changes.invert(e.startState.doc), i, void 0, t || e.startState.selection, Be);
  }
  static selection(e) {
    return new Ce(void 0, Be, void 0, void 0, e);
  }
}
function _n(n, e, t, i) {
  let s = e + 1 > t + 20 ? e - t - 1 : 0,
    r = n.slice(s, e);
  return r.push(i), r;
}
function dm(n, e) {
  let t = [],
    i = !1;
  return (
    n.iterChangedRanges((s, r) => t.push(s, r)),
    e.iterChangedRanges((s, r, o, l) => {
      for (let a = 0; a < t.length; ) {
        let h = t[a++],
          c = t[a++];
        l >= h && o <= c && (i = !0);
      }
    }),
    i
  );
}
function pm(n, e) {
  return (
    n.ranges.length == e.ranges.length &&
    n.ranges.filter((t, i) => t.empty != e.ranges[i].empty).length === 0
  );
}
function Yh(n, e) {
  return n.length ? (e.length ? n.concat(e) : n) : e;
}
const Be = [],
  mm = 200;
function Jh(n, e) {
  if (n.length) {
    let t = n[n.length - 1],
      i = t.selectionsAfter.slice(Math.max(0, t.selectionsAfter.length - mm));
    return i.length && i[i.length - 1].eq(e)
      ? n
      : (i.push(e), _n(n, n.length - 1, 1e9, t.setSelAfter(i)));
  } else return [Ce.selection([e])];
}
function gm(n) {
  let e = n[n.length - 1],
    t = n.slice();
  return (
    (t[n.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1))), t
  );
}
function Ps(n, e) {
  if (!n.length) return n;
  let t = n.length,
    i = Be;
  for (; t; ) {
    let s = ym(n[t - 1], e, i);
    if ((s.changes && !s.changes.empty) || s.effects.length) {
      let r = n.slice(0, t);
      return (r[t - 1] = s), r;
    } else (e = s.mapped), t--, (i = s.selectionsAfter);
  }
  return i.length ? [Ce.selection(i)] : Be;
}
function ym(n, e, t) {
  let i = Yh(n.selectionsAfter.length ? n.selectionsAfter.map((l) => l.map(e)) : Be, t);
  if (!n.changes) return Ce.selection(i);
  let s = n.changes.map(e),
    r = e.mapDesc(n.changes, !0),
    o = n.mapped ? n.mapped.composeDesc(r) : r;
  return new Ce(s, P.mapEffects(n.effects, e), o, n.startSelection.map(r), i);
}
const bm = /^(input\.type|delete)($|\.)/;
class Ze {
  constructor(e, t, i = 0, s = void 0) {
    (this.done = e), (this.undone = t), (this.prevTime = i), (this.prevUserEvent = s);
  }
  isolate() {
    return this.prevTime ? new Ze(this.done, this.undone) : this;
  }
  addChanges(e, t, i, s, r) {
    let o = this.done,
      l = o[o.length - 1];
    return (
      l &&
      l.changes &&
      !l.changes.empty &&
      e.changes &&
      (!i || bm.test(i)) &&
      ((!l.selectionsAfter.length &&
        t - this.prevTime < s.newGroupDelay &&
        s.joinToEvent(r, dm(l.changes, e.changes))) ||
        i == 'input.type.compose')
        ? (o = _n(
            o,
            o.length - 1,
            s.minDepth,
            new Ce(
              e.changes.compose(l.changes),
              Yh(P.mapEffects(e.effects, l.changes), l.effects),
              l.mapped,
              l.startSelection,
              Be,
            ),
          ))
        : (o = _n(o, o.length, s.minDepth, e)),
      new Ze(o, Be, t, i)
    );
  }
  addSelection(e, t, i, s) {
    let r = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Be;
    return r.length > 0 &&
      t - this.prevTime < s &&
      i == this.prevUserEvent &&
      i &&
      /^select($|\.)/.test(i) &&
      pm(r[r.length - 1], e)
      ? this
      : new Ze(Jh(this.done, e), this.undone, t, i);
  }
  addMapping(e) {
    return new Ze(Ps(this.done, e), Ps(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, t, i) {
    let s = e == 0 ? this.done : this.undone;
    if (s.length == 0) return null;
    let r = s[s.length - 1],
      o = r.selectionsAfter[0] || t.selection;
    if (i && r.selectionsAfter.length)
      return t.update({
        selection: r.selectionsAfter[r.selectionsAfter.length - 1],
        annotations: Mr.of({ side: e, rest: gm(s), selection: o }),
        userEvent: e == 0 ? 'select.undo' : 'select.redo',
        scrollIntoView: !0,
      });
    if (r.changes) {
      let l = s.length == 1 ? Be : s.slice(0, s.length - 1);
      return (
        r.mapped && (l = Ps(l, r.mapped)),
        t.update({
          changes: r.changes,
          selection: r.startSelection,
          effects: r.effects,
          annotations: Mr.of({ side: e, rest: l, selection: o }),
          filter: !1,
          userEvent: e == 0 ? 'undo' : 'redo',
          scrollIntoView: !0,
        })
      );
    } else return null;
  }
}
Ze.empty = new Ze(Be, Be);
const xm = [
  { key: 'Mod-z', run: Gh, preventDefault: !0 },
  { key: 'Mod-y', mac: 'Mod-Shift-z', run: Er, preventDefault: !0 },
  { linux: 'Ctrl-Shift-z', run: Er, preventDefault: !0 },
  { key: 'Mod-u', run: fm, preventDefault: !0 },
  { key: 'Alt-u', mac: 'Mod-Shift-u', run: um, preventDefault: !0 },
];
function oi(n, e) {
  return b.create(n.ranges.map(e), n.mainIndex);
}
function st(n, e) {
  return n.update({ selection: e, scrollIntoView: !0, userEvent: 'select' });
}
function ze({ state: n, dispatch: e }, t) {
  let i = oi(n.selection, t);
  return i.eq(n.selection, !0) ? !1 : (e(st(n, i)), !0);
}
function hs(n, e) {
  return b.cursor(e ? n.to : n.from);
}
function Xh(n, e) {
  return ze(n, (t) => (t.empty ? n.moveByChar(t, e) : hs(t, e)));
}
function me(n) {
  return n.textDirectionAt(n.state.selection.main.head) == J.LTR;
}
const Qh = (n) => Xh(n, !me(n)),
  Zh = (n) => Xh(n, me(n));
function ec(n, e) {
  return ze(n, (t) => (t.empty ? n.moveByGroup(t, e) : hs(t, e)));
}
const wm = (n) => ec(n, !me(n)),
  vm = (n) => ec(n, me(n));
function km(n, e, t) {
  if (e.type.prop(t)) return !0;
  let i = e.to - e.from;
  return (i && (i > 2 || /[^\s,.;:]/.test(n.sliceDoc(e.from, e.to)))) || e.firstChild;
}
function cs(n, e, t) {
  let i = pe(n).resolveInner(e.head),
    s = t ? F.closedBy : F.openedBy;
  for (let a = e.head; ; ) {
    let h = t ? i.childAfter(a) : i.childBefore(a);
    if (!h) break;
    km(n, h, s) ? (i = h) : (a = t ? h.to : h.from);
  }
  let r = i.type.prop(s),
    o,
    l;
  return (
    r && (o = t ? Qe(n, i.from, 1) : Qe(n, i.to, -1)) && o.matched
      ? (l = t ? o.end.to : o.end.from)
      : (l = t ? i.to : i.from),
    b.cursor(l, t ? -1 : 1)
  );
}
const Sm = (n) => ze(n, (e) => cs(n.state, e, !me(n))),
  Cm = (n) => ze(n, (e) => cs(n.state, e, me(n)));
function tc(n, e) {
  return ze(n, (t) => {
    if (!t.empty) return hs(t, e);
    let i = n.moveVertically(t, e);
    return i.head != t.head ? i : n.moveToLineBoundary(t, e);
  });
}
const ic = (n) => tc(n, !1),
  nc = (n) => tc(n, !0);
function sc(n) {
  let e = n.scrollDOM.clientHeight < n.scrollDOM.scrollHeight - 2,
    t = 0,
    i = 0,
    s;
  if (e) {
    for (let r of n.state.facet(E.scrollMargins)) {
      let o = r(n);
      o != null && o.top && (t = Math.max(o == null ? void 0 : o.top, t)),
        o != null && o.bottom && (i = Math.max(o == null ? void 0 : o.bottom, i));
    }
    s = n.scrollDOM.clientHeight - t - i;
  } else s = (n.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: t,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(n.defaultLineHeight, s - 5),
  };
}
function rc(n, e) {
  let t = sc(n),
    { state: i } = n,
    s = oi(i.selection, (o) => (o.empty ? n.moveVertically(o, e, t.height) : hs(o, e)));
  if (s.eq(i.selection)) return !1;
  let r;
  if (t.selfScroll) {
    let o = n.coordsAtPos(i.selection.main.head),
      l = n.scrollDOM.getBoundingClientRect(),
      a = l.top + t.marginTop,
      h = l.bottom - t.marginBottom;
    o &&
      o.top > a &&
      o.bottom < h &&
      (r = E.scrollIntoView(s.main.head, { y: 'start', yMargin: o.top - a }));
  }
  return n.dispatch(st(i, s), { effects: r }), !0;
}
const Dl = (n) => rc(n, !1),
  Tr = (n) => rc(n, !0);
function At(n, e, t) {
  let i = n.lineBlockAt(e.head),
    s = n.moveToLineBoundary(e, t);
  if (
    (s.head == e.head && s.head != (t ? i.to : i.from) && (s = n.moveToLineBoundary(e, t, !1)),
    !t && s.head == i.from && i.length)
  ) {
    let r = /^\s*/.exec(n.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    r && e.head != i.from + r && (s = b.cursor(i.from + r));
  }
  return s;
}
const Am = (n) => ze(n, (e) => At(n, e, !0)),
  Mm = (n) => ze(n, (e) => At(n, e, !1)),
  Em = (n) => ze(n, (e) => At(n, e, !me(n))),
  Tm = (n) => ze(n, (e) => At(n, e, me(n))),
  Dm = (n) => ze(n, (e) => b.cursor(n.lineBlockAt(e.head).from, 1)),
  Om = (n) => ze(n, (e) => b.cursor(n.lineBlockAt(e.head).to, -1));
function Lm(n, e, t) {
  let i = !1,
    s = oi(n.selection, (r) => {
      let o =
        Qe(n, r.head, -1) ||
        Qe(n, r.head, 1) ||
        (r.head > 0 && Qe(n, r.head - 1, 1)) ||
        (r.head < n.doc.length && Qe(n, r.head + 1, -1));
      if (!o || !o.end) return r;
      i = !0;
      let l = o.start.from == r.head ? o.end.to : o.end.from;
      return b.cursor(l);
    });
  return i ? (e(st(n, s)), !0) : !1;
}
const Bm = ({ state: n, dispatch: e }) => Lm(n, e);
function Fe(n, e) {
  let t = oi(n.state.selection, (i) => {
    let s = e(i);
    return b.range(i.anchor, s.head, s.goalColumn, s.bidiLevel || void 0);
  });
  return t.eq(n.state.selection) ? !1 : (n.dispatch(st(n.state, t)), !0);
}
function oc(n, e) {
  return Fe(n, (t) => n.moveByChar(t, e));
}
const lc = (n) => oc(n, !me(n)),
  ac = (n) => oc(n, me(n));
function hc(n, e) {
  return Fe(n, (t) => n.moveByGroup(t, e));
}
const Pm = (n) => hc(n, !me(n)),
  Rm = (n) => hc(n, me(n)),
  Im = (n) => Fe(n, (e) => cs(n.state, e, !me(n))),
  Nm = (n) => Fe(n, (e) => cs(n.state, e, me(n)));
function cc(n, e) {
  return Fe(n, (t) => n.moveVertically(t, e));
}
const fc = (n) => cc(n, !1),
  uc = (n) => cc(n, !0);
function dc(n, e) {
  return Fe(n, (t) => n.moveVertically(t, e, sc(n).height));
}
const Ol = (n) => dc(n, !1),
  Ll = (n) => dc(n, !0),
  Hm = (n) => Fe(n, (e) => At(n, e, !0)),
  Fm = (n) => Fe(n, (e) => At(n, e, !1)),
  Vm = (n) => Fe(n, (e) => At(n, e, !me(n))),
  Wm = (n) => Fe(n, (e) => At(n, e, me(n))),
  zm = (n) => Fe(n, (e) => b.cursor(n.lineBlockAt(e.head).from)),
  qm = (n) => Fe(n, (e) => b.cursor(n.lineBlockAt(e.head).to)),
  Bl = ({ state: n, dispatch: e }) => (e(st(n, { anchor: 0 })), !0),
  Pl = ({ state: n, dispatch: e }) => (e(st(n, { anchor: n.doc.length })), !0),
  Rl = ({ state: n, dispatch: e }) => (e(st(n, { anchor: n.selection.main.anchor, head: 0 })), !0),
  Il = ({ state: n, dispatch: e }) => (
    e(st(n, { anchor: n.selection.main.anchor, head: n.doc.length })), !0
  ),
  $m = ({ state: n, dispatch: e }) => (
    e(n.update({ selection: { anchor: 0, head: n.doc.length }, userEvent: 'select' })), !0
  ),
  Km = ({ state: n, dispatch: e }) => {
    let t = fs(n).map(({ from: i, to: s }) => b.range(i, Math.min(s + 1, n.doc.length)));
    return e(n.update({ selection: b.create(t), userEvent: 'select' })), !0;
  },
  jm = ({ state: n, dispatch: e }) => {
    let t = oi(n.selection, (i) => {
      let s = pe(n),
        r = s.resolveStack(i.from, 1);
      if (i.empty) {
        let o = s.resolveStack(i.from, -1);
        o.node.from >= r.node.from && o.node.to <= r.node.to && (r = o);
      }
      for (let o = r; o; o = o.next) {
        let { node: l } = o;
        if (((l.from < i.from && l.to >= i.to) || (l.to > i.to && l.from <= i.from)) && o.next)
          return b.range(l.to, l.from);
      }
      return i;
    });
    return t.eq(n.selection) ? !1 : (e(st(n, t)), !0);
  },
  _m = ({ state: n, dispatch: e }) => {
    let t = n.selection,
      i = null;
    return (
      t.ranges.length > 1
        ? (i = b.create([t.main]))
        : t.main.empty || (i = b.create([b.cursor(t.main.head)])),
      i ? (e(st(n, i)), !0) : !1
    );
  };
function Gi(n, e) {
  if (n.state.readOnly) return !1;
  let t = 'delete.selection',
    { state: i } = n,
    s = i.changeByRange((r) => {
      let { from: o, to: l } = r;
      if (o == l) {
        let a = e(r);
        a < o
          ? ((t = 'delete.backward'), (a = gn(n, a, !1)))
          : a > o && ((t = 'delete.forward'), (a = gn(n, a, !0))),
          (o = Math.min(o, a)),
          (l = Math.max(l, a));
      } else (o = gn(n, o, !1)), (l = gn(n, l, !0));
      return o == l
        ? { range: r }
        : { changes: { from: o, to: l }, range: b.cursor(o, o < r.head ? -1 : 1) };
    });
  return s.changes.empty
    ? !1
    : (n.dispatch(
        i.update(s, {
          scrollIntoView: !0,
          userEvent: t,
          effects: t == 'delete.selection' ? E.announce.of(i.phrase('Selection deleted')) : void 0,
        }),
      ),
      !0);
}
function gn(n, e, t) {
  if (n instanceof E)
    for (let i of n.state.facet(E.atomicRanges).map((s) => s(n)))
      i.between(e, e, (s, r) => {
        s < e && r > e && (e = t ? r : s);
      });
  return e;
}
const pc = (n, e, t) =>
    Gi(n, (i) => {
      let s = i.from,
        { state: r } = n,
        o = r.doc.lineAt(s),
        l,
        a;
      if (
        t &&
        !e &&
        s > o.from &&
        s < o.from + 200 &&
        !/[^ \t]/.test((l = o.text.slice(0, s - o.from)))
      ) {
        if (l[l.length - 1] == '	') return s - 1;
        let h = ri(l, r.tabSize),
          c = h % $n(r) || $n(r);
        for (let f = 0; f < c && l[l.length - 1 - f] == ' '; f++) s--;
        a = s;
      } else
        (a = ce(o.text, s - o.from, e, e) + o.from),
          a == s && o.number != (e ? r.doc.lines : 1)
            ? (a += e ? 1 : -1)
            : !e &&
              /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, s - o.from)) &&
              (a = ce(o.text, a - o.from, !1, !1) + o.from);
      return a;
    }),
  Dr = (n) => pc(n, !1, !0),
  mc = (n) => pc(n, !0, !1),
  gc = (n, e) =>
    Gi(n, (t) => {
      let i = t.head,
        { state: s } = n,
        r = s.doc.lineAt(i),
        o = s.charCategorizer(i);
      for (let l = null; ; ) {
        if (i == (e ? r.to : r.from)) {
          i == t.head && r.number != (e ? s.doc.lines : 1) && (i += e ? 1 : -1);
          break;
        }
        let a = ce(r.text, i - r.from, e) + r.from,
          h = r.text.slice(Math.min(i, a) - r.from, Math.max(i, a) - r.from),
          c = o(h);
        if (l != null && c != l) break;
        (h != ' ' || i != t.head) && (l = c), (i = a);
      }
      return i;
    }),
  yc = (n) => gc(n, !1),
  Um = (n) => gc(n, !0),
  Gm = (n) =>
    Gi(n, (e) => {
      let t = n.lineBlockAt(e.head).to;
      return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
    }),
  Ym = (n) =>
    Gi(n, (e) => {
      let t = n.moveToLineBoundary(e, !1).head;
      return e.head > t ? t : Math.max(0, e.head - 1);
    }),
  Jm = (n) =>
    Gi(n, (e) => {
      let t = n.moveToLineBoundary(e, !0).head;
      return e.head < t ? t : Math.min(n.state.doc.length, e.head + 1);
    }),
  Xm = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = n.changeByRange((i) => ({
      changes: { from: i.from, to: i.to, insert: z.of(['', '']) },
      range: b.cursor(i.from),
    }));
    return e(n.update(t, { scrollIntoView: !0, userEvent: 'input' })), !0;
  },
  Qm = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = n.changeByRange((i) => {
      if (!i.empty || i.from == 0 || i.from == n.doc.length) return { range: i };
      let s = i.from,
        r = n.doc.lineAt(s),
        o = s == r.from ? s - 1 : ce(r.text, s - r.from, !1) + r.from,
        l = s == r.to ? s + 1 : ce(r.text, s - r.from, !0) + r.from;
      return {
        changes: { from: o, to: l, insert: n.doc.slice(s, l).append(n.doc.slice(o, s)) },
        range: b.cursor(l),
      };
    });
    return t.changes.empty
      ? !1
      : (e(n.update(t, { scrollIntoView: !0, userEvent: 'move.character' })), !0);
  };
function fs(n) {
  let e = [],
    t = -1;
  for (let i of n.selection.ranges) {
    let s = n.doc.lineAt(i.from),
      r = n.doc.lineAt(i.to);
    if ((!i.empty && i.to == r.from && (r = n.doc.lineAt(i.to - 1)), t >= s.number)) {
      let o = e[e.length - 1];
      (o.to = r.to), o.ranges.push(i);
    } else e.push({ from: s.from, to: r.to, ranges: [i] });
    t = r.number + 1;
  }
  return e;
}
function bc(n, e, t) {
  if (n.readOnly) return !1;
  let i = [],
    s = [];
  for (let r of fs(n)) {
    if (t ? r.to == n.doc.length : r.from == 0) continue;
    let o = n.doc.lineAt(t ? r.to + 1 : r.from - 1),
      l = o.length + 1;
    if (t) {
      i.push({ from: r.to, to: o.to }, { from: r.from, insert: o.text + n.lineBreak });
      for (let a of r.ranges)
        s.push(b.range(Math.min(n.doc.length, a.anchor + l), Math.min(n.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: r.from }, { from: r.to, insert: n.lineBreak + o.text });
      for (let a of r.ranges) s.push(b.range(a.anchor - l, a.head - l));
    }
  }
  return i.length
    ? (e(
        n.update({
          changes: i,
          scrollIntoView: !0,
          selection: b.create(s, n.selection.mainIndex),
          userEvent: 'move.line',
        }),
      ),
      !0)
    : !1;
}
const Zm = ({ state: n, dispatch: e }) => bc(n, e, !1),
  eg = ({ state: n, dispatch: e }) => bc(n, e, !0);
function xc(n, e, t) {
  if (n.readOnly) return !1;
  let i = [];
  for (let s of fs(n))
    t
      ? i.push({ from: s.from, insert: n.doc.slice(s.from, s.to) + n.lineBreak })
      : i.push({ from: s.to, insert: n.lineBreak + n.doc.slice(s.from, s.to) });
  return e(n.update({ changes: i, scrollIntoView: !0, userEvent: 'input.copyline' })), !0;
}
const tg = ({ state: n, dispatch: e }) => xc(n, e, !1),
  ig = ({ state: n, dispatch: e }) => xc(n, e, !0),
  ng = (n) => {
    if (n.state.readOnly) return !1;
    let { state: e } = n,
      t = e.changes(
        fs(e).map(
          ({ from: s, to: r }) => (s > 0 ? s-- : r < e.doc.length && r++, { from: s, to: r }),
        ),
      ),
      i = oi(e.selection, (s) => {
        let r;
        if (n.lineWrapping) {
          let o = n.lineBlockAt(s.head),
            l = n.coordsAtPos(s.head, s.assoc || 1);
          l && (r = o.bottom + n.documentTop - l.bottom + n.defaultLineHeight / 2);
        }
        return n.moveVertically(s, !0, r);
      }).map(t);
    return (
      n.dispatch({ changes: t, selection: i, scrollIntoView: !0, userEvent: 'delete.line' }), !0
    );
  };
function sg(n, e) {
  if (/\(\)|\[\]|\{\}/.test(n.sliceDoc(e - 1, e + 1))) return { from: e, to: e };
  let t = pe(n).resolveInner(e),
    i = t.childBefore(e),
    s = t.childAfter(e),
    r;
  return i &&
    s &&
    i.to <= e &&
    s.from >= e &&
    (r = i.type.prop(F.closedBy)) &&
    r.indexOf(s.name) > -1 &&
    n.doc.lineAt(i.to).from == n.doc.lineAt(s.from).from &&
    !/\S/.test(n.sliceDoc(i.to, s.from))
    ? { from: i.to, to: s.from }
    : null;
}
const Nl = wc(!1),
  rg = wc(!0);
function wc(n) {
  return ({ state: e, dispatch: t }) => {
    if (e.readOnly) return !1;
    let i = e.changeByRange((s) => {
      let { from: r, to: o } = s,
        l = e.doc.lineAt(r),
        a = !n && r == o && sg(e, r);
      n && (r = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let h = new rs(e, { simulateBreak: r, simulateDoubleBreak: !!a }),
        c = eo(h, r);
      for (
        c == null && (c = ri(/^\s*/.exec(e.doc.lineAt(r).text)[0], e.tabSize));
        o < l.to && /\s/.test(l.text[o - l.from]);

      )
        o++;
      a
        ? ({ from: r, to: o } = a)
        : r > l.from && r < l.from + 100 && !/\S/.test(l.text.slice(0, r)) && (r = l.from);
      let f = ['', Fi(e, c)];
      return (
        a && f.push(Fi(e, h.lineIndent(l.from, -1))),
        { changes: { from: r, to: o, insert: z.of(f) }, range: b.cursor(r + 1 + f[1].length) }
      );
    });
    return t(e.update(i, { scrollIntoView: !0, userEvent: 'input' })), !0;
  };
}
function so(n, e) {
  let t = -1;
  return n.changeByRange((i) => {
    let s = [];
    for (let o = i.from; o <= i.to; ) {
      let l = n.doc.lineAt(o);
      l.number > t && (i.empty || i.to > l.from) && (e(l, s, i), (t = l.number)), (o = l.to + 1);
    }
    let r = n.changes(s);
    return { changes: s, range: b.range(r.mapPos(i.anchor, 1), r.mapPos(i.head, 1)) };
  });
}
const og = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let t = Object.create(null),
      i = new rs(n, {
        overrideIndentation: (r) => {
          let o = t[r];
          return o ?? -1;
        },
      }),
      s = so(n, (r, o, l) => {
        let a = eo(i, r.from);
        if (a == null) return;
        /\S/.test(r.text) || (a = 0);
        let h = /^\s*/.exec(r.text)[0],
          c = Fi(n, a);
        (h != c || l.from < r.from + h.length) &&
          ((t[r.from] = a), o.push({ from: r.from, to: r.from + h.length, insert: c }));
      });
    return s.changes.empty || e(n.update(s, { userEvent: 'indent' })), !0;
  },
  lg = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            so(n, (t, i) => {
              i.push({ from: t.from, insert: n.facet(Zr) });
            }),
            { userEvent: 'input.indent' },
          ),
        ),
        !0),
  ag = ({ state: n, dispatch: e }) =>
    n.readOnly
      ? !1
      : (e(
          n.update(
            so(n, (t, i) => {
              let s = /^\s*/.exec(t.text)[0];
              if (!s) return;
              let r = ri(s, n.tabSize),
                o = 0,
                l = Fi(n, Math.max(0, r - $n(n)));
              for (; o < s.length && o < l.length && s.charCodeAt(o) == l.charCodeAt(o); ) o++;
              i.push({ from: t.from + o, to: t.from + s.length, insert: l.slice(o) });
            }),
            { userEvent: 'delete.dedent' },
          ),
        ),
        !0),
  hg = (n) => (n.setTabFocusMode(), !0),
  cg = [
    { key: 'Ctrl-b', run: Qh, shift: lc, preventDefault: !0 },
    { key: 'Ctrl-f', run: Zh, shift: ac },
    { key: 'Ctrl-p', run: ic, shift: fc },
    { key: 'Ctrl-n', run: nc, shift: uc },
    { key: 'Ctrl-a', run: Dm, shift: zm },
    { key: 'Ctrl-e', run: Om, shift: qm },
    { key: 'Ctrl-d', run: mc },
    { key: 'Ctrl-h', run: Dr },
    { key: 'Ctrl-k', run: Gm },
    { key: 'Ctrl-Alt-h', run: yc },
    { key: 'Ctrl-o', run: Xm },
    { key: 'Ctrl-t', run: Qm },
    { key: 'Ctrl-v', run: Tr },
  ],
  fg = [
    { key: 'ArrowLeft', run: Qh, shift: lc, preventDefault: !0 },
    { key: 'Mod-ArrowLeft', mac: 'Alt-ArrowLeft', run: wm, shift: Pm, preventDefault: !0 },
    { mac: 'Cmd-ArrowLeft', run: Em, shift: Vm, preventDefault: !0 },
    { key: 'ArrowRight', run: Zh, shift: ac, preventDefault: !0 },
    { key: 'Mod-ArrowRight', mac: 'Alt-ArrowRight', run: vm, shift: Rm, preventDefault: !0 },
    { mac: 'Cmd-ArrowRight', run: Tm, shift: Wm, preventDefault: !0 },
    { key: 'ArrowUp', run: ic, shift: fc, preventDefault: !0 },
    { mac: 'Cmd-ArrowUp', run: Bl, shift: Rl },
    { mac: 'Ctrl-ArrowUp', run: Dl, shift: Ol },
    { key: 'ArrowDown', run: nc, shift: uc, preventDefault: !0 },
    { mac: 'Cmd-ArrowDown', run: Pl, shift: Il },
    { mac: 'Ctrl-ArrowDown', run: Tr, shift: Ll },
    { key: 'PageUp', run: Dl, shift: Ol },
    { key: 'PageDown', run: Tr, shift: Ll },
    { key: 'Home', run: Mm, shift: Fm, preventDefault: !0 },
    { key: 'Mod-Home', run: Bl, shift: Rl },
    { key: 'End', run: Am, shift: Hm, preventDefault: !0 },
    { key: 'Mod-End', run: Pl, shift: Il },
    { key: 'Enter', run: Nl, shift: Nl },
    { key: 'Mod-a', run: $m },
    { key: 'Backspace', run: Dr, shift: Dr },
    { key: 'Delete', run: mc },
    { key: 'Mod-Backspace', mac: 'Alt-Backspace', run: yc },
    { key: 'Mod-Delete', mac: 'Alt-Delete', run: Um },
    { mac: 'Mod-Backspace', run: Ym },
    { mac: 'Mod-Delete', run: Jm },
  ].concat(cg.map((n) => ({ mac: n.key, run: n.run, shift: n.shift }))),
  ug = [
    { key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: Sm, shift: Im },
    { key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: Cm, shift: Nm },
    { key: 'Alt-ArrowUp', run: Zm },
    { key: 'Shift-Alt-ArrowUp', run: tg },
    { key: 'Alt-ArrowDown', run: eg },
    { key: 'Shift-Alt-ArrowDown', run: ig },
    { key: 'Escape', run: _m },
    { key: 'Mod-Enter', run: rg },
    { key: 'Alt-l', mac: 'Ctrl-l', run: Km },
    { key: 'Mod-i', run: jm, preventDefault: !0 },
    { key: 'Mod-[', run: ag },
    { key: 'Mod-]', run: lg },
    { key: 'Mod-Alt-\\', run: og },
    { key: 'Shift-Mod-k', run: ng },
    { key: 'Shift-Mod-\\', run: Bm },
    { key: 'Mod-/', run: tm },
    { key: 'Alt-A', run: nm },
    { key: 'Ctrl-m', mac: 'Shift-Alt-m', run: hg },
  ].concat(fg);
function j() {
  var n = arguments[0];
  typeof n == 'string' && (n = document.createElement(n));
  var e = 1,
    t = arguments[1];
  if (t && typeof t == 'object' && t.nodeType == null && !Array.isArray(t)) {
    for (var i in t)
      if (Object.prototype.hasOwnProperty.call(t, i)) {
        var s = t[i];
        typeof s == 'string' ? n.setAttribute(i, s) : s != null && (n[i] = s);
      }
    e++;
  }
  for (; e < arguments.length; e++) vc(n, arguments[e]);
  return n;
}
function vc(n, e) {
  if (typeof e == 'string') n.appendChild(document.createTextNode(e));
  else if (e != null)
    if (e.nodeType != null) n.appendChild(e);
    else if (Array.isArray(e)) for (var t = 0; t < e.length; t++) vc(n, e[t]);
    else throw new RangeError('Unsupported child node: ' + e);
}
const Hl = typeof String.prototype.normalize == 'function' ? (n) => n.normalize('NFKD') : (n) => n;
class ni {
  constructor(e, t, i = 0, s = e.length, r, o) {
    (this.test = o),
      (this.value = { from: 0, to: 0 }),
      (this.done = !1),
      (this.matches = []),
      (this.buffer = ''),
      (this.bufferPos = 0),
      (this.iter = e.iterRange(i, s)),
      (this.bufferStart = i),
      (this.normalize = r ? (l) => r(Hl(l)) : Hl),
      (this.query = this.normalize(t));
  }
  peek() {
    if (this.bufferPos == this.buffer.length) {
      if (((this.bufferStart += this.buffer.length), this.iter.next(), this.iter.done)) return -1;
      (this.bufferPos = 0), (this.buffer = this.iter.value);
    }
    return we(this.buffer, this.bufferPos);
  }
  next() {
    for (; this.matches.length; ) this.matches.pop();
    return this.nextOverlapping();
  }
  nextOverlapping() {
    for (;;) {
      let e = this.peek();
      if (e < 0) return (this.done = !0), this;
      let t = Pr(e),
        i = this.bufferStart + this.bufferPos;
      this.bufferPos += Ye(e);
      let s = this.normalize(t);
      if (s.length)
        for (let r = 0, o = i; ; r++) {
          let l = s.charCodeAt(r),
            a = this.match(l, o, this.bufferPos + this.bufferStart);
          if (r == s.length - 1) {
            if (a) return (this.value = a), this;
            break;
          }
          o == i && r < t.length && t.charCodeAt(r) == l && o++;
        }
    }
  }
  match(e, t, i) {
    let s = null;
    for (let r = 0; r < this.matches.length; r += 2) {
      let o = this.matches[r],
        l = !1;
      this.query.charCodeAt(o) == e &&
        (o == this.query.length - 1
          ? (s = { from: this.matches[r + 1], to: i })
          : (this.matches[r]++, (l = !0))),
        l || (this.matches.splice(r, 2), (r -= 2));
    }
    return (
      this.query.charCodeAt(0) == e &&
        (this.query.length == 1 ? (s = { from: t, to: i }) : this.matches.push(1, t)),
      s && this.test && !this.test(s.from, s.to, this.buffer, this.bufferStart) && (s = null),
      s
    );
  }
}
typeof Symbol < 'u' &&
  (ni.prototype[Symbol.iterator] = function () {
    return this;
  });
const kc = { from: -1, to: -1, match: /.*/.exec('') },
  ro = 'gm' + (/x/.unicode == null ? '' : 'u');
class Sc {
  constructor(e, t, i, s = 0, r = e.length) {
    if (
      ((this.text = e),
      (this.to = r),
      (this.curLine = ''),
      (this.done = !1),
      (this.value = kc),
      /\\[sWDnr]|\n|\r|\[\^/.test(t))
    )
      return new Cc(e, t, i, s, r);
    (this.re = new RegExp(t, ro + (i != null && i.ignoreCase ? 'i' : ''))),
      (this.test = i == null ? void 0 : i.test),
      (this.iter = e.iter());
    let o = e.lineAt(s);
    (this.curLineStart = o.from), (this.matchPos = Un(e, s)), this.getLine(this.curLineStart);
  }
  getLine(e) {
    this.iter.next(e),
      this.iter.lineBreak
        ? (this.curLine = '')
        : ((this.curLine = this.iter.value),
          this.curLineStart + this.curLine.length > this.to &&
            (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)),
          this.iter.next());
  }
  nextLine() {
    (this.curLineStart = this.curLineStart + this.curLine.length + 1),
      this.curLineStart > this.to ? (this.curLine = '') : this.getLine(0);
  }
  next() {
    for (let e = this.matchPos - this.curLineStart; ; ) {
      this.re.lastIndex = e;
      let t = this.matchPos <= this.to && this.re.exec(this.curLine);
      if (t) {
        let i = this.curLineStart + t.index,
          s = i + t[0].length;
        if (
          ((this.matchPos = Un(this.text, s + (i == s ? 1 : 0))),
          i == this.curLineStart + this.curLine.length && this.nextLine(),
          (i < s || i > this.value.to) && (!this.test || this.test(i, s, t)))
        )
          return (this.value = { from: i, to: s, match: t }), this;
        e = this.matchPos - this.curLineStart;
      } else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), (e = 0);
      else return (this.done = !0), this;
    }
  }
}
const Rs = new WeakMap();
class Jt {
  constructor(e, t) {
    (this.from = e), (this.text = t);
  }
  get to() {
    return this.from + this.text.length;
  }
  static get(e, t, i) {
    let s = Rs.get(e);
    if (!s || s.from >= i || s.to <= t) {
      let l = new Jt(t, e.sliceString(t, i));
      return Rs.set(e, l), l;
    }
    if (s.from == t && s.to == i) return s;
    let { text: r, from: o } = s;
    return (
      o > t && ((r = e.sliceString(t, o) + r), (o = t)),
      s.to < i && (r += e.sliceString(s.to, i)),
      Rs.set(e, new Jt(o, r)),
      new Jt(t, r.slice(t - o, i - o))
    );
  }
}
class Cc {
  constructor(e, t, i, s, r) {
    (this.text = e),
      (this.to = r),
      (this.done = !1),
      (this.value = kc),
      (this.matchPos = Un(e, s)),
      (this.re = new RegExp(t, ro + (i != null && i.ignoreCase ? 'i' : ''))),
      (this.test = i == null ? void 0 : i.test),
      (this.flat = Jt.get(e, s, this.chunkEnd(s + 5e3)));
  }
  chunkEnd(e) {
    return e >= this.to ? this.to : this.text.lineAt(e).to;
  }
  next() {
    for (;;) {
      let e = (this.re.lastIndex = this.matchPos - this.flat.from),
        t = this.re.exec(this.flat.text);
      if (
        (t &&
          !t[0] &&
          t.index == e &&
          ((this.re.lastIndex = e + 1), (t = this.re.exec(this.flat.text))),
        t)
      ) {
        let i = this.flat.from + t.index,
          s = i + t[0].length;
        if (
          (this.flat.to >= this.to || t.index + t[0].length <= this.flat.text.length - 10) &&
          (!this.test || this.test(i, s, t))
        )
          return (
            (this.value = { from: i, to: s, match: t }),
            (this.matchPos = Un(this.text, s + (i == s ? 1 : 0))),
            this
          );
      }
      if (this.flat.to == this.to) return (this.done = !0), this;
      this.flat = Jt.get(
        this.text,
        this.flat.from,
        this.chunkEnd(this.flat.from + this.flat.text.length * 2),
      );
    }
  }
}
typeof Symbol < 'u' &&
  (Sc.prototype[Symbol.iterator] = Cc.prototype[Symbol.iterator] =
    function () {
      return this;
    });
function dg(n) {
  try {
    return new RegExp(n, ro), !0;
  } catch {
    return !1;
  }
}
function Un(n, e) {
  if (e >= n.length) return e;
  let t = n.lineAt(e),
    i;
  for (; e < t.to && (i = t.text.charCodeAt(e - t.from)) >= 56320 && i < 57344; ) e++;
  return e;
}
function Or(n) {
  let e = String(n.state.doc.lineAt(n.state.selection.main.head).number),
    t = j('input', { class: 'cm-textfield', name: 'line', value: e }),
    i = j(
      'form',
      {
        class: 'cm-gotoLine',
        onkeydown: (r) => {
          r.keyCode == 27
            ? (r.preventDefault(), n.dispatch({ effects: Mi.of(!1) }), n.focus())
            : r.keyCode == 13 && (r.preventDefault(), s());
        },
        onsubmit: (r) => {
          r.preventDefault(), s();
        },
      },
      j('label', n.state.phrase('Go to line'), ': ', t),
      ' ',
      j('button', { class: 'cm-button', type: 'submit' }, n.state.phrase('go')),
      j(
        'button',
        {
          name: 'close',
          onclick: () => {
            n.dispatch({ effects: Mi.of(!1) }), n.focus();
          },
          'aria-label': n.state.phrase('close'),
          type: 'button',
        },
        ['×'],
      ),
    );
  function s() {
    let r = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.value);
    if (!r) return;
    let { state: o } = n,
      l = o.doc.lineAt(o.selection.main.head),
      [, a, h, c, f] = r,
      u = c ? +c.slice(1) : 0,
      d = h ? +h : l.number;
    if (h && f) {
      let g = d / 100;
      a && (g = g * (a == '-' ? -1 : 1) + l.number / o.doc.lines),
        (d = Math.round(o.doc.lines * g));
    } else h && a && (d = d * (a == '-' ? -1 : 1) + l.number);
    let p = o.doc.line(Math.max(1, Math.min(o.doc.lines, d))),
      m = b.cursor(p.from + Math.max(0, Math.min(u, p.length)));
    n.dispatch({ effects: [Mi.of(!1), E.scrollIntoView(m.from, { y: 'center' })], selection: m }),
      n.focus();
  }
  return { dom: i };
}
const Mi = P.define(),
  Fl = re.define({
    create() {
      return !0;
    },
    update(n, e) {
      for (let t of e.effects) t.is(Mi) && (n = t.value);
      return n;
    },
    provide: (n) => Ni.from(n, (e) => (e ? Or : null)),
  }),
  pg = (n) => {
    let e = Ii(n, Or);
    if (!e) {
      let t = [Mi.of(!0)];
      n.state.field(Fl, !1) == null && t.push(P.appendConfig.of([Fl, mg])),
        n.dispatch({ effects: t }),
        (e = Ii(n, Or));
    }
    return e && e.dom.querySelector('input').select(), !0;
  },
  mg = E.baseTheme({
    '.cm-panel.cm-gotoLine': {
      padding: '2px 6px 4px',
      position: 'relative',
      '& label': { fontSize: '80%' },
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        bottom: '0',
        right: '4px',
        backgroundColor: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: '0',
      },
    },
  }),
  gg = { highlightWordAroundCursor: !1, minSelectionLength: 1, maxMatches: 100, wholeWords: !1 },
  yg = D.define({
    combine(n) {
      return nt(n, gg, {
        highlightWordAroundCursor: (e, t) => e || t,
        minSelectionLength: Math.min,
        maxMatches: Math.min,
      });
    },
  });
function bg(n) {
  return [Sg, kg];
}
const xg = O.mark({ class: 'cm-selectionMatch' }),
  wg = O.mark({ class: 'cm-selectionMatch cm-selectionMatch-main' });
function Vl(n, e, t, i) {
  return (
    (t == 0 || n(e.sliceDoc(t - 1, t)) != X.Word) &&
    (i == e.doc.length || n(e.sliceDoc(i, i + 1)) != X.Word)
  );
}
function vg(n, e, t, i) {
  return n(e.sliceDoc(t, t + 1)) == X.Word && n(e.sliceDoc(i - 1, i)) == X.Word;
}
const kg = te.fromClass(
    class {
      constructor(n) {
        this.decorations = this.getDeco(n);
      }
      update(n) {
        (n.selectionSet || n.docChanged || n.viewportChanged) &&
          (this.decorations = this.getDeco(n.view));
      }
      getDeco(n) {
        let e = n.state.facet(yg),
          { state: t } = n,
          i = t.selection;
        if (i.ranges.length > 1) return O.none;
        let s = i.main,
          r,
          o = null;
        if (s.empty) {
          if (!e.highlightWordAroundCursor) return O.none;
          let a = t.wordAt(s.head);
          if (!a) return O.none;
          (o = t.charCategorizer(s.head)), (r = t.sliceDoc(a.from, a.to));
        } else {
          let a = s.to - s.from;
          if (a < e.minSelectionLength || a > 200) return O.none;
          if (e.wholeWords) {
            if (
              ((r = t.sliceDoc(s.from, s.to)),
              (o = t.charCategorizer(s.head)),
              !(Vl(o, t, s.from, s.to) && vg(o, t, s.from, s.to)))
            )
              return O.none;
          } else if (((r = t.sliceDoc(s.from, s.to)), !r)) return O.none;
        }
        let l = [];
        for (let a of n.visibleRanges) {
          let h = new ni(t.doc, r, a.from, a.to);
          for (; !h.next().done; ) {
            let { from: c, to: f } = h.value;
            if (
              (!o || Vl(o, t, c, f)) &&
              (s.empty && c <= s.from && f >= s.to
                ? l.push(wg.range(c, f))
                : (c >= s.to || f <= s.from) && l.push(xg.range(c, f)),
              l.length > e.maxMatches)
            )
              return O.none;
          }
        }
        return O.set(l);
      }
    },
    { decorations: (n) => n.decorations },
  ),
  Sg = E.baseTheme({
    '.cm-selectionMatch': { backgroundColor: '#99ff7780' },
    '.cm-searchMatch .cm-selectionMatch': { backgroundColor: 'transparent' },
  }),
  Cg = ({ state: n, dispatch: e }) => {
    let { selection: t } = n,
      i = b.create(
        t.ranges.map((s) => n.wordAt(s.head) || b.cursor(s.head)),
        t.mainIndex,
      );
    return i.eq(t) ? !1 : (e(n.update({ selection: i })), !0);
  };
function Ag(n, e) {
  let { main: t, ranges: i } = n.selection,
    s = n.wordAt(t.head),
    r = s && s.from == t.from && s.to == t.to;
  for (let o = !1, l = new ni(n.doc, e, i[i.length - 1].to); ; )
    if ((l.next(), l.done)) {
      if (o) return null;
      (l = new ni(n.doc, e, 0, Math.max(0, i[i.length - 1].from - 1))), (o = !0);
    } else {
      if (o && i.some((a) => a.from == l.value.from)) continue;
      if (r) {
        let a = n.wordAt(l.value.from);
        if (!a || a.from != l.value.from || a.to != l.value.to) continue;
      }
      return l.value;
    }
}
const Mg = ({ state: n, dispatch: e }) => {
    let { ranges: t } = n.selection;
    if (t.some((r) => r.from === r.to)) return Cg({ state: n, dispatch: e });
    let i = n.sliceDoc(t[0].from, t[0].to);
    if (n.selection.ranges.some((r) => n.sliceDoc(r.from, r.to) != i)) return !1;
    let s = Ag(n, i);
    return s
      ? (e(
          n.update({
            selection: n.selection.addRange(b.range(s.from, s.to), !1),
            effects: E.scrollIntoView(s.to),
          }),
        ),
        !0)
      : !1;
  },
  li = D.define({
    combine(n) {
      return nt(n, {
        top: !1,
        caseSensitive: !1,
        literal: !1,
        regexp: !1,
        wholeWord: !1,
        createPanel: (e) => new Fg(e),
        scrollToMatch: (e) => E.scrollIntoView(e),
      });
    },
  });
class Ac {
  constructor(e) {
    (this.search = e.search),
      (this.caseSensitive = !!e.caseSensitive),
      (this.literal = !!e.literal),
      (this.regexp = !!e.regexp),
      (this.replace = e.replace || ''),
      (this.valid = !!this.search && (!this.regexp || dg(this.search))),
      (this.unquoted = this.unquote(this.search)),
      (this.wholeWord = !!e.wholeWord);
  }
  unquote(e) {
    return this.literal
      ? e
      : e.replace(/\\([nrt\\])/g, (t, i) =>
          i == 'n'
            ? `
`
            : i == 'r'
              ? '\r'
              : i == 't'
                ? '	'
                : '\\',
        );
  }
  eq(e) {
    return (
      this.search == e.search &&
      this.replace == e.replace &&
      this.caseSensitive == e.caseSensitive &&
      this.regexp == e.regexp &&
      this.wholeWord == e.wholeWord
    );
  }
  create() {
    return this.regexp ? new Og(this) : new Tg(this);
  }
  getCursor(e, t = 0, i) {
    let s = e.doc ? e : V.create({ doc: e });
    return i == null && (i = s.doc.length), this.regexp ? Kt(this, s, t, i) : $t(this, s, t, i);
  }
}
class Mc {
  constructor(e) {
    this.spec = e;
  }
}
function $t(n, e, t, i) {
  return new ni(
    e.doc,
    n.unquoted,
    t,
    i,
    n.caseSensitive ? void 0 : (s) => s.toLowerCase(),
    n.wholeWord ? Eg(e.doc, e.charCategorizer(e.selection.main.head)) : void 0,
  );
}
function Eg(n, e) {
  return (t, i, s, r) => (
    (r > t || r + s.length < i) &&
      ((r = Math.max(0, t - 2)), (s = n.sliceString(r, Math.min(n.length, i + 2)))),
    (e(Gn(s, t - r)) != X.Word || e(Yn(s, t - r)) != X.Word) &&
      (e(Yn(s, i - r)) != X.Word || e(Gn(s, i - r)) != X.Word)
  );
}
class Tg extends Mc {
  constructor(e) {
    super(e);
  }
  nextMatch(e, t, i) {
    let s = $t(this.spec, e, i, e.doc.length).nextOverlapping();
    if (s.done) {
      let r = Math.min(e.doc.length, t + this.spec.unquoted.length);
      s = $t(this.spec, e, 0, r).nextOverlapping();
    }
    return s.done || (s.value.from == t && s.value.to == i) ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = i; ; ) {
      let r = Math.max(t, s - 1e4 - this.spec.unquoted.length),
        o = $t(this.spec, e, r, s),
        l = null;
      for (; !o.nextOverlapping().done; ) l = o.value;
      if (l) return l;
      if (r == t) return null;
      s -= 1e4;
    }
  }
  prevMatch(e, t, i) {
    let s = this.prevMatchInRange(e, 0, t);
    return (
      s || (s = this.prevMatchInRange(e, Math.max(0, i - this.spec.unquoted.length), e.doc.length)),
      s && (s.from != t || s.to != i) ? s : null
    );
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace);
  }
  matchAll(e, t) {
    let i = $t(this.spec, e, 0, e.doc.length),
      s = [];
    for (; !i.next().done; ) {
      if (s.length >= t) return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = $t(
      this.spec,
      e,
      Math.max(0, t - this.spec.unquoted.length),
      Math.min(i + this.spec.unquoted.length, e.doc.length),
    );
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
function Kt(n, e, t, i) {
  return new Sc(
    e.doc,
    n.search,
    {
      ignoreCase: !n.caseSensitive,
      test: n.wholeWord ? Dg(e.charCategorizer(e.selection.main.head)) : void 0,
    },
    t,
    i,
  );
}
function Gn(n, e) {
  return n.slice(ce(n, e, !1), e);
}
function Yn(n, e) {
  return n.slice(e, ce(n, e));
}
function Dg(n) {
  return (e, t, i) =>
    !i[0].length ||
    ((n(Gn(i.input, i.index)) != X.Word || n(Yn(i.input, i.index)) != X.Word) &&
      (n(Yn(i.input, i.index + i[0].length)) != X.Word ||
        n(Gn(i.input, i.index + i[0].length)) != X.Word));
}
class Og extends Mc {
  nextMatch(e, t, i) {
    let s = Kt(this.spec, e, i, e.doc.length).next();
    return s.done && (s = Kt(this.spec, e, 0, t).next()), s.done ? null : s.value;
  }
  prevMatchInRange(e, t, i) {
    for (let s = 1; ; s++) {
      let r = Math.max(t, i - s * 1e4),
        o = Kt(this.spec, e, r, i),
        l = null;
      for (; !o.next().done; ) l = o.value;
      if (l && (r == t || l.from > r + 10)) return l;
      if (r == t) return null;
    }
  }
  prevMatch(e, t, i) {
    return this.prevMatchInRange(e, 0, t) || this.prevMatchInRange(e, i, e.doc.length);
  }
  getReplacement(e) {
    return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g, (t, i) => {
      if (i == '&') return e.match[0];
      if (i == '$') return '$';
      for (let s = i.length; s > 0; s--) {
        let r = +i.slice(0, s);
        if (r > 0 && r < e.match.length) return e.match[r] + i.slice(s);
      }
      return t;
    });
  }
  matchAll(e, t) {
    let i = Kt(this.spec, e, 0, e.doc.length),
      s = [];
    for (; !i.next().done; ) {
      if (s.length >= t) return null;
      s.push(i.value);
    }
    return s;
  }
  highlight(e, t, i, s) {
    let r = Kt(this.spec, e, Math.max(0, t - 250), Math.min(i + 250, e.doc.length));
    for (; !r.next().done; ) s(r.value.from, r.value.to);
  }
}
const Vi = P.define(),
  oo = P.define(),
  bt = re.define({
    create(n) {
      return new Is(Lr(n).create(), null);
    },
    update(n, e) {
      for (let t of e.effects)
        t.is(Vi)
          ? (n = new Is(t.value.create(), n.panel))
          : t.is(oo) && (n = new Is(n.query, t.value ? lo : null));
      return n;
    },
    provide: (n) => Ni.from(n, (e) => e.panel),
  });
class Is {
  constructor(e, t) {
    (this.query = e), (this.panel = t);
  }
}
const Lg = O.mark({ class: 'cm-searchMatch' }),
  Bg = O.mark({ class: 'cm-searchMatch cm-searchMatch-selected' }),
  Pg = te.fromClass(
    class {
      constructor(n) {
        (this.view = n), (this.decorations = this.highlight(n.state.field(bt)));
      }
      update(n) {
        let e = n.state.field(bt);
        (e != n.startState.field(bt) || n.docChanged || n.selectionSet || n.viewportChanged) &&
          (this.decorations = this.highlight(e));
      }
      highlight({ query: n, panel: e }) {
        if (!e || !n.spec.valid) return O.none;
        let { view: t } = this,
          i = new tt();
        for (let s = 0, r = t.visibleRanges, o = r.length; s < o; s++) {
          let { from: l, to: a } = r[s];
          for (; s < o - 1 && a > r[s + 1].from - 2 * 250; ) a = r[++s].to;
          n.highlight(t.state, l, a, (h, c) => {
            let f = t.state.selection.ranges.some((u) => u.from == h && u.to == c);
            i.add(h, c, f ? Bg : Lg);
          });
        }
        return i.finish();
      }
    },
    { decorations: (n) => n.decorations },
  );
function Yi(n) {
  return (e) => {
    let t = e.state.field(bt, !1);
    return t && t.query.spec.valid ? n(e, t) : Dc(e);
  };
}
const Jn = Yi((n, { query: e }) => {
    let { to: t } = n.state.selection.main,
      i = e.nextMatch(n.state, t, t);
    if (!i) return !1;
    let s = b.single(i.from, i.to),
      r = n.state.facet(li);
    return (
      n.dispatch({
        selection: s,
        effects: [ao(n, i), r.scrollToMatch(s.main, n)],
        userEvent: 'select.search',
      }),
      Tc(n),
      !0
    );
  }),
  Xn = Yi((n, { query: e }) => {
    let { state: t } = n,
      { from: i } = t.selection.main,
      s = e.prevMatch(t, i, i);
    if (!s) return !1;
    let r = b.single(s.from, s.to),
      o = n.state.facet(li);
    return (
      n.dispatch({
        selection: r,
        effects: [ao(n, s), o.scrollToMatch(r.main, n)],
        userEvent: 'select.search',
      }),
      Tc(n),
      !0
    );
  }),
  Rg = Yi((n, { query: e }) => {
    let t = e.matchAll(n.state, 1e3);
    return !t || !t.length
      ? !1
      : (n.dispatch({
          selection: b.create(t.map((i) => b.range(i.from, i.to))),
          userEvent: 'select.search.matches',
        }),
        !0);
  }),
  Ig = ({ state: n, dispatch: e }) => {
    let t = n.selection;
    if (t.ranges.length > 1 || t.main.empty) return !1;
    let { from: i, to: s } = t.main,
      r = [],
      o = 0;
    for (let l = new ni(n.doc, n.sliceDoc(i, s)); !l.next().done; ) {
      if (r.length > 1e3) return !1;
      l.value.from == i && (o = r.length), r.push(b.range(l.value.from, l.value.to));
    }
    return e(n.update({ selection: b.create(r, o), userEvent: 'select.search.matches' })), !0;
  },
  Wl = Yi((n, { query: e }) => {
    let { state: t } = n,
      { from: i, to: s } = t.selection.main;
    if (t.readOnly) return !1;
    let r = e.nextMatch(t, i, i);
    if (!r) return !1;
    let o = r,
      l = [],
      a,
      h,
      c = [];
    if (
      (o.from == i &&
        o.to == s &&
        ((h = t.toText(e.getReplacement(o))),
        l.push({ from: o.from, to: o.to, insert: h }),
        (o = e.nextMatch(t, o.from, o.to)),
        c.push(E.announce.of(t.phrase('replaced match on line $', t.doc.lineAt(i).number) + '.'))),
      o)
    ) {
      let f = l.length == 0 || l[0].from >= r.to ? 0 : r.to - r.from - h.length;
      (a = b.single(o.from - f, o.to - f)),
        c.push(ao(n, o)),
        c.push(t.facet(li).scrollToMatch(a.main, n));
    }
    return n.dispatch({ changes: l, selection: a, effects: c, userEvent: 'input.replace' }), !0;
  }),
  Ng = Yi((n, { query: e }) => {
    if (n.state.readOnly) return !1;
    let t = e.matchAll(n.state, 1e9).map((s) => {
      let { from: r, to: o } = s;
      return { from: r, to: o, insert: e.getReplacement(s) };
    });
    if (!t.length) return !1;
    let i = n.state.phrase('replaced $ matches', t.length) + '.';
    return (
      n.dispatch({ changes: t, effects: E.announce.of(i), userEvent: 'input.replace.all' }), !0
    );
  });
function lo(n) {
  return n.state.facet(li).createPanel(n);
}
function Lr(n, e) {
  var t, i, s, r, o;
  let l = n.selection.main,
    a = l.empty || l.to > l.from + 100 ? '' : n.sliceDoc(l.from, l.to);
  if (e && !a) return e;
  let h = n.facet(li);
  return new Ac({
    search: ((t = e == null ? void 0 : e.literal) !== null && t !== void 0 ? t : h.literal)
      ? a
      : a.replace(/\n/g, '\\n'),
    caseSensitive:
      (i = e == null ? void 0 : e.caseSensitive) !== null && i !== void 0 ? i : h.caseSensitive,
    literal: (s = e == null ? void 0 : e.literal) !== null && s !== void 0 ? s : h.literal,
    regexp: (r = e == null ? void 0 : e.regexp) !== null && r !== void 0 ? r : h.regexp,
    wholeWord: (o = e == null ? void 0 : e.wholeWord) !== null && o !== void 0 ? o : h.wholeWord,
  });
}
function Ec(n) {
  let e = Ii(n, lo);
  return e && e.dom.querySelector('[main-field]');
}
function Tc(n) {
  let e = Ec(n);
  e && e == n.root.activeElement && e.select();
}
const Dc = (n) => {
    let e = n.state.field(bt, !1);
    if (e && e.panel) {
      let t = Ec(n);
      if (t && t != n.root.activeElement) {
        let i = Lr(n.state, e.query.spec);
        i.valid && n.dispatch({ effects: Vi.of(i) }), t.focus(), t.select();
      }
    } else
      n.dispatch({
        effects: [oo.of(!0), e ? Vi.of(Lr(n.state, e.query.spec)) : P.appendConfig.of(Wg)],
      });
    return !0;
  },
  Oc = (n) => {
    let e = n.state.field(bt, !1);
    if (!e || !e.panel) return !1;
    let t = Ii(n, lo);
    return (
      t && t.dom.contains(n.root.activeElement) && n.focus(), n.dispatch({ effects: oo.of(!1) }), !0
    );
  },
  Hg = [
    { key: 'Mod-f', run: Dc, scope: 'editor search-panel' },
    { key: 'F3', run: Jn, shift: Xn, scope: 'editor search-panel', preventDefault: !0 },
    { key: 'Mod-g', run: Jn, shift: Xn, scope: 'editor search-panel', preventDefault: !0 },
    { key: 'Escape', run: Oc, scope: 'editor search-panel' },
    { key: 'Mod-Shift-l', run: Ig },
    { key: 'Mod-Alt-g', run: pg },
    { key: 'Mod-d', run: Mg, preventDefault: !0 },
  ];
class Fg {
  constructor(e) {
    this.view = e;
    let t = (this.query = e.state.field(bt).query.spec);
    (this.commit = this.commit.bind(this)),
      (this.searchField = j('input', {
        value: t.search,
        placeholder: Me(e, 'Find'),
        'aria-label': Me(e, 'Find'),
        class: 'cm-textfield',
        name: 'search',
        form: '',
        'main-field': 'true',
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.replaceField = j('input', {
        value: t.replace,
        placeholder: Me(e, 'Replace'),
        'aria-label': Me(e, 'Replace'),
        class: 'cm-textfield',
        name: 'replace',
        form: '',
        onchange: this.commit,
        onkeyup: this.commit,
      })),
      (this.caseField = j('input', {
        type: 'checkbox',
        name: 'case',
        form: '',
        checked: t.caseSensitive,
        onchange: this.commit,
      })),
      (this.reField = j('input', {
        type: 'checkbox',
        name: 're',
        form: '',
        checked: t.regexp,
        onchange: this.commit,
      })),
      (this.wordField = j('input', {
        type: 'checkbox',
        name: 'word',
        form: '',
        checked: t.wholeWord,
        onchange: this.commit,
      }));
    function i(s, r, o) {
      return j('button', { class: 'cm-button', name: s, onclick: r, type: 'button' }, o);
    }
    this.dom = j('div', { onkeydown: (s) => this.keydown(s), class: 'cm-search' }, [
      this.searchField,
      i('next', () => Jn(e), [Me(e, 'next')]),
      i('prev', () => Xn(e), [Me(e, 'previous')]),
      i('select', () => Rg(e), [Me(e, 'all')]),
      j('label', null, [this.caseField, Me(e, 'match case')]),
      j('label', null, [this.reField, Me(e, 'regexp')]),
      j('label', null, [this.wordField, Me(e, 'by word')]),
      ...(e.state.readOnly
        ? []
        : [
            j('br'),
            this.replaceField,
            i('replace', () => Wl(e), [Me(e, 'replace')]),
            i('replaceAll', () => Ng(e), [Me(e, 'replace all')]),
          ]),
      j(
        'button',
        { name: 'close', onclick: () => Oc(e), 'aria-label': Me(e, 'close'), type: 'button' },
        ['×'],
      ),
    ]);
  }
  commit() {
    let e = new Ac({
      search: this.searchField.value,
      caseSensitive: this.caseField.checked,
      regexp: this.reField.checked,
      wholeWord: this.wordField.checked,
      replace: this.replaceField.value,
    });
    e.eq(this.query) || ((this.query = e), this.view.dispatch({ effects: Vi.of(e) }));
  }
  keydown(e) {
    Ku(this.view, e, 'search-panel')
      ? e.preventDefault()
      : e.keyCode == 13 && e.target == this.searchField
        ? (e.preventDefault(), (e.shiftKey ? Xn : Jn)(this.view))
        : e.keyCode == 13 && e.target == this.replaceField && (e.preventDefault(), Wl(this.view));
  }
  update(e) {
    for (let t of e.transactions)
      for (let i of t.effects) i.is(Vi) && !i.value.eq(this.query) && this.setQuery(i.value);
  }
  setQuery(e) {
    (this.query = e),
      (this.searchField.value = e.search),
      (this.replaceField.value = e.replace),
      (this.caseField.checked = e.caseSensitive),
      (this.reField.checked = e.regexp),
      (this.wordField.checked = e.wholeWord);
  }
  mount() {
    this.searchField.select();
  }
  get pos() {
    return 80;
  }
  get top() {
    return this.view.state.facet(li).top;
  }
}
function Me(n, e) {
  return n.state.phrase(e);
}
const yn = 30,
  bn = /[\s\.,:;?!]/;
function ao(n, { from: e, to: t }) {
  let i = n.state.doc.lineAt(e),
    s = n.state.doc.lineAt(t).to,
    r = Math.max(i.from, e - yn),
    o = Math.min(s, t + yn),
    l = n.state.sliceDoc(r, o);
  if (r != i.from) {
    for (let a = 0; a < yn; a++)
      if (!bn.test(l[a + 1]) && bn.test(l[a])) {
        l = l.slice(a);
        break;
      }
  }
  if (o != s) {
    for (let a = l.length - 1; a > l.length - yn; a--)
      if (!bn.test(l[a - 1]) && bn.test(l[a])) {
        l = l.slice(0, a);
        break;
      }
  }
  return E.announce.of(
    `${n.state.phrase('current match')}. ${l} ${n.state.phrase('on line')} ${i.number}.`,
  );
}
const Vg = E.baseTheme({
    '.cm-panel.cm-search': {
      padding: '2px 6px 4px',
      position: 'relative',
      '& [name=close]': {
        position: 'absolute',
        top: '0',
        right: '4px',
        backgroundColor: 'inherit',
        border: 'none',
        font: 'inherit',
        padding: 0,
        margin: 0,
      },
      '& input, & button, & label': { margin: '.2em .6em .2em 0' },
      '& input[type=checkbox]': { marginRight: '.2em' },
      '& label': { fontSize: '80%', whiteSpace: 'pre' },
    },
    '&light .cm-searchMatch': { backgroundColor: '#ffff0054' },
    '&dark .cm-searchMatch': { backgroundColor: '#00ffff8a' },
    '&light .cm-searchMatch-selected': { backgroundColor: '#ff6a0054' },
    '&dark .cm-searchMatch-selected': { backgroundColor: '#ff00ff8a' },
  }),
  Wg = [bt, Wt.low(Pg), Vg];
class Lc {
  constructor(e, t, i, s) {
    (this.state = e),
      (this.pos = t),
      (this.explicit = i),
      (this.view = s),
      (this.abortListeners = []),
      (this.abortOnDocChange = !1);
  }
  tokenBefore(e) {
    let t = pe(this.state).resolveInner(this.pos, -1);
    for (; t && e.indexOf(t.name) < 0; ) t = t.parent;
    return t
      ? { from: t.from, to: this.pos, text: this.state.sliceDoc(t.from, this.pos), type: t.type }
      : null;
  }
  matchBefore(e) {
    let t = this.state.doc.lineAt(this.pos),
      i = Math.max(t.from, this.pos - 250),
      s = t.text.slice(i - t.from, this.pos - t.from),
      r = s.search(Bc(e, !1));
    return r < 0 ? null : { from: i + r, to: this.pos, text: s.slice(r) };
  }
  get aborted() {
    return this.abortListeners == null;
  }
  addEventListener(e, t, i) {
    e == 'abort' &&
      this.abortListeners &&
      (this.abortListeners.push(t), i && i.onDocChange && (this.abortOnDocChange = !0));
  }
}
function zl(n) {
  let e = Object.keys(n).join(''),
    t = /\w/.test(e);
  return t && (e = e.replace(/\w/g, '')), `[${t ? '\\w' : ''}${e.replace(/[^\w\s]/g, '\\$&')}]`;
}
function zg(n) {
  let e = Object.create(null),
    t = Object.create(null);
  for (let { label: s } of n) {
    e[s[0]] = !0;
    for (let r = 1; r < s.length; r++) t[s[r]] = !0;
  }
  let i = zl(e) + zl(t) + '*$';
  return [new RegExp('^' + i), new RegExp(i)];
}
function qg(n) {
  let e = n.map((s) => (typeof s == 'string' ? { label: s } : s)),
    [t, i] = e.every((s) => /^\w+$/.test(s.label)) ? [/\w*$/, /\w+$/] : zg(e);
  return (s) => {
    let r = s.matchBefore(i);
    return r || s.explicit ? { from: r ? r.from : s.pos, options: e, validFor: t } : null;
  };
}
class ql {
  constructor(e, t, i, s) {
    (this.completion = e), (this.source = t), (this.match = i), (this.score = s);
  }
}
function Rt(n) {
  return n.selection.main.from;
}
function Bc(n, e) {
  var t;
  let { source: i } = n,
    s = e && i[0] != '^',
    r = i[i.length - 1] != '$';
  return !s && !r
    ? n
    : new RegExp(
        `${s ? '^' : ''}(?:${i})${r ? '$' : ''}`,
        (t = n.flags) !== null && t !== void 0 ? t : n.ignoreCase ? 'i' : '',
      );
}
const Pc = ct.define();
function $g(n, e, t, i) {
  let { main: s } = n.selection,
    r = t - s.from,
    o = i - s.from;
  return Object.assign(
    Object.assign(
      {},
      n.changeByRange((l) => {
        if (l != s && t != i && n.sliceDoc(l.from + r, l.from + o) != n.sliceDoc(t, i))
          return { range: l };
        let a = n.toText(e);
        return {
          changes: { from: l.from + r, to: i == s.from ? l.to : l.from + o, insert: a },
          range: b.cursor(l.from + r + a.length),
        };
      }),
    ),
    { scrollIntoView: !0, userEvent: 'input.complete' },
  );
}
const $l = new WeakMap();
function Kg(n) {
  if (!Array.isArray(n)) return n;
  let e = $l.get(n);
  return e || $l.set(n, (e = qg(n))), e;
}
const Qn = P.define(),
  Wi = P.define();
class jg {
  constructor(e) {
    (this.pattern = e),
      (this.chars = []),
      (this.folded = []),
      (this.any = []),
      (this.precise = []),
      (this.byWord = []),
      (this.score = 0),
      (this.matched = []);
    for (let t = 0; t < e.length; ) {
      let i = we(e, t),
        s = Ye(i);
      this.chars.push(i);
      let r = e.slice(t, t + s),
        o = r.toUpperCase();
      this.folded.push(we(o == r ? r.toLowerCase() : o, 0)), (t += s);
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, t) {
    return (this.score = e), (this.matched = t), this;
  }
  match(e) {
    if (this.pattern.length == 0) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let { chars: t, folded: i, any: s, precise: r, byWord: o } = this;
    if (t.length == 1) {
      let x = we(e, 0),
        v = Ye(x),
        k = v == e.length ? 0 : -100;
      if (x != t[0])
        if (x == i[0]) k += -200;
        else return null;
      return this.ret(k, [0, v]);
    }
    let l = e.indexOf(this.pattern);
    if (l == 0)
      return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let a = t.length,
      h = 0;
    if (l < 0) {
      for (let x = 0, v = Math.min(e.length, 200); x < v && h < a; ) {
        let k = we(e, x);
        (k == t[h] || k == i[h]) && (s[h++] = x), (x += Ye(k));
      }
      if (h < a) return null;
    }
    let c = 0,
      f = 0,
      u = !1,
      d = 0,
      p = -1,
      m = -1,
      g = /[a-z]/.test(e),
      y = !0;
    for (let x = 0, v = Math.min(e.length, 200), k = 0; x < v && f < a; ) {
      let w = we(e, x);
      l < 0 &&
        (c < a && w == t[c] && (r[c++] = x),
        d < a && (w == t[d] || w == i[d] ? (d == 0 && (p = x), (m = x + 1), d++) : (d = 0)));
      let S,
        A =
          w < 255
            ? (w >= 48 && w <= 57) || (w >= 97 && w <= 122)
              ? 2
              : w >= 65 && w <= 90
                ? 1
                : 0
            : (S = Pr(w)) != S.toLowerCase()
              ? 1
              : S != S.toUpperCase()
                ? 2
                : 0;
      (!x || (A == 1 && g) || (k == 0 && A != 0)) &&
        (t[f] == w || (i[f] == w && (u = !0)) ? (o[f++] = x) : o.length && (y = !1)),
        (k = A),
        (x += Ye(w));
    }
    return f == a && o[0] == 0 && y
      ? this.result(-100 + (u ? -200 : 0), o, e)
      : d == a && p == 0
        ? this.ret(-200 - e.length + (m == e.length ? 0 : -100), [0, m])
        : l > -1
          ? this.ret(-700 - e.length, [l, l + this.pattern.length])
          : d == a
            ? this.ret(-900 - e.length, [p, m])
            : f == a
              ? this.result(-100 + (u ? -200 : 0) + -700 + (y ? 0 : -1100), o, e)
              : t.length == 2
                ? null
                : this.result((s[0] ? -700 : 0) + -200 + -1100, s, e);
  }
  result(e, t, i) {
    let s = [],
      r = 0;
    for (let o of t) {
      let l = o + (this.astral ? Ye(we(i, o)) : 1);
      r && s[r - 1] == o ? (s[r - 1] = l) : ((s[r++] = o), (s[r++] = l));
    }
    return this.ret(e - i.length, s);
  }
}
class _g {
  constructor(e) {
    (this.pattern = e), (this.matched = []), (this.score = 0), (this.folded = e.toLowerCase());
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let t = e.slice(0, this.pattern.length),
      i = t == this.pattern ? 0 : t.toLowerCase() == this.folded ? -200 : null;
    return i == null
      ? null
      : ((this.matched = [0, t.length]),
        (this.score = i + (e.length == this.pattern.length ? 0 : -100)),
        this);
  }
}
const se = D.define({
  combine(n) {
    return nt(
      n,
      {
        activateOnTyping: !0,
        activateOnCompletion: () => !1,
        activateOnTypingDelay: 100,
        selectOnOpen: !0,
        override: null,
        closeOnBlur: !0,
        maxRenderedOptions: 100,
        defaultKeymap: !0,
        tooltipClass: () => '',
        optionClass: () => '',
        aboveCursor: !1,
        icons: !0,
        addToOptions: [],
        positionInfo: Ug,
        filterStrict: !1,
        compareCompletions: (e, t) => e.label.localeCompare(t.label),
        interactionDelay: 75,
        updateSyncTime: 100,
      },
      {
        defaultKeymap: (e, t) => e && t,
        closeOnBlur: (e, t) => e && t,
        icons: (e, t) => e && t,
        tooltipClass: (e, t) => (i) => Kl(e(i), t(i)),
        optionClass: (e, t) => (i) => Kl(e(i), t(i)),
        addToOptions: (e, t) => e.concat(t),
        filterStrict: (e, t) => e || t,
      },
    );
  },
});
function Kl(n, e) {
  return n ? (e ? n + ' ' + e : n) : e;
}
function Ug(n, e, t, i, s, r) {
  let o = n.textDirection == J.RTL,
    l = o,
    a = !1,
    h = 'top',
    c,
    f,
    u = e.left - s.left,
    d = s.right - e.right,
    p = i.right - i.left,
    m = i.bottom - i.top;
  if ((l && u < Math.min(p, d) ? (l = !1) : !l && d < Math.min(p, u) && (l = !0), p <= (l ? u : d)))
    (c = Math.max(s.top, Math.min(t.top, s.bottom - m)) - e.top), (f = Math.min(400, l ? u : d));
  else {
    (a = !0), (f = Math.min(400, (o ? e.right : s.right - e.left) - 30));
    let x = s.bottom - e.bottom;
    x >= m || x > e.top ? (c = t.bottom - e.top) : ((h = 'bottom'), (c = e.bottom - t.top));
  }
  let g = (e.bottom - e.top) / r.offsetHeight,
    y = (e.right - e.left) / r.offsetWidth;
  return {
    style: `${h}: ${c / g}px; max-width: ${f / y}px`,
    class: 'cm-completionInfo-' + (a ? (o ? 'left-narrow' : 'right-narrow') : l ? 'left' : 'right'),
  };
}
function Gg(n) {
  let e = n.addToOptions.slice();
  return (
    n.icons &&
      e.push({
        render(t) {
          let i = document.createElement('div');
          return (
            i.classList.add('cm-completionIcon'),
            t.type && i.classList.add(...t.type.split(/\s+/g).map((s) => 'cm-completionIcon-' + s)),
            i.setAttribute('aria-hidden', 'true'),
            i
          );
        },
        position: 20,
      }),
    e.push(
      {
        render(t, i, s, r) {
          let o = document.createElement('span');
          o.className = 'cm-completionLabel';
          let l = t.displayLabel || t.label,
            a = 0;
          for (let h = 0; h < r.length; ) {
            let c = r[h++],
              f = r[h++];
            c > a && o.appendChild(document.createTextNode(l.slice(a, c)));
            let u = o.appendChild(document.createElement('span'));
            u.appendChild(document.createTextNode(l.slice(c, f))),
              (u.className = 'cm-completionMatchedText'),
              (a = f);
          }
          return a < l.length && o.appendChild(document.createTextNode(l.slice(a))), o;
        },
        position: 50,
      },
      {
        render(t) {
          if (!t.detail) return null;
          let i = document.createElement('span');
          return (i.className = 'cm-completionDetail'), (i.textContent = t.detail), i;
        },
        position: 80,
      },
    ),
    e.sort((t, i) => t.position - i.position).map((t) => t.render)
  );
}
function Ns(n, e, t) {
  if (n <= t) return { from: 0, to: n };
  if ((e < 0 && (e = 0), e <= n >> 1)) {
    let s = Math.floor(e / t);
    return { from: s * t, to: (s + 1) * t };
  }
  let i = Math.floor((n - e) / t);
  return { from: n - (i + 1) * t, to: n - i * t };
}
class Yg {
  constructor(e, t, i) {
    (this.view = e),
      (this.stateField = t),
      (this.applyCompletion = i),
      (this.info = null),
      (this.infoDestroy = null),
      (this.placeInfoReq = {
        read: () => this.measureInfo(),
        write: (a) => this.placeInfo(a),
        key: this,
      }),
      (this.space = null),
      (this.currentClass = '');
    let s = e.state.field(t),
      { options: r, selected: o } = s.open,
      l = e.state.facet(se);
    (this.optionContent = Gg(l)),
      (this.optionClass = l.optionClass),
      (this.tooltipClass = l.tooltipClass),
      (this.range = Ns(r.length, o, l.maxRenderedOptions)),
      (this.dom = document.createElement('div')),
      (this.dom.className = 'cm-tooltip-autocomplete'),
      this.updateTooltipClass(e.state),
      this.dom.addEventListener('mousedown', (a) => {
        let { options: h } = e.state.field(t).open;
        for (let c = a.target, f; c && c != this.dom; c = c.parentNode)
          if (c.nodeName == 'LI' && (f = /-(\d+)$/.exec(c.id)) && +f[1] < h.length) {
            this.applyCompletion(e, h[+f[1]]), a.preventDefault();
            return;
          }
      }),
      this.dom.addEventListener('focusout', (a) => {
        let h = e.state.field(this.stateField, !1);
        h &&
          h.tooltip &&
          e.state.facet(se).closeOnBlur &&
          a.relatedTarget != e.contentDOM &&
          e.dispatch({ effects: Wi.of(null) });
      }),
      this.showOptions(r, s.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, t) {
    this.list && this.list.remove(),
      (this.list = this.dom.appendChild(this.createListBox(e, t, this.range))),
      this.list.addEventListener('scroll', () => {
        this.info && this.view.requestMeasure(this.placeInfoReq);
      });
  }
  update(e) {
    var t;
    let i = e.state.field(this.stateField),
      s = e.startState.field(this.stateField);
    if ((this.updateTooltipClass(e.state), i != s)) {
      let { options: r, selected: o, disabled: l } = i.open;
      (!s.open || s.open.options != r) &&
        ((this.range = Ns(r.length, o, e.state.facet(se).maxRenderedOptions)),
        this.showOptions(r, i.id)),
        this.updateSel(),
        l != ((t = s.open) === null || t === void 0 ? void 0 : t.disabled) &&
          this.dom.classList.toggle('cm-tooltip-autocomplete-disabled', !!l);
    }
  }
  updateTooltipClass(e) {
    let t = this.tooltipClass(e);
    if (t != this.currentClass) {
      for (let i of this.currentClass.split(' ')) i && this.dom.classList.remove(i);
      for (let i of t.split(' ')) i && this.dom.classList.add(i);
      this.currentClass = t;
    }
  }
  positioned(e) {
    (this.space = e), this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField),
      t = e.open;
    if (
      (((t.selected > -1 && t.selected < this.range.from) || t.selected >= this.range.to) &&
        ((this.range = Ns(
          t.options.length,
          t.selected,
          this.view.state.facet(se).maxRenderedOptions,
        )),
        this.showOptions(t.options, e.id)),
      this.updateSelectedOption(t.selected))
    ) {
      this.destroyInfo();
      let { completion: i } = t.options[t.selected],
        { info: s } = i;
      if (!s) return;
      let r = typeof s == 'string' ? document.createTextNode(s) : s(i);
      if (!r) return;
      'then' in r
        ? r
            .then((o) => {
              o && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(o, i);
            })
            .catch((o) => Se(this.view.state, o, 'completion info'))
        : this.addInfoPane(r, i);
    }
  }
  addInfoPane(e, t) {
    this.destroyInfo();
    let i = (this.info = document.createElement('div'));
    if (((i.className = 'cm-tooltip cm-completionInfo'), e.nodeType != null))
      i.appendChild(e), (this.infoDestroy = null);
    else {
      let { dom: s, destroy: r } = e;
      i.appendChild(s), (this.infoDestroy = r || null);
    }
    this.dom.appendChild(i), this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    let t = null;
    for (let i = this.list.firstChild, s = this.range.from; i; i = i.nextSibling, s++)
      i.nodeName != 'LI' || !i.id
        ? s--
        : s == e
          ? i.hasAttribute('aria-selected') || (i.setAttribute('aria-selected', 'true'), (t = i))
          : i.hasAttribute('aria-selected') && i.removeAttribute('aria-selected');
    return t && Xg(this.list, t), t;
  }
  measureInfo() {
    let e = this.dom.querySelector('[aria-selected]');
    if (!e || !this.info) return null;
    let t = this.dom.getBoundingClientRect(),
      i = this.info.getBoundingClientRect(),
      s = e.getBoundingClientRect(),
      r = this.space;
    if (!r) {
      let o = this.dom.ownerDocument.documentElement;
      r = { left: 0, top: 0, right: o.clientWidth, bottom: o.clientHeight };
    }
    return s.top > Math.min(r.bottom, t.bottom) - 10 || s.bottom < Math.max(r.top, t.top) + 10
      ? null
      : this.view.state.facet(se).positionInfo(this.view, t, s, i, r, this.dom);
  }
  placeInfo(e) {
    this.info &&
      (e
        ? (e.style && (this.info.style.cssText = e.style),
          (this.info.className = 'cm-tooltip cm-completionInfo ' + (e.class || '')))
        : (this.info.style.cssText = 'top: -1e6px'));
  }
  createListBox(e, t, i) {
    const s = document.createElement('ul');
    (s.id = t),
      s.setAttribute('role', 'listbox'),
      s.setAttribute('aria-expanded', 'true'),
      s.setAttribute('aria-label', this.view.state.phrase('Completions')),
      s.addEventListener('mousedown', (o) => {
        o.target == s && o.preventDefault();
      });
    let r = null;
    for (let o = i.from; o < i.to; o++) {
      let { completion: l, match: a } = e[o],
        { section: h } = l;
      if (h) {
        let u = typeof h == 'string' ? h : h.name;
        if (u != r && (o > i.from || i.from == 0))
          if (((r = u), typeof h != 'string' && h.header)) s.appendChild(h.header(h));
          else {
            let d = s.appendChild(document.createElement('completion-section'));
            d.textContent = u;
          }
      }
      const c = s.appendChild(document.createElement('li'));
      (c.id = t + '-' + o), c.setAttribute('role', 'option');
      let f = this.optionClass(l);
      f && (c.className = f);
      for (let u of this.optionContent) {
        let d = u(l, this.view.state, this.view, a);
        d && c.appendChild(d);
      }
    }
    return (
      i.from && s.classList.add('cm-completionListIncompleteTop'),
      i.to < e.length && s.classList.add('cm-completionListIncompleteBottom'),
      s
    );
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), (this.info = null));
  }
  destroy() {
    this.destroyInfo();
  }
}
function Jg(n, e) {
  return (t) => new Yg(t, n, e);
}
function Xg(n, e) {
  let t = n.getBoundingClientRect(),
    i = e.getBoundingClientRect(),
    s = t.height / n.offsetHeight;
  i.top < t.top
    ? (n.scrollTop -= (t.top - i.top) / s)
    : i.bottom > t.bottom && (n.scrollTop += (i.bottom - t.bottom) / s);
}
function jl(n) {
  return (n.boost || 0) * 100 + (n.apply ? 10 : 0) + (n.info ? 5 : 0) + (n.type ? 1 : 0);
}
function Qg(n, e) {
  let t = [],
    i = null,
    s = (h) => {
      t.push(h);
      let { section: c } = h.completion;
      if (c) {
        i || (i = []);
        let f = typeof c == 'string' ? c : c.name;
        i.some((u) => u.name == f) || i.push(typeof c == 'string' ? { name: f } : c);
      }
    },
    r = e.facet(se);
  for (let h of n)
    if (h.hasResult()) {
      let c = h.result.getMatch;
      if (h.result.filter === !1)
        for (let f of h.result.options) s(new ql(f, h.source, c ? c(f) : [], 1e9 - t.length));
      else {
        let f = e.sliceDoc(h.from, h.to),
          u,
          d = r.filterStrict ? new _g(f) : new jg(f);
        for (let p of h.result.options)
          if ((u = d.match(p.label))) {
            let m = p.displayLabel ? (c ? c(p, u.matched) : []) : u.matched;
            s(new ql(p, h.source, m, u.score + (p.boost || 0)));
          }
      }
    }
  if (i) {
    let h = Object.create(null),
      c = 0,
      f = (u, d) => {
        var p, m;
        return (
          ((p = u.rank) !== null && p !== void 0 ? p : 1e9) -
            ((m = d.rank) !== null && m !== void 0 ? m : 1e9) || (u.name < d.name ? -1 : 1)
        );
      };
    for (let u of i.sort(f)) (c -= 1e5), (h[u.name] = c);
    for (let u of t) {
      let { section: d } = u.completion;
      d && (u.score += h[typeof d == 'string' ? d : d.name]);
    }
  }
  let o = [],
    l = null,
    a = r.compareCompletions;
  for (let h of t.sort((c, f) => f.score - c.score || a(c.completion, f.completion))) {
    let c = h.completion;
    !l ||
    l.label != c.label ||
    l.detail != c.detail ||
    (l.type != null && c.type != null && l.type != c.type) ||
    l.apply != c.apply ||
    l.boost != c.boost
      ? o.push(h)
      : jl(h.completion) > jl(l) && (o[o.length - 1] = h),
      (l = h.completion);
  }
  return o;
}
class _t {
  constructor(e, t, i, s, r, o) {
    (this.options = e),
      (this.attrs = t),
      (this.tooltip = i),
      (this.timestamp = s),
      (this.selected = r),
      (this.disabled = o);
  }
  setSelected(e, t) {
    return e == this.selected || e >= this.options.length
      ? this
      : new _t(this.options, _l(t, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, t, i, s, r, o) {
    if (s && !o && e.some((h) => h.isPending)) return s.setDisabled();
    let l = Qg(e, t);
    if (!l.length) return s && e.some((h) => h.isPending) ? s.setDisabled() : null;
    let a = t.facet(se).selectOnOpen ? 0 : -1;
    if (s && s.selected != a && s.selected != -1) {
      let h = s.options[s.selected].completion;
      for (let c = 0; c < l.length; c++)
        if (l[c].completion == h) {
          a = c;
          break;
        }
    }
    return new _t(
      l,
      _l(i, a),
      {
        pos: e.reduce((h, c) => (c.hasResult() ? Math.min(h, c.from) : h), 1e8),
        create: s0,
        above: r.aboveCursor,
      },
      s ? s.timestamp : Date.now(),
      a,
      !1,
    );
  }
  map(e) {
    return new _t(
      this.options,
      this.attrs,
      Object.assign(Object.assign({}, this.tooltip), { pos: e.mapPos(this.tooltip.pos) }),
      this.timestamp,
      this.selected,
      this.disabled,
    );
  }
  setDisabled() {
    return new _t(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class Zn {
  constructor(e, t, i) {
    (this.active = e), (this.id = t), (this.open = i);
  }
  static start() {
    return new Zn(i0, 'cm-ac-' + Math.floor(Math.random() * 2e6).toString(36), null);
  }
  update(e) {
    let { state: t } = e,
      i = t.facet(se),
      r = (i.override || t.languageDataAt('autocomplete', Rt(t)).map(Kg)).map((a) =>
        (
          this.active.find((c) => c.source == a) ||
          new Pe(a, this.active.some((c) => c.state != 0) ? 1 : 0)
        ).update(e, i),
      );
    r.length == this.active.length && r.every((a, h) => a == this.active[h]) && (r = this.active);
    let o = this.open,
      l = e.effects.some((a) => a.is(ho));
    o && e.docChanged && (o = o.map(e.changes)),
      e.selection ||
      r.some((a) => a.hasResult() && e.changes.touchesRange(a.from, a.to)) ||
      !Zg(r, this.active) ||
      l
        ? (o = _t.build(r, t, this.id, o, i, l))
        : o && o.disabled && !r.some((a) => a.isPending) && (o = null),
      !o &&
        r.every((a) => !a.isPending) &&
        r.some((a) => a.hasResult()) &&
        (r = r.map((a) => (a.hasResult() ? new Pe(a.source, 0) : a)));
    for (let a of e.effects) a.is(Ic) && (o = o && o.setSelected(a.value, this.id));
    return r == this.active && o == this.open ? this : new Zn(r, this.id, o);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? e0 : t0;
  }
}
function Zg(n, e) {
  if (n == e) return !0;
  for (let t = 0, i = 0; ; ) {
    for (; t < n.length && !n[t].hasResult(); ) t++;
    for (; i < e.length && !e[i].hasResult(); ) i++;
    let s = t == n.length,
      r = i == e.length;
    if (s || r) return s == r;
    if (n[t++].result != e[i++].result) return !1;
  }
}
const e0 = { 'aria-autocomplete': 'list' },
  t0 = {};
function _l(n, e) {
  let t = { 'aria-autocomplete': 'list', 'aria-haspopup': 'listbox', 'aria-controls': n };
  return e > -1 && (t['aria-activedescendant'] = n + '-' + e), t;
}
const i0 = [];
function Rc(n, e) {
  if (n.isUserEvent('input.complete')) {
    let i = n.annotation(Pc);
    if (i && e.activateOnCompletion(i)) return 12;
  }
  let t = n.isUserEvent('input.type');
  return t && e.activateOnTyping
    ? 5
    : t
      ? 1
      : n.isUserEvent('delete.backward')
        ? 2
        : n.selection
          ? 8
          : n.docChanged
            ? 16
            : 0;
}
class Pe {
  constructor(e, t, i = !1) {
    (this.source = e), (this.state = t), (this.explicit = i);
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return this.state == 1;
  }
  update(e, t) {
    let i = Rc(e, t),
      s = this;
    (i & 8 || (i & 16 && this.touches(e))) && (s = new Pe(s.source, 0)),
      i & 4 && s.state == 0 && (s = new Pe(this.source, 1)),
      (s = s.updateFor(e, i));
    for (let r of e.effects)
      if (r.is(Qn)) s = new Pe(s.source, 1, r.value);
      else if (r.is(Wi)) s = new Pe(s.source, 0);
      else if (r.is(ho)) for (let o of r.value) o.source == s.source && (s = o);
    return s;
  }
  updateFor(e, t) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(Rt(e.state));
  }
}
class Xt extends Pe {
  constructor(e, t, i, s, r, o) {
    super(e, 3, t), (this.limit = i), (this.result = s), (this.from = r), (this.to = o);
  }
  hasResult() {
    return !0;
  }
  updateFor(e, t) {
    var i;
    if (!(t & 3)) return this.map(e.changes);
    let s = this.result;
    s.map && !e.changes.empty && (s = s.map(s, e.changes));
    let r = e.changes.mapPos(this.from),
      o = e.changes.mapPos(this.to, 1),
      l = Rt(e.state);
    if (l > o || !s || (t & 2 && (Rt(e.startState) == this.from || l < this.limit)))
      return new Pe(this.source, t & 4 ? 1 : 0);
    let a = e.changes.mapPos(this.limit);
    return n0(s.validFor, e.state, r, o)
      ? new Xt(this.source, this.explicit, a, s, r, o)
      : s.update && (s = s.update(s, r, o, new Lc(e.state, l, !1)))
        ? new Xt(
            this.source,
            this.explicit,
            a,
            s,
            s.from,
            (i = s.to) !== null && i !== void 0 ? i : Rt(e.state),
          )
        : new Pe(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty
      ? this
      : (this.result.map ? this.result.map(this.result, e) : this.result)
        ? new Xt(
            this.source,
            this.explicit,
            e.mapPos(this.limit),
            this.result,
            e.mapPos(this.from),
            e.mapPos(this.to, 1),
          )
        : new Pe(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function n0(n, e, t, i) {
  if (!n) return !1;
  let s = e.sliceDoc(t, i);
  return typeof n == 'function' ? n(s, t, i, e) : Bc(n, !0).test(s);
}
const ho = P.define({
    map(n, e) {
      return n.map((t) => t.map(e));
    },
  }),
  Ic = P.define(),
  ke = re.define({
    create() {
      return Zn.start();
    },
    update(n, e) {
      return n.update(e);
    },
    provide: (n) => [Yr.from(n, (e) => e.tooltip), E.contentAttributes.from(n, (e) => e.attrs)],
  });
function co(n, e) {
  const t = e.completion.apply || e.completion.label;
  let i = n.state.field(ke).active.find((s) => s.source == e.source);
  return i instanceof Xt
    ? (typeof t == 'string'
        ? n.dispatch(
            Object.assign(Object.assign({}, $g(n.state, t, i.from, i.to)), {
              annotations: Pc.of(e.completion),
            }),
          )
        : t(n, e.completion, i.from, i.to),
      !0)
    : !1;
}
const s0 = Jg(ke, co);
function xn(n, e = 'option') {
  return (t) => {
    let i = t.state.field(ke, !1);
    if (
      !i ||
      !i.open ||
      i.open.disabled ||
      Date.now() - i.open.timestamp < t.state.facet(se).interactionDelay
    )
      return !1;
    let s = 1,
      r;
    e == 'page' &&
      (r = Sh(t, i.open.tooltip)) &&
      (s = Math.max(
        2,
        Math.floor(r.dom.offsetHeight / r.dom.querySelector('li').offsetHeight) - 1,
      ));
    let { length: o } = i.open.options,
      l = i.open.selected > -1 ? i.open.selected + s * (n ? 1 : -1) : n ? 0 : o - 1;
    return (
      l < 0 ? (l = e == 'page' ? 0 : o - 1) : l >= o && (l = e == 'page' ? o - 1 : 0),
      t.dispatch({ effects: Ic.of(l) }),
      !0
    );
  };
}
const r0 = (n) => {
    let e = n.state.field(ke, !1);
    return n.state.readOnly ||
      !e ||
      !e.open ||
      e.open.selected < 0 ||
      e.open.disabled ||
      Date.now() - e.open.timestamp < n.state.facet(se).interactionDelay
      ? !1
      : co(n, e.open.options[e.open.selected]);
  },
  Ul = (n) => (n.state.field(ke, !1) ? (n.dispatch({ effects: Qn.of(!0) }), !0) : !1),
  o0 = (n) => {
    let e = n.state.field(ke, !1);
    return !e || !e.active.some((t) => t.state != 0)
      ? !1
      : (n.dispatch({ effects: Wi.of(null) }), !0);
  };
class l0 {
  constructor(e, t) {
    (this.active = e),
      (this.context = t),
      (this.time = Date.now()),
      (this.updates = []),
      (this.done = void 0);
  }
}
const a0 = 50,
  h0 = 1e3,
  c0 = te.fromClass(
    class {
      constructor(n) {
        (this.view = n),
          (this.debounceUpdate = -1),
          (this.running = []),
          (this.debounceAccept = -1),
          (this.pendingStart = !1),
          (this.composing = 0);
        for (let e of n.state.field(ke).active) e.isPending && this.startQuery(e);
      }
      update(n) {
        let e = n.state.field(ke),
          t = n.state.facet(se);
        if (!n.selectionSet && !n.docChanged && n.startState.field(ke) == e) return;
        let i = n.transactions.some((r) => {
          let o = Rc(r, t);
          return o & 8 || ((r.selection || r.docChanged) && !(o & 3));
        });
        for (let r = 0; r < this.running.length; r++) {
          let o = this.running[r];
          if (
            i ||
            (o.context.abortOnDocChange && n.docChanged) ||
            (o.updates.length + n.transactions.length > a0 && Date.now() - o.time > h0)
          ) {
            for (let l of o.context.abortListeners)
              try {
                l();
              } catch (a) {
                Se(this.view.state, a);
              }
            (o.context.abortListeners = null), this.running.splice(r--, 1);
          } else o.updates.push(...n.transactions);
        }
        this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate),
          n.transactions.some((r) => r.effects.some((o) => o.is(Qn))) && (this.pendingStart = !0);
        let s = this.pendingStart ? 50 : t.activateOnTypingDelay;
        if (
          ((this.debounceUpdate = e.active.some(
            (r) => r.isPending && !this.running.some((o) => o.active.source == r.source),
          )
            ? setTimeout(() => this.startUpdate(), s)
            : -1),
          this.composing != 0)
        )
          for (let r of n.transactions)
            r.isUserEvent('input.type')
              ? (this.composing = 2)
              : this.composing == 2 && r.selection && (this.composing = 3);
      }
      startUpdate() {
        (this.debounceUpdate = -1), (this.pendingStart = !1);
        let { state: n } = this.view,
          e = n.field(ke);
        for (let t of e.active)
          t.isPending &&
            !this.running.some((i) => i.active.source == t.source) &&
            this.startQuery(t);
        this.running.length &&
          e.open &&
          e.open.disabled &&
          (this.debounceAccept = setTimeout(
            () => this.accept(),
            this.view.state.facet(se).updateSyncTime,
          ));
      }
      startQuery(n) {
        let { state: e } = this.view,
          t = Rt(e),
          i = new Lc(e, t, n.explicit, this.view),
          s = new l0(n, i);
        this.running.push(s),
          Promise.resolve(n.source(i)).then(
            (r) => {
              s.context.aborted || ((s.done = r || null), this.scheduleAccept());
            },
            (r) => {
              this.view.dispatch({ effects: Wi.of(null) }), Se(this.view.state, r);
            },
          );
      }
      scheduleAccept() {
        this.running.every((n) => n.done !== void 0)
          ? this.accept()
          : this.debounceAccept < 0 &&
            (this.debounceAccept = setTimeout(
              () => this.accept(),
              this.view.state.facet(se).updateSyncTime,
            ));
      }
      accept() {
        var n;
        this.debounceAccept > -1 && clearTimeout(this.debounceAccept), (this.debounceAccept = -1);
        let e = [],
          t = this.view.state.facet(se),
          i = this.view.state.field(ke);
        for (let s = 0; s < this.running.length; s++) {
          let r = this.running[s];
          if (r.done === void 0) continue;
          if ((this.running.splice(s--, 1), r.done)) {
            let l = Rt(r.updates.length ? r.updates[0].startState : this.view.state),
              a = Math.min(l, r.done.from + (r.active.explicit ? 0 : 1)),
              h = new Xt(
                r.active.source,
                r.active.explicit,
                a,
                r.done,
                r.done.from,
                (n = r.done.to) !== null && n !== void 0 ? n : l,
              );
            for (let c of r.updates) h = h.update(c, t);
            if (h.hasResult()) {
              e.push(h);
              continue;
            }
          }
          let o = i.active.find((l) => l.source == r.active.source);
          if (o && o.isPending)
            if (r.done == null) {
              let l = new Pe(r.active.source, 0);
              for (let a of r.updates) l = l.update(a, t);
              l.isPending || e.push(l);
            } else this.startQuery(o);
        }
        (e.length || (i.open && i.open.disabled)) && this.view.dispatch({ effects: ho.of(e) });
      }
    },
    {
      eventHandlers: {
        blur(n) {
          let e = this.view.state.field(ke, !1);
          if (e && e.tooltip && this.view.state.facet(se).closeOnBlur) {
            let t = e.open && Sh(this.view, e.open.tooltip);
            (!t || !t.dom.contains(n.relatedTarget)) &&
              setTimeout(() => this.view.dispatch({ effects: Wi.of(null) }), 10);
          }
        },
        compositionstart() {
          this.composing = 1;
        },
        compositionend() {
          this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Qn.of(!1) }), 20),
            (this.composing = 0);
        },
      },
    },
  ),
  f0 = typeof navigator == 'object' && /Win/.test(navigator.platform),
  u0 = Wt.highest(
    E.domEventHandlers({
      keydown(n, e) {
        let t = e.state.field(ke, !1);
        if (
          !t ||
          !t.open ||
          t.open.disabled ||
          t.open.selected < 0 ||
          n.key.length > 1 ||
          (n.ctrlKey && !(f0 && n.altKey)) ||
          n.metaKey
        )
          return !1;
        let i = t.open.options[t.open.selected],
          s = t.active.find((o) => o.source == i.source),
          r = i.completion.commitCharacters || s.result.commitCharacters;
        return r && r.indexOf(n.key) > -1 && co(e, i), !1;
      },
    }),
  ),
  d0 = E.baseTheme({
    '.cm-tooltip.cm-tooltip-autocomplete': {
      '& > ul': {
        fontFamily: 'monospace',
        whiteSpace: 'nowrap',
        overflow: 'hidden auto',
        maxWidth_fallback: '700px',
        maxWidth: 'min(700px, 95vw)',
        minWidth: '250px',
        maxHeight: '10em',
        height: '100%',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& > li, & > completion-section': { padding: '1px 3px', lineHeight: 1.2 },
        '& > li': { overflowX: 'hidden', textOverflow: 'ellipsis', cursor: 'pointer' },
        '& > completion-section': {
          display: 'list-item',
          borderBottom: '1px solid silver',
          paddingLeft: '0.5em',
          opacity: 0.7,
        },
      },
    },
    '&light .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#17c', color: 'white' },
    '&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]': { background: '#777' },
    '&dark .cm-tooltip-autocomplete ul li[aria-selected]': { background: '#347', color: 'white' },
    '&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]': { background: '#444' },
    '.cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after': {
      content: '"···"',
      opacity: 0.5,
      display: 'block',
      textAlign: 'center',
    },
    '.cm-tooltip.cm-completionInfo': {
      position: 'absolute',
      padding: '3px 9px',
      width: 'max-content',
      maxWidth: '400px',
      boxSizing: 'border-box',
      whiteSpace: 'pre-line',
    },
    '.cm-completionInfo.cm-completionInfo-left': { right: '100%' },
    '.cm-completionInfo.cm-completionInfo-right': { left: '100%' },
    '.cm-completionInfo.cm-completionInfo-left-narrow': { right: '30px' },
    '.cm-completionInfo.cm-completionInfo-right-narrow': { left: '30px' },
    '&light .cm-snippetField': { backgroundColor: '#00000022' },
    '&dark .cm-snippetField': { backgroundColor: '#ffffff22' },
    '.cm-snippetFieldPosition': {
      verticalAlign: 'text-top',
      width: 0,
      height: '1.15em',
      display: 'inline-block',
      margin: '0 -0.7px -.7em',
      borderLeft: '1.4px dotted #888',
    },
    '.cm-completionMatchedText': { textDecoration: 'underline' },
    '.cm-completionDetail': { marginLeft: '0.5em', fontStyle: 'italic' },
    '.cm-completionIcon': {
      fontSize: '90%',
      width: '.8em',
      display: 'inline-block',
      textAlign: 'center',
      paddingRight: '.6em',
      opacity: '0.6',
      boxSizing: 'content-box',
    },
    '.cm-completionIcon-function, .cm-completionIcon-method': { '&:after': { content: "'ƒ'" } },
    '.cm-completionIcon-class': { '&:after': { content: "'○'" } },
    '.cm-completionIcon-interface': { '&:after': { content: "'◌'" } },
    '.cm-completionIcon-variable': { '&:after': { content: "'𝑥'" } },
    '.cm-completionIcon-constant': { '&:after': { content: "'𝐶'" } },
    '.cm-completionIcon-type': { '&:after': { content: "'𝑡'" } },
    '.cm-completionIcon-enum': { '&:after': { content: "'∪'" } },
    '.cm-completionIcon-property': { '&:after': { content: "'□'" } },
    '.cm-completionIcon-keyword': { '&:after': { content: "'🔑︎'" } },
    '.cm-completionIcon-namespace': { '&:after': { content: "'▢'" } },
    '.cm-completionIcon-text': {
      '&:after': { content: "'abc'", fontSize: '50%', verticalAlign: 'middle' },
    },
  }),
  zi = { brackets: ['(', '[', '{', "'", '"'], before: ')]}:;>', stringPrefixes: [] },
  Lt = P.define({
    map(n, e) {
      let t = e.mapPos(n, -1, ye.TrackAfter);
      return t ?? void 0;
    },
  }),
  fo = new (class extends It {})();
fo.startSide = 1;
fo.endSide = -1;
const Nc = re.define({
  create() {
    return W.empty;
  },
  update(n, e) {
    if (((n = n.map(e.changes)), e.selection)) {
      let t = e.state.doc.lineAt(e.selection.main.head);
      n = n.update({ filter: (i) => i >= t.from && i <= t.to });
    }
    for (let t of e.effects) t.is(Lt) && (n = n.update({ add: [fo.range(t.value, t.value + 1)] }));
    return n;
  },
});
function p0() {
  return [g0, Nc];
}
const Hs = '()[]{}<>«»»«［］｛｝';
function Hc(n) {
  for (let e = 0; e < Hs.length; e += 2) if (Hs.charCodeAt(e) == n) return Hs.charAt(e + 1);
  return Pr(n < 128 ? n : n + 1);
}
function Fc(n, e) {
  return n.languageDataAt('closeBrackets', e)[0] || zi;
}
const m0 = typeof navigator == 'object' && /Android\b/.test(navigator.userAgent),
  g0 = E.inputHandler.of((n, e, t, i) => {
    if ((m0 ? n.composing : n.compositionStarted) || n.state.readOnly) return !1;
    let s = n.state.selection.main;
    if (i.length > 2 || (i.length == 2 && Ye(we(i, 0)) == 1) || e != s.from || t != s.to) return !1;
    let r = x0(n.state, i);
    return r ? (n.dispatch(r), !0) : !1;
  }),
  y0 = ({ state: n, dispatch: e }) => {
    if (n.readOnly) return !1;
    let i = Fc(n, n.selection.main.head).brackets || zi.brackets,
      s = null,
      r = n.changeByRange((o) => {
        if (o.empty) {
          let l = w0(n.doc, o.head);
          for (let a of i)
            if (a == l && us(n.doc, o.head) == Hc(we(a, 0)))
              return {
                changes: { from: o.head - a.length, to: o.head + a.length },
                range: b.cursor(o.head - a.length),
              };
        }
        return { range: (s = o) };
      });
    return s || e(n.update(r, { scrollIntoView: !0, userEvent: 'delete.backward' })), !s;
  },
  b0 = [{ key: 'Backspace', run: y0 }];
function x0(n, e) {
  let t = Fc(n, n.selection.main.head),
    i = t.brackets || zi.brackets;
  for (let s of i) {
    let r = Hc(we(s, 0));
    if (e == s)
      return r == s ? S0(n, s, i.indexOf(s + s + s) > -1, t) : v0(n, s, r, t.before || zi.before);
    if (e == r && Vc(n, n.selection.main.from)) return k0(n, s, r);
  }
  return null;
}
function Vc(n, e) {
  let t = !1;
  return (
    n.field(Nc).between(0, n.doc.length, (i) => {
      i == e && (t = !0);
    }),
    t
  );
}
function us(n, e) {
  let t = n.sliceString(e, e + 2);
  return t.slice(0, Ye(we(t, 0)));
}
function w0(n, e) {
  let t = n.sliceString(e - 2, e);
  return Ye(we(t, 0)) == t.length ? t : t.slice(1);
}
function v0(n, e, t, i) {
  let s = null,
    r = n.changeByRange((o) => {
      if (!o.empty)
        return {
          changes: [
            { insert: e, from: o.from },
            { insert: t, from: o.to },
          ],
          effects: Lt.of(o.to + e.length),
          range: b.range(o.anchor + e.length, o.head + e.length),
        };
      let l = us(n.doc, o.head);
      return !l || /\s/.test(l) || i.indexOf(l) > -1
        ? {
            changes: { insert: e + t, from: o.head },
            effects: Lt.of(o.head + e.length),
            range: b.cursor(o.head + e.length),
          }
        : { range: (s = o) };
    });
  return s ? null : n.update(r, { scrollIntoView: !0, userEvent: 'input.type' });
}
function k0(n, e, t) {
  let i = null,
    s = n.changeByRange((r) =>
      r.empty && us(n.doc, r.head) == t
        ? {
            changes: { from: r.head, to: r.head + t.length, insert: t },
            range: b.cursor(r.head + t.length),
          }
        : (i = { range: r }),
    );
  return i ? null : n.update(s, { scrollIntoView: !0, userEvent: 'input.type' });
}
function S0(n, e, t, i) {
  let s = i.stringPrefixes || zi.stringPrefixes,
    r = null,
    o = n.changeByRange((l) => {
      if (!l.empty)
        return {
          changes: [
            { insert: e, from: l.from },
            { insert: e, from: l.to },
          ],
          effects: Lt.of(l.to + e.length),
          range: b.range(l.anchor + e.length, l.head + e.length),
        };
      let a = l.head,
        h = us(n.doc, a),
        c;
      if (h == e) {
        if (Gl(n, a))
          return {
            changes: { insert: e + e, from: a },
            effects: Lt.of(a + e.length),
            range: b.cursor(a + e.length),
          };
        if (Vc(n, a)) {
          let u = t && n.sliceDoc(a, a + e.length * 3) == e + e + e ? e + e + e : e;
          return {
            changes: { from: a, to: a + u.length, insert: u },
            range: b.cursor(a + u.length),
          };
        }
      } else {
        if (
          t &&
          n.sliceDoc(a - 2 * e.length, a) == e + e &&
          (c = Yl(n, a - 2 * e.length, s)) > -1 &&
          Gl(n, c)
        )
          return {
            changes: { insert: e + e + e + e, from: a },
            effects: Lt.of(a + e.length),
            range: b.cursor(a + e.length),
          };
        if (n.charCategorizer(a)(h) != X.Word && Yl(n, a, s) > -1 && !C0(n, a, e, s))
          return {
            changes: { insert: e + e, from: a },
            effects: Lt.of(a + e.length),
            range: b.cursor(a + e.length),
          };
      }
      return { range: (r = l) };
    });
  return r ? null : n.update(o, { scrollIntoView: !0, userEvent: 'input.type' });
}
function Gl(n, e) {
  let t = pe(n).resolveInner(e + 1);
  return t.parent && t.from == e;
}
function C0(n, e, t, i) {
  let s = pe(n).resolveInner(e, -1),
    r = i.reduce((o, l) => Math.max(o, l.length), 0);
  for (let o = 0; o < 5; o++) {
    let l = n.sliceDoc(s.from, Math.min(s.to, s.from + t.length + r)),
      a = l.indexOf(t);
    if (!a || (a > -1 && i.indexOf(l.slice(0, a)) > -1)) {
      let c = s.firstChild;
      for (; c && c.from == s.from && c.to - c.from > t.length + a; ) {
        if (n.sliceDoc(c.to - t.length, c.to) == t) return !1;
        c = c.firstChild;
      }
      return !0;
    }
    let h = s.to == e && s.parent;
    if (!h) break;
    s = h;
  }
  return !1;
}
function Yl(n, e, t) {
  let i = n.charCategorizer(e);
  if (i(n.sliceDoc(e - 1, e)) != X.Word) return e;
  for (let s of t) {
    let r = e - s.length;
    if (n.sliceDoc(r, e) == s && i(n.sliceDoc(r - 1, r)) != X.Word) return r;
  }
  return -1;
}
function A0(n = {}) {
  return [u0, ke, se.of(n), c0, M0, d0];
}
const Wc = [
    { key: 'Ctrl-Space', run: Ul },
    { mac: 'Alt-`', run: Ul },
    { key: 'Escape', run: o0 },
    { key: 'ArrowDown', run: xn(!0) },
    { key: 'ArrowUp', run: xn(!1) },
    { key: 'PageDown', run: xn(!0, 'page') },
    { key: 'PageUp', run: xn(!1, 'page') },
    { key: 'Enter', run: r0 },
  ],
  M0 = Wt.highest(Ur.computeN([se], (n) => (n.facet(se).defaultKeymap ? [Wc] : [])));
class Jl {
  constructor(e, t, i) {
    (this.from = e), (this.to = t), (this.diagnostic = i);
  }
}
class Dt {
  constructor(e, t, i) {
    (this.diagnostics = e), (this.panel = t), (this.selected = i);
  }
  static init(e, t, i) {
    let s = i.facet(qi).markerFilter;
    s && (e = s(e, i));
    let r = e.slice().sort((c, f) => c.from - f.from || c.to - f.to),
      o = new tt(),
      l = [],
      a = 0;
    for (let c = 0; ; ) {
      let f = c == r.length ? null : r[c];
      if (!f && !l.length) break;
      let u, d;
      for (
        l.length
          ? ((u = a), (d = l.reduce((m, g) => Math.min(m, g.to), f && f.from > u ? f.from : 1e8)))
          : ((u = f.from), (d = f.to), l.push(f), c++);
        c < r.length;

      ) {
        let m = r[c];
        if (m.from == u && (m.to > m.from || m.to == u)) l.push(m), c++, (d = Math.min(m.to, d));
        else {
          d = Math.min(m.from, d);
          break;
        }
      }
      let p = V0(l);
      if (
        l.some((m) => m.from == m.to || (m.from == m.to - 1 && i.doc.lineAt(m.from).to == m.from))
      )
        o.add(u, u, O.widget({ widget: new I0(p), diagnostics: l.slice() }));
      else {
        let m = l.reduce((g, y) => (y.markClass ? g + ' ' + y.markClass : g), '');
        o.add(
          u,
          d,
          O.mark({
            class: 'cm-lintRange cm-lintRange-' + p + m,
            diagnostics: l.slice(),
            inclusiveEnd: l.some((g) => g.to > d),
          }),
        );
      }
      a = d;
      for (let m = 0; m < l.length; m++) l[m].to <= a && l.splice(m--, 1);
    }
    let h = o.finish();
    return new Dt(h, t, si(h));
  }
}
function si(n, e = null, t = 0) {
  let i = null;
  return (
    n.between(t, 1e9, (s, r, { spec: o }) => {
      if (!(e && o.diagnostics.indexOf(e) < 0))
        if (!i) i = new Jl(s, r, e || o.diagnostics[0]);
        else {
          if (o.diagnostics.indexOf(i.diagnostic) < 0) return !1;
          i = new Jl(i.from, r, i.diagnostic);
        }
    }),
    i
  );
}
function E0(n, e) {
  let t = e.pos,
    i = e.end || t,
    s = n.state.facet(qi).hideOn(n, t, i);
  if (s != null) return s;
  let r = n.startState.doc.lineAt(e.pos);
  return !!(n.effects.some((o) => o.is(zc)) || n.changes.touchesRange(r.from, Math.max(r.to, i)));
}
function T0(n, e) {
  return n.field(Te, !1) ? e : e.concat(P.appendConfig.of(W0));
}
const zc = P.define(),
  uo = P.define(),
  qc = P.define(),
  Te = re.define({
    create() {
      return new Dt(O.none, null, null);
    },
    update(n, e) {
      if (e.docChanged && n.diagnostics.size) {
        let t = n.diagnostics.map(e.changes),
          i = null,
          s = n.panel;
        if (n.selected) {
          let r = e.changes.mapPos(n.selected.from, 1);
          i = si(t, n.selected.diagnostic, r) || si(t, null, r);
        }
        !t.size && s && e.state.facet(qi).autoPanel && (s = null), (n = new Dt(t, s, i));
      }
      for (let t of e.effects)
        if (t.is(zc)) {
          let i = e.state.facet(qi).autoPanel ? (t.value.length ? $i.open : null) : n.panel;
          n = Dt.init(t.value, i, e.state);
        } else
          t.is(uo)
            ? (n = new Dt(n.diagnostics, t.value ? $i.open : null, n.selected))
            : t.is(qc) && (n = new Dt(n.diagnostics, n.panel, t.value));
      return n;
    },
    provide: (n) => [Ni.from(n, (e) => e.panel), E.decorations.from(n, (e) => e.diagnostics)],
  }),
  D0 = O.mark({ class: 'cm-lintRange cm-lintRange-active' });
function O0(n, e, t) {
  let { diagnostics: i } = n.state.field(Te),
    s,
    r = -1,
    o = -1;
  i.between(e - (t < 0 ? 1 : 0), e + (t > 0 ? 1 : 0), (a, h, { spec: c }) => {
    if (e >= a && e <= h && (a == h || ((e > a || t > 0) && (e < h || t < 0))))
      return (s = c.diagnostics), (r = a), (o = h), !1;
  });
  let l = n.state.facet(qi).tooltipFilter;
  return (
    s && l && (s = l(s, n.state)),
    s
      ? {
          pos: r,
          end: o,
          above: n.state.doc.lineAt(r).to < o,
          create() {
            return { dom: L0(n, s) };
          },
        }
      : null
  );
}
function L0(n, e) {
  return j(
    'ul',
    { class: 'cm-tooltip-lint' },
    e.map((t) => Kc(n, t, !1)),
  );
}
const B0 = (n) => {
    let e = n.state.field(Te, !1);
    (!e || !e.panel) && n.dispatch({ effects: T0(n.state, [uo.of(!0)]) });
    let t = Ii(n, $i.open);
    return t && t.dom.querySelector('.cm-panel-lint ul').focus(), !0;
  },
  Xl = (n) => {
    let e = n.state.field(Te, !1);
    return !e || !e.panel ? !1 : (n.dispatch({ effects: uo.of(!1) }), !0);
  },
  P0 = (n) => {
    let e = n.state.field(Te, !1);
    if (!e) return !1;
    let t = n.state.selection.main,
      i = e.diagnostics.iter(t.to + 1);
    return !i.value && ((i = e.diagnostics.iter(0)), !i.value || (i.from == t.from && i.to == t.to))
      ? !1
      : (n.dispatch({ selection: { anchor: i.from, head: i.to }, scrollIntoView: !0 }), !0);
  },
  R0 = [
    { key: 'Mod-Shift-m', run: B0, preventDefault: !0 },
    { key: 'F8', run: P0 },
  ],
  qi = D.define({
    combine(n) {
      return Object.assign(
        { sources: n.map((e) => e.source).filter((e) => e != null) },
        nt(
          n.map((e) => e.config),
          {
            delay: 750,
            markerFilter: null,
            tooltipFilter: null,
            needsRefresh: null,
            hideOn: () => null,
          },
          { needsRefresh: (e, t) => (e ? (t ? (i) => e(i) || t(i) : e) : t) },
        ),
      );
    },
  });
function $c(n) {
  let e = [];
  if (n)
    e: for (let { name: t } of n) {
      for (let i = 0; i < t.length; i++) {
        let s = t[i];
        if (/[a-zA-Z]/.test(s) && !e.some((r) => r.toLowerCase() == s.toLowerCase())) {
          e.push(s);
          continue e;
        }
      }
      e.push('');
    }
  return e;
}
function Kc(n, e, t) {
  var i;
  let s = t ? $c(e.actions) : [];
  return j(
    'li',
    { class: 'cm-diagnostic cm-diagnostic-' + e.severity },
    j('span', { class: 'cm-diagnosticText' }, e.renderMessage ? e.renderMessage(n) : e.message),
    (i = e.actions) === null || i === void 0
      ? void 0
      : i.map((r, o) => {
          let l = !1,
            a = (u) => {
              if ((u.preventDefault(), l)) return;
              l = !0;
              let d = si(n.state.field(Te).diagnostics, e);
              d && r.apply(n, d.from, d.to);
            },
            { name: h } = r,
            c = s[o] ? h.indexOf(s[o]) : -1,
            f = c < 0 ? h : [h.slice(0, c), j('u', h.slice(c, c + 1)), h.slice(c + 1)];
          return j(
            'button',
            {
              type: 'button',
              class: 'cm-diagnosticAction',
              onclick: a,
              onmousedown: a,
              'aria-label': ` Action: ${h}${c < 0 ? '' : ` (access key "${s[o]})"`}.`,
            },
            f,
          );
        }),
    e.source && j('div', { class: 'cm-diagnosticSource' }, e.source),
  );
}
class I0 extends Ct {
  constructor(e) {
    super(), (this.sev = e);
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return j('span', { class: 'cm-lintPoint cm-lintPoint-' + this.sev });
  }
}
class Ql {
  constructor(e, t) {
    (this.diagnostic = t),
      (this.id = 'item_' + Math.floor(Math.random() * 4294967295).toString(16)),
      (this.dom = Kc(e, t, !0)),
      (this.dom.id = this.id),
      this.dom.setAttribute('role', 'option');
  }
}
class $i {
  constructor(e) {
    (this.view = e), (this.items = []);
    let t = (s) => {
        if (s.keyCode == 27) Xl(this.view), this.view.focus();
        else if (s.keyCode == 38 || s.keyCode == 33)
          this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
        else if (s.keyCode == 40 || s.keyCode == 34)
          this.moveSelection((this.selectedIndex + 1) % this.items.length);
        else if (s.keyCode == 36) this.moveSelection(0);
        else if (s.keyCode == 35) this.moveSelection(this.items.length - 1);
        else if (s.keyCode == 13) this.view.focus();
        else if (s.keyCode >= 65 && s.keyCode <= 90 && this.selectedIndex >= 0) {
          let { diagnostic: r } = this.items[this.selectedIndex],
            o = $c(r.actions);
          for (let l = 0; l < o.length; l++)
            if (o[l].toUpperCase().charCodeAt(0) == s.keyCode) {
              let a = si(this.view.state.field(Te).diagnostics, r);
              a && r.actions[l].apply(e, a.from, a.to);
            }
        } else return;
        s.preventDefault();
      },
      i = (s) => {
        for (let r = 0; r < this.items.length; r++)
          this.items[r].dom.contains(s.target) && this.moveSelection(r);
      };
    (this.list = j('ul', {
      tabIndex: 0,
      role: 'listbox',
      'aria-label': this.view.state.phrase('Diagnostics'),
      onkeydown: t,
      onclick: i,
    })),
      (this.dom = j(
        'div',
        { class: 'cm-panel-lint' },
        this.list,
        j(
          'button',
          {
            type: 'button',
            name: 'close',
            'aria-label': this.view.state.phrase('close'),
            onclick: () => Xl(this.view),
          },
          '×',
        ),
      )),
      this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(Te).selected;
    if (!e) return -1;
    for (let t = 0; t < this.items.length; t++)
      if (this.items[t].diagnostic == e.diagnostic) return t;
    return -1;
  }
  update() {
    let { diagnostics: e, selected: t } = this.view.state.field(Te),
      i = 0,
      s = !1,
      r = null,
      o = new Set();
    for (
      e.between(0, this.view.state.doc.length, (l, a, { spec: h }) => {
        for (let c of h.diagnostics) {
          if (o.has(c)) continue;
          o.add(c);
          let f = -1,
            u;
          for (let d = i; d < this.items.length; d++)
            if (this.items[d].diagnostic == c) {
              f = d;
              break;
            }
          f < 0
            ? ((u = new Ql(this.view, c)), this.items.splice(i, 0, u), (s = !0))
            : ((u = this.items[f]), f > i && (this.items.splice(i, f - i), (s = !0))),
            t && u.diagnostic == t.diagnostic
              ? u.dom.hasAttribute('aria-selected') ||
                (u.dom.setAttribute('aria-selected', 'true'), (r = u))
              : u.dom.hasAttribute('aria-selected') && u.dom.removeAttribute('aria-selected'),
            i++;
        }
      });
      i < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);

    )
      (s = !0), this.items.pop();
    this.items.length == 0 &&
      (this.items.push(
        new Ql(this.view, {
          from: -1,
          to: -1,
          severity: 'info',
          message: this.view.state.phrase('No diagnostics'),
        }),
      ),
      (s = !0)),
      r
        ? (this.list.setAttribute('aria-activedescendant', r.id),
          this.view.requestMeasure({
            key: this,
            read: () => ({
              sel: r.dom.getBoundingClientRect(),
              panel: this.list.getBoundingClientRect(),
            }),
            write: ({ sel: l, panel: a }) => {
              let h = a.height / this.list.offsetHeight;
              l.top < a.top
                ? (this.list.scrollTop -= (a.top - l.top) / h)
                : l.bottom > a.bottom && (this.list.scrollTop += (l.bottom - a.bottom) / h);
            },
          }))
        : this.selectedIndex < 0 && this.list.removeAttribute('aria-activedescendant'),
      s && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function t() {
      let i = e;
      (e = i.nextSibling), i.remove();
    }
    for (let i of this.items)
      if (i.dom.parentNode == this.list) {
        for (; e != i.dom; ) t();
        e = i.dom.nextSibling;
      } else this.list.insertBefore(i.dom, e);
    for (; e; ) t();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let t = this.view.state.field(Te),
      i = si(t.diagnostics, this.items[e].diagnostic);
    i &&
      this.view.dispatch({
        selection: { anchor: i.from, head: i.to },
        scrollIntoView: !0,
        effects: qc.of(i),
      });
  }
  static open(e) {
    return new $i(e);
  }
}
function N0(n, e = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(n)}</svg>')`;
}
function wn(n) {
  return N0(
    `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${n}" fill="none" stroke-width=".7"/>`,
    'width="6" height="3"',
  );
}
const H0 = E.baseTheme({
  '.cm-diagnostic': {
    padding: '3px 6px 3px 8px',
    marginLeft: '-1px',
    display: 'block',
    whiteSpace: 'pre-wrap',
  },
  '.cm-diagnostic-error': { borderLeft: '5px solid #d11' },
  '.cm-diagnostic-warning': { borderLeft: '5px solid orange' },
  '.cm-diagnostic-info': { borderLeft: '5px solid #999' },
  '.cm-diagnostic-hint': { borderLeft: '5px solid #66d' },
  '.cm-diagnosticAction': {
    font: 'inherit',
    border: 'none',
    padding: '2px 4px',
    backgroundColor: '#444',
    color: 'white',
    borderRadius: '3px',
    marginLeft: '8px',
    cursor: 'pointer',
  },
  '.cm-diagnosticSource': { fontSize: '70%', opacity: 0.7 },
  '.cm-lintRange': {
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'repeat-x',
    paddingBottom: '0.7px',
  },
  '.cm-lintRange-error': { backgroundImage: wn('#d11') },
  '.cm-lintRange-warning': { backgroundImage: wn('orange') },
  '.cm-lintRange-info': { backgroundImage: wn('#999') },
  '.cm-lintRange-hint': { backgroundImage: wn('#66d') },
  '.cm-lintRange-active': { backgroundColor: '#ffdd9980' },
  '.cm-tooltip-lint': { padding: 0, margin: 0 },
  '.cm-lintPoint': {
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '-2px',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent',
      borderBottom: '4px solid #d11',
    },
  },
  '.cm-lintPoint-warning': { '&:after': { borderBottomColor: 'orange' } },
  '.cm-lintPoint-info': { '&:after': { borderBottomColor: '#999' } },
  '.cm-lintPoint-hint': { '&:after': { borderBottomColor: '#66d' } },
  '.cm-panel.cm-panel-lint': {
    position: 'relative',
    '& ul': {
      maxHeight: '100px',
      overflowY: 'auto',
      '& [aria-selected]': { backgroundColor: '#ddd', '& u': { textDecoration: 'underline' } },
      '&:focus [aria-selected]': {
        background_fallback: '#bdf',
        backgroundColor: 'Highlight',
        color_fallback: 'white',
        color: 'HighlightText',
      },
      '& u': { textDecoration: 'none' },
      padding: 0,
      margin: 0,
    },
    '& [name=close]': {
      position: 'absolute',
      top: '0',
      right: '2px',
      background: 'inherit',
      border: 'none',
      font: 'inherit',
      padding: 0,
      margin: 0,
    },
  },
});
function F0(n) {
  return n == 'error' ? 4 : n == 'warning' ? 3 : n == 'info' ? 2 : 1;
}
function V0(n) {
  let e = 'hint',
    t = 1;
  for (let i of n) {
    let s = F0(i.severity);
    s > t && ((t = s), (e = i.severity));
  }
  return e;
}
const W0 = [
    Te,
    E.decorations.compute([Te], (n) => {
      let { selected: e, panel: t } = n.field(Te);
      return !e || !t || e.from == e.to ? O.none : O.set([D0.range(e.from, e.to)]);
    }),
    Od(O0, { hideOn: E0 }),
    H0,
  ],
  Zl = [
    zd(),
    Kd(),
    ld(),
    cm(),
    Np(),
    Ju(),
    td(),
    V.allowMultipleSelections.of(!0),
    kp(),
    Fp(zp, { fallback: !0 }),
    Gp(),
    p0(),
    A0(),
    xd(),
    kd(),
    dd(),
    bg(),
    Ur.of([...b0, ...ug, ...Hg, ...xm, ...Bp, ...Wc, ...R0]),
  ],
  Z = {
    lastParseTree: null,
    treeNodeList: [],
    formatTokenValue(n) {
      return `"${n.trim() === '' ? n.replace(/\n/g, '↵') : n}"`;
    },
    renderAndDisplayTree(n) {
      var r, o;
      const e = (r = document.getElementById('compress-checkbox')) == null ? void 0 : r.checked,
        t = (o = document.getElementById('show-hidden-checkbox')) == null ? void 0 : o.checked,
        i = document.getElementById('output');
      (i.className = ''), (i.innerHTML = '');
      const s = this.renderTree(n, { depth: 0, isLast: !0, showHidden: t, compress: e });
      s.classList.add('root-node'),
        i.appendChild(s),
        (this.treeNodeList = []),
        this.collectTreeNodes(n);
    },
    collectTreeNodes(n) {
      var e;
      n.startPos != null && n.endPos != null && n._domElement && this.treeNodeList.push(n),
        (e = n.children) == null || e.forEach((t) => this.collectTreeNodes(t));
    },
    renderTree(n, { depth: e = 0, isLast: t = !0, showHidden: i = !1, compress: s = !1 }) {
      var h, c;
      const r = document.createElement('div');
      (r.className = 'tree-node ' + (t ? 'last-child' : '')),
        (r._startPos = n.startPos),
        (r._endPos = n.endPos),
        (n._domElement = r),
        r.addEventListener('mouseenter', (f) => {
          f.stopPropagation(),
            n.startPos != null && n.endPos != null && I.highlightRange(n.startPos, n.endPos);
        }),
        r.addEventListener('mouseleave', I.clearHighlight);
      const o = document.createElement('div');
      (o.className = 'tree-label'), r.appendChild(o);
      let l = n,
        a = [n.name];
      if (s && n.type === 'rule')
        for (
          ;
          ((h = l.children) == null ? void 0 : h.length) === 1 && l.children[0].type === 'rule';

        )
          (l = l.children[0]), a.push(l.name);
      if (n.type === 'rule' && ((c = l.children) == null ? void 0 : c.length) > 0) {
        const f = document.createElement('span');
        (f.className = 'collapse-toggle-icon'),
          (f.textContent = '▼'),
          (f.title = 'Expand/collapse children'),
          (f.style.cursor = 'pointer'),
          f.addEventListener('click', (p) => {
            p.stopPropagation(), p.detail === 1 && r.classList.toggle('collapsed');
          }),
          o.appendChild(f);
        const u = document.createElement('span');
        (u.className = 'tree-rule'),
          a.forEach((p, m) => {
            const g = document.createElement('span');
            if (((g.textContent = p), u.appendChild(g), m < a.length - 1)) {
              const y = document.createElement('span');
              (y.textContent = ' > '), (y.className = 'tree-rule-separator'), u.appendChild(y);
            }
          }),
          o.appendChild(u);
        const d = document.createElement('div');
        (d.className = 'tree-children'),
          l.children.forEach((p, m) => {
            d.appendChild(
              this.renderTree(p, {
                depth: e + 1,
                isLast: m === l.children.length - 1,
                showHidden: i,
                compress: s,
              }),
            );
          }),
          r.appendChild(d),
          o.addEventListener('dblclick', (p) => {
            p.stopPropagation(),
              n.startPos != null && n.endPos != null && B.moveSelection(n.startPos, n.endPos);
          });
      } else if (n.type === 'token') {
        if (n.hidden && !i) return document.createDocumentFragment();
        const f = document.createElement('span');
        if (((f.className = 'tree-token'), !n.name.startsWith('__ANON'))) {
          const y = document.createElement('span');
          (y.className = 'tree-terminal'), (y.textContent = `${n.name}:`), f.appendChild(y);
        }
        const u = document.createElement('span');
        u.className = 'tree-text-wrapper';
        const d = document.createElement('span');
        (d.className = 'tree-text'), (d.textContent = '"'), u.appendChild(d);
        const p = document.createElement('span');
        p.className = 'tree-text';
        const m = n.startPos ?? 0;
        for (let y = 0; y < n.value.length; y++) {
          const x = document.createElement('span'),
            v =
              n.value[y] ===
                `
` && n.value.trim() === ''
                ? '↵'
                : n.value[y];
          (x.textContent = v), (x.dataset.pos = m + y), p.appendChild(x);
        }
        u.appendChild(p);
        const g = document.createElement('span');
        (g.className = 'tree-text'),
          (g.textContent = '"'),
          u.appendChild(g),
          (n._textElement = p),
          (n._textWrapper = u),
          f.appendChild(u),
          o.appendChild(f),
          o.addEventListener('dblclick', (y) => {
            y.stopPropagation(),
              n.startPos != null && n.endPos != null && B.moveSelection(n.startPos, n.endPos);
          });
      } else {
        const f = document.createElement('span');
        (f.className = 'tree-rule'), (f.textContent = n.name), o.appendChild(f);
      }
      return r;
    },
  },
  Ei = {
    settingsKeys: [
      'parser',
      'lexer',
      'regex',
      'debug',
      'strict',
      'start',
      'compressTree',
      'showHidden',
      'grammarHeight',
      'inputHeight',
      'enableAdvanced',
    ],
    idMap: {
      parser: 'parser-select',
      lexer: 'lexer-select',
      regex: 'regex-select',
      debug: 'debug-checkbox',
      strict: 'strict-checkbox',
      start: 'start-input',
      compressTree: 'compress-checkbox',
      showHidden: 'show-hidden-checkbox',
      enableAdvanced: 'enable-advanced',
    },
    getSettingElement(n) {
      const e = this.idMap[n];
      return e ? document.getElementById(e) : null;
    },
    saveSettings() {
      this.settingsKeys.forEach((n) => {
        const e = this.getSettingElement(n);
        if (!e) return;
        const t = e.type === 'checkbox' ? e.checked : e.value;
        localStorage.setItem(n, t);
      });
    },
    loadSettings() {
      const n = {
        parser: 'earley',
        lexer: 'dynamic',
        regex: 'regex',
        debug: !1,
        strict: !1,
        start: 'pulseprogram',
        compressTree: !0,
        showHidden: !1,
        enableAdvanced: !1,
      };
      this.settingsKeys.forEach((i) => {
        const s = this.getSettingElement(i);
        if (!s) return;
        const r = localStorage.getItem(i),
          o = r !== null ? r : n[i];
        s.type === 'checkbox' ? (s.checked = o === !0 || o === 'true') : (s.value = o);
        const l = s.closest('.setting-item');
        function a() {
          (s.type === 'checkbox' ? s.checked : s.value).toString() !== n[i].toString()
            ? l == null || l.classList.add('setting-dirty')
            : l == null || l.classList.remove('setting-dirty');
        }
        a(),
          s.addEventListener('change', a),
          s.addEventListener('change', () => {
            localStorage.setItem(i, s.type === 'checkbox' ? s.checked : s.value),
              ['compressTree', 'showHidden'].includes(i) &&
                Z.lastParseTree &&
                Z.renderAndDisplayTree(Z.lastParseTree);
          });
      });
      const e = localStorage.getItem('grammarHeight'),
        t = localStorage.getItem('inputHeight');
      e &&
        t &&
        ((document.getElementById('grammar-block').style.flex = `0 0 ${e}px`),
        (document.getElementById('input-block').style.flex = `0 0 ${t}px`));
    },
    saveToLocalStorage() {
      localStorage.setItem('grammar', B.getGrammarValue()),
        localStorage.setItem('pulseCode', B.getInputValue());
    },
    async loadFromLocalStorage() {
      const n = localStorage.getItem('grammar'),
        e = localStorage.getItem('pulseCode');
      if (n !== null) B.setValue(B.grammarEditor, n);
      else {
        const i = await (await fetch('grammars/bruker.lark')).text();
        B.setValue(B.grammarEditor, i), localStorage.setItem('grammar', i);
      }
      if (e !== null) B.setValue(B.inputEditor, e);
      else {
        const i = await (await fetch('example_code/zg')).text();
        B.setValue(B.inputEditor, i), localStorage.setItem('pulseCode', i);
      }
    },
    resetWorkspace() {
      localStorage.clear(),
        B.setValue(B.grammarEditor, ''),
        B.setValue(B.inputEditor, ''),
        I.showToast('Workspace has been reset. Reloading...', 'success'),
        setTimeout(() => location.reload(), 1500);
    },
    toggleSettings() {
      I.toggleSettings();
    },
  },
  B = {
    grammarEditor: null,
    inputEditor: null,
    initEditors: async function () {
      const n = document.getElementById('grammar'),
        e = document.getElementById('input');
      if (!n || !e) return console.error("Missing 'grammar' or 'input'");
      const t = this._setupEditorContainer(n, 'grammar-editor'),
        i = this._setupEditorContainer(e, 'input-editor');
      (this.grammarEditor = new E({
        state: V.create({
          doc: n.value,
          extensions: [
            Zl,
            E.updateListener.of((s) => {
              s.docChanged && Ei.saveToLocalStorage();
            }),
          ],
        }),
        parent: t,
      })),
        (this.inputEditor = new E({
          state: V.create({
            doc: e.value,
            extensions: [
              Zl,
              this.highlightField,
              E.updateListener.of((s) => {
                s.selectionSet && I.handleCursorActivity(), s.docChanged && Ei.saveToLocalStorage();
              }),
            ],
          }),
          parent: i,
        })),
        this._setupDragAndDrop(this.grammarEditor, t, 'Grammar'),
        this._setupDragAndDrop(this.inputEditor, i, 'Input'),
        t.addEventListener('keydown', I.handleKeyShortcut),
        i.addEventListener('keydown', I.handleKeyShortcut),
        Ei.loadSettings();
    },
    _setupEditorContainer(n, e) {
      const t = document.createElement('div');
      return (
        (t.className = `cm-editor ${e}`),
        n.parentNode.insertBefore(t, n),
        (n.style.display = 'none'),
        t
      );
    },
    _setupDragAndDrop(n, e, t) {
      e.addEventListener('dragover', (i) => {
        i.preventDefault(), e.classList.add('drag-hover');
      }),
        e.addEventListener('dragleave', () => {
          e.classList.remove('drag-hover');
        }),
        e.addEventListener('drop', (i) => {
          i.preventDefault(), e.classList.remove('drag-hover');
          const s = i.dataTransfer.files[0];
          if (s != null && s.type.startsWith('text')) {
            const r = new FileReader();
            (r.onload = (o) => {
              n.dispatch({ changes: { from: 0, to: n.state.doc.length, insert: o.target.result } });
            }),
              r.readAsText(s);
          } else alert(`Only text files can be dropped into the ${t} editor.`);
        });
    },
    resizeEditors() {
      var l;
      const n = document.querySelector('.editor-container');
      if (!n) return;
      const e = n.querySelector('.grammar-editor'),
        t = n.querySelector('.input-editor');
      if (!e || !t) return;
      const i = n.clientHeight,
        s =
          ((l = document.getElementById('vertical-divider')) == null ? void 0 : l.offsetHeight) ||
          0;
      let r = parseFloat(localStorage.getItem('grammarHeight')),
        o = parseFloat(localStorage.getItem('inputHeight'));
      (isNaN(r) || isNaN(o)) && ((r = (i - s) / 2), (o = i - s - r)),
        (e.style.height = `${r}px`),
        (t.style.height = `${o}px`);
    },
    getGrammarValue() {
      return this.grammarEditor.state.doc.toString();
    },
    getInputValue() {
      return this.inputEditor.state.doc.toString();
    },
    setValue(n, e) {
      n.dispatch({ changes: { from: 0, to: n.state.doc.length, insert: e } });
    },
    setHighlightEffect: P.define({ map: (n, e) => n.map(e.changes) }),
    highlightField: re.define({
      create() {
        return O.none;
      },
      update(n, e) {
        for (let t of e.effects) t.is(B.setHighlightEffect) && (n = t.value);
        return n.map(e.changes);
      },
      provide: (n) => E.decorations.from(n),
    }),
    scrollToPos(n, e, t = { y: 'center' }) {
      const i = n.coordsAtPos(e);
      if (!i) return;
      const s = n.scrollDOM,
        r = s.clientHeight;
      let o;
      switch (t.y) {
        case 'center':
          o = i.top - r / 2 + (i.bottom - i.top) / 2;
          break;
        case 'start':
          o = i.top;
          break;
        case 'end':
          o = i.bottom - r;
          break;
        case 'nearest': {
          const l = s.scrollTop;
          (i.top < l || i.bottom > l + r) && (o = i.top - r / 2 + (i.bottom - i.top) / 2);
          break;
        }
      }
      o !== void 0 && (s.scrollTop = o);
    },
    moveSelection(n, e) {
      if (!this.inputEditor) return;
      const t = this.inputEditor;
      t.dispatch({ selection: b.range(n, e) }),
        requestAnimationFrame(() => {
          const i = t.coordsAtPos((n + e) / 2);
          if (!i) return;
          const s = t.scrollDOM,
            r = s.getBoundingClientRect(),
            o = i.top,
            l = s.clientHeight,
            a = s.scrollTop + (o - r.top) - l / 2;
          s.scrollTo({ top: a, behavior: 'smooth' });
        });
    },
  };
function pi(n) {
  return document.getElementById(n);
}
function z0() {
  document
    .querySelectorAll('.selected-tree-node')
    .forEach((n) => n.classList.remove('selected-tree-node'));
}
function ea(n) {
  n && n._domElement && n._domElement.classList.remove('highlighted-tree-node');
}
const I = {
    currentHighlight: null,
    treeCursorEl: null,
    lastTreeHighlight: null,
    handleKeyShortcut(n) {
      (n.ctrlKey || n.metaKey) && n.key === 'Enter' && (Bt.runParser(), n.preventDefault());
    },
    handleMouseMoveOnInput(n) {
      const e = B.inputEditor.posAtCoords({ x: n.clientX, y: n.clientY });
      e != null && I.highlightTreeNodeFromInput(e);
    },
    handleMouseLeaveOnInput() {
      I.lastTreeHighlight && (ea(I.lastTreeHighlight), (I.lastTreeHighlight = null));
    },
    handleDoubleClickOnInput() {
      var t;
      const n = B.inputEditor.state.selection.main.from,
        e = I.findDeepestNode(Z.lastParseTree, n);
      if (e && e._domElement) {
        let i = e._domElement;
        for (; i && i.classList; )
          i.classList.remove('collapsed'),
            (i = (t = i.parentElement) == null ? void 0 : t.closest('.tree-node'));
        e._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' }),
          e._domElement.classList.add('selected-tree-node'),
          setTimeout(() => e._domElement.classList.remove('selected-tree-node'), 1e3);
      }
    },
    findDeepestNode(n, e) {
      var s;
      if (n.startPos == null || n.endPos == null || e < n.startPos || e >= n.endPos) return null;
      const t = (s = pi('show-hidden-checkbox')) == null ? void 0 : s.checked;
      if (n.hidden && !t) return null;
      let i = n;
      return (
        n.children &&
          n.children.forEach((r) => {
            const o = I.findDeepestNode(r, e);
            o && (i = o);
          }),
        i
      );
    },
    getFullySelectedNodes(n, e, t) {
      var i, s;
      return n.startPos == null || n.endPos == null
        ? []
        : e <= n.startPos && n.endPos <= t
          ? ((i = n.children) == null ? void 0 : i.length) > 0
            ? n.children.every(
                (o) => o.startPos != null && o.endPos != null && e <= o.startPos && o.endPos <= t,
              )
              ? [n]
              : n.children.flatMap((o) => I.getFullySelectedNodes(o, e, t))
            : [n]
          : ((s = n.children) == null
              ? void 0
              : s.flatMap((r) => I.getFullySelectedNodes(r, e, t))) || [];
    },
    handleCursorActivity() {
      var e, t;
      z0(), I.clearPartialTokenHighlights();
      const n = B.inputEditor.state.selection.ranges;
      if (n.length && !n[0].empty) {
        const { from: i, to: s } = n[0],
          r = I.getFullySelectedNodes(Z.lastParseTree, i, s);
        r.forEach((o) => {
          var l;
          return (l = o._domElement) == null ? void 0 : l.classList.add('selected-tree-node');
        }),
          (t = (e = r.at(-1)) == null ? void 0 : e._domElement) == null ||
            t.scrollIntoView({ behavior: 'smooth', block: 'center' }),
          I.highlightPartialTokens(i, s);
      }
      I.updateTreeCursor();
    },
    updateTreeCursor() {
      var s, r;
      if (((s = I.treeCursorEl) == null || s.remove(), (I.treeCursorEl = null), !Z.lastParseTree))
        return;
      const e = B.inputEditor.state.selection.main.from,
        t = I.findDeepestNode(Z.lastParseTree, e);
      if (!t || !t._domElement) return;
      document
        .querySelectorAll('.highlighted-tree-node-cursor')
        .forEach((o) => o.classList.remove('highlighted-tree-node-cursor'));
      const i = (r = pi('show-hidden-checkbox')) == null ? void 0 : r.checked;
      if (t.hidden && !i) {
        let o = t._domElement;
        for (; (o && !(o instanceof HTMLElement)) || (o && !o.classList.contains('tree-node')); )
          o = o.parentElement;
        if (o) {
          const l = o.getBoundingClientRect(),
            a = o.parentElement.getBoundingClientRect(),
            h = l.top - a.top,
            c = document.createElement('div');
          (c.className = 'tree-cursor tree-cursor-line'),
            (c.style.position = 'absolute'),
            (c.style.top = `${h}px`),
            (c.style.left = '0'),
            (c.style.width = '100%'),
            (o.parentElement.style.position = 'relative'),
            o.parentElement.appendChild(c),
            (I.treeCursorEl = c);
        }
        return;
      }
      if (
        (t._domElement.classList.add('highlighted-tree-node-cursor'),
        t.type === 'token' && t._textWrapper && t.startPos != null)
      ) {
        const o = t._textWrapper,
          l = Array.from(o.querySelectorAll('span[data-pos]')),
          a = e,
          h = document.createElement('span');
        h.className = 'tree-cursor';
        let c = l.find((f) => parseInt(f.dataset.pos, 10) === a);
        if (c) {
          const f = c.getBoundingClientRect(),
            u = o.getBoundingClientRect();
          h.style.left = `${f.left - u.left}px`;
        } else if (a === t.endPos && l.length) {
          const u = l[l.length - 1].getBoundingClientRect(),
            d = o.getBoundingClientRect();
          h.style.left = `${u.right - d.left}px`;
        } else h.style.left = '0px';
        o.appendChild(h), (I.treeCursorEl = h);
      }
      t._domElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    highlightTreeNodeFromInput(n) {
      if (!Z.lastParseTree) return;
      const e = I.findDeepestNode(Z.lastParseTree, n);
      !e ||
        !e._domElement ||
        (ea(I.lastTreeHighlight),
        e._domElement.classList.add('highlighted-tree-node'),
        (I.lastTreeHighlight = e));
    },
    highlightRange(n, e) {
      if (n == null || e == null || n >= e) return;
      const t = new tt();
      t.add(n, e, O.mark({ class: 'highlighted-text' })),
        B.inputEditor.dispatch({ effects: B.setHighlightEffect.of(t.finish()) }),
        (I.currentHighlight = !0);
    },
    clearHighlight() {
      I.currentHighlight &&
        (B.inputEditor.dispatch({ effects: B.setHighlightEffect.of(O.none) }),
        (I.currentHighlight = null));
    },
    showToast(n, e = 'success', t = 3e3) {
      const i = pi('toast');
      if (
        i &&
        ((i.textContent = n),
        (i.className = `toast show ${e}`),
        i.classList.remove('hidden'),
        setTimeout(() => {
          i.classList.remove('show'), setTimeout(() => i.classList.add('hidden'), 300);
        }, t),
        e === 'error')
      ) {
        const s = pi('submit-popover');
        s && s.classList.remove('hidden');
      }
    },
    toggleSettings() {
      var n;
      (n = pi('settings-popover')) == null || n.classList.toggle('hidden');
    },
    highlightPartialTokens(n, e) {
      Z.treeNodeList.forEach((t) => {
        t.type === 'token' &&
          t._textElement &&
          t._textElement.querySelectorAll('span[data-pos]').forEach((i) => {
            const s = parseInt(i.dataset.pos, 10);
            s >= n && s < e
              ? i.classList.add('highlighted-text')
              : i.classList.remove('highlighted-text');
          });
      });
    },
    clearPartialTokenHighlights() {
      Z.treeNodeList.forEach((n) => {
        n._textElement &&
          n._textElement
            .querySelectorAll('.highlighted-text')
            .forEach((e) => e.classList.remove('highlighted-text'));
      });
    },
  },
  Br = {
    worker: null,
    isReady: !1,
    parseButton: null,
    init() {
      (this.worker = new Worker(
        new URL('/pulse/assets/parser_worker-Bb0ztS8H.js', import.meta.url),
      )),
        (this.worker.onerror = this._handleWorkerError),
        (this.parseButton = document.querySelector('.output-header button')),
        this.parseButton &&
          ((this.parseButton.disabled = !0), (this.parseButton.textContent = 'Loading...')),
        (this.worker.onmessage = (n) => this._handleWorkerMessage(n));
    },
    _handleWorkerError(n) {
      console.error('Worker error:', n), I.showToast('❌ Failed to load parser worker', 'error');
    },
    _handleWorkerMessage({ data: n }) {
      const { type: e, tree: t, message: i } = n;
      switch (e) {
        case 'ready':
          (this.isReady = !0),
            I.showToast('Pyodide loaded', 'success'),
            this.parseButton &&
              ((this.parseButton.disabled = !1), (this.parseButton.textContent = 'Parse'));
          break;
        case 'success':
          (Z.lastParseTree = t),
            Z.renderAndDisplayTree(t),
            I.showToast('Parse complete', 'success'),
            (Bt._lastGrammar = B.getGrammarValue()),
            (Bt._lastInput = B.getInputValue());
          break;
        case 'error':
          this._handleParseError(i);
          break;
        default:
          console.warn('Unhandled worker message type:', e);
      }
    },
    _handleParseError(n) {
      const e = document.getElementById('output');
      e.className = 'error';
      const i = /^[A-Za-z]+(?:Error|Exception):/.test(n) ? 'Grammar Error' : 'Runtime Error';
      e.innerHTML = `
      <details>
        <summary>${i}</summary>
        <pre>${n}</pre>
      </details>
    `;
      const s = n.match(/line (\\d+)[^\\d]*column (\\d+)/i);
      if (s) {
        const r = parseInt(s[1], 10),
          o = parseInt(s[2], 10);
        try {
          const a = B.inputEditor.state.doc.line(r).from + o;
          B.moveSelection(a, a);
        } catch (l) {
          console.error('Error converting line/column to position', l);
        }
      }
      (Bt._lastGrammar = ''), (Bt._lastInput = ''), I.showToast(n, 'error');
    },
    parse(n, e, t, i, s, r, o, l) {
      this.worker.postMessage({
        grammar: n,
        text: e,
        start: t,
        parser: i,
        lexer: s,
        debug: r,
        strict: o,
        regex: l,
      });
    },
  };
function ta(n) {
  document.getElementById(n).classList.toggle('hidden');
}
const Bt = {
  _lastGrammar: '',
  _lastInput: '',
  runParser() {
    var a, h, c, f, u, d;
    if (!Br.isReady) return I.showToast('Pyodide is still loading...', 'error');
    if (!this.hasContentChanged()) return console.log('No changes detected. Skipping parse.');
    const n = B.getGrammarValue(),
      e = B.getInputValue(),
      t = ((a = document.getElementById('start-input')) == null ? void 0 : a.value) || 'start',
      i = ((h = document.getElementById('parser-select')) == null ? void 0 : h.value) || 'earley',
      s = ((c = document.getElementById('lexer-select')) == null ? void 0 : c.value) || 'dynamic',
      r = ((f = document.getElementById('debug-checkbox')) == null ? void 0 : f.checked) || !1,
      o = ((u = document.getElementById('strict-checkbox')) == null ? void 0 : u.checked) || !1,
      l = ((d = document.getElementById('regex-select')) == null ? void 0 : d.value) === 'regex';
    (document.getElementById('output').textContent = 'Parsing...'),
      Br.parse(n, e, t, i, s, r, o, l);
  },
  hasContentChanged() {
    return B.getGrammarValue() !== this._lastGrammar || B.getInputValue() !== this._lastInput;
  },
  initialize: async function () {
    await B.initEditors(),
      B.inputEditor.dom.addEventListener('dblclick', I.handleDoubleClickOnInput),
      B.inputEditor.dom.addEventListener('mousemove', I.handleMouseMoveOnInput),
      B.inputEditor.dom.addEventListener('mouseleave', I.handleMouseLeaveOnInput),
      window.addEventListener('resize', B.resizeEditors),
      B.resizeEditors(),
      this._setupVerticalResize(),
      this._setupHorizontalResize(),
      this._bindUIActions(),
      await this.populateExampleMenus(),
      Ei.loadSettings(),
      await Ei.loadFromLocalStorage();
  },
  _setupVerticalResize() {
    const n = document.getElementById('grammar-block'),
      e = document.getElementById('input-block'),
      t = document.getElementById('vertical-divider');
    let i = !1;
    t.addEventListener('mousedown', (s) => {
      s.preventDefault(), (i = !0), (document.body.style.cursor = 'row-resize');
    }),
      document.addEventListener('mousemove', (s) => {
        if (!i) return;
        const r = n.parentElement,
          o = r.getBoundingClientRect().top,
          l = r.clientHeight,
          a = s.clientY - o,
          h = t.offsetHeight,
          c = 50,
          f = Math.max(a - h / 2, c),
          u = Math.max(l - f - h, c);
        (n.style.flex = `0 0 ${f}px`), (e.style.flex = `0 0 ${u}px`);
      }),
      document.addEventListener('mouseup', () => {
        if (!i) return;
        (i = !1), (document.body.style.cursor = 'default');
        const s = n.getBoundingClientRect().height,
          r = e.getBoundingClientRect().height;
        localStorage.setItem('grammarHeight', s), localStorage.setItem('inputHeight', r);
      });
  },
  _setupHorizontalResize() {
    const n = document.getElementById('left-pane'),
      e = document.getElementById('column-divider'),
      t = document.querySelector('.split-pane');
    let i = !1;
    const s = localStorage.getItem('leftPaneWidth');
    s && (n.style.width = `${s}px`),
      e.addEventListener('mousedown', (r) => {
        r.preventDefault(), (i = !0), (document.body.style.cursor = 'col-resize');
      }),
      document.addEventListener('mousemove', (r) => {
        if (!i) return;
        const o = t.getBoundingClientRect(),
          l = r.clientX - o.left,
          a = 200,
          h = o.width - a,
          c = Math.min(Math.max(l, a), h);
        n.style.width = `${c}px`;
      }),
      document.addEventListener('mouseup', () => {
        if (!i) return;
        (i = !1), (document.body.style.cursor = 'default');
        const r = n.getBoundingClientRect().width;
        localStorage.setItem('leftPaneWidth', r);
      });
  },
  _bindUIActions() {
    var n, e, t, i, s, r, o, l, a;
    (n = document.getElementById('settings-toggle')) == null ||
      n.addEventListener('click', () => {
        ta('settings-popover');
      }),
      (e = document.getElementById('help-toggle')) == null ||
        e.addEventListener('click', () => {
          ta('help-popover');
        }),
      document.addEventListener('click', (h) => {
        const c = document.getElementById('help-popover');
        c &&
          !c.contains(h.target) &&
          !document.getElementById('help-toggle').contains(h.target) &&
          c.classList.add('hidden');
        const f = document.getElementById('settings-popover');
        f &&
          !f.contains(h.target) &&
          !document.getElementById('settings-toggle').contains(h.target) &&
          f.classList.add('hidden');
        const u = document.getElementById('submit-popover');
        u && !u.contains(h.target) && u.classList.add('hidden');
      }),
      (t = document.getElementById('advanced-toggle')) == null ||
        t.addEventListener('click', () => {
          var h, c;
          (h = document.getElementById('advanced-settings')) == null ||
            h.classList.toggle('hidden'),
            (c = document.getElementById('advanced-toggle')) == null || c.classList.toggle('open');
        }),
      (i = document.getElementById('parse-button')) == null ||
        i.addEventListener('click', () => this.runParser()),
      (s = document.getElementById('export-json-button')) == null ||
        s.addEventListener('click', () => {
          if (Z.lastParseTree) {
            const h = new Blob([JSON.stringify(Z.lastParseTree, null, 2)], {
                type: 'application/json',
              }),
              c = URL.createObjectURL(h),
              f = document.createElement('a');
            (f.href = c),
              (f.download = 'parse-tree.json'),
              f.click(),
              URL.revokeObjectURL(c),
              I.showToast('Export complete', 'success');
          }
        }),
      (r = document.getElementById('collapse-all-button')) == null ||
        r.addEventListener('click', () => {
          document.querySelectorAll('.tree-node').forEach((h) => h.classList.add('collapsed'));
        }),
      (o = document.getElementById('expand-all-button')) == null ||
        o.addEventListener('click', () => {
          document.querySelectorAll('.tree-node').forEach((h) => h.classList.remove('collapsed'));
        }),
      (l = document.getElementById('show-hidden-checkbox')) == null ||
        l.addEventListener('change', () => {
          Z.lastParseTree && Z.renderAndDisplayTree(Z.lastParseTree);
        }),
      (a = document.getElementById('compress-checkbox')) == null ||
        a.addEventListener('change', () => {
          Z.lastParseTree && Z.renderAndDisplayTree(Z.lastParseTree);
        }),
      document.addEventListener('keydown', (h) => {
        h.key === 'Escape' &&
          document.querySelectorAll('.popover').forEach((c) => c.classList.add('hidden'));
      }),
      document.querySelectorAll('.popover-close').forEach((h) => {
        h.addEventListener('click', () => {
          var c;
          (c = h.closest('.popover')) == null || c.classList.add('hidden');
        });
      });
  },
  async populateExampleMenus() {
    try {
      const e = await (await fetch('examples.json')).json(),
        t = document.getElementById('grammar-examples'),
        i = document.getElementById('input-examples');
      (t.innerHTML = ''),
        e.grammars.forEach(({ name: s, file: r }) => {
          const o = document.createElement('a');
          (o.href = '#'),
            (o.textContent = s),
            o.addEventListener('click', (l) => {
              l.preventDefault(),
                fetch(r)
                  .then((a) => (a.ok ? a.text() : Promise.reject(`Failed to load ${r}`)))
                  .then((a) => B.setValue(B.grammarEditor, a))
                  .catch((a) => alert('Could not load grammar: ' + a));
            }),
            t.appendChild(o);
        }),
        (i.innerHTML = ''),
        e.inputs.forEach(({ name: s, file: r }) => {
          const o = document.createElement('a');
          (o.href = '#'),
            (o.textContent = s),
            o.addEventListener('click', (l) => {
              l.preventDefault(),
                fetch(r)
                  .then((a) => (a.ok ? a.text() : Promise.reject(`Failed to load ${r}`)))
                  .then((a) => B.setValue(B.inputEditor, a))
                  .catch((a) => alert('Could not load example: ' + a));
            }),
            i.appendChild(o);
        });
    } catch (n) {
      console.error('Failed to populate example menus:', n);
    }
  },
};
document.addEventListener('DOMContentLoaded', async () => {
  I.showToast('Loading Pyodide…'), Br.init(), await Bt.initialize();
});
window.App = Bt;
