$(document).ready(function () {
    //TODO: DB에서 data(리스트 목록) 불러오기

    //할 일 추가
    $(document).on('click', '.btn_add_todo', function () {
        var $target = $('input[name="add_todo"]');
        var $todo = $target.val();
        var $color = $target.css('color');
        var ele = '';
        ele += '<li class="todo_item">';
        ele += '    <span class="todo_check">✓</span>';
        ele += '    <span class="todo_text" style="color:' + $color + '">' + $todo + '</span>';
        ele += '    <span class="todo_remove">×</span>';
        ele += '</li>';

        if ($target.val() !== '') {
            $target.val('');
            $('.todo_list').prepend(ele);
        }

        if ($('.todo_item').length > 0) {
            $('.todo_empty').remove();
        }

        //TODO: DB에 data 추가
    });

    //완료 처리
    $(document).on('click', '.todo_text', function () {
        var $thisP = $(this).parent();

        $thisP.toggleClass('done');

        //TODO: DB에 data 완료 처리
    });

    //할 일 삭제
    $(document).on('click', '.todo_remove', function () {
        var $thisP = $(this).parent();

        $thisP.fadeOut(200, function () {
            $thisP.remove();

            if ($('.todo_item').length == 0) {
                $('.todo_list').append('<li class="todo_empty">할 일을 작성해보세요.</li>');
            }
        });

        //TODO: DB에서 data 삭제
    });

    //(UI) 글자 색상 선택
    $(document).on('click', '.sel_color', function () {
        var $this = $(this);
        var $color = $this.css('background-color');

        $this.addClass('on').siblings().removeClass('on');
        $('.add_todo input').focus().css('color', $color);
    });
}); //_ready
