/**
 * 校验
 */
// 身份证
export const checkIdNum = (rule, value, callback) =&gt; {
    let pass = true
    const city = {
        11: &#39;北京&#39;,
        12: &#39;天津&#39;,
        13: &#39;河北&#39;,
        14: &#39;山西&#39;,
        15: &#39;内蒙古&#39;,
        21: &#39;辽宁&#39;,
        22: &#39;吉林&#39;,
        23: &#39;黑龙江&#39;,
        31: &#39;上海&#39;,
        32: &#39;江苏&#39;,
        33: &#39;浙江&#39;,
        34: &#39;安徽&#39;,
        35: &#39;福建&#39;,
        36: &#39;江西&#39;,
        37: &#39;山东&#39;,
        41: &#39;河南&#39;,
        42: &#39;湖北&#39;,
        43: &#39;湖南&#39;,
        44: &#39;广东&#39;,
        45: &#39;广西&#39;,
        46: &#39;海南&#39;,
        50: &#39;重庆&#39;,
        51: &#39;四川&#39;,
        52: &#39;贵州&#39;,
        53: &#39;云南&#39;,
        54: &#39;西藏&#39;,
        61: &#39;陕西&#39;,
        62: &#39;甘肃&#39;,
        63: &#39;青海&#39;,
        64: &#39;宁夏&#39;,
        65: &#39;新疆&#39;,
        71: &#39;台湾&#39;,
        81: &#39;香港&#39;,
        82: &#39;澳门&#39;,
        91: &#39;国外&#39;
    }
    if (!value || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(value)) {
        callback(new Error(&#39;身份证号格式错误&#39;))
        pass = false
    } else if (!city[value.substr(0, 2)]) {
        callback(new Error(&#39;地址编码错误&#39;))
        pass = false
    } else {
        if (value.length === 18) {
            const valueAry = value.split(&#39;&#39;)
            const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            const parity = [1, 0, &#39;X&#39;, 9, 8, 7, 6, 5, 4, 3, 2]
            let sum = 0
            let ai = 0
            let wi = 0
            for (let i = 0; i &lt; 17; i++) {
                ai = valueAry[i]
                wi = factor[i]
                sum += ai * wi
            }
            if (`${parity[sum % 11]}` !== valueAry[17]) {
                callback(new Error(&#39;校验位错误&#39;))
                pass = false
            }
        }
    }
    if (pass) {
        callback()
    }
}

// 电话号码
export const checkPhone = (rule, value, callback) =&gt; {
    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/

    if (!value) {
        return callback(new Error(&#39;电话号码不能为空&#39;))
    } else if (phoneReg.test(value)) {
        callback()
    } else {
        callback(new Error(&#39;请输入正确电话号码&#39;))
    }
}

// 邮箱
export const checkEmail = (rule, value, callback) =&gt; {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!value) {
        return callback(new Error(&#39;邮箱不能为空&#39;))
    } else if (emailReg.test(value)) {
        callback()
    } else {
        callback(new Error(&#39;请输入正确的邮箱地址&#39;))
    }
}

// 宽松手机校验：1开头的11位数字（更好的向前兼容）
export const isPhone = (phone) =&gt; {
    const phoneReg = /^1\d{10}$/
    return phoneReg.test(phone)
}

export const checkCode = (rule, value, callback) =&gt; {
    if (!/^[a-zA-Z0-9_-]{1,64}$/.test(value)) {
        callback(new Error(&#39;请输入只包含大小写字母、数字、特殊符号 _ 、 - 的字符&#39;))
    } else {
        callback()
    }
}
export const checkDay = (rule, value, callback) =&gt; {
    if (value &lt; 0) {
        callback(new Error(&#39;请输入正确的天数&#39;))
    } else {
        callback()
    }
}
export const checkUnsignedInt = (rule, value, callback) =&gt; {
    if (isNaN(parseInt(value)) || value &lt; 0) {
        callback(new Error(&#39;请输入正确的数量&#39;))
    } else if (value &gt; 100000) {
        callback(new Error(&#39;请输入 1-100000 的数量&#39;))
    } else {
        callback()
    }
}
