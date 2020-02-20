
(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Finish',
            current: ''
        },
        titleTemplate: '<h3 class="title">#title#</h3>',
        onFinished: function(event, currentIndex) {
            event.preventDefault();
            $.post('/price', {
                mota: $('#bang-tn').html(),
                pt: $('#bang-bs').html(),
                info: $('#end').html()
            },function(ketqua) {
                $.notify("Gửi Báo Giá Thành Công\nChúng tôi sẽ sớm xử lý và phản hồi quý khách\nXin Cám Ơn Quý Khách", {
                    className: "success",
                    arrowSize: 10,
                    globalPosition: 'bottom right',
                    gap: 10
                });
            });
        },
        onStepChanged: function(event, currentIndex) {
            if (currentIndex == 5) {
                // var favorite = [];
                // $.each($("input[class='custom-control-input']:checked"), function(){
                //     favorite.push($(this).data("sp"));
                // });
                // alert(favorite.join(", "));

                const cover = (ss) =>{
                    var tam = ss
                    var s =''
                    while (tam >= 1000) {
                        if (tam % 1000 == 0) {
                            s= ',000'+s
                            tam = tam /1000
                        } else {
                            s= ',' + String(tam % 1000) + s
                            tam = tam /1000
                        }
                    }
                    s = String(~~tam)+s
                    return s
                }

                var table = s => `
                <h5>Chi Tiết Tính Năng Sản Phẩm</h5>
                <div class="container pt-5">
                    <table class="table  table-sm">
                        <thead class="table-info">
                            <tr>
                                <th>Tính Năng</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${s}
                        </tbody>
                    </table>
                </div>
                `
                var t = ''
                var tong = 0
                $.each($("input[class='custom-control-input']:checked"), function(){
                    var p = $(this).data("sp")
                    tong=tong + Number(p.g.split(',').join(''))
                    t= t + `<tr> <td>${p.tn}</td> <td>${p.g}</td> </tr>`
                })
                t= t+ `<tr> <td style="color:red;"><strong>TỔNG</strong></td> <td style="color:red;">${cover(tong)}</td> </tr>`
                $('#bang-tn').html(table(t))

                const users = s => {
                    switch (s){
                        case '500 ~ 1,000': return {print: '+ 0%', cal: 0}
                        case '1,000 ~ 5,000': return {print: '+ 1%', cal: 1}
                        case '5,000 ~ 10,000': return {print: '+ 2%', cal: 2}
                        case '10,000 ~ 50,000': return {print: '+ 3%', cal: 3}
                        case '50,000 ~ 100,000': return {print: '+ 5%', cal: 5}
                        case '100,000 ~ 500,000': return {print: '+ 10%', cal: 10}
                        case '500,000 ~ 1000,000': return {print: '+ 15%', cal: 15}
                    }
                }

                const period = s => {
                    switch (s){
                        case '1 Tháng': return {print: '+ 0%', cal: 0}
                        case '3 Tháng': return {print: '+ 2%', cal: 2}
                        case '6 Tháng': return {print: '+ 3%', cal: 3}
                        case '9 Tháng': return {print: '+ 4%', cal: 4}
                        case '12 Tháng': return {print: '+ 5%', cal: 5}
                        case '24 Tháng': return {print: '+ 8%', cal: 8}
                        case '36 Tháng': return {print: '+ 11%', cal: 11}
                    }
                }

                const provided = s => {
                    switch (s){
                        case 'Tự Chuẩn Bị & Cung Cấp': return {print: '+ 0%', cal: 0}
                        case 'Yêu Cầu Tulpo Thiết Kế Nội Dung': return {print: '+ 15%', cal: 15}
                    }
                }

                const round = s => {
                    switch (s){
                        case '40% - 30% - 30% (3 Đợt)': return {print: '- 0%', cal: 0}
                        case '70% - 25% (2 Đợt | Chiết khấu 5%)': return {print: '- 5%', cal: -5}
                        case '90% (1 Đợt | Chiết khấu 10%)': return {print: '- 10%', cal: -10}
                    }
                }

                var per = users($('#users').val()).cal + period($('#period').val()).cal + provided($('#provided').val()).cal + round($('#round').val()).cal

                var printPer
                if (per >= 0) {
                    printPer = `+ ${per}%`
                } else {
                    printPer = `- ${-per}%`
                }

                var two = `
                <h5>Các Phương Thức Tùy Chọn</h5>
                <div class="container pt-5">
                <table class="table  table-sm">
                    <thead class="table-info">
                        <tr>
                            <th>Hạng Mục</th>
                            <th>Lựa Chọn</th>
                            <th>Thông Số</th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                    <td>Lượng người dùng</td>
                    <td>${$('#users').val()}</td>
                    <td>${users($('#users').val()).print}</td>
                    </tr>

                    <tr>
                    <td>Kỳ hạn vận hành</td>
                    <td>${$('#period').val()}</td>
                    <td>${period($('#period').val()).print}</td>
                    </tr>

                    <tr>
                    <td>Nội dung chuẩn</td>
                    <td>${$('#provided').val()}</td>
                    <td>${provided($('#provided').val()).print}</td>
                    </tr>

                    <tr>
                    <td>Phương thức thanh toán</td>
                    <td>${$('#round').val()}</td>
                    <td>${round($('#round').val()).print}</td>
                    </tr>

                    <tr>
                    <td style="color:red;"><strong>TỔNG</strong></td>
                    <td></td>
                    <td style="color:red;">${printPer}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                `
                $('#bang-bs').html(two)

                const timemax = (field, type) => {
                    if (field == 'Tài Chính (Fintech)'){
                        switch (type) {
                            case 'Chatbot Messenger': return '7 Ngày'
                            case 'Chatbot Telegram': return '5 Ngày'
                            case 'Sàn Giao Dịch': return '3 Tháng'
                            case 'Ví Điện Tử': return '1 Tháng'
                            case 'Hệ Thống Đa Cấp': return '1 Tháng'
                            case 'Tiện Ích Mở Rộng Chrome': return '15 Ngày'
                            case 'Market Maker': return '1 Tháng'
                            case 'Robot Giao Dịch Thuật Toán': return '7 Ngày' 
                            case 'Ứng Dụng Phi Tập trung': return '1 Tháng'
                            case 'Phần Mềm Kế Toán Doanh Nghiệp': return '1 Tháng'
                            case 'Cổng Thanh Toán': return '5 Ngày'
                        }
                    }
                    if (field == 'Thương Mại Điện Tử (E-commerce)'){
                        switch (type) {
                            case 'Chatbot Messenger': return '10 Ngày'
                            case 'Web Thương Mại Điện Tử': return '2 Tháng'
                            case 'Hệ Thống Đa Cấp': return '1 Tháng'
                            case 'Tiện Ích Mở Rộng Chrome': return '15 Ngày'
                            case 'Phần Mềm CRM': return '2 Tháng'
                        }
                    }
                }

                const sp = ($('#field').val() == 'Thương Mại Điện Tử (E-commerce)') ? $('#type-ecom').val() : $('#type-fin').val()
                const final =`
                <p>Tên Khách Hàng: ${$('#your_name').val()}</p>
                <p>Số Điện Thoại: ${$('#your_phone').val()}</p>
                <p>Lĩnh Vực: ${$('#field').val()}</P>
                <p>Loại Sản Phẩm: ${sp}</P>
                <p>Chi Phí Dự Kiến: ${cover(tong * (100 + per) /100)}</P>
                <p>Thời Gian Tối Đa Dự Kiến: ${timemax($('#field').val(), sp)}</P>
                <p>Frontend: Boostrap, React</P>
                <p>Backend: Nodejs, Go</P>
                `
                $('#end').html(final)
            }
        },
    });
})(jQuery);
