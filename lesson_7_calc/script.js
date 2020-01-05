nolli = "Cannot divide by zero";
var temp = ''; //результаты предыдущих вычислений
var prev_op = ''; //предыдущий оператор
var new_num = 0; //0 - начало нового числа; 1 - старое
var tempNum=0; //0 - не выполнять оператор для кнопок; 1 - выполнять
var lastOp=''; //последняя операция перед нажатием "="

function init() {
    r1 = document.calc.res.defaultValue;
    
}


function cin_num(x) {
    r = document.calc.res.value;
    if (!new_num) {
        document.calc.res.value = x;
        new_num = 1;
    }
    else {
        if(r == '0'){
            document.calc.res.value = x;
            return;
        }
        document.calc.res.value += x;
    }
}


function plus_minus() {
    document.calc.res.value *= -1;
}


function one_x(x) {
    var v2 = eval(x.value);
    if (!v2) {
        x.value = nolli;
        obnulenie();
    }
    else {
        x.value = 1/x.value;
		tempNum=1;
		new_num = 0;
    }
}

function operators(result, op) {
    if (new_num || tempNum) {
        var v1 = eval(result.value);
        if (prev_op == '/' && !v1)
            {
                result.value = nolli;
                obnulenie();
                return;
            }
        temp = eval(temp+prev_op+v1);
        result.value = temp;
        new_num = 0;
		tempNum=0;
    }
    temp = result.value;
    prev_op = op;    
}

function CE() {
    document.calc.res.value = r1;
    new_num = 0;
	tempNum=0;

}

function C() {
    CE();
    temp = "";
    prev_op = '';
	lastOp='';
}

function ravno(x) {
    if (new_num || tempNum) {
        var v1 = eval(x.value);
        if (prev_op == '/' && !v1){
            x.value = nolli;
            obnulenie();
            return;
        }
        lastOp=prev_op+v1;
        if (prev_op == '') return;
        x.value = eval(temp+lastOp);
        obnulenie();
    }
	else {
		if (prev_op){
		lastOp=prev_op+x.value;
		prev_op='';
		}
	x.value = eval(x.value+lastOp);
	}
}

function koreni(x) {
    if (x.value >= 0) {
        x.value = Math.sqrt(x.value);
		new_num = 0;
		tempNum=1;
	}
    else {
        x.value="Invalid input";
        obnulenie();
        return;
    }
	 
}

function kvadrat(x1) {
        x1.value *= x1.value;
		new_num = 0;
		tempNum=1;
	}
 
function tochka(x2) {
	var tchk=x2.value;
 if (tchk.indexOf('.')<0 && new_num)  {
    x2.value += '.';
	return;
  }
  if (!new_num) {
  x2.value = '0.';
  new_num = 1;
 }
}
	 
function BS(x3) {
    v3 = x3.value;
	l3 = v3.length;
	if (l3>1){
	new3=v3.substr(0,l3-1);
	}
	else {
	new3 = '0';
	new_num = 0;
	tempNum=1;
	}
	x3.value=new3;
		
}

function procent(x) {
    if (lastOp || prev_op) {
        if(prev_op == '*' || prev_op == '/') {
            x.value /= 100;
        }
        else {
        x.value = temp / 100 * x.value;
        }
    }
    else {
        x.value = document.calc.res.defaultValue;
    }
}

function obnulenie()
{
    temp = '';
    prev_op = '';
    new_num = 0;
	tempNum=0;
}