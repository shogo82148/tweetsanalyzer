$(function() {
    $(window).on('dragenter', function(e) {
        e.preventDefault();
    });

    $(window).on('dragover', function(e) {
        e.preventDefault();
    });

    $(window).on('drop', function(e) {
        e.preventDefault();
        $('#result').text('解析中...');
        jz.zip.unpack(e.originalEvent.dataTransfer.files[0])
        .done(doneUnpack)
        .fail(console.log.bind(console));
    });

    function doneUnpack(reader) {
        var filenames = reader.getFileNames().sort();
        var jstweets = $.grep(
            filenames,
            function(filename) {
                return filename.lastIndexOf('data/js/tweets', 0) == 0;
            });

        var tweets = '';
        var count = 0;
        $.each(jstweets, function(i, filename) {
            reader.getFileAsText(filename).done(function(result) {
                var json = result.substr(result.indexOf('\n'));
                $.each(JSON.parse(json), function(i, tweet) {
                    var text = tweet.text;
                    if(tweet.retweeted_status) return;
                    text = text.replace(/https?:\/\/[0-9a-zA-Z\/\.]+/, '')
                           .replace(/@[A-Za-z0-9_]+/, '')
                           .replace(/\s+/, '')
                           .toLowerCase();
                    text = removeRepeat(text);
                    if(text != '') tweets += text + '\n';
                });

                if(++count == jstweets.length) {
                    analyze(tweets);
                }
            });
        });
    }

    function removeRepeat(text) {
        var len = text.length;
        var result = '';
        var count = 0;
        var lastChar = '';
        for(var i = 0; i < len; ++i) {
            var ch = text.charAt(i);
            if(ch == lastChar) {
                ++count;
            } else {
                count = 0;
                lastChar = ch;
            }
            if(count <= 2) result += ch;
        }
        return result;
    }

    var ESA = JSX.require('ESA.jsx').ESA.make$S;
    function analyze(tweets) {
        console.log(tweets);
        tweets += '\0';
        var esa = ESA(tweets);
        var sa = esa.sa;
        var R = esa.right;
        var L = esa.left;
        var depth = esa.depth;
        var numnode = depth.length;
        var n = tweets.length;


        console.log(esa);
        var rank = [];
        var r = 0;
        for(var i = 0; i < n; ++i) {
            if(i==0 || tweets.charAt((sa[i]+n-1)%n) != tweets.charAt((sa[i-1]+n-1)%n)) r++;
            rank[i] = r;
        }

        var maxsubstrings = [];
        for(var i = 0; i < numnode; ++i) {
            if(rank[ R[i] - 1 ] - rank[ L[i] ] <= 0) {
                continue;
            }
            var begin = sa[L[i]];
            var text = tweets.substring(begin, begin + depth[i]);
            if(text.indexOf('\n')>=0) continue;
            if(text.length < 3) continue;
            maxsubstrings.push({
                'text': text,
                'count': R[i] - L[i]
            });
        }
        maxsubstrings.sort(function(a,b) {
            if(a.count < b.count) return +1;
            if(a.count > b.count) return -1;
            return 0;
        });

        var html = '<table>';
        for(i = 0; i < 1000; ++i) {
            html += '<tr>';
            html += '<td>' + maxsubstrings[i].text + '</td>';
            html += '<td>' + maxsubstrings[i].count + '</td>';
            html += '</tr>';
        }
        html += '</table>';
        $('#result').html(html);
    }
});
