$(function() {
    var pre_month = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var pre_year = ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011',
        '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001',
        '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1990', '1989'
    ];
    var pre_sex = ['Male', 'Female'];
    $('#go').click(function() {
        var month = $('#month').val();
        var day = $('#day').val();
        var sex = $('#sex').val();
        var year = $('#year').val();
        console.log(day + ',' + month + ',' + year);
        var post_dma = 'คุณเกิดวันที่' + ' ' + day + ' ' + pre_month[month - 1] + ' ' + pre_year[year - 1] + '  ';
        var post_age = 'อายุของคุณคือ ' + ' ' + year + ' ' + 'ปี' + '  ';
        var post_sex = 'เพศ : ' + pre_sex[sex - 1];

        if (day == 0) {
            alert("กรุณาเลือกวันเกิดของคุณ")
        } else if (month == 0) {
            alert("กรุณาเลือกเดือนเกินของคุณ")
        } else if (sex == 0) {
            alert("กรุณาเลือกเพศของคุณ เพื่อดูคำทำนาย")
        } else if (year == 0) {
            alert("กรุณาเลือกปีเกิดของคุณ")
        } else(
            $('#sadm').text(post_dma), $('#syear').text(post_age), $('#ssex').text(post_sex)
        )
        switch (month) {
            case '1':
                if (day <= 13) {
                    document.getElementById('image').src = 'image/ธนู.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้มักเป็นคนที่ชอบวางมาดแก่เกินวัย และวางอนาคตไกลเกินเอื้อมมือถึง เป็นคนเครียดง่ายแต่ก็หายเร็ว' +
                            'พูดจาหวานหู ไม่ชอบคุยโม้โอ้อวดใคร รูปร่างจะไปในทางสูง มักมีงานที่มีความมั่นคงแน่นอน เป็นคนทำงานเก่ง เป็นนักวางแผนที่ดี' +
                            'สาว ๆ ใดที่ได้หนุ่มราศีนี้เป็นคู่ครองครอบครัวจะมั่นคงมั่นใจในหนุ่มราศีนี้เขาได้';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวธนูจะมีอารมณ์ที่สดชื่น ร่าเริงสดใสอยู่ตลอดเวลา มักชอบทำอะไรแบบหลุดโลก บทดีก็ดีใจหาย จะทำงานเนี้ยบมาก' +
                            'เธอสามารถแบ่งเวลาจัดสรรสำหรับเรื่องงานและความสนุกได้ดี เธอมีความสวยที่ผสมกันหลายยุคสมัย เรียกว่าเก่าก็ดูดี ใหม่ก็ดูเฉียบจริงๆ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'ธนู';
                    $('#so').text(name);
                } else if (day >= 14) {
                    document.getElementById('image').src = 'image/มังกร.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มมังกรนี่มักจะเป็นคนขี้เหงา เพราะเขาจะมีก็เพียงแต่เพื่อนไม่แท้ ไร้คนจริงใจอย่างแท้จริงแต่เขาโชคดีที่มีดวงของคนรักคอยพยุงไว้' +
                            'จึงทำให้ดวงของท่านยังแข็งพอทนอยู่ เป็นคนไม่ชอบเสี่ยงไม่ว่าจะเป็นเรื่องงานหรือเรื่องส่วนตัว เป็นคนมีอะไรลึก ๆ อยู่ในตัว' +
                            'หนุ่มมังกรเงียบขรึมเป็นบางครั้ง ช่างนึกช่างฝันและมองการณ์ไกล จึงอาจทำให้มีใบหน้าแก่กว่าอายุจริง ชอบวางแผนก่อนเสมอ' +
                            'เป็นคนหยิ่งทะนงมากและเป็นคนที่ขาดรักไม่ได้';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะเป็นคนช่างวาดสวรรค์วิมานเมฆหรือเป็นคนที่ชอบฝันเพ้อเจ้อแต่เธอเป็นยอดหญิงนักสู้และไม่' +
                            'ชอบติดหนี้บุญคุณของใครเสียด้วยแต่อาภัพที่ เป็นคนทำคุณกับคนไม่ขึ้นเหมือนปิดทองหลังพระเธอเป็นคนชอบทำ' +
                            'และชอบพูดมีอารมณ์อ่อนไหวขี้ใจน้อยง่ายบางครั้งไม่มีเหตุผลแม้ในความเป็นจริงเธอจะมีเหตุผลก็ตามสาวมังกรมีใบหน้า' +
                            'ค่อนข้างหักหลบหรือออกไปทางแท่งมากกว่าใบหน้าวงรีชอบไว้ผมยาวอันเป็นเสน่ห์เฉพาะตัว';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'มังกร';
                    $('#so').text(name1);
                } else {}
                break;
            case '2':
                if (day <= 12) {
                    document.getElementById('image').src = 'image/มังกร.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มมังกรนี่มักจะเป็นคนขี้เหงา เพราะเขาจะมีก็เพียงแต่เพื่อนไม่แท้ ไร้คนจริงใจอย่างแท้จริงแต่เขาโชคดีที่มีดวงของคนรักคอยพยุงไว้' +
                            'จึงทำให้ดวงของท่านยังแข็งพอทนอยู่ เป็นคนไม่ชอบเสี่ยงไม่ว่าจะเป็นเรื่องงานหรือเรื่องส่วนตัว เป็นคนมีอะไรลึก ๆ อยู่ในตัว' +
                            'หนุ่มมังกรเงียบขรึมเป็นบางครั้ง ช่างนึกช่างฝันและมองการณ์ไกล จึงอาจทำให้มีใบหน้าแก่กว่าอายุจริง ชอบวางแผนก่อนเสมอ' +
                            'เป็นคนหยิ่งทะนงมากและเป็นคนที่ขาดรักไม่ได้';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะเป็นคนช่างวาดสวรรค์วิมานเมฆหรือเป็นคนที่ชอบฝันเพ้อเจ้อแต่เธอเป็นยอดหญิงนักสู้และไม่' +
                            'ชอบติดหนี้บุญคุณของใครเสียด้วยแต่อาภัพที่ เป็นคนทำคุณกับคนไม่ขึ้นเหมือนปิดทองหลังพระเธอเป็นคนชอบทำ' +
                            'และชอบพูดมีอารมณ์อ่อนไหวขี้ใจน้อยง่ายบางครั้งไม่มีเหตุผลแม้ในความเป็นจริงเธอจะมีเหตุผลก็ตามสาวมังกรมีใบหน้า' +
                            'ค่อนข้างหักหลบหรือออกไปทางแท่งมากกว่าใบหน้าวงรีชอบไว้ผมยาวอันเป็นเสน่ห์เฉพาะตัว';
                        $('#nesi').text(nesi);
                    }
                    var name = 'มังกร';
                    $('#so').text(name);
                } else if (day >= 13 && day <= 28) {
                    document.getElementById('image').src = 'image/กุม.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = ' หนุ่มกุมภ์เป็นคนชอบความไม่หยุดนิ่ง หรือไม่ชอบเอื่อยเฉื่อย เขาจะก้าวไปข้างหน้าตลอดโดยไม่หวั่นเกรงกลัวสิ่งใด' +
                            'หนุ่มกุมภ์อารมณ์ค่อนข้างรุนแรงแต่หนักแน่น เรียกว่าเป็นตัวของตัวเองสูงมาก และเขาเป็นคนที่ไม่งมงายหรือเชื่ออะไรง่าย ๆ ' +
                            'เว้นแต่ต้องพิสูจน์เองได้ หนุ่มกุมภ์เป็นนักมองการณ์ไกลจึงเหมาะที่จะทำธุรกิจเพราะจะทำให้มีแต่คำว่ารวย ๆ ลักษณะเด่นของหนุ่มราศีนี้คือ' +
                            'จะมีเรือนกายสมชายสง่างามกว่าหนุ่มราศีอื่นๆ ชอบความทันสมัย มีดวงตาอันคมเข้มอีกด้วย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = ' สาวกุมภ์เป็นคนมั่นใจในตัวเองมาก วางมาดได้สง่างามดุจนางพญา แต่ในขณะเดียวกันเธอก็หารู้ไม่ว่าบางทีมันก็อาจทำให้เธอก้าวพลาดได้' +
                            'และก็ต้องเจ็บอย่างมากทีเดียว สาวกุมภ์มีข้อเสียก็คือเธอจะเป็นคนค่อนข้างดื้อรั้นไม่ว่าจะถูกหรือผิดก็จะเถียงไว้ก่อน ซึ่งถ้าเธอยอมลดราวาศอกลงบ้าง' +
                            'จะทำให้เธองดงามดั่งนางพญา เพราะส่วนหนึ่งเธอเป็นคนจริงใจและจริงจังทำให้เธอเป็นที่ต้องตาต้องใจของหนุ่มทั้งหลาย หากหนุ่มราศีอื่นๆ' +
                            'จะจีบเธอละก็ขอเตือนไว้ว่าท่านต้องยอมรับความดื้อรั้นและอารมณ์แบบเด็กๆ ในบางครั้งของเธอได้ และต้องเป็นคนรักษาคำพูดด้วยเพราะเธอเป็นคนที่ถือ' +
                            'คำพูดหรือคำสัญญาอย่างมาก สาวกุมภ์ลักษณะเด่นคือมีคิ้วที่ดกดำ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'กุมภ์';
                    $('#so').text(name1);
                } else if (day >= 28) {
                    alert("ไม่มีวันที่คุณเลือก")
                }
                break;
            case '3':
                if (day <= 13) {
                    document.getElementById('image').src = 'image/กุม.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = ' หนุ่มกุมภ์เป็นคนชอบความไม่หยุดนิ่ง หรือไม่ชอบเอื่อยเฉื่อย เขาจะก้าวไปข้างหน้าตลอดโดยไม่หวั่นเกรงกลัวสิ่งใด' +
                            'หนุ่มกุมภ์อารมณ์ค่อนข้างรุนแรงแต่หนักแน่น เรียกว่าเป็นตัวของตัวเองสูงมาก และเขาเป็นคนที่ไม่งมงายหรือเชื่ออะไรง่ายๆ' +
                            'เว้นแต่ต้องพิสูจน์เองได้ หนุ่มกุมภ์เป็นนักมองการณ์ไกลจึงเหมาะที่จะทำธุรกิจเพราะจะทำให้มีแต่คำว่ารวยๆ ลักษณะเด่นของหนุ่มราศีนี้คือ' +
                            'จะมีเรือนกายสมชายสง่างามกว่าหนุ่มราศีอื่นๆ ชอบความทันสมัย มีดวงตาอันคมเข้มอีกด้วย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = ' สาวกุมภ์เป็นคนมั่นใจในตัวเองมาก วางมาดได้สง่างามดุจนางพญา แต่ในขณะเดียวกันเธอก็หารู้ไม่ว่าบางทีมันก็อาจทำให้เธอก้าวพลาดได้' +
                            'และก็ต้องเจ็บอย่างมากทีเดียว สาวกุมภ์มีข้อเสียก็คือเธอจะเป็นคนค่อนข้างดื้อรั้นไม่ว่าจะถูกหรือผิดก็จะเถียงไว้ก่อน ซึ่งถ้าเธอยอมลดราวาศอกลงบ้าง' +
                            'จะทำให้เธองดงามดั่งนางพญา เพราะส่วนหนึ่งเธอเป็นคนจริงใจและจริงจังทำให้เธอเป็นที่ต้องตาต้องใจของหนุ่มทั้งหลาย หากหนุ่มราศีอื่นๆ' +
                            'จะจีบเธอละก็ขอเตือนไว้ว่าท่านต้องยอมรับความดื้อรั้นและอารมณ์แบบเด็กๆ ในบางครั้งของเธอได้ และต้องเป็นคนรักษาคำพูดด้วยเพราะเธอเป็นคนที่ถือ' +
                            'คำพูดหรือคำสัญญาอย่างมาก สาวกุมภ์ลักษณะเด่นคือมีคิ้วที่ดกดำ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'กุมภ์';
                    $('#so').text(name);
                } else if (day >= 14) {
                    document.getElementById('image').src = 'image/มีน.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มมีนเป็นคนที่ชอบทำอะไรตามใจตัวเอง จะบ้าบิ่นและซ่าจนบางครั้งน่าหมั่นไส้ จุดเด่นของหนุ่มมีนจะเป็นคนที่มีหน้าตาสดใส รักความสะอาด' +
                            'ใบหน้ามีเสน่ห์ชวนมอง รูปร่างสันทัด ผิวค่อนข้างคล้ำ หนุ่มมีนชอบที่จะสร้างสรรค์ผลงานออกมา และถ้าเขาคิดจะทำอะไรแล้วละก็จะต้องทำให้ดี ถ้าไม่ดีจะไม่ทำ' +
                            'แต่เป็นคนจู้จี้จุกจิกในเรื่องของความสะอาดมากจนสาวอายไปเลย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวมีนเป็นสาวที่สวยพิศ โดยเฉพาะริมฝีปากเป็นกระจับและดวงตาที่แวววาวสดใส สาวมีนเป็นคนเฉลียวฉลาดและมีความสามารถในการพูดมาก' +
                            'เมื่อเธอพูดทุกคนจะต้องหันมาฟังเธอแน่ สาวมีนมีอารมณ์สองแบบซึ่งถ้าไม่ได้สนิทสนมจริงๆ จะไม่มีทางรู้นิสัยของเธอ นิสัยแบบแรก คือ เธอเป็นคนร่าเริงสดใสกับชีวิต' +
                            'ใครได้อยู่ใกล้จะมีความสุข และอาจแอบอิจฉาความสุขของเธอได้ ส่วนนิสัยแบบที่สอง คือ บางทีเธอจะมีอาการเหมือนคนเป็นทุกข์ จะเก็บเงียบไว้ภายในใจคนเดียว' +
                            'ไม่บอกให้ให้รู้ เมื่อเจอสาวมีนท่านต้องระวังในการคบหากับเธอ และปรับตัวให้ทันกับอารมณ์ของเธอ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'มีน';
                    $('#so').text(name1);
                } else {}
                break;
            case '4':
                if (day <= 14) {
                    document.getElementById('image').src = 'image/มีน.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มมีนเป็นคนที่ชอบทำอะไรตามใจตัวเอง จะบ้าบิ่นและซ่าจนบางครั้งน่าหมั่นไส้ จุดเด่นของหนุ่มมีนจะเป็นคนที่มีหน้าตาสดใส รักความสะอาด' +
                            'ใบหน้ามีเสน่ห์ชวนมอง รูปร่างสันทัด ผิวค่อนข้างคล้ำ หนุ่มมีนชอบที่จะสร้างสรรค์ผลงานออกมา และถ้าเขาคิดจะทำอะไรแล้วละก็จะต้องทำให้ดี ถ้าไม่ดีจะไม่ทำ' +
                            'แต่เป็นคนจู้จี้จุกจิกในเรื่องของความสะอาดมากจนสาวอายไปเลย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวมีนเป็นสาวที่สวยพิศ โดยเฉพาะริมฝีปากเป็นกระจับและดวงตาที่แวววาวสดใส สาวมีนเป็นคนเฉลียวฉลาดและมีความสามารถในการพูดมาก' +
                            'เมื่อเธอพูดทุกคนจะต้องหันมาฟังเธอแน่ สาวมีนมีอารมณ์สองแบบซึ่งถ้าไม่ได้สนิทสนมจริงๆ จะไม่มีทางรู้นิสัยของเธอ นิสัยแบบแรก คือ เธอเป็นคนร่าเริงสดใสกับชีวิต' +
                            'ใครได้อยู่ใกล้จะมีความสุข และอาจแอบอิจฉาความสุขของเธอได้ ส่วนนิสัยแบบที่สอง คือ บางทีเธอจะมีอาการเหมือนคนเป็นทุกข์ จะเก็บเงียบไว้ภายในใจคนเดียว' +
                            'ไม่บอกให้ให้รู้ เมื่อเจอสาวมีนท่านต้องระวังในการคบหากับเธอ และปรับตัวให้ทันกับอารมณ์ของเธอ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'มีน';
                    $('#so').text(name);
                } else if (day >= 15 && day <= 30) {
                    document.getElementById('image').src = 'image/เมษ.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มเมษเป็นคนที่มีอารมณ์ร้อนแรง บวกกับความรุนแรงจะเป็นคนที่เชื่อมั่นในตัวเองซะมาก ๆ ทีเดียว มีอารมณ์ร้อนดุจภูเขาไฟระเบิด มักคิดว่าตัวเองเป็นวีรบุรุษ' +
                            'บางทีก็เยือกเย็นจนดูน่ากลัวเอามากๆเลย เป็นคนที่มุทะลุจนอาจทำลายมิตรภาพลงได้และเป็นคนที่มีเอกลักษณ์ในตัวเอง หนุ่มเมษบางคนชอบไว้ผมยาว เป็นคนง่ายๆ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวเมษหรือเรียกว่าสาวแห่งเดือนที่ร้อนระอุที่สุด สาวเมษเป็นกล้าหาญและเชื่อมั่นในการทำงานของตนเองมากๆ แต่ถ้าเธออารมณ์เสียละก็อาจจะหยุดทำมันเสียเฉยๆ' +
                            'เรียกว่าสาวราศีนี้ใช้อารมณ์เป็นใหญ่ และถ้าอารมณ์ดีจะมีพลังคอยหนุนให้ทำไม่หยุดถึงไหนถึงกัน สาวเมษเป็นคนที่ชอบวางแผนการและมองการณ์ไกล เป็นสาวช่างพูด ร่าเริง' +
                            'หัวเราะง่าย มีใบหน้าเข้ม รักสวยรักงาม ชอบแต่งเติมใส่เฟอร์นิเจอร์ในตัวแพรวพราวเลยทีเดียว';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'เมษ';
                    $('#so').text(name1);
                } else if (day >= 30) {
                    alert("ไม่มีวันที่คุณเลือก")
                }
                break;
            case '5':
                if (day <= 14) {
                    document.getElementById('image').src = 'image/เมษ.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มเมษเป็นคนที่มีอารมณ์ร้อนแรง บวกกับความรุนแรงจะเป็นคนที่เชื่อมั่นในตัวเองซะมาก ๆ ทีเดียว มีอารมณ์ร้อนดุจภูเขาไฟระเบิด มักคิดว่าตัวเองเป็นวีรบุรุษ' +
                            'บางทีก็เยือกเย็นจนดูน่ากลัวเอามากๆเลย เป็นคนที่มุทะลุจนอาจทำลายมิตรภาพลงได้และเป็นคนที่มีเอกลักษณ์ในตัวเอง หนุ่มเมษบางคนชอบไว้ผมยาว เป็นคนง่ายๆ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวเมษหรือเรียกว่าสาวแห่งเดือนที่ร้อนระอุที่สุด สาวเมษเป็นกล้าหาญและเชื่อมั่นในการทำงานของตนเองมากๆ แต่ถ้าเธออารมณ์เสียละก็อาจจะหยุดทำมันเสียเฉยๆ' +
                            'เรียกว่าสาวราศีนี้ใช้อารมณ์เป็นใหญ่ และถ้าอารมณ์ดีจะมีพลังคอยหนุนให้ทำไม่หยุดถึงไหนถึงกัน สาวเมษเป็นคนที่ชอบวางแผนการและมองการณ์ไกล เป็นสาวช่างพูด ร่าเริง' +
                            'หัวเราะง่าย มีใบหน้าเข้ม รักสวยรักงาม ชอบแต่งเติมใส่เฟอร์นิเจอร์ในตัวแพรวพราวเลยทีเดียว';
                        $('#nesi').text(nesi);
                    }
                    var name = 'เมษ';
                    $('#so').text(name);
                } else if (day >= 15) {
                    document.getElementById('image').src = 'image/พฤก.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มพฤษภหากคิดจะทำงานอะไรจะต้องมีการวางแผนการไว้ล่วงหน้า เมื่อทำจะทำอย่างมั่นใจ เป็นคนไม่ค่อยพูดแต่จะทำอย่างจริงจัง มีทิฐิสูง ขี้งอน' +
                            'ใจอ่อนและชอบช่วยเหลือคนแม้ว่าคนที่เคยทำให้เจ็บช้ำมาก่อนก็ตาม หนุ่มราศีนี้มีลักษณะท่าทางดีเป็นที่ยอมรับเชื่อถือของสังคม อ่อนหวานและอ่อนไหวในเรื่องความรักมาก' +
                            'ลักษณะของหนุ่มราศีนี้จะมีรูปร่างกำยำบึกบึนแบบพระเอกหนังบู๊ มีเสน่ห์ที่รอยยิ้มและมาดสุขุมลุ่มลึก';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวพฤษภเป็นคนที่เมื่อคิดจะทำอะไรแล้ว จะไม่สนใจใครไม่แคร์อะไรทั้งนั้น เชื่อมั่นในตัวเองเสมอไม่ว่าเรื่องนั้นจะถูกหรือผิดถ้าคิดจะทำต้องทำให้ได้' +
                            'เป็นคนหยิ่งไม่ชอบง้อคน สาวพฤษภบางคนมีคนรักมากและค่อนข้างหลายใจ เพราะเธอมีเสน่ห์ตรงคำพูดจาที่ใครก็หลงใหล ชอบแต่งตัวตามธรรมชาติแม้ใบหน้าจะไม่แต่งมาก' +
                            'เป็นคนบ้างาน สาวราศีนี้ส่วนใหญ่จะประสบความสำเร็จในเรื่องการงาน เป็นคนคิดอะไรอย่างมีเหตุมีผล รูปร่างของสาวราศีนี้ออกจะพอดี ๆ ไม่เตี้ยไม่สูงเกินไป';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'พฤษภ';
                    $('#so').text(name1);
                } else {}
                break;
            case '6':
                if (day <= 14) {
                    document.getElementById('image').src = 'image/พฤก.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มพฤษภหากคิดจะทำงานอะไรจะต้องมีการวางแผนการไว้ล่วงหน้า เมื่อทำจะทำอย่างมั่นใจ เป็นคนไม่ค่อยพูดแต่จะทำอย่างจริงจัง มีทิฐิสูง ขี้งอน' +
                            'ใจอ่อนและชอบช่วยเหลือคนแม้ว่าคนที่เคยทำให้เจ็บช้ำมาก่อนก็ตาม หนุ่มราศีนี้มีลักษณะท่าทางดีเป็นที่ยอมรับเชื่อถือของสังคม อ่อนหวานและอ่อนไหวในเรื่องความรักมาก' +
                            'ลักษณะของหนุ่มราศีนี้จะมีรูปร่างกำยำบึกบึนแบบพระเอกหนังบู๊ มีเสน่ห์ที่รอยยิ้มและมาดสุขุมลุ่มลึก';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวพฤษภเป็นคนที่เมื่อคิดจะทำอะไรแล้ว จะไม่สนใจใครไม่แคร์อะไรทั้งนั้น เชื่อมั่นในตัวเองเสมอไม่ว่าเรื่องนั้นจะถูกหรือผิดถ้าคิดจะทำต้องทำให้ได้' +
                            'เป็นคนหยิ่งไม่ชอบง้อคน สาวพฤษภบางคนมีคนรักมากและค่อนข้างหลายใจ เพราะเธอมีเสน่ห์ตรงคำพูดจาที่ใครก็หลงใหล ชอบแต่งตัวตามธรรมชาติแม้ใบหน้าจะไม่แต่งมาก' +
                            'เป็นคนบ้างาน สาวราศีนี้ส่วนใหญ่จะประสบความสำเร็จในเรื่องการงาน เป็นคนคิดอะไรอย่างมีเหตุมีผล รูปร่างของสาวราศีนี้ออกจะพอดี ๆ ไม่เตี้ยไม่สูงเกินไป';
                        $('#nesi').text(nesi);
                    }
                    var name = 'พฤษภ';
                    $('#so').text(name);
                } else if (day >= 15 && day <= 30) {
                    document.getElementById('image').src = 'image/เมถุน.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้เป็นยอดนักรักตัวยง และเป็นคนขี้เหงาต้องมีเพื่อนคุยและชอบเข้าสังคม ชอบความสนุกสนานรื่นเริงและเป็นคนเข้าใจโลก อารมณ์ดีและมีจิตใจดีอีกด้วย' +
                            'จุดเด่นคือเป็นคนมีคารมดี ไหวพริบดี รักง่ายหน่ายเร็ว เป็นหนุ่มที่ขาดคนรักขาดเพื่อนไม่ได้เลย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้เป็นคนชอบเก็บกดเรื่องราวต่าง ๆ เอาไว้เองคนเดียว ไม่ให้ใครรู้เห็นด้วย แต่บทที่เธอบ้าก็จะบ้าดีเดือดเลยทีเดียว จะเป็นสาวเปรี้ยวไม่ว่าจะอยู่ในวัยไหน' +
                            'จะไม่ยอมแก่ตามสังขาร แต่เธอมีข้อเสีย คือ ปากกับใจไม่ค่อยตรงกันเท่าไหร่ เธอชอบจินตนาการ เธอจะเป็นสาวที่มีความโดดเด่นและมีความสามารถมาก ไม่ว่าจะมารูปแบบไหน' +
                            'เธอก็สู้ไม่ถอย';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'เมถุน';
                    $('#so').text(name1);
                } else if (day >= 30) {
                    alert("ไม่มีวันที่คุณเลือก")
                }
                break;
            case '7':
                if (day <= 15) {
                    document.getElementById('image').src = 'image/เมถุน.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้เป็นยอดนักรักตัวยง และเป็นคนขี้เหงาต้องมีเพื่อนคุยและชอบเข้าสังคม ชอบความสนุกสนานรื่นเริงและเป็นคนเข้าใจโลก อารมณ์ดีและมีจิตใจดีอีกด้วย' +
                            'จุดเด่นคือเป็นคนมีคารมดี ไหวพริบดี รักง่ายหน่ายเร็ว เป็นหนุ่มที่ขาดคนรักขาดเพื่อนไม่ได้เลย';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้เป็นคนชอบเก็บกดเรื่องราวต่าง ๆ เอาไว้เองคนเดียว ไม่ให้ใครรู้เห็นด้วย แต่บทที่เธอบ้าก็จะบ้าดีเดือดเลยทีเดียว จะเป็นสาวเปรี้ยวไม่ว่าจะอยู่ในวัยไหน' +
                            'จะไม่ยอมแก่ตามสังขาร แต่เธอมีข้อเสีย คือ ปากกับใจไม่ค่อยตรงกันเท่าไหร่ เธอชอบจินตนาการ เธอจะเป็นสาวที่มีความโดดเด่นและมีความสามารถมาก ไม่ว่าจะมารูปแบบไหน' +
                            'เธอก็สู้ไม่ถอย';
                        $('#nesi').text(nesi);
                    }
                    var name = 'เมถุน';
                    $('#so').text(name);
                } else if (day >= 16) {
                    document.getElementById('image').src = 'image/กรกฏ.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้จะเป็นหนุ่มที่ขี้อาย ไม่ชอบเพ้อเจ้อ ไม่ชอบแสดงตัวเองและไม่โอ้อวดใคร เป็นคนรักธรรมชาติและชอบความสันโดษ เงียบขรึม เป็นคนขี้หึงตัวยงทีเดียว' +
                            'ถ้าอยากรู้ว่าเขารู้สึกอย่างไรให้ดูที่แววตาและคำพูดของเขาได้ หนุ่มราศีนี้จะคิดถึงวันนี้มากกว่าวันวานหรือวันข้างหน้า แต่ค่อนข้างจะเป็นคนที่คิดมากจริง ๆ  ทุกเรื่องจะเก็บมาคิดพร่ำเพรื่อ' +
                            'จนอาจกลายเป็นโรคประสาทได้ก่อนเวลาอันควร';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้มักจะหลงตัวเอง คิดว่าตัวเองเก่งตัวเองแน่กว่าใคร ชอบทำตัวเป็นจุดเด่น แม้ใครพบเห็นจะรู้สึกขัดหูขัดตาก็ตาม เธอเป็นสาวเปรี้ยว ตามแฟชั่นเสมอ' +
                            'ชอบบงการชีวิตคนอื่นทั้งที่บ้านและที่ทำงาน จุกจิก จะคิดอะไรที่เกินชาวบ้านเขาออกจะเว่อร์ไปหน่อย แววตาของสาวราศีนี้ไม่ค่อยซ่อนอารมณ์ คิดยังไงก็จะพูดออกมาอย่างนั้นเลย' +
                            'ท่าทางของเธอจะส่อความในใจพร้อมกับดวงตาคู่นั้นของเธอ เธอเป็นนักอนุรักษ์ด้วยเหมือนกันนะ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'กรกฏ';
                    $('#so').text(name1);
                } else {}
                break;
            case '8':
                if (day <= 16) {
                    document.getElementById('image').src = 'image/กรกฏ.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้จะเป็นหนุ่มที่ขี้อาย ไม่ชอบเพ้อเจ้อ ไม่ชอบแสดงตัวเองและไม่โอ้อวดใคร เป็นคนรักธรรมชาติและชอบความสันโดษ เงียบขรึม เป็นคนขี้หึงตัวยงทีเดียว' +
                            'ถ้าอยากรู้ว่าเขารู้สึกอย่างไรให้ดูที่แววตาและคำพูดของเขาได้ หนุ่มราศีนี้จะคิดถึงวันนี้มากกว่าวันวานหรือวันข้างหน้า แต่ค่อนข้างจะเป็นคนที่คิดมากจริง ๆ  ทุกเรื่องจะเก็บมาคิดพร่ำเพรื่อ' +
                            'จนอาจกลายเป็นโรคประสาทได้ก่อนเวลาอันควร';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้มักจะหลงตัวเอง คิดว่าตัวเองเก่งตัวเองแน่กว่าใคร ชอบทำตัวเป็นจุดเด่น แม้ใครพบเห็นจะรู้สึกขัดหูขัดตาก็ตาม เธอเป็นสาวเปรี้ยว ตามแฟชั่นเสมอ' +
                            'ชอบบงการชีวิตคนอื่นทั้งที่บ้านและที่ทำงาน จุกจิก จะคิดอะไรที่เกินชาวบ้านเขาออกจะเว่อร์ไปหน่อย แววตาของสาวราศีนี้ไม่ค่อยซ่อนอารมณ์ คิดยังไงก็จะพูดออกมาอย่างนั้นเลย' +
                            'ท่าทางของเธอจะส่อความในใจพร้อมกับดวงตาคู่นั้นของเธอ เธอเป็นนักอนุรักษ์ด้วยเหมือนกันนะ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'กรกฏ';
                    $('#so').text(name);
                } else if (day >= 17) {
                    document.getElementById('image').src = 'image/สิง.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้ผิวออกจะค่อนข้างดำบ้าง มีลักษณะมาดแมนเต็มตัว มีความจริงใจ จะแสดงออกถึงความเป็นผู้นำ ชอบดูแลปกป้องคุ้มครองคนอื่น ๆ สายตากับใจจะตรงกัน' +
                            'มีความแข็งแกร่งแต่มีอารมณ์อ่อนไหวขี้สงสารคน บางครั้งมีทิฐิ เป็นคนที่ต่อสู้กับชีวิตและอุปสรรคของตัวเองได้โดยไม่เกรงกลัวกับความผิดหวังหรือกลัวอนาคตข้างหน้า' +
                            'หนุ่มราศีนี้จะมีลักษณะรูปร่างค่อนข้างสูง คิ้วดกดำเข้ม มีวงแขนกล้ามใหญ่จริงๆ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้เมื่อช่วงวัยรุ่นจะมีรูปร่างอ้อนแอ้น แต่เมื่อสูงวัยขึ้นจะมีรูปร่างอวบค่อนข้างอ้วน เป็นสาวช่างฝัน เธอชอบงานที่ต้องใช้สมอง เธอจะทำได้ดีและเก่งมาก' +
                            'สาวราศีนี้เหมาะกับเป็นดารานักแสดง มีวาจาที่เด่นพูดจามีคารมเก่งจริงๆ เธอเป็นสาวที่เจ้าชู้ไม่ใช่เล่นทีเดียวล่ะ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'สิงห์';
                    $('#so').text(name1);
                } else {}
                break;
            case '9':
                if (day <= 15) {
                    document.getElementById('image').src = 'image/สิง.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้ผิวออกจะค่อนข้างดำบ้าง มีลักษณะมาดแมนเต็มตัว มีความจริงใจ จะแสดงออกถึงความเป็นผู้นำ ชอบดูแลปกป้องคุ้มครองคนอื่น ๆ สายตากับใจจะตรงกัน' +
                            'มีความแข็งแกร่งแต่มีอารมณ์อ่อนไหวขี้สงสารคน บางครั้งมีทิฐิ เป็นคนที่ต่อสู้กับชีวิตและอุปสรรคของตัวเองได้โดยไม่เกรงกลัวกับความผิดหวังหรือกลัวอนาคตข้างหน้า' +
                            'หนุ่มราศีนี้จะมีลักษณะรูปร่างค่อนข้างสูง คิ้วดกดำเข้ม มีวงแขนกล้ามใหญ่จริงๆ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้เมื่อช่วงวัยรุ่นจะมีรูปร่างอ้อนแอ้น แต่เมื่อสูงวัยขึ้นจะมีรูปร่างอวบค่อนข้างอ้วน เป็นสาวช่างฝัน เธอชอบงานที่ต้องใช้สมอง เธอจะทำได้ดีและเก่งมาก' +
                            'สาวราศีนี้เหมาะกับเป็นดารานักแสดง มีวาจาที่เด่นพูดจามีคารมเก่งจริงๆ เธอเป็นสาวที่เจ้าชู้ไม่ใช่เล่นทีเดียวล่ะ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'สิงห์';
                    $('#so').text(name);
                } else if (day >= 16 && day <= 30) {
                    document.getElementById('image').src = 'image/กันย์.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้เป็นหนุ่มที่ช่างจดช่างจำและออกจะเพ้อฝันพอสมควร มีอารมณ์รุนแรง และเปลี่ยนแปลงง่าย ออกจะขี้หึงขี้หวง ชอบแสดงความเป็นเจ้าของได้อย่างเฉียบขาด' +
                            'สามารถตัดขาดรักได้อย่างรวดเร็ว เงียบขรึมไม่ช่างพูด เพราะกลัวพูดแล้วล้มเหลวไม่ได้ดั่งที่ต้องการ แต่ถ้าเขาคิดที่จะวิพากษ์วิจารณ์คนอื่นละก็จะวิจารณ์ชาวบ้านได้อย่างทะลุปรุโปร่งทีเดียว' +
                            'แต่บางทีลืมที่จะมองดูตัวเองก่อน หนุ่มราศีนี้หากต้องเสียใจหรือผิดหวังจะเห็นได้อย่างชัดเจน เป็นคนรักสวยรักงามชอบแต่งตัวให้สะอาด มีความสง่างามในตัวเอง';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะมีดวงตาที่ทรงเสน่ห์ สวยเฉียบคม สาวรราศีนี้จะประสบความสำเร็จก็เพราะพูดจาอ่อนหวาน รู้จักพูดจา มีอารมณ์เย้ายวนพร้อมมีหัวใจแห่งรักหลากหลาย' +
                            'แม้จะอกหักอยู่บ่อย ๆ ก็ตาม แต่ในบั้นปลายอาจไร้คู่ และเพื่อนต่างเพศที่แท้จริงเพราะความเจ้าชู้ของสาวเจ้านั่นเองล่ะ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'กันย์';
                    $('#so').text(name1);
                } else if (day >= 30) {
                    alert("ไม่มีวันที่คุณเลือก")
                }
                break;
            case '10':
                if (day <= 16) {
                    document.getElementById('image').src = 'image/กันย์.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้เป็นหนุ่มที่ช่างจดช่างจำและออกจะเพ้อฝันพอสมควร มีอารมณ์รุนแรง และเปลี่ยนแปลงง่าย ออกจะขี้หึงขี้หวง ชอบแสดงความเป็นเจ้าของได้อย่างเฉียบขาด' +
                            'สามารถตัดขาดรักได้อย่างรวดเร็ว เงียบขรึมไม่ช่างพูด เพราะกลัวพูดแล้วล้มเหลวไม่ได้ดั่งที่ต้องการ แต่ถ้าเขาคิดที่จะวิพากษ์วิจารณ์คนอื่นละก็จะวิจารณ์ชาวบ้านได้อย่างทะลุปรุโปร่งทีเดียว' +
                            'แต่บางทีลืมที่จะมองดูตัวเองก่อน หนุ่มราศีนี้หากต้องเสียใจหรือผิดหวังจะเห็นได้อย่างชัดเจน เป็นคนรักสวยรักงามชอบแต่งตัวให้สะอาด มีความสง่างามในตัวเอง';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะมีดวงตาที่ทรงเสน่ห์ สวยเฉียบคม สาวรราศีนี้จะประสบความสำเร็จก็เพราะพูดจาอ่อนหวาน รู้จักพูดจา มีอารมณ์เย้ายวนพร้อมมีหัวใจแห่งรักหลากหลาย' +
                            'แม้จะอกหักอยู่บ่อย ๆ ก็ตาม แต่ในบั้นปลายอาจไร้คู่ และเพื่อนต่างเพศที่แท้จริงเพราะความเจ้าชู้ของสาวเจ้านั่นเองล่ะ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'กันย์';
                    $('#so').text(name);
                } else if (day >= 17) {
                    document.getElementById('image').src = 'image/ตุล.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้จะเป็นคนเรียบๆ เงียบขรึม รักความยุติธรรม และความมั่นคงของชีวิตดุจกับตาชั่งทั้งในด้านการงานและเรื่องส่วนตัว ชอบเก็บตัวอยู่คนเดียวไม่ชอบวุ่นวายกับใคร' +
                            'มีอารมณ์อ่อนนุ่ม แต่สายตาออกจะดุดัน เอาจริง น่ากลัวทีเดียว รูปร่างของหนุ่มราศีนี้ออกจะสูงโปร่ง เป็นคนจุกจิกในเรื่องของความสะอาด ความเป็นระเบียบ พิถีพิถันมากกว่าสาวๆ' +
                            'บางคนเสียอีกล่ะ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวตุลย์เป็นสาวที่ร้อนแรง ทำให้ดวงตาของเธอจึงเปี่ยมไปด้วยพลังและความมั่นคง โดยเฉพาะในคำพูดที่เด็ดขาดและเฉียบคม มีคารมที่กินขาด ทำให้คนฟังต้องตบมือให้เธอทีเดียว' +
                            'เป็นคนหนักแน่น พูดในเรื่องที่จริงจังไม่พูดเล่นหรือพูดมากจนรำคาญ ลักษณะเด่นของสาวราศีนี้จะมีคิ้วโก่งเป็นวงธนูเข้ม รูปหน้ายาวสวยลงตัว รูปร่างค่อนข้างสูง เป็นคนที่มีความสามารถและยุติธรรม' +
                            'เมื่อทำงานสิ่งใดก็ตามจะน่าเชื่อถือและชอบท้าทายกับคนที่ดูถูกเสมอ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'ตุลย์';
                    $('#so').text(name1);
                } else {}
                break;
            case '11':
                if (day <= 15) {
                    document.getElementById('image').src = 'image/ตุล.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้จะเป็นคนเรียบๆ เงียบขรึม รักความยุติธรรม และความมั่นคงของชีวิตดุจกับตาชั่งทั้งในด้านการงานและเรื่องส่วนตัว ชอบเก็บตัวอยู่คนเดียวไม่ชอบวุ่นวายกับใคร' +
                            'มีอารมณ์อ่อนนุ่ม แต่สายตาออกจะดุดัน เอาจริง น่ากลัวทีเดียว รูปร่างของหนุ่มราศีนี้ออกจะสูงโปร่ง เป็นคนจุกจิกในเรื่องของความสะอาด ความเป็นระเบียบ พิถีพิถันมากกว่าสาวๆ' +
                            'บางคนเสียอีกล่ะ';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวตุลย์เป็นสาวที่ร้อนแรง ทำให้ดวงตาของเธอจึงเปี่ยมไปด้วยพลังและความมั่นคง โดยเฉพาะในคำพูดที่เด็ดขาดและเฉียบคม มีคารมที่กินขาด ทำให้คนฟังต้องตบมือให้เธอทีเดียว' +
                            'เป็นคนหนักแน่น พูดในเรื่องที่จริงจังไม่พูดเล่นหรือพูดมากจนรำคาญ ลักษณะเด่นของสาวราศีนี้จะมีคิ้วโก่งเป็นวงธนูเข้ม รูปหน้ายาวสวยลงตัว รูปร่างค่อนข้างสูง เป็นคนที่มีความสามารถและยุติธรรม' +
                            'เมื่อทำงานสิ่งใดก็ตามจะน่าเชื่อถือและชอบท้าทายกับคนที่ดูถูกเสมอ';
                        $('#nesi').text(nesi);
                    }
                    var name = 'ตุลย์';
                    $('#so').text(name);
                } else if (day >= 16 && day <= 30) {
                    document.getElementById('image').src = 'image/พิจิก.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มพิจิกเป็นยอดนักสู้และนักอดทนตัวยง สู้ชีวิตมาตลอดแต่ไม่ใช่ว่าจะลำบากตลอดชีวิต เป็นคนช่างพูดและมีวาทศิลป์ดี หน้าตาของหนุ่มราศีนี้ออกจะมีความหล่อมากหน่อย' +
                            'มีดวงตาซุกซนแสนหวาน นิสัยกะล่อนหาตัวจับยากแต่มีความจริงใจผสมอยู่ หนุ่มราศีนี้จะมีอารมณ์ด้านเซ็กส์มาก ชอบพูดเรื่องเกี่ยวกับเพศและผิวค่อนข้างดำแดง มีเสน่ห์' +
                            'กระชากใจสาวมาครองได้อย่างสบาย หากเขาต้องการสาวใดแล้วละก็ไม่มีพลาดแน่';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะไม่เหมือนสาวราศีอื่นก็ตรงที่มีพลังลึกลับบนใบหน้า มีความสวยและเสน่ห์รัดรึงหนุ่มให้หลงใหลเมื่อได้สบตาเธอ สาวราศีนี้จะมีอารมณ์หลากหลาย' +
                            'แต่ที่แน่ๆ คือ ร้อนแรง แต่เธอชอบที่จะเก็บซ่อนไว้ในใจ แต่ยามใดที่ระเบิดออกมาละก็ รับรองว่าสามารถเผาผลาญจิตใจคนใกล้ชิดได้เป็นจุลทุกขณะ สาวราศีนี้ออกจะสวยอย่างธรรมชาติ' +
                            'แม้จะไม่ได้แต่งเติมเลยก็ตาม รูปร่างมักเพรียว ระหง คล่องแคล่วว่องไว มีความมั่นใจในตัวเองค่อนข้างสูงมาก แต่ก็อ่อนไหวได้ง่ายเหมือนกัน';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'พิจิก';
                    $('#so').text(name1);
                } else if (day >= 30) {
                    alert("ไม่มีวันที่คุณเลือก")
                }
                break;
            case '12':
                if (day <= 15) {
                    document.getElementById('image').src = 'image/พิจิก.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มพิจิกเป็นยอดนักสู้และนักอดทนตัวยง สู้ชีวิตมาตลอดแต่ไม่ใช่ว่าจะลำบากตลอดชีวิต เป็นคนช่างพูดและมีวาทศิลป์ดี หน้าตาของหนุ่มราศีนี้ออกจะมีความหล่อมากหน่อย' +
                            'มีดวงตาซุกซนแสนหวาน นิสัยกะล่อนหาตัวจับยากแต่มีความจริงใจผสมอยู่ หนุ่มราศีนี้จะมีอารมณ์ด้านเซ็กส์มาก ชอบพูดเรื่องเกี่ยวกับเพศและผิวค่อนข้างดำแดง มีเสน่ห์' +
                            'กระชากใจสาวมาครองได้อย่างสบาย หากเขาต้องการสาวใดแล้วละก็ไม่มีพลาดแน่';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวราศีนี้จะไม่เหมือนสาวราศีอื่นก็ตรงที่มีพลังลึกลับบนใบหน้า มีความสวยและเสน่ห์รัดรึงหนุ่มให้หลงใหลเมื่อได้สบตาเธอ สาวราศีนี้จะมีอารมณ์หลากหลาย' +
                            'แต่ที่แน่ๆ คือ ร้อนแรง แต่เธอชอบที่จะเก็บซ่อนไว้ในใจ แต่ยามใดที่ระเบิดออกมาละก็ รับรองว่าสามารถเผาผลาญจิตใจคนใกล้ชิดได้เป็นจุลทุกขณะ สาวราศีนี้ออกจะสวยอย่างธรรมชาติ' +
                            'แม้จะไม่ได้แต่งเติมเลยก็ตาม รูปร่างมักเพรียว ระหง คล่องแคล่วว่องไว มีความมั่นใจในตัวเองค่อนข้างสูงมาก แต่ก็อ่อนไหวได้ง่ายเหมือนกัน';
                        $('#nesi').text(nesi);
                    }
                    var name = 'พิจิก';
                    $('#so').text(name);
                } else if (day >= 16) {
                    document.getElementById('image').src = 'image/ธนู.jpg';
                    if (sex != 0 && sex != 2) {
                        var nesi = 'หนุ่มราศีนี้มักเป็นคนที่ชอบวางมาดแก่เกินวัย และวางอนาคตไกลเกินเอื้อมมือถึง เป็นคนเครียดง่ายแต่ก็หายเร็ว' +
                            'พูดจาหวานหู ไม่ชอบคุยโม้โอ้อวดใคร รูปร่างจะไปในทางสูง มักมีงานที่มีความมั่นคงแน่นอน เป็นคนทำงานเก่ง เป็นนักวางแผนที่ดี' +
                            'สาว ๆ ใดที่ได้หนุ่มราศีนี้เป็นคู่ครองครอบครัวจะมั่นคงมั่นใจในหนุ่มราศีนี้เขาได้';
                        $('#nesi').text(nesi);
                    } else if (sex != 0 && sex != 1) {
                        var nesi = 'สาวธนูจะมีอารมณ์ที่สดชื่น ร่าเริงสดใสอยู่ตลอดเวลา มักชอบทำอะไรแบบหลุดโลก บทดีก็ดีใจหาย จะทำงานเนี้ยบมาก' +
                            'เธอสามารถแบ่งเวลาจัดสรรสำหรับเรื่องงานและความสนุกได้ดี เธอมีความสวยที่ผสมกันหลายยุคสมัย เรียกว่าเก่าก็ดูดี ใหม่ก็ดูเฉียบจริงๆ';
                        $('#nesi').text(nesi);
                    }
                    var name1 = 'ธนู';
                    $('#so').text(name1);
                } else {}
                break;
        }

    });
});
