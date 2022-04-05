function ageCalculation(){
    var _today = new Date();

    var _day = _today.getDate();
    var _month = _today.getMonth()+1;
    var _year = _today.getFullYear();

    var _b_day = document.getElementById('b_day').value;
    var _b_month = document.getElementById('b_month').value;
    var _b_year = document.getElementById('b_year').value;

    if(_day<_b_day){
        final_day = ((_day+30)-_b_day);
        final_month = _month - 1;
        if(final_month<_b_month){
            final_month = ((final_month+12)-_b_month);
            final_year = ((_year - 1)-_b_year);
        }else{
            final_month = (final_month-_b_month);
            final_year = _year-_b_year;
        }
    }else if(_month<_b_month){
        final_day = (_day-_b_day);
        final_month = ((_month+12)-_b_month);
        final_year = ((_year - 1)-_b_year);
    }else{
        final_day = _day-_b_day;
        final_month = _month-_b_month;
        final_year = _year-_b_year;
    }

    document.getElementById("out_day").innerHTML=final_day+1;
    document.getElementById("out_month").innerHTML=final_month;
    document.getElementById("out_year").innerHTML=final_year;

    document.getElementById("show").classList.add('output_show');
}

function reload(){
    location.reload();
}
