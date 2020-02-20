
$(document).ready(() => {
    
    $("a[href='#next']").attr("id", "myBtn")

    $('#choose-field').change(() => {
        if ($('#field').val() == 'Thương Mại Điện Tử (E-commerce)') {
            $('#choose-type-fin').css({'display': 'none'})
            $('#choose-type-ecom').css({'display': 'block'})
        } else {
            $('#choose-type-ecom').css({'display': 'none'})
            $('#choose-type-fin').css({'display': 'block'})
        }
    })

    $('#choose-type-fin').change(() => {
        if ($('#type-fin').val() == 'Chatbot Messenger') {
            $('#fin-mess').css({'display': 'block'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Chatbot Telegram') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'block'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Sàn Giao Dịch') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'block'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Ví Điện Tử') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'block'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Hệ Thống Đa Cấp') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'block'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Tiện Ích Mở Rộng Chrome') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'block'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Market Maker') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'block'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Robot Giao Dịch Thuật Toán') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'block'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Ứng Dụng Phi Tập trung') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'block'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Phần Mềm Kế Toán Doanh Nghiệp') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'block'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-fin').val() == 'Cổng Thanh Toán') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'block'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }
    })

    $('#choose-type-ecom').change(() => {
        if ($('#type-ecom').val() == 'Chatbot Messenger') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'block'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-ecom').val() == 'Web Thương Mại Điện Tử') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'block'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-ecom').val() == 'Hệ Thống Đa Cấp') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'block'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-ecom').val() == 'Tiện Ích Mở Rộng Chrome') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'block'})
            $('#ecom-crm').css({'display': 'none'})
        }

        if ($('#type-ecom').val() == 'Phần Mềm CRM') {
            $('#fin-mess').css({'display': 'none'})
            $('#fin-tele').css({'display': 'none'})
            $('#fin-exchange').css({'display': 'none'})
            $('#fin-wallet').css({'display': 'none'})
            $('#fin-mlm').css({'display': 'none'})
            $('#fin-extension').css({'display': 'none'})
            $('#fin-marker').css({'display': 'none'})
            $('#fin-robot').css({'display': 'none'})
            $('#fin-dapp').css({'display': 'none'})
            $('#fin-acc').css({'display': 'none'})
            $('#fin-pay').css({'display': 'none'})

            $('#ecom-mess').css({'display': 'none'})
            $('#ecom-store').css({'display': 'none'})
            $('#ecom-mlm').css({'display': 'none'})
            $('#ecom-extension').css({'display': 'none'})
            $('#ecom-crm').css({'display': 'block'})
        }
    })
})