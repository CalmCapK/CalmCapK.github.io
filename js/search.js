// A local search script with the help of hexo-generator-search
// Copyright (C) 2015 
// Joseph Pan <http://github.com/wzpan>
// Shuhao Mao <http://github.com/maoshuhao>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
// 
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
// 
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
// 

var searchFunc = function (path, search_id, content_id) {
    'use strict';
    var BTN = "<i id='local-search-close'>x</i>";
    $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
            // get the contents from search data
            var datas = $("entry", xmlResponse).map(function () {

                return {
                    title: $("title", this).text(),
                    content: $("content", this).text(),
                    url: $("url", this).text()
                };
            }).get();


            // const htmlContent = '<content type="html"><![CDATA[<h1 id="幻142022开机屏幕不显示问题"><a class="markdownIt-Anchor" href="#幻142022开机屏幕不显示问题"></a> 幻142022开机屏幕不显示问题</h1><p>rog型号查询<br>从My ASUS中查询：<a href="https://www.asus.com.cn/support/faq/1030673/">https://www.asus.com.cn/support/faq/1030673/</a></p><p>延保：在保修期内且无硬件故障<br><a href="https://www.asus.com.cn/support/premium_care/">https://www.asus.com.cn/support/premium_care/</a></p><p>修点门店：<br><a href="https://www.asus.com.cn/support/service-center/chinese%20mainland/#">https://www.asus.com.cn/support/service-center/chinese mainland/#</a></p><p><img src="/2024/12/22/%E7%94%B5%E8%84%91%E7%AC%94%E8%AE%B0/image.png" alt="alt text"></p>]]></content>';
            // // 创建DOMParser实例来解析HTML内容
            // const parser = new DOMParser();
            // const doc = parser.parseFromString(htmlContent, 'text/html');
            // // 通过querySelectorAll选取所有的<p>标签元素
            // const paragraphs = Array.from(doc.querySelectorAll('p')).map(p => p.textContent.trim());
            // console.log(paragraphs);



            var $input = document.getElementById(search_id);
            var $resultContent = document.getElementById(content_id);

            $input.addEventListener('keyup', function (Event) {
                if (Event.key != "Enter") {
                    return;
                }
                var str = '<ul class=\"search-result-list\">'; // kzy 修改
                var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
                $resultContent.innerHTML = "";
                if (this.value.trim().length <= 0) {
                    return;
                }
                // perform local searching
                datas.forEach(function (data) {
                    var isMatch = true;
                    var content_index = [];
                    if (!data.title || data.title.trim() === '') {
                        data.title = "Untitled";
                    }
                    var data_title = data.title.trim().toLowerCase();
                    
                    // var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    // var data_url = data.url;
                    // var index_title = -1;
                    // var index_content = -1;
                    // var first_occur = -1;
                    // let indices_title = [];
                    // let indices_content = [];

                    // // kzy 修改
                    // if (data_content !== '') {
                    //     keywords.forEach(function (keyword, i) {
                    //         let index = data_title.indexOf(keyword);
                    //         while (index!== -1) {
                    //             indices_title.push(index);
                    //             index = data_title.indexOf(keyword, index + 1);
                    //         }

                    //         index = data_content.indexOf(keyword);
                    //         while (index!== -1) {
                    //             indices_content.push(index);
                    //             index = data_content.indexOf(keyword, index + 1);
                    //         }
                    //         if (indices_title.length <= 0 && indices_content.length <= 0) {
                    //             isMatch = false;
                    //         }
                    //     });
                    // } else {
                    //     isMatch = false;
                    // }

                    // // kzy 修改
                    // if (isMatch) {
                    //     indices_content.forEach(function (indice_content) {
                    //         str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                    //         var content = data.content.trim().replace(/<[^>]+>/g, "");
                    //         if (indice_content >= 0) {
                    //             var start = indice_content - 10;
                    //             if (start < 0) {
                    //                 start = 0;
                    //             }
                    //             var match_content = content.substr(start, 20);
    
                    //             // highlight all keywords
                    //             keywords.forEach(function (keyword) {
                    //                 var regS = new RegExp(keyword, "gi");
                    //                 match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                    //             });
    
                    //             str += "<p class=\"search-result\">" + match_content + "...</p>"
                    //         }
                    //         str += "</li>";
                    //     });
                    // }


                    // var data_content = data.content.trim();
                    // var paragraphs = data_content.match(/<p>(.*?)<\/p>/gi);
                    // var paragraphList = [];

                    var cleanParagraph = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
                    var paragraphList = cleanParagraph.replace(/<br>/g, '\n').split('\n').filter(Boolean);

                    // if (paragraphs) {
                    //     paragraphs.forEach(function (paragraph) {
                    //         // 去除<p>标签并去除两端空白字符，转换为小写
                    //         var cleanParagraph = paragraph.replace(/<[^>]+>/g, "").trim().toLowerCase();
                    //         cleanParagraph = cleanParagraph.replace(/<br>/g, '\n').split('\n').filter(Boolean);
                    //         paragraphList.push(cleanParagraph);
                    //     });
                    // }
                    console.log(paragraphList.length);
                    console.log(data.content);
                    console.log(paragraphList);
                    var data_url = data.url;
                    var first_occur = -1;
                    let indices_title = [];
                    let indices_content = [];

                    // kzy 修改
                    if (paragraphList.length > 0) {
                        keywords.forEach(function (keyword, i) {
                            paragraphList.forEach(function (paragraph) {
                                let index = paragraph.indexOf(keyword);
                                if (index!= -1) {
                                    indices_content.push(paragraph);
                                }
                            });
                            if (indices_content.length <= 0) {
                                isMatch = false;
                            }
                        });
                    } else {
                        isMatch = false;
                    }
                    console.log(indices_content.length);
                    // kzy 修改
                    if (isMatch) {
                        indices_content.forEach(function (indice_content) {
                            str += "<li><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                            var match_content = indice_content
                            if (indice_content.length >= 20) {
                                match_content = indice_content.substr(0, 20);
                            }
                            // highlight all keywords
                            keywords.forEach(function (keyword) {
                                var regS = new RegExp(keyword, "gi");
                                match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                            });
                            str += "<p class=\"search-result\">" + match_content + "...</p>"
                            str += "</li>";
                        });
                    }
                });
                str += "</ul>";
                if (str.indexOf('<li>') === -1) {
                    return $resultContent.innerHTML = BTN + "<ul><span class='local-search-empty'>没有找到内容，更换下搜索词试试吧~<span></ul>";
                }
                $resultContent.innerHTML = BTN + str;
            });
        }
    });
    $(document).on('click', '#local-search-close', function() {
        $('#local-search-input').val('');
        $('#local-search-result').html('');
    });
    $(document).on('focus', '#local-search', function () {
        $('#local-search-icon-search').html('❌');
        $('#local-search-icon-search').attr('id', 'local-search-icon-close');
        //console.log("66666");
    });
    $(document).on('click', '#local-search-icon-close', function () {
        $('#local-search-input').val('');
        $('#local-search-result').html('');
        $('#local-search-icon-close').html('🔍');
        $('#local-search-icon-close').attr('id', 'local-search-icon-search');
        //console.log("1111");
    });
}