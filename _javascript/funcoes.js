<script>
function calc_total() {
    
    const valores = {
        motobizz:60.00, motocg:70.00, motobross:80.00
    }

    const modelos = document.getElementById('c-mod');
    const total = document.getElementById('c-total');
    const dias = document.getElementById('c-qtd').value;

    const resultado = valores[modelos.options[modelos.selectedIndex].value] * dias;
    total.value = resultado;

}
</script>