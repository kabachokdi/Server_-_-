
        function addNumbers() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result = num1 + num2;
            document.getElementById("result").innerText = "Result: " + result;
        }
        // Определение аналогичных функций для вычитания, умножения и деления
        function vychit() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result = num1 - num2;
            document.getElementById("result").innerText = "Result: " + result;
        }
                function umnoj() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            var result = num1 * num2;
            document.getElementById("result").innerText = "Result: " + result;
        }
                function razd() {
            var num1 = parseFloat(document.getElementById("num1").value);
            var num2 = parseFloat(document.getElementById("num2").value);
            if (num2 == 0) {alert("так нельзя");
                return;
            }
            var result = num1 / num2;
            document.getElementById("result").innerText = "Result: " + result;
        }