document.addEventListener("DOMContentLoaded", function() {
  var versions = [
      ['1.2.0', '/1.2.0'],
      ['1.1.0', '/1.1.0']
  ];
  var current_ver = $("#projectnumber")[0].innerText || versions[0][0];
  var h = '<select>';
  for (i = 0; i < versions.length; i++) {
      selected = ''
      if(current_ver === versions[i][0])
          selected = ' selected="selected"';
      h += '<option value="' + versions[i][0] + '"' + selected + '>' + versions[i][0] + '</option>';
  }
  h += '</select>';

  $("#projectnumber")[0].innerHTML = h;

  $("#projectnumber select")[0].addEventListener('change', function() {
      var v = $(this).children('option:selected').attr('value');
      var path = undefined;
      for (i = 0; i < versions.length; i++) {
          if(v === versions[i][0]) {
              path = versions[i][1];
              break;
          }
      }

      if (path) {
          var location = window.location;
          var url = location.href;
          var urlParts = url.split("/");
          // get version
          // TODO: 具体情况需要按照url进行修改,目前测试是按照如下如来进行配置的
          // http://localhost:63342/test_docygen/html/4.6.0/index.html
          var current_version = urlParts[5];
          // // TODO: 如下的取代页需要按需进行配置
          // var new_url = url.replace(window.location.hostname + ':63343/test_proxy/html/' + current_version,
          //                           window.location.hostname +':63343/test_proxy/html' + path);

          // githubpages
          var current_version = urlParts[4];
          // console.log(current_version);
          // console.log("searchValue:" + window.location.hostname + '/test_doxygen/' + current_version);
          //   console.log("replaceValue:" + window.location.hostname + '/test_doxygen' + path);
          // // TODO: 如下的取代页需要按需进行配置
          var new_url = url.replace(window.location.hostname + '/test_doxygen/' + current_version,
              window.location.hostname +'/test_doxygen' + path)

          if (url == new_url) {
              var current_version = /\/[^\/]+/.exec(location.pathname)
              new_url = url.replace(window.location.hostname + current_version,
                                    window.location.hostname + path);
          }
          if (url != new_url)
              window.location.href = new_url; // navigate
      }
  });
  return current_ver;
});
