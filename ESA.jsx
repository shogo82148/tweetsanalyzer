import 'oktavia/src/sais.jsx';

class ESA {
    var sa : int[];
    var left : int[];
    var right : int[];
    var depth : int[];

    function constructor (sa : int[], left : int[], right : int[], depth : int[])
    {
        this.sa = sa;
        this.left = left;
        this.right = right;
        this.depth = depth;
    }

    static function make(source : string) : ESA
    {
        var n = source.length;
        var sa = SAIS.make(source);
        var tmp1 = [] : int[];
        var tmp2 = [] : int[];

        for(var i = 0; i < n; ++i) {
            tmp1.push(0);
            tmp2.push(0);
        }

        var psi = tmp1;
        psi[sa[0]] = sa[n-1];
        for(var i = 1; i < n; ++i){
            psi[sa[i]] = sa[i-1];
        }

        // Compare at most 2n log n charcters. Practically fastest
        // "Permuted Longest-Common-Prefix Array", Juha Karkkainen, CPM 09
        var plcp = tmp2;
        var k = 0;
        for(var i = 0; i < n; ++i) {
            var j = psi[i];
            while (i+k < n && j+k < n &&
                   source.charAt(i+k) == source.charAt(j+k)){
                ++k;
            }
            plcp[i] = k;
            if (k > 0) --k;
        }

        var h = tmp1;
        for(var i = 0; i < n; ++i) {
            h[i] = plcp[sa[i]];
        }
        h[0] = -1;

        var s = [] : int[][];
        s.push([-1, -1] : int[]);

        var left = [] : int[];
        var right = [] : int[];
        var depth = [] : int[];
        for (var i = 0; ; ++i){
            var cur = [i, (i == n) ? -1 : h[i]] : int[];
            var cand = s[ s.length - 1 ];
            while (cand[1] > cur[1]){
                if (i - cand[0] > 1){
                    left.push(cand[0]);
                    right.push(i);
                    depth.push(cand[1]);
                }
                cur[0] = cand[0];
                s.pop();
                cand = s[s.length - 1];
            }
            if (cand[1] < cur[1]){
                s.push(cur);
            }
            if (i == n) break;
            s.push([i, n - sa[i] + 1] : int[]);
        }

        return new ESA(sa, left, right, depth);
    }

}

class _Main {
    static function main(args : string[]) : void {
        var source = "うなぎうなうなうなぎ\0";
        var n = source.length;
        var esa = ESA.make(source);
        var sa = esa.sa;
        var numnode = esa.depth.length;
        var R = esa.right;
        var L = esa.left;
        var depth = esa.depth;

        var rank = [] : int[];
        var r = 0;
        for(var i = 0; i < n; ++i) {
            if(i==0 || source.charAt((sa[i]+n-1)%n) != source.charAt((sa[i-1]+n-1)%n)) r++;
            rank[i] = r;
        }

        for(var i = 0; i < numnode; ++i) {
            if(rank[ R[i] - 1 ] - rank[ L[i] ] <= 0) {
                continue;
            }
            var begin = sa[L[i]];
            log source.substring(begin, begin + depth[i]), R[i] - L[i];
        }
    }
}
