ll2ct_daoru = false
ct2ct_daoru = false
let yanshibuzhou = 1
let location_href = location.href
let nextone = '<button class="input" onclick="yanshibuzhou += 1;document.getElementById(\'yanshibuzhou\').remove();nexttoo()">下一步</button>'
window.addEventListener('load', function () {
    if (location_href.indexOf('ll2ct') != -1) {
        ll2ct_daoru = true
    }
    if (location_href.indexOf('ct2ct') != -1) {
        ct2ct_daoru = true
    }
    if (location_href.indexOf('ctdr') != -1) {
        document.getElementById('yanshi').style.visibility = 'hidden'
        if (yanshibuzhou == 1) {
            sv = document.querySelector("#yanshi > table > tbody > tr:nth-child(1) > td:nth-child(1)")
            sv.style.visibility = 'visible'
            const div = document.createElement('div')
            div.style.height = '150px'
            div.id = 'yanshibuzhou'
            div.innerHTML = '仅兼容之前导出的 <span style="color:#f368e0;font-weight: bold;font-size:30px">csv错题</span> 文件<br>' + nextone
            sv.appendChild(div)
        }
    }
})
function nexttoo() {
    if (yanshibuzhou == 2) {
        sv = document.querySelector("#yanshi > table > tbody > tr:nth-child(2) > td:nth-child(1) > span:nth-child(1)")
        sv.style.visibility = 'visible'
        const div = document.createElement('div')
        div.id = 'yanshibuzhou'
        div.innerHTML = '在做题时，不想做这题，且不想加入错题按这个<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 3) {
        sv = document.querySelector("#yanshi > table > tbody > tr:nth-child(2) > td:nth-child(1) > span:nth-child(2)")
        sv.style.visibility = 'visible'
        const div = document.createElement('div')
        div.style.marginLeft = '150px'
        div.id = 'yanshibuzhou'
        div.innerHTML = '按<span style="color:#f368e0;font-weight: bold;font-size:30px">“跳”</span>后，将跳至所填的指定题目<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 4) {
        sv = document.querySelector("#xianshidaan")
        sv.style.visibility = 'visible'
        const div = document.createElement('div')
        div.style.marginLeft = '300px'
        div.id = 'yanshibuzhou'
        div.innerHTML = '显示正在做的题目答案<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 5) {
        document.querySelector("#press").style.visibility = 'visible'
        document.querySelector("#yanshi > table > tbody > tr:nth-child(1) > td:nth-child(2) > button:nth-child(2)").style.visibility = 'visible'
        sv = document.querySelector("#yanshi > table > tbody > tr:nth-child(1) > td:nth-child(2)")
        const div = document.createElement('div')
        div.style.width = '500px'
        div.style.height = '150px'
        div.id = 'yanshibuzhou'
        div.innerHTML = '在做过题目后，可以选择导出错题 (重新选择题库文件将重置错题)<br>“csv” 可在本站 <span style="color:#f368e0;font-weight: bold;font-size:30px">导入错题</span> (不支持内置题库)<br>“docx” 导出错题Word（仅适配WPS）<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 6) {
        document.querySelector("#yanshi > table > tbody > tr:nth-child(1) > td:nth-child(2)").style.visibility = 'visible'
        sv = document.querySelector("#yanshi > table > tbody > tr:nth-child(1) > td:nth-child(2)")
        const div = document.createElement('div')
        div.style.width = '500px'
        div.style.height = '150px'
        div.id = 'yanshibuzhou'
        div.innerHTML = '<span style="color:#f368e0;font-weight: bold;font-size:30px">错题直导</span> 可以直接一键导入所做题库中做错的题<br>(由于调用的是浏览器缓存，请勿后退网页，有可能导致数据丢失)<br>(不一定适配所有电脑/浏览器)<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 7) {
        sv = document.querySelector("#table")
        document.getElementById('yanshi').style.visibility = 'visible'
        const div = document.createElement('div')
        div.style.width = '500px'
        div.style.height = '200px'
        div.id = 'yanshibuzhou'
        div.innerHTML = '答题区：<br>选择答案后点击 <span style="color:#f368e0;font-weight: bold;font-size:30px">下一题</span>，<br>如果回答错误，将会将所选选项标记为错误；<br>反之，则直接进入下一题<br>' + nextone
        sv.appendChild(div)
    }
    if (yanshibuzhou == 8) {
        alert('您已完成教学\n(公测版已支持自动本地存储做题进度,更换题库将丢失进度)')
        window.location.href = location_href.slice(0, location_href.indexOf('?'))
    }
}
let cthuant = 1
let jieguo = 'true'
let tiaoti = ''
let vioce = 'yes'
let ctcuoti = ''
let ctcuoti_html = ''
let xianshi = 'true'
let table_inner = ''
let ctallcuoti = []
let huan = 0
// rechang = false
// houxu = true
window.onload = function () {
    if (localStorage.getItem('ctnum') != null) {
        try {
            ctnew_code = eval(localStorage.getItem('ctiku'));
            cthuant = parseInt(localStorage.getItem('ctnum'));
            ctnew_codelength = parseInt(localStorage.getItem('ctnew_codelength'))
            ctstr_fileName = localStorage.getItem('ctstr_fileName')
            ctallcuoti = eval(localStorage.getItem('ctallcuoti'))
            ctcuoti = localStorage.getItem('ctcuoti')
            ctcuoti_html = localStorage.getItem('ctcuoti_html')
            vioce = localStorage.getItem('vioce')
            if (vioce != 'yes') {
                document.getElementById('no').click()
            }
            if (cthuant > ctnew_codelength) {
                cthuant = ctnew_codelength
            }
            if(isNaN(cthuant)){
                cthuant = 1
            }
            document.getElementById('xz').max = ctnew_codelength
            document.getElementById('gongjiti').innerHTML = ' （共' + ctnew_codelength + '题）'
            document.getElementById('xz').value = cthuant
        }
        catch (err) {
            console.log(err.message)
        }
    }
    if (ll2ct_daoru) {
        ll2ct = localStorage.getItem('ll2ct')
        getcsv(ll2ct)
        ctstr_fileName = localStorage.getItem('str_fileName')
        oldhuanti = parseInt(localStorage.getItem('num'))
        cthuant = parseInt(localStorage.getItem('ctnum'))
        ctnew_codelength = eval(localStorage.getItem('allcuoti')).length
        num_shuaxinpanduan = localStorage.getItem('num_shuaxinpanduan')
        if (num_shuaxinpanduan == 'false') {
            if (oldhuanti >= ctnew_codelength) {
                document.getElementById('xz').value = 1
                localStorage.setItem('num_shuaxinpanduan', 'true')
            }
        } else {
            if (cthuant < ctnew_codelength) {
                document.getElementById('xz').value = cthuant
                if (document.getElementById('xz').value <= 0) {
                    document.getElementById('xz').value = 1
                }
            }
        }
        document.getElementById('xz').max = ctnew_codelength
        document.getElementById('gongjiti').innerHTML = ' （共' + ctnew_codelength + '题）'
        yesno(0)
        ctcuoti = ''
        ctcuoti_html = ''
        ctallcuoti = []
    }
    if (ct2ct_daoru) {
        ct_2ct = localStorage.getItem('ct2ct')
        getcsv(ct_2ct)
        ctstr_fileName = localStorage.getItem('ctstr_fileName')
        cthuant = parseInt(localStorage.getItem('ctnum'))
        ctnew_codelength = eval(localStorage.getItem('ctallcuoti_shuaxinpanduan'))
        num_shuaxinpanduan = localStorage.getItem('num_shuaxinpanduan')
        if (num_shuaxinpanduan == 'false') {
            if (cthuant >= ctnew_codelength) {
                document.getElementById('xz').value = 1
                localStorage.setItem('num_shuaxinpanduan', 'true')
            }
        } else {
            if (cthuant < ctnew_codelength) {
                document.getElementById('xz').value = cthuant
            }
        }
        document.getElementById('xz').max = ctnew_codelength
        document.getElementById('gongjiti').innerHTML = ' （共' + ctnew_codelength + '题）'
        yesno(0)
        ctcuoti = ''
        ctcuoti_html = ''
        ctallcuoti = []
    }
}
function moshi() {
    biaozh = ''
    var obj = document.getElementsByClassName("xzmoshi");
    for (i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            biaozh = obj[i].value
        }
    }
    return biaozh
}
document.getElementById('excel')
    .addEventListener('change', function selectedFilechanged() {
        ctstr_fileName = moshi()
        if (this.files.length === 0) {
            return;
        }
        const reader = new FileReader();
        reader.onload = function fileReadcompleted() {
            //当读取完如时，内容只在reader,result中
            csv = reader.result
            getcsv(csv)
            document.getElementById('xz').value = 1
            ctnew_codelength = ctnew_code.length
            if (ctnew_codelength == 0) { alert('您所上传的文件没有错题哦~') }
            document.getElementById('xz').max = ctnew_code.length
            document.getElementById('gongjiti').innerHTML = ' （共' + ctnew_code.length + '题）'
            qiehuan()
            duicuo()
            // if (houxu == true) {
            document.getElementById('table').innerHTML = table_inner
            // }
            // localStorage.setItem('cthref', location.href);
            localStorage.setItem('ctiku', JSON.stringify(ctnew_code));
            localStorage.setItem('ctnew_codelength', ctnew_codelength)
            localStorage.setItem('ctstr_fileName', ctstr_fileName)
        };
        reader.readAsText(this.files[0], "UTF-8");
        cthuant = 1
        ctcuoti = ''
        ctcuoti_html = ''
        ctallcuoti = []
        localStorage.setItem('ctnum', cthuant)
        localStorage.setItem('ctallcuoti', JSON.stringify(ctallcuoti))
        localStorage.setItem('ctcuoti', ctcuoti)
        localStorage.setItem('ctcuoti_html', ctcuoti_html)
        document.getElementById('xz').value = 1
        xsda = document.getElementById('xianshidaan')
        xsda.innerHTML = '<button class="input" onclick="xianshidaan()"><span>显示答案</span></button>'
        xianshi = 'true'
    }
    )
function getcsv(csv) {
    let code = csv.split(/[\r\n]+/); // 根据换行或者回车进行识别
    code.forEach((item, index) => { // 删除空项
        if (!item) {
            code.splice(index, 1);
        }
    })
    code = Array.from(new Set(code)); // 去重
    ctnew_code = []
    for (i = 0; i < code.length; i++) {
        old_code = code[i].split(/,/);
        ctnew_code.push(old_code)
    }
}
function xz() {
    cthuant = parseInt(document.getElementById('xz').value)
    tiaoti = 'true'
    xsda = document.getElementById('xianshidaan')
    xsda.innerHTML = '<button class="input" onclick="xianshidaan()"><span>显示答案</span></button>'
    yesno()

}
function tiao() {
    cthuant = parseInt(cthuant) + 1
    tiaoti = 'true'
    xsda = document.getElementById('xianshidaan')
    xsda.innerHTML = '<button class="input" onclick="xianshidaan()"><span>显示答案</span></button>'
    yesno()
}
function qiehuan() {
    huan = cthuant - 1
    timu = ctnew_code[huan][0]
    timuA = ctnew_code[huan][1]
    timuB = ctnew_code[huan][2]
    timuC = ctnew_code[huan][3]
    timuD = ctnew_code[huan][4]
    timuE = ctnew_code[huan][5]
    daan = ctnew_code[huan][6]
    ctstr_fileName = ctnew_code[huan][7]
    if (ctstr_fileName == '单选') {
        table_inner = '<div>\
            <div id="zuoti">'+ cthuant + '. ' + timu + '\
    <ol>\
        <input class="pinfen" type="radio" name="radio"  value="A" />\
        <span>'+ timuA + '</span>\
        <br>\
        <input  class="pinfen" type="radio" name="radio" value="B" />\
        <span>'+ timuB + '</span>\
        <br>\
        <input class="pinfen"  type="radio" name="radio" value="C" />\
        <span>'+ timuC + '</span>\
        <br>\
        <input class="pinfen"  type="radio" name="radio" value="D" />\
        <span>'+ timuD + '</span>\
    </ol>\
</div>'

    } else if (ctstr_fileName == '多选') {

        table_inner = '<div>\
            <div id="zuoti">'+ cthuant + '. ' + timu + '\
    <ol>\
        <input class="pinfen" type="checkbox" name="checkbox" value="A" />\
        <span>'+ timuA + '</span>\
        <br>\
        <input class="pinfen" type="checkbox"  name="checkbox" value="B" />\
        <span>'+ timuB + '</span>\
        <br>\
        <input class="pinfen" type="checkbox" name="checkbox"  value="C" />\
        <span>'+ timuC + '</span>\
        <br>\
        <input class="pinfen" type="checkbox" name="checkbox"  value="D" />\
        <span>'+ timuD + '</span>'
        if (timuE != '') {
            table_inner += '<br>\
        <input class="pinfen" type="checkbox" name="checkbox"  value="E" />\
        <span>'+ timuE + '</span>'
        }
        table_inner += '</ol>\
    </div>'
    }
    else if (ctstr_fileName == '判断') {
        table_inner = '<div>\
            <div id="zuoti">'+ cthuant + '. ' + timu + '\
    <ol>\
        <input class="pinfen" type="radio" name="radio" value="A" />\
        <span>'+ timuA + '</span>\
        <br>\
        <input class="pinfen" type="radio" name="radio" value="B" />\
        <span>'+ timuB + '</span>\
    </ol>\
</div>'
    }
    return table_inner
}
function yesno(i) {
    if (cthuant <= 0 | isNaN(cthuant)) {
        cthuant = 1
    } else if (cthuant > ctnew_codelength) {
        cthuant = ctnew_codelength
    }
    localStorage.setItem('ctnum', cthuant)
    console.log(cthuant)
    table_inner = qiehuan()
    jieguo = duicuo()
    console.log(2)
    xianshi = 'true'
    // localStorage.setItem('cthref', location.href);
    localStorage.setItem('ctiku', JSON.stringify(ctnew_code));
    localStorage.setItem('ctnew_codelength', ctnew_codelength)
    localStorage.setItem('ctstr_fileName', ctstr_fileName)
    localStorage.setItem('ctallcuoti', JSON.stringify(ctallcuoti))
    localStorage.setItem('ctcuoti', ctcuoti)
    localStorage.setItem('ctcuoti_html', ctcuoti_html)
    if (jieguo == 'true') {
        if (i == 1 | i == -1 | i == 0) {
            cthuant = parseInt(document.getElementById('xz').value) + i
        }                // cthuant += i
        localStorage.setItem('ctnum', cthuant)
        tiaoti = 'false'
        if (cthuant > ctnew_codelength) {
            cthuant = ctnew_codelength
            alert('恭喜你完成本类试题的训练')
        }
        xsda = document.getElementById('xianshidaan')
        xsda.innerHTML = '<button class="input" onclick="xianshidaan()"><span>显示答案</span></button>'
        // console.log(vioce)
        table_inner = qiehuan()
    }
    // if (houxu) {
    document.getElementById('xz').value = cthuant
    document.getElementById('table').innerHTML = table_inner
    // }
    var obj = document.getElementsByClassName("pinfen");
    for (i = 0; i < obj.length; i++) {
        if (biaozhun.indexOf(obj[i].value) != -1) {
            if (answer.indexOf(obj[i].value) == -1) {
                // obj[i].checked = true
                var obj1 = document.getElementsByTagName("ol")[0].children;
                // console.log(obj1[(i + 1) * 3 - 2])
                obj1[(i + 1) * 3 - 2].innerHTML = '(错误) ' + obj1[(i + 1) * 3 - 2].innerHTML
                obj1[(i + 1) * 3 - 2].setAttribute('style', "color:red")
            } else if (answer.indexOf(obj[i].value) != -1 & jieguo != 'true') {
                var obj1 = document.getElementsByTagName("ol")[0].children;
                obj1[(i + 1) * 3 - 2].innerHTML = '(正确) ' + obj1[(i + 1) * 3 - 2].innerHTML
                obj1[(i + 1) * 3 - 2].setAttribute('style', "color:green")
            }
        }
    }
}

function daanhuoqu() {
    biaozhun = []
    // biaozhuni = []
    var obj = document.getElementsByClassName("pinfen");
    for (i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            biaozhun.push(obj[i].value)
            // biaozhuni.push(i)
        }
    }
    biaozhun = biaozhun.join()
    return biaozhun
}
function duicuo() {
    answer = ''
    try {
        daann = daan.split('')
        answer = daann.join()
    } catch { answer = '' }
    biaozhun = daanhuoqu()
    if (biaozhun == answer) {
        jieguo = 'true'
        if (vioce == 'yes' & tiaoti != 'true') {
            var utterThis = new window.SpeechSynthesisUtterance('恭喜你做对了');
            window.speechSynthesis.speak(utterThis); //语音朗读
        }
    } else if (biaozhun != '' & biaozhun != answer) {
        jieguo = 'false'
        if (cthuant != 1 & tiaoti != 'true' & vioce == 'yes') {
            var utterThis = new window.SpeechSynthesisUtterance('做错了，请重新做');
            window.speechSynthesis.speak(utterThis); //语音朗读
        }
        if (ctallcuoti.indexOf(timu) == -1) {//判断题目是否已被记录
            // csv版错题
            ctcuoti += timu + ',' + timuA + ',' + timuB + ',' + timuC + ',' + timuD + ',' + timuE + ',' + daan + ',' + ctstr_fileName + '\n'
            // html版错题，可适配docx
            ctcuoti_html += '<h2><span style="mso-spacerun:\'yes\';margin-bottom:40px;padding-top:40px;font-family:黑体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'黑体\';mso-ansi-font-weight:bold;font-size:13.0000pt;mso-font-kerning:13.0000pt;">' + (ctallcuoti.length + 1) + '. (' + ctstr_fileName + ') ' + timu + '</span></h2>'
            ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';font-size:12.0000pt;mso-font-kerning:1.0000pt;">' + timuA + '</p>'
            ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';font-size:12.0000pt;mso-font-kerning:1.0000pt;">' + timuB + '</p>'
            if (timuC != '') {
                ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';font-size:12.0000pt;mso-font-kerning:1.0000pt;">' + timuC + '</p>'
            }
            if (timuD != '') {
                ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';font-size:12.0000pt;mso-font-kerning:1.0000pt;">' + timuD + '</p>'
            }
            if (timuE != '') {
                ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';font-size:12.0000pt;mso-font-kerning:1.0000pt;">' + timuE + '</p>'
            }
            ctcuoti_html += '<p style="mso-spacerun:\'yes\';font-family:宋体;mso-ascii-font-family:Calibri;mso-hansi-font-family:Calibri;mso-bidi-font-family:\'Times New Roman\';mso-ansi-font-weight:bold;font-size:12.0000pt;mso-font-kerning:1.0000pt;">正确答案：' + daan + '</p>'
            ctcuoti_html += '<p></p>'
            // 存储题目
            ctallcuoti.push(timu)
        }

    }
    return jieguo
}
function dct() {
    var myselect = document.getElementById('press');
    var index = myselect.selectedIndex;
    var value = myselect.options[index].value;
    if (value == 'csv版') {
        var text = ctcuoti; //保存错题
        var blob = new Blob([text]);
        var anchor = document.createElement("a");
        anchor.download = '错题.csv';
    } else if (value == 'docx版(仅适配WPS)') {
        var text = '<h1>一、 ' + ctstr_fileName + '</h1>' + ctcuoti_html; //保存错题
        var blob = new Blob([text]);
        var anchor = document.createElement("a");
        anchor.download = '错题.docx';
    }
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
function xianshidaan() {
    if (xianshi == 'true') {
        if (jieguo == 'true') {
            jieguo = duicuo()
        }
        xsda = document.getElementById('xianshidaan')
        if (xsda.innerHTML.indexOf('正确') == -1) {
            const span = document.createElement('span')
            span.innerHTML = '<span style="font-size:12px">正确答案：</span><span>' + answer + '</span>'
            span.setAttribute('style', 'padding-right:20px')
            xsda.appendChild(span)
        }
        var obj = document.getElementsByClassName("pinfen");
        for (i = 0; i < obj.length; i++) {
            if (answer.indexOf(obj[i].value) != -1) {
                var obj1 = document.getElementsByTagName("ol")[0].children;
                if (obj1[(i + 1) * 3 - 2].innerHTML.indexOf('(正确)')) {
                    obj1[(i + 1) * 3 - 2].innerHTML = '(正确) ' + obj1[(i + 1) * 3 - 2].innerHTML
                    obj1[(i + 1) * 3 - 2].setAttribute('style', "color:green")
                }
            }
        }
        xianshi = 'false'
        // console.log(xianshi)
    }
}
function ct2ct() {
    if (location_href.indexOf('ctdr') == -1) {
        window.location.href = '题库训练(错题版).htm?' + ctstr_fileName + 'ct2ct';
        localStorage.setItem('ct2ct', ctcuoti);
        localStorage.setItem('num_shuaxinpanduan', 'false')
        localStorage.setItem('ctallcuoti_shuaxinpanduan', ctallcuoti.length)
    } else {
        alert('正常点击会跳转，请在做题时体验')
    }
}