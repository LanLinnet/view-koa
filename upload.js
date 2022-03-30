//将文件通过formData的形式发送到服务器上
function Upload(input){
    if (window.FileReader) {
        //filelist中的第一个文件（事实上本来就只有一个文件）
        var file = input.files[0];
        filename = file.name.split(".")[0];
        var formData = new FormData();
        formData.append("upload",file,filename);
        $.ajax({
            url:'http://www.baidu.com/', /*接口域名地址*/
            type:'post',
            data: formData,
            contentType: false,
            processData: false,
            success:function(res){
                console.log(res.data);
                if(res.data["code"]==="succ"){
                    alert('成功');
                }else if(res.data["code"]==="err"){
                    alert('失败');
                }else{
                    console.log(res);
                }
            }
        })
    }
    //支持IE 7 8 9 10
    else if (typeof window.ActiveXObject != 'undefined'){
        var xmlDoc;
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //alert(xmlDoc.xml);
    }
    //支持FF
    else if (document.implementation && document.implementation.createDocument) {
        var xmlDoc;
        xmlDoc = document.implementation.createDocument("", "", null);
        xmlDoc.async = false;
        xmlDoc.load(input.value);
        //alert(xmlDoc.xml);
    } else {
        alert('error');
    }
}