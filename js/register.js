$('input[name="uid"]').val(queryString('id'));
$('input[name="regType"]').val(queryString('type'));



function validateUserName(b) {
    var a = /^[0-9a-zA-Z]{6,10}$/;
	//var a=  /^[a-zA-Z][0-9a-zA-Z]*$/g ;
    if (a.exec(b)) {
        return true
    } else {
        return false
    }
}
function validateUserPss(b) {
    var a = /^[0-9a-zA-Z]{6,16}$/;
    if (!a.exec(b)) {
        return false
    }
    a = /^\d+$/;
    if (a.exec(b)) {
        return false
    }
    a = /^[a-zA-Z]+$/;
    if (a.exec(b)) {
        return false
    }
    a = /(.)\1{2,}/;
    if (a.exec(b)) {
        return false
    }
    return true;
}
function validateNickName(b) {
    var a = /^(.){2,8}$/;
    if (a.exec(b)) {
        return true
    } else {
        return false
    }
}

function queryString(key) {
    var uri = decodeURIComponent(window.location.search);
    var re = new RegExp("[\&\?]" + key + "\=([^\&]*)", "ig");
    return ((uri.match(re)) ? (uri.match(re)[0].substr(key.length + 2)) : null);
}


function validatemobile(mobile) 
{ 
    if(mobile.length==0) 
    { 
       document.form1.mobile.focus(); 
       return false; 
    }     
    if(mobile.length!=11) 
    { 
        document.form1.mobile.focus(); 
        return false; 
    } 
} 
function showMsg(msg){
	$("#divMsg").show();
	$("#pMsg").html(msg);
}
$("#reg_btn").click(function() {
        var uid = "vivi888";
        var regType = "2";
        var user_name = $("#user_name").val();
        var pass = $("#password").val();
        var true_pass = $("#password").val();
        var valid_code = $("#valid_code").val();
        var qq = $("#qq").val();
        var weixin = $("#weixin").val();
        var tel = $("#tel").val();
        var money_password = "a123456";
        if (user_name == "") {
            showMsg('请输入用户名！');
            $("#user_name").focus();
        } else if (user_name.length < 6 || user_name.length > 15) {
            showMsg('用户名必须为6-15位英文或数字！');
            $("#user_name").focus();
        } else if (pass == "") {
            showMsg('请输入密码！');
            $("#password").focus();
        } else if (pass.length < 6 || pass.length > 15) {
            showMsg('密码必须为6-15位任意字符组成！');
            $("#password").focus();
        }  else if (tel.length != 11) {
            showMsg('请输入有效的手机号！');
            $("#tel").focus();
        } else if (qq == "") {
            showMsg('请输入QQ！');
            $("#qq").focus();
        } else if (!/[1-9][0-9]{5,11}/.test(qq)) {
            showMsg('请输入有效的QQ号码！');
            $("#qq").focus();
           
        } else if (valid_code == "") {
            showMsg('请输入验证码！');
            $("#valid_code").focus();
        } else {
            $(".tip-mes").show();
            $(".window_shade_div").show();
            $(".window_loading_div").show();
            var params = {
                command: $("#command").val(),
                r_num: $("#r_num").val(),
                parent_code: $("#parent_code").val(),
                rc_user_code: $("#rc_user_code").val(),
                gen_code: $("#gen_code").val(),
                team_quota: $("#team_quota").val(),
                username: user_name,
                pwd: pass,
                checkpassword: true_pass,
                uid: uid,
                regType: regType,
                money_password: money_password,
                chkcode: valid_code,
                qq: qq,
                phone: tel,
                is_player: '1',
                state: '1'
            };
			console.log(params);
			postAndRedirect("http://www.91junzi.com/UserLogin?method=registerExcute",params);

/*$.post("http://junzi30.com/UserLogin?method=registerExcute", params, function(rs) {
                rs = eval('(' + rs + ')');
                //转为json对象、
                if (rs.code == 1001) {
					location.href="http://www.91junzi.com";
                
                } else {
                    $("#imgCode").click();
                    showMsg(rs.message);
                }
            });
			*/
        }
    });
	
	//模拟一个表格提交实现带post数据跳转
	function postAndRedirect(url, postData)
	{
		var postFormStr = "<form method='POST' action='" + url + "'>\n";

		for (var key in postData)
		{
			if (postData.hasOwnProperty(key))
			{
				postFormStr += "<input type='hidden' name='" + key + "' value='" + postData[key] + "'></input>";
			}
		}

		postFormStr += "</form>";

		var formElement = $(postFormStr);

		$('body').append(formElement);
		$(formElement).submit();
	}
	
