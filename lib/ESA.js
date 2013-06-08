// generatedy by JSX compiler 0.9.37 (2013-06-07 14:40:54 +0900; 4ac9d46b2de05912a495a3ac2597350c64a6e864)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
function g_StopIteration() {
	Error.call(this);
};

$__jsx_extend([g_StopIteration], Error);
function ESA(sa, left, right, depth) {
	this.sa = sa;
	this.left = left;
	this.right = right;
	this.depth = depth;
};

$__jsx_extend([ESA], Object);
function ESA$make$S(source) {
	var n;
	var sa;
	var tmp1;
	var tmp2;
	var i;
	var psi;
	var plcp;
	var k;
	var j;
	var h;
	var s;
	var left;
	var right;
	var depth;
	var cur;
	var cand;
	n = source.length;
	sa = SAIS$make$S(source);
	tmp1 = [  ];
	tmp2 = [  ];
	for (i = 0; i < n; ++ i) {
		tmp1.push(0);
		tmp2.push(0);
	}
	psi = tmp1;
	tmp1[sa[0]] = sa[n - 1];
	for (i = 1; i < n; ++ i) {
		psi[sa[i]] = sa[i - 1];
	}
	plcp = tmp2;
	k = 0;
	for (i = 0; i < n; ++ i) {
		j = psi[i];
		while (i + k < n && j + k < n && source.charAt(i + k) === source.charAt(j + k)) {
			++ k;
		}
		plcp[i] = (k | 0);
		if (k > 0) {
			-- k;
		}
	}
	h = tmp1;
	for (i = 0; i < n; ++ i) {
		h[i] = plcp[sa[i]];
	}
	h[0] = -1;
	s = [  ];
	s.push([ -1, -1 ]);
	left = [  ];
	right = [  ];
	depth = [  ];
	for (i = 0; ; ++ i) {
		cur = [ i, i === n ? -1 : h[i] ];
		cand = s[s.length - 1];
		while (cand[1] > cur[1]) {
			if (i - cand[0] > 1) {
				left.push(cand[0]);
				right.push(i);
				depth.push(cand[1]);
			}
			cur[0] = cand[0];
			s.pop();
			cand = s[s.length - 1];
		}
		if (cand[1] < cur[1]) {
			s.push(cur);
		}
		if (i === n) {
			break;
		}
		s.push([ i, n - sa[i] + 1 ]);
	}
	return ({sa: sa, left: left, right: right, depth: depth});
};

ESA.make$S = ESA$make$S;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var source;
	var n;
	var esa;
	var sa;
	var numnode;
	var R;
	var L;
	var rank;
	var r;
	var i;
	source = "うなぎうなうなうなぎ\0";
	n = "うなぎうなうなうなぎ\0".length;
	esa = ESA$make$S("うなぎうなうなうなぎ\0");
	sa = esa.sa;
	numnode = esa.depth.length;
	R = esa.right;
	L = esa.left;
	rank = [  ];
	r = 0;
	for (i = 0; i < n; ++ i) {
		if (i === 0 || source.charAt((sa[i] + n - 1) % n) !== source.charAt((sa[i - 1] + n - 1) % n)) {
			r++;
		}
		rank[i] = (r | 0);
	}
	for (i = 0; i < numnode; ++ i) {
		if (rank[R[i] - 1] - rank[L[i]] <= 0) {
			continue;
		}
	}
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function OArray(array) {
	this.array = array;
	this.offset = 0;
};

function OArray$0(array, offset) {
	this.array = array;
	this.offset = offset;
};

$__jsx_extend([OArray, OArray$0], Object);
function OArray$get$LOArray$I($this, index) {
	return $this.array[index + $this.offset];
};

OArray.get$LOArray$I = OArray$get$LOArray$I;

function OArray$get_0$LOArray$I($this, index) {
	return $this.array[index + $this.offset];
};

OArray.get_0$LOArray$I = OArray$get_0$LOArray$I;

function OArray$set$LOArray$II($this, index, value) {
	$this.array[index + $this.offset] = value;
};

OArray.set$LOArray$II = OArray$set$LOArray$II;

function OArray$set_0$LOArray$II($this, index, value) {
	$this.array[index + $this.offset] = value;
};

OArray.set_0$LOArray$II = OArray$set_0$LOArray$II;

function OArray$isS$LOArray$I($this, index) {
	var array$0;
	var offset$0;
	return (array$0 = $this.array)[index + (offset$0 = $this.offset)] < array$0[index + offset$0 + 1];
};

OArray.isS$LOArray$I = OArray$isS$LOArray$I;

function OArray$isS_0$LOArray$I($this, index) {
	var array$0;
	var offset$0;
	return (array$0 = $this.array)[index + (offset$0 = $this.offset)] < array$0[index + offset$0 + 1];
};

OArray.isS_0$LOArray$I = OArray$isS_0$LOArray$I;

function OArray$compare$LOArray$II($this, index1, index2) {
	var array$0;
	var offset$0;
	return (array$0 = $this.array)[index1 + (offset$0 = $this.offset)] == array$0[index2 + offset$0];
};

OArray.compare$LOArray$II = OArray$compare$LOArray$II;

function OArray$compare_0$LOArray$II($this, index1, index2) {
	var array$0;
	var offset$0;
	return (array$0 = $this.array)[index1 + (offset$0 = $this.offset)] == array$0[index2 + offset$0];
};

OArray.compare_0$LOArray$II = OArray$compare_0$LOArray$II;

function SAIS() {
};

$__jsx_extend([SAIS], Object);
function SAIS$_isLMS$LBitVector$I(t, i) {
	return i > 0 && BitVector$get_0$LBitVector$I(t, i) && ! BitVector$get_0$LBitVector$I(t, i - 1);
};

SAIS._isLMS$LBitVector$I = SAIS$_isLMS$LBitVector$I;

function SAIS$_getBuckets$LOArray$AIIIB(s, bkt, n, K, end) {
	var sum;
	var i;
	sum = 0;
	for (i = 0; i <= K; i++) {
		bkt[i] = 0;
	}
	for (i = 0; i < n; i++) {
		bkt[OArray$get_0$LOArray$I(s, i)]++;
	}
	for (i = 0; i <= K; i++) {
		sum += bkt[i];
		bkt[i] = ((end ? sum : sum - bkt[i]) | 0);
	}
};

SAIS._getBuckets$LOArray$AIIIB = SAIS$_getBuckets$LOArray$AIIIB;

function SAIS$_induceSAl$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, end) {
	var i;
	var j;
	SAIS$_getBuckets$LOArray$AIIIB(s, bkt, n, K, end);
	for (i = 0; i < n; i++) {
		j = SA[i] - 1;
		if (j >= 0 && ! BitVector$get_0$LBitVector$I(t, j)) {
			SA[bkt[OArray$get_0$LOArray$I(s, j)]++] = (j | 0);
		}
	}
};

SAIS._induceSAl$LBitVector$AILOArray$AIIIB = SAIS$_induceSAl$LBitVector$AILOArray$AIIIB;

function SAIS$_induceSAs$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, end) {
	var i;
	var j;
	SAIS$_getBuckets$LOArray$AIIIB(s, bkt, n, K, end);
	for (i = n - 1; i >= 0; i--) {
		j = SA[i] - 1;
		if (j >= 0 && BitVector$get_0$LBitVector$I(t, j)) {
			SA[-- bkt[OArray$get_0$LOArray$I(s, j)]] = (j | 0);
		}
	}
};

SAIS._induceSAs$LBitVector$AILOArray$AIIIB = SAIS$_induceSAs$LBitVector$AILOArray$AIIIB;

function SAIS$make$S(source) {
	var charCodes;
	var maxCode;
	var i;
	var code;
	var SA;
	var s;
	charCodes = [  ];
	charCodes.length = source.length;
	maxCode = 0;
	for (i = 0; i < source.length; i++) {
		code = source.charCodeAt(i);
		charCodes[i] = (code | 0);
		maxCode = (code > maxCode ? code : maxCode);
	}
	SA = [  ];
	SA.length = source.length;
	s = ({offset: 0, array: charCodes});
	SAIS$_make$LOArray$AIII(s, SA, source.length, maxCode);
	return SA;
};

SAIS.make$S = SAIS$make$S;

function SAIS$_make$LOArray$AIII(s, SA, n, K) {
	var t;
	var i;
	var bkt;
	var n1;
	var name;
	var prev;
	var pos;
	var diff;
	var d;
	var j;
	var SA1;
	var s1;
	var i$0;
	var index$0;
	t = new BitVector();
	BitVector$set_0$LBitVector$IB(t, n - 2, false);
	BitVector$set_0$LBitVector$IB(t, n - 1, true);
	for (i = n - 3; i >= 0; i--) {
		BitVector$set_0$LBitVector$IB(t, i, OArray$isS_0$LOArray$I(s, i) || OArray$compare_0$LOArray$II(s, i, i + 1) && BitVector$get_0$LBitVector$I(t, i + 1));
	}
	bkt = [  ];
	bkt.length = K + 1;
	SAIS$_getBuckets$LOArray$AIIIB(s, bkt, n, K, true);
	for (i = 0; i < n; i++) {
		SA[i] = -1;
	}
	for (i = 1; i < n; i++) {
		if (SAIS$_isLMS$LBitVector$I(t, i)) {
			SA[-- bkt[OArray$get_0$LOArray$I(s, i)]] = (i | 0);
		}
	}
	SAIS$_induceSAl$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, false);
	SAIS$_induceSAs$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, true);
	n1 = 0;
	for (i = 0; i < n; i++) {
		i$0 = SA[i];
		if (i$0 > 0 && BitVector$get_0$LBitVector$I(t, i$0) && ! BitVector$get_0$LBitVector$I(t, i$0 - 1)) {
			SA[n1++] = SA[i];
		}
	}
	for (i = n1; i < n; i++) {
		SA[i] = -1;
	}
	name = 0;
	prev = -1;
	for (i = 0; i < n1; i++) {
		pos = SA[i];
		diff = false;
		for (d = 0; d < n; d++) {
			if (prev === -1 || ! OArray$compare_0$LOArray$II(s, pos + d, prev + d) || BitVector$get_0$LBitVector$I(t, pos + d) !== BitVector$get_0$LBitVector$I(t, prev + d)) {
				diff = true;
				break;
			} else {
				if (d > 0 && (SAIS$_isLMS$LBitVector$I(t, pos + d) || SAIS$_isLMS$LBitVector$I(t, prev + d))) {
					break;
				}
			}
		}
		if (diff) {
			name++;
			prev = pos;
		}
		pos = ((pos % 2 === 0 ? pos / 2 : (pos - 1) / 2) | 0);
		SA[n1 + pos] = (name - 1 | 0);
	}
	for ((i = n - 1, j = n - 1); i >= n1; i--) {
		if (SA[i] >= 0) {
			SA[j--] = SA[i];
		}
	}
	SA1 = SA;
	s1 = ({offset: n - n1, array: SA});
	if (name < n1) {
		SAIS$_make$LOArray$AIII(s1, SA1, n1, name - 1);
	} else {
		for (i = 0; i < n1; i++) {
			SA1[OArray$get_0$LOArray$I(s1, i)] = (i | 0);
		}
	}
	bkt = [  ];
	bkt.length = K + 1;
	SAIS$_getBuckets$LOArray$AIIIB(s, bkt, n, K, true);
	for ((i = 1, j = 0); i < n; i++) {
		if (SAIS$_isLMS$LBitVector$I(t, i)) {
			OArray$set_0$LOArray$II(s1, j++, i);
		}
	}
	for (i = 0; i < n1; i++) {
		index$0 = SA1[i];
		SA1[i] = s1.array[index$0 + s1.offset];
	}
	for (i = n1; i < n; i++) {
		SA[i] = -1;
	}
	for (i = n1 - 1; i >= 0; i--) {
		j = SA[i];
		SA[i] = -1;
		SA[-- bkt[OArray$get_0$LOArray$I(s, j)]] = (j | 0);
	}
	SAIS$_induceSAl$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, false);
	SAIS$_induceSAs$LBitVector$AILOArray$AIIIB(t, SA, s, bkt, n, K, true);
};

SAIS._make$LOArray$AIII = SAIS$_make$LOArray$AIII;

function BitVector() {
	var _v$0;
	var _r$0;
	_r$0 = this._r = [  ];
	_v$0 = this._v = [  ];
	_v$0.length = 0;
	_r$0.length = 0;
	this._size = 0;
	this._size1 = 0;
};

$__jsx_extend([BitVector], Object);
BitVector.prototype.build$ = function () {
	var i;
	this._size1 = 0;
	for (i = 0; i < this._v.length; i++) {
		if (i % 8 === 0) {
			this._r.push(BitVector$size_0$LBitVector$B(this, true));
		}
		this._size1 += BitVector$_rank32_0$LBitVector$IIB(this, this._v[i], 32, true);
	}
};


function BitVector$build_0$LBitVector$($this) {
	var i;
	$this._size1 = 0;
	for (i = 0; i < $this._v.length; i++) {
		if (i % 8 === 0) {
			$this._r.push($this._size1);
		}
		$this._size1 += BitVector$_rank32_0$LBitVector$IIB($this, $this._v[i], 32, true);
	}
};

BitVector.build_0$LBitVector$ = BitVector$build_0$LBitVector$;

BitVector.prototype.clear$ = function () {
	this._v.length = 0;
	this._r.length = 0;
	this._size = 0;
	this._size1 = 0;
};


function BitVector$clear_0$LBitVector$($this) {
	$this._v.length = 0;
	$this._r.length = 0;
	$this._size = 0;
	$this._size1 = 0;
};

BitVector.clear_0$LBitVector$ = BitVector$clear_0$LBitVector$;

BitVector.prototype.size$ = function () {
	return this._size;
};


function BitVector$size_0$LBitVector$($this) {
	return $this._size;
};

BitVector.size_0$LBitVector$ = BitVector$size_0$LBitVector$;

BitVector.prototype.size$B = function (b) {
	return (b ? this._size1 : this._size - this._size1);
};


function BitVector$size_0$LBitVector$B($this, b) {
	return (b ? $this._size1 : $this._size - $this._size1);
};

BitVector.size_0$LBitVector$B = BitVector$size_0$LBitVector$B;

BitVector.prototype.set$I = function (value) {
	BitVector$set_0$LBitVector$IB(this, value, true);
};


function BitVector$set_0$LBitVector$I($this, value) {
	BitVector$set_0$LBitVector$IB($this, value, true);
};

BitVector.set_0$LBitVector$I = BitVector$set_0$LBitVector$I;

BitVector.prototype.set$IB = function (value, flag) {
	var q;
	var r;
	var m;
	if (value >= BitVector$size_0$LBitVector$(this)) {
		this._size = (value + 1 | 0);
	}
	q = (value / 32 | 0);
	r = (value % 32 | 0);
	while (q >= this._v.length) {
		this._v.push(0);
	}
	m = 0x1 << r;
	if (flag) {
		this._v[q] |= m;
	} else {
		this._v[q] &= ~ m;
	}
};


function BitVector$set_0$LBitVector$IB($this, value, flag) {
	var q;
	var r;
	var m;
	if (value >= $this._size) {
		$this._size = (value + 1 | 0);
	}
	q = (value / 32 | 0);
	r = (value % 32 | 0);
	while (q >= $this._v.length) {
		$this._v.push(0);
	}
	m = 0x1 << r;
	if (flag) {
		$this._v[q] |= m;
	} else {
		$this._v[q] &= ~ m;
	}
};

BitVector.set_0$LBitVector$IB = BitVector$set_0$LBitVector$IB;

BitVector.prototype.get$I = function (value) {
	var q;
	var r;
	var m;
	if (value >= BitVector$size_0$LBitVector$(this)) {
		throw new Error("BitVector.get() : range error");
	}
	q = (value / 32 | 0);
	r = (value % 32 | 0);
	m = 0x1 << r;
	return !! (this._v[q] & m);
};


function BitVector$get_0$LBitVector$I($this, value) {
	var q;
	var r;
	var m;
	if (value >= $this._size) {
		throw new Error("BitVector.get() : range error");
	}
	q = (value / 32 | 0);
	r = (value % 32 | 0);
	m = 0x1 << r;
	return !! ($this._v[q] & m);
};

BitVector.get_0$LBitVector$I = BitVector$get_0$LBitVector$I;

BitVector.prototype.rank$I = function (i) {
	return BitVector$rank_0$LBitVector$IB(this, i, true);
};


function BitVector$rank_0$LBitVector$I($this, i) {
	return BitVector$rank_0$LBitVector$IB($this, i, true);
};

BitVector.rank_0$LBitVector$I = BitVector$rank_0$LBitVector$I;

BitVector.prototype.rank$IB = function (i, b) {
	var q_large;
	var q_small;
	var r;
	var rank;
	var begin;
	var j;
	if (i > BitVector$size_0$LBitVector$(this)) {
		throw new Error("BitVector.rank() : range error");
	}
	if (i === 0) {
		return 0;
	}
	i--;
	q_large = (Math.floor(i / 256) | 0);
	q_small = (Math.floor(i / 32) | 0);
	r = (Math.floor(i % 32) | 0);
	rank = (this._r[q_large] | 0);
	if (! b) {
		rank = q_large * 256 - rank;
	}
	begin = q_large * 8;
	for (j = begin; j < q_small; j++) {
		rank += BitVector$_rank32_0$LBitVector$IIB(this, this._v[j], 32, b);
	}
	rank += BitVector$_rank32_0$LBitVector$IIB(this, this._v[q_small], r + 1, b);
	return rank;
};


function BitVector$rank_0$LBitVector$IB($this, i, b) {
	var q_large;
	var q_small;
	var r;
	var rank;
	var begin;
	var j;
	if (i > $this._size) {
		throw new Error("BitVector.rank() : range error");
	}
	if (i === 0) {
		return 0;
	}
	i--;
	q_large = (Math.floor(i / 256) | 0);
	q_small = (Math.floor(i / 32) | 0);
	r = (Math.floor(i % 32) | 0);
	rank = ($this._r[q_large] | 0);
	if (! b) {
		rank = q_large * 256 - rank;
	}
	begin = q_large * 8;
	for (j = begin; j < q_small; j++) {
		rank += BitVector$_rank32_0$LBitVector$IIB($this, $this._v[j], 32, b);
	}
	rank += BitVector$_rank32_0$LBitVector$IIB($this, $this._v[q_small], r + 1, b);
	return rank;
};

BitVector.rank_0$LBitVector$IB = BitVector$rank_0$LBitVector$IB;

BitVector.prototype.select$I = function (i) {
	return BitVector$select_0$LBitVector$IB(this, i, true);
};


function BitVector$select_0$LBitVector$I($this, i) {
	return BitVector$select_0$LBitVector$IB($this, i, true);
};

BitVector.select_0$LBitVector$I = BitVector$select_0$LBitVector$I;

BitVector.prototype.select$IB = function (i, b) {
	var left;
	var right;
	var pivot;
	var rank;
	var j;
	if (i >= BitVector$size_0$LBitVector$B(this, b)) {
		throw new Error("BitVector.select() : range error");
	}
	left = 0;
	right = this._r.length;
	while (left < right) {
		pivot = Math.floor((left + right) / 2);
		rank = this._r[pivot];
		if (! b) {
			rank = pivot * 256 - rank;
		}
		if (i < rank) {
			right = pivot;
		} else {
			left = pivot + 1;
		}
	}
	right--;
	if (b) {
		i -= (this._r[right] | 0);
	} else {
		i -= (right * 256 - this._r[right] | 0);
	}
	j = right * 8;
	while (1) {
		rank = BitVector$_rank32_0$LBitVector$IIB(this, this._v[j], 32, b);
		if (i < rank) {
			break;
		}
		j++;
		i -= (rank | 0);
	}
	return (j * 32 + BitVector$_select32_0$LBitVector$IIB(this, this._v[j], i, b) | 0);
};


function BitVector$select_0$LBitVector$IB($this, i, b) {
	var left;
	var right;
	var pivot;
	var rank;
	var j;
	if (i >= (b ? $this._size1 : $this._size - $this._size1)) {
		throw new Error("BitVector.select() : range error");
	}
	left = 0;
	right = $this._r.length;
	while (left < right) {
		pivot = Math.floor((left + right) / 2);
		rank = $this._r[pivot];
		if (! b) {
			rank = pivot * 256 - rank;
		}
		if (i < rank) {
			right = pivot;
		} else {
			left = pivot + 1;
		}
	}
	right--;
	if (b) {
		i -= ($this._r[right] | 0);
	} else {
		i -= (right * 256 - $this._r[right] | 0);
	}
	j = right * 8;
	while (1) {
		rank = BitVector$_rank32_0$LBitVector$IIB($this, $this._v[j], 32, b);
		if (i < rank) {
			break;
		}
		j++;
		i -= (rank | 0);
	}
	return (j * 32 + BitVector$_select32_0$LBitVector$IIB($this, $this._v[j], i, b) | 0);
};

BitVector.select_0$LBitVector$IB = BitVector$select_0$LBitVector$IB;

BitVector.prototype._rank32$IIB = function (x, i, b) {
	if (! b) {
		x = ~ x;
	}
	x <<= 32 - i;
	x = ((x & 0xaaaaaaaa) >>> 1) + (x & 0x55555555);
	x = ((x & 0xcccccccc) >>> 2) + (x & 0x33333333);
	x = ((x & 0xf0f0f0f0) >>> 4) + (x & 0x0f0f0f0f);
	x = ((x & 0xff00ff00) >>> 8) + (x & 0x00ff00ff);
	x = ((x & 0xffff0000) >>> 16) + (x & 0x0000ffff);
	return x;
};


function BitVector$_rank32_0$LBitVector$IIB($this, x, i, b) {
	if (! b) {
		x = ~ x;
	}
	x <<= 32 - i;
	x = ((x & 0xaaaaaaaa) >>> 1) + (x & 0x55555555);
	x = ((x & 0xcccccccc) >>> 2) + (x & 0x33333333);
	x = ((x & 0xf0f0f0f0) >>> 4) + (x & 0x0f0f0f0f);
	x = ((x & 0xff00ff00) >>> 8) + (x & 0x00ff00ff);
	x = ((x & 0xffff0000) >>> 16) + (x & 0x0000ffff);
	return x;
};

BitVector._rank32_0$LBitVector$IIB = BitVector$_rank32_0$LBitVector$IIB;

BitVector.prototype._select32$IIB = function (x, i, b) {
	var x1;
	var x2;
	var x3;
	var x4;
	var x5;
	var pos;
	var v5;
	var v4;
	var v3;
	var v2;
	var v1;
	var v0;
	if (! b) {
		x = ~ x;
	}
	x1 = ((x & 0xaaaaaaaa) >>> 1) + (x & 0x55555555);
	x2 = ((x1 & 0xcccccccc) >>> 2) + (x1 & 0x33333333);
	x3 = ((x2 & 0xf0f0f0f0) >>> 4) + (x2 & 0x0f0f0f0f);
	x4 = ((x3 & 0xff00ff00) >>> 8) + (x3 & 0x00ff00ff);
	x5 = ((x4 & 0xffff0000) >>> 16) + (x4 & 0x0000ffff);
	i++;
	pos = 0;
	v5 = x5 & 0xffffffff;
	if (i > v5) {
		i -= (v5 | 0);
		pos += 32;
	}
	v4 = x4 >>> pos & 0x0000ffff;
	if (i > v4) {
		i -= (v4 | 0);
		pos += 16;
	}
	v3 = x3 >>> pos & 0x000000ff;
	if (i > v3) {
		i -= (v3 | 0);
		pos += 8;
	}
	v2 = x2 >>> pos & 0x0000000f;
	if (i > v2) {
		i -= (v2 | 0);
		pos += 4;
	}
	v1 = x1 >>> pos & 0x00000003;
	if (i > v1) {
		i -= (v1 | 0);
		pos += 2;
	}
	v0 = x >>> pos & 0x00000001;
	if (i > v0) {
		i -= (v0 | 0);
		pos += 1;
	}
	return (pos | 0);
};


function BitVector$_select32_0$LBitVector$IIB($this, x, i, b) {
	var x1;
	var x2;
	var x3;
	var x4;
	var x5;
	var pos;
	var v5;
	var v4;
	var v3;
	var v2;
	var v1;
	var v0;
	if (! b) {
		x = ~ x;
	}
	x1 = ((x & 0xaaaaaaaa) >>> 1) + (x & 0x55555555);
	x2 = ((x1 & 0xcccccccc) >>> 2) + (x1 & 0x33333333);
	x3 = ((x2 & 0xf0f0f0f0) >>> 4) + (x2 & 0x0f0f0f0f);
	x4 = ((x3 & 0xff00ff00) >>> 8) + (x3 & 0x00ff00ff);
	x5 = ((x4 & 0xffff0000) >>> 16) + (x4 & 0x0000ffff);
	i++;
	pos = 0;
	v5 = x5 & 0xffffffff;
	if (i > v5) {
		i -= (v5 | 0);
		pos += 32;
	}
	v4 = x4 >>> pos & 0x0000ffff;
	if (i > v4) {
		i -= (v4 | 0);
		pos += 16;
	}
	v3 = x3 >>> pos & 0x000000ff;
	if (i > v3) {
		i -= (v3 | 0);
		pos += 8;
	}
	v2 = x2 >>> pos & 0x0000000f;
	if (i > v2) {
		i -= (v2 | 0);
		pos += 4;
	}
	v1 = x1 >>> pos & 0x00000003;
	if (i > v1) {
		i -= (v1 | 0);
		pos += 2;
	}
	v0 = x >>> pos & 0x00000001;
	if (i > v0) {
		i -= (v0 | 0);
		pos += 1;
	}
	return (pos | 0);
};

BitVector._select32_0$LBitVector$IIB = BitVector$_select32_0$LBitVector$IIB;

BitVector.prototype.dump$ = function () {
	var contents;
	contents = [  ];
	contents.push(Binary$dump32bitNumber$N(this._size));
	contents.push(Binary$dump32bitNumberList$AN(this._v));
	return contents.join('');
};


function BitVector$dump_0$LBitVector$($this) {
	var contents;
	contents = [  ];
	contents.push(Binary$dump32bitNumber$N($this._size));
	contents.push(Binary$dump32bitNumberList$AN($this._v));
	return contents.join('');
};

BitVector.dump_0$LBitVector$ = BitVector$dump_0$LBitVector$;

BitVector.prototype.dump$LCompressionReport$ = function (report) {
	var contents;
	contents = [  ];
	contents.push(Binary$dump32bitNumber$N(this._size));
	CompressionReport$add_0$LCompressionReport$II(report, 2, 2);
	contents.push(Binary$dump32bitNumberList$ANLCompressionReport$(this._v, report));
	return contents.join('');
};


function BitVector$dump_0$LBitVector$LCompressionReport$($this, report) {
	var contents;
	contents = [  ];
	contents.push(Binary$dump32bitNumber$N($this._size));
	CompressionReport$add_0$LCompressionReport$II(report, 2, 2);
	contents.push(Binary$dump32bitNumberList$ANLCompressionReport$($this._v, report));
	return contents.join('');
};

BitVector.dump_0$LBitVector$LCompressionReport$ = BitVector$dump_0$LBitVector$LCompressionReport$;

BitVector.prototype.load$S = function (data) {
	return BitVector$load_0$LBitVector$SI(this, data, 0);
};


function BitVector$load_0$LBitVector$S($this, data) {
	return BitVector$load_0$LBitVector$SI($this, data, 0);
};

BitVector.load_0$LBitVector$S = BitVector$load_0$LBitVector$S;

BitVector.prototype.load$SI = function (data, offset) {
	var result;
	var result$0;
	this._v.length = 0;
	this._r.length = 0;
	this._size = 0;
	this._size1 = 0;
	result$0 = data.charCodeAt(offset) * 65536 + data.charCodeAt(offset + 1);
	this._size = (result$0 | 0);
	result = Binary$load32bitNumberList$SI(data, offset + 2);
	this._v = result.result;
	BitVector$build_0$LBitVector$(this);
	return result.offset;
};


function BitVector$load_0$LBitVector$SI($this, data, offset) {
	var result;
	var result$0;
	$this._v.length = 0;
	$this._r.length = 0;
	$this._size = 0;
	$this._size1 = 0;
	result$0 = data.charCodeAt(offset) * 65536 + data.charCodeAt(offset + 1);
	$this._size = (result$0 | 0);
	result = Binary$load32bitNumberList$SI(data, offset + 2);
	$this._v = result.result;
	BitVector$build_0$LBitVector$($this);
	return result.offset;
};

BitVector.load_0$LBitVector$SI = BitVector$load_0$LBitVector$SI;

function Binary() {
};

$__jsx_extend([Binary], Object);
function Binary$dump32bitNumber$N(num) {
	var result;
	result = [ String.fromCharCode(Math.floor(num / 65536)) ];
	result.push(String.fromCharCode(num % 65536));
	return result.join("");
};

Binary.dump32bitNumber$N = Binary$dump32bitNumber$N;

function Binary$load32bitNumber$SI(buffer, offset) {
	var result;
	result = buffer.charCodeAt(offset) * 65536 + buffer.charCodeAt(offset + 1);
	return result;
};

Binary.load32bitNumber$SI = Binary$load32bitNumber$SI;

function Binary$dump16bitNumber$I(num) {
	return String.fromCharCode(num % 65536);
};

Binary.dump16bitNumber$I = Binary$dump16bitNumber$I;

function Binary$load16bitNumber$SI(buffer, offset) {
	return (buffer.charCodeAt(offset) | 0);
};

Binary.load16bitNumber$SI = Binary$load16bitNumber$SI;

function Binary$dumpString$S(str) {
	return Binary$dumpString$SLCompressionReport$(str, null);
};

Binary.dumpString$S = Binary$dumpString$S;

function Binary$dumpString$SLCompressionReport$(str, report) {
	var length;
	var compress;
	var charCodes;
	var i;
	var charCode;
	var result;
	var bytes;
	if (str.length > 32768) {
		str = str.slice(0, 32768);
	}
	length = str.length;
	compress = true;
	charCodes = [  ];
	for (i = 0; i < length; i++) {
		charCode = str.charCodeAt(i);
		if (charCode > 255) {
			compress = false;
			break;
		}
		charCodes.push(charCode);
	}
	if (compress) {
		result = [ Binary$dump16bitNumber$I(length + 32768) ];
		for (i = 0; i < length; i += 2) {
			bytes = charCodes[i];
			if (i !== length - 1) {
				bytes += charCodes[i + 1] << 8;
			}
			result.push(String.fromCharCode(bytes % 65536));
		}
		if (report) {
			CompressionReport$add_0$LCompressionReport$II(report, length, Math.ceil(length / 2));
		}
	} else {
		result = [ Binary$dump16bitNumber$I(length), str ];
		if (report) {
			CompressionReport$add_0$LCompressionReport$II(report, length, length);
		}
	}
	return result.join('');
};

Binary.dumpString$SLCompressionReport$ = Binary$dumpString$SLCompressionReport$;

function Binary$loadString$SI(buffer, offset) {
	return new LoadedStringResult(buffer, offset);
};

Binary.loadString$SI = Binary$loadString$SI;

function Binary$dumpStringList$AS(strList) {
	return Binary$dumpStringList$ASLCompressionReport$(strList, null);
};

Binary.dumpStringList$AS = Binary$dumpStringList$AS;

function Binary$dumpStringList$ASLCompressionReport$(strList, report) {
	var result;
	var i;
	result = [ Binary$dump32bitNumber$N(strList.length) ];
	for (i = 0; i < strList.length; i++) {
		result.push(Binary$dumpString$SLCompressionReport$(strList[i], report));
	}
	return result.join('');
};

Binary.dumpStringList$ASLCompressionReport$ = Binary$dumpStringList$ASLCompressionReport$;

function Binary$loadStringList$SI(buffer, offset) {
	return new LoadedStringListResult(buffer, offset);
};

Binary.loadStringList$SI = Binary$loadStringList$SI;

function Binary$dumpStringListMap$HAS(strMap) {
	return Binary$dumpStringListMap$HASLCompressionReport$(strMap, null);
};

Binary.dumpStringListMap$HAS = Binary$dumpStringListMap$HAS;

function Binary$dumpStringListMap$HASLCompressionReport$(strMap, report) {
	var result;
	var counter;
	var key;
	result = [  ];
	counter = 0;
	for (key in strMap) {
		result.push(Binary$dumpString$SLCompressionReport$(key, report));
		result.push(Binary$dumpStringList$ASLCompressionReport$(strMap[key], report));
		counter++;
	}
	return Binary$dump32bitNumber$N(counter) + result.join('');
};

Binary.dumpStringListMap$HASLCompressionReport$ = Binary$dumpStringListMap$HASLCompressionReport$;

function Binary$loadStringListMap$SI(buffer, offset) {
	return new LoadedStringListMapResult(buffer, offset);
};

Binary.loadStringListMap$SI = Binary$loadStringListMap$SI;

function Binary$dump32bitNumberList$AN(array) {
	return Binary$dump32bitNumberList$ANLCompressionReport$(array, null);
};

Binary.dump32bitNumberList$AN = Binary$dump32bitNumberList$AN;

function Binary$dump32bitNumberList$ANLCompressionReport$(array, report) {
	var result;
	var index;
	var inputLength;
	var length;
	var resultString;
	var value1$0;
	var value2$0;
	result = [ Binary$dump32bitNumber$N(array.length) ];
	index = 0;
	inputLength = array.length;
	while (index < inputLength) {
		if (array[index] == 0) {
			length = Binary$_countZero$ANI(array, index);
			result.push(Binary$_zeroBlock$I(length));
			index += length;
		} else {
			if (Binary$_shouldZebraCode$ANI(array, index)) {
				result.push(Binary$_createZebraCode$ANI(array, index));
				value1$0 = array.length;
				value2$0 = index + 15;
				index = (value1$0 <= value2$0 ? value1$0 : value2$0);
			} else {
				length = Binary$_searchDoubleZero$ANI(array, index);
				result.push(Binary$_nonZeroBlock$ANII(array, index, length));
				if (length === 0) {
					throw new Error('');
				}
				index += length;
			}
		}
	}
	resultString = result.join('');
	if (report) {
		CompressionReport$add_0$LCompressionReport$II(report, array.length * 2 + 2, resultString.length);
	}
	return resultString;
};

Binary.dump32bitNumberList$ANLCompressionReport$ = Binary$dump32bitNumberList$ANLCompressionReport$;

function Binary$load32bitNumberList$SI(buffer, offset) {
	return new LoadedNumberListResult(buffer, offset);
};

Binary.load32bitNumberList$SI = Binary$load32bitNumberList$SI;

function Binary$_countZero$ANI(array, offset) {
	var i;
	var array$len$0;
	for ((i = offset, array$len$0 = array.length); i < array$len$0; i++) {
		if (array[i] != 0) {
			return (i - offset | 0);
		}
	}
	return (array.length - offset | 0);
};

Binary._countZero$ANI = Binary$_countZero$ANI;

function Binary$_zeroBlock$I(length) {
	var result;
	result = [  ];
	while (length > 0) {
		if (length > 16384) {
			result.push(Binary$dump16bitNumber$I(16383));
			length -= 16384;
		} else {
			result.push(Binary$dump16bitNumber$I(length - 1));
			length = 0;
		}
	}
	return result.join('');
};

Binary._zeroBlock$I = Binary$_zeroBlock$I;

function Binary$_shouldZebraCode$ANI(array, offset) {
	var change;
	var isLastZero;
	var i;
	if (array.length - offset < 16) {
		return true;
	}
	change = 0;
	isLastZero = false;
	for (i = offset; i < offset + 15; i++) {
		if (array[i] == 0) {
			if (! isLastZero) {
				isLastZero = true;
				change++;
			}
		} else {
			if (isLastZero) {
				isLastZero = false;
				change++;
			}
		}
	}
	return change > 2;
};

Binary._shouldZebraCode$ANI = Binary$_shouldZebraCode$ANI;

function Binary$_searchDoubleZero$ANI(array, offset) {
	var isLastZero;
	var i;
	var array$len$0;
	isLastZero = false;
	for ((i = offset, array$len$0 = array.length); i < array$len$0; i++) {
		if (array[i] == 0) {
			if (isLastZero) {
				return (i - offset - 1 | 0);
			}
			isLastZero = true;
		} else {
			isLastZero = false;
		}
	}
	return (array.length - offset | 0);
};

Binary._searchDoubleZero$ANI = Binary$_searchDoubleZero$ANI;

function Binary$_nonZeroBlock$ANII(array, offset, length) {
	var result;
	var blockLength;
	var i;
	result = [  ];
	while (length > 0) {
		if (length > 16384) {
			blockLength = 16384;
			length -= 16384;
		} else {
			blockLength = length;
			length = 0;
		}
		result.push(Binary$dump16bitNumber$I(blockLength - 1 + 0x4000));
		for (i = offset; i < offset + blockLength; i++) {
			result.push(Binary$dump32bitNumber$N(array[i]));
		}
		offset += blockLength;
	}
	return result.join('');
};

Binary._nonZeroBlock$ANII = Binary$_nonZeroBlock$ANII;

function Binary$_createZebraCode$ANI(array, offset) {
	var last;
	var code;
	var result;
	var i;
	var value1$0;
	var value2$0;
	value1$0 = offset + 15;
	value2$0 = array.length;
	last = (value1$0 <= value2$0 ? value1$0 : value2$0);
	code = 0x8000;
	result = [  ];
	for (i = offset; i < last; i++) {
		if (array[i] != 0) {
			result.push(Binary$dump32bitNumber$N(array[i]));
			code = code + (0x1 << i - offset);
		}
	}
	return String.fromCharCode(code) + result.join('');
};

Binary._createZebraCode$ANI = Binary$_createZebraCode$ANI;

function Binary$base64encode$S(str) {
	var out;
	var source;
	var i;
	var code;
	var len;
	var c1;
	var c2;
	var c3;
	out = [  ];
	source = [  ];
	for (i = 0; i < str.length; i++) {
		code = str.charCodeAt(i);
		source.push(code & 0x00ff, code >>> 8);
	}
	len = str.length * 2;
	i = 0;
	while (i < len) {
		c1 = source[i++] & 0xff;
		if (i === len) {
			out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c1 >> 2));
			out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c1 & 0x3) << 4));
			out.push("==");
			break;
		}
		c2 = source[i++];
		if (i === len) {
			out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c1 >> 2));
			out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4));
			out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c2 & 0xF) << 2));
			out.push("=");
			break;
		}
		c3 = source[i++];
		out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c1 >> 2));
		out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4));
		out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6));
		out.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(c3 & 0x3F));
	}
	return out.join('');
};

Binary.base64encode$S = Binary$base64encode$S;

function Binary$_mergeCharCode$AI(source) {
	var result;
	var i;
	result = [  ];
	for (i = 0; i < source.length; i += 2) {
		result.push(String.fromCharCode(source[i] + (source[i + 1] << 8)));
	}
	return result.join('');
};

Binary._mergeCharCode$AI = Binary$_mergeCharCode$AI;

function Binary$base64decode$S(str) {
	var len;
	var i;
	var out;
	var c1;
	var c2;
	var c3;
	var c4;
	len = str.length;
	i = 0;
	out = [  ];
	while (i < len) {
		do {
			c1 = Binary._base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c1 == -1);
		if (c1 == -1) {
			break;
		}
		do {
			c2 = Binary._base64DecodeChars[str.charCodeAt(i++) & 0xff];
		} while (i < len && c2 == -1);
		if (c2 == -1) {
			break;
		}
		out.push(c1 << 2 | (c2 & 0x30) >> 4);
		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 === 61) {
				return Binary$_mergeCharCode$AI(out);
			}
			c3 = Binary._base64DecodeChars[c3];
		} while (i < len && c3 === -1);
		if (c3 === -1) {
			break;
		}
		out.push((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);
		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 === 61) {
				return Binary$_mergeCharCode$AI(out);
			}
			c4 = (Binary._base64DecodeChars[c4] | 0);
		} while (i < len && c4 === -1);
		if (c4 === -1) {
			break;
		}
		out.push((c3 & 0x03) << 6 | c4);
	}
	return Binary$_mergeCharCode$AI(out);
};

Binary.base64decode$S = Binary$base64decode$S;

function LoadedStringResult(data, offset) {
	var strLength;
	var bytes;
	var i;
	var code;
	var offset$0;
	this.result = "";
	this.offset = 0;
	offset$0 = offset++;
	strLength = data.charCodeAt(offset$0);
	if (strLength > 32767) {
		strLength = strLength - 32768;
		bytes = [  ];
		for (i = 0; i < strLength; i += 2) {
			code = data.charCodeAt(offset);
			bytes.push(String.fromCharCode(code & 0x00ff));
			if (i !== strLength - 1) {
				bytes.push(String.fromCharCode(code >>> 8));
			}
			offset++;
		}
		this.result = bytes.join('');
		this.offset = offset;
	} else {
		this.result = data.slice(offset, offset + strLength);
		this.offset = (offset + strLength | 0);
	}
};

$__jsx_extend([LoadedStringResult], Object);
function LoadedStringListResult(data, offset) {
	var length;
	var i;
	var strLength;
	var resultStr;
	var bytes;
	var j;
	var code;
	var result$0;
	var offset$0;
	this.offset = 0;
	this.result = [  ];
	result$0 = data.charCodeAt(offset) * 65536 + data.charCodeAt(offset + 1);
	length = result$0;
	offset += 2;
	for (i = 0; i < length; i++) {
		offset$0 = offset++;
		strLength = data.charCodeAt(offset$0);
		if (strLength > 32767) {
			strLength = strLength - 32768;
			bytes = [  ];
			for (j = 0; j < strLength; j += 2) {
				code = data.charCodeAt(offset);
				bytes.push(String.fromCharCode(code & 0x00ff));
				if (j !== strLength - 1) {
					bytes.push(String.fromCharCode(code >>> 8));
				}
				offset++;
			}
			resultStr = bytes.join('');
		} else {
			resultStr = data.slice(offset, offset + strLength);
			offset = (offset + strLength | 0);
		}
		this.result.push(resultStr);
	}
	this.offset = offset;
};

$__jsx_extend([LoadedStringListResult], Object);
function LoadedStringListMapResult(data, offset) {
	var length;
	var i;
	var keyResult;
	var valueResult;
	var result$0;
	var offset$0;
	this.offset = 0;
	this.result = ({  });
	result$0 = data.charCodeAt(offset) * 65536 + data.charCodeAt(offset + 1);
	length = result$0;
	offset += 2;
	for (i = 0; i < length; i++) {
		keyResult = new LoadedStringResult(data, offset);
		offset$0 = keyResult.offset;
		valueResult = new LoadedStringListResult(data, offset$0);
		this.result[keyResult.result] = valueResult.result;
		offset = valueResult.offset;
	}
	this.offset = offset;
};

$__jsx_extend([LoadedStringListMapResult], Object);
function LoadedNumberListResult(data, offset) {
	var resultLength;
	var originalOffset;
	var result;
	var tag;
	var length;
	var i;
	var result$0;
	var value1$0;
	this.result = null;
	this.offset = 0;
	result$0 = data.charCodeAt(offset) * 65536 + data.charCodeAt(offset + 1);
	resultLength = result$0;
	originalOffset = offset;
	offset += 2;
	result = [  ];
	while (result.length < resultLength) {
		tag = data.charCodeAt(offset++);
		if (tag >>> 15 === 1) {
			value1$0 = resultLength - result.length;
			length = (value1$0 <= 15 ? value1$0 : 15);
			for (i = 0; i < length; i++) {
				if (tag >>> i & 0x1) {
					result.push(Binary$load32bitNumber$SI(data, offset));
					offset += 2;
				} else {
					result.push(0);
				}
			}
		} else {
			if (tag >>> 14 === 1) {
				length = tag - 0x4000 + 1;
				for (i = 0; i < length; i++) {
					result.push(Binary$load32bitNumber$SI(data, offset));
					offset += 2;
				}
			} else {
				length = tag + 1;
				for (i = 0; i < length; i++) {
					result.push(0);
				}
			}
		}
	}
	this.result = result;
	this.offset = offset;
};

$__jsx_extend([LoadedNumberListResult], Object);
function CompressionReport() {
	this.source = 0;
	this.result = 0;
};

$__jsx_extend([CompressionReport], Object);
function CompressionReport$add$LCompressionReport$II($this, source, result) {
	$this.source += source;
	$this.result += result;
};

CompressionReport.add$LCompressionReport$II = CompressionReport$add$LCompressionReport$II;

function CompressionReport$add_0$LCompressionReport$II($this, source, result) {
	$this.source += source;
	$this.result += result;
};

CompressionReport.add_0$LCompressionReport$II = CompressionReport$add_0$LCompressionReport$II;

function CompressionReport$rate$LCompressionReport$($this) {
	return (Math.round($this.result * 100.0 / $this.source) | 0);
};

CompressionReport.rate$LCompressionReport$ = CompressionReport$rate$LCompressionReport$;

function CompressionReport$rate_0$LCompressionReport$($this) {
	return (Math.round($this.result * 100.0 / $this.source) | 0);
};

CompressionReport.rate_0$LCompressionReport$ = CompressionReport$rate_0$LCompressionReport$;

BitVector.SMALL_BLOCK_SIZE = 32;
BitVector.LARGE_BLOCK_SIZE = 256;
BitVector.BLOCK_RATE = 8;
Binary._base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
$__jsx_lazy_init(Binary, "_base64DecodeChars", function () {
	return [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1 ];
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		g_StopIteration: g_StopIteration,
		g_StopIteration$: g_StopIteration
	},
	"ESA.jsx": {
		ESA: ESA,
		ESA$AIAIAIAI: ESA,
		_Main: _Main,
		_Main$: _Main
	},
	"oktavia/src/sais.jsx": {
		OArray: OArray,
		OArray$AI: OArray,
		OArray$AII: OArray$0,
		SAIS: SAIS,
		SAIS$: SAIS
	},
	"oktavia/src/bit-vector.jsx": {
		BitVector: BitVector,
		BitVector$: BitVector
	},
	"oktavia/src/binary-util.jsx": {
		Binary: Binary,
		Binary$: Binary,
		LoadedStringResult: LoadedStringResult,
		LoadedStringResult$SI: LoadedStringResult,
		LoadedStringListResult: LoadedStringListResult,
		LoadedStringListResult$SI: LoadedStringListResult,
		LoadedStringListMapResult: LoadedStringListMapResult,
		LoadedStringListMapResult$SI: LoadedStringListMapResult,
		LoadedNumberListResult: LoadedNumberListResult,
		LoadedNumberListResult$SI: LoadedNumberListResult,
		CompressionReport: CompressionReport,
		CompressionReport$: CompressionReport
	}
};


})(JSX);
