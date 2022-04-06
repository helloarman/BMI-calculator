function bmiCalculation(){

    var _weight = parseInt(document.getElementById('weight').value);
    var _height_f = parseInt(document.getElementById('height-f').value);
    var _height_i = parseInt(document.getElementById('height-i').value);

    var _bmi = _weight/((((_height_f*12)+_height_i)*0.0254)*(((_height_f*12)+_height_i)*0.0254));

    _bmi = _bmi.toFixed(2);

    document.getElementById("show_bmi").innerHTML=_bmi;

    if(_bmi<18.5){
        document.getElementById("status_bmi").innerHTML="Underweight";
        document.getElementById("show_color").classList.add('color_y');
    }else if(_bmi>=18.5 && _bmi<=25){
        document.getElementById("status_bmi").innerHTML="Notmal Weight";
        document.getElementById("show_color").classList.add('color_dg');
    }else if(_bmi>=25 && _bmi<=30){
        document.getElementById("status_bmi").innerHTML="Overweight";
        document.getElementById("show_color").classList.add('color_g');
    }else if(_bmi>30){
        document.getElementById("status_bmi").innerHTML="Obese";
        document.getElementById("show_color").classList.add('color_r');
    }else{
        document.getElementById("status_bmi").innerHTML="Wrong Input";
        document.getElementById("show_color").classList.add('output_r');
    }

    document.getElementById("show").classList.add('output_show');
};

function reload(){
    location.reload();
}
