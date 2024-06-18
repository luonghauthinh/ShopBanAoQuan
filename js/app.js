document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnDatHang').addEventListener('click', function () {
        // Validate form fields
        const requiredFields = ['kh_ten', 'kh_gioitinh', 'kh_diachi', 'kh_dienthoai', 'kh_email', 'kh_ngaysinh', 'kh_cmnd'];
        let isValid = true;

        requiredFields.forEach(function (fieldId) {
            const field = document.getElementById(fieldId);
            if (field.value.trim() === '') {
                field.classList.add('is-invalid');
                isValid = false;
            } else {
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
            }
        });

        if (isValid) {
            $('#exampleModal').modal('show');
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
        window.location.href = 'index.html';
    });
});
