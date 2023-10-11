const angka1 = document.getElementById('angka1')
       const angka2 = document.getElementById('angka2')
       const operator = document.getElementById('operator')
       const hasil = document.getElementById('hasil')
       const submit = document.getElementById('submit')

        submit.addEventListener('click', function(){
            const val1 = parseFloat(angka1.value);
            const val2 = parseFloat(angka2.value);

            const op = operator.value;
            let result = 0;

            switch (op) {
                case 'tambah':
                    result = val1 + val2;
                    break;
                case 'kurang':
                    result = val1 - val2;
                    break;
                case 'kali':
                    result = val1 * val2;
                    break;
                case 'bagi':
                    if (val2 == 0) {
                        result = 0;
                    } else {
                        result = val1 / val2;
                    }
                    break;
                default:
                    result = 'Operasi tidak valid';
            }
            hasil.innerText = result;
        })
